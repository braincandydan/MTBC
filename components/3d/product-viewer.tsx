'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ErrorBoundary } from '@/components/error-boundary';
import { ModelLoader } from './model-loader';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import * as THREE from 'three';
import Image from 'next/image';

interface ProductViewerProps {
  modelUrl: string | null;
  fallbackImage?: string;
  className?: string;
}

function Scene({ 
  modelUrl
}: { 
  modelUrl: string;
}) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ModelLoader url={modelUrl}>
          {(scene) => {
            // Center and scale the model
            const box = new THREE.Box3().setFromObject(scene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2 / maxDim;

            scene.scale.multiplyScalar(scale);
            scene.position.sub(center.multiplyScalar(scale));

            return <primitive object={scene} />;
          }}
        </ModelLoader>
      </Suspense>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={10}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
      <Environment preset="sunset" />
    </>
  );
}

function FallbackImage({ fallbackImage }: { fallbackImage?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full bg-muted flex items-center justify-center"
    >
      {fallbackImage ? (
        <div className="relative w-full h-full">
          <Image
            src={fallbackImage}
            alt="Product"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <p className="text-muted-foreground">3D model not available</p>
      )}
    </motion.div>
  );
}

export function ProductViewer({ modelUrl, fallbackImage, className }: ProductViewerProps) {
  const [showFallback, setShowFallback] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [isChecking, setIsChecking] = useState(true);

  // Check if model exists before trying to load it
  useEffect(() => {
    if (!modelUrl) {
      setShowFallback(true);
      setIsChecking(false);
      return;
    }

    // Check if model file exists
    fetch(modelUrl, { method: 'HEAD' })
      .then((response) => {
        if (!response.ok) {
          setShowFallback(true);
        }
        setIsChecking(false);
      })
      .catch(() => {
        setShowFallback(true);
        setIsChecking(false);
      });
  }, [modelUrl]);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  // Show loading state while checking
  if (isChecking) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative w-full h-full bg-muted flex items-center justify-center ${className}`}
      >
        <div className="text-muted-foreground">Loading...</div>
      </motion.div>
    );
  }

  // Show fallback if no model URL or model doesn't exist
  if (!modelUrl || showFallback) {
    return (
      <div className={className}>
        <FallbackImage fallbackImage={fallbackImage} />
      </div>
    );
  }

  return (
    <ErrorBoundary
      fallback={<FallbackImage fallbackImage={fallbackImage} />}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full h-full ${className}`}
      >
        <Canvas
          key={resetKey}
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="bg-gradient-to-b from-background to-muted"
        >
          <Scene modelUrl={modelUrl} />
        </Canvas>
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={handleReset}
            className="bg-background/80 backdrop-blur-sm"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
      </motion.div>
    </ErrorBoundary>
  );
}

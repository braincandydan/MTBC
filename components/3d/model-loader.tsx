'use client';

import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

interface ModelLoaderProps {
  url: string;
  children: (scene: THREE.Group) => React.ReactNode;
}

export function ModelLoader({ url, children }: ModelLoaderProps) {
  try {
    // Use useGLTF hook which handles caching automatically
    const { scene } = useGLTF(url);

    // Clone the scene to avoid mutating the cached version
    const clonedScene = useMemo(() => {
      return scene.clone();
    }, [scene]);

    return <>{children(clonedScene)}</>;
  } catch (error) {
    // Return null if model fails to load - error boundary will handle it
    console.warn('Failed to load 3D model:', url, error);
    return null;
  }
}

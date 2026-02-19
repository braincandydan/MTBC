# 3D Models Directory

This directory contains GLB/GLTF 3D models for product visualization.

## Current Models

- `headphones.glb` - Premium Wireless Headphones (3.11 MB, optimized)
- `smartwatch.glb` - Smart Watch Pro (sample model)
- `chair.glb` - Ergonomic Office Chair (sample model)
- `mouse.glb` - Wireless Mouse (sample model)
- `keyboard.glb` - Mechanical Keyboard (sample model)

## Model Sources

These models are from the [KhronosGroup glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models) repository, which provides free sample models for testing and development.

### Model Details

- **Format**: GLB (binary glTF)
- **License**: Sample models for testing purposes
- **Optimization**: Models have been optimized for web use
- **File Sizes**: All models are under 5MB for optimal web performance

## Usage

Models are referenced in product metafields in `lib/shopify.ts`:
- Product 1 (Headphones): `/models/headphones.glb`
- Product 2 (Smartwatch): `/models/smartwatch.glb`
- Product 3 (Chair): `/models/chair.glb`
- Product 4 (Mouse): `/models/mouse.glb`
- Product 5 (Keyboard): `/models/keyboard.glb`

## Adding New Models

To add new 3D models:

1. Place GLB or GLTF files in this directory
2. Update product metafields in `lib/shopify.ts` to reference the new model path
3. Ensure models are optimized for web (< 5MB recommended)
4. Test model loading on product detail pages

## Optimization

Models can be optimized using:
- `gltf-pipeline` (installed as dev dependency)
- Online GLB compressors
- Blender export settings

Example optimization command:
```bash
npx gltf-pipeline -i model.glb -o model-optimized.glb --draco.compressionLevel 7
```

## Notes

- Models are loaded using React Three Fiber's `useGLTF` hook
- Automatic fallback to product images if model fails to load
- Models are automatically centered and scaled in the viewer
- Orbit controls allow users to rotate, zoom, and pan

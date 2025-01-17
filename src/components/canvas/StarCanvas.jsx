import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const StarField = () => {
  const ref = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  });

  // Add rotation animation to the stars
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Slow rotation
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 2]} // Handle device pixel ratio
      gl={{ antialias: true }}
    >
      <StarField />
      <Preload all />
    </Canvas>
  );
};

export default StarCanvas;

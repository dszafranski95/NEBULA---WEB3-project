"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const RedRain = (props: any) => {
  const ref: any = useRef();
  const [rain] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Modify the movement to represent raindrops falling
  useFrame((state, delta) => {
    ref.current.position.y -= delta * 0.05;
    if (ref.current.position.y < -1.5) {
      ref.current.position.y = 1.5;
    }
  });

  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={rain}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"  // Change color to red
                size={0.005}    // Increase size a bit to resemble raindrops
                sizeAttenuation={true}
                dethWrite={false}
            />
        </Points>
    </group>
  );
};

const RainCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <RedRain />
        </Suspense>
        </Canvas>
    </div>
)

export default RainCanvas;

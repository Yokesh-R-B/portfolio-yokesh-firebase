import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.15;
    ref.current.rotation.y += dt * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.1}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#22d3ee"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.7}
          distort={0.35}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0, 4.2], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.4} color="#a78bfa" />
      <directionalLight position={[-4, -2, -2]} intensity={0.8} color="#22d3ee" />
      <Knot />
    </Canvas>
  );
}

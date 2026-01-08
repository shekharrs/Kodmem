import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Stars } from "@react-three/drei";
import * as THREE from "three";

type Vec3 = [number, number, number];

type KnowledgeNodeProps = {
  position: Vec3;
  color: string;
  scale?: number;
};

function KnowledgeNode({ position, color, scale = 1 }: KnowledgeNodeProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;

    const t = state.clock.getElapsedTime();
    mesh.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.15;
    mesh.rotation.x = t * 0.3;
    mesh.rotation.z = t * 0.2;
  });

  return (
    <Sphere ref={ref} args={[1, 12, 12]} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
}

type ConnectionRingProps = { offset?: number };

function ConnectionRing({ offset = 0 }: ConnectionRingProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;

    const t = state.clock.getElapsedTime();
    mesh.rotation.x = Math.sin(t * 0.1 + offset) * 0.1;
    mesh.rotation.y = t * 0.05;
  });

  return (
    <Torus ref={ref} args={[4, 0.015, 8, 40]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color="#C5A059"
        emissive="#C5A059"
        emissiveIntensity={0.3}
        transparent
        opacity={0.15}
      />
    </Torus>
  );
}

export function HeroScene() {
  const glConfig = useMemo(
    () => ({
      antialias: false,
      powerPreference: "low-power" as const,
      alpha: true,
    }),
    []
  );

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={glConfig}
        dpr={[1, 1.5]}
        shadows={false}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
          <KnowledgeNode position={[0, 0, 0]} color="#1C1917" scale={1.5} />
          <ConnectionRing offset={0} />
          <ConnectionRing offset={Math.PI} />
        </Float>

        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <KnowledgeNode position={[-5, 2, -3]} color="#999" scale={0.8} />
          <KnowledgeNode position={[4, -3, -4]} color="#C5A059" scale={0.6} />
          <KnowledgeNode position={[-2, -4, -2]} color="#C5A059" scale={0.4} />
          <KnowledgeNode position={[6, 3, -1]} color="#999" scale={0.7} />
        </Float>

        <Stars radius={100} depth={50} count={800} factor={2} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}

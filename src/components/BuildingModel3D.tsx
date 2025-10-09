import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Building() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main building structure */}
      <mesh position={[0, 2, 0]} castShadow>
        <boxGeometry args={[3, 4, 3]} />
        <meshStandardMaterial color="#2a2e3d" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Windows - front */}
      {[...Array(4)].map((_, floor) => (
        <group key={`front-${floor}`}>
          {[...Array(3)].map((_, col) => (
            <mesh key={col} position={[-0.8 + col * 0.8, 0.5 + floor * 0.9, 1.51]}>
              <boxGeometry args={[0.4, 0.6, 0.02]} />
              <meshStandardMaterial 
                color="#fbbf24" 
                emissive="#fbbf24" 
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Roof */}
      <mesh position={[0, 4.2, 0]} castShadow>
        <boxGeometry args={[3.2, 0.3, 3.2]} />
        <meshStandardMaterial color="#1a1d28" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Balconies */}
      {[1, 2, 3].map((floor) => (
        <mesh key={floor} position={[0, floor * 1.2 - 0.3, 1.6]}>
          <boxGeometry args={[2.8, 0.1, 0.5]} />
          <meshStandardMaterial color="#3a3e4d" metalness={0.5} roughness={0.3} />
        </mesh>
      ))}

      {/* Ground */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[8, 32]} />
        <meshStandardMaterial color="#1a1d28" roughness={0.8} />
      </mesh>

      {/* Trees */}
      {[
        [-4, 0.5, -2],
        [4, 0.5, -2],
        [-4, 0.5, 3],
        [4, 0.5, 3],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
            <meshStandardMaterial color="#4a3428" />
          </mesh>
          <mesh position={[0, 0.8, 0]}>
            <coneGeometry args={[0.6, 1.5, 8]} />
            <meshStandardMaterial color="#2d5016" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function BuildingModel3D() {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden glass-effect">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={50} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={20}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          onStart={() => setAutoRotate(false)}
          onEnd={() => setTimeout(() => setAutoRotate(true), 2000)}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#fbbf24" />
        
        <Building />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 glass-effect rounded-full">
        <p className="text-sm text-muted-foreground">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}

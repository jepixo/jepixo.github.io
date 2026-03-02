import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
    const ref = useRef<THREE.Points>(null!);

    const sphere = useMemo(() => {
        const points = new Float32Array(5000 * 3);
        const radius = 20;
        for (let i = 0; i < 15000; i += 3) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);

            points[i] = radius * Math.sin(phi) * Math.cos(theta);
            points[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            points[i + 2] = radius * Math.cos(phi);
        }
        return points;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function DistortedBlob({ color, position, speed, distort }: { color: string, position: [number, number, number], speed: number, distort: number }) {
    return (
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
            <mesh position={position}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color={color}
                    distort={distort}
                    speed={speed}
                    roughness={0}
                    metalness={1}
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <StarField />
                <DistortedBlob color="#3b82f6" position={[5, 2, -5]} speed={2} distort={0.4} />
                <DistortedBlob color="#8b5cf6" position={[-6, -3, -8]} speed={3} distort={0.6} />
                <DistortedBlob color="#ec4899" position={[2, -4, -10]} speed={1.5} distort={0.5} />
            </Canvas>
        </div>
    );
}

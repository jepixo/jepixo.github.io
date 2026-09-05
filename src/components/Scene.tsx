import { useRef, useMemo, useEffect, type RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/** Tracks page scroll progress (0-1) in a ref so R3F's render loop can read it without re-rendering React. */
function useScrollProgress() {
    const progress = useRef(0);
    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            progress.current = max > 0 ? window.scrollY / max : 0;
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);
    return progress;
}

function StarField({ scrollRef }: { scrollRef: RefObject<number> }) {
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
            const boost = 1 + scrollRef.current * 3;
            ref.current.rotation.x -= (delta / 10) * boost;
            ref.current.rotation.y -= (delta / 15) * boost;
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

function DistortedBlob({
    color,
    position,
    speed,
    distort,
    scrollRef,
    drift,
}: {
    color: string;
    position: [number, number, number];
    speed: number;
    distort: number;
    scrollRef: RefObject<number>;
    drift: [number, number, number];
}) {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(() => {
        if (groupRef.current) {
            const s = scrollRef.current;
            groupRef.current.position.x = position[0] + drift[0] * s;
            groupRef.current.position.y = position[1] + drift[1] * s;
            groupRef.current.position.z = position[2] + drift[2] * s;
        }
    });

    return (
        <group ref={groupRef} position={position}>
            <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
                <mesh>
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
        </group>
    );
}

/** Dollies and pans the camera as the page scrolls, so the scene keeps reacting past the hero. */
function CameraRig({ scrollRef }: { scrollRef: RefObject<number> }) {
    useFrame((state) => {
        const s = scrollRef.current;
        state.camera.position.z = 10 - s * 4;
        state.camera.position.y = -s * 2.5;
        state.camera.position.x = Math.sin(s * Math.PI) * 1.5;
        state.camera.rotation.z = s * 0.04;
        state.camera.lookAt(0, -s * 1.2, 0);
    });
    return null;
}

export default function Scene() {
    const scrollRef = useScrollProgress();

    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <CameraRig scrollRef={scrollRef} />
                <StarField scrollRef={scrollRef} />
                <DistortedBlob color="#3b82f6" position={[5, 2, -5]} speed={2} distort={0.4} scrollRef={scrollRef} drift={[-3, 4, 5]} />
                <DistortedBlob color="#8b5cf6" position={[-6, -3, -8]} speed={3} distort={0.6} scrollRef={scrollRef} drift={[4, 3, 6]} />
                <DistortedBlob color="#ec4899" position={[2, -4, -10]} speed={1.5} distort={0.5} scrollRef={scrollRef} drift={[-2, 5, 7]} />
            </Canvas>
        </div>
    );
}

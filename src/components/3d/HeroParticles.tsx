"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface ParticleFieldProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}

function ParticleField({ mouseRef, reducedMotion }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const origPos = new Float32Array(PARTICLE_COUNT * 3);
    const spacing = 0.08;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const gridX = Math.floor(seededRandom(i * 1.1) * Math.sqrt(PARTICLE_COUNT));
      const gridY = Math.floor((i / Math.sqrt(PARTICLE_COUNT)) % Math.sqrt(PARTICLE_COUNT));

      const x = (gridX - Math.sqrt(PARTICLE_COUNT) / 2) * spacing + (seededRandom(i * 2.2) - 0.5) * 0.02;
      const y = (gridY - Math.sqrt(PARTICLE_COUNT) / 2) * spacing + (seededRandom(i * 3.3) - 0.5) * 0.02;
      const z = (seededRandom(i * 4.4) - 0.5) * 0.5;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      origPos[i * 3] = x;
      origPos[i * 3 + 1] = y;
      origPos[i * 3 + 2] = z;
    }

    return { positions: pos, originalPositions: origPos };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state) => {
    if (!meshRef.current || reducedMotion) return;
    const time = state.clock.getElapsedTime();

    const posAttr = meshRef.current.geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    const mouseInfluence = 0.15;
    const timeInfluence = 0.02;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      const dx = mouseRef.current.x * mouseInfluence;
      const dy = mouseRef.current.y * mouseInfluence;

      posArray[i3] = ox + Math.sin(time * 0.5 + i * 0.01) * timeInfluence + dx * (1 - Math.abs(oz));
      posArray[i3 + 1] = oy + Math.cos(time * 0.3 + i * 0.01) * timeInfluence + dy * (1 - Math.abs(oz));
      posArray[i3 + 2] = oz + Math.sin(time * 0.2 + i * 0.005) * 0.01;
    }

    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.03;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.012}
        color="#00e5a0"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

interface HeroParticlesInnerProps {
  reducedMotion: boolean;
}

function HeroParticlesInner({ reducedMotion }: HeroParticlesInnerProps) {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <ParticleField mouseRef={mouseRef} reducedMotion={reducedMotion} />
  );
}

interface HeroParticlesProps {
  className?: string;
}

export function HeroParticles({ className }: HeroParticlesProps) {
  const [hasWebGL] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return !!gl;
    } catch {
      return false;
    }
  });

  const [reducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const [reducedMotionListener] = useState(() => {
    return (e: MediaQueryListEvent) => !e.matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => reducedMotionListener(e);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [reducedMotionListener]);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        }}
        style={{ background: "transparent" }}
      >
        <HeroParticlesInner reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

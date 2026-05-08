"use client";

import React, { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function FloatingWorld() {
  const group = useRef<THREE.Group>(null);
  const dirLight = useRef<THREE.DirectionalLight>(null);
  const pLightA = useRef<THREE.PointLight>(null);
  const pLightB = useRef<THREE.PointLight>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const floatingNodes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        position: [
          (Math.random() - 0.5) * 18,
          -1.5 + Math.random() * 5,
          -3 - Math.random() * 18,
        ] as [number, number, number],
        scale: 0.4 + Math.random() * 1.4,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
        kind: index % 4,
      })),
    []
  );

  const cursor = useRef({ x: 0, y: 0 });
  const scrollAmount = useRef(0);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      cursor.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      cursor.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollAmount.current = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Capture camera reference for ScrollTrigger
    cameraRef.current = state.camera;

    const targetY = -scrollAmount.current * 8;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, cursor.current.x * 0.22, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.15 + cursor.current.y * 0.08, 0.04);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.02);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, cursor.current.x * 0.6, 0.02);

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, cursor.current.x * 0.35, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.08 + cursor.current.y * 0.18, 0.04);
    state.camera.lookAt(0, 0, -6);

    const pulse = 0.55 + Math.sin(state.clock.elapsedTime * 0.55) * 0.12;
    state.scene.fog = new THREE.FogExp2('#090909', 0.08 + scrollAmount.current * 0.02);
    state.gl.toneMappingExposure = pulse;

    if (group.current) {
      group.current.children.forEach((child, index) => {
        child.rotation.y += delta * (0.08 + index * 0.002);
      });
    }
  });

  // react to section changes and setup ScrollTrigger animations
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { section?: string };
      const sec = detail?.section || 'home';
      // tune targets per section
      const targets: Record<string, any> = {
        home: {
          rotationY: 0.08,
          posY: -0.2,
          fog: 0.08,
          dirColor: '#f2e7d8',
          pAColor: '#0f766e',
          pBColor: '#b45309',
          cameraX: 0,
          cameraY: 0.25,
          cameraZ: 12,
        },
        skills: {
          rotationY: -0.1,
          posY: -1.2,
          fog: 0.11,
          dirColor: '#e6f7f2',
          pAColor: '#7dd3fc',
          pBColor: '#fef08a',
          cameraX: -0.4,
          cameraY: 1.2,
          cameraZ: 11,
        },
        projects: {
          rotationY: 0.22,
          posY: -2.2,
          fog: 0.14,
          dirColor: '#fff6eb',
          pAColor: '#a78bfa',
          pBColor: '#fb923c',
          cameraX: 0.6,
          cameraY: 0.5,
          cameraZ: 10.5,
        },
        experience: {
          rotationY: -0.28,
          posY: -3.2,
          fog: 0.16,
          dirColor: '#e8fff6',
          pAColor: '#34d399',
          pBColor: '#f59e0b',
          cameraX: -0.3,
          cameraY: 1.5,
          cameraZ: 11.2,
        },
        contact: {
          rotationY: 0.04,
          posY: -4.0,
          fog: 0.18,
          dirColor: '#fff4e6',
          pAColor: '#60a5fa',
          pBColor: '#f97316',
          cameraX: 0.2,
          cameraY: 0.8,
          cameraZ: 11.8,
        },
      };

      const t = targets[sec] || targets.home;

      if (group.current) {
        gsap.to(group.current.rotation, { y: t.rotationY, duration: 1.2, ease: 'power2.out' });
        gsap.to(group.current.position, { y: t.posY, duration: 1.2, ease: 'power2.out' });
      }

      // Animate camera position on section change
      if (cameraRef.current) {
        gsap.to(cameraRef.current.position, {
          x: t.cameraX,
          y: t.cameraY,
          z: t.cameraZ,
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      const scene = (group.current as any)?.parent?.scene;
      if (scene && scene.fog) {
        gsap.to(scene.fog, { density: t.fog, duration: 1.2, ease: 'power2.out' });
      }

      if (dirLight.current) gsap.to((dirLight.current as any).color, { r: new THREE.Color(t.dirColor).r, g: new THREE.Color(t.dirColor).g, b: new THREE.Color(t.dirColor).b, duration: 1.2, ease: 'power2.out' });
      if (pLightA.current) gsap.to((pLightA.current as any).color, { r: new THREE.Color(t.pAColor).r, g: new THREE.Color(t.pAColor).g, b: new THREE.Color(t.pAColor).b, duration: 1.2, ease: 'power2.out' });
      if (pLightB.current) gsap.to((pLightB.current as any).color, { r: new THREE.Color(t.pBColor).r, g: new THREE.Color(t.pBColor).g, b: new THREE.Color(t.pBColor).b, duration: 1.2, ease: 'power2.out' });
    };

    window.addEventListener('section-change', handler as EventListener);

    // Setup ScrollTrigger for smooth camera follow
    if (typeof window !== 'undefined' && cameraRef.current) {
      const scrollTrigger = gsap.to({}, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          onUpdate: () => {
            if (!cameraRef.current) return;
            const scrollProgress = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
            // Subtle continuous camera sway based on scroll
            cameraRef.current.position.x += (Math.sin(scrollProgress * Math.PI * 2) * 0.01);
          },
        },
      });

      return () => {
        window.removeEventListener('section-change', handler as EventListener);
        scrollTrigger.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    return () => {
      window.removeEventListener('section-change', handler as EventListener);
    };
  }, []);

  return (
    <group ref={group}>
      <ambientLight intensity={0.45} color="#8ea3a0" />
      <directionalLight ref={dirLight as any} position={[8, 10, 6]} intensity={1.5} color="#f2e7d8" />
      <pointLight ref={pLightA as any} position={[-6, 2, -2]} intensity={1.8} color="#0f766e" />
      <pointLight ref={pLightB as any} position={[4, -1, -6]} intensity={1.6} color="#b45309" />

      <group position={[0, -1, -8]}>
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.8}>
          <mesh position={[0, 0, 0]} rotation={[-0.35, 0.2, 0]} scale={[5.2, 0.32, 5.2]}>
            <cylinderGeometry args={[1, 1.4, 1, 8]} />
            <meshStandardMaterial color="#1c1c1c" metalness={0.85} roughness={0.34} emissive="#081413" emissiveIntensity={0.3} />
          </mesh>
        </Float>

        <Float speed={1.4} rotationIntensity={0.75} floatIntensity={1.6}>
          <mesh position={[-3.8, 1.7, -1.2]} rotation={[0.6, 0.9, -0.2]} scale={1.5}>
            <torusGeometry args={[1, 0.3, 16, 48]} />
            <meshStandardMaterial color="#55615f" metalness={0.92} roughness={0.24} emissive="#0f766e" emissiveIntensity={0.25} />
          </mesh>
        </Float>

        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.3}>
          <mesh position={[4.2, 1.2, -2.2]} rotation={[0.4, 0.2, 0.7]} scale={1.1}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#8d8476" metalness={0.9} roughness={0.28} emissive="#b45309" emissiveIntensity={0.18} />
          </mesh>
        </Float>

        <mesh position={[0, 5.2, -6]} rotation={[0.5, 0, 0]} scale={[10, 10, 10]}>
          <ringGeometry args={[2.5, 3.2, 64]} />
          <meshStandardMaterial color="#4b5552" metalness={0.5} roughness={0.7} transparent opacity={0.2} />
        </mesh>
      </group>

      {/* large right-side portal anchor */}
      <group position={[8, -1, -6]} rotation={[0.2, -0.6, 0]}> 
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <ringGeometry args={[3.6, 4.4, 160]} />
          <meshStandardMaterial color="#485055" metalness={0.8} roughness={0.45} transparent opacity={0.9} />
        </mesh>
        <mesh position={[0, 0, 0.2]}>
          <torusGeometry args={[2.2, 0.14, 16, 160]} />
          <meshStandardMaterial emissive="#b8f3e0" emissiveIntensity={0.06} metalness={0.9} roughness={0.15} />
        </mesh>
      </group>

      {floatingNodes.map((node, index) => {
        const sharedProps = {
          position: node.position,
          rotation: node.rotation,
          scale: node.scale,
        };

        if (node.kind === 0) {
          return (
            <mesh key={index} {...sharedProps}>
              <boxGeometry args={[1, 1.6, 0.7]} />
              <meshStandardMaterial color="#2f3434" metalness={0.9} roughness={0.35} emissive="#0f766e" emissiveIntensity={0.08} />
            </mesh>
          );
        }

        if (node.kind === 1) {
          return (
            <mesh key={index} {...sharedProps}>
              <octahedronGeometry args={[0.9, 0]} />
              <meshStandardMaterial color="#766e5f" metalness={0.8} roughness={0.26} emissive="#b45309" emissiveIntensity={0.08} />
            </mesh>
          );
        }

        if (node.kind === 2) {
          return (
            <mesh key={index} {...sharedProps}>
              <torusGeometry args={[0.7, 0.2, 12, 32]} />
              <meshStandardMaterial color="#7f8786" metalness={0.92} roughness={0.2} emissive="#94a3b8" emissiveIntensity={0.08} />
            </mesh>
          );
        }

        return (
          <mesh key={index} {...sharedProps}>
            <icosahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color="#394342" metalness={0.82} roughness={0.3} emissive="#0f172a" emissiveIntensity={0.1} />
          </mesh>
        );
      })}

      <Sparkles count={80} size={1.2} speed={0.25} scale={[30, 18, 20]} color="#a7f3d0" opacity={0.28} />
      <Stars radius={120} depth={60} count={1200} factor={4} saturation={0} fade speed={0.45} />
    </group>
  );
}

export default function GlobalScene() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.12),transparent_34%),linear-gradient(180deg,#050505_0%,#090909_55%,#050505_100%)]" />
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.25, 12], fov: 45 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        className="!absolute inset-0"
      >
        <Suspense fallback={null}>
          <FloatingWorld />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.45)_100%)]" />
      <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_center,transparent_0,transparent_40%,rgba(255,255,255,0.04)_60%,transparent_82%)]" />
    </div>
  );
}
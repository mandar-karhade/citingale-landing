'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type SignalParticle = {
  curve: THREE.CatmullRomCurve3;
  mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  offset: number;
  speed: number;
};

const tubeColors = ['#9fb0c8', '#145aff', '#6b7a92', '#dc143c', '#6dd7c5', '#b8c2d2'];
const lightColors = ['#145aff', '#dc143c', '#6dd7c5', '#f8fafc'];

function buildCurve(index: number) {
  const points: THREE.Vector3[] = [];
  const lane = (index - 4) * 0.52;
  const depth = ((index % 4) - 1.5) * 0.42;

  for (let step = 0; step < 9; step += 1) {
    const x = -6.9 + step * 1.75;
    const wave = Math.sin(step * 0.82 + index * 0.64) * (0.74 + (index % 3) * 0.08);
    const drift = Math.cos(step * 0.46 + index) * 0.28;
    points.push(new THREE.Vector3(x, lane + wave + drift, depth + Math.sin(step + index) * 0.28));
  }

  return new THREE.CatmullRomCurve3(points);
}

export default function IntelligenceTubes() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return undefined;
    }

    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    camera.position.set(0, 0.2, 9.8);

    const group = new THREE.Group();
    group.position.set(1.15, -0.12, 0);
    group.rotation.set(-0.06, -0.26, -0.08);
    scene.add(group);

    const curves = Array.from({ length: 10 }, (_, index) => buildCurve(index));
    const signals: SignalParticle[] = [];

    curves.forEach((curve, index) => {
      const baseColor = tubeColors[index % tubeColors.length];
      const glowColor = lightColors[index % lightColors.length];
      const radius = 0.026 + (index % 3) * 0.006;

      const glowGeometry = new THREE.TubeGeometry(curve, 156, radius * 3.8, 10, false);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      group.add(new THREE.Mesh(glowGeometry, glowMaterial));

      const tubeGeometry = new THREE.TubeGeometry(curve, 156, radius, 12, false);
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.48,
      });
      group.add(new THREE.Mesh(tubeGeometry, tubeMaterial));

      for (let particleIndex = 0; particleIndex < 2; particleIndex += 1) {
        const particleGeometry = new THREE.SphereGeometry(0.054 + particleIndex * 0.012, 18, 18);
        const particleMaterial = new THREE.MeshBasicMaterial({
          color: lightColors[(index + particleIndex) % lightColors.length],
          transparent: true,
          opacity: 0.72,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(particleGeometry, particleMaterial);
        group.add(mesh);
        signals.push({
          curve,
          mesh,
          offset: (index * 0.113 + particleIndex * 0.41) % 1,
          speed: 0.035 + index * 0.002 + particleIndex * 0.008,
        });
      }
    });

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const clock = new THREE.Clock();

    const resize = () => {
      const width = canvas.clientWidth || canvas.parentElement?.clientWidth || 1;
      const height = canvas.clientHeight || canvas.parentElement?.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    resize();

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      target.x += (pointer.x - target.x) * 0.045;
      target.y += (pointer.y - target.y) * 0.045;

      group.rotation.y = -0.26 + target.x * 0.24 + Math.sin(elapsed * 0.18) * 0.06;
      group.rotation.x = -0.06 + target.y * 0.16 + Math.cos(elapsed * 0.13) * 0.025;
      group.rotation.z = -0.08 + Math.sin(elapsed * 0.1) * 0.025;
      group.position.x = 1.15 + target.x * 0.28;

      signals.forEach((signal, index) => {
        const travel = (signal.offset + elapsed * signal.speed) % 1;
        const point = signal.curve.getPointAt(travel);
        const tangent = signal.curve.getTangentAt(travel);
        signal.mesh.position.copy(point).addScaledVector(tangent, Math.sin(elapsed * 1.8 + index) * 0.025);
        signal.mesh.scale.setScalar(1 + Math.sin(elapsed * 2.4 + index) * 0.22);
      });

      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      signals.forEach((signal) => {
        signal.mesh.position.copy(signal.curve.getPointAt(signal.offset));
      });
      renderer.render(scene, camera);
    } else {
      renderer.setAnimationLoop(renderFrame);
    }

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('pointermove', onPointerMove);
      resizeObserver.disconnect();

      group.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="tube-hero-canvas" aria-hidden="true" />;
}

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0.6, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.position.set(1.45, -0.2, 0);
    group.rotation.y = -0.22;
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xbfefff, 0.45);
    scene.add(ambient);

    const key = new THREE.PointLight(0x60f0d0, 18, 18);
    key.position.set(-2, 2.8, 4);
    scene.add(key);

    const rim = new THREE.PointLight(0x8c87ff, 9, 18);
    rim.position.set(4, -1.6, 3.5);
    scene.add(rim);

    const monitorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d2a4b,
      metalness: 0.55,
      roughness: 0.34,
      transparent: true,
      opacity: 0.62,
    });

    const frame = new THREE.Mesh(new THREE.BoxGeometry(3.9, 2.2, 0.2), monitorMaterial);
    frame.position.set(1.6, 0.15, -0.35);
    frame.rotation.y = -0.14;
    group.add(frame);

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(3.35, 1.7),
      new THREE.MeshBasicMaterial({
        color: 0x0a1830,
        transparent: true,
        opacity: 0.54,
      }),
    );
    screen.position.set(1.5, 0.17, -0.22);
    screen.rotation.y = -0.14;
    group.add(screen);

    const ringGroup = new THREE.Group();
    ringGroup.position.set(-0.55, -0.05, 0.15);
    group.add(ringGroup);

    const ringMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x3bf0c2, emissive: 0x103d36, metalness: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0x7b7dff, emissive: 0x171746, metalness: 0.36 }),
      new THREE.MeshStandardMaterial({ color: 0x57f5e0, emissive: 0x123c3a, metalness: 0.35 }),
    ];

    [0.92, 1.18, 1.43].forEach((radius, index) => {
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.025, 16, 128),
        ringMaterials[index],
      );
      torus.rotation.y = Math.PI / 2.2;
      torus.rotation.x = 0.06 * index;
      ringGroup.add(torus);
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6fffe0,
      transparent: true,
      opacity: 0.3,
    });

    for (let index = 0; index < 24; index += 1) {
      const y = (index % 8) * 0.18 - 0.64;
      const z = Math.sin(index * 1.7) * 0.24;
      const start = new THREE.Vector3(-0.2, y, z);
      const end = new THREE.Vector3(2.95 + Math.random() * 0.9, y + Math.sin(index) * 0.2, z - 0.35);
      const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
      const line = new THREE.Line(geometry, lineMaterial.clone());
      line.userData.speed = 0.35 + Math.random() * 0.85;
      line.userData.baseY = y;
      group.add(line);
    }

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0x47f4c4),
      new THREE.Color(0x8e8cff),
      new THREE.Color(0xb7d8ff),
      new THREE.Color(0xffc56d),
    ];

    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = -2.2 + Math.random() * 6.4;
      positions[index * 3 + 1] = -1.3 + Math.random() * 2.6;
      positions[index * 3 + 2] = -0.85 + Math.random() * 1.55;
      const color = palette[index % palette.length];
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        size: 0.035,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
      }),
    );
    group.add(particles);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      ringGroup.rotation.z = elapsed * 0.16;
      particles.rotation.y = Math.sin(elapsed * 0.24) * 0.1;
      group.rotation.x = Math.sin(elapsed * 0.18) * 0.025;

      group.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.position.x = ((elapsed * child.userData.speed) % 1.6) - 0.8;
          child.position.y = child.userData.baseY + Math.sin(elapsed + child.userData.speed) * 0.035;
        }
      });

      renderer.render(scene, camera);

      if (!reducedMotion) {
        frameId = requestAnimationFrame(animate);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      lineMaterial.dispose();
      monitorMaterial.dispose();
      ringMaterials.forEach((material) => material.dispose());
    };
  }, []);

  return <div ref={mountRef} className="heroScene" aria-hidden="true" />;
}

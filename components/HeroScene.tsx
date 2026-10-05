"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.055);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 3.2, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    mount.appendChild(renderer.domElement);

    // Studio lighting (clean, warm-neutral, no neon)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainLight.position.set(6, 12, 8);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xf1f5f9, 1.0);
    fillLight.position.set(-6, -4, 4);
    scene.add(fillLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 3D Perspective Grid Plane (aesthetic architecture drafting feel)
    const gridHelper = new THREE.GridHelper(24, 32, 0xcbd5e1, 0xf1f5f9);
    gridHelper.position.y = -2.2;
    rootGroup.add(gridHelper);

    // 3D Bounded Context Prisms & Blocks (clean, tactile, matte slate & emerald)
    const blockMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.25,
        metalness: 0.05,
        transparent: true,
        opacity: 0.9,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.3,
        metalness: 0.1,
        transparent: true,
        opacity: 0.85,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x059669, // Subtle emerald accent
        roughness: 0.35,
        metalness: 0.15,
        transparent: true,
        opacity: 0.75,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x1e293b, // Deep slate
        roughness: 0.4,
        metalness: 0.2,
        transparent: true,
        opacity: 0.8,
      }),
    ];

    // Wireframe edge material for high-end CAD / architectural finish
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.4,
    });

    const items: {
      mesh: THREE.Mesh | THREE.Group;
      baseY: number;
      baseX: number;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      floatOffset: number;
    }[] = [];

    // Create 14 aesthetic floating 3D geometric tokens / bounded context blocks
    const configs = [
      // Left side floating group
      { x: -5.2, y: 1.2, z: -1.0, scale: [1.2, 0.4, 1.2], matIdx: 0, geo: "box" },
      { x: -4.4, y: -0.6, z: 1.2, scale: [0.8, 0.8, 0.8], matIdx: 1, geo: "octa" },
      { x: -6.0, y: -1.2, z: -2.0, scale: [1.4, 0.25, 1.4], matIdx: 0, geo: "box" },
      { x: -3.8, y: 2.2, z: -2.2, scale: [0.6, 0.6, 0.6], matIdx: 2, geo: "octa" },
      { x: -5.5, y: 0.2, z: 2.0, scale: [0.9, 0.9, 0.9], matIdx: 3, geo: "box" },

      // Right side floating group
      { x: 5.2, y: 1.4, z: -1.2, scale: [1.3, 0.45, 1.3], matIdx: 0, geo: "box" },
      { x: 4.5, y: -0.8, z: 1.5, scale: [0.85, 0.85, 0.85], matIdx: 2, geo: "octa" },
      { x: 6.2, y: -1.0, z: -2.2, scale: [1.5, 0.3, 1.5], matIdx: 1, geo: "box" },
      { x: 4.0, y: 2.0, z: -1.8, scale: [0.7, 0.7, 0.7], matIdx: 3, geo: "box" },
      { x: 5.8, y: 0.4, z: 2.2, scale: [0.95, 0.95, 0.95], matIdx: 0, geo: "octa" },

      // Subtle background depth anchors
      { x: -2.4, y: 3.2, z: -4.5, scale: [0.5, 0.5, 0.5], matIdx: 1, geo: "box" },
      { x: 2.6, y: 3.4, z: -4.8, scale: [0.55, 0.55, 0.55], matIdx: 2, geo: "octa" },
      { x: -1.8, y: -2.0, z: -3.0, scale: [1.0, 0.2, 1.0], matIdx: 0, geo: "box" },
      { x: 2.0, y: -1.9, z: -3.2, scale: [1.1, 0.22, 1.1], matIdx: 1, geo: "box" },
    ];

    configs.forEach((cfg, i) => {
      const group = new THREE.Group();
      let geometry: THREE.BufferGeometry;

      if (cfg.geo === "box") {
        geometry = new THREE.BoxGeometry(cfg.scale[0], cfg.scale[1], cfg.scale[2]);
      } else {
        geometry = new THREE.OctahedronGeometry(cfg.scale[0] * 0.7, 0);
      }

      const mesh = new THREE.Mesh(geometry, blockMaterials[cfg.matIdx]);
      group.add(mesh);

      // Add architectural wireframe outlines
      const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
      group.add(wireframe);

      group.position.set(cfg.x, cfg.y, cfg.z);
      group.rotation.set(0.3 * i, 0.4 * i, 0.2 * i);
      rootGroup.add(group);

      items.push({
        mesh: group,
        baseY: cfg.y,
        baseX: cfg.x,
        rotSpeedX: 0.15 + (i % 3) * 0.08,
        rotSpeedY: 0.2 + (i % 4) * 0.07,
        floatSpeed: 0.6 + (i % 3) * 0.3,
        floatOffset: i * 0.8,
      });
    });

    // Subtle 3D mouse parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

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

      // Smooth parallax damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX * 1.5;
      camera.position.y = 3.2 - currentMouseY * 1.0;
      camera.lookAt(0, 0, 0);

      // Floating animations
      items.forEach((item) => {
        item.mesh.position.y =
          item.baseY + Math.sin(elapsed * item.floatSpeed + item.floatOffset) * 0.14;
        item.mesh.rotation.x += 0.003 * item.rotSpeedX;
        item.mesh.rotation.y += 0.004 * item.rotSpeedY;
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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      gridHelper.dispose();
      edgeMaterial.dispose();
      blockMaterials.forEach((m) => m.dispose());
    };
  }, []);

  return <div ref={mountRef} className="heroScene3D" aria-hidden="true" />;
}

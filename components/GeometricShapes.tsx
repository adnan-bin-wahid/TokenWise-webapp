"use client";

import React from "react";

export type ShapeType =
  | "emerald-octa"
  | "slate-octa"
  | "white-octa"
  | "indigo-octa"
  | "slate-cube"
  | "emerald-cube"
  | "white-cube"
  | "indigo-cube";

interface GeoShapeProps {
  type: ShapeType;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function GeoShape({ type, size = 64, className = "", style = {} }: GeoShapeProps) {
  const w = size;
  const h = size;

  switch (type) {
    // 1. Emerald Octahedron (Tactile 3D diamond crystal like in HeroScene)
    case "emerald-octa": {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const ox = cx + w * 0.06;
      const oy = cy + h * 0.05;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-em-octa-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#059669" floodOpacity="0.18" />
            </filter>
          </defs>
          <g filter={`url(#shadow-em-octa-${w})`}>
            {/* Top-Left Face */}
            <polygon points={`${cx},${h * 0.05} ${w * 0.08},${cy} ${ox},${oy}`} fill="#34d399" opacity="0.88" />
            {/* Top-Right Face */}
            <polygon points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${ox},${oy}`} fill="#10b981" opacity="0.95" />
            {/* Bottom-Left Face */}
            <polygon points={`${cx},${h * 0.95} ${w * 0.08},${cy} ${ox},${oy}`} fill="#059669" opacity="0.92" />
            {/* Bottom-Right Face */}
            <polygon points={`${cx},${h * 0.95} ${w * 0.92},${cy} ${ox},${oy}`} fill="#047857" opacity="0.98" />
            {/* Wireframe Architectural Edges */}
            <polygon
              points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${cx},${h * 0.95} ${w * 0.08},${cy}`}
              fill="none"
              stroke="#a7f3d0"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />
            <line x1={cx} y1={h * 0.05} x2={ox} y2={oy} stroke="#ecfdf5" strokeWidth="1.2" strokeOpacity="0.85" />
            <line x1={w * 0.08} y1={cy} x2={ox} y2={oy} stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.75" />
            <line x1={w * 0.92} y1={cy} x2={ox} y2={oy} stroke="#6ee7b7" strokeWidth="1.2" strokeOpacity="0.8" />
            <line x1={cx} y1={h * 0.95} x2={ox} y2={oy} stroke="#34d399" strokeWidth="1.2" strokeOpacity="0.7" />
          </g>
        </svg>
      );
    }

    // 2. Slate Octahedron (Deep charcoal diamond crystal)
    case "slate-octa": {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const ox = cx + w * 0.06;
      const oy = cy + h * 0.05;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-sl-octa-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#0f172a" floodOpacity="0.22" />
            </filter>
          </defs>
          <g filter={`url(#shadow-sl-octa-${w})`}>
            <polygon points={`${cx},${h * 0.05} ${w * 0.08},${cy} ${ox},${oy}`} fill="#475569" opacity="0.9" />
            <polygon points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${ox},${oy}`} fill="#334155" opacity="0.95" />
            <polygon points={`${cx},${h * 0.95} ${w * 0.08},${cy} ${ox},${oy}`} fill="#1e293b" opacity="0.95" />
            <polygon points={`${cx},${h * 0.95} ${w * 0.92},${cy} ${ox},${oy}`} fill="#0f172a" opacity="0.98" />
            <polygon
              points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${cx},${h * 0.95} ${w * 0.08},${cy}`}
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeOpacity="0.55"
            />
            <line x1={cx} y1={h * 0.05} x2={ox} y2={oy} stroke="#cbd5e1" strokeWidth="1.2" strokeOpacity="0.65" />
            <line x1={w * 0.08} y1={cy} x2={ox} y2={oy} stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1={w * 0.92} y1={cy} x2={ox} y2={oy} stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1={cx} y1={h * 0.95} x2={ox} y2={oy} stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.5" />
          </g>
        </svg>
      );
    }

    // 3. Frosted White Octahedron
    case "white-octa": {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const ox = cx + w * 0.06;
      const oy = cy + h * 0.05;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-wh-octa-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.12" />
            </filter>
          </defs>
          <g filter={`url(#shadow-wh-octa-${w})`}>
            <polygon points={`${cx},${h * 0.05} ${w * 0.08},${cy} ${ox},${oy}`} fill="#ffffff" opacity="0.95" />
            <polygon points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${ox},${oy}`} fill="#f8fafc" opacity="0.92" />
            <polygon points={`${cx},${h * 0.95} ${w * 0.08},${cy} ${ox},${oy}`} fill="#f1f5f9" opacity="0.9" />
            <polygon points={`${cx},${h * 0.95} ${w * 0.92},${cy} ${ox},${oy}`} fill="#e2e8f0" opacity="0.9" />
            <polygon
              points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${cx},${h * 0.95} ${w * 0.08},${cy}`}
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeOpacity="0.5"
            />
            <line x1={cx} y1={h * 0.05} x2={ox} y2={oy} stroke="#cbd5e1" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1={w * 0.08} y1={cy} x2={ox} y2={oy} stroke="#cbd5e1" strokeWidth="1.2" strokeOpacity="0.6" />
            <line x1={w * 0.92} y1={cy} x2={ox} y2={oy} stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <line x1={cx} y1={h * 0.95} x2={ox} y2={oy} stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.5" />
          </g>
        </svg>
      );
    }

    // 4. Soft Indigo Octahedron
    case "indigo-octa": {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const ox = cx + w * 0.06;
      const oy = cy + h * 0.05;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-in-octa-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4f46e5" floodOpacity="0.16" />
            </filter>
          </defs>
          <g filter={`url(#shadow-in-octa-${w})`}>
            <polygon points={`${cx},${h * 0.05} ${w * 0.08},${cy} ${ox},${oy}`} fill="#818cf8" opacity="0.88" />
            <polygon points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${ox},${oy}`} fill="#6366f1" opacity="0.95" />
            <polygon points={`${cx},${h * 0.95} ${w * 0.08},${cy} ${ox},${oy}`} fill="#4f46e5" opacity="0.92" />
            <polygon points={`${cx},${h * 0.95} ${w * 0.92},${cy} ${ox},${oy}`} fill="#3730a3" opacity="0.98" />
            <polygon
              points={`${cx},${h * 0.05} ${w * 0.92},${cy} ${cx},${h * 0.95} ${w * 0.08},${cy}`}
              fill="none"
              stroke="#c7d2fe"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />
            <line x1={cx} y1={h * 0.05} x2={ox} y2={oy} stroke="#e0e7ff" strokeWidth="1.2" strokeOpacity="0.8" />
            <line x1={w * 0.08} y1={cy} x2={ox} y2={oy} stroke="#c7d2fe" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1={w * 0.92} y1={cy} x2={ox} y2={oy} stroke="#a5b4fc" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1={cx} y1={h * 0.95} x2={ox} y2={oy} stroke="#818cf8" strokeWidth="1.2" strokeOpacity="0.7" />
          </g>
        </svg>
      );
    }

    // 5. Deep Slate Isometric Cube / Prism
    case "slate-cube": {
      const topP = `${w * 0.5},${h * 0.06} ${w * 0.94},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.06},${h * 0.3}`;
      const leftP = `${w * 0.06},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.5},${h * 0.94} ${w * 0.06},${h * 0.7}`;
      const rightP = `${w * 0.5},${h * 0.54} ${w * 0.94},${h * 0.3} ${w * 0.94},${h * 0.7} ${w * 0.5},${h * 0.94}`;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-sl-cube-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#0f172a" floodOpacity="0.2" />
            </filter>
          </defs>
          <g filter={`url(#shadow-sl-cube-${w})`}>
            <polygon points={topP} fill="#475569" opacity="0.95" />
            <polygon points={rightP} fill="#334155" opacity="0.95" />
            <polygon points={leftP} fill="#1e293b" opacity="0.98" />
            {/* Wireframe Outline */}
            <polygon points={topP} fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <polygon points={leftP} fill="none" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.6" />
            <polygon points={rightP} fill="none" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.6" />
          </g>
        </svg>
      );
    }

    // 6. Emerald Isometric Cube / Prism
    case "emerald-cube": {
      const topP = `${w * 0.5},${h * 0.06} ${w * 0.94},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.06},${h * 0.3}`;
      const leftP = `${w * 0.06},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.5},${h * 0.94} ${w * 0.06},${h * 0.7}`;
      const rightP = `${w * 0.5},${h * 0.54} ${w * 0.94},${h * 0.3} ${w * 0.94},${h * 0.7} ${w * 0.5},${h * 0.94}`;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-em-cube-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#059669" floodOpacity="0.18" />
            </filter>
          </defs>
          <g filter={`url(#shadow-em-cube-${w})`}>
            <polygon points={topP} fill="#34d399" opacity="0.9" />
            <polygon points={rightP} fill="#10b981" opacity="0.95" />
            <polygon points={leftP} fill="#059669" opacity="0.98" />
            <polygon points={topP} fill="none" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.75" />
            <polygon points={leftP} fill="none" stroke="#6ee7b7" strokeWidth="1.2" strokeOpacity="0.65" />
            <polygon points={rightP} fill="none" stroke="#6ee7b7" strokeWidth="1.2" strokeOpacity="0.65" />
          </g>
        </svg>
      );
    }

    // 7. Frosted White Isometric Cube
    case "white-cube": {
      const topP = `${w * 0.5},${h * 0.06} ${w * 0.94},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.06},${h * 0.3}`;
      const leftP = `${w * 0.06},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.5},${h * 0.94} ${w * 0.06},${h * 0.7}`;
      const rightP = `${w * 0.5},${h * 0.54} ${w * 0.94},${h * 0.3} ${w * 0.94},${h * 0.7} ${w * 0.5},${h * 0.94}`;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-wh-cube-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.12" />
            </filter>
          </defs>
          <g filter={`url(#shadow-wh-cube-${w})`}>
            <polygon points={topP} fill="#ffffff" opacity="0.98" />
            <polygon points={rightP} fill="#f1f5f9" opacity="0.95" />
            <polygon points={leftP} fill="#e2e8f0" opacity="0.92" />
            <polygon points={topP} fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeOpacity="0.75" />
            <polygon points={leftP} fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
            <polygon points={rightP} fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.6" />
          </g>
        </svg>
      );
    }

    // 8. Soft Indigo Isometric Cube
    case "indigo-cube": {
      const topP = `${w * 0.5},${h * 0.06} ${w * 0.94},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.06},${h * 0.3}`;
      const leftP = `${w * 0.06},${h * 0.3} ${w * 0.5},${h * 0.54} ${w * 0.5},${h * 0.94} ${w * 0.06},${h * 0.7}`;
      const rightP = `${w * 0.5},${h * 0.54} ${w * 0.94},${h * 0.3} ${w * 0.94},${h * 0.7} ${w * 0.5},${h * 0.94}`;
      return (
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className={`geoShapeSvg ${className}`}
          style={style}
          aria-hidden="true"
        >
          <defs>
            <filter id={`shadow-in-cube-${w}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#4f46e5" floodOpacity="0.18" />
            </filter>
          </defs>
          <g filter={`url(#shadow-in-cube-${w})`}>
            <polygon points={topP} fill="#818cf8" opacity="0.9" />
            <polygon points={rightP} fill="#6366f1" opacity="0.95" />
            <polygon points={leftP} fill="#4f46e5" opacity="0.98" />
            <polygon points={topP} fill="none" stroke="#c7d2fe" strokeWidth="1.2" strokeOpacity="0.75" />
            <polygon points={leftP} fill="none" stroke="#a5b4fc" strokeWidth="1.2" strokeOpacity="0.65" />
            <polygon points={rightP} fill="none" stroke="#a5b4fc" strokeWidth="1.2" strokeOpacity="0.65" />
          </g>
        </svg>
      );
    }

    default:
      return null;
  }
}

/**
 * Pre-configured Ambient Cluster for Sections
 * Floats tactile 3D geometric shapes at the section boundaries,
 * keeping the exact aesthetic and color harmony of the hero scene.
 */
interface SectionGeoClusterProps {
  variant?: "specs" | "quickstart" | "pipeline" | "capabilities" | "demo" | "cta";
}

export function SectionGeoCluster({ variant = "specs" }: SectionGeoClusterProps) {
  if (variant === "specs") {
    return (
      <div className="sectionGeoContainer" aria-hidden="true">
        {/* Left Side Floating Shapes */}
        <div className="geoFloatCluster geoLeftTop animFloat1">
          <GeoShape type="emerald-octa" size={62} />
        </div>
        <div className="geoFloatCluster geoLeftBottom animFloat3">
          <GeoShape type="white-cube" size={54} />
        </div>

        {/* Right Side Floating Shapes */}
        <div className="geoFloatCluster geoRightTop animFloat2">
          <GeoShape type="slate-cube" size={68} />
        </div>
        <div className="geoFloatCluster geoRightBottom animFloat1">
          <GeoShape type="indigo-octa" size={50} />
        </div>
      </div>
    );
  }

  if (variant === "quickstart") {
    return (
      <div className="sectionGeoContainer" aria-hidden="true">
        <div className="geoFloatCluster geoLeftMid animFloat2">
          <GeoShape type="slate-octa" size={58} />
        </div>
        <div className="geoFloatCluster geoLeftBottom animFloat1">
          <GeoShape type="emerald-cube" size={52} />
        </div>
        <div className="geoFloatCluster geoRightTop animFloat3">
          <GeoShape type="white-octa" size={64} />
        </div>
        <div className="geoFloatCluster geoRightMid animFloat1">
          <GeoShape type="slate-cube" size={56} />
        </div>
      </div>
    );
  }

  if (variant === "pipeline") {
    return (
      <div className="sectionGeoContainer" aria-hidden="true">
        <div className="geoFloatCluster geoLeftTop animFloat3">
          <GeoShape type="emerald-cube" size={60} />
        </div>
        <div className="geoFloatCluster geoLeftBottom animFloat2">
          <GeoShape type="indigo-octa" size={48} />
        </div>
        <div className="geoFloatCluster geoRightTop animFloat1">
          <GeoShape type="white-cube" size={66} />
        </div>
        <div className="geoFloatCluster geoRightBottom animFloat3">
          <GeoShape type="slate-octa" size={54} />
        </div>
      </div>
    );
  }

  if (variant === "capabilities") {
    return (
      <div className="sectionGeoContainer" aria-hidden="true">
        <div className="geoFloatCluster geoLeftMid animFloat1">
          <GeoShape type="emerald-octa" size={68} />
        </div>
        <div className="geoFloatCluster geoLeftBottom animFloat3">
          <GeoShape type="slate-cube" size={62} />
        </div>
        <div className="geoFloatCluster geoRightTop animFloat2">
          <GeoShape type="white-octa" size={56} />
        </div>
        <div className="geoFloatCluster geoRightMid animFloat1">
          <GeoShape type="indigo-cube" size={54} />
        </div>
      </div>
    );
  }

  if (variant === "demo") {
    return (
      <div className="sectionGeoContainer" aria-hidden="true">
        <div className="geoFloatCluster geoLeftTop animFloat2">
          <GeoShape type="emerald-cube" size={52} />
        </div>
        <div className="geoFloatCluster geoRightBottom animFloat1">
          <GeoShape type="slate-octa" size={56} />
        </div>
      </div>
    );
  }

  // CTA Variant
  return (
    <div className="sectionGeoContainer" aria-hidden="true">
      <div className="geoFloatCluster geoLeftMid animFloat1">
        <GeoShape type="emerald-octa" size={72} />
      </div>
      <div className="geoFloatCluster geoLeftBottom animFloat3">
        <GeoShape type="slate-cube" size={58} />
      </div>
      <div className="geoFloatCluster geoRightTop animFloat2">
        <GeoShape type="indigo-octa" size={64} />
      </div>
      <div className="geoFloatCluster geoRightBottom animFloat1">
        <GeoShape type="white-cube" size={60} />
      </div>
    </div>
  );
}

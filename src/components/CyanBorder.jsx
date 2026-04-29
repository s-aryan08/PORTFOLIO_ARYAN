/**
 * CyanBorder — Aesthetic neon cyan border effect along screen edges.
 *
 * Features:
 *  - Fixed position on all four sides (does not scroll with content)
 *  - Neon glow pulse animation
 *  - Flowing light beam effect along each edge
 *  - Brighter corner highlights
 *  - Hover interaction — glow intensifies on mouse activity
 *  - Fully responsive, no layout interference
 *
 * 👉 Border container — do not remove
 */

import { useEffect, useState } from 'react';
import './CyanBorder.css';

export default function CyanBorder() {
  const [active, setActive] = useState(false);

  // Intensify glow briefly on any mouse movement / click
  useEffect(() => {
    let timeout;
    const handleInteraction = () => {
      setActive(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setActive(false), 1200);
    };

    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('click', handleInteraction);
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* 👉 Cyan border effect applied to screen edges */}
      <div className={`cyan-border-container ${active ? 'cyan-border--active' : ''}`} aria-hidden="true">
        {/* Four edge lines */}
        <div className="cyan-edge cyan-edge--top" />
        <div className="cyan-edge cyan-edge--bottom" />
        <div className="cyan-edge cyan-edge--left" />
        <div className="cyan-edge cyan-edge--right" />

        {/* Corner highlights */}
        <div className="cyan-corner cyan-corner--tl" />
        <div className="cyan-corner cyan-corner--tr" />
        <div className="cyan-corner cyan-corner--bl" />
        <div className="cyan-corner cyan-corner--br" />

        {/* Flowing light beams */}
        <div className="cyan-beam cyan-beam--horizontal cyan-beam--top" />
        <div className="cyan-beam cyan-beam--horizontal cyan-beam--bottom" />
        <div className="cyan-beam cyan-beam--vertical cyan-beam--left" />
        <div className="cyan-beam cyan-beam--vertical cyan-beam--right" />
      </div>
    </>
  );
}

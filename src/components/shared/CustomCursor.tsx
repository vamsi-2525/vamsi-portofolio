'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 15 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot hidden lg:block"
        style={{ left: cursorX, top: cursorY }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring hidden lg:block"
        style={{ left: ringX, top: ringY }}
      />
    </>
  );
}

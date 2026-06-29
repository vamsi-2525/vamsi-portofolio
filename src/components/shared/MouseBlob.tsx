'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseBlob() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -z-10"
      animate={{
        x: mousePosition.x - 192, // subtract half width to center
        y: mousePosition.y - 192,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 2,
      }}
    />
  );
}

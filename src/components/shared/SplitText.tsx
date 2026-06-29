'use client';

import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words';
}

export default function SplitText({ text, className = '', delay = 0, type = 'chars' }: SplitTextProps) {
  const elements = type === 'chars' ? text.split('') : text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {elements.map((element, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.5,
            delay: delay + i * (type === 'chars' ? 0.03 : 0.1),
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
        >
          {element === ' ' ? '\u00A0' : element}
          {type === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}

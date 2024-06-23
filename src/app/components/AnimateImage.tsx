'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import style from '../../sass/main/about.module.scss'

interface AnimateImageProps {
  children: ReactNode;
}

const AnimateImage = ({ children }: AnimateImageProps) => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      animate={{ y: ['-50%', '10%', '-4%', '2%', '0'], opacity: [0.1, 0.3, 0.5, 0.7, 1] }}
      className={style.img}
    >
      {children}
    </motion.div>
  );
};

export { AnimateImage };

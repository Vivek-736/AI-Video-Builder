"use client";
import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

interface FooterVariants extends Variants {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: { duration: number; ease: string; staggerChildren?: number };
  };
}

interface TextVariants extends Variants {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: { duration: number; delay?: number };
  };
  hover: {
    scale: number;
    color: string;
    transition: { duration: number };
  };
}

interface HeartVariants extends Variants {
  pulse: {
    scale: number | number[];
    transition: {
      duration: number;
      repeat: number;
      repeatType: 'loop' | 'reverse' | 'mirror';
    };
  };
}

const Footer: React.FC = () => {
  const { scrollY } = useScroll();
  const gradientOpacity = useTransform(scrollY, [0, 500], [0.5, 1]);

  const footerVariants: FooterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const textVariants: TextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      color: '#f472b6',
      transition: { duration: 0.3 },
    },
  };

  const heartVariants: HeartVariants = {
    pulse: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 dark:from-indigo-700 dark:via-purple-800 dark:to-pink-700 text-white w-full py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      style={{ opacity: gradientOpacity }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center relative z-10">
        <motion.div
          className="text-center text-base sm:text-lg md:text-xl font-bold tracking-wider drop-shadow-md"
          variants={textVariants}
          whileHover="hover"
        >
          Engraved with{' '}
          <motion.span
            className="inline-block"
            variants={heartVariants}
            animate="pulse"
          >
            💖
          </motion.span>{' '}
          by Vivek
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

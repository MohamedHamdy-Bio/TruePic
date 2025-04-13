import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/20',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg shadow-secondary-500/20',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-md font-medium transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
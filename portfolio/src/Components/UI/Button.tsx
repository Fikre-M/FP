import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-blue-600 hover:bg-blue-700 text-white
      focus:ring-blue-500 shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-gray-600 hover:bg-gray-700 text-white
      focus:ring-gray-500 shadow-sm hover:shadow-md
    `,
    outline: `
      border border-gray-300 dark:border-gray-600 bg-transparent
      hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300
      focus:ring-gray-500
    `,
    ghost: `
      bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800
      text-gray-700 dark:text-gray-300 focus:ring-gray-500
    `,
    danger: `
      bg-red-600 hover:bg-red-700 text-white
      focus:ring-red-500 shadow-sm hover:shadow-md
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const isDisabled = disabled || loading;

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
          {loadingText || 'Loading...'}
        </>
      ) : (
        <>
          {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
          {children}
          {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
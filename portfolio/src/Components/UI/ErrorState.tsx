import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  variant?: 'error' | 'warning' | 'info';
  showRetry?: boolean;
  showHome?: boolean;
  onRetry?: () => void;
  onHome?: () => void;
  className?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'We encountered an error while loading this content. Please try again.',
  variant = 'error',
  showRetry = true,
  showHome = false,
  onRetry,
  onHome,
  className = ''
}) => {
  const variants = {
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      icon: 'text-red-500 dark:text-red-400',
      title: 'text-red-800 dark:text-red-200',
      message: 'text-red-600 dark:text-red-300'
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-500 dark:text-yellow-400',
      title: 'text-yellow-800 dark:text-yellow-200',
      message: 'text-yellow-600 dark:text-yellow-300'
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'text-blue-500 dark:text-blue-400',
      title: 'text-blue-800 dark:text-blue-200',
      message: 'text-blue-600 dark:text-blue-300'
    }
  };

  const style = variants[variant];

  return (
    <div 
      className={`
        ${style.bg} ${style.border} border rounded-lg p-6 text-center max-w-md mx-auto
        ${className}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex justify-center mb-4">
        <AlertTriangle 
          className={`w-12 h-12 ${style.icon}`}
          aria-hidden="true"
        />
      </div>
      
      <h3 className={`text-lg font-semibold mb-2 ${style.title}`}>
        {title}
      </h3>
      
      <p className={`text-sm mb-6 ${style.message}`}>
        {message}
      </p>
      
      <div className="flex gap-3 justify-center">
        {showRetry && onRetry && (
          <button
            onClick={onRetry}
            className="
              inline-flex items-center gap-2 px-4 py-2 
              bg-blue-600 hover:bg-blue-700 
              text-white text-sm font-medium rounded-lg
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            "
            aria-label="Retry loading content"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>
        )}
        
        {showHome && onHome && (
          <button
            onClick={onHome}
            className="
              inline-flex items-center gap-2 px-4 py-2 
              bg-gray-600 hover:bg-gray-700 
              text-white text-sm font-medium rounded-lg
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
            "
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
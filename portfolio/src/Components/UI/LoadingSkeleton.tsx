import React from 'react';

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'avatar' | 'image' | 'button';
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'text',
  width = 'w-full',
  height = 'h-4',
  className = '',
  count = 1
}) => {
  const baseClasses = 'animate-pulse bg-gray-300 dark:bg-gray-600 rounded';
  
  const variants = {
    card: 'w-full h-64 rounded-lg',
    text: `${width} ${height}`,
    avatar: 'w-12 h-12 rounded-full',
    image: 'w-60 h-45 rounded-xl',
    button: 'w-24 h-10 rounded-lg'
  };

  const skeletonClass = `${baseClasses} ${variants[variant]} ${className}`;

  if (count === 1) {
    return <div className={skeletonClass} aria-label="Loading..." />;
  }

  return (
    <div className="space-y-3" aria-label="Loading content...">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={skeletonClass} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
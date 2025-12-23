import React from 'react';
import { Search, FolderOpen, Plus, Filter } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  variant?: 'search' | 'data' | 'filter' | 'create';
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  illustration?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  variant = 'data',
  actionLabel,
  onAction,
  className = '',
  illustration
}) => {
  const variants = {
    search: {
      icon: Search,
      defaultTitle: 'No results found',
      defaultMessage: 'Try adjusting your search terms or filters to find what you\'re looking for.',
      defaultAction: 'Clear filters'
    },
    data: {
      icon: FolderOpen,
      defaultTitle: 'No data available',
      defaultMessage: 'There\'s nothing to show here yet. Check back later or try refreshing the page.',
      defaultAction: 'Refresh'
    },
    filter: {
      icon: Filter,
      defaultTitle: 'No matches found',
      defaultMessage: 'No items match your current filter criteria. Try adjusting your filters.',
      defaultAction: 'Reset filters'
    },
    create: {
      icon: Plus,
      defaultTitle: 'Get started',
      defaultMessage: 'Create your first item to get started with this section.',
      defaultAction: 'Create new'
    }
  };

  const config = variants[variant];
  const Icon = config.icon;
  
  const displayTitle = title || config.defaultTitle;
  const displayMessage = message || config.defaultMessage;
  const displayAction = actionLabel || config.defaultAction;

  return (
    <div 
      className={`
        flex flex-col items-center justify-center py-16 px-6 text-center
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {illustration || (
        <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Icon 
            className="w-12 h-12 text-gray-400 dark:text-gray-500" 
            aria-hidden="true"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {displayTitle}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {displayMessage}
      </p>
      
      {onAction && (
        <button
          onClick={onAction}
          className="
            inline-flex items-center gap-2 px-6 py-3
            bg-blue-600 hover:bg-blue-700 
            text-white font-medium rounded-lg
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          "
          aria-label={displayAction}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
          {displayAction}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
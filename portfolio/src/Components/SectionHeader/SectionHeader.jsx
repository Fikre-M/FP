import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = '', 
  titleClassName = '',
  subtitleClassName = '',
  showDivider = true,
  dividerClassName = '',
  animated = true 
}) => {
  return (
    <div className={`section-header ${className}`}>
      <h2 className={`section-title ${titleClassName} ${animated ? 'animate-fade-in-up' : ''}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`section-subtitle ${subtitleClassName} ${animated ? 'animate-fade-in-up animate-delay-200' : ''}`}>
          {subtitle}
        </p>
      )}
      
      {showDivider && (
        <div className={`section-divider ${dividerClassName} ${animated ? 'animate-fade-in-up animate-delay-300' : ''}`}></div>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
  showDivider: PropTypes.bool,
  dividerClassName: PropTypes.string,
  animated: PropTypes.bool,
};

export default SectionHeader;
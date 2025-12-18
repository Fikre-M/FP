import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../../types';

const SEO: React.FC<SEOProps> = ({
  title = 'Fikremariam Kassa - Full Stack Developer',
  description = 'Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio and projects.',
  keywords = 'Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development, Portfolio',
  image = '/images/profile-og.jpg',
  url = 'https://fikremariam-portfolio.com'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="author" content="Fikremariam Kassa" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
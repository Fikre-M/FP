import React, { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ResumeDownload: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/resume/Fikremariam_Kassa_Resume.pdf';
      link.download = 'Fikremariam_Kassa_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = () => {
    window.open('/resume/Fikremariam_Kassa_Resume.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8 text-white" />
          <div>
            <h3 className="text-xl font-bold text-white">My Resume</h3>
            <p className="text-blue-100 text-sm">Download or preview my latest resume</p>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download</span>
            </>
          )}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePreview}
          className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          <Eye className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResumeDownload;
import { createWriteStream, existsSync, mkdirSync, unlink } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const unlinkAsync = promisify(unlink);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
    filename: 'healthcare-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    filename: 'tour-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    filename: 'shelter-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
    filename: 'portfolio-bg.jpg'
  }
];

const assetsDir = join(__dirname, '../assets');

// Create assets directory if it doesn't exist
if (!existsSync(assetsDir)) {
  mkdirSync(assetsDir, { recursive: true });
}

// Download each image
const downloadImage = ({ url, filename }) => {
  return new Promise((resolve, reject) => {
    const filePath = join(assetsDir, filename);
    const file = createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', async (err) => {
      try {
        await unlinkAsync(filePath);
      } catch (e) {
        console.error(`Error cleaning up ${filename}:`, e.message);
      }
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

// Download all images
const downloadAllImages = async () => {
  try {
    console.log('Starting image downloads...');
    await Promise.all(images.map(downloadImage));
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages();

# Fikremariam Kassa - Portfolio Website

A modern, responsive portfolio website built with cutting-edge web technologies. This portfolio showcases my skills, projects, and problem-solving abilities as a Full Stack Developer.

## 🚀 Features

### Core Features
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Lazy loading, code splitting, and optimized assets

### Sections
- **About**: Personal introduction with downloadable resume
- **Skills**: Interactive skill showcase with proficiency levels
- **Projects**: Filterable project gallery with live demos and source code
- **Problem Solving**: Algorithmic challenges with detailed solutions
- **Contact**: Working contact form with EmailJS integration

### Technical Features
- **TypeScript**: Type-safe development with better IDE support
- **Error Boundaries**: Graceful error handling and recovery
- **Loading States**: Smooth loading indicators and skeleton screens
- **Toast Notifications**: User feedback for actions and form submissions
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Code Syntax Highlighting**: Beautiful code display in problem-solving section

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Libraries & Tools
- **React Hook Form** - Performant forms with easy validation
- **React Helmet Async** - Document head management for SEO
- **React Hot Toast** - Beautiful toast notifications
- **React Syntax Highlighter** - Code syntax highlighting
- **Lucide React** - Beautiful & consistent icons
- **EmailJS** - Send emails directly from client-side

### Development & Testing
- **Vitest** - Fast unit testing framework
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fikre-M/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Add your resume**
   Place your resume PDF file at `public/resume/Fikremariam_Kassa_Resume.pdf`

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/           # Project images and assets
│   └── resume/           # Resume PDF file
├── src/
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React contexts (Theme, etc.)
│   ├── data/            # Static data (projects, skills, problems)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── test/            # Test setup and utilities
├── .env                 # Environment variables
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.js       # Vite configuration
└── vitest.config.ts     # Vitest configuration
```

## 🎨 Customization

### Adding New Projects
Edit `src/data/projects.ts` to add your projects:

```typescript
{
  id: 7,
  img: "/images/your-project.jpg",
  name: "Your Project Name",
  desc: "Project description...",
  github: "https://github.com/username/repo",
  liveUrl: "https://your-project.com",
  category: "frontend", // frontend, backend, full-stack, app
  technologies: ["React", "TypeScript", "Tailwind"],
  featured: true, // Optional: highlight important projects
}
```

### Adding New Skills
Edit `src/data/skills.ts` to customize your skills:

```typescript
{
  id: "new-skill",
  icon: <YourIcon className="text-blue-600 text-5xl mb-4" />,
  title: "Your Skill",
  description: "Skill description...",
  level: 85, // 0-100
}
```

### Adding Problem Solutions
Edit `src/data/problemSolutions.ts` to add coding challenges:

```typescript
{
  id: 7,
  title: "Problem Title",
  problem: "Problem description...",
  solution: "Solution explanation...",
  code: `// Your code here`,
  language: "javascript",
  complexity: "Medium", // Easy, Medium, Hard
  tags: ["Array", "Algorithm"],
}
```

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📧 Contact Form Setup

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Bundle Analysis**: Optimized chunk sizes for faster loading
- **Asset Optimization**: Compressed images and minified code
- **Caching**: Proper cache headers for static assets

## 🧪 Testing

Run tests with:
```bash
npm run test        # Run tests once
npm run test:ui     # Run tests with UI
npm run test:watch  # Run tests in watch mode
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Fikremariam Kassa**
- GitHub: [@Fikre-M](https://github.com/Fikre-M)
- LinkedIn: [Fikremariam Kassa](https://www.linkedin.com/in/fikremariam-kassa-28916062/)
- Email: fikreddu@email.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)
- Build tool by [Vite](https://vitejs.dev/)

---

⭐ Star this repository if you found it helpful!
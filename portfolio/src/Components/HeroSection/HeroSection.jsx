import React, { useState, useEffect, useCallback } from "react";
import {
    Code2,
    Github,
    Linkedin,
    Mail,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Import local images
import healthcareBg from "../../assets/healthcare-bg.jpg";
import tourBg from "../../assets/tour-bg.jpg";
import shelterBg from "../../assets/shelter-bg.jpg";
import portfolioBg from "../../assets/portfolio-bg.jpg";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const slides = [
        {
            image: healthcareBg,
            title: "AI Healthcare & Medical Appointment System",
            description: "Full-stack App",
        },
        {
            image: tourBg,
            title: "AI Ethiopian Tour + Cultural Concierge App",
            description: "Full-stack App",
        },
        {
            image: shelterBg,
            title: "AI Shelter Operations & Case Management System",
            description: "Frontend App",
        },
        {
            image: portfolioBg,
            title: "Personal Portfolio",
            description: "FikreWorks",
        },
    ];

    const scrollToSection = useCallback((sectionId) => {
        console.log('Scrolling to section:', sectionId);
        const element = document.getElementById(sectionId);
        console.log('Found element:', element);
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
        } else {
            console.error('Element not found:', sectionId);
        }
    }, []);

    const handleButtonClick = useCallback((sectionId) => {
        console.log('Button clicked for section:', sectionId);
        // Add visual feedback
        const button = document.activeElement;
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }
        scrollToSection(sectionId);
    }, [scrollToSection]);

    const handleSocialClick = useCallback((url) => {
        console.log('Opening URL:', url);
        // Add visual feedback
        const button = document.activeElement;
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowRight') {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        } else if (e.key === 'ArrowLeft') {
            setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
        } else if (e.key >= '1' && e.key <= slides.length.toString()) {
            // Jump to specific slide (1-9)
            const slideIndex = parseInt(e.key) - 1;
            if (slideIndex < slides.length) {
                setCurrentSlide(slideIndex);
            }
        }
    }, [slides.length]);

    // Auto-advance slides when not hovered
    useEffect(() => {
        if (!isHovered) {
            const timer = setTimeout(() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [currentSlide, isHovered, slides.length]);

    // Add keyboard event listeners
    useEffect(() => {
        const handleKeyDownWrapper = (e) => handleKeyDown(e);
        window.addEventListener('keydown', handleKeyDownWrapper);
        return () => window.removeEventListener('keydown', handleKeyDownWrapper);
    }, [handleKeyDown]);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = slides.map(slide => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = slide.image;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading images:', error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [slides]);

    return (
      <section
        id="HeroSection"
        className="relative min-h-screen overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        role="region"
        aria-label="Hero Section"
      >
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90"
                aria-hidden="true"
              ></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus on click
            className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700/90 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white" size={24} aria-hidden="true" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus on click
            className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700/90 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white" size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent ${
                index === currentSlide
                  ? "bg-blue-500 w-8"
                  : "bg-gray-400/50 hover:bg-gray-300 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-30 min-h-screen flex items-center justify-center px-4 py-12 md:py-24">
          <div className="max-w-4xl w-full text-center px-4 sm:px-6 lg:px-8">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-white text-lg">Loading...</div>
              </div>
            )}

            {/* Project Label */}
            <div className="mb-4 sm:mb-6 inline-block px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-500/50 transform transition-all duration-500 ease-in-out">
              <p className="text-blue-200 text-sm sm:text-base font-semibold">
                {slides[currentSlide].title}
              </p>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl transform transition-all duration-500 ease-in-out">
              Fikremariam Kassa
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 transform transition-all duration-500 ease-in-out">
              <Code2 className="text-blue-400 drop-shadow-lg w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-semibold drop-shadow-lg">
                Web Developer / Software Engineer
              </h2>
            </div>

            {/* Value Statement */}
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 max-w-2xl mx-auto drop-shadow-lg font-medium leading-relaxed transform transition-all duration-500 ease-in-out">
              I build responsive, user-friendly, and industry-level web applications.
            </p>

            {/* Current Project Description */}
            <p className="text-sm sm:text-base text-gray-200 mb-8 sm:mb-10 italic drop-shadow-md transform transition-all duration-500 ease-in-out">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 transform transition-all duration-500 ease-in-out relative z-40">
              <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('View Projects button clicked!');
                    handleButtonClick('projects');
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-2xl hover:shadow-blue-500/50 text-center cursor-pointer"
                aria-label="View my projects"
                type="button"
                style={{ pointerEvents: 'auto' }}
              >
                View Projects
              </button>
              <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Contact Me button clicked!');
                    handleButtonClick('contact');
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-xl text-center cursor-pointer"
                aria-label="Contact me"
                type="button"
                style={{ pointerEvents: 'auto' }}
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSocialClick('https://github.com/Fikre-M');
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-xl"
                aria-label="GitHub profile (opens in new tab)"
                title="View my GitHub profile"
                type="button"
              >
                <Github className="text-white w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </button>
              <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSocialClick(
                      "https://www.linkedin.com/in/fikremariam-k-28916062/",
                    );
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-xl"
                aria-label="LinkedIn profile (opens in new tab)"
                title="Connect with me on LinkedIn"
                type="button"
              >
                <Linkedin className="text-white w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </button>
              <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleButtonClick('contact');
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-xl"
                aria-label="Go to contact section"
                title="Contact me"
                type="button"
              >
                <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

import React, { useState, useEffect } from "react";
import {
    Code2,
    Github,
    Linkedin,
    Mail,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
        title: "E-Commerce Platform",
        description: "Full-stack shopping experience",
        },
        {
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
        title: "Analytics Dashboard",
        description: "Real-time data visualization",
        },
        {
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
        title: "Social Media App",
        description: "Connect and share with friends",
        },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="HeroSection" className="relative min-h-screen overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90"></div>
            </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
        >
            <ChevronLeft className="text-white" size={24} />
        </button>

        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/70 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
        >
            <ChevronRight className="text-white" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                    ? "bg-blue-500 w-8"
                    : "bg-gray-400/50 hover:bg-gray-300 w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
            ></button>
            ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full text-center">
            {/* Project Label */}
            <div className="mb-6 inline-block px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-500/50">
                <p className="text-blue-200 text-sm font-semibold">
                {slides[currentSlide].title}
                </p>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                Fikremariam Kassa
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <Code2 className="text-blue-400 drop-shadow-lg" size={28} />
                <h2 className="text-2xl md:text-3xl text-blue-300 font-semibold drop-shadow-lg">
                Junior Web Developer
                </h2>
            </div>

            {/* Value Statement */}
            <p className="text-xl md:text-2xl text-white mb-3 max-w-2xl mx-auto drop-shadow-lg font-medium">
                I build responsive, user-friendly, new generation and indestry-level
                web applications.
            </p>

            {/* Current Project Description */}
            <p className="text-base text-gray-200 mb-10 italic drop-shadow-md">
                {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
                >
                View Projects
                </button>
                <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                Contact Me
                </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
                <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-400 shadow-xl"
                >
                <Github className="text-white" size={22} />
                </a>
                <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-400 shadow-xl"
                >
                <Linkedin className="text-white" size={22} />
                </a>
                <a
                href="mailto:john@example.com"
                className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-400 shadow-xl"
                >
                <Mail className="text-white" size={22} />
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}

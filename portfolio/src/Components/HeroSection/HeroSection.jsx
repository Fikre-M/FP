import React, { useState } from "react";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
    const [hoveredTech, setHoveredTech] = useState(null);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const techStack = [
        {
        name: "HTML5",
        color: "#E34F26",
        path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        },
        {
        name: "CSS3",
        color: "#1572B6",
        path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
        },
        {
        name: "JavaScript",
        color: "#F7DF1E",
        path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
        },
        {
        name: "React",
        color: "#61DAFB",
        path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
        },
    ];

    return (
        <section
        id="HeroSection"
        className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center px-4 py-12"
        >
        <div className="max-w-4xl w-full text-center">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-8 md:p-12 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-600">
            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Fikremariam Kassa
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <Code2 className="text-blue-400" size={24} />
                <h2 className="text-xl md:text-2xl text-blue-300 font-semibold">
                Junior Web Developer
                </h2>
            </div>

            {/* Value Statement */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                I build responsive, user-friendly, new generation and indestry-level web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                >
                View Projects
                </button>
                <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                Contact Me
                </button>
            </div>

            {/* Tech Stack Icons */}
            <div className="mb-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                Tech Stack
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                {techStack.map((tech, index) => (
                    <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredTech(index)}
                    onMouseLeave={() => setHoveredTech(null)}
                    >
                    <div
                        className={`w-14 h-14 bg-gray-600/50 rounded-lg flex items-center justify-center border border-gray-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer ${
                        hoveredTech === index
                            ? "ring-2 ring-blue-500 shadow-blue-500/25"
                            : ""
                        }`}
                    >
                        <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill={tech.color}
                        >
                        <path d={tech.path} />
                        </svg>
                    </div>
                    {hoveredTech === index && (
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                        {tech.name}
                        </span>
                    )}
                    </div>
                ))}
                </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-6">
                <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600/50 rounded-full flex items-center justify-center border border-gray-500 hover:bg-gray-500/50 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-500"
                >
                <Github className="text-gray-300" size={20} />
                </a>
                <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600/50 rounded-full flex items-center justify-center border border-gray-500 hover:bg-gray-500/50 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-500"
                >
                <Linkedin className="text-gray-300" size={20} />
                </a>
                <a
                href="mailto:john@example.com"
                className="w-12 h-12 bg-gray-600/50 rounded-full flex items-center justify-center border border-gray-500 hover:bg-gray-500/50 transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-blue-500"
                >
                <Mail className="text-gray-300" size={20} />
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}
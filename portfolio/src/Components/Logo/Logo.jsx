import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logoContainer} style={{ color: "#FFFFFF" }}>
        <svg
            viewBox="0 0 3000 120"
            className="w-84 h-12" // Tailwind classes for width and height
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* First A */}
            <line
            x1="20"
            y1="100"
            x2="40"
            y2="20"
            stroke="#FFFFFF"
            strokeWidth="16"
            />
            <line
            x1="60"
            y1="100"
            x2="40"
            y2="20"
            stroke="#FFFFFF"
            strokeWidth="16"
            />

            {/* Z */}
            <line
            x1="70"
            y1="25"
            x2="120"
            y2="25"
            stroke="#FFFFFF"
            strokeWidth="16"
            />
            <line
            x1="113"
            y1="30"
            x2="75"
            y2="98"
            stroke="#FFFFFF"
            strokeWidth="16"
            />
            <line
            x1="70"
            y1="100"
            x2="120"
            y2="100"
            stroke="#FFFFFF"
            strokeWidth="16"
            />

            {/* Second A */}
            <line
            x1="130"
            y1="100"
            x2="150"
            y2="20"
            stroke="#FFFFFF"
            strokeWidth="16"
            />
            <line
            x1="170"
            y1="100"
            x2="150"
            y2="20"
            stroke="#FFFFFF"
            strokeWidth="16"
            />

            {/* G */}
            {/* G - refined to reduce the right gap */}
            <path
            d="M240 30 
            Q200 30, 200 65 
            Q200 100, 240 100 
            Q260 100, 255 65"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="16"
            />
            <line
            x1="215"
            y1="65"
            x2="258"
            y2="65"
            stroke="#FFFFFF"
            strokeWidth="16"
            />

            {/* E */}
            <line
            x1="280"
            y1="20"
            x2="340"
            y2="20"
            stroke="blue"
            strokeWidth="16"
            />
            <line
            x1="280"
            y1="60"
            x2="315"
            y2="60"
            stroke="blue"
            strokeWidth="16"
            />
            <line
            x1="280"
            y1="100"
            x2="340"
            y2="100"
            stroke="blue"
            strokeWidth="16"
            />
        </svg>
        </div>
    );
};

export default Logo;

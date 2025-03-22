import React from 'react';

interface ServiceIllustrationProps {
    type: 'web' | 'app' | 'design' | 'ecommerce';
    className?: string;
}

const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ type, className = '' }) => {
    const illustrations = {
        web: (
            <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Web Development Illustration */}
                <path d="M100 100H300V300H100V100Z" stroke="url(#web_stroke)" strokeWidth="2" fill="none"/>
                <path d="M100 150H300" stroke="url(#web_stroke)" strokeWidth="2"/>
                <path d="M100 200H300" stroke="url(#web_stroke)" strokeWidth="2"/>
                <path d="M100 250H300" stroke="url(#web_stroke)" strokeWidth="2"/>
                <circle cx="200" cy="125" r="10" fill="url(#web_circle)"/>
                <circle cx="200" cy="175" r="10" fill="url(#web_circle)"/>
                <circle cx="200" cy="225" r="10" fill="url(#web_circle)"/>
                <defs>
                    <linearGradient id="web_stroke" x1="100" y1="100" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6"/>
                        <stop offset="1" stopColor="#60A5FA"/>
                    </linearGradient>
                    <linearGradient id="web_circle" x1="190" y1="115" x2="210" y2="135" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6"/>
                        <stop offset="1" stopColor="#60A5FA"/>
                    </linearGradient>
                </defs>
            </svg>
        ),
        app: (
            <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* App Development Illustration */}
                <rect x="100" y="50" width="200" height="300" rx="20" stroke="url(#app_stroke)" strokeWidth="2"/>
                <circle cx="200" cy="350" r="20" fill="url(#app_circle)"/>
                <path d="M150 100H250" stroke="url(#app_line)" strokeWidth="2"/>
                <path d="M150 150H250" stroke="url(#app_line)" strokeWidth="2"/>
                <path d="M150 200H250" stroke="url(#app_line)" strokeWidth="2"/>
                <circle cx="200" cy="80" r="15" fill="url(#app_circle)"/>
                <defs>
                    <linearGradient id="app_stroke" x1="100" y1="50" x2="300" y2="350" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9333EA"/>
                        <stop offset="1" stopColor="#A78BFA"/>
                    </linearGradient>
                    <linearGradient id="app_circle" x1="185" y1="65" x2="215" y2="95" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9333EA"/>
                        <stop offset="1" stopColor="#A78BFA"/>
                    </linearGradient>
                    <linearGradient id="app_line" x1="150" y1="100" x2="250" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9333EA"/>
                        <stop offset="1" stopColor="#A78BFA"/>
                    </linearGradient>
                </defs>
            </svg>
        ),
        design: (
            <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* UI/UX Design Illustration */}
                <rect x="50" y="50" width="300" height="300" rx="10" stroke="url(#design_stroke)" strokeWidth="2"/>
                <circle cx="200" cy="200" r="100" stroke="url(#design_circle)" strokeWidth="2"/>
                <path d="M200 100V300" stroke="url(#design_line)" strokeWidth="2"/>
                <path d="M100 200H300" stroke="url(#design_line)" strokeWidth="2"/>
                <circle cx="200" cy="200" r="20" fill="url(#design_dot)"/>
                <defs>
                    <linearGradient id="design_stroke" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F59E0B"/>
                        <stop offset="1" stopColor="#FB923C"/>
                    </linearGradient>
                    <linearGradient id="design_circle" x1="100" y1="100" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F59E0B"/>
                        <stop offset="1" stopColor="#FB923C"/>
                    </linearGradient>
                    <linearGradient id="design_line" x1="100" y1="200" x2="300" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F59E0B"/>
                        <stop offset="1" stopColor="#FB923C"/>
                    </linearGradient>
                    <linearGradient id="design_dot" x1="180" y1="180" x2="220" y2="220" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F59E0B"/>
                        <stop offset="1" stopColor="#FB923C"/>
                    </linearGradient>
                </defs>
            </svg>
        ),
        ecommerce: (
            <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* E-commerce Illustration */}
                <path d="M50 100H350" stroke="url(#ecommerce_line)" strokeWidth="2"/>
                <path d="M50 200H350" stroke="url(#ecommerce_line)" strokeWidth="2"/>
                <path d="M50 300H350" stroke="url(#ecommerce_line)" strokeWidth="2"/>
                <path d="M100 50V350" stroke="url(#ecommerce_line)" strokeWidth="2"/>
                <path d="M200 50V350" stroke="url(#ecommerce_line)" strokeWidth="2"/>
                <path d="M300 50V350" stroke="url(#ecommerce_line)" strokeWidth="2"/>
                <circle cx="200" cy="200" r="50" stroke="url(#ecommerce_circle)" strokeWidth="2"/>
                <path d="M150 150L250 250" stroke="url(#ecommerce_diagonal)" strokeWidth="2"/>
                <path d="M250 150L150 250" stroke="url(#ecommerce_diagonal)" strokeWidth="2"/>
                <defs>
                    <linearGradient id="ecommerce_line" x1="50" y1="100" x2="350" y2="300" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#059669"/>
                        <stop offset="1" stopColor="#34D399"/>
                    </linearGradient>
                    <linearGradient id="ecommerce_circle" x1="150" y1="150" x2="250" y2="250" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#059669"/>
                        <stop offset="1" stopColor="#34D399"/>
                    </linearGradient>
                    <linearGradient id="ecommerce_diagonal" x1="150" y1="150" x2="250" y2="250" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#059669"/>
                        <stop offset="1" stopColor="#34D399"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    };

    return illustrations[type];
};

export default ServiceIllustration; 
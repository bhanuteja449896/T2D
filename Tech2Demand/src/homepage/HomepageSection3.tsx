import React from 'react';
import './HomepageSection3.css';

const HomepageSection3: React.FC = () => {
    return (
        <div className="homepage-section-3-bg min-h-screen flex items-center justify-center font-sans text-[#141b2d] antialiased p-6 relative w-full overflow-hidden">
            {/* Main Container */}
            <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Complex Illustration */}
                <div className="relative w-full max-w-[550px] aspect-square mx-auto flex items-center justify-center">
                    
                    {/* Ambient Glow Behind Illustration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
                    <div className="absolute top-[60%] left-[40%] w-[60%] h-[60%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>

                    {/* Concentric Rings */}
                    <div className="absolute w-full h-full rounded-full border border-blue-200/50"></div>
                    <div className="absolute w-[80%] h-[80%] rounded-full border border-blue-200/60"></div>
                    <div className="absolute w-[60%] h-[60%] rounded-full border border-blue-200/70"></div>
                    <div className="absolute w-[40%] h-[40%] rounded-full border border-blue-200/80"></div>

                    {/* Floating Icons (Positioned via exact percentages relative to center) */}
                    
                    {/* 1. Outer Top (Message) */}
                    <div className="absolute top-[4%] left-[46%] icon-node w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center shadow-float">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>
                    </div>

                    {/* 2. Inner Top Left (Large Message) */}
                    <div className="absolute top-[25%] left-[24%] icon-node w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-float">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>
                    </div>

                    {/* 3. Outer Top Right (Link) */}
                    <div className="absolute top-[22%] left-[64%] icon-node w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-float">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    </div>

                    {/* 4. Inner Right (Mail) */}
                    <div className="absolute top-[30%] left-[82%] icon-node w-12 h-12 bg-[#3366ff] rounded-2xl flex items-center justify-center shadow-float">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>

                    {/* 5. Far Right (Settings/Sliders) */}
                    <div className="absolute top-[48%] left-[91%] icon-node w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-float">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                    </div>

                    {/* 6. Outer Bottom Right (User) */}
                    <div className="absolute top-[64%] left-[95%] icon-node w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center shadow-float">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>

                    {/* 7. Inner Bottom Right (Video) */}
                    <div className="absolute top-[75%] left-[80%] icon-node w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-float">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    </div>

                    {/* 8. Outer Bottom (Link) */}
                    <div className="absolute top-[88%] left-[64%] icon-node w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center shadow-float">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    </div>

                    {/* 9. Inner Bottom Left (Mail) */}
                    <div className="absolute top-[82%] left-[36%] icon-node w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center shadow-float">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>

                    {/* 10. Outer Bottom Left (User Large) */}
                    <div className="absolute top-[72%] left-[17%] icon-node w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-float">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>

                    {/* 11. Far Left (Message) */}
                    <div className="absolute top-[52%] left-[5%] icon-node w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center shadow-float">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line></svg>
                    </div>

                    {/* 12. Inner Left (User) */}
                    <div className="absolute top-[38%] left-[15%] icon-node w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center shadow-float">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>

                    {/* Central Dark Box */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-[140px] lg:h-[140px] rounded-[32px] bg-gradient-to-br from-[#28385e] to-[#121a2c] shadow-center-box flex items-center justify-center z-10 border border-white/5">
                        {/* Handshake SVG */}
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                            <path d="M14.4 14.4 9.6 9.6"></path>
                            <path d="M18 10 14 6"></path>
                            <path d="m10 18-4-4"></path>
                            <path d="M8 12 12 8"></path>
                            <path d="M16 16 12 12"></path>
                            <path d="m5 15-2.5 2.5a2.12 2.12 0 0 0 3 3L8 18"></path>
                            <path d="m19 9 2.5-2.5a2.12 2.12 0 0 0-3-3L16 6"></path>
                            <path d="M6.5 13.5 10 17l-1 1-3.5-3.5 1-1Z"></path>
                            <path d="M17.5 10.5 14 7l1-1 3.5 3.5-1 1Z"></path>
                        </svg>
                    </div>

                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col gap-6 lg:pl-10">
                    {/* Eyebrow Text */}
                    <p className="text-[13px] font-semibold tracking-[0.1em] text-brand-lightGray uppercase">
                        Collaboration Built for Business
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-[40px] lg:text-[46px] font-bold text-brand-dark leading-[1.15] tracking-tight">
                        Unify Teams & Partners.<br /> 
                        Drive Seamless B2B<br /> 
                        Lead Flows.
                    </h1>

                    {/* Subheading / Paragraph */}
                    <p className="text-[17px] text-[#4b5563] leading-relaxed max-w-[500px]">
                        A unified platform for managing partner interactions, aligning sales and marketing, and accelerating lead cycles with shared insights.
                    </p>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-4 mt-2 mb-2">
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141b2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#374151] text-[16px]">Unified B2B communications hub</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141b2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#374151] text-[16px]">Real-time collaborative analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141b2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#374151] text-[16px]">Seamless data sharing across platforms</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141b2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#374151] text-[16px]">Scalable user access control</span>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-2">
                        <button className="bg-[#1a233a] hover:bg-[#253251] text-white text-[15px] font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-md">
                            REQUEST A DEMO
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomepageSection3;

import React from 'react';
import './HomepageSection8.css';

const HomepageSection8: React.FC = () => {
    return (
        <section className="bg-[#f5f7fa] w-full min-h-screen font-sans antialiased py-16 px-6">
            {/* Main Container */}
            <div className="max-w-[1400px] mx-auto w-full">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    {/* Pill Label */}
                    <div className="bg-[#e4efff] text-[#3163ff] text-[11px] font-bold uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full mb-5">
                        Industry Insights
                    </div>
                    
                    {/* Heading */}
                    <h2 className="text-[28px] md:text-[42px] font-bold text-[#0b1221] leading-tight tracking-tight mb-4">
                        Latest News & Resources
                    </h2>
                    
                    {/* Subheading */}
                    <p className="text-[16px] text-[#64748b] max-w-[600px] leading-relaxed">
                        Stay up-to-date with our experts' analysis, platform updates, and client success stories.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                    
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Image Card (with CSS Illustration) */}
                        <div className="bg-[#e9f0fc] rounded-[24px] h-[340px] flex items-center justify-center relative overflow-hidden">
                            
                            {/* 3D Icon Representation built with CSS */}
                            <div className="relative z-10 w-[160px] h-[160px] bg-gradient-to-br from-[#4a84f6] to-[#1e4fe8] rounded-[40px] icon-shadow flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
                                
                                {/* Play Button */}
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="white" className="ml-2">
                                    <path d="M5 3l14 9-14 9V3z" />
                                </svg>

                                {/* Inner Highlight / Bevel effect */}
                                <div className="absolute inset-0 rounded-[40px] border-[4px] border-white/20"></div>
                                <div className="absolute inset-0 rounded-[40px] border-t-[4px] border-white/40"></div>

                                {/* Floating Panel Right (Code/Data) */}
                                <div className="absolute -right-12 top-6 w-[110px] h-[80px] glass-panel rounded-2xl p-3 flex flex-col gap-1.5 z-20">
                                    <div className="flex gap-1 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                                    </div>
                                    <div className="w-full h-1 bg-white/60 rounded-full"></div>
                                    <div className="w-[70%] h-1 bg-white/60 rounded-full"></div>
                                    <div className="w-[85%] h-1 bg-white/40 rounded-full"></div>
                                    <div className="w-[50%] h-1 bg-white/40 rounded-full mt-1"></div>
                                </div>

                                {/* Floating Panel Left (Chart) */}
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[60px] h-[60px] glass-panel rounded-[18px] flex items-center justify-center z-20">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                    </svg>
                                </div>

                                {/* Wrap Around Ring */}
                                <div className="absolute -bottom-8 -left-6 w-[180px] h-[60px] border-[12px] border-[#6b9cf7] rounded-[50px] opacity-90 z-0 skew-x-12 rotate-[-5deg]"></div>
                            </div>
                        </div>

                        {/* Featured Story Card */}
                        <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
                            <div className="bg-[#f0f4f8] text-[#475569] text-[12px] font-medium px-3.5 py-1.5 rounded-full w-max mb-5">
                                NOV 8
                            </div>
                            <h3 className="text-[26px] md:text-[30px] font-bold text-[#0b1221] leading-[1.2] tracking-tight">
                                How TechLeap Inc. Achieved a 30% Increase in Qualified Leads
                            </h3>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        
                        {/* Platform Updates List Card */}
                        <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex-1">
                            
                            {/* Item 1 */}
                            <div className="flex items-start md:items-center justify-between gap-3 md:gap-6 pb-6 border-b border-gray-100">
                                <div className="flex flex-col">
                                    <div className="text-[11px] text-[#64748b] font-medium tracking-wide uppercase mb-2">
                                        Platform Update | Nov 12
                                    </div>
                                    <h4 className="text-[20px] font-bold text-[#0b1221] leading-tight mb-2">
                                        Introducing Advanced Lead Scoring Rules
                                    </h4>
                                    <p className="text-[14px] text-[#64748b] leading-relaxed max-w-[90%]">
                                        Introducing advanced lead scoring rules in a new platform updates, and client success stories.
                                    </p>
                                </div>
                                <button className="flex-shrink-0 w-10 h-10 bg-[#3163ff] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start md:items-center justify-between gap-3 md:gap-6 pt-6">
                                <div className="flex flex-col">
                                    <div className="text-[11px] text-[#64748b] font-medium tracking-wide uppercase mb-2">
                                        Platform Update | Nov 13
                                    </div>
                                    <h4 className="text-[20px] font-bold text-[#0b1221] leading-tight mb-2">
                                        Streamline Your Partner Collaboration
                                    </h4>
                                    <p className="text-[14px] text-[#64748b] leading-relaxed max-w-[90%]">
                                        Streamline your partner collaboration for new platform updates, and client success stories.
                                    </p>
                                </div>
                                <button className="flex-shrink-0 w-10 h-10 bg-[#3163ff] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Subscribe Card */}
                        <div className="bg-[#121a2f] rounded-[24px] p-8 shadow-xl">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-white leading-[1.2] tracking-tight mb-8 max-w-[85%]">
                                Subscribe to Our Newsletter for Weekly Insights
                            </h3>
                            
                            <div className="bg-[#2a3449] p-1.5 rounded-full flex items-center shadow-inner">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="bg-transparent border-none outline-none text-white placeholder-gray-400 px-3 md:px-5 text-[14px] w-full"
                                />
                                <button className="bg-white text-[#0b1221] font-bold text-[12px] md:text-[13px] px-4 md:px-7 py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Global CTA Button */}
                <div className="flex justify-center">
                    <button className="bg-[#3163ff] text-white font-semibold text-[13px] tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-[0_8px_20px_-6px_rgba(49,99,255,0.5)]">
                        View All Resources
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HomepageSection8;

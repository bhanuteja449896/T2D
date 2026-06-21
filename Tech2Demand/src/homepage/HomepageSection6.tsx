import React from 'react';
import './HomepageSection6.css';

const HomepageSection6: React.FC = () => {
    return (
        <section className="bg-[#f4f6f9] w-full min-h-screen flex items-center justify-center font-sans antialiased p-6">

            {/* CTA Card Container */}
            <div className="relative w-full max-w-[1400px] h-[520px] bg-gradient-to-br from-[#041036] via-[#0d2d85] to-[#295fe3] rounded-[24px] overflow-hidden shadow-2xl shadow-blue-900/10 flex flex-col items-center justify-center text-center p-10 mx-auto border border-blue-900/20">
                
                {/* Ambient Glow Effects */}
                {/* Top Right Glow */}
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-screen filter blur-[110px] opacity-40 pointer-events-none"></div>
                {/* Bottom Left Glow */}
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none"></div>
                
                {/* Dotted Pattern Overlays */}
                {/* Bottom Left Dots */}
                <div className="absolute bottom-0 left-0 w-[60%] h-[70%] bg-dots mask-bottom-left pointer-events-none"></div>
                {/* Top Right Dots */}
                <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-dots mask-top-right pointer-events-none"></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center">
                    
                    {/* Headline */}
                    <h2 className="text-[44px] md:text-[52px] font-bold text-white leading-[1.12] tracking-tight mb-5">
                        Accelerate Your Enterprise<br />Growth Today.
                    </h2>
                    
                    {/* Subheadline */}
                    <p className="text-[18px] md:text-[20px] text-[#b4c4eb] leading-[1.6] max-w-[650px] mb-10">
                        Schedule your personalized demo to see how our<br />platform transforms performance and scalability.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Primary Button */}
                        <button className="bg-white text-[#041036] font-semibold text-[15px] px-8 py-3.5 rounded-[10px] shadow-sm hover:bg-gray-50 transition-colors duration-200">
                            REQUEST A DEMO
                        </button>
                        {/* Secondary Transparent Button */}
                        <button className="bg-white/10 text-white border border-white/20 font-semibold text-[15px] px-8 py-3.5 rounded-[10px] hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm">
                            TALK TO AN EXPERT
                        </button>
                    </div>
                    
                </div>
            </div>

        </section>
    );
};

export default HomepageSection6;

import React from 'react';

const HomepageSection9: React.FC = () => {
    return (
        <section className="bg-[#f7f8fa] w-full min-h-screen font-sans antialiased flex flex-col items-center">

            {/* Footer Container */}
            <div className="w-full max-w-[1400px] px-6 pb-12 z-10 relative">
                <footer className="w-full bg-[#051024] rounded-[16px] md:rounded-[24px] overflow-hidden relative shadow-[0_20px_50px_-15px_rgba(5,16,36,0.3)]">
                    
                    {/* Ambient Glow Effects */}
                    {/* Top Right Glow */}
                    <div className="absolute -top-[20%] -right-[10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#1a4087] rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px] opacity-40 pointer-events-none"></div>
                    {/* Bottom Left Glow */}
                    <div className="absolute -bottom-[20%] -left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#112f66] rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px] opacity-50 pointer-events-none"></div>

                    {/* Main Content Area */}
                    <div className="relative z-10 pt-16 md:pt-24 pb-8 px-10 md:px-16 lg:px-20">
                        
                        {/* Faint Inset Top Separator Line */}
                        <div className="absolute top-[80px] md:top-[100px] left-10 md:left-20 right-10 md:right-20 h-px bg-white/[0.06]"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-12 lg:gap-24 mt-6">
                            
                            {/* Left Column: Logo & Description */}
                            <div className="flex flex-col max-w-[340px]">
                                {/* Logo Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    {/* Custom CSS/SVG Logo */}
                                    <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 4C15 4 11 9 11 16C11 20 12 23 15 25L23 17C23 15 25 13 27 13C29 13 31 15 31 17L35 13C33 8 28 4 22 4Z" fill="url(#gradLight)"/>
                                        <path d="M18 36C25 36 29 31 29 24C29 20 28 17 25 15L17 23C17 25 15 27 13 27C11 27 9 25 9 23L5 27C7 32 12 36 18 36Z" fill="url(#gradDark)"/>
                                        <defs>
                                            <linearGradient id="gradLight" x1="11" y1="4" x2="35" y2="25" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#60A5FA"/>
                                                <stop offset="1" stopColor="#2563EB"/>
                                            </linearGradient>
                                            <linearGradient id="gradDark" x1="29" y1="36" x2="5" y2="15" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#1D4ED8"/>
                                                <stop offset="1" stopColor="#1E3A8A"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {/* Logo Text */}
                                    <div className="text-[20px] font-bold text-white leading-[1.1] tracking-[0.02em]">
                                        SAAS<br />COMPANY
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[#8b9bb4] text-[15.5px] leading-[1.6] mb-8">
                                    Empowering enterprise with intelligent solutions for growth and seamless collaboration.
                                </p>

                                {/* CTA Button */}
                                <div>
                                    <button className="bg-white text-[#051024] font-semibold text-[14.5px] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                                        Contact Sales
                                    </button>
                                </div>
                            </div>

                            {/* Column 2: Platform */}
                            <div className="flex flex-col mt-2">
                                <h3 className="text-white font-bold text-[13px] tracking-[0.06em] uppercase mb-6">Platform</h3>
                                <ul className="flex flex-col gap-4">
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Analytics</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Integrations</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Automation</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Security</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Features</a></li>
                                </ul>
                            </div>

                            {/* Column 3: Solutions */}
                            <div className="flex flex-col mt-2">
                                <h3 className="text-white font-bold text-[13px] tracking-[0.06em] uppercase mb-6">Solutions</h3>
                                <ul className="flex flex-col gap-4">
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Marketing</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Sales Ops</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Customer Success</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Support</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Pricing</a></li>
                                </ul>
                            </div>

                            {/* Column 4: Company */}
                            <div className="flex flex-col mt-2">
                                <h3 className="text-white font-bold text-[13px] tracking-[0.06em] uppercase mb-6">Company</h3>
                                <ul className="flex flex-col gap-4">
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Latest News</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Contact</a></li>
                                    <li><a href="#" className="text-[#8b9bb4] text-[15px] hover:text-white transition-colors">Resources</a></li>
                                </ul>
                            </div>

                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-16 pt-8 border-t border-[#1b2a47] flex flex-col md:flex-row justify-between items-center gap-6 z-20 relative">
                            
                            {/* Copyright */}
                            <p className="text-[#687a99] text-[13.5px]">
                                &copy; 2026 SaaS Company Inc. All Rights Reserved.
                            </p>

                            {/* Legal Pills */}
                            <div className="flex flex-wrap items-center gap-3">
                                <a href="#" className="bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] text-[#8b9bb4] hover:text-white px-4 py-1.5 rounded-full text-[13px] transition-colors border border-white/5">
                                    Privacy Policy
                                </a>
                                <a href="#" className="bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] text-[#8b9bb4] hover:text-white px-4 py-1.5 rounded-full text-[13px] transition-colors border border-white/5">
                                    Terms of Service
                                </a>
                                <a href="#" className="bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] text-[#8b9bb4] hover:text-white px-4 py-1.5 rounded-full text-[13px] transition-colors border border-white/5">
                                    Cookie Settings
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Star Accent in Bottom Right Corner */}
                    <svg className="absolute -bottom-4 -right-4 z-0 text-white/20" width="80" height="80" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/>
                    </svg>

                </footer>
            </div>

        </section>
    );
};

export default HomepageSection9;

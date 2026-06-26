import React from 'react';
import './Section4.css';
import { ParallaxLayer, Reveal, StaggerContainer, StaggerItem } from '../animations/Animations';

const Section4: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#050814] text-white pt-16 md:pt-28 pb-20 md:pb-32 font-sans border-t border-white/5">
            
            {/* === BACKGROUND EFFECTS (Section Only) === */}
            
            {/* Sparkles Layer */}
            <ParallaxLayer offset={30} speed={0.4} className="absolute inset-0 bg-sparkles opacity-60 pointer-events-none"></ParallaxLayer>

            {/* Left Purple Glow */}
            <ParallaxLayer offset={50} speed={0.6} className="absolute top-[10%] -left-[300px] w-[600px] h-[600px] bg-[#9a42ff] rounded-full blur-[150px] opacity-[0.12] pointer-events-none"></ParallaxLayer>
            
            {/* Right Blue Glow */}
            <ParallaxLayer offset={40} speed={0.5} className="absolute top-[20%] -right-[300px] w-[600px] h-[600px] bg-[#4f7cff] rounded-full blur-[150px] opacity-[0.1] pointer-events-none"></ParallaxLayer>

            {/* Bottom Center Soft Blend Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#9a42ff]/10 to-transparent blur-[100px] pointer-events-none"></div>

            {/* Curved Wave Lines (Embedded in background) */}
            <ParallaxLayer offset={60} speed={0.8} className="absolute bottom-0 left-0 w-[45%] h-[70%] pointer-events-none opacity-30">
                <svg viewBox="0 0 600 600" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M-100,600 C150,550 300,350 450,200 T700,50" fill="none" stroke="url(#wave-grad-1)" strokeWidth="1.5" />
                    <path d="M-100,650 C200,600 350,400 500,250 T750,100" fill="none" stroke="url(#wave-grad-1)" strokeWidth="0.75" opacity="0.6" />
                    <path d="M-100,700 C250,650 400,450 550,300 T800,150" fill="none" stroke="url(#wave-grad-1)" strokeWidth="0.5" opacity="0.3" />
                    <defs>
                        <linearGradient id="wave-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9a42ff" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#4f7cff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#15d2ff" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer offset={50} speed={0.7} className="absolute bottom-0 right-0 w-[45%] h-[70%] pointer-events-none opacity-30">
                <svg viewBox="0 0 600 600" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M700,600 C450,550 300,350 150,200 T-100,50" fill="none" stroke="url(#wave-grad-2)" strokeWidth="1.5" />
                    <path d="M700,650 C400,600 250,400 100,250 T-150,100" fill="none" stroke="url(#wave-grad-2)" strokeWidth="0.75" opacity="0.6" />
                    <defs>
                        <linearGradient id="wave-grad-2" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#4f7cff" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#a64dff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#d14cff" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </ParallaxLayer>


            {/* === MAIN CONTENT CONTAINER === */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] mx-auto flex flex-col items-center">
                
                {/* Headline Block */}
                <Reveal className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
                    <h1 className="text-[40px] sm:text-[48px] md:text-[72px] lg:text-[80px] font-bold tracking-tight leading-[1.1]">
                        <span className="block text-white">Ready to Build a</span>
                        <span className="block bg-gradient-to-r from-[#b14dff] via-[#7d64ff] to-[#4f7cff] bg-clip-text text-transparent pb-2">
                            Predictable Revenue Engine?
                        </span>
                    </h1>
                    
                    {/* Decorative Mini Divider */}
                    <div className="flex items-center gap-4 mt-8 mb-6">
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/20"></div>
                        <i className="ph-bold ph-sparkle w-5 h-5 text-[#a64dff] opacity-80 flex items-center justify-center"></i>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-white/20"></div>
                    </div>

                    {/* Supporting Paragraph */}
                    <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#d3d8e6] max-w-3xl leading-[1.6] font-normal">
                        Stop wasting time on unqualified leads and inconsistent pipeline generation. 
                        Tech2Demand helps B2B companies connect with decision-makers, generate qualified meetings, 
                        and build stronger sales pipelines that support long-term growth.
                    </p>
                </Reveal>

                {/* Feature Row (5 Items) */}
                <StaggerContainer className="mt-24 w-full flex flex-col lg:flex-row items-stretch justify-center relative">
                    
                    {/* Item 1 */}
                    <StaggerItem className="flex-1 flex flex-col items-center text-center px-4 lg:px-6 py-8 lg:py-0">
                        <div className="w-20 h-20 rounded-full border border-[#a64dff]/30 bg-[#a64dff]/10 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(166,77,255,0.2)]">
                            <i className="ph-bold ph-users text-4xl text-[#a64dff]"></i>
                        </div>
                        <h3 className="text-[19px] font-semibold text-white mb-1 leading-snug">Qualified Meetings</h3>
                        <p className="text-[16px] text-[#a0a8c2]">with Decision-Makers</p>
                    </StaggerItem>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="block lg:hidden h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Item 2 */}
                    <StaggerItem className="flex-1 flex flex-col items-center text-center px-4 lg:px-6 py-8 lg:py-0">
                        <div className="w-20 h-20 rounded-full border border-[#4f7cff]/30 bg-[#4f7cff]/10 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(79,124,255,0.2)]">
                            <i className="ph-bold ph-trend-up text-4xl text-[#4f7cff]"></i>
                        </div>
                        <h3 className="text-[19px] font-semibold text-white mb-1 leading-snug">Consistent</h3>
                        <p className="text-[16px] text-[#a0a8c2]">Pipeline Growth</p>
                    </StaggerItem>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="block lg:hidden h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Item 3 */}
                    <StaggerItem className="flex-1 flex flex-col items-center text-center px-4 lg:px-6 py-8 lg:py-0">
                        <div className="w-20 h-20 rounded-full border border-[#d14cff]/30 bg-[#d14cff]/10 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(209,76,255,0.2)]">
                            <i className="ph-bold ph-chat-circle-dots text-4xl text-[#d14cff]"></i>
                        </div>
                        <h3 className="text-[19px] font-semibold text-white mb-1 leading-snug">Better Sales</h3>
                        <p className="text-[16px] text-[#a0a8c2]">Conversations</p>
                    </StaggerItem>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="block lg:hidden h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Item 4 */}
                    <StaggerItem className="flex-1 flex flex-col items-center text-center px-4 lg:px-6 py-8 lg:py-0">
                        <div className="w-20 h-20 rounded-full border border-[#15d2ff]/30 bg-[#15d2ff]/10 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(21,210,255,0.2)]">
                            <i className="ph-bold ph-target text-4xl text-[#15d2ff]"></i>
                        </div>
                        <h3 className="text-[19px] font-semibold text-white mb-1 leading-snug">Stronger ROI</h3>
                        <p className="text-[16px] text-[#a0a8c2]">Up to 5X ROI</p>
                    </StaggerItem>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="block lg:hidden h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Item 5 */}
                    <StaggerItem className="flex-1 flex flex-col items-center text-center px-4 lg:px-6 py-8 lg:py-0">
                        <div className="w-20 h-20 rounded-full border border-[#a64dff]/30 bg-[#a64dff]/10 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(166,77,255,0.2)]">
                            <i className="ph-bold ph-shield-check text-4xl text-[#a64dff]"></i>
                        </div>
                        <h3 className="text-[19px] font-semibold text-white mb-1 leading-snug">Results-Focused</h3>
                        <p className="text-[16px] text-[#a0a8c2]">Growth Partner</p>
                    </StaggerItem>

                </StaggerContainer>

                {/* Bottom CTA Panel */}
                <Reveal className="mt-24 w-full max-w-[76rem] rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 shadow-[0_0_80px_rgba(166,77,255,0.06)] relative overflow-hidden backdrop-blur-sm">
                    
                    {/* Inner Panel Subtle Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#9a42ff]/5 via-transparent to-[#4f7cff]/5 pointer-events-none"></div>

                    {/* Left Text Block */}
                    <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left z-10 w-full gap-6 lg:gap-8">
                        <div className="w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br from-[#b14dff]/20 to-[#4f7cff]/20 border border-[#b14dff]/30 flex items-center justify-center shadow-[0_0_30px_rgba(177,77,255,0.15)]">
                            <i className="ph-bold ph-rocket text-[48px] text-[#b14dff]"></i>
                        </div>
                        <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.15] tracking-tight">
                            <span className="block text-white mb-1">You Focus on Closing Deals.</span>
                            <span className="block bg-gradient-to-r from-[#b14dff] to-[#4f7cff] bg-clip-text text-transparent">
                                We Focus on Filling Your Pipeline.
                            </span>
                        </h2>
                    </div>

                    {/* Center Divider */}
                    <div className="hidden lg:block w-px h-[140px] bg-gradient-to-b from-transparent via-white/15 to-transparent z-10 shrink-0"></div>

                    {/* Right Button Block */}
                    <div className="flex flex-col items-center lg:items-start shrink-0 z-10">
                        <button className="group relative px-8 py-5 rounded-full bg-white text-white font-semibold text-[18px] lg:text-[20px] transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                            {/* Button Gradient Background */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8a2be2] via-[#6366f1] to-[#3b82f6] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                            {/* Button Inner Glow/Border */}
                            <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
                            
                            <div className="relative flex items-center justify-center gap-3">
                                Book Your Free Consultation
                                <i className="ph-bold ph-arrow-right text-xl transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </button>
                        
                        <div className="flex items-center justify-center lg:justify-start gap-2 mt-5 text-[#a0a8c2]">
                            <i className="ph-bold ph-shield-check text-base text-[#8b5cf6] opacity-80"></i>
                            <span className="text-[15px] lg:text-[16px]">No obligation. Just a growth conversation.</span>
                        </div>
                    </div>

                </Reveal>

            </div>
        </section>
    );
};

export default Section4;

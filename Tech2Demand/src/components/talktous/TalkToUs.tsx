import React from 'react';
import { ParallaxLayer, Reveal, StaggerContainer, StaggerItem } from '../animations/Animations';

const TalkToUs: React.FC = () => {
    return (
        <div className="bg-[#050814] font-sans text-white antialiased overflow-x-hidden min-h-screen pt-[120px] pb-20">
            
            {/* Global Background Effects */}
            <ParallaxLayer offset={0} speed={0.2} className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0">
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#9a42ff] rounded-full blur-[150px] opacity-[0.15]"></div>
                <div className="absolute top-[200px] left-[-150px] w-[600px] h-[600px] bg-[#4f7cff] rounded-full blur-[150px] opacity-[0.1]"></div>
            </ParallaxLayer>

            <main className="relative z-10 w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] mx-auto flex flex-col gap-32">
                
                {/* === HERO SECTION (Split Layout) === */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    
                    {/* Left Side: Content & Stats */}
                    <div className="flex-1 flex flex-col">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-max bg-[#b357ff]/10 border border-[#9b46ff]/30 mb-6 shadow-[0_0_15px_rgba(155,70,255,0.15)]">
                                <i className="ph-fill ph-chat-circle-text text-[#b357ff] text-lg"></i>
                                <span className="font-medium text-[14px] text-[#b357ff] tracking-wide">
                                    Let's Connect
                                </span>
                            </div>
                            <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-6">
                                Let’s Talk About Growing <br />
                                <span className="bg-gradient-to-r from-[#b357ff] to-[#4f7cff] bg-clip-text text-transparent">
                                    Your Pipeline
                                </span>
                            </h1>
                            <p className="text-[18px] text-[#d0d6e3] leading-relaxed max-w-xl mb-12">
                                Book a free strategy call with our Sales Meeting Generation Expert. We'll walk through your current pipeline and show you where qualified meetings are being left on the table.
                            </p>
                        </Reveal>

                        {/* Stats Row */}
                        <Reveal delay={0.2}>
                            <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10 mb-12">
                                <div className="flex flex-col">
                                    <span className="text-[32px] sm:text-[40px] font-bold text-white mb-1">
                                        450<span className="text-[#b357ff]">+</span>
                                    </span>
                                    <span className="text-[14px] text-[#a0a8c2] uppercase tracking-wider font-semibold">Clients Served</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[32px] sm:text-[40px] font-bold text-white mb-1">
                                        <span className="text-[#b357ff]">$</span>4<span className="text-[#b357ff]">B+</span>
                                    </span>
                                    <span className="text-[14px] text-[#a0a8c2] uppercase tracking-wider font-semibold">Revenue Generated</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[32px] sm:text-[40px] font-bold text-white mb-1">
                                        5<span className="text-[#b357ff]">X</span>
                                    </span>
                                    <span className="text-[14px] text-[#a0a8c2] uppercase tracking-wider font-semibold">Average ROI</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* What to expect */}
                        <Reveal delay={0.3}>
                            <h3 className="text-[20px] font-semibold text-white mb-6">What to expect</h3>
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#4f7cff]/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <i className="ph-bold ph-clock text-[#4f7cff] text-[12px]"></i>
                                    </div>
                                    <span className="text-[16px] text-[#d0d6e3]">15-minute call with Sales Meeting Generation Expert</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#b357ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <i className="ph-bold ph-magnifying-glass text-[#b357ff] text-[12px]"></i>
                                    </div>
                                    <span className="text-[16px] text-[#d0d6e3]">Quick audit of your current pipeline & ICP</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#21d6c7]/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <i className="ph-bold ph-lightbulb text-[#21d6c7] text-[12px]"></i>
                                    </div>
                                    <span className="text-[16px] text-[#d0d6e3]">Specific recommendations — no generic pitch</span>
                                </li>
                            </ul>
                        </Reveal>
                    </div>

                    {/* Right Side: Form Component */}
                    <div className="w-full lg:w-[480px] shrink-0">
                        <Reveal delay={0.4} duration={0.8} yOffset={40}>
                            <div className="bg-[#0d1126]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
                                
                                {/* Form Top Highlight Glow */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b357ff] to-[#4f7cff]"></div>
                                
                                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b357ff] to-[#4f7cff] flex items-center justify-center shadow-lg">
                                        <i className="ph-bold ph-calendar-plus text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-[20px] font-bold text-white leading-snug">Book Your Strategy Call</h3>
                                        <p className="text-[13px] text-[#a0a8c2] mt-1">Speak with our Sales Meeting Generation Expert</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <span className="text-[12px] font-semibold text-[#b357ff] uppercase tracking-wider mb-4 block">Step 1 of 2 — Your details</span>
                                    
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <label className="block text-[14px] text-[#d0d6e3] font-medium mb-2">Full Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="Jane Doe" 
                                                className="w-full h-12 bg-[#050714] border border-white/10 rounded-lg px-4 text-white placeholder-white/30 focus:outline-none focus:border-[#b357ff] focus:ring-1 focus:ring-[#b357ff] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[14px] text-[#d0d6e3] font-medium mb-2">Business Email</label>
                                            <input 
                                                type="email" 
                                                placeholder="jane@company.com" 
                                                className="w-full h-12 bg-[#050714] border border-white/10 rounded-lg px-4 text-white placeholder-white/30 focus:outline-none focus:border-[#b357ff] focus:ring-1 focus:ring-[#b357ff] transition-all"
                                            />
                                        </div>
                                    </div>
                                    
                                    <p className="text-[12px] text-[#a0a8c2] mt-4 leading-relaxed">
                                        We work with B2B companies — please use your company email. If you don't have one, reach us at <a href="mailto:info@tech2demand.com" className="text-[#4f7cff] hover:underline">info@tech2demand.com</a>
                                    </p>
                                </div>

                                <button className="w-full h-[52px] rounded-lg bg-gradient-to-r from-[#b357ff] to-[#7d64ff] text-white font-semibold text-[16px] hover:shadow-[0_0_25px_rgba(179,87,255,0.4)] transition-all hover:-translate-y-0.5">
                                    Book a Meeting
                                </button>
                                
                                <div className="flex items-center justify-between mt-6 px-2">
                                    <div className="flex items-center gap-1.5 text-[12px] text-[#a0a8c2]">
                                        <i className="ph-bold ph-check text-green-400"></i> 15-min call
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[12px] text-[#a0a8c2]">
                                        <i className="ph-bold ph-check text-green-400"></i> Instant confirm
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[12px] text-[#a0a8c2]">
                                        <i className="ph-bold ph-check text-green-400"></i> Free
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    </div>
                </div>


                {/* === SERVICES SECTION === */}
                <div className="flex flex-col gap-12">
                    <Reveal className="text-center">
                        <h2 className="text-[32px] sm:text-[40px] font-bold mb-4">How We Help You Grow</h2>
                        <p className="text-[18px] text-[#a0a8c2] max-w-2xl mx-auto">
                            End-to-end growth services — from first contact to closed deal.
                        </p>
                    </Reveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <StaggerItem className="bg-[#0d1126] border border-white/5 rounded-2xl p-8 hover:border-[#b357ff]/30 transition-all group">
                            <div className="w-12 h-12 rounded-lg bg-[#b357ff]/10 flex items-center justify-center mb-6">
                                <i className="ph-fill ph-users-three text-[#b357ff] text-2xl group-hover:scale-110 transition-transform"></i>
                            </div>
                            <h3 className="text-[22px] font-bold mb-3">Sales Qualified Meetings</h3>
                            <p className="text-[15px] text-[#d0d6e3] leading-relaxed">
                                Pre-qualified, context-aware meetings with decision-makers who match your ICP. You show up, we handle the rest.
                            </p>
                        </StaggerItem>

                        <StaggerItem className="bg-[#0d1126] border border-white/5 rounded-2xl p-8 hover:border-[#21d6c7]/30 transition-all group">
                            <div className="w-12 h-12 rounded-lg bg-[#21d6c7]/10 flex items-center justify-center mb-6">
                                <i className="ph-fill ph-share-network text-[#21d6c7] text-2xl group-hover:scale-110 transition-transform"></i>
                            </div>
                            <h3 className="text-[22px] font-bold mb-3">Social Media Management</h3>
                            <p className="text-[15px] text-[#d0d6e3] leading-relaxed">
                                LinkedIn, Instagram, and YouTube content that builds your brand authority and drives inbound leads.
                            </p>
                        </StaggerItem>

                    </StaggerContainer>
                </div>


                {/* === TESTIMONIALS SECTION === */}
                <div className="flex flex-col gap-12 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#9a42ff]/10 to-[#4f7cff]/10 blur-[120px] pointer-events-none rounded-full"></div>
                    
                    <Reveal className="text-center z-10">
                        <h2 className="text-[32px] sm:text-[40px] font-bold">What Our Customers Say</h2>
                    </Reveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 items-stretch">
                        
                        <StaggerItem className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative">
                            <i className="ph-fill ph-quotes text-[40px] text-white/10 absolute top-6 right-6"></i>
                            <p className="text-[16px] text-[#d3d8e6] leading-relaxed mb-8 italic">
                                “The outcome could not have been better — I am hugely impressed by the console, the set-up, the accuracy of the data files you have built into it. It is intuitive, responsive, accurate, flexible and easy to use, and to top it all off, it looks great!”
                            </p>
                            <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                                <span className="font-bold text-white text-[16px]">Client</span>
                                <span className="text-[14px] text-[#a0a8c2]">B2B Sales Process Setup</span>
                            </div>
                        </StaggerItem>

                        <StaggerItem className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative">
                            <i className="ph-fill ph-quotes text-[40px] text-white/10 absolute top-6 right-6"></i>
                            <p className="text-[16px] text-[#d3d8e6] leading-relaxed mb-8 italic">
                                “Tech2Demand produced 6 explainer videos, 8 testimonial clips, and about 15 short-form social reels over three months. Our conversion rate went from 1.8% to 3.2% — nearly doubled. The videos didn’t just look professional — they actually helped convert visitors.”
                            </p>
                            <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                                <span className="font-bold text-white text-[16px]">Founder</span>
                                <span className="text-[14px] text-[#a0a8c2]">HR Automation SaaS Platform</span>
                            </div>
                        </StaggerItem>

                        <StaggerItem className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative">
                            <i className="ph-fill ph-quotes text-[40px] text-white/10 absolute top-6 right-6"></i>
                            <p className="text-[16px] text-[#d3d8e6] leading-relaxed mb-8 italic">
                                “Tech2Demand took over LinkedIn, Instagram, and YouTube. LinkedIn grew from 450 to 3,200 followers. We got 8 inbound leads directly from social media, and 2 turned into paying customers worth about $85K combined. For the first time, social actually contributed to revenue.”
                            </p>
                            <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                                <span className="font-bold text-white text-[16px]">Marketing Lead</span>
                                <span className="text-[14px] text-[#a0a8c2]">B2B SaaS Company</span>
                            </div>
                        </StaggerItem>

                    </StaggerContainer>
                </div>
            </main>
        </div>
    );
};

export default TalkToUs;

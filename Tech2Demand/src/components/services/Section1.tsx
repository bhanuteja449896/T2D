import React from 'react';
import { ParallaxLayer, Reveal, StaggerContainer, StaggerItem } from '../animations/Animations';

const Section1: React.FC = () => {
    return (
        <div className="bg-[#050817] font-inter text-[#f3f4f7] antialiased relative overflow-x-hidden">
            
            {/* Ambient glow for the whole section */}
            <ParallaxLayer offset={20} speed={0.2} className="absolute top-[10%] left-0 w-[800px] h-[800px] pointer-events-none z-0">
                <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(155,70,255,0.05) 0%, transparent 60%)' }}></div>
            </ParallaxLayer>

            {/* MAIN WRAPPER: Starts directly below where a navbar would be */}
            <main className="relative z-10 w-full pt-[120px] lg:pt-[160px] pb-24">
                
                {/* Aligned to frontpage: px-4 sm:px-6 md:px-[60px] lg:px-[100px] */}
                <div className="px-4 sm:px-6 md:px-[60px] lg:px-[100px] flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
                    
                    {/* === LEFT COLUMN: Content === */}
                    <div className="flex-1 w-full flex flex-col items-start pt-8 z-20">
                        <StaggerContainer>
                            {/* Badge */}
                            <StaggerItem className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b357ff]/10 border border-[#9b46ff]/30 mb-8 shadow-[0_0_15px_rgba(155,70,255,0.15)]">
                                <i className="ph ph-sparkles w-4 h-4 text-[#b357ff]"></i>
                                <span className="text-[14px] md:text-[15px] font-semibold text-[#b357ff] tracking-wide uppercase">
                                    Growth Solutions That Drive Results
                                </span>
                            </StaggerItem>

                            {/* Main Heading */}
                            <StaggerItem>
                                <h1 className="text-[40px] sm:text-[60px] md:text-[76px] lg:text-[84px] leading-[1.05] font-bold tracking-tight mb-8">
                                    <span className="block text-[#f3f4f7]">More Qualified<br/>Meetings.</span>
                                    <span className="block bg-gradient-to-r from-[#b357ff] via-[#8a5dfa] to-[#4d7fff] bg-clip-text text-transparent pb-2 mt-1">
                                        More Pipeline.<br/>More Revenue.
                                    </span>
                                </h1>
                            </StaggerItem>

                            {/* Paragraph */}
                            <StaggerItem>
                                <p className="text-[16px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#d0d6e3] max-w-2xl font-medium mb-12">
                                    We help B2B companies attract the right prospects,<br className="hidden md:block"/>
                                    engage decision-makers, and build predictable<br className="hidden md:block"/>
                                    pipelines that drive sustainable growth.
                                </p>
                            </StaggerItem>

                            {/* Mini Benefit Row */}
                            <StaggerItem className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-14 w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border border-[#b357ff]/40 flex items-center justify-center bg-[#b357ff]/5 shadow-[0_0_10px_rgba(155,70,255,0.1)]">
                                        <i className="ph ph-target w-5 h-5 text-[#b357ff]"></i>
                                    </div>
                                    <span className="text-[16px] md:text-[17px] font-medium text-[#f3f4f7] leading-tight">
                                        Target the<br/>Right Buyers
                                    </span>
                                </div>

                                <div className="hidden sm:block w-px h-10 bg-white/10"></div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border border-[#b357ff]/40 flex items-center justify-center bg-[#b357ff]/5 shadow-[0_0_10px_rgba(155,70,255,0.1)]">
                                        <i className="ph ph-calendar w-5 h-5 text-[#b357ff]"></i>
                                    </div>
                                    <span className="text-[16px] md:text-[17px] font-medium text-[#f3f4f7] leading-tight">
                                        Book More<br/>Qualified Meetings
                                    </span>
                                </div>

                                <div className="hidden sm:block w-px h-10 bg-white/10"></div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border border-[#b357ff]/40 flex items-center justify-center bg-[#b357ff]/5 shadow-[0_0_10px_rgba(155,70,255,0.1)]">
                                        <i className="ph ph-chart-bar w-5 h-5 text-[#b357ff]"></i>
                                    </div>
                                    <span className="text-[16px] md:text-[17px] font-medium text-[#f3f4f7] leading-tight">
                                        Create Predictable<br/>Pipeline Growth
                                    </span>
                                </div>
                            </StaggerItem>

                            {/* CTA Buttons */}
                            <StaggerItem className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#8b3dff] to-[#5b4eff] text-white font-semibold text-[16px] sm:text-[18px] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(139,61,255,0.4)] transition-transform hover:scale-[1.02]">
                                    Book Your Free Growth Consultation
                                    <i className="ph ph-arrow-right w-5 h-5"></i>
                                </button>
                                
                                <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-[16px] sm:text-[18px] flex items-center justify-center transition-colors hover:bg-white/10">
                                    View All Services
                                </button>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    {/* === RIGHT COLUMN: Media & Dashboard Visual === */}
                    <div className="w-full lg:w-[55%] relative mt-12 lg:mt-0 z-10">
                        <Reveal delay={0.2} duration={0.8} yOffset={40}>
                            {/* The Media Container */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#03040a] border border-white/5 shadow-[0_0_50px_rgba(155,70,255,0.15)] flex items-center justify-center">
                                
                                {/* Background Environment: Deep cinematic glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#b357ff]/20 via-[#0a0c1a] to-[#03040a]"></div>
                                
                                {/* Neon Arc Lines (SVG) */}
                                <svg className="absolute top-0 right-0 w-full h-[80%] opacity-60" viewBox="0 0 800 600" fill="none" preserveAspectRatio="none">
                                    <path d="M-100,600 C200,400 500,200 900,-50" stroke="url(#neon-purple)" strokeWidth="2" filter="drop-shadow(0 0 10px rgba(179,87,255,0.8))"/>
                                    <path d="M-100,650 C250,450 600,250 950,0" stroke="url(#neon-blue)" strokeWidth="1" opacity="0.6"/>
                                    <defs>
                                        <linearGradient id="neon-purple" x1="0" y1="1" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#4d7fff" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#b357ff" />
                                            <stop offset="100%" stopColor="#ff4aa8" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="neon-blue" x1="0" y1="1" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#4d7fff" stopOpacity="0" />
                                            <stop offset="100%" stopColor="#4d7fff" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* City Lights Ambient Glow at Bottom */}
                                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#b357ff]/10 to-transparent blur-2xl"></div>

                                {/* Inner Dashboard Composition */}
                                <div className="relative z-10 w-[85%] h-[75%] mt-[-5%] rounded-xl flex flex-col p-5" style={{ background: 'rgba(13, 17, 38, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
                                    
                                    {/* Dashboard UI Grid */}
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {/* Widget 1: Meetings */}
                                        <div className="bg-[#050714]/80 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-[12px] text-[#d0d6e3] uppercase tracking-wider mb-1">Qualified Meetings</h4>
                                                <div className="text-xl sm:text-3xl font-bold text-white">120</div>
                                                <div className="text-[11px] text-green-400 mt-1">↑ 12% vs last month</div>
                                            </div>
                                            {/* Mock Chart */}
                                            <div className="w-full h-10 flex items-end justify-between gap-1 mt-4">
                                                <div className="w-full bg-[#b357ff]/20 rounded-t-sm h-[30%] hover:bg-[#b357ff]/40 transition-all"></div>
                                                <div className="w-full bg-[#b357ff]/20 rounded-t-sm h-[50%] hover:bg-[#b357ff]/40 transition-all"></div>
                                                <div className="w-full bg-[#b357ff]/20 rounded-t-sm h-[40%] hover:bg-[#b357ff]/40 transition-all"></div>
                                                <div className="w-full bg-[#b357ff] rounded-t-sm h-[80%] shadow-[0_0_10px_rgba(155,70,255,0.6)]"></div>
                                                <div className="w-full bg-[#b357ff]/20 rounded-t-sm h-[60%] hover:bg-[#b357ff]/40 transition-all"></div>
                                            </div>
                                        </div>

                                        {/* Widget 2: Pipeline */}
                                        <div className="bg-[#050714]/80 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-[12px] text-[#d0d6e3] uppercase tracking-wider mb-1">Pipeline Created</h4>
                                                <div className="text-xl sm:text-3xl font-bold text-white">$2.45M</div>
                                            </div>
                                            {/* Mock Line Chart SVG */}
                                            <svg className="w-full h-12 mt-2" viewBox="0 0 100 40" preserveAspectRatio="none">
                                                <path d="M0,35 L20,25 L40,30 L60,15 L80,20 L100,5" fill="none" stroke="#4d7fff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(77,127,255,0.5))"/>
                                                <path d="M0,35 L20,25 L40,30 L60,15 L80,20 L100,5 L100,40 L0,40 Z" fill="url(#blue-fade)" opacity="0.2"/>
                                                <defs>
                                                    <linearGradient id="blue-fade" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#4d7fff" />
                                                        <stop offset="100%" stopColor="#4d7fff" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        {/* Widget 3: Status */}
                                        <div className="bg-[#050714]/80 rounded-lg border border-white/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                                            <div>
                                                <h4 className="text-[12px] text-[#d0d6e3] uppercase tracking-wider mb-2">Meetings by Status</h4>
                                                {/* Donut Chart Mock */}
                                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[6px] border-[#161a33]">
                                                    <div className="absolute inset-[-6px] rounded-full border-[6px] border-transparent border-t-[#b357ff] border-r-[#b357ff] rotate-45 shadow-[0_0_10px_rgba(155,70,255,0.5)]"></div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 text-[11px] text-[#d0d6e3] mt-3 sm:mt-0">
                                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#b357ff]"></div>Scheduled</div>
                                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#4d7fff]"></div>Completed</div>
                                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#161a33]"></div>In Progress</div>
                                            </div>
                                        </div>

                                        {/* Widget 4: Opps */}
                                        <div className="bg-[#050714]/80 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-[12px] text-[#d0d6e3] uppercase tracking-wider mb-1">Opportunities</h4>
                                                <div className="text-xl sm:text-3xl font-bold text-white">86</div>
                                                <div className="text-[11px] text-green-400 mt-1">↑ 5% vs last month</div>
                                            </div>
                                            <div className="flex gap-1 h-8 mt-4 items-end">
                                            <div className="w-full bg-[#4d7fff]/30 h-[40%] rounded-sm"></div>
                                            <div className="w-full bg-[#4d7fff]/30 h-[60%] rounded-sm"></div>
                                            <div className="w-full bg-[#4d7fff]/30 h-[50%] rounded-sm"></div>
                                            <div className="w-full bg-[#4d7fff]/30 h-[80%] rounded-sm"></div>
                                            <div className="w-full bg-[#4d7fff] h-[100%] rounded-sm shadow-[0_0_8px_rgba(77,127,255,0.6)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Silhouette abstract implyer (Seated person in dark) */}
                                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.9)_0%,transparent_70%)] z-10 pointer-events-none"></div>

                            </div>

                        </Reveal>
                    </div>
                </div>

                {/* === LOWER SECTION: Title & Divider === */}
                <div className="px-4 sm:px-6 md:px-[60px] lg:px-[100px] mt-20 lg:mt-32 mb-16">
                    <Reveal yOffset={20}>
                        {/* Title Row with lines */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#b357ff]/40 max-w-[250px]"></div>
                            
                            <div className="flex items-center gap-4">
                                <i className="ph ph-sparkles w-5 h-5 text-[#b357ff]"></i>
                                <h2 className="text-[30px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-bold text-white text-center leading-tight tracking-tight">
                                    Solutions Built to Fuel Your Growth
                                </h2>
                                <i className="ph ph-sparkles w-5 h-5 text-[#b357ff]"></i>
                            </div>

                            <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent to-[#b357ff]/40 max-w-[250px]"></div>
                        </div>

                        {/* Subtext */}
                        <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] text-[#d0d6e3] max-w-4xl mx-auto font-medium">
                            Expert-led services that help you attract the right prospects, engage decision-makers, and build a strong, predictable pipeline.
                        </p>
                    </Reveal>
                </div>

                {/* === LOWER SECTION: 4-Card Grid === */}
                <div className="px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Card 1: Qualified Meeting Generation */}
                        <StaggerItem className="bg-[#0d1126] rounded-2xl p-8 border border-white/5 hover:border-[#b357ff]/30 transition-all duration-300 flex flex-col h-full group hover:shadow-[0_10px_30px_rgba(179,87,255,0.08)]">
                            <div className="w-12 h-12 rounded-lg bg-[#b357ff]/10 flex items-center justify-center mb-6">
                                <i className="ph ph-users w-6 h-6 text-[#b357ff] group-hover:scale-110 transition-transform text-xl"></i>
                            </div>
                            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] mb-4">
                                Qualified Meeting<br/>Generation
                            </h3>
                            <p className="text-[16px] sm:text-[17px] text-[#d0d6e3] leading-relaxed mb-8 flex-grow">
                                We connect you with decision-makers who are ready to talk and explore solutions.
                            </p>
                            <a href="#" className="text-[16px] sm:text-[18px] font-semibold text-[#b357ff] flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                                Learn more <i className="ph ph-arrow-right w-5 h-5"></i>
                            </a>
                        </StaggerItem>

                        {/* Card 2: Demand Generation */}
                        <StaggerItem className="bg-[#0d1126] rounded-2xl p-8 border border-white/5 hover:border-[#21d6c7]/30 transition-all duration-300 flex flex-col h-full group hover:shadow-[0_10px_30px_rgba(33,214,199,0.08)]">
                            <div className="w-12 h-12 rounded-lg bg-[#21d6c7]/10 flex items-center justify-center mb-6">
                                <i className="ph ph-funnel w-6 h-6 text-[#21d6c7] group-hover:scale-110 transition-transform text-xl"></i>
                            </div>
                            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] mb-4">
                                Demand<br/>Generation
                            </h3>
                            <p className="text-[16px] sm:text-[17px] text-[#d0d6e3] leading-relaxed mb-8 flex-grow">
                                Multi-channel campaigns that build awareness, generate interest, and create a consistent flow of opportunities.
                            </p>
                            <a href="#" className="text-[16px] sm:text-[18px] font-semibold text-[#21d6c7] flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                                Learn more <i className="ph ph-arrow-right w-5 h-5"></i>
                            </a>
                        </StaggerItem>

                        {/* Card 3: Video Content Creation */}
                        <StaggerItem className="bg-[#0d1126] rounded-2xl p-8 border border-white/5 hover:border-[#ff4aa8]/30 transition-all duration-300 flex flex-col h-full group hover:shadow-[0_10px_30px_rgba(255,74,168,0.08)]">
                            <div className="w-12 h-12 rounded-lg bg-[#ff4aa8]/10 flex items-center justify-center mb-6">
                                <i className="ph ph-video w-6 h-6 text-[#ff4aa8] group-hover:scale-110 transition-transform text-xl"></i>
                            </div>
                            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] mb-4">
                                Video Content<br/>Creation
                            </h3>
                            <p className="text-[16px] sm:text-[17px] text-[#d0d6e3] leading-relaxed mb-8 flex-grow">
                                High-impact videos that educate, engage, and position your brand as the clear choice.
                            </p>
                            <a href="#" className="text-[16px] sm:text-[18px] font-semibold text-[#ff4aa8] flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                                Learn more <i className="ph ph-arrow-right w-5 h-5"></i>
                            </a>
                        </StaggerItem>

                        {/* Card 4: Revenue Growth Consulting */}
                        <StaggerItem className="bg-[#0d1126] rounded-2xl p-8 border border-white/5 hover:border-[#ff9a1f]/30 transition-all duration-300 flex flex-col h-full group hover:shadow-[0_10px_30px_rgba(255,154,31,0.08)]">
                            <div className="w-12 h-12 rounded-lg bg-[#ff9a1f]/10 flex items-center justify-center mb-6">
                                <i className="ph ph-trend-up w-6 h-6 text-[#ff9a1f] group-hover:scale-110 transition-transform text-xl"></i>
                            </div>
                            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] mb-4">
                                Revenue Growth<br/>Consulting
                            </h3>
                            <p className="text-[16px] sm:text-[17px] text-[#d0d6e3] leading-relaxed mb-8 flex-grow">
                                Strategy, optimization, and insights to improve performance and accelerate revenue growth.
                            </p>
                            <a href="#" className="text-[16px] sm:text-[18px] font-semibold text-[#ff9a1f] flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                                Learn more <i className="ph ph-arrow-right w-5 h-5"></i>
                            </a>
                        </StaggerItem>

                    </StaggerContainer>
                </div>

            </main>
        </div>
    );
};

export default Section1;

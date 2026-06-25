import React from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Animations';

const Section2: React.FC = () => {
    return (
        <div className="bg-[#050817] font-inter text-[#f3f4f7] antialiased relative z-10 w-full overflow-x-hidden">
            {/* Ambient glow */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#9b46ff]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {/* --- HERO SECTION --- */}
            <section className="px-4 sm:px-6 md:px-[60px] lg:px-[100px] pt-[60px] lg:pt-[80px] pb-10 md:pb-12 relative z-10">
                <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-8">
                    
                    {/* Left Hero Content */}
                    <div className="w-full xl:w-[40%] flex flex-col z-20">
                        <StaggerContainer>
                            {/* Badge */}
                            <StaggerItem className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-max bg-[#b357ff]/10 border border-[#9b46ff]/30 mb-[30px] shadow-[0_0_15px_rgba(155,70,255,0.15)]">
                                <span className="font-medium text-[14px] text-[#b357ff] tracking-wide uppercase">
                                    SALES QUALIFIED MEETINGS (SQM)
                                </span>
                            </StaggerItem>

                            {/* Heading */}
                            <StaggerItem>
                                <h2 className="font-montserrat font-medium text-[28px] sm:text-[32px] lg:text-[40px] text-[#f3f4f7] leading-[1.2] mb-[20px] max-w-[550px] tracking-tight">
                                    <span className="block">More Qualified Meetings.</span>
                                    <span className="block">More Pipeline.</span>
                                    <span className="block bg-gradient-to-r from-[#b357ff] via-[#8a5dfa] to-[#4d7fff] bg-clip-text text-transparent pb-2 mt-1">
                                        More Revenue Opportunities.
                                    </span>
                                </h2>
                            </StaggerItem>

                            {/* Paragraph */}
                            <StaggerItem>
                                <p className="font-normal text-[16px] text-[#d0d6e3] leading-[1.6] mb-[24px] max-w-[550px]">
                                    We connect you with decision-makers who are actively exploring solutions. 
                                    Your sales team gets more conversations that turn into real opportunities.
                                </p>
                            </StaggerItem>

                            {/* Mini Points Row */}
                            <StaggerItem className="flex flex-col sm:flex-row flex-wrap items-start gap-y-4 gap-x-[24px] mb-[32px] max-w-[550px] w-full bg-[#0d1126] rounded-[12px] p-6 border border-white/5">
                                <div className="flex items-start gap-3 w-full sm:w-[calc(50%-12px)]">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-[#b357ff]/20 flex items-center justify-center mt-0.5">
                                        <i className="ph-bold ph-users text-[#b357ff] text-sm"></i>
                                    </div>
                                    <p className="text-[14px] leading-snug text-[#d0d6e3]">
                                        <span className="font-semibold text-white">Connect with</span><br/>Decision-Makers
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 w-full sm:w-[calc(50%-12px)]">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-[#b357ff]/20 flex items-center justify-center mt-0.5">
                                        <i className="ph-bold ph-calendar text-[#b357ff] text-sm"></i>
                                    </div>
                                    <p className="text-[14px] leading-snug text-[#d0d6e3]">
                                        <span className="font-semibold text-white">Book</span><br/>Qualified Meetings
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 w-full sm:w-[calc(50%-12px)] mt-0 sm:mt-2">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-[#b357ff]/20 flex items-center justify-center mt-0.5">
                                        <i className="ph-bold ph-trend-up text-[#b357ff] text-sm"></i>
                                    </div>
                                    <p className="text-[14px] leading-snug text-[#d0d6e3]">
                                        <span className="font-semibold text-white">Build a Predictable</span><br/>Pipeline
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 w-full sm:w-[calc(50%-12px)] mt-0 sm:mt-2">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-[#b357ff]/20 flex items-center justify-center mt-0.5">
                                        <i className="ph-bold ph-rocket text-[#b357ff] text-sm"></i>
                                    </div>
                                    <p className="text-[14px] leading-snug text-[#d0d6e3]">
                                        <span className="font-semibold text-white">Accelerate</span><br/>Revenue Growth
                                    </p>
                                </div>
                            </StaggerItem>

                            {/* CTA Area */}
                            <StaggerItem className="flex flex-col sm:flex-row gap-[20px] items-center w-full sm:w-auto">
                                <button className="w-full sm:w-max px-8 h-[60px] rounded-[8px] bg-gradient-to-r from-[#8b3dff] to-[#5b4eff] font-medium text-[16px] text-white flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,61,255,0.4)] hover:shadow-[0_0_30px_rgba(139,61,255,0.6)] transition-all hover:-translate-y-0.5">
                                    Book Your Free Consultation <i className="ph ph-arrow-right font-bold text-lg"></i>
                                </button>
                                
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-8 bg-white/20 hidden sm:block"></div>
                                    <span className="text-[15px] font-medium text-[#cfd6e4]">
                                        You Close Deals.<br/>We Fill Your Pipeline.
                                    </span>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    {/* Right Hero Media Area */}
                    <div className="w-full xl:w-[55%] relative mt-12 xl:mt-0 z-10 xl:ml-auto xl:pl-10">
                        <Reveal delay={0.2} duration={0.8} yOffset={40}>
                            <div className="relative h-[500px] xl:h-[600px] w-full rounded-[24px] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(155,70,255,0.15)] isolate">
                                {/* Base Image */}
                                <img 
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                    alt="Business professionals in a meeting" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity"
                                />
                                {/* Image Tint Overlay */}
                                <div className="absolute inset-0 bg-[#060915]/30 mix-blend-multiply"></div>
                                
                                {/* Purple Wave/Glow Effect */}
                                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#9b46ff] rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none"></div>
                                <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-[#b357ff] rounded-full blur-[80px] opacity-30 mix-blend-screen pointer-events-none"></div>

                                {/* Analytics Dashboard UI */}
                                <div className="absolute top-10 right-10 w-[300px] rounded-[16px] border border-white/10 bg-[#0a1020]/90 p-5 backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-medium text-[#cfd6e4]">Pipeline Value</p>
                                            <p className="text-xl font-bold text-white">$2.4M</p>
                                        </div>
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b357ff]/20 text-[#b357ff]">
                                            <i className="ph ph-activity text-lg"></i>
                                        </div>
                                    </div>
                                    
                                    {/* Mock Bar Chart */}
                                    <div className="flex items-end gap-2 h-20 mt-4 border-b border-white/10 pb-2">
                                        {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-[#b357ff]/20 to-[#b357ff] rounded-t-sm" style={{ height: `${height}%` }}></div>
                                        ))}
                                    </div>
                                    
                                    {/* Mock Metrics Row */}
                                    <div className="mt-4 flex justify-between gap-3">
                                        <div className="flex-1 rounded-[10px] bg-white/5 p-3 border border-white/5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <i className="ph ph-calendar text-cyan-400"></i>
                                                <span className="text-[11px] text-[#cfd6e4]">Meetings</span>
                                            </div>
                                            <span className="text-sm font-bold">48</span>
                                        </div>
                                        <div className="flex-1 rounded-[10px] bg-white/5 p-3 border border-white/5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <i className="ph ph-chart-pie text-pink-400"></i>
                                                <span className="text-[11px] text-[#cfd6e4]">Win Rate</span>
                                            </div>
                                            <span className="text-sm font-bold">32%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* --- WHAT YOU GET SECTION --- */}
            <section className="px-4 sm:px-6 md:px-[60px] lg:px-[100px] mt-12 mb-16 relative z-10">
                <Reveal yOffset={20}>
                    <div className="bg-[#0a1020] rounded-[24px] border border-white/5 p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        {/* Subtle background glow for the container */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#9b46ff]/10 blur-[100px] rounded-full pointer-events-none"></div>

                        {/* Section Title */}
                        <div className="flex flex-col items-center justify-center mb-16 relative z-10">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <div className="hidden md:block w-12 h-px bg-gradient-to-r from-transparent to-[#9b46ff]/50"></div>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#9b46ff]"></div>
                                <h2 className="font-montserrat text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white tracking-tight text-center">
                                    What You Get
                                </h2>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#9b46ff]"></div>
                                <div className="hidden md:block w-12 h-px bg-gradient-to-l from-transparent to-[#9b46ff]/50"></div>
                            </div>
                        </div>

                        {/* 4 Equal Cards Grid */}
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            
                            {/* Card 1 */}
                            <StaggerItem className="h-full flex flex-col bg-[#11162a] border border-white/5 rounded-2xl p-8 hover:border-[#9b46ff]/30 hover:shadow-[0_10px_30px_rgba(155,70,255,0.08)] transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-[#b357ff]/10 border border-[#b357ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <i className="ph ph-users w-6 h-6 text-2xl flex items-center justify-center text-[#b357ff]"></i>
                                </div>
                                <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-3 leading-[1.2]">Qualified Meeting<br/>Generation</h3>
                                <p className="text-[15px] text-[#cfd6e4] leading-relaxed flex-grow">
                                    We identify and connect you with decision-makers who match your ICP and are ready to talk.
                                </p>
                            </StaggerItem>

                            {/* Card 2 */}
                            <StaggerItem className="h-full flex flex-col bg-[#11162a] border border-white/5 rounded-2xl p-8 hover:border-[#18d6cc]/30 hover:shadow-[0_10px_30px_rgba(24,214,204,0.08)] transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-[#18d6cc]/10 border border-[#18d6cc]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <i className="ph ph-funnel w-6 h-6 text-2xl flex items-center justify-center text-[#18d6cc]"></i>
                                </div>
                                <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-3 leading-[1.2]">Demand<br/>Generation</h3>
                                <p className="text-[15px] text-[#cfd6e4] leading-relaxed flex-grow">
                                    Multi-channel campaigns that create awareness, generate interest, and drive a steady flow of opportunities.
                                </p>
                            </StaggerItem>

                            {/* Card 3 */}
                            <StaggerItem className="h-full flex flex-col bg-[#11162a] border border-white/5 rounded-2xl p-8 hover:border-[#ff4ba8]/30 hover:shadow-[0_10px_30px_rgba(255,75,168,0.08)] transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-[#ff4ba8]/10 border border-[#ff4ba8]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <i className="ph ph-play-circle w-6 h-6 text-2xl flex items-center justify-center text-[#ff4ba8]"></i>
                                </div>
                                <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-3 leading-[1.2]">Revenue Growth<br/>Consulting</h3>
                                <p className="text-[15px] text-[#cfd6e4] leading-relaxed flex-grow">
                                    Strategic guidance and data-driven insights to optimize campaigns and drive long-term growth.
                                </p>
                            </StaggerItem>

                            {/* Card 4 */}
                            <StaggerItem className="h-full flex flex-col bg-[#11162a] border border-white/5 rounded-2xl p-8 hover:border-[#ff9a1f]/30 hover:shadow-[0_10px_30px_rgba(255,154,31,0.08)] transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-[#ff9a1f]/10 border border-[#ff9a1f]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <i className="ph ph-chart-bar w-6 h-6 text-2xl flex items-center justify-center text-[#ff9a1f]"></i>
                                </div>
                                <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-3 leading-[1.2]">Pipeline<br/>Development</h3>
                                <p className="text-[15px] text-[#cfd6e4] leading-relaxed flex-grow">
                                    Build a stronger, more predictable sales pipeline with high-quality opportunities.
                                </p>
                            </StaggerItem>

                        </StaggerContainer>
                    </div>
                </Reveal>
            </section>

            {/* --- BOTTOM SPLIT SECTION --- */}
            <section className="px-4 sm:px-6 md:px-[60px] lg:px-[100px] mb-24 relative z-10">
                <Reveal yOffset={20}>
                    <div className="bg-[#0a1020] rounded-[24px] border border-white/5 p-8 md:p-12 lg:p-16">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 relative">
                            {/* Graphic Divider (Vertical on Desktop) */}
                            <div className="hidden xl:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#b357ff]/40 to-transparent"></div>
                            
                            {/* Left Column: The Funnl Difference */}
                            <div>
                                <div className="mb-8">
                                    <h2 className="font-montserrat text-[28px] sm:text-[32px] font-bold text-white mb-4">The Funnl Difference</h2>
                                    <div className="w-16 h-1 bg-[#b357ff] rounded-full"></div>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <p className="text-[16px] text-[#cfd6e4]">
                                        Traditional lead generation companies provide contact lists.
                                    </p>
                                    <p className="text-[17px] font-medium text-[#b357ff] border-l-2 border-[#b357ff] pl-4">
                                        Funnl delivers qualified conversations with decision-makers.
                                    </p>
                                    <p className="text-[16px] text-[#cfd6e4] leading-relaxed">
                                        We focus on creating opportunities that help your sales team spend less time prospecting and more time selling.
                                    </p>
                                </div>

                                {/* Checklist */}
                                <ul className="space-y-4">
                                    {[
                                        "Qualified Meetings, Not Just Leads",
                                        "Decision-Maker Access",
                                        "Predictable Pipeline Growth",
                                        "Results-Focused Execution",
                                        "Up to 5X ROI"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <i className="ph-fill ph-check-circle text-xl text-[#b357ff] flex-shrink-0"></i>
                                            <span className="text-[16px] font-medium text-white">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Graphic Divider (Horizontal on Mobile/Tablet) */}
                            <div className="xl:hidden w-full h-px bg-gradient-to-r from-transparent via-[#b357ff]/40 to-transparent my-2"></div>

                            {/* Right Column: Our Proven Process */}
                            <div>
                                <div className="mb-12">
                                    <h2 className="font-montserrat text-[28px] sm:text-[32px] font-bold text-white mb-4">Our Proven Process</h2>
                                    <div className="w-16 h-1 bg-[#b357ff] rounded-full"></div>
                                </div>

                                {/* Horizontal Process Row */}
                                <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 mt-8">
                                    {/* Connector Line (visible on sm and up) */}
                                    <div className="absolute top-[28px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-white/10 hidden sm:block z-0"></div>

                                    {/* Step 1 */}
                                    <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center text-left sm:text-center group">
                                        <div className="flex items-center gap-4 sm:flex-col sm:gap-4 mb-4 w-full">
                                            <div className="flex items-center justify-start sm:justify-center w-auto sm:w-full relative">
                                                <span className="hidden sm:block text-[32px] font-bold text-white/10 absolute -left-6 top-1/2 -translate-y-1/2">01</span>
                                                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#11162a] border-2 border-[#18d6cc]/30 flex items-center justify-center relative z-10 group-hover:border-[#18d6cc] transition-colors shadow-[0_0_15px_rgba(24,214,204,0.1)]">
                                                    <i className="ph ph-target text-xl text-[#18d6cc]"></i>
                                                </div>
                                            </div>
                                            <h4 className="text-[18px] sm:text-[20px] font-bold text-white whitespace-nowrap">Identify</h4>
                                        </div>
                                        <p className="text-[14px] text-[#cfd6e4] leading-snug">
                                            We identify your ideal buyers and build a targeted outreach plan.
                                        </p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center text-left sm:text-center group">
                                        <div className="flex items-center gap-4 sm:flex-col sm:gap-4 mb-4 w-full">
                                            <div className="flex items-center justify-start sm:justify-center w-auto sm:w-full relative">
                                                <span className="hidden sm:block text-[32px] font-bold text-white/10 absolute -left-6 top-1/2 -translate-y-1/2">02</span>
                                                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#11162a] border-2 border-[#b357ff]/30 flex items-center justify-center relative z-10 group-hover:border-[#b357ff] transition-colors shadow-[0_0_15px_rgba(155,70,255,0.1)]">
                                                    <i className="ph ph-chat-circle text-xl text-[#b357ff]"></i>
                                                </div>
                                            </div>
                                            <h4 className="text-[18px] sm:text-[20px] font-bold text-white whitespace-nowrap">Engage</h4>
                                        </div>
                                        <p className="text-[14px] text-[#cfd6e4] leading-snug">
                                            We start meaningful conversations across the right channels.
                                        </p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center text-left sm:text-center group">
                                        <div className="flex items-center gap-4 sm:flex-col sm:gap-4 mb-4 w-full">
                                            <div className="flex items-center justify-start sm:justify-center w-auto sm:w-full relative">
                                                <span className="hidden sm:block text-[32px] font-bold text-white/10 absolute -left-6 top-1/2 -translate-y-1/2">03</span>
                                                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#11162a] border-2 border-[#ff4ba8]/30 flex items-center justify-center relative z-10 group-hover:border-[#ff4ba8] transition-colors shadow-[0_0_15px_rgba(255,75,168,0.1)]">
                                                    <i className="ph ph-check-square text-xl text-[#ff4ba8]"></i>
                                                </div>
                                            </div>
                                            <h4 className="text-[18px] sm:text-[20px] font-bold text-white whitespace-nowrap">Qualify</h4>
                                        </div>
                                        <p className="text-[14px] text-[#cfd6e4] leading-snug">
                                            We qualify interest and book meetings with decision-makers.
                                        </p>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center text-left sm:text-center group">
                                        <div className="flex items-center gap-4 sm:flex-col sm:gap-4 mb-4 w-full">
                                            <div className="flex items-center justify-start sm:justify-center w-auto sm:w-full relative">
                                                <span className="hidden sm:block text-[32px] font-bold text-white/10 absolute -left-6 top-1/2 -translate-y-1/2">04</span>
                                                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#11162a] border-2 border-[#ff9a1f]/30 flex items-center justify-center relative z-10 group-hover:border-[#ff9a1f] transition-colors shadow-[0_0_15px_rgba(255,154,31,0.1)]">
                                                    <i className="ph ph-lightning text-xl text-[#ff9a1f]"></i>
                                                </div>
                                            </div>
                                            <h4 className="text-[18px] sm:text-[20px] font-bold text-white whitespace-nowrap">Deliver</h4>
                                        </div>
                                        <p className="text-[14px] text-[#cfd6e4] leading-snug">
                                            You get qualified meetings that convert into real opportunities.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Reveal>
            </section>

        </div>
    );
};

export default Section2;

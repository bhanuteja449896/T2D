import React from 'react';
import './Section2.css';
import { ParallaxLayer, Reveal, StaggerContainer, StaggerItem } from '../animations/Animations';

const Section2: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-base text-white overflow-hidden font-sans">
            {/* Background Artwork */}
            <div className="bg-effects-s2">
                <ParallaxLayer offset={40} speed={0.4} className="glow-orb-s2"></ParallaxLayer>
                <ParallaxLayer offset={20} speed={0.6} className="ring-s2 ring-1-s2"></ParallaxLayer>
                <ParallaxLayer offset={30} speed={0.5} className="ring-s2 ring-2-s2"></ParallaxLayer>
                <ParallaxLayer offset={15} speed={0.7} className="ring-s2 ring-3-s2"></ParallaxLayer>
                <ParallaxLayer offset={25} speed={0.6} className="ring-s2 ring-4-s2"></ParallaxLayer>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <main className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] py-12 md:py-20 relative z-10">
                
                {/* Heading Section */}
                <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold tracking-tight">
                        Why <span className="text-theme-purple">Tech2Demand</span>
                    </h2>
                    <button className="px-6 py-3 rounded-full border border-theme-purple-border hover:bg-theme-purple-border/20 transition-colors text-white font-semibold text-[14px] flex items-center gap-2 group">
                        Book Your Free Consultation 
                        <i className="ph-bold ph-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </Reveal>

                {/* 3 Cards Row Grid */}
                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Card 1: Purple Theme */}
                    <StaggerItem className="flex flex-col bg-card border border-theme-purple-border rounded-[16px] p-8 h-full transition-transform hover:-translate-y-1 duration-300 shadow-lg shadow-theme-purple-border/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 shrink-0 rounded-full border border-theme-purple-border flex items-center justify-center text-theme-purple">
                                <i className="ph-bold ph-rocket text-3xl"></i>
                            </div>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">Integrated<br/>Growth Engine</h3>
                        </div>
                        
                        <div className="flex-grow flex flex-col gap-4 mb-8">
                            <p className="text-textgray text-[15px] leading-relaxed">
                                Why manage multiple vendors when one partner can drive your entire growth strategy?
                            </p>
                            <p className="text-textgray text-[15px] leading-relaxed">
                                Tech2Demand brings together demand generation, content, outbound prospecting, meeting generation, and sales support into one seamless engine. Every activity works together to attract the right prospects, generate qualified meetings, and create predictable pipeline growth.
                            </p>
                        </div>

                        <div className="border-t border-theme-purple-border/50 pt-6 mt-auto flex items-center gap-4">
                            <div className="w-[60px] h-[60px] shrink-0 rounded-full border border-theme-purple-border flex items-center justify-center text-theme-purple">
                                <i className="ph-bold ph-chart-bar text-xl"></i>
                            </div>
                            <div>
                                <p className="text-theme-purple-text text-[14px] font-bold">One Partner. One Goal.</p>
                                <p className="text-white text-[14px] font-bold">Your Growth.</p>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Card 2: Blue Theme */}
                    <StaggerItem className="flex flex-col bg-card border border-theme-blue-border rounded-[16px] p-8 h-full transition-transform hover:-translate-y-1 duration-300 shadow-lg shadow-theme-blue-border/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 shrink-0 rounded-full border border-theme-blue-border flex items-center justify-center text-theme-blue-text">
                                <i className="ph-bold ph-sliders text-3xl"></i>
                            </div>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">Flexible<br/>Engagement Models</h3>
                        </div>
                        
                        <div className="flex-grow flex flex-col gap-4 mb-8">
                            <p className="text-textgray text-[15px] leading-relaxed">
                                Every business grows differently. That's why we offer engagement models designed around your goals.
                            </p>
                            <p className="text-textgray text-[15px] leading-relaxed">
                                Whether you need qualified meetings, demand generation support, SDR services, or a fully managed growth program, Tech2Demand scales with your business and delivers the resources you need at every stage of growth.
                            </p>
                        </div>

                        <div className="border-t border-theme-blue-border/50 pt-6 mt-auto flex items-center gap-4">
                            <div className="w-[60px] h-[60px] shrink-0 rounded-full border border-theme-blue-border flex items-center justify-center text-theme-blue-text">
                                <i className="ph-bold ph-users text-xl"></i>
                            </div>
                            <div>
                                <p className="text-theme-blue-text text-[14px] font-bold">Right Model. Right Support.</p>
                                <p className="text-white text-[14px] font-bold">Right Results.</p>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Card 3: Teal Theme */}
                    <StaggerItem className="flex flex-col bg-card border border-theme-teal-border rounded-[16px] p-8 h-full transition-transform hover:-translate-y-1 duration-300 shadow-lg shadow-theme-teal-border/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 shrink-0 rounded-full border border-theme-teal-border flex items-center justify-center text-theme-teal-text">
                                <i className="ph-bold ph-shield text-3xl"></i>
                            </div>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">Trusted Process.<br/>Proven Results.</h3>
                        </div>
                        
                        <div className="flex-grow flex flex-col gap-4 mb-8">
                            <p className="text-textgray text-[15px] leading-relaxed">
                                Success comes from consistency, strategy, and execution.
                            </p>
                            <p className="text-textgray text-[15px] leading-relaxed">
                                Our proven approach helps companies connect with decision-makers, generate qualified opportunities, and build stronger sales pipelines. We focus on delivering measurable outcomes that support long-term revenue growth and maximize ROI.
                            </p>
                        </div>

                        <div className="border-t border-theme-teal-border/50 pt-6 mt-auto flex items-center gap-4">
                            <div className="w-[60px] h-[60px] shrink-0 rounded-full border border-theme-teal-border flex items-center justify-center text-theme-teal-text">
                                <i className="ph-bold ph-trend-up text-xl"></i>
                            </div>
                            <div>
                                <p className="text-theme-teal-text text-[14px] font-bold">Measurable Outcomes.</p>
                                <p className="text-white text-[14px] font-bold">Long-term Growth.</p>
                            </div>
                        </div>
                    </StaggerItem>

                </StaggerContainer>

                {/* Bottom Strip Container */}
                <Reveal className="mt-8 border border-[#4C1D95] bg-strip rounded-[16px] p-6 lg:px-8 lg:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center shadow-[0_0_30px_rgba(138,43,226,0.1)]">
                    
                    {/* Feature 1 */}
                    <div className="flex items-center gap-4">
                        <div className="w-[48px] h-[48px] rounded-xl bg-theme-purple-strip flex items-center justify-center text-white shrink-0">
                            <i className="ph-bold ph-users text-xl"></i>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-[15px] font-bold">Qualified Meetings</h4>
                            <p className="text-textgray text-[13px] mt-0.5">Conversations with Decision-Makers</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center gap-4">
                        <div className="w-[48px] h-[48px] rounded-xl bg-theme-blue-strip flex items-center justify-center text-white shrink-0">
                            <i className="ph-bold ph-funnel text-xl"></i>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-[15px] font-bold">Predictable Pipeline</h4>
                            <p className="text-textgray text-[13px] mt-0.5">Consistent Flow of Opportunities</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center gap-4">
                        <div className="w-[48px] h-[48px] rounded-xl bg-theme-teal-strip flex items-center justify-center text-white shrink-0">
                            <i className="ph-bold ph-target text-xl"></i>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-[15px] font-bold">Up to 5X ROI</h4>
                            <p className="text-textgray text-[13px] mt-0.5">Proven Growth-Focused Strategies</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex items-center gap-4">
                        <div className="w-[48px] h-[48px] rounded-xl bg-theme-deeppurple flex items-center justify-center text-white shrink-0">
                            <i className="ph-bold ph-shield-check text-xl"></i>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-[15px] font-bold">Results You Can Trust</h4>
                            <p className="text-textgray text-[13px] mt-0.5">Transparent. Accountable. Outcome-Driven.</p>
                        </div>
                    </div>

                </Reveal>

            </main>
        </section>
    );
};

export default Section2;

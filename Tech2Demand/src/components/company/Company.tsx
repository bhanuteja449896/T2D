import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const Company: React.FC<Props> = ({ setCurrentPage: _setCurrentPage }) => {
    return (
        <div className="bg-[#f8f8fc] text-[#171927] antialiased selection:bg-[#6f3cff]/30 pt-[120px]">
            <main className="relative pb-24 space-y-16">
                
                {/* HERO SECTION */}
                <section className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-stretch">
                        
                        {/* LEFT HERO CONTENT */}
                        <div className="lg:w-[55%] flex flex-col justify-center lg:pr-8">
                            <h1 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6 text-[#171927]">
                                Accelerating Business Growth<br/>
                                Through <span className="text-[#6f3cff]">Smarter B2B Demand Generation</span>
                            </h1>
                            <p className="text-[18px] lg:text-[20px] text-[#5e6578] mb-12 max-w-[95%] leading-relaxed">
                                Tech2Demand Global is a global B2B demand generation and lead generation company
                                dedicated to helping technology organizations connect with the right decision-makers,
                                generate qualified sales opportunities, and accelerate revenue growth.
                            </p>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-14 w-14 rounded-full border border-[#e7e8ef] bg-white flex items-center justify-center mb-4 shadow-sm">
                                        <i className="ph ph-target text-[#6f3cff] text-[28px]"></i>
                                    </div>
                                    <span className="text-[15px] font-semibold text-[#171927] leading-snug">Target the<br/>Right Decision-Makers</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-14 w-14 rounded-full border border-[#e7e8ef] bg-white flex items-center justify-center mb-4 shadow-sm">
                                        <i className="ph ph-users text-[#6f3cff] text-[28px]"></i>
                                    </div>
                                    <span className="text-[15px] font-semibold text-[#171927] leading-snug">Generate Meaningful<br/>Business Conversations</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-14 w-14 rounded-full border border-[#e7e8ef] bg-white flex items-center justify-center mb-4 shadow-sm">
                                        <i className="ph ph-trend-up text-[#6f3cff] text-[28px]"></i>
                                    </div>
                                    <span className="text-[15px] font-semibold text-[#171927] leading-snug">Deliver Qualified<br/>Sales Opportunities</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-14 w-14 rounded-full border border-[#e7e8ef] bg-white flex items-center justify-center mb-4 shadow-sm">
                                        <i className="ph ph-currency-dollar text-[#6f3cff] text-[28px]"></i>
                                    </div>
                                    <span className="text-[15px] font-semibold text-[#171927] leading-snug">Accelerate Sustainable<br/>Revenue Growth</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT HERO VISUAL */}
                        <div className="lg:w-[45%] relative bg-[#0d1030] rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center shadow-xl w-full">
                            {/* Abstract Map Graphic Placeholder */}
                            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_#6f3cff_0%,_transparent_70%)]"></div>
                            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#2f7bff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', opacity: 0.15 }}></div>
                            
                            {/* Glowing Nodes */}
                            <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-[#2f7bff] rounded-full shadow-[0_0_15px_#2f7bff] animate-pulse"></div>
                            <div className="absolute top-[50%] left-[45%] w-4 h-4 bg-[#6f3cff] rounded-full shadow-[0_0_20px_#6f3cff]"></div>
                            <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-[#2f7bff] rounded-full shadow-[0_0_15px_#2f7bff] animate-pulse"></div>
                            <div className="absolute top-[20%] right-[40%] w-2 h-2 bg-[#6f3cff] rounded-full shadow-[0_0_10px_#6f3cff]"></div>
                            
                            {/* Connection Arcs (Simple SVG) */}
                            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
                                <path d="M 25% 30% Q 35% 20% 45% 50%" stroke="#2f7bff" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                                <path d="M 45% 50% Q 55% 65% 70% 60%" stroke="#6f3cff" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                                <path d="M 45% 50% Q 50% 35% 60% 20%" stroke="#2f7bff" strokeWidth="1.5" fill="none" strokeDasharray="2 4" />
                            </svg>

                            {/* Overlay Panel */}
                            <div className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 w-[90%] sm:w-[340px] bg-[#15184a]/95 backdrop-blur-md rounded-l-2xl lg:rounded-2xl p-8 border border-[#6f3cff]/30 shadow-2xl z-10">
                                <div className="h-12 w-12 bg-[#6f3cff] rounded-full flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(111,60,255,0.4)]">
                                    <i className="ph-fill ph-users text-white text-[24px]"></i>
                                </div>
                                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">
                                    Your Growth.<br/>Our Responsibility.
                                </h3>
                                <p className="text-[#a0a5b5] text-[15px] leading-relaxed">
                                    We help businesses expand into new markets, strengthen their sales pipeline, and achieve consistent growth through ethical, data-driven, and results-oriented demand generation strategies.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* MIDDLE STATS / INFO STRIP */}
                <section className="max-w-[1400px] mx-auto px-6">
                    <div className="bg-white rounded-[2rem] border border-[#e7e8ef] shadow-[0_8px_30px_rgba(20,24,40,0.03)] p-8 lg:p-12 flex flex-col xl:flex-row gap-10 xl:gap-0 items-center xl:items-stretch">
                        
                        {/* Left Text Block */}
                        <div className="xl:w-[35%] xl:pr-10 xl:border-r border-[#e7e8ef] flex items-center">
                            <p className="text-[#5e6578] text-[15px] leading-[1.8]">
                                We partner with startups, mid-market businesses, and enterprise organizations
                                across North America to build predictable sales pipelines through data-driven
                                outreach and high-quality appointment generation. Our expertise combines
                                market intelligence, verified business data, personalized email marketing, and
                                strategic demand generation to deliver measurable business outcomes.
                            </p>
                        </div>

                        {/* Center Block */}
                        <div className="xl:w-[35%] xl:px-10 xl:border-r border-[#e7e8ef] flex flex-col sm:flex-row gap-6 items-start">
                            <div className="w-16 h-16 rounded-full border border-[#e7e8ef] shadow-sm flex items-center justify-center shrink-0 mt-1">
                                <i className="ph-fill ph-chart-bar text-[#6f3cff] text-[32px]"></i>
                            </div>
                            <p className="text-[#5e6578] text-[14px] leading-[1.8]">
                                Unlike traditional marketing agencies that
                                charge high retainers regardless of results,
                                Tech2Demand Global is focused on creating
                                real business value. Every campaign is
                                designed around your ideal customer profile,
                                ensuring your sales team spends more time
                                speaking with qualified prospects and less
                                time searching for opportunities.
                            </p>
                        </div>

                        {/* Right Stats Columns */}
                        <div className="xl:w-[30%] xl:pl-10 flex items-center w-full">
                            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-y-10 gap-x-6 w-full">
                                <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <i className="ph ph-users text-[#171927] text-[24px]"></i>
                                        <div className="text-[36px] font-bold text-[#171927] leading-none">100+</div>
                                    </div>
                                    <div className="text-[13px] font-semibold text-[#5e6578] uppercase tracking-wide">Qualified Meetings<br/>Generated</div>
                                </div>
                                <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <i className="ph ph-buildings text-[#171927] text-[24px]"></i>
                                        <div className="text-[36px] font-bold text-[#171927] leading-none">25+</div>
                                    </div>
                                    <div className="text-[13px] font-semibold text-[#5e6578] uppercase tracking-wide">Customers<br/>Helped</div>
                                </div>
                                <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <i className="ph ph-trend-up text-[#171927] text-[24px]"></i>
                                        <div className="text-[36px] font-bold text-[#171927] leading-none">6X</div>
                                    </div>
                                    <div className="text-[13px] font-semibold text-[#5e6578] uppercase tracking-wide">ROI<br/>Achieved</div>
                                </div>
                                <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <i className="ph ph-target text-[#171927] text-[24px]"></i>
                                    </div>
                                    <div className="text-[16px] font-bold text-[#171927] leading-tight mb-1">Measurable</div>
                                    <div className="text-[13px] font-semibold text-[#5e6578] uppercase tracking-wide">Revenue Impact<br/>Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIX-COLUMN INFORMATION SECTION */}
                <section className="max-w-[1400px] mx-auto px-6">
                    <div className="bg-white rounded-[2rem] border border-[#e7e8ef] shadow-[0_8px_30px_rgba(20,24,40,0.03)] overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#e7e8ef]">
                            
                            {/* Column 1 */}
                            <div className="p-8 lg:p-6 xl:p-8 flex flex-col h-full">
                                <h3 className="text-[22px] font-bold text-[#171927] mb-2">What We Do</h3>
                                <div className="w-10 h-1 bg-[#6f3cff] mb-6 rounded-full"></div>
                                <p className="text-[14px] text-[#5e6578] mb-6 leading-relaxed">
                                    Our services are built to support every stage of the B2B sales pipeline.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "B2B Lead Generation",
                                        "Demand Generation",
                                        "Appointment Setting",
                                        "Email Marketing Campaigns",
                                        "Account-Based Marketing (ABM)",
                                        "Contact Discovery & Data Enrichment",
                                        "Intent-Based Prospect Research",
                                        "Sales Pipeline Development",
                                        "Market Research & Target Account Identification"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <i className="ph-fill ph-check-circle text-[#6f3cff] text-[18px] mt-0.5 shrink-0"></i>
                                            <span className="text-[13px] text-[#171927] font-medium leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="p-8 lg:p-6 xl:p-8 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f8f8fc] border border-[#e7e8ef] flex items-center justify-center shrink-0">
                                        <i className="ph-fill ph-rocket text-[#6f3cff] text-[24px]"></i>
                                    </div>
                                    <h3 className="text-[20px] font-bold text-[#171927]">Our Mission</h3>
                                </div>
                                <p className="text-[14px] text-[#5e6578] leading-[1.8]">
                                    To empower businesses with reliable, scalable, and measurable demand generation solutions that create meaningful business conversations and sustainable revenue growth.
                                </p>
                            </div>

                            {/* Column 3 */}
                            <div className="p-8 lg:p-6 xl:p-8 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f8f8fc] border border-[#e7e8ef] flex items-center justify-center shrink-0">
                                        <i className="ph-fill ph-eye text-[#6f3cff] text-[24px]"></i>
                                    </div>
                                    <h3 className="text-[20px] font-bold text-[#171927]">Our Vision</h3>
                                </div>
                                <p className="text-[14px] text-[#5e6578] leading-[1.8]">
                                    To become one of the world’s most trusted B2B demand generation partners by delivering exceptional lead quality, operational excellence, and long-term client success.
                                </p>
                            </div>

                            {/* Column 4 */}
                            <div className="p-8 lg:p-6 xl:p-8 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f8f8fc] border border-[#e7e8ef] flex items-center justify-center shrink-0">
                                        <i className="ph-fill ph-users-three text-[#6f3cff] text-[24px]"></i>
                                    </div>
                                    <h3 className="text-[20px] font-bold text-[#171927] leading-tight">Our Approach</h3>
                                </div>
                                <p className="text-[14px] text-[#5e6578] leading-[1.8]">
                                    At Tech2Demand Global, we believe successful demand generation is built on quality – not quantity. Every campaign begins with understanding your business objectives, target audience, and market challenges.
                                </p>
                            </div>

                            {/* Column 5 */}
                            <div className="p-8 lg:p-6 xl:p-8 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f8f8fc] border border-[#e7e8ef] flex items-center justify-center shrink-0">
                                        <i className="ph-fill ph-star text-[#6f3cff] text-[24px]"></i>
                                    </div>
                                    <h3 className="text-[20px] font-bold text-[#171927] leading-tight">Why Choose<br/>Tech2Demand Global?</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Global B2B demand generation expertise",
                                        "Highly targeted and verified prospect databases",
                                        "Personalized outreach campaigns",
                                        "Technology-focused market specialization",
                                        "Transparent campaign reporting",
                                        "Scalable engagement models",
                                        "Dedicated account management",
                                        "Quality-first approach to lead generation"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <i className="ph-fill ph-check-circle text-[#6f3cff] text-[18px] mt-0.5 shrink-0"></i>
                                            <span className="text-[13px] text-[#5e6578] leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 6 */}
                            <div className="p-8 lg:p-6 xl:p-8 bg-[#f8f8fc] flex flex-col h-full relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f0f0f5]/50 pointer-events-none"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#e7e8ef] flex items-center justify-center shrink-0">
                                            <i className="ph-fill ph-handshake text-[#6f3cff] text-[24px]"></i>
                                        </div>
                                        <h3 className="text-[20px] font-bold text-[#171927]">Our Commitment</h3>
                                    </div>
                                    <p className="text-[14px] text-[#5e6578] leading-[1.8] mb-8">
                                        Your growth is our responsibility. We are committed to helping businesses expand into new markets, strengthen their sales pipeline, and achieve consistent growth through ethical, data-driven, and results-oriented demand generation strategies.
                                    </p>
                                    <div className="p-5 bg-white rounded-2xl border border-[#e7e8ef] shadow-sm mt-auto">
                                        <p className="text-[14px] font-semibold text-[#6f3cff] leading-[1.6]">
                                            At Tech2Demand Global, we don’t just generate leads—we create opportunities that drive lasting business success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* BOTTOM DARK VALUE STRIP */}
                <section className="max-w-[1400px] mx-auto px-6">
                    <div className="bg-gradient-to-r from-[#0d1030] to-[#15184a] rounded-[2rem] p-10 lg:p-14 shadow-2xl overflow-hidden relative">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6f3cff]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2f7bff]/10 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 md:divide-x divide-white/10">
                            
                            {/* Item 1 */}
                            <div className="flex flex-col md:px-6 lg:px-8 first:pl-0 last:pr-0 items-start">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    <i className="ph ph-globe text-white text-[28px]"></i>
                                </div>
                                <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3">Global Reach</h4>
                                <p className="text-[#a0a5b5] text-[14px] leading-relaxed">
                                    Serving technology companies across North America and emerging global markets.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col md:px-6 lg:px-8 first:pl-0 last:pr-0 items-start">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    <i className="ph ph-database text-white text-[28px]"></i>
                                </div>
                                <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3">Data-Driven<br/>& Accurate</h4>
                                <p className="text-[#a0a5b5] text-[14px] leading-relaxed">
                                    Access to verified, enriched and intent-based data.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col md:px-6 lg:px-8 first:pl-0 last:pr-0 items-start">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    <i className="ph ph-envelope-simple text-white text-[28px]"></i>
                                </div>
                                <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3">Personalized<br/>Outreach</h4>
                                <p className="text-[#a0a5b5] text-[14px] leading-relaxed">
                                    Multi-channel outreach that gets real responses.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col md:px-6 lg:px-8 first:pl-0 last:pr-0 items-start">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    <i className="ph ph-chart-bar text-white text-[28px]"></i>
                                </div>
                                <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3">Results That<br/>Matter</h4>
                                <p className="text-[#a0a5b5] text-[14px] leading-relaxed">
                                    More meetings, better pipeline, stronger growth.
                                </p>
                            </div>

                            {/* Item 5 */}
                            <div className="flex flex-col md:px-6 lg:px-8 first:pl-0 last:pr-0 items-start">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    <i className="ph ph-shield-check text-white text-[28px]"></i>
                                </div>
                                <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3">Trusted Partner</h4>
                                <p className="text-[#a0a5b5] text-[14px] leading-relaxed">
                                    Transparent, ethical, and committed to your long-term success.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    );
};

export default Company;

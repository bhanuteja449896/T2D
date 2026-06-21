import React from 'react';

const HomepageSection2: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans antialiased">
            <section className="w-full max-w-[1400px] mx-auto px-8 pb-24">
                <div className="bg-white rounded-[32px] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                {/* Section Header */}
                <h2 className="text-[36px] font-bold text-center text-navy mb-10 tracking-tight">Our Service Capabilities</h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button className="px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">Strategy & Planning</button>
                    <button className="px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">Lead Acquisition</button>
                    <button className="px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">Content Automation</button>
                    <button className="px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">Performance Analytics</button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6 text-navy">
                            <i className="fas fa-search-dollar text-xl"></i>
                        </div>
                        <h3 className="text-[22px] font-bold text-navy mb-3 leading-snug">Lead<br />Intelligence</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed">Discover high-quality prospects.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6 text-navy">
                            <i className="fas fa-compress-arrows-alt text-xl"></i>
                        </div>
                        <h3 className="text-[22px] font-bold text-navy mb-3 leading-snug">Inbound<br />Campaigns</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed">Attract leads with targeted content.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6 text-navy">
                            <i className="fas fa-envelope-open-text text-xl"></i>
                        </div>
                        <h3 className="text-[22px] font-bold text-navy mb-3 leading-snug">Automated<br />Outreach</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed">Scale your lead connection effort.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6 text-navy">
                            <i className="fas fa-filter text-xl"></i>
                        </div>
                        <h3 className="text-[22px] font-bold text-navy mb-3 leading-snug">Lead Scoring &<br />Funnel</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed">Track conversion path and metrics.</p>
                    </div>
                </div>

                {/* Checkmarks Grid */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-12">
                        <div className="flex items-center gap-3">
                            <i className="fas fa-check-circle text-gray-400 text-[18px]"></i>
                            <span className="text-gray-700 text-[15px] font-medium">Accurate Lead Data</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-check-circle text-gray-400 text-[18px]"></i>
                            <span className="text-gray-700 text-[15px] font-medium">Seamless Integration</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-check-circle text-gray-400 text-[18px]"></i>
                            <span className="text-gray-700 text-[15px] font-medium">Scaleable Automation</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-check-circle text-gray-400 text-[18px]"></i>
                            <span className="text-gray-700 text-[15px] font-medium">Detailed Reporting</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-check-circle text-gray-400 text-[18px]"></i>
                            <span className="text-gray-700 text-[15px] font-medium">Multi-channel Campaigns</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-check-circle text-gray-400 text-[18px]"></i>
                            <span className="text-gray-700 text-[15px] font-medium">Expert Strategy Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default HomepageSection2;

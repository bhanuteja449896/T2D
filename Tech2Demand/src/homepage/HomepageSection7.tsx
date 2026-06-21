import React from 'react';

const HomepageSection7: React.FC = () => {
    return (
        <section className="bg-[#f4f6f9] w-full min-h-screen flex items-center justify-center font-sans antialiased p-6">

            {/* Main Container */}
            <div className="max-w-[1400px] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Content Area */}
                <div className="bg-[#eef4ff] rounded-[24px] md:rounded-[32px] p-6 md:p-10 lg:p-16 flex flex-col gap-5 md:gap-6 justify-center h-full">
                    
                    {/* Pill Label */}
                    <div className="w-max bg-[#dce7f9] text-[#557ab5] text-[12px] font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full">
                        Customer Success Stories
                    </div>
                    
                    {/* Heading */}
                    <h2 className="text-[30px] md:text-[44px] lg:text-[48px] font-bold text-[#04112e] leading-[1.15] tracking-tight">
                        Hear how leading<br className="hidden md:block" />companies accelerate<br className="hidden md:block" />growth with our lead<br className="hidden md:block" />generation platform.
                    </h2>
                    
                    {/* Paragraph */}
                    <p className="text-[18px] text-[#4b5a73] leading-[1.6] max-w-[420px]">
                        Hear how leading companies stnings and conoerained accelerate growth with our lead generation platform.
                    </p>
                </div>

                {/* Right Column: Staggered Testimonial Cards */}
                <div className="flex flex-col w-full max-w-[440px] mx-auto relative pt-4 pb-8 lg:pb-0">
                    
                    {/* Card 1 */}
                    <div className="w-[90%] sm:w-[360px] self-end mr-2 sm:mr-6 z-40 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] bg-white rounded-[16px] p-5 border border-gray-100/50">
                        <div className="flex items-center gap-3.5 mb-3">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Chen" className="w-[42px] h-[42px] rounded-full object-cover" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[#0f172a] text-[15px] leading-tight">Sarah Chen</span>
                                <span className="text-[#64748b] text-[13px] mt-0.5">VP Marketing at 'TechLeap Inc.'</span>
                            </div>
                        </div>
                        <p className="text-[#334155] text-[15px] leading-[1.5]">A game-changer for our outbound.<br />Increased qualified leads by 30%.</p>
                    </div>

                    {/* Card 2 */}
                    {/* Note: Negative margin (-mt-[40px]) pulls it up to tuck under Card 1 */}
                    <div className="w-[90%] sm:w-[360px] self-end mr-0 -mt-[40px] z-30 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] bg-white rounded-[16px] p-5 border border-gray-100/50 pb-8">
                        <div className="flex items-center gap-3.5">
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Sarah Taylan" className="w-[42px] h-[42px] rounded-full object-cover" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[#0f172a] text-[15px] leading-tight">Sarah Taylan</span>
                                <span className="text-[#64748b] text-[13px] mt-0.5">VP Marketing at 'TechLeap Inc.'</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    {/* Wider, sticks out to the left (ml-2), high z-index to overlap Card 2 */}
                    <div className="w-[95%] sm:w-[380px] self-start ml-0 sm:ml-2 -mt-[25px] z-50 relative shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15)] bg-white rounded-[16px] p-5 border border-gray-100/50">
                        <div className="flex items-center gap-3.5 mb-3">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Kim" className="w-[42px] h-[42px] rounded-full object-cover" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[#0f172a] text-[15px] leading-tight">David Kim</span>
                                <span className="text-[#64748b] text-[13px] mt-0.5">CEO at 'Globex Solutions.'</span>
                            </div>
                        </div>
                        <p className="text-[#334155] text-[15px] leading-[1.5]">Seamless integration and powerful<br />analytics. Highly recommended.</p>
                    </div>

                    {/* Card 4 */}
                    {/* Standard gap (mt-4) */}
                    <div className="w-[90%] sm:w-[360px] self-end mr-0 sm:mr-2 mt-4 z-40 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] bg-white rounded-[16px] p-5 border border-gray-100/50">
                        <div className="flex items-center gap-3.5 mb-3">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jessica Lee" className="w-[42px] h-[42px] rounded-full object-cover" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[#0f172a] text-[15px] leading-tight">Jessica Lee</span>
                                <span className="text-[#64748b] text-[13px] mt-0.5">Lead Gen Manager at 'Innovate Co.'</span>
                            </div>
                        </div>
                        <p className="text-[#334155] text-[15px] leading-[1.5]">Our team is much more efficient. The lead<br />data quality is excellent.</p>
                    </div>

                    {/* Card 5 */}
                    {/* Tucked under Card 4 via negative margin */}
                    <div className="w-[90%] sm:w-[360px] self-end mr-2 sm:mr-6 -mt-[30px] z-30 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] bg-white rounded-[16px] p-5 border border-gray-100/50 hidden sm:block">
                        <div className="flex items-center gap-3.5">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Chen" className="w-[42px] h-[42px] rounded-full object-cover" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[#0f172a] text-[15px] leading-tight">Sarah Chen</span>
                                <span className="text-[#64748b] text-[13px] mt-0.5">VP Marketing at 'TechLeap Inc.'</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HomepageSection7;

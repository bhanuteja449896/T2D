import React from 'react';

const Resources: React.FC = () => {
    return (
        <div className="bg-[#f7f7fb] text-slate-900 antialiased overflow-x-hidden selection:bg-[#9b46ff]/30 pt-[80px]">
            {/* Subtle Abstract Background Shape for Hero */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#9b46ff]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <main className="relative z-10 pt-16 pb-24 space-y-24">

                {/* ========================================== */}
                {/* SECTION 1: HERO CONTACT + CONSULTATION     */}
                {/* ========================================== */}
                <section className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Left Column: Content */}
                        <div className="lg:col-span-7">
                            {/* Badge */}
                            <div className="inline-flex items-center rounded-full border border-[#9b46ff]/30 bg-[#9b46ff]/10 px-4 py-1.5 mb-8">
                                <span className="text-[14px] font-semibold tracking-wide text-[#9b46ff]">
                                    CONTACT US
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-[56px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight mb-6">
                                Let’s Talk About<br/>
                                <span className="bg-gradient-to-r from-[#9b46ff] to-[#d896ff] bg-clip-text text-transparent">
                                    Growing Your Pipeline
                                </span>
                            </h1>

                            {/* Supporting Line */}
                            <p className="text-[22px] lg:text-[26px] font-medium text-slate-800 mb-8">
                                More conversations. More opportunities. More revenue.
                            </p>

                            {/* Paragraphs */}
                            <div className="space-y-4 mb-12 max-w-[95%]">
                                <p className="text-[17px] lg:text-[19px] text-slate-600 leading-relaxed">
                                    Book a free consultation with the Tech2Demand team and discover how we can help you generate qualified meetings, engage decision-makers, and build a stronger sales pipeline.
                                </p>
                                <p className="text-[17px] lg:text-[19px] text-slate-600 leading-relaxed">
                                    Whether you’re looking to increase market reach, improve prospect engagement, or accelerate growth, we’re here to help.
                                </p>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                    <div className="text-[36px] font-bold text-slate-900 mb-1">100+</div>
                                    <div className="text-[15px] font-medium text-slate-600 leading-snug">Qualified Leads<br/>Generated</div>
                                </div>
                                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                    <div className="text-[36px] font-bold text-slate-900 mb-1">5–10</div>
                                    <div className="text-[15px] font-medium text-slate-600 leading-snug">New Customers<br/>Opportunities</div>
                                </div>
                                <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                    <div className="text-[36px] font-bold text-slate-900 mb-1">5X</div>
                                    <div className="text-[15px] font-medium text-slate-600 leading-snug">Up to 5X<br/>ROI Potential</div>
                                </div>
                            </div>

                            {/* Checklist */}
                            <div>
                                <h3 className="text-[20px] font-bold text-slate-900 mb-6">What You’ll Get During Your Consultation</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    <li className="flex items-start gap-3">
                                        <i className="ph-fill ph-check-circle h-6 w-6 text-[#9b46ff] flex-shrink-0 mt-0.5 text-[24px]"></i>
                                        <span className="text-[16px] text-slate-700">A personalized growth discussion</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="ph-fill ph-check-circle h-6 w-6 text-[#9b46ff] flex-shrink-0 mt-0.5 text-[24px]"></i>
                                        <span className="text-[16px] text-slate-700">Insights into your current pipeline strategy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="ph-fill ph-check-circle h-6 w-6 text-[#9b46ff] flex-shrink-0 mt-0.5 text-[24px]"></i>
                                        <span className="text-[16px] text-slate-700">Recommendations to increase qualified opportunities</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="ph-fill ph-check-circle h-6 w-6 text-[#9b46ff] flex-shrink-0 mt-0.5 text-[24px]"></i>
                                        <span className="text-[16px] text-slate-700">Actionable ideas to improve sales performance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="ph-fill ph-check-circle h-6 w-6 text-[#9b46ff] flex-shrink-0 mt-0.5 text-[24px]"></i>
                                        <span className="text-[16px] text-slate-700">Strategies to connect with the right decision-makers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <i className="ph-fill ph-check-circle h-6 w-6 text-[#9b46ff] flex-shrink-0 mt-0.5 text-[24px]"></i>
                                        <span className="text-[16px] text-slate-700">Guidance to build a predictable sales pipeline</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Form Card */}
                        <div className="lg:col-span-5 relative">
                            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                                
                                {/* Form Header */}
                                <div className="mb-8">
                                    <div className="h-12 w-12 rounded-xl bg-[#9b46ff]/10 flex items-center justify-center mb-6">
                                        <i className="ph-fill ph-calendar-plus h-6 w-6 text-[#9b46ff] text-[24px]"></i>
                                    </div>
                                    <h2 className="text-[32px] font-bold text-slate-900 mb-3 leading-tight">
                                        Book Your Free Consultation
                                    </h2>
                                    <p className="text-[16px] text-slate-600">
                                        Speak with a growth specialist and explore how Tech2Demand can help you achieve your goals.
                                    </p>
                                </div>

                                {/* Form Inputs */}
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-[15px] font-medium text-slate-700 mb-1.5">Full Name*</label>
                                        <input type="text" placeholder="Enter your full name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:border-[#9b46ff] focus:ring-1 focus:ring-[#9b46ff] transition-all placeholder:text-slate-400" />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[15px] font-medium text-slate-700 mb-1.5">Business Email*</label>
                                        <input type="email" placeholder="Enter your business email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:border-[#9b46ff] focus:ring-1 focus:ring-[#9b46ff] transition-all placeholder:text-slate-400" />
                                    </div>

                                    <div>
                                        <label className="block text-[15px] font-medium text-slate-700 mb-1.5">Company Name*</label>
                                        <input type="text" placeholder="Enter your company name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:border-[#9b46ff] focus:ring-1 focus:ring-[#9b46ff] transition-all placeholder:text-slate-400" />
                                    </div>

                                    <div>
                                        <label className="block text-[15px] font-medium text-slate-700 mb-1.5">How can we help you?*</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:border-[#9b46ff] focus:ring-1 focus:ring-[#9b46ff] transition-all appearance-none cursor-pointer" defaultValue="">
                                            <option value="" disabled>Select your primary goal</option>
                                            <option>Qualified Meeting Generation</option>
                                            <option>Demand Generation</option>
                                            <option>Pipeline Development</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[15px] font-medium text-slate-700 mb-1.5">Additional Details (Optional)</label>
                                        <textarea rows={3} placeholder="Tell us more about your goals or challenges" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:border-[#9b46ff] focus:ring-1 focus:ring-[#9b46ff] transition-all placeholder:text-slate-400 resize-none"></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-[#9b46ff] hover:bg-[#8a3ee0] text-white font-semibold text-[18px] py-4 rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(155,70,255,0.4)] mt-2">
                                        Book a Meeting
                                    </button>

                                    {/* Form Footer Notes */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-100">
                                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                                            <i className="ph-fill ph-lightning h-4 w-4 text-[#9b46ff] text-[16px]"></i>
                                            <span>Quick Response</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                                            <i className="ph-fill ph-clock h-4 w-4 text-[#9b46ff] text-[16px]"></i>
                                            <span>Expert Consultation</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                                            <i className="ph-fill ph-shield-check h-4 w-4 text-[#9b46ff] text-[16px]"></i>
                                            <span>No Commitment</span>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ========================================== */}
                {/* SECTION 2: HOW WE HELP YOU GROW + BENEFITS */}
                {/* ========================================== */}
                <section className="max-w-[1400px] mx-auto px-6 space-y-16 lg:space-y-20 relative z-10">
                    
                    {/* PART A: How We Help You Grow (Service Cards) */}
                    <div>
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-[44px] lg:text-[56px] font-extrabold text-[#161826] mb-5 tracking-tight leading-[1.1]">
                                How We Help You Grow
                            </h2>
                            <p className="text-[18px] lg:text-[20px] text-[#606779] font-medium">
                                End-to-end growth services — from first contact to closed deal.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Card 1 (Purple Accent) */}
                            <div className="bg-white rounded-[1.5rem] border border-[#e7e9f0] shadow-sm p-8 lg:p-10 flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="h-14 w-14 rounded-full bg-[#8f46ff]/10 flex items-center justify-center mb-8">
                                    <i className="ph-fill ph-users h-7 w-7 text-[#8f46ff] text-[28px]"></i>
                                </div>
                                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#161826] mb-4 leading-tight">
                                    Qualified Meeting<br/>Generation
                                </h3>
                                <p className="text-[16px] text-[#606779] leading-relaxed flex-grow">
                                    Connect directly with decision-makers who match your ideal customer profile and are ready for meaningful business conversations.
                                </p>
                                <div className="w-12 h-1.5 bg-[#8f46ff] rounded-full mt-8"></div>
                            </div>

                            {/* Card 2 (Blue Accent) */}
                            <div className="bg-white rounded-[1.5rem] border border-[#e7e9f0] shadow-sm p-8 lg:p-10 flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="h-14 w-14 rounded-full bg-[#2e7cff]/10 flex items-center justify-center mb-8">
                                    <i className="ph-fill ph-megaphone h-7 w-7 text-[#2e7cff] text-[28px]"></i>
                                </div>
                                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#161826] mb-4 leading-tight">
                                    Demand<br/>Generation
                                </h3>
                                <p className="text-[16px] text-[#606779] leading-relaxed flex-grow">
                                    Build awareness, create interest, and generate a consistent flow of opportunities through targeted outreach campaigns.
                                </p>
                                <div className="w-12 h-1.5 bg-[#2e7cff] rounded-full mt-8"></div>
                            </div>

                            {/* Card 3 (Green Accent) -->
                            <div className="bg-white rounded-[1.5rem] border border-[#e7e9f0] shadow-sm p-8 lg:p-10 flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="h-14 w-14 rounded-full bg-[#22b36b]/10 flex items-center justify-center mb-8">
                                    <i className="ph-fill ph-chart-bar h-7 w-7 text-[#22b36b] text-[28px]"></i>
                                </div>
                                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#161826] mb-4 leading-tight">
                                    Pipeline<br/>Development
                                </h3>
                                <p className="text-[16px] text-[#606779] leading-relaxed flex-grow">
                                    Strengthen your sales pipeline with qualified opportunities that support long-term business growth.
                                </p>
                                <div className="w-12 h-1.5 bg-[#22b36b] rounded-full mt-8"></div>
                            </div>

                        </div>
                    </div>

                    {/* PART B: Benefits of Working with Tech2Demand */}
                    <div className="bg-[#f4f1fb] rounded-[2rem] border border-[#e7e9f0]/60 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.03)] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
                        
                        {/* Left Intro Block */}
                        <div className="lg:w-[35%] lg:pr-14 lg:border-r border-[#dcddec] flex flex-col justify-center">
                            <h3 className="text-[32px] lg:text-[40px] font-bold text-[#161826] leading-[1.15] mb-6">
                                Benefits of<br/>Working with Tech2Demand
                            </h3>
                            <p className="text-[16px] text-[#606779] leading-relaxed max-w-[90%]">
                                We focus on what matters most—real conversations, qualified opportunities, and measurable business growth.
                            </p>
                        </div>

                        {/* Right Benefits Grid */}
                        <div className="lg:w-[65%] lg:pl-14 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                                
                                {/* Item 1 */}
                                <div className="flex flex-col gap-3 md:border-r border-[#dcddec] md:pr-4">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#e7e9f0]">
                                        <i className="ph-fill ph-target h-5 w-5 text-[#8f46ff] text-[20px]"></i>
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#161826] leading-snug">
                                        Qualified Opportunities<br/>Instead of Cold Leads
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col gap-3 md:border-r border-[#dcddec] md:pr-4">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#e7e9f0]">
                                        <i className="ph-fill ph-trend-up h-5 w-5 text-[#8f46ff] text-[20px]"></i>
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#161826] leading-snug">
                                        Consistent<br/>Pipeline Growth
                                    </span>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col gap-3 md:pr-4">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#e7e9f0]">
                                        <i className="ph-fill ph-lightning h-5 w-5 text-[#8f46ff] text-[20px]"></i>
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#161826] leading-snug">
                                        Improved Sales<br/>Efficiency
                                    </span>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-col gap-3 md:border-r border-[#dcddec] md:pr-4">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#e7e9f0]">
                                        <i className="ph-fill ph-globe h-5 w-5 text-[#8f46ff] text-[20px]"></i>
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#161826] leading-snug">
                                        Greater Market<br/>Reach
                                    </span>
                                </div>

                                {/* Item 5 */}
                                <div className="flex flex-col gap-3 md:border-r border-[#dcddec] md:pr-4">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#e7e9f0]">
                                        <i className="ph-fill ph-users h-5 w-5 text-[#8f46ff] text-[20px]"></i>
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#161826] leading-snug">
                                        Better Buyer<br/>Engagement
                                    </span>
                                </div>

                                {/* Item 6 */}
                                <div className="flex flex-col gap-3 md:pr-4">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#e7e9f0]">
                                        <i className="ph-fill ph-medal h-5 w-5 text-[#8f46ff] text-[20px]"></i>
                                    </div>
                                    <span className="text-[16px] font-semibold text-[#161826] leading-snug">
                                        Results-Focused<br/>Execution
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                
            </main>
        </div>
    );
};

export default Resources;

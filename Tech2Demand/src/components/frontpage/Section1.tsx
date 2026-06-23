import React from 'react';
import './Section1.css';
import frontpageSection1Img from '../../assets/frontpage_section1.png';

const Section1: React.FC = () => {
    return (
        <div className="bg-white font-inter text-mediumGrey antialiased relative overflow-x-hidden">

            {/* Section 1: Hero Background Tint (Base Layer) */}
            <div className="absolute top-0 left-0 w-[1000px] h-[900px] bg-hero-tint opacity-70 z-0 pointer-events-none"></div>

            {/* Main Container */}
            <div className="w-full relative z-10">



                {/* Hero Section */}
                <div className="flex flex-col xl:flex-row items-center px-6 md:px-[60px] lg:px-[100px] pt-[80px] lg:pt-[150px] pb-[100px]">
                    
                    {/* Hero Left (Text & CTAs) */}
                    <div className="w-full xl:w-[40%] flex flex-col z-20">
                        {/* Tagline Pill */}
                        <div className="flex items-center gap-2 bg-lightPurpleBg px-4 py-2 rounded-full w-max mb-[30px] border border-purple-100">
                            <i className="ph-fill ph-shield-star text-primaryPurple text-lg"></i>
                            <span className="font-medium text-[14px] text-primaryPurple">Your Growth. Our Commitment.</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-montserrat font-extrabold text-[36px] lg:text-[48px] text-darkBlue leading-[1.1] mb-[30px] max-w-[650px] tracking-tight">
                            We Help You Attract the Right Prospects, <br/>
                            <span className="bg-clip-text text-transparent bg-text-gradient">Fill Your Pipeline,</span><br/>
                            <span className="bg-clip-text text-transparent bg-text-gradient">Grow Your Revenue.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="font-normal text-[16px] text-mediumGrey leading-[1.6] mb-[40px] max-w-[550px]">
                            We connect you with decision-makers who are actively looking for your solutions. Stop chasing unqualified leads and start closing high-value deals with our proven B2B growth engine.
                        </p>

                        {/* Promise Box */}
                        <div className="bg-offWhite rounded-[12px] p-6 max-w-[550px] mb-[40px] flex flex-col sm:flex-row gap-6 border border-gray-100">
                            <div className="flex items-start gap-3 w-full sm:w-1/2">
                                <div className="min-w-[24px] h-[24px] rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <i className="ph-bold ph-check text-green-600 text-sm"></i>
                                </div>
                                <p className="text-[14px] leading-snug"><span className="font-semibold text-darkBlue">Guaranteed Leads.</span><br/>Or we work for free.</p>
                            </div>
                            <div className="flex items-start gap-3 w-full sm:w-1/2">
                                <div className="min-w-[24px] h-[24px] rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <i className="ph-bold ph-check text-green-600 text-sm"></i>
                                </div>
                                <p className="text-[14px] leading-snug"><span className="font-semibold text-darkBlue">Data-Driven Approach.</span><br/>Optimized for conversion.</p>
                            </div>
                        </div>

                        {/* Main Buttons */}
                        <div className="flex flex-col sm:flex-row gap-[20px]">
                            <button className="w-[280px] h-[60px] rounded-[8px] bg-btn-gradient font-bold text-[18px] text-white flex items-center justify-center gap-2 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:-translate-y-0.5">
                                Get Started Today
                            </button>
                            <button className="w-[220px] h-[60px] rounded-[8px] bg-white border-2 border-primaryPurple font-bold text-[18px] text-primaryPurple flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors">
                                <i className="ph ph-play-circle text-2xl"></i> See How It Works
                            </button>
                        </div>
                    </div>

                    {/* Hero Right (Funnel Visualization Image) */}
                    <div className="w-full xl:w-[60%] relative mt-[80px] xl:mt-0 flex items-center justify-center min-h-[600px] z-10">
                        <img 
                            src={frontpageSection1Img} 
                            alt="Funnel Visualization" 
                            className="w-full h-auto object-contain max-w-[800px] xl:max-w-[100%]"
                        />
                    </div>
                </div>

                {/* Section 4: Trusted By & Features Grid */}
                <div className="px-6 md:px-[60px] lg:px-[100px] pb-[100px]">

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[30px]">
                        
                        {/* Feature 1 */}
                        <div className="flex flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-blue-50 flex items-center justify-center mb-5">
                                <i className="ph ph-users-three text-[28px] text-blue-500"></i>
                            </div>
                            <h3 className="font-bold text-[18px] text-darkBlue mb-2">Audience ID</h3>
                            <p className="font-normal text-[14px] text-mediumGrey leading-relaxed">We pinpoint your exact ICP using advanced firmographics and intent data.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-purple-50 flex items-center justify-center mb-5">
                                <i className="ph ph-funnel text-[28px] text-primaryPurple"></i>
                            </div>
                            <h3 className="font-bold text-[18px] text-darkBlue mb-2">Smart Funnels</h3>
                            <p className="font-normal text-[14px] text-mediumGrey leading-relaxed">Automated, multi-touch sequences designed to nurture and convert.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-green-50 flex items-center justify-center mb-5">
                                <i className="ph ph-calendar-plus text-[28px] text-green-500"></i>
                            </div>
                            <h3 className="font-bold text-[18px] text-darkBlue mb-2">Booked Meetings</h3>
                            <p className="font-normal text-[14px] text-mediumGrey leading-relaxed">Wake up to a calendar filled with qualified decision-makers.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-orange-50 flex items-center justify-center mb-5">
                                <i className="ph ph-chart-line-up text-[28px] text-orange-500"></i>
                            </div>
                            <h3 className="font-bold text-[18px] text-darkBlue mb-2">Live Analytics</h3>
                            <p className="font-normal text-[14px] text-mediumGrey leading-relaxed">Real-time dashboards to track campaign performance and ROI.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="flex flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-teal-50 flex items-center justify-center mb-5">
                                <i className="ph ph-currency-circle-dollar text-[28px] text-teal-500"></i>
                            </div>
                            <h3 className="font-bold text-[18px] text-darkBlue mb-2">Predictable Revenue</h3>
                            <p className="font-normal text-[14px] text-mediumGrey leading-relaxed">Scale your sales with a consistent, reliable pipeline generation system.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="flex flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-rose-50 flex items-center justify-center mb-5">
                                <i className="ph ph-arrows-merge text-[28px] text-rose-500"></i>
                            </div>
                            <h3 className="font-bold text-[18px] text-darkBlue mb-2">CRM Integration</h3>
                            <p className="font-normal text-[14px] text-mediumGrey leading-relaxed">Seamlessly sync all lead data and activities with your existing CRM.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section1;

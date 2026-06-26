import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#050814] text-[#d3d8e6] pt-16 pb-8 border-t border-white/10 font-sans">
            <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
                    
                    {/* Column 1: Logo & Locations */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-baseline">
                            <span className="font-montserrat font-extrabold text-[32px] text-white tracking-tight">Tech2Demand Global</span>
                            <div className="w-[6px] h-[6px] bg-[#b14dff] rounded-full mx-1"></div>
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            <span className="text-[15px] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <i className="ph ph-map-pin text-[#a64dff]"></i> Philadelphia
                            </span>
                            <span className="text-[15px] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <i className="ph ph-map-pin text-[#a64dff]"></i> Bengaluru
                            </span>
                            <span className="text-[15px] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <i className="ph ph-map-pin text-[#a64dff]"></i> Hyderabad
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-[18px] mb-2">Services</h4>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Services Overview</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Sales Qualified Meetings</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Social Media Management</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Outsourced Sales Team</a>
                    </div>

                    {/* Column 3: Company & Resources */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold text-[18px] mb-2">Company</h4>
                            <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">About</a>
                            <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Pricing</a>
                            <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">FAQs</a>
                            <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Career</a>
                            <a href="mailto:info@tech2demand.com" className="text-[15px] hover:text-[#a64dff] transition-colors">Contact us: info@tech2demand.com</a>
                        </div>
                    </div>

                    {/* Column 4: Resources */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-[18px] mb-2">Resources</h4>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Blog</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Guides</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">News and Events</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Glossary</a>
                    </div>
                    
                    {/* Column 5: Our Network */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-[18px] mb-2">Our Network</h4>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Bosswallah.com</a>
                        <a href="#" className="text-[15px] hover:text-[#a64dff] transition-colors">Bosswallah.ai</a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[14px] text-gray-400">
                        &copy; {new Date().getFullYear()} Tech2Demand Global. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
                            <i className="ph-fill ph-linkedin-logo"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
                            <i className="ph-fill ph-twitter-logo"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
                            <i className="ph-fill ph-facebook-logo"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

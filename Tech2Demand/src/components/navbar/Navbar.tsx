import React, { useState } from 'react';

interface NavbarProps {
    setCurrentPage?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[100] shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-[60px] lg:px-[100px] h-[80px]">
                {/* Logo */}
                <div className="flex items-baseline cursor-pointer" onClick={() => setCurrentPage && setCurrentPage('home')}>
                    <span className="font-montserrat font-extrabold text-[32px] text-darkBlue tracking-tight">FUNNL</span>
                    <div className="w-[6px] h-[6px] bg-primaryPurple rounded-full mx-1"></div>
                </div>

                {/* Desktop Menu Links */}
                <div className="hidden lg:flex items-center gap-8 h-full">
                    {/* Services Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <a href="#" onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('services'); }} className="flex items-center gap-1 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors h-full">
                            Services <i className="ph ph-caret-down text-sm transition-transform group-hover:rotate-180"></i>
                        </a>
                        <div className="absolute top-[80px] left-0 w-[240px] bg-white border border-gray-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">B2B Lead Generation</a>
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">Outbound Sales</a>
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">Appointment Setting</a>
                        </div>
                    </div>

                    {/* Solutions Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <a href="#" className="flex items-center gap-1 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors h-full">
                            Solutions <i className="ph ph-caret-down text-sm transition-transform group-hover:rotate-180"></i>
                        </a>
                        <div className="absolute top-[80px] left-0 w-[240px] bg-white border border-gray-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">For Startups</a>
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">For Enterprise</a>
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">For Agencies</a>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <a href="#" className="flex items-center gap-1 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors h-full">
                            Industries <i className="ph ph-caret-down text-sm transition-transform group-hover:rotate-180"></i>
                        </a>
                        <div className="absolute top-[80px] left-0 w-[240px] bg-white border border-gray-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">SaaS & Tech</a>
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">Healthcare</a>
                            <a href="#" className="px-5 py-3 hover:bg-gray-50 text-darkGrey hover:text-primaryPurple font-medium text-[15px]">Financial Services</a>
                        </div>
                    </div>

                    <a href="#" className="font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Resources</a>
                    <a href="#" className="font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Company</a>
                    <a href="#" className="font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Pricing</a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="w-[160px] h-[48px] rounded-[8px] border border-borderGrey font-semibold text-[16px] text-darkBlue hover:bg-gray-50 transition-colors">
                        Talk to an Expert
                    </button>
                    <button className="w-[240px] h-[48px] rounded-[8px] bg-gradient-to-r from-[#6C5DD3] to-[#9E00FF] font-semibold text-[16px] text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:-translate-y-0.5">
                        Book Consultation <i className="ph ph-arrow-right font-bold"></i>
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={toggleMobileMenu}
                        className="text-darkBlue hover:text-primaryPurple transition-colors p-2 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <i className="ph ph-x text-[32px]"></i>
                        ) : (
                            <i className="ph ph-list text-[32px]"></i>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="flex flex-col px-6 gap-2">
                        {/* Mobile Services */}
                        <div className="py-2 border-b border-gray-50">
                            <span 
                                className="font-semibold text-[16px] text-darkGrey block mb-2 cursor-pointer hover:text-primaryPurple"
                                onClick={() => { if (setCurrentPage) { setCurrentPage('services'); toggleMobileMenu(); } }}
                            >
                                Services
                            </span>
                            <div className="flex flex-col gap-2 pl-4">
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">B2B Lead Generation</a>
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">Outbound Sales</a>
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">Appointment Setting</a>
                            </div>
                        </div>

                        {/* Mobile Solutions */}
                        <div className="py-2 border-b border-gray-50">
                            <span className="font-semibold text-[16px] text-darkGrey block mb-2">Solutions</span>
                            <div className="flex flex-col gap-2 pl-4">
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">For Startups</a>
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">For Enterprise</a>
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">For Agencies</a>
                            </div>
                        </div>

                        {/* Mobile Industries */}
                        <div className="py-2 border-b border-gray-50">
                            <span className="font-semibold text-[16px] text-darkGrey block mb-2">Industries</span>
                            <div className="flex flex-col gap-2 pl-4">
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">SaaS & Tech</a>
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">Healthcare</a>
                                <a href="#" className="text-[15px] text-mediumGrey hover:text-primaryPurple">Financial Services</a>
                            </div>
                        </div>

                        <a href="#" className="py-2 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple border-b border-gray-50">Resources</a>
                        <a href="#" className="py-2 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple border-b border-gray-50">Company</a>
                        <a href="#" className="py-2 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple">Pricing</a>
                    </div>
                    
                    <div className="flex flex-col gap-3 px-6 mt-6 pb-4">
                        <button className="w-full h-[48px] rounded-[8px] border border-borderGrey font-semibold text-[16px] text-darkBlue hover:bg-gray-50 transition-colors">
                            Talk to an Expert
                        </button>
                        <button className="w-full h-[48px] rounded-[8px] bg-gradient-to-r from-[#6C5DD3] to-[#9E00FF] font-semibold text-[16px] text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30">
                            Book Consultation <i className="ph ph-arrow-right font-bold"></i>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

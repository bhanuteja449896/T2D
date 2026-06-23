import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-[80px] bg-white/95 backdrop-blur-md z-[100] shadow-sm border-b border-gray-100 flex justify-center transition-all duration-300">
            <div className="w-full flex justify-between items-center px-6 md:px-[60px] lg:px-[100px] h-full">
                {/* Logo */}
                <div className="flex items-baseline cursor-pointer">
                    <span className="font-montserrat font-extrabold text-[32px] text-darkBlue tracking-tight">FUNNL</span>
                    <div className="w-[6px] h-[6px] bg-primaryPurple rounded-full mx-1"></div>
                </div>

                {/* Menu Links */}
                <div className="hidden lg:flex items-center gap-8">
                    <a href="#" className="flex items-center gap-1 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Services <i className="ph ph-caret-down text-sm"></i></a>
                    <a href="#" className="flex items-center gap-1 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Solutions <i className="ph ph-caret-down text-sm"></i></a>
                    <a href="#" className="flex items-center gap-1 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Industries <i className="ph ph-caret-down text-sm"></i></a>
                    <a href="#" className="font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Resources</a>
                    <a href="#" className="font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Company</a>
                    <a href="#" className="font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors">Pricing</a>
                </div>

                {/* Buttons */}
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
                    <button className="text-darkBlue hover:text-primaryPurple transition-colors p-2">
                        <i className="ph ph-list text-[32px]"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

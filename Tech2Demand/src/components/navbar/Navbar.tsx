import React, { useState, useEffect } from 'react';

interface NavbarProps {
    setCurrentPage?: (page: string) => void;
    currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage = 'home' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navigate = (page: string) => {
        setCurrentPage && setCurrentPage(page);
        setIsMobileMenuOpen(false);
    };

    const isServicePage = ['lead-generation', 'appointment-setting', 'cold-email-outreach', 'linkedin-lead-gen', 'b2b-data', 'services', 'growth-solutions'].includes(currentPage);
    const isEngagementPage = ['engagement-models', 'pay-per-meeting', 'retainer-model', 'multiple-campaigns', 'b2b-data-service'].includes(currentPage);

    const activeLinkClass = 'text-primaryPurple border-b-2 border-primaryPurple pb-[2px]';
    const defaultLinkClass = 'font-semibold text-[16px] text-darkGrey hover:text-primaryPurple transition-colors';

    return (
        <nav
            className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)',
                boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.06)',
            }}
        >
            <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-[60px] lg:px-[100px] h-[80px]">
                {/* Logo */}
                <div className="flex items-baseline cursor-pointer flex-shrink-0" onClick={() => navigate('home')}>
                    <span className="font-montserrat font-extrabold text-[26px] sm:text-[30px] text-darkBlue tracking-tight">Tech2Demand</span>
                    <div className="w-[6px] h-[6px] bg-primaryPurple rounded-full mx-1"></div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">

                    {/* Services Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <a href="#/services" onClick={(e) => { e.preventDefault(); navigate('services'); }}
                            className={`flex items-center gap-1 h-full ${defaultLinkClass} ${isServicePage ? activeLinkClass : ''}`}>
                            Services <i className="ph ph-caret-down text-sm transition-transform duration-200 group-hover:rotate-180"></i>
                        </a>
                        <div className="absolute top-[80px] left-0 w-[280px] bg-white border border-gray-100 shadow-2xl rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden z-50">
                            <div className="px-5 pt-3 pb-1">
                                <span className="text-[11px] font-bold tracking-widest uppercase text-primaryPurple">Growth Solutions</span>
                            </div>
                            {[
                                { icon: 'ph-hand-coins', label: 'Lead Generation', page: 'lead-generation' },
                                { icon: 'ph-calendar-check', label: 'Appointment Setting', page: 'appointment-setting' },
                                { icon: 'ph-envelope-open', label: 'Cold Email Outreach', page: 'cold-email-outreach' },
                                { icon: 'ph-linkedin-logo', label: 'LinkedIn Lead Generation', page: 'linkedin-lead-gen' },
                                { icon: 'ph-globe', label: 'Cross-border Lead Gen', page: 'services' },
                                { icon: 'ph-database', label: 'B2B Data', page: 'b2b-data' },
                            ].map((item) => (
                                <a key={item.page} href={`#/${item.page}`}
                                    onClick={(e) => { e.preventDefault(); navigate(item.page); }}
                                    className={`px-5 py-3 hover:bg-purple-50 font-medium text-[15px] flex items-center gap-2 transition-colors ${currentPage === item.page ? 'text-primaryPurple bg-purple-50' : 'text-darkGrey hover:text-primaryPurple'}`}>
                                    <i className={`ph ${item.icon} text-[16px] text-primaryPurple`} /> {item.label}
                                </a>
                            ))}
                            <div className="px-5 pt-2 pb-3 border-t border-gray-50">
                                <a href="#/services" onClick={(e) => { e.preventDefault(); navigate('services'); }}
                                    className="text-[14px] font-semibold text-primaryPurple flex items-center gap-1 hover:gap-2 transition-all">
                                    View All Services <i className="ph ph-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Engagement Model Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <a href="#/engagement-models" onClick={(e) => { e.preventDefault(); navigate('engagement-models'); }}
                            className={`flex items-center gap-1 h-full ${defaultLinkClass} ${isEngagementPage ? activeLinkClass : ''}`}>
                            Engagement Models <i className="ph ph-caret-down text-sm transition-transform duration-200 group-hover:rotate-180"></i>
                        </a>
                        <div className="absolute top-[80px] left-0 w-[340px] bg-white border border-gray-100 shadow-2xl rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden z-50">
                            <div className="px-5 pt-3 pb-1">
                                <span className="text-[11px] font-bold tracking-widest uppercase text-primaryPurple">Pricing Models</span>
                            </div>
                            {[
                                { icon: 'ph-handshake', label: 'Pay per Completed Meeting', page: 'pay-per-meeting' },
                                { icon: 'ph-users-three', label: 'Retainer – Dedicated Resource Model', page: 'retainer-model' },
                                { icon: 'ph-rocket', label: 'Multiple Campaigns Model', page: 'multiple-campaigns' },
                                { icon: 'ph-database', label: 'B2B Data Service Model', page: 'b2b-data-service' },
                            ].map((item) => (
                                <a key={item.page} href={`#/${item.page}`}
                                    onClick={(e) => { e.preventDefault(); navigate(item.page); }}
                                    className={`px-5 py-3 hover:bg-purple-50 font-medium text-[15px] flex items-center gap-2 transition-colors ${currentPage === item.page ? 'text-primaryPurple bg-purple-50' : 'text-darkGrey hover:text-primaryPurple'}`}>
                                    <i className={`ph ${item.icon} text-[16px] text-primaryPurple`} /> {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <a href="#/company" onClick={(e) => { e.preventDefault(); navigate('company'); }}
                        className={`${defaultLinkClass} ${currentPage === 'company' ? activeLinkClass : ''}`}>Company</a>

                    <a href="#" className={`${defaultLinkClass}`}>Resources</a>
                </div>

                {/* Desktop CTA buttons */}
                <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={() => navigate('talk')}
                        className="h-[44px] px-5 rounded-[8px] border border-borderGrey font-semibold text-[15px] text-darkBlue hover:bg-gray-50 transition-colors whitespace-nowrap">
                        Talk to an Expert
                    </button>
                    <button
                        onClick={() => navigate('talk')}
                        className="h-[44px] px-6 rounded-[8px] bg-gradient-to-r from-[#6C5DD3] to-[#9E00FF] font-semibold text-[15px] text-white flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                        Book Consultation <i className="ph ph-arrow-right font-bold"></i>
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    className="lg:hidden flex items-center text-darkBlue hover:text-primaryPurple transition-colors p-2 focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}>
                    <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-[28px]`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(16px)' }}
            >
                <div className="flex flex-col px-6 py-4 gap-1 border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-80px)]">

                    {/* Services section */}
                    <div className="py-2 border-b border-gray-100">
                        <button onClick={() => navigate('services')}
                            className={`w-full text-left font-semibold text-[16px] mb-2 ${currentPage === 'services' || isServicePage ? 'text-primaryPurple' : 'text-darkGrey'}`}>
                            Services
                        </button>
                        <div className="flex flex-col gap-1 pl-4">
                            {[
                                { label: 'Lead Generation', page: 'lead-generation' },
                                { label: 'Appointment Setting', page: 'appointment-setting' },
                                { label: 'Cold Email Outreach', page: 'cold-email-outreach' },
                                { label: 'LinkedIn Lead Generation', page: 'linkedin-lead-gen' },
                                { label: 'Cross-border Lead Generation', page: 'services' },
                                { label: 'B2B Data', page: 'b2b-data' },
                            ].map(item => (
                                <button key={item.page} onClick={() => navigate(item.page)}
                                    className={`text-left py-1.5 text-[15px] transition-colors ${currentPage === item.page ? 'text-primaryPurple font-semibold' : 'text-mediumGrey hover:text-primaryPurple'}`}>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Engagement Model section */}
                    <div className="py-2 border-b border-gray-100">
                        <button onClick={() => navigate('engagement-models')}
                            className={`w-full text-left font-semibold text-[16px] mb-2 ${isEngagementPage ? 'text-primaryPurple' : 'text-darkGrey'}`}>
                            Engagement Models
                        </button>
                        <div className="flex flex-col gap-1 pl-4">
                            {[
                                { label: 'Pay per Completed Meeting', page: 'pay-per-meeting' },
                                { label: 'Retainer – Dedicated Resource Model', page: 'retainer-model' },
                                { label: 'Multiple Campaigns Model', page: 'multiple-campaigns' },
                                { label: 'B2B Data Service Model', page: 'b2b-data-service' },
                            ].map(item => (
                                <button key={item.page} onClick={() => navigate(item.page)}
                                    className={`text-left py-1.5 text-[15px] transition-colors ${currentPage === item.page ? 'text-primaryPurple font-semibold' : 'text-mediumGrey hover:text-primaryPurple'}`}>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={() => navigate('company')}
                        className={`py-2.5 text-left font-semibold text-[16px] border-b border-gray-100 ${currentPage === 'company' ? 'text-primaryPurple' : 'text-darkGrey hover:text-primaryPurple'}`}>
                        Company
                    </button>

                    <a href="#" className="py-2.5 font-semibold text-[16px] text-darkGrey hover:text-primaryPurple border-b border-gray-100">
                        Resources
                    </a>

                    {/* Mobile CTAs */}
                    <div className="flex flex-col gap-3 mt-4 pb-4">
                        <button onClick={() => navigate('talk')}
                            className="w-full h-[48px] rounded-[8px] border border-borderGrey font-semibold text-[15px] text-darkBlue hover:bg-gray-50 transition-colors">
                            Talk to an Expert
                        </button>
                        <button onClick={() => navigate('talk')}
                            className="w-full h-[48px] rounded-[8px] bg-gradient-to-r from-[#6C5DD3] to-[#9E00FF] font-semibold text-[15px] text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30">
                            Book Consultation <i className="ph ph-arrow-right font-bold"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

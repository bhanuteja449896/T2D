import React from 'react';

const HomepageSection1: React.FC = () => {
  return (
    <div className="antialiased min-h-screen text-gray-900 flex flex-col font-sans overflow-x-hidden bg-[#F5F7FA]">
      {/* Navigation */}
      <nav className="w-full px-8 py-8 flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#12265A]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#12265A"/>
                <path d="M7 16L12 11L14 13L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8V12M18 8H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold tracking-tight">Logo</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
            <a href="#" className="flex items-center gap-1.5 hover:text-[#12265A] transition-colors">Services <i className="fas fa-chevron-down text-[10px] text-gray-400"></i></a>
            <a href="#" className="flex items-center gap-1.5 hover:text-[#12265A] transition-colors">Resources <i className="fas fa-chevron-down text-[10px] text-gray-400"></i></a>
            <a href="#" className="flex items-center gap-1.5 hover:text-[#12265A] transition-colors">Company <i className="fas fa-chevron-down text-[10px] text-gray-400"></i></a>
        </div>

        {/* Book a Demo Button */}
        <button className="bg-[#12265A] text-white text-[14px] font-medium px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-all">
            Book a Demo
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-8 pt-12 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-10">
            <h1 className="text-[48px] font-bold text-[#12265A] leading-[1.1] mb-6 tracking-tight">
                We Help You Attract<br />
                the Right Prospects,<br />
                Fill Your Pipeline,<br />
                Grow Your Revenue.
            </h1>
            
            <p className="text-[#6B7280] text-[16px] max-w-[460px] leading-relaxed mb-10">
                We connect you with decision-makers, book qualified meetings, and build sales pipelines that drive predictable revenue growth. Our strategies are designed to deliver real results and up to 5X ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button className="bg-[#12265A] text-white text-[15px] font-medium px-6 py-3.5 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 w-max">
                    Book Your Free Consultation <i className="fas fa-arrow-right"></i>
                </button>
                <button className="bg-white text-[#12265A] text-[15px] font-medium px-6 py-3.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 w-max shadow-sm">
                    <i className="far fa-play-circle text-lg"></i> See How We Work
                </button>
            </div>
        </div>

        {/* Right: Dashboard Mockup */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
            {/* Glow effect behind mockup */}
            <div className="absolute inset-0 bg-blue-100 blur-[80px] opacity-40 rounded-full scale-75 -z-10"></div>
            
            {/* Dashboard Container */}
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-2 w-full max-w-[760px] h-[520px] flex border border-gray-100 overflow-hidden relative">
                
                {/* Sidebar */}
                <div className="w-[200px] bg-[#161D2D] rounded-xl flex flex-col text-gray-400 font-medium text-xs">
                    {/* Sidebar Logo */}
                    <div className="flex items-center gap-2 text-white p-6 mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="6" fill="#4F46E5"/>
                            <path d="M7 16L12 11L14 13L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm font-bold tracking-tight">Logo</span>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col px-3 gap-1">
                        <div className="flex items-center gap-3 bg-white/10 text-white px-3 py-2.5 rounded-lg cursor-pointer">
                            <i className="fas fa-th-large w-4 text-center"></i> Dashboard
                        </div>
                        <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg cursor-pointer transition-colors">
                            <i className="fas fa-chart-line w-4 text-center"></i> Analytics
                        </div>
                        <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg cursor-pointer transition-colors">
                            <i className="fas fa-users w-4 text-center"></i> Spneiatess
                        </div>
                        <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg cursor-pointer transition-colors">
                            <i className="far fa-folder w-4 text-center"></i> Eates
                        </div>
                        <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg cursor-pointer transition-colors">
                            <i className="fas fa-chart-pie w-4 text-center"></i> Reports
                        </div>
                    </div>

                    {/* Settings */}
                    <div className="mt-auto px-3 pb-6">
                        <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg cursor-pointer transition-colors">
                            <i className="fas fa-cog w-4 text-center"></i> Settings
                        </div>
                    </div>
                </div>

                {/* Main Dashboard Area */}
                <div className="flex-1 flex flex-col p-6 pr-4 bg-white overflow-hidden">
                    
                    {/* Top Bar */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="relative w-48">
                            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]"></i>
                            <input type="text" placeholder="Search" className="w-full bg-gray-50 border border-gray-100 rounded-md py-1.5 pl-8 pr-3 text-[11px] outline-none text-gray-600 focus:ring-1 focus:ring-[#12265A]/20" />
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-th text-gray-400 text-xs cursor-pointer"></i>
                            <i className="far fa-bell text-gray-400 text-xs cursor-pointer relative">
                                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            </i>
                            <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-6 h-6 rounded-full border border-gray-200" />
                        </div>
                    </div>

                    {/* Header & Filters */}
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-lg font-bold text-[#12265A]">Dashboard</h2>
                        <div className="flex gap-2">
                            <button className="text-[10px] font-medium text-gray-600 border border-gray-200 rounded px-2.5 py-1.5 flex items-center gap-1 hover:bg-gray-50">
                                All Services <i className="fas fa-chevron-down text-[8px] text-gray-400"></i>
                            </button>
                            <button className="text-[10px] font-medium text-white bg-[#12265A] rounded px-2.5 py-1.5 flex items-center gap-1">
                                Mzr.winxesloet <i className="fas fa-chevron-down text-[8px] text-gray-300"></i>
                            </button>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                        {/* Stat Card 1 */}
                        <div className="bg-[#12265A] rounded-xl p-3 flex flex-col justify-between shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-start z-10">
                                <span className="text-[10px] text-gray-300 font-medium">Tonnis</span>
                                <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center"><i className="fas fa-lock text-white text-[8px]"></i></div>
                            </div>
                            <div className="text-lg font-bold text-white z-10">$1.8M</div>
                            {/* Simple chart background */}
                            <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-30" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <path d="M0,40 L0,20 L20,30 L40,10 L60,25 L80,5 L100,15 L100,40 Z" fill="#4F46E5" />
                                <path d="M0,20 L20,30 L40,10 L60,25 L80,5 L100,15" fill="none" stroke="#818CF8" strokeWidth="2"/>
                            </svg>
                        </div>
                        
                        {/* Stat Card 2 */}
                        <div className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] text-gray-500 font-medium">Top Summary</span>
                                <div className="w-4 h-4 bg-blue-50 text-blue-500 rounded flex items-center justify-center"><i className="fas fa-chart-bar text-[8px]"></i></div>
                            </div>
                            <div className="text-lg font-bold text-[#12265A]">1387</div>
                            <svg className="w-full h-4 mt-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,20 L20,10 L40,15 L60,5 L80,12 L100,2" fill="none" stroke="#60A5FA" strokeWidth="2"/>
                            </svg>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] text-gray-500 font-medium">Total Inats</span>
                                <div className="w-4 h-4 bg-teal-50 text-teal-500 rounded flex items-center justify-center"><i className="fas fa-sync-alt text-[8px]"></i></div>
                            </div>
                            <div className="text-lg font-bold text-[#12265A]">$1,80K</div>
                            <svg className="w-full h-4 mt-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,20 L30,5 L60,15 L100,5" fill="none" stroke="#2DD4BF" strokeWidth="2"/>
                                <path d="M0,20 L30,5 L60,15 L100,5 L100,20 Z" fill="#2DD4BF" fillOpacity="0.1"/>
                            </svg>
                        </div>

                        {/* Stat Card 4 */}
                        <div className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] text-gray-500 font-medium">Accent Chart</span>
                                <div className="w-4 h-4 bg-orange-50 text-orange-400 rounded flex items-center justify-center"><i className="fas fa-caret-up text-[10px]"></i></div>
                            </div>
                            <div className="text-lg font-bold text-[#12265A]">$1,353</div>
                            <svg className="w-full h-4 mt-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,15 L20,20 L40,10 L60,15 L80,5 L100,8" fill="none" stroke="#FB923C" strokeWidth="2"/>
                                <path d="M0,15 L20,20 L40,10 L60,15 L80,5 L100,8 L100,20 L0,20 Z" fill="#FB923C" fillOpacity="0.1"/>
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Area (Table & Funnel) */}
                    <div className="flex gap-4 flex-1 h-[180px]">
                        
                        {/* Table Section */}
                        <div className="flex-[1.5] border border-gray-100 rounded-xl p-3 shadow-sm flex flex-col bg-white overflow-hidden">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-[11px] font-bold text-[#12265A]">Table rows</h3>
                                <button className="text-[9px] font-medium text-gray-500 border border-gray-100 rounded px-2 py-1 flex items-center gap-1">
                                    All Gdcies tzws <i className="fas fa-chevron-down text-[7px]"></i>
                                </button>
                            </div>
                            
                            {/* Table Headers */}
                            <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 text-[9px] font-medium text-gray-400 pb-2 border-b border-gray-50">
                                <div className="w-3"></div>
                                <div>Name <i className="fas fa-chevron-up text-[7px] ml-0.5"></i></div>
                                <div>First <i className="fas fa-sort text-[7px] ml-0.5"></i></div>
                                <div>Chart <i className="fas fa-sort text-[7px] ml-0.5"></i></div>
                                <div className="text-right">Redice <i className="fas fa-sort text-[7px] ml-0.5"></i></div>
                            </div>

                            {/* Table Body */}
                            <div className="flex flex-col gap-2 mt-2 overflow-y-auto pr-1">
                                {/* Row 1 */}
                                <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 items-center text-[10px]">
                                    <input type="checkbox" className="w-2.5 h-2.5 border-gray-300 rounded-sm" />
                                    <div className="flex flex-col gap-1">
                                        <div className="w-16 h-1.5 bg-gray-200 rounded-full"></div>
                                        <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-500">Invesked</span>
                                    <span className="text-[#12265A] font-semibold">$58,200</span>
                                    <span className="text-gray-400 text-right">87.55%</span>
                                </div>
                                {/* Row 2 */}
                                <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 items-center text-[10px]">
                                    <input type="checkbox" className="w-2.5 h-2.5 border-gray-300 rounded-sm" />
                                    <div className="flex flex-col gap-1">
                                        <div className="w-14 h-1.5 bg-gray-200 rounded-full"></div>
                                        <div className="w-10 h-1 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-500">Invesked</span>
                                    <span className="text-[#12265A] font-semibold">$29,300</span>
                                    <span className="text-gray-400 text-right">51.60%</span>
                                </div>
                                {/* Row 3 */}
                                <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 items-center text-[10px]">
                                    <input type="checkbox" className="w-2.5 h-2.5 border-gray-300 rounded-sm" />
                                    <div className="flex flex-col gap-1">
                                        <div className="w-16 h-1.5 bg-gray-200 rounded-full"></div>
                                        <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-500">Inveaked</span>
                                    <span className="text-[#12265A] font-semibold">$28,330</span>
                                    <span className="text-gray-400 text-right">38.6%</span>
                                </div>
                                {/* Row 4 */}
                                <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 items-center text-[10px]">
                                    <input type="checkbox" className="w-2.5 h-2.5 border-gray-300 rounded-sm" />
                                    <div className="flex flex-col gap-1">
                                        <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
                                        <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-500">Invested</span>
                                    <span className="text-[#12265A] font-semibold">$28,245</span>
                                    <span className="text-gray-400 text-right">34.5%</span>
                                </div>
                                {/* Row 5 */}
                                <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-3 items-center text-[10px]">
                                    <input type="checkbox" className="w-2.5 h-2.5 border-gray-300 rounded-sm" />
                                    <div className="flex flex-col gap-1">
                                        <div className="w-14 h-1.5 bg-gray-200 rounded-full"></div>
                                        <div className="w-10 h-1 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-500">Barnted</span>
                                    <span className="text-[#12265A] font-semibold">$33,219</span>
                                    <span className="text-gray-400 text-right">85.5%</span>
                                </div>
                            </div>
                        </div>

                        {/* Funnel Section */}
                        <div className="flex-1 border border-gray-100 rounded-xl p-3 shadow-sm flex flex-col bg-white items-center">
                            <div className="w-full text-[11px] font-bold text-[#12265A] mb-4 text-left">Funnel chart</div>
                            
                            <div className="flex-1 w-full flex justify-center mt-1">
                                <svg viewBox="0 0 100 100" className="w-[85%] h-full" preserveAspectRatio="none">
                                    {/* Dark Blue top */}
                                    <polygon points="0,0 100,0 85,25 15,25" fill="#12265A" />
                                    {/* Med Blue */}
                                    <polygon points="15,27 85,27 70,52 30,52" fill="#3B82F6" />
                                    {/* Teal */}
                                    <polygon points="30,54 70,54 60,74 40,74" fill="#2DD4BF" />
                                    {/* Orange bottom */}
                                    <polygon points="40,76 60,76 55,100 45,100" fill="#FB923C" />
                                </svg>
                            </div>

                            {/* Legend */}
                            <div className="flex gap-3 text-[7px] text-gray-500 mt-3 font-medium">
                                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#12265A] rounded-sm"></span> Imsert</span>
                                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-teal-400 rounded-sm"></span> Chart</span>
                                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-orange-400 rounded-sm"></span> Funnel</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default HomepageSection1;

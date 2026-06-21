import React from 'react';
import './HomepageSection5.css';

const HomepageSection5: React.FC = () => {
    return (
        <section className="bg-[#f4f6f9] w-full min-h-screen flex items-center justify-center font-sans text-[#111827] antialiased p-6 overflow-x-hidden relative">
            {/* Main Container */}
            <div className="max-w-[1400px] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center relative">

                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-5 lg:pr-8 z-10">
                    
                    {/* Top Icon */}
                    <div className="w-[64px] h-[64px] bg-[#eef4ff] rounded-[16px] flex items-center justify-center mb-2">
                        {/* Browser Window & Settings SVG Icon */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#1a233a]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="2" y1="7" x2="22" y2="7"></line>
                            {/* Small chart inside */}
                            <line x1="6" y1="13" x2="6" y2="10"></line>
                            <line x1="10" y1="13" x2="10" y2="11"></line>
                            <line x1="14" y1="13" x2="14" y2="9"></line>
                            {/* Gear */}
                            <path d="M19.4 17.5a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V23.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 21.9a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3.5a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 5.1 11.5a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9.5a1.65 1.65 0 0 0 1-1.51V4.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V11.5a1.65 1.65 0 0 0 1.51 1H21.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" transform="scale(0.65) translate(14, 14)"></path>
                            <circle cx="12" cy="12" r="3" transform="scale(0.65) translate(14, 14)"></circle>
                        </svg>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-[#111827] leading-[1.12] tracking-tight">
                        Prospect Intelligence.<br />
                        Know Every Lead,<br />
                        Inside Out.
                    </h1>

                    {/* Paragraph text exactly as shown in the mockup */}
                    <p className="text-[16px] text-[#6B7280] leading-[1.6] max-w-[460px] my-2">
                        16 px muted gray #6B7280's can serertetttor enhanced lead profiles is pr corpored benefits with max width 460 px.
                    </p>

                    {/* Bullet Points in 2 Columns */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-3 max-w-[480px]">
                        <div className="flex items-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="text-[#111827] text-[17px] font-medium tracking-tight">Behavioral Insights</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="text-[#111827] text-[17px] font-medium tracking-tight">Enriched Lead Data</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="text-[#111827] text-[17px] font-medium tracking-tight">Persona Targeting</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="text-[#111827] text-[17px] font-medium tracking-tight">Actionable Triggers</span>
                        </div>
                    </div>

                </div>

                {/* Right Column: Dashboard UI Mockup */}
                <div className="relative w-full max-w-[620px] mx-auto z-10 lg:mt-0 mt-8">
                    
                    {/* Main Dashboard Card */}
                    <div className="w-full h-[520px] bg-white rounded-[24px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.15)] flex overflow-hidden border border-white/50 relative ring-1 ring-gray-100">
                        
                        {/* Sidebar */}
                        <div className="hidden sm:flex w-[140px] bg-[#1c2438] flex-col p-4 z-10 text-gray-300">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-8 mt-1">
                                <div className="w-6 h-6 rounded-full bg-blue-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-300 transform -rotate-45 translate-x-1/2 translate-y-1/2"></div>
                                </div>
                                <span className="text-white font-semibold tracking-wide text-[15px]">Logo</span>
                            </div>
                            
                            {/* Nav Links */}
                            <nav className="flex flex-col gap-1 text-[12px] font-medium">
                                <a href="#" className="flex items-center gap-2 bg-[#2d3748] text-white px-3 py-2.5 rounded-lg">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                    Dashboard
                                </a>
                                <a href="#" className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#2d3748] rounded-lg transition-colors text-[#94a3b8]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    Analytics
                                </a>
                                <a href="#" className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#2d3748] rounded-lg transition-colors text-[#94a3b8]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    Scenarios
                                </a>
                                <a href="#" className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#2d3748] rounded-lg transition-colors text-[#94a3b8]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    Tabrs
                                </a>
                                <a href="#" className="flex items-center gap-2 px-3 py-2.5 hover:bg-[#2d3748] rounded-lg transition-colors text-[#94a3b8]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    Reports
                                </a>
                            </nav>
                            
                            <a href="#" className="mt-auto flex items-center gap-2 px-3 py-2.5 hover:bg-[#2d3748] rounded-lg transition-colors text-[#94a3b8] text-[12px] font-medium">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                Settings
                            </a>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-[#f0f3f8] p-5 flex flex-col gap-4 relative overflow-y-auto dash-scroll">
                            
                            {/* Search Bar area */}
                            <div className="flex items-center text-gray-400 text-[11px] bg-white w-[200px] px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                Search
                            </div>

                            {/* Header Row */}
                            <div className="flex justify-between items-end mt-1">
                                <h2 className="text-[22px] font-bold text-gray-900 tracking-tight leading-none">Apex Corp</h2>
                                {/* In the image there is a dropdown to the right, slightly covered by funnel but visible */}
                                <div className="mr-14 flex items-center bg-white border border-gray-200 px-2 py-1 rounded text-[11px] text-gray-600 shadow-sm cursor-pointer">
                                    Ad Stores <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
                                
                                {/* Left Column Widgets */}
                                <div className="flex flex-col gap-4">
                                    
                                    {/* Company Profile Widget */}
                                    <div className="bg-white rounded-[14px] p-4 shadow-sm border border-gray-100">
                                        <h3 className="text-[12px] font-bold text-gray-900 mb-3">Company Size</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <p className="text-[11px] text-gray-500 mb-0.5">Company Size</p>
                                                <p className="text-[14px] font-bold text-gray-900">40+</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] text-gray-500 mb-0.5">Revenue</p>
                                                <p className="text-[14px] font-bold text-gray-900">$11.8M</p>
                                            </div>
                                        </div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="text-[11px] text-gray-500 w-[100px]">Technology Stack</span>
                                            <span className="bg-[#eef4ff] text-[#3b82f6] px-2 py-0.5 rounded text-[10px] font-medium">Technologei</span>
                                            <span className="bg-[#eef4ff] text-[#3b82f6] px-2 py-0.5 rounded text-[10px] font-medium">Seaesorn</span>
                                        </div>
                                        <div className="mb-4 flex items-center gap-2">
                                            <span className="text-[11px] text-gray-500 w-[100px]">Technology Stack</span>
                                            <span className="text-[11px] text-gray-800">Linked's, Bervade, Comparinga</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[11px] text-gray-500">Key Decision-makers</span>
                                            <div className="flex -space-x-2">
                                                <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[9px] font-bold text-blue-800">JH</div>
                                                <div className="w-6 h-6 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[9px] font-bold text-green-800">SW</div>
                                                <div className="w-6 h-6 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-[9px] font-bold text-purple-800">KL</div>
                                                <div className="w-6 h-6 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-[9px] font-bold text-orange-800">MR</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Engagement Metrics Widget */}
                                    <div className="bg-white rounded-[14px] p-4 shadow-sm border border-gray-100 flex flex-col relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-[12px] font-bold text-gray-900">Engagement metrics</h3>
                                            <div className="flex items-center bg-gray-50 border border-gray-200 px-2 py-1 rounded text-[10px] text-gray-600">
                                                All Erdentoex <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-[1fr_80px] gap-4">
                                            {/* Chart Area */}
                                            <div className="relative h-[90px] w-full border-b border-l border-gray-100 pl-1 pb-4">
                                                {/* Y Axis labels */}
                                                <div className="absolute -left-5 bottom-4 h-full flex flex-col justify-between text-[8px] text-gray-400">
                                                    <span>400</span><span>300</span><span>200</span><span>100</span><span>0</span>
                                                </div>
                                                {/* X Axis labels */}
                                                <div className="absolute -bottom-4 left-0 w-full flex justify-between text-[8px] text-gray-400 px-1">
                                                    <span>Wew</span><span>Sep</span><span>Mon</span><span>Tue</span><span>Het</span>
                                                </div>
                                                
                                                {/* SVG Line Charts */}
                                                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                                    {/* Blue Area Chart */}
                                                    <path d="M0,80 C30,80 50,50 80,60 C120,70 140,20 170,10 C180,10 190,40 200,60 L200,100 L0,100 Z" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                                                    {/* Teal Line Chart */}
                                                    <path d="M0,90 C40,90 60,60 100,50 C140,40 160,80 200,90 L200,100 L0,100 Z" fill="rgba(20, 184, 166, 0.15)" stroke="#14b8a6" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                                                </svg>
                                            </div>
                                            
                                            {/* Right Side Stats Boxes */}
                                            <div className="flex flex-col gap-2 justify-center">
                                                <div className="bg-[#eff4ff] rounded-[8px] p-2">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-[9px] text-gray-500">Engagement</span>
                                                        <div className="w-3 h-3 bg-blue-200 rounded flex items-center justify-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div></div>
                                                    </div>
                                                    <p className="text-[14px] font-bold text-gray-900 mt-1">334</p>
                                                </div>
                                                <div className="bg-[#fff8f0] rounded-[8px] p-2 border border-[#ffe4cc]">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-[9px] text-gray-500">Take Acauts</span>
                                                        <div className="w-3 h-3 bg-orange-200 rounded flex items-center justify-center"><div className="w-1.5 h-1.5 bg-orange-400 rounded-sm"></div></div>
                                                    </div>
                                                    <p className="text-[14px] font-bold text-gray-900 mt-1">3,352</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress status */}
                                    <div className="bg-white rounded-[14px] p-4 shadow-sm border border-gray-100 pb-5">
                                        <h3 className="text-[12px] font-bold text-gray-900 mb-5">Progress status</h3>
                                        <div className="relative w-full px-2">
                                            {/* Background track */}
                                            <div className="absolute left-2 right-2 top-1.5 h-1 bg-gray-200 rounded-full"></div>
                                            {/* Active track */}
                                            <div className="absolute left-2 top-1.5 h-1 bg-[#1a233a] rounded-full" style={{ width: '75%' }}></div>
                                            
                                            {/* Tooltip */}
                                            <div className="absolute -top-6 bg-[#1a233a] text-white text-[9px] font-bold px-2 py-0.5 rounded-[4px] shadow-md z-10" style={{ left: '70%' }}>
                                                100%
                                                <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1a233a] rotate-45"></div>
                                            </div>

                                            <div className="flex justify-between relative z-10 text-[9px] text-gray-500 font-medium">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-4 h-4 rounded-full bg-[#1a233a] mb-1 flex items-center justify-center shadow-sm">
                                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    Completed
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-4 h-4 rounded-full bg-[#1a233a] mb-1 flex items-center justify-center shadow-sm">
                                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    United
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-4 h-4 rounded-full border-[3px] border-[#1a233a] bg-white mb-1 shadow-sm"></div>
                                                    <span className="text-[#1a233a] font-bold">Progress</span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white mb-1"></div>
                                                    Status
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Right Column Widgets */}
                                <div className="flex flex-col gap-4 mt-2">
                                    
                                    {/* Summary */}
                                    <div className="bg-white rounded-[14px] p-4 shadow-sm border border-gray-100 pb-5">
                                        <h3 className="text-[12px] font-bold text-gray-900 mb-3">Summary</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="bg-[#f0f4ff] rounded-[8px] p-2.5">
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-[10px] text-gray-500">Total</span>
                                                    <div className="w-3.5 h-3.5 bg-blue-200 rounded flex items-center justify-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div></div>
                                                </div>
                                                <p className="text-[13px] font-bold text-gray-900">$3.1M</p>
                                            </div>
                                            <div className="bg-[#fff8f0] rounded-[8px] p-2.5 border border-[#ffe4cc]">
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-[10px] text-gray-500">Revenue</span>
                                                    <div className="w-3.5 h-3.5 bg-orange-200 rounded flex items-center justify-center"><div className="w-1.5 h-1.5 bg-orange-400 rounded-sm"></div></div>
                                                </div>
                                                <p className="text-[13px] font-bold text-gray-900">$28K</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress List */}
                                    <div className="bg-white rounded-[14px] p-4 shadow-sm border border-gray-100 flex-1">
                                        <h3 className="text-[12px] font-bold text-gray-900 mb-3">Progress</h3>
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <span className="text-[11px] text-gray-800 font-medium">Progress stators</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <span className="text-[11px] text-gray-800 font-medium">Progress leanling</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full bg-teal-500 flex items-center justify-center">
                                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <span className="text-[11px] text-gray-800 font-medium">Load session</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                                                </div>
                                                <span className="text-[11px] text-gray-800 font-medium">Sest premise</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-200"></div>
                                                <span className="text-[11px] text-gray-400">Progress conopts</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Floating Absolute Funnel Chart Card */}
                    <div className="hidden sm:block absolute -top-5 -right-6 lg:-right-10 w-[240px] bg-white rounded-[18px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-5 z-20 border border-gray-50">
                        <h3 className="text-[13px] font-bold text-gray-900 mb-4 tracking-tight">Funnel chart</h3>
                        
                        {/* SVG Funnel */}
                        <div className="w-full flex justify-center mb-4">
                            <svg viewBox="0 0 100 110" width="130" height="140" preserveAspectRatio="none">
                                {/* Trapezoid 1: Dark Blue */}
                                <polygon points="0,0 100,0 85,25 15,25" fill="#1e396b" />
                                {/* Trapezoid 2: Blue */}
                                <polygon points="16,28 84,28 72,55 28,55" fill="#4a86e8" />
                                {/* Trapezoid 3: Teal */}
                                <polygon points="29,58 71,58 60,82 40,82" fill="#2eb09c" />
                                {/* Trapezoid 4: Orange */}
                                <polygon points="41,85 59,85 53,105 47,105" fill="#e89c3a" />
                            </svg>
                        </div>

                        {/* Legend */}
                        <div className="flex justify-center gap-3 text-[10px] text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-[2px] bg-[#1e396b]"></div> Niert
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-[2px] bg-[#2eb09c]"></div> Chart
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-[2px] bg-[#e89c3a]"></div> Funnel
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HomepageSection5;

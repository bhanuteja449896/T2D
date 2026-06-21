import React from 'react';
import './HomepageSection4.css';

const HomepageSection4: React.FC = () => {
    return (
        <section className="bg-[#f4f6f9] w-full min-h-screen flex items-center justify-center font-sans text-[#111827] antialiased p-6 relative">
            {/* Main Container */}
            <div className="max-w-[1400px] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Data Table Card */}
                <div className="w-full bg-white rounded-[20px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.08)] p-6 border border-gray-100 mx-auto max-w-[550px]">
                    
                    {/* Card Header */}
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-[19px] font-semibold text-gray-900 tracking-tight">Segment Data</h2>
                        <div className="flex gap-2.5">
                            {/* Filters Button */}
                            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-[8px] text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
                                    <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
                                    <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
                                </svg>
                                Filters
                            </button>
                            {/* Export Button */}
                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a233a] rounded-[8px] text-[13px] font-medium text-white hover:bg-[#111827] transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Export
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full overflow-x-auto table-container">
                        <div className="min-w-[450px]">
                            {/* Table Header */}
                            <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-3 border-b border-gray-100 text-[12px] font-medium text-gray-500 mb-1">
                                <div></div>
                                <div className="flex items-center gap-1">Lead Name <span className="text-[10px]">↑</span></div>
                                <div className="flex items-center gap-1">Company <span className="text-gray-300 text-[10px]">↓</span></div>
                                <div className="flex items-center gap-1">Source <span className="text-gray-300 text-[10px]">↓</span></div>
                                <div className="flex items-center gap-1">Score <span className="text-gray-300 text-[10px]">↓</span></div>
                                <div className="flex items-center gap-1">Status <span className="text-gray-300 text-[10px]">↓</span></div>
                                <div className="text-center">Actions</div>
                            </div>

                            {/* Table Body */}
                            <div className="flex flex-col text-[13px] text-gray-800">
                                
                                {/* Row 1 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 border-b border-gray-50">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>John Doe</div>
                                    <div>Apex Corp</div>
                                    <div>
                                        {/* LinkedIn Icon */}
                                        <div className="w-5 h-5 bg-[#0077b5] rounded-[4px] flex items-center justify-center text-white font-bold text-[10px] leading-none">in</div>
                                    </div>
                                    <div>96</div>
                                    <div><span className="bg-[#e6effc] text-[#2c5282] px-2 py-1 rounded-[6px] text-[11px] font-medium">Lead Scored</span></div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 2 (Active/Selected) */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 bg-[#eef4ff] rounded-[10px] border border-[#c4d9fd] my-0.5 relative z-10">
                                    <div className="w-[16px] h-[16px] bg-[#1a233a] rounded-[4px] flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div className="font-medium text-gray-900">John Doe</div>
                                    <div>Apex Corp</div>
                                    <div>
                                        {/* Mail Icon */}
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    </div>
                                    <div>96</div>
                                    {/* Progress Bar */}
                                    <div className="flex items-center">
                                        <div className="w-14 h-1.5 bg-[#d4e1f9] rounded-full overflow-hidden">
                                            <div className="w-[96%] h-full bg-[#3b82f6] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 border-b border-gray-50">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>Elliam Danth</div>
                                    <div>LinkedIn</div>
                                    <div>
                                        <div className="w-5 h-5 bg-[#0077b5] rounded-[4px] flex items-center justify-center text-white font-bold text-[10px] leading-none">in</div>
                                    </div>
                                    <div>75</div>
                                    <div><span className="bg-[#e6effc] text-[#2c5282] px-2 py-1 rounded-[6px] text-[11px] font-medium">Engaged</span></div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 4 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 border-b border-gray-50">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>John Davies</div>
                                    <div>Gorola Corp</div>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    </div>
                                    <div>83</div>
                                    <div className="flex items-center">
                                        <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="w-[83%] h-full bg-[#7ca6f6] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 5 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 border-b border-gray-50">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>Johnn Lainson</div>
                                    <div>LinkedIn</div>
                                    <div>
                                        <div className="w-5 h-5 bg-[#0077b5] rounded-[4px] flex items-center justify-center text-white font-bold text-[10px] leading-none">in</div>
                                    </div>
                                    <div>75</div>
                                    <div><span className="bg-[#e6effc] text-[#2c5282] px-2 py-1 rounded-[6px] text-[11px] font-medium">Engaged</span></div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 6 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 border-b border-gray-50">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>Bovial Hares</div>
                                    <div>Apex Corp</div>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    </div>
                                    <div>80</div>
                                    <div className="flex items-center">
                                        <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="w-[80%] h-full bg-[#7ca6f6] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 7 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5 border-b border-gray-50">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>Mary Aann</div>
                                    <div>Bankus</div>
                                    <div>
                                        <div className="w-5 h-5 bg-[#0077b5] rounded-[4px] flex items-center justify-center text-white font-bold text-[10px] leading-none">in</div>
                                    </div>
                                    <div>36</div>
                                    <div><span className="bg-[#e6effc] text-[#2c5282] px-2 py-1 rounded-[6px] text-[11px] font-medium">Engaged</span></div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                                {/* Row 8 */}
                                <div className="grid grid-cols-[30px_1.5fr_1.5fr_0.8fr_0.8fr_1.2fr_40px] gap-2 items-center px-2 py-2.5">
                                    <div className="w-[16px] h-[16px] border border-gray-300 rounded-[4px]"></div>
                                    <div>John Davis</div>
                                    <div>Apex Corp</div>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    </div>
                                    <div>44</div>
                                    <div className="flex items-center">
                                        <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="w-[44%] h-full bg-[#7ca6f6] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-center tracking-widest leading-none pb-1">...</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col gap-5 lg:pl-4">
                    
                    {/* Top Icon */}
                    <div className="w-[60px] h-[60px] bg-[#e6effc] rounded-[14px] flex items-center justify-center mb-1">
                        {/* Dashboard & Settings SVG Icon */}
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#1a233a]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="15" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-[30px] md:text-[38px] lg:text-[44px] font-bold text-[#111827] leading-[1.15] tracking-tight">
                        Smart Segmentation<br />
                        Accelerates Lead Quality.
                    </h1>

                    {/* Paragraph text exactly as shown in the mockup */}
                    <p className="text-[16px] text-[#6B7280] leading-relaxed max-w-[460px] my-1">
                        16 px muted gray #6B7280's can seiertetttor segmenting capabilities, is pr corpored benefits with max width 460 px.
                    </p>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-3.5 mt-2">
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#111827] text-[16px] font-medium">Advanced lead scoring rules</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#111827] text-[16px] font-medium">Dynamic, real-time lists</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#111827] text-[16px] font-medium">Multi-channel data sources</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-[#111827] text-[16px] font-medium">Automated workflow triggers</span>
                        </li>
                    </ul>

                </div>

            </div>
        </section>
    );
};

export default HomepageSection4;

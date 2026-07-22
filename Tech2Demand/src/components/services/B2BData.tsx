import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

/* ─── Data ─────────────────────────────────────────────── */

const criteriaList = [
  { label: 'Region wise', desc: '– Global, Country, State, City' },
  { label: 'Industry wise', desc: '– All major industries & niche sectors' },
  { label: 'Revenue wise', desc: '– As per your target revenue range' },
  { label: 'Employee size wise', desc: '– By company size / headcount' },
  { label: 'Department wise', desc: '– All key departments' },
  { label: 'Titles wise', desc: '– Decision-makers and key influencers' },
];

const benefits = [
  {
    icon: 'ph-shield-check',
    title: 'Accurate &\nVerified Data',
    desc: 'We deliver precise and verified contact and company data you can trust.',
  },
  {
    icon: 'ph-database',
    title: 'Comprehensive\nCoverage',
    desc: 'Access data across industries, company sizes, and key decision-maker levels.',
  },
  {
    icon: 'ph-arrows-clockwise',
    title: 'Real-Time\nUpdates',
    desc: 'Our data is continuously updated to ensure maximum relevance and accuracy.',
  },
  {
    icon: 'ph-funnel',
    title: 'Advanced\nFiltering',
    desc: 'Find the right prospects using granular filters like industry, revenue, title, location & more.',
  },
  {
    icon: 'ph-chart-line-up',
    title: 'Better Decisions,\nBetter Outcomes',
    desc: 'High-quality data helps you target smarter, outreach better, and close more deals.',
  },
  {
    icon: 'ph-folder-simple',
    title: 'Works with\nYour CRM',
    desc: 'Our data will use your CRMs also easily for seamless import and better productivity.',
  },
];

const steps = [
  {
    icon: 'ph-magnifying-glass',
    step: 'Step 1',
    title: 'Identify Requirements',
    desc: 'We understand your ICP, target market, and data needs.',
  },
  {
    icon: 'ph-database',
    step: 'Step 2',
    title: 'Data Sourcing',
    desc: 'We source data from reliable and compliant sources.',
  },
  {
    icon: 'ph-shield-check',
    step: 'Step 3',
    title: 'Verification & Validation',
    desc: 'Our team verifies and validates data for accuracy, quality, and completeness.',
  },
  {
    icon: 'ph-funnel',
    step: 'Step 4',
    title: 'Enrichment',
    desc: 'We enrich data with additional firmographics, contact details, and more.',
  },
  {
    icon: 'ph-check-circle',
    step: 'Step 5',
    title: 'Delivery',
    desc: 'Clean, verified data is delivered in your preferred format.',
  },
  {
    icon: 'ph-chart-bar',
    step: 'Step 6',
    title: 'Drive Results',
    desc: 'Use the data to run targeted campaigns and grow your pipeline.',
  },
];

const ctaMetrics = [
  { icon: 'ph-calendar-check', label: 'Meetings Booked\nEvery Month' },
  { icon: 'ph-users-three', label: 'New Customers\nEvery Month' },
  { icon: 'ph-chart-line-up', label: 'Pipeline Growth\nOn Average' },
  { icon: 'ph-target', label: 'ROI\nFrom Our Campaigns' },
];

/* ─── Component ─────────────────────────────────────────── */

const B2BData: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="font-inter antialiased overflow-x-hidden bg-white text-[#171927]">

      {/* ════════════════════════════════════════
          SECTION 1 – HERO (LIGHT)
      ════════════════════════════════════════ */}
      <section className="w-full relative pt-[80px] lg:pt-[120px] pb-[80px] overflow-hidden" style={{ background: '#f8f9fc' }}>
        {/* Decorative background dot pattern */}
        <div 
          className="absolute right-0 top-0 w-[40%] h-full opacity-30 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#8b46ff 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'linear-gradient(to left, white, transparent)' }}
        />

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10 h-full flex flex-col justify-center">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[14px] font-medium mb-10">
             <span className="text-gray-500 hover:text-gray-800 cursor-pointer" onClick={() => setCurrentPage && setCurrentPage('home')}>Home</span>
             <i className="ph ph-caret-right text-gray-400 text-[12px]" />
             <span className="text-gray-500 hover:text-gray-800 cursor-pointer" onClick={() => setCurrentPage && setCurrentPage('services')}>Services</span>
             <i className="ph ph-caret-right text-gray-400 text-[12px]" />
             <span style={{ color: '#4414e2' }}>B2B Data</span>
          </div>

          <div className="flex flex-col xl:flex-row items-center gap-16">
            
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full w-max mb-6 bg-white"
                style={{ border: '1px solid #d4b8ff' }}
              >
                <i className="ph ph-database text-[14px]" style={{ color: '#8b46ff' }} />
                <span className="font-bold text-[11px] tracking-widest uppercase" style={{ color: '#8b46ff' }}>
                  B2B DATA
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-montserrat font-extrabold leading-[1.15] mb-6 text-[#171927]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                High-Quality Data.<br />
                <span style={{ color: '#4414e2' }}>Better Insights.</span><br />
                <span style={{ color: '#4414e2' }}>Stronger Pipeline.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[17px] leading-[1.75] mb-10 max-w-[560px]" style={{ color: '#5f6577' }}>
                We provide accurate, verified, and up-to-date B2B data that helps you identify the right prospects, enrich your CRM, and drive sophisticated outreach with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#3008b4', boxShadow: '0 8px 24px rgba(48,8,180,0.3)', border: 'none' }}
                >
                  Book Your Free Consultation <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-purple-50"
                  style={{ border: '1.5px solid #d4b8ff', color: '#3008b4', background: 'transparent' }}
                  onClick={() => setCurrentPage && setCurrentPage('services')}
                >
                  Explore All Services <i className="ph ph-arrow-right text-[16px]" />
                </button>
              </div>
            </div>

            {/* RIGHT - Floating UI Cards */}
            <div className="xl:flex-shrink-0 xl:w-[45%] w-full relative min-h-[450px] pointer-events-none mt-10 xl:mt-0">
              
              {/* Profile Card */}
              <div 
                className="absolute top-0 left-0 w-[240px] rounded-[16px] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,10,0.08)]"
                style={{ border: '1px solid #f0f0f5' }}
              >
                 <div className="flex items-center gap-4 mb-5">
                    <div className="w-[48px] h-[48px] rounded-full bg-[#eef1ff] flex items-center justify-center">
                       <i className="ph-fill ph-user text-[24px] text-[#4414e2]" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                       <div className="h-[8px] w-[60%] rounded-full bg-[#e8e9ef]" />
                       <div className="h-[8px] w-[40%] rounded-full bg-[#f0f0f5]" />
                    </div>
                 </div>
                 <div className="flex flex-col gap-3">
                    {['Verified Contact', 'Company Information', 'Industry & Revenue', 'Job Title & Department', 'Email'].map((item, i) => (
                       <div key={i} className="flex items-center gap-2">
                          <i className="ph-fill ph-check-circle text-[16px]" style={{ color: '#8b46ff' }} />
                          <span className="text-[12px] font-semibold text-[#171927]">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Data Table Card */}
              <div 
                className="absolute top-[30px] right-0 w-[360px] rounded-[16px] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,10,0.12)] z-10"
                style={{ border: '1px solid #f0f0f5' }}
              >
                 <h4 className="font-bold text-[13px] mb-4 text-[#171927]">B2B Data</h4>
                 <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex justify-between items-center text-[10px] font-bold text-[#171927]">
                       <span className="w-[18%]">Company</span>
                       <span className="w-[18%]">Contact</span>
                       <span className="w-[18%]">Title</span>
                       <span className="w-[18%]">Industry</span>
                       <span className="w-[18%] text-center">Verified</span>
                    </div>
                    {/* Rows */}
                    {[1, 2, 3, 4, 5].map((_, i) => (
                       <div key={i} className="flex justify-between items-center">
                          <div className="w-[18%] h-[6px] rounded-full bg-[#e8e9ef]" />
                          <div className="w-[18%] h-[6px] rounded-full bg-[#e8e9ef]" />
                          <div className="w-[18%] h-[6px] rounded-full bg-[#e8e9ef]" />
                          <div className="w-[18%] h-[6px] rounded-full bg-[#e8e9ef]" />
                          <div className="w-[18%] flex justify-center">
                             <i className="ph-fill ph-check-circle text-[14px]" style={{ color: '#8b46ff' }} />
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Data Accuracy Card */}
              <div 
                className="absolute bottom-[20px] left-[60px] w-[180px] rounded-[16px] bg-white p-5 shadow-[0_16px_40px_rgba(0,0,10,0.1)] z-20 flex flex-col items-center"
                style={{ border: '1px solid #f0f0f5' }}
              >
                 <h4 className="font-bold text-[12px] mb-4 text-[#171927] w-full text-left">Data Accuracy</h4>
                 {/* Donut chart mock */}
                 <div className="relative w-[80px] h-[80px] mb-4 rounded-full border-[10px] border-[#f0f0f5] flex items-center justify-center">
                    <div className="absolute inset-[-10px] rounded-full border-[10px] border-[#3008b4]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)' }} />
                    <span className="font-extrabold text-[18px] text-[#171927] relative z-10">98%</span>
                 </div>
                 <span className="text-[11px] font-semibold text-[#171927]">Verified & Updated</span>
              </div>
              
              {/* Database Icon floating */}
               <div 
                className="absolute bottom-[40px] right-[20px] w-[60px] h-[60px] rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,10,0.08)] z-20 flex items-center justify-center"
                style={{ border: '1px solid #f0f0f5' }}
              >
                 <i className="ph-fill ph-database text-[32px] text-[#3008b4]" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 – WE BUILD. YOU GROW.
      ════════════════════════════════════════ */}
      <section className="w-full bg-white pt-[60px] pb-[80px] px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
        <div 
          className="w-full rounded-[24px] bg-white p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,10,0.04)] border border-[#e8e9ef] flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
           {/* Column 1 */}
           <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0 lg:w-[280px]">
              <i className="ph-fill ph-database text-[72px] text-[#3008b4] mb-6" />
              <h2 className="font-montserrat font-extrabold text-[24px] mb-3 text-[#171927]">
                We Build. You Grow.
              </h2>
              <p className="text-[14px] leading-[1.6] text-[#5f6577]">
                We build the data manually with precision and care, exactly the way you need it.
              </p>
           </div>

           {/* Column 2 (List) */}
           <div className="flex-1 flex flex-col gap-4 min-w-0">
              {criteriaList.map((item, i) => (
                 <div key={i} className="flex items-start gap-3">
                    <i className="ph-fill ph-check-circle text-[20px] text-[#3008b4] mt-[1px] flex-shrink-0" />
                    <p className="text-[15px] text-[#171927]">
                       <span className="font-bold">{item.label}</span> <span className="text-[#5f6577]">{item.desc}</span>
                    </p>
                 </div>
              ))}
           </div>

           {/* Column 3 */}
           <div className="flex flex-col items-center text-center flex-shrink-0 lg:w-[260px] pt-8 lg:pt-0 lg:border-l lg:border-[#e8e9ef] lg:pl-12">
              <i className="ph ph-handshake text-[64px] text-[#3008b4] mb-6" />
              <p className="text-[15px] font-semibold text-[#171927] leading-[1.5] mb-2">
                 We build and deliver data exactly to your criteria.
              </p>
              <p className="text-[14px] font-bold" style={{ color: '#4414e2' }}>
                 Valid Data. Updated Contacts List.
              </p>
           </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 – WHY B2B DATA DRIVES RESULTS
      ════════════════════════════════════════ */}
      <section className="w-full bg-[#f8f9fc] py-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Why Our B2B Data Drives Results
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#3008b4' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[20px] bg-white border border-[#e8e9ef] p-6 shadow-[0_4px_16px_rgba(0,0,10,0.03)] hover:-translate-y-[4px] transition-transform duration-300"
              >
                <div className="mb-6 relative">
                   <div className="absolute inset-0 bg-[#3008b4] opacity-5 blur-[12px] rounded-full" />
                   <i className={`ph ${b.icon} text-[48px]`} style={{ color: '#3008b4' }} />
                </div>
                <h3 className="font-bold text-[15px] leading-[1.3] mb-3 whitespace-pre-line" style={{ color: '#171927' }}>
                  {b.title}
                </h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5f6577' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 – PROCESS
      ════════════════════════════════════════ */}
      <section className="w-full py-[80px] bg-white">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          <div className="text-center mb-16">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Our B2B Data Process
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#3008b4' }} />
          </div>

          {/* Desktop: one row */}
          <div className="hidden xl:flex items-start justify-between">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center" style={{ width: 'calc((100% - 5 * 36px) / 6)' }}>
                  <div
                    className="w-[64px] h-[64px] rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #eef1ff',
                      boxShadow: '0 8px 24px rgba(48,8,180,0.08)',
                    }}
                  >
                    <i className={`ph ${s.icon} text-[28px]`} style={{ color: '#3008b4' }} />
                  </div>
                  <span className="font-bold text-[11px] uppercase tracking-wider mb-2" style={{ color: '#4414e2' }}>
                    {s.step}
                  </span>
                  <h3 className="font-bold text-[14px] leading-[1.3] mb-3" style={{ color: '#171927' }}>
                    {s.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6]" style={{ color: '#5f6577' }}>{s.desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="flex items-center flex-shrink-0 mt-[30px]" style={{ width: '36px' }}>
                    <div className="flex-1" style={{ borderTop: '2px dotted #c4a0ff' }} />
                    <i className="ph-bold ph-caret-right text-[12px] flex-shrink-0" style={{ color: '#8b46ff', marginLeft: '-1px' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/tablet grid */}
          <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[16px] p-6 border border-[#e8e9ef] bg-white shadow-[0_4px_16px_rgba(0,0,10,0.03)]"
              >
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-4"
                  style={{ background: '#eef1ff', border: '1.5px solid #d4b8ff' }}
                >
                  <i className={`ph ${s.icon} text-[24px]`} style={{ color: '#3008b4' }} />
                </div>
                <span className="font-bold text-[11px] uppercase tracking-wider mb-2" style={{ color: '#4414e2' }}>
                  {s.step}
                </span>
                <h3 className="font-bold text-[15px] mb-2">{s.title}</h3>
                <p className="text-[13px] leading-[1.6] text-[#5f6577]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 – BOTTOM CTA BANNER
      ════════════════════════════════════════ */}
      <section className="w-full py-[60px] px-4 sm:px-6 md:px-[60px] lg:px-[100px] bg-white">
        <div
          className="w-full rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(110deg, #180954 0%, #291083 50%, #1c0e64 100%)',
            boxShadow: '0 24px 60px rgba(24,9,84,0.3)',
          }}
        >
          {/* Map texture overlay (simulated with dots) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-8 lg:px-14 py-12">
            
            {/* Left */}
            <div className="flex flex-col gap-3 lg:max-w-[35%]">
              <h2 className="font-montserrat font-extrabold text-[28px] sm:text-[32px] text-white leading-[1.25]">
                High-Quality Data.<br/>Stronger Pipeline.<br/>Better Results.
              </h2>
              <p className="text-[15px] leading-[1.6] mt-2" style={{ color: '#cfd2df' }}>
                Get the right data, reach the right people,
                and turn insights into revenue.
              </p>
            </div>

            {/* Center Metrics */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-8">
              {ctaMetrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center bg-white/10 border border-white/20">
                     <i className={`ph ${m.icon} text-[24px] text-white`} />
                  </div>
                  <p
                    className="text-[12px] font-semibold leading-[1.4] text-center"
                    style={{ color: '#fff', whiteSpace: 'pre-line' }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right CTA */}
            <div className="flex-shrink-0">
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                className="flex items-center gap-2 font-semibold text-[15px] px-8 py-[15px] rounded-full transition-all hover:-translate-y-[2px]"
                style={{
                  background: '#ffffff',
                  color: '#3008b4',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                Book Your Free Consultation <i className="ph ph-arrow-right text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default B2BData;

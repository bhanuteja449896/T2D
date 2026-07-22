import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

/* ─── Data ─────────────────────────────────────────────── */

const benefits = [
  {
    icon: 'ph-target',
    title: 'Precision Targeting',
    desc: 'We identify and target decision-makers that match your Ideal Customer Profile.',
  },
  {
    icon: 'ph-shield-check',
    title: 'Verified Data',
    desc: 'Access accurate, verified, and enriched data to reach the right prospects.',
  },
  {
    icon: 'ph-share-network',
    title: 'Multi-Channel Outreach',
    desc: 'Engage prospects through Email, LinkedIn, Phone, and more.',
  },
  {
    icon: 'ph-user',
    title: 'Personalized Engagement',
    desc: 'We craft personalized messages that start meaningful conversations.',
  },
  {
    icon: 'ph-chart-bar',
    title: 'Measurable Results',
    desc: 'Data-driven reporting to track performance and maximize ROI.',
  },
];

const steps = [
  {
    icon: 'ph-user',
    step: 'Step 1',
    title: 'Understand Your ICP',
    desc: 'We learn about your business, target audience, and goals to define your ICP.',
  },
  {
    icon: 'ph-magnifying-glass',
    step: 'Step 2',
    title: 'Research & Build\nTarget List',
    desc: 'We identify the right companies and decision-makers using advanced research tools.',
  },
  {
    icon: 'ph-shield-check',
    step: 'Step 3',
    title: 'Verify & Enrich Data',
    desc: 'We verify contact details and enrich data for better accuracy and engagement.',
  },
  {
    icon: 'ph-paper-plane-tilt',
    step: 'Step 4',
    title: 'Launch Outreach\nCampaigns',
    desc: 'We execute multi-channel outreach with personalized messaging.',
  },
  {
    icon: 'ph-chat-circle-dots',
    step: 'Step 5',
    title: 'Engage & Nurture\nProspects',
    desc: 'We engage, follow up, and nurture prospects until they show interest.',
  },
  {
    icon: 'ph-calendar-check',
    step: 'Step 6',
    title: 'Deliver Qualified\nLeads',
    desc: 'We deliver sales-ready, qualified leads and booked meetings to your team.',
  },
];

const industries = [
  { icon: 'ph-desktop', label: 'SaaS &\nTechnology' },
  { icon: 'ph-heartbeat', label: 'Healthcare &\nLife Sciences' },
  { icon: 'ph-factory', label: 'Manufacturing' },
  { icon: 'ph-bank', label: 'Financial\nServices' },
  { icon: 'ph-briefcase', label: 'Professional\nServices' },
  { icon: 'ph-shopping-bag', label: 'Retail &\neCommerce' },
  { icon: 'ph-book-open', label: 'Education' },
  { icon: 'ph-airplane-tilt', label: 'Travel &\nHospitality' },
  { icon: 'ph-house', label: 'Real Estate' },
  { icon: 'ph-thermometer', label: 'HVAC' },
  { icon: 'ph-package', label: 'CPG' },
  { icon: 'ph-sparkle', label: 'Beauty' },
  { icon: 'ph-wrench', label: 'Home Services' },
  { icon: 'ph-users', label: 'Member Services' },
  { icon: 'ph-dots-three-circle', label: 'And Many\nMore...' },
];

const ctaMetrics = [
  { icon: 'ph-users-three', label: 'More\nQualified Leads' },
  { icon: 'ph-calendar-check', label: 'More Sales\nOpportunities' },
  { icon: 'ph-chart-line-up', label: 'More Revenue\nGrowth' },
];

const whoWeHelp = [
  'B2B companies looking to scale their pipeline',
  'Sales teams who want more qualified opportunities',
  'Startups and enterprises entering new markets',
  'Marketing teams looking for better quality leads',
];

/* ─── Component ─────────────────────────────────────────── */

const LeadGeneration: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="font-inter antialiased overflow-x-hidden bg-white text-[#171927]">

      {/* ════════════════════════════════════════
          SECTION 1 – HERO (DARK)
      ════════════════════════════════════════ */}
      <section className="w-full relative pt-[80px] pb-[80px] overflow-hidden" style={{ background: '#05060d' }}>
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Photo */}
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80" 
            alt="Business meeting" 
            className="absolute top-0 right-0 w-[80%] xl:w-[65%] h-full object-cover opacity-40 object-right" 
          />
          {/* Gradients to blend photo */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #05060d 30%, transparent 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #05060d 0%, transparent 30%)' }} />
          
          {/* Purple glowing swoosh at bottom right */}
          <div className="absolute bottom-0 right-0 w-full h-[400px] pointer-events-none opacity-80 mix-blend-screen">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 400 Q 400 300 1000 100 L 1000 400 Z" fill="rgba(139,70,255,0.08)" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#glow-grad)" strokeWidth="6" filter="blur(6px)" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#glow-grad)" strokeWidth="2" />
              <defs>
                <linearGradient id="glow-grad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4a00e0" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8e2de2" />
                  <stop offset="100%" stopColor="#c77dff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10 h-full flex flex-col justify-center">
          
          <div className="flex flex-col xl:flex-row items-center gap-12">
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col pt-8">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full w-max mb-8"
                style={{ border: '1px solid rgba(139,70,255,0.5)', background: 'rgba(139,70,255,0.1)' }}
              >
                <i className="ph ph-user text-[14px]" style={{ color: '#c4a0ff' }} />
                <span className="font-semibold text-[11px] tracking-widest uppercase" style={{ color: '#c4a0ff' }}>
                  B2B Lead Generation
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-montserrat font-extrabold leading-[1.1] mb-6 text-white"
                style={{ fontSize: 'clamp(36px, 4.5vw, 68px)' }}
              >
                Generate More Qualified Leads.<br />
                <span style={{ color: '#9a4dff' }}>
                  Build a Stronger<br />Sales Pipeline.
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-[17px] leading-[1.75] mb-8 max-w-[560px]" style={{ color: '#cfd2df' }}>
                Tech2Demand Global helps B2B companies connect with the right decision-makers
                and generate high-quality leads that convert into real opportunities.
                Our data-driven strategies, personalized outreach, and multi-channel
                engagement ensure a steady flow of qualified prospects.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#8b46ff', boxShadow: '0 4px 24px rgba(139,70,255,0.4)', border: 'none' }}
                >
                  Book Your Free Consultation <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-white/10 text-white"
                  style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'transparent' }}
                  onClick={() => setCurrentPage && setCurrentPage('services')}
                >
                  Explore All Services <i className="ph ph-arrow-right text-[16px]" />
                </button>
              </div>
            </div>

            {/* RIGHT - Floating Dashboards */}
            <div className="xl:flex-shrink-0 xl:w-[40%] w-full flex flex-col gap-5 xl:items-end justify-center pt-10 xl:pt-0 pointer-events-none">
              
              {/* Card 1: Meetings Booked */}
              <div 
                className="w-full max-w-[340px] rounded-[16px] p-5 relative overflow-hidden xl:mr-10"
                style={{ 
                  background: 'rgba(10,12,28,0.65)', 
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(139,70,255,0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(139,70,255,0.2)' }}>
                    <i className="ph ph-calendar-check text-[18px]" style={{ color: '#c4a0ff' }} />
                  </div>
                  <span className="text-white font-semibold text-[14px]">Meetings Booked</span>
                </div>
                {/* Line Chart Mock */}
                <div className="h-[60px] w-full flex items-end">
                  <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_4px_8px_rgba(139,70,255,0.4)]">
                    <path d="M 0 50 L 50 40 L 100 45 L 150 25 L 200 30 L 250 10 L 300 5" fill="none" stroke="#9a4dff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Card 2: New Customers */}
              <div 
                className="w-full max-w-[340px] rounded-[16px] p-5 relative overflow-hidden"
                style={{ 
                  background: 'rgba(10,12,28,0.65)', 
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(139,70,255,0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(139,70,255,0.2)' }}>
                    <i className="ph ph-users-three text-[18px]" style={{ color: '#c4a0ff' }} />
                  </div>
                  <span className="text-white font-semibold text-[14px]">New Customers</span>
                </div>
                {/* Bar Chart Mock */}
                <div className="h-[60px] w-full flex items-end justify-between gap-[6px]">
                  {[30, 45, 40, 60, 50, 80, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 rounded-t-[4px]" 
                      style={{ 
                        height: `${h}%`, 
                        background: i > 4 ? 'linear-gradient(to top, #6c2cf5, #a361ff)' : 'rgba(139,70,255,0.25)' 
                      }} 
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 2 – WHY CHOOSE FUNNL
      ════════════════════════════════════════ */}
      <section className="w-full bg-white py-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Why Businesses Choose Tech2Demand Global for Lead Generation
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[18px] transition-all duration-300 cursor-default"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8e9ef',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  padding: '36px 20px 30px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 32px rgba(139,70,255,0.14)';
                  el.style.borderColor = '#c4a0ff';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
                  el.style.borderColor = '#e8e9ef';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center mb-5"
                  style={{ background: '#ede8ff', border: '1.5px solid #d4b8ff' }}
                >
                  <i className={`ph ${b.icon} text-[28px]`} style={{ color: '#8b46ff' }} />
                </div>
                <h3 className="font-bold text-[16px] leading-[1.3] mb-3" style={{ color: '#171927' }}>
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: '#5f6577' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 – PROCESS
      ════════════════════════════════════════ */}
      <section className="w-full py-[80px]" style={{ background: '#f8f8fb' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          <div className="text-center mb-14">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Our Lead Generation Process
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* Desktop: one row */}
          <div className="hidden xl:flex items-start justify-between">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center" style={{ width: 'calc((100% - 5 * 36px) / 6)' }}>
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #c4a0ff',
                      boxShadow: '0 4px 16px rgba(139,70,255,0.12)',
                    }}
                  >
                    <i className={`ph ${s.icon} text-[26px]`} style={{ color: '#8b46ff' }} />
                  </div>
                  <span className="font-semibold text-[11px] uppercase tracking-wider mb-[5px]" style={{ color: '#8b46ff' }}>
                    {s.step}
                  </span>
                  <h3 className="font-bold text-[14px] leading-[1.35] mb-2 whitespace-pre-line" style={{ color: '#171927' }}>
                    {s.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6]" style={{ color: '#5f6577' }}>{s.desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="flex items-center flex-shrink-0 mt-[28px]" style={{ width: '36px' }}>
                    <div className="flex-1" style={{ borderTop: '2px dashed #c4a0ff' }} />
                    <i className="ph-bold ph-caret-right text-[12px] flex-shrink-0" style={{ color: '#8b46ff', marginLeft: '-1px' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/tablet grid */}
          <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[16px] p-6"
                style={{ background: '#ffffff', border: '1.5px solid #e8e9ef', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-3"
                  style={{ background: '#ede8ff', border: '1.5px solid #c4a0ff' }}
                >
                  <i className={`ph ${s.icon} text-[22px]`} style={{ color: '#8b46ff' }} />
                </div>
                <span className="font-semibold text-[11px] uppercase tracking-wider mb-1" style={{ color: '#8b46ff' }}>
                  {s.step}
                </span>
                <h3 className="font-bold text-[14px] leading-[1.3] mb-2 whitespace-pre-line" style={{ color: '#171927' }}>{s.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5f6577' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 – WHO WE HELP / WHAT WE DELIVER
      ════════════════════════════════════════ */}
      <section className="w-full bg-white py-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          
          <div className="flex flex-col xl:flex-row gap-16">
            
            {/* LEFT: Who We Help */}
            <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left">
              <h2 className="font-montserrat font-extrabold text-[28px] mb-8" style={{ color: '#171927' }}>
                Who We Help
              </h2>
              
              <ul className="flex flex-col gap-4 mb-10 xl:w-full max-w-[400px]">
                {whoWeHelp.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-left">
                    <i className="ph-bold ph-check text-[18px] mt-[2px]" style={{ color: '#8b46ff' }} />
                    <span className="text-[15px] font-medium" style={{ color: '#171927' }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Magnet Graphic */}
              <div className="mt-auto w-[140px] h-[140px] rounded-full flex items-center justify-center relative bg-[#f5f0ff] xl:mx-auto">
                 <i className="ph-fill ph-magnet text-[64px]" style={{ color: '#5c10d3', transform: 'rotate(180deg)' }} />
                 <div className="absolute top-[20px] left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <i className="ph-fill ph-user text-[18px]" style={{ color: '#5c10d3' }} />
                    <i className="ph-fill ph-user text-[24px]" style={{ color: '#8b46ff' }} />
                    <i className="ph-fill ph-user text-[18px]" style={{ color: '#5c10d3' }} />
                 </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden xl:block w-px bg-[#e8e9ef]" />

            {/* RIGHT: What We Deliver */}
            <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left">
              <h2 className="font-montserrat font-extrabold text-[28px] mb-8 xl:pl-4" style={{ color: '#171927' }}>
                What We Deliver
              </h2>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[500px] xl:pl-4">
                {industries.map((ind, i) => (
                  <div key={i} className="flex items-center gap-4 text-left">
                    <i className={`ph ${ind.icon} text-[24px]`} style={{ color: '#8b46ff' }} />
                    <span className="text-[13px] font-semibold leading-[1.3]" style={{ color: '#171927', whiteSpace: 'pre-line' }}>
                      {ind.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 – BOTTOM CTA BANNER
      ════════════════════════════════════════ */}
      <section className="w-full py-[60px] px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
        <div
          className="w-full rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(110deg, #180954 0%, #291083 50%, #1c0e64 100%)',
            boxShadow: '0 24px 60px rgba(24,9,84,0.4)',
          }}
        >
          {/* Map texture overlay (simulated with dots) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-10 lg:px-14 py-12">
            {/* Left */}
            <div className="flex flex-col gap-3 lg:max-w-[40%]">
              <h2 className="font-montserrat font-extrabold text-[28px] sm:text-[32px] text-white leading-[1.2]">
                Ready to Build a Stronger Pipeline?
              </h2>
              <p className="text-[15px] leading-[1.7]" style={{ color: '#c4b4ff' }}>
                Let's generate more qualified leads and create more
                opportunities for your business.
              </p>
            </div>

            {/* Center Metrics */}
            <div className="flex gap-6 lg:gap-8">
              {ctaMetrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <i className={`ph ${m.icon} text-[28px] text-white opacity-80`} />
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
                className="flex items-center gap-2 font-semibold text-[15px] px-8 py-[14px] rounded-full transition-all hover:-translate-y-[2px]"
                style={{
                  background: '#ffffff',
                  color: '#8b46ff',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
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

export default LeadGeneration;

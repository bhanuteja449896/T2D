import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const benefits = [
  { icon: 'ph-globe', title: 'Global Market Access', desc: 'Reach qualified leads in new countries and regions with precision targeting.', color: '#8b46ff', bgColor: '#f5f0ff' },
  { icon: 'ph-user-gear', title: 'Localized Outreach', desc: 'Tailored messaging for different cultures, languages and buyer behaviors.', color: '#2f7bff', bgColor: '#eff6ff' },
  { icon: 'ph-shield-check', title: 'Compliant & Reliable', desc: 'We follow local regulations (GDPR, CAN-SPAM & more) for safe outreach.', color: '#10b981', bgColor: '#ecfdf5' },
  { icon: 'ph-headset', title: 'Multi-Time Zone Support', desc: '24/7 outreach across time zones to maximize engagement.', color: '#ec4899', bgColor: '#fdf2f8' },
  { icon: 'ph-handshake', title: 'Build Global Relationships', desc: 'Connect with decision-makers and build long-term business relationships.', color: '#f97316', bgColor: '#fff7ed' },
  { icon: 'ph-chart-line-up', title: 'Better Pipeline Results', desc: 'High-quality international leads that convert into real opportunities.', color: '#8b46ff', bgColor: '#f5f0ff' },
];

const steps = [
  { icon: 'ph-magnifying-glass', step: 'Step 1', title: 'Market & ICP Research', desc: 'We research target markets, industries, and ideal customer profiles.' },
  { icon: 'ph-globe-hemisphere-west', step: 'Step 2', title: 'Targeted Prospecting', desc: 'Identify verified leads across countries and regions.' },
  { icon: 'ph-envelope-simple', step: 'Step 3', title: 'Localized Messaging', desc: 'Create tailored emails that resonate locally.' },
  { icon: 'ph-paper-plane-tilt', step: 'Step 4', title: 'Outreach Campaigns', desc: 'Launch multi-channel campaigns across time zones.' },
  { icon: 'ph-chat-circle-dots', step: 'Step 5', title: 'Engage & Nurture', desc: 'Follow-ups and conversations to build trust and interest.' },
  { icon: 'ph-calendar-check', step: 'Step 6', title: 'Book Qualified Meetings', desc: 'Deliver ready-to-talk leads for your sales team.' },
];

const stats = [
  { icon: 'ph-calendar-check', title: 'Prospect Meetings\nFully Booked\nEvery Week', desc: 'Your sales pipeline\nstays full, every week.' },
  { icon: 'ph-users-three', title: 'New Customers\nEvery Month', desc: 'Consistent flow of new\nopportunities.' },
  { icon: 'ph-chart-bar', title: '5X\nPipeline Growth\nOn Average', desc: null },
  { icon: 'ph-target', title: '6X\nROI\nFrom Our Campaigns', desc: null },
  { icon: 'ph-globe', title: 'Globally Expand\nYour Services Monthly\nYou Get More Deals', desc: null },
];

const CrossBorderLeadGeneration: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="font-inter antialiased overflow-x-hidden" style={{ background: '#ffffff', color: '#171927' }}>
      
      {/* ════════════════════════════════════════
          SECTION 1 – BREADCRUMB + HERO
      ════════════════════════════════════════ */}
      <section className="w-full bg-white pt-[100px] pb-[60px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] mb-8" style={{ color: '#5f6577' }}>
            <button
              onClick={() => setCurrentPage && setCurrentPage('home')}
              className="hover:text-[#8b46ff] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Home
            </button>
            <i className="ph ph-caret-right text-[11px]" />
            <button
              onClick={() => setCurrentPage && setCurrentPage('services')}
              className="hover:text-[#8b46ff] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Services
            </button>
            <i className="ph ph-caret-right text-[11px]" />
            <span className="font-semibold" style={{ color: '#8b46ff' }}>Cross-Border Lead Generation</span>
          </nav>

          {/* Hero Split */}
          <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-12">
            
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full w-max mb-6"
                style={{ border: '1px solid rgba(139,70,255,0.4)', background: '#f8f5ff' }}
              >
                <i className="ph ph-globe text-[14px]" style={{ color: '#8b46ff' }} />
                <span className="font-semibold text-[12px] tracking-wide uppercase" style={{ color: '#8b46ff' }}>
                  CROSS-BORDER LEAD GENERATION
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-montserrat font-extrabold leading-[1.15] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 68px)', color: '#171a2d' }}>
                Expand Beyond Borders.<br />
                <span style={{ color: '#2f7bff' }}>Win More Deals. Grow Faster.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[18px] leading-[1.7] mb-8 max-w-[560px]" style={{ color: '#5f667a' }}>
                We help you reach international markets with targeted, compliant outreach and
                local insights, connecting you with high-quality leads across different regions and time zones.
              </p>

              {/* Info Box */}
              <div className="flex items-center gap-4 bg-[#f8f9fc] border border-gray-100 p-4 rounded-[16px] max-w-[480px] mb-8 shadow-sm">
                <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#6f3cff' }}>
                  <i className="ph ph-phone-call text-[24px] text-white" />
                </div>
                <p className="text-[15px] font-medium leading-[1.5]" style={{ color: '#171a2d' }}>
                  Just 10 to 15 mins call – We will show you<br/>
                  how we fill your sales pipeline and close your deals.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                  className="flex items-center gap-2 font-semibold text-[16px] text-white px-7 py-[14px] rounded-full transition-all hover:scale-[1.02]"
                  style={{ background: '#6f3cff', boxShadow: '0 4px 14px rgba(111,60,255,0.3)' }}
                >
                  Book Your Free Consultation <i className="ph ph-arrow-right text-[18px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[16px] px-7 py-[14px] rounded-full transition-all hover:bg-gray-50"
                  style={{ border: '1.5px solid #e2e4eb', color: '#6f3cff', background: 'white' }}
                  onClick={() => setCurrentPage && setCurrentPage('services')}
                >
                  Explore Our Services <i className="ph ph-arrow-right text-[18px]" />
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="xl:w-[50%] w-full relative flex justify-center xl:justify-end mt-10 xl:mt-0">
              <div className="relative w-full max-w-[600px]">
                {/* Simulated Globe / Image Area */}
                <div className="w-full aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #6f3cff 0%, #2f7bff 100%)' }} />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                  alt="Global business team"
                  className="relative z-10 w-full h-auto object-cover rounded-[24px]"
                  style={{ boxShadow: '0 20px 60px rgba(47, 123, 255, 0.15)' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════ */}
      <section className="w-full pb-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] max-w-[1440px] mx-auto">
          <div className="w-full rounded-[24px] bg-white flex flex-col md:flex-row shadow-[0_8px_30px_rgba(20,24,40,0.06)] border border-gray-100 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 p-8 flex flex-col items-center text-center hover:bg-gray-50/50 transition-colors">
                <i className={`ph ${stat.icon} text-[36px] mb-4`} style={{ color: '#6f3cff' }} />
                <h3 className="font-bold text-[18px] mb-2 whitespace-pre-line leading-[1.3]" style={{ color: '#171a2d' }}>
                  {stat.title}
                </h3>
                {stat.desc && (
                  <p className="text-[14px] leading-[1.5] whitespace-pre-line" style={{ color: '#5f667a' }}>
                    {stat.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURES
      ════════════════════════════════════════ */}
      <section className="w-full bg-[#fcfcfd] py-[100px] border-t border-gray-100">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-[32px] sm:text-[36px] mb-4" style={{ color: '#171a2d' }}>
              Why Cross-Border Lead Generation Drives Global Growth
            </h2>
            <div className="w-[60px] h-[4px] rounded-full mx-auto" style={{ background: '#6f3cff' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] p-6 text-center border border-gray-100 shadow-sm hover:shadow-[0_12px_24px_rgba(20,24,40,0.06)] transition-all hover:-translate-y-1"
              >
                <div 
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: b.bgColor, color: b.color }}
                >
                  <i className={`ph ${b.icon} text-[28px]`} />
                </div>
                <h3 className="font-bold text-[16px] mb-3 leading-[1.3]" style={{ color: '#171a2d' }}>
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.6]" style={{ color: '#5f667a' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════ */}
      <section className="w-full bg-white py-[100px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-[32px] sm:text-[36px] mb-4" style={{ color: '#171a2d' }}>
              Our Cross-Border Lead Generation Process
            </h2>
            <div className="w-[60px] h-[4px] rounded-full mx-auto" style={{ background: '#6f3cff' }} />
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between relative gap-6 lg:gap-2">
            
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[36px] left-10 right-10 h-[2px] border-t-2 border-dashed border-gray-200" />

            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 w-full lg:w-auto">
                <div 
                  className="w-[72px] h-[72px] rounded-full bg-white border-2 flex items-center justify-center mb-4 transition-transform hover:scale-110"
                  style={{ borderColor: '#e2e4eb', color: '#6f3cff', boxShadow: '0 4px 12px rgba(111,60,255,0.08)' }}
                >
                  <i className={`ph ${step.icon} text-[32px]`} />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-wider mb-2" style={{ color: '#6f3cff' }}>
                  {step.step}
                </span>
                <h4 className="font-bold text-[16px] mb-2 px-2" style={{ color: '#171a2d' }}>
                  {step.title}
                </h4>
                <p className="text-[14px] leading-[1.5] px-2 max-w-[200px]" style={{ color: '#5f667a' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════════════ */}
      <section className="w-full bg-white pb-[100px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] max-w-[1440px] mx-auto">
          <div 
            className="w-full rounded-[24px] relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 sm:p-12"
            style={{ 
              background: 'linear-gradient(135deg, #1b0c60 0%, #3d1c9e 50%, #2f7bff 100%)',
              boxShadow: '0 24px 48px rgba(111, 60, 255, 0.25)' 
            }}
          >
            
            {/* Left Graphics (Globe abstract) */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              <div className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%] rounded-full border border-white/10 blur-[2px]" />
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/20" />
            </div>

            {/* Content Left */}
            <div className="flex-1 relative z-10">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-montserrat font-bold text-white leading-[1.3] mb-4">
                If You Globally Expand Your Services Monthly,<br className="hidden lg:block"/>
                You Get <span className="text-[#f9ba32]">More Deals.</span> Rapidly <span className="text-[#f9ba32]">Grow Your Business.</span>
              </h2>
              <p className="text-white/80 text-[18px]">
                Let's take your business to the next level—together.
              </p>
            </div>

            {/* Center Stats */}
            <div className="flex gap-6 relative z-10 flex-wrap lg:flex-nowrap">
              <div className="text-center">
                <i className="ph ph-calendar-check text-[32px] text-white/50 mb-2" />
                <p className="text-white font-bold text-[13px] leading-tight">Prospect Meetings<br/>Fully Booked<br/>Every Week</p>
              </div>
              <div className="text-center">
                <i className="ph ph-users-three text-[32px] text-white/50 mb-2" />
                <p className="text-white font-bold text-[13px] leading-tight">New Customers<br/>Every Month</p>
              </div>
              <div className="text-center">
                <div className="text-white text-[24px] font-bold mb-1">5X</div>
                <p className="text-white font-bold text-[13px] leading-tight">Pipeline Growth<br/>On Average</p>
              </div>
              <div className="text-center">
                <div className="text-white text-[24px] font-bold mb-1">6X</div>
                <p className="text-white font-bold text-[13px] leading-tight">ROI<br/>From Our Campaigns</p>
              </div>
            </div>

            {/* Content Right */}
            <div className="relative z-10 flex flex-col items-center lg:items-end flex-shrink-0">
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                className="bg-white text-[#1b0c60] font-bold text-[16px] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors mb-4 whitespace-nowrap"
              >
                Book Your Free Consultation <i className="ph ph-arrow-right text-[18px]" />
              </button>
              <div className="flex items-start gap-3 max-w-[280px]">
                <i className="ph ph-clock text-white/80 text-[20px] mt-1" />
                <p className="text-white/80 text-[14px] leading-[1.4]">
                  Just 10 to 15 mins call – We will show you how we fill your sales pipeline and close your deals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CrossBorderLeadGeneration;

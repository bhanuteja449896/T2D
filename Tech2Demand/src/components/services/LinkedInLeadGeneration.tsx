import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

/* ─── Data ───────────────────────────────────────────────── */

const benefits = [
  {
    icon: 'ph-users-three',
    title: 'Connect with\nDecision-Makers',
    desc: 'LinkedIn gives direct access to key decision-makers across every industry.',
  },
  {
    icon: 'ph-handshake',
    title: 'Build Trusted\nRelationships',
    desc: 'We help you start meaningful conversations that build trust and credibility.',
  },
  {
    icon: 'ph-target',
    title: 'High-Intent\nProspects',
    desc: 'Engage with professionals who are actively interested in solutions like yours.',
  },
  {
    icon: 'ph-paper-plane-tilt',
    title: 'Personalized\nOutreach',
    desc: 'Tailored connection requests and messages increase acceptance and replies.',
  },
  {
    icon: 'ph-chart-bar',
    title: 'More Meetings,\nBetter Pipeline',
    desc: 'We turn conversations into qualified meetings that drive real pipeline.',
  },
];

const steps = [
  {
    icon: 'ph-user-circle',
    step: 'Step 1',
    title: 'Optimize Profile',
    desc: 'We optimize your LinkedIn profile to build credibility and attract the right prospects.',
  },
  {
    icon: 'ph-target',
    step: 'Step 2',
    title: 'Identify Ideal Prospects',
    desc: 'We find and build a targeted list of decision-makers using advanced filters and Sales Navigator.',
  },
  {
    icon: 'ph-user-plus',
    step: 'Step 3',
    title: 'Send Personalized Connection Requests',
    desc: 'We send customized connection requests that get accepted.',
  },
  {
    icon: 'ph-chat-circle-dots',
    step: 'Step 4',
    title: 'Engage & Build Conversations',
    desc: 'We start conversations, share value, and understand their needs.',
  },
  {
    icon: 'ph-users',
    step: 'Step 5',
    title: 'Nurture & Qualify Prospects',
    desc: 'We nurture relationships and qualify prospects based on intent.',
  },
  {
    icon: 'ph-calendar-check',
    step: 'Step 6',
    title: 'Book Meetings',
    desc: 'We schedule qualified meetings directly on your calendar.',
  },
];

const metrics = [
  { icon: 'ph-linkedin-logo', label: 'Stronger LinkedIn\nPresence' },
  { icon: 'ph-users-three', label: 'More Qualified\nOpportunities' },
  { icon: 'ph-chart-line-up', label: 'Better Pipeline\nGrowth' },
  { icon: 'ph-target', label: 'Higher ROI from\nLinkedIn Outreach' },
];

/* ─── Component ─────────────────────────────────────────── */

const LinkedInLeadGeneration: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div
      className="font-inter antialiased overflow-x-hidden"
      style={{ background: '#f8f8fb', color: '#171927' }}
    >

      {/* ════════════════════════════════════════
          SECTION 1 – BREADCRUMB + HERO
      ════════════════════════════════════════ */}
      <section className="w-full bg-white pt-[100px] pb-[60px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] mb-8" style={{ color: '#5f6577' }}>
            <button
              onClick={() => setCurrentPage && setCurrentPage('home')}
              className="hover:text-primaryPurple transition-colors cursor-pointer bg-transparent border-none p-0"
              style={{ color: '#5f6577' }}
            >
              Home
            </button>
            <i className="ph ph-caret-right text-[11px]" />
            <button
              onClick={() => setCurrentPage && setCurrentPage('services')}
              className="hover:text-primaryPurple transition-colors cursor-pointer bg-transparent border-none p-0"
              style={{ color: '#5f6577' }}
            >
              Services
            </button>
            <i className="ph ph-caret-right text-[11px]" />
            <span className="font-semibold" style={{ color: '#8b46ff' }}>
              LinkedIn Lead Generation
            </span>
          </nav>

          {/* Hero split */}
          <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-16">

            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full w-max mb-7"
                style={{ border: '1.5px solid #c4a0ff', background: '#f5f0ff' }}
              >
                <i className="ph-fill ph-linkedin-logo text-[14px]" style={{ color: '#8b46ff' }} />
                <span className="font-semibold text-[13px] tracking-wide uppercase" style={{ color: '#8b46ff' }}>
                  LinkedIn Lead Generation
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-montserrat font-extrabold leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(36px, 4.5vw, 68px)', color: '#171927' }}
              >
                Turn LinkedIn Connections<br />
                Into Qualified Sales<br />
                <span style={{ color: '#8b46ff' }}>Opportunities.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[17px] leading-[1.75] mb-8 max-w-[520px]" style={{ color: '#5f6577' }}>
                We help you build relationships with the right decision-makers on
                LinkedIn through personalized outreach, meaningful engagement,
                and strategic follow-ups that lead to booked meetings.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{
                    background: '#8b46ff',
                    boxShadow: '0 4px 20px rgba(139,70,255,0.35)',
                    border: 'none',
                  }}
                >
                  Book Your Free Consultation
                  <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-[#f5f0ff]"
                  style={{
                    border: '1.5px solid #8b46ff',
                    color: '#8b46ff',
                    background: '#ffffff',
                  }}
                >
                  Explore All Services
                  <i className="ph ph-arrow-right text-[16px]" />
                </button>
              </div>
            </div>

            {/* RIGHT – mockup composition */}
            <div
              className="xl:flex-shrink-0 xl:w-[48%] w-full relative rounded-[24px] overflow-hidden"
              style={{
                minHeight: '360px',
                background: 'linear-gradient(135deg, #f0ecff 0%, #e8f0ff 60%, #f5f5f5 100%)',
              }}
            >
              {/* Professional photo */}
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=900&q=80"
                alt="Professional using LinkedIn"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: '360px', maxHeight: '440px', display: 'block' }}
              />

              {/* Floating LinkedIn search card */}
              <div
                className="absolute top-[14px] right-[14px] rounded-[14px] p-4"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e9ef',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                  width: '230px',
                }}
              >
                {/* Search bar mock */}
                <div
                  className="flex items-center gap-2 rounded-full px-3 py-[6px] mb-3"
                  style={{ background: '#f3f4f6', border: '1px solid #e5e7eb' }}
                >
                  <i className="ph ph-magnifying-glass text-[13px]" style={{ color: '#9ca3af' }} />
                  <span className="text-[12px]" style={{ color: '#9ca3af' }}>Search</span>
                </div>
                {/* Filter pills */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  {['Connections', 'Current company', 'All filters'].map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-medium px-2 py-[3px] rounded-full"
                      style={{ background: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb' }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                {/* People list */}
                {[
                  { name: 'Director of Operations', company: 'Marketing Industry' },
                  { name: 'Head of Marketing', company: 'SaaS Company' },
                  { name: 'VP of Sales', company: 'Enterprise Solutions' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between mb-[10px]">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #8b46ff, #6c5dd3)' }}
                      >
                        <i className="ph-fill ph-user text-white text-[13px]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold leading-tight" style={{ color: '#171927' }}>{p.name}</p>
                        <p className="text-[10px] leading-tight" style={{ color: '#9ca3af' }}>{p.company}</p>
                      </div>
                    </div>
                    <button
                      className="text-[10px] font-semibold px-2 py-[3px] rounded-full"
                      style={{ border: '1px solid #8b46ff', color: '#8b46ff', background: 'transparent' }}
                    >
                      Connect
                    </button>
                  </div>
                ))}
              </div>

              {/* LinkedIn logo cube at bottom-left */}
              <div
                className="absolute bottom-[16px] left-[20px] w-[64px] h-[64px] rounded-[14px] flex items-center justify-center"
                style={{
                  background: '#0A66C2',
                  boxShadow: '0 8px 24px rgba(10,102,194,0.4)',
                }}
              >
                <i className="ph-fill ph-linkedin-logo text-white text-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 – WHY LINKEDIN WORKS
      ════════════════════════════════════════ */}
      <section className="w-full bg-white py-[72px]" style={{ borderTop: '1px solid #f0f0f5' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[34px] mb-3" style={{ color: '#171927' }}>
              Why LinkedIn Works for B2B Growth
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* 5 benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[18px] transition-all duration-300 cursor-default"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8e9ef',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  padding: '36px 24px 30px',
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
                {/* Icon */}
                <div
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center mb-5"
                  style={{ background: '#ede8ff', border: '1px solid #d4b8ff' }}
                >
                  <i className={`ph ${b.icon} text-[28px]`} style={{ color: '#8b46ff' }} />
                </div>
                {/* Title */}
                <h3
                  className="font-bold text-[17px] leading-[1.3] mb-3"
                  style={{ color: '#171927', whiteSpace: 'pre-line' }}
                >
                  {b.title}
                </h3>
                {/* Desc */}
                <p className="text-[14px] leading-[1.7]" style={{ color: '#5f6577' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 – PROCESS
      ════════════════════════════════════════ */}
      <section className="w-full py-[72px]" style={{ background: '#f8f8fb' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="font-montserrat font-extrabold text-[34px] mb-3" style={{ color: '#171927' }}>
              Our LinkedIn Lead Generation Process
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* 6 steps — desktop: one row with dotted arrows between */}
          <div className="hidden xl:flex items-start justify-between gap-0">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                {/* Step card */}
                <div className="flex flex-col items-center text-center" style={{ width: 'calc((100% - 5 * 40px) / 6)' }}>
                  {/* Icon circle */}
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #c4a0ff',
                      boxShadow: '0 2px 12px rgba(139,70,255,0.12)',
                    }}
                  >
                    <i className={`ph ${s.icon} text-[26px]`} style={{ color: '#8b46ff' }} />
                  </div>
                  {/* Step label */}
                  <span className="font-semibold text-[12px] uppercase tracking-wider mb-1" style={{ color: '#8b46ff' }}>
                    {s.step}
                  </span>
                  {/* Step title */}
                  <h3 className="font-bold text-[15px] leading-[1.3] mb-2" style={{ color: '#171927' }}>
                    {s.title}
                  </h3>
                  {/* Body */}
                  <p className="text-[13px] leading-[1.65]" style={{ color: '#5f6577' }}>
                    {s.desc}
                  </p>
                </div>

                {/* Dotted arrow connector (except after last) */}
                {i < steps.length - 1 && (
                  <div className="flex items-center flex-shrink-0 mt-[28px]" style={{ width: '40px' }}>
                    <div
                      className="flex-1"
                      style={{
                        borderTop: '2px dashed #c4a0ff',
                        height: '2px',
                      }}
                    />
                    <i className="ph-bold ph-caret-right text-[12px] flex-shrink-0" style={{ color: '#8b46ff', marginLeft: '-2px' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/tablet: 2-col grid */}
          <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[16px] p-6"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8e9ef',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-3"
                  style={{ background: '#ede8ff', border: '1.5px solid #c4a0ff' }}
                >
                  <i className={`ph ${s.icon} text-[24px]`} style={{ color: '#8b46ff' }} />
                </div>
                <span className="font-semibold text-[11px] uppercase tracking-wider mb-1" style={{ color: '#8b46ff' }}>
                  {s.step}
                </span>
                <h3 className="font-bold text-[15px] leading-[1.3] mb-2" style={{ color: '#171927' }}>
                  {s.title}
                </h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5f6577' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 – BOTTOM CTA BANNER
      ════════════════════════════════════════ */}
      <section className="w-full py-[56px] px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
        <div
          className="w-full rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(110deg, #1b0f5e 0%, #2c1683 50%, #1f1464 100%)',
            boxShadow: '0 20px 60px rgba(27,15,94,0.35)',
          }}
        >
          {/* Subtle world-map dot pattern overlay on the right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
              opacity: 0.6,
            }}
          />

          {/* Inner content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10 p-10 lg:p-14">

            {/* LEFT – Title + bullets */}
            <div className="lg:w-[30%] flex-shrink-0">
              <h2 className="font-montserrat font-extrabold text-[28px] sm:text-[32px] leading-[1.2] text-white mb-6">
                Ready to Grow Your Pipeline<br />with LinkedIn?
              </h2>
              <ul className="space-y-3">
                {[
                  'More Qualified Meetings.',
                  'More Sales Opportunities.',
                  'More Pipeline.',
                  'More Revenue Growth.',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    >
                      <i className="ph-bold ph-check text-white text-[10px]" />
                    </div>
                    <span className="text-[14px] font-medium" style={{ color: '#d4c8ff' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER – Metric icons */}
            <div className="flex-1 flex flex-wrap justify-center gap-8 lg:gap-6">
              {metrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3" style={{ minWidth: '100px' }}>
                  <div
                    className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.22)' }}
                  >
                    <i className={`ph ${m.icon} text-[24px] text-white`} />
                  </div>
                  <p
                    className="text-[12px] font-medium leading-[1.4] text-center"
                    style={{ color: '#c4b4ff', whiteSpace: 'pre-line' }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT – Paragraph + CTA */}
            <div className="lg:w-[28%] flex-shrink-0 flex flex-col gap-5">
              <p className="text-[15px] leading-[1.75]" style={{ color: '#c4c8ff' }}>
                Let our LinkedIn experts build relationships,
                start conversations, and book more meetings
                for your sales team.
              </p>
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                className="flex items-center gap-2 font-semibold text-[15px] px-8 py-[15px] rounded-full transition-all hover:-translate-y-[2px]"
                style={{
                  background: '#ffffff',
                  color: '#8b46ff',
                  border: '2px solid #8b46ff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                Book Your Free Consultation
                <i className="ph ph-arrow-right text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LinkedInLeadGeneration;

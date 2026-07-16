import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

/* ─── Data ─────────────────────────────────────────────── */

const benefits = [
  {
    icon: 'ph-user-circle',
    title: 'Highly Personalized\nEmails',
    desc: 'Each email is crafted after deep research on your prospects, their business, and pain points.',
  },
  {
    icon: 'ph-envelope-simple',
    title: 'Deliverability\nFirst Approach',
    desc: 'We ensure high inbox placement with domain warm-up, authentication, and deliverability best practices.',
  },
  {
    icon: 'ph-pencil-line',
    title: 'Compelling Copy\nThat Converts',
    desc: 'Our expert copywriters create short, clear, and persuasive emails that get replies.',
  },
  {
    icon: 'ph-graph',
    title: 'Multi-Step\nFollow-ups',
    desc: 'We execute proven follow-up sequences across email to increase responses and meetings.',
  },
  {
    icon: 'ph-chart-bar',
    title: 'A/B Testing &\nOptimization',
    desc: 'Continuous testing and optimization improve open rates, reply rates, and meeting conversions.',
  },
  {
    icon: 'ph-file-text',
    title: 'Transparent\nReporting',
    desc: 'Track performance in real-time with clear reports and actionable insights.',
  },
];

const steps = [
  {
    icon: 'ph-magnifying-glass',
    step: 'Step 1',
    title: 'Research & Targeting',
    desc: 'We research your ICP and build a targeted list of decision-makers.',
  },
  {
    icon: 'ph-envelope-simple',
    step: 'Step 2',
    title: 'Email Strategy\n& Copywriting',
    desc: 'We create a customized email strategy and high-converting email copy.',
  },
  {
    icon: 'ph-paper-plane-tilt',
    step: 'Step 3',
    title: 'Domain Setup\n& Warm-up',
    desc: 'We set up and warm up domains to maximize deliverability.',
  },
  {
    icon: 'ph-play-circle',
    step: 'Step 4',
    title: 'Launch Campaign',
    desc: 'We launch your campaign with personalized emails and tracking.',
  },
  {
    icon: 'ph-chat-circle-dots',
    step: 'Step 5',
    title: 'Follow-up\n& Engagement',
    desc: 'We send multi-step follow-ups to engage prospects and generate replies.',
  },
  {
    icon: 'ph-calendar-check',
    step: 'Step 6',
    title: 'Book Qualified\nMeetings',
    desc: 'We qualify interested prospects and book meetings for your team.',
  },
];

const ctaMetrics = [
  { icon: 'ph-users-three', label: 'More\nConversations' },
  { icon: 'ph-chart-line-up', label: 'Stronger Pipeline' },
  { icon: 'ph-target', label: 'Better Results' },
];

/* ─── Component ─────────────────────────────────────────── */

const ColdEmailOutreach: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="font-inter antialiased overflow-x-hidden" style={{ background: '#f8f8fb', color: '#171927' }}>

      {/* ════════════════════════════════════════
          SECTION 1 – BREADCRUMB + HERO
      ════════════════════════════════════════ */}
      <section className="w-full bg-white pt-[100px] pb-[48px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] mb-8" style={{ color: '#5f6577' }}>
            <button
              onClick={() => setCurrentPage && setCurrentPage('home')}
              className="hover:text-primaryPurple transition-colors cursor-pointer bg-transparent border-none p-0"
              style={{ color: '#5f6577' }}
            >Home</button>
            <i className="ph ph-caret-right text-[11px]" />
            <button
              onClick={() => setCurrentPage && setCurrentPage('services')}
              className="hover:text-primaryPurple transition-colors cursor-pointer bg-transparent border-none p-0"
              style={{ color: '#5f6577' }}
            >Services</button>
            <i className="ph ph-caret-right text-[11px]" />
            <span className="font-semibold" style={{ color: '#8b46ff' }}>Cold Email Outreach</span>
          </nav>

          {/* Hero split */}
          <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-12">

            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full w-max mb-7"
                style={{ border: '1.5px solid #c4a0ff', background: '#f5f0ff' }}
              >
                <i className="ph ph-envelope-simple text-[14px]" style={{ color: '#8b46ff' }} />
                <span className="font-semibold text-[12px] tracking-wide uppercase" style={{ color: '#8b46ff' }}>
                  Cold Email Outreach
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-montserrat font-extrabold leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 58px)', color: '#171927' }}
              >
                Personalized Cold Emails.<br />
                <span style={{ color: '#8b46ff' }}>Real Conversations.<br />
                More Opportunities.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[16px] leading-[1.75] mb-8 max-w-[480px]" style={{ color: '#5f6577' }}>
                We craft personalized cold email campaigns that reach the right decision-makers,
                spark interest, and convert prospects into qualified meetings for your sales team.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#8b46ff', boxShadow: '0 4px 20px rgba(139,70,255,0.35)', border: 'none' }}
                >
                  Book Your Free Consultation <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-[#f5f0ff]"
                  style={{ border: '1.5px solid #8b46ff', color: '#8b46ff', background: '#ffffff' }}
                >
                  Explore All Services <i className="ph ph-arrow-right text-[16px]" />
                </button>
              </div>
            </div>

            {/* RIGHT – laptop + mailbox visual */}
            <div className="xl:flex-shrink-0 xl:w-[48%] w-full relative flex items-end justify-center"
              style={{ minHeight: '320px' }}>

              {/* Soft background blob */}
              <div
                className="absolute inset-0 rounded-[24px]"
                style={{ background: 'linear-gradient(135deg, #f0ecff 0%, #e8f4ff 60%, #f5f5fb 100%)' }}
              />

              {/* Laptop mockup */}
              <div className="relative z-10 w-[58%]" style={{ marginBottom: '-8px' }}>
                <div
                  className="w-full rounded-[12px] overflow-hidden"
                  style={{
                    background: '#1a1a2e',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                    border: '2px solid #2a2a4a',
                  }}
                >
                  {/* Screen chrome */}
                  <div className="flex items-center gap-2 px-4 py-2" style={{ background: '#111125' }}>
                    <div className="w-[8px] h-[8px] rounded-full bg-red-400" />
                    <div className="w-[8px] h-[8px] rounded-full bg-yellow-400" />
                    <div className="w-[8px] h-[8px] rounded-full bg-green-400" />
                  </div>
                  {/* Email client UI mock */}
                  <div className="p-3" style={{ background: '#ffffff' }}>
                    <div className="flex gap-2 mb-2">
                      <div className="w-[30%] flex flex-col gap-1">
                        {['Inbox', 'Sent', 'Drafts', 'Starred'].map((item, i) => (
                          <div key={i} className={`text-[9px] px-2 py-1 rounded ${i === 0 ? 'font-bold text-[#8b46ff] bg-purple-50' : 'text-gray-500'}`}>{item}</div>
                        ))}
                      </div>
                      <div className="flex-1 flex flex-col gap-[5px]">
                        {[
                          { from: 'John D. – VP Sales', subject: 'Re: Growth opportunity', time: '2m', unread: true },
                          { from: 'Sarah K. – CMO', subject: 'Interested in a call', time: '15m', unread: true },
                          { from: 'Mark T. – CEO', subject: 'Let\'s connect', time: '1h', unread: false },
                          { from: 'Emily R. – COO', subject: 'Following up on your email', time: '3h', unread: false },
                        ].map((mail, i) => (
                          <div key={i} className={`flex items-start justify-between px-2 py-[5px] rounded ${mail.unread ? 'bg-purple-50' : ''}`}>
                            <div className="flex-1 min-w-0">
                              <p className={`text-[8px] truncate ${mail.unread ? 'font-bold text-gray-800' : 'text-gray-600'}`}>{mail.from}</p>
                              <p className="text-[7px] truncate text-gray-400">{mail.subject}</p>
                            </div>
                            <span className="text-[7px] text-gray-400 ml-1 flex-shrink-0">{mail.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Laptop bottom bar */}
                  <div className="h-[8px]" style={{ background: '#2a2a4a' }} />
                </div>
                {/* Laptop base */}
                <div className="w-[110%] mx-auto h-[6px] rounded-b-lg" style={{ background: '#d1d5db', marginLeft: '-5%' }} />
              </div>

              {/* Mailbox icon */}
              <div
                className="absolute right-[4%] bottom-0 z-20 rounded-full flex items-center justify-center"
                style={{
                  width: '90px', height: '90px',
                  background: 'linear-gradient(135deg, #8b46ff, #6c5dd3)',
                  boxShadow: '0 8px 32px rgba(139,70,255,0.4)',
                }}
              >
                <i className="ph-fill ph-envelope text-white text-[40px]" />
              </div>

              {/* Small plant decoration */}
              <div className="absolute right-[1%] top-[10%] text-[40px]">🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 – STATS ROW
      ════════════════════════════════════════ */}
      <section className="w-full bg-white pb-[56px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div
            className="w-full rounded-[20px] flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x"
            style={{
              border: '1.5px solid #e8e9ef',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              background: '#ffffff',
            }}
          >
            {/* Stat 1 */}
            <div className="flex-1 flex items-center gap-4 px-8 py-7">
              <div
                className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{ background: '#ede8ff', border: '1.5px solid #d4b8ff' }}
              >
                <i className="ph ph-calendar-dots text-[24px]" style={{ color: '#8b46ff' }} />
              </div>
              <div>
                <p className="text-[12px] leading-snug mb-1" style={{ color: '#5f6577' }}>
                  Every Project<br />Monthly we book
                </p>
                <p className="font-extrabold text-[32px] leading-none" style={{ color: '#171927' }}>10 to 25</p>
                <p className="text-[14px] font-semibold" style={{ color: '#5f6577' }}>Qualified Leads</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ width: '1px', background: '#e8e9ef' }} />

            {/* Stat 2 */}
            <div className="flex-1 flex items-center justify-center gap-4 px-8 py-7">
              <div
                className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{ background: '#ede8ff', border: '1.5px solid #d4b8ff' }}
              >
                <i className="ph ph-users-three text-[24px]" style={{ color: '#8b46ff' }} />
              </div>
              <div className="text-center">
                <p className="font-extrabold text-[40px] leading-none mb-1" style={{ color: '#171927' }}>5X</p>
                <p className="text-[14px] font-semibold leading-snug" style={{ color: '#5f6577' }}>
                  Pipeline Growth<br />On Average
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ width: '1px', background: '#e8e9ef' }} />

            {/* Stat 3 */}
            <div className="flex-1 flex items-center justify-center gap-4 px-8 py-7">
              <div
                className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{ background: '#ede8ff', border: '1.5px solid #d4b8ff' }}
              >
                <i className="ph ph-target text-[24px]" style={{ color: '#8b46ff' }} />
              </div>
              <div className="text-center">
                <p className="font-extrabold text-[40px] leading-none mb-1" style={{ color: '#171927' }}>6X</p>
                <p className="text-[14px] font-semibold leading-snug" style={{ color: '#5f6577' }}>
                  ROI<br />From Our Campaigns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 – WHY IT DELIVERS RESULTS
      ════════════════════════════════════════ */}
      <section className="w-full py-[64px]" style={{ background: '#f8f8fb', borderTop: '1px solid #f0f0f5' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[30px] mb-3" style={{ color: '#171927' }}>
              Why Our Cold Email Outreach Delivers Results
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-[16px] transition-all duration-300 cursor-default"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8e9ef',
                  boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
                  padding: '28px 18px 24px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 28px rgba(139,70,255,0.13)';
                  el.style.borderColor = '#c4a0ff';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)';
                  el.style.borderColor = '#e8e9ef';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-4"
                  style={{ background: '#ede8ff', border: '1.5px solid #d4b8ff' }}
                >
                  <i className={`ph ${b.icon} text-[24px]`} style={{ color: '#8b46ff' }} />
                </div>
                <h3
                  className="font-bold text-[14px] leading-[1.35] mb-2"
                  style={{ color: '#171927', whiteSpace: 'pre-line' }}
                >
                  {b.title}
                </h3>
                <p className="text-[12px] leading-[1.65]" style={{ color: '#5f6577' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 – PROCESS
      ════════════════════════════════════════ */}
      <section className="w-full bg-white py-[64px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          <div className="text-center mb-14">
            <h2 className="font-montserrat font-extrabold text-[30px] mb-3" style={{ color: '#171927' }}>
              Our Cold Email Outreach Process
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* Desktop: one row */}
          <div className="hidden xl:flex items-start justify-between">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center" style={{ width: 'calc((100% - 5 * 36px) / 6)' }}>
                  <div
                    className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-3 flex-shrink-0"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #c4a0ff',
                      boxShadow: '0 2px 12px rgba(139,70,255,0.10)',
                    }}
                  >
                    <i className={`ph ${s.icon} text-[22px]`} style={{ color: '#8b46ff' }} />
                  </div>
                  <span className="font-semibold text-[11px] uppercase tracking-wider mb-[4px]" style={{ color: '#8b46ff' }}>
                    {s.step}
                  </span>
                  <h3
                    className="font-bold text-[13px] leading-[1.35] mb-2"
                    style={{ color: '#171927', whiteSpace: 'pre-line' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6]" style={{ color: '#5f6577' }}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center flex-shrink-0 mt-[26px]" style={{ width: '36px' }}>
                    <div className="flex-1" style={{ borderTop: '2px dashed #c4a0ff' }} />
                    <i className="ph-bold ph-caret-right text-[10px] flex-shrink-0" style={{ color: '#8b46ff', marginLeft: '-1px' }} />
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
                style={{ background: '#f8f8fb', border: '1.5px solid #e8e9ef', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
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
                <h3 className="font-bold text-[14px] leading-[1.3] mb-2" style={{ color: '#171927', whiteSpace: 'pre-line' }}>
                  {s.title}
                </h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5f6577' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 – BOTTOM CTA BANNER
      ════════════════════════════════════════ */}
      <section className="w-full py-[48px] px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
        <div
          className="w-full rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(110deg, #1b0f5e 0%, #2c1683 55%, #1f1464 100%)',
            boxShadow: '0 20px 60px rgba(27,15,94,0.35)',
          }}
        >
          {/* Dot texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
              opacity: 0.6,
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-10 lg:px-14 py-10">
            {/* Left: title + paragraph */}
            <div className="flex flex-col gap-2 lg:max-w-[38%]">
              <h2 className="font-montserrat font-extrabold text-[26px] sm:text-[30px] text-white leading-[1.2]">
                Ready to Start Getting Replies<br />and Booking More Meetings?
              </h2>
              <p className="text-[14px] leading-[1.7]" style={{ color: '#c4b4ff' }}>
                Let's create a cold email strategy that delivers real conversations and real opportunities.
              </p>
            </div>

            {/* Center: metric icons */}
            <div className="flex gap-8 lg:gap-10">
              {ctaMetrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.22)' }}
                  >
                    <i className={`ph ${m.icon} text-[22px] text-white`} />
                  </div>
                  <p
                    className="text-[12px] font-semibold leading-[1.4] text-center"
                    style={{ color: '#c4b4ff', whiteSpace: 'pre-line' }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: CTA button */}
            <div className="flex-shrink-0">
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                className="flex items-center gap-2 font-semibold text-[15px] px-8 py-[15px] rounded-full transition-all hover:-translate-y-[2px]"
                style={{
                  background: '#ffffff',
                  color: '#8b46ff',
                  border: '2px solid #8b46ff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
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

export default ColdEmailOutreach;

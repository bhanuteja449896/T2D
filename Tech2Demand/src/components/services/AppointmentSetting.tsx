import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

/* ─── Data ─────────────────────────────────────────────── */

const benefits = [
  {
    icon: 'ph-target',
    title: 'Expert Outreach',
    desc: 'Our SDRs engage prospects with personalized, value-driven conversations.',
  },
  {
    icon: 'ph-shield-check',
    title: 'Qualified Appointments',
    desc: 'We book meetings only with high-intent prospects that match your ICP.',
  },
  {
    icon: 'ph-funnel',
    title: 'Optimized Process',
    desc: 'Proven scripts, call strategies, and CRM integration for maximum efficiency.',
  },
  {
    icon: 'ph-user-check',
    title: 'Sales-Ready Meetings',
    desc: 'Every meeting is confirmed, qualified, and prepared for your sales team.',
  },
  {
    icon: 'ph-chart-bar',
    title: 'Measure & Scale',
    desc: 'Real-time reporting and analytics to track performance and scale results.',
  },
];

const steps = [
  {
    icon: 'ph-list-bullets',
    step: 'Step 1',
    title: 'Build Ideal Prospect List',
    desc: 'We identify and build a custom list of your ideal prospects.',
  },
  {
    icon: 'ph-phone',
    step: 'Step 2',
    title: 'Outreach & Engagement',
    desc: 'Our team connects via phone, email, and LinkedIn to start meaningful conversations.',
  },
  {
    icon: 'ph-check-circle',
    step: 'Step 3',
    title: 'Qualify & Confirm',
    desc: 'We qualify prospects and confirm interest, availability, and meeting fit.',
  },
  {
    icon: 'ph-calendar',
    step: 'Step 4',
    title: 'Book the Meeting',
    desc: 'We schedule the meeting on your calendar with all relevant details.',
  },
  {
    icon: 'ph-bell-ringing',
    step: 'Step 5',
    title: 'Reminders & Follow-ups',
    desc: 'We send reminders and follow ups to ensure maximum show rate.',
  },
  {
    icon: 'ph-chart-line-up',
    step: 'Step 6',
    title: 'Handoff & Reporting',
    desc: 'Meetings are handed over to your team with detailed reports and insights.',
  },
];

const stats = [
  {
    icon: 'ph-calendar-check',
    title: 'Meetings Booked',
    desc: 'We book high-quality meetings with decision-makers.',
  },
  {
    icon: 'ph-users-three',
    title: 'New Customers',
    desc: 'We help you connect with prospects who convert.',
  },
  {
    icon: 'ph-chart-bar',
    title: 'Pipeline Growth',
    desc: 'We drive more qualified opportunities into your pipeline.',
  },
  {
    icon: 'ph-target',
    title: 'ROI',
    desc: 'Our strategies deliver measurable results.',
  },
];

/* ─── Component ─────────────────────────────────────────── */

const AppointmentSetting: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="font-inter antialiased overflow-x-hidden" style={{ background: '#f8f8fb', color: '#171927' }}>

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
            <span className="font-semibold" style={{ color: '#8b46ff' }}>Appointment Setting</span>
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
                <i className="ph ph-calendar-check text-[14px]" style={{ color: '#8b46ff' }} />
                <span className="font-semibold text-[12px] tracking-wide uppercase" style={{ color: '#8b46ff' }}>
                  Appointment Setting
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-montserrat font-extrabold leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(36px, 4.5vw, 66px)', color: '#171927' }}
              >
                Book More Meetings.<br />
                <span style={{ color: '#8b46ff' }}>Close More Deals.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[17px] leading-[1.75] mb-8 max-w-[500px]" style={{ color: '#5f6577' }}>
                Tech2Demand Global's appointment setting experts connect with your ideal prospects, qualify their needs,
                and book meetings with your sales team—so you can focus on closing.
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

            {/* RIGHT – image + floating stats panel */}
            <div className="xl:flex-shrink-0 xl:w-[50%] w-full relative">
              <div
                className="relative w-full rounded-[24px] overflow-hidden"
                style={{ minHeight: '380px', background: 'linear-gradient(135deg, #f0ecff 0%, #e8f0ff 60%, #f0f0f5 100%)' }}
              >
                {/* Professional image */}
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                  alt="Appointment setting professional with headset"
                  className="w-full object-cover object-top block"
                  style={{ minHeight: '380px', maxHeight: '460px' }}
                />
                {/* Light gradient over image bottom */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, rgba(240,236,255,0.18) 0%, transparent 50%)' }}
                />
              </div>

              {/* Floating dark stats panel */}
              <div
                className="absolute top-[14px] right-[-10px] xl:right-[-24px] rounded-[20px] p-5 flex flex-col gap-0"
                style={{
                  background: 'linear-gradient(160deg, #20105f 0%, #2a1770 100%)',
                  boxShadow: '0 16px 48px rgba(32,16,95,0.45)',
                  width: '210px',
                }}
              >
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3 py-4">
                      <div
                        className="w-[36px] h-[36px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]"
                        style={{ background: 'rgba(139,70,255,0.25)', border: '1px solid rgba(154,76,255,0.4)' }}
                      >
                        <i className={`ph ${s.icon} text-[16px]`} style={{ color: '#c4a0ff' }} />
                      </div>
                      <div>
                        <p className="font-bold text-[14px] text-white leading-tight mb-[3px]">{s.title}</p>
                        <p className="text-[12px] leading-[1.5]" style={{ color: '#a89fd4' }}>{s.desc}</p>
                      </div>
                    </div>
                    {i < stats.length - 1 && (
                      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 – WHY BUSINESSES CHOOSE FUNNL
      ════════════════════════════════════════ */}
      <section className="w-full bg-white py-[72px]" style={{ borderTop: '1px solid #f0f0f5' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Why Businesses Choose Tech2Demand Global for Appointment Setting
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
                  padding: '36px 22px 30px',
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
                <h3 className="font-bold text-[17px] leading-[1.3] mb-3" style={{ color: '#171927' }}>
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: '#5f6577' }}>{b.desc}</p>
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
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Our Appointment Setting Process
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* 6 steps – desktop: one row */}
          <div className="hidden xl:flex items-start justify-between">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center" style={{ width: 'calc((100% - 5 * 36px) / 6)' }}>
                  {/* Icon */}
                  <div
                    className="w-[58px] h-[58px] rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #c4a0ff',
                      boxShadow: '0 2px 12px rgba(139,70,255,0.10)',
                    }}
                  >
                    <i className={`ph ${s.icon} text-[24px]`} style={{ color: '#8b46ff' }} />
                  </div>
                  <span className="font-semibold text-[11px] uppercase tracking-wider mb-[5px]" style={{ color: '#8b46ff' }}>
                    {s.step}
                  </span>
                  <h3 className="font-bold text-[14px] leading-[1.35] mb-2" style={{ color: '#171927' }}>
                    {s.title}
                  </h3>
                  <p className="text-[12px] leading-[1.65]" style={{ color: '#5f6577' }}>{s.desc}</p>
                </div>

                {/* Dotted connector */}
                {i < steps.length - 1 && (
                  <div className="flex items-center flex-shrink-0 mt-[27px]" style={{ width: '36px' }}>
                    <div className="flex-1" style={{ borderTop: '2px dashed #c4a0ff' }} />
                    <i className="ph-bold ph-caret-right text-[11px] flex-shrink-0" style={{ color: '#8b46ff', marginLeft: '-1px' }} />
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
                <h3 className="font-bold text-[14px] leading-[1.3] mb-2" style={{ color: '#171927' }}>{s.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5f6577' }}>{s.desc}</p>
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
            background: 'linear-gradient(110deg, #2a0f79 0%, #32138a 50%, #3b1597 100%)',
            boxShadow: '0 20px 60px rgba(42,15,121,0.35)',
          }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              opacity: 0.55,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-10 lg:px-16 py-12">
            {/* Left */}
            <div className="flex flex-col gap-3">
              <h2 className="font-montserrat font-extrabold text-[28px] sm:text-[34px] text-white leading-[1.2]">
                Ready to Book More Meetings?
              </h2>
              <p className="text-[15px] leading-[1.75]" style={{ color: '#c4b4ff' }}>
                Let's fill your pipeline with qualified appointments<br />
                so your sales team can focus on closing.
              </p>
            </div>

            {/* Right – CTA */}
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

export default AppointmentSetting;

import React, { useState } from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const cards = [
  {
    accent: '#9a4dff',
    icon: 'ph-users-three',
    title: 'Qualified Meeting\nGeneration',
    desc: 'We connect you with decision-makers who are ready to talk and explore solutions.',
  },
  {
    accent: '#20d7d2',
    icon: 'ph-funnel',
    title: 'Demand\nGeneration',
    desc: 'Multi-channel campaigns that build awareness, generate interest, and create a consistent flow of opportunities.',
  },
  {
    accent: '#ff4ba5',
    icon: 'ph-video',
    title: 'Video Content\nCreation',
    desc: 'High-impact videos that educate, engage, and position your brand as the clear choice.',
  },
  {
    accent: '#ff9a1f',
    icon: 'ph-chart-line-up',
    title: 'Revenue Growth\nConsulting',
    desc: 'Strategy, optimization, and insights to improve performance and accelerate revenue growth.',
  },
];

const GrowthSolutions: React.FC<Props> = ({ setCurrentPage }) => {
  const [ctaClosed, setCtaClosed] = useState(false);

  return (
    <div
      className="font-inter antialiased overflow-x-hidden min-h-screen"
      style={{ background: 'linear-gradient(160deg, #08090f 0%, #0d0b1c 45%, #080914 100%)' }}
    >
      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="w-full relative pt-[110px] pb-[72px]">

        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left glow */}
          <div
            className="absolute rounded-full blur-[120px] opacity-20"
            style={{ width: '520px', height: '520px', background: '#8b46ff', top: '-80px', left: '-160px' }}
          />
          {/* Right glow */}
          <div
            className="absolute rounded-full blur-[140px] opacity-15"
            style={{ width: '600px', height: '600px', background: '#6040ee', top: '40px', right: '-100px' }}
          />
          {/* Arc lines SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 500 Q400 200 900 350 Q1200 450 1600 200" stroke="rgba(139,70,255,0.18)" strokeWidth="1.5" fill="none" />
            <path d="M-100 600 Q350 350 850 480 Q1150 560 1600 320" stroke="rgba(100,60,200,0.12)" strokeWidth="1" fill="none" />
            <path d="M800 -50 Q1100 200 1200 450 Q1300 620 1500 700" stroke="rgba(139,70,255,0.14)" strokeWidth="1.5" fill="none" />
          </svg>
          {/* Particles */}
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? '3px' : '2px',
                height: i % 3 === 0 ? '3px' : '2px',
                background: i % 4 === 0 ? '#9a4dff' : i % 3 === 0 ? '#20d7d2' : 'rgba(255,255,255,0.5)',
                top: `${10 + (i * 31) % 80}%`,
                left: `${5 + (i * 17) % 90}%`,
                opacity: 0.6 + (i % 3) * 0.15,
              }}
            />
          ))}
        </div>

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10">
          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16">

            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full w-max mb-8"
                style={{
                  border: '1px solid rgba(154,77,255,0.5)',
                  background: 'rgba(139,70,255,0.12)',
                }}
              >
                <div className="w-[6px] h-[6px] rounded-full bg-[#9a4dff]" />
                <span className="font-semibold text-[12px] tracking-widest uppercase" style={{ color: '#c4a0ff' }}>
                  Growth Solutions That Drive Results
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-montserrat font-extrabold leading-[1.05] mb-6 text-white"
                style={{ fontSize: 'clamp(42px, 5.5vw, 88px)' }}
              >
                More Qualified<br />
                Meetings.<br />
                <span style={{
                  background: 'linear-gradient(95deg, #9a4dff 0%, #c77dff 60%, #a06dff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  More Pipeline.<br />
                  More Revenue.
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-[17px] leading-[1.8] mb-8 max-w-[500px]" style={{ color: '#cfd2df' }}>
                We help B2B companies attract the right prospects,
                engage decision-makers, and build predictable
                pipelines that drive sustainable growth.
              </p>

              {/* Value row */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { icon: 'ph-crosshair', text: 'Target the Right Buyers' },
                  { icon: 'ph-calendar-check', text: 'Book More\nQualified Meetings' },
                  { icon: 'ph-chart-line-up', text: 'Create Predictable\nPipeline Growth' },
                ].map((v, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className="w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]"
                      style={{ background: 'rgba(139,70,255,0.2)', border: '1px solid rgba(154,77,255,0.35)' }}
                    >
                      <i className={`ph ${v.icon} text-[13px]`} style={{ color: '#c4a0ff' }} />
                    </div>
                    <span
                      className="text-[14px] font-medium leading-[1.4]"
                      style={{ color: '#cfd2df', whiteSpace: 'pre-line' }}
                    >
                      {v.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                  className="w-full sm:w-max flex items-center justify-center gap-2 font-semibold text-[15px] text-white px-8 py-[15px] rounded-full transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(95deg, #8b46ff, #a06dff)',
                    boxShadow: '0 4px 24px rgba(139,70,255,0.45)',
                    border: 'none',
                  }}
                >
                  Book Your Free Growth Consultation
                  <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-white/10"
                  style={{
                    border: '1px solid rgba(139,70,255,0.5)',
                    color: '#c4a0ff',
                    background: 'rgba(139,70,255,0.08)',
                  }}
                  onClick={() => setCurrentPage && setCurrentPage('services')}
                >
                  View All Services
                </button>
              </div>
            </div>

            {/* RIGHT – cinematic dashboard visual */}
            <div className="xl:flex-shrink-0 xl:w-[46%] w-full relative" style={{ minHeight: '420px' }}>

              {/* Dark cinematic panel */}
              <div
                className="w-full rounded-[24px] overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #0f0c22 0%, #14102e 60%, #0a0818 100%)',
                  border: '1px solid rgba(139,70,255,0.25)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(139,70,255,0.05)',
                  minHeight: '400px',
                }}
              >
                {/* Purple arc glows inside panel */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
                  <path d="M-50 300 Q200 100 400 200 Q500 250 650 150" stroke="rgba(139,70,255,0.4)" strokeWidth="1.5" fill="none" />
                  <path d="M-50 380 Q150 220 350 300 Q480 350 650 250" stroke="rgba(100,60,200,0.28)" strokeWidth="1" fill="none" />
                  <path d="M300 -20 Q420 100 480 280 Q520 380 650 400" stroke="rgba(139,70,255,0.22)" strokeWidth="1.2" fill="none" />
                </svg>

                {/* City skyline silhouette */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                  <svg viewBox="0 0 600 120" preserveAspectRatio="none" className="w-full">
                    <rect x="0" y="60" width="30" height="60" fill="rgba(20,12,48,0.9)" />
                    <rect x="25" y="40" width="20" height="80" fill="rgba(20,12,48,0.9)" />
                    <rect x="40" y="50" width="35" height="70" fill="rgba(20,12,48,0.85)" />
                    <rect x="70" y="30" width="25" height="90" fill="rgba(18,10,44,0.9)" />
                    <rect x="90" y="45" width="40" height="75" fill="rgba(20,12,48,0.85)" />
                    <rect x="125" y="55" width="30" height="65" fill="rgba(20,12,48,0.9)" />
                    <rect x="480" y="35" width="30" height="85" fill="rgba(20,12,48,0.85)" />
                    <rect x="505" y="50" width="40" height="70" fill="rgba(20,12,48,0.9)" />
                    <rect x="540" y="40" width="25" height="80" fill="rgba(20,12,48,0.9)" />
                    <rect x="560" y="60" width="40" height="60" fill="rgba(20,12,48,0.85)" />
                  </svg>
                </div>

                {/* Dashboard content */}
                <div className="relative z-10 p-6">
                  {/* Top mini header bar */}
                  <div
                    className="flex items-center justify-between mb-5 px-4 py-2 rounded-[10px]"
                    style={{ background: 'rgba(139,70,255,0.1)', border: '1px solid rgba(139,70,255,0.2)' }}
                  >
                    <span className="text-[12px] font-semibold" style={{ color: '#c4a0ff' }}>Growth Dashboard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-[8px] h-[8px] rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[11px]" style={{ color: '#7a7d92' }}>Live</span>
                    </div>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'Meetings Booked', value: '247', trend: '+32%', color: '#9a4dff' },
                      { label: 'Pipeline Value', value: '$2.4M', trend: '+18%', color: '#20d7d2' },
                      { label: 'ROI', value: '5.2X', trend: '+41%', color: '#ff4ba5' },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="rounded-[12px] p-3"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: `1px solid rgba(${i === 0 ? '154,77,255' : i === 1 ? '32,215,210' : '255,75,165'},0.22)`,
                        }}
                      >
                        <p className="text-[10px] mb-1" style={{ color: '#7a7d92' }}>{m.label}</p>
                        <p className="font-extrabold text-[18px] text-white mb-1">{m.value}</p>
                        <span
                          className="text-[10px] font-semibold px-2 py-[2px] rounded-full"
                          style={{ background: 'rgba(52,199,89,0.15)', color: '#34c759' }}
                        >
                          {m.trend}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bar chart area */}
                  <div
                    className="rounded-[14px] p-4 mb-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,70,255,0.12)' }}
                  >
                    <p className="text-[11px] font-semibold mb-3" style={{ color: '#c4a0ff' }}>Pipeline Growth</p>
                    <div className="flex items-end gap-2 h-[60px]">
                      {[30, 45, 38, 60, 52, 75, 68, 88, 72, 95, 85, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-[3px]"
                          style={{
                            height: `${h}%`,
                            background: i > 8
                              ? 'linear-gradient(to top, #8b46ff, #c077ff)'
                              : 'rgba(139,70,255,0.25)',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity feed */}
                  {[
                    { icon: 'ph-check-circle', text: 'Meeting booked — VP of Sales, TechCorp', time: '2m ago', color: '#34c759' },
                    { icon: 'ph-envelope', text: 'Cold email replied — CMO, GrowthCo', time: '15m ago', color: '#9a4dff' },
                    { icon: 'ph-calendar', text: 'Demo confirmed — Head of Ops, DataFirm', time: '1h ago', color: '#20d7d2' },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-3 py-[7px]"
                      style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <i className={`ph ${a.icon} text-[15px] flex-shrink-0`} style={{ color: a.color }} />
                      <p className="text-[11px] flex-1 truncate" style={{ color: '#cfd2df' }}>{a.text}</p>
                      <span className="text-[10px] flex-shrink-0" style={{ color: '#7a7d92' }}>{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating CTA pill */}
              {!ctaClosed && (
                <div
                  className="absolute top-[14px] right-[-12px] xl:right-[-20px] rounded-[20px] px-5 py-4 flex items-center gap-3"
                  style={{
                    background: 'rgba(14,10,36,0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(154,77,255,0.5)',
                    boxShadow: '0 0 28px rgba(139,70,255,0.25)',
                    maxWidth: '240px',
                  }}
                >
                  <div
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(139,70,255,0.22)', border: '1px solid rgba(154,77,255,0.4)' }}
                  >
                    <i className="ph ph-calendar-check text-[18px]" style={{ color: '#c4a0ff' }} />
                  </div>
                  <p className="text-[13px] font-semibold leading-[1.35] text-white flex-1">
                    Book Your Free<br />Growth Consultation
                  </p>
                  <button
                    onClick={() => setCtaClosed(true)}
                    className="text-[16px] flex-shrink-0 ml-1 hover:opacity-70 transition-opacity bg-transparent border-none p-0"
                    style={{ color: '#7a7d92' }}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SOLUTIONS INTRO + CARDS
      ════════════════════════════════════ */}
      <section className="w-full py-[72px] relative">
        {/* Subtle inner gradient separator */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(139,70,255,0.3) 50%, transparent)' }}
        />

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Centered title with decorative lines */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className="flex-1 h-px max-w-[120px]"
                style={{ background: 'linear-gradient(to right, transparent, rgba(139,70,255,0.5))' }}
              />
              {/* Diamond accent */}
              <div
                className="w-[10px] h-[10px] rotate-45 flex-shrink-0"
                style={{
                  background: '#9a4dff',
                  boxShadow: '0 0 12px rgba(154,77,255,0.7)',
                }}
              />
              <div
                className="flex-1 h-px max-w-[120px]"
                style={{ background: 'linear-gradient(to left, transparent, rgba(139,70,255,0.5))' }}
              />
            </div>
            <h2
              className="font-montserrat font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}
            >
              Solutions Built to Fuel Your Growth
            </h2>
            <p className="text-[16px] leading-[1.7] max-w-[580px] mx-auto" style={{ color: '#cfd2df' }}>
              Expert-led services that help you attract the right prospects, engage decision-makers,
              and build a strong, predictable pipeline.
            </p>
          </div>

          {/* 4 service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
            {cards.map((c, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[20px] transition-all duration-300 cursor-pointer group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(${
                    i === 0 ? '154,77,255,0.25' :
                    i === 1 ? '32,215,210,0.22' :
                    i === 2 ? '255,75,165,0.22' :
                    '255,154,31,0.22'
                  })`,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  padding: '28px 24px 24px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.06)';
                  el.style.transform = 'translateY(-5px)';
                  el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${c.accent}44`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.03)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: `${c.accent}18`,
                    border: `1.5px solid ${c.accent}40`,
                  }}
                >
                  <i className={`ph ${c.icon} text-[24px]`} style={{ color: c.accent }} />
                </div>

                {/* Title */}
                <h3
                  className="font-bold leading-[1.25] mb-3 text-white"
                  style={{ fontSize: '18px', whiteSpace: 'pre-line' }}
                >
                  {c.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.7] flex-grow mb-5" style={{ color: '#a8acbe' }}>
                  {c.desc}
                </p>

                {/* Learn more */}
                <a
                  href="#"
                  className="flex items-center gap-1 font-semibold text-[14px] transition-all group-hover:gap-2"
                  style={{ color: c.accent }}
                  onClick={e => e.preventDefault()}
                >
                  Learn more
                  <i className="ph ph-arrow-right text-[14px]" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none rounded-full blur-[80px]"
          style={{ width: '500px', height: '100px', background: 'rgba(139,70,255,0.1)' }}
        />
      </section>

    </div>
  );
};

export default GrowthSolutions;

import React from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const B2BDataService: React.FC<Props> = ({ setCurrentPage }) => {
  const benefits = [
    { icon: 'ph-envelope-simple', title: 'Reach with Personalized Emails', desc: 'Reach the right prospects with personalized outreach that converts.' },
    { icon: 'ph-gear', title: 'CRM-Ready Data', desc: 'Use directly with automated CRMs for efficient, scalable outreach.' },
    { icon: 'ph-users', title: 'No Headcount Limits', desc: 'Run targeted campaigns without the need for additional headcount.' },
    { icon: 'ph-target', title: 'Clean & Accurate', desc: 'Save time with clean, accurate, and verified ready-to-use data.' },
    { icon: 'ph-chart-line-up', title: 'Better Conversion Rates', desc: 'Improve response rates and drive better conversions across channels.' },
  ];

  const criteria = [
    { icon: 'ph-globe', label: 'Region Wise', color: '#8b46ff' },
    { icon: 'ph-factory', label: 'Industry Wise', color: '#2f7bff' },
    { icon: 'ph-trend-up', label: 'Revenue Wise', color: '#22c55e' },
    { icon: 'ph-tree-structure', label: 'Department & Title Wise', color: '#f97316' },
    { icon: 'ph-users', label: 'Employee Size Wise', color: '#ec4899' },
  ];

  const deliverables = [
    '98% Accurate & Valid Data',
    'Timely Delivery',
    'No Bounce, Invalid or Duplicate Data',
    'Secure & Compliant Data Handling',
    'Customized as Per Your Requirements',
    'Dedicated Support',
  ];

  return (
    <div className="font-inter antialiased overflow-x-hidden bg-white text-[#171927]">

      {/* ════════════════════════ HERO (DARK) ════════════════════════ */}
      <section className="w-full relative pt-[80px] pb-[80px] overflow-hidden" style={{ background: '#05060d' }}>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 75% 40%, rgba(139,70,255,0.14) 0%, transparent 55%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 70%, rgba(47,123,255,0.08) 0%, transparent 50%)' }} />
          <img src="/b2b_database_3d.png" alt="Database"
            className="absolute top-0 right-0 w-[50%] h-full object-contain opacity-20 pointer-events-none"
            style={{ objectPosition: 'center right' }} />
          {/* Purple swoosh */}
          <div className="absolute bottom-0 right-0 w-full h-[400px] pointer-events-none opacity-80 mix-blend-screen">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 400 Q 400 300 1000 100 L 1000 400 Z" fill="rgba(139,70,255,0.07)" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#dg1)" strokeWidth="6" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#dg1)" strokeWidth="2" />
              <defs>
                <linearGradient id="dg1" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4a00e0" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8e2de2" />
                  <stop offset="100%" stopColor="#c77dff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium mb-10">
            <span className="text-[#6b7299] cursor-pointer hover:text-[#9a4dff] transition-colors" onClick={() => setCurrentPage && setCurrentPage('home')}>Home</span>
            <i className="ph ph-caret-right text-[#4a4f6a] text-[12px]"></i>
            <span className="text-[#6b7299] cursor-pointer hover:text-[#9a4dff] transition-colors" onClick={() => setCurrentPage && setCurrentPage('engagement-models')}>Engagement Models</span>
            <i className="ph ph-caret-right text-[#4a4f6a] text-[12px]"></i>
            <span className="font-semibold" style={{ color: '#9a4dff' }}>B2B Data Service – Model</span>
          </div>

          <div className="flex flex-col xl:flex-row items-start gap-12">
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full w-max mb-8"
                style={{ border: '1px solid rgba(139,70,255,0.5)', background: 'rgba(139,70,255,0.1)' }}>
                <i className="ph ph-database text-[14px]" style={{ color: '#c4a0ff' }} />
                <span className="font-semibold text-[11px] tracking-widest uppercase" style={{ color: '#c4a0ff' }}>
                  Engagement Model · B2B Data Service
                </span>
              </div>

              <h1 className="font-montserrat font-extrabold leading-[1.1] mb-6 text-white"
                style={{ fontSize: 'clamp(30px, 4vw, 60px)' }}>
                B2B Data<br />
                <span style={{ color: '#9a4dff' }}>Service – Model</span>
              </h1>

              <p className="text-[17px] leading-[1.75] mb-4 max-w-[520px]" style={{ color: '#cfd2df' }}>
                Accurate data. Better outreach. Stronger results.
              </p>
              <p className="text-[16px] leading-[1.75] mb-8 max-w-[520px]" style={{ color: '#a8abbe' }}>
                If you have prospect requirements, we build and provide a customized B2B database as per your exact criteria — region, industry, revenue, department, and more.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('talk')}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#8b46ff', boxShadow: '0 4px 24px rgba(139,70,255,0.4)', border: 'none' }}>
                  Request Your Data Now <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-white/10 text-white"
                  style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'transparent' }}
                  onClick={() => setCurrentPage && setCurrentPage('engagement-models')}>
                  View All Models <i className="ph ph-arrow-right text-[16px]" />
                </button>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: 'ph-shield-check', text: '98% Accuracy Guaranteed' },
                  { icon: 'ph-database', text: 'Fully Customized Database' },
                  { icon: 'ph-clock', text: 'Timely Delivery' },
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(139,70,255,0.18)', border: '1px solid rgba(154,76,255,0.35)' }}>
                      <i className={`ph ${v.icon} text-[15px]`} style={{ color: '#9a4dff' }} />
                    </div>
                    <span className="text-[14px] font-medium" style={{ color: '#cfd2df' }}>{v.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – Database criteria cards */}
            <div className="xl:flex-shrink-0 xl:w-[42%] w-full flex flex-col gap-5 justify-center pt-6 xl:pt-0">
              <div className="w-full rounded-[20px] overflow-hidden"
                style={{ background: 'rgba(10,12,28,0.75)', backdropFilter: 'blur(18px)', border: '1px solid rgba(139,70,255,0.28)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-white font-bold text-[14px]">We Provide Database As Per Your Requirements</span>
                </div>
                <div className="p-6 grid grid-cols-3 gap-4">
                  {criteria.map((c, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2 rounded-[14px] p-3"
                      style={{ background: `${c.color}14`, border: `1px solid ${c.color}35` }}>
                      <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center"
                        style={{ background: `${c.color}22`, border: `1px solid ${c.color}50` }}>
                        <i className={`ph ${c.icon} text-[22px]`} style={{ color: c.color }} />
                      </div>
                      <span className="text-[12px] font-medium leading-[1.3]" style={{ color: '#e2e8f0' }}>{c.label}</span>
                    </div>
                  ))}
                  {/* Tagline */}
                  <div className="col-span-3 rounded-[10px] py-3 px-4 flex items-center justify-center gap-3 mt-2"
                    style={{ background: 'rgba(139,70,255,0.12)', border: '1px solid rgba(139,70,255,0.3)' }}>
                    <i className="ph ph-check-circle text-[18px]" style={{ color: '#9a4dff' }} />
                    <span className="text-[12px] font-medium" style={{ color: '#cfd2df' }}>98% Accurate & Valid Data — Zero Bounce, Zero Duplicates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ HOW THIS HELPS ════════════════════════ */}
      <section className="w-full bg-white py-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              How This Model Helps You
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <div key={i}
                className="flex flex-col items-center text-center rounded-[18px] transition-all duration-300 cursor-default"
                style={{ background: '#ffffff', border: '1.5px solid #e8e9ef', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', padding: '32px 20px 28px' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 32px rgba(139,70,255,0.14)';
                  el.style.borderColor = '#c4a0ff';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
                  el.style.borderColor = '#e8e9ef';
                  el.style.transform = 'translateY(0)';
                }}>
                <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(139,70,255,0.1) 0%, rgba(139,70,255,0.22) 100%)' }}>
                  <i className={`ph ${b.icon} text-[24px]`} style={{ color: '#8b46ff' }} />
                </div>
                <h3 className="font-bold mb-2 leading-[1.3] text-[#171927]" style={{ fontSize: '16px' }}>{b.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5e6577' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHAT YOU GET ════════════════════════ */}
      <section className="w-full py-[80px]" style={{ background: '#f8f9fc' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>What You Get</h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((item, i) => (
              <div key={i}
                className="flex items-center gap-4 rounded-[16px] p-5 transition-all duration-300"
                style={{ background: '#ffffff', border: '1.5px solid #e8e9ef', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#c4a0ff';
                  el.style.boxShadow = '0 6px 24px rgba(139,70,255,0.12)';
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#e8e9ef';
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                  el.style.transform = 'translateY(0)';
                }}>
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(139,70,255,0.12) 0%, rgba(139,70,255,0.24) 100%)' }}>
                  <i className="ph-bold ph-check text-[18px]" style={{ color: '#8b46ff' }} />
                </div>
                <span className="text-[15px] font-semibold" style={{ color: '#171927' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ BOTTOM CTA ════════════════════════ */}
      <section className="w-full py-[64px] bg-white">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10"
            style={{ background: 'linear-gradient(105deg, #0b0820 0%, #160b38 100%)', border: '1px solid rgba(139,70,255,0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(139,70,255,0.2)', border: '1px solid rgba(139,70,255,0.4)' }}>
                <i className="ph ph-database text-[30px]" style={{ color: '#c4a0ff' }}></i>
              </div>
              <div>
                <h3 className="font-montserrat font-extrabold text-[22px] text-white mb-1">We Build. We Deliver. You Grow.</h3>
                <p className="text-[15px]" style={{ color: '#a8abbe' }}>Tell us your requirements, we'll build the perfect database for you.</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage && setCurrentPage('talk')}
              className="flex-shrink-0 px-8 py-4 text-white rounded-full font-bold text-[15px] flex items-center gap-2 transition-all hover:-translate-y-[2px]"
              style={{ background: '#8b46ff', boxShadow: '0 8px 24px rgba(139,70,255,0.4)', border: 'none' }}>
              Request Your Data Now <i className="ph-bold ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default B2BDataService;

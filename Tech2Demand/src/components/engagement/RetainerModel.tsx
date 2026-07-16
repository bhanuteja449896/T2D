import React, { useEffect } from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const RetainerModel: React.FC<Props> = ({ setCurrentPage }) => {
  const steps = [
    { step: 'Step 1', title: 'Understand & Align', desc: 'We understand your goals, ICP, and campaign needs.', icon: 'ph-target' },
    { step: 'Step 2', title: 'Dedicated Resource Assigned', desc: 'We assign a dedicated resource to your project.', icon: 'ph-clipboard-text' },
    { step: 'Step 3', title: 'Campaign Execution', desc: 'Your resource runs targeted outreach and engagement.', icon: 'ph-megaphone' },
    { step: 'Step 4', title: 'Meetings Generated', desc: '3 qualified meetings generated every month per resource.', icon: 'ph-calendar' },
    { step: 'Step 5', title: 'Bi-Weekly Status Report', desc: 'We send you detailed reports with campaign progress and key metrics.', icon: 'ph-file-text' },
    { step: 'Step 6', title: 'Review & Optimize', desc: 'We review, optimize, and continue driving better results.', icon: 'ph-trend-up' }
  ];

  const benefits = [
    { icon: 'ph-user', title: 'Dedicated Resource', desc: 'A dedicated expert works exclusively on your project and campaigns.' },
    { icon: 'ph-calendar-check', title: '3 Meetings/Month Per Resource', desc: 'Each resource commits to delivering 3 qualified meetings every month.' },
    { icon: 'ph-users-three', title: 'Fully Dedicated Focus', desc: 'Your resource is 100% focused on your goals, campaigns, and success.' },
    { icon: 'ph-chart-bar', title: 'Bi-Weekly Reporting', desc: 'Stay informed with complete visibility into campaign progress and metrics.' },
    { icon: 'ph-scales', title: 'Scale On-Demand', desc: 'Add 1, 2, or 3 resources to scale your meeting generation capacity.' },
  ];

  return (
    <div className="font-inter antialiased overflow-x-hidden bg-white text-[#171927]">

      {/* ════════════════════════ HERO (DARK) ════════════════════════ */}
      <section className="w-full relative pt-[80px] pb-[80px] overflow-hidden" style={{ background: '#05060d' }}>

        <div className="absolute inset-0 z-0">
          <img
            src="/business_meeting.png"
            alt="Business Meeting"
            className="absolute top-0 right-0 w-[80%] xl:w-[60%] h-full object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #05060d 35%, transparent 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #05060d 0%, transparent 30%)' }} />
          {/* Green-tinted swoosh for this model */}
          <div className="absolute bottom-0 right-0 w-full h-[400px] pointer-events-none opacity-70 mix-blend-screen">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 400 Q 400 300 1000 100 L 1000 400 Z" fill="rgba(17,138,69,0.07)" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#gg1)" strokeWidth="6" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#gg1)" strokeWidth="2" />
              <defs>
                <linearGradient id="gg1" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#064e29" stopOpacity="0" />
                  <stop offset="50%" stopColor="#118a45" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium mb-10">
            <span className="text-[#6b7299] cursor-pointer hover:text-[#22c55e] transition-colors" onClick={() => setCurrentPage && setCurrentPage('home')}>Home</span>
            <i className="ph ph-caret-right text-[#4a4f6a] text-[12px]"></i>
            <span className="text-[#6b7299] cursor-pointer hover:text-[#22c55e] transition-colors" onClick={() => setCurrentPage && setCurrentPage('engagement-models')}>Engagement Models</span>
            <i className="ph ph-caret-right text-[#4a4f6a] text-[12px]"></i>
            <span className="font-semibold" style={{ color: '#4ade80' }}>Retainer – Dedicated Resource Model</span>
          </div>

          <div className="flex flex-col xl:flex-row items-start gap-12">
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full w-max mb-8"
                style={{ border: '1px solid rgba(17,138,69,0.5)', background: 'rgba(17,138,69,0.1)' }}>
                <i className="ph ph-users text-[14px]" style={{ color: '#4ade80' }} />
                <span className="font-semibold text-[11px] tracking-widest uppercase" style={{ color: '#4ade80' }}>
                  Engagement Model · Dedicated Resource
                </span>
              </div>

              <h1 className="font-montserrat font-extrabold leading-[1.1] mb-6 text-white"
                style={{ fontSize: 'clamp(30px, 4vw, 60px)' }}>
                Retainer –<br />
                <span style={{ color: '#4ade80' }}>Dedicated Resource</span><br />
                Model (Monthly)
              </h1>

              <p className="text-[17px] leading-[1.75] mb-4 max-w-[520px]" style={{ color: '#cfd2df' }}>
                Dedicated people. Consistent pipeline. Measurable results.
              </p>
              <p className="text-[16px] leading-[1.75] mb-8 max-w-[520px]" style={{ color: '#a8abbe' }}>
                Ideal if you need 1, 2, or 3 dedicated resources every month. One resource generates 3 meetings every month and works exclusively on your assigned project and campaigns.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('talk')}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#118a45', boxShadow: '0 4px 24px rgba(17,138,69,0.4)', border: 'none' }}>
                  Book Your Free Consultation <i className="ph ph-arrow-right text-[16px]" />
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
                  { icon: 'ph-user', text: '1–3 Dedicated Resources' },
                  { icon: 'ph-calendar-check', text: '3 Meetings / Resource / Month' },
                  { icon: 'ph-file-text', text: 'Bi-Weekly Reporting' },
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(17,138,69,0.18)', border: '1px solid rgba(17,138,69,0.4)' }}>
                      <i className={`ph ${v.icon} text-[15px]`} style={{ color: '#4ade80' }} />
                    </div>
                    <span className="text-[14px] font-medium" style={{ color: '#cfd2df' }}>{v.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="xl:flex-shrink-0 xl:w-[40%] w-full flex flex-col gap-5 xl:items-end justify-center pt-6 xl:pt-0 pointer-events-none">
              {/* Bi-Weekly Report Card */}
              <div className="w-full max-w-[360px] rounded-[20px] p-6 relative overflow-hidden"
                style={{ background: 'rgba(10,12,28,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(17,138,69,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(17,138,69,0.2)' }}>
                      <i className="ph ph-envelope-simple text-[18px]" style={{ color: '#4ade80' }} />
                    </div>
                    <span className="text-white font-semibold text-[14px]">Bi-Weekly Report</span>
                  </div>
                </div>
                {[
                  { text: 'Status of Campaigns', color: '#22c55e' },
                  { text: 'Companies Mapped', color: '#22c55e' },
                  { text: 'Contacts Mapped', color: '#22c55e' },
                  { text: 'Cold & Do Not Contacts Count', color: '#60a5fa' },
                  { text: 'Leads & Hots List Count', color: '#f97316' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}22`, border: `1px solid ${item.color}55` }}>
                      <i className="ph-bold ph-check text-[11px]" style={{ color: item.color }} />
                    </div>
                    <span className="text-[13px]" style={{ color: '#cfd2df' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Resource Scale Card */}
              <div className="w-full max-w-[360px] rounded-[20px] p-5"
                style={{ background: 'rgba(10,12,28,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(17,138,69,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(17,138,69,0.2)' }}>
                    <i className="ph ph-users-three text-[18px]" style={{ color: '#4ade80' }} />
                  </div>
                  <span className="text-white font-semibold text-[14px]">Scale Your Resources</span>
                </div>
                <div className="flex gap-3 justify-between">
                  {[
                    { resources: '1 Resource', meetings: '3 Meetings/mo' },
                    { resources: '2 Resources', meetings: '6 Meetings/mo' },
                    { resources: '3 Resources', meetings: '9 Meetings/mo' },
                  ].map((tier, i) => (
                    <div key={i} className="flex-1 text-center rounded-[12px] p-3"
                      style={{ background: i === 2 ? 'rgba(17,138,69,0.25)' : 'rgba(255,255,255,0.05)', border: `1px solid ${i === 2 ? 'rgba(17,138,69,0.5)' : 'rgba(255,255,255,0.08)'}` }}>
                      <div className="text-[11px] font-bold mb-1" style={{ color: '#4ade80' }}>{tier.resources}</div>
                      <div className="text-[10px]" style={{ color: '#a8abbe' }}>{tier.meetings}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHY THIS MODEL ════════════════════════ */}
      <section className="w-full bg-white py-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Why Businesses Choose the Retainer Model
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#118a45' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <div key={i}
                className="flex flex-col items-center text-center rounded-[18px] transition-all duration-300 cursor-default"
                style={{ background: '#ffffff', border: '1.5px solid #e8e9ef', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', padding: '32px 20px 28px' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 32px rgba(17,138,69,0.15)';
                  el.style.borderColor = '#86efac';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
                  el.style.borderColor = '#e8e9ef';
                  el.style.transform = 'translateY(0)';
                }}>
                <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(17,138,69,0.1) 0%, rgba(17,138,69,0.22) 100%)' }}>
                  <i className={`ph ${b.icon} text-[24px]`} style={{ color: '#118a45' }} />
                </div>
                <h3 className="font-bold mb-2 leading-[1.3] text-[#171927]" style={{ fontSize: '16px' }}>{b.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#5e6577' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ HOW IT WORKS ════════════════════════ */}
      <section className="w-full py-[80px]" style={{ background: '#f8f9fc' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>How It Works</h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#118a45' }} />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 relative">
            <div className="hidden lg:block absolute top-[38px] left-[6%] right-[6%] h-[1px] border-t-2 border-dashed border-green-200 -z-10"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[15%]">
                <div className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center mb-4 shadow-md relative z-10 mx-auto lg:mx-0"
                  style={{ border: '2px solid rgba(17,138,69,0.2)' }}>
                  <i className={`ph ${step.icon} text-[32px]`} style={{ color: '#118a45' }}></i>
                </div>
                <div className="text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#118a45' }}>{step.step}</div>
                <h4 className="text-[15px] font-bold mb-2 leading-[1.3] min-h-[42px]" style={{ color: '#171927' }}>{step.title}</h4>
                <p className="text-[12px] leading-[1.6]" style={{ color: '#5e6577' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ BOTTOM CTA ════════════════════════ */}
      <section className="w-full py-[64px] bg-white">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10"
            style={{ background: 'linear-gradient(105deg, #071a10 0%, #0e3320 100%)', border: '1px solid rgba(17,138,69,0.35)', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(17,138,69,0.2)', border: '1px solid rgba(17,138,69,0.4)' }}>
                <i className="ph ph-trophy text-[30px]" style={{ color: '#4ade80' }}></i>
              </div>
              <div>
                <h3 className="font-montserrat font-extrabold text-[22px] text-white mb-1">The Best Model for Your Business Growth</h3>
                <p className="text-[15px]" style={{ color: '#a8abbe' }}>Stay informed. Stay ahead. See what works and scale what delivers.</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage && setCurrentPage('talk')}
              className="flex-shrink-0 px-8 py-4 text-white rounded-full font-bold text-[15px] flex items-center gap-2 transition-all hover:-translate-y-[2px]"
              style={{ background: '#118a45', boxShadow: '0 8px 24px rgba(17,138,69,0.4)', border: 'none' }}>
              Book Your Free Consultation <i className="ph-bold ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RetainerModel;

import React, { useEffect } from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const PayPerMeeting: React.FC<Props> = ({ setCurrentPage }) => {
  const steps = [
    { step: 'Step 1', title: 'Define Your ICP', desc: 'We understand your target audience and ideal Customer Profile.', icon: 'ph-target' },
    { step: 'Step 2', title: 'Research & Outreach', desc: 'We research, find, and reach out to your ICP with personalized messages.', icon: 'ph-users' },
    { step: 'Step 3', title: 'Qualify & Schedule', desc: 'We qualify interested prospects and schedule introductory meetings with your team.', icon: 'ph-calendar' },
    { step: 'Step 4', title: 'Completed Meeting', desc: 'You meet with your ICP. The meeting is held successfully.', icon: 'ph-video-camera' },
    { step: 'Step 5', title: 'You Pay', desc: 'You pay only for the completed meeting. No upfront fees, no hidden costs.', icon: 'ph-receipt' }
  ];

  const benefits = [
    { icon: 'ph-hand-coins', title: 'Zero Upfront Risk', desc: 'Pay only after a completed ICP meeting is held successfully.' },
    { icon: 'ph-shield-check', title: 'No-Show Protection', desc: 'No charge for incomplete calls, no-shows, or rescheduled meetings.' },
    { icon: 'ph-target', title: 'ICP-Matched Meetings', desc: 'Every meeting is with a verified, ideal customer profile.' },
    { icon: 'ph-chart-line-up', title: 'Predictable ROI', desc: 'Know your exact cost per meeting — budget with confidence.' },
    { icon: 'ph-users-three', title: 'Qualified Conversations', desc: 'Only real, productive meetings with decision-makers count.' },
  ];

  return (
    <div className="font-inter antialiased overflow-x-hidden bg-white text-[#171927]">

      {/* ════════════════════════ HERO (DARK) ════════════════════════ */}
      <section className="w-full relative pt-[80px] pb-[80px] overflow-hidden" style={{ background: '#05060d' }}>

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/business_meeting.png"
            alt="Business Meeting"
            className="absolute top-0 right-0 w-[80%] xl:w-[60%] h-full object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #05060d 35%, transparent 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #05060d 0%, transparent 30%)' }} />
          {/* Purple swoosh */}
          <div className="absolute bottom-0 right-0 w-full h-[400px] pointer-events-none opacity-80 mix-blend-screen">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 400 Q 400 300 1000 100 L 1000 400 Z" fill="rgba(139,70,255,0.07)" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#pg1)" strokeWidth="6" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#pg1)" strokeWidth="2" />
              <defs>
                <linearGradient id="pg1" x1="0" y1="1" x2="1" y2="0">
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
            <span className="font-semibold" style={{ color: '#9a4dff' }}>Pay per Completed Meeting</span>
          </div>

          <div className="flex flex-col xl:flex-row items-start gap-12">
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col pt-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full w-max mb-8"
                style={{ border: '1px solid rgba(139,70,255,0.5)', background: 'rgba(139,70,255,0.1)' }}>
                <i className="ph ph-handshake text-[14px]" style={{ color: '#c4a0ff' }} />
                <span className="font-semibold text-[11px] tracking-widest uppercase" style={{ color: '#c4a0ff' }}>
                  Engagement Model · Pay Per Meeting
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-montserrat font-extrabold leading-[1.1] mb-6 text-white"
                style={{ fontSize: 'clamp(34px, 4.5vw, 64px)' }}>
                Pay per<br />
                <span style={{ color: '#9a4dff' }}>Completed Meeting</span>
              </h1>

              <p className="text-[17px] leading-[1.75] mb-4 max-w-[520px]" style={{ color: '#cfd2df' }}>
                Performance-driven. Results-focused.
              </p>
              <p className="text-[16px] leading-[1.75] mb-8 max-w-[520px]" style={{ color: '#a8abbe' }}>
                Our Pay per Completed Meeting model ensures you pay only for completed introductory meetings with your ideal Customer Profile (ICP).
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('talk')}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#8b46ff', boxShadow: '0 4px 24px rgba(139,70,255,0.4)', border: 'none' }}>
                  Book Your Free Consultation <i className="ph ph-arrow-right text-[16px]" />
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[15px] px-7 py-[13px] rounded-full transition-all hover:bg-white/10 text-white"
                  style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'transparent' }}
                  onClick={() => setCurrentPage && setCurrentPage('engagement-models')}>
                  View All Models <i className="ph ph-arrow-right text-[16px]" />
                </button>
              </div>

              {/* 3 inline value points */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: 'ph-hand-coins', text: 'Zero Upfront Risk' },
                  { icon: 'ph-shield-check', text: 'No-Show Protection' },
                  { icon: 'ph-target', text: 'ICP-Only Meetings' },
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

            {/* RIGHT – Glass dashboard cards */}
            <div className="xl:flex-shrink-0 xl:w-[40%] w-full flex flex-col gap-5 xl:items-end justify-center pt-6 xl:pt-0 pointer-events-none">
              {/* Card: How Charging Works */}
              <div className="w-full max-w-[360px] rounded-[20px] p-6 relative overflow-hidden"
                style={{ background: 'rgba(10,12,28,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(139,70,255,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(139,70,255,0.2)' }}>
                    <i className="ph ph-receipt text-[18px]" style={{ color: '#c4a0ff' }} />
                  </div>
                  <span className="text-white font-semibold text-[14px]">Payment Model</span>
                </div>
                {[
                  { label: 'Pay only after a completed ICP meeting', checked: true, color: '#22c55e' },
                  { label: 'No charge for no-shows or reschedules', checked: true, color: '#22c55e' },
                  { label: 'Zero upfront commitment or retainer', checked: true, color: '#22c55e' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)' }}>
                      <i className="ph-bold ph-check text-[11px]" style={{ color: item.color }} />
                    </div>
                    <span className="text-[13px]" style={{ color: '#cfd2df' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Card: Meeting Status */}
              <div className="w-full max-w-[360px] rounded-[20px] p-5"
                style={{ background: 'rgba(10,12,28,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(139,70,255,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(139,70,255,0.2)' }}>
                    <i className="ph ph-calendar-check text-[18px]" style={{ color: '#c4a0ff' }} />
                  </div>
                  <span className="text-white font-semibold text-[14px]">Meetings This Month</span>
                </div>
                <div className="h-[60px] w-full flex items-end justify-between gap-[6px]">
                  {[30, 45, 40, 65, 55, 80, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-[4px]"
                      style={{ height: `${h}%`, background: i > 4 ? 'linear-gradient(to top, #6c2cf5, #a361ff)' : 'rgba(139,70,255,0.25)' }} />
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-[12px]" style={{ color: '#6b7299' }}>Mon–Sun</span>
                  <span className="text-[13px] font-bold" style={{ color: '#9a4dff' }}>+34% this week</span>
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
              Why the Pay per Meeting Model Works
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
                  el.style.boxShadow = '0 8px 32px rgba(139,70,255,0.15)';
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

      {/* ════════════════════════ HOW IT WORKS ════════════════════════ */}
      <section className="w-full py-[80px]" style={{ background: '#f8f9fc' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>How It Works</h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 relative">
            <div className="hidden lg:block absolute top-[38px] left-[8%] right-[8%] h-[1px] border-t-2 border-dashed border-purple-200 -z-10"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[18%]"
                style={{ transition: 'all 0.3s' }}>
                <div className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center mb-4 shadow-md relative z-10 mx-auto lg:mx-0"
                  style={{ border: '2px solid rgba(139,70,255,0.2)' }}>
                  <i className={`ph ${step.icon} text-[34px]`} style={{ color: '#8b46ff' }}></i>
                </div>
                <div className="text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#8b46ff' }}>{step.step}</div>
                <h4 className="text-[16px] font-bold mb-2 leading-[1.3] min-h-[44px] flex items-start" style={{ color: '#171927' }}>{step.title}</h4>
                <p className="text-[13px] leading-[1.6]" style={{ color: '#5e6577' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ BOTTOM CTA ════════════════════════ */}
      <section className="w-full py-[64px] bg-white">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10"
            style={{ background: 'linear-gradient(105deg, #120d2d 0%, #1a1040 100%)', border: '1px solid rgba(139,70,255,0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(139,70,255,0.2)', border: '1px solid rgba(139,70,255,0.4)' }}>
                <i className="ph ph-shield-check text-[30px]" style={{ color: '#c4a0ff' }}></i>
              </div>
              <div>
                <h3 className="font-montserrat font-extrabold text-[22px] text-white mb-1">Risk-Free. Results-Driven.</h3>
                <p className="text-[15px]" style={{ color: '#a8abbe' }}>Our model is built on trust, transparency, and results. You only pay when you get value.</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage && setCurrentPage('talk')}
              className="flex-shrink-0 px-8 py-4 text-white rounded-full font-bold text-[15px] flex items-center gap-2 transition-all hover:-translate-y-[2px]"
              style={{ background: '#8b46ff', boxShadow: '0 8px 24px rgba(139,70,255,0.4)', border: 'none' }}>
              Book Your Free Consultation <i className="ph-bold ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PayPerMeeting;

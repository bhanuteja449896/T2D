import React, { useEffect } from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const MultipleCampaigns: React.FC<Props> = ({ setCurrentPage }) => {
  const steps = [
    { step: 'Step 1', title: 'Understand Goals', desc: 'We understand your objectives, services, audiences, and campaign priorities.', icon: 'ph-target' },
    { step: 'Step 2', title: 'Plan & Design Campaigns', desc: 'We design separate campaign strategies for each goal, audience, or service.', icon: 'ph-users' },
    { step: 'Step 3', title: 'Execute & Outreach', desc: 'We run each campaign independently with targeted outreach and messaging.', icon: 'ph-megaphone' },
    { step: 'Step 4', title: 'Track & Optimize', desc: 'We monitor performance of every campaign and optimize for better results.', icon: 'ph-calendar' },
    { step: 'Step 5', title: 'Deliver Meetings', desc: 'We deliver qualified meetings for each campaign based on your goals.', icon: 'ph-chart-line-up' }
  ];

  const benefits = [
    { icon: 'ph-target', title: 'Targeted Per Audience', desc: 'Run different campaigns for different functions with relevant messaging.' },
    { icon: 'ph-users', title: 'Reach Diverse Segments', desc: 'Reach across regions, revenue bands, or company size simultaneously.' },
    { icon: 'ph-megaphone', title: 'Promote Multiple Services', desc: 'Effectively promote multiple solutions and services at the same time.' },
    { icon: 'ph-gear', title: 'Tailored Strategy Each', desc: 'Customized strategy, messaging, and outreach for every campaign.' },
    { icon: 'ph-chart-line-up', title: 'Higher Engagement & ROI', desc: 'Better engagement, more meetings, and higher ROI across all campaigns.' },
  ];

  const campaignNodes = [
    { label: 'IT Campaign', color: '#8b46ff', side: 'left' },
    { label: 'Finance Campaign', color: '#22c55e', side: 'left' },
    { label: 'HR Campaign', color: '#f97316', side: 'left' },
    { label: 'Event Campaigns', color: '#2f7bff', side: 'left' },
    { label: 'Agentic AI & Agents Campaign', color: '#ec4899', side: 'right' },
    { label: 'Automation Campaign', color: '#14b8a6', side: 'right' },
    { label: 'Digital Transformation Campaign', color: '#8b46ff', side: 'right' },
    { label: 'Region / Geography Campaigns', color: '#2f7bff', side: 'right' },
  ];

  return (
    <div className="font-inter antialiased overflow-x-hidden bg-white text-[#171927]">

      {/* ════════════════════════ HERO (DARK) ════════════════════════ */}
      <section className="w-full relative pt-[80px] pb-[80px] overflow-hidden" style={{ background: '#05060d' }}>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(47,123,255,0.12) 0%, transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(139,70,255,0.1) 0%, transparent 60%)' }} />
          {/* Blue-tinted swoosh */}
          <div className="absolute bottom-0 right-0 w-full h-[400px] pointer-events-none opacity-70 mix-blend-screen">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 400 Q 400 300 1000 100 L 1000 400 Z" fill="rgba(47,123,255,0.06)" />
              <path d="M 0 400 C 300 350 600 200 1000 50" fill="none" stroke="url(#bg1)" strokeWidth="5" />
              <defs>
                <linearGradient id="bg1" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1a47a0" stopOpacity="0" />
                  <stop offset="50%" stopColor="#2f7bff" />
                  <stop offset="100%" stopColor="#93c5fd" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium mb-10">
            <span className="text-[#6b7299] cursor-pointer hover:text-[#60a5fa] transition-colors" onClick={() => setCurrentPage && setCurrentPage('home')}>Home</span>
            <i className="ph ph-caret-right text-[#4a4f6a] text-[12px]"></i>
            <span className="text-[#6b7299] cursor-pointer hover:text-[#60a5fa] transition-colors" onClick={() => setCurrentPage && setCurrentPage('engagement-models')}>Engagement Models</span>
            <i className="ph ph-caret-right text-[#4a4f6a] text-[12px]"></i>
            <span className="font-semibold" style={{ color: '#60a5fa' }}>Multiple Campaigns – Model</span>
          </div>

          <div className="flex flex-col xl:flex-row items-start gap-12">
            {/* LEFT */}
            <div className="flex-1 min-w-0 flex flex-col pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full w-max mb-8"
                style={{ border: '1px solid rgba(47,123,255,0.5)', background: 'rgba(47,123,255,0.1)' }}>
                <i className="ph ph-megaphone text-[14px]" style={{ color: '#93c5fd' }} />
                <span className="font-semibold text-[11px] tracking-widest uppercase" style={{ color: '#93c5fd' }}>
                  Engagement Model · Multiple Campaigns
                </span>
              </div>

              <h1 className="font-montserrat font-extrabold leading-[1.1] mb-6 text-white"
                style={{ fontSize: 'clamp(30px, 4vw, 60px)' }}>
                Multiple<br />
                <span style={{ color: '#60a5fa' }}>Campaigns – Model</span>
              </h1>

              <p className="text-[17px] leading-[1.75] mb-4 max-w-[520px]" style={{ color: '#cfd2df' }}>
                Multiple goals. Multiple audiences. One strategic partner.
              </p>
              <p className="text-[16px] leading-[1.75] mb-8 max-w-[520px]" style={{ color: '#a8abbe' }}>
                Mid-size or Enterprise companies have multiple goals and services to promote across different functions, audiences, regions, or business segments. We design and run each campaign separately.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('talk')}
                  className="flex items-center gap-2 font-semibold text-[15px] text-white px-7 py-[13px] rounded-full transition-all hover:-translate-y-[2px]"
                  style={{ background: '#2f7bff', boxShadow: '0 4px 24px rgba(47,123,255,0.4)', border: 'none' }}>
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
                  { icon: 'ph-megaphone', text: 'Each Campaign Is Independent' },
                  { icon: 'ph-target', text: 'Tailored Per Audience' },
                  { icon: 'ph-chart-line-up', text: 'Higher Combined ROI' },
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(47,123,255,0.18)', border: '1px solid rgba(47,123,255,0.4)' }}>
                      <i className={`ph ${v.icon} text-[15px]`} style={{ color: '#60a5fa' }} />
                    </div>
                    <span className="text-[14px] font-medium" style={{ color: '#cfd2df' }}>{v.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – Campaign Hub Diagram */}
            <div className="xl:flex-shrink-0 xl:w-[44%] w-full flex flex-col gap-5 justify-center pt-6 xl:pt-0">
              <div className="w-full rounded-[20px] overflow-hidden"
                style={{ background: 'rgba(10,12,28,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(47,123,255,0.25)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-white font-bold text-[14px]">One Client. Multiple Campaigns. Maximum Impact.</span>
                </div>
                <div className="p-6 flex justify-between items-center gap-4">
                  {/* Left nodes */}
                  <div className="flex flex-col gap-3 flex-1">
                    {campaignNodes.filter(n => n.side === 'left').map((node, i) => (
                      <div key={i} className="rounded-[10px] px-3 py-2 flex items-center gap-2"
                        style={{ background: `${node.color}18`, border: `1px solid ${node.color}40` }}>
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: node.color }}></div>
                        <span className="text-[11px] font-medium" style={{ color: '#e2e8f0' }}>{node.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Center */}
                  <div className="flex-shrink-0 w-[80px] h-[80px] rounded-full flex flex-col items-center justify-center"
                    style={{ background: 'rgba(47,123,255,0.15)', border: '2px solid rgba(47,123,255,0.4)' }}>
                    <i className="ph-fill ph-buildings text-white text-[28px]" />
                    <span className="text-[9px] font-bold text-white mt-1 text-center leading-tight">Your Company</span>
                  </div>
                  {/* Right nodes */}
                  <div className="flex flex-col gap-3 flex-1">
                    {campaignNodes.filter(n => n.side === 'right').map((node, i) => (
                      <div key={i} className="rounded-[10px] px-3 py-2 flex items-center gap-2"
                        style={{ background: `${node.color}18`, border: `1px solid ${node.color}40` }}>
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: node.color }}></div>
                        <span className="text-[11px] font-medium" style={{ color: '#e2e8f0' }}>{node.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mx-6 mb-6 rounded-[10px] p-3 flex items-center gap-3"
                  style={{ background: 'rgba(47,123,255,0.1)', border: '1px solid rgba(47,123,255,0.3)' }}>
                  <i className="ph ph-target text-[18px]" style={{ color: '#60a5fa' }} />
                  <span className="text-[12px] font-medium" style={{ color: '#cfd2df' }}>Different campaigns. Different audiences. Different messaging. Better results.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHY MULTIPLE CAMPAIGNS ════════════════════════ */}
      <section className="w-full bg-white py-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[32px] mb-3" style={{ color: '#171927' }}>
              Why Run Multiple Campaigns?
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#2f7bff' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <div key={i}
                className="flex flex-col items-center text-center rounded-[18px] transition-all duration-300 cursor-default"
                style={{ background: '#ffffff', border: '1.5px solid #e8e9ef', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', padding: '32px 20px 28px' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 32px rgba(47,123,255,0.14)';
                  el.style.borderColor = '#93c5fd';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
                  el.style.borderColor = '#e8e9ef';
                  el.style.transform = 'translateY(0)';
                }}>
                <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(47,123,255,0.1) 0%, rgba(47,123,255,0.22) 100%)' }}>
                  <i className={`ph ${b.icon} text-[24px]`} style={{ color: '#2f7bff' }} />
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
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#2f7bff' }} />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 relative">
            <div className="hidden lg:block absolute top-[38px] left-[8%] right-[8%] h-[1px] border-t-2 border-dashed border-blue-200 -z-10"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[18%]">
                <div className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center mb-4 shadow-md relative z-10 mx-auto lg:mx-0"
                  style={{ border: '2px solid rgba(47,123,255,0.2)' }}>
                  <i className={`ph ${step.icon} text-[32px]`} style={{ color: '#2f7bff' }}></i>
                </div>
                <div className="text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#2f7bff' }}>{step.step}</div>
                <h4 className="text-[16px] font-bold mb-2 leading-[1.3] min-h-[44px]" style={{ color: '#171927' }}>{step.title}</h4>
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
            style={{ background: 'linear-gradient(105deg, #05091e 0%, #0b1535 100%)', border: '1px solid rgba(47,123,255,0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(47,123,255,0.2)', border: '1px solid rgba(47,123,255,0.4)' }}>
                <i className="ph ph-trophy text-[30px]" style={{ color: '#60a5fa' }}></i>
              </div>
              <div>
                <h3 className="font-montserrat font-extrabold text-[22px] text-white mb-1">Built for Complex Business Needs</h3>
                <p className="text-[15px]" style={{ color: '#a8abbe' }}>One Partner. Multiple Campaigns. Stronger Pipeline.</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage && setCurrentPage('talk')}
              className="flex-shrink-0 px-8 py-4 text-white rounded-full font-bold text-[15px] flex items-center gap-2 transition-all hover:-translate-y-[2px]"
              style={{ background: 'linear-gradient(to right, #8b46ff, #2f7bff)', boxShadow: '0 8px 24px rgba(47,123,255,0.4)', border: 'none' }}>
              Book Your Free Consultation <i className="ph-bold ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MultipleCampaigns;

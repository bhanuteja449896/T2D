import React from 'react';

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
  {
    icon: 'ph-hand-coins',
    title: 'Lead Generation',
    desc: 'We identify and engage your ideal prospects to build a strong, consistent pipeline.',
    route: 'lead-generation'
  },
  {
    icon: 'ph-calendar-check',
    title: 'Appointment Setting',
    desc: 'We book qualified meetings so your- sales team can focus entirely on closing deals.',
    route: 'appointment-setting'
  },
  {
    icon: 'ph-envelope-open',
    title: 'Cold Email Outreach',
    desc: 'Personalized outreach that gets opens, replies, and real conversations at scale.',
    route: 'cold-email-outreach'
  },
  {
    icon: 'ph-linkedin-logo',
    title: 'LinkedIn Lead Generation',
    desc: 'Leverage LinkedIn to connect with the right decision-makers at the right time.',
    route: 'linkedin-lead-gen'
  },
  {
    icon: 'ph-globe',
    title: 'Cross-border Lead Generation',
    desc: 'Expand your reach across global markets with confidence and local expertise.',
    route: 'cross-border-lead-gen'
  },
  {
    icon: 'ph-database',
    title: 'B2B Data',
    desc: 'High-quality, verified data to fuel your outreach campaigns and growth initiatives.',
    route: 'b2b-data'
  },
];

const locations = [
  {
    name: 'North America',
    img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Asia-Pacific',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Southeast Asia',
    img: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Latin America',
    img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Europe',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Australia',
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=80',
  },
];

/* ─── Component ─────────────────────────────────────────────── */

interface Props {
  setCurrentPage?: (page: string) => void;
}

const ServicesPage: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="font-inter bg-white text-darkBlue antialiased overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO SECTION  – full-width dark skyline
      ══════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '460px' }}>
        {/* Skyline photo */}
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80"
          alt="City skyline at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
        {/* Dark purple overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, #120d2dee 0%, #1b143de8 45%, #24164acc 72%, #0e0a22bb 100%)',
        }} />

        {/* Content row — same horizontal padding as every other section */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] flex flex-col xl:flex-row items-center gap-10 pt-[80px] pb-[64px]">

          {/* LEFT */}
          <div className="flex-1 min-w-0 flex flex-col">
            <p className="text-[16px] font-semibold mb-5" style={{ color: '#9a4cff' }}>
              Our Services
            </p>
            <h1 className="font-montserrat font-extrabold leading-[1.1] text-white mb-5"
              style={{ fontSize: 'clamp(34px, 4.5vw, 66px)' }}>
              Solutions That Drive<br />
              <span style={{ color: '#9a4cff' }}>Pipeline. Opportunities. Growth.</span>
            </h1>
            <p className="text-[17px] leading-[1.75] mb-8 max-w-[520px]" style={{ color: '#c8cadb' }}>
              From first outreach to closed deals, we provide end-to-end solutions
              that help you connect with the right buyers and accelerate revenue.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {/* Primary CTA */}
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
                className="flex items-center gap-2 text-white font-semibold text-[15px] px-7 py-[14px] rounded-full transition-all hover:-translate-y-[2px]"
                style={{
                  background: '#8b46ff',
                  boxShadow: '0 0 28px rgba(139,70,255,0.5)',
                  border: 'none',
                }}
              >
                Book Your Free Consultation
                <i className="ph ph-arrow-right text-[18px]" />
              </button>
              {/* Secondary CTA */}
              <button className="flex items-center gap-3 font-medium text-[15px] bg-transparent border-none"
                style={{ color: '#e8e9ef' }}>
                Explore All Services
                <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{ border: '1.5px solid #9a4cff' }}>
                  <i className="ph ph-arrow-right text-[14px]" style={{ color: '#9a4cff' }} />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT – Glass feature panel */}
          <div className="xl:flex-shrink-0 xl:w-[340px] w-full max-w-[420px] rounded-[20px] overflow-hidden"
            style={{
              background: 'rgba(20,12,48,0.78)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(154,76,255,0.32)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
            }}>
            {[
              { icon: 'ph-users', title: 'More Qualified Meetings', desc: 'Connect with decision-makers who matter.' },
              { icon: 'ph-chart-bar', title: 'Stronger Pipeline', desc: 'Build a predictable and consistent pipeline.' },
              { icon: 'ph-target', title: 'More Revenue Opportunities', desc: 'Drive growth with high-quality opportunities.' },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-start gap-4 px-6 py-5"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div className="flex-shrink-0 w-[44px] h-[44px] rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(139,70,255,0.22)', border: '1px solid rgba(154,76,255,0.38)' }}>
                  <i className={`ph ${item.icon} text-[20px]`} style={{ color: '#9a4cff' }} />
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] mb-[3px]">{item.title}</p>
                  <p className="text-[13px] leading-[1.55]" style={{ color: '#a8abbe' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR SERVICES SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white py-[72px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[38px] text-darkBlue mb-3">
              Our Services
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* 6-card grid – full width, no max-width cap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage(s.route); }}
                className="group bg-white rounded-[18px] flex flex-col transition-all duration-300 cursor-pointer"
                style={{
                  border: '1.5px solid #e8e9ef',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  padding: '32px 24px 28px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 8px 32px rgba(139,70,255,0.16)';
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
                {/* Icon circle */}
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(139,70,255,0.12) 0%, rgba(139,70,255,0.24) 100%)' }}>
                  <i className={`ph ${s.icon} text-[26px]`} style={{ color: '#8b46ff' }} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-darkBlue mb-3 leading-[1.3]"
                  style={{ fontSize: '17px' }}>
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.7] flex-grow mb-6"
                  style={{ color: '#5e6577' }}>
                  {s.desc}
                </p>

                {/* Arrow button */}
                <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#8b46ff]"
                  style={{ border: '1.5px solid #d4b8ff' }}>
                  <i className="ph ph-arrow-right text-[16px] group-hover:text-white transition-colors"
                    style={{ color: '#8b46ff' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DIVIDER PILL
      ══════════════════════════════════════════════ */}
      <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] flex items-center gap-5 py-8">
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #d0b3ff)' }} />
        <div className="flex items-center gap-2 px-5 py-[9px] rounded-full flex-shrink-0"
          style={{ border: '1.5px solid #9a4cff', background: '#ffffff' }}>
          <i className="ph ph-globe-hemisphere-west text-[16px]" style={{ color: '#9a4cff' }} />
          <span className="font-semibold text-[14px] whitespace-nowrap" style={{ color: '#9a4cff' }}>
            Generate Web Pages
          </span>
        </div>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #d0b3ff)' }} />
      </div>

      {/* ══════════════════════════════════════════════
          GLOBAL SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white pb-[80px]">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-[36px] text-darkBlue mb-3">
              We Serve Businesses Across the Globe
            </h2>
            <div className="w-[52px] h-[4px] rounded-full mx-auto" style={{ background: '#8b46ff' }} />
          </div>

          {/* 6 location cards – full width */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="relative rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  aspectRatio: '3 / 4',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.14)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-5px)';
                  el.style.boxShadow = '0 12px 36px rgba(0,0,0,0.26)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.14)';
                }}
              >
                {/* Photo */}
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="absolute inset-0 w-full h-full object-cover block"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(8,4,24,0.85) 0%, rgba(0,0,0,0) 52%)' }} />
                {/* Label */}
                <div className="absolute bottom-[14px] left-[14px] flex items-center gap-[6px]">
                  <i className="ph-fill ph-map-pin text-white text-[17px]" />
                  <span className="text-white font-semibold text-[13px]">{loc.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

import React, { useState } from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const filterChips = [
  "All Case Studies",
  "SaaS Companies",
  "AI & Machine Learning",
  "Agentic AI",
  "AI Agents",
  "Sales & GTM Transformation",
  "Call Center",
  "Procurement",
  "Information Security"
];

const metricCards = [
  {
    category: "SaaS Company",
    icon: "ph-shield-check",
    iconBg: "#10b981",
    title: "Accelerating Growth for a Cybersecurity SaaS Leader with Qualified Meetings",
    metrics: [
      { value: "250%", label: "Increase in Opportunities" },
      { value: "40%", label: "Reduction in Sales Cycle" },
      { value: "3X", label: "ROI Achieved" }
    ]
  },
  {
    category: "AI & ML Company",
    icon: "ph-brain",
    iconBg: "#6f3cff",
    title: "How an AI Platform Company Drove 4X More Meetings with Decision-Makers",
    metrics: [
      { value: "4X", label: "More Meetings Booked" },
      { value: "60%", label: "Increase in Win Rate" },
      { value: "3.8X", label: "Pipeline Generated" }
    ]
  },
  {
    category: "Agentic AI Company",
    icon: "ph-robot",
    iconBg: "#3b82f6",
    title: "Scaling Pipeline for an Agentic AI Company in a Competitive Market",
    metrics: [
      { value: "5X", label: "Pipeline Growth" },
      { value: "50%", label: "Increase in Conversion Rate" },
      { value: "70%", label: "More Qualified Meetings" }
    ]
  },
  {
    category: "AI Agents Company",
    icon: "ph-cpu",
    iconBg: "#10b981",
    title: "Driving Revenue Growth for an AI Agents Platform Through Strategic Outreach",
    metrics: [
      { value: "320%", label: "Increase in Meetings" },
      { value: "55%", label: "Reduction in CPL" },
      { value: "4.2X", label: "Revenue Impact" }
    ]
  },
  {
    category: "SaaS Company",
    icon: "ph-infinity",
    iconBg: "#1e3a8a",
    title: "Helping a DevOps SaaS Platform Achieve Predictable Pipeline Growth",
    metrics: [
      { value: "280%", label: "More Opportunities" },
      { value: "35%", label: "Shorter Sales Cycle" },
      { value: "3.5X", label: "ROI Delivered" }
    ]
  },
  {
    category: "AI & ML Company",
    icon: "ph-cpu",
    iconBg: "#6f3cff",
    title: "Transforming Outreach for an Enterprise AI Company with Global Operations",
    metrics: [
      { value: "250%", label: "More SQLs" },
      { value: "65%", label: "Increase in Response Rate" },
      { value: "3X", label: "Meetings with C-Suite" }
    ]
  },
  {
    category: "Agentic AI Company",
    icon: "ph-git-branch",
    iconBg: "#0ea5e9",
    title: "Building a Strong Pipeline Engine for an Agentic AI Automation Platform",
    metrics: [
      { value: "5.5X", label: "Pipeline Growth" },
      { value: "60%", label: "Increase in Opportunities" },
      { value: "4X", label: "More Qualified Meetings" }
    ]
  },
  {
    category: "Call Center Project",
    icon: "ph-headset",
    iconBg: "#f97316",
    title: "Call Center Outreach Success – 80% Results Achieved Every Month",
    metrics: [
      { value: "80%", label: "Result Achieved" },
      { value: "Monthly", label: "Consistent Results" },
      { value: "Higher", label: "Connect Rate" }
    ]
  },
  {
    category: "Procurement Project",
    icon: "ph-shopping-cart",
    iconBg: "#3b82f6",
    title: "Procurement Outreach Success – 98% Results Achieved (NAMER & EMEA)",
    metrics: [
      { value: "98%", label: "Result Achieved" },
      { value: "NAMER & EMEA", label: "Regions Covered" },
      { value: "Higher", label: "Engagement" }
    ]
  }
];

const textCards = [
  {
    category: "Information Security Project",
    icon: "ph-lock-key",
    iconBg: "#ef4444",
    title: "Case Study\nIndustry: Cybersecurity",
    challenge: "Low response rates from enterprise prospects.",
    solution: "Personalized cold email and LinkedIn outreach.",
    results: ["20+ qualified meetings", "5X pipeline growth", "Higher engagement with decision-makers"]
  },
  {
    category: "AI Customer Support Platform",
    icon: "ph-robot",
    iconBg: "#10b981",
    title: "AI Customer Support Platform",
    challenge: "Generate qualified meetings with enterprise IT and customer support leaders.",
    solution: "Targeted cold email, LinkedIn outreach, and appointment setting campaigns.",
    results: ["Consistent pipeline of qualified meetings, increased engagement with decision-makers, and stronger sales opportunities across target markets."]
  },
  {
    category: "AI Service Management Platform",
    icon: "ph-gear",
    iconBg: "#3b82f6",
    title: "AI Service Management Platform",
    challenge: "Generate enterprise sales opportunities with IT and business decision-makers.",
    solution: "Executed targeted account-based outreach, through personalized cold email, LinkedIn prospecting, and appointment setting.",
    results: ["92% campaign success rate, 2 enterprise customers closed within the quarter, and a strong pipeline of qualified sales opportunities."]
  }
];

const Resources: React.FC<Props> = ({ setCurrentPage }) => {
  const [activeChip, setActiveChip] = useState("All Case Studies");

  return (
    <div className="font-inter antialiased bg-[#f8f9fc] min-h-screen">
      
      {/* ════════════════════════════════════════
          HERO SECTION (DARK)
      ════════════════════════════════════════ */}
      <section 
        className="w-full relative pt-[120px] pb-[100px] overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #10062b 0%, #170940 50%, #0d0620 100%)',
          color: 'white'
        }}
      >
        {/* Subtle glowing waves background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[120%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(111,60,255,0.15)_0%,transparent_70%)] blur-[60px]" />
          <div className="absolute top-[10%] right-[-10%] w-[60%] h-[100%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(47,123,255,0.1)_0%,transparent_70%)] blur-[80px]" />
          <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 500">
             <path d="M0 300 Q 250 400 500 250 T 1000 200" fill="none" stroke="rgba(111,60,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
             <path d="M0 250 Q 300 350 600 200 T 1000 150" fill="none" stroke="rgba(47,123,255,0.3)" strokeWidth="1" />
          </svg>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="flex-1">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 mb-6"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <i className="ph ph-sparkle text-[#b28cff]" />
                <span className="text-[13px] font-semibold text-white/90">Success Stories That Inspire</span>
              </div>
              
              <h1 className="font-montserrat font-extrabold text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] mb-6">
                Case Studies
              </h1>
              
              <p className="text-[18px] md:text-[20px] text-white/70 max-w-[600px] leading-[1.6]">
                See how leading SaaS and AI-driven companies partner with Tech2Demand Global 
                to accelerate growth, generate qualified meetings, and build 
                predictable revenue pipelines.
              </p>
            </div>

            {/* Right Content / Graphics */}
            <div className="flex-1 w-full flex justify-end">
              <div className="relative w-full max-w-[500px] h-[300px]">
                
                {/* Mini Card 1 */}
                <div className="absolute top-4 left-[20%] w-[100px] h-[100px] rounded-[16px] border border-white/10 bg-[#160a3a]/80 backdrop-blur-md flex flex-col items-center justify-center gap-2 shadow-2xl z-20">
                  <i className="ph ph-cpu text-[32px] text-white/80" />
                  <span className="text-[11px] font-bold text-white tracking-widest">AGENTS</span>
                </div>
                
                {/* Mini Card 2 */}
                <div className="absolute top-10 left-[45%] w-[100px] h-[100px] rounded-[16px] border border-white/10 bg-[#160a3a]/80 backdrop-blur-md flex flex-col items-center justify-center gap-2 shadow-2xl z-20">
                  <i className="ph ph-brain text-[32px] text-[#b28cff]" />
                  <span className="text-[10px] font-bold text-white tracking-widest text-center">AGENTIC AI</span>
                </div>

                {/* Main Large Visual */}
                <div className="absolute right-0 bottom-0 top-6 w-[75%] rounded-[24px] border border-white/10 bg-[#140a2c] shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden z-10">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#6f3cff]/20 to-transparent pointer-events-none" />
                   <i className="ph ph-trend-up text-[#6f3cff] text-[120px] opacity-80" />
                   {/* Abstract chart bars */}
                   <div className="absolute bottom-8 right-12 flex items-end gap-3">
                     <div className="w-[12px] h-[40px] bg-[#2f7bff] rounded-full opacity-60" />
                     <div className="w-[12px] h-[70px] bg-[#6f3cff] rounded-full opacity-80" />
                     <div className="w-[12px] h-[100px] bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                   </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FLOATING CTA
      ════════════════════════════════════════ */}
      <div className="w-full relative z-30" style={{ marginTop: '-28px' }}>
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px] flex justify-end">
          <button 
            onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('talk'); }}
            className="bg-white rounded-full px-8 py-[18px] flex items-center gap-3 shadow-[0_12px_24px_rgba(20,24,40,0.1)] border border-gray-100 hover:scale-[1.02] transition-transform group mr-4 lg:mr-12"
          >
            <span className="font-bold text-[16px]" style={{ color: '#6f3cff' }}>Book Your Free Consultation</span>
            <i className="ph ph-arrow-right text-[18px] text-[#6f3cff] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          WHITE CONTENT AREA (CHIPS + GRID)
      ════════════════════════════════════════ */}
      <section className="w-full pb-[120px] pt-8">
        <div className="w-full px-4 sm:px-6 md:px-[60px] lg:px-[100px]">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {filterChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => setActiveChip(chip)}
                className={`px-5 py-[10px] rounded-full text-[14px] font-medium transition-colors border ${
                  activeChip === chip 
                    ? 'bg-[#6f3cff] text-white border-[#6f3cff]' 
                    : 'bg-white text-[#5f667a] border-gray-200 hover:border-[#6f3cff] hover:text-[#6f3cff]'
                }`}
              >
                {activeChip !== chip && (
                  <i className={`ph ph-diamonds-four mr-2 text-gray-400`} />
                )}
                {chip}
              </button>
            ))}
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {metricCards.filter(card => {
              if (activeChip === "All Case Studies") return true;
              if (activeChip === "SaaS Companies" && card.category === "SaaS Company") return true;
              if (activeChip === "AI & Machine Learning" && card.category === "AI & ML Company") return true;
              if (activeChip === "Agentic AI" && card.category === "Agentic AI Company") return true;
              if (activeChip === "AI Agents" && card.category === "AI Agents Company") return true;
              if (activeChip === "Call Center" && card.category === "Call Center Project") return true;
              if (activeChip === "Procurement" && card.category === "Procurement Project") return true;
              if (activeChip === "Sales & GTM Transformation") return card.title.includes("Pipeline") || card.title.includes("Revenue");
              return false;
            }).map((card, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[20px] p-7 border border-gray-100 shadow-[0_4px_20px_rgba(20,24,40,0.04)] hover:shadow-[0_12px_30px_rgba(20,24,40,0.08)] transition-all flex flex-col"
              >
                {/* Header: Icon & Category */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: card.iconBg }}>
                    <i className={`ph ${card.icon} text-white text-[22px]`} />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-wider" style={{ color: '#6f3cff' }}>
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[18px] leading-[1.35] mb-6 flex-grow" style={{ color: '#171927' }}>
                  {card.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {card.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-bold text-[22px] sm:text-[24px]" style={{ color: '#2f7bff' }}>{m.value}</span>
                      <span className="text-[11px] leading-[1.3] text-[#666d80] mt-1">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Read Link */}
                <a href="#" className="font-semibold text-[14px] flex items-center gap-1 group mt-auto" style={{ color: '#6f3cff' }}>
                  Read Case Study <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Text Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {textCards.filter(card => {
              if (activeChip === "All Case Studies") return true;
              if (activeChip === "Information Security" && card.category === "Information Security Project") return true;
              if (activeChip === "AI & Machine Learning" && card.title.includes("AI")) return true;
              if (activeChip === "Sales & GTM Transformation") return card.solution.includes("sales") || card.challenge.includes("sales");
              return false;
            }).map((card, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[20px] p-7 border border-gray-100 shadow-[0_4px_20px_rgba(20,24,40,0.04)] hover:shadow-[0_12px_30px_rgba(20,24,40,0.08)] transition-all flex flex-col"
              >
                {/* Header: Icon & Category */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: card.iconBg }}>
                    <i className={`ph ${card.icon} text-white text-[22px]`} />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-wider" style={{ color: '#6f3cff' }}>
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[18px] leading-[1.35] mb-4 whitespace-pre-line" style={{ color: '#171927' }}>
                  {card.title}
                </h3>

                {/* Text Content */}
                <div className="flex flex-col gap-3 mb-6 flex-grow">
                  <div>
                    <span className="text-[13px] font-bold text-[#171927]">Challenge: </span>
                    <span className="text-[13px] text-[#666d80] leading-[1.5]">{card.challenge}</span>
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-[#171927]">Solution: </span>
                    <span className="text-[13px] text-[#666d80] leading-[1.5]">{card.solution}</span>
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-[#171927]">Results:</span>
                    <ul className="mt-1 flex flex-col gap-1">
                      {card.results.map((res, idx) => (
                        <li key={idx} className="text-[13px] text-[#666d80] leading-[1.5] flex items-start gap-2">
                          <i className="ph-fill ph-check-circle text-[#6f3cff] mt-[2px] flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Read Link */}
                <a href="#" className="font-semibold text-[14px] flex items-center gap-1 group mt-auto" style={{ color: '#6f3cff' }}>
                  Read Case Study <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Resources;

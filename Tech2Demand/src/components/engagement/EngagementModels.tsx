import React, { useEffect } from 'react';

interface Props {
  setCurrentPage?: (page: string) => void;
}

const EngagementModels: React.FC<Props> = ({ setCurrentPage }) => {
  const models = [
    {
      id: 'pay-per-meeting',
      title: 'Pay per\nCompleted Meeting',
      shortTitle: 'Pay per Completed Meeting',
      color: '#5534eb',
      bgLight: '#f8f6ff',
      bgDark: '#efeaff',
      icon: 'ph-target',
      bottomIcon: 'ph-chart-bar',
      bottomText: 'Ideal for businesses looking for risk-free lead generation.',
      bullets: [
        'You pay only for qualified meetings that are completed.',
        'No upfront fees.',
        'No long-term commitment.',
        'Performance-driven model focused on results.'
      ]
    },
    {
      id: 'retainer-model',
      title: 'Retainer –\nDedicated Resource\nModel (Monthly)',
      shortTitle: 'Retainer – Dedicated Resource Model (Monthly)',
      color: '#118a45',
      bgLight: '#f0fdf4',
      bgDark: '#dcfce7',
      icon: 'ph-user',
      bottomIcon: 'ph-users',
      bottomText: 'Ideal for businesses needing steady and focused lead flow.',
      bullets: [
        'Dedicated team working exclusively on your project.',
        'Monthly engagement with defined goals.',
        'Consistent pipeline and continuous outreach.'
      ]
    },
    {
      id: 'multiple-campaigns',
      title: 'Multiple Campaigns –\nModel',
      shortTitle: 'Multiple Campaigns – Model',
      color: '#2c6ee8',
      bgLight: '#eff6ff',
      bgDark: '#dbeafe',
      icon: 'ph-megaphone',
      bottomIcon: 'ph-globe',
      bottomText: 'Ideal for businesses targeting multiple markets or offerings.',
      bullets: [
        'Run multiple campaigns across industries, regions or solutions.',
        'Parallel outreach for faster pipeline growth.',
        'Customized strategy for each campaign.'
      ]
    },
    {
      id: 'b2b-data-service',
      title: 'B2B Data Service –\nModel',
      shortTitle: 'B2B Data Service – Model',
      color: '#d16b17',
      bgLight: '#fffbeb',
      bgDark: '#fef3c7',
      icon: 'ph-database',
      bottomIcon: 'ph-shield-check',
      bottomText: 'Ideal for teams who need high-quality data for their outreach.',
      bullets: [
        'We build and provide data as per your specific criteria.',
        '100% customized and verified data.',
        'Valid and updated contacts list.'
      ]
    }
  ];

  const features = [
    { icon: 'ph-shield-check', title: 'Quality You Can Trust', desc: 'Accurate, verified, and up-to-date data.' },
    { icon: 'ph-target', title: 'Results That Matter', desc: 'More qualified meetings, better opportunities.' },
    { icon: 'ph-clock', title: 'Save Time & Resources', desc: 'We do the heavy lifting, you focus on closing.' },
    { icon: 'ph-trend-up', title: 'Scalable & Flexible', desc: 'Engagement models that grow with your business.' },
    { icon: 'ph-handshake', title: 'Built for B2B Success', desc: 'Strategies tailored for real pipeline impact.' }
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-[120px] pb-[80px] font-montserrat">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#171927] mb-4">
            Our Engagement Models
          </h1>
          <div className="w-[40px] h-[3px] bg-[#8b46ff] mx-auto mb-6"></div>
          <p className="text-[16px] sm:text-[18px] text-[#5f6577] max-w-[700px] mx-auto">
            Flexible engagement options designed to fit your business goals and growth stage.
          </p>
        </div>

        {/* Tracker Section (Desktop Only) */}
        <div className="hidden lg:flex items-start justify-between relative mb-16 px-10">
          {/* Dashed line connecting all items */}
          <div className="absolute top-[40px] left-[12%] right-[12%] h-[1px] border-t-2 border-dashed border-gray-200 -z-10"></div>
          
          {models.map((model, idx) => (
            <div key={idx} className="flex flex-col items-center w-[200px] text-center relative bg-white">
              <div 
                className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-4 relative z-10"
                style={{ 
                  backgroundColor: 'white',
                  border: `2px solid ${model.color}`,
                  boxShadow: `0 4px 14px ${model.color}15`
                }}
              >
                <i className={`ph ${model.icon} text-[32px]`} style={{ color: model.color }}></i>
              </div>
              <h3 
                className="font-bold text-[14px] leading-[1.4] max-w-[160px] pb-2 border-b-[3px] transition-all"
                style={{ 
                  color: model.color,
                  borderColor: idx === 0 ? model.color : 'transparent' // First one looks underlined in image, let's just make it color specific on hover or static. In image first is underlined.
                }}
              >
                {model.shortTitle}
              </h3>
            </div>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {models.map((model, idx) => (
            <div 
              key={idx}
              onClick={() => {
                if (setCurrentPage && model.id === 'pay-per-meeting') {
                  setCurrentPage('pay-per-meeting');
                } else if (setCurrentPage && model.id === 'retainer-model') {
                  setCurrentPage('retainer-model');
                } else if (setCurrentPage && model.id === 'multiple-campaigns') {
                  setCurrentPage('multiple-campaigns');
                } else if (setCurrentPage && model.id === 'b2b-data-service') {
                  setCurrentPage('b2b-data-service');
                }
              }}
              className={`flex flex-col rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${(model.id === 'pay-per-meeting' || model.id === 'retainer-model' || model.id === 'multiple-campaigns' || model.id === 'b2b-data-service') ? 'cursor-pointer' : ''}`}
              style={{
                backgroundColor: model.bgLight,
                border: `1px solid ${model.color}30`,
              }}
            >
              {/* Card Header & Bullets */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: model.bgDark }}
                  >
                    <i className={`ph ${model.icon} text-[28px]`} style={{ color: model.color }}></i>
                  </div>
                  <h3 
                    className="font-extrabold text-[18px] leading-[1.3] whitespace-pre-line"
                    style={{ color: model.color }}
                  >
                    {model.title}
                  </h3>
                </div>

                <ul className="space-y-4 flex-1">
                  {model.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <div className="mt-[2px] flex-shrink-0">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: model.color }}
                        >
                          <i className="ph-bold ph-check text-white text-[12px]"></i>
                        </div>
                      </div>
                      <span className="text-[14px] leading-[1.5] text-[#3a3f52] font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer (Ideal for...) */}
              <div 
                className="p-5 mt-auto flex items-center gap-3"
                style={{ backgroundColor: model.bgDark }}
              >
                <i className={`ph ${model.bottomIcon} text-[24px]`} style={{ color: model.color }}></i>
                <p className="text-[13px] font-bold leading-[1.4]" style={{ color: model.color }}>
                  {model.bottomText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Strip */}
        <div className="bg-[#f8f9fc] border border-[#e8e9ef] rounded-[24px] p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 divide-y md:divide-y-0 lg:divide-x divide-gray-200">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center pt-6 md:pt-0 lg:px-4 first:pt-0">
                <i className={`ph ${feature.icon} text-[32px] text-[#5534eb] mb-3`}></i>
                <h4 className="font-bold text-[#171927] text-[14px] mb-2">{feature.title}</h4>
                <p className="text-[#5f6577] text-[12px] leading-[1.5] max-w-[200px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EngagementModels;

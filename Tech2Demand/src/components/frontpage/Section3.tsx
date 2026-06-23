import React from 'react';
import './Section3.css';

const Section3: React.FC = () => {
    return (
        <section className="growth-section">
            <div className="w-full px-6 md:px-[60px] lg:px-[100px]">
                <div className="top-content">
                    <div className="heading-block">
                        <div className="badge-s3">
                            <span>&#10022;</span> OUR PROVEN PROCESS
                        </div>
                        <h1>The <span>Funnl</span> Growth Framework</h1>
                        <p className="supporting-text">A proven 4-step process to attract the right prospects, generate qualified meetings, and build a predictable pipeline that drives revenue growth.</p>
                    </div>
                    <div className="cta-block">
                        <a href="#" className="cta-button">Book Your Free Consultation <span>&rarr;</span></a>
                        <br/>
                        <div className="cta-note">
                            <i className="ph-bold ph-shield-check"></i>
                            No obligation. Just growth.
                        </div>
                    </div>
                </div>

                <div className="process-cards-wrapper">
                    <div className="connector c1">
                        <i className="ph-bold ph-caret-right"></i>
                    </div>
                    <div className="connector c2">
                        <i className="ph-bold ph-caret-right"></i>
                    </div>
                    <div className="connector c3">
                        <i className="ph-bold ph-caret-right"></i>
                    </div>

                    <div className="process-card card-1">
                        <div className="card-header">
                            <div className="card-icon">
                                <i className="ph-bold ph-magnifying-glass"></i>
                            </div>
                            <div className="card-number">01</div>
                        </div>
                        <h3 className="card-title">Discover & Define</h3>
                        <div className="card-underline"></div>
                        <p className="card-body">We start by understanding your business, ideal customers, market opportunities, and growth objectives. Together, we build a strategy designed to attract the right prospects and create a predictable pipeline.</p>
                        <div className="card-dots">
                            <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
                        </div>
                    </div>

                    <div className="process-card card-2">
                        <div className="card-header">
                            <div className="card-icon">
                                <i className="ph-bold ph-paper-plane-right"></i>
                            </div>
                            <div className="card-number">02</div>
                        </div>
                        <h3 className="card-title">Launch & Engage</h3>
                        <div className="card-underline"></div>
                        <p className="card-body">Our team executes targeted outreach across email, LinkedIn, content, and demand generation channels to engage decision-makers and generate meaningful conversations.</p>
                        <div className="card-dots">
                            <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
                        </div>
                    </div>

                    <div className="process-card card-3">
                        <div className="card-header">
                            <div className="card-icon">
                                <i className="ph-bold ph-user-plus"></i>
                            </div>
                            <div className="card-number">03</div>
                        </div>
                        <h3 className="card-title">Generate Qualified Meetings</h3>
                        <div className="card-underline"></div>
                        <p className="card-body">We connect your sales team with qualified prospects who match your ideal customer profile and are ready to explore solutions. This means less time prospecting and more time selling.</p>
                        <div className="card-dots">
                            <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
                        </div>
                    </div>

                    <div className="process-card card-4">
                        <div className="card-header">
                            <div className="card-icon">
                                <i className="ph-bold ph-chart-bar"></i>
                            </div>
                            <div className="card-number">04</div>
                        </div>
                        <h3 className="card-title">Scale Growth</h3>
                        <div className="card-underline"></div>
                        <p className="card-body">As opportunities turn into pipeline, we continuously optimize campaigns, improve performance, and scale what works to help drive sustainable revenue growth and stronger ROI.</p>
                        <div className="card-dots">
                            <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
                        </div>
                    </div>
                </div>

                <div className="expectation-strip">
                    <div className="expect-main">
                        <div className="expect-icon-box">
                            <i className="ph-bold ph-target"></i>
                        </div>
                        <div className="expect-content">
                            <h3>What You Can Expect</h3>
                            <p>Real results. Measurable growth.<br/>Stronger pipeline.</p>
                        </div>
                    </div>
                    <div className="expect-items">
                        <div className="expect-item i1">
                            <div className="expect-item-icon">
                                <i className="ph-bold ph-user-plus"></i>
                            </div>
                            <div className="expect-item-title">More Qualified Meetings</div>
                        </div>
                        <div className="expect-item i2">
                            <div className="expect-item-icon">
                                <i className="ph-bold ph-chat-circle-dots"></i>
                            </div>
                            <div className="expect-item-title">Better Conversations with Decision-Makers</div>
                        </div>
                        <div className="expect-item i3">
                            <div className="expect-item-icon">
                                <i className="ph-bold ph-funnel"></i>
                            </div>
                            <div className="expect-item-title">Stronger Sales Pipeline</div>
                        </div>
                        <div className="expect-item i4">
                            <div className="expect-item-icon">
                                <i className="ph-bold ph-chart-bar"></i>
                            </div>
                            <div className="expect-item-title">Predictable Demand Generation</div>
                        </div>
                        <div className="expect-item i5">
                            <div className="expect-item-icon">
                                <i className="ph-bold ph-trend-up"></i>
                            </div>
                            <div className="expect-item-title">Faster Revenue Growth</div>
                        </div>
                        <div className="expect-item i6">
                            <div className="expect-item-icon">
                                <i className="ph-bold ph-crown"></i>
                            </div>
                            <div className="expect-item-title">Up to 5X ROI</div>
                        </div>
                    </div>
                </div>

                <div className="closing-statement">
                    <i className="ph-fill ph-star"></i>
                    <span>From First Conversation to Revenue Growth — Funnl Helps You Build a Growth Engine That Scales.</span>
                    <i className="ph-fill ph-star"></i>
                </div>

            </div>
        </section>
    );
};

export default Section3;

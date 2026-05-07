import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Megaphone,
  Briefcase,
  Clock,
  TrendingUp,
  ShieldCheck,
  Activity,
  Zap,
  MessageSquare
} from 'lucide-react';

const C = {
  bg: '#FDFAF6',
  surface: '#FDFAF6',
  text: '#0A0A0A',
  muted: '#6B7A8A',
  border: 'rgba(26,42,62,0.15)',
  tableLine: 'rgba(26,42,62,0.1)',
  accent: '#A51C30',
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: C.bg, color: C.text }}>

      {/* Navigation */}
      <nav style={{ background: C.bg, }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" onClick={() => { window.location.href = window.location.pathname; }} className="font-logo font-bold text-2xl tracking-tight" style={{ color: C.text }}>
              Aeromatic
            </Link>
            <Link to="/book" className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-medium transition-all" style={{ background: C.text, color: C.bg }}>
              Book a strategy call
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8" style={{ color: C.text, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Turn your webinar talks into predictable revenue
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: C.text }}>
              We fill your B2B webinars with your Ideal Customer Profile using a proprietary blend of AI-targeted ads and precision outbound.
            </p>
            <Link to="/book" className="inline-flex px-8 py-4 rounded-full font-medium items-center gap-2 group transition-all" style={{ background: C.text, color: C.bg }}>
              Book a strategy call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-xs md:text-sm font-medium tracking-wider" style={{ color: C.text }}>5,000+ seats filled</p>

            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <p className="text-xs md:text-sm font-medium tracking-wider" style={{ color: C.text }}>Trusted by speakers from</p>
              </div>
              <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-10 lg:gap-12 overflow-x-auto no-scrollbar py-4">
                {[
                  { src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg", alt: "Google", h: "h-4 md:h-7" },
                  { src: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg", alt: "Stripe", h: "h-4 md:h-7" },
                  { src: "https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg", alt: "Nvidia", h: "h-3 md:h-[1.4rem]" },
                  { src: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg", alt: "Amazon", h: "h-4 md:h-7" },
                  { src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg", alt: "Microsoft", h: "h-[1.1rem] md:h-8" },
                  { src: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg", alt: "HubSpot", h: "h-4 md:h-7" },
                ].map(logo => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} className={`${logo.h} flex-shrink-0 object-contain`} style={{ filter: 'brightness(0)' }} referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight" style={{ color: C.text }}>
                You're paying for leads. <br />
                <span style={{ color: C.text }}>But are they showing up?</span>
              </h2>
              <p className="leading-relaxed" style={{ color: C.text }}>
                Most B2B companies face a silent conversion killer: highly-paid executives hosting webinars where the only attendees are competitors or unqualified leads.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Low registration-to-attendee ratios",
                  "Sales team complaining about lead quality",
                  "Wasted ad spend on broad targeting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(14,165,233,0.15)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />
                    </div>
                    <span style={{ color: C.text }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span style={{ color: C.text }}>Industry Average Attendance</span>
                    <span style={{ color: C.text }}>41.6%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ background: 'rgba(26,42,62,0.1)' }}>
                    <div className="h-2 rounded-full" style={{ width: '41.6%', background: C.muted }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="font-bold" style={{ color: '#1A7A4A' }}>Aeromatic Average</span>
                    <span className="font-bold" style={{ color: '#1A7A4A' }}>70%+</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ background: 'rgba(26,42,62,0.1)' }}>
                    <div className="h-2 rounded-full" style={{ width: '70%', background: '#1A7A4A' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Table */}
      <section id="impact" className="py-24" style={{ background: C.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6" style={{ color: C.text }}>
              The impact of <br /> a full room.
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: C.text }}>
              Filling your seats isn't just about attendance. It's about the fundamental unit economics of your business.
            </p>
          </div>

          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.tableLine}`, background: C.bg }}>
            <div className="grid lg:grid-cols-4 hidden lg:grid text-sm font-medium" style={{ borderBottom: `1px solid ${C.tableLine}`, color: C.text, background: 'rgba(26,42,62,0.03)' }}>
              <div className="p-6" style={{ borderRight: `1px solid ${C.tableLine}` }}>Core Metric</div>
              <div className="p-6" style={{ borderRight: `1px solid ${C.tableLine}` }}>Performance</div>
              <div className="p-6 col-span-2">Why it matters</div>
            </div>
            {[
              { metric: "Pipeline Velocity", stat: "30–50% Faster", desc: "Cuts sales cycles in half by building trust before the first call.", icon: <Clock className="w-5 h-5" style={{ color: C.accent }} /> },
              { metric: "Contract Value", stat: "14% Increase", desc: "Authority-led selling removes the commodity price trap.", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
              { metric: "First-Year Churn", stat: "25% Reduction", desc: "Educated customers have a higher success rate and stay longer.", icon: <ShieldCheck className="w-5 h-5 text-rose-400" /> },
              { metric: "Customer Retention", stat: "20% Improvement", desc: "Prospects who buy the vision are significantly stickier.", icon: <Users className="w-5 h-5 text-blue-400" /> },
              { metric: "Conversion Rate", stat: "38% MQL Rate", desc: "Outperforms standard ads by a factor of 40x.", icon: <Activity className="w-5 h-5 text-amber-400" /> }
            ].map((row, i) => (
              <div key={i} className="grid md:grid-cols-2 lg:grid-cols-4" style={{ borderBottom: `1px solid ${C.tableLine}` }}>
                <div className="p-6 flex items-center gap-3" style={{ borderRight: `1px solid ${C.tableLine}` }}>
                  {row.icon}
                  <span className="font-semibold" style={{ color: C.text }}>{row.metric}</span>
                </div>
                <div className="p-6 flex items-center" style={{ borderRight: `1px solid ${C.tableLine}` }}>
                  <span className="text-xl font-bold font-display" style={{ color: C.text }}>{row.stat}</span>
                </div>
                <div className="p-6 lg:col-span-2 flex items-center text-sm leading-relaxed" style={{ color: C.text }}>
                  {row.desc}
                </div>
              </div>
            ))}
            <div className="px-6 py-4" style={{ background: 'rgba(26,42,62,0.03)' }}>
              <p className="text-[10px] leading-relaxed" style={{ color: C.text, opacity: 0.8 }}>
                <sup>1</sup> Martal Group 2026 Benchmarks &nbsp;·&nbsp; <sup>2</sup> Industry Average for Authority-led B2B Sales &nbsp;·&nbsp; <sup>3</sup> Pendo/Directive 2026 Engagement Study &nbsp;·&nbsp; <sup>4</sup> Gainsight/Customer Success Benchmarks &nbsp;·&nbsp; <sup>5</sup> ON24 Global Webinar Report 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
            <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4" style={{ color: C.text }}>
              A scientific approach <br /> to seat filling.
            </h3>
            <p style={{ color: C.text }}>The three-stage engine that turns cold market fragments into a warm, captive audience.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Target className="w-6 h-6" style={{ color: C.accent }} />, title: "Hyper-Targeted Ads", desc: "We leverage AI to identify the 3% of your market that is in-market right now, bypassing standard demographic filters to find actual buyer intent." },
                { icon: <Megaphone className="w-6 h-6" style={{ color: C.accent }} />, title: "Precision Outbound", desc: "Simultaneous to ads, our SDR team launches highly personalized, account-based outbound sequences inviting your exact ideal prospects." },
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-[2rem]" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14,165,233,0.15)' }}>
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: C.text }}>{card.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.text }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Retrofuturistic circuit-trace connector */}
            <div className="hidden md:block w-full" style={{ height: '80px' }}>
              <svg width="100%" height="80">
                <line x1="25%" y1="0" x2="25%" y2="44" stroke={C.accent} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 4" />
                <line x1="75%" y1="0" x2="75%" y2="44" stroke={C.accent} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 4" />
                <line x1="25%" y1="44" x2="75%" y2="44" stroke={C.accent} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 4" />
                <line x1="50%" y1="44" x2="50%" y2="80" stroke={C.accent} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 4" />
                <circle cx="25%" cy="0" r="3" fill={C.accent} fillOpacity="0.4" />
                <circle cx="75%" cy="0" r="3" fill={C.accent} fillOpacity="0.4" />
                <circle cx="50%" cy="44" r="4" fill={C.accent} fillOpacity="0.65" />
              </svg>
            </div>
            <div className="md:hidden flex justify-center">
              <div className="w-px h-12" style={{ background: C.border }}></div>
            </div>

            <div className="flex flex-col items-center mb-12">
              <div className="p-8 md:p-10 rounded-[2.5rem] text-center max-w-lg" style={{ background: C.text, color: C.bg }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(244,246,250,0.15)' }}>
                  <Zap className="w-8 h-8" style={{ color: C.bg }} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Attendance Logic</h4>
                <p className="leading-relaxed text-sm md:text-base" style={{ color: 'rgba(250,250,247,0.85)' }}>
                  Most webinars lose half their signups to no-shows. We engineer the reminder sequences and technical lift that get your room full on the day.
                </p>
              </div>
              <svg width="1" height="48" style={{ overflow: 'visible' }}>
                <line x1="0" y1="0" x2="0" y2="48" stroke={C.accent} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 4" />
                <circle cx="0" cy="48" r="3" fill={C.accent} fillOpacity="0.65" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                <span className="font-display font-bold text-xl md:text-2xl tracking-tight" style={{ color: C.text }}>Your session: Full of ICP buyers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us + PDF */}
      <section id="features" className="py-24 overflow-hidden" style={{ background: C.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6" style={{ color: C.text }}>
                Why growing B2B teams use Aeromatic.
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: C.text }}>
                We handle the end-to-end recruitment process so your team can focus on what they do best: presenting brilliant webinars and closing deals.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Briefcase className="w-5 h-5" style={{ color: C.accent }} />, title: "B2B Exclusivity", desc: "We exclusively understand the nuances of complex B2B sales and how to capture enterprise attention." },
                  { icon: <CheckCircle2 className="w-5 h-5" style={{ color: C.accent }} />, title: "Performance Reports", desc: "Know exactly who's in the room before the session starts. Track registrations by account, spot patterns, and turn attendance data into pipeline intelligence." },
                  { icon: <MessageSquare className="w-5 h-5" style={{ color: C.accent }} />, title: "Slack Real-Time Notifications", desc: "Get an instant Slack ping every time a qualified prospect from your target list registers for your session." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 p-2 rounded-lg shrink-0 h-fit" style={{ background: 'rgba(14,165,233,0.15)' }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: C.text }}>{feature.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: C.text }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF report */}
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <div className="p-8" style={{ background: '#FEFEFE' }}>
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-slate-200">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Aeromatic</div>
                    <div className="text-xl font-bold text-slate-900">Webinar Performance Report</div>
                    <div className="text-sm text-slate-500 mt-1">Q2 2026 · Enterprise Growth Series</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">Generated</div>
                    <div className="text-sm font-medium text-slate-600">May 6, 2026</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Attendees", value: "87" },
                    { label: "New Pipeline", value: "$740k", sub: "+18% vs last report" },
                    { label: "ICP Match Rate", value: "97%" },
                  ].map((m, i) => (
                    <div key={i} className="border border-stone-200 rounded-lg p-4 bg-stone-50">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{m.label}</div>
                      <div className="text-2xl font-bold text-slate-900">{m.value}</div>
                      {m.sub && <div className="text-[10px] text-emerald-600 font-medium mt-0.5">{m.sub}</div>}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Registrants</div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 pb-2">Role</th>
                        <th className="text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 pb-2">Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { role: "VP of Marketing", co: "Acme Corp" },
                        { role: "Director of Product", co: "Nexus" },
                        { role: "Chief Revenue Officer", co: "Pinnacle" },
                      ].map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-100">
                          <td className="py-2.5 font-medium text-slate-800">{item.role}</td>
                          <td className="py-2.5 text-slate-500">{item.co}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8" style={{ color: C.text }}>
            Ready to fill your next webinar?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: C.text }}>
            Book a free strategy session with our team. We'll map out the exact outbound and ad strategy required to fill your room with buyers.
          </p>
          <Link to="/book" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-medium text-lg transition-all group" style={{ background: C.text, color: C.bg }}>
            Book a strategy call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="mt-6 text-sm font-medium" style={{ color: C.text }}>
            No commitment required. We'll review your ICP and share a tactical plan.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ background: C.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-sm" style={{ color: C.muted }}>
            © 2026 CoFi Labs Inc. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm" style={{ color: C.muted }}>
            <Link to="/privacy" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.8 }}>Privacy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.8 }}>Terms</Link>
            <a href="https://form.typeform.com/to/vkd6h4UT" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.8 }}>Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

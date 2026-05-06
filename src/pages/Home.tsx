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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" onClick={() => { window.location.href = window.location.pathname; }} className="font-display font-bold text-xl tracking-tight text-slate-900">
                Sessionomics
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/book" className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-slate-900 transition-all">
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-slate-900 mb-8">
              Turn your webinar talks into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">predictable revenue</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-900 mb-10 max-w-2xl mx-auto leading-relaxed">
              We pack your B2B webinars with your exact Ideal Customer Profile using a proprietary blend of AI-targeted ads and precision outbound.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group">
                Book a strategy call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex flex-col items-center gap-1">
                <p className="tracking-wider text-xs md:text-sm text-slate-900 font-medium">5,000+ seats filled</p>
                <p className="tracking-wider text-xs md:text-sm text-slate-900 font-medium">Trusted by speakers from</p>
              </div>
              <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-10 lg:gap-12 grayscale brightness-0 transition-all duration-700 overflow-x-auto no-scrollbar py-4">
                <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google" className="h-4 md:h-7 flex-shrink-0 object-contain" referrerPolicy="no-referrer" />
                <img src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" alt="Stripe" className="h-4 md:h-7 flex-shrink-0 object-contain" referrerPolicy="no-referrer" />
                <img src="https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg" alt="Nvidia" className="h-3 md:h-[1.4rem] flex-shrink-0 object-contain" referrerPolicy="no-referrer" />
                <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="Amazon" className="h-4 md:h-7 flex-shrink-0 object-contain" referrerPolicy="no-referrer" />
                <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" alt="Microsoft" className="h-[1.1rem] md:h-8 flex-shrink-0 object-contain" referrerPolicy="no-referrer" />
                <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg" alt="HubSpot" className="h-4 md:h-7 flex-shrink-0 object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / The Problem */}
      <section className="py-20 bg-white border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
                You're paying for leads. <br />
                <span className="text-slate-400">But are they showing up?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Most B2B companies face a silent conversion killer: highly-paid executives hosting webinars where the only attendees are competitors or unqualified leads.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Low registration-to-attendee ratios",
                  "Sales team complaining about lead quality",
                  "Wasted ad spend on broad targeting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-500">Industry Average Attendance</span>
                    <span className="text-slate-900">41.6%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-400 h-2 rounded-full" style={{ width: '41.6%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-indigo-600 font-bold">Sessionomics Average</span>
                    <span className="text-indigo-600 font-bold">70%+</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 relative">
                    <div className="absolute inset-0 bg-indigo-100 rounded-full animate-pulse"></div>
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full relative z-10" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact of a Full Room Section */}
      <section id="impact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight mb-6 text-balance">
              The impact of <br /> a full room.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Filling your seats isn't just about attendance. <br className="hidden md:block" /> It's about the fundamental unit economics of your business.
            </p>
          </div>

          <div className="max-w-6xl mx-auto rounded-3xl border border-slate-200 bg-white overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/50 text-sm font-medium text-slate-500">
              <div className="p-6 lg:col-span-1 hidden lg:block">Core Metric</div>
              <div className="p-6 lg:col-span-1 hidden lg:block">Performance</div>
              <div className="p-6 lg:col-span-2 hidden lg:block">Why it matters</div>
            </div>

            <div className="divide-y divide-slate-100">
              {[
                { metric: "Pipeline Velocity", stat: "30–50% Faster", desc: "Cuts sales cycles in half by building trust before the first call.", icon: <Clock className="w-5 h-5 text-indigo-500" />, bar: 50, color: "bg-emerald-500" },
                { metric: "Contract Value", stat: "14% Increase", desc: "Authority-led selling removes the commodity price trap.", icon: <TrendingUp className="w-5 h-5 text-emerald-500" />, bar: 14, color: "bg-emerald-500" },
                { metric: "First-Year Churn", stat: "25% Reduction", desc: "Educated customers have a higher success rate and stay longer.", icon: <ShieldCheck className="w-5 h-5 text-rose-500" />, bar: 25, color: "bg-emerald-500" },
                { metric: "Customer Retention", stat: "20% Improvement", desc: "Prospects who buy the vision are significantly stickier.", icon: <Users className="w-5 h-5 text-blue-500" />, bar: 20, color: "bg-emerald-500" },
                { metric: "Conversion Rate", stat: "38% MQL Rate", desc: "Outperforms standard ads by a factor of 40x.", icon: <Activity className="w-5 h-5 text-amber-500" />, bar: 38, color: "bg-emerald-500" }
              ].map((row, i) => (
                <div key={i} className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 hover:bg-slate-50/50 transition-colors">
                  <div className="p-6 lg:col-span-1 flex items-center gap-3">
                    {row.icon}
                    <span className="font-semibold text-slate-900">{row.metric}</span>
                  </div>
                  <div className="p-6 lg:col-span-1 flex items-center">
                    <span className="text-xl font-bold font-display text-slate-900">{row.stat}</span>
                  </div>
                  <div className="p-6 lg:col-span-2 flex items-center text-slate-900 leading-relaxed text-sm">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50">
              <p className="text-[10px] text-slate-400 leading-relaxed">
                <sup>1</sup> Martal Group 2026 Benchmarks &nbsp;·&nbsp; <sup>2</sup> Industry Average for Authority-led B2B Sales &nbsp;·&nbsp; <sup>3</sup> Pendo/Directive 2026 Engagement Study &nbsp;·&nbsp; <sup>4</sup> Gainsight/Customer Success Benchmarks &nbsp;·&nbsp; <sup>5</sup> ON24 Global Webinar Report 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works (Lead Flow Diagram) */}
      <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
            <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight mb-4">
              A scientific approach <br /> to seat filling.
            </h3>
            <p className="text-slate-600">The three-stage engine that turns cold market fragments into a warm, captive audience.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* The Engine Diagram */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {/* Input 1: Ads */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 relative group hover:border-indigo-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Hyper-Targeted Ads</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  We leverage AI to identify the 3% of your market that is in-market right now, bypassing standard demographic filters to find actual buyer intent.
                </p>
                {/* Connector Line to Logic (Hidden on mobile) */}
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-slate-200 group-hover:bg-indigo-200"></div>
              </div>

              {/* Input 2: Outbound */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 relative group hover:border-indigo-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Precision Outbound</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Simultaneous to ads, our SDR team launches highly personalized, account-based outbound sequences inviting your exact ideal prospects.
                </p>
                {/* Connector Line to Logic (Hidden on mobile) */}
                <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-px bg-slate-200 group-hover:bg-indigo-200"></div>
              </div>
            </div>

            {/* Central Processing: Attendance Logic */}
            <div className="flex flex-col items-center mt-12 mb-12 relative z-10">
              <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-indigo-500" />
              <div className="bg-indigo-600 text-white p-8 md:p-10 rounded-[2.5rem] text-center max-w-lg relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-700 -z-10" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Attendance Logic</h4>
                <p className="text-indigo-100/80 leading-relaxed text-sm md:text-base">
                  Getting a signup is easy. Getting them to attend is hard. We handle the technical heavy lifting and reminder sequences to make sure they show up.
                </p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-emerald-500" />
            </div>

            {/* Output: The Opportunity */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />
                <span className="font-display font-bold text-xl md:text-2xl text-slate-900 tracking-tight">Your session: Full of ICP buyers</span>
              </div>
              
            </div>

            {/* Background elements to enhance the diagram feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-0">
              <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 50 L 100 50" stroke="#6366f1" strokeWidth="0.1" strokeDasharray="1 2" />
                <path d="M 50 0 L 50 100" stroke="#6366f1" strokeWidth="0.1" strokeDasharray="1 2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Dashboard Preview */}
      <section id="features" className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6">
                Why growing B2B teams use Sessionomics.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We handle the end-to-end recruitment process so your team can focus on what they do best: presenting brilliant webinars and closing deals.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
                    title: "B2B Exclusivity",
                    desc: "We exclusively understand the nuances of complex B2B sales and how to capture enterprise attention."
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-indigo-400" />,
                    title: "Performance Reports",
                    desc: "Know exactly who's in the room before the session starts. Track registrations by account, spot patterns, and turn attendance data into pipeline intelligence."
                  },
                  {
                    icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
                    title: "Slack Real-Time Notifications",
                    desc: "Get an instant Slack ping every time a qualified prospect from your target list registers for your session."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 p-2 bg-white/5 rounded-lg shrink-0 h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">{feature.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 p-2">
              <div className="bg-slate-950 rounded-xl p-6 relative border border-white/5">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">Sample Performance Report</span>
                  </div>
                </div>
                
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/[0.03] rounded-xl p-4">
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Attendees</div>
                    <div className="text-2xl font-bold text-white">42</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-4">
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">New Pipeline</div>
                    <div className="text-2xl font-bold text-white">$420k</div>
                    <div className="text-[10px] text-emerald-400">+14% vs Last Report</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-4">
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">ICP Match Rate</div>
                    <div className="text-2xl font-bold text-white">97%</div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Registrants</div>
                  <div className="grid gap-3">
                    {[
                      { role: "VP of Marketing", co: "Acme Corp" },
                      { role: "Director of Product", co: "Nexus" },
                      { role: "Chief Revenue Officer", co: "Pinnacle" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                        <span className="text-sm font-medium text-slate-200">{item.role}</span>
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">@ {item.co}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="book" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-slate-900 mb-8">
              Ready to pack your next webinar?
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              Book a free strategy session with our team. We'll map out the exact outbound and ad strategy required to fill your room with buyers.
            </p>
            
            <Link to="/book" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-indigo-600 text-white font-medium text-lg hover:bg-slate-900 transition-all group">
              Book a strategy call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="mt-6 text-slate-500 font-medium text-sm">
              No commitment required. We'll review your ICP and share a tactical plan.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-bold text-lg text-slate-900 tracking-tight">Sessionomics</span>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-900">Terms</Link>
            <a href="https://form.typeform.com/to/vkd6h4UT" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">Contact</a>
          </div>
          <div className="text-sm text-slate-400">
            © 2026 CoFi Labs Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

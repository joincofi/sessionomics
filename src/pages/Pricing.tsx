import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const C = {
  bg: '#FDFAF6',
  surface: '#FDFAF6',
  text: '#0A0A0A',
  muted: '#6B7A8A',
  border: 'rgba(10,10,10,0.12)',
  tableLine: 'rgba(10,10,10,0.08)',
  accent: '#A51C30',
};

const features = [
  'Branded signup page on aeromatic.ai/sessions/[your-company]',
  'LinkedIn ad campaign, creative built by us',
  'Outbound to your named accounts',
  'Real-time lead delivery to your CRM',
  'Reminder cadence + day-of execution',
  'Recording archive on aeromatic.ai',
  '60+ ICP registrations or your money back',
  'Done in 21 days from signature',
];

const faq = [
  {
    q: 'What do you actually need from me?',
    a: 'A date, a Zoom link, a 1-paragraph brief on your ICP, and your speaker info. Total client time: about 30 minutes.',
  },
  {
    q: 'How do you guarantee 60+ ICP registrations?',
    a: 'We build a named account list, run targeted LinkedIn ads, and layer in cold email outreach to your ICP. If we miss 60, we run the campaign again at our cost.',
  },
  {
    q: 'Where does the signup page live?',
    a: 'On aeromatic.ai/sessions/[your-company]/[event-slug]. Branded with your logo and speaker. The page lives forever, indexed for SEO, and becomes a permanent asset.',
  },
  {
    q: 'How do I get the registration data?',
    a: 'Real-time webhook to your CRM (HubSpot, Salesforce, whatever you use). Or daily email digest. Your call.',
  },
  {
    q: 'Can I run multiple sessions?',
    a: 'Absolutely. Volume pricing kicks in at 4+ sessions. Reach out and we will work it out on a call.',
  },
  {
    q: 'How fast can we start?',
    a: 'Sign today, page live in 24 hours, ads launch within 3 days, webinar runs 21 days from signature.',
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen font-sans" style={{ background: C.bg, color: C.text }}>
      <nav style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-logo font-bold text-2xl tracking-tight" style={{ color: C.text }}>
              Aeromatic
            </Link>
            <Link to="/book" className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-medium transition-all" style={{ background: C.text, color: C.bg }}>
              Book a strategy call
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-12 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase" style={{ background: 'rgba(165,28,48,0.08)', color: C.accent }}>
            Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-6" style={{ color: C.text, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            One price. One outcome.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: C.text }}>
            You give us a date. We fill the room with your ICP buyers. The page lives forever on aeromatic.ai.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 md:p-12 rounded-3xl" style={{ background: C.text, color: C.bg, border: `1px solid ${C.text}` }}>
            <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'rgba(253,250,246,0.6)' }}>
              Per session
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-7xl font-bold font-display" style={{ color: C.bg }}>$15k</span>
              <span className="text-base" style={{ color: 'rgba(253,250,246,0.6)' }}>flat fee</span>
            </div>
            <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgba(253,250,246,0.85)' }}>
              60+ ICP registrations delivered to your CRM. Permanent asset on aeromatic.ai. 21-day turnaround. Money back if we miss the target.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: C.bg }} />
                  <span style={{ color: 'rgba(253,250,246,0.95)' }}>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-base transition-all w-full"
              style={{ background: C.bg, color: C.text }}
            >
              Book a strategy call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-center text-sm mt-6" style={{ color: C.muted }}>
            Running 4+ sessions? We have volume pricing. Mention it on the call.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium tracking-widest uppercase mb-4 text-center" style={{ color: C.accent }}>How it works</div>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-12 text-center" style={{ color: C.text }}>
            Send a date. Get a packed room.
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Sign + brief', desc: 'You send a date, Zoom link, speaker info, and a 1-paragraph brief on your ICP. 30 minutes total.' },
              { step: '02', title: 'Page goes live', desc: 'Branded signup page on aeromatic.ai/sessions, with embedded registration. Live in 24 hours.' },
              { step: '03', title: 'We drive traffic', desc: 'Targeted LinkedIn ads, cold email to your named accounts, and reminder cadence to registrants.' },
              { step: '04', title: 'Leads to your CRM', desc: 'Real-time webhook delivery as registrations come in. Recording archived after the session.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                <div className="text-xs font-medium tracking-widest mb-3" style={{ color: C.accent }}>{item.step}</div>
                <div className="font-bold font-display text-lg mb-2" style={{ color: C.text }}>{item.title}</div>
                <p className="text-sm leading-relaxed" style={{ color: C.text }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium tracking-widest uppercase mb-4 text-center" style={{ color: C.accent }}>FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-12 text-center" style={{ color: C.text }}>
            Common questions.
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                <div className="font-bold font-display text-lg mb-3" style={{ color: C.text }}>{item.q}</div>
                <p className="leading-relaxed" style={{ color: C.text }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6" style={{ color: C.text }}>
            Ready to fill your next webinar?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: C.text }}>
            Book a 15-minute call. We will map out the session and the audience. Zero commitment.
          </p>
          <Link to="/book" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-medium text-lg transition-all group" style={{ background: C.text, color: C.bg }}>
            Book a strategy call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-sm" style={{ color: C.muted }}>
            © {new Date().getFullYear()} CoFi Labs Inc.
          </div>
          <div className="flex gap-8 text-sm" style={{ color: C.muted }}>
            <Link to="/privacy" style={{ opacity: 0.8 }}>Privacy</Link>
            <Link to="/terms" style={{ opacity: 0.8 }}>Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

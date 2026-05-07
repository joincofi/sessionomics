import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { prospects } from '../data/prospects';

const C = {
  bg: '#FDFAF6',
  surface: '#FDFAF6',
  text: '#0A0A0A',
  muted: '#6B7A8A',
  border: 'rgba(10,10,10,0.12)',
  tableLine: 'rgba(10,10,10,0.08)',
  accent: '#A51C30',
};

export default function Prospect() {
  const { slug } = useParams<{ slug: string }>();
  const p = slug ? prospects[slug.toLowerCase()] : null;

  if (!p) return <Navigate to="/" replace />;

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

      <section className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase" style={{ background: 'rgba(165,28,48,0.08)', color: C.accent }}>
            Custom plan · Built for {p.company}
          </div>
          {p.logoUrl && (
            <div className="flex justify-center mb-8">
              <img src={p.logoUrl} alt={p.company} className="h-10 md:h-14" style={{ filter: 'brightness(0)' }} referrerPolicy="no-referrer" />
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-6" style={{ color: C.text, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            {p.contactFirstName ? `${p.contactFirstName}, here's how we'd fill ${p.company}'s next session.` : `How we'd fill ${p.company}'s next session.`}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: C.text }}>
            {p.intro}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Projected attendees', value: p.projection.attendees, icon: <Users className="w-5 h-5" style={{ color: '#0F6B6B' }} /> },
              { label: 'New pipeline', value: p.projection.pipeline, icon: <TrendingUp className="w-5 h-5" style={{ color: '#0F6B6B' }} /> },
              { label: 'ICP match rate', value: p.projection.icpRate, icon: <Target className="w-5 h-5" style={{ color: '#0F6B6B' }} /> },
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-3xl" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(15,107,107,0.1)' }}>
                  {m.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold font-display mb-2" style={{ color: C.text }}>{m.value}</div>
                <div className="text-sm" style={{ color: C.muted }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: C.accent }}>01 · The ICP</div>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-6" style={{ color: C.text }}>
            Who we're putting in the room.
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: C.text }}>{p.icp.summary}</p>
          <ul className="space-y-4">
            {p.icp.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(165,28,48,0.1)' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />
                </div>
                <span style={{ color: C.text }}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: C.accent }}>02 · The session</div>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-8" style={{ color: C.text }}>
            The angle that gets them to register.
          </h2>
          <div className="rounded-3xl p-8 md:p-10 space-y-6" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
            <div>
              <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: C.muted }}>Topic</div>
              <div className="text-xl md:text-2xl font-bold font-display" style={{ color: C.text }}>{p.session.topic}</div>
            </div>
            <div className="pt-6" style={{ borderTop: `1px solid ${C.tableLine}` }}>
              <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: C.muted }}>Hook</div>
              <p style={{ color: C.text }}>{p.session.hook}</p>
            </div>
            <div className="pt-6" style={{ borderTop: `1px solid ${C.tableLine}` }}>
              <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: C.muted }}>Format</div>
              <p style={{ color: C.text }}>{p.session.format}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: C.accent }}>03 · Sample target accounts</div>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-3" style={{ color: C.text }}>
            10 accounts we'd start with.
          </h2>
          <p className="text-sm mb-8" style={{ color: C.muted }}>A sample of the named accounts we'd target. The full pull runs 600-900 companies.</p>
          <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.tableLine}`, background: C.bg }}>
            {p.accounts.map((account, i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4" style={{ borderBottom: i < p.accounts.length - 1 ? `1px solid ${C.tableLine}` : 'none' }}>
                <div className="text-xs font-medium tracking-widest" style={{ color: C.muted, minWidth: '24px' }}>{String(i + 1).padStart(2, '0')}</div>
                <div className="font-medium" style={{ color: C.text }}>{account}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6" style={{ color: C.text }}>
            Want to lock in the playbook?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: C.text }}>
            Grab 15 minutes and I'll walk you through the full plan: accounts, ad creative, outbound sequences, and timeline.
          </p>
          <Link to="/book" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-medium text-lg transition-all group" style={{ background: C.text, color: C.bg }}>
            Book the walkthrough
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm" style={{ color: C.muted }}>
            <CheckCircle2 className="w-4 h-4" />
            No commitment. We'll review the plan and adapt it live.
          </div>
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

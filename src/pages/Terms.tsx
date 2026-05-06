import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group font-display font-bold text-xl text-slate-900 tracking-tight">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-slate-400" />
            <span>Sessionomics</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div
        >
          <h1 className="text-4xl font-bold font-display text-slate-900 tracking-tight mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 mb-6">Last updated: May 6, 2026</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600">
                By accessing or using the services provided by CoFi Labs Inc., you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p className="text-slate-600">
                We provide B2B marketing and audience generation services. While we strive for excellence, we do not guarantee specific business outcomes or revenue targets unless explicitly stated in a separate service agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Performance Guarantee</h2>
              <p className="text-slate-600">
                Our policy is: "If you're not satisfied with your leads, you don't pay." This applies to the service fee for individual sessions as specified at the time of booking. Details regarding the definition of "satisfied" and the refund process will be handled on a case-by-case basis through direct communication.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p className="text-slate-600">
                All content and materials provided as part of our services, including but not limited to strategy documents and reports, are the intellectual property of CoFi Labs Inc. unless otherwise agreed upon in writing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-slate-600">
                To the maximum extent permitted by law, CoFi Labs Inc. shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these terms at any time. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;

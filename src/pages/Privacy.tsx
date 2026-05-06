import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
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
          <h1 className="text-4xl font-bold font-display text-slate-900 tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 mb-6">Last updated: May 6, 2026</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-600">
                CoFi Labs Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our website and services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information that you provide directly to us, such as when you book a session, sign up for our newsletter, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Name and contact information</li>
                <li>Professional details (company name, job title)</li>
                <li>Project requirements and business goals</li>
                <li>Communication history with us</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Information</h2>
              <p className="text-slate-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide and improve our services</li>
                <li>Process your bookings and payments</li>
                <li>Communicate with you about our services</li>
                <li>Analyze how our website is used</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing of Information</h2>
              <p className="text-slate-600">
                We do not sell your personal information. We may share your information with service providers who help us operate our business, or as required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p className="text-slate-600">
                You have the right to access, update, or delete your personal information. Please contact us if you would like to exercise these rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, please contact us at: farid@joincofi.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;

import { LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

const privacySections = [
  {
    title: 'Information we collect',
    content:
      'We collect the details you share with us when you submit enquiries, request bookings, subscribe to updates, or contact our team. This can include your name, email, phone number, travel preferences, and trip dates.',
  },
  {
    title: 'How we use your information',
    content:
      'Your information helps us respond to travel requests, prepare quotations, confirm bookings, improve the website experience, and send relevant service communication. We use only the details needed to support your journey with us.',
  },
  {
    title: 'When we share data',
    content:
      'We may share limited booking-related information with trusted hotel, transport, or activity partners only when needed to deliver the service you requested. We do not sell personal information to third parties.',
  },
  {
    title: 'Data protection and retention',
    content:
      'We use reasonable administrative and technical safeguards to protect personal information. Data is retained only for as long as necessary to support enquiries, bookings, customer support, or legal and accounting obligations.',
  },
  {
    title: 'Your choices',
    content:
      'You may contact us to review, update, or delete the personal information you have shared with us, subject to applicable legal requirements and any booking-related recordkeeping needs.',
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--surface-muted)]">
      <PageHero
        eyebrow="Privacy"
        title="Your travel information should be handled with care, clarity, and restraint."
        description="This page explains what information TravelPro collects, how it is used, and the steps we take to protect it in a straightforward, readable format."
        stats={['Updated for clear reading', 'Simple policy summary', 'Support available on request']}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-[var(--brand)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-strong)]">Privacy summary</h2>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                  <p>We collect only the information needed to respond, plan, and support bookings.</p>
                  <p>We do not sell personal information.</p>
                  <p>We share booking details only with trusted partners when the service requires it.</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <LockKeyhole className="h-6 w-6 text-[var(--brand)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-strong)]">Need help?</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                  If you want to update or remove your details, our support team can help review your request.
                </p>
                <a
                  href="mailto:info@travelpro.com"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-strong)]"
                >
                  <Mail className="h-4 w-4" />
                  info@travelpro.com
                </a>
              </div>
            </aside>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-[var(--text-strong)]">Privacy policy</h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                  TravelPro respects your privacy and is committed to protecting the information you share while browsing our website or using our travel services. The sections below explain our standard privacy approach in a cleaner and easier-to-understand format.
                </p>
              </div>

              {privacySections.map((section) => (
                <div key={section.title} className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[var(--text-strong)]">{section.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

import { BadgeCheck, CalendarRange, CircleAlert } from 'lucide-react';
import PageHero from '../components/PageHero';

const termsSections = [
  {
    title: 'Acceptance of terms',
    content:
      'By browsing this website or using TravelPro services, you agree to the terms, conditions, and service practices described on this page. Continued use of the website indicates acceptance of these terms.',
  },
  {
    title: 'Bookings and confirmations',
    content:
      'All bookings, quotations, and service requests are subject to availability and confirmation. Prices may change until the booking is confirmed, especially when third-party travel partners update rates or inventory.',
  },
  {
    title: 'Payments and pricing',
    content:
      'Payment schedules, deposits, taxes, and inclusions may vary depending on the selected package or service. Travelers are responsible for reviewing the final price summary before making payment.',
  },
  {
    title: 'Cancellations and modifications',
    content:
      'Cancellation and date-change rules depend on the product selected and partner policies. Some bookings may allow flexible cancellation, while others may carry charges after confirmation.',
  },
  {
    title: 'Traveler responsibilities',
    content:
      'Travelers are responsible for providing accurate names, contact details, travel dates, and any required documents. TravelPro is not liable for losses caused by incorrect information provided during booking.',
  },
  {
    title: 'Liability limits',
    content:
      'TravelPro acts as a planning and booking support platform. While we work with trusted partners, we are not responsible for delays, disruptions, or damages caused by weather, government action, transport issues, or third-party service failures beyond our direct control.',
  },
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[var(--surface-muted)]">
      <PageHero
        eyebrow="Terms"
        title="Clear service terms designed to be readable before a traveler commits."
        description="These terms outline how bookings, payments, cancellations, and service responsibilities are handled across the TravelPro experience."
        stats={['Readable legal layout', 'Booking-focused summary', 'Cleaner content hierarchy']}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-6 w-6 text-[var(--brand)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-strong)]">Terms summary</h2>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                  <p>Bookings are subject to availability and partner confirmation.</p>
                  <p>Pricing may change before final confirmation.</p>
                  <p>Cancellation rules depend on the selected service.</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CircleAlert className="h-6 w-6 text-[var(--accent)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-strong)]">Important note</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                  Always review your final booking summary, inclusions, and cancellation conditions before payment.
                </p>
              </div>
            </aside>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <CalendarRange className="h-5 w-5 text-[var(--brand)]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">
                    Service terms overview
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                  These terms are intended to help travelers understand the basic responsibilities of both TravelPro and the customer before a booking is placed. The goal is clarity, not complexity.
                </p>
              </div>

              {termsSections.map((section) => (
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

export default TermsConditions;

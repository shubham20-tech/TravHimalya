import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Hotels', path: '/search?type=hotel' },
    { name: 'Car Rental', path: '/search?type=car' },
    { name: 'Sightseeing Tours', path: '/search?type=tour' },
    { name: 'Travel Packages', path: '/search?type=all' },
  ];

  return (
    <footer className="border-t border-[var(--border-soft)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-sm lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="pill-tag">Plan better trips</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              Ready to start your journey with a cleaner, smarter itinerary?
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
              Tell us your budget, travel style, and dates. We will help you shortlist the right hotel, transport, and experiences in one place.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              to="/search"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore trips
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--text-strong)]"
            >
              Talk to our team
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f766e,#155e75)] text-lg font-bold text-white">
                T
              </div>
              <div>
                <div className="text-xl font-semibold text-[var(--text-strong)]">TravelPro</div>
                <div className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Curated travel planning</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-muted)]">
              TravelPro helps modern travelers compare stays, transport, and curated experiences with clearer guidance and meaningful local recommendations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">Company</h3>
            <div className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <Link to="/about" className="block hover:text-[var(--text-strong)]">About us</Link>
              <Link to="/why-choose-us" className="block hover:text-[var(--text-strong)]">Why choose us</Link>
              <Link to="/testimonials" className="block hover:text-[var(--text-strong)]">Testimonials</Link>
              <Link to="/blog" className="block hover:text-[var(--text-strong)]">Travel journal</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">Services</h3>
            <div className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              {services.map((service) => (
                <Link key={service.name} to={service.path} className="block hover:text-[var(--text-strong)]">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-[var(--text-muted)]">
              <a href="tel:+1234567890" className="flex items-start gap-3 hover:text-[var(--text-strong)]">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--brand)]" />
                <span>+1 (234) 567-8900</span>
              </a>
              <a href="mailto:info@travelpro.com" className="flex items-start gap-3 hover:text-[var(--text-strong)]">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--brand)]" />
                <span>info@travelpro.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand)]" />
                <span>123 Travel Street, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <div>© 2026 TravelPro. Thoughtful travel planning for modern explorers.</div>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="hover:text-[var(--text-strong)]">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-[var(--text-strong)]">Terms & Conditions</Link>
            <Link to="/faq" className="hover:text-[var(--text-strong)]">FAQ</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1 hover:text-[var(--text-strong)]"
            >
              Back to top
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, Search, X } from 'lucide-react';

const services = [
  {
    name: 'Hotels',
    description: 'Boutique stays, mountain resorts, and scenic retreats.',
    path: '/search?type=hotel',
  },
  {
    name: 'Car Rental',
    description: 'Private cabs and self-drive options for every route.',
    path: '/search?type=car',
  },
  {
    name: 'Sightseeing Tours',
    description: 'Guided local experiences, day trips, and excursions.',
    path: '/search?type=tour',
  },
  {
    name: 'Travel Packages',
    description: 'End-to-end itineraries with stays, transport, and support.',
    path: '/search?type=all',
  },
];

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname, location.search]);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname === '/search';

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f766e,#155e75)] text-lg font-bold text-white shadow-sm">
            T
          </div>
          <div>
            <div className="text-xl font-semibold tracking-tight text-[var(--text-strong)]">TravHimalya</div>
            <div className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Curated mountain journeys</div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-[var(--surface)] text-[var(--brand-strong)]'
                  : 'text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-strong)]'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div
            className="relative"
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((current) => !current)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isServicesActive
                  ? 'bg-[var(--surface)] text-[var(--brand-strong)]'
                  : 'text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-strong)]'
              }`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute right-0 top-full mt-3 w-[32rem] rounded-3xl border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">
                    Services
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Choose a service and we will open the search page with the matching results.
                  </p>
                </div>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="rounded-2xl border border-[var(--border-soft)] px-4 py-4 transition hover:border-[var(--brand)] hover:bg-[var(--surface-muted)]"
                    >
                      <div className="font-semibold text-[var(--text-strong)]">{service.name}</div>
                      <div className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{service.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/search"
            className="rounded-full border border-[var(--border-soft)] p-3 text-[var(--text-muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
            aria-label="Open search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-5 py-3 text-sm font-semibold uppercase !text-white shadow-sm transition hover:opacity-95"
          >
            <Phone className="h-4 w-4 text-white" />
            Speak to an expert
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-full border border-[var(--border-soft)] p-3 text-[var(--text-muted)] lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--border-soft)] bg-white px-4 py-5 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive(item.path) ? 'bg-[var(--surface)] text-[var(--brand-strong)]' : 'text-[var(--text-muted)]'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="rounded-3xl border border-[var(--border-soft)] p-4">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">
                Services
              </div>
              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block rounded-2xl bg-[var(--surface-muted)] px-4 py-3"
                  >
                    <div className="font-medium text-[var(--text-strong)]">{service.name}</div>
                    <div className="mt-1 text-sm text-[var(--text-muted)]">{service.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="tel:+1234567890"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Speak to an expert
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, CheckCircle2, Clock3, Heart, MapPin, Share2, Star, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import { packages } from '../data/mockData';

const PackageDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const pkg = packages.find((item) => item.id === id);

  if (!pkg) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--surface-muted)]">
        <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-[var(--text-strong)]">Package not found</h1>
          <Link to="/search" className="mt-4 inline-block text-sm font-semibold text-[var(--brand-strong)]">
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--surface-muted)]">
      <PageHero
        eyebrow="Package details"
        title={pkg.title}
        description={pkg.description}
        stats={[pkg.duration, `${pkg.rating} rating`, `${pkg.reviews} reviews`]}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            <section className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white shadow-sm">
              <div className="relative">
                <img src={pkg.images[selectedImage]} alt={pkg.title} className="h-[420px] w-full object-cover" />
                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[var(--brand-strong)]">
                  {pkg.duration}
                </div>
                <div className="absolute right-5 top-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsWishlisted((current) => !current)}
                    className={`rounded-full p-3 ${isWishlisted ? 'bg-rose-500 text-white' : 'bg-white/95 text-[var(--text-strong)]'}`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button type="button" className="rounded-full bg-white/95 p-3 text-[var(--text-strong)]">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="border-t border-[var(--border-soft)] p-5">
                <div className="flex gap-3 overflow-x-auto">
                  {pkg.images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`overflow-hidden rounded-2xl border ${
                        selectedImage === index ? 'border-[var(--brand)]' : 'border-[var(--border-soft)]'
                      }`}
                    >
                      <img src={image} alt={`${pkg.title} ${index + 1}`} className="h-20 w-24 object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--text-strong)]">Package overview</h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{pkg.description}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {pkg.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl bg-[var(--surface)] p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--brand)]" />
                      <span className="text-sm font-medium text-[var(--text-strong)]">{highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--text-strong)]">What’s included</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {pkg.included.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] px-4 py-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-[var(--text-strong)]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--text-strong)]">Day-wise itinerary</h2>
              <div className="mt-8 space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="grid gap-4 rounded-[1.5rem] border border-[var(--border-soft)] p-5 md:grid-cols-[64px_minmax(0,1fr)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-lg font-semibold text-[var(--brand-strong)]">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-strong)]">{day.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
              <div className="border-b border-[var(--border-soft)] pb-5">
                <div className="text-sm uppercase tracking-[0.24em] text-[var(--brand-strong)]">Starting from</div>
                <div className="mt-2 text-4xl font-semibold text-[var(--text-strong)]">₹{pkg.price.toLocaleString()}</div>
                <div className="text-sm text-[var(--text-muted)]">per person, with core inclusions</div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[var(--brand)]" />Duration</span>
                  <span className="font-medium text-[var(--text-strong)]">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand)]" />Destination</span>
                  <span className="font-medium text-[var(--text-strong)]">{pkg.destination}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-[var(--brand)]" />Group size</span>
                  <span className="font-medium text-[var(--text-strong)]">2 to 12 travelers</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-[var(--brand)]" />Best season</span>
                  <span className="font-medium text-[var(--text-strong)]">Year round</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-400" />Rating</span>
                  <span className="font-medium text-[var(--text-strong)]">{pkg.rating} / 5</span>
                </div>
              </div>

              <Link
                to={`/booking?package=${pkg.id}`}
                className="mt-6 block rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-5 py-4 text-center text-sm font-semibold text-white"
              >
                Book this package
              </Link>
              <Link
                to="/contact"
                className="mt-3 block rounded-full border border-[var(--border-soft)] px-5 py-4 text-center text-sm font-semibold text-[var(--text-strong)]"
              >
                Need help choosing?
              </Link>
            </div>

            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--text-strong)]">Why this layout works better</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Spacing is more consistent, shadows are softer, and the booking card stays readable without visual noise.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

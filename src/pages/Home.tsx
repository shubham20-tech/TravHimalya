import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock3, MapPin, Search, Shield, Star } from 'lucide-react';
import { destinations, hotels, packages, testimonials } from '../data/mockData';

const Home = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    type: 'all',
  });

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams({
      destination: searchData.destination,
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      guests: String(searchData.guests),
      type: searchData.type,
    });

    window.location.href = `/search?${params.toString()}`;
  };

  const trustPoints = [
    { icon: Shield, title: 'Safe planning', description: 'Verified stays, trusted drivers, and responsive support before and during the trip.' },
    { icon: Award, title: 'Transparent pricing', description: 'Clear inclusions and realistic budgets so travelers can compare options confidently.' },
    { icon: Clock3, title: 'Fast assistance', description: 'Helpful response times for itinerary changes, questions, and last-minute travel needs.' },
  ];

  const designPlates = [
    {
      title: 'Quick mountain escape',
      description: 'A short weekend plan with a scenic stay, one guided activity, and easy transfers.',
      details: 'Ideal for couples and busy professionals.',
    },
    {
      title: 'Family comfort trip',
      description: 'Balanced itineraries with safe stays, flexible timings, and sightseeing designed for mixed age groups.',
      details: 'Ideal for family holidays and reunion travel.',
    },
    {
      title: 'Adventure circuit',
      description: 'Route-focused planning with transport support, activity add-ons, and dependable local hosts.',
      details: 'Ideal for trekkers, riders, and explorer groups.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface-muted)]">
      <section className="relative overflow-hidden border-b border-[var(--border-soft)] bg-[var(--surface)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="pill-tag">Travel planning built for Himachal</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-6xl">
              Clean trip planning for travelers who want clarity, not clutter.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              Compare stays, local transport, and curated packages in one calm flow. TravelPro makes it easier to choose the right service for your trip and budget.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Handpicked stays', 'Flexible transport', 'Local experts', 'Clear inclusions'].map((item) => (
                <div key={item} className="rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-muted)] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="soft-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">Start your journey</div>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Search by destination and service type. We’ll carry your selection straight into the results page.
              </p>
            </div>

            <form onSubmit={handleSearch} className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Destination</label>
                <select
                  value={searchData.destination}
                  onChange={(event) => setSearchData({ ...searchData, destination: event.target.value })}
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--text-strong)] outline-none transition focus:border-[var(--brand)]"
                >
                  <option value="">Choose a destination</option>
                  <option value="Shimla">Shimla</option>
                  <option value="Manali">Manali</option>
                  <option value="Dharamshala">Dharamshala</option>
                  <option value="Kullu">Kullu</option>
                  <option value="Chamba">Chamba</option>
                  <option value="Spiti">Spiti Valley</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Check-in</label>
                  <input
                    type="date"
                    value={searchData.checkIn}
                    onChange={(event) => setSearchData({ ...searchData, checkIn: event.target.value })}
                    className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--text-strong)] outline-none transition focus:border-[var(--brand)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Check-out</label>
                  <input
                    type="date"
                    value={searchData.checkOut}
                    onChange={(event) => setSearchData({ ...searchData, checkOut: event.target.value })}
                    className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--text-strong)] outline-none transition focus:border-[var(--brand)]"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Service</label>
                  <select
                    value={searchData.type}
                    onChange={(event) => setSearchData({ ...searchData, type: event.target.value })}
                    className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--text-strong)] outline-none transition focus:border-[var(--brand)]"
                  >
                    <option value="all">Packages</option>
                    <option value="hotel">Hotels</option>
                    <option value="car">Car rental</option>
                    <option value="tour">Sightseeing tours</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Guests</label>
                  <select
                    value={searchData.guests}
                    onChange={(event) => setSearchData({ ...searchData, guests: Number(event.target.value) })}
                    className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--text-strong)] outline-none transition focus:border-[var(--brand)]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((guest) => (
                      <option key={guest} value={guest}>
                        {guest} {guest === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-6 py-4 text-base font-semibold text-white shadow-sm"
              >
                <Search className="h-5 w-5" />
                Search travel options
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="pill-tag">Why travelers choose us</span>
            <h2 className="section-title mt-3">Clear service, stronger design, better trip decisions.</h2>
            <p className="section-copy">
              We simplified the experience so travelers can browse confidently without heavy visuals or confusing content blocks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-7 shadow-sm">
                <point.icon className="h-8 w-8 text-[var(--brand)]" />
                <h3 className="mt-5 text-xl font-semibold text-[var(--text-strong)]">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="pill-tag">Design plates</span>
            <h2 className="section-title mt-3">Three travel styles to guide faster planning.</h2>
            <p className="section-copy">
              These design plates make the homepage feel more intentional while giving travelers a practical entry into the right service.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {designPlates.map((plate, index) => (
              <div
                key={plate.title}
                className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-8 shadow-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--text-strong)]">{plate.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{plate.description}</p>
                <p className="mt-6 text-sm font-medium text-[var(--brand-strong)]">{plate.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="pill-tag">Popular destinations</span>
              <h2 className="section-title mt-3">Places travelers shortlist most often.</h2>
              <p className="section-copy">A compact destination view keeps the homepage clean while still showing useful options.</p>
            </div>
            <Link to="/search" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-strong)]">
              Explore all options
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {destinations.slice(0, 4).map((destination) => (
              <Link
                key={destination.id}
                to={`/package/${destination.id}`}
                className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-sm transition hover:-translate-y-1"
              >
                <img src={destination.image} alt={destination.name} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-strong)]">{destination.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{destination.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
                      <Star className="h-4 w-4 fill-current text-amber-400" />
                      {destination.rating}
                    </span>
                    <span className="font-semibold text-[var(--brand-strong)]">₹{destination.price.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="pill-tag">Featured services</span>
            <h2 className="section-title mt-3">Market-standard listings with simpler presentation.</h2>
            <p className="section-copy">We trimmed the shadows, tightened the spacing, and kept the content focused on what matters.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {hotels.slice(0, 3).map((hotel) => (
              <div key={hotel.id} className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-sm">
                <img src={hotel.image} alt={hotel.name} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[var(--text-strong)]">{hotel.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                      <Star className="h-4 w-4 fill-current" />
                      {hotel.rating}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <MapPin className="h-4 w-4 text-[var(--brand)]" />
                    {hotel.location}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {hotel.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-semibold text-[var(--brand-strong)]">₹{hotel.price.toLocaleString()}</div>
                      <div className="text-sm text-[var(--text-muted)]">per night</div>
                    </div>
                    <Link to="/search?type=hotel" className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-strong)]">
                      View stays
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm">
                <img src={pkg.images[0]} alt={pkg.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-strong)]">
                      {pkg.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-muted)]">
                      <Star className="h-4 w-4 fill-current text-amber-400" />
                      {pkg.rating}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">{pkg.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{pkg.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 2).map((highlight) => (
                      <span key={highlight} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-semibold text-[var(--brand-strong)]">₹{pkg.price.toLocaleString()}</div>
                      <div className="text-sm text-[var(--text-muted)]">per person</div>
                    </div>
                    <Link to={`/package/${pkg.id}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--text-strong)]">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="pill-tag">Traveler feedback</span>
            <h2 className="section-title mt-3">Meaningful content, not filler.</h2>
            <p className="section-copy">Short testimonials help validate trust without overwhelming the page.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-[var(--text-strong)]">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-muted)]">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < testimonial.rating ? 'fill-current text-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-soft)] bg-white px-6 py-10 text-center shadow-sm sm:px-10">
          <span className="pill-tag">Ready when you are</span>
          <h2 className="mt-5 text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
            Start with the right service and build the rest of your trip from there.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
            Search hotels, rentals, tours, or package deals with filters that stay visible and easy to use.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/search" className="rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-6 py-3 text-sm font-semibold text-white">
              Start planning
            </Link>
            <Link to="/contact" className="rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold text-[var(--text-strong)]">
              Speak to an expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

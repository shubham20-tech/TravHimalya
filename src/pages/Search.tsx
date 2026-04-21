import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Search as SearchIcon, SlidersHorizontal, Star } from 'lucide-react';
import PageHero from '../components/PageHero';
import { cars, destinations, hotels, packages } from '../data/mockData';
import type { Car, Destination, Hotel, Package as PackageType } from '../types';

type SearchTab = 'all' | 'hotel' | 'car' | 'tour';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') || '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    guests: Number(searchParams.get('guests') || '2'),
    minPrice: 0,
    maxPrice: 15000,
    rating: 0,
  });

  const activeTab = (searchParams.get('type') || 'all') as SearchTab;

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      destination: searchParams.get('destination') || '',
      checkIn: searchParams.get('checkIn') || '',
      checkOut: searchParams.get('checkOut') || '',
      guests: Number(searchParams.get('guests') || current.guests || 2),
    }));
  }, [searchParams]);

  const tabs = [
    { id: 'all', name: 'Packages', count: packages.length + destinations.length },
    { id: 'hotel', name: 'Hotels', count: hotels.length },
    { id: 'car', name: 'Car rental', count: cars.length },
    { id: 'tour', name: 'Tours', count: packages.length },
  ] as const;

  const results = useMemo(() => {
    const query = filters.destination.trim().toLowerCase();

    const matchesText = (value: string) => !query || value.toLowerCase().includes(query);
    const withinPrice = (price: number) => price >= filters.minPrice && price <= filters.maxPrice;
    const meetsRating = (rating?: number) => !rating || rating >= filters.rating;

    const filteredDestinations = destinations.filter(
      (item) => matchesText(item.name) && withinPrice(item.price) && meetsRating(item.rating),
    );
    const filteredHotels = hotels.filter(
      (item) => matchesText(item.location) && withinPrice(item.price) && meetsRating(item.rating),
    );
    const filteredCars = cars.filter((item) => matchesText(item.location) && withinPrice(item.price));
    const filteredPackages = packages.filter(
      (item) => matchesText(item.destination) && withinPrice(item.price) && meetsRating(item.rating),
    );

    switch (activeTab) {
      case 'hotel':
        return filteredHotels;
      case 'car':
        return filteredCars;
      case 'tour':
        return filteredPackages;
      default:
        return [...filteredPackages, ...filteredDestinations];
    }
  }, [activeTab, filters]);

  const selectedServiceLabel = tabs.find((tab) => tab.id === activeTab)?.name || 'Packages';

  const syncParams = (type: SearchTab) => {
    const params = new URLSearchParams();
    if (filters.destination) params.set('destination', filters.destination);
    if (filters.checkIn) params.set('checkIn', filters.checkIn);
    if (filters.checkOut) params.set('checkOut', filters.checkOut);
    params.set('guests', String(filters.guests));
    params.set('type', type);
    setSearchParams(params);
  };

  const renderDestinationCard = (destination: Destination) => (
    <Link
      key={`destination-${destination.id}`}
      to={`/package/${destination.id}`}
      className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-sm transition hover:-translate-y-1"
    >
      <img src={destination.image} alt={destination.name} className="h-56 w-full object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-[var(--text-strong)]">{destination.name}</h3>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-muted)]">
            <Star className="h-4 w-4 fill-current text-amber-400" />
            {destination.rating}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{destination.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-[var(--text-muted)]">{destination.duration}</span>
          <span className="text-xl font-semibold text-[var(--brand-strong)]">₹{destination.price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );

  const renderHotelCard = (hotel: Hotel) => (
    <div key={`hotel-${hotel.id}`} className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-sm">
      <img src={hotel.image} alt={hotel.name} className="h-56 w-full object-cover" />
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
        <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{hotel.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
              {amenity}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold text-[var(--brand-strong)]">₹{hotel.price.toLocaleString()}</div>
            <div className="text-sm text-[var(--text-muted)]">per night</div>
          </div>
          <Link to="/contact" className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-strong)]">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );

  const renderCarCard = (car: Car) => (
    <div key={`car-${car.id}`} className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-sm">
      <img src={car.image} alt={car.name} className="h-56 w-full object-cover" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-strong)]">
              {car.type}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">{car.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold text-[var(--brand-strong)]">₹{car.price.toLocaleString()}</div>
            <div className="text-sm text-[var(--text-muted)]">per day</div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <MapPin className="h-4 w-4 text-[var(--brand)]" />
          {car.location}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[var(--surface)] p-4 text-sm text-[var(--text-muted)]">
            <div className="text-xs uppercase tracking-[0.2em]">Seats</div>
            <div className="mt-1 text-xl font-semibold text-[var(--text-strong)]">{car.seats}</div>
          </div>
          <div className="rounded-2xl bg-[var(--surface)] p-4 text-sm text-[var(--text-muted)]">
            <div className="text-xs uppercase tracking-[0.2em]">Features</div>
            <div className="mt-1 text-base font-semibold text-[var(--text-strong)]">{car.features[0]}</div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {car.features.slice(0, 3).map((feature) => (
            <span key={feature} className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPackageCard = (pkg: PackageType) => (
    <Link
      key={`package-${pkg.id}`}
      to={`/package/${pkg.id}`}
      className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-sm transition hover:-translate-y-1"
    >
      <img src={pkg.images[0]} alt={pkg.title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-strong)]">
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
          {pkg.highlights.slice(0, 3).map((highlight) => (
            <span key={highlight} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-[var(--text-muted)]">{pkg.destination}</span>
          <span className="text-xl font-semibold text-[var(--brand-strong)]">₹{pkg.price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );

  const renderResultCard = (item: Destination | Hotel | Car | PackageType) => {
    if ('amenities' in item) return renderHotelCard(item);
    if ('seats' in item) return renderCarCard(item);
    if ('images' in item) return renderPackageCard(item);
    return renderDestinationCard(item);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-muted)]">
      <PageHero
        eyebrow="Search services"
        title={`${selectedServiceLabel} matched to your trip style`}
        description="Your service selection now opens the correct result set. Filters stay visible so you can refine without losing context."
        stats={[`${results.length} results`, `${filters.guests} guests`, filters.destination || 'All destinations']}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_repeat(3,1fr)_auto]">
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Destination</label>
              <input
                type="text"
                placeholder="Search Shimla, Manali, Spiti..."
                value={filters.destination}
                onChange={(event) => setFilters({ ...filters, destination: event.target.value })}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Check-in</label>
              <input
                type="date"
                value={filters.checkIn}
                onChange={(event) => setFilters({ ...filters, checkIn: event.target.value })}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Check-out</label>
              <input
                type="date"
                value={filters.checkOut}
                onChange={(event) => setFilters({ ...filters, checkOut: event.target.value })}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--text-strong)]">Guests</label>
              <select
                value={filters.guests}
                onChange={(event) => setFilters({ ...filters, guests: Number(event.target.value) })}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              >
                {[1, 2, 3, 4, 5, 6].map((guest) => (
                  <option key={guest} value={guest}>
                    {guest} {guest === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => syncParams(activeTab)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f766e,#155e75)] px-5 py-3 font-semibold text-white"
            >
              <SearchIcon className="h-4 w-4" />
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => syncParams(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-[var(--brand-strong)] text-white'
                    : 'border border-[var(--border-soft)] bg-[var(--surface-muted)] text-[var(--text-muted)]'
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowMobileFilters((current) => !current)}
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-muted)] lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className={`${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="sticky top-24 rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[var(--text-strong)]">Filters</h2>
                <span className="text-sm text-[var(--text-muted)]">Always visible</span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-medium text-[var(--text-strong)]">
                    Minimum rating
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[0, 3, 4, 4.5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFilters({ ...filters, rating })}
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          filters.rating === rating
                            ? 'bg-[var(--brand-strong)] text-white'
                            : 'bg-[var(--surface)] text-[var(--text-muted)]'
                        }`}
                      >
                        {rating === 0 ? 'All' : `${rating}+`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[var(--text-strong)]">
                    Budget range
                  </label>
                  <div className="rounded-2xl bg-[var(--surface)] p-4">
                    <div className="flex justify-between text-sm text-[var(--text-muted)]">
                      <span>Min: ₹{filters.minPrice.toLocaleString()}</span>
                      <span>Max: ₹{filters.maxPrice.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="500"
                      value={filters.minPrice}
                      onChange={(event) => setFilters({ ...filters, minPrice: Number(event.target.value) })}
                      className="mt-4 w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="500"
                      value={filters.maxPrice}
                      onChange={(event) => setFilters({ ...filters, maxPrice: Number(event.target.value) })}
                      className="mt-3 w-full"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setFilters({
                      destination: '',
                      checkIn: '',
                      checkOut: '',
                      guests: 2,
                      minPrice: 0,
                      maxPrice: 15000,
                      rating: 0,
                    })
                  }
                  className="w-full rounded-full border border-[var(--border-soft)] px-4 py-3 text-sm font-semibold text-[var(--text-strong)]"
                >
                  Reset filters
                </button>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[var(--text-strong)]">{selectedServiceLabel}</h2>
                <p className="text-sm text-[var(--text-muted)]">
                  Showing {results.length} result{results.length === 1 ? '' : 's'} for your selected service.
                </p>
              </div>
            </div>

            {results.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {results.map((item) => renderResultCard(item))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-[var(--border-soft)] bg-white px-6 py-16 text-center shadow-sm">
                <SearchIcon className="mx-auto h-12 w-12 text-[var(--text-muted)]" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">No matching results</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Try a different destination, widen the budget, or switch to another service.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

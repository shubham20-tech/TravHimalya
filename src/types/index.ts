export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: number;
  duration: string;
  location: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  price: number;
  amenities: string[];
  description: string;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  type: string;
  seats: number;
  price: number;
  features: string[];
  location: string;
}

export interface Package {
  id: string;
  title: string;
  images: string[];
  description: string;
  price: number;
  duration: string;
  destination: string;
  rating: number;
  reviews: number;
  included: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  location: string;
  date: string;
}

export interface BookingData {
  packageId: string;
  travelers: {
    adults: number;
    children: number;
  };
  dates: {
    checkIn: string;
    checkOut: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  specialRequests?: string;
}

export interface SearchFilters {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: {
    min: number;
    max: number;
  };
  type: 'hotel' | 'car' | 'tour' | 'all';
}
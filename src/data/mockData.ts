import type { Destination, Hotel, Car, Package, Testimonial } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Shimla, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
    description: 'The Queen of Hills with colonial architecture and scenic beauty.',
    rating: 4.8,
    price: 4500,
    duration: '4 days',
    location: 'Himachal Pradesh'
  },
  {
    id: '2',
    name: 'Manali, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Adventure capital with stunning valleys and snow-capped peaks.',
    rating: 4.9,
    price: 5500,
    duration: '5 days',
    location: 'Himachal Pradesh'
  },
  {
    id: '3',
    name: 'Dharamshala, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
    description: 'Spiritual haven with Tibetan culture and mountain views.',
    rating: 4.7,
    price: 3800,
    duration: '3 days',
    location: 'Himachal Pradesh'
  },
  {
    id: '4',
    name: 'Kullu Valley, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Famous for apple orchards and rich cultural heritage.',
    rating: 4.6,
    price: 4200,
    duration: '4 days',
    location: 'Himachal Pradesh'
  },
  {
    id: '5',
    name: 'Spiti Valley, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Cold desert with ancient monasteries and stark beauty.',
    rating: 4.8,
    price: 8500,
    duration: '7 days',
    location: 'Himachal Pradesh'
  },
  {
    id: '6',
    name: 'Chamba, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
    description: 'Ancient temples, lakes, and rich history.',
    rating: 4.5,
    price: 3500,
    duration: '3 days',
    location: 'Himachal Pradesh'
  }
];

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Shimla Heritage Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    location: 'Shimla, Himachal Pradesh',
    rating: 4.8,
    price: 3500,
    amenities: ['WiFi', 'Fireplace', 'Restaurant', 'Spa', 'Valley View'],
    description: 'Colonial-era hotel with modern amenities and stunning valley views.'
  },
  {
    id: '2',
    name: 'Manali Mountain Resort',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    location: 'Manali, Himachal Pradesh',
    rating: 4.9,
    price: 4200,
    amenities: ['WiFi', 'Bonfire', 'Restaurant', 'Adventure Desk', 'Mountain View'],
    description: 'Adventure-focused resort with river views and local cuisine.'
  },
  {
    id: '3',
    name: 'Dharamshala Peace Retreat',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
    location: 'Dharamshala, Himachal Pradesh',
    rating: 4.7,
    price: 2800,
    amenities: ['WiFi', 'Meditation Garden', 'Tibetan Restaurant', 'Spa', 'Temple View'],
    description: 'Peaceful retreat with Tibetan architecture and spiritual ambiance.'
  },
  {
    id: '4',
    name: 'Spiti Valley Guest House',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    location: 'Kaza, Spiti Valley, Himachal Pradesh',
    rating: 4.5,
    price: 2200,
    amenities: ['WiFi', 'Traditional Heating', 'Local Cuisine', 'Cultural Shows', 'Mountain View'],
    description: 'Authentic Spiti experience with traditional architecture and local hospitality.'
  },
  {
    id: '5',
    name: 'Kullu Valley Heritage Resort',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    location: 'Kullu, Himachal Pradesh',
    rating: 4.6,
    price: 3100,
    amenities: ['WiFi', 'Apple Orchard View', 'Restaurant', 'Cultural Center', 'River View'],
    description: 'Heritage resort surrounded by apple orchards with traditional Kullu architecture.'
  },
  {
    id: '6',
    name: 'Chamba Palace Hotel',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
    location: 'Chamba, Himachal Pradesh',
    rating: 4.4,
    price: 2600,
    amenities: ['WiFi', 'Heritage Architecture', 'Restaurant', 'Lake View', 'Cultural Tours'],
    description: 'Historic palace converted into a luxury hotel with Chamba heritage.'
  }
];

export const cars: Car[] = [
  {
    id: '1',
    name: 'Mahindra Scorpio',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    type: 'SUV',
    seats: 7,
    price: 2500,
    features: ['GPS', 'Air Conditioning', 'Bluetooth', '4WD', 'Roof Rack'],
    location: 'Shimla'
  },
  {
    id: '2',
    name: 'Toyota Fortuner',
    image: 'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?w=800',
    type: 'SUV',
    seats: 7,
    price: 3200,
    features: ['GPS', 'Air Conditioning', 'Bluetooth', 'Automatic', 'Leather Seats'],
    location: 'Manali'
  },
  {
    id: '3',
    name: 'Honda CR-V',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
    type: 'SUV',
    seats: 5,
    price: 2800,
    features: ['GPS', 'Air Conditioning', 'Bluetooth', 'Automatic', '4WD'],
    location: 'Dharamshala'
  },
  {
    id: '4',
    name: 'Mahindra Bolero',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    type: 'SUV',
    seats: 7,
    price: 2200,
    features: ['GPS', 'Air Conditioning', 'Bluetooth', '4WD', 'Extra Storage'],
    location: 'Kullu'
  },
  {
    id: '5',
    name: 'Toyota Prado',
    image: 'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?w=800',
    type: 'SUV',
    seats: 7,
    price: 4500,
    features: ['GPS', 'Air Conditioning', 'Bluetooth', '4WD', 'Luxury Interior'],
    location: 'Spiti Valley'
  },
  {
    id: '6',
    name: 'Hyundai Creta',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
    type: 'SUV',
    seats: 5,
    price: 2600,
    features: ['GPS', 'Air Conditioning', 'Bluetooth', 'Automatic', 'Comfort Seats'],
    location: 'Chamba'
  }
];

export const packages: Package[] = [
  {
    id: '1',
    title: 'Shimla Delight Package',
    images: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    ],
    description: 'Experience the colonial charm of Shimla with visits to Mall Road, Jakhu Temple, and scenic viewpoints.',
    price: 8500,
    duration: '4 days',
    destination: 'Shimla, Himachal Pradesh',
    rating: 4.8,
    reviews: 245,
    included: ['Hotel accommodation', 'Sightseeing tours', 'Local transport', 'Welcome drink', 'Airport transfer'],
    itinerary: [
      { day: 1, title: 'Arrival & City Tour', description: 'Welcome to Shimla! Transfer to hotel and evening city tour of Mall Road.' },
      { day: 2, title: 'Jakhu Temple & Kufri', description: 'Visit Jakhu Temple and enjoy pony rides in Kufri.' },
      { day: 3, title: 'Chail & Mashobra', description: 'Explore Chail Palace and the beautiful Mashobra gardens.' },
      { day: 4, title: 'Departure', description: 'Transfer to airport for your onward journey.' }
    ],
    highlights: ['Mall Road shopping', 'Jakhu Temple views', 'Kufri adventure', 'Colonial architecture']
  },
  {
    id: '2',
    title: 'Manali Adventure Package',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    ],
    description: 'Thrilling adventures in Manali including Rohtang Pass, Solang Valley, and ancient temples.',
    price: 12500,
    duration: '5 days',
    destination: 'Manali, Himachal Pradesh',
    rating: 4.9,
    reviews: 189,
    included: ['4-star hotel', 'Adventure activities', 'Local transport', 'Mountain guide', 'Airport transfer'],
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Welcome to Manali! Transfer to hotel and evening at the mall road.' },
      { day: 2, title: 'Rohtang Pass & Solang Valley', description: 'Full day adventure to Rohtang Pass and Solang Valley for paragliding.' },
      { day: 3, title: 'Hadimba Temple & Vashisht', description: 'Visit ancient temples and natural hot springs in Vashisht.' },
      { day: 4, title: 'Great Himalayan National Park', description: 'Trek and explore the biodiversity of the national park.' },
      { day: 5, title: 'Departure', description: 'Transfer to airport for your onward journey.' }
    ],
    highlights: ['Rohtang Pass views', 'Paragliding experience', 'Ancient temples', 'Hot springs']
  },
  {
    id: '3',
    title: 'Dharamshala Spiritual Retreat',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Find peace and spirituality in Dharamshala with visits to Tibetan monasteries and meditation centers.',
    price: 7200,
    duration: '3 days',
    destination: 'Dharamshala, Himachal Pradesh',
    rating: 4.7,
    reviews: 156,
    included: ['3-star hotel', 'Monastery visits', 'Meditation sessions', 'Local transport', 'Airport transfer'],
    itinerary: [
      { day: 1, title: 'Arrival & McLeod Ganj', description: 'Welcome to Dharamshala! Visit McLeod Ganj and Dalai Lama Temple.' },
      { day: 2, title: 'Monasteries & Culture', description: 'Explore Tibetan monasteries and learn about Buddhist culture.' },
      { day: 3, title: 'Departure', description: 'Transfer to airport for your onward journey.' }
    ],
    highlights: ['Dalai Lama Temple', 'Tibetan culture', 'Mountain views', 'Spiritual experience']
  },
  {
    id: '4',
    title: 'Spiti Valley Hidden Gems',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    ],
    description: 'Discover the mystical Spiti Valley with ancient monasteries, stark landscapes, and nomadic culture.',
    price: 18500,
    duration: '7 days',
    destination: 'Spiti Valley, Himachal Pradesh',
    rating: 4.9,
    reviews: 98,
    included: ['Camping/Guest houses', '4x4 vehicle', 'Local guide', 'Permits', 'Airport transfer'],
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Welcome to Manali! Acclimatization and preparation for Spiti journey.' },
      { day: 2, title: 'Kunzum Pass to Kaza', description: 'Cross Kunzum Pass and arrive in Kaza, the administrative center of Spiti.' },
      { day: 3, title: 'Key Monastery & Kibber', description: 'Visit Key Monastery and the highest village in Asia - Kibber.' },
      { day: 4, title: 'Tabo & Dhankar', description: 'Explore Tabo Monastery and Dhankar Fort ruins.' },
      { day: 5, title: 'Langza & Hikkim', description: 'Visit fossil sites and traditional villages.' },
      { day: 6, title: 'Chandertal Lake', description: 'Day trip to the pristine Chandertal Lake.' },
      { day: 7, title: 'Departure', description: 'Return journey to Manali and airport transfer.' }
    ],
    highlights: ['Ancient monasteries', 'Cold desert landscapes', 'Nomadic culture', 'Fossil sites']
  },
  {
    id: '5',
    title: 'Kullu Valley Cultural Tour',
    images: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    ],
    description: 'Immerse in Kullu culture with apple orchards, traditional villages, and local festivals.',
    price: 9200,
    duration: '4 days',
    destination: 'Kullu Valley, Himachal Pradesh',
    rating: 4.6,
    reviews: 134,
    included: ['Heritage hotel', 'Cultural performances', 'Local transport', 'Traditional meals', 'Airport transfer'],
    itinerary: [
      { day: 1, title: 'Arrival in Kullu', description: 'Welcome to Kullu! Visit Raghunath Temple and local markets.' },
      { day: 2, title: 'Naggar & Manali', description: 'Explore Naggar Castle and traditional Himachali villages.' },
      { day: 3, title: 'Apple Orchards & Culture', description: 'Visit apple orchards and experience local culture.' },
      { day: 4, title: 'Departure', description: 'Transfer to airport for your onward journey.' }
    ],
    highlights: ['Raghunath Temple', 'Apple orchards', 'Traditional villages', 'Local culture']
  },
  {
    id: '6',
    title: 'Chamba Heritage Trail',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Explore the ancient temples, lakes, and rich history of Chamba district.',
    price: 7800,
    duration: '3 days',
    destination: 'Chamba, Himachal Pradesh',
    rating: 4.5,
    reviews: 87,
    included: ['Heritage hotel', 'Temple visits', 'Local transport', 'Traditional cuisine', 'Airport transfer'],
    itinerary: [
      { day: 1, title: 'Arrival in Chamba', description: 'Welcome to Chamba! Visit Chamunda Temple and old town.' },
      { day: 2, title: 'Lakes & Monasteries', description: 'Explore Dalhousie, Khajjiar, and ancient monasteries.' },
      { day: 3, title: 'Departure', description: 'Transfer to airport for your onward journey.' }
    ],
    highlights: ['Ancient temples', 'Mini Switzerland (Khajjiar)', 'Rich history', 'Traditional architecture']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    rating: 5,
    review: 'Amazing experience in Shimla! The colonial architecture and scenic beauty were breathtaking. TravelPro made everything seamless.',
    location: 'Delhi, India',
    date: '2024-11-15'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    review: 'Manali adventure was incredible! Rohtang Pass and Solang Valley were highlights. Professional guides and great accommodations.',
    location: 'Mumbai, India',
    date: '2024-10-28'
  },
  {
    id: '3',
    name: 'Anjali Patel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 4,
    review: 'Dharamshala was peaceful and spiritual. The monasteries and mountain views were spectacular. Will definitely visit again.',
    location: 'Ahmedabad, India',
    date: '2024-09-20'
  },
  {
    id: '4',
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    rating: 5,
    review: 'Spiti Valley was a life-changing experience! The ancient monasteries and stark landscapes were mesmerizing. Highly recommend the hidden gems tour.',
    location: 'Chandigarh, India',
    date: '2024-08-12'
  },
  {
    id: '5',
    name: 'Kavita Joshi',
    image: 'https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f6?w=150',
    rating: 5,
    review: 'Kullu Valley cultural tour was perfect! The apple orchards, traditional villages, and local hospitality made it unforgettable.',
    location: 'Pune, India',
    date: '2024-07-25'
  },
  {
    id: '6',
    name: 'Amit Kumar',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    rating: 4,
    review: 'Chamba heritage trail was excellent! The ancient temples and Mini Switzerland (Khajjiar) were highlights. Great value for money.',
    location: 'Jaipur, India',
    date: '2024-06-18'
  }
];

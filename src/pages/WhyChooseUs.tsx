import { Shield, Award, Clock, Users, Star, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-sky-500" />,
      title: 'Safe & Secure',
      description: 'Your safety is our top priority with verified partners, secure payments, and 24/7 support throughout your journey.'
    },
    {
      icon: <Award className="w-12 h-12 text-emerald-500" />,
      title: 'Best Price Guarantee',
      description: 'We offer competitive prices and guarantee the best deals. Find a lower price elsewhere, and we\'ll match it.'
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support in multiple languages. Our travel experts are always ready to help.'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'Expert Team',
      description: 'Our experienced travel consultants have visited 100+ destinations and know every detail that matters.'
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: 'Verified Reviews',
      description: 'Read authentic reviews from real travelers. We maintain transparency with genuine customer feedback.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: 'Quality Assurance',
      description: 'Every booking goes through our quality check process to ensure you get exactly what you expect.'
    }
  ];

  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '50K+', label: 'Happy Travelers' },
    { number: '100+', label: 'Destinations' },
    { number: '500+', label: 'Travel Partners' },
    { number: '24/7', label: 'Customer Support' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Why choose us"
        title="A cleaner travel experience backed by service standards travelers expect."
        description="TravelPro combines practical planning tools, local expertise, and transparent support so every part of the trip feels easier to trust."
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technology, expertise, and passion to deliver exceptional travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Recognized and certified by leading organizations in the travel industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-sky-600 mb-2">IATA</div>
              <div className="text-gray-600">Certified Agent</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-emerald-600 mb-2">BBB</div>
              <div className="text-gray-600">A+ Rating</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-orange-600 mb-2">ASTA</div>
              <div className="text-gray-600">Member</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">SSL</div>
              <div className="text-gray-600">Secured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Customer Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Price Guarantee</h3>
              <p className="text-gray-700">Find a lower price for the same package within 24 hours of booking, and we'll refund the difference plus give you 10% extra.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Cancellation</h3>
              <p className="text-gray-700">Cancel your booking up to 24 hours before departure for a full refund. No questions asked, no hidden fees.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-700">Our travel experts are available round-the-clock in 12+ languages to assist you anytime, anywhere.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied travelers who trust TravelPro for their dream vacations
            </p>
            <a
              href="/search"
              className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold text-lg"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

import { Users, Award, Globe, Heart, Target, Eye, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Award className="w-8 h-8 text-indigo-500" /> },
    { number: '50K+', label: 'Happy Customers', icon: <Users className="w-8 h-8 text-amber-500" /> },
    { number: '100+', label: 'Destinations', icon: <Globe className="w-8 h-8 text-purple-500" /> },
    { number: '500+', label: 'Travel Partners', icon: <Heart className="w-8 h-8 text-coral-500" /> }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-indigo-500" />,
      title: 'Our Mission',
      description: 'To make travel accessible, affordable, and unforgettable for everyone, creating memories that last a lifetime through exceptional experiences and personalized service.'
    },
    {
      icon: <Eye className="w-12 h-12 text-amber-500" />,
      title: 'Our Vision',
      description: 'To become the world\'s most trusted travel companion, revolutionizing how people explore and experience the world with innovative technology and unparalleled service.'
    }
  ];

  const reasons = [
    'Personalized travel planning',
    '24/7 customer support',
    'Best price guarantee',
    'Verified reviews and ratings',
    'Secure payment processing',
    'Flexible cancellation policies',
    'Local expert guides',
    'Sustainable travel practices'
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="About TravelPro"
        title="Travel planning with a calmer experience and stronger local context."
        description="We build travel pages that feel trustworthy, informative, and easy to act on so travelers can choose with confidence."
        stats={['10+ years experience', '50K+ happy travelers', '100+ destinations']}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014, TravelPro began as a small family business with a big dream: to make world-class travel accessible to everyone.
                  What started as a local tour operator has grown into a global travel platform serving thousands of happy customers annually.
                </p>
                <p>
                  Our journey has been driven by a simple philosophy - that travel should be about creating memories, not just checking destinations off a list.
                  We've built our reputation on personalized service, attention to detail, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, TravelPro offers comprehensive travel solutions including hotel bookings, car rentals, sightseeing tours, and curated travel packages
                  to over 100 destinations worldwide. But our core values remain the same: trust, transparency, and putting our customers first.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                alt="TravelPro team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Trust Us */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why People Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of travelers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of travelers who trust TravelPro for their adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/search"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg"
            >
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-sky-600 transition-all duration-200 font-semibold text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Star, Play } from 'lucide-react';
import PageHero from '../components/PageHero';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Testimonials"
        title="Traveler feedback that supports decisions, not just decoration."
        description="Social proof is easier to trust when the layout is simple, legible, and focused on the traveler’s actual experience."
      />

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="relative group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-900">Customer Review #{video}</h3>
                  <p className="text-gray-600">Amazing experience with TravelPro</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Read what our travelers have to say about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">"{testimonial.review}"</p>
                <p className="text-gray-500 text-sm">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Overall Rating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-sky-600 mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600">Overall Rating</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

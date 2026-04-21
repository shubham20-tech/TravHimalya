import PageHero from '../components/PageHero';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Contact"
        title="Talk to a travel expert who can help you choose the right service."
        description="Share your destination, dates, and budget. We’ll guide you toward the best stay, car, or package for your plan."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                <textarea placeholder="Message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                <button className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Travel Street<br />New York, NY 10001<br />United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@travelpro.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

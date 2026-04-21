import PageHero from '../components/PageHero';

const FAQ = () => {
  const faqs = [
    { question: 'How do I make a booking?', answer: 'You can book through our website or contact our agents.' },
    { question: 'What is the cancellation policy?', answer: 'Free cancellation up to 24 hours before departure.' },
    { question: 'Do you offer payment plans?', answer: 'Yes, we offer flexible payment options.' },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions, kept short and useful."
        description="This section helps travelers understand bookings, cancellations, and payment choices without digging through cluttered content."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

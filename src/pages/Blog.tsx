import PageHero from '../components/PageHero';

const Blog = () => {
  const posts = [
    {
      title: 'Exploring Shimla: Queen of Hills',
      category: 'Himachal Pradesh',
      date: '2024-12-15',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      excerpt: 'Discover the colonial charm and scenic beauty of Shimla, the summer capital of British India.',
      readTime: '5 min read'
    },
    {
      title: 'Manali Adventure Guide: Trekking & Culture',
      category: 'Himachal Pradesh',
      date: '2024-12-10',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      excerpt: 'From Rohtang Pass to ancient temples, explore the adventure capital of Himachal Pradesh.',
      readTime: '7 min read'
    },
    {
      title: 'Dharamshala & McLeod Ganj: Spiritual Journey',
      category: 'Himachal Pradesh',
      date: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      excerpt: 'Visit the home of Dalai Lama and experience Tibetan culture in the lap of Dhauladhar ranges.',
      readTime: '6 min read'
    },
    {
      title: 'Kullu Valley: Apple Orchards & Festivals',
      category: 'Himachal Pradesh',
      date: '2024-11-28',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      excerpt: 'Experience the rich cultural heritage and natural beauty of Kullu Valley.',
      readTime: '4 min read'
    },
    {
      title: 'Chamba: Ancient Temples & Forts',
      category: 'Himachal Pradesh',
      date: '2024-11-20',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      excerpt: 'Explore the historical significance and architectural marvels of Chamba district.',
      readTime: '5 min read'
    },
    {
      title: 'Spiti Valley: Cold Desert Adventure',
      category: 'Himachal Pradesh',
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      excerpt: 'Journey through the trans-Himalayan region known for its stark beauty and ancient monasteries.',
      readTime: '8 min read'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Travel journal"
        title="Guides and stories that help travelers plan with more confidence."
        description="Destination notes, seasonal tips, and local insights from Himachal Pradesh without the clutter of a generic blog layout."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

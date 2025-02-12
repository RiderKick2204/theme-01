import Image from "next/image";
import HotToursSlider from "@/components/HotToursSlider";
import { getLatestNews } from "@/data/news";

export default function Home() {
  const latestNews = getLatestNews().slice(0, 3); // Get only 3 latest news

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Travel Hero"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">Explore the World</h1>
          <p className="text-xl mb-8">Discover amazing destinations with us</p>
          <a href="#destinations" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
            Start Exploring
          </a>
        </div>
      </section>

      {/* Hot Tours Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Hot Tours</h2>
        <div className="max-w-6xl mx-auto">
          <HotToursSlider />
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Paris',
              image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
              desc: 'City of Light'
            },
            {
              name: 'Tokyo',
              image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
              desc: 'Modern Meets Traditional'
            },
            {
              name: 'Bali',
              image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
              desc: 'Island Paradise'
            },
          ].map((dest) => (
            <div key={dest.name} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-600">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Travel News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestNews.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-500 text-sm">{article.category}</span>
                  <time className="text-gray-500 text-sm">
                    {new Date(article.date).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/news" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
            View All News
          </a>
        </div>
      </section>
    </div>
  );
}

'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Beautiful%20Hindu%20temple%20ceremony%20with%20golden%20diyas%20oil%20lamps%20glowing%20warm%20light%2C%20priest%20performing%20sacred%20rituals%20with%20flowers%20and%20incense%2C%20peaceful%20spiritual%20atmosphere%2C%20traditional%20elements%2C%20soft%20morning%20light%2C%20serene%20temple%20interior%20with%20ornate%20decorations%2C%20devotional%20setting%20with%20rangoli%20patterns%2C%20warm%20golden%20and%20orange%20tones%20creating%20peaceful%20ambiance&width=1920&height=1080&seq=hero001&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Book Priests for Your
            <span className="text-orange-400 block">Special Ceremonies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Trusted, verified, and experienced priests for all your sacred rituals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => window.location.href = '/services'}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
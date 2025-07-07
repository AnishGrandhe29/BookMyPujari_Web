'use client';

const services = [
  {
    title: 'Griha Pravesh',
    description: 'Sacred housewarming ceremony for new homes with traditional rituals',
    price: '₹2,500',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Hindu%20griha%20pravesh%20housewarming%20ceremony%20with%20priest%20performing%20rituals%20at%20new%20home%20entrance%2C%20decorated%20doorway%20with%20flowers%20and%20rangoli%2C%20traditional%20kalash%20and%20coconut%2C%20family%20participating%20in%20sacred%20house%20blessing%20ceremony%2C%20warm%20lighting%2C%20spiritual%20atmosphere%2C%20traditional%20elements%20like%20mango%20leaves%20and%20marigold%20flowers&width=400&height=300&seq=service001&orientation=landscape'
  },
  {
    title: 'Satyanarayana Puja',
    description: 'Complete Satyanarayana Katha and puja for prosperity and blessings',
    price: '₹1,800',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20Satyanarayana%20puja%20ceremony%20with%20priest%20chanting%20mantras%2C%20decorated%20altar%20with%20flowers%20and%20diyas%2C%20devotional%20setup%20with%20sacred%20items%2C%20family%20gathered%20for%20worship%2C%20spiritual%20atmosphere%20with%20incense%20and%20traditional%20decorations%2C%20golden%20lighting%2C%20peaceful%20setting&width=400&height=300&seq=service002&orientation=landscape'
  },
  {
    title: 'Marriage Ceremonies',
    description: 'Complete wedding rituals with traditional Vedic ceremonies',
    price: '₹15,000',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Hindu%20wedding%20ceremony%20with%20bride%20and%20groom%20around%20sacred%20fire%2C%20priest%20conducting%20marriage%20rituals%2C%20traditional%20mandap%20decoration%20with%20flowers%2C%20family%20participating%20in%20Vedic%20marriage%20ceremony%2C%20colorful%20traditional%20attire%2C%20festive%20atmosphere%20with%20marigold%20decorations&width=400&height=300&seq=service003&orientation=landscape'
  },
  {
    title: 'Vastu Puja',
    description: 'Vastu correction and purification ceremonies for positive energy',
    price: '₹3,200',
    image: 'https://readdy.ai/api/search-image?query=Vastu%20puja%20ceremony%20with%20priest%20performing%20rituals%20for%20home%20harmony%2C%20traditional%20setup%20with%20sacred%20items%2C%20geometric%20patterns%20and%20symbols%2C%20peaceful%20environment%20with%20flowers%20and%20diyas%2C%20spiritual%20cleansing%20ceremony%2C%20traditional%20elements%20for%20positive%20energy%2C%20serene%20atmosphere&width=400&height=300&seq=service004&orientation=landscape'
  },
  {
    title: 'Navratri Puja',
    description: 'Nine-day Navratri celebrations with complete rituals',
    price: '₹5,500',
    image: 'https://readdy.ai/api/search-image?query=Vibrant%20Navratri%20puja%20celebration%20with%20decorated%20goddess%20idol%2C%20priest%20performing%20aarti%2C%20colorful%20flowers%20and%20rangoli%2C%20devotees%20participating%20in%20festive%20ceremony%2C%20traditional%20decorations%20with%20lights%20and%20marigolds%2C%20spiritual%20celebration%20atmosphere%2C%20beautiful%20altar%20setup&width=400&height=300&seq=service005&orientation=landscape'
  },
  {
    title: 'Ganesh Puja',
    description: 'Lord Ganesha worship for removing obstacles and new beginnings',
    price: '₹2,100',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Ganesh%20puja%20ceremony%20with%20decorated%20Lord%20Ganesha%20idol%2C%20priest%20performing%20traditional%20rituals%2C%20offerings%20of%20modak%20and%20flowers%2C%20devotional%20setup%20with%20diyas%20and%20incense%2C%20family%20worship%20scene%2C%20festive%20decorations%2C%20warm%20spiritual%20atmosphere%2C%20traditional%20elements&width=400&height=300&seq=service006&orientation=landscape'
  }
];

export default function PopularServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of traditional Hindu ceremonies and rituals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    {service.price}
                  </span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
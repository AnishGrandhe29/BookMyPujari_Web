'use client';

import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

type Service = {
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  image: string;
};

const allServices: Service[] = [
  {
    title: 'Griha Pravesh',
    description: 'Sacred housewarming ceremony for new homes with traditional rituals and blessings',
    price: '₹2,500',
    duration: '2-3 Hours',
    category: 'Home',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Hindu%20griha%20pravesh%20housewarming%20ceremony%20with%20priest%20performing%20rituals%20at%20new%20home%20entrance%2C%20decorated%20doorway%20with%20flowers%20and%20rangoli%2C%20traditional%20kalash%20and%20coconut%2C%20family%20participating%20in%20sacred%20house%20blessing%20ceremony%2C%20warm%20lighting%2C%20spiritual%20atmosphere%2C%20traditional%20elements%20like%20mango%20leaves%20and%20marigold%20flowers&width=400&height=300&seq=service001&orientation=landscape'
  },
  {
    title: 'Satyanarayana Puja',
    description: 'Complete Satyanarayana Katha and puja for prosperity, peace and divine blessings',
    price: '₹1,800',
    duration: '3-4 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20Satyanarayana%20puja%20ceremony%20with%20priest%20chanting%20mantras%2C%20decorated%20altar%20with%20flowers%20and%20diyas%2C%20devotional%20setup%20with%20sacred%20items%2C%20family%20gathered%20for%20worship%2C%20spiritual%20atmosphere%20with%20incense%20and%20traditional%20decorations%2C%20golden%20lighting%2C%20peaceful%20setting&width=400&height=300&seq=service002&orientation=landscape'
  },
  {
    title: 'Marriage Ceremonies',
    description: 'Complete Vedic wedding rituals including Saptapadi, Mangalsutra and all traditional ceremonies',
    price: '₹15,000',
    duration: '4-6 Hours',
    category: 'Wedding',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Hindu%20wedding%20ceremony%20with%20bride%20and%20groom%20around%20sacred%20fire%2C%20priest%20conducting%20marriage%20rituals%2C%20traditional%20mandap%20decoration%20with%20flowers%2C%20family%20participating%20in%20Vedic%20marriage%20ceremony%2C%20colorful%20traditional%20attire%2C%20festive%20atmosphere%20with%20marigold%20decorations&width=400&height=300&seq=service003&orientation=landscape'
  },
  {
    title: 'Vastu Puja',
    description: 'Vastu correction and purification ceremonies for positive energy and harmony',
    price: '₹3,200',
    duration: '2-3 Hours',
    category: 'Home',
    image: 'https://readdy.ai/api/search-image?query=Vastu%20puja%20ceremony%20with%20priest%20performing%20rituals%20for%20home%20harmony%2C%20traditional%20setup%20with%20sacred%20items%2C%20geometric%20patterns%20and%20symbols%2C%20peaceful%20environment%20with%20flowers%20and%20diyas%2C%20spiritual%20cleansing%20ceremony%2C%20traditional%20elements%20for%20positive%20energy%2C%20serene%20atmosphere&width=400&height=300&seq=service004&orientation=landscape'
  },
  {
    title: 'Navratri Puja',
    description: 'Nine-day Navratri celebrations with complete rituals and Goddess worship',
    price: '₹5,500',
    duration: '9 Days',
    category: 'Festival',
    image: 'https://readdy.ai/api/search-image?query=Vibrant%20Navratri%20puja%20celebration%20with%20decorated%20goddess%20idol%2C%20priest%20performing%20aarti%2C%20colorful%20flowers%20and%20rangoli%2C%20devotees%20participating%20in%20festive%20ceremony%2C%20traditional%20decorations%20with%20lights%20and%20marigolds%2C%20spiritual%20celebration%20atmosphere%2C%20beautiful%20altar%20setup&width=400&height=300&seq=service005&orientation=landscape'
  },
  {
    title: 'Ganesh Puja',
    description: 'Lord Ganesha worship for removing obstacles and blessing new beginnings',
    price: '₹2,100',
    duration: '2-3 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Ganesh%20puja%20ceremony%20with%20decorated%20Lord%20Ganesha%20idol%2C%20priest%20performing%20traditional%20rituals%2C%20offerings%20of%20modak%20and%20flowers%2C%20devotional%20setup%20with%20diyas%20and%20incense%2C%20family%20worship%20scene%2C%20festive%20decorations%2C%20warm%20spiritual%20atmosphere%2C%20traditional%20elements&width=400&height=300&seq=service006&orientation=landscape'
  },
  {
    title: 'Durga Puja',
    description: 'Complete Durga Puja with traditional rituals and Goddess worship',
    price: '₹4,200',
    duration: '3-4 Hours',
    category: 'Festival',
    image: 'https://readdy.ai/api/search-image?query=Magnificent%20Durga%20puja%20ceremony%20with%20beautifully%20decorated%20Goddess%20Durga%20idol%2C%20priest%20performing%20elaborate%20rituals%2C%20devotees%20offering%20prayers%2C%20traditional%20dhunuchi%20dance%2C%20festive%20atmosphere%20with%20flowers%20and%20lights%2C%20spiritual%20celebration%2C%20ornate%20decorations&width=400&height=300&seq=service007&orientation=landscape'
  },
  {
    title: 'Lakshmi Puja',
    description: 'Goddess Lakshmi worship for wealth, prosperity and abundance',
    price: '₹2,800',
    duration: '2-3 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20Lakshmi%20puja%20ceremony%20with%20decorated%20altar%2C%20priest%20performing%20rituals%20with%20oil%20lamps%2C%20lotus%20flowers%20and%20coins%2C%20devotional%20setup%20for%20wealth%20and%20prosperity%20prayers%2C%20golden%20decorations%2C%20peaceful%20spiritual%20atmosphere%2C%20traditional%20elements&width=400&height=300&seq=service008&orientation=landscape'
  },
  {
    title: 'Kali Puja',
    description: 'Powerful Kali Puja for protection and removing negative energies',
    price: '₹3,500',
    duration: '3-4 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Intense%20Kali%20puja%20ceremony%20with%20decorated%20Goddess%20Kali%20idol%2C%20priest%20performing%20powerful%20rituals%2C%20traditional%20offerings%20and%20decorations%2C%20spiritual%20protection%20ceremony%2C%20devotional%20atmosphere%20with%20flowers%20and%20diyas%2C%20sacred%20ritual%20setup&width=400&height=300&seq=service009&orientation=landscape'
  },
  {
    title: 'Hanuman Puja',
    description: 'Lord Hanuman worship for strength, courage and divine protection',
    price: '₹1,500',
    duration: '1-2 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Devotional%20Hanuman%20puja%20ceremony%20with%20decorated%20Lord%20Hanuman%20idol%2C%20priest%20chanting%20Hanuman%20Chalisa%2C%20traditional%20offerings%20of%20sindoor%20and%20flowers%2C%20spiritual%20strength%20and%20protection%20prayers%2C%20peaceful%20temple%20setting%2C%20sacred%20atmosphere&width=400&height=300&seq=service010&orientation=landscape'
  },
  {
    title: 'Shiva Puja',
    description: 'Lord Shiva worship with Abhishekam and traditional rituals',
    price: '₹2,200',
    duration: '2-3 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Sacred%20Shiva%20puja%20ceremony%20with%20Shiva%20lingam%2C%20priest%20performing%20abhishekam%20with%20milk%20and%20water%2C%20traditional%20offerings%20of%20bilva%20leaves%20and%20flowers%2C%20devotional%20atmosphere%20with%20incense%20and%20diyas%2C%20spiritual%20worship%20setting&width=400&height=300&seq=service011&orientation=landscape'
  },
  {
    title: 'Vishnu Puja',
    description: 'Lord Vishnu worship for peace, prosperity and divine blessings',
    price: '₹2,000',
    duration: '2-3 Hours',
    category: 'Worship',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20Vishnu%20puja%20ceremony%20with%20decorated%20Lord%20Vishnu%20idol%2C%20priest%20performing%20traditional%20rituals%2C%20tulsi%20leaves%20and%20flowers%20offerings%2C%20devotional%20setup%20with%20golden%20decorations%2C%20peaceful%20spiritual%20atmosphere%2C%20sacred%20worship%20elements&width=400&height=300&seq=service012&orientation=landscape'
  }
];

const categories = ['All', 'Home', 'Worship', 'Wedding', 'Festival'];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of Hindu ceremonies and rituals performed by verified priests
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line"></i>
                      </div>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer" onClick={() => setSelectedService(service)}>
                    About this Service
                  </button>
                  <p className="mt-2 text-center text-sm text-gray-700">
                    For priest services, contact us at <a href="mailto:bmpoffice24x7@gmail.com" className="text-orange-600 underline">bmpoffice24x7@gmail.com</a>, 8977002911
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 text-gray-400 flex items-center justify-center">
                <i className="ri-search-line text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for service details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-orange-600 text-2xl" onClick={() => setSelectedService(null)}>&times;</button>
            <img src={selectedService.image} alt={selectedService.title} className="w-full h-48 object-cover object-top rounded mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.title}</h3>
            <span className="inline-block bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium mb-2">{selectedService.category}</span>
            <p className="text-gray-700 mb-2">{selectedService.description}</p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <i className="ri-time-line"></i>
              <span>Duration: {selectedService.duration || 'N/A'}</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
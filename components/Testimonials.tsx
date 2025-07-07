'use client';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'BookMyPujari made our Griha Pravesh ceremony perfect. The priest was knowledgeable and performed all rituals with devotion. Highly recommended!',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20man%20in%20traditional%20attire%20smiling%20warmly%2C%20friendly%20face%2C%20clean%20background%2C%20portrait%20style%2C%20confident%20and%20trustworthy%20appearance%2C%20middle-aged%2C%20wearing%20kurta%20or%20traditional%20Indian%20clothing%2C%20natural%20lighting%2C%20approachable%20expression&width=100&height=100&seq=testimonial001&orientation=squarish'
  },
  {
    name: 'Priya Patel',
    location: 'Delhi', 
    rating: 5,
    text: 'Amazing service! The priest arrived on time and conducted our Satyanarayana Puja beautifully. The booking process was so simple and transparent.',
    image: 'https://readdy.ai/api/search-image?query=Indian%20woman%20in%20traditional%20saree%20smiling%20warmly%2C%20friendly%20and%20elegant%20appearance%2C%20clean%20background%2C%20portrait%20style%2C%20confident%20expression%2C%20middle-aged%2C%20wearing%20colorful%20traditional%20Indian%20attire%2C%20natural%20lighting%2C%20approachable%20and%20trustworthy%20look&width=100&height=100&seq=testimonial002&orientation=squarish'
  },
  {
    name: 'Vikram Singh',
    location: 'Bangalore',
    rating: 5,
    text: 'We used BookMyPujari for our wedding ceremony. Everything was handled professionally and the rituals were performed with great devotion and knowledge.',
    image: 'https://readdy.ai/api/search-image?query=Indian%20man%20in%20formal%20traditional%20attire%20smiling%20confidently%2C%20professional%20appearance%2C%20clean%20background%2C%20portrait%20style%2C%20trustworthy%20and%20friendly%20expression%2C%20well-groomed%2C%20wearing%20traditional%20Indian%20formal%20wear%2C%20natural%20lighting&width=100&height=100&seq=testimonial003&orientation=squarish'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from families who have experienced our trusted service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400"></i>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
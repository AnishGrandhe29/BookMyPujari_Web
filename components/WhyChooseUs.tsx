'use client';

const features = [
  {
    icon: 'ri-shield-check-line',
    title: 'Verified Priests',
    description: 'All our priests are thoroughly verified and experienced in traditional rituals'
  },
  {
    icon: 'ri-price-tag-3-line',
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden costs or surprise charges'
  },
  {
    icon: 'ri-community-line',
    title: 'All Rituals',
    description: 'From daily pujas to grand ceremonies, we cover all Hindu rituals'
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Easy Process',
    description: 'Simple online booking process that takes just a few minutes'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BookMyPujari?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make it simple to connect with trusted priests for your sacred ceremonies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <i className={`${feature.icon} text-2xl text-orange-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { useRef } from 'react';
import { Code2, Smartphone, Globe, ChevronDown, Star, ArrowRight, Search, Mail } from 'lucide-react';

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Office workspace"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Does your local business need a website?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
            We create stunning, modern websites for businesses in Teddington and surrounding areas
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold 
              hover:bg-blue-700 transition-all transform hover:scale-105 animate-bounce-subtle
              flex items-center gap-2 mx-auto">
            Get Started
            <ArrowRight size={20} />
          </button>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-600" />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<Globe />}
              title="Professional Website"
              description="Beautiful, responsive website that looks great on all devices"
              price="£200"
              features={[
                "Mobile-friendly design",
                "Contact form",
                "Up to 5 pages",
                "SEO optimization",
                "Fast loading speed",
                "3 months free support"
              ]}
            />
            <ServiceCard 
              icon={<Search />}
              title="Google Business Profile"
              description="Optimize your Google Business presence to attract local customers"
              price="£100"
              features={[
                "Profile setup & verification",
                "Keyword optimization",
                "Photo optimization",
                "Business description",
                "Category selection",
                "Review management setup"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              text="They transformed our online presence completely. Our new website has helped us attract so many new customers!"
              author="Sarah Johnson"
              business="The Tea Room, Teddington"
              rating={5}
            />
            <TestimonialCard 
              text="Professional, responsive and incredibly talented. They understood exactly what we needed."
              author="Mark Thompson"
              business="Thompson's Hardware"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get Started Today</h2>
          <p className="text-center text-gray-600 mb-12">Fill out the form below and we'll get back to you within 24 hours</p>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="website">Professional Website (£200)</option>
                <option value="google">Google Business Profile (£100)</option>
                <option value="both">Both Services (£280)</option>
              </select>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold 
              hover:bg-blue-700 transition-all transform hover:scale-105 w-full md:w-auto
              flex items-center gap-2 justify-center">
              Send Message
              <Mail size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to grow your business online?</h2>
          <p className="text-xl mb-8">Let's create something amazing together</p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold 
              hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center gap-2">
            Contact Us Today
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Teddington, London</p>
              <p>info@teddingtonweb.com</p>
              <p>020 XXXX XXXX</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul>
                <li className="mb-2">Website Design (£200)</li>
                <li className="mb-2">Google Business Profile (£100)</li>
                <li className="mb-2">Bundle Deal (£280)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
              <ul>
                <li className="mb-2">Teddington</li>
                <li className="mb-2">Richmond</li>
                <li className="mb-2">Kingston upon Thames</li>
                <li className="mb-2">Hampton</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, price, features }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform 
      hover:-translate-y-1">
      <div className="text-center mb-6">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
          {React.cloneElement(icon, { size: 32, className: "text-blue-600" })}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-3xl font-bold text-blue-600">{price}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <ArrowRight size={16} className="text-blue-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ text, author, business, rating }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-500">{business}</p>
      </div>
    </div>
  );
}

export default App;
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovate, Automate, Elevate</h1>
          <p className="text-lg md:text-xl mb-8">Your partner in building the future of technology, from AI to IoT.</p>
          <Link href="/contact" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">
              Get in Touch
            </a>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">AI & Automation</h3>
              <p>Harness the power of AI to automate your workflows and drive efficiency.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">IoT & Embedded Systems</h3>
              <p>We build smart, connected devices to bring your ideas to life.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Web & Software Solutions</h3>
              <p>Custom websites, applications, and software tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nexflow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Expertise</h3>
              <p>Our team consists of experts in a wide range of technologies.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p>We are constantly pushing the boundaries of what's possible.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Partnership</h3>
              <p>We work closely with our clients to ensure their success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4">"Nexflow delivered an exceptional product that exceeded our expectations. Their team is professional, knowledgeable, and a pleasure to work with."</p>
              <p className="font-bold">- Placeholder Client 1</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4">"The automation solution provided by Nexflow has saved us countless hours and improved our efficiency dramatically. Highly recommended!"</p>
              <p className="font-bold">- Placeholder Client 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your next project?</h2>
          <p className="text-xl mb-8">Let's build something amazing together.</p>
          <Link href="/contact" legacyBehavior>
            <a className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-8 rounded-full">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

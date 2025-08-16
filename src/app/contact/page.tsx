const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Send us a message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-lg text-gray-600 mb-4">
            We'd love to hear from you. Here's how you can reach us:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="font-bold mr-2">Email:</span>
              <a href="mailto:contact@nexflow.com" className="text-blue-500">contact@nexflow.com</a>
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">Phone:</span>
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">Address:</span>
              <span>123 Tech Street, Silicon Valley, CA</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

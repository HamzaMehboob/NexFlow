import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Nexflow</h3>
            <p className="text-gray-400">
              Your partner in building the future of technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" legacyBehavior><a className="text-gray-400 hover:text-white">Home</a></Link></li>
              <li><Link href="/services" legacyBehavior><a className="text-gray-400 hover:text-white">Services</a></Link></li>
              <li><Link href="/about" legacyBehavior><a className="text-gray-400 hover:text-white">About</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="text-gray-400 hover:text-white">Contact</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nexflow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

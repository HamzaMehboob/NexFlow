const ServicesPage = () => {
  const services = [
    {
      title: "AI & Automation",
      description: "We provide cutting-edge AI solutions, including custom AI agents and workflow automation, to optimize your business processes and drive growth.",
      items: ["AI Workflow Design", "Custom AI Agents", "Process Automation", "TinyML Solutions"]
    },
    {
      title: "IoT & Embedded Systems",
      description: "From concept to production, we design and develop IoT devices and embedded systems that are reliable, scalable, and secure.",
      items: ["IoT Prototyping & Development", "Firmware Development", "Embedded Systems Design", "Hardware Solutions"]
    },
    {
      title: "Software & Web Development",
      description: "Our team builds high-performance, scalable, and secure web applications and custom software solutions to meet your specific needs.",
      items: ["Responsive Websites", "Web Applications", "Custom Software", "Hardware Integration"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            <ul className="list-disc list-inside space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      imageUrl: "https://placehold.co/300x300"
    },
    {
      name: "John Smith",
      role: "CTO & Co-Founder",
      imageUrl: "https://placehold.co/300x300"
    },
    {
      name: "Emily Jones",
      role: "Lead Engineer",
      imageUrl: "https://placehold.co/300x300"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">About Nexflow</h1>

      {/* Our Mission Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Our mission is to empower businesses with innovative technology solutions that drive progress and create a better future. We are committed to pushing the boundaries of what's possible and delivering exceptional value to our clients.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg text-gray-600">
          Founded in [Year], Nexflow started with a small team of passionate engineers who wanted to make a difference. Today, we are a thriving company with a diverse portfolio of projects and a growing list of satisfied clients. Our journey is one of continuous learning, growth, and a relentless pursuit of excellence.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

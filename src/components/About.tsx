const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy">
            About Me
          </h2>
          <div className="bg-card rounded-lg shadow-medium p-8 md:p-12">
            <p className="text-lg text-gray-medium leading-relaxed">
              Penultimate year Computer Science student at King's College London, specializing in full-stack
              development. Driven to solve meaningful, real-world problems by building user-centric applications,
              focusing on designing and implementing scalable and secure server-side architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
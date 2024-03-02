import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#BCE3F9] via-[#B2D7EC] to-[#A9CCE0]" id="projects">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 id="why-us" className="text-transparent bg-clip-text bg-gradient-to-r from-[#127C8C] to-[#2FAAC6] font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black">
            Why Us?
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCard
            src="/tech.png"
            title="Advanced Technology"
            description="We utilize the latest innovations in cloud computing to provide our clients with the best and most efficient solutions."
          />
          <ProjectCard
            src="/security.png"
            title="Security and Reliability"
            description="Data security is our top priority. Our services are secured with advanced encryption technologies and continuous backup systems."
          />
          <ProjectCard
            src="/flexibility.png"
            title="Flexibility and Scalability"
            description="Our cloud solutions are flexible and can be tailored to evolving business needs and requirements, allowing for the scaling of resources up or down as needed."
          />
          <ProjectCard
            src="/innovation.png"
            title="Innovation in Services"
            description="We continually develop our services to stay abreast of the latest trends and technologies, thus ensuring our clients have access to the most cutting-edge solutions."
          />
          <ProjectCard
            src="/experience.png"
            title="Experience and Trust"
            description="We have years of experience in the industry and the trust of many satisfied clients who rely on our services to run their businesses. We know what we do well."
          />
          <ProjectCard
            src="/green.png"
            title="Sustainable Development"
            description="We are committed to sustainable development, minimizing our environmental impact through energy efficiency and innovative business practices."
          />
          <ProjectCard
            src="/reach.png"
            title="Global Reach"
            description="Our services are available globally, enabling us to serve clients all over the world, regardless of their location."
          />
          <ProjectCard
            src="/tailored.png"
            title="Tailored Business Solutions"
            description="Our approach is to create bespoke solutions that cater to the specific needs of each client."
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;

import React from 'react';

const Team = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#BCE3F9] via-[#B2D7EC] to-[#A9CCE0]" id="team">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">

            <h1 id="about" className="text-transparent bg-clip-text bg-gradient-to-r from-[#127C8C] to-[#2FAAC6] font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black">
                    About Us
                </h1>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-80">
                        <img className="object-center object-cover w-full h-full" src="/priority.png" alt="photo" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p className="text-xl text-black font-bold">The priority</p>
                        <p className="text-base text-gray-800 font-normal">At InnoTechCloud</p>
                        <p className="text-base leading-relaxed text-gray-800 font-normal"> our priority is to provide cloud solutions that drive innovation and growth in every industry. Our infrastructure, based on the latest technologies and high-class security measures, allows us to offer services at the highest level, always keeping in mind the needs and requirements of our clients.</p>
                    </div>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-80">
                        <img className="object-center object-cover w-full h-full" src="/datacenter.png" alt="photo" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p className="text-xl text-black font-bold">Our data center</p>
                        <p className="text-base text-gray-800 font-normal">is the heart of our operation</p>
                        <p className="text-base leading-relaxed text-gray-800 font-normal">With enormous disk space and state-of-the-art data storage solutions, we are able to meet even the most demanding projects and workloads. We support a variety of industries, from small startups to large corporations, providing them with the necessary tools for storing, managing, and analyzing their valuable data.</p>
                    </div>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-80">
                        <img className="object-center object-cover w-full h-full" src="/innovation.png" alt="photo"/>
                    </div>
                    <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p className="text-xl text-black font-bold">Innovation and continuous improvement</p>
                        <p className="text-base text-gray-800 font-normal">are the foundations on which we build our future.</p>
                        <p className="text-base leading-relaxed text-gray-800 font-normal">We strive not only to follow current technology trends but also to actively shape the future of cloud computing. By collaborating with us, our clients can be confident that their data is in the hands of experts who constantly work to ensure the highest level of security, efficiency, and innovation.</p>
                    </div>
                </div>

                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-80">
                        <img className="object-center object-cover w-full h-full" src="/teams.png" alt="photo"/>
                    </div>
                    <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p className="text-xl text-black font-bold">The team.</p>
                        <p className="text-base text-gray-800 font-normal">We are specialists in their respective fields</p>
                        <p className="text-base leading-relaxed text-gray-800 font-normal">Our team is a dynamic blend of the finest. We are a group of dedicated professionals, united by a shared passion for innovation and excellence in technology. Each member brings unique skills and insights, allowing us to tackle complex challenges and deliver groundbreaking solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Team;

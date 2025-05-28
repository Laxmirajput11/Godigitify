import React from 'react'
import Image from 'next/image'
// import img from '../../assets/mission-vission-vector.70934ee2310f41731191.png'

const Vision = () => {
  const MissionData = [
    {
      number: '1',
      title: 'Empowering Businesses',
      description: 'Our mission is to empower businesses with innovative digital solutions, helping them grow and succeed in a fast-evolving world.'
    },
    {
      number: '2',
      title: 'Driving Digital Transformation',
      description: 'We strive to be the catalyst for digital transformation, enabling our clients to embrace new technologies and stay ahead of the curve.'
    },
    {
      number: '3',
      title: 'Building Lasting Partnerships',
      description: 'We are committed to building lasting partnerships, working closely with our clients as their trusted digital allies.'
    },
    {
      number: '4',
      title: 'Championing Quality & Integrity',
      description: 'Our mission includes delivering quality work with transparency and integrity, ensuring every project exceeds expectations.'
    }
  ];

  const VisionData = [
    {
      number: '1',
      title: 'Innovative Leadership',
      description: 'Our vision is to be recognized as a leader in digital innovation, setting benchmarks in creativity and technology.'
    },
    {
      number: '2',
      title: 'Global Impact',
      description: 'We envision making a global impact by delivering solutions that drive success for businesses worldwide.'
    },
    {
      number: '3',
      title: 'Sustainable Growth',
      description: 'Our vision includes fostering sustainable growth, both for our clients and our team, through continuous learning and improvement.'
    },
    {
      number: '4',
      title: 'Client-Centric Excellence',
      description: 'We are committed to a client-centric approach, ensuring every solution is tailored for maximum value and satisfaction.'
    }
  ];

  return (
    <>
      <div className="container md:w-4/5 px-5 mx-auto py-12 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="flex mb-2 md:mb-5 items-center">
            <span className="border-l-2 border-purple-500 h-6 mr-3"></span>
            <h1 className="text-lg font-bold text-purple-700">OUR PHILOSOPHY</h1>
          </div>
          <h1 className="text-lg md:text-3xl font-semibold mb-8">
            Our principles and
            <span className='text-purple-600 text-4xl md:text-7xl md:py-3 block'>convictions</span>
          </h1>
          <p className='text-justify text-gray-700'>
            We are dedicated to revolutionizing the digital landscape, nurturing innovation, and delivering value-driven solutions for our clients. Our goal is to create extraordinary digital experiences that shape the leaders of tomorrow.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-96 hidden md:flex items-center justify-center">
          <img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQnI3UFyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8" alt="Mission Vision" className="object-contain h-80 w-auto" />
        </div>
      </div>

      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">
        <div className="md:flex items-center md:pt-7">
          <div className="md:w-1/3 h-full flex justify-center pb-7 md:pb-0">
            <h1 className='md:text-5xl text-2xl font-semibold text-purple-700'>MISSION</h1>
          </div>
          <div className="md:w-2/3">
            <div className="container px-5 mx-auto flex flex-wrap">
              {MissionData.map((item) => (
                <div key={item.number} className="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-purple-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">{item.number}</div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-10 h-10 text-purple-500 bg-purple-100 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-2 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-md">{item.title}</h2>
                      <p className="leading-relaxed text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24">
        <div className="md:flex-row flex flex-col-reverse items-center justify-center">
          <div className="md:w-2/3">
            <div className="container mx-auto flex flex-wrap">
              {VisionData.map((item) => (
                <div key={item.number} className="flex relative py-3 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-purple-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">{item.number}</div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-10 h-10 text-purple-500 bg-purple-100 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-2 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-md">{item.title}</h2>
                      <p className="leading-relaxed text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 h-full flex justify-center">
            <h1 className='md:text-5xl text-2xl font-semibold text-purple-700 text-center'>VISION</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
import React from 'react';
import Arena from './Arena';
import { Link } from 'react-router-dom';
import { HomeIcon, ChevronRight, Code, Cloud, Layers, Bot, Globe } from 'lucide-react';

const services = [
  { icon: <Code size={28} />, title: 'DevOps Development' },
  { icon: <Cloud size={28} />, title: 'AWS Development' },
  { icon: <Layers size={28} />, title: 'FullStack Development' },
  { icon: <Globe size={28} />, title: 'Web Development' },
  { icon: <Bot size={28} />, title: 'ChatBot Development' },
  { icon: <Code size={28} />, title: 'ServiceNow Development' },
  { icon: <Code size={28} />, title: 'Splunk Development' },
];

function ItConsulting() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <nav className="inline-block rounded-lg bg-red-50 mb-8">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse px-5 py-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-300">
                <HomeIcon size={14} className="mr-2.5" />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <Link to="/it-consult" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-400">Services</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <span className="ms-1 text-sm font-medium text-gray-700">IT Consulting</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">IT Consulting</h1>

        <blockquote className="border-l-4 border-red-500 p-4 text-lg italic bg-red-50 text-gray-700 mb-10 shadow-md rounded-md text-center">
          Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do.
        </blockquote>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Expertise Areas
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 min-w-[250px] text-center"
              >
                <div className="text-red-500">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>
        <hr className="mt-16 border-t border-gray-300" />
        <Arena />
      </div>
    </div>
  );
};

export default ItConsulting;
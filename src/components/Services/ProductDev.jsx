import React from 'react';
import { Link } from 'react-router-dom';
import Arena from './Arena';
import { HomeIcon, ChevronRight } from 'lucide-react';
import ecom from '../../assets/ecom.png';
import cloud from '../../assets/cloud.png';
import devops from '../../assets/devops.png';

const services = [
  {
    title: 'ECommerce Websites',
    description: 'We specialize in building ECommerce Websites, including Full Stack Solutions.',
    image: ecom,
  },
  {
    title: 'Cloud Deployments',
    description: 'Providing Cloud Solutions like AWS Gateway, Twilio, Redshift, RDS, Lambda, Glue, and EMR.',
    image: cloud,
  },
  {
    title: 'DevOps Solutions',
    description: 'We automate and reduce operational costs with DevOps tools and services.',
    image: devops,
  },
];

function ProductDev(){
  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <nav className="inline-block rounded-lg bg-red-50 mb-6">
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
                <Link to="/product-dev" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-400">Services</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <span className="ms-1 text-sm font-medium text-gray-700">Product Development</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold text-center text-gray-800">Product Development</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <blockquote className="border-l-4 border-red-500 p-3 text-lg italic bg-red-50 text-gray-700 mb-10 shadow-md rounded-sm">
          Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do.
        </blockquote>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/80 text-red-600 text-xs font-bold px-2 py-1 rounded shadow-sm">
                NEW
              </div>
            </div>
          ))}
        </div>
      </div>
        <hr className="mt-16 border-t border-gray-300" />
      <Arena />
    </div>
  );
};

export default ProductDev;

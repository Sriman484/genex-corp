import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChevronRight } from 'lucide-react';
import Arena from './Arena';

function ItResourcing() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    { q: 'What is IT Resourcing?', a: 'IT Resourcing is the process of providing skilled IT professionals to meet your business needs.' },
    { q: 'How can GenexCorp help?', a: 'We offer consulting, project management, and technical expertise tailored to your requirements.' },
    { q: 'Can I request a custom solution?', a: 'Absolutely! Our team specializes in custom IT solutions for various industries.' }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-305 mx-auto">
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
                <Link to="/it-resource" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-400">Services</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <span className="ms-1 text-sm font-medium text-gray-700">IT Resourcing</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold text-center text-gray-800">IT Resourcing</h1>
      </div>

      <div className="grid grid-cols-1 max-w-305 mx-auto md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform border-t-4 border-red-400">
          <h2 className="text-xl font-bold mb-2 text-red-500">Consulting</h2>
          <p>Expert advice and strategic planning for your IT projects.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform border-t-4 border-red-400">
          <h2 className="text-xl font-bold mb-2 text-red-500">Staff Augmentation</h2>
          <p>Flexible IT staffing solutions to scale your team quickly.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform border-t-4 border-red-400">
          <h2 className="text-xl font-bold mb-2 text-red-500">Project Delivery</h2>
          <p>End-to-end project management and delivery by seasoned professionals.</p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 border-red-500 pl-4 text-lg italic text-gray-700 bg-red-50 p-4 mb-8 rounded-md shadow-sm">
            Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do
          </blockquote>
          <div className="space-y-6 text-gray-700">
            <p>
              Our team include a range of technical, functional and business analyst specialists such as business blueprint (BPM) creator, Business Analyst (KPI designers), developers for specific tools, user interface designers and support engineers. We also have a very experienced team IT consultants from different industry verticals one step away from your call to understand your pain point, create a solution and work within your team and make it a pleasant space where all business jigsaws are come into solvency.
            </p>
            <p>
              We want to develop trusting and valued relationships with you. Our methods aren’t focused on us, they are focused on you. We adopt a consultative, clear thinking approach, taking the time to help understand your business objectives before we define the best solutions for you.
            </p>
            <p>
              We can work collaboratively with your internal IT / Functional / Business Drivers, any of your external suppliers and even with any other IT providers you work with. Our consultants have a proven track record of creating strong strategic partnerships with their clients to help them make the most of their IT.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
              <button className="w-full text-left font-semibold text-gray-800 flex justify-between items-center" onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}>
                {faq.q}
                <span>{openFAQ === idx ? '-' : '+'}</span>
              </button>
              {openFAQ === idx && <div className="mt-2 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-16 border-t border-gray-300" />
      <Arena />
    </div>
  );
}

export default ItResourcing;
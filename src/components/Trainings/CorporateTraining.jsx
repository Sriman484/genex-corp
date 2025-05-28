import React, { useState } from 'react';
import { Download, X, Calendar, Users, Clock, MapPin, ChevronRight, HomeIcon, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import designer from "../../assets/designer.png";
import training from "../../assets/training.png";
import admin from "../../assets/admin.png";
import country from "../../assets/country.png";
import QuickEnrollment from './QuickEnrollment';
import EnrollForm from './EnrollForm';

const trainingSections = [
  {
    title: "Pre requisites for Designer & Developer:",
    description: "Organization having people on-board to change the technology platform / wanted to maintain in-house QlikView Application, having prior experience in SQL / Database Knowledge / Data Warehousing knowledge; this program is best fit for them.",
    image: designer,
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "How we conduct training:",
    description: "Onsite at a stretch of 5 Days for Designer & Developer Technical, Fundamental and Business Oriented case study based training schedule, which will cover your choice of Business Cases with hand on Exercise...",
    image: training,
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Pre requisites for Administrator:",
    description: "Prior Experience of Windows Environment, concept of windows error handler, and experience of Database clustering will be an added advantage.",
    image: admin,
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Services Country:",
    description: "India, USA, UK, Malaysia, Singapore, Thailand, UAE, South Africa, Kuwait, Bahrain",
    image: country,
    icon: <MapPin className="w-6 h-6 text-red-500" />,
  },
];

const upcomingBatches = [
  {
    type: "Virtual Class",
    start: "16th Jan, 2024",
    end: "24th Jan, 2024",
    seats: 10,
    status: "Open",
  },
  {
    type: "Virtual Class",
    start: "02nd Mar, 2024",
    end: "10th Mar, 2024",
    seats: 8,
    status: "Open",
  },
  {
    type: "Classroom Training",
    start: "25th Mar, 2024",
    end: "30th Mar, 2024",
    seats: 15,
    status: "Open",
  },
  {
    type: "Classroom Training",
    start: "01st June, 2024",
    end: "05th June, 2024",
    seats: 12,
    status: "Open",
  },
];

function CorporateTraining() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen  py-12 px-4 bg-gray-50">
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
                <Link to="/corporate-training" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-400">Trainings</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <span className="ms-1 text-sm font-medium text-gray-700">Corporate Training</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">Corporate Training Programs</h1>
      </div>

      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm mb-8">
          {['overview', 'schedule', 'pricing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`flex-1 py-3 px-6 text-sm font-medium rounded-lg transition-all ${selectedTab === tab
                ? 'bg-red-500 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {selectedTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Program Overview</h2>
                  <div className="grid gap-6">
                    {trainingSections.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-6 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-shrink-0">{section.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">{section.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{section.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Course Materials</h2>
                  <a
                    href="/GeneralCourseOutline.pdf"
                    className="flex items-center gap-3 p-4 rounded-lg border border-red-100 bg-red-50 hover:bg-red-100 transition-colors"
                  >
                    <Download className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-red-600">Download General Course Outline</span>
                  </a>
                </div>
              </motion.div>
            )}

            {selectedTab === 'schedule' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Upcoming Batches</h2>
                <div className="space-y-4">
                  {upcomingBatches.map((batch, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{batch.start} - {batch.end}</span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900">{batch.type}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{batch.seats} seats available</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
                          {batch.status}
                        </span>
                        <button
                          onClick={() => setShowModal(true)}
                          className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedTab === 'pricing' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Training Packages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col p-6 rounded-xl border-2 border-red-100 bg-red-50 h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Web Class</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-red-600">$800</span>
                      <span className="text-gray-600"> / person</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>Live online sessions</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>Course materials included</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>24/7 support</span>
                      </li>
                    </ul>
                    <div className="flex-grow" />
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                    >
                      Get Started
                    </button>
                  </div>

                  <div className="flex flex-col p-6 rounded-xl border-2 border-red-200 bg-white h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Classroom Training</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-3xl font-bold text-red-600">$1500 </span> for batch of 5
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-3xl font-bold text-red-600">$2500 </span> for batch of 10
                      </div>
                    </div>
                    <p className="text-sm text-red-600 mb-6">
                      *To avail discount contact our{' '}
                      <a href="mailto:sales@GenexCorp.com" className="underline hover:text-red-700">
                        sales team
                      </a>
                    </p>
                    <div className="flex-grow" />
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                    >
                      Contact Sales
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <QuickEnrollment />
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex justify-center items-center px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <EnrollForm setShowModal={setShowModal}/>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div >
  );
}

export default CorporateTraining;
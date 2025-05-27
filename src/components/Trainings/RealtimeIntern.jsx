import React from 'react';
import { Link } from 'react-router-dom';
import Arena from '../Services/Arena';
import { HomeIcon, ChevronRight } from 'lucide-react';

const internshipData = [
  {
    title: 'DevOps Development',
    points: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub/GitLab', 'Ansible'],
    tags: ['DevOps', 'CI/CD', 'Cloud'],
  },
  {
    title: 'Web Development',
    points: ['HTML/CSS', 'JavaScript', 'ReactJS', 'API', 'ExpressJS'],
    tags: ['Web', 'React', 'Frontend'],
  },
  {
    title: 'ServiceNow Development',
    points: ['Tickets', 'REST API', 'Workflow'],
    tags: ['ServiceNow', 'Automation'],
  },
  {
    title: 'ChatBot Development',
    points: ['Professional Bot', 'Azure (Free Tier)', 'WebApp ChatBot', 'Channels Integration', 'LUIS', 'QnA'],
    tags: ['ChatBot', 'AI', 'Azure'],
  },
  {
    title: 'AWS Development',
    points: ['CloudFront', 'S3 Bucket', 'EC2', 'UserData', 'IAM', 'Lambda', 'API Gateway', 'Developer Tools of AWS'],
    tags: ['AWS', 'Cloud', 'Lambda'],
  },
  {
    title: 'FullStack Development',
    points: ['MERN', 'Python', 'MongoDB', 'FireStore'],
    tags: ['FullStack', 'MERN', 'MongoDB'],
  },
  {
    title: 'Jobs',
    description: 'Explore our job openings and opportunities.',
    tags: ['Careers', 'Job Openings'],
  },
  {
    title: 'Splunk Development',
    points: [
      'Conducting Specialized / Real Time Splunk Workshop.',
      'Looking for candidates with following qualities:',
      'Self Starter, Proactive, Ability to Google and Youtube',
      'Have an AWS Account (Free Tier)',
      'Undergone Splunk Training, Basic Knowledge of SPL commands and Admin Commands.',
    ],
    tags: ['Splunk', 'AWS', 'Workshop', 'SPL'],
    spanTwo: true,
  },
];

function RealtimeIntern() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
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
                <Link to="/training" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-400">Trainings</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <span className="ms-1 text-sm font-medium text-gray-700">Realtime Internships</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">Realtime Internships</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
        {internshipData.map((item, index) => (
          <div
            key={index}
            className={`bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              item.spanTwo ? 'sm:col-span-2' : ''
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-red-500 mb-3">{item.title}</h3>

              {item.description && <p className="text-gray-500 mb-3">{item.description}</p>}

              {item.points && (
                <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-red-50 text-red-500 text-xs font-semibold px-2 py-1 rounded-full hover:bg-red-100 hover:text-red-600 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-16 m-25 border-gray-300" />
      <Arena />
    </div>
  );
}

export default RealtimeIntern;
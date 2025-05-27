import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Arena from './Services/Arena';
import { HomeIcon, Search, ChevronRight, MapPin, X } from 'lucide-react';

const jobListings = [
  {
    title: "Full Stack Developer",
    start: "Immediate",
    location: "Bangalore, India",
    description: "We're seeking a talented Full Stack Developer with a passion for building scalable, high-performance web applications.",
    requirements: [
      "Proficient in React.js, Node.js, and MongoDB",
      "Experience with RESTful APIs and Microservices",
      "Understanding of cloud deployment (AWS, Azure)",
      "Excellent problem-solving and debugging skills",
    ],
    responsibilities: [
      "Develop and maintain web applications using modern technologies",
      "Collaborate with designers and product managers",
      "Write clean, maintainable code following best practices",
      "Contribute to code reviews and technical discussions",
    ],
    tags: ["Full-time", "Remote", "2-3 Years Experience"],
  },
  {
    title: "AWS Cloud Engineer",
    start: "Immediate",
    location: "Hyderabad, India",
    description: "Join our team as an AWS Cloud Engineer and be a key player in designing and implementing scalable cloud solutions.",
    requirements: [
      "2-3 years of hands-on AWS experience",
      "Knowledge of EC2, S3, Lambda, CloudFormation, and VPC",
      "Understanding of networking, security, and automation tools",
      "Experience in CI/CD pipelines and DevOps practices",
    ],
    responsibilities: [
      "Manage AWS cloud infrastructure and services",
      "Monitor system health and performance",
      "Implement security best practices and compliance",
      "Collaborate with DevOps and development teams",
    ],
    tags: ["Full-time", "On-site", "2-3 Years Experience"],
  },
  {
    title: "DevOps Engineer",
    start: "Immediate",
    location: "Pune, India",
    description: "We're hiring a DevOps Engineer to enhance our CI/CD pipelines, improve deployment processes, and automate infrastructure.",
    requirements: [
      "2+ years of experience with DevOps tools (Jenkins, Docker, Kubernetes)",
      "Knowledge of AWS/GCP/Azure services",
      "Experience with infrastructure as code (Terraform, Ansible)",
      "Strong scripting skills (Bash, Python)",
    ],
    responsibilities: [
      "Develop and maintain CI/CD pipelines",
      "Automate infrastructure provisioning and configuration",
      "Monitor and troubleshoot system performance",
      "Work closely with developers to optimize workflows",
    ],
    tags: ["Full-time", "Hybrid", "2+ Years Experience"],
  },
];

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white py-12 max-w-310 mx-auto sm:px-6 lg:px-8 font-sans text-gray-800">
      <nav className="inline-block rounded-lg bg-red-50">
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
              <Link to="/support" className="ms-1 text-sm font-medium text-gray-700">Support</Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">Join GenexCorp</h2>
        <p className="text-lg text-gray-600">
          Explore exciting opportunities to shape the future of technology. Apply now and be part of an innovative and dynamic team.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-10">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
          <Search className="ml-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-4 py-2 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gray-50 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-2">{job.title}</h4>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1.5 text-red-500" />
                  <span>{job.location}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{job.description.slice(0, 60)}...</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-red-50 text-red-500 font-semibold px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No jobs found. Please try a different keyword.</p>
        )}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedJob(null)}
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-red-500 mb-4">{selectedJob.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="text-sm text-gray-600 mb-4">{selectedJob.description}</p>

            <div className="mb-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Requirements:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Responsibilities:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {selectedJob.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                alert(`Thank you for applying for ${selectedJob.title}! We'll get back to you soon.`);
                setSelectedJob(null);
              }}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-500 transition-colors"
            >
              Confirm Application
            </button>
          </div>
        </div>
      )}

      <hr className="my-16 border-gray-300" />
      <Arena />
    </div>
  );
}

export default Jobs;

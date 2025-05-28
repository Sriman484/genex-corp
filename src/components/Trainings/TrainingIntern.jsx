import React from "react";
import { Link } from "react-router-dom";
import Arena from "../Services/Arena";
import { HomeIcon, ChevronRight } from "lucide-react";

function TrainingIntern() {
  const trainingData = [
    {
      title: "Splunk Development",
      requirements: [
        "Conducting Specialized / Real Time Splunk Workshop. Looking for candidates with following qualities:",
        "Self Starter, Proactive, Ability to Google and Youtube",
        "Have an AWS Account (Free Tier)",
        "Undergone Splunk Training, Basic Knowledge of SPL commands and Admin Commands.",
      ],
    },
    {
      title: "ChatBot Development",
      requirements: ["Professional Bot", "Have an Azure (Free Tier)"],
      tools: ["WebApp ChatBot", "Channels Integration", "LUIS", "QNA"],
    },
    {
      title: "DevOps Development",
      tools: [
        "Jenkins",
        "Docker",
        "Kubernetes",
        "GitHub / GitActions / GitLab",
        "Ansible",
      ],
    },
    {
      title: "FullStack Development",
      tools: ["MERN", "Python", "MongoDB", "FireStore"],
    },
    {
      title: "Web Development",
      tools: ["HTML/CSS", "JavaScript", "ReactJS", "API", "ExpressJS"],
    },
    {
      title: "ServiceNow Development",
      tools: ["Tickets", "Rest API", "WorkFlow"],
    },
    {
      title: "AWS Development",
      tools: [
        "CloudFront",
        "S3 Bucket",
        "EC2",
        "User Data",
        "IAM",
        "Lambda",
        "API Gateway",
        "AWS Developer Tools",
      ],
    },
  ];

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
                <Link to="/training-intern" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-400">Trainings</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={12} className="mx-1 text-gray-500 rtl:rotate-180" />
                <Link to="/training" className="ms-1 text-sm font-medium text-gray-700">Trainings / Internships</Link>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">Trainings / Internship</h1>

        {(() => {
          const splunkCard = trainingData.find((t) => t.title === "Splunk Development");
          const otherCards = trainingData.filter((t) => t.title !== "Splunk Development");

          return (
            <>
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {otherCards.map((training, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 shadow-sm rounded-xl p-6
                      hover:shadow-lg transition-all duration-300 ease-in-out
                      transform hover:scale-[1.03] group"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-500 transition-colors duration-300">
                      {training.title}
                    </h3>

                    {training.requirements && (
                      <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1 pl-5">
                        {training.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-gray-900">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {training.tools && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {training.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="bg-red-50 text-red-500 group-hover:bg-gray-100 group-hover:text-gray-600 text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div
                  className="bg-white border border-gray-200 shadow-sm rounded-xl p-5
                    hover:shadow-lg transition-all duration-300 ease-in-out
                    transform hover:scale-[1.03] group md:w-2/3 lg:w-1/2"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-500 transition-colors duration-300 text-center">
                    {splunkCard.title}
                  </h3>

                  {splunkCard.description && (
                    <p className="mb-4 text-gray-700 leading-relaxed text-center">{splunkCard.description}</p>
                  )}

                  {splunkCard.requirements && (
                    <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1 pl-5">
                      {splunkCard.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-gray-900">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </>
          );
        })()}
      </div>

      <hr className="my-16 border-gray-300" />
      <Arena />
    </div>
  );
}

export default TrainingIntern;

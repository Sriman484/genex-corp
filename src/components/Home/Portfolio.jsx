import { HomeIcon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import Arena from "../Services/Arena";
import designer from "../../assets/designer.png";
import cloud from "../../assets/cloud.png";
import devops from "../../assets/devops.png";

function Portfolio() {
  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-305 mx-auto">
        <nav className="inline-block rounded-lg bg-red-50 mb-6">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse px-5 py-3">
            <li className="inline-flex items-center">
              <Link to="/"
                className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-300">
                <HomeIcon size={14} className="mr-2.5" />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight
                  size={12}
                  className="mx-1 text-gray-500 rtl:rotate-180"
                />
                <span className="ms-1 text-sm font-medium text-gray-700">
                  Portfolio
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Portfolio
        </h1>
      </div>
      <div className="max-w-7xl mx-auto p-8 mt-8">
        <blockquote className="border-l-4 border-red-500 pl-4 text-lg italic text-gray-700 bg-red-50 p-4 mb-8 rounded-md shadow-sm">
          For GenexCorp, “Welcome to possible of non-possibilities” is more than
          a slogan - it reflects our approach to every engagement
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-400 flex flex-col items-center">
            <img
              src={designer}
              alt="Team"
              className="w-16 h-16 mb-4 rounded-full shadow"
            />
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Diverse Team
            </h3>
            <p className="text-gray-700 text-center">
              Our team includes technical, functional, and business analyst
              specialists, BPM creators, KPI designers, developers, UI
              designers, and support engineers from various industry verticals.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400 flex flex-col items-center">
            <img
              src={cloud}
              alt="Consultative Approach"
              className="w-16 h-16 mb-4 rounded-full shadow"
            />
            <h3 className="text-xl font-bold text-yellow-600 mb-2">
              Consultative Approach
            </h3>
            <p className="text-gray-700 text-center">
              We develop trusted relationships, focusing on your needs. Our
              consultative, clear-thinking approach ensures we understand your
              objectives before defining the best solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-400 flex flex-col items-center">
            <img
              src={devops}
              alt="Collaboration"
              className="w-16 h-16 mb-4 rounded-full shadow"
            />
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Collaboration
            </h3>
            <p className="text-gray-700 text-center">
              We work with your internal teams, external suppliers, and IT
              providers. Our consultants have a proven track record of building
              strong partnerships to maximize your IT potential.
            </p>
          </div>
        </div>
        <hr className="mt-16 border-t border-gray-300" />
        <Arena />
      </div>
    </div>
  );
}

export default Portfolio;

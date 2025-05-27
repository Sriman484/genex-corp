import React, { useState } from "react";
import {
  BriefcaseBusiness,
  FileText,
  User,
  Wrench,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "Services",
    category: "Training",
    description:
      "Since we understand your delivery, your participants will be ready to take any challenge in Analytics within few days after training, with the curriculum we created, for experienced BI guys and relatively new one to understand.",
    href: "it-resource",
    tags: ["Training", "Analytics"],
  },
  {
    id: 2,
    icon: FileText,
    title: "Trainings / Internships",
    category: "Career",
    description:
      "Nobody would believe what is called need based training approach unless experienced. If you are really looking to take your career into BI and Analytics, this is the right place for you to get adopted with the foundational understanding.",
    href: "training-intern",
    tags: ["Training", "Internship", "Career", "BI"],
  },
  {
    id: 3,
    icon: User,
    title: "Consulting",
    category: "Consulting",
    description:
      "Leadership with Passion for Analytics - We change the way Organizations looks at their Business. With the ever growing need of Comprehensive Business Intelligence, organizations need to have talent which is cost effective. We are the one of those rare, who can solve analytic issues.",
    href: "it-consult",
    tags: ["Consulting", "Analytics"],
  },
  {
    id: 4,
    icon: Wrench,
    title: "Product Development",
    category: "Development",
    description:
      "Do you feel the HEAT from continuous change in Business Blueprint & Reporting? In the current dynamic digital environment, where opinions / needs keep changing, are you doing enough with right approach, for your Business to take inform decision? Are you aware that these days BI approach is “AGILE”. Walk-in to see how we can help.",
    href: "product-dev",
    tags: ["Product", "Agile", "BI"],
  },
];

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description, href, tags } = service;
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4 gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-500">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-semibold text-red-500">{title}</h3>
        </div>
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={href}
        className="mt-4 inline-block text-red-600 hover:text-red-800 text-sm font-medium"
      >
        Read More →
      </Link>
    </div>
  );
};

function Services() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(servicesData.flatMap((s) => [s.category, ...s.tags])),
  ];

  const filteredServices = servicesData.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" || s.category === filter || s.tags.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-305 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-500"
              />
            </div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}
              className="hidden md:block border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500">
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-8">No services found.</p>
        )}
      </div>
    </section>
  );
}

export default Services;

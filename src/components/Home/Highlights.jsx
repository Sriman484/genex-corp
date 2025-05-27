import React from "react";
import { motion } from "framer-motion";
import {  Zap,  Database,  Shield,  Layers,  Globe,  Mail,  Box,  BarChart2,  Cpu} from "lucide-react";

const highlights = [
  {
    icon: <BarChart2 size={24} />,
    text: "Provides self-service business intelligence for informed, innovative decisions",
  },
  {
    icon: <Zap size={24} />,
    text: "Allows user to explore and create new associations in business data",
  },
  {
    icon: <Layers size={24} />,
    text: "Combines data from multiple sources into a single, usable, moldable piece",
  },
  {
    icon: <Cpu size={24} />,
    text: "Offers complete analysis through ERP, CRM, data warehouses and more",
  },
  {
    icon: <Globe size={24} />,
    text: "Promotes collaboration with colleagues for improved decision-making",
  },
  {
    icon: <Box size={24} />,
    text: "Compresses data to save infrastructure resource",
  },
  {
    icon: <Globe size={24} />,
    text: "Embedded Map object enhances the capability of viewing",
  },
  {
    icon: <Shield size={24} />,
    text: "Role based security, AD based security enhance the distributed use",
  },
  {
    icon: <Database size={24} />,
    text: "No use of Database, it's a complete ETL tool with power of creating central repository in its proprietary database",
  },
  {
    icon: <Mail size={24} />,
    text: "Email Distribution and PDF publishing can be handled by QV Publisher, PDF Distributor and N-Printing solution",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Highlights = () => {
  return (
    <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-310 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your data into actionable insights
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex-1 min-w-[280px] max-w-[320px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-red-50 text-red-600">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 mt-1">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

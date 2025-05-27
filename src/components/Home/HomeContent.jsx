import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-all duration-300">
      <h2>
        <button
          type="button"
          onClick={onToggle}
          className={`flex items-center justify-between w-full px-6 py-4 font-semibold text-left bg-white hover:bg-red-50 duration-300 focus:outline-none ${
            isOpen ? "text-red-600" : "text-gray-800"
          }`}
          aria-expanded={isOpen}
        >
          <span className="text-lg">{title}</span>
          <ChevronDown
            size={20}
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180 text-red-600" : ""
            }`}
          />
        </button>
      </h2>
      {isOpen && (
        <div className="px-6 py-5 bg-red-50 border-t border-red-300 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

function HomeContent() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mb-15">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
        Articles About Us
      </h1>

      <AccordionItem
        title="Be a pioneer by 2017"
        isOpen={openIndex === 1}
        onToggle={() => toggle(1)}
      >
        <p className="mb-3 leading-relaxed">
          Over the past several years, the BI platform market has grown largely
          through companies investing in IT-led consolidation projects to
          standardize IT-centric BI platforms for large-scale systems of record.
          These have tended to be highly governed and centralized, where IT
          production reports were pushed out to managers and knowledge workers.
          Gartner predicts that going forward, companies will shift their future
          investment away from IT-developed reporting solutions toward
          business-user-led analysis solutions. IT will focus most of its effort
          on data modeling and governance. As a result, data discovery will
          displace IT-authored static reporting as the dominant BI and analytics
          user interaction paradigm for new implementations by 2015.
        </p>
        <p className="mb-3 italic text-sm text-right">- Ref Gartner article dated December 16, 2013</p>
        <a
          href="https://www.gartner.com/en/newsroom"
          className="inline-block text-red-600 hover:underline font-medium"
        >
          ➤ Read More
        </a>
      </AccordionItem>

      <AccordionItem
        title="Data discovery is the new normal, but where do we go from here?"
        isOpen={openIndex === 2}
        onToggle={() => toggle(2)}
      >
        <p className="mb-3 leading-relaxed">
          Smart data discovery has the potential to expand access to
          sophisticated interactive analysis and insights to business consumers
          and nontraditional BI users — the approximately 70 percent of users in
          organizations that currently do not use BI tools or have statistical
          backgrounds," said Ms. Sallam. "New approaches have the potential to
          transform how and which users can derive insights from data discovery
          tools. The potential business benefit will lead to a shift resulting
          in smart data discovery becoming standard features of most data
          discovery platforms.
        </p>
        <p className="mb-3 italic text-sm">- Ref Gartner article dated January 27, 2015</p>
        <a
          href="https://www.gartner.com/en/newsroom"
          className="inline-block text-red-600 hover:underline font-medium"
        >
          ➤ Read More
        </a>
      </AccordionItem>
    </div>
  );
}

export default HomeContent;

import { useState } from "react";

interface Tab {
  name: string;
  content: React.ReactNode;
}
const Tab = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="border-b border-white ">
        <nav className=" flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4 h-[30rem] overflow-scroll ">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;

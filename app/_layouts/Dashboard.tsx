import { useState } from "react";
import BackButton from "../_components/Back";
import Dropdown from "../_components/Dropdown";
import Tab from "../_components/Tabs";
import { faCircleUser, faLock, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  const content = [
    {
      title: "Call Opening",
      subtitle: "Was the purpose of the call stated in the beginning?",
      questions: [
        "Did the PST member greet the customer and use the call opening with good energetic tone?",
        "Did the PST member use the right salutation and greeting on the email?",
      ],
    },
    {
      title: "Greeting",
      subtitle: "Did the salesperson use an appropriate opening greeting?",
      questions: [
        "Did the PST member greet the customer and use the call opening with good energetic tone?",
        "Did the PST member use the right salutation and greeting on the email?",
      ],
    },
    {
      title: "Call Closing",
      subtitle:
        " Did the salesperson summarize the key points discussed during the call?",
      questions: [
        "Did the PST member greet the customer and use the call opening with good energetic tone?",
        "Did the PST member use the right salutation and greeting on the email?",
      ],
    },
    {
      title: "Confidence",
      subtitle:
        "Did the sales person appear confident and knowledgeable about the product?",
      questions: [
        "Did the PST member greet the customer and use the call opening with good energetic tone?",
        "Did the PST member use the right salutation and greeting on the email?",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const tabs = [
    {
      name: "Setup",
      content: (
        <div className="space-y-4 border border-gray-200 shadow-sm rounded-lg py-2 ">
          {content.map((item, index) => (
            <Dropdown
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="space-y-2">
                <div className="border rounded-lg p-4 shadow-sm mb-4 text-sm">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-400">
                      {item.subtitle}
                      <FontAwesomeIcon
                        icon={faLock}
                        size="sm"
                        className="text-gray-800 ml-4"
                      />
                    </p>

                    <button className="h-6 px-2 rounded-md border border-gray-400 bg-gray-100 text-indigo-600 hover:bg-gray-200 transition-all">
                      <FontAwesomeIcon
                        icon={faPen}
                        size="sm"
                        className="text-indigo-600 mr-2"
                      />
                      Edit
                    </button>
                  </div>
                  {item.questions.map((question, qIndex) => (
                    <div key={qIndex} className="text-xs">
                      <p>{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Dropdown>
          ))}
        </div>
      ),
    },
    {
      name: "Sample Output",
      content: <div>Sample Output Content</div>,
    },
  ];

  return (
    <div className="w-7/12 bg-yellow-100">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        Analyse the calls for Soft Skills Coaching
      </h1>
      <div className="">
        <div className="mx-auto bg-white shadow-md rounded-3xl px-6 py-3">
          <Tab tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import { useState } from "react";
import BackButton from "../_components/Back";
import Dropdown from "../_components/Dropdown";
import Tab from "../_components/Tabs";
import { faCaretDown, faLock, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

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
              <p className="text-xs uppercase mb-2 text-gray-500">
                How will this be scored?
              </p>
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

                    <button className="h-6 px-2 rounded-md border border-gray-400 bg-gray-100 text-blue-800 hover:bg-gray-200 transition-all">
                      <FontAwesomeIcon
                        icon={faPen}
                        size="sm"
                        className="text-blue-700 mr-2"
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
    <div className="w-7/12 mt-8">
      <BackButton />
      <h1 className="text-2xl font-bold my-4 text-blue-900">
        Analyse the calls for Soft Skills Coaching
      </h1>
      <div className="text-blue-900 text-md mb-6 font-semibold">
        <p className="flex gap-2 items-center text-sm mb-1">
          <FontAwesomeIcon icon={faCaretDown} size="sm" /> How does it work?
        </p>
        <p className="flex gap-2 items-center text-sm">
          <FontAwesomeIcon icon={faCaretDown} size="sm" /> When should you use
          this?
        </p>
      </div>
      <div className="">
        <div className="mx-auto bg-white shadow-md rounded-3xl px-6 py-3">
          <Tab tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

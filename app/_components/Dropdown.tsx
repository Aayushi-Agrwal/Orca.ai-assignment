import { MouseEventHandler } from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({
  title,
  children,
  subtitle,
  isOpen,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  subtitle: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 px-4 py-2">
      <button
        className="w-full text-left flex flex-col justify-center"
        onClick={onClick}
      >
        <span className="text-sm font-semibold flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="lg"
            className="text-indigo-600"
          />
          {title}
        </span>
        <div className="flex items-center gap-2 my-4">
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-[-90deg]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <span className="text-sm">{subtitle}</span>
        </div>
      </button>
      {isOpen && <div className="ml-6 text-gray-600 text-sm">{children}</div>}
    </div>
  );
};

export default Dropdown;

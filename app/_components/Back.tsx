import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton() {
  return (
    <div className="h-6 w-16 text-sm flex  gap-1 items-center justify-center rounded-md bg-gray-100 text-blue-900 cursor-default hover:bg-gray-200 transition-all">
      <FontAwesomeIcon icon={faArrowLeft} size="sm" /> Back
    </div>
  );
}

export default BackButton;

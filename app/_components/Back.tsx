import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton() {
  return (
    <div className="flex text-sm text-blue-900 items-center gap-6">
      <div className="h-6 w-16  flex gap-1 items-center justify-center rounded-md bg-gray-100  cursor-default hover:bg-gray-200 transition-all">
        <FontAwesomeIcon icon={faArrowLeft} size="sm" /> Back
      </div>
      <p>Templates/Sales Effectiveness/ BANT</p>
    </div>
  );
}

export default BackButton;

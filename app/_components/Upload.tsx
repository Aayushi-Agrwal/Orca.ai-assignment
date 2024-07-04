import { faGoogleDrive, faHubspot } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faCircleInfo,
  faCloudArrowUp,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadAndIntegrations = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg h-2/3">
      <h2 className="text-lg font-semibold mb-4">
        Upload Videos, Audio or Transcripts
      </h2>
      <div className="space-y-4 mb-6">
        <button className="w-full flex items-center justify-center h-14 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
          <FontAwesomeIcon
            icon={faGoogleDrive}
            size="sm"
            className="w-6 h-6 mr-3"
          />

          <span className="w-2/3 text-left text-[0.9rem]">
            Upload files from Drive
          </span>
        </button>
        <button className="w-full flex items-center justify-center h-14 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            size="sm"
            className="w-6 h-6 mr-3"
          />
          <span className="w-2/3 text-left text-[0.9rem]">
            Upload files from this computer
          </span>
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-4">Data Integrations</h2>
      <div className="space-y-2">
        <div className="flex items-center mb-2 justify-between">
          <span className="font-semibold flex items-center">
            <FontAwesomeIcon
              icon={faHubspot}
              size="sm"
              className="w-6 h-6 mr-3"
            />
            HubSpot
          </span>
          <span className="ml-2 p-1 bg-gray-100 text-gray-600 text-xs rounded">
            CRM
          </span>
        </div>
        <div className="ml-4">
          <div className=" flex items-center my-4">
            <input type="checkbox" id="integration1" className="mr-2" />
            <label htmlFor="integration1" className="text-sm">
              Some data integrations I would have to
            </label>
          </div>
          <div className="flex items-center my-4">
            <input type="checkbox" id="integration2" className="mr-2" />
            <label htmlFor="integration2" className="text-sm">
              Some data integration
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAndIntegrations;

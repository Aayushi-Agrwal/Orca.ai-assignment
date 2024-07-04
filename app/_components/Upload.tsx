import Image from "next/image";

const UploadAndIntegrations = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Upload Videos, Audio or Transcripts
      </h2>
      <div className="space-y-4 mb-6">
        <button className="w-full flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
          <img
            src="/path/to/google-drive-logo.png"
            alt="Google Drive"
            className="w-6 h-6 mr-3"
          />
          <span>Upload files from Drive</span>
        </button>
        <button className="w-full flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
          <img
            src="/path/to/computer-upload-icon.png"
            alt="Computer Upload"
            className="w-6 h-6 mr-3"
          />
          <span>Upload files from this computer</span>
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-4">Data Integrations</h2>
      <div className="space-y-2">
        <div className="flex items-center mb-2">
          <img
            src="/path/to/hubspot-logo.png"
            alt="HubSpot"
            className="w-6 h-6 mr-3"
          />
          <span className="font-semibold">HubSpot</span>
          <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-600 text-sm rounded">
            CRM
          </span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <input type="checkbox" id="integration1" className="mr-2" />
            <label htmlFor="integration1">
              Some data integration I have to ask about
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="integration2" className="mr-2" />
            <label htmlFor="integration2">Some data integration</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAndIntegrations;

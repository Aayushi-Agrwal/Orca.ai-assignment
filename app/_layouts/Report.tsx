import Navbar from "../_components/Navbar";
import UploadAndIntegrations from "../_components/Upload";

function Report() {
  return (
    <div className="relative right-0 w-3/12 px-4 flex flex-col gap-12">
      <Navbar imageSrc="/profilepic.jpg" />
      <UploadAndIntegrations />
      <button className="py-4 w-full bg-blue-700 rounded-2xl text-white hover:bg-blue-800 transition-all">
        Generate Report
      </button>
    </div>
  );
}

export default Report;

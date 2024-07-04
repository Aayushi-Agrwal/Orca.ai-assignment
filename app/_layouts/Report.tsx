import Navbar from "../_components/Navbar";
import UploadAndIntegrations from "../_components/Upload";
import UserCard from "../_components/User";

function Report() {
  return (
    <div className="w-3/12 px-4 mt-8 flex flex-col gap-12">
      <Navbar imageSrc="/profilepic.jpg" />
      <UploadAndIntegrations />
    </div>
  );
}

export default Report;

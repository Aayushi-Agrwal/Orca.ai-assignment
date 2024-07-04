import Link from "next/link";
import UserCard from "../_components/User";

const Sidebar = () => {
  return (
    <div className="w-1/6 ">
      <div className="bg-white text-blue-900 rounded-2xl flex flex-col items-center shadow-md absolute top-8 bottom-8 left-8 px-8">
        <h2 className="my-8 text-2xl font-semibold mb-6">ORCA AI</h2>
        <div className="border border-gray-100 w-full"></div>
        <nav className="mt-8">
          <ul>
            <li>
              <Link href="/">
                <p className="block py-2 px-4 text-gray-400 hover:bg-gray-200 transition-all rounded-md">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/templates">
                <p className="block py-2 px-4  text-gray-400 hover:bg-gray-200 transition-all rounded-md">
                  Templates
                </p>
              </Link>
            </li>
            <li>
              <Link href="/reports">
                <p className="block py-2 px-4  text-gray-400 hover:bg-gray-200 transition-all rounded-md">
                  Reports
                </p>
              </Link>
            </li>
            <li>
              <Link href="/sales-performance">
                <p className="block py-2 px-4  text-gray-400 hover:bg-gray-200 transition-all rounded-md">
                  Sales Performance
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="fixed bottom-16">
          <UserCard
            name="Adela Parkson"
            role="Manager"
            imageSrc="/profilepic.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

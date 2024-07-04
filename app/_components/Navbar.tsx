import Image from "next/image";
import {
  faBell,
  faCircleInfo,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 shadow rounded-3xl ">
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full w-1/2">
        <FontAwesomeIcon icon={faSearch} size="sm" className="ml-2 mr-3" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-gray-500 placeholder:text-sm"
        />
      </div>
      <FontAwesomeIcon icon={faBell} className="text-gray-500" />
      <FontAwesomeIcon icon={faMoon} className="text-gray-500" />
      <FontAwesomeIcon icon={faCircleInfo} className="text-gray-500" />
      <div className="relative w-8 h-8">
        <Image
          className="rounded-full"
          src={imageSrc}
          alt="User's picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    // </div>
  );
};

export default Navbar;

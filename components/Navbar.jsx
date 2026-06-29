import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        <img
          src={logo}
          alt="Logo"
          className="w-60 object-contain"
        />

        <div className="hidden md:flex items-center gap-7">

          <button className="text-gray-700">
            EN
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-md font-semibold">
            Sign up
          </button>

          <button className="border border-gray-400 px-8 py-3 rounded-md hover:bg-gray-100 transition">
            Log in
          </button>

          <button>
            <HiMenuAlt3
              size={32}
              className="text-blue-600"
            />
          </button>

        </div>

        <button className="md:hidden">
          <HiMenuAlt3
            size={34}
            className="text-blue-600"
          />
        </button>

      </div>
    </header>
  );
};

export default Navbar;
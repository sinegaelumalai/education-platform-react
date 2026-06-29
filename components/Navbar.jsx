import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSchool,
  FaBriefcase,
  FaHome,
  FaMobileAlt,
  FaGraduationCap,
  FaRegNewspaper,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { icon: <FaSchool />, text: "School" },
    { icon: <FaBriefcase />, text: "Work" },
    { icon: <FaHome />, text: "Home" },
    { icon: <FaMobileAlt />, text: "Learning apps" },
    { icon: <FaGraduationCap />, text: "Self study" },
    { icon: <FaRegNewspaper />, text: "News", badge: 5 },
  ];

  return (
    <header className="w-full bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        <img
          src={logo}
          alt="Logo"
          className="w-60 object-contain"
        />

        <div className="hidden md:flex items-center gap-7">

          <button className="text-gray-700 hover:text-blue-600 transition">
            EN
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold"
          >
            Sign up
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="border border-gray-400 px-8 py-3 rounded-md hover:bg-gray-100"
          >
            Log in
          </motion.button>

          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: .9 }}
            onClick={() => setOpen(!open)}
          >
            <HiMenuAlt3
              size={32}
              className="text-blue-600"
            />
          </motion.button>

        </div>

        {/* Mobile */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HiMenuAlt3
            size={34}
            className="text-blue-600"
          />
        </button>

        {/* Dropdown */}

        <AnimatePresence>

          {open && (

            <motion.div
              ref={menuRef}
              initial={{
                opacity: 0,
                y: -20,
                scale: .95
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: .95
              }}
              transition={{
                duration: .3
              }}
              className="absolute top-24 right-10 bg-white rounded-[35px] shadow-2xl w-72 p-7"
            >

              <p className="text-gray-400 text-sm mb-5">
                Burger menu
              </p>

              <div className="space-y-5">

                {menuItems.map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      x: 8
                    }}
                    className="flex items-center gap-4 cursor-pointer font-semibold text-lg"
                  >

                    <span className="text-gray-700">
                      {item.icon}
                    </span>

                    <span>
                      {item.text}
                    </span>

                    {item.badge && (
                      <span className="ml-auto bg-yellow-400 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                        {item.badge}
                      </span>
                    )}

                  </motion.div>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;
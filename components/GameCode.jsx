import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logos from "../assets/logos.png";

const GameCode = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F7BE36] rounded-md py-28 flex flex-col items-center"
        >

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src={logos}
            alt="Logo"
            className="w-72 mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-full shadow-lg flex items-center w-full max-w-md h-16 px-6"
          >
            <input
              type="text"
              placeholder="Write the code here"
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-gray-400"
            />

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight className="text-3xl text-gray-400 hover:text-[#4363F5] transition" />
            </motion.button>

          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 text-gray-500"
          >
            Or try with{" "}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-[#4363F5] cursor-pointer inline-block"
            >
              1234
            </motion.span>
          </motion.p>

        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-2xl text-[#444]">
          Still more?{" "}

          <motion.span whileHover={{ x: 5 }} className="inline-block">
            <Link
              to="/features-games"
              className="text-[#4566F7] font-bold underline hover:text-blue-700 transition"
            >
              Take a look to our features games
            </Link>
          </motion.span>

        </p>
      </motion.div>

    </section>
  );
};

export default GameCode;

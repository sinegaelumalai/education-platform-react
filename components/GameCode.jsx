import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logos from "../assets/logos.png";

const GameCode = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">

      {/* Yellow Box */}

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#F7BE36] rounded-md py-28 flex flex-col items-center">

          <img
            src={logos}
            alt="Logo"
            className="w-72 mb-10"
          />

          <div className="bg-white rounded-full shadow-lg flex items-center w-full max-w-md h-16 px-6">

            <input
              type="text"
              placeholder="Write the code here"
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-gray-400"
            />

            <button>
              <FaArrowRight className="text-3xl text-gray-400 hover:text-[#4363F5] transition" />
            </button>

          </div>

          <p className="mt-5 text-gray-500">
            Or try with{" "}
            <span className="text-[#4363F5] cursor-pointer">
              1234
            </span>
          </p>

        </div>

      </div>

      {/* Bottom Link */}

      <div className="text-center mt-16">

        <p className="text-2xl text-[#444]">
          Still more?{" "}

          <Link
            to="/features-games"
            className="text-[#4566F7] font-bold underline hover:text-blue-700 transition"
          >
            Take a look to our features games
          </Link>

        </p>

      </div>

    </section>
  );
};

export default GameCode;
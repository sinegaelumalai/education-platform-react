import { motion } from "framer-motion";
import box from "../assets/box.png";

const FeaturesGames = () => {
  return (
    <section className="min-h-screen bg-[#f7c52b] flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={box}
          alt="Features Game"
          className="w-full max-w-4xl mx-auto"
        />

      </motion.div>

    </section>
  );
};

export default FeaturesGames;

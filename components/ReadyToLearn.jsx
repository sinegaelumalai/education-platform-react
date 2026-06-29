import { motion } from "framer-motion";

const ReadyToLearn = () => {
  return (
    <section className="bg-gradient-to-r from-[#4564F5] to-[#2F52F3] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-white"
        >
          Ready to make learning fun?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl text-white/90"
        >
          Join millions of learners and educators worldwide
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-white text-[#4564F5] px-12 py-4 rounded-md text-lg font-bold shadow-lg transition-colors"
        >
          Get started for free
        </motion.button>
      </div>
    </section>
  );
};

export default ReadyToLearn;

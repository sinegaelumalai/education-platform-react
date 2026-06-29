import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create",
    description: "Create engaging quizzes and interactive learning games in minutes.",
  },
  {
    number: "02",
    title: "Share",
    description: "Share with your students, colleagues, or friends instantly.",
  },
  {
    number: "03",
    title: "Play",
    description: "Play live or at your own pace and track progress in real-time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#2D241D]">
            How it works
          </h2>
          <div className="w-24 h-1 bg-[#4967F7] rounded-full mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center"
            >
              <motion.span
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block text-6xl font-black text-[#4967F7]/20"
              >
                {step.number}
              </motion.span>
              <h3 className="text-2xl font-bold text-[#2D241D] mt-4">
                {step.title}
              </h3>
              <p className="mt-4 text-lg text-[#666] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

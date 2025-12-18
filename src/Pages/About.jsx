import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20 pt-[100px] lg:pt-[120px] mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariant}
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10 text-center"
        >
          About Me
        </motion.h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-green-600 mb-3">
              Customer Support Specialist
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Skilled in delivering excellent customer service through email,
              chat, and phone support. I handle customer inquiries, troubleshoot
              issues, and ensure a smooth and satisfying customer experience.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Virtual Assistant
            </h3>
            <p className="text-gray-800 leading-relaxed">
              I offer reliable administrative support such as scheduling, email
              management, data entry, and task coordination. My goal is to help
              you stay organized, productive, and focused on high‑priority
              tasks.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Operations Manager
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Experienced in streamlining business operations, supervising
              teams, and implementing effective workflows. I ensure processes
              run smoothly and contribute to achieving organizational goals.
            </p>
          </motion.div>
        </div>

        {/* Extra Section - About Summary */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariant}
          className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Who I Am
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a dedicated and detail‑oriented professional with experience in
            customer service, administrative support, and operations management.
            My mission is to help businesses operate efficiently while
            delivering exceptional experiences to clients and customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

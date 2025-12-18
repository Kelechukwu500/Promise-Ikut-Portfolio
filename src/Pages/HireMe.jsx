import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const HireMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20 pt-[100px] lg:pt-[120px]">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariant}
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12"
        >
          Hire Me
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
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Professional Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed">
              With years of experience in customer support, virtual assistance,
              and operations management, I bring efficiency, reliability, and
              attention to detail to every project.
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
              Problem Solving
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I am skilled at identifying challenges, streamlining processes,
              and implementing effective solutions that enhance productivity and
              client satisfaction.
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
              Collaboration & Communication
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Excellent communication and collaboration skills allow me to work
              seamlessly with teams, clients, and stakeholders to achieve goals
              and maintain strong professional relationships.
            </p>
          </motion.div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariant}
          className="mt-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            I am passionate about helping businesses grow and succeed. Whether
            you need assistance in customer support, managing operations, or
            providing administrative support, I am ready to contribute my
            expertise and dedication to your team.
          </p>

          <Link
            to="/Cv.pdf"
            target="_blank"
            download
            className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Download My CV
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;

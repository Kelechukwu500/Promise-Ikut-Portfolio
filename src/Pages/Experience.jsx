
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const workExperienceData = [
  {
    position: "Customer Support Specialist",
    company: "TechSolutions Ltd",
    location: "Port Harcourt",
    duration: "Jan 2018 - Dec 2019",
    description:
      "Handled customer queries, resolved complaints, and ensured high satisfaction rates. Managed communication channels and provided timely support.",
  },
  {
    position: "Virtual Assistant",
    company: "Global Assist Services",
    location: "Port Harcourt",
    duration: "Jan 2020 - Dec 2020",
    description:
      "Provided administrative and operational support to clients remotely. Scheduled meetings, managed emails, and assisted in project coordination.",
  },
  {
    position: "Customer Support & Operations Manager",
    company: "Trade Enablers Ltd",
    location: "Lagos",
    duration: "Jan 2021 - Dec 2022",
    description:
      "Oversaw day-to-day operations, managed teams, optimized workflows, and implemented strategies to improve efficiency and performance.",
  },
  {
    position: "Freelance Upwork Professional",
    company: "Upwork",
    location: "Worldwide",
    duration: "Jan 2023 - Present",
    description:
      "Provided remote customer support, virtual assistance, and operational consulting for various clients worldwide on Upwork.",
  },
];

const WorkExperienceCard = ({ job }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start("visible");
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 flex flex-col gap-4"
    >
      <h3 className="text-xl lg:text-2xl font-semibold text-blue-600">
        {job.position}
      </h3>
      <p className="text-gray-700 font-medium">
        {job.company} • {job.location}
      </p>
      <p className="text-gray-500 mt-1">{job.duration}</p>
      <p className="text-gray-700 mt-3">{job.description}</p>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20 pt-[100px] lg:pt-[120px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workExperienceData.map((job, index) => (
            <WorkExperienceCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

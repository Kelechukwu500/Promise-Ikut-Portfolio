import React from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image7 from "../assets/Image7.jpg";
import Image8 from "../assets/Image8.jpg";
import Image9 from "../assets/Image9.jpg";
import Image10 from "../assets/Image10.jpg";
import Image11 from "../assets/Image11.jpg";
import Image12 from "../assets/Image12.jpg";
import Image13 from "../assets/Image13.jpg";
import Image14 from "../assets/Image14.jpg";
import Image15 from "../assets/Image15.jpg";
import Image16 from "../assets/Image16.jpg";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: Image1,
    title: "Project One",
    description:
      "Delivering innovative customer solutions with efficiency and excellence.",
  },
  {
    id: 2,
    image: Image2,
    title: "Project Two",
    description:
      "Streamlined workflows and optimized client communication channels.",
  },
  {
    id: 3,
    image: Image3,
    title: "Project Three",
    description: "Enhanced social media engagement through targeted campaigns.",
  },
  {
    id: 4,
    image: Image4,
    title: "Project Four",
    description:
      "Seamless management of CRM systems for improved client satisfaction.",
  },
  {
    id: 5,
    image: Image5,
    title: "Project Five",
    description:
      "Executed virtual assistance projects with precision and reliability.",
  },
  {
    id: 6,
    image: Image6,
    title: "Project Six",
    description: "Boosted operational efficiency and workflow optimization.",
  },
  {
    id: 7,
    image: Image7,
    title: "Project Seven",
    description:
      "Provided top-notch customer support, resolving issues promptly.",
  },
  {
    id: 8,
    image: Image8,
    title: "Project Eight",
    description:
      "Improved client engagement and retention through proactive communication.",
  },
  {
    id: 9,
    image: Image9,
    title: "Project Nine",
    description: "Handled complex operations data and reporting with accuracy.",
  },
  {
    id: 10,
    image: Image10,
    title: "Project Ten",
    description: "Developed and maintained professional client relationships.",
  },
  {
    id: 11,
    image: Image11,
    title: "Project Eleven",
    description: "Designed creative social media content to drive engagement.",
  },
  {
    id: 12,
    image: Image12,
    title: "Project Twelve",
    description:
      "Implemented process improvements for smoother project delivery.",
  },
  {
    id: 13,
    image: Image13,
    title: "Project Thirteen",
    description:
      "Ensured exceptional customer experiences across multiple platforms.",
  },
  {
    id: 14,
    image: Image14,
    title: "Project Fourteen",
    description:
      "Streamlined virtual assistance tasks to improve productivity.",
  },
  {
    id: 15,
    image: Image15,
    title: "Project Fifteen",
    description: "Managed multiple client projects with consistent results.",
  },
  {
    id: 16,
    image: Image16,
    title: "Project Sixteen",
    description: "Delivered high-quality support and professional services.",
  },
];

const ProjectGallery = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-12 mt-18">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Project Gallery
        </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          {project.title}
        </h3>
        <p className="text-black text-sm">
          {project.description}
        </p>
      </div>
    </div>
  ))}
</div>

         

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/hire-me")}
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition-colors duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

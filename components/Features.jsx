import React from "react";
import { IoColorPalette } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hover: {
    boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.5)", // Tailwind's cyan-200 color in rgba format
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: { height: 0, y: 10 },
  visible: {
    height: "auto",
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Tab = ({ title, icon, des }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className="flex hover:shadow-2xl shadow-cyan-300 bg-none items-center flex-col"
    >
      <motion.div variants={textVariants}>{icon}</motion.div>
      <motion.h3 variants={textVariants}>{title}</motion.h3>
      <motion.p variants={textVariants} className="text-wrap max-w-md">
        {des}
      </motion.p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="text-center my-16">
      <h1>Unleash your Creativity</h1>
      <h3>
        Our AI-powered image generation tool offers a wide range of capabilities
        to help you bring your ideas to life.
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex m-16 py-10  *:p-8 justify-center md:flex-nowrap flex-wrap gap-10"
      >
        <Tab
          title="Text-to-Image"
          icon={<FaPaintBrush className="size-12" />}
          des="Describe your vision and let our AI transform it into a stunning visual."
        />
        <Tab
          title="Image Editing"
          icon={<FaPencil className="size-12" />}
          des="Enhance, manipulate, and refine your images with our advanced editing tools."
        />
        <Tab
          title="Style Transfer"
          icon={<IoColorPalette className="size-12" />}
          des="Apply the artistic style of your choice to any image and create unique masterpieces."
        />
      </motion.div>
    </section>
  );
};

export default Features;

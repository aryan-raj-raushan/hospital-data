import { motion } from "framer-motion";
import React from "react";
import { clinicBlogs } from "../Const/const";

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center z-1 relative bg-about-section bg-cover bg-center bg-opacity-0 bg-no-repeat h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-4xl text-center text-white my-4">
        About Doctor Clinic
      </h1>
      {/* <div className="rounded h-60 w-full bg-about-section bg-no-repeat bg-cover justify-center text-center object-contain bg-center -z-10 absolute"></div> */}
      <p className="text-center py-4 text-white text-lg font-bold">
        This is a short description about the doctor.
      </p>

      <div className="flex flex-wrap justify-center">
        {clinicBlogs.map((blog, index) => (
          <motion.div
            className="m-4 p-4 border rounded shadow-lg w-80 bg-white"
            key={blog.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl">{blog.title}</h2>
            <p>{blog.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;

import React from 'react';
import TimelineItem from './Timeline';
import { motion } from 'framer-motion';
import Skill from './Skill';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full max-w-6xl mx-auto gap-10">
        
        {/* Profile Photo */}
        <motion.div
          className="w-60 h-60 bg-amber-600 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Replace with actual image */}
          <img
            src="https://via.placeholder.com/240" // Replace with your image path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

     

        {/* Timeline Section */}
        <TimelineItem />
      </div>
    </section>
  );
};

export default AboutSection;

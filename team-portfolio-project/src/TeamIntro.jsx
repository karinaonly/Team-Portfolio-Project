import { IoPeopleCircle } from "react-icons/io5";
import { motion } from "framer-motion";

function TeamIntro() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -100 }}      
        whileInView={{ opacity: 1, x: 0 }}      
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
      className="px-20 pt-10"
    >
      <div className="border-l-[3px] w-290 bg-gradient-to-b from-cyan-400 to-purple-600 border-transparent bg-clip-border">
        <div className="pl-6">
          <div className="flex items-center">
            <h2 className="text-white text-xl font-bold pr-2">
              Team Introduction
            </h2>
            <IoPeopleCircle className="text-blue-400 text-4xl" />
          </div>
          <p className="text-white text-sm">
            We are a team of dedicated web developers passionate about building
            dynamic, user-friendly, and scalable web applications. Our expertise
            spans front-end and back-end technologies, ensuring seamless digital
            experiences that drive success. With a focus on innovation and
            efficiency, we transform ideas into powerful web solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamIntro;

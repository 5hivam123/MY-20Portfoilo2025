import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import { Socials } from "./Socials";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    animate: {
      boxShadow: [
        "0 0 20px rgba(99, 102, 241, 0.3)",
        "0 0 40px rgba(99, 102, 241, 0.5)",
        "0 0 20px rgba(99, 102, 241, 0.3)",
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={avatarVariants}
          animate="animate"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
            <div className="absolute inset-1 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
              <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                SG
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          Shivam Gupta
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Aspiring Data Scientist | ML Explorer | Java & Spring Boot Backend
          Developer
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <a
            href="/mnt/data/Resume Shivam.docx"
            download
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-300 transform hover:scale-105"
          >
            <Send size={20} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <Socials />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KIT Event Management System",
    technologies: ["React", "TypeScript", "Supabase", "Razorpay"],
    description:
      "Public site, Student portal, Admin dashboard with secure payments, analytics, and real-time updates",
    features: ["Secure Payments", "Analytics Dashboard", "Real-time Updates"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    title: "AI Health Chatbot",
    technologies: ["JavaScript", "NLP"],
    description:
      "Provides health-related answers with an interactive and user-friendly interface",
    features: ["Health Information", "Interactive UI", "NLP Integration"],
    color: "from-green-600 to-emerald-600",
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300 group/btn">
                  <span>View Project</span>
                  <ExternalLink
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

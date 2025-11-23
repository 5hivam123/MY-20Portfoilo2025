import { motion } from 'framer-motion';
import { Code2, Brain } from 'lucide-react';

export function About() {
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

  const technicalSkills = [
    ['Python', 'Java', 'C', 'C++'],
    ['Spring Boot'],
    ['TensorFlow', 'Scikit-learn'],
    ['MySQL', 'MongoDB'],
    ['AWS EC2', 'SageMaker', 'Bedrock'],
  ];

  const softSkills = ['Leadership', 'Public Speaking', 'Collaboration', 'Problem-Solving'];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              B.Tech CSE student (2023–2027) specializing in Data Science & Machine Learning. FOSS Club Coordinator at KIT Kanpur. Backend developer with experience in Java, Spring Boot, REST APIs. Skilled in Python, C, C++, SQL, AWS and Cloud Computing.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((group, index) => (
                <div key={index} className="flex flex-wrap gap-2">
                  {group.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Brain size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

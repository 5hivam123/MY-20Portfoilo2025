import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Certificate of Excellence',
    year: '2023–24',
    icon: Award,
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  },
  {
    id: 2,
    title: 'IIT Kanpur AI Workshop',
    year: '2024',
    icon: Trophy,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    id: 3,
    title: 'AKTU AI Tech Confluence',
    year: '2025',
    icon: Star,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    id: 4,
    title: 'HackerRank Contests',
    year: 'Ongoing',
    icon: Trophy,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
];

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl hover:shadow-lg dark:hover:shadow-lg transition-all duration-300"
              >
                <div className={`p-3 rounded-lg flex-shrink-0 ${achievement.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {achievement.year}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { Socials } from './Socials';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.a
            href="mailto:231542@kit.ac.in"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg dark:hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors duration-300">
              <Mail size={32} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm break-all">231542@kit.ac.in</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+916394693168"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg dark:hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300">
              <Phone size={32} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">+91 6394693168</p>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg dark:hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg mb-4 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/50 transition-colors duration-300">
              <Send size={32} className="text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Let's Talk</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Always open to new opportunities</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg dark:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {submitted && (
            <motion.div
              className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you! I'll get back to you soon.
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-all duration-300"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-all duration-300 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            {loading ? 'Sending...' : 'Send Message'}
            <Send size={20} />
          </motion.button>
        </motion.form>

        {/* Footer Social Links */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-slate-600 dark:text-slate-400 font-semibold mb-6">
            Connect with me on social media
          </p>
          <Socials className="text-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

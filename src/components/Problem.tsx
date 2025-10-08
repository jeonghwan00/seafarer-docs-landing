import { motion, useInView } from 'framer-motion';
import { FileX, AlertCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

const icons = [Clock, AlertCircle, FileX];

export default function Problem() {
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  const titleText = t.problem.title;
  const highlightText = t.problem.highlight;

  // Split by words instead of characters for better performance
  const titleWords = titleText.split(' ');
  const highlightWords = highlightText.split(' ');

  return (
    <section className="relative py-24 md:py-32 px-6 bg-blue-50" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 ref={titleRef} id="problem-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-5xl mx-auto">
            <span className="inline-block">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ color: '#D1D5DB' }}
                  animate={isInView ? { color: '#111827' } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="inline-block">
              {highlightWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ color: '#D1D5DB' }}
                  animate={isInView ? { color: '#2563EB' } : {}}
                  transition={{ duration: 0.4, delay: (titleWords.length + i) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.problem.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.problem.cards.map((problem, index) => {
            const Icon = icons[index];
            return (
            <motion.article
              key={problem.title}
              aria-label={problem.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative h-full p-6 md:p-8 rounded-3xl bg-white border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 md:mb-6">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2.5 md:mb-3">
                    {problem.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
                    {problem.description}
                  </p>

                  <span className="inline-block text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-600">
                    {problem.impact}
                  </span>
                </div>

                <div className="absolute -bottom-20 -right-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#1BBE7C]/10 blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

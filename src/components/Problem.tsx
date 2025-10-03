import { motion } from 'framer-motion';
import { FileX, AlertCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Clock, AlertCircle, FileX];

export default function Problem() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 md:py-32 px-6" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="problem-heading" className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {t.problem.title}
            <br className="md:hidden" />
            <span className="md:ml-2 bg-gradient-to-r from-[#1BBE7C] to-[#15a068] bg-clip-text text-transparent">
              {t.problem.highlight}
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
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
              className="group relative will-change-transform"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ rotateY: 6, rotateX: -6, z: 50 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-full p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1BBE7C]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#1BBE7C]/20 to-[#1BBE7C]/5 flex items-center justify-center mb-5 md:mb-6">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#1BBE7C]" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2.5 md:mb-3">
                    {problem.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3 md:mb-4">
                    {problem.description}
                  </p>

                  <span className="inline-block text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/60">
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

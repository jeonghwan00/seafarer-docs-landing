import { motion } from 'framer-motion';
import { TrendingUp, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [TrendingUp, Target, Users];

export default function PoC() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-24 md:py-32 px-6 bg-white"
      aria-labelledby="poc-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="poc-heading"
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {t.poc.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {t.poc.highlight}
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.poc.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="h-full p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

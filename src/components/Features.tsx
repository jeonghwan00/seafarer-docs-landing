import { motion } from 'framer-motion';
import { Brain, Globe, Rocket, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Brain, Globe, Rocket, RefreshCw];

export default function Features() {
  const { t } = useLanguage();
  return (
    <section
      className="relative py-24 md:py-32 px-6 bg-gray-50"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">
            {t.features.subtitle}
          </p>
          <h2
            id="features-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {t.features.title}
            <br className="md:hidden" />
            <span className="md:ml-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {t.features.highlight}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.features.description}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {t.features.cards.map((feature, index) => {
            const Icon = icons[index];
            return (
            <motion.article
              key={feature.title}
              aria-label={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative h-full p-7 md:p-8 rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <span className="text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-500">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

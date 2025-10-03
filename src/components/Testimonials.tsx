import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const stats = [
  { value: 500, suffix: '+' },
  { value: 85, suffix: '%' },
  { value: 99.9, suffix: '%' },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // 숫자 포맷 (소수/정수 자동)
  const format = useMemo(() => {
    const hasDecimal = value % 1 !== 0;
    return new Intl.NumberFormat(undefined, {
      maximumFractionDigits: hasDecimal ? 1 : 0,
      minimumFractionDigits: hasDecimal ? 1 : 0,
    });
  }, [value]);

  useEffect(() => {
    if (!ref.current) return;

    // 접근성/모션 환경 고려
    if (prefersReducedMotion) {
      ref.current.textContent = `${format.format(value)}${suffix}`;
      return;
    }

    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, prefersReducedMotion, format, suffix]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsub = springValue.on('change', (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${format.format(latest)}${suffix}`;
    });
    return unsub;
  }, [springValue, format, suffix, prefersReducedMotion]);

  return <span ref={ref} aria-live="polite">0{suffix}</span>;
}

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 md:py-32 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase text-white/50 mb-3">
            Proof • Impact • Trust
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {t.testimonials.title}
            <br className="md:hidden" />
            <span className="md:ml-2 bg-gradient-to-r from-[#1BBE7C] to-[#15a068] bg-clip-text text-transparent">
              {t.testimonials.subtitle}
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t.testimonials.description}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-20">
          {t.testimonials.cards.map((testimonial, index) => (
            <motion.figure
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 h-full overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div
                  className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <Quote className="w-16 h-16 md:w-20 md:h-20 text-[#1BBE7C]" />
                </div>

                <blockquote className="relative z-10">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 md:mb-8 font-light">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                <figcaption className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#1BBE7C] to-[#15a068] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-base md:text-lg">
                      {getInitials(testimonial.author)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-white/50 text-xs md:text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </figcaption>

                <div
                  className="absolute -bottom-20 -left-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#1BBE7C]/10 blur-3xl group-hover:scale-150 transition-transform duration-700"
                  aria-hidden="true"
                />
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, idx) => (
            <div
              key={`${t.testimonials.stats[idx].label}-${idx}`}
              className="text-center p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#1BBE7C] to-[#15a068] bg-clip-text text-transparent mb-2.5 md:mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-sm md:text-lg">{t.testimonials.stats[idx].label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Anchor, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-white/10 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* 상단 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* 브랜드 영역 */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <Anchor className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">SeaDocs</span>
              </div>

              <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                {t.footer.description}
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:ason@certifie.io"
                  className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">ason@certifie.io</span>
                </a>
                <div className="flex items-start gap-2 text-white/80">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Seongnam, South Korea
                    <br />
                    New York, USA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 제품 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">{t.footer.sections.product}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.product.features}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.product.pricing}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.product.security}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.product.api}</a></li>
            </ul>
          </motion.div>

          {/* 회사 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">{t.footer.sections.company}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.company.about}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.company.blog}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.company.careers}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.company.partners}</a></li>
            </ul>
          </motion.div>

          {/* 지원 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">{t.footer.sections.support}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.support.helpCenter}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.support.docs}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.support.status}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.support.contact}</a></li>
            </ul>
          </motion.div>

          {/* 법률 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">{t.footer.sections.legal}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.legal.privacy}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.legal.terms}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.legal.cookies}</a></li>
              <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors text-sm">{t.footer.links.legal.license}</a></li>
            </ul>
          </motion.div>
        </div>

        {/* 하단 카피 */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/60 text-xs md:text-sm">
            {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

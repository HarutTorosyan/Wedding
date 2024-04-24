import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; 

export default function HomeTouch() {
  const { ref: timeRef, inView: timeInView } = useInView();
  const { ref: firstRef, inView: firstInView } = useInView();
  const { ref: secondRef, inView: secondInView } = useInView();

  const { t, i18n } = useTranslation();

  return (
    <div className="text-center font-montserrat text-[19px] font-light flex flex-col items-center px-8 mt-20 space-y-3">
      <div ref={timeRef}>
        {timeInView && (
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl "
          >
             {t('touch')}
          </motion.p>
        )}
      </div>
      
      <div ref={firstRef}>
        {firstInView && (
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('touchcontent')}
          </motion.p>
        )}
      </div>

      <div ref={secondRef}>
        {secondInView && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={t('Touch Image')}className="object-cover"  width={400} height={100} alt='Touch Image' />
           
          </motion.div>
        )}
      </div>
    </div>
  );
}

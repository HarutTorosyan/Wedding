import React from 'react';
import { Link } from 'react-router-dom'
import TigranELina from '../assets/img/image 29.png'
import TigranELina2 from '../assets/img/Group 41.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; 

const LovePage = () => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  
  return (
    <div  className='  flex flex-col items-center mt-20'>
      <div ref={ref}>
        <h1 className='text-2xl font-montserrat font-medium mt-10 mb-10 max-sm:text-lg max-sm:text-center'> {t('confirm')}</h1>

        {inView && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            className='flex justify-center'
          >
            <button className="max-sm:text-sm inline-flex font-montserrat mb-20 h-14 px-12 animate-shimmer items-center justify-center rounded-[30px] bg-[linear-gradient(110deg,#b99a4b,50%,#ebf5f3,55%,#b99a4b)] bg-[length:200%_100%] font-medium text-white text-md transition-colors ">
              <Link to="https://forms.gle/aNBmqEok8b1XHcEt8" target='blank'> {t('click')} </Link>
            </button>
          </motion.div>
        )}
      </div>

      <img src={TigranELina} className='w-full max-w-[500px] h-[700px] object-cover max-sm:max-w-[350px] max-sm:h-[500px] px-4' alt='' />
      <p className='mt-10 mb-10 text-xl font-medium font-montserrat'>{t('wait')}</p>
      <img src={TigranELina2} className='w-full max-w-[350px] object-cover' alt='' />
    </div>
  )
}

export default LovePage;

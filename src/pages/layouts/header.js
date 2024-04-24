import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom'
import play2 from '../../assets/img/play2.gif';
import play3 from '../../assets/img/play3.gif';
import Music from '../../assets/music/Music.mp3';
import i18n from '../../i18n';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const audio = new Audio(Music);

function Header() {
  const { t, i18n } = useTranslation();

  const [isPlaying, setIsPlaying] = useState(false);
  const [imageUrl, setImageUrl] = useState(play2);
  const handleClick = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play(); 
    }
    setIsPlaying(!isPlaying); 
    setImageUrl(isPlaying ? play2 : play3); 
  };

 const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("June 23, 2024").getTime();

  const getTime = () => {
    const time = deadline - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const timerInterval = setInterval(getTime, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-aro-img max-sm:h-[800px] h-[750px]  bg-cover bg-no-repeat bg-center   ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center  p-6 " aria-label="Global">
          <div className='cursor-pointer flex items-center justify-center gap-2 border rounded-full px-2 py-2 mt-2 font-montserrat text-white font-light text-sm'>  
          <button onClick={() => changeLanguage('hy')}>ARM |</button>
  <button onClick={() => changeLanguage('ru')}>RU |</button>
  <button onClick={() => changeLanguage('en')}>ENG</button>
          
          </div>
          <div className='ml-auto'>
            <img
              src={imageUrl}
              className="ml-auto w-[45px] h-[45px] cursor-pointer z-20 relative"
              onClick={handleClick}
              alt="Play Icon"
            />
          </div>
        
        
        </nav>
        
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 max-sm:mt-40">
          <div className="sm:mb-8 flex justify-center">
           <motion.div
             variants={fadeIn('up',0.1)} 
             initial="hidden"
             animate="show"
            className="relative z-10 ">
            <img src={t('Header Image')} width={400}   className='h-[115px]'  alt="Header Image" />
            </motion.div>
          </div>
          <div className="text-center z-10 relative">
          <motion.p
             variants={fadeIn('up',0.1)} 
             initial="hidden"
             animate="show"
             className="mt-6 text-lg leading-8 text-white font-montserrat  ">
             {t('Welcome')}
             
            </motion.p>
            <div className='flex justify-center items-center flex-col mt-10'>
              <div className="text-white relative z-10 font-montserrat flex gap-20 max-sm:gap-8">
                <div className="text-white relative z-10 font-montserrat flex gap-20 max-sm:gap-8">
                  <div className="relative">
                    <p className="text-6xl max-sm:text-xl font-montserrat font-extrabold">{days}</p>
                    <span className="line-vertical"></span>
                    <span className="text-white ml-5">  {t('day')}</span>
                  </div>
                  <div className="relative ">
                    <p className="text-6xl max-sm:text-xl font-montserrat font-extrabold ">{hours}</p>
                    <span className="line-vertical"></span>
                    <span className="text-white  ">  {t('hour')}</span>
                  </div>
                  <div className="relative">
                    <p className="text-6xl max-sm:text-xl font-montserrat font-extrabold">{minutes}</p>
                    <span className="line-vertical"></span>
                    <span className="text-white ml-2">  {t('minute')}</span>
                  </div>
                  <div className="relative">
                    <p className="text-6xl max-sm:text-xl font-montserrat font-extrabold">{seconds}</p>
                    <span className="text-white">  {t('second')}</span>
                  </div>
                </div>
              </div>
              <div className=' mt-10 max-sm:font-montserrat max-sm:w-full max-sm:animate-shimmer max-sm:bg-[linear-gradient(110deg,#b99a4b,50%,#ebf5f3,55%,#b99a4b)] max-sm:bg-[length:200%_100%] max-sm:rounded-[30px] max-sm:text-white max-sm:font-medium max-sm:text-md max-sm:transition-colors max-sm:py-3'> 
              <motion.button
             variants={fadeIn('up',0.1)} 
             initial="hidden"
             animate="show" className="inline-flex sm:font-montserrat  sm:h-14 sm:px-12 sm:animate-shimmer sm:items-center sm:justify-center sm:rounded-[30px] sm:bg-[linear-gradient(110deg,#b99a4b,50%,#ebf5f3,55%,#b99a4b)] sm:bg-[length:200%_100%]  sm:font-medium sm:text-white sm:text-md sm:transition-colors ">
                {t('invitation')}
                </motion.button> 
              </div>     
            </div>
          </div>
        </div>
        <div className="absolute max-sm:h-[800px] h-[750px] inset-0 bg-black max-sm:opacity-20 sm:opacity-30"></div>
      </div>
    </div>
  )
}
export default Header;

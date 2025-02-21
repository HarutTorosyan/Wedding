import React from "react";
import HomeTouch from "./homeTouch";
import HomeAbout from "./homeAbout";
import HomeContact from "./homeContact";
import firstImg from "../assets/img/image 27.png";
import img from "../assets/img/XXXL.webp"
import img1 from "../assets/img/irina.jpg"
import img3 from "../assets/img/groom.jpeg"
import img2 from "../assets/img/nor dvin.jpg"
import { useTranslation } from 'react-i18next'; 
import LovePage from "./lovePage";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HomeTouch /> 
      <HomeAbout />
      <HomeContact  
        title={t('howget')}
        content={t('house')}
        id='house'
        img={img3}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1078.0466311550647!2d44.537536569627285!3d40.16062751987014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc809ca87cbb%3A0x22c6f9c256af8668!2s28th%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1740071480625!5m2!1sru!2sam" 
      
      />
    
    <HomeContact  
        title={t('howget')}
        content={t('housee')}
        id='house1'
        img={img1}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.0856811978115!2d44.53333618538274!3d40.162645997546086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc80b4d3497d%3A0x2f7f6c51402ae2be!2s130%20Davit-Bek%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1739995020934!5m2!1sru!2sam"
      
      />
    

      <HomeContact  
        firstImg={firstImg}
        content={t('church')}
        id='church'
        img={img}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24385.348750455945!2d44.47855775985451!3d40.18306131168139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdc910d0cde3%3A0x607b5f901e5912da!2z0KbQtdGA0LrQvtCy0Ywg0KHQstGP0YLQvtC5INCR0L7Qs9C-0LzQsNGC0LXRgNC4ICjQkNGB0YLQstCw0YbQsNGG0LjQvSk!5e0!3m2!1sru!2sam!4v1739995142218!5m2!1sru!2sam" 
        cartStyle="flex justify-center items-center"
      />
      <HomeContact  
        firstImg={firstImg}
        content={t('hall')}
        id='hall'
        img={img2}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.384460540312!2d44.288985275829866!3d40.17825667011946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94eab4d0fb39%3A0x686139cd2968c37c!2z0J3QvtGAINCU0LLQuNC9!5e0!3m2!1sru!2sam!4v1739995191181!5m2!1sru!2sam"  
        cartStyle="flex justify-center items-center"
      />
      <LovePage />
    </>
  );
}

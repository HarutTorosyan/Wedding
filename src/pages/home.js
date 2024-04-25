import React from "react";
import HomeTouch from "./homeTouch";
import HomeAbout from "./homeAbout";
import HomeContact from "./homeContact";
import firstImg from "../assets/img/image 27.png";
import img from "../assets/img/image 9.png"
import img1 from "../assets/img/harsik.png"
import img2 from "../assets/img/restoran.png"
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
        img={img1}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1614477094204!2d44.534890275829!3d40.1609589711671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc80a2894f07%3A0x5e38c4ba808dc3e!2s28th%20bck%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1713636927651!5m2!1sru!2sam"
      
      />
    
      <HomeContact  
        firstImg={firstImg}
        content={t('church')}
        img={img}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.993213684265!2d44.628898775834344!3d40.275900964198954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1cd852829d9%3A0xd8c583e01d008291!2sSaint%20Hovhannes%20Church!5e0!3m2!1sru!2sam!4v1713637234726!5m2!1sru!2sam" 
        cartStyle="flex justify-center items-center"
      />
      <HomeContact  
        firstImg={firstImg}
        content={t('hall')}
        img={img2}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2447159581534!2d44.64497607584026!3d40.403429256449115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404025013eb24ee3%3A0x29c15ce0b0679667!2sSafari%20Hall!5e0!3m2!1sru!2sam!4v1713637443154!5m2!1sru!2sam" 
        cartStyle="flex justify-center items-center"
      />
      <LovePage />
    </>
  );
}

import React from "react";
import HomeTouch from "./homeTouch";
import HomeAbout from "./homeAbout";
import HomeContact from "./homeContact";
import firstImg from "../assets/img/image 27.png";
import img from "../assets/img/Ekexeci.JPG"
import img1 from "../assets/img/Pessa.JPG"
import img3 from "../assets/img/Harss.JPG"
import img2 from "../assets/img/Zall.JPG"
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
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.0614413898106!2d5.456378275979258!3d43.2920349757154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bebf238065cd%3A0x9166de68f531ca6f!2zMTIgQmQgZGUgbGEgQ2FydG9ubmVyaWUsIDEzMDExIE1hcnNlaWxsZSwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sam!4v1778173109055!5m2!1sru!2sam" 
      
      />
    
    <HomeContact  
        title={t('howget')}
        content={t('housee')}
        id='house1'
        img={img1}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.7235578683462!2d5.45302327598062!3d43.320046073914824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9be5e0ae6e013%3A0x74651bebc59ef7bd!2zMzUgQXYuIGRlcyBQaW5zLCAxMzAxMyBNYXJzZWlsbGUsINCk0YDQsNC90YbQuNGP!5e0!3m2!1sru!2sam!4v1778172935493!5m2!1sru!2sam" 
      />
    

      <HomeContact  
        firstImg={firstImg}
        content={t('church')}
        id='church'
        img={img}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.2302814932636!2d5.437110075980108!3d43.309438574596754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9befc43320bc3%3A0xf4d1c3cd8a0aa1f9!2s%C3%89glise%20Apostolique%20Arm%C3%A9nienne%20de%20Marseille%20Beaumont%20(Eglise%20Saint%20Gr%C3%A9goire%20l&#39;Illuminateur)!5e0!3m2!1sru!2sam!4v1776272465890!5m2!1sru!2sam"  
        cartStyle="flex justify-center items-center"
      />
      <HomeContact  
        firstImg={firstImg}
        content={t('hall')}
        id='hall'
        img={img2}  
        mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.168871037432!2d5.545620875977058!3d43.247882478551595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bb3bbf34c611%3A0xf83c1bd3a2414a99!2sLe%20Patio%20d&#39;Emmanuel!5e0!3m2!1sru!2sam!4v1776272326542!5m2!1sru!2sam"  
        cartStyle="flex justify-center items-center"
      />
      <LovePage />
    </>
  );
}

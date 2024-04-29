import React from "react";
import img1 from "../assets/img/image 2.png";
import img2 from "../assets/img/image 3.png";
import img3 from "../assets/img/image 5.png";
import img4 from "../assets/img/image 4.png";
import { useTranslation } from 'react-i18next'; 
import { Link } from "react-scroll";




const HomeAbout = () => {
  const { t, i18n } = useTranslation();
  const isRussian = i18n.language === 'ru'

    const menuItems = [
        { clock: "11:30", img: img1, title:`${t('start')}`, content:`${t('house')}`, content1:`${t('howget')}`,content2: `${t('location')}`,href:'house' },
        { clock: "13:00", img: img2, title: `${t('photo')}`, content:`${t('emotion')}`, content1: `${t('howget')}`,content2:`${t('happy')}`,href:false },
        { clock: "15:00", img: img4, title: `${t('wedding')}`, content: `${t('church')}`, content1: `${t('howget')}` ,content2:`${t('churchloc')}`,href:'church'},
        { clock: "17:00", img: img3, title:`${t('banket')}`, content: `${t('hall')}`, content1: `${t('howget')}`,content2:`${t('hallloc')}`,href:'hall' },
      ];

  return (
    <div className="text-center font-montserrat mt-20 ">
      <p className="text-[39px] font-medium">{t('timing')}   </p>
      {menuItems.map((item, index) => (
  <div key={index} className="max-w-screen-sm mx-auto px-16 relative">
    <div className="flex items-start max-lg:items-center max-lg:flex-col gap-5 mt-10  ">
      <p className="text-2xl font-medium">{item.clock}</p>
      <img src={item.img} width={100} height={100} alt="Date Logo" className="ml-2 relative object-cover" />
      {index !== menuItems.length - 1 && (
        <span className="relative after:w-[2px] after:h-[140px] after:max-lg:h-[150px]  after:bg-[#c19e46] after:absolute after:top-[110px] after:right-[70px] after:max-lg:right-[-3px] after:max-lg:top-[194px] after:max-sm:top-[220px]  "></span>
      )}
      <div className="ml-2 relative max-lg:mt-0 ">
        <h3 className={`text-[23px] text-start max-lg:text-center ${isRussian ? 'roboto-bold' : 'font-medium'} `}>{item.title}</h3>
        <p className={`text-start mt-2 max-lg:text-center  text-[15px] ${isRussian ? 'roboto-bold' : 'font-medium'} `}>{item.content}</p>
        <p className="text-start mt-2 max-lg:text-center font-light text-[13px] ">{item.content2}</p>
        <p className="text-start max-lg:text-center text-[#c19e46] text-lg font-medium   pt-7 cursor-pointer"><Link  to={item.href}  spy={true} smooth={true} ofsset={50} duration={500}>{item.content1}</Link></p>
      </div>
    </div>
    {index !== menuItems.length - 1 && <div className="h-20 max-lg:h-40" />}
  </div>
))}

      
    </div>
  );
};

export default HomeAbout;

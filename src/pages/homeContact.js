import React from "react";
import harsik from "../assets/img/harsik.png";

export default function HomeContact(props) {
  
  return (
    <div id="house" className="max-w-screen-2xl mx-auto mt-20 mb-20 px-6">
      <div className={`${props.cartStyle} md:px-[175px] text-2xl font-medium font-montserrat `}>
        {props.title} 
        {props.firstImg && <img src={props.firstImg} alt="First Image" />}
      </div>
      <div className="text-center text-2xl font-light font-montserrat pt-20">{props.content}</div>
      <div className="flex justify-center items-center mt-20 gap-8 max-md:flex-col">
        <img className="w-full max-w-[550px] h-[350px] object-cover" src={props.img} alt="Contact Image" />
        <iframe
          className="w-full max-w-[550px] h-[350px] object-cover"
          src={props.mapSource}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
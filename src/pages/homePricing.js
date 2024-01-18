import React from "react";
import profileImg from "../assets/img/comp.png"
import profileImg1 from "../assets/img/setting.png"
import profileImg2 from "../assets/img/pechat.png"
import PricingBlock from "./repeatable/pricingBlock";

export default function HomePricing() {
  const list = [
    {
      profileImg: profileImg,
      title:"Web Design",
      content:"I brought to just trying that with my boss; I'd get kicked out on the spot. But who knows would be the best"
    },
    {
  
      profileImg: profileImg1,
      title:"Illustrator",
      content:"That a brought to just try with my boss; I'd get out the spot. But who know maybe that would be best"
    },
    {
    
      profileImg: profileImg2,
      title:"Branding Identity",
      content:"Brought a to just try that with my boss; I'd get kicked out on the spot. But who's knows maybe the better"    
    
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-16" id="">
       

        <div className="mt-5">
          <div className="flex flex-col space-x-2  items-center md:flex-row max-lg:space-y-10 lg:space-x-5 lg:px-10 xl:px-0">
            {list &&
              list.map((item, index) => {
                return (
                  <PricingBlock
                  profileImg={item.profileImg}
                  title={item.title}
                  content={item.content}
                 
                  />
                 );
              })} 
          </div>
      
        </div>
        
      </div>
    
    </>
  );
}

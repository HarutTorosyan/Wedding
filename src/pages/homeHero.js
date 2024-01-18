import React from "react";


export default function HomeHero() {
  return (
    <div className="w-full relative bg-hero-img bg-cover bg-no-repeat bg-center h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px]" id="home">
       <div className="flex items-center h-full px-6 max-w-screen-lg mx-auto ">

        <div className="mt-8 font-light ">
          <p className="text-white font-light font-monter text-3xl sm:text-[45px] md:text-[55px] leading-none">
          I'M LUCY DOE
          </p>
          <h1 className="mt-2 font-light text-white font-monter text-md sm:text-lg tracking-4 sm:mt-4">
            WEB DEVELOPER
          </h1>
          
        </div>
      </div>
      <div class="absolute left-0 bottom-0 w-full hidden md:block">     
      <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" fill="#ffffff"><polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon></svg>
      </div>
    </div>
    
  );
}

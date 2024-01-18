import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Title from "./title";
import portfoliolImage1 from "../../assets/img/portfolio_01.jpg";
import portfoliolImage2 from "../../assets/img/portfolio_02.jpg";
import portfoliolImage3 from "../../assets/img/portfolio_03.jpg";
import portfoliolImage4 from "../../assets/img/portfolio_04.jpg";
import portfoliolImage5 from "../../assets/img/portfolio_05.jpg";
import portfoliolImage6 from "../../assets/img/portfolio_06.jpg";

export default function PortfolioBlock() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "All",
      value: "html",
      images: [portfoliolImage1, portfoliolImage2, portfoliolImage3, portfoliolImage4, portfoliolImage5, portfoliolImage6],
    },
    {
      label: "Marketing",
      value: "react",
      images: [portfoliolImage1, portfoliolImage2, portfoliolImage3, portfoliolImage4],
    },
    {
      label: "Web",
      value: "vue",
      images: [portfoliolImage3, portfoliolImage4, portfoliolImage5, ],
    },
    {
      label: "Graphics",
      value: "grap",
      images: [portfoliolImage1, portfoliolImage2, portfoliolImage3, ],
    },
  ];

  return (
    

    <Tabs value={activeTab}>
       <div className="mt-5 px-8 ">  <Title title="Portfolios" />
    </div>
      <TabsHeader
        className="p-0 bg-transparent rounded-none" id="portfolio"
        indicatorProps={{
          className:
            "before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:bg-black before:left-1/2 before:-translate-x-1/2 before:-bottom-3",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-white-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, images }) => (
          <TabPanel key={value} value={activeTab}>
            {activeTab === value && (
              <div className="grid">
                <div className="relative overflow-hidden rounded-md duration-400  after:absolute after:bg-black after:inset-0 after:opacity-0 after:duration-400 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="w-full"
                      >
                        <img
                          src={image}
                          alt={`${value} ${index}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import VNOC_verticalscript from "@/components/Forms/verticalscript";

export const metadata: Metadata = {
  title: "Our Verticals - VNOC",
  description: "VNOC has a wide range of verticals to choose from. Learn more about our portfolio of premium digital assets today.",
  // other metadata
};

const VerticalPage = () => {
  return (
    <>
          <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 overflow-hidden">
        <div className="lg:items-center lg:gap-8 xl:gap-32.5">
                    
            <h1 className="text-center align-center bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Explore Our <br />Vertical Portolio
            </h1>
      
          
    
        </div> 
      </section>
    <section className="pb-16 md:pb-20 lg:pb-24 pt-10 md:pt-10 lg:pt-10">
    <div className="max-w-c-1390 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4 lg:w-4/4 mx-auto">
          <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <div className="animate_top text-center mx-auto">
              <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">Vertical Synergy Model</h2>
              <p className="text-base text-body-color dark:text-body-color-dark">
              Welcome to VNOC's portfolio, where our commitment to innovation is intricately woven into the fabric of diverse verticals, each meticulously designed to support and complement one another. At VNOC, we don't just build ventures; we cultivate ecosystems.
              </p>
            </div> 

            <div className="pt-4 pb-20">
            
            </div>

            <VNOC_verticalscript />
                         
                             
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default VerticalPage;

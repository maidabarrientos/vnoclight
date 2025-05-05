"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { latestProjects } from "./latestProjectsData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const LatestProjects = () => {
  return (
    <section className="py-20 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <div className="bg-zumthor dark:bg-blacksection dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
          <h4 className="font-medium text-sectiontitle text-black dark:text-white">
            {latestProjects.subtitle}
          </h4>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-2">
          {latestProjects.title}
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {latestProjects.text}
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {latestProjects.items.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-blacksection rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:underline text-sm font-medium"
                >
                  Visit Project →
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestProjects;

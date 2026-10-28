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
import "./projects.css";

// referrals.com attribution: tag cross-links to network sites with ?ref=vnoc.com
const withRef = (link: string) => {
  if (/^https?:\/\/(www\.)?vnoc\.com\b/i.test(link)) return link;
  return `${link}${link.includes("?") ? "&" : "?"}ref=vnoc.com`;
};

const LatestProjects = () => {
  return (
    <section className="py-20 lg:py-28 px-4 md:px-8 2xl:px-0 max-w-c-1390 mx-auto">
      <div className="max-w-2xl mb-12">
        <h2 className="text-ink dark:text-white text-4xl xl:text-sectiontitle3 font-extrabold tracking-[-0.02em] mb-5">
          {latestProjects.title}
        </h2>
        <p className="text-slate dark:text-manatee text-lg leading-relaxed">{latestProjects.text}</p>
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
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2 project-category">
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
                  href={withRef(project.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primaryho dark:text-bggrad1 hover:underline text-sm font-bold"
                >
                  Visit project
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

"use client";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../CSS/main.css"
import Link from 'next/link';
import Image from 'next/image';


SwiperCore.use([Autoplay, Pagination]);



export const Brands: React.FC = () => {
  const settings = {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
      <Box maxWidth="xl" className="slidebox">
        <Box className="mt-12">
          <Typography variant="h2" className="mt-10 text-white text-center text-2xl font-semi-bold animate__animated animate__fadeIn animate__delay-1s">
            Learn important tools and master your software skills
          </Typography>
        </Box>
        <Swiper {...settings} className="logo-slider flex items-center justify-center">
          <SwiperSlide>
            <Box className="item">
              <Link href="#!">
                <Image
                  src={require("../assets/images/logo/github.png")}
                  alt="Github"
                  width={40}
                  height={40}
                  className="brand-img px-6 md:px-12 w-40"
                />
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="item">
              <Link href="#!">
                <Image
                  src={require("../assets/images/logo/atom.png")}
                  alt="Atom"
                  width={40}
                  height={40}
                  className="brand-img px-6 md:px-12 w-40"
                />
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="item">
              <Link href="#!">
                <Image
                  src={require("../assets/images/logo/codenvy.png")}
                  alt="Codenvy"
                  width={40}
                  height={40}
                  className="brand-img px-6 md:px-12 w-40"
                />
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="item">
              <Link href="#!">
                <Image
                  src={require("../assets/images/logo/azure.png")}
                  alt="Azure"
                  width={40}
                  height={40}
                  className="brand-img px-6 md:px-12 w-40"
                />
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="item">
              <Link href="#!">
                <Image
                  src={require("../assets/images/logo/docker.png")}
                  alt="Docker"
                  width={40}
                  height={40}
                  className="brand-img px-6 md:px-12 w-40"
                />
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="item">
              <Link href="#!">
                <Image
                  src={require("../assets/images/logo/linx.png")}
                  alt="Linx"
                  width={40}
                  height={40}
                  className="brand-img px-6 md:px-12 w-40"
                />
              </Link>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

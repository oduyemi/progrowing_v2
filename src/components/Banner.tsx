"use client";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import Link from "next/link";
import Image from "next/image";
import 'animate.css'; 
import { motion } from "framer-motion";


export const Banner = () => {
    return (
        <>
            <Box maxWidth="xl" className="banner mt-6 md-1/3 px-7 mx-auto relative flex items-center justify-center">
                <Box maxWidth="xl" className="banner-description w-full md-1/3 p-3">
                    <Box maxWidth="md" className="mt-14 into-msg ml-auto">
                        <Typography variant="h1" className="pl-10 mt-0 font-light mx-auto text-5xl">Find a <span><Typography variant="h3" className="emphasis" id="emp_">mentor</Typography></span> to help you</Typography>
                        <Typography variant="h5" paragrapgh id="introSubTitle" className="mt-1 pl-12 text-[#ccc] py-1 text-sm animate__animated animate__fadeIn animated__delay__4">Start now. Become a better software developer</Typography>
                        <Box className="btn-container pl-10 mx-auto">
                            <Typography variant="h5" paragrapgh className="pl-0 mt-5 text-xl font-light">Find world-class mentors <br />for live mentorship and freelance projects.</Typography>
                            <Link href="/find">
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#FB8B24",
                                        color: "#000500",
                                        fontWeight: "light",
                                    }}
                                    className="my-8 rounded bg-yel px-4 py-2 text-gray-700 text-l hover:bg-blu hover:text-gray-900 border border-yel hover:border-blu"
                                >
                                    Join WhatsApp Community
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box  maxWidth="md" className="banner-image video-wrapper embed-responsive-item w-full flex p-3 mr-14">
                    <Box className="video-wrapper flex items-center justify-center" id="heroImage">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box maxWidth="sm" className="">
                            <Box className="">
                                <Image
                                    src={require("../assets/images/photos/hero.png")}
                                    alt="hero banner"
                                    width={440}
                                    height={400}
                                    className="object-cover flex items-center justify-center shadow dark:shadow-black/30 py-2"
                    />
            </Box>
        </Box>
    </motion.div>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


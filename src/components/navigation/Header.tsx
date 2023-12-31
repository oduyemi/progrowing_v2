"use client";
import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";





export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
      };

      const renderMobileMenu = () => {
        if (isMobileMenuOpen) {
          return (
            <Box className="md:hidden">
              <Link href="/" className="text-l block py-2 hover:text-fade">
                Home
              </Link>
              <Link href="/courses" className="text-l block py-2 hover:text-fade">
                Courses
              </Link>
              <Link href="/forum" className="text-l block py-2 hover:text-fade">Forum&apos;</Link>
              <Link href="/resources" className="text-l block py-2 hover:text-fade">Resources&apos;</Link>
            </Box>
          );
        }
        return null;
      };
      
    return(
        <nav id="header" className="bg-transparent">
                <Box maxWidth="xl" sx={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"between"}} className=" mt-0 py-1">
                    <Box maxWidth="sm" sx={{ display:"flex alignItems:center"}} className="logo-wrapper pl-11">
                        <Link href="/">
                        <Image
                            src="/assets/images/logo/logo.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="h-30 w-30 object-contain ml-4 logo"
                        />
                        </Link>
                    </Box>
                    <Box maxWidth="md" className="mobile-menu-button md:hidden">
                        <button className="text-gray-700 p-2" onClick={toggleMobileMenu}>
                            <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http:www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </button>
                        {renderMobileMenu()}
                    </Box>
               <ul
                 className="nav-menu-wrapper mx-auto flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium" id="mobile-menu">
                    <li>
                        <Link
                            href="/"
                            className={`${
                                typeof window !== "undefined" && window.location.pathname === "/"
                                    ? "bg-fade text-ppl"
                                    : "text-gray-700 font-light hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0"
                            } block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none`}
                            aria-current={typeof window !== "undefined" && window.location.pathname === "/" ? "page" : undefined}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/courses"
                            className={`${
                                typeof window !== "undefined" && window.location.pathname === "/courses"
                                    ? "bg-fade text-ppl"
                                    : "text-gray-700 hover:bg-gray-50 font-light border-b border-gray-100 md:hover:bg-transparent md:border-0"
                            } block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none`}
                            aria-current={typeof window !== "undefined" && window.location.pathname === "/courses" ? "page" : undefined}
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/forum"
                            className={`${
                                typeof window !== "undefined" && window.location.pathname === "/forum"
                                    ? "bg-fade text-ppl"
                                    : "text-gray-700 font-light hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0"
                            } block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none`}
                            aria-current={typeof window !== "undefined" && window.location.pathname === "/forum" ? "page" : undefined}
                        >
                            Forum
                        </Link>
                    </li> 
                    <li>
                        <Link
                            href="/resources"
                            className={`${
                                typeof window !== "undefined" && window.location.pathname === "/resources"
                                    ? "bg-fade text-ppl"
                                    : "text-gray-700 font-light hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0"
                            } block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none`}
                            aria-current={typeof window !== "undefined" && window.location.pathname === "/resources" ? "page" : undefined}
                        >
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`${
                                typeof window !== "undefined" && window.location.pathname === "/contact"
                                    ? "bg-fade text-ppl"
                                    : "text-gray-700 font-light hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0"
                            } block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none`}
                            aria-current={typeof window !== "undefined" && window.location.pathname === "/contact" ? "page" : undefined}
                        >
                            Contact Support
                        </Link>
                    </li>
                </ul>
                <Box maxWidth="sm" className="ml-auto space-x-8">
                    <Box className="relative pr-4">
                        <Link href="/mentor">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#FB8B24",
                                    color: "#000500",
                                    fontWeight: "light",
                                }}
                                className="rounded mt-[-1%] bg-yel px-4 py-2 text-gray-700 text-l hover:bg-blu hover:text-gray-900 border border-yel hover:border-blu"
                            >
                                Be A Mentor
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </nav>
        );
    };


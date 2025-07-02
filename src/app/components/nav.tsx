"use client";

import React, { useState } from "react";
import Link from "next/link";
import Star from "../components/UX/star";
import Bell from "../components/UX/bell";
import * as motion from "motion/react-client";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Links = [
    { name: "Visão geral", href: "/" },
    { name: "Hábitos", href: "/" },
    { name: "Relatórios", href: "/" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between p-1.5 shadow-md rounded-lg fixed top-0 left-0 right-0 z-50 "
      >
       
        <div className="m-2 text-white flex items-center">
          <Star />
          <span className="text-white text-lg font-bold ml-2 hover:text-amber-300 transition-colors duration-500">
            Tracker Personal
          </span>
        </div>

        
        <div className="flex items-center space-x-4 px-4">
          
          <ul className="hidden sm:flex sm:space-x-4 text-white">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-amber-300 transition-colors duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          
          <div className="flex items-center space-x-4 px-1">
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="order-2 sm:order-1"
            >
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-amber-300 transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </motion.div>

           
            <div className="order-1 sm:order-2">
              <Bell />
            </div>

            
            <button
              onClick={() => setMenuOpen(true)}
              className="order-3 sm:hidden text-white hover:text-amber-300 transition-colors duration-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0  bg-opacity-40 z-40 sm:hidden"
        />
      )}

      
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-48 bg-zinc-800 z-50 p-4 pt-16 sm:hidden shadow-lg"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-amber-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col space-y-4 text-white">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-amber-300 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

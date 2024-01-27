"use client";
import Link from "next/link";
import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {CiMenuBurger} from "react-icons/ci";
import {IoCloseOutline} from "react-icons/io5";

const navLinks = [
  { title: "Log Out", href: "api/auth/signout" },
  { title: "Widget", href: "/remote/widgetsettings" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-2 text-[#E4E1DC] lg:py-4">
        <div className="flex items-center gap-[1ch]">
          <span
            className="text-3xl font-semibold tracking-widest"
            onClick={toggleMenu}
          >
            <CiMenuBurger />
          </span>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-full origin-top bg-[#212124] p-10  text-[#E4E1DC]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="flex items-center text-lg ">Smart Mirror 1.1</h1>
                <p className="cursor-pointer text-4xl " onClick={toggleMenu}>
                  <IoCloseOutline />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="font-lora flex h-full flex-col items-center justify-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileNavLinkProps {
  title: string;
  href: string;
}
const MobileNavLink = ({ title, href }: MobileNavLinkProps) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase ">
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

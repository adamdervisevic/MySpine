"use client";

import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar2Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section
      id="relume"
      className="absolute top-0 left-0 z-[999] flex w-full items-center bg-transparent lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="h-18" />
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              {buttons.map((button, index) => (
                <Button key={index} className="w-full px-4 py-1" {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="my-[3px] h-0.5 w-6 bg-white" />
              <span className="my-[3px] h-0.5 w-6 bg-white" />
              <span className="my-[3px] h-0.5 w-6 bg-white" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && isMobile && (
          <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-lg flex flex-col items-center justify-start px-[8%] pt-20">
            <button
              className="absolute top-8 right-8 text-4xl text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Zatvori meni"
            >
              &times;
            </button>
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu key={index} navLink={navLink} isMobile={true} />
              ) : (
                <a
                  key={index}
                  href={navLink.url}
                  className="block font-bold tracking-wide py-4 text-2xl text-white"
                  style={{ cursor: "pointer" }}
                >
                  {navLink.title}
                </a>
              )
            )}
          </div>
        )}

        {/* DESKTOP MENU */}
        {!isMobile && (
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            animate="open"
            initial="open"
            transition={{ duration: 0.4 }}
            className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu key={index} navLink={navLink} isMobile={false} />
              ) : (
                <a
                  key={index}
                  href={navLink.url}
                  className="block font-medium tracking-wide px-5 py-2 text-[22px] text-white"
                >
                  {navLink.title}
                </a>
              )
            )}
          </motion.div>
        )}

        <div className="hidden justify-self-end lg:block">
          {buttons.map((button, index) => (
            <Button 
            key={index} 
            className="px-6 py-2 border-2 border-white text-white bg-transparent rounded hover:bg-white hover:bg-opacity-20"
            {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      {/* GORNJI LINK – ista klasa kao svi linkovi */}
      <button
        className={
          isMobile
            ? "w-full font-bold text-2xl py-4 text-white flex items-center justify-center gap-2 border-b border-white/10 last:border-none"
            : "flex items-center gap-2 py-3 text-center text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-lg text-white"
        }
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        type="button"
        style={{ cursor: "pointer"}}
      >
        <span>{navLink.title}</span>
        <span style={{ display: "flex", alignItems: "center" }}>
          <RxChevronDown size={22} />
        </span>
      </button>

      {/* MOBILNI SUBMENI */}
      {isDropdownOpen && isMobile && (
        <div className="w-full flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg shadow mb-2">
          {navLink.subMenuLinks?.map((subMenuLink, index) => (
            <a
              key={index}
              href={subMenuLink.url}
              className="block text-base px-2 py-2 text-white w-full text-center rounded"
              style={{ cursor: "pointer" }}
            >
              {subMenuLink.title}
            </a>
          ))}
        </div>
      )}

      {/* DESKTOP SUBMENI */}
      {isDropdownOpen && !isMobile && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 1000%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 backdrop-blur-lg text-white shadow-lg rounded-lg lg:absolute lg:z-50 lg:border lg:border-white/20 lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                key={index}
                href={subMenuLink.url}
                className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </section>
  );
};

export const Navbar2Defaults: Props = {
  logo: {
    url: "#",
    src: "./src/assets/logo1.png",
    alt: "Logo image",
  },
  navLinks: [
    { title: "O nama", url: "#" },
    {
      title: "Usluge",
      url: "#",
      subMenuLinks: [
        { title: "Fizioterapeutski pregled", url: "#" },
        { title: "Fizikalna terapija", url: "#" },
        { title: "Dry needling", url: "#" },
        { title: "Kineziterapija", url: "#" },
        { title: "Masaze", url: "#" },
        { title: "Tecar terapija", url: "#" },
        { title: "Spinalna dekompresiona terapija", url: "#" },
      ],
    },
    { title: "Cenovnik", url: "#" },
    { title: "Kontakt", url: "#" },
  ],
  buttons: [
    {
      title: "Zakazi termin",
      size: "sm",
    },
  ],
};

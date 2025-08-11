// src/components/Navbar2.tsx
"use client";
import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

type ImageProps = { url?: string; src: string; alt?: string };
type NavLink = {
  url: string;
  title: string;
  target?: "_blank" | "_self";
  subMenuLinks?: NavLink[];
};
type Props = { logo: ImageProps; navLinks: NavLink[]; buttons: ButtonProps[] };
export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// ⇩⇩⇩ KLJUČ: za _blank koristimo <a> umesto <Link>
const SmartLink = ({
  to,
  className,
  onClick,
  children,
  target,
}: {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  target?: "_blank" | "_self";
}) => {
  if (target === "_blank") {
    return (
      <a href={to} className={className} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return to.includes("#") ? (
    <HashLink smooth to={to} className={className} onClick={onClick}>
      {children}
    </HashLink>
  ) : (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export const Navbar2 = (props: Navbar2Props) => {
  const { logo, navLinks, buttons } = { ...Navbar2Defaults, ...props };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section id="relume" className="absolute top-0 left-0 z-[999] flex w-full items-center bg-transparent lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <SmartLink to={logo.url || "/"}>
            <img src={logo.src} alt={logo.alt} className="h-18" />
          </SmartLink>

          <div className="flex items-center gap-4 lg:hidden">
            <div>
              {buttons.map((button, index) => (
                <Button key={index} className="w-full px-6 py-2 border-2 border-white text-white bg-transparent rounded hover:bg-white hover:bg-opacity-20" {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
            <button className="-mr-2 flex size-12 flex-col items-center justify-center" onClick={() => setIsMobileMenuOpen((p) => !p)} aria-label="Otvori meni">
              <span className="my-[3px] h-0.5 w-6 bg-white" />
              <span className="my-[3px] h-0.5 w-6 bg-white" />
              <span className="my-[3px] h-0.5 w-6 bg-white" />
            </button>
          </div>
        </div>

        {/* MOBILE */}
        {isMobileMenuOpen && isMobile && (
          <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-lg flex flex-col items-center justify-start px-[8%] pt-20">
            <button className="absolute top-8 right-8 text-4xl text-white" onClick={() => setIsMobileMenuOpen(false)} aria-label="Zatvori meni">
              &times;
            </button>
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks?.length ? (
                <SubMenu key={index} navLink={navLink} isMobile onNavigate={() => setIsMobileMenuOpen(false)} />
              ) : (
                <SmartLink
                  key={index}
                  to={navLink.url}
                  target={navLink.target}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-bold tracking-wide py-4 text-2xl text-white"
                >
                  {navLink.title}
                </SmartLink>
              )
            )}
          </div>
        )}

        {/* DESKTOP */}
        {!isMobile && (
          <motion.div
            variants={{ open: { height: "var(--height-open, 100dvh)" }, close: { height: "var(--height-closed, 0)" } }}
            animate="open"
            initial="open"
            transition={{ duration: 0.4 }}
            className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks?.length ? (
                <SubMenu key={index} navLink={navLink} isMobile={false} />
              ) : (
                <SmartLink key={index} to={navLink.url} target={navLink.target} className="block font-medium tracking-wide px-5 py-2 text-[22px] text-white">
                  {navLink.title}
                </SmartLink>
              )
            )}
          </motion.div>
        )}

        <div className="hidden justify-self-end lg:block">
          {buttons.map((button, index) => (
            <Button key={index} className="px-6 py-2 border-2 border-white text-white bg-transparent rounded hover:bg-white hover:bg-opacity-20" {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  onNavigate,
}: {
  navLink: NavLink;
  isMobile: boolean;
  onNavigate?: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section onMouseEnter={() => !isMobile && setIsDropdownOpen(true)} onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}>
      <button
        className={
          isMobile
            ? "w-full font-bold text-2xl py-4 text-white flex items-center justify-center gap-2 border-b border-white/10 last:border-none"
            : "flex items-center gap-2 py-3 text-center text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-lg text-white"
        }
        onClick={() => setIsDropdownOpen((p) => !p)}
        type="button"
      >
        <span>{navLink.title}</span>
        <span style={{ display: "flex", alignItems: "center" }}>
          <RxChevronDown size={22} />
        </span>
      </button>

      {/* MOBILE SUBMENU */}
      {isDropdownOpen && isMobile && (
        <div className="w-full flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg shadow mb-2">
          {navLink.subMenuLinks?.map((subMenuLink, i) => (
            <SmartLink key={i} to={subMenuLink.url} target={subMenuLink.target} onClick={onNavigate} className="block text-base px-2 py-2 text-white w-full text-center rounded">
              {subMenuLink.title}
            </SmartLink>
          ))}
        </div>
      )}

      {/* DESKTOP SUBMENU */}
      {isDropdownOpen && !isMobile && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{ open: { visibility: "visible", opacity: 1, y: 0 }, close: { visibility: "hidden", opacity: 0, y: "25%" } }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 backdrop-blur-lg text-white shadow-lg rounded-lg lg:absolute lg:z-50 lg:border lg:border-white/20 lg:p-2"
          >
            {navLink.subMenuLinks?.map((subMenuLink, i) => (
              <SmartLink key={i} to={subMenuLink.url} target={subMenuLink.target} className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                {subMenuLink.title}
              </SmartLink>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </section>
  );
};

export const Navbar2Defaults = {
  logo: { url: "/", src: "./images/logo1.webp", alt: "Logo image" },
  navLinks: [
    { title: "O nama", url: "/#o-nama" },
    {
      title: "Usluge",
      url: "/pregled",
      subMenuLinks: [
        { title: "Fizioterapeutski pregled", url: "/pregled", target: "_blank" },
        { title: "Fizikalna terapija", url: "/terapija", target: "_blank" },
        { title: "Dry needling", url: "/dry-needling", target: "_blank" },
        { title: "Kineziterapija", url: "/kineziterapija", target: "_blank" },
        { title: "Masaze", url: "/masaze", target: "_blank" },
        { title: "Tecar terapija", url: "/tecar", target: "_blank" },
        { title: "Spinalna dekompresiona terapija", url: "/spinalna-dekompresija", target: "_blank" },
      ],
    },
    { title: "Cenovnik", url: "/cenovnik", target: "_blank" },
    { title: "Kontakt", url: "/#kontakt" },
  ],
  buttons: [{ title: "Zakazi termin", size: "sm" }],
};

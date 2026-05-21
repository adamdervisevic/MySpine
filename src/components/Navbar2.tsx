// src/components/Navbar2.tsx
"use client";

import { useState } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import clsx from "clsx";

type ImageProps = { url?: string; src: string; alt?: string };
type NavLink = {
  url: string;
  title: string;
  target?: "_blank" | "_self";
  subMenuLinks?: NavLink[];
};
type Props = { logo: ImageProps; navLinks: NavLink[]; buttons: ButtonProps[] };

export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props> & {
    /** true = providan i beli tekst (home preko videa), false = bela pozadina i tamni tekst */
    transparent?: boolean;
  };

// Za _blank koristimo <a>, za hash # koristimo HashLink, ostalo je React Router <Link>
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
  const { logo, navLinks, buttons, transparent = false } = { ...Navbar2Defaults, ...props };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  // Tema po stranici
  const textCls = transparent ? "text-white" : "text-ink";
  const linkHoverCls = transparent ? "hover:text-brand-200" : "hover:text-brand-600";
  const burgerCls = transparent ? "bg-white" : "bg-ink";
  const barBgCls = transparent
    ? "bg-gradient-to-b from-ink/70 via-ink/25 to-transparent"
    : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[0_2px_24px_-12px_rgba(15,42,51,0.45)]";

  // Desktop dropdown pozadina
  const dropdownCls = transparent
    ? "bg-ink/85 backdrop-blur-xl text-white lg:border lg:border-white/15 lg:p-2"
    : "bg-white shadow-card text-ink lg:border lg:border-gray-100 lg:p-2";

  return (
    <section
      id="relume"
      className={clsx(
        "absolute top-0 left-0 z-[999] flex w-full items-center lg:min-h-18 lg:px-[5%] transition-colors",
        barBgCls
      )}
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <SmartLink to={logo.url || "/"} className="shrink-0">
            <img src={logo.src} alt={logo.alt} className="h-12 md:h-14 w-auto" />
          </SmartLink>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              aria-label="Otvori meni"
            >
              <span className={clsx("my-[3px] h-0.5 w-6", burgerCls)} />
              <span className={clsx("my-[3px] h-0.5 w-6", burgerCls)} />
              <span className={clsx("my-[3px] h-0.5 w-6", burgerCls)} />
            </button>
          </div>
        </div>

        {/* MOBILE overlay meni */}
        {isMobileMenuOpen && isMobile && (
          <div className="fixed inset-0 z-[9999] bg-ink/95 backdrop-blur-lg flex flex-col items-center justify-start px-[8%] pt-24">
            <button
              className="absolute top-8 right-8 text-4xl text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Zatvori meni"
            >
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
                  className="block font-semibold tracking-wide py-4 text-2xl text-white transition-colors hover:text-brand-200"
                >
                  {navLink.title}
                </SmartLink>
              )
            )}
          </div>
        )}

        {/* DESKTOP meni */}
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
                <SubMenu key={index} navLink={navLink} isMobile={false} textCls={clsx(textCls, linkHoverCls)} dropdownCls={dropdownCls} />
              ) : (
                <SmartLink
                  key={index}
                  to={navLink.url}
                  target={navLink.target}
                  className={clsx(
                    "block font-medium tracking-wide px-5 py-2 text-[17px] transition-colors",
                    textCls,
                    linkHoverCls
                  )}
                >
                  {navLink.title}
                </SmartLink>
              )
            )}
          </motion.div>
        )}

        {/* Desktop desno prazno — bez CTA-a */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  onNavigate,
  textCls = "text-ink hover:text-brand-600",
  dropdownCls = "bg-white shadow-card text-ink lg:border lg:border-gray-100 lg:p-2",
}: {
  navLink: NavLink;
  isMobile: boolean;
  onNavigate?: () => void;
  textCls?: string;
  dropdownCls?: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section onMouseEnter={() => !isMobile && setIsDropdownOpen(true)} onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}>
      <button
        className={
          isMobile
            ? "w-full font-bold text-2xl py-4 text-white flex items-center justify-center gap-2 border-b border-white/10 last:border-none"
            : clsx("flex items-center gap-2 py-3 text-center font-medium transition-colors lg:w-auto lg:justify-start lg:gap-1.5 lg:px-5 lg:py-2 lg:text-[17px]", textCls)
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
            <SmartLink
              key={i}
              to={subMenuLink.url}
              target={subMenuLink.target}
              onClick={onNavigate}
              className="block text-base px-2 py-2 text-white w-full text-center rounded"
            >
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
            className={clsx("rounded-lg lg:absolute lg:z-50", dropdownCls)}
          >
            {navLink.subMenuLinks?.map((subMenuLink, i) => (
              <SmartLink key={i} to={subMenuLink.url} target={subMenuLink.target} className="block whitespace-nowrap rounded-lg py-3 text-center transition-colors hover:bg-brand-50 hover:text-brand-700 lg:px-4 lg:py-2.5 lg:text-left">
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
  logo: { url: "/", src: "/images/logo1.webp", alt: "Logo image" },
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
        { title: "Masaže", url: "/masaze", target: "_blank" },
        { title: "Tecar terapija", url: "/tecar", target: "_blank" },
        { title: "Spinalna dekompresiona terapija", url: "/spinalna-dekompresija", target: "_blank" },
      ],
    },
    { title: "Cenovnik", url: "/cenovnik", target: "_blank" },
    { title: "Kontakt", url: "/#kontakt" },
  ],
  buttons: [{ title: "Zakaži termin", size: "sm" }],
};

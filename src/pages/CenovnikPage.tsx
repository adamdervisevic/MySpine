// src/pages/CenovnikPage.tsx
import React from "react";
import KontaktFooter from "../components/KontaktFooter";
import { FiPhone, FiCheckCircle, FiInfo } from "react-icons/fi";

type PriceRow = { name: string; price: string };
type PriceGroup = { title: string; description: string; rows: PriceRow[] };

const groups: PriceGroup[] = [
  {
    title: "Specijalizovani tretmani",
    description: "Programi za diskus herniju i druge ozbiljnije probleme kičme.",
    rows: [
      { name: "Lečenje diskus hernije", price: "4.000 rsd" },
      { name: "DTK — dekompresija kičme", price: "3.000 rsd" },
      { name: "Šok vejv terapija", price: "2.500 rsd" },
    ],
  },
  {
    title: "Fizikalna terapija i kineziterapija",
    description: "Klasične i ručne tehnike za rehabilitaciju i oporavak.",
    rows: [
      { name: "Fizikalna terapija", price: "2.000 rsd" },
      { name: "Kineziterapija", price: "2.500 rsd" },
      { name: "Elektroterapija", price: "1.300 rsd" },
      { name: "Ultrazvuk (UZ) terapija", price: "700 rsd" },
      { name: "Laser terapija", price: "700 rsd" },
    ],
  },
  {
    title: "Masaže",
    description: "Terapeutske masaže za opuštanje mišića i bolju cirkulaciju.",
    rows: [
      { name: "Terapeutska masaža celog tela", price: "3.000 rsd" },
      { name: "Parcijalna terapeutska masaža", price: "2.000 rsd" },
    ],
  },
  {
    title: "Paketi tretmana",
    description: "Kombinacije više terapija u jednoj seansi po povoljnijoj ceni.",
    rows: [
      { name: "KFT + masaža + dry needling", price: "3.000 rsd" },
      { name: "KFT + cupping", price: "2.500 rsd" },
    ],
  },
];

export default function CenovnikPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-[5%] pb-16 pt-32 text-white md:pb-20 md:pt-36">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="container relative">
          <span className="eyebrow justify-center !text-brand-100">
            Cenovnik
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Transparentne cene naših usluga
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-base text-white/85 md:text-lg">
            Bez skrivenih troškova. Cene su po tretmanu — kontaktirajte nas za
            kombinacije i pakete prilagođene vašem stanju.
          </p>
        </div>
      </section>

      {/* Besplatan pregled */}
      <section className="px-[5%] -mt-12">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-accent-400/30 bg-white p-8 shadow-soft md:flex-row md:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-500 text-2xl text-white">
              <FiCheckCircle />
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Posebna ponuda
              </p>
              <h2 className="mt-1 text-2xl font-bold text-ink">
                Fizioterapeutski pregled —{" "}
                <span className="text-brand-700">besplatan</span>
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Procena stanja, konsultacija i predlog plana terapije bez ikakve
                obaveze.
              </p>
            </div>
            <a
              href="tel:+38162777566"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(240,138,60,0.85)] transition hover:-translate-y-0.5 hover:bg-accent-600"
            >
              <FiPhone /> Zakaži
            </a>
          </div>
        </div>
      </section>

      {/* Grupisani cenovnik */}
      <section className="px-[5%] py-20 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.title}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card"
              >
                <div className="border-b border-gray-100 bg-surface-soft px-7 py-6">
                  <h3 className="text-xl font-bold text-ink">{g.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{g.description}</p>
                </div>
                <ul className="divide-y divide-gray-100">
                  {g.rows.map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center justify-between gap-4 px-7 py-4 transition-colors hover:bg-brand-50/40"
                    >
                      <span className="text-[15px] text-ink">{row.name}</span>
                      <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-sm font-bold text-brand-800">
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Napomena + CTA */}
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 md:flex-row md:items-center">
            <FiInfo className="mt-1 shrink-0 text-2xl text-brand-700 md:mt-0" />
            <p className="flex-grow text-sm text-gray-700">
              Cene su izražene po pojedinačnom tretmanu. Za personalizovane
              pakete tretmana i program po meri — pozovite nas, prilagodićemo
              plan vašem stanju i potrebama.
            </p>
            <a
              href="tel:+38162777566"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              <FiPhone /> 062 777 566
            </a>
          </div>
        </div>
      </section>

      <KontaktFooter />
    </>
  );
}

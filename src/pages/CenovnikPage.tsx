// src/pages/CenovnikPage.tsx
import React from "react";
import KontaktFooter from "../components/KontaktFooter";
import { FiCheckCircle } from "react-icons/fi";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-[5%] pb-20 pt-32 text-white md:pb-24 md:pt-36">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="container relative">
          <span className="eyebrow justify-center !text-brand-100">
            Cenovnik
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Transparentne cene naših usluga
          </h1>
        </div>
      </section>

      {/* Besplatan pregled */}
      <section className="px-[5%] mt-12 md:mt-16">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-soft md:flex-row md:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-2xl text-white">
              <FiCheckCircle />
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-700">
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
        </div>
      </section>

      <KontaktFooter />
    </>
  );
}

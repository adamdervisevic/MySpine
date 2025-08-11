// src/pages/CenovnikPage.tsx
import React from "react";
import KontaktFooter from "../components/KontaktFooter";

const PRICES: { name: string; price: string }[] = [
  { name: "Fizioterapeutski pregled/KONSULTACIJA", price: "besplatan" },
  { name: "Lečenje diskus hernije", price: "4000,00 rsd" },
  { name: "DTK, dekompresija kičme", price: "3000,00 rsd" },
  { name: "Šok vejv terapija", price: "2500,00 rsd" },
  { name: "Fizikalna terapija", price: "2000,00 rsd" },
  { name: "Terapeutska masaža celog tela", price: "3000,00 rsd" },
  { name: "Parcijalna terapeutska", price: "2000,00 rsd" },
  { name: "Kineziterapija", price: "2500,00 rsd" },
  { name: "Elektroterapija", price: "1300,00 rsd" },
  { name: "UZ, ultrazvuk terapija", price: "700,00 rsd" },
  { name: "Laser terapija", price: "700,00 rsd" },
  { name: "KFT + masaža + dry needling", price: "3000,00 rsd" },
  { name: "KFT + cupping", price: "2500,00 rsd" },
];

export default function CenovnikPage() {
  return (
    <>
      <div className="container pt-32 px-4">
        <h1 className="text-center text-4xl font-bold my-6">Cenovnik</h1>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2 shadow-lg">
            <div className="rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Usluga</th>
                    <th className="text-right px-4 py-3 font-semibold">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICES.map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-white/0" : "bg-white/5"}>
                      <td className="px-4 py-3">{row.name}</td>
                      <td className="px-4 py-3 text-right font-semibold whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm opacity-70 px-3 py-2">
              * Cene su izražene po tretmanu. Za dodatne informacije i pakete, kontaktirajte nas.
            </p>
          </div>
        </div>
      </div>

      <KontaktFooter />
    </>
  );
}

import React from "react";
import KontaktFooter from "../components/KontaktFooter";

export default function DryNeedlingPage() {
  return (
    <>
      <main className="container mx-auto pt-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight my-8">
          Usluge
        </h1>

        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Dry needling
        </h2>

        <h4 className="py-3 text-xl md:text-2xl font-semibold">
          Šta je dry needling ili terapija suvim iglama?
        </h4>

        <p className="py-2 text-lg leading-relaxed">
          Dry needling je proces u kojem se tanke igle ubacuju u okidačke tačke ili zategnute mišiće na telu. <br /> Glavni cilj je poboljšanje zdravlja tkiva i obnavljanje funkcije mišića. <br /> Naši mišići ponekad razvijaju čvorove, takozvane okidačke tačke koji mogu biti vrlo osetljivi i bolni na dodir. <br />
          Fizioterapeut ubacuje tanke čvrste igle kroz kožu u okidačke tačke. <br /> Ove igle se koriste za stimulaciju tkiva, a ne za ubrizgavanje lekova. <br /> Pacijenti mogu osetiti različite senzacije poput bolova u mišićima, trzanja mišića i sl. prilikom ubacivanja igle, što smatramo pozitivnim znakom. <br /> Igle mogu biti postavljene duboko ili površinski, na kraće ili duže periode, zavisno od tipa bola koji se leči.
        </p>

        <p className="py-2 text-lg font-semibold">
          Stanja koja se leče terapijom suvim iglama
        </p>

        <p className="py-2 text-lg leading-relaxed">
          Ova terapija pomaže u lečenju:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
          <li>bola u leđima</li>
          <li>bola u vratu</li>
          <li>bola u laktu</li>
          <li>disfunkcije kičme i zglobova</li>
          <li>migrena</li>
          <li>išijasa</li>
          <li>problemi sa vilicom i ustima</li>
          <li>poremećaja ponavljajućih pokreta</li>
          <li>bolova u karlici</li>
          <li>noćnih grčeva</li>
          <li>post-herpetične neuralgije</li>
        </ul>
      </main>

      <KontaktFooter />
    </>
  );
}

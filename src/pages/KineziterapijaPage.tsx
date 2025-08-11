import React from "react";
import KontaktFooter from "../components/KontaktFooter";

export default function KineziterapijaPage() {
  return (
    <>
      <main className="container mx-auto pt-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight my-8">Usluge</h1>
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Kineziterapija</h2>

        <p className="py-5 text-lg leading-relaxed">
          Kineziterapija, takođe poznata kao kineziologija, je osnovni element fizikalne terapije (fizioterapije), koristeći aktivne i pasivne pokrete tela za jačanje mišića ili rehabilitaciju povreda i poboljšanje pokretljivosti, izdržljivosti i snage pojedinca. <br />
          Sprovodi se individulano u zavisnosti od opšteg stanja pacijenta. <br /> Prema nekim opisima, razlikuje se od fizikalne terapije po tome što fizikalna terapija stavlja akcenat na preventivnu negu, dok kineziterapija naglašava poboljšanje ukupne fizičke kondicije pacijenta.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Od čega se sastoji kineziterapija?</h4>
        <p className="py-2 text-lg leading-relaxed">
          Kineziterapija se sastoji od tehnika rehabilitacije zasnovanih na pokretima tela za lečenje fizičkih oboljenja. <br /> Ovo često uključuje istezanje mišića, tetiva i ligamenata, bilo aktivno (tj. pacijent sam izvodi istezanje) ili pasivno (fizioterapeut manipuliše svojim telom ručno). <br /> Masaže se takođe mogu koristiti za manipulaciju mišićima pacijenta. <br /> Pacijent će možda morati da izvodi vežbe dizajnirane da ojačaju mišiće, od kojih neke mogu uključivati upotrebu posebnih aparata. <br />
          Za kineziterapiju nije potrebna posebna priprema, jer se radi o isključivo fizikalnoj terapiji koja ne koristi nikakve anestezije, aparate ili lekove.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Stanja koja se leče kineziterapijom</h4>
        <p className="py-2 text-lg leading-relaxed">
          Koristi se za lečenje povreda i oboljenja različitog porekla, ali se pre svega preporučuje osobama sa mišićnim tegobama, kao što su tendonitis, plantarni fascitis, bol u leđima (lumbalni i cervikalni sindrom) i degenerativne bolesti mišićno-skeletnog sistema.
        </p>
      </main>

      <KontaktFooter />
    </>
  );
}

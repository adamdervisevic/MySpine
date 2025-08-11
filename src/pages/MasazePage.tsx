import React from "react";
import KontaktFooter from "../components/KontaktFooter";

export default function MasazePage() {
  return (
    <>
      <main className="container mx-auto pt-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight my-8">Usluge</h1>
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Masaže</h2>

        <p className="py-5 text-lg leading-relaxed">
          Terapija masažom koju izvodi licencirani fizioterapeut uključuje korišćenje različitih pritisaka, pokreta i tehnika za manipulaciju mišićima i drugim mekim tkivima u telu. <br /> Sa ciljem usporavanja vašeg nervnog sistema, masažna terapija se može koristiti za oslobađanje stresa i napetosti, olakšanje simptoma, zarastanje povreda i podršku dobrom stanju.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Relaks (opuštajuća) masaža</h4>
        <p className="py-2 text-lg leading-relaxed">
          Relaks masaža je sjajna opcija za opuštanje i oslobađanje od stresa. <br /> Obično se odnosi na masažu celog tela koja koristi nežan dodir. <br /> Može umiriti vaš nervni sistem, a takođe je dobar način za podsticanje opuštenog emocionalnog stanja uma, koje može direktno uticati na vaše mišiće.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Masaža dubokog tkiva</h4>
        <p className="py-2 text-lg leading-relaxed">
          Masaža dubokog tkiva je terapijska tehnika usmerena na dublje slojeve mišića i vezivnog tkiva. <br /> Ova vrsta masaže koristi se za tretiranje hroničnih bolova i mišićnih tenzija, koji mogu nastati i prilikom obavljanja lakših aktivnosti (sedenje, vožnja, rad za računarom), pružajući olakšanje od bolova, poboljšavajući pokretljivost i smanjujući stres.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Sportska masaža</h4>
        <p className="py-2 text-lg leading-relaxed">
          Sportske masaže su slične masažama dubokih tkiva, ali se fokusiraju na mišiće koji trpe kada se bavite sportom ili obavljate drugu fizičku aktivnost koja se kontinuirano ponavlja. <br /> Sportisti i plesači koriste svoje mišiće drugačije od prosečne osobe. <br /> Terapeut za masažu sa iskustvom u sportskoj masaži može da razbije zategnutost mišića i reši sportske povrede.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Masaža tačke okidača</h4>
        <p className="py-2 text-lg leading-relaxed">
          Čvor na vratu ili usko mesto u leđima poznato je kao okidač. <br /> Tačka okidača je sićušni grč mišića ili zategnuto mesto u tkivu. <br /> U masaži okidačke tačke, fizioterapeut koristi fokusiran i direktan pritisak koji cilja baš ta mesta. <br /> Ova vrsta masaže takođe može biti od pomoći osobama sa hroničnim bolom.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Miofascijalno oslobađanje</h4>
        <p className="py-2 text-lg leading-relaxed">
          Fascija je mreža vezivnog tkiva ispod kože. <br /> Podržava mišiće i omogućava nam da se slobodno krećemo. <br /> Kada dobijete miofascijalno oslobađanje, vas terapeut za masažu će gnječiti i istegnuti mišiće i fasciju kako bi razradio napetost i zategnutost. <br /> To je oblik dubokog istezanja koji se često koristi u kombinaciji sa drugim tehnikama terapeutske masaže. <br /> Odlična je za otvaranje zategnutosti u vratu, ramenima i gornjem i donjem delu leđa.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Limfna masaža</h4>
        <p className="py-2 text-lg leading-relaxed">
          Limfna tečnost ima nekoliko važnih funkcija, uključujući održavanje nivoa tečnosti i uklanjanje otpadnih proizvoda iz tela. <br /> Limfna masaža koristi nežan dodir koji pomaže da limfna tečnost teče slobodnije kroz telo. <br /> Ova masaža je odlična za ljude sa upalom, uključujući i ljude sa bolestima poput artritisa, kao i one koji su imali mastektomiju, koja često uključuje uklanjanje limfnih čvorova.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Prenatalna masaža</h4>
        <p className="py-2 text-lg leading-relaxed">
          Prenatalne masaže su odlične za pomoć budućim mamama da se opuste, a mogu pomoći i u rešavanju bolova odrastanja bebe. <br /> Odlične su za skidanje pritiska sa kukova i mogu pomoći kod otoka stopala i nogu. <br />Kada je mama opuštena i oseća se dobro, takvo stanje je jako povoljno i za razvoj bebe.
        </p>

        <h4 className="py-3 text-lg md:text-xl font-semibold">Niste sigurni koja vrsta masaže je prava za vas?</h4>
        <p className="py-2 text-lg leading-relaxed">
          Ne morate da se fokusirate na masažu koja vam savršeno odgovara pre nego što rezervišete termin - terapeuti često mešaju i spajaju tehnike kako bi odgovorili na vaše jedinstvene probleme.
        </p>
      </main>

      <KontaktFooter />
    </>
  );
}

import React from "react";
import KontaktFooter from "../components/KontaktFooter";

export default function FizioterapeutskiPregledPage() {
  return (
    <>
      <main className="container mx-auto pt-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight my-8">Usluge</h1>

        <div className="service-header max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Fizioterapeutski pregled</h2>

          <p className="py-3 text-lg leading-relaxed">
            Pregled započinje objašnjenjem Vaše fizičke tegobe, pozadinom upućivanjem u to šta
            pogoršava i ublažava bol. <br /> Takođe se postavlja pitanje o Vašem zanimanju, opštom rutinom i načinom
            života, obrascima spavanja i kako bol utiče na vašu svakodnevnicu i hobije - ove informacije nam pomažu da
            dobijemo bolju sliku o problemu i da se vratite u normalu što je pre moguće.
          </p>

          <p className="py-3 text-lg leading-relaxed">
            Važno je da tokom pregleda/konsultacija date terapeutu što više informacija, što uključuje
            sva druga zdravstvena stanja i sve medicinske terapije koje uzimate, jer to može uticati na Vaše
            skeletno-mišićno stanje.
          </p>

          <p className="py-3 text-lg leading-relaxed">
            Tokom fizičkog pregleda testiramo kretanje, snagu, zglobove i proveravamo znake nervnog
            bola. <br /> Upravo to je snaga u fizioterapeutskoj temeljnoj i specifičnoj proceni kako bi se utvrdio uzrok
            Vašeg problema.
          </p>

          <h4 className="py-4 text-2xl font-semibold">Vizuelno</h4>
          <p className="text-lg leading-relaxed">
            Nakon početne medicinske istorije, gledamo pogrešan položaj, odstupanje od normalnog držanja.
            <br /> Slabost i napetost mišića gotovo uvek mogu objasniti posturalne devijacije. <br /> Vizuelni pregled otoka
            mekih tkiva i promena veličine mišića (hipertrofija, atrofija) daće nam važnu dijagnostičku indikaciju. <br />
            Ovaj deo se naziva pošturalna ANALIZA.
          </p>

          <h4 className="py-4 text-2xl font-semibold">Palpačija</h4>
          <p className="text-lg leading-relaxed">
            Opipavanje (palpiranje) otoka i crvenila povređenog mesta. <br /> Opažanje mekog tkiva i kosti je
            važan deo istrage. <br /> Palpačija mišića će dati informacije o nabojima (disfunkciji) koji će zahtevati
            odgovarajući tretman. <br /> Ovaj deo analize se naziva STATIČKA palpačija.
          </p>

          <h4 className="py-4 text-2xl font-semibold">Pokretljivost mišića</h4>
          <p className="text-lg leading-relaxed">
            Testiranje segmentnih blokada između pršljenova pasivno i aktivno. <br /> FUNKCIJA MIŠIĆA kao
            snaga i fleksibilnost su od najveće važnosti da bi se utvrdilo koja tetiva/mišić uzrokuje problem. <br />
            Područje bola i uzrok bola nisu uvek povezani jedno s drugim, zato se mora pristupiti pažljivo i odgovorno.
          </p>

          <h4 className="py-4 text-2xl font-semibold">Neurološki pregled</h4>
          <p className="text-lg leading-relaxed">
            Neophodan je za konačnu dijagnozu. <br /> Testiranje dubokih tetivnih refleksa, smanjenje osećaja
            (senzibiliteta) je potrebno da bi se lokalizovalo oštećenje nerva. <br /> Ručno testiranje mišićne snage/
            slabosti/ bola daje dodatne informacije. <br /> Ovaj deo se naziva FUNKCIONALNA neurologija.
          </p>

          <p className="py-3 text-lg leading-relaxed">
            <span className="font-bold">DODATNE PRETRAGE</span> u smislu rendgena, magnetne rezonance, skenera, ultrazvuka mogu
            biti potrebna dodatna dijagnostička pomoć u konačnom utvrđivanje uzroka stanja. <br /> Zato ćete biti
            blagovremeno upućeni na dalji pregled kod doktora ili konsultacije sa drugim stručnim licem.
          </p>
        </div>
      </main>

      <KontaktFooter />
    </>
  );
}

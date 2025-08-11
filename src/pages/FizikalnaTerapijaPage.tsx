import React from "react";
import KontaktFooter from "../components/KontaktFooter";

export default function FizikalnaTerapijaPage() {
  return (
    <>
      <main className="container mx-auto pt-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight my-8">Usluge</h1>
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Fizikalna terapija</h2>

        <div className="TENS">
          <h3 className="py-4 text-center text-xl md:text-2xl font-semibold">
            TRANSKUTANA ELEKTRIČNA NERVNA STIMULACIJA (TENS)
          </h3>

          <h4 className="py-3 text-lg md:text-xl font-semibold">ŠTA JE TENS I KOJE SU NJEGOVE VRSTE?</h4>
          <p className="py-2 text-lg leading-relaxed">
            To je jedna od metoda električne stimulacije čiji je primarni cilj da obezbedi određeni
            stepen simptomatskog ublažavanja bola uz pomoć uzbudljivih senzornih nerava. <br /> TENS jedinice rade tako
            što isporučuju male električne impulse kroz elektrode koje imaju lepljive jastučiće za pričvršćivanje na
            kožu osobe. <br /> Ovi električni impulsi preplavljuju nervni sistem, smanjujući njegovu sposobnost da prenosi
            signale bola do kičmene moždine i mozga.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">Uopšteno je kategorisan u 3 tipa:</h4>
          <p className="py-2 text-lg leading-relaxed">
            <b>Konvencionalni TENS (HIGH):</b> <br /> Uključuje primenu struje niskog intenziteta/visoke frekvencije da bi se proizveo jak, ali ugodan osećaj, njegovo trajanje je 30 min. <br />
            <b>TENS nalik dry needling-u (LOV):</b><br /> Uključuje primenu struje visokog intenziteta / niske frekvencije preko mišića ili akupunkturnih tačaka da bi se proizveo jak, ali udoban osećaj. <br /> Njegovo trajanje je manje od 20 minuta. <br />
            <b>Kratki intenzivni TENS:</b><br /> Uključuje primenu struje visokog intenziteta / visoke frekvencije. <br /> Traje ne više od 5 minuta.
          </p>

          <h3 className="py-4 text-xl md:text-2xl font-semibold">KAKO FUNKCIONIŠE TENS?</h3>
          <p className="py-2 text-lg leading-relaxed">
            <b>Modulacija bola: </b><br /> Da bi se bol osetio obično postoji lanac u kome se periferni receptori stimulišu štetnim fizičkim ili hemijskim agensom i ovaj stimulus se prenosi perifernim nervima do kičmene moždine, do moždine, kroz moždano stablo i tako do cerebralni korteks, gde se bol ceni na nivou svesti. <br /> Ovaj put nužno uključuje brojne sinapse i inhibicija impulsa na njihovom putu do korteksa je mehanizam kojim se bol može modulirati.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            Nociceptivni nervni završeci mogu biti stimulisani hemikalijama koje se oslobađaju povredom tkiva ili akumulirane kao rezultat metaboličke aktivnosti i tako stvaraju električni potencijal. <br /> Stepen proizvedene stimulacije zavisi od broja prisutnih hemikalija. <br /> Pretpostavlja se da uklanjanje ovih hemikalija iz područja može pomoći u smanjenju nivoa nocićeptivne stimulacije i stoga fizioterapeutski agensi (led i toplota) koji utiču na cirkulaciju mogu pomoći da se to postigne. <br /> Nocićeptivni stimulus se prenosi na pupčanu vrpcu zajedno sa sporoprovodljivim, nemijelinizovanim C vlaknom ili brže mijelinizovanim Ad (delta) vlaknom. <br /> Oba će na kraju ući u pupčanu vrpcu zadnjim putem. <br /> Pretpostavlja se da, pošto oba ova vlakna imaju maksimalnu frekvenciju na kojoj mogu da sprovode, ako se primeni veća frekvencija stimulacije, može doći do fiziološkog bloka provođenja. <br /> TENS proizvodi ovu potrebnu frekvenciju i tako ima ovaj efekat.
          </p>

          <h3 className="py-4 text-xl md:text-2xl font-semibold">KOJE SIMPTOME I STANJA LEČI TENS?</h3>
          <p className="py-2 text-lg leading-relaxed">
            TENS jedinica ima kontrole koje omogućavaju ljudima da daju odgovarajući nivo ublažavanja bola. <br /> Može se postići promenom intenziteta, frekvencije i trajanja impulsa. <br /> Može pomoći u lečenju sledećih simptoma:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Sindromi hroničnog bola</li>
            <li>Period Pain</li>
            <li>Labor Pain</li>
            <li>Postoperativni bol</li>
            <li>Bol u zglobovima</li>
            <li>Mišićni bol</li>
            <li>Ligamentni bol</li>
            <li>Tendinitis bol</li>
            <li>Bol u vratu i leđima</li>

            <p className="py-2 text-lg leading-relaxed">Takođe može ublažiti bol koji je posledica sledećeg:</p>

            <li>Endometrioza</li>
            <li>Artritis</li>
            <li>Sportske povrede</li>
            <li>Multipla skleroza</li>
            <li>Fibromijalgija</li>
            <li>Miofascijalne triger tačke</li>
            <li>Bolna dijabetička neuropatija</li>
            <li>Oštećenje kičmene moždine</li>
            <li>Amputacija</li>
          </ul>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJA SU OGRANIČENJA ILI NEŽELJENI EFEKTI TENS-A?</h4>
          <p className="py-2 text-lg leading-relaxed">
            Za većinu ljudi je bezbedno da koriste TENS jedinicu, obično bez neželjenih efekata, ali, električni impuls TENS-a može izazvati zujanje, peckanje ili bockanje, što bi nekima moglo biti neprijatno. <br />
            Neki ljudi mogu biti alergični na lepljive jastučiće. <br /> Svako ko oseti crvenilo i iritaciju kože može preći na hipoalergene. <br />
            Elektrode nikada ne treba stavljati na prednji deo vrata jer to može sniziti krvni pritisak ili preko očiju, jer može izazvati povredu. <br />
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJE SU KONTRAINDIKACIJE ZA TENS?</h4>
          <p className="py-2 text-lg leading-relaxed">
            Iako je bezbedan za većinu ljudi, stručnjaci preporučuju da neke grupe ljudi izbegavaju TENS tretman osim ako lekar ne savetuje njegovu upotrebu. <br />
            Gornja preporuka se odnosi na sledeće ljude: <br />
            <b>Trudnice:</b> Trebalo bi da izbegava upotrebu u predelima stomaka i karlice. <br />
            <b>Ljudi sa epilepsijom:</b> Primena elektroda na glavu ili vrat ljudi sa epilepsijom može izazvati iznenadni poremećaj u mozgu. <br />
            <b>Ljudi sa srčanim problemima.</b> <br />
            <b>Ljudi sa pejsmejkerom ili drugom vrstom električnih ili metalnih implantata.</b>
          </p>

          <h3 className="py-4 text-xl md:text-2xl font-semibold">KOJI SU PARAMETRI LEČENJA TENS-A?</h3>
          <p className="p-2 text-lg leading-relaxed">
            <b>Parametri tretmana:</b> <br />
            Pulsni oblik - obično pravougaoni. <br />
            Širina impulsa - meri se u mikrosekundama i kreće se između 100 i 500us. <br />
            Frekvencija - može biti niža od 2 Hz ili čak 60 Hz. <br /> Obično se koristi frekvencija od 150 Hz. <br /> Učestalost može da izabere i promeni terapeut. <br />
            Intenzitet - može da varira od 0 do 60 miliampera (mA) na mnogim jedinicama. <br />Pacijent ili terapeut mogu da kontrolišu intenzitet i treba da se oseti peckanje. <br />
            Širok spektar varijacija u širini, frekvenciji i intenzitetu pulsa daje fleksibilnost u pogledu tretmana koji se primenjuje kod pacijenata sa sindromima hroničnog bola.
          </p>

          <h3 className="py-4 text-xl md:text-2xl font-semibold">Kako se primenjuje TENS?</h3>
          <p className="p-2 text-lg leading-relaxed">
            Vakum elektrode ili gumene elektrode se vežu ili fiksiraju lepljivom trakom i prekrivaju provodljivim gelom, a zatim stavljaju na kožu pacijenta. <br /> Žice koje povezuju elektrode sa jedinicom mogu se sakriti odećom. <br /> Pozicioniranje elektroda: <br />
            Može se koristiti više pristupa. <br /> Elektrode se mogu postaviti preko
            akupunkturne tačke, motoričke tačke ili triger tačke. <br />
            Područje najvećeg intenziteta bola odgovarajući dermatom ili segment kičme odgovarajući periferni nerv koji god položaj da se izabere za postavljanje elektroda, najbolje je da koža ispod njih ima netaknut senzorni mehanizam jer aferentna senzorna stimulacija velikog prečnika koju proizvodi TNS struja koja deluje na kožu proizvodi efekat na bol. <br /> Kada su elektrode postavljene, TENS se može primeniti podešavanjem parametara.
          </p>
        </div>

        <div className="IFT">
          <h3 className="text-center py-4 text-xl md:text-2xl font-semibold">INTERFERENTNA TERAPIJA</h3>

          <h4 className="py-4 text-lg md:text-xl font-semibold">ŠTA JE INTERFERENTNA TERAPIJA (IFT)?</h4>
          <p className="py-2 text-lg leading-relaxed">
            IFT, što znači interferentna terapija, jedna je od vrsta elektroterapije koja se koristi za upravljanje bolom. <br /> Princip interferentne terapije je da izazove da dve srednje frekvencijske struje malo različitih frekvencija interferiraju jedna sa drugom. <br /> Na primer, ako kolo A nosi struju sa frekvencijom od 4000 Hz, a kolo B nosi struju sa frekvencijom od 3980 Hz, tada će proizvedena niska frekvencija biti 20 Hz i ova frekvencija je veoma korisna u modulaciji bola. <br /> Nova niskofrekventna struja poznata kao frekvencija otkucaja jednaka je razlici u frekvencijama između dve srednje frekvencijske struje proizvedene u tkivima na mestu gde se dve struje ukrštaju. <br /> U osnovi se koristi za lečenje hroničnih, posttraumatskih i post-hirurških bolova. <br /> Osnovni princip podrazumeva korišćenje efekata niskih frekvencija (manje od 250pps) bez bolnih ili neprijatnih nuspojava. <br /> Glavna prednost IFT-a je da proizvodi efekte u tkivu, tačno tamo gde je potrebno, bez nepotrebne i neprijatne stimulacije kože. <br /> Ova tehnika se široko koristi za izazivanje kontrakcije mišića, podsticanje zarastanja i smanjenje edema.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJE SU VRSTE INTERFERENTNIH TERAPIJA?</h4>
          <p className="py-2 text-lg leading-relaxed">
            <b>Vektorski efekat</b> <br />
            Interferentno polje se rotira pod uglom od 450 u svakom pravcu, tako da polje pokriva širu oblast. <br /> Ovo je korisno kod difuzne patologije ili ako se mesto lezije ne može tačno lokalizovati.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            <b>Promene frekvencije</b> <br />
            Neka oprema dozvoljava varijaciju u brzini promene frekvencije. <br /> Ritmički režim može biti kontinuirano ljuljanje od 0 do 100 Hz za 5-10 sekundi i nazad u sličnom vremenu ili može trajati 1-6 sekundi na jednoj frekvenciji praćeno 1-6 s na drugoj frekvenciji sa promenljivim vremenom za ljuljanje između dva.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            <b>Konstantna frekvencija</b> <br />
            Neki tretmani se mogu izvesti sa smetnjom fiksiranom na određenoj frekvenciji.<br /> Ritmička frekvencija je korisna ako treba tretirati nekoliko vrsta tkiva odjednom. <br />Varijacija u frekvenciji takođe prevazilazi problem akomodacije tkiva gde odgovor određenog tkiva opada sa vremenom.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            <b>Sveep frekvencije</b> <br />
            Princip korišćenja sveep-a je da je mašina podešena da automatski menja frekvenciju stimulacije, koristi ili unapred podešene ili korisnički podešene opsege sveep-a.<br /> Opseg zahvata treba da odgovara željenim fiziološkim efektima. <br /> Obrazac sveep-a čini značajnu razliku u stimulaciji koju prima pacijent. <br />Većina mašina nudi nekoliko šema za čišćenje: <br />
            Trouglasti uzorak. <br />
            Rectangular Sveep Pattern. <br />
            Trapezoidni Sveep Pattern.<br />
            U 'trouglastom' obrascu sveep-a, mašina se postepeno menja od osnovne do gornje frekvencije, tokom 6 sekundi.<br /> Iako neke mašine nude opcije od 1 ili 3 sekunde.<br /> Sve frekvencije između osnovne i gornje frekvencije se isporučuju u jednakoj proporciji.<br />
            Pravougaoni sveep je drugačiji obrazac stimulacije u kojem su podešene osnovna i gornja frekvencija, ali mašina se tada „prebacuje“ između ove dve specifične frekvencije umesto da se postepeno menja sa jedne na drugu nivoa frekvencije, a drugi će se prebacivati sa jedne frekvencije na drugu.<br /> 'Trapezoidni' potez je zapravo kombinacija ova dva.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KAKO FUNKCIONIŠE INTERFERENTNA TERAPIJA (IFT)?</h4>
          <p className="py-2 text-lg leading-relaxed">
            Terapija interferentnom strujom deluje tako što šalje male količine električne stimulacije oštećenim tkivima u telu. <br /> Terapija ima za cilj da podstakne prirodni proces tela da reaguje na bol, povećavajući cirkulaciju i na taj način proizvodi hormone koji podstiču zarastanje.<br /> IFT isporučuje isprekidane impulse da stimuliše površinske nerve i blokira signal bola, isporučujući kontinuiranu duboku stimulaciju u zahvaćeno tkivo.<br /> IFT ublažava bol, povećava cirkulaciju, smanjuje edem i stimuliše mišiće.<br /> Frekvencija od 100Hz može stimulisati A-beta vlakna velikog prečnika, koja utiču na kapiju bola, i inhibiraju prenos nocićeptivnog saobraćaja malog prečnika (C i A-delta vlakna), što efikasno zatvara hod bolnim impulsima.<br /> Interferencijalna struja povećava cirkulaciju krvi čime se smanjuje otok, ispiranjem hemikalija koje stimulišu nocićeptivne nervne završetke.<br />
            Frekvencija između 1 i 100 Hz se koristi za kontrakciju normalno inerviranih mišića.<br /> Različite vrste frekvencija izazivaju različite kontrakcije, niska frekvencija, izaziva trzanje, frekvencija između 5 i 20 Hz izaziva delimičnu kontrakciju tetanije, a frekvencija od 30 do 100 Hz izaziva tetanićnu kontrakciju. <br /> IFT takođe pomaže u smanjenju edema.<br /> Frekvencija od 100Hz promoviše vazodilataciju, čime se smanjuje edem.<br /> A frekvencija od 10 Hz aktivira mišićno-skeletnu pumpu, koja se koristi za promociju venskog i limfnog povratka izazivajući smanjenje edema.<br /> Neuroni koji čine autonomni nervni sistem su mali i slabo mijelinizovani poput Aδ i C vlakana perifernog nervnog sistema i da bi stimulisali autonomni nervni sistem, niže frekvencije se koriste za povećanje protoka krvi.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJI SU PARAMETRI TRETMANA INTERFERENTNE TERAPIJE (IFT)?</h4>
          <p className="py-2 text-lg leading-relaxed">
            Efekat IFT zavisi od: <br />
            Frekvencija <br />
            Intenzitet struje <br />
            Postavljanje elektroda <br />
            Frekvencija <br />
            100-150Hz konstantna ili 90-100Hz ritmična: <br /> Ove frekvencije su korisne za ublažavanje bolova, IFT deluje na velika mijelinizovana vlakna u dorzalnom rogu, blokirajući mala vlakna bola. <br /> Više frekvencije imaju pokretački efekat na endogene opijate u srednjem mozgu koji inhibiraju bol.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            0-10Hz ritmično ili 10-50Hz ritmično: <br /> Ove frekvencije su korisne za stimulaciju mišića. <br /> Oni proizvode stimulaciju dubokog, normalno inerviranog mišićnog tkiva sa malo senzorne stimulacije. <br /> Kako se frekvencija povećava, kontrakcija se menja od tržanja do tetanićke kontrakcije.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            0-100Hz ritmički: Opseg frekvencija proizvodi vazodilataciju. <br /> Ovo je stimulacija i opuštanje zidova krvnih sudova, dajući sinusni efekat.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            Intenzitet struje <br />
            Struja se povećava sve dok pacijent ne oseti peckanje, dalje kako dolazi do akomodacije intenzitet se polako povećava do tačke stimulacije mišića. <br /> Trajanje tretmana varira između 10-20 minuta.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            Postavljanje elektroda <br />
            Pacijent se postavlja u udoban položaj i koza se priprema za tretman. <br /> Koža se čisti, u slučaju bilo kakve lezije kože, područje se izoluje vazelinom. <br /> Vakum elektrode ili elektrode podloge se tačno postavljaju na mesto tretmana i dva para elektroda se postavljaju tako da tačka ukrštanja dve struje bude iznad ili unutar lezije.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJA SU STANJA ILI SIMPTOMI KOJI SE LEČE INTERFERENTNOM TERAPIJOM (IFT)?</h4>
          <p className="py-2 text-lg leading-relaxed">
            IFT radi na poseban način jer koristi interferencijalnu, a ne normalnu stimulaciju. <br /> Glavne kliničke aplikacije za koje se čini da se IFT koristi su:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Ublažavanje bolova kod stanja kao što su kauzalgija, herpes zoster i neuralgija.</li>
            <li>Grlića materice spondiloza.</li>
            <li>Osteoartritis kolena.</li>
            <li>Ankilozni spondilitis</li>
            <li>Reumatoidni artritis.</li>
            <li>Smrznuto rame.</li>
            <li>Disk hernija.</li>
            <li>Stenoza kičmenog kanala.</li>
            <li>Stimulacija mišića - sprečava gubitak mišića, ponovno obrazovanje, održava opseg inkontinencije pri stresu pokreta</li>
            <li>Smanjenje edema (stanje koje uključuje prekomerno sakupljanje vodene tečnosti u šupljinama ili tkivima)</li>
            <li>Povrede mišića</li>
            <li>Povrede ligamenta</li>
          </ul>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJI SU FIZIOLOŠKI EFEKTI INTERFERENTNE TERAPIJE (IFT)?</h4>
          <p className="py-2 text-lg leading-relaxed">
            Interferentna terapija se široko koristi, ali fizioterapeut treba da zna kako da je koristi u zavisnosti od stanja. <br /> Interferentna terapija koristi značajne fiziološke efekte niske frekvencije (manje od 250pps) električne stimulacije nerava. <br />
            Efekti interferentne terapije:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Smanjuje bol i upalu.</li>
            <li>Povećava cirkulaciju krvi.</li>
            <li>Izaziva vazodilataciju.</li>
            <li>Uklanja otpadne materije iz pogođenog područja.</li>
            <li>Povećava brzinu metabolizma.</li>
            <li>Smanjuje krvni pritisak.</li>
            <li>Leči hronične lezije ligamenta.</li>
            <li>Leči edem i hematom.</li>
            <li>Poboljšava ograničene pokrete zglobova.</li>
            <li>Povećava stimulaciju mišića.</li>
            <li>Vraća izgubljeno kretanje mišića.</li>
          </ul>

          <h4 className="py-4 text-lg md:text-xl font-semibold">KOJE SU KONTRAINDIKACIJE ZA INTERFERENTNU TERAPIJU (IFT)?</h4>
          <p className="py-2 text-lg leading-relaxed">
            IFT je uobičajeni modalitet za ublažavanje bolova bez neželjenih efekata koje imaju oralni lekovi protiv bolova i antiinflamatorni lekovi. <br /> Kao i svaki drugi terapeutski modalitet, on takođe ima neka ograničenja kao što su: <br />
          </p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Infektivno stanje</li>
            <li>Malignost.</li>
            <li>Pejsmejkeri.</li>
            <li>Gubitak osećaja.</li>
            <li>Opasnost od krvarenja</li>
            <li>Velike otvorene rane.</li>
            <li>Dermatološka stanja.</li>
            <li>Pregnant Uterus.</li>
            <li>Arterijska bolest.</li>
            <li>Febrilno stanje.</li>
            <li>Tromboza dubokih Vena.</li>
            <li>Tokom menstruacije.</li>
            <li>Nepouzdan pacijent.</li>
          </ul>
        </div>

        <div className="ostatak">
          <h3 className="py-4 text-center text-xl md:text-2xl font-semibold">ULTRAZVUČNA TERAPIJA</h3>
          <p className="py-2 text-lg leading-relaxed">
            Primena ultrazvučne terapije pomaže povećanju protoka krvi u lokalizovanom području, kako bi se smanjio otok i upala. <br /> Takođe se koristi za ubrzanje zarastanja preloma kostiju. <br />
            Terapija u osnovi uključuje upotrebu metalne sonde. <br /> Postupak počinje nanošenjem gela ili na glavu sonde ili direktno na kožu. <br />
            Nakon nanošenja gela, sonda se kontinuirano pomera preko izabranog područja u trajanju od 5 do 10 minuta. <br /> Intenzitet ili snaga ultrazvuka se podešava prema željenom efektu. <br /> Neki ljudi mogu osetiti blagi puls tokom ove terapije, dok drugi mogu osetiti blagu toplinu u izabranom području.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">Stanja koja se leče ultrazvučnom terapijom</h4>
          <p className="py-2 text-lg leading-relaxed">
            Ultrazvučna terapija ima brojne prednosti, jer se može koristiti za širok spektar problema. Međutim, najčešće se koristi za: <br />
          </p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Zagrevanje i opuštanje mišića kako bi se ublažio bol</li>
            <li>Povećanje protoka krvi, tj. limfe (limfa: tečnost koja nosi bela krvna zrnca po celom telu) radi ubrzavanja procesa zarastanja, ne samo mišića, već i zglobova i ligamenata.</li>
            <li>Omekšavanje bilo kojeg postojećeg oziljnog tkiva</li>
            <li>Pulsni ultrazvuk niskog intenziteta (LIPUS) koristi se za sanaciju preloma</li>
            <li>Lečenje osteoartritisa kolena (OA)</li>
          </ul>

          <h3 className="py-4 text-center text-xl md:text-2xl font-semibold">LASERSKA TERAPIJA</h3>
          <p className="py-2 text-lg leading-relaxed">
            Laserska terapija podrazumeva primenu laserske svetlosti niskog intenziteta za ublažavanje bolova izazvanih oštećenjem mekog tkiva. <br /> Olakšava regeneraciju tkiva i vraća normalnu funkciju ćelija. <br />
            Koriste je stručnjaci za lečenje rana i bolova. <br />Nivo svetlosti je prilično nizak u poređenju sa drugim oblicima laserske terapije, kao što su oni koji se koriste za uništavanje tumora i koagulaciju. <br />
            Postupak je generalno siguran, efikasan i neinvazivan za upotrebu. Iako ćete osetiti da laserski uređaj dodiruje vašu kožu, procedura je bezbolna, ne oseća se vibracija ili toplota.
          </p>

          <h4 className="py-4 text-lg md:text-xl font-semibold">Stanja koja se leče laser terapijom</h4>
          <p className="py-2 text-lg leading-relaxed">
            Sa širokim spektrom prednosti, LASER terapija je prikladna za mnoge planove lečenja. Neki od njih su: <br />
          </p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Opšti hronični bol</li>
            <li>Teniski lakat</li>
            <li>Plantarni fasciitis</li>
            <li>Udar u rame</li>
            <li>Smrznuto rame</li>
            <li>Disk hernija</li>
            <li>Išijas</li>
            <li>Disfunkcija karlice</li>
            <li>Osteoartritis kolena, kuka i skočnog zgloba</li>
            <li>Reumatoidni artritis</li>
            <li>Tendonitis</li>
            <li>Teniski lakat</li>
            <li>Temporomandibularni zglob</li>
            <li>Dijabetička neuropatija</li>
            <li>Burzitis kuka ili ramena</li>
          </ul>

          <h3 className="py-4 text-center text-xl md:text-2xl font-semibold">KRIOTERAPIJA</h3>
          <p className="py-2 text-lg leading-relaxed">
            Krioterapija ili hladna terapija se koristi u rehabilitaciji povreda, a često se koristi za ublažavanje bolova, smanjenje temperature, kontrolu krvarenja, prevenciju ili smanjenje edema od traume i upale, smanjenje mišićnog spazma i smanjenje spastićnosti. <br />
            Terapija se obično primenjuje tokom prvih 24 do 48 sati nakon povrede. <br /> Prvo nanošenje hladnoće obično dovodi do smanjene filtracije tečnosti u interstićijumu tkiva, smanjene upale i bola i smanjenja brzine metabolizma.
          </p>

          <p className="py-2 text-lg leading-relaxed">Smanjenje temperature kože/mekih tkiva dovodi do:</p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Smanjenja protoka krvi</li>
            <li>Smanjenje otoka</li>
            <li>Pomaže u smanjenju mišićnog spazma</li>
            <li>Smanjuje brzinu metabolizma ograničavanjem protoka kiseonika do ćelija</li>
            <li>Smanjuje upalu smanjenjem protoka krvi usled kontrakcije krvnih sudova</li>
          </ul>

          <p className="py-2 text-lg leading-relaxed">Stanja koja se leče krioterapijom</p>

          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Osteoartritis</li>
            <li>Nedavna povreda</li>
            <li>Giht</li>
            <li>Sojevi</li>
            <li>Tendinitis ili iritacija tetiva rane akutne povrede i zapaljenja</li>
            <li>Spazam mišića</li>
            <li>Spastićna stanja</li>
            <li>Smanjenje temperature</li>
            <li>Edematozna stanja</li>
            <li>Hitna pomoć za opekotine</li>
            <li>Ograničeni sekundarni bol ROM</li>
          </ul>

          <h3 className="py-4 text-center text-xl md:text-2xl font-semibold">TERMOTERAPIJA</h3>
          <p className="py-2 text-lg leading-relaxed">
            Termoterapija koristi toplotu za povećanje cirkulacije krvi u određenom delu tela, što može olakšati bol, opustiti mišiće, i ubrzati proces oporavka. <br />Toplota može biti primenjena direktno na površinu kože pomoću termofora, toplih obloga ili toplih kupki. <br /> Ova terapija je posebno korisna za ljude koji pate od hroničnih bolova, artritisa, grčeva u mišićima, i povreda mekih tkiva. <br />
            Povećanje temperature kože/mekog tkiva dovodi do: <br /> Povećanja protoka krvi vazodilatačijom <br />
            Povećava apsorpciju kiseonika čime se povećava zarastanje tkiva <br />
            Povećava brzinu metabolizma <br />
            Povećava rastegljivost tkiva <br />
          </p>

          <p className="py-2 text-lg leading-relaxed">Stanja koja se leče termoterapijom</p>
          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Osteoartritis</li>
            <li>Naprezanje i uganuće</li>
            <li>Tendonitis</li>
            <li>Zagrevanje ukočenih mišića ili tkiva pre aktivnosti</li>
            <li>Ublažavanje bolova ili grčeva koji se odnose na povrede vrata ili leđa, uključujući donji deo leđa, subakutna ili hronična traumatska i inflamatorna stanja</li>
            <li>Prethodno zagrevanje pre električne stimulacije</li>
          </ul>
        </div>
      </main>

      <KontaktFooter />
    </>
  );
}

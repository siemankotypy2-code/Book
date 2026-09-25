import { Chapter, CaseStudy, SelfExercise } from '../types/book';

export const caseStudiesList: CaseStudy[] = [
  {
    id: 'studium-1-podwyzka-paraliz',
    title: 'Gdy głos więźnie w gardle: Syndrom paraliżu decyzyjnego pod presją autorytetu',
    subtitle: 'Rozmowa o wynagrodzenie i anatomia uległości wobec dominacji społecznej',
    protagonist: 'Tomasz, 32 lata, starszy programista i analityk systemowy',
    context: 'Tomasz przez 14 miesięcy realizował z sukcesem kluczowy projekt dla korporacji. Przygotował twarde dane z audytów i wykresy pokazujące 40% wzrost zysków. Przez tydzień ćwiczył przed lustrem spokojny ton głosu. W gabinecie dyrektora wystarczyło jedno chłodne spojrzenie i uniesienie brwi, by Tomasz zgodził się na "odłożenie tematu o kolejne pół roku" i jeszcze przeprosił za zawracanie głowy.',
    story: [
      'Gabinet dyrektora operacyjnego, Wiktora, mieści się na najwyższym piętrze szklanego biurowca. Kiedy Tomasz wszedł do środka, Wiktor nie podniósł od razu wzroku znad laptopa. Kazał mu czekać w milczeniu przez 90 sekund, stukając miarowo palcami o mahoniowy blat. Te 90 sekund w ciszy sprawiło, że serce Tomasza przyspieszyło ze spoczynkowych 70 do 115 uderzeń na minutę.',
      'Wiktor wreszcie spojrzał na Tomasza, opierając brodę na splecionych dłoniach — postawa klasycznej dominacji alfa, redukująca fizyczną dostępność i wyznaczająca dystans. "Tomaszu, słyszałem, że chciałeś porozmawiać o renegocjacji warunków. Powiem ci szczerze: zaskoczyłeś mnie. W dobie cięć budżetowych i niepewności rynkowej myślałem, że cenisz sobie stabilność naszego zespołu."',
      'W tym momencie w umyśle Tomasza zgasły wszystkie przygotowane argumenty. Zamiast przedstawić zestawienie zysków, poczuł suchość w gardle, ucisk w klatce piersiowej i napływające poczucie winy. Tomasz zaczął się tłumaczyć: "Oczywiście, panie dyrektorze, ja bardzo doceniam stabilność... Po prostu pomyślałem, że może po zakończeniu wdrożenia..."',
      'Wiktor przerwał mu z wyuczoną, protekcjonalną empatią: "Doceniam twoje zaangażowanie, Tomku. Jesteś dla nas ważny. Dlatego nie chcę cię teraz obarczać dodatkową odpowiedzialnością, która wiązałaby się z wyższą stawką. Wróćmy do tej rozmowy za sześć miesięcy, gdy zrobimy bilans kwartalny. Zgoda?".',
      'Tomasz kiwnął głową, uścisnął wyciągniętą dłoń i opuścił gabinet. Dopiero po powrocie do swojego biurka zalała go fala wściekłości na samego siebie, połączona z poczuciem głębokiego upokorzenia.'
    ],
    dialogue: [
      { speaker: 'Wiktor (Dyrektor)', text: 'W dobie cięć budżetowych i niepewności rynkowej myślałem, że cenisz sobie stabilność naszego zespołu.', subtext: 'Aktywacja lęku pierwotnego: zagrożenie wykluczeniem ze stada i utratą bezpieczeństwa materialnego.' },
      { speaker: 'Tomasz', text: 'Oczywiście, panie dyrektorze, ja bardzo doceniam stabilność... Po prostu pomyślałem...', subtext: 'Kapitulacja kory przedczołowej; wejście w postawę przepraszająco-poddańczą.' },
      { speaker: 'Wiktor (Dyrektor)', text: 'Dlatego nie chcę cię teraz obarczać dodatkową odpowiedzialnością... Wróćmy do tematu za 6 miesięcy.', subtext: 'Fałszywa troska (paternalizm manipulacyjny) i zamiana prawa pracownika w rzekomą łaskę pracodawcy.' }
    ],
    psychologicalAnalysis: {
      coreMechanism: 'Syndrom zamrożenia (Freeze Response) wywołany nagłą asymetrią statusu i aktywacją schematu podporządkowania w obliczu symbolicznego autorytetu.',
      cognitiveBiases: [
        { name: 'Efekt autorytetu (Milgram Bias)', description: 'Bezkrytyczne uleganie osobie postrzeganej jako wyższa rangą socjalną lub formalną.', impact: 'Tomasz natychmiast zredukował wagę własnych racjonalnych faktów na rzecz subiektywnej oceny dyrektora.' },
        { name: 'Negatywna asymetria emocjonalna (Loss Aversion)', description: 'Ból potencjalnej straty (np. utrata sympatii szefa lub pracy) jest psychologicznie dwukrotnie silniejszy niż radość z potencjalnego zysku (podwyżka).', impact: 'Lęk przed popsuciem relacji przeważył nad chęcią uzyskania godnego wynagrodzenia.' },
        { name: 'Błąd atrybucji wewnętrznej w poczuciu winy', description: 'Interpretowanie manipulacji drugiej strony jako dowodu na własną niewdzięczność i chciwość.', impact: 'Sformułowanie szefa o "stabilności" wzbudziło w Tomaszu irracjonalny wstyd.' }
      ],
      defenseMechanisms: [
        { name: 'Introjekcja', explanation: 'Tomasz bezwiednie przyjął perspektywę szefa ("czasy są ciężkie, żądanie pieniędzy to egoizm") jako własną prawdę.' },
        { name: 'Racjonalizacja post-factum', explanation: 'W drodze do domu Tomasz zaczął wmawiać sobie: "Właściwie szef ma rację, za pół roku będę miał jeszcze mocniejsze dossier".' }
      ],
      emotionalDynamic: 'Gwałtowne przejście od zmotywowanej asertywności (stymulowanej dopaminą podczas planowania w domu) do stanu lękowego wycofania pod wpływem wstydu i strachu społecznego.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate (Amygdala - jądro boczno-podstawne)', role: 'Wykrywanie zagrożenia statusu społecznego i hierarchii', activationState: 'Hiperaktywacja (porwanie migdałowate - Amygdala Hijack)' },
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Pamięć robocza, sekwencyjna argumentacja i logiczne myślenie', activationState: 'Drastyczne wyhamowanie dopływu glukozy i utrata dostępu do pamięci faktów' },
        { region: 'Wyspa (Insula)', role: 'Przetwarzanie wstrętu, bólu społecznego i naruszenia norm', activationState: 'Uruchomienie somatycznego poczucia ściśnięcia żołądka i krtani' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Zalewa pień mózgu w ułamku sekundy, zwężając pole uwagi do sygnałów twarzy przełożonego.' },
        { name: 'Kortyzol', roleInScenario: 'Blokuje neuroprzekaźnictwo w hipokampie, uniemożliwiając przywołanie przygotowanych liczb i statystyk.' },
        { name: 'Dopamina', roleInScenario: 'Spada poniżej poziomu bazowego, co wywołuje nagłe poczucie rezygnacji i zniechęcenia.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 150 ms', process: 'Siatkówka rejestruje zaciśnięte usta i uniesioną brew szefa; impuls biegnie drogą podkorową ("low road") prosto do ciała migdałowatego, omijając korę wzrokową.' },
        { timeMs: '200 - 400 ms', process: 'Wyrzut noradrenaliny z miejsca sinawego (locus coeruleus); naczynia krwionośne w powłokach ciała ulegają obkurczeniu (stąd bladość i chłodne dłonie).' },
        { timeMs: '500 - 1200 ms', process: 'Kora przedczołowa próbuje podjąć logiczną debatę, lecz wysoki poziom katecholamin dezorganizuje synapsy w dlPFC. Mowa ulega spowolnieniu, następuje zająknięcie.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Manipulacja ramą pojęciową (Framing Effect)', description: 'Zamiana tematu rozmowy z "Wyceny wartości rynkowej pracy Tomasza" na "Lojalność wobec firmy w trudnych czasach".', vulnerabilityExploited: 'Potrzeba bycia postrzeganym jako człowiek honorowy i zespołowy.' },
        { tactic: 'Zarządzanie ciszą i dystansem przestrzennym', description: 'Wymuszone milczenie przez pierwsze 90 sekund buduje asymetrię władzy i wymusza niepokój u gościa.', vulnerabilityExploited: 'Nietolerancja niepewności i napięcia relacyjnego.' },
        { tactic: 'Paternalistyczna troska (Gaslighting relacyjny)', description: '"Nie chcę cię obarczać dodatkową odpowiedzialnością" — przedstawienie odmowy jako aktu opiekuńczego.', vulnerabilityExploited: 'Skłonność do unikania konfrontacji.' }
      ],
      counterMeasures: [
        { step: '1. Somatyczny Reset (Kotwica Fizjologiczna)', script: 'Wewnętrzny podwójny wdech nosem i długi wydech ustami (oddech fizjologiczny), oparcie stóp mocno o podłogę, rozluźnienie języka.', rationale: 'Obniża tętno i wysyła sygnał z nerwu błędnego do pnia mózgu: "Jestem bezpieczny, nie ma zagrożenia życia".' },
        { step: '2. Rozbicie Ramy i Powrót do Tematu', script: '"Panie dyrektorze, doskonale rozumiem wagę stabilności firmy i właśnie dlatego, że zoptymalizowałem proces generujący 40% oszczędności, przynoszę dziś tę analizę. Porozmawiajmy o tych konkretnych liczbach."', rationale: 'Uznanie argumentu rozmówcy bez przyjęcia jego emocjonalnej manipulacji i bezwzględne skierowanie uwagi na fakty.' },
        { step: '3. Odmowa Odsunięcia w Czasie', script: '"Sześć miesięcy to zbyt długi horyzont wobec rezultatów, które dostarczyłem w minionym roku. Proponuję ustalić aneks z datą wejścia w życie od przyszłego miesiąca."', rationale: 'Odrzucenie pozornej obietnicy i zamknięcie furtki ucieczkowej dyrektora.' }
      ]
    },
    keyTakeaway: 'Kiedy w sytuacji biznesowej czujesz nagłe poczucie winy lub paraliż gardła, nie reagujesz na treść słów, lecz na neurochemiczną pułapkę uległości. Zrozumienie, że to tylko biologia stresu, pozwala odzyskać kontrolę nad korą przedczołową.'
  },
  {
    id: 'studium-2-fomo-promocja',
    title: 'W transie gorączki zakupowej: Neurobiologia FOMO i sztuczne poczucie pilności',
    subtitle: 'Jak e-commerce i galerie handlowe hakują dopaminowy układ nagrody',
    protagonist: 'Marta, 28 lat, specjalistka ds. marketingu w korporacji',
    context: 'Marta miała wejść do centrum handlowego tylko po to, by odebrać zamówione wcześniej książki naukowe. 45 minut później stała przy kasie butiku z markową torebką i dwoma płaszczami o łącznej wartości przekraczającej połowę jej miesięcznej pensji, odczuwając euforię wymieszaną z panicznym pośpiechem.',
    story: [
      'Był piątkowy wieczór, po wyjątkowo wyczerpującym tygodniu pełnym konfliktów z klientami. Marta czuła mentalne wyczerpanie — stan, który psychologia określa mianem wyczerpania ego (ego depletion). Weszła do galerii, gdzie natężenie światła było precyzyjnie dobrane: ciepłe, nastrojowe refleksy maskowały upływ czasu (brak zegarów i okien to klasyczna architektura kasynowa).',
      'Z głośników sączyła się muzyka w tempie 60 uderzeń na minutę, idealnie synchronizująca się z rytmem serca i wyciszająca krytyczną czujność. Na witrynie eleganckiego butiku wisiał wielki, pulsujący neon: "VIP PRIVATE SALE – OSTATNIE 3 GODZINY – RABAT DO 70% TYLKO DLA POSIADACZY APLIKACJI".',
      'Ekspedientka podeszła do Marty z ciepłym, spersonalizowanym komplementem: "Ten kolor płaszcza został stworzony dokładnie pod pani karnację. Proszę go tylko dotknąć — to czysty kaszmir. Została nam ostatnia sztuka w tym rozmiarze, przed chwilą pytała o niego inna klientka".',
      'Kiedy palce Marty dotknęły miękkiego materiału, w jej mózgu doszło do fenomenu zwanego efektem posiadania (Endowment Effect). Płaszcz w jej percepcji przestał być towarem na wieszaku, a stał się częścią jej tożsamości: obrazem Marty pewnej siebie, luksusowej, docenionej.',
      'Aplikacja w telefonie wyświetliła odliczający zegar: "02:14:39 do końca oferty". Marta wyjęła kartę kredytową. Uczucie ulgi i euforii było obezwładniające. Jednak już w taksówce w drodze do domu, gdy poziom dopaminy opadł, pojawiły się mdłości i dojmujące pytanie: "Dlaczego znowu to zrobiłam?".'
    ],
    dialogue: [
      { speaker: 'Ekspedientka', text: 'Została nam ostatnia sztuka w tym rozmiarze, przed chwilą pytała o niego inna klientka.', subtext: 'Podwójny wektor: sztuczny niedobór (scarcity) oraz rywalizacja wewnątrzgatunkowa o limitowany zasób.' },
      { speaker: 'Marta (w myślach)', text: 'Ciężko pracowałam przez cały tydzień, zasłużyłam na coś pięknego. Jeśli go teraz nie wezmę, jutro będę płakać.', subtext: 'Mechanizm kompensacji emocjonalnej i natychmiastowa racjonalizacja impulsywnego zakupu.' }
    ],
    psychologicalAnalysis: {
      coreMechanism: 'Kompensacyjne rozładowanie napięcia emocjonalnego poprzez natychmiastową gratyfikację sensoryczną w warunkach osłabionej samokontroli.',
      cognitiveBiases: [
        { name: 'Efekt posiadania (Endowment Effect - R. Thaler)', description: 'Przypisywanie wyższej wartości przedmiotom tylko dlatego, że weszliśmy z nimi w fizyczny lub psychiczny kontakt.', impact: 'Fizyczne przymierzenie płaszcza sprawiło, że odłożenie go na wieszak mózg odczuł jak realną stratę osobistego majątku.' },
        { name: 'Błąd rzadkości (Scarcity Principle - R. Cialdini)', description: 'Rzeczy limitowane czasowo lub ilościowo automatycznie zyskują w naszych oczach status towaru elitarnego.', impact: '"Ostatnia sztuka" wywołała panikę wykluczenia (FOMO).' },
        { name: 'Kotwiczenie cenowe (Anchoring)', description: 'Przekreślona cena wyjściowa (np. 2400 zł) sprawia, że cena promocyjna (1200 zł) wydaje się "zarobkiem", a nie wydatkiem.', impact: 'Marta miała poczucie, że "zaoszczędziła 1200 zł", mimo że wydała pieniądze, których nie planowała.' }
      ],
      defenseMechanisms: [
        { name: 'Kompensacja psychiczna', explanation: 'Zakup drogiego przedmiotu jako plaster na poczucie bezsilności i zmęczenia po trudnym tygodniu w pracy.' },
        { name: 'Rozszczepienie czasowe', explanation: 'Oddzielenie natychmiastowej przyjemności zakupu od odroczonego w czasie bólu spłaty karty kredytowej za miesiąc.' }
      ],
      emotionalDynamic: 'Gwałtowny skok od emocjonalnego wyczerpania i pustki do ekscytacji łowieckiej, zakończony post-decyzyjnym kacem moralnym.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (Nucleus Accumbens - NAcc)', role: 'Główne centrum układu nagrody, silnik poszukiwania i ekscytacji', activationState: 'Maksymalny wyrzut dopaminy na widok symbolu statusu i rabatu' },
        { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Wycena subiektywnej wartości i kalkulacja ryzyka finansowego', activationState: 'Uśpiona przez zmęczenie poznawcze i bodźce sensoryczne' },
        { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Rejestracja bólu płacenia gotówką', activationState: 'Niemal całkowicie wyciszona przez płatność bezdotykową i kartę kredytową' }
      ],
      neurotransmitters: [
        { name: 'Dopamina fazowa', roleInScenario: 'Nie odpowiada za przyjemność z posiadania, lecz za obsesyjne pożądanie w fazie "polowania" na okazję.' },
        { name: 'Endorfiny', roleInScenario: 'Uwalniają się w momencie dotknięcia miękkiej tkaniny i zatwierdzenia transakcji, dając chwilowe znieczulenie stresu.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Skaner wzrokowy', process: 'Mózg widzi czerwony napis rabatu; jądro półleżące zapala się w ciągu 200 ms, generując sygnał "Okazja! Działaj!".' },
        { timeMs: 'Dotyk kaszmiru', process: 'Ciałka Meissnera w opuszkach palców przesyłają sygnał do kory czuciowej; oksytocyna i dopamina budują iluzję intymnej więzi z rzeczą.' },
        { timeMs: 'Płatność kartą', process: 'Plastikowa karta eliminuje neurobiologiczny "ból płacenia" (pain of paying), który naturalnie towarzyszy fizycznemu oddawaniu banknotów.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Sztuczna presja czasu (Urgency Engine)', description: 'Odliczające zegary, komunikaty "tylko do północy" wyłączają logiczną analizę na rzecz paniki.', vulnerabilityExploited: 'Lęk przed utraconą szansą i żalem po zaniechaniu.' },
        { tactic: 'Manipulacja multisensoryczna', description: 'Odpowiednia muzyka, zapach wanilii lub cedru w butiku, miękkie wykładziny spowalniające chód.', vulnerabilityExploited: 'Podświadome dostrajanie układu nerwowego do otoczenia.' },
        { tactic: 'Płatność odroczona i sterylizacja gotówki', description: 'Karty, aplikacje, płatności "Kup teraz, zapłać za 30 dni" usuwają psychologiczny opór wydawania pieniędzy.', vulnerabilityExploited: 'Asymetria czasowa między nagrodą a kosztem.' }
      ],
      counterMeasures: [
        { step: '1. Zasada 72 Godzin (Odroczenie Dopaminowe)', script: '"Płaszcz jest wspaniały. Jeśli za 72 godziny nadal będę uważała, że jest mi niezbędny, wrócę po niego."', rationale: 'Pozwala na opadnięcie fazowego wyrzutu dopaminy i powrót kory przedczołowej do racjonalnej kalkulacji.' },
        { step: '2. Przelicznik Czasu Życia', script: 'Podziel cenę produktu przez swoją realną stawkę godzinową na rękę. "Ten płaszcz to 48 godzin mojego siedzenia w biurze. Czy oddam za niego tydzień życia?".', rationale: 'Przekłada abstrakcyjne cyfry na fizyczny koszt energii życiowej.' },
        { step: '3. Zakaz Zakupów w Stanie Zmęczenia (Protokół HALT)', script: 'Nigdy nie wchodź do sklepów, gdy jesteś Głodny (Hungry), Zły (Angry), Samotny (Lonely) lub Zmęczony (Tired).', rationale: 'Wyczerpanie zasobów glukozy w mózgu uniemożliwia hamowanie zachowań impulsywnych.' }
      ]
    },
    keyTakeaway: 'Dopamina to hormon obietnicy szczęścia, a nie samego szczęścia. Kiedy czujesz parzący przymus kupienia czegoś natychmiast, twój biologiczny układ nagrody padł ofiarą profesjonalnie zaprojektowanego ataku.'
  },
  {
    id: 'studium-3-gaslighting-relacja',
    title: '„Przecież nikt inny ci tego nie powie”: Anatomia codziennego gaslightingu',
    subtitle: 'Niewidzialna erozja zaufania do własnych zmysłów w relacji biznesowo-partnerskiej',
    protagonist: 'Karolina, 35 lat, architektka wnętrz, współwłaścicielka pracowni projektowej',
    context: 'Karolina prowadzi studio ze wspólnikiem Pawłem. Od kilkunastu miesięcy czuje narastający chaos umysłowy, ciągłą potrzebę notowania każdego słowa i poczucie, że traci kompetencje zawodowe. Paweł systematycznie neguje ustalenia, wmawiając jej nadwrażliwość, złą pamięć i niestabilność emocjonalną.',
    story: [
      'Wszystko zaczęło się od drobiazgów. Podczas narady z kluczowym deweloperem Paweł zaprezentował zmiany w projekcie, które wcześniej — podczas wewnętrznej rozmowy — sam stanowczo odrzucił jako zbyt ryzykowne. Gdy Karolina po spotkaniu zapytała go o powód tej nagłej rewolucji, Paweł spojrzał na nią z wyrazem bezgranicznego zatroskania i politowania.',
      '"Karola, znowu to robisz. Przecież w czwartek przy kawie ustaliliśmy dokładnie taki wariant. Pamiętasz? Mówiłaś, że jesteś przemęczona i nie wiesz, jak domkniesz budżet. Zaczynam się o ciebie martwić, twoja pamięć ostatnio naprawdę płata ci figle".',
      'Karolina poczuła, jak grunt usuwa się jej spod stóp. Przecież doskonale pamiętała czwartkową rozmowę! A jednak sposób, w jaki mówił to Paweł — ciepły, spokojny, z nutą zmartwionego przyjaciela — sprawił, że w jej głowie pojawiło się destrukcyjne ziarno niepewności: "A może rzeczywiście coś przekręciłam? Może to przez ten brak snu?".',
      'W ciągu kolejnych miesięcy schemat się powtarzał. Kluczowe maile znikały z wspólnej skrzynki (Paweł przenosił je do ukrytych folderów), a na pytania Karoliny odpowiadał: "Znowu nie doczytałaś załącznika? Proszę cię, nie histeryzuj, zjedz coś słodkiego i odpocznij". Karolina zaczęła w tajemnicy przed wszystkimi nagrywać rozmowy na dyktafon, czując się jak osoba popadająca w paranoję.',
      'Gdy wreszcie skonfrontowała Pawła z odsłuchanym nagraniem, gdzie czarno na białym słychać było jego manipulację, Paweł nie speszył się ani na ułamek sekundy. Uśmiechnął się chłodno i powiedział: "Nagrywasz mnie? Ty naprawdę potrzebujesz pomocy psychiatrycznej. Jesteś tak toksyczna i nieufna, że niszczysz naszą firmę".'
    ],
    dialogue: [
      { speaker: 'Paweł', text: 'Znowu to robisz. W czwartek ustaliliśmy dokładnie taki wariant... Twoja pamięć ostatnio naprawdę płata ci figle.', subtext: 'Podważenie aparatu poznawczego ofiary; celowe wywołanie dysonansu między pamięcią a autorytetem manipulatora.' },
      { speaker: 'Karolina', text: 'Ale ja pamiętam... Miałam to nawet zapisane w notesie...', subtext: 'Wycofywanie się z pewności na rzecz obrony i szukania dowodów na własne zdrowie psychiczne.' },
      { speaker: 'Paweł', text: 'Nagrywasz mnie? Ty naprawdę potrzebujesz pomocy specjalisty. Niszczysz naszą firmę.', subtext: 'Odwrócenie ról kata i ofiary (DARVO: Deny, Attack, and Reverse Victim and Offender).' }
    ],
    psychologicalAnalysis: {
      coreMechanism: 'Gaslighting — systematyczne i długofalowe niszczenie zaufania ofiary do własnych zmysłów, pamięci i racjonalnego osądu rzeczywistości.',
      cognitiveBiases: [
        { name: 'Dysonans poznawczy (Festinger)', description: 'Nie do zniesienia sprzeczność między dwoma przekonaniami: "Mój wspólnik to mój przyjaciel" vs "Mój wspólnik celowo mnie oszukuje".', impact: 'Łatwiej uwierzyć we własną pomyłkę niż w bezwzględne zło bliskiej osoby.' },
        { name: 'Podatność na sugestię pamięciową (Loftus Effect)', description: 'Ludzka pamięć epizodyczna jest plastyczna; powtarzane z pewnością siebie fałszywe relacje mogą realnie zmodyfikować wspomnienia.', impact: 'Karolina z czasem zaczęła autentycznie wątpić w treść odbytych spotkań.' }
      ],
      defenseMechanisms: [
        { name: 'Zwątpienie we własną percepcję (Self-Doubt)', explanation: 'Zastąpienie własnej intuicji wersją rzeczywistości dyktowaną przez manipulatora.' },
        { name: 'Przymus usprawiedliwiania agresora', explanation: '"On chce dobrze, to ja jestem trudna we współpracy i zbyt emocjonalna".' }
      ],
      emotionalDynamic: 'Stopniowe przejście od autonomii i pewności siebie do paraliżującego lęku, poczucia winy, wyalienowania i chronicznego wyczerpania nerwowego.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Hipokamp', role: 'Konsolidacja śladów pamięciowych i nawigacja przestrzenno-czasowa', activationState: 'Atrofia pod wpływem przewlekłego zalewu glukokortykoidami (stresem)' },
        { region: 'Grzbietowa część przedniego zakrętu obręczy (dACC)', role: 'Detektor konfliktów i sprzeczności poznawczych', activationState: 'Permanentny stan alarmowy powodujący wyczerpanie bioenergetyczne' },
        { region: 'Biegun skroniowy i połączenie skroniowo-ciemieniowe (TPJ)', role: 'Teoria umysłu (odczytywanie intencji innych ludzi)', activationState: 'Zdezorientowane przez sprzeczne komunikaty werbalne i niewerbalne' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol (przewlekły)', roleInScenario: 'Utrzymuje organizm w stanie bezustannego podwyższonego czuwania, niszcząc neurony hipokampa i pogarszając pamięć.' },
        { name: 'Serotonina', roleInScenario: 'Drastyczny spadek stężenia w synapsach, prowadzący do stanów lękowo-depresyjnych i apatii.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Faza 1 (Miesiące 1-3)', process: 'Zaskoczenie i próba racjonalizacji. Krótkie wyrzuty kortyzolu.' },
        { timeMs: 'Faza 2 (Miesiące 4-8)', process: 'Rozregulowanie osi HPA (podwzgórze-przysadka-nadnercza). Bezsenność, zaburzenia koncentracji, chroniczny lęk wolnopłynący.' },
        { timeMs: 'Faza 3 (Miesiące 9+)', process: 'Wypalenie receptorów GABA. Neurobiologiczna bezradność wyuczona (Learned Helplessness).' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Metoda DARVO (Deny, Attack, Reverse Victim and Offender)', description: 'Wyparcie faktu, atak na moralność/zdrowie ofiary i postawienie siebie w roli poszkodowanego.', vulnerabilityExploited: 'Wrażliwość etyczna i lęk przed byciem niesprawiedliwym.' },
        { tactic: 'Płaszcz fałszywej troski ("Mówię ci to, bo się martwię")', description: 'Opakowanie przemocy psychicznej w retorykę przyjaźni i opiekuńczości.', vulnerabilityExploited: 'Potrzeba wsparcia i akceptacji.' },
        { tactic: 'Izolacja i podważanie wiarygodności w oczach otoczenia', description: 'Sugerowanie osobom trzecim, że ofiara "ma ostatnio trudny czas i bywa niestabilna".', vulnerabilityExploited: 'Lęk przed ostracyzmem społecznym.' }
      ],
      counterMeasures: [
        { step: '1. Bezwzględna Dokumentacja Pisemna', script: 'Każde ustalenie ustne natychmiast podsumowuj mailowo: "W nawiązaniu do naszej rozmowy z godziny 14:00, potwierdzam realizację wariantu B".', rationale: 'Usuwa pole do zniekształceń pamięciowych i tworzy twardy dowód procesowy.' },
        { step: '2. Niezależny Reality-Check z Osobą Trzecią', script: 'Konsultuj sytuacje z zaufanym mentorem lub psychoterapeutą poza środowiskiem firmy.', rationale: 'Przywraca obiektywny punkt odniesienia dla prawdy i przełamuje bańkę manipulacji.' },
        { step: '3. Technika Szarego Kamienia (Grey Rock)', script: 'Na prowokacje: "Rozumiem twoje zdanie. Ja opieram się na pisemnym harmonogramie. Wracam do pracy". Zero emocjonalnych tłumaczeń.', rationale: 'Odcięcie manipulatora od paliwa, jakim jest emocjonalna reakcja i cierpienie ofiary.' }
      ]
    },
    keyTakeaway: 'Jeśli w jakiejkolwiek relacji regularnie zaczynasz czuć potrzebę udowadniania, że jesteś osobą o zdrowych zmysłach, nie masz problemu z pamięcią — masz do czynienia z wyrachowanym drapieżnikiem emocjonalnym.'
  },
  {
    id: 'studium-4-prokrastynacja-lek',
    title: '„Jutro zacznę na pewno”: Prokrastynacja jako neurobiologiczna ucieczka przed lękiem',
    subtitle: 'Dlaczego odkładanie zadań to nie lenistwo, lecz emocjonalny mechanizm obronny',
    protagonist: 'Piotr, 39 lat, dyrektor zarządzający małej firmy, aspirujący autor książki branżowej',
    context: 'Piotr od dwóch lat podpisuje umowy z wydawcami i przekłada terminy oddania pierwszego rozdziału. Zamiast pisać, sprząta garaż, sortuje ikony na pulpicie, sprawdza statystyki akcji lub zaczyna nowe kursy online. Towarzyszy mu paraliżujące poczucie winy i etykieta "chronicznego lenia".',
    story: [
      'Sobota, godzina 8:30 rano. Idealna kawa zaparzona w chemexie, biurko wysprzątane do połysku, telefon wyciszony w drugim pokoju. Piotr siada przed pustym dokumentem Worda. Na samej górze widnieje tytuł: "Rozdział 1: Nowy paradygmat przywództwa". Kursor mruga miarowo: raz, dwa, trzy...',
      'W tym momencie w żołądku Piotra pojawia się subtelne, lodowate ukłucie niepokoju. Kursor wygląda jak oskarżycielski palec. "Co jeśli to, co napiszę, okaże się wtórne i banalne? Co jeśli koledzy z branży wyśmieją moje teorie? Jeśli nie napiszę nic, nadal będę uchodził za błyskotliwego stratega z potencjałem. Jeśli napiszę gniota — kurtyna opadnie".',
      'Układ limbiczny Piotra interpretuje pustą kartkę papieru dokładnie tak samo, jakby przed nim stanął drapieżnik z obnażonymi kłami: jako śmiertelne zagrożenie dla tożsamości, statusu społecznego i poczucia własnej wartości.',
      'Nagle mózg podsuwa genialne, pozornie racjonalne rozwiązanie: "Zanim zaczniesz pisać, musisz koniecznie zaktualizować system operacyjny i uporządkować foldery z fakturami za 2024 rok. Bez czystego środowiska cyfrowego nie da się tworzyć wielkich rzeczy".',
      'Piotr rzuca się w wir sortowania plików. Poziom lęku natychmiast opada! Układ nerwowy zalewa dopaminowy spokój — mózg został nagrodzony za skuteczną ucieczkę przed zagrożeniem. Dopiero o 22:00, gdy zamyka komputer z nadal pustą stroną Worda, wraca fala samobiczowania: "Znowu zmarnowałem cały dzień. Do niczego się nie nadaję".'
    ],
    dialogue: [
      { speaker: 'Wewnętrzny Krytyk Piotra', text: 'To musi być absolutne arcydzieło. Jeśli ma być przeciętne, lepiej żeby w ogóle nie powstało.', subtext: 'Perfekcjonizm paraliżujący: utożsamienie wartości człowieka z doskonałością produktu.' },
      { speaker: 'Mózg Piotra (Racjonalizacja)', text: 'Tylko zorganizuję maile i poukładam książki na półce alfabetycznie. To też praca przygotowawcza.', subtext: 'Pozorna produktywność (prokrastynacja proaktywna) dająca fałszywe poczucie sprawczości.' }
    ],
    psychologicalAnalysis: {
      coreMechanism: 'Prokrastynacja awersyjna wywołana lękiem przed porażką, lękiem przed oceną i perfekcjonizmem maladaptacyjnym.',
      cognitiveBiases: [
        { name: 'Dyskontowanie odroczone (Hyperbolic Discounting)', description: 'Mózg drastycznie faworyzuje natychmiastową ulgę (ucieczka do sprzątania) nad długoterminową nagrodę (wydanie książki za rok).', impact: 'Krótkoterminowe uśmierzenie lęku zawsze wygrywa z odległym celem.' },
        { name: 'Iluzja przyszłego ja (Future Self Empathy Gap)', description: 'Traktowanie samego siebie z przyszłości ("Piotra z poniedziałku") jak obcej osoby, która w magiczny sposób posiądzie nadludzką energię i motywację.', impact: 'Przerzucanie ciężaru na przyszłe Ja bez empatii dla jego zmęczenia.' }
      ],
      defenseMechanisms: [
        { name: 'Auto-handicapping (Samoutrudnianie)', explanation: 'Tworzenie przeszkód przed podjęciem działania, aby w razie porażki mieć gotową wymówkę ("Nie napisałem dobrej książki, bo nie miałem czasu"), chroniącą poczucie kompetencji.' },
        { name: 'Wyparcie i kompensacja', explanation: 'Udowadnianie sobie pracowitości poprzez sprzątanie i załatwianie drobnych spraw zamiast zmierzenia się z rdzeniem problemu.' }
      ],
      emotionalDynamic: 'Błędne koło: Lęk przed oceną -> Ucieczka w prokrastynację -> Chwilowa ulga neurochemiczna -> Wyrzuty sumienia i spadek samooceny -> Jeszcze większy lęk przed zadaniem.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Wola, planowanie długoterminowe, hamowanie impulsów', activationState: 'Zablokowana przez sygnał alarmowy z układu limbicznego' },
        { region: 'Ciało migdałowate (Amygdala)', role: 'Skanowanie zagrożeń emocjonalnych i egzystencjalnych', activationState: 'Nadmierna reakcja na widok pustej kartki (postrzeganej jako test tożsamości)' },
        { region: 'Brzuszne prążkowie (Ventral Striatum)', role: 'Wypatrywanie szybkiej nagrody dopaminowej', activationState: 'Przekierowuje uwagę na sprzątanie lub media społecznościowe' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Adrenalina', roleInScenario: 'Generują napięcie somatyczne (ścisk w żołądku), zmuszając do natychmiastowego przerwania kontaktu z bodźcem stresującym (pustą kartką).' },
        { name: 'Dopamina ucieczkowa', roleInScenario: 'Nagradza każdą czynność zastępczą (porządkowanie ikon, odpisanie na maila), utrwalając nawyk ucieczki.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Sekunda 1', process: 'Wzrok spoczywa na kursorze. Kora skroniowa przywołuje wspomnienia krytyki i lęku przed odrzuceniem.' },
        { timeMs: 'Sekunda 3', process: 'Amygdala odpala sygnał unikania bólu. Układ autonomiczny sygnalizuje dyskomfort.' },
        { timeMs: 'Sekunda 10', process: 'Prążkowie podsuwa alternatywę dającą ulgę: "Otwórz YouTube na 5 minut". Reakcja ucieczki dopełnia się.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Wewnętrzny Szantaż Perfekcjonizmem', description: 'Wmawianie sobie, że cokolwiek poniżej geniuszu jest dowodem na bycie oszustem (Syndrom Oszusta - Impostor Phenomenon).', vulnerabilityExploited: 'Kruche poczucie własnej wartości oparte wyłącznie na osiągnięciach zewnętrznych.' },
        { tactic: 'Kult zajętości (Toxic Productivity)', description: 'Społeczne programowanie nakazujące być ciągle "zajętym", co ułatwia ucieczkę od głębokiej pracy wymagającej konfrontacji z pustką.', vulnerabilityExploited: 'Lęk przed bezruchem i ciszą.' }
      ],
      counterMeasures: [
        { step: '1. Zasada 5 Minut i Brzydkiego Pierwszego Szkicu', script: '"Zezwalam sobie napisać najgorszy, najbardziej żenujący akapit w historii literatury. Będę pisać tylko przez 5 minut, po czym mogę legalnie przestać".', rationale: 'Drastyczne obniżenie progu wejścia wyłącza alarm w ciele migdałowatym; po 5 minutach włącza się zjawisko Zeigarnik i pęd zadaniowy.' },
        { step: '2. Emocjonalne Etykietowanie (Affect Labeling)', script: 'Nazwij emocję na głos: "Czuję teraz lęk przed tym, że zostanę oceniony jako przeciętny. To normalne. To tylko reakcja biologiczna mojego mózgu".', rationale: 'Badania Matthew Liebermana dowodzą, że zwerbalizowanie lęku aktywuje prawą brzuszną korę przedczołową i natychmiast wycisza ciało migdałowate.' },
        { step: '3. Rozdzielenie Twórcy od Krytyka', script: 'Nigdy nie edytuj tekstu podczas pisania. Dzień 1 to czysta ekspresja (tryb dopaminowy). Dzień 2 to chłodna redakcja (tryb analityczny).', rationale: 'Zapobiega konfliktowi poznawczemu między przeciwstawnymi sieciami neuronowymi (DMN vs CEN).' }
      ]
    },
    keyTakeaway: 'Prokrastynacja nigdy nie jest defektem charakteru ani brakiem dyscypliny. To desperacka próba twojego układu nerwowego, by uchronić cię przed emocjonalnym bólem odrzucenia. Wylecz lęk i perfekcjonizm, a dyscyplina pojawi się sama.'
  }
];

export const selfExercisesList: SelfExercise[] = [
  {
    id: 'cwiczenie-1-neuro-pauza-halt',
    title: 'Ćwiczenie 1: Protokół Neuro-Pauzy HALT i Technika 10-10-10',
    subtitle: 'Przełamywanie automatyzmów reaktywnych w sytuacjach podwyższonego napięcia',
    objective: 'Wykształcenie neurobiologicznego bezpiecznika pomiędzy bodźcem stresującym a reakcją behawioralną. Odzyskanie kontroli nad korą przedczołową w 90 sekund.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Wyrzut hormonów stresu (adrenaliny i noradrenaliny) ma czas półtrwania we krwi wynoszący około 60-90 sekund. Jeśli w tym oknie nie podsycasz pobudzenia negatywnymi narracjami mentalnymi, biochemia organizmu samoczynnie wraca do homeostazy. Oddech fizjologiczny (podwójny wdech nosem, długi wydech ustami) natychmiast stymuluje nerw błędny, spowalniając węzeł zatokowy serca.',
    steps: [
      {
        stepNumber: 1,
        title: 'Skaner Stanu Bazowego (Protokół HALT)',
        instruction: 'Zanim podejmiesz jakąkolwiek trudną decyzję, wejdziesz w dyskusję lub odpowiesz na zaczepnego maila, zadaj sobie 4 pytania diagnostyczne:',
        promptText: 'Oceń swój poziom w skali 1-10 w 4 wymiarach: Hungry (Głodny / niski cukier), Angry (Zły / rozgniewany), Lonely (Samotny / wyalienowany), Tired (Zmęczony / wyczerpany). Zanotuj dominujący stan:',
        placeholder: 'Np.: "Jestem na poziomie 8 w wymiarze Zmęczenia i 6 w wymiarze Głodu. Mój mózg szuka szybkiego rozładowania napięcia..."'
      },
      {
        stepNumber: 2,
        title: 'Somatyczny Reset 90 Sekund (Oddech Fizjologiczny)',
        instruction: 'Wykonaj sekwencję 3 głębokich fizjologicznych westchnień (Physiological Sigh wg protokołu prof. Andrew Hubermana): głęboki wdech przez nos, dopełniający mini-wdech na szczycie płuc, bardzo długi i powolny wydech przez lekko rozchylone usta.',
        promptText: 'Co zmieniło się w twoim ciele po wykonaniu 3 cykli oddechowych? (zwróć uwagę na napięcie w barkach, szczęce i brzuchu):',
        placeholder: 'Np.: "Zauważyłem, że miałem zaciśnięte zęby. Tętno nieco zwolniło, ucisk w klatce piersiowej ustąpił..."'
      },
      {
        stepNumber: 3,
        title: 'Kamera Czasu: Technika 10-10-10 (Suzy Welch)',
        instruction: 'Spójrz na decyzję lub konflikt, przed którym stoisz, z perspektywy trzech odległych okien czasowych:',
        promptText: 'Jakie konsekwencje będzie miała twoja impulsywna reakcja za: 10 minut? 10 miesięcy? 10 lat?',
        placeholder: 'Za 10 minut: Chwilowa ulga z wykrzyczenia prawdy.\nZa 10 miesięcy: Zniszczona relacja i konieczność szukania nowego projektu.\nZa 10 lat: Zupełnie bez znaczenia, strata energii...'
      }
    ],
    reflectionQuestions: [
      'W jakich powtarzalnych sytuacjach z Twojego życia najczęściej dochodzi do "porwania migdałowatego"?',
      'Który z czynników HALT jest Twoją piętą achillesową (np. podejmowanie decyzji o 23:00 przy wyczerpaniu)?',
      'Jakie zdanie-hasło możesz sobie przygotować, by natychmiast przerwać konfrontację i zyskać czas na oddech?'
    ]
  },
  {
    id: 'cwiczenie-2-dekonstrukcja-przekonan',
    title: 'Ćwiczenie 2: Sąd Nad Wewnętrznym Sabotażystą (CBT i Neuroplastyczność)',
    subtitle: 'Identyfikacja i przeprogramowanie automatycznych myśli zniekształcających rzeczywistość',
    objective: 'Zdemaskowanie zniekształceń poznawczych (katastrofizacji, czytania w myślach, myślenia czarno-białego) i zastąpienie ich zrównoważoną, racjonalną perspektywą.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Każda automatyczna myśl negatywna to wydeptana, silnie zmielinizowana ścieżka synaptyczna w twoim mózgu. Zgodnie z regułą Donalda Hebba: "Neurony, które razem odpalają, razem się łączą" (Neurons that fire together, wire together). Świadome zatrzymanie myśli i sformułowanie alternatywy aktywuje lewą korę przedczołową i osłabia dominację utartych kolein lękowych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Złapanie Myśli Automatycznej na Gorącym Uczynku',
        instruction: 'Przypomnij sobie sytuację z ostatnich dni, w której poczułeś nagły spadek nastroju, złość lub lęk. Co dokładnie powiedział ci twój wewnętrzny głos w pierwszej sekundzie?',
        promptText: 'Wpisz dosłowny cytat twojej myśli automatycznej:',
        placeholder: 'Np.: "Jeśli odmówię szefowi dodatkowego dyżuru w weekend, uzna mnie za lenia i przy najbliższej okazji mnie zwolni."'
      },
      {
        stepNumber: 2,
        title: 'Klasyfikacja Błędu Poznawczego',
        instruction: 'Do której kategorii należy ta myśl? (1. Katastrofizacja, 2. Czytanie w myślach, 3. Filtr negatywny, 4. Nadmierne uogólnienie, 5. Myślenie czarno-białe):',
        promptText: 'Który błąd poznawczy zdominował tę myśl i w jaki sposób zniekształcił fakty?',
        placeholder: 'Np.: "Czytanie w myślach (zakładam, że wiem, co pomyśli szef) oraz Katastrofizacja (przeskok od odmowy dyżuru prosto do utraty pracy i bezdomności)."'
      },
      {
        stepNumber: 3,
        title: 'Przesłuchanie Świadków (Dowody Za i Dowody Przeciw)',
        instruction: 'Wyobraź sobie, że stajesz przed bezstronnym sędzią. Jakie są twarde, weryfikowalne fakty przeczące tej myśli?',
        promptText: 'Wypisz minimum 3 obiektywne fakty podważające twoją katastroficzną wizję:',
        placeholder: '1. Pracuję tu od 3 lat i zawsze zbierałem znakomite oceny roczne.\n2. W regulaminie pracy weekendy są dniami wolnymi.\n3. Inni koledzy wielokrotnie odmawiali dyżurów i nikt nie wyciągał konsekwencji.'
      },
      {
        stepNumber: 4,
        title: 'Sformułowanie Myśli Zrównoważonej (Nowy Ślad Pamięciowy)',
        instruction: 'Stwórz realistyczne, spokojne i oparte na faktach zdanie, które możesz sobie powtórzyć:',
        promptText: 'Zapisz nowe, zrównoważone przekonanie:',
        placeholder: 'Np.: "Szef może być chwilowo rozczarowany, ale mam prawo do odpoczynku. Odmowa dyżuru świadczy o szacunku do moich granic, a nie o braku profesjonalizmu."'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się poziom napięcia w Twoim ciele, gdy czytasz myśl zrównoważoną zamiast automatycznej?',
      'Czyje głosy z przeszłości (rodziców, nauczycieli, krytycznych autorytetów) brzmią w Twoim wewnętrznym krytyku?',
      'Jak zareagowałbyś, gdyby Twój najlepszy przyjaciel przyszedł do Ciebie z dokładnie takim samym problemem?'
    ]
  },
  {
    id: 'cwiczenie-3-asertywna-tarcza-nvc',
    title: 'Ćwiczenie 3: Asertywna Tarcza – 4 Kroki Komunikacji NVC w Praktyce',
    subtitle: 'Jak stawiać granice bez agresji, wycofywania się i poczucia winy',
    objective: 'Opanowanie metody komunikacji bez przemocy (Marshall Rosenberg) do neutralizowania manipulacji i jednoznacznego komunikowania swoich granic.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Agresywny atak słowny ("Jesteś bezczelny i zawsze to robisz") aktywuje w mózgu odbiorcy obwody obronne w ciele migdałowatym, blokując zdolność do empatii i dialogu. Opisanie neutralnego faktu bez oceny (krok 1 NVC) pozwala na utrzymanie komunikacji na poziomie kory przedczołowej i zapobiega eskalacji biologicznej reakcji walki lub ucieczki.',
    steps: [
      {
        stepNumber: 1,
        title: 'Krok 1: Obserwacja Faktów (Bez Etykiet i Ocen)',
        instruction: 'Opisz zachowanie drugiej osoby tak, jakby zarejestrowała je obiektywna kamera wideo. Zero słów typu: "zawsze", "nigdy", "złośliwie".',
        promptText: 'Opisz czyste fakty:',
        placeholder: 'Np.: "Kiedy podczas wczorajszego spotkania zespołu wszedłeś mi w słowo w trzeciej minucie mojej prezentacji..."'
      },
      {
        stepNumber: 2,
        title: 'Krok 2: Uczucia (Autentyczne Emocje, a nie Ukryte Oceny)',
        instruction: 'Nazwij swoje emocje (złość, smutek, bezradność, irytacja, niepewność). Unikaj zdań: "Czułem się zlekceważony" (to ocena intencji partnera, nie uczucie).',
        promptText: 'Jakie emocje pojawiły się w tobie?',
        placeholder: 'Np.: "...poczułem złość i frustrację..."'
      },
      {
        stepNumber: 3,
        title: 'Krok 3: Potrzeba (Uniwersalna Potrzeba Człowieka)',
        instruction: 'Jaka twoja fundamentalna potrzeba została naruszona? (Szacunek, jasność, współdecydowanie, bezpieczeństwo, przestrzeń, uznanie).',
        promptText: 'Zdefiniuj swoją niezaspokojoną potrzebę:',
        placeholder: 'Np.: "...ponieważ bardzo zależy mi na profesjonalizmie, wzajemnym szacunku na forum grupy i dokończeniu mojej myśli."'
      },
      {
        stepNumber: 4,
        title: 'Krok 4: Konkretna Prośba (Wykonalna i Precyzyjna)',
        instruction: 'Sformułuj prośbę w czasie teraźniejszym, precyzując czego dokładnie oczekujesz. To nie może być żądanie z karą w tle.',
        promptText: 'Napisz swoją gotową prośbę/granicę:',
        placeholder: 'Np.: "Czy możesz następnym razem poczekać z pytaniami do momentu, aż skończę prezentować slajd?"'
      }
    ],
    reflectionQuestions: [
      'Dlaczego tak trudno przychodzi nam mówienie o czystych faktach bez dorzucania złośliwych przymiotników?',
      'Co czujesz w ciele, kiedy zamiast krzyku lub cichego wycofania używasz spokojnego komunikatu NVC?',
      'W jakiej konkretnej relacji w Twoim życiu zastosujesz ten szablon w ciągu najbliższych 48 godzin?'
    ]
  },
  {
    id: 'cwiczenie-4-somatyczny-grounding',
    title: 'Ćwiczenie 4: Kotwica Zmysłów 5-4-3-2-1 i Skan Somatyczny',
    subtitle: 'Błyskawiczne uziemienie w rzeczywistości przy ataku paniki lub lęku zadaniowym',
    objective: 'Odcięcie gonitwy myśli i pętli lękowej poprzez przekierowanie zasilania bioelektrycznego do kory somatosensorycznej.',
    durationMinutes: 8,
    neuroScientificFoundation: 'Podczas ataku lęku lub prokrastynacyjnego paraliżu mózg funkcjonuje w pętli DMN (Default Mode Network - sieć wzbudzeń podstawowych), obsesyjnie analizując przeszłe błędy lub katastrofizując przyszłość. Zaangażowanie 5 kanałów zmysłowych wymusza przełączenie na TPN (Task-Positive Network - sieć zadaniową), natychmiastowo wygaszając lękową ruminację w hipokampie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wzrok: 5 Rzeczy, Które Widzisz Wokół Siebie',
        instruction: 'Rozejrzyj się po pomieszczeniu. Zauważ 5 konkretnych obiektów i ich detale (kolor, faktura, padanie cienia):',
        promptText: 'Wpisz 5 zaobserwowanych obiektów:',
        placeholder: '1. Rysa na rogu drewnianego stołu\n2. Ziarno papieru w notesie\n3. Błękitny kabel ładowarki\n4. Odbicie słońca w szklance wody\n5. Cień liścia na ścianie'
      },
      {
        stepNumber: 2,
        title: 'Dotyk: 4 Rzeczy, Które Czujesz Fizycznie',
        instruction: 'Skieruj uwagę na skórę i receptory dotyku. Zidentyfikuj 4 fizyczne doznania:',
        promptText: 'Wpisz 4 doznania czuciowe:',
        placeholder: '1. Ciężar stóp opartych o chłodną podłogę\n2. Dotyk bawełnianej koszulki na ramionach\n3. Ciepło kubka w dłoni\n4. Przepływ chłodnego powietrza przez nozdrza'
      },
      {
        stepNumber: 3,
        title: 'Słuch: 3 Dźwięki w Tle',
        instruction: 'Zamknij na chwilę oczy i wsłuchaj się w dźwięki, które zazwyczaj ignorujesz:',
        promptText: 'Wpisz 3 usłyszane dźwięki:',
        placeholder: '1. Cichy szum wentylatora w laptopie\n2. Przejeżdżający w oddali samochód\n3. Własny spokojny oddech'
      },
      {
        stepNumber: 4,
        title: 'Węch i Smak: 2 Zapachy i 1 Smak',
        instruction: 'Zarejestruj zapachy w powietrzu oraz smak w ustach:',
        promptText: 'Zanotuj zapachy i smak:',
        placeholder: 'Zapachy: Aromat kawy, świeże powietrze z uchylonego okna.\nSmak: Lekki posmak mięty w ustach.'
      }
    ],
    reflectionQuestions: [
      'Gdzie w tym momencie podziały się katastroficzne myśli o przyszłości?',
      'Jak oceniasz swoje poczucie obecności "tu i teraz" w porównaniu do momentu sprzed rozpoczęcia ćwiczenia?',
      'Czy potrafisz wykorzystać to ćwiczenie jako rytuał startowy przed każdym trudnym zadaniem mentalnym?'
    ]
  }
];

export const chapterOne: Chapter = {
  number: 1,
  title: 'Wstęp i Architektura Umysłu: Iluzja Kontroli, Biologia Wyboru i Niewidzialne Wektory Wpływu',
  subtitle: 'Dlaczego robimy to, czego nie chcemy, ulegamy manipulacji wbrew logice i jak odzyskać stery nad własnym mózgiem',
  leadParagraph: 'Czy kiedykolwiek zastanawiałeś się, dlaczego pomimo żelaznych postanowień ulegasz impulsom, których potem żałujesz? Dlaczego w obecności pewnych ludzi Twój głos cichnie, a starannie przygotowane argumenty znikają z głowy jak dym? Witaj w podróży w głąb najbardziej złożonej maszyny we wszechświecie — ludzkiego mózgu. W tym tomie zdejmiemy kurtynę z biologicznych i psychologicznych mechanizmów, które każdego dnia kształtują Twoje życie.',
  totalEstimatedPages: 28,
  sections: [
    {
      id: 'sekcja-1-dialog-z-czytelnikiem',
      pageNumber: 1,
      sectionNumber: '1.1',
      title: 'Przedmowa: Dialog z Czytelnikiem o Pęknięciach w Racjonalności',
      category: 'wstep',
      readingTimeMinutes: 7,
      quote: {
        text: 'Największym złudzeniem człowieka nie jest to, że posiada wady, lecz to, że w pełni świadomie nimi zarządza.',
        author: 'Erich Fromm'
      },
      paragraphs: [
        'Zacznijmy od szczerej rozmowy, bez akademickiej pompatyczności i bez pseudokołczingowych haseł o „stawaniu się najlepszą wersją siebie”. Zamiast tego usiądź wygodnie i przypomnij sobie dowolny moment z minionego miesiąca, w którym zrobiłeś coś wbrew własnym, twardym postanowieniom.',
        'Może obiecałeś sobie, że nie wydasz ani grosza ponad budżet, a wróciłeś do domu z drogim gadżetem, którego wcale nie potrzebowałeś? Może na zebraniu w pracy pozwoliłeś, aby ktoś przypisał sobie zasługi za Twój dwutygodniowy trud, podczas gdy Ty wpatrywałeś się w blat stołu, czując rosnącą gulę w gardle? A może po raz setny obiecałeś sobie, że dziś o 22:30 pójdziesz spać, by o 1:40 w nocy nadal przewijać bezmyślnie rolki na ekranie smartfona, czując mdłości ze zmęczenia?',
        'W takich momentach najczęstszą reakcją jest samobiczowanie: „Jestem słaby”, „Brak mi silnej woli”, „Inni potrafią trzymać dyscyplinę, a ze mną jest coś fundamentalnie nie tak”. Chcę, abyś w tym momencie wziął głęboki oddech i odłożył ten bicz na bok. Ta książka powstała po to, aby udowodnić Ci ponad wszelką wątpliwość:',
        'Twój problem nie polega na deficycie charakteru ani słabości moralnej. Twój problem polega na tym, że próbujesz kierować statkiem kosmicznym o nazwie „Homo Sapiens”, posługując się instrukcją obsługi napisaną dla tostera.',
        'Przez tysiąclecia kultura wmawiała nam mit racjonalnego decydenta — istotę, która rzekomo waży za i przeciw, kalkuluje zyski i straty, a następnie podejmuje logiczną decyzję. Współczesna neuronauka, psychologia poznawcza i socjologia bezlitośnie obaliły ten mit. Człowiek nie jest komputerem podejmującym logiczne decyzje. Człowiek jest biologiczną maszyną do racjonalizowania decyzji, które podjął ułamek sekundy wcześniej pod wpływem neuroprzekaźników, pradawnych ewolucyjnych lęków i subtelnych sygnałów z otoczenia.'
      ],
      subsections: [
        {
          title: 'Empatia dla Złożoności: Dlaczego Przetrwaliśmy jako Gatunek?',
          paragraphs: [
            'Twój mózg nie ewoluował po to, abyś był szczęśliwy, bogaty, szczupły czy asertywny w relacji z despotycznym dyrektorem. Twój mózg ewoluował w jednym, jedynym celu: ABY PRZETRWAĆ I PRZEKAZAĆ GENY na wschodnioafrykańskiej sawannie 150 000 lat temu.',
            'Mechanizmy, które dzisiaj doprowadzają Cię do rozpaczy — lęk przed odrzuceniem przez grupę, przymus magazynowania kalorii, uległość wobec silniejszego osobnika, obsesyjne poszukiwanie nowości — były genialnymi adaptacjami ewolucyjnymi, dzięki którym Twoi przodkowie nie zostali zjedzeni przez drapieżniki.',
            'Kiedy w XXI wieku wchodzisz do klimatyzowanego biura lub galerii handlowej, Twój pradawny pień mózgu i układ limbiczny wciąż interpretują bodźce według reguł plemiennych. Kiedy szef krzyczy, mózg rejestruje to jako zagrożenie wygnaniem z plemienia (co na sawannie oznaczało pewną śmierć głodową). Kiedy widzisz promocję z odliczającym zegarem, jądro półleżące krzyczy: „Bierz, bo jutro zasoby się skończą!”.',
            'Zrozumienie tej prawdy to pierwszy krok do prawdziwej wolności. Nie zmienisz swojej biologii poprzez nienawiść do samego siebie. Możesz ją zmienić tylko poprzez dogłębną znajomość jej kodów źródłowych.'
          ],
          highlightBox: {
            title: 'Złota Zasada Neuro-Empatii',
            content: 'Nie możesz wygrać wojny z własnym mózgiem, stosując przemoc i wstyd. Mózg poddany presji wstydu produkuje kortyzol, który jeszcze silniej paraliżuje ośrodki samokontroli. Zmiana zaczyna się od życzliwej ciekawości badacza.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sekcja-2-architektura-mozgu',
      pageNumber: 4,
      sectionNumber: '1.2',
      title: 'Biologia Decyzji: System 1 i 2, Kora Przedczołowa i Pradawne Obwody',
      category: 'teoria',
      readingTimeMinutes: 10,
      quote: {
        text: 'Myślenie jest najtrudniejszą z prac, dlatego tak niewielu się w nie angażuje.',
        author: 'Henry Ford / Daniel Kahneman'
      },
      paragraphs: [
        'Wyobraź sobie, że Twój mózg to zaledwie półtora kilograma galaretowatej tkanki zamkniętej w ciemnej puszce czaszki. Ta tkanka stanowi zaledwie 2% masy Twojego ciała, ale w stanie spoczynku pożera ponad 20% całej dostępnej w organizmie energii (glukozy i tlenu). Przy intensywnym wysiłku intelektualnym ten wskaźnik szybuje jeszcze wyżej.',
        'Z punktu widzenia ewolucji, mózg to energetyczny smok. Gdyby nasi przodkowie musieli głęboko i analitycznie analizować każdy krok — czy ten cień w krzakach to wiatr, czy lampart — umarliby z głodu albo zostaliby pożarci, zanim ich kora przedczołowa sformułowałaby wniosek.',
        'Dlatego ewolucja wyposażyła nas w potężny mechanizm oszczędzania energii: automatyzację, heurystyki poznawcze oraz dualny system przetwarzania informacji, spopularyzowany przez noblistę Daniela Kahnemana.'
      ],
      subsections: [
        {
          title: 'System 1 (Szybki, Intuicyjny, Tani Energetycznie)',
          paragraphs: [
            'System 1 działa w sposób bezwysiłkowy, automatyczny, błyskawiczny i całkowicie poza Twoją świadomą kontrolą. To on sprawia, że odskakujesz na widok kształtu przypominającego węża, natychmiast odczytujesz wrogość na twarzy rozmówcy, bezbłędnie prowadzisz auto po pustej, znanej trasie i sięgasz po chipsy podczas oglądania filmu.',
            'System 1 opiera się na skojarzeniach, metaforach, emocjach i biologicznych skrótach myślowych. Jest genialny w ratowaniu życia, ale całkowicie ślepy na statystykę, logikę formalną i długoterminowe konsekwencje finansowe. Co najważniejsze: System 1 NIE MOŻE ZOSTAĆ WYŁĄCZONY. On pracuje non-stop, skanując świat co ułamek sekundy.'
          ]
        },
        {
          title: 'System 2 (Wolny, Analityczny, Drogi Energetycznie)',
          paragraphs: [
            'System 2 to Twoje świadome „Ja”. To siedlisko logicznego myślenia, planowania emerytalnego, nauki języka obcego, pisania kodu czy rozwiązywania zadania 17 × 24. Mieści się przede wszystkim w grzbietowo-bocznej korze przedczołowej (dlPFC).',
            'Choć lubimy myśleć o sobie jako o pilotach Systemu 2, prawda jest brutalna: System 2 jest niewiarygodnie leniwy. Aktywuje się niechętnie, męczy się po kilkunastu minutach intensywnej pracy (zjawisko wyczerpania zasobów wolitywnych) i przy pierwszej lepszej okazji chętnie oddaje stery automatycznemu Systemowi 1.',
            'Większość manipulacji marketingowych, politycznych i relacyjnych polega na jednym prostym triku: przeciążyć lub uśpić Twój System 2, aby bezpośrednio rozmawiać z podatnym na emocje i lęki Systemem 1.'
          ],
          highlightBox: {
            title: 'Anatomia Zmęczenia Decyzyjnego (Decision Fatigue)',
            content: 'Słynne badania sędziów orzekających w sprawach o przedterminowe zwolnienie warunkowe (Danziger et al., PNAS) wykazały, że szansa na pozytywne rozpatrzenie wniosku wynosiła około 65% na początku dnia roboczego i po przerwie na posiłek, spadając niemal do 0% tuż przed posiłkiem, gdy poziom glukozy w mózgach sędziów spadał. Gdy kora przedczołowa jest zmęczona, wybiera opcję najbezpieczniejszą: odmowę lub automatyzm.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sekcja-3-studium-tomasz',
      pageNumber: 8,
      sectionNumber: '1.3',
      title: 'Studium Przypadku I: Rozmowa o Pieniądze i Anatomia Paraliżu Społecznego',
      category: 'studium-przypadku',
      readingTimeMinutes: 12,
      paragraphs: [
        'Przejdźmy teraz z sali wykładowej do brutalnej rzeczywistości biurowej. Przyjrzymy się z bliska Tomaszowi — wybitnemu specjaliście, którego mózg w obecności dyrektora Wiktora uległ całkowitej kapitulacji.',
        'W tym studium przypadku zobaczysz, jak milisekunda po milisekundzie hierarchia społeczna i mowa ciała potrafią odciąć dostęp do wiedzy i asertywności, przekształcając dojrzałego mężczyznę w zalęknione dziecko szukające aprobaty.'
      ],
      caseStudyRef: caseStudiesList[0]
    },
    {
      id: 'sekcja-4-neurochemia-wyborow',
      pageNumber: 13,
      sectionNumber: '1.4',
      title: 'Neurochemiczny Koktajl: Dopamina, Kortyzol i Hormonalne Haki',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      quote: {
        text: 'Dopamina to nie cząsteczka przyjemności. To cząsteczka pragnienia, antycypacji i niespokojnego poszukiwania.',
        author: 'Dr Daniel Z. Lieberman, „The Molecule of More”'
      },
      paragraphs: [
        'Aby zrozumieć ludzkie zachowanie, musimy porzucić poetyckie opisy i spojrzeć na neuroprzekaźniki. To one są prawdziwymi dyrektorami teatru w Twojej głowie. Każdy nastrój, impuls, zawahanie i nagła chęć ucieczki to bezpośredni rezultat stężenia konkretnych związków chemicznych w szczelinach synaptycznych.'
      ],
      subsections: [
        {
          title: 'Mit Dopaminy: Dlaczego Osiągnięcie Celu Nigdy Cię Nie Cieszy Tak Bardzo Jak Polowanie?',
          paragraphs: [
            'Większość ludzi błędnie uważa dopaminę za hormon szczęścia. Nic bardziej mylnego. Za spokój, satysfakcję i zadowolenie odpowiadają endorfiny, serotonina i kannabinoidy. Dopamina natomiast odpowiada za pożądanie, napięcie i obietnicę nagrody.',
            'Dopamina wystrzeliwuje w kosmos w momencie, gdy WIDZISZ możliwość zysku: powiadomienie na telefonie, zapach świeżego pieczywa, spojrzenie atrakcyjnej osoby, obietnicę premii. Szczyt wyrzutu dopaminy następuje TUŻ PRZED konsumpcją! Kiedy już zdobędziesz torebkę, zjesz pączka czy kupisz nowy samochód — poziom dopaminy gwałtownie spada poniżej linii bazowej. To zjawisko nazywamy dopaminowym dołkiem (dopamine dip).',
            'To dlatego w zakupach czy w nałogach to proces wybierania i poszukiwania jest tak uzależniający, a moment posiadania przynosi rozczarowanie i natychmiastowe poszukiwanie kolejnego bodźca.'
          ]
        },
        {
          title: 'Kortyzol i Adrenalina: Toksyczny Koszt Przewlekłego Niepokoju',
          paragraphs: [
            'W naturze reakcja stresowa trwała 3 minuty: albo uciekłeś przed tygrysem szablozębnym, albo zostałeś zjedzony. Kortyzol mobilizował glukozę, wyłączał trawienie i układ odpornościowy, pompując krew do mięśni nóg.',
            'Dziś naszym „tygrysem” jest kredyt hipoteczny, niezadowolony klient, toksyczny szef czy kłótnia z partnerem. Twój mózg nie odróżnia fizycznego zagrożenia życia od zagrożenia psychologicznego. W rezultacie miliony ludzi żyją w stanie przewlekłego, niskopoziomowego zatrucia kortyzolem.',
            'Kortyzol w wysokich dawkach dosłownie niszczy dendryty neuronów w hipokampie (ośrodku pamięci) oraz w korze przedczołowej, jednocześnie powiększając i uwrażliwiając ciało migdałowate. Oznacza to, że im dłużej żyjesz w stresie, tym fizycznie trudniej jest Ci myśleć logicznie, a Twój mózg staje się fabryką paranoi i lęku.'
          ],
          highlightBox: {
            title: 'Wzór na Wypalenie Synaptyczne',
            content: 'Przewlekły stres (kortyzol) + Ciągła stymulacja dopaminowa (powiadomienia, social media) = Całkowity paraliż układu wykonawczego. Jeśli czujesz permanentne zmęczenie i brak woli walki, Twoje receptory synaptyczne są po prostu zablokowane.',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sekcja-5-studium-marta',
      pageNumber: 16,
      sectionNumber: '1.5',
      title: 'Studium Przypadku II: W Transie Zakupowym – Jak E-commerce i Centra Handlowe Hakują Mózg',
      category: 'studium-przypadku',
      readingTimeMinutes: 11,
      paragraphs: [
        'W drugim studium przypadku zdemontujemy na czynniki pierwsze przypadek Marty. Prześledzimy, jak profesjonalnie zaprojektowane środowisko sensoryczne potrafi w kilkadziesiąt minut doprowadzić do wyczerpania zasobów logicznych i skłonić inteligentną kobietę do wydania pensji na rzeczy, których nie planowała kupić.'
      ],
      caseStudyRef: caseStudiesList[1]
    },
    {
      id: 'sekcja-6-manipulacja-relacyjna',
      pageNumber: 20,
      sectionNumber: '1.6',
      title: 'Mroczne Zakątki Relacji: Gaslighting, DARVO i Demontaż Poczucia Realizmu',
      category: 'studium-przypadku',
      readingTimeMinutes: 13,
      paragraphs: [
        'Manipulacja nie zawsze ma twarz krzykliwego sprzedawcy czy agresywnego przełożonego. Najbardziej niszczycielskie formy wpływu przychodzą w jedwabnych rękawiczkach — w relacjach z ludźmi, którym ufamy najbardziej.',
        'W tym rozdziale przeanalizujemy przypadek Karoliny i jej wspólnika Pawła. Poznasz mechanizm gaslightingu — techniki, która potrafi doprowadzić w pełni zdrowego człowieka na skraj załamania nerwowego i utraty zaufania do własnych zmysłów.'
      ],
      caseStudyRef: caseStudiesList[2]
    },
    {
      id: 'sekcja-7-studium-piotr',
      pageNumber: 23,
      sectionNumber: '1.7',
      title: 'Studium Przypadku IV: Prokrastynacja jako Emocjonalny Schron przed Lękiem',
      category: 'studium-przypadku',
      readingTimeMinutes: 11,
      paragraphs: [
        'Czy zdarzyło Ci się kiedyś sprzątać lodówkę lub czyścić fugi w łazience szczoteczką do zębów tylko po to, by nie pisać ważnego raportu, nie uczyć się do egzaminu lub nie zadzwonić do klienta?',
        'W czwartym studium przypadku poznamy Piotra. Rozprawimy się raz na zawsze ze szkodliwym mitem „lenistwa” i pokażemy, czym prokrastynacja jest naprawdę z perspektywy neurobiologii emocji.'
      ],
      caseStudyRef: caseStudiesList[3]
    },
    {
      id: 'sekcja-8-warsztat-rozwojowy',
      pageNumber: 26,
      sectionNumber: '1.8',
      title: 'Zeszyt Ćwiczeń Samorozwojowych: 4 Narzędzia Neuro-Przełomu',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      quote: {
        text: 'Wiedza bez praktyki jest jak łódź na suchym lądzie — imponująca, lecz donikąd cię nie zaprowadzi.',
        author: 'Przysłowie wschodnie'
      },
      paragraphs: [
        'Dotarłeś do najważniejszej części tego rozdziału. Sama wiedza teoretyczna o dopaminie, Kahnemanie czy ciele migdałowatym nie zmieni Twojego życia ani o milimetr. Aby w Twoim mózgu powstały nowe połączenia synaptyczne (zjawisko neuroplastyczności zależnej od doświadczenia), musisz podjąć świadomy, fizyczny wysiłek przetworzenia tych informacji.',
        'Poniżej znajdziesz 4 interaktywne ćwiczenia. Potraktuj je z powagą. Wypełnij je, odpowiadając na pytania we własnym tempie. Twoje odpowiedzi zostaną zachowane w Twoim osobistym panelu czytelnika.'
      ]
    },
    {
      id: 'sekcja-9-podsumowanie-most',
      pageNumber: 28,
      sectionNumber: '1.9',
      title: 'Epilog Rozdziału 1: Nowa Umowa z Samym Sobą i Most do Rozdziału 2',
      category: 'podsumowanie',
      readingTimeMinutes: 5,
      paragraphs: [
        'Gratulacje. Właśnie ukończyłeś fundamentalny, pierwszy moduł naszej podróży. Jeśli zapamiętasz z tych niemal 30 stron zaledwie trzy rzeczy, niech to będą:',
        '1. Twój mózg nie jest Twoim wrogiem — to pradawny system operacyjny, który w XXI wieku zgłasza błędy kompatybilności. Zamiast go nienawidzić, naucz się odczytywać jego kody alarmowe.',
        '2. Pomiędzy bodźcem a Twoją reakcją zawsze istnieje ułamek sekundy wolnej woli. To przestrzeń, w której możesz wziąć fizjologiczny oddech, włączyć korę przedczołową i wybrać świadome działanie zamiast automatycznej kapitulacji.',
        '3. Wpływ i manipulacja działają tylko wtedy, gdy pozostają niewidzialne. Gdy znasz mechanizmy takie jak Framing, Scarcity, Amygdala Hijack czy DARVO — tracą one swoją hipnotyczną moc.',
        'W Rozdziale 2: „Anatomia Ciemnej Triady i Mikro-Manipulacji Codziennych” pójdziemy o krok dalej. Prześwietlimy mechanizmy narcyzmu, makiawelizmu i psychopatii w codziennych relacjach partnerskich, rodzinnych i zawodowych, wyposażając Cię w niewzruszoną psychologiczną tarczę obronną.'
      ]
    }
  ]
};

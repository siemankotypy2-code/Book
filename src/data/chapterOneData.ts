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
    decisionTaken: 'Tomasz skapitulował bez przedstawienia przygotowanego raportu finansowego, zgodził się na 6-miesięczną zwłokę i przeprosił za zawracanie głowy.',
    whatProtagonistSaw: 'Chłodne spojrzenie szefa, mahoniowe biurko, 90 sekund ciszy, wzmiankę o cięciach budżetowych i zagrożenie bycia uznanym za nielojalnego chciwca.',
    whatWasMissed: 'Tomasz nie zauważył, że projekt generuje 40% zysków firmy, na rynku brakuje specjalistów o jego profilu, a reakcja dyrektora była wyuczonym skryptem negocjacyjnym testującym odporność pracownika.',
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
    decisionProcessAnalysis: {
      trigger: 'Pytanie dyrektora o lojalność w trudnych czasach i 90 sekund milczenia.',
      attentionFocus: 'Zmarszczone brwi dyrektora i lęk przed utratą aprobaty szefa.',
      interpretation: '„Szef uważa, że jestem bezczelny i nielojalny; jeśli będę naciskać, wyrzucą mnie z pracy”.',
      emotion: 'Ścisk w gardle, nagły lęk, poczucie winy, wstyd (wyrzut noradrenaliny).',
      impulse: 'Rozładować napięcie, uciec z gabinetu, przypodobać się (fawn response).',
      action: 'Zgoda na odłożenie rozmowy o pół roku i przeprosiny.',
      consequence: 'Brak podwyżki przez kolejne 6 miesięcy, spadek samooceny, narastająca gorycz i złość na samego siebie.'
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
    alternativePath: 'Gdyby Tomasz zastosował Protokół Pauzy (STOP), zauważył ucisk w gardle, wziął fizjologiczne westchnienie i położył raport na biurku mówiąc: „Doceniam troskę o stabilność, spójrzmy na zyski”, rozmowa potoczyłaby się w płaszczyźnie merytorycznej.',
    readerQuestion: 'W jakich sytuacjach zawodowych Twój głos cichnie, a ciało wchodzi w uległy odruch przepraszania za samą swoją obecność?',
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
    decisionTaken: 'Zakup torebki i płaszcza za 3400 zł przy użyciu karty kredytowej pod wpływem 15 minut pobytu w butiku.',
    whatProtagonistSaw: 'Napis „Rabat 70%”, miękki kaszmir, uśmiechniętą ekspedientkę i odliczający zegar w aplikacji.',
    whatWasMissed: 'Stan własnego wyczerpania (godzina 19:30 w piątek), fakt posiadania 3 podobnych płaszczy w szafie oraz odroczony koszt spłaty karty z odsetkami.',
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
    decisionProcessAnalysis: {
      trigger: 'Czerwony neon wyprzedaży i komplement ekspedientki o kolorze cery.',
      attentionFocus: 'Ostatnia sztuka na wieszaku i zegar odliczający minuty.',
      interpretation: '„To okazja życia, zasłużyłam po tak ciężkim tygodniu; jeśli teraz nie kupię, ktoś mi to zabierze”.',
      emotion: 'Dopaminowy skok podniecenia połączony z lękiem przed utratą szansy (FOMO).',
      impulse: 'Wyjąć kartę kredytową, przyłożyć do terminala, poczuć natychmiastową ulgę.',
      action: 'Płatność zbliżeniowa bez patrzenia na kwotę całkowitą.',
      consequence: 'Chwilowa euforia w sklepie, a po 40 minutach głęboki kac moralny i wyrzuty sumienia.'
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
    alternativePath: 'Gdyby Marta znała swój stan (HALT - skrajne zmęczenie po tygodniu), zostawiłaby torebkę z prośbą o odłożenie do jutra rana i wyszła z galerii. W 90% przypadków rano ochota na zakup całkowicie znika.',
    readerQuestion: 'Ile rzeczy w Twojej szafie lub na półkach kupiłeś nie z potrzeby, lecz z chęci nagrodzenia się po trudnym dniu?',
    keyTakeaway: 'Dopamina to hormon obietnicy szczęścia, a nie samego szczęścia. Kiedy czujesz parzący przymus kupienia czegoś natychmiast, twój biologiczny układ nagrody padł ofiarą profesjonalnie zaprojektowanego ataku.'
  },
  {
    id: 'studium-3-gaslighting-relacja',
    title: '„Przecież nikt inny ci tego nie powie”: Anatomia codziennego zacierania faktów',
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
    decisionTaken: 'Karolina przez miesiące wycofywała się z własnych decyzji, kasowała swoje projekty i brała na siebie winę za rzekome błędy pamięciowe.',
    whatProtagonistSaw: 'Pewny siebie, spokojny ton wspólnika, troskliwą mimikę twarzy i pozorne „dowody” w postaci brakujących maili.',
    whatWasMissed: 'Fakt, że pamięć Pawła wcale nie była lepsza — Paweł cynicznie przestawiał pionki, by ukryć własne niedopatrzenia budżetowe i przejąć kontrolę nad spółką.',
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
    decisionProcessAnalysis: {
      trigger: 'Kłamstwo Pawła wygłoszone spokojnym, zatroskanym głosem.',
      attentionFocus: 'Własne zmęczenie i obawa: „Co jeśli to ja tracę kontrolę?”.',
      interpretation: '„Jestem przemęczona, Paweł jest spokojny, więc to na pewno ja pomyliłam dni”.',
      emotion: 'Dezorientacja, wstyd, poczucie bezradności, chroniczny niepokój.',
      impulse: 'Ustąpić, przeprosić, uniknąć kłótni, sprawdzić jeszcze raz pocztę.',
      action: 'Podporządkowanie się nowej, fałszywej wersji wydarzeń.',
      consequence: 'Dalsza utrata pewności siebie i ugruntowanie dominacji manipulatora.'
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
    alternativePath: 'Gdyby Karolina od pierwszego incydentu wprowadziła zasadę podsumowań mailowych i odmówiła dyskutowania o swoim zdrowiu psychicznym („Moja pamięć działa bez zarzutu, rozmawiajmy o faktach”), Paweł musiałby wycofać się ze swoich gierek.',
    readerQuestion: 'Czy zdarzyło Ci się kiedykolwiek przepraszać kogoś za to, że to on Cię zranił lub oszukał?',
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
    decisionTaken: 'Zamiast napisać choćby 1 stronę tekstu, Piotr spędził 12 godzin na sprzątaniu dysku, sortowaniu poczty i czytaniu artykułów.',
    whatProtagonistSaw: 'Pusty biały ekran, mrugający kursor, bałagan w folderach i własne rzekome „lenistwo”.',
    whatWasMissed: 'Piotr nie zauważył, że jego zachowanie to czysty mechanizm unikania lęku przed oceną, napędzany nierealistycznym perfekcjonizmem i syndromem oszusta.',
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
    decisionProcessAnalysis: {
      trigger: 'Mrugający kursor na pustej stronie dokumentu Word.',
      attentionFocus: 'Myśli o potencjalnej krytyce środowiska i lęk przed byciem przeciętnym.',
      interpretation: '„Jeśli napiszę coś słabego, wszyscy zobaczą, że jestem oszustem; muszę stworzyć arcydzieło”.',
      emotion: 'Ścisk w żołądku, lęk egzystencjalny, paraliżująca bezsilność.',
      impulse: 'Uciec w bezpieczne, proste zadanie dające natychmiastowe poczucie kontroli (sprzątanie).',
      action: 'Zamknięcie edytora tekstu i 8 godzin sortowania plików.',
      consequence: 'Poczucie winy, zmarnowany dzień, utrwalenie przekonania o własnej nieskuteczności.'
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
        { step: '1. Zasada 5 Minut i Brzydkiego Pierwszego Szkicu', script: '"Zezwalam sobie napisać najgorszy, najbardziej żenujący akapit w historii literatury. Będę pisać tylko przez 5 minut, po czym mogę legalnie przestać".', rationale: 'Drastyczne obniżenie progu wejścia wyłącza alarm w ciele migdałowatego; po 5 minutach włącza się zjawisko Zeigarnik i pęd zadaniowy.' },
        { step: '2. Emocjonalne Etykietowanie (Affect Labeling)', script: 'Nazwij emocję na głos: "Czuję teraz lęk przed tym, że zostanę oceniony jako przeciętny. To normalne. To tylko reakcja biologiczna mojego mózgu".', rationale: 'Badania Matthew Liebermana dowodzą, że zwerbalizowanie lęku aktywuje prawą brzuszną korę przedczołową i natychmiast wycisza ciało migdałowate.' },
        { step: '3. Rozdzielenie Twórcy od Krytyka', script: 'Nigdy nie edytuj tekstu podczas pisania. Dzień 1 to czysta ekspresja (tryb dopaminowy). Dzień 2 to chłodna redakcja (tryb analityczny).', rationale: 'Zapobiega konfliktowi poznawczemu między przeciwstawnymi sieciami neuronowymi (DMN vs CEN).' }
      ]
    },
    alternativePath: 'Gdyby Piotr pozwolił sobie na napisanie 3 zdań „brudnopisu o zerowej wartości” i nastawił stoper na 5 minut, kora przedczołowa ominęłaby blokadę lękową, a książka powstałaby w 3 miesiące.',
    readerQuestion: 'Przed jaką trudną emocją (lękiem, nudą, poczuciem niekompetencji) uciekasz najczęściej w „pozornie pożyteczne” obowiązki?',
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
  title: 'Architektura Umysłu: Dlaczego podejmujemy decyzje, których później nie rozumiemy?',
  subtitle: 'Biologia wyboru, ślepe plamki uwagi, pamięć rekonstrukcyjna i sztuka świadomej pauzy',
  leadParagraph: 'Czytelnik rozpoczyna tę podróż z powszechnym przeświadczeniem: „To ja w pełni świadomie podejmuję swoje decyzje”. Pod koniec tego tomu zrozumiesz jednak, że każda Twoja decyzja jest wynikiem dynamicznego tańca wielu procesów: percepcji, selektywnej uwagi, rekonstrukcji pamięciowej, fizjologicznych stanów emocjonalnych i podświadomych heurystyk. Nie kontrolujesz każdego pierwszego impulsu, ale możesz nauczyć się go dostrzegać i wstawić świadomą pauzę zanim impuls zamieni się w destrukcyjne działanie.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sekcja-1-czy-jestes-autorem',
      pageNumber: 1,
      sectionNumber: '1.1',
      title: 'Czy naprawdę jesteś autorem swoich decyzji?',
      category: 'wstep',
      readingTimeMinutes: 8,
      quote: {
        text: 'Człowiek może robić to, co chce, ale nie może chcieć tego, co chce.',
        author: 'Arthur Schopenhauer'
      },
      paragraphs: [
        'Wyobraź sobie Michała. Jest czwartek, godzina 20:00. Michał wraca z pracy, zjada lekki obiad i siada przy biurku z jasną, świadomą intencją: przez najbliższe dwie godziny ma powtórzyć materiał do kluczowego certyfikatu branżowego, od którego zależy jego awans na stanowisko kierownicze. Na biurku leży czysty notatnik, kubek z zieloną herbatą i wyciszony smartfon. Wszystko wydaje się pod kontrolą.',
        'Mija zaledwie 12 minut. Michał dochodzi do trudniejszego akapitu o strukturze baz danych. W jego klatce piersiowej pojawia się ledwo zauważalne uczucie znużenia i niepewności. W tym samym ułamku sekundy, całkowicie poza świadomą debatą, jego prawa ręka unosi się i bezwiednie chwyta telefon. Kciuk przesuwa się po czytniku linii papilarnych. Ekran rozbłyska. Michał nawet nie zauważył momentu, w którym „podjął decyzję” o przerwaniu nauki.',
        'W ciągu następnych 45 minut Michał podejmuje serię mikrodecyzji: sprawdza jedno powiadomienie z komunikatora, odpisuje dwoma słowami znajomemu, zerka na nagłówek na portalu informacyjnym, otwiera krótki filmik, z którego przechodzi do kolejnego. Gdy o 21:15 podnosi wzrok na zegar ścienny, czuje falę gorąca, niesmak w ustach i potężne poczucie winy: „Znowu to zrobiłem. Dlaczego nie potrafię usiedzieć w spokoju nawet przez godzinę?”.',
        'Zatrzymajmy się w tym miejscu. Kto podjął decyzję o sięgnięciu po telefon? Czy to był „świadomy Michał”, który 12 minut wcześniej planował naukę? Absolutnie nie. Decyzja zaczęła się znacznie wcześniej — w cichym dyskomforcie emocjonalnym, w nawykowej ścieżce synaptycznej wyuczonej przez tysiące wcześniejszych powtórzeń, w bodźcu leżącym w polu widzenia 15 centymetrów od dłoni.',
        'Rozbierając tę sytuację na czynniki pierwsze, widzimy całą anatomię ludzkiego wyboru: Intencja → Pojawienie się trudności → Mikroskopijny dyskomfort somatyczny → Automatyczny odruch ucieczki ku natychmiastowej uldze → Racjonalizacja post-factum. Poniższy interaktywny dylemat pozwoli Ci zbadać ten mechanizm na własnej skórze.'
      ],
      subsections: [
        {
          title: 'Iluzja Suwerenności Poznawczej',
          paragraphs: [
            'Większość z nas żyje w przekonaniu, że w naszej głowie zasiada mały kapitan — racjonalne „Ja”, które patrzy na świat przez okna oczu, waży argumenty i pociąga za dźwignie zachowania. To klasyczny błąd Kartezjusza.',
            'W rzeczywistości świadomość nie jest kapitanem statku. Świadomość jest raczej rzecznikiem prasowym rządu, który dowiaduje się o podjętych ustawach chwilę po tym, jak zostały przegłosowane przez podkorowe ministerstwa emocji, nawyków i percepcji — i natychmiast zręcznie dorabia do nich logiczną teorię.'
          ],
          highlightBox: {
            title: 'Kluczowe Przebudzenie Poznawcze',
            content: 'Zrozumienie, że nie jesteś autorem każdego pierwszego impulsu w swojej głowie, nie odbiera Ci wolności — odbiera Ci jedynie destrukcyjny wstyd i otwiera drzwi do prawdziwej, trenowalnej samoregulacji.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sekcja-2-dwa-tryby-umyslu',
      pageNumber: 4,
      sectionNumber: '1.2',
      title: 'Dwa tryby działania umysłu: Procesy automatyczne i analityczne',
      category: 'teoria',
      readingTimeMinutes: 10,
      quote: {
        text: 'Nikt nie zaprojektował ludzkiego mózgu. On rósł warstwami, dostosowując się do wyzwań epoki kamienia łupanego.',
        author: 'Daniel Kahneman'
      },
      paragraphs: [
        'Jednym z najbardziej wpływowych modeli w psychologii poznawczej ostatnich dekad jest koncepcja procesów dualnych, spopularyzowana przez laureata Nagrody Nobla Daniela Kahnemana jako System 1 i System 2. Zanim jednak przejdziemy do szczegółów, musimy postawić sprawę z absolutną jasnością naukową:',
        'System 1 i System 2 TO NIE SĄ DWA FIZYCZNE MODUŁY MÓZGU. Jeśli neurochirurg otworzy ludzką czaszkę, nie znajdzie tam przegródki z napisem „System 1” ani kabelka biegnącego do „Systemu 2”. Jest to model dydaktyczno-funkcjonalny — metafora ułatwiająca zrozumienie dwóch diametralnie różnych trybów, w jakich sieci neuronalne przetwarzają informacje.',
        'Tryb automatyczny (System 1) jest szybki, nieświadomy, niewymagający wysiłku i bezustannie włączony. Odpowiada za rozpoznanie wyrazu wściekłości na twarzy partnera w ciągu 50 milisekund, odskoczenie na dźwięk klaksonu, odczytanie wielkiego napisu na billboardzie czy prowadzenie samochodu po pustej autostradzie. Działa na zasadzie skojarzeń i heurystyk.',
        'Tryb analityczny (System 2) jest powolny, świadomy, sekwencyjny i niezwykle kosztowny metabolicznie. To on włącza się, gdy musisz policzyć w pamięci 17 × 24, zaparkować równolegle w ciasnej luce, napisać oficjalne pismo prawne czy powstrzymać się przed wykrzyczeniem złośliwego komentarza na zebraniu rodzinnym.',
        'Główny problem polega na tym, że System 2 jest z natury leniwy. Zużywa mnóstwo energii, szybko się męczy i przy każdej okazji chętnie oddaje stery automatycznemu Systemowi 1. Kiedy idziesz na zakupy zmęczony po pracy, System 2 śpi, a System 1 kupuje wszystko, co ma jaskrawe opakowanie i wielki napis rabatu.'
      ],
      subsections: [
        {
          title: 'Problem Kija i Piłki oraz Intuicyjne Ślepe Uliczki',
          paragraphs: [
            'Klasyczny eksperyment Shane\'a Fredericka (Cognitive Reflection Test) doskonale ilustruje tę dynamikę. Zadanie brzmi: „Kij bejsbolowy i piłka kosztują łącznie 1,10 zł. Kij jest o 1,00 zł droższy od piłki. Ile kosztuje piłka?”.',
            'Pierwsza, natychmiastowa odpowiedź, która z błyskawiczną siłą nasuwa się w głowie niemal każdemu człowiekowi, brzmi: „10 groszy”. Jest tak atrakcyjna, prosta i elegancka, że większość ludzi bez wahania ją wypowiada. Dopiero gdy zmusisz swój System 2 do zatrzymania i sprawdzenia rachunku: 10 groszy (piłka) + 1,10 zł (kij o 1 zł droższy) = 1,20 zł! Prawidłowa odpowiedź to oczywiście 5 groszy (5 gr + 1,05 zł = 1,10 zł).',
            'To proste ćwiczenie obnaża kluczowy fakt: Twoja intuicja nie jest nieomylnym głosem mądrości wszechświata. Intuicja to szybki algorytm dopasowywania wzorców, który znakomicie chronił nas przed drapieżnikami na sawannie, ale w świecie cyfr, umów prawnych i manipulacji marketingowych regularnie prowadzi nas na manowce.'
          ],
          highlightBox: {
            title: 'Wgląd w Neuroarchitekturę',
            content: 'Procesy Systemu 1 opierają się głównie na strukturach podkorowych (ciało migdałowate, jądra podstawy) oraz korze asocjacyjnej. Procesy Systemu 2 wymagają intensywnej synchronizacji grzbietowo-bocznej kory przedczołowej (dlPFC) z przednim zakrętem obręczy (ACC).',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sekcja-3-porwanie-decyzji',
      pageNumber: 8,
      sectionNumber: '1.3',
      title: 'Porwanie decyzji i anatomia reakcji: Model łańcucha decyzyjnego',
      category: 'teoria',
      readingTimeMinutes: 11,
      paragraphs: [
        'Wyobraź sobie następującą sytuację: jest wtorek, godzina 15:40. Tomasz, pracownik działu analitycznego, słyszy cichy brzęczyk w telefonie. Na ekranie pojawia się wiadomość od dyrektora Wiktora: „Musimy jutro rano pilnie porozmawiać o Twoim projekcie”.',
        'Zatrzymajmy film w tej dokładnie milisekundzie. Co się wydarzyło w świecie obiektywnym? Fizycznym faktem jest to, że na szklanym ekranie pojawiło się kilkanaście liter tworzących zdanie. Nic więcej. Nie ma tu żadnego wyroku, nie ma zwolnienia z pracy, nie ma oceny.',
        'A co dzieje się w głowie Tomasza w ciągu zaledwie 300 milisekund? Jego uwaga zostaje zablokowana na słowie „pilnie”. Mózg natychmiast odpala interpretację: „Wiktor odkrył błąd w arkuszu. Jest wściekły. Wyrzucą mnie, a mam kredyt hipoteczny”. Ciało migdałowate natychmiast reaguje na tę interpretację — żołądek Tomasza zaciska się jak w imadle, do krwi trafia noradrenalina, a w krtani pojawia się suchość.',
        'W tym stanie pojawia się impuls: natychmiast rozładować to piekielne napięcie! Tomasz zaczyna nerwowo pisać do koleżanki z zespołu, szukać ukrytych podtekstów w mailach szefa z ostatnich dwóch tygodni, a po powrocie do domu wybucha krzykiem na żonę z powodu nieumytego kubka w zlewie.',
        'Oto uniwersalny łańcuch, który zarządza ludzkim zachowaniem:'
      ],
      subsections: [
        {
          title: '8 Ogniw Łańcucha Decyzyjnego',
          paragraphs: [
            '1. BODZIEC (Treść SMS-a na ekranie)',
            '2. UWAGA (Wychwycenie słowa „pilnie” i odcięcie reszty tła)',
            '3. OCENA / INTERPRETACJA („Na pewno zrobiłem błąd i zaraz mnie zwolnią”) — to tutaj rodzi się iluzja!',
            '4. EMOCJA (Ostry lęk, wstyd, bezsilność)',
            '5. IMPULS (Przymus natychmiastowego uśmierzenia bólu lub ucieczki)',
            '6. DECYZJA (Brak świadomej pauzy — zgoda na działanie pod dyktando impulsu)',
            '7. DZIAŁANIE (Gorączkowe odpisywanie, panika, wycofanie lub agresja zastępcza)',
            '8. KONSEKWENCJA (Zepsuty wieczór, bezsenna noc, wyczerpanie neurobiologiczne).'
          ],
          highlightBox: {
            title: 'Kluczowe Rozróżnienie Książki: FAKT vs INTERPRETACJA',
            content: 'FAKT: „Otrzymałem wiadomość o spotkaniu o 9:00”. INTERPRETACJA: „Szef mnie nienawidzi i chce mnie zniszczyć”. Cierpimy nie z powodu faktów, lecz z powodu historii, które nasz umysł dopisuje do faktów.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sekcja-4-brak-pelnej-informacji',
      pageNumber: 12,
      sectionNumber: '1.4',
      title: 'Mózg nie ma pełnej informacji: Ewolucyjny sens uproszczeń',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Wielu popularnych autorów przedstawia ludzki mózg jako wadliwy mechanizm pełen irracjonalnych błędów i potknięć. To fundamentalne nieporozumienie. Twój mózg nie jest zepsuty. Twój mózg jest arcydziełem inżynierii biologicznej, która musiała rozwiązać dramatyczny dylemat: JAK PRZETRWAĆ W ŚWIECIE O NIESKOŃCZONEJ ILOŚCI DANYCH, DYSPONUJĄC BARDZO OGRANICZONĄ ENERGIĄ I CZASEM?',
        'Gdyby Twój pradawny przodek na widok poruszających się krzaków zatrzymał się, zebrał próbki gleby, zmierzył prędkość wiatru i przeprowadził analizę statystyczną prawdopodobieństwa obecności lamparta — zostałby pożarty zanim jego kora przedczołowa sformułowałaby pierwszy wniosek.',
        'W ewolucji przetrwali ci, którzy stosowali heurystyki — szybkie, przybliżone reguły wnioskowania: „Krzak się rusza? UCIEKAJ!”. Lepiej było sto razy uciec przed wiatrem (błąd fałszywie dodatni), niż raz pomylić się na korzyść drapieżnika (błąd fałszywie ujemny, oznaczający śmierć).',
        'Współczesny człowiek wchodzi jednak z tym samym pradawnym aparatem do banku, gabinetu lekarskiego czy supermarketu. W tych środowiskach szybkie uproszczenie — oparte na pierwszym wrażeniu, nastroju czy sympatii do garnituru doradcy finansowego — zamiast uratować nam życie, potrafi zrujnować naszą przyszłość finansową.'
      ],
      subsections: [
        {
          title: 'Kiedy Heurystyka Pomaga, a Kiedy Prowadzi do Katastrofy?',
          paragraphs: [
            'Uproszczenia poznawcze są genialne w sytuacjach o wysokiej przewidywalności środowiska i natychmiastowej informacji zwrotnej (np. gdy doświadczony strażak instynktownie czuje, że płonący budynek za chwilę się zawali). Psycholog Gary Klein nazwał to intuicją ekspercką (Recognition-Primed Decision).',
            'Heurystyki zawodzą nas jednak dramatycznie w trzech warunkach: 1. Gdy mamy do czynienia ze statystyką i prawdopodobieństwem; 2. W warunkach presji czasu i manipulacji marketingowej; 3. W skomplikowanych relacjach międzyludzkich, gdzie pierwsze wrażenie bywa fasadą cynicznego drapieżnika.'
          ]
        }
      ]
    },
    {
      id: 'sekcja-5-uwaga-selektywna',
      pageNumber: 15,
      sectionNumber: '1.5',
      title: 'Uwaga: Dlaczego nie widzisz wszystkiego, co dzieje się wokół Ciebie?',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Wyobraź sobie, że siedzisz w tętniącej życiem kawiarni. Wokół Ciebie rozbrzmiewają dziesiątki rozmów, szum ekspresu ciśnieniowego, muzyka z głośników, stukot naczyń, zapach palonych ziaren i ciepło promieni słonecznych na Twoim ramieniu. Ty jednak z łatwością prowadzisz głęboką rozmowę z przyjacielem, ignorując całe to akustyczne morze.',
        'Nagle, przy stoliku oddalonym o pięć metrów, ktoś zupełnie obcy wymawia cicho Twoje imię: „Michał”. W ułamku sekundy Twój wzrok i uwaga odrywają się od przyjaciela i wędrują ku tamtemu stolikowi. To zjawisko, znane w psychologii jako Efekt Cocktail Party (Colin Cherry), udowadnia, że Twój mózg nieustannie monitoruje tło, filtrując miliony bodźców i wpuszczając do świadomości tylko to, co uzna za krytyczne dla Twojej tożsamości lub bezpieczeństwa.',
        'Nasza uwaga nie jest panoramicznym oknem na świat. Uwaga jest jak maleńki, wąski snop światła latarki w ciemnym lesie. Gdy skierujesz latarkę na gałąź drzewa, nie widzisz leżącego u Twoich stóp kamienia. Co więcej: zjawisko ślepoty na zmiany (Change Blindness) dowodzi, że w filmie możemy nie zauważyć, jak aktor zmienia koszulę z czerwonej na niebieską między ujęciami, jeśli w tym samym czasie patrzymy na jego twarz.',
        'Współczesny świat korporacji, mediów społecznościowych i smartfonów toczy brutalną wojnę o ten właśnie maleńki snop światła Twojej latarki. A uwaga, wbrew mitom o „podzielności uwagi”, nie potrafi świecić w dwóch miejscach naraz.'
      ],
      subsections: [
        {
          title: 'Mit Multitaskingu i Prawdziwy Koszt Przełączania Zadań',
          paragraphs: [
            'Liczne badania neuronaukowe (m.in. Davida Strayera i Glorii Mark z University of California) bezlitośnie obaliły mit wielozadaniowości. Ludzki mózg nie wykonuje dwóch skomplikowanych procesów analitycznych jednocześnie — on jedynie błyskawicznie i chaotycznie PRZEŁĄCZA SIĘ między nimi.',
            'Za każde takie przełączenie (np. pisanie raportu → zerknięcie na powiadomienie z WhatsAppa → powrót do raportu) płacimy tzw. kosztem przełączenia (Switch Cost). Mózg musi wyhamować poprzednią sieć synaptyczną, przeładować pamięć operacyjną i na nowo wejść w stan skupienia. Szacuje się, że powrót do głębokiego stanu flow po jednym rozproszeniu trwa średnio 23 minuty i 15 sekund!',
            'Poniższy eksperyment pozwoli Ci na własnej skórze doświadczyć zjawiska interferencji poznawczej i zmierzyć swój własny koszt przełączania.'
          ]
        }
      ]
    },
    {
      id: 'sekcja-6-pamiec-rekonstrukcyjna',
      pageNumber: 19,
      sectionNumber: '1.6',
      title: 'Pamięć nie jest kamerą wideo: Rekonstrukcja, zniekształcenia i spory o przeszłość',
      category: 'teoria',
      readingTimeMinutes: 11,
      paragraphs: [
        'Zapewne znasz tę scenę z własnego życia: podczas rodzinnego obiadu lub spotkania z partnerem zaczynacie wspominać kłótnię sprzed roku. Ty jesteś w 100% pewien, że padły wtedy słowa X i że to druga strona pierwsza trzasnęła drzwiami. Druga osoba patrzy na Ciebie z autentycznym oburzeniem i przysięga na wszystko, co dla niej święte, że to Ty zacząłeś awanturę, a słowa X nigdy nie padły.',
        'W takich momentach najczęstszą reakcją jest oskarżenie o kłamstwo, złą wolę lub manipulację. Tymczasem prawda bywa znacznie bardziej fascynująca i zarazem niepokojąca: OBOJE MOŻECIE MÓWIĆ PRAWDĘ O SWOICH WSPOMNIENIACH, A JEDNOCZEŚNIE OBOJE MOŻECIE SIĘ MYLIĆ WOBEC FAKTÓW.',
        'Pionierskie badania prof. Elizabeth Loftus dowiodły ponad wszelką wątpliwość, że ludzka pamięć nie działa jak dysk twardy czy kamera wideo rejestrująca nienaruszony zapis wydarzeń. Pamięć jest procesem dynamicznej REKONSTRUKCJI.',
        'Za każdym razem, gdy przywołujesz wspomnienie z przeszłości, Twój mózg nie „odpala pliku wideo”. On pobiera luźne fragmenty z kory mózgowej, scala je na nowo w hipokampie i... zapisuje z powrotem, ale już zmodyfikowane przez Twój obecny stan emocjonalny, nowe informacje usłyszane od innych oraz aktualny kontekst rozmowy!'
      ],
      subsections: [
        {
          title: 'Eksperyment z Wypadkiem Samochodowym i Kruchość Zeznań',
          paragraphs: [
            'W klasycznym eksperymencie Loftus i Palmer (1974) badanym pokazano film przedstawiający stłuczkę dwóch samochodów. Następnie zadano im z pozoru niewinne pytanie o prędkość aut. Jednej grupie zadano pytanie: „Z jaką prędkością jechały auta, gdy się STKNĘŁY?”. Średnia odpowiedź wynosiła 51 km/h. Drugiej grupie zadano pytanie: „Z jaką prędkością jechały auta, gdy się ROZTRZASKAŁY?”. Średnia odpowiedź wyniosła aż 65 km/h!',
            'Co najbardziej uderzające: tydzień później zapytano badanych, czy na miejscu wypadku było potłuczone szkło (w rzeczywistości na filmie szkła nie było). W grupie ze słowem „roztrzaskały” aż 32% osób z całą pewnością przypomniało sobie potłuczone szkło, którego nigdy nie widzieli na oczy! Pojedyncze słowo w pytaniu trwale przekształciło strukturę ich śladu pamięciowego.',
            'Dlatego w relacjach z bliskimi i w biznesie spory o to, „kto co dokładnie powiedział pół roku temu”, są z góry skazane na porażkę. Jeśli chcesz mieć pewność — twórz pisemne notatki bezpośrednio po spotkaniu, zamiast ufać plastycznej glinie własnego hipokampa.'
          ],
          highlightBox: {
            title: 'Lekcja Pokory Epistemicznej',
            content: 'Niezachwiana pewność co do własnych wspomnień nie ma żadnego związku z ich obiektywną trafnością. Ludzie potrafią z łzami w oczach i niezłomną wiarą relacjonować wydarzenia, które nigdy nie miały miejsca.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sekcja-7-emocje-i-rozum',
      pageNumber: 23,
      sectionNumber: '1.7',
      title: 'Emocje nie są przeciwieństwem rozumu: Rola afektu w mądrym wyborze',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przez ponad dwa tysiące lat zachodnia filozofia — od Platona po Kartezjusza — budowała fałszywą dychotomię: z jednej strony szlachetny, chłodny Rozum, z drugiej dzikie, prymitywne Emocje, które rzekomo psują logiczne myślenie. Radzono nam: „Odrzuć emocje, kieruj się wyłącznie czystą kalkulacją”.',
        'Dopiero przełomowe badania wybitnego neurologa Antonio Damasio (opisane w książce „Błąd Kartezjusza”) zadały temu mitowi śmiertelny cios. Damasio badał pacjentów, którzy w wyniku uszkodzenia brzuszno-przyśrodkowej kory przedczołowej (vmPFC) utracili zdolność do odczuwania emocji, zachowując nienaruszone IQ, pamięć logiczną i zdolności językowe.',
        'Gdyby tradycyjna filozofia miała rację, ci pacjenci powinni stać się idealnymi, super-racjonalnymi decydentami — biologicznymi odpowiednikami pana Spocka ze Star Treka. Stało się jednak coś dokładnie odwrotnego: PACJENCI CI BYLI CAŁKOWICIE NIEZDOLNI DO PODJĘCIA NAJPROSTSZEJ DECYZJI!',
        'Potrafili godzinami debatować nad wyborem między niebieskim a czarnym długopisem, analizując w nieskończoność wagę tworzywa, cenę wkładu i kąt pisania, nie mogąc dokonać wyboru. Dlaczego? Ponieważ bez emocjonalnego sygnału wartościującego („to mi się bardziej podoba / to ma dla mnie znaczenie”) mózg tonie w nieskończonym oceanie równorzędnych logicznie danych.'
      ],
      subsections: [
        {
          title: 'Hipoteza Znaczników Somatycznych i Dwa Złote Prawa Emocji',
          paragraphs: [
            'Damasio sformułował Hipotezę Znaczników Somatycznych (Somatic Marker Hypothesis). Zanim kora przedczołowa przeprowadzi chłodną kalkulację, ciało (żołądek, tętno, napięcie mięśni) wysyła szybki sygnał trzewny — intuicyjny skrót oparty na minionych doświadczeniach: „Uważaj, to pachnie kłopotami!” albo „To jest właściwy kierunek!”.',
            'Aby dojrzale zarządzać swoimi wyborami, musisz wbić sobie do głowy dwie fundamentalne zasady:',
            'ZASADA 1: EMOCJA TO NIE BŁĄD. Emocja to genialny, skondensowany sygnał informacyjny o Twoich potrzebach, granicach i stanie fizjologicznym.',
            'ZASADA 2: EMOCJA TO NIE AUTOMATYCZNA PRAWDA O ŚWIECIE. To, że czujesz lęk, nie oznacza, że sytuacja jest obiektywnie groźna. To, że czujesz zazdrość, nie oznacza, że partner Cię zdradza. Emocja mówi o Twoim stanie wewnętrznym, a nie o faktach zewnętrznych.'
          ]
        }
      ]
    },
    {
      id: 'sekcja-8-obciazenie-poznawcze',
      pageNumber: 27,
      sectionNumber: '1.8',
      title: 'Kiedy myślenie zaczyna kosztować: Obciążenie poznawcze i wyczerpanie woli',
      category: 'neuronauka',
      readingTimeMinutes: 11,
      paragraphs: [
        'Wyobraź sobie, że w Twoim smartfonie otwarto jednocześnie 45 wymagających aplikacji w tle, jasność ekranu ustawiono na 100%, a bateria ma zaledwie 14% naładowania. Co dzieje się z telefonem? Zaczyna się nagrzewać, animacje klatkują, a proste polecenia wykonują się z wielosekundowym opóźnieniem.',
        'Dokładnie to samo dzieje się z Twoim aparatem decyzyjnym pod wpływem obciążenia poznawczego (Cognitive Load). Kora przedczołowa nie ma nieskończonego źródła zasilania. Do podtrzymania funkcji wykonawczych — skupienia uwagi, hamowania odruchów, planowania — potrzebuje stałego dopływu glukozy i tlenu.',
        'Kiedy jesteś niewyspany, głodny, zestresowany i zmuszony do podjęcia setek mikro-wyborów w ciągu dnia, Twoja dostępna rezerwa poznawcza gwałtownie spada. Zjawisko to, badane m.in. przez Roya Baumeistera pod nazwą Ego Depletion, tłumaczy, dlaczego po 10 godzinach ciężkiej pracy w biurze tak łatwo ulec pokusie kupienia fast foodu lub wszcząć awanturę w domu o niepozmywane naczynia.'
      ],
      subsections: [
        {
          title: 'Słynne Badanie Sędziów Izraelskich (Danziger et al., 2011)',
          paragraphs: [
            'Jedno z najgłośniejszych badań nad wyczerpaniem decyzyjnym dotyczyło sędziów orzekających w sprawach o przedterminowe zwolnienie warunkowe więźniów. Analiza ponad 1000 wyroków ujawniła szokującą prawidłowość: na początku dnia roboczego oraz tuż po przerwie na posiłek odsetek pozytywnych decyzji wynosił około 65%.',
            'Jednak w miarę upływu godzin, gdy sędziowie byli coraz bardziej zmęczeni i głodni, szansa na zwolnienie więźnia systematycznie spadała, osiągając niemal 0% tuż przed planowaną przerwą obiadową! Zmęczony mózg sędziego wybierał opcję najbezpieczniejszą poznawczo: odrzucić wniosek i utrzymać status quo.',
            'Poniższy interaktywny symulator pozwoli Ci sprawdzić, jak różne czynniki Twojego dnia wpływają na dostępny budżet uwagi.'
          ]
        }
      ]
    },
    {
      id: 'sekcja-9-wiem-ale-nie-robie',
      pageNumber: 31,
      sectionNumber: '1.9',
      title: 'Dlaczego wiemy, co powinniśmy zrobić, ale tego nie robimy?',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'To prawdopodobnie najbardziej frustrujące doświadczenie w życiu każdego dorosłego człowieka: DOSKONALE WIESZ, co powinieneś zrobić. Wiesz, że powinieneś pójść na trening, zjeść zdrowy posiłek, iść spać o 22:30, napisać raport albo odbyć spokojną rozmowę wyjaśniającą.',
        'Wiesz to na poziomie logicznym, masz pełne dane, potrafisz napisać o tym wypracowanie. A mimo to, gdy przychodzi moment działania, robisz coś dokładnie przeciwnego: sięgasz po chipsy, scrollujesz telefon do 2:00 w nocy lub odkładasz projekt na za tydzień. Dlaczego powstaje ta bolesna przepaść między wiedzą a działaniem?',
        'Odpowiedź tkwi w mechanizmie zwanym dyskontowaniem odroczonym (Hyperbolic Discounting). Twój pradawny mózg powstał w świecie natychmiastowego zaspokojenia: jeśli upolowałeś zwierzynę, musiałeś zjeść ją natychmiast, bo nie było lodówek. Korzyść „tu i teraz” ewolucyjnie zawsze miała nieskończenie wyższą wartość przetrwania niż mglista obietnica nagrody za rok czy za pięć lat.',
        'Kiedy stoisz przed wyborem: zjeść pączka (natychmiastowy zastrzyk dopaminy i kalorii w 2 sekundy) vs mieć dobrą sylwetkę za 6 miesięcy — dla Twojego układu limbicznego to w ogóle nie jest równorzędny pojedynek. Przyszłe „Ja” jest dla mózgu biologicznym obcym.'
      ],
      subsections: [
        {
          title: 'Prokrastynacja to Unikanie Bólu, a Nie Brak Zegarka',
          paragraphs: [
            'Drugim filarem tego zjawiska jest unikanie dyskomfortu. Zgodnie z badaniami dr. Tima Pychyla, prokrastynacja nie jest defektem zarządzania czasem. Jest emocjonalnym mechanizmem obronnym.',
            'Kiedy siadasz do trudnego zadania (np. napisania książki czy sprawozdania), pojawia się lęk: „A co jeśli to będzie słabe? Co jeśli zostanę skrytykowany?”. Mózg interpretuje ten lęk jako zagrożenie fizyczne. Wtedy pojawia się ucieczka w sprzątanie biurka lub sprawdzanie maili — czynność, która przynosi natychmiastową ulgę neurochemiczną, utrwalając nawyk ucieczki na przyszłość.'
          ]
        }
      ]
    },
    {
      id: 'sekcja-10-protokol-pauzy',
      pageNumber: 35,
      sectionNumber: '1.10',
      title: 'Cztery sekundy przed decyzją: Protokół Pauzy w praktyce',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      quote: {
        text: 'Mądrość nie polega na braku impulsów, lecz na umiejętności stworzenia szczeliny między impulsem a czynem.',
        author: 'Protokół Autorski'
      },
      paragraphs: [
        'Dotarliśmy do punktu kulminacyjnego całego Rozdziału 1. Skoro wiesz już, jak działa automatyczny łańcuch reakcji, jak uwaga ulega zawężeniu, a pamięć rekonstrukcji — nadszedł czas na wdrożenie głównego narzędzia tej książki.',
        'Przedstawiamy autorski PROTOKÓŁ PAUZY. Nie jest to magiczna technika, która sprawi, że przestaniesz być człowiekiem i nigdy więcej się nie zdenerwujesz. Jest to pragmatyczny, 6-stopniowy bezpiecznik neurobiologiczny, który ma jedno zadanie: dać Twojej korze przedczołowej cenne 4–6 sekund na powrót do sterów, zanim automatyczny odruch spali mosty.'
      ],
      subsections: [
        {
          title: 'Sześć Kroków Protokołu Pauzy',
          paragraphs: [
            '1. STOP (Zatrzymaj Ciało): Pierwsza zasada to zamrożenie fizycznego ruchu. Jeśli pisałeś wiadomość — zdejmij palce z klawiatury. Jeśli stałeś — oprzyj stopy mocno o ziemię. Zrób jedno podwójne westchnienie fizjologiczne (Physiological Sigh): dwa szybkie wdechy nosem, długi powolny wydech ustami.',
            '2. FAKT (Co naprawdę się wydarzyło?): Zdejmij z sytuacji całą dramaturgię. Zapytaj siebie: „Co w tej sytuacji zarejestrowałaby obiektywna kamera wideo?”. Zredukuj zdarzenie do czystych danych fizycznych.',
            '3. INTERPRETACJA (Co sobie dopowiadam?): Zauważ opowieść swojego umysłu. Nazwij ją: „Aha, mój umysł właśnie produkuje film katastroficzny pod tytułem: Wszyscy są przeciwko mnie”.',
            '4. EMOCJA (Co teraz czuję w ciele?): Zastosuj etykietowanie afektu (Affect Labeling): „Czuję ucisk w klatce piersiowej, czuję złość i lęk”. Samo nazwanie emocji słowem aktywuje prawą korę przedczołową i natychmiast wycisza ciało migdałowate!',
            '5. IMPULS (Do czego wyrywa się moje ciało?): Zauważ chęć krzyku, ucieczki w telefon czy trzaśnięcia drzwiami. Powiedz sobie: „Czuję ten impuls, ale impuls to nie rozkaz”.',
            '6. WYBÓR (Co chcę zrobić po świadomym namyśle?): Zadaj pytanie z perspektywy Systemu 2: „Jaki krok w tej chwili najlepiej posłuży mojemu długoterminowemu celowi i moim wartościom?”.'
          ],
          highlightBox: {
            title: 'Zasada 4 Sekund',
            content: 'Czas półtrwania wolnej noradrenaliny w szczelinie synaptycznej po pierwszym impulsie wynosi zaledwie kilka sekund. Jeśli w tym czasie nie nakarmisz alarmu nowymi katastroficznymi myślami — fala biologiczna samoczynnie opada.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sekcja-11-laboratorium-umyslu',
      pageNumber: 39,
      sectionNumber: '1.11',
      title: 'Laboratorium własnego umysłu: 5 praktycznych doświadczeń poznawczych',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'W tej sekcji przechodzimy od teorii do osobistego doświadczenia. Przygotowaliśmy dla Ciebie 5 interaktywnych eksperymentów badających różne aspekty Twojego aparatu decyzyjnego: od heurystyk Systemu 1, przez rozróżnianie faktu od interpretacji, po ślepotę pozauwagową i etykietowanie emocji.',
        'Pamiętaj o najważniejszej zasadzie tego laboratorium: wyniki tych zadań NIE SĄ testem na Twoją inteligencję ani oceną Twojej wartości jako człowieka. Są one lustrem pokazującym uniwersalne mechanizmy biologiczne wspólne dla całego gatunku Homo Sapiens.'
      ]
    },
    {
      id: 'sekcja-12-studia-przypadkow',
      pageNumber: 42,
      sectionNumber: '1.12',
      title: 'Studia przypadków z życia codziennego: Tomasz, Marta, Karolina i Piotr',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'W tej sekcji wracamy do naszych czterech bohaterów. Każdy z nich zmierzył się z innym typem pęknięcia racjonalności decyzyjnej: Tomasz z paraliżem przed autorytetem, Marta z transową gorączką zakupową, Karolina z subtelnym zacieraniem faktów w relacji, a Piotr z paraliżującą prokrastynacją.',
        'Wszystkie studia przypadków zostały ustrukturyzowane według jednolitego schematu analitycznego A–J: od historii i dostępnych danych, przez wiwisekcję psychologiczną i neuronaukową, po alternatywną ścieżkę wyboru i narzędzie obronne.'
      ]
    },
    {
      id: 'sekcja-13-czy-to-byl-moj-wybor',
      pageNumber: 46,
      sectionNumber: '1.13',
      title: '„Czy to naprawdę był mój wybór?”: Refleksja nad wolną wolą i sprawczością',
      category: 'teoria',
      readingTimeMinutes: 9,
      quote: {
        text: 'Dopóki nie uczynisz nieświadomego świadomym, będzie ono kierowało twoim życiem, a ty będziesz nazywał to przeznaczeniem.',
        author: 'Carl Gustav Jung'
      },
      paragraphs: [
        'Po przeczytaniu o ograniczeniach uwagi, fałszywych wspomnieniach, wyczerpaniu woli i podświadomych heurystykach wielu czytelników zadaje sobie z niepokojem pytanie: „Skoro tak wiele procesów dzieje się automatycznie, czy w ogóle posiadam wolną wolę? Czy cokolwiek z tego, co robię, jest moim prawdziwym wyborem?”.',
        'Odpowiedź współczesnej kognitywistyki jest pełna nadziei i głębokiego humanizmu. Nie, nie masz absolutnej, wszechmocnej kontroli nad każdym impulsem, myślą czy nastrojem, który rodzi się w Twojej głowie w ułamku sekundy. Twoje geny, mikrobiom jelitowy, poziom zmęczenia i historia dzieciństwa nieustannie podsuwają propozycje zachowań.',
        'ALE MASZ PEŁNĄ SPRAWCZOŚĆ W ZAKRESIE TEGO, KTÓRYM PROPOZYCJOM POWIESZ „TAK”, A KTÓRYM POWIESZ „NIE”.',
        'Zrozumienie biologii i psychologii nie odbiera sprawczości — ono ją dopiero stwarza! Dopóki nie wiesz, jak działa automat, jesteś jak liść miotany wiatrem neurochemii. Gdy poznasz architekturę umysłu, stajesz się żeglarzem, który potrafi ustawić żagle tak, by wykorzystać siłę wiatru do dotarcia do zamierzonego celu.'
      ]
    },
    {
      id: 'sekcja-14-interaktywna-mapa',
      pageNumber: 48,
      sectionNumber: '1.14',
      title: 'Interaktywna mapa Twojego procesu decyzyjnego',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Poniższy interaktywny schemat to wizualna synteza całego materiału Rozdziału 1. Przedstawia pełny 11-etapowy proces decyzyjny: od momentu uderzenia bodźca fizycznego, przez filtr uwagi, interpretację, stan afektywny, impuls, aż po Protokół Pauzy, świadomy wybór i konsolidację uczenia synaptycznego.',
        'Kliknij na poszczególne ogniwa mapy, aby przypomnieć sobie ich znaczenie, przykłady z życia codziennego oraz pytania do autorefleksji.'
      ]
    },
    {
      id: 'sekcja-15-test-koncowy',
      pageNumber: 50,
      sectionNumber: '1.15',
      title: 'Test końcowy: Sprawdź swój aparat decyzyjny (15 pytań)',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Czas na kompleksowy sprawdzian wiedzy i umiejętności zdobytych w Rozdziale 1. Przygotowaliśmy dla Ciebie 15 precyzyjnych pytań wielokrotnego wyboru, obejmujących wszystkie omówione zagadnienia: System 1 i 2, heurystyki, różnicę między faktem a interpretacją, ślepotę pozauwagową, pamięć rekonstrukcyjną oraz Protokół Pauzy.',
        'Po wybraniu każdej odpowiedzi otrzymasz natychmiastowe wyjaśnienie merytoryczne. Na końcu testu wygenerowany zostanie raport pokazujący Twoje mocne strony oraz obszary wymagające ewentualnej powtórki.'
      ]
    },
    {
      id: 'sekcja-16-podsumowanie-i-most',
      pageNumber: 52,
      sectionNumber: '1.16',
      title: 'Podsumowanie Rozdziału 1 i Most do Rozdziału 2: Gdy emocje przejmują stery',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Dotarłeś do końca fundamentalnego, pierwszego rozdziału naszej podróży. Przeszedłeś przez ponad 50 stron wiedzy, eksperymentów, studiów przypadków i ćwiczeń samorozwojowych. Przed wyruszeniem w dalszą drogę, oto kwintesencja, którą warto zapisać w pamięci długotrwałej:'
      ],
      subsections: [
        {
          title: '10 Rzeczy, Które Warto Zapamiętać z Rozdziału 1',
          paragraphs: [
            '1. Twój mózg nie ewoluował po to, by być logicznym komputerem, lecz po to, by przetrwać na sawannie przy minimalnym zużyciu energii.',
            '2. System 1 i System 2 to model funkcjonalny dwóch trybów myślenia (szybki/automatyczny vs wolny/analityczny), a nie dwa fizyczne organy.',
            '3. FAKT to obiektywne zdarzenie; INTERPRETACJA to historia dopisana przez umysł. Prawdziwe cierpienie rodzi się w interpretacji.',
            '4. Ograniczona racjonalność (Herbert Simon) oznacza, że mózg dąży do decyzji zadowalających, stosując heurystyki oszczędzające czas.',
            '5. Uwaga działa jak wąski reflektor — to, co znajduje się poza stożkiem skupienia, dosłownie znika ze świadomości (ślepota pozauwagowa).',
            '6. Pamięć jest procesem dynamicznej rekonstrukcji, a nie nienaruszonym nagraniem wideo. Każde wspomnienie jest podatne na zniekształcenia.',
            '7. Emocja NIE JEST błędem poznawczym, ale NIE JEST też automatycznie prawdą o świecie zewnętrznym — jest sygnałem o Twoim stanie wewnętrznym.',
            '8. Obciążenie poznawcze i brak snu wyczerpują korę przedczołową, zmuszając mózg do ucieczki w prymitywne automatyzmy (Decision Fatigue).',
            '9. Prokrastynacja to emocjonalna strategia unikania dyskomfortu i lęku przed oceną, a nie defekt charakteru czy brak dyscypliny.',
            '10. Pomiędzy bodźcem a reakcją istnieje złota szczelina 4–6 sekund. Zastosowanie Protokołu Pauzy (STOP) to fundament ludzkiej wolności.'
          ]
        },
        {
          title: 'Jedno Praktyczne Zadanie na Dzisiejszy Dzień',
          paragraphs: [
            'Wybierz DZIŚ JEDNĄ sytuację, w której poczujesz nagłe podenerwowanie, chęć odpisania złośliwym komentarzem lub impuls sięgnięcia po słodycze.',
            'Nie karć się za ten impuls. Zastosuj sekwencję 4 kroków: 1. Zdejmij ręce i zrób wydech; 2. Nazwij FAKT („Telefon zawibrował”); 3. Nazwij INTERPRETACJĘ („Mój umysł twierdzi, że muszę natychmiast odpisać”); 4. Dokonaj świadomego WYBORU. Zrób to tylko raz.'
          ]
        },
        {
          title: 'Most do Rozdziału 2: Kiedy Emocje Przejmują Stery',
          paragraphs: [
            'Wiesz już, że pomiędzy bodźcem a Twoim działaniem istnieje cały skomplikowany proces poznawczy, w który możesz świadomie interweniować.',
            'Ale co się dzieje, kiedy bodziec uderza z tak druzgocącą siłą, że kora przedczołowa zostaje całkowicie odcięta od zasilania w ułamku sekundy? Kiedy wściekłość, panika lub wstyd zalewają Twój układ nerwowy jak tsunami, niszcząc wszelkie logiczne tamy?',
            'Wtedy wkraczamy w krainę zjawiska zwanego PORWANIEM EMOCJONALNYM (Amygdala Hijack). W Rozdziale 2 prześwietlimy anatomię neurobiologicznej burzy, zbadamy mechanizmy chronicznego stresu, atrofii hipokampa i wyposażymy Cię w zaawansowaną somatyczną tarczę antykryzysową.',
            'Do zobaczenia w Rozdziale 2.'
          ]
        }
      ]
    }
  ]
};

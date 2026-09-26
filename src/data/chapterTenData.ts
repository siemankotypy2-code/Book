import { Chapter, ExamQuestion } from '../types/book';

export const chapterTenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach Johna Gottmana nad trwałością małżeństw i relacji partnerskich (Sekcja 10.12), który ze „Złotych Wskaźników” jest najsilniejszym predyktorem przetrwania związku w obliczu trudności?',
    topic: 'Wskaźnik Gottmana 5:1 i Czterej Jeźdźcy Apokalipsy',
    sectionRef: 'Sekcja 10.12',
    options: [
      { label: 'A', text: 'Całkowity, absolutny brak jakichkolwiek kłótni przez 10 lat.', isCorrect: false },
      { label: 'B', text: 'Utrzymanie proporcji minimum 5 pozytywnych interakcji (ciepło, uśmiech, dotyk, słuchanie) na każdą 1 negatywną interakcję w trakcie konfliktu.', isCorrect: true },
      { label: 'C', text: 'Posiadanie identycznych zainteresowań hobbystycznych.', isCorrect: false },
      { label: 'D', text: 'Wspólne konto bankowe bez prawa do prywatnych wydatków.', isCorrect: false },
      { label: 'E', text: 'Spędzanie razem 24 godzin na dobę.', isCorrect: false }
    ],
    explanation: 'Gottman udowodnił, że kłótnie są naturalne i zdrowe dla relacji. Kluczem nie jest brak konfliktów, lecz to, czy na każdą przykrą uwagę przypada co najmniej 5 gestów miłości i docenienia (tzw. Magiczna Proporcja 5:1). Gdy spada ona poniżej 1:1, rozwód jest niemal pewny.',
    keyTakeaway: 'Zdrowy związek to nie brak burz, lecz bogate konto emocjonalne, które pozwala przetrwać sztorm.'
  },
  {
    id: 2,
    question: 'Który z „Czterech Jeźdźców Apokalipsy” relacyjnej wg Gottmana jest najbardziej toksyczny i niszczący dla układu odpornościowego partnera (Sekcja 10.8)?',
    topic: 'Pogarda jako trucizna relacyjna',
    sectionRef: 'Sekcja 10.8',
    options: [
      { label: 'A', text: 'Rzeczowa krytyka zachowania.', isCorrect: false },
      { label: 'B', text: 'Pogarda (Contempt) — sarkazm, przewracanie oczami, kpina i traktowanie partnera z pozycji moralnej lub intelektualnej wyższości.', isCorrect: true },
      { label: 'C', text: 'Poproszenie o 15 minut ciszy na ochłonięcie.', isCorrect: false },
      { label: 'D', text: 'Różnica zdań w kwestii wyboru koloru zasłon.', isCorrect: false }
    ],
    explanation: 'Pogarda jest wyrazem obrzydzenia psychologicznego. Badania fizjologiczne wykazały, że osoby będące obiektem pogardy partnera chorują na infekcje dróg oddechowych statystycznie częściej — pogarda dosłownie niszczy układ immunologiczny.',
    keyTakeaway: 'Pogarda to kwas, który przeżera każdą relację. Nie ma w niej miejsca na dialog.'
  },
  {
    id: 3,
    question: 'W koncepcji Brené Brown zaufanie nie jest budowane przez wielkie heroiczne gesty, lecz przez (Sekcja 10.2 i 10.3):',
    topic: 'Zaufanie jako Słój z Marmurkami (The Marble Jar)',
    sectionRef: 'Sekcja 10.3',
    options: [
      { label: 'A', text: 'Kupienie drogiego samochodu w rocznicę ślubu.', isCorrect: false },
      { label: 'B', text: 'Setki małych, z pozoru nieznaczących mikro-momentów uważności: odłożenie telefonu, gdy druga osoba mówi, zapamiętanie imienia jej chorej ciotki, dotrzymanie drobnej obietnicy.', isCorrect: true },
      { label: 'C', text: 'Złożenie przysięgi przed notariuszem.', isCorrect: false },
      { label: 'D', text: 'Wspólny skok ze spadochronem.', isCorrect: false }
    ],
    explanation: 'Brown porównuje zaufanie do słoika z marmurkami. Każdy drobny gest lojalności i obecności wrzuca do słoja jeden marmurek. Zdrada lub lekceważenie wywraca cały słój jednym ruchem ręki.',
    keyTakeaway: 'Zaufanie buduje się łyżeczką przez lata, a traci chochlą w jedną sekundę.'
  },
  {
    id: 4,
    question: 'Na czym polega prawdziwe, dojrzałe przeproszenie w relacji (Sekcja 10.10)?',
    topic: 'Anatomia Skutecznych Przeprosin',
    sectionRef: 'Sekcja 10.10',
    options: [
      { label: 'A', text: 'Rzucenie: „Przepraszam cię, JEŚLI poczułeś się urażony, ale sam mnie sprowokowałeś”.', isCorrect: false },
      { label: 'B', text: 'Wzięcie 100% odpowiedzialności za swoje zachowanie, nazwanie krzywdy bez słowa „ale”, okazanie skruchy i zaoferowanie konkretnego zadośćuczynienia lub zmiany nawyku na przyszłość.', isCorrect: true },
      { label: 'C', text: 'Kupienie kwiatów bez ani jednego słowa wyjaśnienia.', isCorrect: false },
      { label: 'D', text: 'Obwinienie własnych rodziców za braki w wychowaniu.', isCorrect: false }
    ],
    explanation: 'Słowo „ale” w przeprosinach natychmiast unieważnia całe przeprosiny („Przepraszam, ale...”). Prawdziwe przeprosiny uznają ból drugiej osoby bez szukania wymówek w okolicznościach zewnętrznych.',
    keyTakeaway: 'Wszystko, co powiesz przed słowem „ale”, przestaje istnieć.'
  },
  {
    id: 5,
    question: 'Dlaczego mówienie „NIE” jest w rzeczywistości najgłębszym aktem troski o jakość relacji (Sekcja 10.5 i 10.6)?',
    topic: 'Granice i Czystość Relacji',
    sectionRef: 'Sekcja 10.6',
    options: [
      { label: 'A', text: 'Ponieważ pozwala udowodnić swoją dominację nad partnerem.', isCorrect: false },
      { label: 'B', text: 'Ponieważ wymuszone, nieszczere „TAK” rodzi w podświadomości urazę, złość i pasywną agresję, zatruwając relację od środka. Prawdziwe „NIE” dla prośby jest bezpiecznym „TAK” dla autentyczności więzi.', isCorrect: true },
      { label: 'C', text: 'Mówienie „nie” jest zawsze błędem relacyjnym.', isCorrect: false },
      { label: 'D', text: 'Zmniejsza koszty podatkowe prowadzenia gospodarstwa domowego.', isCorrect: false }
    ],
    explanation: 'Gdy mówisz „tak”, choć Twoje ciało krzyczy „nie”, stajesz się męczennikiem. Za każdą taką przysługę podświadomie wystawiasz partnerowi niewidzialny rachunek z odsetkami urazy.',
    keyTakeaway: 'Granice to nie mury obronne; granice to instrukcja obsługi bezpiecznego kontaktu z tobą.'
  }
];

export const chapterTen: Chapter = {
  number: 10,
  title: 'Relacje: Architektura Zaufania, Granic i Bliskości',
  subtitle: 'Dlaczego jedni ludzie budują z nami bezpieczeństwo, a inni napięcie — i jak naprawiać pęknięte więzi',
  leadParagraph: 'Badania Harvard Study of Adult Development — najdłuższy, trwający nieprzerwanie od ponad 85 lat eksperyment w historii nauki — przyniosły jedną, jednoznaczną konkluzję: tym, co decyduje o naszym zdrowiu fizycznym, odporności na demencję, poziomie szczęścia i długości życia, nie są ani pieniądze, ani sława, ani cholesterol. Są to DOBRE, BEZPIECZNE RELACJE Z LUDŹMI. W tym rozdziale zbadamy inżynierię więzi.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-10-1',
      pageNumber: 442,
      sectionNumber: '10.1',
      title: 'Czym jest relacja? Biologia współregulacji nerwowej',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Nasz układ nerwowy nie jest układem zamkniętym. Został zaprojektowany tak, by nieustannie współregulować się z układami nerwowymi tych, których kochamy.',
        author: 'Stephen Porges'
      },
      paragraphs: [
        'Wyobraź sobie niemowlę płaczące w łóżeczku. Jego kora przedczołowa jest jeszcze nieukształtowana; samo nie potrafi obniżyć poziomu kortyzolu ani uspokoić bicia serca. Matka lub ojciec biorą je w ramiona, przytulają do klatki piersiowej i nucą kołysankę. W ciągu minuty oddech dziecka zwalnia, a ciało wiotczeje w bezpiecznym śnie.',
        'To jest współregulacja (Co-regulation). Myślimy, że jako dorośli stajemy się całkowicie samowystarczalnymi wyspami biologicznymi. To mit. Kiedy wracasz po koszmarnym dniu w pracy, Twój układ współczulny płonie. Wystarczy jedno ciepłe, bezpieczne spojrzenie zaufanego partnera, mocny uścisk dłoni i słowa: „Jestem przy tobie”, by Twój nerw błędny natychmiast obniżył ciśnienie krwi.',
        'Relacja to nie abstrakcyjny status na Facebooku czy podpisana umowa. Relacja to żywy obwód bioelektryczny między dwoma mózgami. Jeśli w tym obwodzie płynie bezpieczeństwo — kwitniesz. Jeśli płynie w nim ciągłe napięcie, lęk i krytyka — Twoje ciało powoli umiera w chronicznym stanie zapalnym.'
      ]
    },
    {
      id: 'sec-10-2',
      pageNumber: 446,
      sectionNumber: '10.2',
      title: 'Neurobiologia zaufania: Oksytocyna, wazopresyna i poczucie bezpieczeństwa',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zaufanie to biologiczna decyzja o wyłączeniu radaru zagrożenia. Kiedy ufasz drugiemu człowiekowi, Twoje ciało migdałowate mówi korze nowej: „Możesz odpiąć pasy i schować tarczę. W obecności tej osoby jesteśmy bezpieczni”.',
        'Kluczową rolę odgrywa tu oksytocyna — neuropeptyd produkowany w podwzgórzu i uwalniany przez przysadkę mózgową pod wpływem bezpiecznego dotyku, patrzenia w oczy, synchronii rytmicznej (wspólny śpiew, taniec, spacer) oraz szczerej rozmowy. Oksytocyna dosłownie hamuje reaktywność ciała migdałowatego na sygnały lękowe.',
        'Jednocześnie wazopresyna wzmacnia obwody przywiązania i lojalności partnerskiej. Zaufanie jest jednak kruche: wystarczy jeden akt nielojalności lub zdrady, by wyrzut dopaminy i oksytocyny został natychmiast zastąpiony przez noradrenalinę i kortyzol. Bezpieczna przystań w ułamku sekundy staje się wrogim terytorium.'
      ]
    },
    {
      id: 'sec-10-3',
      pageNumber: 450,
      sectionNumber: '10.3',
      title: 'Jak buduje się zaufanie: Drobne marmurki codzienności',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Brené Brown, badaczka wstydu i podatności na zranienie, opisuje zaufanie za pomocą metafory „Słoja z marmurkami”. Wielu ludzi sądzi, że zaufanie zdobywa się przez spektakularne czyny: uratowanie kogoś z pożaru, kupienie domu czy zorganizowanie zaręczyn w Paryżu.',
        'To pomyłka. Zaufanie buduje się w momentach, które większość ludzi uważa za nic nieznaczące śmieci codzienności:',
        'Kiedy partner mówi: „Miałem dziś ciężką rozmowę z szefem”, a Ty odkładasz telefon ekranem do dołu, patrzysz mu w oczy i mówisz: „Opowiedz mi o tym” — wrzucasz marmurek do słoja.',
        'Kiedy pamiętasz, że Twoja przyjaciółka miała dziś ważną wizytę u lekarza i o 14:00 wysyłasz krótkiego SMS-a: „Myślę o tobie, jak poszło?” — wrzucasz marmurek.',
        'Kiedy dotrzymujesz obietnicy, że odbierzesz paczkę z paczkomatu — wrzucasz marmurek.',
        'Zaufanie to suma setek mikro-momentów, w których zdecydowałeś się zauważyć drugiego człowieka zamiast odwrócić wzrok.'
      ]
    },
    {
      id: 'sec-10-4',
      pageNumber: 454,
      sectionNumber: '10.4',
      title: 'Utrata zaufania: Trauma zdrady i dekonstrukcja wspólnej przeszłości',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Dlaczego zdrada boli tak nieludzko mocno? Nie tylko dlatego, że łamie obietnicę dotyczącą przyszłości. Prawdziwa tragedia zdrady leży w tym, że retroaktywnie niszczy i unieważnia całą WSPÓLNĄ PRZESZŁOŚĆ.',
        'Nawiązując bezpośrednio do Rozdziału 5 Tomu I (Pamięć): gdy dowiadujesz się, że partner przez ostatnie dwa lata prowadził podwójne życie, Twój hipokamp w panice zaczyna przeszukiwać całe archiwum pamięci: „Więc tamte wakacje we Włoszech były kłamstwem? Tamten uśmiech przy wigilijnym stole był maską? Kim w takim razie byłem ja w tamtych wspomnieniach?”.',
        'Zdrada wywołuje stan szoku poznawczego i rozpadu tożsamości. Mózg traci grunt pod nogami, ponieważ mapa rzeczywistości, na której opierał swoje przetrwanie, okazała się fałszywką.'
      ]
    },
    {
      id: 'sec-10-5',
      pageNumber: 458,
      sectionNumber: '10.5',
      title: 'Granice osobiste: Gdzie kończę się ja, a zaczynasz ty',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wielu ludzi myli granice z egoizmem, wrogością lub odrzuceniem. Boją się postawić granicę, bo wierzą, że „jeśli kogoś naprawdę kocham, to powinienem być dla niego dostępny 24 godziny na dobę i zgadzać się na wszystko”.',
        'Takie myślenie to przepis na katastrofę relacyjną zwaną uwikłaniem (Enmeshment). Związek bez granic przypomina dwa domy bez ścian zewnętrznych — zapachy, hałasy i brudy z jednego natychmiast zalewają drugi.',
        'Granice to nie mury, które mają odgrodzić Cię od świata. Granice to płot z furtką. Wyznaczają terytorium Twojej odpowiedzialności psychicznej. Ty odpowiadasz za swoje emocje, swoje słowa, swoje wartości i swoje zdrowie. Druga osoba odpowiada za swoje. Nie jesteś zobowiązany naprawiać każdego złego humoru swojego partnera ani brać na siebie konsekwencji jego nałogów.'
      ]
    },
    {
      id: 'sec-10-6',
      pageNumber: 462,
      sectionNumber: '10.6',
      title: 'Sztuka mówienia „NIE”: Wolność bez poczucia winy',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Jeśli nie potrafisz powiedzieć szczerego, spokojnego „NIE”, Twoje „TAK” nie ma żadnej wartości. Jest jedynie wymuszoną uległością przestraszonego dziecka.',
        'Kiedy zgadzasz się pożyczyć pieniądze szwagrowi, choć wiesz, że ich nie odda, lub zgadzasz się zostać w pracy na darmowych nadgodzinach w piątek wieczorem, Twoje usta mówią „dobrze”, ale w Twoim żołądku kipi żółć urazy (Resentment).',
        'Uraza to trucizna, którą pijesz sam, licząc na to, że umrze druga osoba. Za każdym razem, gdy ulegasz ze strachu przed konfliktem, podświadomie zaczynasz nienawidzić człowieka, który poprosił Cię o przysługę. Mówiąc uczciwe: „Bardzo cię cenię, ale w ten weekend nie dam rady ci pomóc”, chronisz relację przed zgnilizną niewypowiedzianego żalu.'
      ]
    },
    {
      id: 'sec-10-7',
      pageNumber: 466,
      sectionNumber: '10.7',
      title: 'Anatomia konfliktu: Od drobnego zgrzytu do wojny totalnej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Konflikt w relacji jest tak samo nieunikniony jak grawitacja. Dwie niezależne istoty ludzkie o różnych historiach biologicznych, wzorcach z domu rodzinnego i poziomach energii muszą prędzej czy później zderzyć się w swoich potrzebach.',
        'Friedrich Glasl opisał 9 Poziomów Eskalacji Konfliktu, podzielonych na trzy wielkie fazy:',
        'Faza Win-Win (Poziomy 1–3): Zgrzyty, debata na argumenty, walka o rozwiązania rzeczowe. Obie strony wierzą, że można znaleźć porozumienie.',
        'Faza Win-Lose (Poziomy 4–6): Troska o relację znika; celem staje się wygrana własnego ego. Pojawiają się obozy zwolenników, etykietowanie, utrata twarzy i groźby.',
        'Faza Lose-Lose (Poziomy 7–9): Faza zniszczenia totalnego. Człowiek jest gotów zbankrutować w sądzie lub zniszczyć psychikę własnych dzieci, byle tylko „tamten zapłacił za swoje grzechy”.'
      ]
    },
    {
      id: 'sec-10-8',
      pageNumber: 470,
      sectionNumber: '10.8',
      title: 'Czterej Jeźdźcy Apokalipsy wg Johna Gottmana',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'John Gottman w swoim słynnym Love Lab w Seattle potrafił po 15-minutowej obserwacji kłótni małżeńskiej przewidzieć z dokładnością 94%, czy para rozwiedzie się w ciągu najbliższych 6 lat. Zidentyfikował cztery śmiertelne toksyny komunikacyjne:',
        '1. Krytyka (Criticism): Atak na tożsamość człowieka, a nie na zachowanie („Jesteś bałaganiarzem i egoistą!” zamiast: „Zależy mi, abyś sprzątnął swoje buty z korytarza”).',
        '2. Pogarda (Contempt): Najgroźniejszy z jeźdźców. Przewracanie oczami, sarkastyczny chichot, drwina („I kto to mówi? Pan idealny, który nie potrafi nawet wbić gwoździa w ścianę”). Pogarda zakłada moralną i intelektualną wyższość nad partnerem.',
        '3. Postawa Obronna (Defensiveness): Odbijanie piłeczki i szukanie wymówek („Ja nie pozmywałem? A ty co zrobiłaś w zeszły wtorek?!”). Blokuje wzięcie jakiejkolwiek odpowiedzialności.',
        '4. Mur Obojętności (Stonewalling): Całkowite fizyczne lub emocjonalne odcięcie się, wpatrywanie się w telefon, milczenie. Zazwyczaj jest to męska reakcja na skrajne zalanie fizjologiczne (tętno powyżej 100 bpm).'
      ]
    },
    {
      id: 'sec-10-9',
      pageNumber: 474,
      sectionNumber: '10.9',
      title: 'Sztuka deeskalacji: Próby naprawcze i biologiczny hamulec',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Gottman odkrył również lekarstwo: Pary, które trwają szczęśliwie przez 40 lat, nie kłócą się mniej. One po prostu stosują skuteczne Próby Naprawcze (Repair Attempts).',
        'Próba naprawcza to dowolny gest, słowo lub żart, który przerywa narastający pożar emocjonalny:',
        '„Kochanie, zagalopowałem się, przepraszam. Weźmy oboje głęboki oddech”.',
        '„To brzmi tak, jakbym cię atakował, a naprawdę zależy mi na naszym wspólnym wyjeździe”.',
        'Zrobienie śmiesznej miny, dotknięcie ramienia, podanie szklanki wody.',
        'Sukces próby naprawczej zależy w 10% od tego, jak została wykonana, a w 90% od GOTOWOŚCI ODBIORCY do jej przyjęcia. Jeśli partner wyciąga gałązkę oliwną, a Ty odtrącasz ją z furią („Nie dotykaj mnie teraz!”), to Ty decydujesz o eskalacji konfliktu do poziomu katastrofy.'
      ]
    },
    {
      id: 'sec-10-10',
      pageNumber: 478,
      sectionNumber: '10.10',
      title: 'Przeprosiny, które leczą: Siedem elementów zadośćuczynienia',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość ludzi nie potrafi przepraszać. Rzucają zdawkowe „sorki” lub fałszywe przeprosiny warunkowe: „Przepraszam, jeśli poczułaś się urażona moim żartem” (co w podtekście oznacza: „To ty jesteś przewrażliwiona, ja nie zrobiłem nic złego”).',
        'Neurobiologicznie skuteczne przeprosiny, badane m.in. przez dr Harriet Lerner, składają się z siedmiu kroków:',
        '1. Jasne nazwanie błędu bez słowa „ale” („Spóźniłem się 40 minut na naszą kolację rocznicową”).',
        '2. Uznanie krzywdy i emocji drugiej osoby („Wiem, że poczułaś się zlekceważona i było ci przykro siedzieć samej przy stoliku”).',
        '3. Wzięcie 100% odpowiedzialności bez obwiniania korków czy szefa.',
        '4. Wyrażenie szczerego żalu.',
        '5. Propozycja zadośćuczynienia.',
        '6. Zadeklarowanie konkretnej zmiany procedury na przyszłość („Od dziś wpisuję do kalendarza bufor 45 minut przed naszymi spotkaniami”).',
        '7. Pokorna prośba o wybaczenie, z pozostawieniem drugiej osobie czasu na podjęcie decyzji.'
      ]
    },
    {
      id: 'sec-10-11',
      pageNumber: 482,
      sectionNumber: '10.11',
      title: 'Wybaczanie: Uwolnienie więźnia, którym jesteś ty sam',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Największym mitem na temat wybaczania jest przekonanie, że oznacza ono usprawiedliwienie złego czynu, pojednanie się ze sprawcą lub udawanie, że nic się nie stało.',
        'Wybaczenie nie ma nic wspólnego ze sprawcą. Wybaczenie to decyzja o odcięciu dopływu prądu do Twojego własnego bólu. Kiedy nosisz w sobie nienawiść do byłego partnera czy dawnego wspólnika, to tak, jakbyś pił truciznę i czekał, aż on umrze. Twój układ krążenia codziennie produkuje kortyzol w odpowiedzi na wspomnienie sprzed 5 lat.',
        'Wybaczenie oznacza: „Nie zmieniam mojej oceny tamtego czynu — to było złe. Nie muszę z tobą dalej utrzymywać kontaktu. Ale zrzucam z pleców ciężar bycia sędzią i katem. Odzyskuję swoją energię życiową dla teraźniejszości”.'
      ]
    },
    {
      id: 'sec-10-12',
      pageNumber: 486,
      sectionNumber: '10.12',
      title: 'Zdrowa relacja nie oznacza braku problemów: Magiczna proporcja 5:1',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Zdejmijmy z relacji nierealistyczny ciężar hollywoodzkiego mitu o „dwóch połówkach jabłka, które żyją w wiecznej harmonii bez ani jednego sporu”. Badania psychologiczne pokazują, że około 69% problemów w każdym długoterminowym związku to Problemy Wieczne (Perpetual Problems) wynikające z fundamentalnych różnic osobowościowych (np. on jest ekstrawertykiem potrzebującym bodźców, ona introwertyczką ładującą baterie w ciszy).',
        'Tych problemów się nie „rozwiązuje”. Z nimi uczy się dialogować z humorem i czułością.',
        'Dopóki w Waszej relacji panuje Magiczna Proporcja 5:1 — na jedno spięcie przypada pięć ciepłych spojrzeń, wspólnych herbat, pocałunków w czoło i słów uznania — Wasz związek jest pancerny. Problemy stają się wtedy tylko tłem dla głębokiej bliskości.'
      ]
    },
    {
      id: 'sec-10-13',
      pageNumber: 490,
      sectionNumber: '10.13',
      title: 'Wielkie Studium Przypadku: Małżeństwo pod presją narodzin dziecka',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Przejmująca, kliniczna analiza kryzysu relacyjnego po narodzinach pierwszego dziecka. Studium pokazuje, jak chroniczny deficyt snu, zmiana ról społecznych i zablokowane granice doprowadziły kochającą się parę na skraj rozwodu.'
      ],
      caseStudyRef: {
        id: 'cs-ch10-malzenstwo',
        title: 'Cisza Po Płaczu: Anatomia Kryzysu Rodzicielskiego Marty i Jakuba',
        subtitle: 'Jak brak współregulacji i narastająca pogarda niemal zniszczyły 8 lat miłości',
        protagonist: 'Marta (32 lata) i Jakub (34 lata), rodzice 6-miesięcznego Franka',
        context: 'Mieszkanie na warszawskim Mokotowie, 3:00 w nocy, po 4 miesiącach chronicznej bezsenności.',
        story: [
          'Przed narodzinami Franka Marta i Jakub uchodzili za parę idealną. Wspólne podróże, dobra komunikacja, satysfakcjonująca praca. Kryzys uderzył nagle: dziecko cierpiało na ostre kolki, budząc się z krzykiem co 45 minut.',
          'Marta czuła się uwięziona w domu, zredukowana do funkcji laktatora. Jej układ nerwowy był na skraju wyczerpania. Jakub wracał z pracy w korporacji po 10 godzinach, czując się wyobcowany i zepchnięty na boczny tor. Wchodząc do domu, zamiast ciepła spotykał lodowatą twarz Marty.',
          'Zaczęły się ataki Pierwszego Jeźdźca (Krytyka): „Oczywiście znowu kupiłeś złe pieluchy. Czy ty w ogóle potrafisz zrobić cokolwiek porządnie?”. Jakub reagował Drugim Jeźdźcem (Postawa Obronna): „Pracuję po 10 godzin, żeby utrzymać ten dom, a ty tylko siedzisz i narzekasz!”.',
          'Pewnej nocy, gdy Franek płakał kolejną godzinę, Jakub wszedł do kuchni, spojrzał na płaczącą Martę i z sarkastycznym uśmieszkiem wycedził: „I to ma być ta wspaniała matka roku? Żałosne”. To był Trzeci Jeździec — Pogarda.',
          'W Marcie coś pękło. Weszła w Czwarty Jeździec — Mur Obojętności (Stonewalling). Przestała z Jakubem rozmawiać, spali w osobnych pokojach, a w ich domu zapanowała trująca, grobowa cisza.',
          'Uratowała ich wizyta u terapeuty par, który natychmiast postawił diagnozę fizjologiczną: „Wy nie jesteście źli ani niedopasowani. Wasze kory przedczołowe są wyłączone przez chroniczny brak snu. Wasza amygdala walczy o przetrwanie”. Wdrożyli protokół ratunkowy: wynajęcie opiekunki na dwie noce w tygodniu, zakaz rozmów o problemach po godzinie 21:00 oraz codzienne 10 minut bezpiecznego przytulenia w ciszy bez telefonów.'
        ],
        decisionTaken: 'Zamiast podpisać pozew rozwodowy, potraktowali swój kryzys jako awarię systemu biologicznego i zwrócili się o zewnętrzną pomoc.',
        whatProtagonistSaw: 'Marta widziała Jakuba jako egoistę uciekającego w pracę; Jakub widział Martę jako wiecznie niezadowoloną jędzę.',
        whatWasMissed: 'Że oboje doświadczali głębokiego lęku przed nieadekwatnością w roli rodzica i rozpaczliwie tęsknili za bliskością, której nie potrafili nazwać słowami.',
        psychologicalAnalysis: {
          coreMechanism: 'Deprywacja snu wyłączyła hamowanie przedczołowe, uwalniając wszystkich czterech jeźdźców Gottmana.',
          cognitiveBiases: [
            { name: 'Podstawowy błąd atrybucji', description: 'Marta tłumaczyła spóźnienie Jakuba brakiem miłości, a nie korkami na Mordorze.', impact: 'Eskalacja pretensji.' }
          ],
          defenseMechanisms: [
            { name: 'Projekcja', explanation: 'Jakub rzutował własne poczucie bezradności wobec płaczu dziecka na Martę.' }
          ],
          emotionalDynamic: 'Paniczny głód bycia zauważonym i docenionym przekształcony w zgorzkniały atak.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Hamowanie agresywnych impulsów słownych', activationState: 'Porażenie metaboliczne z powodu braku snu wolnofalowego (NREM)' },
            { region: 'Ciało migdałowate', role: 'Generowanie reakcji obronnych', activationState: 'Permanentna hiperaktywacja' }
          ],
          neurotransmitters: [
            { name: 'Serotonina', roleInScenario: 'Drastyczny spadek wywołał chwiejność nastroju i drażliwość' }
          ],
          biologicalTimeline: [
            { timeMs: '3:00 w nocy', process: 'Płacz dziecka odcina resztki zasobów cierpliwości.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Protokół Biologicznego Wyciszenia', script: '„Oboje jesteśmy wykończeni. Nie podejmujemy żadnych decyzji o związku w stanie skrajnego zmęczenia. Porozmawiamy w sobotę po południu”.', rationale: 'Chroni przed wypowiedzeniem słów niszczących więź.' }
          ]
        },
        alternativePath: 'Gdyby kontynuowali kłótnie w nocy, pogarda doprowadziłaby do rozwodu przed pierwszymi urodzinami Franka, pozostawiając zgliszcza emocjonalne u obojga.',
        readerQuestion: 'W jakich momentach swojego życia traktujesz zmęczenie biologiczne jako problem z charakterem partnera?',
        keyTakeaway: 'Nigdy nie rozwiązuj problemów relacyjnych po 21:00. Najpierw nakarm ciało i wyśpij mózg — rano większość demonów znika.'
      }
    },
    {
      id: 'sec-10-14',
      pageNumber: 494,
      sectionNumber: '10.14',
      title: 'Mapa Relacji, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Zbadaliśmy najgłębsze fundamenty relacji międzyludzkich: współregulację nerwową, neurochemię zaufania, świętość granic osobistych, anatomiję czterech jeźdźców oraz uzdrawiającą moc przeprosin i wybaczenia.',
        'Wiesz już, jak funkcjonować wśród ludzi, jak rozmawiać, jak wywierać wpływ i jak budować bezpieczne więzi. Pora teraz zadać pytanie o własne wnętrze i napęd życiowy:',
        'DLACZEGO CZASEM CHCEMY COŚ ZROBIĆ, WIEMY JAK TO ZROBIĆ, ALE TEGO NIE ROBIMY? Co rządzi naszą siłą woli, chęcią do działania i prokrastynacją?',
        'W Rozdziale 11 wejdziemy w fascynujący świat MOTYWACJI — odczarujemy mity wokół dopaminy, poznamy koszt aktywacji i zbudujemy niezniszczalny system codziennego działania.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 10.'
      ]
    }
  ]
};

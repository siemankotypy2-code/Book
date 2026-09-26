import { Chapter, ExamQuestion } from '../types/book';

export const chapterFourteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W Harwardzkim Projekcie Negocjacyjnym (Fisher, Ury, Patton: „Dochodząc do TAK”), na czym polega rewolucyjna różnica między STANOWISKIEM a INTERESEM (Sekcja 14.2)?',
    topic: 'Stanowisko a Interes w Negocjacjach Harwardzkich',
    sectionRef: 'Sekcja 14.2',
    options: [
      { label: 'A', text: 'Stanowisko dotyczy tylko polityków, a interes tylko biznesmenów.', isCorrect: false },
      { label: 'B', text: 'STANOWISKO to powierzchowne, sztywne żądanie („Chcę jedynej pomarańczy na stole!”), podczas gdy INTERES to głęboka, leżąca u podstaw potrzeba (jedna osoba potrzebuje soku z miąższu do picia, a druga skórki do upieczenia ciasta).', isCorrect: true },
      { label: 'C', text: 'Interes to kwota na koncie bankowym, a stanowisko to adres zamieszkania.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to synonimy w prawie cywilnym.', isCorrect: false }
    ],
    explanation: 'Skupienie się na stanowiskach prowadzi do wojny na wyniszczenie lub zgniłego kompromisu (rozcięcie pomarańczy na pół, przez co obie strony dostają za mało). Odkrycie ukrytych interesów pozwala wygenerować kreatywne rozwiązanie, w którym obie strony wygrywają w 100%.',
    keyTakeaway: 'Nie negocjuj o stanowiska — pytaj o stojące za nimi interesy i potrzeby.'
  },
  {
    id: 2,
    question: 'Czym jest koncepcja BATNA (Best Alternative to a Negotiated Agreement) i dlaczego stanowi najważniejsze źródło siły negocjacyjnej (Sekcja 14.8)?',
    topic: 'Koncepcja BATNA jako Pancerz Negocjatora',
    sectionRef: 'Sekcja 14.8',
    options: [
      { label: 'A', text: 'Tajnym programem szpiegowskim podsłuchującym oponenta.', isCorrect: false },
      { label: 'B', text: 'Najlepszą alternatywą w razie braku porozumienia — to realny plan B, który zrealizujesz, jeśli odejdziesz od stołu negocjacyjnego. Im silniejsza Twoja BATNA, tym większa swoboda i odporność na manipulacje drugiej strony.', isCorrect: true },
      { label: 'C', text: 'Zniżką handlową udzielaną za płatność gotówką.', isCorrect: false },
      { label: 'D', text: 'Karą umowną za spóźnienie na spotkanie.', isCorrect: false }
    ],
    explanation: 'Siła przy stole nie wynika z agresji ani twardego głosu. Wynika z tego, jak dobrą masz alternatywę, gdy wstaniesz od stołu. Jeśli masz drugą świetną ofertę pracy (silna BATNA), szef nie może cię zaszantażować.',
    keyTakeaway: 'Nigdy nie siadaj do stołu negocjacyjnego bez zdefiniowanej, silnej BATNA.'
  },
  {
    id: 3,
    question: 'W negocjacjach kryzysowych i biznesowych Christopher Voss (były główny negocjator FBI) zaleca stosowanie techniki „Etykietowania Taktycznego” (Tactical Labeling) (Sekcja 14.5 i 14.10). Polega ona na:',
    topic: 'Taktyczne Etykietowanie Emocji wg Chrisa Vossa',
    sectionRef: 'Sekcja 14.5',
    options: [
      { label: 'A', text: 'Przyklejaniu taśmy z nazwiskiem oponenta na jego czole.', isCorrect: false },
      { label: 'B', text: 'Neutralnym, spokojnym nazwaniu obaw i negatywnych emocji drugiej strony za pomocą zwrotów: „Wygląda na to, że obawiasz się...”, „Brzmi to tak, jakbyś czuł się pominięty...”, co deaktywuje amygdalę oponenta bez przyznawania mu racji.', isCorrect: true },
      { label: 'C', text: 'Zażądaniu natychmiastowego poddania się pod groźbą broni.', isCorrect: false },
      { label: 'D', text: 'Udawaniu, że nie słyszy się żadnych słów drugiej strony.', isCorrect: false }
    ],
    explanation: 'Voss wykorzystuje to samo odkrycie Matthew Liebermana (Tom I, Rozdział 2): nazwanie lęku na głos odbiera mu siłę rażenia i przenosi zasoby do kory przedczołowej. Oponent czuje się wysłuchany i przestaje walczyć.',
    keyTakeaway: 'Nie zaprzeczaj emocjom oponenta — nazwij je z empatią, by rozbroić minę.'
  },
  {
    id: 4,
    question: 'Dlaczego tradycyjny „Kompromis” bywa często najgorszym możliwym rozwiązaniem sporu (Sekcja 14.9)?',
    topic: 'Zgniły Kompromis a Kreatywna Integracja',
    sectionRef: 'Sekcja 14.9',
    options: [
      { label: 'A', text: 'Ponieważ jest nielegalny w świetle prawa Unii Europejskiej.', isCorrect: false },
      { label: 'B', text: 'W kompromisie („spotkajmy się w połowie drogi”) obie strony muszą zrezygnować z części swoich kluczowych potrzeb, w efekcie czego obie odchodzą od stołu niezadowolone, ze zniekształconym projektem i ukrytą urazą.', isCorrect: true },
      { label: 'C', text: 'Kompromis zawsze prowadzi do natychmiastowej bójki.', isCorrect: false },
      { label: 'D', text: 'Wymaga obecności tłumacza przysięgłego.', isCorrect: false }
    ],
    explanation: 'Wyobraź sobie, że mąż chce spędzić wakacje w górach, a żona nad morzem. Zgniły kompromis to wyjazd do Radomia — żadne z nich nie ma ani gór, ani morza, oboje są wściekli. Negocjacje integracyjne szukają trzeciego rozwiązania (np. góry w Grecji z widokiem na morze).',
    keyTakeaway: 'Nie dziel dziecka na pół. Szukaj rozwiązań integracyjnych zamiast mechanicznego cięcia.'
  },
  {
    id: 5,
    question: 'W roli Neutralnego Mediatora (Sekcja 14.12), najważniejszym zadaniem w pierwszej fazie pracy ze skłóconymi stronami jest:',
    topic: 'Rola Mediatora: Od Emocji do Faktów',
    sectionRef: 'Sekcja 14.12',
    options: [
      { label: 'A', text: 'Wskazanie, kto ma rację, i ukaranie winnego grzywną.', isCorrect: false },
      { label: 'B', text: 'Zapewnienie bezpieczeństwa psychologicznego, obniżenie temperatury afektywnej, rozdzielenie ludzi od problemu i przetłumaczenie wzajemnych oskarżeń na język niezaspokojonych potrzeb.', isCorrect: true },
      { label: 'C', text: 'Zamknięcie obu stron w ciemnym pokoju bez jedzenia.', isCorrect: false },
      { label: 'D', text: 'Podyktowanie gotowego wyroku w imieniu sądu.', isCorrect: false }
    ],
    explanation: 'Mediator nie jest sędzią. Nie rozstrzyga o winie. Mediator zarządza procesem komunikacji, umożliwiając skłóconym stronom bezpieczne przejście z walki na śmierć i życie do wspólnego rozwiązywania problemu.',
    keyTakeaway: 'Bądź twardy dla problemu, ale miękki dla człowieka.'
  }
];

export const chapterFourteen: Chapter = {
  number: 14,
  title: 'Konflikt i Negocjacje: Sztuka Porozumienia Gdy Interesy Się Ścierają',
  subtitle: 'Od walki pozycyjnej do metody harwardzkiej, potęga BATNA i psychologia wygrana-wygrana',
  leadParagraph: 'Konflikt nie jest anomalią ani porażką moralną — jest naturalnym prawem tarcia społecznego. Tam, gdzie spotykają się dwa różne układy nerwowe, dwie historie życiowe i dwa ograniczone budżety, różnica zdań jest gwarantowana. Pytanie nie brzmi, czy będziesz miał konflikty, lecz jak będziesz przez nie przechodził: czy spalisz mosty w bezsilnej wojnie na wyniszczenie, czy zamienisz kryzys w fundament trwałego porozumienia.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-14-1',
      pageNumber: 658,
      sectionNumber: '14.1',
      title: 'Konflikt interesów: Dlaczego zasoby są ograniczone, a potrzeby nieskończone',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'W negocjacjach nie dostajesz tego, na co zasługujesz. Dostajesz to, co wynegocjujesz.',
        author: 'Chester L. Karrass'
      },
      paragraphs: [
        'Wyobraź sobie dwoje wspólników w małej spółce. Firma wypracowała 200 tysięcy złotych zysku. Wspólnik A chce kupić nową maszynę produkcyjną, by zwiększyć moce przerobowe. Wspólnik B chce wypłacić dywidendę, by spłacić kredyt hipoteczny. Pieniądze są jedne, żądania dwa. Wybucha konflikt.',
        'Większość ludzi w takiej sytuacji wchodzi w Walkę Pozycyjną (Positional Bargaining). Zaczynają krzyczeć, szantażować się emocjonalnie, wyciągać dawne urazy i okopywać się na swoich pozycjach. Każde ustępstwo traktują jako utratę honoru i kapitulację ego.',
        'Prawdziwa dojrzałość polega na zrozumieniu, że konflikt interesów to problem matematyczno-psychologiczny, a nie zdrada przyjaźni. Konflikt staje się destrukcyjny dopiero wtedy, gdy ludzie zlewają problem merytoryczny z własną tożsamością i poczuciem własnej wartości.'
      ]
    },
    {
      id: 'sec-14-2',
      pageNumber: 662,
      sectionNumber: '14.2',
      title: 'Stanowisko a interes: Klasyczna przypowieść o pomarańczy',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W klasycznej przypowieści Rogera Fishera i Williama Ury’ego dwoje rodzeństwa kłóci się w kuchni o jedyną pozostałą w koszyku pomarańczę. Oboje krzyczą: „Ja muszę ją mieć!”. To są ich STANOWISKA.',
        'Zirytowany rodzic wchodzi do kuchni, bierze nóż, rozcina owoc na pół i daje każdemu po połówce. Wydaje się, że osiągnięto sprawiedliwy kompromis. Co robią dzieci?',
        'Jedno obiera swoją połówkę, wyrzuca skórkę do kosza i zjada miąższ. Drugie wyciska sok do zlewu, a skórkę ściera na tarce do ciasta! Gdyby rodzic zadał jedno proste pytanie: „DO CZEGO JEST CI TO POTRZEBNE?”, odkryłby ich prawdziwe INTERESY. Jedno dziecko mogło dostać 100% miąższu, a drugie 100% skórki. Oboje wygraliby całkowicie.',
        'To jest sedno Metody Harwardzkiej: Przestań debatować o stanowiskach. Kop głębiej, aż dokopiesz się do leżących u podstaw motywacji, lęków i potrzeb.'
      ]
    },
    {
      id: 'sec-14-3',
      pageNumber: 666,
      sectionNumber: '14.3',
      title: 'Emocje w konflikcie: Dlaczego zalana kora nie potrafi negocjować',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wracamy do fundamentu z Tomu I (Rozdział 2: Porwanie Emocjonalne). W chwili, gdy oponent odrzuca Twoją propozycję lub podnosi głos, Twoje tętno przekracza 100 uderzeń na minutę (zjawisko Flooding u Gottmana).',
        'W tym stanie przepływ krwi w grzbietowo-bocznej korze przedczołowej spada o ponad 30%. Dosłownie głupiejesz w oczach. Tracisz dostęp do elastyczności poznawczej, kreatywności i empatii. Zostają tylko ewolucyjne odruchy gada: Walka (krzyk, agresja słowna), Ucieczka (trzaśnięcie drzwiami) lub Zamarznięcie (uległość).',
        'Zasada numer jeden profesjonalnych negocjacji brzmi: NIGDY NIE NEGOCJUJ W STANIE ZALANIA AFEKTYWNEGO. Jeśli czujesz krew pulsującą w skroniach, jedynym Twoim ruchem jest zarządzenie przerwy technicznej (Time-out): „Widzę, że emocje biorą górę. Zróbmy 20 minut przerwy na kawę i wróćmy do stołu o 14:30”.'
      ]
    },
    {
      id: 'sec-14-4',
      pageNumber: 670,
      sectionNumber: '14.4',
      title: 'Schody eskalacji: 9 poziomów zniszczenia wg Friedricha Glasla',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Friedrich Glasl dokonał genialnej analizy anatomii wojen międzyludzkich. Konflikt nie wybucha od razu bombą atomową — schodzi po schodach w dół:',
        'Krok 1: Usztywnienie stanowisk (pogłębienie różnic zdań).',
        'Krok 2: Debata i polemika (użycie ironii, próba udowodnienia wyższości logicznej).',
        'Krok 3: Czyny zamiast słów (blokowanie rozmowy, stawianie przed faktami dokonanymi).',
        'Krok 4: Szukanie koalicji (budowanie obozów zwolenników, plotki na korytarzu).',
        'Krok 5: Utrata twarzy (publiczne upokorzenie i demaskowanie oponenta jako „złego człowieka”).',
        'Krok 6: Strategie gróźb (szantaż: „Jeśli nie ustąpisz, zobaczysz, co zrobię”).',
        'Krok 7: Ograniczone ciosy niszczące (próba zadania bólu kosztem własnych strat).',
        'Krok 8: Rozbicie systemu przeciwnika (zniszczenie jego reputacji, rodziny, biznesu).',
        'Krok 9: Razem w przepaść (samobójcze zniszczenie: „Nie obchodzi mnie, że sam zginę, byle on zginął razem ze mną”).',
        'Im niżej zeйдеsz po tych schodach, tym trudniej wrócić. Od poziomu 6 porozumienie bez zewnętrznego mediatora jest niemal niemożliwe.'
      ]
    },
    {
      id: 'sec-14-5',
      pageNumber: 674,
      sectionNumber: '14.5',
      title: 'Przerwanie eskalacji: Taktyczne etykietowanie Chrisa Vossa',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Christopher Voss, legendarny negocjator FBI ds. zakładników, w książce „Never Split the Difference” uczy, jak rozbrajać terrorystów i twardych prezesów korporacji.',
        'Większość ludzi na atak reaguje obroną: „To nieprawda! Źle pan to ocenia!”. To dolewa oliwy do ognia. Voss stosuje technikę zwaną Etykietowaniem Taktycznym (Tactical Labeling):',
        'Zamiast zaprzeczać, spokojnym, hipnotyzującym głosem (tzw. Late-Night FM DJ Voice) mówisz:',
        '„Wygląda na to, że czujesz się oszukany przez ten zapis”.',
        '„Brzmi to tak, jakbyś uważał, że nie traktujemy twojej pracy z należytym szacunkiem”.',
        'Zauważ: nie mówisz: „Masz rację, jesteśmy oszustami”. Mówisz jedynie, że WIDZISZ JEGO EMOCJĘ. Kiedy oponent słyszy, że jego stan został bezbłędnie nazwany, w jego ciele zachodzi zjawisko wyciszenia kaskady limbicznej. Opuszcza gardę i mówi: „Dokładnie tak jest!”. W tym momencie wojna się kończy, a zaczynają się negocjacje.'
      ]
    },
    {
      id: 'sec-14-6',
      pageNumber: 678,
      sectionNumber: '14.6',
      title: 'Metoda Harwardzka: Cztery filary negocjacji zasadniczych',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Cztery żelazne zasady Negocjacji Zasadniczych (Principled Negotiation):',
        'Filar 1: Oddziel ludzi od problemu. Bądź miękki dla człowieka (życzliwy, pełen szacunku), ale twardy i bezkompromisowy dla meritum problemu.',
        'Filar 2: Skup się na interesach, a nie na stanowiskach. Pytaj: „Dlaczego to jest dla was tak ważne? Czego się obawiacie?”.',
        'Filar 3: Generuj wiele opcji z korzyścią dla obu stron. Zanim podejmiesz decyzję, zorganizuj wspólną burzę mózgów bez oceniania pomysłów („Jak możemy powiększyć ten tort, zanim go podzielimy?”).',
        'Filar 4: Nalegaj na obiektywne kryteria. Niech o cenie czy warunkach nie decyduje siła czyjegoś uporu, lecz obiektywny standard: rynkowa wycena rzeczoznawcy, wskaźniki inflacji, precedensy prawne czy standardy branżowe.'
      ]
    },
    {
      id: 'sec-14-7',
      pageNumber: 682,
      sectionNumber: '14.7',
      title: 'Win-Win: Kiedy naprawdę działa, a kiedy jest naiwną mrzonką',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Koncepcja Win-Win (Wygrana-Wygrana) została skomercjalizowana i spłycona do poziomu taniego motywacyjnego sloganu. Wielu ludzi sądzi, że Win-Win oznacza bycie miłym i bezustanne ustępowanie oponentowi.',
        'To błąd. Prawdziwe Win-Win nie jest naiwnym pacyfizmem. Działa tylko wtedy, gdy obie strony mają coś do zaoferowania i gdy istnieje przestrzeń do integracji wartości (tzw. ZOPA — Zone of Possible Agreement).',
        'Jeśli jednak stajesz naprzeciwko psychopaty, bezwzględnego monopolisty czy agresora, który żąda oddania Twojego terytorium za nic — strategia Win-Win staje się naiwnością. Wówczas Twoją jedyną obroną jest żelazna BATNA i twarde stawianie granic.'
      ]
    },
    {
      id: 'sec-14-8',
      pageNumber: 686,
      sectionNumber: '14.8',
      title: 'BATNA: Twoje prawdziwe źródło siły i niezależności',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Best Alternative to a Negotiated Agreement (BATNA) to Twój plan ewakuacyjny. To odpowiedź na pytanie: „Co zrobię dziś o 17:00, jeśli ta rozmowa zakończy się fiaskiem i nie podpiszemy żadnej umowy?”.',
        'Jeśli idziesz prosić o podwyżkę, nie mając żadnych oszczędności, a na rynku pracy panuje recesja — Twoja BATNA jest tragicznie słaba. Szef wyczuje Twój lęk w tonie głosu (Rozdział 7) i bez trudu odrzuci wniosek.',
        'Ale jeśli przed wejściem do gabinetu szefa masz w kieszeni podpisaną ofertę z innej firmy z pensją o 30% wyższą (silna BATNA) — Twoja postawa ciała, spokój i asertywność zmieniają się diametralnie. Nie musisz być agresywny; Twój spokój bije z pewności, że porażka w tym pokoju nie jest Twoim końcem.'
      ]
    },
    {
      id: 'sec-14-9',
      pageNumber: 690,
      sectionNumber: '14.9',
      title: 'Cena zgniłego kompromisu: Dlaczego 50/50 często krzywdzi obu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Leniwi negocjatorzy uwielbiają dzielić różnicę na pół: „Pan chce 100 tysięcy, ja daję 60 tysięcy, spotkajmy się pośrodku na 80 tysiącach”.',
        'Zgniły kompromis to iluzja sprawiedliwości. Jeśli Ty chcesz założyć czarne buty do garnituru, a Twoja żona uważa, że powinieneś założyć brązowe — kompromis polegający na założeniu jednego buta czarnego i jednego brązowego czyni z Ciebie pośmiewisko.',
        'W negocjacjach handlowych kompromis na cenie często niszczy marżę dostawcy, zmuszając go do obniżenia jakości komponentów, na czym ostatecznie traci kupujący. Szukaj wymiany handlowej w innych walutach: „Nie mogę obniżyć ceny ze 100 tysięcy, ale w tej kwocie dorzucę wam bezpłatny 2-letni serwis, szybszy termin dostawy i szkolenie dla 10 pracowników”.'
      ]
    },
    {
      id: 'sec-14-10',
      pageNumber: 694,
      sectionNumber: '14.10',
      title: 'Negocjacje codzienne: Od podziału obowiązków domowych po pensję',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Negocjacje nie toczą się tylko na szczytach dyplomatycznych ONZ. Negocjujesz co 4 godziny:',
        '- Kto dziś odbiera dzieci z przedszkola?',
        '- Do której godziny nastolatek może zostać na imprezie urodzinowej?',
        '- Który mechanik naprawi samochód i za ile?',
        'Oto trzy zasady codziennego mistrzostwa negocjacyjnego:',
        '1. Zamień „Dlaczego?” na „Jak mam to zrobić?” (Pytanie kalibrowane Vossa). Kiedy szef zarzuca Cię trzema nowymi projektami, nie krzycz: „To niemożliwe!”. Spytaj ze spokojem: „Chętnie wezmę projekt C. Jak mam to pogodzić z deadlinem na projekt A, który ma priorytet u zarządu?”. Przenosisz problem decyzyjny na barki szefa.',
        '2. Nigdy nie licytuj się sam ze sobą. Jeśli rzuciłeś ofertę, a po drugiej stronie zapadła cisza — MILCZ. Amatorzy w panice przed ciszą sami zaczynają obniżać cenę: „Powiedziałem 10 tysięcy... ale wie pan, możemy zrobić za 8”.',
        '3. Pozwól drugiej stronie poczuć kontrolę. Ludzie walczą z Twoimi pomysłami, ale będą bronić na śmierć i życie pomysłów, które uważają za własne.'
      ]
    },
    {
      id: 'sec-14-11',
      pageNumber: 698,
      sectionNumber: '14.11',
      title: 'Wielkie Studium Przypadku: Wojna o Sukcesję w Firmie Rodzinnej',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Fascynująca analiza konfliktu wielopokoleniowego w dynamicznie rosnącym przedsiębiorstwie produkcyjnym. Zobaczmy, jak deeskalacja i mediacja harwardzka ocaliły firmę i relacje rodzinne.'
      ],
      caseStudyRef: {
        id: 'cs-ch14-sukcesja',
        title: 'Fabryka na Rozdrożu: Wojna Braci o Przyszłość Imperium Ojca',
        subtitle: 'Zderzenie tradycji z innowacją — jak rozdzielić role rodzinne od ról biznesowych',
        protagonist: 'Adam (starszy brat, Dyrektor Operacyjny, 42 lata) i Filip (młodszy brat, Dyrektor Marketingu, 34 lata)',
        context: 'Posiedzenie zarządu po odejściu na emeryturę założyciela firmy, produkującej meble tapicerowane.',
        story: [
          'Firma zatrudniała 250 pracowników i przynosiła 40 milionów złotych obrotu. Po ustąpieniu ojca stery przejęli dwaj bracia. Konflikt tlił się od dawna, ale wybuchł podczas debaty nad budżetem na kolejny rok.',
          'Stanowisko Adama: „Musimy zainwestować 8 milionów w automatyzację linii produkcyjnej i roboty spawalnicze. Musimy ciąć koszty jednostkowe, inaczej zjedzą nas fabryki z Azji!”.',
          'Stanowisko Filipa: „Bzdura! Musimy przeznaczyć te pieniądze na e-commerce, rebranding i wejście na rynek niemiecki z meblami designerskimi. Świat idzie w stronę marek premium!”.',
          'Dyskusja szybko zeszła po schodach Glasla na poziom 4 i 5. Adam wykrzyczał: „Zawsze byłeś rozpuszczonym marzycielem ojca, który nie ma pojęcia o twardej robocie!”. Filip odpowiedział: „A ty jesteś skostniałym dinozaurem bez wizji, który zniszczy tę firmę!”. Zablokowali nawzajem podpisywanie faktur. Bank zagroził wymówieniem linii kredytowej.',
          'Ojciec zatrudnił zewnętrznego mediatora gospodarczego. Pierwsza sesja: oddzielenie ludzi od problemu. Mediator zakazał braciom używania słów „ty zawsze” i nakazał spisanie twardych faktów.',
          'Odkrycie ukrytych interesów: Adam nie bał się marketingu — bał się, że przestarzała fabryka stanie z powodu awarii i nie dowiezie zamówień (potrzeba bezpieczeństwa operacyjnego). Filip nie chciał zniszczyć fabryki — bał się, że produkcja tanich mebli bez marki skazuje firmę na powolną śmierć marżową (potrzeba wzrostu i prestiżu).',
          'Rozwiązanie integracyjne (Win-Win): Podzielono budżet na etapy. 4 miliony przeznaczono na zrobotyzowanie wąskiego gardła fabryki (co uwolniło moce), a 4 miliony na pilotaż e-commerce na rynku niemieckim dla nowej submarki premium. W ciągu 2 lat przychody spółki wzrosły o 35%, a bracia odzyskali braterską więź.'
        ],
        decisionTaken: 'Bracia zgodzili się na proces mediacji i przeszli ze sztywnej wojny o całą pulę budżetu do sekwencyjnego finansowania obu celów.',
        whatProtagonistSaw: 'Adam widział w bracie nieodpowiedzialnego lekkoducha; Filip widział w Adamie zawistnego zazdrośnika blokującego innowacje.',
        whatWasMissed: 'Że ich kompetencje były komplementarne — fabryka bez marketingu zbankrutowałaby, a marketing bez sprawnej fabryki nie miałby czego wysyłać klientom.',
        psychologicalAnalysis: {
          coreMechanism: 'Przeniesienie dynamiki rywalizacji braterskiej z dzieciństwa na strukturę zarządczą spółki.',
          cognitiveBiases: [
            { name: 'Iluzja sumy zerowej (Zero-Sum Fallacy)', description: 'Przekonanie, że każdy milion wydany przez brata jest bezpośrednią osobistą stratą drugiego.', impact: 'Zacięta walka pozycyjna.' },
            { name: 'Błąd potwierdzenia', description: 'Każdy błąd w dziale brata był traktowany jako dowód na jego całkowitą niekompetencję.', impact: 'Eskalacja nieufności.' }
          ],
          defenseMechanisms: [
            { name: 'Reakcja upozorowana', explanation: 'Agresywna pewność siebie maskowała lęk przed sprostaniem legendzie ojca-założyciela.' }
          ],
          emotionalDynamic: 'Głęboki lęk przed byciem „tym gorszym synem” w oczach emerytowanego ojca.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Przednia kora zakrętu obręczy (ACC)', role: 'Rejestracja zagrożenia statusowego w rodzinie', activationState: 'Ekstremalna' },
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Ocena modeli biznesowych', activationState: 'Odblokowana dopiero po interwencji mediatora' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol i testosteron', roleInScenario: 'Mieszanka napędzająca walkę o pozycję samca alfa w zarządzie' }
          ],
          biologicalTimeline: [
            { timeMs: 'Początek mediacji', process: 'Wymuszenie 10 minut milczenia i parafrazy obniża poziom pobudzenia autonomicznego.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Protokół Rozdzielenia Kapeluszy', script: 'Na posiedzeniu zarządu bracia występują wyłącznie jako Dyrektor Operacyjny i Dyrektor Marketingu. Kwestie rodzinne omawiane są na osobnym spotkaniu przy kawie.', rationale: 'Chroni biznes przed toksynami z przeszłości.' }
          ]
        },
        alternativePath: 'Gdyby nie mediacja, spór skończyłby się podziałem majątku przez sąd, likwidacją 250 miejsc pracy i dożywotnią nienawiścią w rodzinie.',
        readerQuestion: 'W jakich konfliktach w Twoim życiu kłócisz się o stanowisko, zapominając zapytać o to, jaka prawdziwa potrzeba stoi za żądaniem drugiej strony?',
        keyTakeaway: 'Wielcy negocjatorzy nie pokonują partnera przy stole. Oni wspólnie z partnerem pokonują problem, który leży na stole.'
      }
    },
    {
      id: 'sec-14-12',
      pageNumber: 702,
      sectionNumber: '14.12',
      title: 'Mediacja: Sztuka bycia mostem nad przepaścią',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy dwie strony utkną na 5. lub 6. poziomie Glasla, ich zdolność do bezpośredniej rozmowy wynosi zero. Każde słowo jest odczytywane jako kłamstwo lub atak.',
        'W tym momencie wkracza Mediator. Mediator nie wydaje wyroków, nie wskazuje winnych i nie rozstrzyga o prawie. Jest architektem bezpiecznego środowiska komunikacyjnego.',
        'Cyrkularne Pytania Mediatora: Zamiast pytać: „Kto zaczął?”, pyta: „Jak myślisz, jak Twoje milczenie wpłynęło na reakcję drugiej strony?”.',
        'Reframing Przemocowych Komunikatów: Kiedy jedna strona krzyczy: „On jest złodziejem i oszustem!”, mediator tłumaczy to na język potrzeb: „Rozumiem, że kwestia przejrzystości rozliczeń finansowych jest dla pani absolutnym fundamentem bezpieczeństwa w tej umowie?”. Toksyna zostaje zneutralizowana, esencja zostaje ocalona.'
      ]
    },
    {
      id: 'sec-14-13',
      pageNumber: 706,
      sectionNumber: '14.13',
      title: 'Laboratorium Negocjacji: Przygotowanie 5-krokowej strategii',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Oto szablon przygotowania do dowolnej trudnej rozmowy negocjacyjnej, który powinieneś wypełnić na piśmie przed wejściem do pokoju:',
        '1. Moje Stanowisko vs Mój Interes: Czego żądam? Dlaczego tak naprawdę tego potrzebuję?',
        '2. Prawdopodobny Interes Drugiej Strony: Czego oni się boją? Co jest dla nich sprawą honoru lub bezpieczeństwa?',
        '3. Moja BATNA: Co dokładnie zrobię, jeśli nie dojdziemy do porozumienia? Jak mogę wzmocnić mój plan B przed rozmową?',
        '4. Waluty Wymienne (Non-monetary currencies): Co kosztuje mnie niewiele, a ma ogromną wartość dla nich? (Terminy, rekomendacje, wsparcie techniczne, elastyczność).',
        '5. Pytania Kalibrowane: Jakie pytania zaczynające się od „Jak” i „Co” zadam, by skłonić ich do współpracy zamiast obrony?'
      ]
    },
    {
      id: 'sec-14-14',
      pageNumber: 710,
      sectionNumber: '14.14',
      title: 'Wielki Test Konfliktu, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poznaliśmy tajniki rozwiązywania sporów: przejście od stanowisk do interesów, deeskalację taktyczną, budowanie twardej BATNA oraz sztukę mediacji.',
        'Wiesz już, jak poruszać się wśród ludzi, jak wpływać na świat i jak negocjować trudne porozumienia. Ale na drodze każdego człowieka stoi najtrudniejszy, najbardziej wymagający przeciwnik, jakiego kiedykolwiek spotkasz:',
        'TY SAM. Twój własny stres, Twoja samokrytyka, Twój paraliżujący perfekcjonizm i ból porażki.',
        'W Rozdziale 15 wejdziemy w ostateczną twierdzę psychiki: SAMOKONTROLĘ, ODPORNOŚĆ PSYCHICZNĄ I DZIAŁANIE — nauczymy się budować niewzruszony wewnętrzny spokój w oku cyklonu.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 14.'
      ]
    }
  ]
};

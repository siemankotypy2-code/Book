import { Chapter, CaseStudy, SelfExercise, ExamQuestion } from '../types/book';

// ============================================================
// TOM III — ROZDZIAŁ 7 (CHAPTER 23 IN THE GLOBAL BOOK STRUCTURE)
// NAWYKI — JAK ZACHOWANIA STAJĄ SIĘ CZĘŚCIĄ CODZIENNOŚCI
// ============================================================

export const caseStudiesChapterTwentyThree: CaseStudy[] = [
  {
    id: 'cs-23-1',
    title: 'Pułapka Smartfona podczas Nauki i Pracy Głębokiej',
    subtitle: 'Jak niewidzialny bodziec i brak tarcia behawioralnego niszczą koncentrację',
    protagonist: 'Jan (22 lata, student informatyki)',
    context: 'Przygotowanie do trudnego egzaminu z algorytmów w cichym pokoju przy biurku.',
    story: [
      'Jan usiadł o 14:00 przy biurku z otwartym podręcznikiem i laptopem. Powziął silne postanowienie: "Dzisiaj uczę się przez 4 godziny bez przerw". Telefon leżał w odległości 15 cm od prawej dłoni z ekranem skierowanym do góry.',
      'Po 12 minutach czytania skomplikowanego dowodu matematycznego Jan napotkał nagły wzrost napięcia poznawczego. W tym samym ułamku sekundy powiadomienie na ekranie rozświetliło się cichym błyskiem. Bez jakiejkolwiek świadomej refleksji, prawa ręka Jana sięgnęła po telefon.',
      'Dopiero po 35 minutach bezmyślnego przewijania krótkich wideo Jan "cknął się" z poczuciem winy, zdając sobie sprawę, że porzucił naukę. Powtórzył ten schemat cztery razy w ciągu popołudnia.'
    ],
    decisionTaken: 'Pozostawienie źródła natychmiastowych bodźców w bezpośrednim polu widzenia przy zerowym tarciu behawioralnym (0 kroków do uruchomienia).',
    whatProtagonistSaw: 'Jan sądził, że brakuje mu silnej woli i jest "uzależniony od rozrywki".',
    whatWasMissed: 'Zignorował fakt, że sięgnięcie po telefon było automatyczną reakcją wyuczoną w odpowiedzi na mikrostres poznawczy (trudność w dowodzie), wzmocnioną brakiem jakiejkolwiek bariery fizycznej.',
    psychologicalAnalysis: {
      coreMechanism: 'Negative Reinforcement via Avoidance & Zero-Friction Habit Trigger — nawykowe sięganie po bodziec w celu natychmiastowej ucieczki przed mikro-dyskomfortem poznawczym.',
      cognitiveBiases: [
        {
          name: 'Błąd atrybucji dyspozycyjnej',
          description: 'Ocenianie braku skupienia jako wady charakteru zamiast konsekwencji architektury środowiska.',
          impact: 'Poczucie bezsilności i rezygnacja z próby zmiany wyzwalaczy.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Rationalizacja',
          explanation: 'Tłumaczenie się "sprawdzaniem ważnej wiadomości od grupy ze studiów".'
        }
      ],
      emotionalDynamic: 'Chwilowa ulga od napięcia po sięgnięciu po telefon, po której następuje spadek poczucia sprawczości i wstyd.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Prążkowie (Striatum)', role: 'Egzekucja zautomatyzowanej pętli ruchowej sięgania po telefon', activationState: 'Nadaktywne po odebraniu błysku ekranu' },
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Hamowanie impulsu', activationState: 'Zahamowana przez napięcie poznawcze wywołane trudnym zadaniem' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Sygnał błędu przewidywania nagrody na widok podświetlonego ekranu' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Błysk ekranu rejestrowany przez siatkówkę' },
        { timeMs: '100-300 ms', process: 'Sygnał ucieczkowy z ciała migdałowatego w reakcji na trudny dowód' },
        { timeMs: '300+ ms', process: 'Automatyczny chwyt dłoni bez zaangażowania kontroli zarządczej' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Projektowanie bez-tarciowe', description: 'Aplikacje mobilne usuwają wszelkie opory interakcji', vulnerabilityExploited: 'Szybkie zmęczenie uwagi' }
      ],
      counterMeasures: [
        { step: 'Zwiększenie Tarcia Behawioralnego', script: 'Telefon wędruje do drugiego pokoju w trybie samolotowym.', rationale: 'Konieczność wstania z krzesła przywraca świadomą kontrolę kory przedczołowej.' }
      ]
    },
    keyTakeaway: 'Nie walcz z pokusą leżącą przy dłoni — utrudnij jej wykonanie o chociaż 10 sekund.'
  },
  {
    id: 'cs-23-2',
    title: 'Nawykowe Wieczorne Podjadanie: Od Stresu do Cukru',
    subtitle: 'Jak emocjonalny stan końcowodniowy uruchamia pętlę poszukiwania ulgi',
    protagonist: 'Ewa (36 lat, kierowniczka działu HR)',
    context: 'Powrót do domu o godzinie 19:30 po intensywnym dniu pełnym trudnych rozmów pracowniczych.',
    story: [
      'Ewa po wejściu do domu zdejmuje buty, wchodzi do kuchni i bez namysłu otwiera szafkę ze słodyczami. Zjada trzy batony, stojąc przy blacie.',
      'Nie czuje rzeczywistego fizycznego głodu — jadła wartościową kolację 2 godziny wcześniej w pracy. Jedzie na automatycznym pilocie.',
      'Zapytana, co czuła przed otwarciem szafki, odpowiada: "Nic szczególnego, po prostu po całym dniu w biurze czuję gwałtowną pustkę i przeciążenie".'
    ],
    decisionTaken: 'Automatyczne użycie wyuczonego wzorca żywieniowego jako biologicznego pacyfikatora układu nerwowego.',
    whatProtagonistSaw: 'Ewa uważała, że "ma słabą wolę do jedzenia" i "brak jej samozaparcia".',
    whatWasMissed: 'Nie rozróżniała głodu fizjologicznego od potrzeby samoregulacji emocjonalnej po stresie interpersonalnym.',
    psychologicalAnalysis: {
      coreMechanism: 'Habitual Emotion Regulation via Palatable Food — cukier aktywuje układ nagrody, redukując kortyzol i zapewniając natychmiastowe ukojenie.',
      cognitiveBiases: [
        {
          name: 'Niezrozumienie funkcji zachowania',
          description: 'Mylenie celu zachowania (regulacja stresu) z jego fizycznym obiektem (baton).',
          impact: 'Stosowanie niewłaściwych diet zamiast nauki elastycznej regulacji emocji.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Tłumienie',
          explanation: 'Ignorowanie nagromadzonego w ciągu dnia napięcia emocjonalnego.'
        }
      ],
      emotionalDynamic: 'Przejście od przeciążenia bodźcami do chwilowej ulgi sensorycznej, po której następuje poczucie winy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (Nucleus Accumbens)', role: 'Wyrzut dopaminy na sam widok opakowania', activationState: 'Wysoka nadaktywność' },
        { region: 'Wyspa (Insula)', role: 'Rejestracja somatycznego napięcia w ciele', activationState: 'Sygnalizacja niepokoju przed zjedzeniem' }
      ],
      neurotransmitters: [
        { name: 'Endorfiny & Dopamina', roleInScenario: 'Szybkie wyciszenie układu współczulnego po spożyciu cukru i tłuszczu' }
      ],
      biologicalTimeline: [
        { timeMs: '0-150 ms', process: 'Wejście do kuchni stanowi utrwalony kontekst-bodziec' },
        { timeMs: '150-400 ms', process: 'Otwarcie szafki bez udziału świadomej decyzji' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Łatwy dostęp w otoczeniu', description: 'Trzymanie przetworzonej żywności na wysokości oczu', vulnerabilityExploited: 'Zmęczenie decyzyjne po pracy' }
      ],
      counterMeasures: [
        { step: 'Podmiana Rutyny przy Zachowaniu Funkcji', script: 'Wracając do domu, włączam gorący prysznic i muzykę relaksacyjną zamiast iść do kuchni.', rationale: 'Dostarcza ulgi układowi nerwowemu bez kalorii.' }
      ]
    },
    keyTakeaway: 'Nie usuniesz nawyku, nie dając układowi nerwowemu zamiennika dla funkcji, którą ten nawyk pełnił.'
  },
  {
    id: 'cs-23-3',
    title: 'Transformacja Biegania: Od Zmuszania się do Tożsamości Biegacza',
    subtitle: 'Jak budowanie mikrokroków i korygowanie narracji o sobie tworzy trwałą rutynę',
    protagonist: 'Marek (42 lata, architekt)',
    context: 'Próba powrotu do sprawności fizycznej po latach siedzącego trybu życia.',
    story: [
      'Marek wielokrotnie próbował biegać. Kupował drogi sprzęt i narzucał sobie cel: 5 km codziennie o 6:00 rano. Po tygodniu rezygnował z powodu zakwasów i zniechęcenia.',
      'Zmienił strategię: postanowił, że jego jedynym celem jest założenie butów biegowych i wyjście przed dom na 5 minut każdego dnia po wypiciu porannej szklanki wody.',
      'Po 3 miesiącach nie tylko biegał regularnie po 30 minut, ale zaczął myśleć o sobie: "Jestem osobą, która dba o zdrowie i sprawność".'
    ],
    decisionTaken: 'Radykalne obniżenie progu wejścia (tarcie) i powiązanie nowego działania z utrwaloną wskazówką poranną.',
    whatProtagonistSaw: 'Marek początkowo uważał, że bieganie przez 5 minut "nic nie daje i jest śmieszne".',
    whatWasMissed: 'Dopiero po czasie zrozumiał, że w pierwszym etapie nie buduje się kondycji, lecz utrwala się sam obwód nawykowy w mózgu.',
    psychologicalAnalysis: {
      coreMechanism: 'Identity-Based Habit Formation & Habit Stacking — budowanie wzorca na istniejącej kotwicy i wzmacnianie nowej tożsamości.',
      cognitiveBiases: [
        {
          name: 'Myślenie wszystko-albo-nic',
          description: 'Przekonanie, że trening poniżej 45 minut nie ma wartości.',
          impact: 'Wcześniejsze porzucanie prób z powodu nierealistycznych wymagań.'
        }
      ],
      defenseMechanisms: [],
      emotionalDynamic: 'Spokojna satysfakcja z łatwego sukcesu zamiast lęku przed wycieńczeniem.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowe prążkowie', role: 'Konsolidacja sekwencji ruchowej wyjścia z domu', activationState: 'Stopniowe przejmowanie kontroli nad rutyną' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Małe wyrzuty dopaminowe po udanym oznaczonym nawyku' }
      ],
      biologicalTimeline: [
        { timeMs: '0-200 ms', process: 'Wypicie wody wyzwala sygnał do sięgnięcia po buty' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Przygotowanie Środowiska', script: 'Buty i stroje biegowe leżą przy łóżku od wieczora.', rationale: 'Eliminuje szukanie rzeczy rano.' }
      ]
    },
    keyTakeaway: 'Najpierw zbuduj nawyk pojawiania się, a dopiero potem go optymalizuj.'
  },
  {
    id: 'cs-23-4',
    title: 'Szkodliwy Nawyk Prokrastynacji w Dzespole Projektowym',
    subtitle: 'Jak wzorce środowiskowe i brak jasnych pętli zwrotnych utrwalają opóźnienia',
    protagonist: 'Piotr (31 lat, Lead Developer)',
    context: 'Praca w zespole IT z luźnymi terminami i brakiem bieżącego weryfikowania postępów.',
    story: [
      'Piotr dostawał zadanie na okres 2 tygodni. Przez pierwsze 10 dni nie podejmował żadnych prac, zajmując się drobnymi, nieistotnymi zadaniami.',
      'Dopiero gdy termin zbliżał się do 48 godzin, pojawiał się gwałtowny impuls stresu, zmuszający go do pracy nocami.',
      'Wzorzec ten powtarzał się od 3 lat we wszystkich projektach.'
    ],
    decisionTaken: 'Poleganie na odroczonej presji zewnętrznej zamiast podziału zadania na małe pętle zwrotne.',
    whatProtagonistSaw: 'Piotr twierdził, że "najlepiej pracuje pod presją czasu".',
    whatWasMissed: 'Praca w stresie rodziła liczne błędy w kodzie, a "praca pod presją" była w rzeczywistości nawykową ucieczką przed trudnością początkowego etapu projektowania.',
    psychologicalAnalysis: {
      coreMechanism: 'Panic-Driven Execution Loop — wzorzec, w którym jedynym bodźcem zdolnym do przełamania oporu jest strach przed konsekwencjami.',
      cognitiveBiases: [
        {
          name: 'Błąd planowania (Planning Fallacy)',
          description: 'Niedoszacowanie czasu potrzebnego na wykonanie złożonego kodu.',
          impact: 'Odkladanie startu na ostatnie chwile.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Intelektualizacja',
          explanation: 'Tworzenie teorii o własnej "efektywności w kryzysie".'
        }
      ],
      emotionalDynamic: 'Lęk przed rozpoczęciem zastępowany ulgą paniki, a potem wyczerpaniem.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Sygnalizacja zagrożenia zbliżającym się terminem', activationState: 'Maksymalna aktywacja na 48h przed deadlinem' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Adrenalina', roleInScenario: 'Zmuszanie wyczerpanego organizmu do pracy w nocy' }
      ],
      biologicalTimeline: [
        { timeMs: '0-500 ms', process: 'Otwarcie pliku projektu wywołuje niepokój, co skutkuje ucieczką w sprawdzanie poczty' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Codzienne Mikropętle (Daily Standup)', script: 'Rozbijam zadanie na kawałki po 30 minut i raportuję jeden mikrokrok dziennie.', rationale: 'Dostarcza stałego punktu odniesienia.' }
      ]
    },
    keyTakeaway: 'Nie czekaj na presję — stwórz małe codzienne punkty kontrolne.'
  },
  {
    id: 'cs-23-5',
    title: 'Automatyczne Sięganie po Papierosa / Vape w Sytuacjach Towarzyskich',
    subtitle: 'Kontekst społeczny i wzmocnienie współdzielone jako wyzwalacz wzorca',
    protagonist: 'Tomasz (29 lat, specjalista ds. marketingu)',
    context: 'Imprezy firmowe i wyjścia ze znajomymi do lokali.',
    story: [
      'Tomasz na co dzień nie pali papierosów od 2 lat. Jednak gdy wychodzi do pubu i widzi znajomych wychodzących "na dymka", natychmiast czuje nieprzepierzoną chęć dołączenia.',
      'W automatyczny sposób prosi o papierosa i pali. Następnego dnia odczuwa żal i wyrzuty sumienia.',
      'Twierdzi: "W domu w ogóle nie mam ochoty, ale wśród ludzi po prostu nie potrafię odmówić".'
    ],
    decisionTaken: 'Uleganie środowiskowej i społecznej wskazówce kontekstowej bez wcześniejszego przygotowania planu If-Then.',
    whatProtagonistSaw: 'Tomasz uważał, że "słaby alkohol wyłącza jego silną wolę".',
    whatWasMissed: 'Nie zauważył, że wyjście na papierosa było wyuczonym nawykiem nawiązywania relacji i przynależności do grupy.',
    psychologicalAnalysis: {
      coreMechanism: 'Context-Dependent Social Habit — bodźce społeczne i miejsce uruchamiają utrwalony skrypt behawioralny.',
      cognitiveBiases: [
        {
          name: 'Konformizm normatywny',
          description: 'Chęć dopasowania się do zachowania grupy.',
          impact: 'Automatyczne powielanie zachowań znajomych.'
        }
      ],
      defenseMechanisms: [],
      emotionalDynamic: 'Lęk przed wykluczeniem zastępowany wspólnym rytuałem.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Kora zakrętu obręczy', role: 'Rejestracja potrzeby przynależności grupowej', activationState: 'Wzmocniona w kontekście pubu' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Oczekiwanie na nagrodę społeczną i nikotynową' }
      ],
      biologicalTimeline: [
        { timeMs: '0-200 ms', process: 'Widok wychodzącej grupy aktywuje nawykowy skrypt podążania' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Plan If-Then', script: 'Jeśli znajomi wychodzą na zewnątrz, to biorę ze sobą szklankę wody z lodem i wychodzę porozmawiać bez palenia.', rationale: 'Zachowuje nagrodę społeczną bez szkodliwej rutyny.' }
      ]
    },
    keyTakeaway: 'Zmień rutynę, zachowując nagrodę społeczną.'
  },
  {
    id: 'cs-23-6',
    title: 'Nawykowe Sprawdzanie Wiadomości / Newsów o Poranku',
    subtitle: 'Poranna pętla dopaminowa niszcząca architekturę dnia',
    protagonist: 'Karolina (35 lat, prawniczka)',
    context: 'Pierwsze 15 minut po wybudzeniu w sypialni.',
    story: [
      'Karolina budzi się o 6:30. Jej pierwszy ruch ręki to sięgnięcie po smartfon leżący na szafce nocnej, który służy jako budzik.',
      'Sprawdza maile służbowe, portale informacyjne i media społecznościowe. Po 20 minutach wstaje z łóżka ze ściskiem w żołądku, poczuciem zagrożenia i zmęczeniem.',
      'Mimo że wie, iż to psuje jej poranek, robi to codziennie od roku.'
    ],
    decisionTaken: 'Używanie smartfona jako budzika, co stawia bodziec nawykowy w zasięgu 5 cm od dłoni w stanie wybudzania.',
    whatProtagonistSaw: 'Sądziła, że "musi być na bieżąco ze względu na pracę".',
    whatWasMissed: 'Poranne sprawdzanie serwisów wstrzykiwało kortyzol i rozpraszało zasoby uwagi zanim w ogóle wstała z łóżka.',
    psychologicalAnalysis: {
      coreMechanism: 'Morning Dopamine Spike & Threat Orienting — skanowanie zagrożeń od pierwszej minuty po wybudzeniu.',
      cognitiveBiases: [
        {
          name: 'Skrzywienie ku negatywności (Negativity Bias)',
          description: 'Szukanie złych wieści i zagrożeń jako nawyk przetrwaniowy.',
          impact: 'Stan ciągłej czujności.'
        }
      ],
      defenseMechanisms: [],
      emotionalDynamic: 'Wzrost niepokoju i poczucie przytłoczenia od samego rana.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Siatkowaty układ wzbudzający (RAS)', role: 'Gwałtowne przełączenie w stan czujności', activationState: 'Nadmiernie stymulowany bodźcami cyfrowymi' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Dodatkowy wyrzut hormonu stresu na widok naglących maili' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Wyłączenie budzika przechodzi płynnie w otwarcie aplikacji mailowej' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Powiadomienia push', description: 'Czerwone kropki przyciągające uwagę', vulnerabilityExploited: 'Poranna podatność uwagi' }
      ],
      counterMeasures: [
        { step: 'Kupno Tradycyjnego Budzika', script: 'Telefon ładuje się w salonie, budzi mnie klasyczny budzik.', rationale: 'Eliminuje wyzwalacz z sypialni.' }
      ]
    },
    keyTakeaway: 'Chroń pierwsze 30 minut poranka przed obcymi bodźcami.'
  },
  {
    id: 'cs-23-7',
    title: 'Nawyk Zakupowy pod Wpływem Wyprzedaży i Promocji',
    subtitle: 'Gdy iluzja oszczędności staje się automatycznym pocieszycielem',
    protagonist: 'Agata (30 lat, księgowa)',
    context: 'Przeglądanie aplikacji zakupowych w telefonie późnym wieczorem.',
    story: [
      'Agata co wieczór otwierając aplikacje sklepowe, przegląda sekcje "Promocje dnia". Kupuje ubrania i dodatki, których nie potrzebuje, ciesząc się z "okazji".',
      'Paczki piętrzą się w przedpokoju, a jej oszczędności kurczą się z miesiąca na miesiąc.',
      'Po zakupie czuje gwałtowną radość, po której szybko następuje rozczarowanie i wstyd.'
    ],
    decisionTaken: 'Traktowanie promocji jako darmowej nagrody emocjonalnej bez analizy kosztów.',
    whatProtagonistSaw: 'Agata uważała, że "oszczędza pieniądze, kupując na wyprzedażach".',
    whatWasMissed: 'Proces kupowania był nawykową reakcją na nudę i brak ekscytacji w ciągu dnia.',
    psychologicalAnalysis: {
      coreMechanism: 'Compulsive Bargain Hunting Loop — polowanie na okazje jako źródło łatwych skoków dopaminowych.',
      cognitiveBiases: [
        {
          name: 'Efekt kotwiczenia',
          description: 'Sugerowanie się pierwotną wyższą ceną.',
          impact: 'Postrzeganie zakupu jako zysku, a nie wydatku.'
        }
      ],
      defenseMechanisms: [],
      emotionalDynamic: 'Ekscytacja polowaniem przechodząca w poczucie winy po podliczeniu konta.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Prążkowie i VTA', role: 'Generowanie dopaminowego podniecenia na widok przekreślonej ceny', activationState: 'Wysoki wyrzut' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Antycypacja nagrody przed kliknięciem "Kup teraz"' }
      ],
      biologicalTimeline: [
        { timeMs: '0-200 ms', process: 'Czerwona etykieta "-50%" aktywuje obwód nagrody' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Sztuczna rzadkość i licznik czasu', description: 'Odpliczanie promocji', vulnerabilityExploited: 'Lęk przed pominięciem (FOMO)' }
      ],
      counterMeasures: [
        { step: 'Kwarantanna Zakupowa (Reguła 48 godzin)', script: 'Dodaję do koszyka, ale odczekuję 48 godzin przed płatnością.', rationale: 'Pozwala dopaminie opaść i przywraca chłodny osąd.' }
      ]
    },
    keyTakeaway: 'Odpnij podpiętą kartę i wprowadź 48-godzinny czas chłodzenia.'
  },
  {
    id: 'cs-23-8',
    title: 'Wzorzec Automatycznej Defensywności w Małżeństwie',
    subtitle: 'Nawykowa odpowiedź atakiem na każdą uwagą partnera',
    protagonist: 'Krzysztof (40 lat) i Małgorzata (38 lat)',
    context: 'Codzienne rozmowy domowe dotyczące obowiązków i organizacji życia.',
    story: [
      'Gdy Małgorzata mówi: "Krzysztofie, czy mógłbyś wynieść śmieci?", Krzysztof natychmiast odpowiada podniesionym głosem: "A czy ty wyniosłaś swoje rzeczy z przedpokoju?! Zawsze się do mnie czepiasz!".',
      'Reakcja Krzysztofa następuje w ułamku sekundy, zanim w ogóle pomyśli o treści prośby.',
      'Po kłótni Krzysztof żałuje swojego wybuchu, ale w kolejnej sytuacji reaguje dokładnie tak samo.'
    ],
    decisionTaken: 'Automatyczne uruchomienie skryptu obronnego w odpowiedzi na odczute zagrożenie statusowe.',
    whatProtagonistSaw: 'Krzysztof uważał, że żona "stale go krytykuje i nim dyryguje".',
    whatWasMissed: 'Nie dostrzegał, że jego reakcja była utrwalonym nawykiem z dzieciństwa, w którym każda uwaga oznaczała karę.',
    psychologicalAnalysis: {
      coreMechanism: 'Automatic Defensive Script — wyuczony wzorzec ochrony ego przed wyobrażonym atakiem.',
      cognitiveBiases: [
        {
          name: 'Bias wrogości',
          description: 'Przypisywanie partnerce negatywnych intencji.',
          impact: 'Konieczność natychmiastowej obrony.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Projekcja',
          explanation: 'Oskarżanie drugiej strony o własną agresję.'
        }
      ],
      emotionalDynamic: 'Błyskawiczny skok natężenia złości i zerwanie poczucia bliskości.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Natychmiastowe wykrycie zagrożenia w tonie głosu', activationState: 'Hiperaktywne' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Mobilizacja do natychmiastowej riposty' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Odebranie pytania jako oskarżenia i skurcz klatki piersiowej' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Pauza Mikrosekundowa (3 Sekundy)', script: 'Słysząc prośbę, biorę wdech i odczekuję 3 sekundy przed odpowiedzią.', rationale: 'Daje czas korze przedczołowej na przejęcie steru.' }
      ]
    },
    keyTakeaway: 'Stwórz przestrzeń między bodźcem a reakcją za pomocą 3-sekundowego wydechu.'
  }
];

export const selfExercisesChapterTwentyThree: SelfExercise[] = [
  {
    id: 'ex-23-1',
    title: 'Audyt Pętli Nawyku (Wskazówka - Rutyna - Nagroda)',
    subtitle: 'Zidentyfikuj ukryte elementy swojego automatycznego zachowania',
    objective: 'Rozłożenie wybranego nawyku na czynniki pierwsze i odnalezienie jego rzeczywistej biologicznej/emocjonalnej funkcji.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Świadoma dekonstrukcja sekwencji aktywuje korę przedczołową, przenosząc kontrolę z jąder podstawy do obszarów zarządczych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór Zachowania',
        instruction: 'Wybierz jedno powtarzalne zachowanie, które chcesz poddać analizie.',
        promptText: 'Jakie zachowanie chcesz przeanalizować?',
        placeholder: 'np. Sięganie po słodycze po powrocie z pracy...'
      },
      {
        stepNumber: 2,
        title: 'Detekcja Wskazówki (Bodźca)',
        instruction: 'Opisz dokładnie moment poprzedzający: Gdzie jesteś? Która jest godzina? Jaki jest Twój stan emocjonalny? Kto jest obok?',
        promptText: 'Co dokładnie wyzwala to zachowanie?',
        placeholder: 'np. Godzina 18:00, zmęczenie po pracy, wejście do pustej kuchni...'
      },
      {
        stepNumber: 3,
        title: 'Identyfikacja Prawdziwej Nagrody',
        instruction: 'Co naprawdę czujesz tuż po wykonaniu działania? Jaką korzyść (ulga, odprężenie, odwrócenie uwagi) dostaje Twój mózg?',
        promptText: 'Jaka jest rzeczywista nagroda dla Twojego układu nerwowego?',
        placeholder: 'np. Chwilowa ulga od napięcia i wyciszenie myśli o pracy...'
      }
    ],
    reflectionQuestions: [
      'Czy dotychczas myliłeś obiekt zachowania z jego prawdziwą funkcją?',
      'Jakie inne, zdrowsze działanie mogłoby dostarczyć dokładnie tej samej nagrody?'
    ]
  },
  {
    id: 'ex-23-2',
    title: 'Projektowanie Środowiska i Modyfikacja Tarcia',
    subtitle: 'Zwiększ opór dla złych nawyków i zmniejsz dla pożądanych',
    objective: 'Stworzenie fizycznej architektury przestrzeni, która wspiera pożądane wybory bez zużywania siły woli.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Usuwanie wyzwalaczy z pola widzenia zapobiega przedwczesnemu wyładowaniu dopaminowemu w prążkowiu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zwiększenie Tarcia dla Złego Nawyku (+10 Sekund)',
        instruction: 'Wybierz niepożądany nawyk i zaplanuj modyfikację otoczenia, która doda co najmniej 2-3 kroki lub 10 sekund oporu.',
        promptText: 'Jak zwiększysz tarcie dla niepożądanego działania?',
        placeholder: 'np. Wyloguję się z aplikacji i schowam telefon do szuflady w drugim pokoju...'
      },
      {
        stepNumber: 2,
        title: 'Zmniejszenie Tarcia dla Dobrego Nawyku (-10 Sekund)',
        instruction: 'Wybierz pożądany nawyk i przygotuj środowisko tak, aby rozpoczęcie wymagało tylko 1 kroku.',
        promptText: 'Jak ułatwisz start pożądanego działania?',
        placeholder: 'np. Przygotuję matę do ćwiczeń i stroje na środku pokoju wieczorem...'
      }
    ],
    reflectionQuestions: [
      'O ile łatwiejsze staje się działanie, gdy nie musisz szukać potrzebnych rzeczy?',
      'Jakie elementy Twojego otoczenia najbardziej przeszkadzają Ci w skupieniu?'
    ]
  },
  {
    id: 'ex-23-3',
    title: 'Inżynieria Planów If-Then (Intencje Implementacyjne)',
    subtitle: 'Zaprogramuj automatyczne odpowiedzi na trudne sytuacje',
    objective: 'Stworzenie gotowych algorytmów decyzyjnych w formacie "Jeśli zdarzy się X, to zrobię Y".',
    durationMinutes: 15,
    neuroScientificFoundation: 'Plany If-Then kodują intencję w pamięci perspektywicznej, umożliwiając bezwysiłkową egzekucję w momencie wystąpienia bodźca.',
    steps: [
      {
        stepNumber: 1,
        title: 'Określenie Sytuacji Wyzwalającej (If)',
        instruction: 'Zidentyfikuj konkretną przeszkodę, pokusę lub moment w ciągu dnia.',
        promptText: 'Jeśli zdarzy się sytuacja X (podaj czas, miejsce, bodziec)...',
        placeholder: 'np. Jeśli poczuję chęć sięgnięcia po przekąskę między posiłkami...'
      },
      {
        stepNumber: 2,
        title: 'Określenie Precyzyjnego Działania (Then)',
        instruction: 'Zapisz natychmiastową, prostą i wykonalną reakcję zastępczą.',
        promptText: '...To natychmiast zrobię Y:',
        placeholder: 'np. ...to wypiję pełną szklankę wody i zrobię 10 głębokich oddechów.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego precyzyjne sformułowanie warunku "Jeśli" jest tak ważne dla mózgu?',
      'W jakich 3 najważniejszych momentach dnia potrzebujesz planu If-Then?'
    ]
  },
  {
    id: 'ex-23-4',
    title: 'Protokół Dwu-Minutowy i Technika Mikrokroków',
    subtitle: 'Przełam opór początkowy bez aktywowania lęku w ciele migdałowatym',
    objective: 'Skróć nowe zachowanie do wersji trwającej maksymalnie 2 minuty, aby utrwalić samą rutynę pojawiania się.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Bardzo małe zadanie nie wywołuje postrzeganego zagrożenia ani oporu w korze przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Definicja Pełnego Nawyku',
        instruction: 'Zapisz docelowe, duże zachowanie, które chcesz zbudować.',
        promptText: 'Jaki jest Twój docelowy nawyk?',
        placeholder: 'np. Czytanie książki przez 1 godzinę dziennie...'
      },
      {
        stepNumber: 2,
        title: 'Skrócenie do Wersji 2-Minutowej',
        instruction: 'Sprowadź to działanie do mikrokroku, który zajmuje mniej niż 120 sekund.',
        promptText: 'Jak brzmi wersja 2-minutowa tego nawyku?',
        placeholder: 'np. Przeczytanie dokładnie jednej strony książki po położeniu się do łóżka...'
      }
    ],
    reflectionQuestions: [
      'Dlaczego regularne wykonywanie wersji 2-minutowej jest ważniejsze niż sporządzanie ambitnych planów?',
      'Jak czujesz się z tym, że masz prawo przestać po 2 minutach?'
    ]
  },
  {
    id: 'ex-23-5',
    title: 'Transformacja Tożsamościowa i Nawyk Pamiętnikowy',
    subtitle: 'Zmień narrację o sobie na podstawie codziennych małych dowodów',
    objective: 'Połączenie wykonywanych nawyków z budowaniem nowej, wspierającej tożsamości.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Mózg dąży do spójności między autodefinicją w DMN a rejestrowanymi zachowaniami.',
    steps: [
      {
        stepNumber: 1,
        title: 'Sformułowanie Deklaracji Tożsamościowej',
        instruction: 'Napisz zdanie: "Jestem osobą, która..." dotyczące wybranego obszaru życia.',
        promptText: 'Kim chcesz się stać poprzez swoje nawyki?',
        placeholder: 'np. Jestem osobą, która szanuje swój czas i dba o sprawność umysłu...'
      },
      {
        stepNumber: 2,
        title: 'Rejestracja Dzisiejszego Dowodu',
        instruction: 'Zapisz jedno drobne działanie z dzisiaj, które stanowi dowód na potwierdzenie tej tożsamości.',
        promptText: 'Jaki mały dowód dostarczyłeś dzisiaj swojemu umysłowi?',
        placeholder: 'np. Odrzuciłem powiadomienia i pracowałem w skupieniu przez 25 minut...'
      }
    ],
    reflectionQuestions: [
      'Jak myślenie w kategoriach "kim jestem" zmienia Twoją motywację do działania?',
      'Jakie stare etykiety o sobie musisz porzucić, aby zrobić miejsce dla nowych nawyków?'
    ]
  },
  {
    id: 'ex-23-6',
    title: 'Projektowanie Systemu i Diagnostyka Porażek',
    subtitle: 'Przeanalizuj nieudaną próbę bez oceniania siebie',
    objective: 'Identyfikacja słabego ogniwa w systemie nawykowym po potknięciu i wprowadzenie korekty architektonicznej.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Analiza niepowodzenia z pozycji obserwatora (metapoznanie) wygasza wstyd i aktywuje uczenie się na błędach.',
    steps: [
      {
        stepNumber: 1,
        title: 'Opis Potknięcia / Porażki',
        instruction: 'Zapisz sytuację, w której nawyk się załamał.',
        promptText: 'Co się wydarzyło?',
        placeholder: 'np. Miał być trening o 18:00, a spędziłem ten czas na kanapie...'
      },
      {
        stepNumber: 2,
        title: 'Diagnostyka Ogniwa Systemu',
        instruction: 'Gdzie leżał problem: Wskazówka była niewidoczna? Tarcie było za duże? Nagroda była za słaba? Byłeś za bardzo zmęczony?',
        promptText: 'Który element systemu zawiódł?',
        placeholder: 'np. Tarcie było za duże — musiałem szukać ubrań i szykować torbę w stanie zmęczenia...'
      },
      {
        stepNumber: 3,
        title: 'Korekta Architektury',
        instruction: 'Jaki jeden element zmienisz w środowisku lub planie na następny raz?',
        promptText: 'Moja konkretna zmiana w systemie:',
        placeholder: 'np. Torbę na trening spakuję rano i zostawię w samochodzie...'
      }
    ],
    reflectionQuestions: [
      'Dlaczego traktowanie niepowodzenia jako informacji o systemie jest bardziej użyteczne niż obwinianie siebie?',
      'Jakie wnioski z tej analizy możesz zastosować w innych obszarach życia?'
    ]
  },
  {
    id: 'ex-23-7',
    title: 'Metoda Łączenia Nawyków (Habit Stacking)',
    subtitle: 'Zakotwicz nowe zachowanie w utrwalonym schemacie dnia',
    objective: 'Wykorzystanie istniejącej rutyny jako automatycznego wyzwalacza dla nowego działania.',
    durationMinutes: 12,
    neuroScientificFoundation: 'Istniejące obwody neuronalne w jądrach podstawy stanowią stabilną platformę dla podpinania nowych synaps.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór Kotwicy (Utrwalonego Nawyku)',
        instruction: 'Zapisz czynność, którą robisz codziennie bezwyjątkowo (np. mycie zębów, parzenie kawy, włączanie komputera).',
        promptText: 'Jaki jest Twój niezawodny nawyk-kotwica?',
        placeholder: 'np. Wypicie pierwszej szklanki wody po porannym wstaniu...'
      },
      {
        stepNumber: 2,
        title: 'Formuła Podpięcia',
        instruction: 'Napisz zdanie: "Po tym, jak [Kotwica], wykonam [Nowy Nawyk]".',
        promptText: 'Jak brzmi Twoja nowa sekwencja?',
        placeholder: 'np. Po wypiciu szklanki wody wykonam 2 minuty rozciągania kręgosłupa.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego podpinanie nawyku pod istniejącą rutynę jest skuteczniejsze niż wyznaczanie samej godziny w zegarku?',
      'Ile takich pętli możesz ze sobą połączyć w poranny lub wieczorny rytuał?'
    ]
  },
  {
    id: 'ex-23-8',
    title: 'Karta Pomiary i Monitorowania Postępów',
    subtitle: 'Uruchom reaktywność pomiarową bez presji na perfekcję',
    objective: 'Stworzenie prostego systemu odnotowywania wykonania nawyku w celu wzmocnienia poczucia sprawczości.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Wizualny sygnał sukcesu (odznaczenie w kalendarzu) dostarcza natychmiastowego wyrzutu dopaminy i zamyka pętlę uczenia się.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zasada "Nigdy Nie Opuszczaj Dwu Razy z Rzędu"',
        instruction: 'Zaakceptuj, że potknięcie się zdarzy. Ustal żelazną regułę: po jednym opuszczonym dniu natychmiast wracasz do nawyku.',
        promptText: 'Jak zareagujesz, gdy zdarzy Ci się opuścić jeden dzień?',
        placeholder: 'np. Nie obwiniam się, ale następnego dnia wykonuję chociaż wersję 2-minutową...'
      },
      {
        stepNumber: 2,
        title: 'Wybór Formaty Monitorowania',
        instruction: 'Wybierz najprostszą formę śledzenia: papierowy kalendarz na ścianie, aplikacja, czy notatnik.',
        promptText: 'Gdzie będziesz zaznaczać codzienne wykonanie?',
        placeholder: 'np. Papierowy kalendarz na biurku — skreślanie dnia czerwonym markerem.'
      }
    ],
    reflectionQuestions: [
      'Jak widok serii udanych dni wpływa na Twoją motywację w trudniejsze dni?',
      'Dlaczego zasada nieopuszczania dwa razy z rzędu chroni przed całkowitym rozpadem systemu?'
    ]
  },
  {
    id: 'ex-23-9',
    title: 'Podmiana Rutyny przy Zachowaniu Wskazówki i Nagrody',
    subtitle: 'Zastosuj Złotą Regułę Zmiany Nawyku w praktyce',
    objective: 'Zastąpienie szkodliwego nawyku nową rutyną dostarczającą tej samej ulgi biologicznej.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Ścieżki neuronalne dawnego nawyku nie znikają całkowicie; nowa rutyna tworzy silniejszą ścieżkę alternatywną.',
    steps: [
      {
        stepNumber: 1,
        title: 'Nienaruszalna Wskazówka i Nagroda',
        instruction: 'Przepisz wskazówkę i nagrodę zebraną w Ćwiczeniu 23.1.',
        promptText: 'Wskazówka oraz Nagroda:',
        placeholder: 'Wskazówka: Znużenie o 15:00 w biurze. Nagroda: Przerwa i zmiana bodźców.'
      },
      {
        stepNumber: 2,
        title: 'Nowa Zastępcza Rutyna',
        instruction: 'Zaproponuj zdrową rutynę, która idealnie zaspokoi tę samą nagrodę.',
        promptText: 'Jaka będzie nowa rutyna?',
        placeholder: 'np. 5-minutowy spacer po korytarzu i rozmowa z kolegą zamiast wyjścia na papierosa.'
      }
    ],
    reflectionQuestions: [
      'Czy nowa rutyna jest wystarczająco łatwa do wykonania w trudnym momencie?',
      'Jak przetestujesz tę podmianę w ciągu najbliższych 3 dni?'
    ]
  },
  {
    id: 'ex-23-10',
    title: 'Konstruktor Holistycznego Systemu Nawykowego',
    subtitle: 'Połącz środowisko, tożsamość, mikro-kroki i monitorowanie w jedną całość',
    objective: 'Stworzenie kompletnej mapy jednego kluczowego nawyku na najbliższe 30 dni.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Holistyczny plan angażuje Sieć Kontroli Zarządczej (FPN) i obwody pamięci perspektywicznej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Nawyk Kluczowy (Keystone Habit)',
        instruction: 'Wybierz jeden nawyk, którego zmiana wywoła pozytywny efekt kaskadowy w całym Twoim życiu.',
        promptText: 'Jaki jest Twój nawyk kluczowy?',
        placeholder: 'np. Kładzenie się spać o 22:30 bez telefonu w sypialni...'
      },
      {
        stepNumber: 2,
        title: 'Kompletny Projekt Systemu',
        instruction: 'Zapisz: 1) Tożsamość, 2) Środowisko (tarcie), 3) Wersję 2-minutową, 4) Plan If-Then, 5) Sposób monitorowania.',
        promptText: 'Twój pełny projekt systemu:',
        placeholder: '1) Jestem osobą regenerującą się. 2) Telefon ładuje się w salonie. 3) Wersja 2-min: położenie się do łóżka o 22:30. 4) Jeśli mam ochotę sprawdzić maile, czytam książkę. 5) Zaznaczam X w kalendarzu.'
      }
    ],
    reflectionQuestions: [
      'Jak wykonanie tego jednego nawyku wpłynie na Twoją energię, relacje i pracę?',
      'Jaki jest pierwszy krok, który zrobisz w ciągu najbliższych 60 minut?'
    ]
  }
];

export const chapterTwentyThreeExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii behawioralnej i kognitywnej różnica między nawykiem a rutyną polega na tym, że:',
    topic: 'Nawyk vs Rutyna',
    sectionRef: 'Sekcja 23.1',
    options: [
      { label: 'A', text: 'Nawyk to automatyczna reakcja uruchamiana bezrefleksyjnie przez kontekst/bodziec, podczas gdy rutyna wymaga intencjonalnego wysiłku i świadomej inicjacji.', isCorrect: true },
      { label: 'B', text: 'Nawyk dotyczy tylko jedzenia, a rutyna dotyczy tylko sportu.', isCorrect: false },
      { label: 'C', text: 'Rutyna trwa dokładnie 21 dni, a nawyk powstaje w 5 sekund.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy pojęciowej.', isCorrect: false }
    ],
    explanation: 'Rutyna może być powtarzalna, ale wymaga świadomego zamiaru (np. poranny trening na siłowni, do którego musimy się zmotywować). Nawyk zachodzi automatycznie pod wpływem bodźca (np. zapięcie pasów w samochodzie).',
    keyTakeaway: 'Rutyna wymaga wysiłku intencjonalnego; nawyk jest uruchamiany automatycznie przez kontekst.'
  },
  {
    id: 2,
    question: 'Jaką rolę w powstawaniu nawyków odgrywa pętla dopaminowa i błąd przewidywania nagrody (Reward Prediction Error)?',
    topic: 'Neuronauka Dopaminy w Nawykach',
    sectionRef: 'Sekcja 23.9',
    options: [
      { label: 'A', text: 'Dopamina jest wyzwalana wyłącznie w momencie konsumowania nagrody i daje poczucie błogostanu.', isCorrect: false },
      { label: 'B', text: 'Dopamina przesuwa się z momentu otrzymania nagrody na moment dostrzeżenia BODŹCA, generując pragnienie i napędzając działanie przed nastąpieniem nagrody.', isCorrect: true },
      { label: 'C', text: 'Dopamina blokuje powstawanie ścieżek pamięciowych w jądrach podstawy.', isCorrect: false },
      { label: 'D', text: 'Dopamina wydziela się tylko podczas snu głębokiego.', isCorrect: false }
    ],
    explanation: 'Dopamina nie jest hormonem przyjemności konsumpcyjnej, lecz neuroprzekaźnikiem motywacji i antycypacji. Po utrwaleniu nawyku wyrzut dopaminy następuje na widok wskazówki, zmuszając organizm do wykonania rutyny.',
    keyTakeaway: 'Dopamina napędza poszukiwanie i antycypację nagrody, a nie samą przyjemność płynącą z jej skonsumowania.'
  },
  {
    id: 3,
    question: 'Na czym polega zasada "tarcia behawioralnego" (Behavioral Friction) w projektowaniu zachowań?',
    topic: 'Tarcie Behawioralne i Architektura Środowiska',
    sectionRef: 'Sekcja 23.13',
    options: [
      { label: 'A', text: 'Mierzy poziom tarcia skóry o odzież podczas biegania.', isCorrect: false },
      { label: 'B', text: 'Określa liczbę kroków, sekund lub przeszkód poznawczo-fizycznych potrzebnych do rozpoczęcia danego działania.', isCorrect: true },
      { label: 'C', text: 'Dotyczy konfliktów międzyludzkich w zespole.', isCorrect: false },
      { label: 'D', text: 'Oznacza opór mięśniowy przy podnoszeniu ciężarów.', isCorrect: false }
    ],
    explanation: 'Nawet drobne tarcie (np. konieczność wpisania hasła, wyjęcia rzeczy z szafy) potrafi skutecznie zablokować pożądane zachowanie lub powstrzymać niepożądane.',
    keyTakeaway: 'Zmniejszaj tarcie dla dobrych nawyków i zwiększaj dla niepożądanych.'
  },
  {
    id: 4,
    question: 'Dlaczego metody polegające na "po prostu przestań to robić" (czysta tłumienność) zazwyczaj kończą się porażką?',
    topic: 'Zastępowanie Nawyku vs Tłumienie',
    sectionRef: 'Sekcja 23.15',
    options: [
      { label: 'A', text: 'Ponieważ ścieżki neuronalne nawyku w jądrach podstawy nie znikają, a układ nerwowy nadal potrzebuje zrealizowania funkcji/nagrody, którą to zachowanie dostarczało.', isCorrect: true },
      { label: 'B', text: 'Ponieważ ludzie nie potrafią pamiętać o swoich postanowieniach dłużej niż 3 minuty.', isCorrect: false },
      { label: 'C', text: 'Ponieważ tłumienie niszczy hipokamp w ciągu 24 godzin.', isCorrect: false },
      { label: 'D', text: 'Ponieważ nawyki są w 100% zapisane w DNA.', isCorrect: false }
    ],
    explanation: 'Skuteczna zmiana nawyku wymaga zachowania dawnej wskazówki i dawnej nagrody przy jednoczesnym podmienieniu samej rutyny działania (Złota Reguła Zmiany Nawyku).',
    keyTakeaway: 'Nie usuwaj nawyku — podmień rutynę, dając układowi nerwowemu tę samą biologiczną nagrodę.'
  },
  {
    id: 5,
    question: 'Jaką funkcję w budowaniu nawyków pełnią intencje implementacyjne (Plany If-Then Peter Gollwitzera)?',
    topic: 'Plany If-Then',
    sectionRef: 'Sekcja 23.21',
    options: [
      { label: 'A', text: 'Odciążają korę przedczołową, kodując w pamięci perspektywicznej automatyczny wyzwalacz: "Jeśli pojawi się sytuacja X, natychmiast wykonam Y".', isCorrect: true },
      { label: 'B', text: 'Zmuszają do pisania długich esejów filozoficznych co wieczór.', isCorrect: false },
      { label: 'C', text: 'Służą do wyliczania podatku dochodowego.', isCorrect: false },
      { label: 'D', text: 'Działają tylko u osób z wyższym wykształceniem.', isCorrect: false }
    ],
    explanation: 'Plany If-Then przenoszą kontrolę ze świadomego namysłu na automatyczne rozpoznawanie bodźca przez środowisko, co dramatycznie podnosi wskaźnik realizacji intencji.',
    keyTakeaway: 'Sformułowanie jasnego planu "Jeśli-To" pozwala ominąć wahanie w krytycznym momencie.'
  },
  {
    id: 6,
    question: 'Dlaczego powszechne przekonanie, że "nawyk powstaje dokładnie w 21 dni" jest popularnym mitem?',
    topic: 'Błędna Intuicja Czasowa',
    sectionRef: 'Sekcja 23.18 i Błędna Intuicja',
    options: [
      { label: 'A', text: 'Ponieważ badania Phillippy Lally pokazują, że czas automatyzacji wynosi od 18 do 254 dni w zależności od złożoności zachowania, cech jednostki i kontekstu.', isCorrect: true },
      { label: 'B', text: 'Ponieważ nawyki powstają zawsze w dokładnie 3 dni.', isCorrect: false },
      { label: 'C', text: 'Ponieważ nawyków nie da się w ogóle zmierzyć w czasie.', isCorrect: false },
      { label: 'D', text: 'Ponieważ 21 dni dotyczy tylko zwierząt laboratoryjnych.', isCorrect: false }
    ],
    explanation: 'Mit 21 dni narósł wokół nadinterpretacji obserwacji chirurga Maxwella Maltza. Rzeczywisty czas utrwalania ścieżki zależy od trudności zadania i liczby powtórzeń.',
    keyTakeaway: 'Czas budowania nawyku jest zmienny — kluczowa jest powtarzalność w stałym kontekście, a nie sztywna liczba dni.'
  },
  {
    id: 7,
    question: 'W jaki sposób tożsamość ("Jestem osobą, która...") wpływa na trwałość nawyków?',
    topic: 'Tożsamość a Nawyki',
    sectionRef: 'Sekcja 23.23',
    options: [
      { label: 'A', text: 'Zachowanie zbieżne z definicją samego siebie nie wymaga stałej walki z oporem, ponieważ mózg dąży do spójności między autodefinicją a działaniem.', isCorrect: true },
      { label: 'B', text: 'Tożsamość uniemożliwia jakąkolwiek zmianę nawyków po 20 roku życia.', isCorrect: false },
      { label: 'C', text: 'Tożsamość to pojęcie wyłącznie prawne i nie ma związku z psychologią.', isCorrect: false },
      { label: 'D', text: 'Samo powtarzanie afirmacji przed lustrem wystarczy do budowania nawyków bez działania.', isCorrect: false }
    ],
    explanation: 'Każde wykonane działanie to punkt oddany na określoną tożsamość. Gdy zaczniesz postrzegać siebie jako biegacza czy osobę zorganizowaną, nawyk staje się naturalną ekspresją siebie.',
    keyTakeaway: 'Najtrwalsze są nawyki oparte na tożsamości — działasz w zgodzie z tym, kim jesteś.'
  }
];

export const chapterTwentyThree: Chapter = {
  number: 23,
  title: 'Nawyki — Jak Zachowania Stają Się Częścią Codzienności',
  subtitle: 'Architektura automatyzacji, biochemia dopaminy, rola kontekstu i projektowanie trwałych wzorców życiowych',
  leadParagraph: 'Ponad 40% naszych codziennych decyzji i działań nie wynika z bieżącego, świadomego namysłu kory przedczołowej, lecz jest uruchamianych automatycznie przez obwody jąder podstawy w odpowiedzi na bodźce środowiskowe. Nawyki to ewolucyjny mechanizm oszczędzania energii poznawczej. W tym rozdziale odzieramy nawyki z motywacyjnych mitów, badamy rolę kontekstu, tarcia behawioralnego i biologicznych nagród oraz uczymy się precyzyjnego inżynieryjnego projektowania zachowań, które stają się Twoją nową naturą.',
  totalEstimatedPages: 58,
  sections: [
    // BLOK I — PODSTAWY
    {
      id: 'sec-23-1',
      pageNumber: 1,
      sectionNumber: '23.1',
      title: 'Nawyk To Nie To Samo Co Rutyna — Definicje i Różnice Merytoryczne',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Jesteśmy tym, co powtarzalnie robimy. Doskonałość nie jest więc aktem, lecz nawykiem.',
        author: 'Arystoteles (w ujęciu Willa Duranta)'
      },
      paragraphs: [
        'W języku potocznym pojęcia "nawyk" i "rutyna" stosowane są wymiennie. W psychologii poznawczej i naukach behawioralnych stanowią one jednak fundamentalnie odmienne kategorie procesów zarządczych.',
        'RUTYNA to sekwencja działań powtarzana regularnie, która jednak wymaga intencjonalnej inicjacji, świadomego wysiłku i zaangażowania uwagi kory przedczołowej. Przykładem rutyny jest poranny trening na siłowni, przygotowanie skomplikowanego posiłku czy pisanie raportu o stałej porze — mimo powtarzalności, w każdym z tych przypadków musisz świadomie podjąć decyzję i przełamać początkowy opór.',
        'NAWYK z kolei to zautomatyzowany wzorzec behawioralny, uruchamiany bezrefleksyjnie przez konkretny bodziec lub kontekst środowiskowy, zachodzący z minimalnym udzialem świadomej uwagi (tzw. kontrola automatyczna w jądrach podstawy). Przykładem nawyku jest zapięcie pasów bezpieczeństwa po usadzeniu się w fotelu kierowcy, umycie rąk po wejściu do domu czy sięgnięcie po telefon w odpowiedzi na dźwięk powiadomienia.',
        'Główną cechą wyróżniającą nawyk jest brak konieczności podejmowania świadomej decyzji w momencie startu. Nawyk jest odpowiedzią wyuczoną w procesie wzmacniania: gdy bodziec A pojawia się w środowisku, organizm automatycznie wykonuje działanie B w celu uzyskania nagrody C.'
      ]
    },
    {
      id: 'sec-23-2',
      pageNumber: 3,
      sectionNumber: '23.2',
      title: 'Dlaczego Powtarzamy Te Same Zachowania? — Ekonomia Mózgu i Oszczędność Energii',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Ludzki mózg waży około 2% masy całego ciała, lecz w stanie spoczynku zużywa aż 20% całkowitej energii metabolicznej organizmu (głównie glukozy i tlenu). Kora przedczołowa — siedlisko świadomego myślenia, analizy i podejmowania decyzji — jest najbardziej pożerającą energię strukturą biologiczną.',
        'Gdybyśmy musieli świadomie analizować każdą czynność wykonywaną w ciągu dnia (jak stawiać kroki, jak trzymać widelec, jak rozczesywać włosy, jak wciskać sprzęgło), zasoby naszej kory przedczołowej uległyby wyczerpaniu w ciągu pierwszych dwóch godzin od wybudzenia.',
        'Ewolucja wykształciła więc mechanizm przesunięcia kontroli zarządczej. Gdy zachowanie powtarza się w stałym kontekście i przynosi przewidywalną korzyść, mózg stopniowo przenosi dowodzenie z kory przedczołowej (System 2) do głębokich struktur podkorowych — jąder podstawy, a zwłaszcza prążkowia (Striatum). Process ten nazywamy automatyzacją lub konsolidacją nawyku.'
      ]
    },
    {
      id: 'sec-23-3',
      pageNumber: 5,
      sectionNumber: '23.3',
      title: 'Automatyczne Nie Znaczy Niekontrolowane — Granice i Stopnie Automatyzacji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Jednym z groźnych mitów dotyczących nawyków jest przekonanie, że zachowanie automatyczne zamienia człowieka w całkowicie bezwolnego robota. W rzeczywistości automatyzacja nie jest procesem zero-jedynkowym, lecz ciągłym spektrum o różnych stopniach autonomii.',
        'Wyróżniamy cztery wymiary automatyczności (tzw. Cztery Jeźdźcy Automatyczności Johna Bargha): 1) Brak intencjonalności (start bez świadomego zamiaru), 2) Brak świadomości (wykonanie bez bieżącego monitorowania), 3) Wydajność poznawcza (znikome zużycie uwagi), 4) Trudność w zahamowaniu (gdy sekwencja już wystartuje).',
        'Kora przedczołowa zachowuje możliwość nadrzędnego wetowania (tzw. Free Won\'t) na każdym etapie sekwencji nawykowej, pod warunkiem że w porę zauważysz uruchomienie wzorca. Świadomość metapoznawcza (Rozdział 21) stanowi hamulec bezpieczeństwa dla automatycznych pętli.'
      ]
    },

    // BLOK II — POWSTAWANIE NAWYKÓW
    {
      id: 'sec-23-4',
      pageNumber: 8,
      sectionNumber: '23.4',
      title: 'Powtarzanie i Uczenie Się — Neurobiologia Prążkowia i Plastyczność Synaptyczna',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Na poziomie komórkowym powstawanie nawyku opiera się na regule Donalda Hebba: "Neurony, które wyładowują się razem, łączą się ze sobą" (Neurons that fire together, wire together). Gdy bodziec sensoryczny (np. widok biurka) wielokrotnie współwystępuje z ruchem (sięgnięcie po szklankę wody) i wzmocnieniem dopaminowym, połączenia synaptyczne między korą czuciową, prążkowiem i korą ruchową ulegają wzmocnieniu (Long-Term Potentiation - LTP).',
        'W miarę utrwalania nawyku wzorzec aktywności neuronalnej zmienia swój kształt. Na początku proces wymaga ciągłego wyładowania neuronów w korze przedczołowej przez cały czas trwania czynności. Po automatyzacji aktywacja pojawia się wyłącznie na samym początku (rejestracja bodźca) oraz na samym końcu (odebranie nagrody) — środek sekwencji przebiega na podkorowym "tempomacie".'
      ]
    },
    {
      id: 'sec-23-5',
      pageNumber: 10,
      sectionNumber: '23.5',
      title: 'Bodziec i Kontekst — Pięć Głównych Wyzwalaczy Zachowania',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Żaden nawyk nie powstaje ani nie uruchamia się w próżni. Każde automatyczne działanie jest zakotwiczone w konkretnym wyzwalaczu (Cue / Trigger).',
        'Badania nad psychologią zachowania identyfikują pięć głównych kategorii wyzwalaczy kontekstowych:',
        '1. LOKALIZACJA (Miejsce): Kuchnia, biurko, łóżko, konkretny fotel.',
        '2. CZAS (Pora dnia / Sekwencja zegarowa): Godzina 15:00, zaraz po wybudzeniu, tuż przed snem.',
        '3. STAN EMOCJONALNY / SOMATYCZNY: Znużenie, niepokój, głód, spadek energii, poczucie samotności.',
        '4. INNI LUDZIE (Obecność konkretnych osób): Znajomi z pracy, partner, grupa znajomych.',
        '5. BEZPOŚREDNIO POPRZEDZAJĄCE ZDARZENIE (Kotwica sekwencyjna): Włączenie komputera, zgaszenie światła, zamknięcie klapy laptopa, wypicie kawy.'
      ]
    },
    {
      id: 'sec-23-6',
      pageNumber: 12,
      sectionNumber: '23.6',
      title: 'Dlaczego Kontekst Wpływa Na Zachowanie Silniej Niż Sama Intencja?',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Profesor Wendy Wood z University of Southern California przez dekady badała wpływ architektury otoczenia na ludzkie wybory. Jej eksperymenty wykazały, że w stabilnym kontekście środowiskowym siła nawyku całkowicie dominowała nad intencjami jednostki.',
        'W jednym z klasycznych badań uczestnicy o silnym nawyku jedzenia popkornu w kinie zjadali dokładnie tyle samo nieświeżego, kilkudniowego popkornu, co popkornu świeżego — wyzwalacz (fotel kinowy i ciemna sala) uruchamiał automatyczny ruch dłoni do ust niezależnie od walorów smakowych i intencji dietetycznych.',
        'Oznacza to, że walka z nawykiem przy użyciu samej "szczerej intencji", przy jednoczesnym przebywaniu w tym samym środowisku wyzwalającym, jest neurobiologicznie przegraną batalią. Kontekst wygrywa z intencją.'
      ]
    },
    {
      id: 'sec-23-7',
      pageNumber: 15,
      sectionNumber: '23.7',
      title: 'Konsekwencje Zachowania — Wzmocnienie Pozytywne, Negatywne i Kary',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Aby zachowanie przekształciło się w stały nawyk, po wykonaniu rutyny musi nastąpić konsekwencja będąca nagrodą dla układu nerwowego.',
        'W klasycznej analizie behawioralnej wyróżniamy dwa główne typy wzmocnień utrwalających wzorzec:',
        '• WZMOCNIENIE POZYTYWNE: Pojawienie się przyjemnego bodźca (smak cukru, aprobata społeczna, poczucie sukcesu, zastrzyk nowości).',
        '• WZMOCNIENIE NEGATYWNE: Zniknięcie nieprzyjemnego stanu (redukcja stresu, ucieczka od nudy, wyciszenie lęku, usunięcie somatycznego napięcia).',
        'Większość szkodliwych nawyków (podjadanie, prokrastynacja cyfrowa, palenie) jest napędzana silnym WZMOCNIENIEM NEGATYWNYM — dają gwałtowną, natychmiastową ulgę od mikro-dyskomfortu.'
      ]
    },

    // BLOK III — NAGRODA I UCZENIE
    {
      id: 'sec-23-8',
      pageNumber: 18,
      sectionNumber: '23.8',
      title: 'Dlaczego Wykonujemy Dane Zachowanie Ponownie? — Pętla Nawyku Charlesa Duhigga',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Model Pętli Nawyku spopularyzowany przez Charlesa Duhigga w książce "Siła Nawyku" składa się z trzech nierozerwalnych elementów:',
        '1. WSKAZÓWKA (Cue): Bodziec wyzwalający, który wprowadza mózg w tryb automatyczny.',
        '2. RUTYNA (Routine): Fizyczne, emocjonalne lub poznawcze działanie będące odpowiedzią na wskazówkę.',
        '3. NAGRODA (Reward): Biologiczne lub emocjonalne domknięcie, które pomaga mózgowi zapamiętać ten konkretny obwód na przyszłość.',
        'Kluczem do zrozumienia pętli jest fakt, że rutyna jest jedynie ŚRODKIEM do uzyskania nagrody. Jeśli odnajdziesz prawdziwą nagrodę (np. ulgę od nudy), możesz podmienić rutynę na inną, która dostarczy tej samej ulgi bez negatywnych konsekwencji długoterminowych.'
      ]
    },
    {
      id: 'sec-23-9',
      pageNumber: 20,
      sectionNumber: '23.9',
      title: 'Dopamina Bez Uproszczenia „Hormon Przyjemności” — Błąd Przewidywania Nagrody',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'W pop-psychologii dopamina jest błędnie nazywana "hormonem szczęścia" lub "cząsteczką przyjemności". Przełomowe badania Wolframa Schultza pokazały rzeczywistą, znacznie bardziej fascynującą rolę dopaminy w uczeniu się.',
        'Dopamina nie koduje samej przyjemności konsumpcyjnej (za przyjemność odpowiadają obwody opiatowe i kanabinoidowe). Dopamina koduje BŁĄD PRZEWIDYWANIA NAGRODY (Reward Prediction Error - RPE) oraz ANTYCYPACJĘ / PRAGNIENIE.',
        'W miarę utrwalania nawyku wyrzut dopaminy przesuwa się w czasie: przestaje pojawiać się w momencie zjedzenia ciastka, a zaczyna gwałtownie strzelać na sam WIDOK cukierni lub poczucie znużenia. Dopamina to motoryczne paliwo szukania i pożądania, zmuszające ciało do ruchu w stronę nagrody.'
      ]
    },
    {
      id: 'sec-23-10',
      pageNumber: 22,
      sectionNumber: '23.10',
      title: 'Natychmiastowa Nagroda a Odroczona Korzyść — Asymetria Czasowa Mózgu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Ludzki mózg ewolucyjnie ukształtował się w środowisku o Natychmiastowym Powrocie (Immediate-Return Environment) — nasi przodkowie musieli natychmiast reagować na głód, zagrożenie czy okazję spożycia kalorii.',
        'Współczesny świat jest natomiast Środowiskiem o Odroczonym Powrocie (Delayed-Return Environment) — konsekwencje większości ważnych wyborów (zdrowie, oszczędności, wykształcenie, relacje) pojawiają się po miesiącach lub latach.',
        'Nawyki niepożądane oferują natychmiastową nagrodę (cukier, ulga, rozrywka) przy odroczonej karze (otyłość, długi, brak wiedzy). Nawyki pożądane oferują natychmiastowy koszt (trud, zmęczenie, opór) przy odroczonej nagrodzie. Nauka budowania nawyków polega na sprawieniu, by pożądane działanie miało natychmiastowe mikro-wzmocnienie.'
      ]
    },

    // BLOK IV — ŚRODOWISKO
    {
      id: 'sec-23-11',
      pageNumber: 25,
      sectionNumber: '23.11',
      title: 'Środowisko Jako Część Systemu Zachowania — Architektura Wyboru',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Projektowanie własnych zachowań zaczyna się od zrozumienia, że otoczenie materialne i cyfrowe nie jest biernym tłem, lecz aktywnym współautorem Twoich decyzji.',
        'Koncepcja Architektury Wyboru (Nudge Theory, Thaler & Sunstein) wskazuje, że sposób ułożenia przedmiotów, dostępność opcji oraz domyślne ścieżki (default options) kształtują prawdopodobieństwo wystąpienia zachowania silniej niż cechy osobowości.',
        'Osoba o "wielkiej silnej woli" w środowisku pełnym pokus zużywa gigantyczne pokłady energii na hamowanie, podczas gdy osoba o "sprytnej architekturze" usunęła pokusy z pola widzenia i w ogóle nie musi ze sobą walczyć.'
      ]
    },
    {
      id: 'sec-23-12',
      pageNumber: 27,
      sectionNumber: '23.12',
      title: 'Projektowanie Środowiska — Widoczność, Dostępność i Dystans',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Praktyczna architektura środowiska opiera się na trzech fizycznych zmiennych:',
        '1. WIDOCZNOŚĆ (Visual Cueing): To, co leży w polu widzenia, przyciąga uwagę kory wzrokowej i uruchamia pragnienie. Trzymaj pożądane obiekty (książka, woda, buty do biegania) na widoku, a niepożądane schowaj.',
        '2. DOSTĘPNOŚĆ: Zredukuj liczbę ruchów potrzebnych do wykonania pożądanego działania do absolutnego minimum.',
        '3. DYSTANS FIZYCZNY: Wydłużenie dystansu do pokusy o zaledwie kilka metrów dramatycznie obniża wskaźnik sięgania po nią.'
      ]
    },
    {
      id: 'sec-23-13',
      pageNumber: 29,
      sectionNumber: '23.13',
      title: 'Tarcie Behawioralne (Behavioral Friction) — Klucz Do Sterowania Oporem',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Tarcie behawioralne to suma barier fizycznych, czasowych i poznawczych, które musisz pokonać, aby przejść od intencji do wykonania działania.',
        'ZASADA 2 SEKUND / 2 KROKÓW: Zwiększenie tarcia dla złego nawyku o zaledwie 20 sekund (np. wyniesienie telewizora do innego pokoju, wylogowanie się z aplikacji, schowanie przekąsek na najwyższą półkę) daje korze przedczołowej czas na włączenie świadomej kontroli.',
        'Odwrotnie: zmniejszenie tarcia dla dobrego nawyku (np. przygotowanie maty do ćwiczeń poprzedniego wieczoru) sprawia, że rutyna rusza zanim pojawi się opór.'
      ]
    },
    {
      id: 'sec-23-14',
      pageNumber: 31,
      sectionNumber: '23.14',
      title: 'Telefon, Internet i Projektowanie Bodźców Cyfrowych',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Aplikacje mobilne i media społecznościowe są projektowane przez najwybitniejszych inżynierów behawioralnych na świecie w oparciu o protokoły losowego zmiennego wzmocnienia (Variable Ratio Schedule) — dokładnie tego samego mechanizmu, który uzależnia graczy od maszyn jednorękiego bandyty.',
        'Powiadomienia, czerwone kropki badge, nieskończone przewijanie (infinite scroll) oraz algorytmiczne dopasowanie treści eliminują wszelkie tarcie behawioralne, tworząc idealną cyfrową pętlę nawykową.',
        'Odzyskanie autonomii uwagi wymaga wprowadzania sztucznego tarcia cyfrowego: wyłączenia powiadomień push, przełączenia ekranu w tryb szarości (grayscale) oraz usunięcia aplikacji z ekranu głównego.'
      ],
      caseStudyRef: caseStudiesChapterTwentyThree[0]
    },

    // BLOK V — ZMIANA STARYCH WZORCÓW
    {
      id: 'sec-23-15',
      pageNumber: 34,
      sectionNumber: '23.15',
      title: 'Dlaczego „Po Prostu Przestań” Często Nie Działa? — Granice Tłumienia',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Rzucenie nakazu "od dziś przestaję Jeść słodycze / grać w gry / denerwować się" opiera się na błędnym założeniu, że nawyk można po prostu wymazać z mózgu siłą woli.',
        'Ścieżki neuronalne utrwalone w jądrach podstawy nie znikają — przypominają głębokie koleiny na leśnej drodze. Gdy pojawia się dawna wskazówka i wysoki stres, organizm automatycznie wpada w najgłębszą wyżłobioną koleinę.',
        'Ponadto tłumienie myśli i impulsów wywołuje tzw. Efekt Odbicia (Wegner\'s Rebound Effect) — im mocniej próbujesz o czymś nie myśleć, tym wyższą dostępność poznawczą zyskuje ten obiekt.'
      ]
    },
    {
      id: 'sec-23-16',
      pageNumber: 36,
      sectionNumber: '23.16',
      title: 'Znajdowanie Funkcji Zachowania — O Co Naprawdę Chodzi Twojemu Układowi Nervowemu?',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Każdy nawyk — nawet najbardziej destrukcyjny — istnieje dlatego, że pełni jakąś pozytywną funkcję adaptacyjną lub regulacyjną dla Twojego organizmu.',
        'Zamiast pytać: "Dlaczego znowu to zrobiłem?", zadaj pytanie: "Czego w tamtym ułamku sekundy potrzebował mój układ nerwowy?".',
        'Najczęstszymi ukżytymi funkcjami niepożądanych nawyków są: 1) Redukcja przeciążenia sensorycznego, 2) Ucieczka od lęku przed porażką, 3) Potrzeba krótkiej przerwy i zmiany pozycji ciała, 4) Poszukiwanie więzi społecznej, 5) Zastrzyk energii przy zmęczeniu.'
      ],
      caseStudyRef: caseStudiesChapterTwentyThree[1]
    },
    {
      id: 'sec-23-17',
      pageNumber: 38,
      sectionNumber: '23.17',
      title: 'Zastępowanie Zachowania — Złota Reguła Zmiany Nawyku',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Złota Reguła Zmiany Nawyku głosi: Zmień rutynę, zachowując dawaną wskazówkę i dawaną nagrodę.',
        'Jeśli Twoją wskazówką jest poranna nuda przy biurku, a nagrodą — chwila odprężenia i zmiana bodźców, nie walcz z potrzebą przerwy. Podmień rutynę (zamiast pójścia po batona do automatu — wyjdź na 3 minuty na świeże powietrze lub zrób rozciąganie z kubkiem herbaty).',
        'Nowa rutyna musi być na tyle prosta i atrakcyjna, aby w stanie zmęczenia wygrać konkurencję z dawnym wzorcem.'
      ],
      exerciseRef: selfExercisesChapterTwentyThree[0]
    },
    {
      id: 'sec-23-18',
      pageNumber: 40,
      sectionNumber: '23.18',
      title: 'Powrót Starego Wzorca — Nawroty pod Wpływem Stresu i Reaktywacja Ścieżek',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W chwilach silnego kryzysu, choroby, wyczerpania lub traumy kora przedczołowa traci zdolność nadzorczą. Mózg natychmiast sięga po najbardziej utrwalone, dawne skrypty behawioralne.',
        'Zjawisko to w neurobiologii nazywa się reaktywacją ścieżek utrwalonych. Powrót dawnego zachowania nie oznacza "porażki całego procesu" ani braku postępów.',
        'Różnica między osobą budującą trwały system a osobą rezygnującą leży w interpretacji potknięcia: traktowanie potknięcia jako incydentu i szybkiego powrotu do planu zapobiega tzw. Efektowi "A niech to!" (What-The-Hell Effect).'
      ]
    },

    // BLOK VI — BUDOWANIE NOWYCH ZACHOWAŃ
    {
      id: 'sec-23-19',
      pageNumber: 43,
      sectionNumber: '23.19',
      title: 'Jak Rozpocząć Zachowanie? — Zakotwiczanie w Istniejących Rutynach (Habit Stacking)',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Najtrudniejszym momentem budowania nowego nawyku jest znalezienie dla niego niezawodnego wyzwalacza.',
        'Metoda Łączenia Nawyków (Habit Stacking, BJ Fogg & James Clear) wykorzystuje istniejące, niezawodne obwody w jądrach podstawy jako hak dla nowego działania.',
        'WZÓR PODPIĘCIA: "Po tym, jak [Aktualny Nawyk-Kotwica], wykonam [Nowy Nawyk]". Przykład: "Po tym, jak postawię kubek z poranną kawą na biurku, przeczytam 1 stronę podręcznika".'
      ],
      exerciseRef: selfExercisesChapterTwentyThree[6]
    },
    {
      id: 'sec-23-20',
      pageNumber: 45,
      sectionNumber: '23.20',
      title: 'Mały Krok Bez Mitu o „Małych Krokach” — Reguła 2 Minut i Opanowanie Startu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Większość ludzi ponosi porażkę na początku, ponieważ próbuje zoptymalizować nawyk zanim w ogóle go utrwali.',
        'REGUŁA 2 MINUT: Kiedy zaczynasz nowy nawyk, jego wykonanie powinno zajmować mniej niż dwie minuty. Zamiast: "Będę biegać 5 km" -> "Założę buty biegowe i wyjdę przed dom". Zamiast: "Przeczytam 50 stron" -> "Otworzę książkę na pierwszej stronie".',
        'Celem pierwszego etapu nie jest osiągnięcie wyniku, lecz opanowanie sztuki pojawiania się i utrwalenie samego punktu startowego.'
      ],
      caseStudyRef: caseStudiesChapterTwentyThree[2]
    },
    {
      id: 'sec-23-21',
      pageNumber: 47,
      sectionNumber: '23.21',
      title: 'Plany If–Then — Intencje Implementacyjne Petera Gollwitzera',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Psycholog Peter Gollwitzer z New York University w ponad 100 badaniach empirycznych udowodnił, że sformułowanie intencji w formacie If-Then podnosi wskaźnik realizacji celu z 22% do ponad 65%.',
        'Plan If-Then koduje w pamięci perspektywicznej dokładne połączenie między sytuacją a reakcją: "Jeśli pojawi się sytuacja X, to natychmiast zrobię Y".',
        'Dzięki temu w krytycznym momencie nie musisz podejmować decyzji ani zastanawiać się, co zrobić — Twój umysł odruchowo uruchamia przygotowany skrypt.'
      ],
      exerciseRef: selfExercisesChapterTwentyThree[2]
    },
    {
      id: 'sec-23-22',
      pageNumber: 49,
      sectionNumber: '23.22',
      title: 'Monitorowanie Postępów — Reaktywność Pomiarowa i Zasada „Nie Opuszczaj Dwa Razy”',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wizualne śledzenie nawyku (np. skreślanie kratki w kalendarzu) pełni dwie kluczowe funkcje: 1) Jest obiektywnym komparatorem w pętli cybernetycznej, 2) Dostarcza natychmiastowej małej nagrody dopaminowej.',
        'ŻELAZNA ZASADA: NIGDY NIE OPUSZCZAJ DWA RAIZY Z RZĘDU. Pierwsze opuszczenie to przypadek lub potknięcie losowe. Drugie opuszczenie z rzędu to początek nowego, niepożądanego nawyku.',
        'Jeśli opuścisz jeden dzień z powodu choroby lub wyjazdu, kolejnego dnia wykonaj chociaż wersję 2-minutową, aby utrzymać ciągłość obwodu w mózgu.'
      ],
      exerciseRef: selfExercisesChapterTwentyThree[7]
    },

    // BLOK VII — TOŻSAMOŚĆ I NAWYKI
    {
      id: 'sec-23-23',
      pageNumber: 51,
      sectionNumber: '23.23',
      title: '„Jestem Osobą, Która…” — Nawyki Oparte Na Tożsamości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Istnieją trzy poziomy zmiany zachowania: 1) Zmiana rezultatów (co otrzymujesz), 2) Zmiana procesów (co robisz), 3) Zmiana tożsamości (kim jesteś).',
        'Większość ludzi próbuje budować nawyki od zewnątrz do wewnątrz: skupiają się na celach ("chcę schudnąć 10 kg"), ignorując obraz samego siebie. Prawdziwa i trwała zmiana zachodzi od wewnątrz do zewnątrz — gdy zmiana nawyku staje się wyrazem tego, kim jesteś.',
        'Każde małe wykonane działanie to głos oddany na określoną tożsamość. Gdy przeczytasz 1 stronę, oddajesz głos na bycie czytelnikiem. Gdy wybierzesz jabłko zamiast pączka, oddajesz głos na bycie osobą dbającą o zdrowie.'
      ],
      exerciseRef: selfExercisesChapterTwentyThree[4]
    },
    {
      id: 'sec-23-24',
      pageNumber: 53,
      sectionNumber: '23.24',
      title: 'Kiedy Tożsamość Pomaga, A Kiedy Ogranicza? — Sztywność Etykiet',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Tożsamość może być najpotężniejszym sprzymierzeńcem, ale też najbardziej paraliżującym więzieniem.',
        'Gdy zrostasz się ze sztywną etykietą ("jestem idealnym pracownikiem", "jestem nocnym markiem", "ja po prostu jestem bałaganiarzem"), każda zmiana nawyku zagraża spójności Twojego ego.',
        'Rozwiązaniem jest budowanie elastycznej tożsamości opisanej procesowo i wartościami, a nie sztywnymi przymiotnikami.'
      ]
    },

    // BLOK VIII — SYSTEM
    {
      id: 'sec-23-25',
      pageNumber: 55,
      sectionNumber: '23.25',
      title: 'Dlaczego Ten Sam Plan Działa Różnym Osobom Inaczej? — Różnice Indywidualne',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nie istnieje jeden uniwersalny, idealny system nawykowy dla każdego człowieka. Różnice w strukturze osobowości (np. wg modelu Wielkiej Piątki: Sumienność, Ekstrawersja, Neurotyczność) oraz w neurobiologii (warianty genu COMT, wrażliwość układu dopaminowego) sprawiają, że te same techniki działają z różną siłą.',
        'Osoby o wysokiej neurotyczności potrzebują silniejszego nacisku na redukcję lęku i elastyczność planu B, podczas gdy osoby o niskiej sumienności wymagają sztywnej architektury środowiska i zewnętrznego tarcia.'
      ]
    },
    {
      id: 'sec-23-26',
      pageNumber: 56,
      sectionNumber: '23.26',
      title: 'System Zamiast Pojedynczego Zachowania — Pętle Sprzężeń Zwrotnych',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Nawyki nie istnieją w izolacji — tworzą wzajemnie połączony ekosystem behawioralny.',
        'W tym ekosystemie istnieją tzw. NAWYKI KLUCZOWE (Keystone Habits) — zachowania, których zmiana wywołuje reakcję łańcuchową w innych obszarach życia.',
        'Przykładem nawyku kluczowego jest regularny ruch fizyczny lub stała pora kładzenia się spać: opanowanie tej jednej pętli poprawia koncentrację w pracy, zmniejsza chęć na słodycze, stabilizuje nastrój i podnosi poczucie własnej skuteczności.'
      ]
    },
    {
      id: 'sec-23-27',
      pageNumber: 57,
      sectionNumber: '23.27',
      title: 'Błędna Intuicja, Co Nadal Nie Jest Jasne i Jak Zastosować To Jutro',
      category: 'podsumowanie',
      readingTimeMinutes: 16,
      subsections: [
        {
          title: 'BŁĘDNA INTUICJA — 5 MITÓW O NAWYKACH',
          paragraphs: [
            '1. MIT: „Nawyk powstaje dokładnie w 21 dni.” — PRAWDA: Czas automatyzacji wg badań Phillippy Lally wynosi od 18 do 254 dni w zależności od trudności zadania i osobniczych cech.',
            '2. MIT: „Jeśli naprawdę czegoś chcę, silna wola wystarczy.” — PRAWDA: Kontekst i tarcie behawioralne wygrywają z silną wolą w 80% długoterminowych prób.',
            '3. MIT: „Nawyk całkowicie pozbawia mnie kontroli nad sobą.” — PRAWDA: Kora przedczołowa zachowuje prawo weta na każdym etapie sekwencji.',
            '4. MIT: „Wystarczy usunąć bodziec, by pozbyć się nawyku.” — PRAWDA: Usunięcie bodźca jest trudne; skuteczniejsza jest podmiana rutyny przy zachowaniu nagrody.',
            '5. MIT: „Jedno potknięcie niszczy cały dotychczasowy postęp.” — PRAWDA: Jedno opuszczenie nie ma wpływu na długoterminowy wskaźnik automatyzacji, o ile nie dopuścisz do dwóch opuszczeń z rzędu.'
          ]
        },
        {
          title: 'CO NADAL NIE JEST JASNE? — OGRANICZENIA NAUKI O NAWYKACH',
          paragraphs: [
            '1. Różnice osobnicze w tempie wygaszania starych ścieżek prążkowiowych.',
            '2. Długofalowy wpływ algorytmów cyfrowych na pojemność uwagi i podatność na nawyki.',
            '3. Dokładny mechanizm interakcji między poziomem kortyzolu a elastycznością nawykową.'
          ]
        },
        {
          title: 'JAK ZASTOSOWAĆ TO JUTRO? — PROTOKÓŁ 24-GODZINNY',
          paragraphs: [
            '1. Wybierz jeden nawyk i utwórz plan If-Then w formacie: Jeśli [Bodziec], to zrobisz [Wersję 2-Minutową].',
            '2. Wprowadź 1 zmianę w środowisku zwiększającą tarcie dla złego nawyku (np. telefon w drugim pokoju).',
            '3. Przygotuj kotwicę podpięcia nowego nawyku do utrwalonej porannej czynności.'
          ]
        }
      ],
      paragraphs: [
        'Podsumowując: Nawyki to architektura Twojego codziennego życia. Opanowanie sztuki ich projektowania przesuwa ciężar ze stale wyczerpującej walki siłowej na inteligentne budowanie systemu wspierającego Twoją autonomię.'
      ]
    },
    {
      id: 'sec-23-28',
      pageNumber: 58,
      sectionNumber: '23.28',
      title: 'Egzamin Końcowy i Sprawdzian Wiedzy z Rozdziału 7',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu automatyzacji zachowań, neuronauki dopaminy, tarcia behawioralnego, intencji implementacyjnych oraz tożsamości nawykowej. Poniższy test zawiera pytania analityczne i sytuacyjne.'
      ]
    }
  ]
};

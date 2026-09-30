import { Chapter, CaseStudy, SelfExercise, ExamQuestion, InteractiveWindowData } from '../types/book';

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
      readingTimeMinutes: 20,
      quote: {
        text: 'Kiedy zachowanie staje się nawykiem, mózg pakuje całe skomplikowane ciągi ruchów w zwarte „pakiety” (chunks). W prążkowiu neurony odpalają intensywnie na samym początku i na samym końcu nawyku, tworząc neuronalne klamry (task-bracketing), podczas gdy sam środek sekwencji toczy się przy zdumiewającej ciszy metabolicznej kory mózgowej.',
        author: 'Prof. Ann Graybiel',
        source: 'McGovern Institute for Brain Research at MIT, „Habits, Rituals, and the Evaluative Brain”, Annual Review of Neuroscience, 2008'
      },
      paragraphs: [
        'Na poziomie komórkowym powstawanie nawyku opiera się na fundamencie hebbowskiej plastyczności synaptycznej: neurony, które ulegają jednoczesnej depolaryzacji, wzmacniają wzajemne połączenia synaptyczne (Long-Term Potentiation — LTP). Jednak sam proces nawykowy nie jest jedynie sumą pojedynczych synaps, lecz całościową rekonfiguracją szlaków korowo-podkorowych.',
        'Przełomowe badania zespołu prof. Ann Graybiel w laboratoriach MIT rzuciły fundamentalne światło na to, co dzieje się w prążkowiu (striatum) oraz jądrach podstawy (basal ganglia), gdy szczur uczy się poruszania w labiryncie w kształcie litery T po usłyszeniu dźwiękowego sygnału wskazówki. Na początku procesu uczenia neurony w grzbietowo-przyśrodkowym prążkowiu (DMS) oraz grzbietowo-bocznej korze przedczołowej (dlPFC) wyładowywały się bezustannie przez cały czas biegu gryzonia — mózg analizował każdy krok, węchowy zapach ściany i każdy skręt.',
        'Jednak po setkach powtórzeń doszło do spektakularnego zjawiska zwanego „klamrowaniem zadania” (task-bracketing). W grzbietowo-bocznym prążkowiu (DLS) neurony zaczęły wyładowywać się falami wyłącznie w dwóch punktach czasowych: w milisekundzie usłyszenia sygnału otwierającego bramkę (cue) oraz w momencie odebrania nagrody w postaci wody z cukrem (reward). Pomiędzy tymi dwoma punktami aktywność kory dramatycznie spadła — cała skomplikowana sekwencja mięśniowa biegła na autonomicznym, podkorowym skrypcie.'
      ],
      subsections: [
        {
          id: 'sub-23-4-1',
          title: 'Analiza słów prof. Ann Graybiel: Fenomen „Task-Bracketingu” i Kompilacja Behawioralna',
          content: [
            'Wypowiedź prof. Graybiel dotyka sedna ewolucyjnej ekonomii mózgu. Określenie „pakiety” (chunks) nawiązuje do analogii informatycznej kompilacji kodu: mózg nie interpretuje już instrukcji linijka po linijce przy zaangażowaniu procesora nadrzędnego (kory przedczołowej), lecz uruchamia skompilowany plik binarny w podkorowym układzie prążkowia.',
            'Klamrowanie zadania (task-bracketing) pełni rolę poznawczego nawiasu: mózg rozpoznaje początek i koniec czynności, zwalniając zasoby uwagi roboczej na myślenie abstrakcyjne, planowanie przyszłości czy monitorowanie otoczenia pod kątem zagrożeń. Paradoksalnie to właśnie ta oszczędność metaboliczna sprawia, że nawyki są tak trudne do wykorzenienia — gdy nawias zostanie otwarty przez bodziec, sekwencja dąży do domknięcia niemal bez udziału naszej świadomej zgody.'
          ]
        },
        {
          id: 'sub-23-4-2',
          title: 'Przejście od Kontroli Celowej (A-O) do Reakcji Nawykowej (S-R)',
          content: [
            'W neurobiologii behawioralnej Anthony Dickinson i Bernard Balleine zdefiniowali dwa odmienne systemy kontroli działania:',
            '1. SYSTEM CELOWY (Action-Outcome / A-O): Zarządzany przez grzbietowo-przyśrodkowe prążkowie (DMS) oraz korę przedczołową. Jednostka wykonuje działanie A, ponieważ przewiduje wartość rezultatu O. Jeśli wartość nagrody zostanie zdewaluowana (np. pokarm zostanie skojarzony z mdłościami), działanie zostaje natychmiast zahamowane.',
            '2. SYSTEM NAWYKOWY (Stimulus-Response / S-R): Zakodowany w grzbietowo-bocznym prążkowiu (DLS). Działanie R jest bezpośrednio wyzwalane przez bodziec S, z pominięciem reprezentacji bieżącej wartości nagrody. Nawet gdy jednostka wie, że nagroda straciła wartość (lub jest szkodliwa), bodziec wyzwala automatyczny ruch.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-23-4-1',
          type: 'badanie',
          title: 'Eksperyment MIT (Graybiel et al.): Dewaluacja Nagrody i Sztywność DLS',
          content: 'Gdy szczurom, które wykształciły silny nawyk biegowy, podano nagrodę zatrutą chlorkiem litu (wywołującym natychmiastowe silne mdłości), zwierzęta po usłyszeniu dźwięku bramki nadal biegły w to samo miejsce. Ich system podkorowy DLS (S-R) odpalał sekwencję mięśniową, mimo że kora wiedziała, iż jedzenie jest szkodliwe. Dopiero farmakologiczne lub optogenetyczne wyciszenie DLS przywracało kontrolę korową i elastyczność zachowania.'
        }
      ],
      interactiveWindow: {
        id: 'win-23-4',
        title: 'Analiza Neurobiologiczna: Przejście od Świadomej Intencji do Pętli Prążkowia',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Piotr (31 lat, analityk finansowy) po raz setny automatycznie wpisuje adres portalu społecznościowego w przeglądarce, gdy tylko napotka trudną formułę w arkuszu kalkulacyjnym.',
        steps: [
          {
            stepNumber: 1,
            title: 'Bodziec inicjujący i błąd napięcia poznawczego',
            description: 'Komórki kory wzrokowej rejestrują skomplikowaną komórkę arkusza kalkulacyjnego. W ułamku sekundy pojawia się mikro-spadek poczucia kompetencji i podkorowy sygnał dyskomfortu. Wybierz stan sieci neuronalnej:',
            options: [
              {
                text: 'Dorsolateral Prefrontal Cortex (dlPFC) utrzymuje skupienie mimo dyskomfortu',
                feedback: 'Wymaga to wysokich zasobów glukozy i braku zmęczenia. Jeśli zasoby są obniżone, dominację przejmuje prążkowie.',
                isOptimal: false
              },
              {
                text: 'Prążkowie (DLS) rozpoznaje sygnał dyskomfortu jako wyzwalacz wyuczonego klamrowania (task-bracket)',
                feedback: 'Dokładnie tak: mikro-stres staje się wskazówką kontekstową, która aktywuje zautomatyzowany skrypt ruchowy palców.',
                isOptimal: true
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Kompilacja motoryczna — zniknięcie świadomej kontroli w trakcie sekwencji',
            description: 'Palce Piotra wpisują skrót klawiszowy w 180 milisekund bez pojedynczego świadomego polecenia kory mózgowej. Co wykazuje zapis neuroobrazowy w tej fazie?',
            options: [
              {
                text: 'Spadek wyładowań w korze przedczołowej i wyciszenie sensoryczne — aktywność skupiona w pętli jądra podstawy-wzgórze',
                feedback: 'Klasyczny wzorzec z badań Ann Graybiel: środek nawyku toczy się niemal bez udziału kory nadrzędnej.',
                isOptimal: true
              },
              {
                text: 'Wzrost metabolizmu w korze przedczołowej i aktywne rozważanie alternatywnych stron',
                feedback: 'Błędna hipoteza. Mózg w fazie automatycznej minimalizuje zużycie kory przedczołowej — dlatego Piotr „budzi się” dopiero po 10 minutach przewijania.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki mikroskopijny sygnał w Twoim ciele lub otoczeniu najczęściej otwiera klamrę zadania (task-bracket) dla Twojego najbardziej niepożądanego nawyku?'
      }
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
      readingTimeMinutes: 20,
      quote: {
        text: 'Nawyki to forma pamięci ukrytej (implicit memory). Kiedy powtarzamy czynność w stabilnym fizycznym otoczeniu, sam kontekst zaczyna bezpośrednio aktywować zachowanie, całkowicie omijając nasze świadome cele, zamiary i intencje. W konfrontacji utrwalonego kontekstu ze szczerą intencją, niemal zawsze wygrywa środowisko.',
        author: 'Prof. Wendy Wood',
        source: 'University of Southern California, „Good Habits, Bad Habits: The Science of Making Positive Changes That Stick”, Farrar, Straus and Giroux, 2019'
      },
      paragraphs: [
        'W potocznym rozumieniu ludzkiego działania dominuje mit „siły intencji”: wierzymy, że jeśli tylko będziemy wystarczająco mocno zmotywowani i podejmiemy szczerą decyzję o zmianie, nasze zachowanie natychmiast ulegnie transformacji. Współczesna psychologia poznawcza i badania prof. Wendy Wood z University of Southern California bezlitośnie obalają tę iluzję.',
        'W stabilnym środowisku fizycznym wskazówki sensoryczne (układ mebli, zapachy, przedmioty w polu widzenia, obecność konkretnych ludzi) wchodzą w bezpośrednie sprzężenie z układem motorycznym. Sygnał kontekstowy dociera do układów podkorowych szybciej niż świadoma kora przedczołowa zdoła sformułować intencję powstrzymania się od działania.',
        'Badania pokazują, że około 43% naszych codziennych zachowań wykonujemy dokładnie w tych samych miejscach, o tych samych porach, myśląc jednocześnie o zupełnie innych sprawach. W takich warunkach siła woli nie jest w ogóle angażowana — sterowanie przejmuje kontekstowa matryca bodźców.'
      ],
      subsections: [
        {
          id: 'sub-23-6-1',
          title: 'Analiza słów prof. Wendy Wood: Pamięć Ukryta a Autonomia Środowiska',
          content: [
            'Sformułowanie prof. Wood, że „nawyki to pamięć ukryta”, ma kardynalne znaczenie metodologiczne. Pamięć deklaratywna (jawna) zawiera to, co pamiętasz świadomie: Twoje plany diety, postanowienia noworoczne i postanowienie, że od dziś nie będziesz sięgać po słodycze.',
            'Pamięć ukryta (proceduralna) jest natomiast zintegrowana ze środowiskiem: Twoje ciało „pamięta” sekwencję sięgania do szuflady w biurku za każdym razem, gdy usiądziesz w tym samym fotelu. Apelowanie do pamięci jawnej („Pamiętaj, że masz nie jeść!”) w chwili, gdy pamięć ukryta została wyzwolona przez kontekst fotela i szuflady, jest psychologiczną asymetrią — podkorowe obwody pamięci ukrytej działają z wyprzedzeniem czasowym rzędu setek milisekund.'
          ]
        },
        {
          id: 'sub-23-6-2',
          title: 'Klasyczny Eksperyment z Popcornem (Neal, Wood & Quinn, 2006)',
          content: [
            'W jednym z najbardziej wymownych eksperymentów w historii psychologii nawyków, badacze zbadali osoby w kinie, dzieląc je na grupę o silnym nawyku jedzenia popcornu w kinie oraz grupę o słabym nawyku. Uczestnikom wręczono darmowe wiadra popcornu — część otrzymała popcorn świeży i chrupiący, a część popcorn stęchły, wilgotny i sprzed siedmiu dni.',
            'Wyniki były uderzające: osoby bez nawyku zjadały świeży popcorn, a stęchłego niemal nie dotykały (kierowały się walorami smakowymi i świadomym celem). Natomiast osoby o silnym nawyku kinowym zjadały dokładnie taką samą ilość stęchłego, niesmacznego popcornu, jak świeżego! Gdy zapytano je o smak, przyznawały, że był okropny — a mimo to ich dłoń bezwiednie kursowała między pudłem a ustami. Kontekst ciemnej sali i fotela kinowego wymuszał zachowanie wbrew percepcji smaku i wbrew woli.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-23-6-1',
          type: 'wniosek',
          title: 'Wniosek z Badań Wendy Wood: Zmiana Przez Rozbicie Kontekstu',
          content: 'Najlepszy moment na trwałą zmianę nawyku pojawia się podczas naturalnych przerw kontekstowych (tzw. Habit Discontinuity Effect): przeprowadzka do nowego mieszkania, zmiana pracy, urlop czy zmiana układu mebli w pokoju. Gdy stare wyzwalacze środowiskowe znikają, zautomatyzowane pętle pamięci ukrytej nie mają punktu zaczepienia, dając korze przedczołowej czyste pole do zaszczepienia nowych zachowań.'
        }
      ],
      interactiveWindow: {
        id: 'win-23-6',
        title: 'Analiza Kontekstowa: Eksperyment z Popcornem w Twoim Życiu',
        type: 'trzy_interpretacje',
        context: 'Magda postanawia przestać podjadać chipsy wieczorem podczas oglądania seriali. Siada na tej samej kanapie, włącza telewizor i kładzie obok miskę z chipsami, powtarzając sobie: „Mam silną wolę, tym razem nie wezmę ani jednego”. Po 20 minutach miska jest pusta.',
        steps: [
          {
            stepNumber: 1,
            title: 'Trzy interpretacje zachowania Magdy',
            description: 'Dlaczego Magda zjadła chipsy mimo szczerego i silnego postanowienia?',
            options: [
              {
                text: 'Interpretacja A (Dyspozycyjna): Magda ma słaby charakter i brak samodyscypliny',
                feedback: 'Klasyczny błąd atrybucji. Pomija fakt, że kanapa, ciemność i serial to utrwalony zespół wyzwalaczy pamięci proceduralnej.',
                isOptimal: false
              },
              {
                text: 'Interpretacja B (Behawioralno-Kontekstowa): Kontekst zdominował intencję w wyniku automatycznego wyzwolenia skryptu S-R',
                feedback: 'Trafna diagnoza oparta na badaniach Wendy Wood. Obecność kanapy i miski w zasięgu dłoni przy zerowym tarciu uruchomiła ruch automatyczny.',
                isOptimal: true
              },
              {
                text: 'Interpretacja C (Biologiczna): Magda była skrajnie wygłodzona i potrzebowała natychmiastowych kalorii',
                feedback: 'Mało prawdopodobne, jeśli jadła kolację godzinę wcześniej. Głód somatyczny nie tłumaczy bezmyślnej automatyzacji ruchowej.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wybór interwencji architektonicznej',
            description: 'Jaka modyfikacja środowiska przyniesie najwyższą skuteczność bez polegania na sile woli?',
            options: [
              {
                text: 'Pozostawienie miski, ale naklejenie na nią napisu ostrzegawczego „Pamiętaj o diecie!”',
                feedback: 'Napisy i apele kognitywne szybko tracą siłę oddziaływania (habituacja wzrokowa) i przegrywają z automatyzmem ruchowym.',
                isOptimal: false
              },
              {
                text: 'Usunięcie chipsów z domu lub umieszczenie ich w piwnicy/wysokiej szafce, a przy kanapie postawienie szklanki wody z cytryną',
                feedback: 'Optymalne rozwiązanie. Wprowadzenie fizycznego tarcia behawioralnego i zmiana bodźców bezpośrednich w polu widzenia uniemożliwia pamięci ukrytej automatyczny start.',
                isOptimal: true
              }
            ]
          }
        ],
        reflectionPrompt: 'Które z Twoich codziennych zachowań wykonujesz w sposób równie automatyczny, jak uczestnicy badania jedzący stęchły popcorn?'
      }
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
      readingTimeMinutes: 20,
      quote: {
        text: 'Neurony dopaminergiczne nie kodują wielkości samej nagrody; one sygnalizują matematyczną różnicę między nagrodą, której się spodziewaliśmy, a nagrodą, którą faktycznie otrzymaliśmy. To ten błąd przewidywania nagrody (Reward Prediction Error) napędza neuroplastyczność i „wypala” w mózgu ślady pamięciowe nawyków.',
        author: 'Prof. Wolfram Schultz',
        source: 'University of Cambridge, „Predictive Reward Signal of Dopamine Neurons”, Journal of Neurophysiology, 1998'
      },
      paragraphs: [
        'W kulturze popularnej dopamina zyskała krzywdzącą etykietę „hormonu przyjemności”. Uważa się powszechnie, że im więcej dopaminy uwalnia się w mózgu, tym większą rozkosz odczuwa człowiek. Badania elektrofizjologiczne prof. Wolframa Schultza z University of Cambridge doszczętnie sfalsyfikowały ten mit, ujawniając rzeczywistą naturę układu nagrody.',
        'Za subiektywne poczucie sytości, zmysłowej rozkoszy i zadowolenia (liking) odpowiadają przede wszystkim obwody opioidowe (receptory mi-opioidowe w jądrze półleżącym) oraz endokannabinoidy. Dopamina odpowiada za coś zupełnie innego: za pragnienie, antycypację, skupienie uwagi i popęd do działania (wanting). Dopamina to cząsteczka motywacyjnego poszukiwania, a nie konsumpcyjnego spełnienia.',
        'Kluczowym odkryciem Schultza było zaobserwowanie, jak wyładowania neuronów dopaminergicznych w polu brzusznym nakrywki (VTA) przesuwają się w czasie w miarę uczenia się. Kiedy bodziec jest nowy, dopamina strzela w momencie pojawienia się niespodziewanego smakołyku. Kiedy jednak mózg nauczy się, że dźwięk dzwonka zwiastuje smakołyk, dopamina przestaje strzelać przy jedzeniu — gwałtowny wyrzut następuje w ułamku sekundy, w którym rozbrzmiewa dzwonek!'
      ],
      subsections: [
        {
          id: 'sub-23-9-1',
          title: 'Analiza słów prof. Wolframa Schultza: Matematyka Błędu Przewidywania Nagrody (RPE)',
          content: [
            'Wypowiedź prof. Schultza definiuje tzw. Błąd Przewidywania Nagrody (Reward Prediction Error — RPE):',
            'RPE = Nagroda Otrzymana – Nagroda Oczekiwana.',
            '1. DODATNI BŁĄD PRZEWIDYWANIA (RPE > 0): Otrzymałeś więcej lub szybciej, niż się spodziewałeś. Następuje gwałtowny wyrzut dopaminy powyżej poziomu bazowego. Mózg koduje: „To działanie przyniosło nadspodziewaną korzyść, zapamiętaj kontekst i powtórz je!”.',
            '2. ZEROWY BŁĄD PRZEWIDYWANIA (RPE = 0): Otrzymałeś dokładnie to, czego oczekiwałeś. Aktywność dopaminy na sam bodziec jest wysoka, ale w momencie nagrody pozostaje neutralna. Nawyk jest stabilny.',
            '3. UJEMNY BŁĄD PRZEWIDYWANIA (RPE < 0): Oczekiwałeś nagrody po usłyszeniu wskazówki, ale nagroda się nie pojawiła. Aktywność dopaminowa gwałtownie spada poniżej linii bazowej. Odczuwasz to subiektywnie jako głęboki ból rozczarowania, frustrację i neurobiologiczny głód.'
          ]
        },
        {
          id: 'sub-23-9-2',
          title: 'Dlaczego Pragnienie Jest Często Silniejsze Niż Sama Satysfakcja z Konsumpcji?',
          content: [
            'Mechanizm RPE tłumaczy paradoks nałogowego sięgania po niepożądane bodźce (np. słodycze, gry wideo, hazard czy portale społecznościowe). Antycypacja wywołana wskazówką (np. dźwięk powiadomienia, zapach piekarni) generuje potężną falę dopaminową — poziom „chcenia” (wanting) osiąga maksimum.',
            'Jednak w momencie samej konsumpcji nagroda okazuje się przewidywalna, powtarzalna lub wręcz mdła. Ponieważ RPE wynosi zero lub staje się ujemny, natychmiast po spożyciu ciastka lub obejrzeniu wideo pojawia się spadek dopaminy i poczucie pustki. Mózg nie zapamiętuje jednak tej pustki, lecz powraca do potężnego śladu antycypacji, zmuszając nas do poszukiwania kolejnej dawki bodźca.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-23-9-1',
          type: 'uwaga',
          title: 'Pułapka Zmiennego Wzmocnienia (Variable Ratio Schedule)',
          content: 'Najsilniejszy wyrzut dopaminy i najtrwalsze nawyki powstają wtedy, gdy nagroda jest NIEPRZEWIDYWALNA. Jeśli automat do gier lub algorytm social media nagradza Cię ciekawym postem tylko co pewien czas, Twój mózg nigdy nie może obliczyć stabilnego RPE. Ciągła niepewność utrzymuje neurony dopaminowe w stanie permanentnego wzbudzenia, uniemożliwiając habituację.'
        }
      ],
      interactiveWindow: {
        id: 'win-23-9',
        title: 'Symulacja Błędu Przewidywania Nagrody: Skąd Bierze Się Głód Dopaminowy?',
        type: 'zmien_jeden_element',
        context: 'Tomasz (28 lat) siada do pracy. Na biurku leży telefon. Rozlega się dźwięk powiadomienia (Wskazówka). W jego mózgu następuje gwałtowny skok dopaminy w oczekiwaniu na ekscytującą wiadomość.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wariant A: Wiadomość okazuje się spamem reklamowym',
            description: 'Tomasz odblokowuje telefon z wysokim poziomem dopaminy antycypacyjnej. Na ekranie widzi ofertę ubezpieczenia. Co dzieje się z dopaminą?',
            options: [
              {
                text: 'Dopamina pozostaje na wysokim poziomie, bo mózg cieszy się z samego użycia telefonu',
                feedback: 'Nie. Brak obiecanej nagrody wywołuje gwałtowny spadek dopaminy poniżej poziomu bazowego (ujemny RPE), powodując irytację.',
                isOptimal: false
              },
              {
                text: 'Następuje zapaść dopaminowa (ujemny RPE) — Tomasz odczuwa frustrację i odruchowo zaczyna klikać w inne aplikacje, szukając kompensacji',
                feedback: 'Precyzyjna obserwacja. Ujemny błąd przewidywania popycha człowieka do desperackiego poszukiwania zastępczego wyrzutu dopaminy w innych aplikacjach.',
                isOptimal: true
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wariant B: Wyłączenie powiadomień dźwiękowych (Zmień jeden element)',
            description: 'Tomasz wyłącza dźwięk i chowa telefon do szuflady. Brak natychmiastowej wskazówki sensorycznej eliminuje bodziec inicjujący pętlę dopaminową.',
            options: [
              {
                text: 'Poziom dopaminy bazowej stabilizuje się, a uwaga może zostać skierowana na zadanie robocze',
                feedback: 'Dokładnie tak. Usunięcie wyzwalacza zapobiega sztucznemu skokowi dopaminy antycypacyjnej, chroniąc zasoby wykonawcze.',
                isOptimal: true
              },
              {
                text: 'Tomasz wpada w panikę z powodu braku bodźców dźwiękowych',
                feedback: 'Początkowo może wystąpić lekki niepokój z odstawienia, ale po 15-20 minutach mózg adaptuje się do środowiska niskobodźcowego.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Które z Twoich nawyków opierają się na losowym, zmiennym wzmocnieniu, w którym nigdy nie wiesz, co dokładnie zobaczysz po odblokowaniu ekranu?'
      }
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
      readingTimeMinutes: 20,
      quote: {
        text: 'Niewielkie zmiany w oporze sytuacyjnym — to, co pionier psychologii społecznej Kurt Lewin nazwał „czynnikami kanałowymi” (channel factors) — decydują o tym, czy intencja zamieni się w czyn. Zwiększ tarcie fizyczne lub poznawcze o zaledwie 20 sekund, a niepożądane zachowanie załamie się, zanim kora ulegnie zmęczeniu.',
        author: 'Prof. Wendy Wood & Kurt Lewin',
        source: 'University of Southern California / MIT Social Dynamics Archive, „Forces in Psychological Fields & Modern Friction Dynamics”, 2019'
      },
      paragraphs: [
        'Tarcie behawioralne to suma barier motorycznych, czasowych i poznawczych, które organizm musi pokonać, aby przejść od impulsu do fizycznego wykonania czynności. Wbrew powszechnemu mniemaniu, ludzki układ nerwowy jest rządzony zasadą minimalnego wydatku energetycznego (Principle of Least Effort). Każda dodatkowa sekunda oporu drastycznie zmniejsza prawdopodobieństwo realizacji zachowania.',
        'ZASADA 20 SEKUND (Shawn Achor / Wendy Wood): Badania nad dynamiką nawyków dowodzą, że wydłużenie czasu potrzebnego na rozpoczęcie negatywnego nawyku o zaledwie 20 sekund (np. wylogowanie się ze strony i konieczność przepisania hasła, schowanie pilota do szafy w przedpokoju, wyniesienie słodyczy do piwnicy) tworzy tzw. „klin refleksyjny”. Te 20 sekund opóźnienia daje grzbietowo-bocznej korze przedczołowej (dlPFC) bezcenny czas na przejęcie kontroli nad automatycznym impulsem prążkowia.',
        'Odwrotnie: redukcja tarcia dla zachowań pożądanych (np. rozłożenie maty do ćwiczeń przed snem, otwarcie dokumentu z pracą dyplomową przed odejściem od biurka, napełnienie butelki z wodą i postawienie jej na klawiaturze) sprawia, że pożądany proces rusza automatycznie, zanim w korze przedczołowej zdąży uformować się wątpliwość lub opór.'
      ],
      subsections: [
        {
          id: 'sub-23-13-1',
          title: 'Analiza słów Kurta Lewina i Wendy Wood: Czynniki Kanałowe i Hydrodynamika Decyzji',
          content: [
            'Kurt Lewin porównywał ludzkie zachowanie do strumienia wody płynącego po zboczu. Możesz godzinami motywować wodę, aby popłynęła w inną stronę (apelowanie do siły woli), ale woda popłynie tam, gdzie ukształtowane jest koryto (czynniki kanałowe).',
            'Zwiększenie tarcia to wykopanie tamy na korycie niepożądanego nawyku. Zmniejszenie tarcia to pogłębienie kanału dla pożądanego wzorca. Inżynieria tarcia nie walczy z pragnieniem — ona uniemożliwia pragnieniu natychmiastowe rozładowanie motoryczne, zmuszając układ nerwowy do wygaszenia impulsu.'
          ]
        },
        {
          id: 'sub-23-13-2',
          title: 'Fizyka Tarcia Cyfrowego: Dlaczego Wielkie Korporacje Walczą o Każdy Milisekundowy Krok',
          content: [
            'Współczesne platformy cyfrowe doskonale znają neurobiologię tarcia. Wprowadzenie funkcji takich jak autoodtwarzanie (autoplay) kolejnego odcinka, płatność jednym kliknięciem (1-Click) czy logowanie biometryczne miało jeden cel: redukcję tarcia behawioralnego do zera bezwzględnego.',
            'Kiedy tarcie wynosi zero, zachowanie staje się odruchem bezpostaciowym. Odzyskanie suwerenności uwagi wymaga celowego, sztucznego dobudowywania tarcia: podwójnej autoryzacji, wylogowywania po każdej sesji, blokad aplikacji z 30-sekundowym licznikiem odliczania.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-23-13-1',
          type: 'praktyka',
          title: 'Reguła Dwóch Ruchów: Audyt Domowego Biurka',
          content: 'Zrób audyt przestrzeni roboczej: wszystko, co wspiera Twoją pracę głęboką (notatnik, pióro, woda, słuchawki wygłuszające), powinno być dostępne w MAKSYMALNIE DWÓCH RUCHACH DŁONI. Wszystko, co rozprasza (smartfon, przekąski, pady do konsoli), musi wymagać MINIMUM TRZECH CZYNNOŚCI FIZYCZNYCH (np. wstać z fotela, przejść do przedpokoju, otworzyć zamek w szafie).'
        }
      ],
      interactiveWindow: {
        id: 'win-23-13',
        title: 'Projektowanie Tarcia: Eksperyment z Przełączaniem Oporu',
        type: 'zmien_jeden_element',
        context: 'Kamil (34 lata) obiecuje sobie, że wieczorem poczyta literaturę branżową, ale za każdym razem po wejściu do salonu widzi pilot leżący na stoliku kawowym, bierze go do ręki i spędza 3 godziny na bezmyślnym skakaniu po kanałach.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wariant A: Poleganie na postanowieniu bez zmiany tarcia',
            description: 'Kamil siada naprzeciwko telewizora, pilot leży 20 cm od jego ręki. Kamil mówi sobie: „Bądź twardy, weź książkę”. Jaki jest wskaźnik porażki w stanie wyczerpania wieczornego?',
            options: [
              {
                text: 'Ponad 85% — niski stan zasobów samoregulacji ulega wskazówce o zerowym tarciu',
                feedback: 'Prawda. Po całym dniu pracy kora przedczołowa nie ma energii na walkę z bodźcem o zerowym oporze.',
                isOptimal: true
              },
              {
                text: 'Poniżej 10% — szczere postanowienie wystarcza do stłumienia odruchu',
                feedback: 'Błędne założenie. Badania Baumeistera i Wood dowodzą, że intencja w warunkach zerowego tarcia i zmęczenia niemal zawsze przegrywa.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wariant B: Wprowadzenie reguły 20 sekund tarcia (Zmień jeden element)',
            description: 'Kamil wyjmuje baterie z pilota i kładzie je w łazience w szafce, a na stoliku kawowym kładzie otwartą książkę z zaznaczonym akapitem.',
            options: [
              {
                text: 'Kamil wchodzi do pokoju: książka ma zerowe tarcie, a pilot wymaga pójścia do łazienki — następuje odruchowe sięgnięcie po książkę',
                feedback: 'Precyzyjnie. Odwrócenie proporcji tarcia sprawia, że ścieżka najmniejszego oporu prowadzi prosto do zachowania pożądanego.',
                isOptimal: true
              },
              {
                text: 'Kamil i tak natychmiast pójdzie po baterie, bo pragnienie telewizji jest silniejsze niż jakikolwiek dystans',
                feedback: 'Rzadko. Dodatkowy wysiłek fizyczny daje korze czas na zadanie pytania: „Czy naprawdę chcę marnować ten wieczór?”.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki jeden niszczący Twój czas nawyk mógłbyś skutecznie unieszkodliwić, dodając do niego zaledwie 20 sekund fizycznego tarcia?'
      }
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
      readingTimeMinutes: 20,
      quote: {
        text: 'Formułując intencję implementacyjną w precyzyjnym formacie: „Jeśli pojawi się sytuacja X, to natychmiast wykonam reakcję Y”, człowiek przenosi kontrolę nad zachowaniem z zawodnego wysiłku woli na wskazówkę środowiskową. W momencie konfrontacji z sytuacją, działanie odpala się natychmiastowo, bez wysiłku i bez zużycia energii samokontroli.',
        author: 'Prof. Peter M. Gollwitzer',
        source: 'New York University, „Implementation Intentions: Strong Effects of Simple Plans”, American Psychologist, 1999'
      },
      paragraphs: [
        'Jednym z najbardziej fundamentalnych odkryć psychologii celów jest tzw. Luka Intencja-Działanie (Intention-Action Gap): fakt, że posiadanie silnej, pozytywnej motywacji do wykonania działania tłumaczy zaledwie 20-30% rzeczywistej wariancji zachowań. Ludzie szczerze chcą ćwiczyć, oszczędzać, zdrowiej jeść i uczyć się języków, ale w krytycznym momencie poddają się bezwładowi lub impulsom.',
        'Profesor Peter Gollwitzer z New York University dokonał przełomu, wprowadzając koncepcję Intencji Implementacyjnych (Implementation Intentions). W odróżnieniu od klasycznych Intencji Celowych („Chcę osiągnąć cel Z”), intencja implementacyjna łączy specyficzny stan środowiskowy lub somatyczny z konkretną odpowiedzią motoryczną: „JEŚLI nastąpi warunek X [czas, miejsce, bodziec], TO wykonam czynność Y”.',
        'Metanalizy obejmujące ponad 8 000 uczestników (Gollwitzer & Sheeran, 2006) wykazały średnią wielkość efektu d = 0.65 — co w psychologii społecznej oznacza kolosalny wzrost prawdopodobieństwa wdrożenia trudnego, odroczonego w czasie zachowania, szczególnie u osób z deficytami uwagi lub w stanach wyczerpania psychicznego.'
      ],
      subsections: [
        {
          id: 'sub-23-21-1',
          title: 'Analiza słów prof. Petera Gollwitzera: Mentalna Dostępność Wskazówki i Automatyzacja Strategiczna',
          content: [
            'Wypowiedź prof. Gollwitzera wyjaśnia podwójny mechanizm neuropsychologiczny intencji implementacyjnych:',
            '1. HIPER-DOSTĘPNOŚĆ PERCEPCYJNA WSKAZÓWKI (Cue Accessibility): Kiedy z góry określisz sytuację X (np. „Gdy kelner zapyta o deser”), kora wzrokowa i słuchowa zostają „zaprogramowane” na wyłapanie tego bodźca. Bodziec ten zyskuje wyższy priorytet uwagi, przebijając się przez szum otoczenia.',
            '2. AUTOMATYCZNE POŁĄCZENIE Z REAKCJĄ (Strategic Automaticity): Połączenie bodźca z reakcją staje się tak silne, jak w naturalnym nawyku. W ułamku sekundy, w którym kelner zadaje pytanie, odpowiedź: „Poproszę tylko zieloną herbatę” odpala się bez udziału fazy deliberacji („A może jednak spróbuję sernika?”).'
          ]
        },
        {
          id: 'sub-23-21-2',
          title: 'Intencje Zaradcze (Coping Planning): Ochrona Przed Przeszkodami',
          content: [
            'Najczęstszym powodem załamania planów nie jest brak chęci, lecz pojawienie się nieprzewidzianej przeszkody: deszczu, zmęczenia po pracy, telefonu od znajomego czy braku składników.',
            'Zaawansowany protokół If-Then wymaga sformułowania intencji zaradczych w schemacie: „Jeśli [Napotkam Przeszkodę P], to [Zastosuję Działanie Kompensacyjne K]”. Przykład: „Jeśli po powrocie z pracy będę czuć silne zmęczenie psychiczne, to nie usiądę na kanapie z telefonem, lecz natychmiast wezmę 5-minutowy chłodny prysznic i włożę strój sportowy”.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-23-21-1',
          type: 'badanie',
          title: 'Eksperyment z Badaniem Piersi i Samobadaniem Onkologicznym (Orbell & Sheeran)',
          content: 'Kobiety, które otrzymały wyłącznie ulotkę informacyjną o konieczności comiesięcznego samobadania, wykonywały je w 53% przypadków. Kobiety, które poproszono o zapisanie jednego zdania If-Then: „Jeśli wybije pierwszy piątek miesiąca po wieczornym prysznicu, to wykonam badanie przed lustrem”, zrealizowały cel w 100% przypadków. Pojedynczy plan If-Then całkowicie zlikwidował opór i zapominanie.'
        }
      ],
      interactiveWindow: {
        id: 'win-23-21',
        title: 'Konstruktor Intencji Implementacyjnych Gollwitzera: Od Celu do Skryptu If-Then',
        type: 'co_zrobilbys',
        context: 'Jakub (26 lat) od trzech miesięcy powtarza: „Muszę zacząć uczyć się hiszpańskiego”. Codziennie wieczorem po powrocie z pracy mówi sobie, że jest zbyt zmęczony i odłoży to na jutro. Zbuduj dla Jakuba odporny na wymówki skrypt If-Then.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór stabilnej kotwicy kontekstowej (Warunek IF)',
            description: 'Który warunek początkowy IF najskuteczniej wyeliminuje deliberację i wątpliwości?',
            options: [
              {
                text: '„Gdy będę mieć wolną chwilę i poczuję wenę do nauki…”',
                feedback: 'Kardynalny błąd. „Wolna chwila” i „wena” nigdy nie nadejdą w stanie zmęczenia — brak konkretnej wskazówki sensorycznej uniemożliwia automatyzację.',
                isOptimal: false
              },
              {
                text: '„Jeśli odłożę klucze na półkę w przedpokoju po powrocie z biura…”',
                feedback: 'Doskonała kotwica. Konkretny, powtarzalny gest fizyczny w stałej lokalizacji, który dzieje się każdego dnia bez wyjątku.',
                isOptimal: true
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Precyzja reakcji motorycznej (Czynność THEN)',
            description: 'Jak powinna wyglądać reakcja THEN, aby nie wywołać paraliżującego oporu poznawczego w mózgu Jakuba?',
            options: [
              {
                text: '„…to otworzę fiszki w telefonie i przerobię dokładnie 5 słówek, stojąc jeszcze w butach przedpokoju.”',
                feedback: 'Genialne! Skrajnie niski próg wejścia (2 minuty) i natychmiastowe sprzężenie z kotwicą uniemożliwiają ucieczkę na kanapę.',
                isOptimal: true
              },
              {
                text: '„…to usiądę do biurka i będę uczyć się gramatyki przez pełne 60 minut bez przerw.”',
                feedback: 'Zbyt wysoki koszt poznawczy. Mózg Jakuba natychmiast wygeneruje opór i wymówkę o zmęczeniu.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki jeden zamiar od miesięcy odkładasz na „kiedyś”? Sformułuj dla niego bezwzględnie precyzyjny plan If-Then łączący fizyczną kotwicę z 2-minutowym działaniem.'
      },
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

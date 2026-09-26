import { Chapter, CaseStudy, SelfExercise, ExamQuestion } from '../types/book';

export const caseStudiesChapterTwentyTwo: CaseStudy[] = [
  {
    id: 'cs-22-1',
    title: 'Pułapka Czystej Silnej Woli',
    subtitle: 'Dlaczego ambitna menedżerka ponosiła porażkę mimo wysokie sprawności i silnej motywacji',
    protagonist: 'Marta (34 lata, Senior Product Manager)',
    context: 'Praca w wysokim stresie pod presją terminów, chęć napisania książki branżowej po godzinach oraz przejścia na zdrowy tryb życia.',
    story: [
      'Marta postanowiła, że każdego dnia po 8 godzinach wyczerpującej pracy umysłowej w korporacji spędzi 2 godziny na pisaniu książki i zrezygnuje z podjadania słodyczy. Co rano powtarzała sobie z determinacją: "Dzisiaj będę twarda, zmuszę się do pracy i nie ulegnę rozproszeniom".',
      'Przez pierwsze trzy dni realizowała plan siłą woli, zużywając ogromne pokłady energii na ignorowanie zmęczenia i powstrzymywanie chęci sięgnięcia po przekąskę. Czuła rosnące napięcie emocjonalne.',
      'Cwartego dnia, po szczególnie trudnym zebraniu z zarządem, wracając do domu poczuła głęboki spadek energii. Zamiast pisać książkę, spędziła 3 godziny bezmyślnie przeglądając telefon i zjadła całe opakowanie ciastek. Poczuła ogromne poczucie winy i uznała, że "nie ma silnej woli".'
    ],
    decisionTaken: 'Poleganie wyłącznie na bezpośredniej kontroli zarządczej (zmuszaniu się) w stanie wysokiego wyczerpania zasobów zarządczych, bez jakiejkolwiek modyfikacji środowiska.',
    whatProtagonistSaw: 'Marta uważała, że jedynym problemem jest jej "słaby charakter" i brak wystarczającej dyscypliny.',
    whatWasMissed: 'Zignorowała fakt, że jej kora przedczołowa była do cna wyczerpana wielogodzinnym podejmowaniem decyzji w pracy, a telefon i słodycze znajdowały się w zasięgu ręki, stanowiąc natychmiastowo dostępne źródło dopaminy.',
    psychologicalAnalysis: {
      coreMechanism: 'Ego Depletion & Response Inhibition Fatigue — wyczerpanie zasobów kontroli zarządczej na skutek przedłużonego stresu i ciągłego tłumienia impulsów.',
      cognitiveBiases: [
        {
          name: 'Błąd atrybucji cechowej',
          description: 'Przypisanie niepowodzenia "słabej woli" zamiast analizie architektury sytuacji.',
          impact: 'Spadek poczucia własnej skuteczności i niechęć do dalszych prób.'
        },
        {
          name: 'Efekt "A niech to!" (What-the-hell effect)',
          description: 'Przekroczenie drobnego ograniczenia prowadzi do całkowitego porzucenia samokontroli.',
          impact: 'Zjedzenie całego opakowania ciastek po jednym usterkowym potknięciu.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Racjonalizacja',
          explanation: 'Tłumaczenie porażki "wrodzonym brakiem silnej woli", co zwalnia z odpowiedzialności za zmianę strategii.'
        }
      ],
      emotionalDynamic: 'Napięcie wynikające z konfliktu między wysokim standardem a wyczerpaniem technologicznym, zakończone ucieczką w natychmiastową ulgę.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Planowanie i hamowanie reakcji', activationState: 'Wyraźnie obniżona po stresującym dniu' },
        { region: 'Prążkowie (Striatum)', role: 'Kodowanie natychmiastowej wartości dopaminowej', activationState: 'Nadaktywne w odpowiedzi na widok słodyczy/telefonu' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Sygnalizacja gwałtownej ulgi i nagrody po sięgnięciu po łatwe bodźce' },
        { name: 'Kortyzol', roleInScenario: 'Podwyższony stan stresu blokujący funkcje zarządcze PFC' }
      ],
      biologicalTimeline: [
        { timeMs: '0-200 ms', process: 'Rejestracja zmęczenia i widok telefonu na biurku' },
        { timeMs: '200-500 ms', process: 'Brak reakcji hamującej z osłabionej dlPFC' },
        { timeMs: '500+ ms', process: 'Automatyczne sięgnięcie po przekąskę i impulsywne zachowanie' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Środowiskowy impuls dopaminowy', description: 'Trzymanie powiadomień i przekąsek w bezpośrednim polu widzenia', vulnerabilityExploited: 'Zmęczenie poznawcze po pracy' }
      ],
      counterMeasures: [
        { step: 'Modyfikacja Sytuacji', script: 'Telefon zostawiam w innym pokoju, słodycze usuwam z domu.', rationale: 'Eliminacja bodźca usuwa konieczność zużywania energii na tłumienie.' }
      ]
    },
    keyTakeaway: 'Samoregulacja nie polega na walce z samym sobą, lecz na unikaniu walki poprzez mądre zarządzanie środowiskiem i energią.'
  },

  {
    id: 'cs-22-2',
    title: 'Anatomia Prokrastynacji Emocjonalnej',
    subtitle: 'Jak ucieczka przed lękiem przed porażką przybierała postać obsesyjnego sprzątania',
    protagonist: 'Kamil (28 lat, doktorant nauk ścisłych)',
    context: 'Napisanie kluczowego rozdziału dysertacji, od którego zależało przedłużenie stypendium naukowej.',
    story: [
      'Kamil miał 3 tygodnie na napisanie 30 stron skomplikowanej analizy matematycznej. Za każdym razem, gdy siadał do komputera, odczuwał nieokreślony ścisk w żołądku i niepokój.',
      'Zamiast pisać, natychmiast dochodził do wniosku, że "musi najpierw uporządkować całe mieszkanie, poukładać dokumenty i zrobić zaległe pranie", aby móc pracować w czystym otoczeniu.',
      'Dopiero na 48 godzin przed terminem, prowadzony paniką, napisał tekst w stanie ogromnego stresu i wyczerpania, uzyskując wynik znacznie poniżej swoich rzeczywistych możliwości.'
    ],
    decisionTaken: 'Zastąpienie zadania wywołującego niepokój poznawczy zadaniem zastępczym dającym natychmiastowe poczucie kontroli i porządku.',
    whatProtagonistSaw: 'Kamil sądził, że po prostu ceni porządek i jest rozpraszany przez nieład w pokoju.',
    whatWasMissed: 'Nie zauważył, że sprzątanie było formą regulacji emocjonalnej — ucieczką przed lękiem przed potencjalną porażką, własną niekompetencją i wysokimi wymaganiami idealnego Ja.',
    psychologicalAnalysis: {
      coreMechanism: 'Mood Repair via Avoidance — traktowanie prokrastynacji jako strategii radzenia sobie z trudną emocją, a nie zaburzenia zarządzania czasem.',
      cognitiveBiases: [
        {
          name: 'Perfekcjonizm adaptacyjny vs dezadaptacyjny',
          description: 'Przekonanie, że praca musi być doskonała od pierwszej linijki.',
          impact: 'Paraliż decyzyjny i lęk przed podjęciem próby.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Sublimacja / Przemieszczenie',
          explanation: 'Skierowanie energii z trudnego pisania na bezpieczne i społecznie aprobowane sprzątanie.'
        }
      ],
      emotionalDynamic: 'Niewyrażony lęk przed oceną wyzwalający natychmiastową potrzebę redukcji napięcia poprzez proste, zastępcze sukcesy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Detekcja zagrożenia oceniającego', activationState: 'Sygnalizacja niepokoju na widok pustego dokumentu' },
        { region: 'Przednia kora wyspy', role: 'Rejestracja dyskomfortu somatycznego', activationState: 'Wzmocnione odczucie ścisku w żołądku' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Podwyższone napięcie stresowe skłaniające do ucieczki' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Otwarcie pliku z pracą doktorską' },
        { timeMs: '100-300 ms', process: 'Reakcja niepokoju z ciała migdałowatego' },
        { timeMs: '300+ ms', process: 'Przełączenie uwagi na sprzątanie w celu natychmiastowego obniżenia napięcia' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Samooszukiwanie poznawcze', description: 'Przekonanie, że sprzątanie to również pożyteczna praca', vulnerabilityExploited: 'Potrzeba utrzymania pozytywnego obrazu siebie' }
      ],
      counterMeasures: [
        { step: 'Tolerancja Dyskomfortu & Mikro-krok', script: 'Będę pisać niezgrabnie przez dokładnie 5 minut, bez poprawiania błędów.', rationale: 'Obniżenie progu wejścia redukuje lęk przed oceną.' }
      ]
    },
    keyTakeaway: 'Prokrastynacja to nie problem z czasem, lecz z regulacją nieprzyjemnych emocji towarzyszących zadaniu.'
  },

  {
    id: 'cs-22-3',
    title: 'Siła Intencji Implementacyjnych',
    subtitle: 'Jak precyzyjny plan "Jeśli-To" zmienił nawyki reagowania w zespole projektowym',
    protagonist: 'Tomasz (41 lat, Lider Zespołu Inżynieryjnego)',
    context: 'Trudne spotkania statusowe, na których pod wpływem krytyki ze strony klienta Tomasz reagował defensywnie i podnosił głos.',
    story: [
      'Tomasz wielokrotnie obiecywał sobie przed zebraniem: "Dzisiaj zachowam spokój i nie dam się ponieść emocjom". Jednak wystarczyła jedna uszczypliwa uwaga klienta, by automatycznie wchodził w konflikt.',
      'Po konsultacji z psychologiem zastosował intencje implementacyjne Gollwitzera. Zamiast ogólnego postanowienia, stworzył precyzyjną regułę: "JEŚLI klient skrytykuje nasz kod, TO powstrzymam się od odpowiedzi przez 3 sekundy, wezmę głęboki wdech i powiem: "To cenne spostrzeżenie, przeanalizujemy ten punkt"."',
      'Podczas kolejnego zebrania, gdy padła złośliwa uwaga, wyuczony skrypt uruchomił się automatycznie, całkowicie zmieniając przebieg dyskusji.'
    ],
    decisionTaken: 'Zastąpienie deklaratywnego intencjonalizmu ("Będę spokojny") automatycznym algorytmem zachowania opartym na jednoznacznym wyzwalaczu.',
    whatProtagonistSaw: 'Sądził, że jego impulsywność jest cechą osobowości, której nie da się opanować w ułamku sekundy.',
    whatWasMissed: 'Przeoczył fakt, że intencja "Jeśli-To" tworzy silne powiązanie w pamięci implicitly pozwalające pominąć proces mozolnego namysłu pod wpływem emocji.',
    psychologicalAnalysis: {
      coreMechanism: 'Implementation Intentions (Gollwitzer) — delegowanie kontroli zachowania na bodziec zewnętrzny.',
      cognitiveBiases: [
        {
          name: 'Złudzenie planowania beztekstowego',
          description: 'Przekonanie, że sama chęć zmiany zachowania wystarczy do jej zaistnienia w stresie.',
          impact: 'Powtarzające się porażki regulacyjne.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Identyfikacja z impulsem',
          explanation: 'Traktowanie odruchowego gniewu jako autentycznego głosu tożsamości.'
        }
      ],
      emotionalDynamic: 'Przejście od reaktywności afektywnej do ustrukturyzowanej odpowiedzi zarządczej.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro ogoniaste / Prążkowie', role: 'Automatyczna realizacja zaprogramowanych procedur', activationState: 'Szybkie uruchomienie skryptu bez obciążenia PFC' },
        { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Monitowanie konfliktu', activationState: 'Zmniejszona gwałtowność sygnału alarmowego' }
      ],
      neurotransmitters: [
        { name: 'GABA', roleInScenario: 'Sprawna inhibicja motoryczna i emocjonalna pod wpływem skryptu' }
      ],
      biologicalTimeline: [
        { timeMs: '0-50 ms', process: 'Detekcja słów krytycznych klienta' },
        { timeMs: '50-150 ms', process: 'Aktywacja ścieżki "Jeśli-To" w pamięci proceduralnej' },
        { timeMs: '150-300 ms', process: 'Wykonanie pauzy i mikrowdechu zamiast krzyku' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Prowokacja emocjonalna', description: 'Atak na dorobek zespołu w celu wywołania defensywności', vulnerabilityExploited: 'Duma profesjonalna' }
      ],
      counterMeasures: [
        { step: 'Algorytm Reakcji', script: 'Stosuję udręczoną pauzę i gotową formułę komunikacyjną.', rationale: 'Rozbrojenie prowokacji poprzez brak spodziewanej walki.' }
      ]
    },
    keyTakeaway: 'Kiedy planujesz zachowanie w postaci reguły "Jeśli X, to Y", odciążasz umysł z konieczności podejmowania decyzji w stanie wzburzenia.'
  },

  {
    id: 'cs-22-4',
    title: 'Model WOOP w Praktyce Sportowej',
    subtitle: 'Jak połączenie kontrastowania mentalnego z planowaniem przeszkód uratowało sezon maratończyka',
    protagonist: 'Łukasz (31 lat, biegacz amator)',
    context: 'Przygotowania do maratonu i ciągłe porzucanie treningów w chłodne, deszczowe poranki.',
    story: [
      'Łukasz stawiał sobie cel: "Przebiegnę maraton w czasie poniżej 3:30". Wizualizował sobie wspaniały finisz, medal i dumę. Jednak w praktyce, gdy rano widział deszcz za oknem, zostawał w łóżku.',
      'Zastosował metodę WOOP (Wish, Outcome, Obstacle, Plan) Gabriele Oettingen. Zidentyfikował Cel (W), Najlepszy Wynik (O), ale kluczowym krokiem było uczciwe wskazanie Wewnętrznej Przeszkody (O): "Moje przemożne lenistwo i chłód przy wyjściu z łóżka".',
      'Następnie stworzył Plan (P): "JEŚLI budzik zadzwoni i poczuję chęć zostania w łóżku, TO natychmiast usiądę na łóżku, założę przygotowane przy łóżku buty i nie będę analizował pogody". Stosując ten schemat, ukończył 95% zaplanowanych treningów.'
    ],
    decisionTaken: 'Przejście od naiwnej wizualizacji sukcesu do kontrastowania mentalnego połączonego z gotowym planem pokonania wewnętrznego oporu.',
    whatProtagonistSaw: 'Myślał, że pozytywne myślenie i wizualizowanie sukcesu da mu energię do porannego wstawania.',
    whatWasMissed: 'Przeoczył badania pokazujące, że sama czysta wizualizacja celu obniża ciśnienie krwi i motywację operacyjną, wywołując złudzenie, że cel został już osiągnięty.',
    psychologicalAnalysis: {
      coreMechanism: 'Mental Contrasting with Implementation Intentions (MCII / WOOP) — aktywacja sygnału energetyzującego poprzez zderzenie marzenia z rzeczywistością.',
      cognitiveBiases: [
        {
          name: 'Naiwny optymizm wizualizacyjny',
          description: 'Przekonanie, że myślenie o sukcesie automatycznie generuje działanie.',
          impact: 'Spadek mobilizacji organizmu w obliczu rzeczywistego wysiłku.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Fantazjowanie',
          explanation: 'Zastępowanie trudu realnego treningu przyjemnymi obrazami mety.'
        }
      ],
      emotionalDynamic: 'Przekształcenie biernego marzenia w stan czujności ukierunkowany na przełamanie konkretnego oporu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Szacowanie wartości celu i przeszkody', activationState: 'Zrównoważona aktywacja wartości i kosztu' },
        { region: 'Niskowzgórze / Układ Siatkowaty (RAS)', role: 'Pobudzenie fizjologiczne', activationState: 'Wzrost napięcia gotowości do ruchu' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Dopamina wyzwolona z racji jasnej drogi pokonania zidentyfikowanej przeszkody' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Sygnał budzika i odczucie chłodu' },
        { timeMs: '100-250 ms', process: 'Aktywacja skryptu WOOP: siadanie na łóżku bez dyskusji' },
        { timeMs: '250+ ms', process: 'Założenie butów, brak przestojów myślowych' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Komfort termiczny jako wyzwalacz', description: 'Łóżko wywołuje impuls pozostania', vulnerabilityExploited: 'Dążenie ciała do homeostazy' }
      ],
      counterMeasures: [
        { step: 'Kotwiczenie Ruchowe', script: 'Pierwszym ruchem jest postawienie stóp na podłodze.', rationale: 'Ruch ciała wyprzedza debatę myślową.' }
      ]
    },
    keyTakeaway: 'Nie wystarczy marzyć o celu; musisz mentalnie zderzyć marzenie z najsilniejszą przeszkodą w sobie i zaplanować dokładny unik.'
  },

  {
    id: 'cs-22-5',
    title: 'Pułapka Zmęczenia Decyzyjnego w Dietycie',
    subtitle: 'Dlaczego wieczorne wybory żywieniowe kończą się klęską mimo udanego poranka',
    protagonist: 'Karolina (39 lat, architekta)',
    context: 'Praca nad wielkim projektem budowlanym wymagająca setek mikro-decyzji dziennie oraz próba redukcji masy ciała.',
    story: [
      'Karolina co rano przygotowywała zdrowe śniadanie i z powodzeniem odmawiała darmowych pączków w biurze. Pomiędzy 9:00 a 17:00 podjęła ponad 200 trudnych decyzji projektowych, negocjowała z wykonawcami i rozwiązywała kryzysy.',
      'Gdy wracała do domu o 19:30, jej lodówka była pełna surowych warzyw wymagających gotowania. Wytrzymywała 15 minut, po czym zamawiała dużą pizzę z dostawą.',
      'Czując głęboki żal, myślała: "Przez cały dzień mam świetną samokontrolę, dlaczego wieczorem staję się innym człowiekiem?".'
    ],
    decisionTaken: 'Wymaganie od siebie trudnego przygotowywania posiłków w stanie skrajnego zmęczenia decyzyjnego.',
    whatProtagonistSaw: 'Uważała, że wieczorny apetyt to dowód na brak dyscypliny moralnej.',
    whatWasMissed: 'Nie rozumiała mechanizmu wyczerpania elastyczności poznawczej i deprywacji energetycznej kory przedczołowej po całym dniu ciągłego wyboru.',
    psychologicalAnalysis: {
      coreMechanism: 'Decision Fatigue & Depletion of Executive Function — spadek zdolności do hamowania impulsów po długotrwałym podejmowaniu decyzji.',
      cognitiveBiases: [
        {
          name: 'Dyskontowanie hiperboliczne',
          description: 'Wzrost wartości natychmiastowej nagrody (pizza) nad odroczoną zdrowotną korzyścią.',
          impact: 'Porzucenie celów długoterminowych pod koniec dnia.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Regulacja kompulsywna',
          explanation: 'Używanie jedzenia jako szybkiego środka do uśmierzenia zmęczenia psychicznego.'
        }
      ],
      emotionalDynamic: 'Spadek odporności na frustrację wywołany wyczerpaniem zasobów kontroli zarządczej.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Brzuszno-boczna kora przedczołowa (vlPFC)', role: 'Tłumienie niepożądanych reakcji', activationState: 'Znikoma aktywność po 10 godzinach pracy' },
        { region: 'Podwzgórze', role: 'Regulacja łaknienia i sygnały metaboliczne', activationState: 'Silna reakcja na zapach i obraz kalorii' }
      ],
      neurotransmitters: [
        { name: 'Serotonina', roleInScenario: 'Spadek poziomu wzmagający poszukiwanie węglowodanów prostych' }
      ],
      biologicalTimeline: [
        { timeMs: '0-200 ms', process: 'Otwarcie pustej lodówki i poczucie znużenia' },
        { timeMs: '200-400 ms', process: 'Brak elastyczności poznawczej do gotowania' },
        { timeMs: '400+ ms', process: 'Zamówienie pizzy jednym kliknięciem na aplikacji' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Aplikacje z szybką dostawą', description: 'Maksymalne ułatwienie zakupu kalorii (jeden przycisk)', vulnerabilityExploited: 'Zmęczenie decyzyjne klienta' }
      ],
      counterMeasures: [
        { step: 'Meal Prep / Pre-commitment', script: 'Gotuję posiłki w niedzielę na 3 dni do przodu. Wchodzę do domu i tylko podgrzewam.', rationale: 'Zero decyzji żywieniowych po powrocie z pracy.' }
      ]
    },
    keyTakeaway: 'Gdy Twój umysł jest wyczerpany podejmowaniem decyzji, wybierze najmniej wymagającą ścieżkę oporu — zaplanuj posiłki zanim nastąpi wyczerpanie.'
  },

  {
    id: 'cs-22-6',
    title: 'Przewartościowanie Poznawcze w Treningu Wystąpień',
    subtitle: 'Przekształcenie lęku scenicznego w motywującą ekscytację u doradcy podatkowego',
    protagonist: 'Marek (45 lat, Partner w firmie doradczej)',
    context: 'Konieczność wygłoszenia prelekcji dla 300 kluczowych klientów biznesowych.',
    story: [
      'Marek przed każdym duży wystąpieniem odczuwał walenie serca, drżenie rąk i suchość w ustach. Jego dotychczasowa strategia samoregulacji polegała na powtarzaniu sobie: "Uspokój się, musisz być opanowany, nie denerwuj się".',
      'Tłumienie objawów powodowało jeszcze większy wzrost tętna i poczucie, że traci kontrolę nad ciałem. Tuż przed wyjściem na scenę czuł paraliżujący lęk.',
      'Zastosował techniczną strategię Reappraisal (Alison Wood Brooks): Zamiast walczyć z pobudzeniem, zmienił etykietę poznawczą. Gdy czuł walenie serca, mówił sobie na głos: "Moje ciało mobilizuje ogromną energię. Nie jestem przerażony — jestem niezwykle podekscytowany i gotowy!". Przekazał prelekcję z ogromną dynamiką.'
    ],
    decisionTaken: 'Zamiana tłumienia fizjologicznego pobudzenia na przewartościowanie znaczenia tego pobudzenia (z "groźnego stresu" na "gotowość do działania").',
    whatProtagonistSaw: 'Sądził, że idealnym stanem przed wystąpieniem jest całkowity spokój i niskie tętno.',
    whatWasMissed: 'Nie brał pod uwagę, że przejście ze stanu wysokiego pobudzenia (lęk) do stanu niskiego pobudzenia (spokój) jest trudne dla układu nerwowego, podczas gdy przejście z lęku do ekscytacji zachowuje ten sam poziom pobudzenia, zmieniając jedynie znak emocji.',
    psychologicalAnalysis: {
      coreMechanism: 'Cognitive Reappraisal & Arousal Relabeling — zmiana afektywnego ramowania stanów fizjologicznych.',
      cognitiveBiases: [
        {
          name: 'Katastrofizacja somatyczna',
          description: 'Interpretowanie drżenia rąk jako zapowiedzi całkowitej kompromitacji.',
          impact: 'Eskalacja lęku w pętli dodatniego sprzężenia zwrotnego.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Tłumienie afektu (Suppression)',
          explanation: 'Próba zamaskowania lęku, która podnosi ciśnienie krwi i obciąża zasoby zarządcze.'
        }
      ],
      emotionalDynamic: 'Przekształcenie defensywnego układu zagrożenia w proaktywny układ wyzwania.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Reinterpretacja sygnałów zagrożenia', activationState: 'Wzrost aktywacji modulującej ciało migdałowate' },
        { region: 'Ciało migdałowate', role: 'Generowanie reakcji walki/ucieczki', activationState: 'Wyhamowanie sygnału zagrożenia pod wpływem nowej etykiety' }
      ],
      neurotransmitters: [
        { name: 'Adrenalina', roleInScenario: 'Zużyta jako paliwo do dynamicznej prezentacji zamiast wywoływać paraliż' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Rejestracja szybkiego bicia serca przed wejściem na scenę' },
        { timeMs: '100-300 ms', process: 'Etykietowanie: "To jest ekscytacja i mobilizacja"' },
        { timeMs: '300+ ms', process: 'Przejście energii w płynną ekspresję słowną' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Społeczny stres oceniania', description: 'Duża publiczność wzmaga obawę o status', vulnerabilityExploited: 'Potrzeba przynależności i uznania' }
      ],
      counterMeasures: [
        { step: 'Arousal Relabeling', script: 'Mówię w myślach: "Mój organizm daje mi darmową dawkę paliwa, by wypaść genialnie".', rationale: 'Zmiana walencji emocjonalnej bez konieczności sztucznego wyciszania.' }
      ]
    },
    keyTakeaway: 'Nie próbuj się uspokajać, gdy Twój organizm bije na alarm — przekieruj to pobudzenie i powiedz sobie, że to ekscytacja.'
  },

  {
    id: 'cs-22-7',
    title: 'Środowiskowa Architektura Wyborów',
    subtitle: 'Jak drobna zmiana aranżacji biurka uratowała skupienie programisty',
    protagonist: 'Szymon (26 lat, Software Engineer)',
    context: 'Praca zdalna w domu, trudności ze skupieniem uwagi na złożonym kodzie przez czas dłuższy niż 10 minut.',
    story: [
      'Szymon spędzał godziny walcząc ze swoją chęcią zaglądania na portale informacyjne i media społecznościowe. Miał otwarto ponad 30 kart w przeglądarce, a telefon leżał tuż obok klawiatury.',
      'Każde powiadomienie powodowało u niego mikro-decyzję: "Sprawdzić czy ignorować?". Zmuszał się do ignorowania, lecz po kilkudziesięciu takich mikrowalkach czuł znużenie i pękał.',
      'Zamiast kolejnej aplikacji do blokowania stron, przeprowadził architekturę środowiska: kupił klasyczny budzik, telefon włożył do sejfu czasowego w przedpokoju, zatknął uszy słuchawkami wyciszającymi i użył przeglądarki wyłączającej wskaźniki kart. Czas głębokiej pracy wydłużył się z 15 minut do 3 godzin dziennie.'
    ],
    decisionTaken: 'Usunięcie fizycznych i cyfrowych bodźców wyzwalających z pola widzenia zamiast ciągłego podejmowania walki hamującej.',
    whatProtagonistSaw: 'Mślał, że ma zaburzenia koncentracji i niedobór dopaminy, który wymaga farmakoterapii.',
    whatWasMissed: 'Przeoczył fakt, że sam widok smartfona (nawet wyciszonego i odwróconego ekranem do dołu) absorbuje część mocy obliczeniowej kory przedczołowej (badania Warda et al., "Brain Drain").',
    psychologicalAnalysis: {
      coreMechanism: 'Choice Architecture & Friction Engineering — sztuka tworzenia oporu (friction) dla zły zachowań i gładkości dla dobrych.',
      cognitiveBiases: [
        {
          name: 'Złudzenie darmowej uwagi',
          description: 'Przekonanie, że obecność telefonu nie wpływa na jakość myślenia, dopóki w niego nie patrzymy.',
          impact: 'Cicha utrata pojemności pamięci roboczej.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Pojedynczy determinizm',
          explanation: 'Szukanie przyczyn roztargnienia wyłącznie w biochemii mózgu z pominięciem fizyki otoczenia.'
        }
      ],
      emotionalDynamic: 'Gwałtowny spadek mikro-stresu wynikający z braku ciągłego pokuszenia.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Siatkówka i pole wzrokowe (FEF)', role: 'Kierowanie wzroku i uwagi', activationState: 'Brak ciągłych odchyleń uwagowych na korzyść bodźców peryferyjnych' },
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Utrzymanie celu w pamięci roboczej', activationState: 'Pełne wykorzystanie pojemności do przetwarzania kodu' }
      ],
      neurotransmitters: [
        { name: 'Aczetylocholina', roleInScenario: 'Stabilna neuromodulacja uwagi w korze wzrokowej i skroniowej' }
      ],
      biologicalTimeline: [
        { timeMs: '0-500 ms', process: 'Brak bodźców powiadomieniowych w otoczeniu' },
        { timeMs: '500+ ms', process: 'Swobodne wejście w stan przepływu (Flow) bez mikro-przerw' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Projektowanie pętli hook (Nir Eyal)', description: 'Powiadomienia push zaprojektowane jako zmienny harmonogram wzmocnień', vulnerabilityExploited: 'Ciekawość i głód dopaminowy' }
      ],
      counterMeasures: [
        { step: 'Fizyczny Opór (Tarcie)', script: 'Schowanie telefonu za dwoma zamkniętymi drzwiami.', rationale: 'Konieczność wstania z krzesła sprawia, że nawyk staje się świadomą decyzją.' }
      ]
    },
    keyTakeaway: 'Dobre środowisko sprawia, że właściwa decyzja jest najprostsza, a zła wymaga niedogodnego wysiłku.'
  },

  {
    id: 'cs-22-8',
    title: 'Elastyczność Regulacyjna i Regeneracja',
    subtitle: 'Jak obwinianie się za potknięcia uniemożliwiało zbudowanie trwałej zmiany',
    protagonist: 'Ewa (32 lata, fizjoterapeutka)',
    context: 'Próba regularnej medytacji i porannego rozciągania.',
    story: [
      'Ewa założyła sobie sztywną zasadę: "Będę medytować dokładnie 20 minut każdego dnia o 6:00 rano. Brak jakiegokolwiek dnia oznacza porażkę".',
      'Przez dwa tygodnie realizowała plan. W trzecim tygodniu raz zaspała z powodu choroby dziecka. Zamiast wznowić medytację następnego dnia, uznała, że "łańcuch nawyku został przerwany, więc cała praca poszła na marne".',
      'Nie medytowała przez kolejne 3 miesiące. Dopiero po przejściu na model Elastyczności Regulacyjnej (Kashdan) ustaliła zasadę "Nigdy nie opuszczaj dwóch dni z rzędu" oraz zasady awaryjne: "Jeśli nie mam 20 minut, medytuję przez 3 minuty". To elastyczne podejście utrzymało nawyk przez lata.'
    ],
    decisionTaken: 'Zastąpienie sztywnego dychotomicznego myślenia (wszystko albo nic) elastycznym protokołem modyfikacji celu w zależności od kontekstu.',
    whatProtagonistSaw: 'Widziała samokontrolę jako czarno-biały test lojalności wobec własnych postanowień.',
    whatWasMissed: 'Nie rozumiała, że elastyczność i życzliwość dla samej siebie (Self-Compassion) są kluczowymi determinantami długoterminowej wytrwałości samoregulacyjnej.',
    psychologicalAnalysis: {
      coreMechanism: 'Regulatory Flexibility & Self-Compassion — zdolność do adaptowania strategii regulacyjnych do zmieniających się warunków.',
      cognitiveBiases: [
        {
          name: 'Myślenie czarno-białe (Dychotomiczne)',
          description: 'Postrzeganie 18-minutowej medytacji jako braku medytacji.',
          impact: 'Całkowite zaniechanie proaktywnego zachowania po drobnym odchyleniu.'
        }
      ],
      defenseMechanisms: [
        {
          name: 'Ukaranie siebie',
          explanation: 'Rezygnacja z prozdrowotnego zachowania jako zakamuflowana kara za niedoskonałość.'
        }
      ],
      emotionalDynamic: 'Poczucie winy obniżające poczucie skuteczności i wywołujące reakcję obronną.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Sygnalizacja błędu', activationState: 'Nadmiernie wysoka odpowiedź na usterkę wywołująca poczucie klęski' },
        { region: 'Przyśrodkowa kora przedczołowa (mPFC)', role: 'Metapoznawcza autorefleksja', activationState: 'Uruchomienie konstruktywnego współczucia zamiast samokrytyki' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna', roleInScenario: 'Aktywowana przez postawę wyrozumiałości dla siebie, obniżająca poziom stresu' }
      ],
      biologicalTimeline: [
        { timeMs: '0-100 ms', process: 'Uświadomienie sobie opuszczenia treningu' },
        { timeMs: '100-300 ms', process: 'Refleksja elastyczna: "Jutro wracam do skróconego wariantu"' },
        { timeMs: '300+ ms', process: 'Brak utraty poczucia skuteczności' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kultura kaskaderskiego rygoru', description: 'Promowanie nierealistycznych haseł "no days off"', vulnerabilityExploited: 'Wstyd i dążenie do perfekcji' }
      ],
      counterMeasures: [
        { step: 'Zasada "Nigdy 2 razy z rzędu"', script: 'Jeden dzień przerwy to regeneracja, dwa dni to początek nowego nawyku.', rationale: 'Utrzymanie stabilności tożsamościowej bez obciążenia nieskazitelnością.' }
      ]
    },
    keyTakeaway: 'Sztywność to wrok na samokontroli — prawdziwa odporność samoregulacyjna leży w elastycznym dopasowaniu wysiłku do kontekstu.'
  }
];

export const selfExercisesChapterTwentyTwo: SelfExercise[] = [
  {
    id: 'ex-22-1',
    title: 'Audyt Pętli Samoregulacyjnej i Punktów Ttarcia',
    subtitle: 'Identyfikacja mikropęknięć w systemie kontroli zarządczej',
    objective: 'Zdiagnozowanie konkretnego obszaru, w którym wiedza i intencja nie przekładają się na działanie, oraz wyznaczenie punktów oporu.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Świadomy monitoring rozbieżności (Carver & Scheier) aktywuje grzbietową część przedniej kory zakrętu obręczy (dACC) oraz wzmacnia połączenia z dlPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór Zapętlonego Wyzwania',
        instruction: 'Wybierz jedno konkretne zachowanie, które od dłuższego czasu chcesz wdrożyć lub wyeliminować (np. wieczorne podjadanie, odkładanie nauki języka, sprawdzanie poczty w łóżku).',
        promptText: 'Jakie konkretne zachowanie stanowi Twój główny problem samoregulacyjny?',
        placeholder: 'Opisz dokładnie sytuację...'
      },
      {
        stepNumber: 2,
        title: 'Analiza Wzorca (Standardu) vs Rzeczywistości',
        instruction: 'Zapisz, jaki masz idealny standard wobec tego zachowania, a jak wygląda rzeczywistość w 80% przypadków.',
        promptText: 'Co zakłada Twój standard, a co dzieje się naprawdę?',
        placeholder: 'Standard: ... Rzeczywistość: ...'
      },
      {
        stepNumber: 3,
        title: 'Identyfikacja Wyzwalacza Sytuacyjnego i Emocjonalnego',
        instruction: 'Co bezpośrednio poprzedza porzucenie samokontroli? Zwróć uwagę na porę dnia, stan zmęczenia, obecne osoby lub odczuwaną emocję (lęk, znużenie, samotność).',
        promptText: 'Jaki bodziec lub emocja uwalnia impuls automatyczny?',
        placeholder: 'Sygnał wyzwalający...'
      },
      {
        stepNumber: 4,
        title: 'Mapa Ttarcia Środowiskowego',
        instruction: 'Ile kroków fizycznych/poznawczych dzieli Cię od pożądanego zachowania, a ile od niepożądanego?',
        promptText: 'Policz "tarcie" dla obu ścieżek:',
        placeholder: 'Złe zachowanie wymaga X kroków, dobre zachowanie wymaga Y kroków...'
      }
    ],
    reflectionQuestions: [
      'Jakie wnioski płyną z porównania oporu dla obu ścieżek?',
      'W jaki sposób możesz zwiększyć opór dla złego zachowania o co najmniej 3 dodatkowe kroki?'
    ]
  },

  {
    id: 'ex-22-2',
    title: 'Projektowanie Intencji Implementacyjnych "Jeśli-To"',
    subtitle: 'Tworzenie preprecyzyjnych skryptów automatyzacji zachowań pod wpływem presji',
    objective: 'Napisanie i zakodowanie w pamięci 3 wysoce specyficznych formuł algorytmicznych odciążających korę przedczołową.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Intencje implementacyjne przekazują kontrolę wykonawczą z dlPFC na jądra podstawy i prążkowie, obniżając czas reakcji i koszt poznawczy.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zdefiniowanie Bodźca Wyzwalającego (JEŚLI)',
        instruction: 'Sformułuj dokładnie warunek początkowy. Bodziec musi być niepodważalny, jednoznaczny i osadzony w czasie lub przestrzeni.',
        promptText: 'Napisz dokładną część "JEŚLI...":',
        placeholder: 'JEŚLI (poczuję chęć sięgnięcia po telefon podczas pisania raportu)...'
      },
      {
        stepNumber: 2,
        title: 'Zdefiniowanie Mikro-Reakcji (TO)',
        instruction: 'Określ natychmiastową, prostą i wykonalną czynność, którą podejmiesz w odpowiedzi.',
        promptText: 'Napisz dokładną część "TO...":',
        placeholder: 'TO (odłożę go ekranem do dołu do szuflady i wykonam 3 głębokie oddechy)...'
      },
      {
        stepNumber: 3,
        title: 'Próba Wyobrażeniowa (Mental Rehearsal)',
        instruction: 'Zamknij oczy i odtwórz tę sekwencję w głowie 5 razy z rzędu, czując fizycznie moment przejścia od bodźca do reakcji.',
        promptText: 'Opisz wrażenia z próby mentalnej:',
        placeholder: 'Jak płynnie przebiegła wizualizacja...'
      }
    ],
    reflectionQuestions: [
      'Czy Twój bodziec "JEŚLI" jest wystarczająco konkretny, by mózg rozpoznał go bez zastanowienia?',
      'W jakich 2 innych sytuacjach warto zastosować ten sam algorytm?'
    ]
  },

  {
    id: 'ex-22-3',
    title: 'Protokół WOOP (Kontrastowanie Mentalne z Planowaniem Przeszkód)',
    subtitle: 'Przekształcanie marzeń w sprawczy proces zderzenia z rzeczywistością',
    objective: 'Przeprowadzenie pełnego procesu WOOP (Gabriele Oettingen) dla ważnego celu długoterminowego.',
    durationMinutes: 25,
    neuroScientificFoundation: 'WOOP aktywuje jednocześnie reprezentację celu i sygnał ostrzegawczy przeszkody, budując neuronalne powiązanie między marzeniem a działaniem korygującym.',
    steps: [
      {
        stepNumber: 1,
        title: 'W — Wish (Życzenie / Cel)',
        instruction: 'Zdefiniuj cel, który jest dla Ciebie ważny, wyzywający, ale możliwy do osiągnięcia w ciągu najbliższych 30 dni.',
        promptText: 'Co jest Twoim życzeniem/celem?',
        placeholder: 'Opisz cel krótko i zwięźle...'
      },
      {
        stepNumber: 2,
        title: 'O — Outcome (Najlepszy Wynik)',
        instruction: 'Co będzie absolutnie najlepszym rezultatem osiągnięcia tego celu? Wyobraź sobie uczucie towarzyszące temu sukcesowi.',
        promptText: 'Opisz główny żywy rezultat:',
        placeholder: 'Jak się poczujesz? Co się zmieni?...'
      },
      {
        stepNumber: 3,
        title: 'O — Obstacle (Główna Wewnętrzna Przeszkoda)',
        instruction: 'Uczciwie wniknij w siebie. Jaka Twoja WEWNĘTRZNA przeszkoda (emocja, nawyk, przekonanie, impuls) najmocniej blokuje Cię przed sukcesem?',
        promptText: 'Co w Tobie stoi na drodze?',
        placeholder: 'Moja główna wewnętrzna przeszkoda to...'
      },
      {
        stepNumber: 4,
        title: 'P — Plan (Plan Jeśli-To)',
        instruction: 'Połącz wewnętrzną przeszkodę z konkretną akcją przełamującą.',
        promptText: 'Stwórz plan WOOP:',
        placeholder: 'JEŚLI pojawi się [Przeszkoda], TO zrobię [Działanie]...'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się Twoje odczucie celu po zderzeniu go z wewnętrzną przeszkodą?',
      'Czy czujesz większą realną mobilizację organizmu do działania?'
    ]
  },

  {
    id: 'ex-22-4',
    title: 'Inżynieria Ttarcia i Modyfikacja Środowiska',
    subtitle: 'Przeprojektowanie fizycznego i cyfrowego otoczenia pracy',
    objective: 'Wprowadzenie co najmniej 3 trwale modyfikujących poprawek w architekturze najbliższego otoczenia.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Usunięcie wyzwalaczy z pola widzenia chroni zasoby pamięci roboczej i redukuje aktywację układu dopaminergicznego VTA.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja Pożeraczy Uwagi',
        instruction: 'Wymień 3 przedmioty lub aplikacje, które najczęściej przerywają Twoją pracę umysłową.',
        promptText: 'Co najczęściej kradnie Twoje skupienie?',
        placeholder: '1. ... 2. ... 3. ...'
      },
      {
        stepNumber: 2,
        title: 'Zwiększenie Ttarcia (Friction Addition)',
        instruction: 'Zaprojektuj zmianę, która sprawi, że skorzystanie z tych pożeraczy zajmie co najmniej 20 sekund wysiłku.',
        promptText: 'Jak odsuniesz te bodźce od siebie?',
        placeholder: 'Opisz fizyczne zmiany...'
      },
      {
        stepNumber: 3,
        title: 'Gładkość Dobrej Ścieżki (Friction Reduction)',
        instruction: 'Zaprojektuj zmianę, która sprawi, że rozpoczęcie właściwego zadania nie wymaga żadnego przygotowania.',
        promptText: 'Jak ułatwisz start właściwego zadania?',
        placeholder: 'Przygotowanie materiałów dzień wcześniej...'
      }
    ],
    reflectionQuestions: [
      'O ile rzadziej sięgasz po rozpraszacz, gdy musisz po niego wstać z krzesła?',
      'Jak czuje się Twój umysł w uporządkowanym środowisku o niskiej stymulacji?'
    ]
  },

  {
    id: 'ex-22-5',
    title: 'Eksperyment Tolerancji Dyskomfortu (Urge Surfing)',
    subtitle: 'Uczenie się serfowania po fali pokusy bez ulegania impulsowi',
    objective: 'Przetrenowanie techniki powstrzymywania reakcji odruchowej poprzez obserwację doznań cielesnych.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Uświadomienie sobie doznań somatycznych z wyspy (Insula) bez automatycznej reakcji motorycznej wzmacnia kontrolę z top-down kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wywołanie / Wyczekanie na Impuls',
        instruction: 'Gdy poczujesz przemożną chęć sprawdzenia telefonu, zjedzenia przekąski lub przerwania pracy, zatrzymaj ruch na 2 minuty.',
        promptText: 'Jaki impuls się pojawił?',
        placeholder: 'Opisz impuls...'
      },
      {
        stepNumber: 2,
        title: 'Lokalizacja Cielesna',
        instruction: 'Gdzie w ciele czujesz ten impuls? (Ścisk w klatce piersiowej, napięcie w dłoniach, mrowienie w brzuchu?)',
        promptText: 'Gdzie fizycznie manifestuje się chęć?',
        placeholder: 'Lokalizacja i charakter doznania...'
      },
      {
        stepNumber: 3,
        title: 'Serfowanie po Fali (Urge Surfing)',
        instruction: 'Wyobraź sobie impuls jako falę na oceanie. Fala rośnie, osiąga szczyt, a następnie opada. Oddychaj i obserwuj jak opada bez reagowania.',
        promptText: 'Co stało się z intensywnością fali po 90 sekundach?',
        placeholder: 'Czy impuls zaczął słabnąć?...'
      }
    ],
    reflectionQuestions: [
      'Czy zauważasz, że żaden impuls nie trwa wiecznie, lecz wygasza się samoczynnie?',
      'Jakie to uczucie mieć wybór zamiast być sterowanym przez odruch?'
    ]
  },

  {
    id: 'ex-22-6',
    title: 'Przewartościowanie Emocjonalne w Stresie (Reappraisal)',
    subtitle: 'Przekształcanie ramowania interpretacyjnego bodźców trudnych',
    objective: 'Zmiana walencji emocjonalnej wyzwania z paraliżującego zagrożenia na wyzwanie rozwojowe.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Reappraisal aktywuje vmPFC i vlPFC, hamując ciałko migdałowate i zapobiegając niepotrzebnemu wyciekowi kortyzolu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis Stresującej Interpretacji',
        instruction: 'Zapisz automatyczną myśl dotyczącą nadchodzącego trudnego zadania.',
        promptText: 'Moja automatyczna myśl:',
        placeholder: 'To mnie przerasta, nie poradzę sobie, ośmieszę się...'
      },
      {
        stepNumber: 2,
        title: 'Zmiana Etykiety Fizjologicznej',
        instruction: 'Przekształć interpretację sygnałów z ciała (przyspieszone tętno, napięcie).',
        promptText: 'Co naprawdę robi Twoje ciało?',
        placeholder: 'Mój organizm daje mi ogromną energię i mobilizację, by działać na najwyższym poziomie...'
      },
      {
        stepNumber: 3,
        title: 'Ramowanie Wycinka Rzeczywistości (Reframing)',
        instruction: 'Jak ta sytuacja będzie wyglądać z perspektywy 5 lat? Czego konkretnie usiłuje Cię nauczyć?',
        promptText: 'Nowa konstruktywna interpretacja:',
        placeholder: 'To idealne poligon doświadczalny dla budowania mojej odporności...'
      }
    ],
    reflectionQuestions: [
      'O ile punktów w skali 1-10 spadł poziom paraliżującego lęku?',
      'W jaki sposób nowe ramowanie zmienia Twoją postawę ciała?'
    ]
  },

  {
    id: 'ex-22-7',
    title: 'Planowanie Zapasowe i Protokół Awaryjny (Minimum Dobrego Dnia)',
    subtitle: 'Zabezpieczenie samoregulacji przed dychotomicznym załamaniem',
    objective: 'Stworzenie elastycznej wersji nawyku na dni skrajnego zmęczenia lub braku czasu.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Utrzymanie tożsamościowej ciągłości działania (chociażby w mikro-skali) zapobiega utracie poczucia własnej skuteczności (Bandura).',
    steps: [
      {
        stepNumber: 1,
        title: 'Wersja Standardowa Nawytku (Wersja A)',
        instruction: 'Opisz pełny, optymalny wariant Twojego nawyku.',
        promptText: 'Wersja A (100% energii):',
        placeholder: '45 minut treningu siłowego...'
      },
      {
        stepNumber: 2,
        title: 'Wersja Awaryjna Mikro (Wersja B)',
        instruction: 'Stwórz absurdalnie małą, niedużą wersję tego samego nawyku na dzień kryzysowy, która zajmie maksymalnie 2-3 minuty.',
        promptText: 'Wersja B (Minimum Dobrego Dnia):',
        placeholder: '1 seria pompki i 1 minuta rozciągania...'
      },
      {
        stepNumber: 3,
        title: 'Zasada Nieprzerwanego Łańcucha Tożsamości',
        instruction: 'Sformułuj zobowiązanie: "W najgorszy dzień robię Wersję B, ale NIE odpuszczam całkowicie".',
        promptText: 'Twoja deklaracja elastyczności:',
        placeholder: 'Niezależnie od okoliczności wykonuję minimum...'
      }
    ],
    reflectionQuestions: [
      'Dlaczego wykonanie wersji 2-minutowej jest nieskończenie lepsze niż wykonanie 0 minut?',
      'Jak ta strategia chroni Cię przed efektem "A niech to!"?'
    ]
  },

  {
    id: 'ex-22-8',
    title: 'Retrospektywne Dzienniczkowanie Pętli Sprzężenia Zwrotnego',
    subtitle: 'Wieczorny 3-minutowy mikro-audyt samokontroli',
    objective: 'Uruchomienie nawyku metapoznawczej refleksji nad przejawami samoregulacji w ciągu dnia.',
    durationMinutes: 5,
    neuroScientificFoundation: 'Regularna wieczorna ewaluacja stymuluje neuroplastyczność obwodów refleksyjnych mPFC oraz stabilizuje wzorce reagowania.',
    steps: [
      {
        stepNumber: 1,
        title: 'Moment Sukcesu Regulacyjnego',
        instruction: 'Przypomnij sobie jedną sytuację z dzisiaj, w której udało Ci się pomyślnie pokierować swoim zachowaniem.',
        promptText: 'Gdzie samoregulacja zadziałała wyśmienicie?',
        placeholder: 'Powstrzymałem się od...'
      },
      {
        stepNumber: 2,
        title: 'Analiza Zastosowanej Strategii',
        instruction: 'Co konkretnie pomogło Ci w tym momencie? (Środowisko, pauza, oddech, intencja?)',
        promptText: 'Jaki mechanizm zadziałał?',
        placeholder: 'Kluczem było...'
      },
      {
        stepNumber: 3,
        title: 'Korekta na Jutro',
        instruction: 'Gdzie doszło do pęknięcia pętli i jak dokładnie jutro zmodyfikujesz otoczenie lub skrypt?',
        promptText: 'Jutro w analogicznej sytuacji zastosuję:',
        placeholder: 'Zmienię...'
      }
    ],
    reflectionQuestions: [
      'Czy dostrzegasz postęp w rozumieniu własnych mechanizmów wyzwalających?',
      'Jakie to uczucie być architektem własnych zachowań?'
    ]
  }
];

export const chapterTwentyTwoExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Dlaczego sama wiedza i szczera intencja często nie wystarczają do zmiany zachowania człowieka?',
    topic: 'Paradoks Wiedzy a Działania',
    sectionRef: '22.1',
    options: [
      { label: 'A', text: 'Ponieważ ludzie potajemnie nie chcą zmieniać swoich nawyków i okłamują samych siebie.', isCorrect: false },
      { label: 'B', text: 'Ponieważ wiedza jest przetwarzana deklaratywnie w korze, podczas gdy nawykowe zachowania w stresie sterowane są przez automatyczne obwody subkortykalne i środowiskowe wyzwalacze.', isCorrect: true },
      { label: 'C', text: 'Ponieważ siła woli jest cechą genetyczną i nie można jej modyfikować wiedzą.', isCorrect: false },
      { label: 'D', text: 'Ponieważ ludzki mózg nie potrafi planować przyszłości dłuższej niż 24 godziny.', isCorrect: false }
    ],
    explanation: 'Wiedza zawarta jest w pamięci deklaratywnej (kora), natomiast nawyki i odruchy impulsywne zapisane są w strukturach subkortykalnych (prążkowie, ciało migdałowate). W stanie zmęczenia lub stresu kontrolę przejmują szybkie obwody automatyczne.',
    keyTakeaway: 'Zrozumienie mechanizmu to nie to samo co jego automatyczna egzekucja pod presją.'
  },
  {
    id: 2,
    question: 'Na czym polega kluczowa różnica między Model Siłowym Samokontroli (Ego Depletion) a Modelem Procesowym (Gross / Inzlicht)?',
    topic: 'Dekonstrukcja Mitu Silnej Woli',
    sectionRef: '22.3',
    options: [
      { label: 'A', text: 'Model Siłowy uważa samokontrolę za nieograniczony zasób, a Model Procesowy za ograniczony.', isCorrect: false },
      { label: 'B', text: 'Model Siłowy traktuje samokontrolę jak zasób wyczerpujący się (jak glukoza), zaś Model Procesowy jako zmianę motywacji, uwagi i stosowanych strategii na poszczególnych etapach powstawania emocji.', isCorrect: true },
      { label: 'C', text: 'Model Procesowy twierdzi, że samokontrola zależy wyłącznie od ilości spożytych węglowodanów.', isCorrect: false },
      { label: 'D', text: 'Oba modele są identyczne i różnią się jedynie nazewnictwem.', isCorrect: false }
    ],
    explanation: 'Model Procesowy Jamesa Grossa pokazuje, że samokontrola to kwestia stosowania odpowiednich strategii (np. modyfikacji sytuacji, przewartościowania) na wczesnych etapach, a nie jedynie siłowego tłumienia rozwiniętego impulsu.',
    keyTakeaway: 'Samokontrola to sztuka wyboru właściwej strategii regulacyjnej we właściwym momencie.'
  },
  {
    id: 3,
    question: 'Jakie są główne elementy cybernetycznej pętli sprzężenia zwrotnego według Carvera i Scheiera (TOTE)?',
    topic: 'Cybernetyczny Model Samoregulacji',
    sectionRef: '22.4',
    options: [
      { label: 'A', text: 'Impuls, Reakcja, Kara, Nagroda.', isCorrect: false },
      { label: 'B', text: 'Wzorzec (Standard), Komparator (Test), Operacja (Działanie), Wyjście/Korekta (Exit/Adjust).', isCorrect: true },
      { label: 'C', text: 'Wizualizacja, Afirmacja, Sukces, Powtórzenie.', isCorrect: false },
      { label: 'D', text: 'Stres, Ucieczka, Poczucie Winy, Próba ponowna.', isCorrect: false }
    ],
    explanation: 'Model TOTE (Test-Operate-Test-Exit) zakłada stałe porównywanie stanu obecnego ze standardem. Gdy wykryta zostanie rozbieżność, uruchamiana jest operacja korygująca.',
    keyTakeaway: 'Samoregulacja wymaga sprawnego monitorowania rozbieżności między stanem obecnym a celem.'
  },
  {
    id: 4,
    question: 'Według Teorii Rozbieżności Ja (Higgins), jakie emocje pojawiają się przy dużej rozbieżności między Ja Realnym a Ja Powinnościowym (Ought Self)?',
    topic: 'Teoria Rozbieżności Ja',
    sectionRef: '22.5',
    options: [
      { label: 'A', text: 'Smutek, przygnębienie i apatia.', isCorrect: false },
      { label: 'B', text: 'Niepokój, lęk, poczucie winy i napięcie.', isCorrect: true },
      { label: 'C', text: 'Złość na innych i agresja zewnętrzna.', isCorrect: false },
      { label: 'D', text: 'Radość i stan przepływu (flow).', isCorrect: false }
    ],
    explanation: 'Rozbieżność z Ja Idealnym (kogo chcemy stanowić) generuje smutek i rozczarowanie, natomiast rozbieżność z Ja Powinnościowym (obowiązki, wymogi) generuje niepokój, lęk i poczucie winy.',
    keyTakeaway: 'Różne typy rozbieżności tożsamościowych generują specyficzne profile emocjonalne.'
  },
  {
    id: 5,
    question: 'Dlaczego prokrastynacja jest obecnie definiowana przez naukowców jako problem regulacji emocjonalnej, a nie zarządzania czasem?',
    topic: 'Prokrastynacja jako Nieadaptacyjna Regulacja Emocjonalna',
    sectionRef: '22.7',
    options: [
      { label: 'A', text: 'Ponieważ ludzie prokrastynujący nie posiadają zegarków ani kalendarzy.', isCorrect: false },
      { label: 'B', text: 'Ponieważ odkładanie zadania służy natychmiastowej redukcji nieprzyjemnych emocji (lęku, znużenia, nudy) wywoływanych przez to zadanie.', isCorrect: true },
      { label: 'C', text: 'Ponieważ pisanie harmonogramów automatycznie leczy prokrastynację u każdego człowieka.', isCorrect: false },
      { label: 'D', text: 'Ponieważ prokrastynacja występuje tylko u osób o niskim ilorazie inteligencji.', isCorrect: false }
    ],
    explanation: 'Odkładanie zadania daje natychmiastową ulgę od trudnych emocji związaną z tym zadaniem. Jest to nieadaptacyjna próba "naprawy nastroju" (Mood Repair) kosztem przyszłego dobrostanu.',
    keyTakeaway: 'Zamiast układać lepszy plan dnia, naucz się tolerować dyskomfort towarzyszący początkowi zadania.'
  },
  {
    id: 6,
    question: 'Na czym polega mechanizm działania Intencji Implementacyjnych stworzonych przez Petera Gollwitzera?',
    topic: 'Intencje Implementacyjne',
    sectionRef: '22.10',
    options: [
      { label: 'A', text: 'Na głośnym powtarzaniu afirmacji o własnej sile woli.', isCorrect: false },
      { label: 'B', text: 'Na powiązaniu konkretnego bodźca środowiskowego ("JEŚLI X") z natychmiastową reakcją ("TO Y"), co automatyzuje wykonanie działania.', isCorrect: true },
      { label: 'C', text: 'Na karaniu siebie finansowo za każdy błąd.', isCorrect: false },
      { label: 'D', text: 'Na unikaniu jakiegokolwiek planowania i działaniu na żywioł.', isCorrect: false }
    ],
    explanation: 'Plan typu "Jeśli-To" pre-aktywuje reprezentację bodźca w pamięci, dzięki czemu reakcja następuje bez konieczności świadomego namysłu i obciążania kory przedczołowej.',
    keyTakeaway: 'Deleguj kontrolę na środowisko poprzez jasne zasady "Jeśli X, to Y".'
  },
  {
    id: 7,
    question: 'Co według badań Gabriele Oettingen dzieje się, gdy człowiek ogranicza się wyłącznie do pozytywnej wizualizacji sukcesu (bez kontrastowania mentalnego)?',
    topic: 'Mental Contrasting i Metoda WOOP',
    sectionRef: '22.11',
    options: [
      { label: 'A', text: 'Jego motywacja operacyjna i poziom energii fizjologicznej gwałtownie rosną.', isCorrect: false },
      { label: 'B', text: 'Mózg traktuje cel jako częściowo osiagnięty, co obniża ciśnienie krwi i zmniejsza realny wysiłek.', isCorrect: true },
      { label: 'C', text: 'Człowiek automatycznie staje się bardziej odporny na stres.', isCorrect: false },
      { label: 'D', text: 'Zwiększa się produkcja kortyzolu w ciele migdałowatym.', isCorrect: false }
    ],
    explanation: 'Same marzenia o sukcesie wprawiają mózg w stan relaksu. Dopiero zderzenie marzenia z uczciwie wskazaną wewnętrzną przeszkodą (kontrastowanie mentalne) wyzwala mobilizację.',
    keyTakeaway: 'Marzenie bez analizy przeszkody uśpi Twoją czujność i odejmie energię.'
  },
  {
    id: 8,
    question: 'Jaką rolę w modelu procesowym emocji Grossa odgrywa Przewartościowanie Poznawcze (Cognitive Reappraisal)?',
    topic: 'Przewartościowanie Poznawcze',
    sectionRef: '22.12',
    options: [
      { label: 'A', text: 'Pozwala uderzyć w ścianę i stłumić już wybuchłą furię.', isCorrect: false },
      { label: 'B', text: 'Zmienia interpretację sytuacji ZANIM emocja w pełni rozwinie swoją odpowiedź fizjologiczną i behawioralną.', isCorrect: true },
      { label: 'C', text: 'Polega na udawaniu, że trudna sytuacja wcale nie istnieje.', isCorrect: false },
      { label: 'D', text: 'Jest metodą stosowaną wyłącznie w hipnozie klinicznej.', isCorrect: false }
    ],
    explanation: 'Przewartościowanie następuje na etapie zmiany poznawczej (przed ekspresją emocji), co redukuje zarówno negatywny afekt, jak i obciążenie fizjologiczne organizmu.',
    keyTakeaway: 'Zmień sposób, w jaki rozumiesz sytuację, a emocja zmieni się sama.'
  },
  {
    id: 9,
    question: 'Co charakteryzuje zjawisko deprywacji decyzyjnej (Decision Fatigue)?',
    topic: 'Obciążenie Poznawcze i Deprywacja Decyzyjna',
    sectionRef: '22.13',
    options: [
      { label: 'A', text: 'Wraz z liczbą podjętych decyzji rośnie zdolność do głębokiej analizy moralnej.', isCorrect: false },
      { label: 'B', text: 'Po długim okresie podejmowania decyzji umysł dąży do skrótów poznawczych, wybierając opcje domyślne lub unika działania.', isCorrect: true },
      { label: 'C', text: 'Podejmowanie decyzji nie ma żadnego wpływu na późniejszą samokontrolę.', isCorrect: false },
      { label: 'D', text: 'Deprywacja decyzyjna występuje tylko u dzieci i młodzieży.', isCorrect: false }
    ],
    explanation: 'Każda wysoce zarządcza decyzja zużywa zasoby kontrolne. W miarę ich ubywania zwiększa się impulsywność lub bierność (wybieranie opcji po najmniejszej linii oporu).',
    keyTakeaway: 'Chroń swoją korę przedczołową przed błahymi decyzjami w pierwszej połowie dnia.'
  },
  {
    id: 10,
    question: 'Czym różni się podejście sztywne od elastyczności regulacyjnej (Regulatory Flexibility)?',
    topic: 'Elastyczność Regulacyjna',
    sectionRef: '22.15',
    options: [
      { label: 'A', text: 'Sztywność stosuje tę samą strategię bez względu na kontekst, podczas gdy elastyczność dopasowuje reguły do bieżących zasobów i warunków.', isCorrect: true },
      { label: 'B', text: 'Elastyczność polega na całkowitym braku jakichkolwiek zasad.', isCorrect: false },
      { label: 'C', text: 'Sztywność zawsze daje lepsze efekty długoterminowe niż elastyczność.', isCorrect: false },
      { label: 'D', text: 'Elastyczność regulacyjna oznacza uleganie każdej napotkanej pokusie.', isCorrect: false }
    ],
    explanation: 'Sztywne reguły ("wszystko albo nic") załamują się przy pierwszej niespodziewanej przeszkodzie. Elastyczność pozwala skorygować wariant działania bez poczucia klęski.',
    keyTakeaway: 'Dobre drzewo uginają wiatry — sztywne pęka pod wpływem pierwszej burzy.'
  },
  {
    id: 11,
    question: 'Jak funkcja "Modyfikacja Sytuacji" zmniejsza obciążenie kory przedczołowej?',
    topic: 'Modyfikacja Środowiska',
    sectionRef: '22.9',
    options: [
      { label: 'A', text: 'Zmusza człowieka do ciągłej pracy nad siłą woli.', isCorrect: false },
      { label: 'B', text: 'Usuwa lub przekształca fizyczne bodźce wyzwalające pokusę, zapobiegając aktywacji impulsu.', isCorrect: true },
      { label: 'C', text: 'Zwiększa poziom dopaminy w ciele migdałowatym.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnego znaczenia w badaniach nad samokontrolą.', isCorrect: false }
    ],
    explanation: 'Modyfikacja sytuacji działa na najwcześniejszym etapie procesu — nie musisz walczyć z pokusą, której nie ma w Twoim polu widzenia lub do której dostęp wymaga dużego trudu.',
    keyTakeaway: 'Nie walcz z pokusą w pokoju — zmień pokój.'
  },
  {
    id: 12,
    question: 'Na czym polega "efekt odbicia" (Rebound Effect) przy próbach tłumienia myśli lub impulsów?',
    topic: 'Błędne Intuicje Samokontroli',
    sectionRef: '22.18',
    options: [
      { label: 'A', text: 'Tłumiona myśl całkowicie znika z pamięci na zawsze.', isCorrect: false },
      { label: 'B', text: 'Próba siłowego niemyślenia o czymś powoduje podświadome monitorowanie tej myśli, co zwiększa jej częstotliwość po zwolnieniu kontroli.', isCorrect: true },
      { label: 'C', text: 'Tłumienie myśli zwiększa poziom kreatywności o 50%.', isCorrect: false },
      { label: 'D', text: 'Efekt odbicia dotyczy wyłącznie treningu fizycznego.', isCorrect: false }
    ],
    explanation: 'Wegner (teoria procesów ironicznych) wykazał, że tłumienie myśli angażuje proces monitorujący, który ciągle przeszukuje umysł w poszukiwaniu tłumionej treści, wzmacniając jej dostępność.',
    keyTakeaway: 'Nie każ swojemu umysłowi "nie myśleć o białym niedźwiedziu" — daj mu inne zadanie.'
  },
  {
    id: 13,
    question: 'Co oznacza pojęcie "Urge Surfing" (Serfowanie po pokusie)?',
    topic: 'Tolerancja Dyskomfortu',
    sectionRef: '22.8',
    options: [
      { label: 'A', text: 'Natychmiastowe uleganie każdej pokusie dla zachowania zdrowia psychicznego.', isCorrect: false },
      { label: 'B', text: 'Świadome obserwowanie cielesnych doznań towarzyszących impulsowi bez podejmowania działania, czekając aż faza szczytowa fali wygaśnie.', isCorrect: true },
      { label: 'C', text: 'Uprawianie sportów wodnych w celu wyładowania agresji.', isCorrect: false },
      { label: 'D', text: 'Przeglądanie internetu w poszukiwaniu promocji.', isCorrect: false }
    ],
    explanation: 'Urge Surfing traktuje impuls jako przejściowy stan fizjologiczny o kształcie fali. Obserwacja bez reagowania pozwala zauważyć, że impuls naturalnie opada po 1-3 minutach.',
    keyTakeaway: 'Przeczekaj szczyt fali impulsu — po drugiej stronie jest spokój i swoboda wyboru.'
  },
  {
    id: 14,
    question: 'Jaka struktura mózgu odpowiada za wyczuwanie konfliktu i rozbieżności między celem a bieżącym stanem w pętli TOTE?',
    topic: 'Neurobiologia Samoregulacji',
    sectionRef: '22.6',
    options: [
      { label: 'A', text: 'Móżdżek.', isCorrect: false },
      { label: 'B', text: 'Grzbietowa część przedniej kory zakrętu obręczy (dACC).', isCorrect: true },
      { label: 'C', text: 'Potyliczny płat wzrokowy.', isCorrect: false },
      { label: 'D', text: 'Hipokamp tylny.', isCorrect: false }
    ],
    explanation: 'dACC działa jako neuronowy "komparator" wykrywający konflikty między pożądaną odpowiedzią a odruchową tendencją, wysyłając sygnał alarmowy do dlPFC.',
    keyTakeaway: 'dACC to wewnętrzny czujnik rozbieżności Twojego umysłu.'
  },
  {
    id: 15,
    question: 'Dlaczego postawa Self-Compassion (Wyrozumiałości dla siebie) zwiększa samoregulację po potknięciu, w przeciwieństwie do surowej samokrytyki?',
    topic: 'Elastyczność Regulacyjna i Regeneracja',
    sectionRef: '22.8',
    options: [
      { label: 'A', text: 'Ponieważ samokrytyka wywołuje silny stres i defensywne uciekanie w kolejne impulsywne nagrody dla poprawy nastroju.', isCorrect: true },
      { label: 'B', text: 'Ponieważ wyrozumiałość sprawia, że ludzie przestają dbać o jakiekolwiek cele.', isCorrect: false },
      { label: 'C', text: 'Ponieważ samokrytyka fizycznie niszczy neurony w hipokampie.', isCorrect: false },
      { label: 'D', text: 'Wyrozumiałość dla siebie nie ma żadnego wpływu na samoregulację.', isCorrect: false }
    ],
    explanation: 'Surowy bicz samokrytyki nasila wstyd i lęk, co skłania organizm do ucieczki w szybkie pocieszacze (efekt "A niech to!"). Wyrozumiałość pozwala wyciągnąć wnioski bez załamania poczucia skuteczności.',
    keyTakeaway: 'Bądź dla siebie wymagającym, ale wyrozumiałym mentorem, a nie bezwzględnym katem.'
  },
  {
    id: 16,
    question: 'Jak technika "Minimum Dobrego Dnia" zabezpiecza nawyk przed przerwaniem?',
    topic: 'Zastosowania Praktyczne',
    sectionRef: '22.20',
    options: [
      { label: 'A', text: 'Gwarantuje, że w gorsze dni wykonujesz ultra-skróconą wersję nawyku, utrzymując Ciągłość Tożsamości.', isCorrect: true },
      { label: 'B', text: 'Nakazuje pracować ponad siły bez względu na stan zdrowia.', isCorrect: false },
      { label: 'C', text: 'Pozwala na roczną przerwę w wykonywaniu nawyku.', isCorrect: false },
      { label: 'D', text: 'Zastępuje wysiłek fizyczny biernym oglądaniem filmów.', isCorrect: false }
    ],
    explanation: 'Minimum Dobrego Dnia obniża poprzeczkę wykonawczą do poziomu, w którym opór nie istnieje, zapobiegając zerwaniu ciągłości psychologicznej pętli nawyku.',
    keyTakeaway: 'Lepsze 2 minuty działania niż nieskazitelne 0 minut.'
  },
  {
    id: 17,
    question: 'Co jest główną przyczyną tzw. "efektu A niech to!" (What-the-hell effect)?',
    topic: 'Błędy Regulacyjne',
    sectionRef: '22.16',
    options: [
      { label: 'A', text: 'Brak witamin w diecie.', isCorrect: false },
      { label: 'B', text: 'Spostrzeżenie drobnej usterki regulacyjnej jako całkowitego zniszczenia planu, co usuwa powstrzymanie od dalszej ucieczki.', isCorrect: true },
      { label: 'C', text: 'Wpływ promieniowania słonecznego.', isCorrect: false },
      { label: 'D', text: 'Zbyt duża ilość snu w nocy.', isCorrect: false }
    ],
    explanation: 'Gdy człowiek wierzy w sztywną nieskazitelność, zjedzenie małego ciastka staje się "złamaniem diety", co prowadzi do wniosku: "Skoro i tak złamałem dietę, zjem całą blachę".',
    keyTakeaway: 'Potknięcie to usterka na drodze, a nie powód do zjechania w przepaść.'
  },
  {
    id: 18,
    question: 'W jaki sposób wysokie obciążenie poznawcze (Cognitive Load) wpływa na wybory konsumenckie i żywieniowe?',
    topic: 'Obciążenie Poznawcze',
    sectionRef: '22.13',
    options: [
      { label: 'A', text: 'Zwiększa skłonność do wyboru zdrowych i wymagających opcji.', isCorrect: false },
      { label: 'B', text: 'Przesuwa punkt ciężkości na przetwarzanie odruchowe, wzmagając wybór natychmiastowych, wysoko-kalorycznych lub łatwych bodźców.', isCorrect: true },
      { label: 'C', text: 'Zmniejsza apetyt na słodycze do zera.', isCorrect: false },
      { label: 'D', text: 'Sprawia, że człowiek analizuje skład każdego produktu przez 15 minut.', isCorrect: false }
    ],
    explanation: 'Pojemność pamięci roboczej jest zajęta przez obciążenie, więc kora przedczołowa nie ma mocy obliczeniowej do zablokowania impulsywnych preferencji subkortykalnych.',
    keyTakeaway: 'Gdy umysł jest przeciążony, wybiera najbardziej dopaminergiczną drogę na skróty.'
  },
  {
    id: 19,
    question: 'Na czym polega zasada "Inżynierii Ttarcia" (Friction Engineering)?',
    topic: 'Architektura Wyborów',
    sectionRef: '22.9',
    options: [
      { label: 'A', text: 'Na smarowaniu maszyn w zakładzie produkcyjnym.', isCorrect: false },
      { label: 'B', text: 'Na sztucznym dodawaniu kroków/trudności do niepożądanych zachowań oraz odejmowaniu kroków od zachowań pożądanych.', isCorrect: true },
      { label: 'C', text: 'Na tworzeniu wyczerpujących oporów dla każdego zachowania.', isCorrect: false },
      { label: 'D', text: 'Na rezygnacji z używania nowoczesnych technologii.', isCorrect: false }
    ],
    explanation: 'Mózg optymalizuje zużycie energii. Jeśli złe zachowanie wymaga wstania z łóżka i przejścia do drugiego pokoju, jego prawdopodobieństwo drastycznie spada.',
    keyTakeaway: 'Uczyń złe nawyki niedogodnymi, a dobre bezwysiłkowymi.'
  },
  {
    id: 20,
    question: 'Jakie jest najważniejsze przesłanie całościowej wiedzy o samoregulacji zawartej w Rozdziale 6?',
    topic: 'Podsumowanie i Synteza',
    sectionRef: '22.21',
    options: [
      { label: 'A', text: 'Trzeba po prostu mocniej zacisnąć zęby i zmuszać się do pracy każdego dnia.', isCorrect: false },
      { label: 'B', text: 'Samoregulacja to sprytny, elastyczny system zarządzania kontekstem, uwagą i wyzwalaczami, a nie desperacka walka siłowa z samym sobą.', isCorrect: true },
      { label: 'C', text: 'Człowiek jest całkowicie bezsilny wobec swoich genów i środowiska.', isCorrect: false },
      { label: 'D', text: 'Samokontrola jest zbędna, jeśli posiada się wysoki poziom inteligencji.', isCorrect: false }
    ],
    explanation: 'Skuteczna samoregulacja to architektura, zrozumienie biochemii i kontekstu oraz stosowanie przemyślanych strategii (WOOP, Jeśli-To, Modyfikacja Sytuacji) zamiast bezmyślnego zmuszania się.',
    keyTakeaway: 'Bądź architektem swojego otoczenia i procesów, a nie tylko wojownikiem na placu boju.'
  }
];

export const chapterTwentyTwo: Chapter = {
  number: 22,
  volume: 3,
  volumeChapterNumber: 6,
  title: 'Samoregulacja i Kierowanie Zachowaniem',
  subtitle: 'Jak kierować własnym zachowaniem, gdy nie zawsze robię to, co chcę?',
  leadParagraph: 'Poznałeś swoją tożsamość, przeanalizowałeś głęboko ukryte przekonania, zweryfikowałeś filary samooceny, ustaliłeś drabinę wartości i rozwinąłeś uważną obserwację metapoznawczą. Jednak w codziennym życiu pojawia się fundamentalny zgrzyt: znasz prawdę, wiesz, co jest dla Ciebie dobre, a mimo to w krytycznym momencie sięgasz po telefon, odkładasz kluczowe zadanie lub reagujesz impulsywnym gniewem. Ten rozdział odziera samokontrolę z mitu "silnej woli" i przedstawia ją jako cybernetyczny system zarządczy, w którym biologia, architektura środowiska oraz precyzyjne strategie poznawcze decydują o tym, kto naprawdę prowadzi Twój umysł.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-22-1',
      pageNumber: 1,
      sectionNumber: '22.1',
      title: 'Paradoks Wiedzy a Działania — Przepaść Między Intencją a Egzekucją',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Widzę i pochwalam to, co lepsze, ale idę za tym, co gorsze.',
        author: 'Owidowiusz, Metamorfozy'
      },
      paragraphs: [
        'Jednym z najbardziej frustrujących doświadczeń ludzkiej egzystencji jest stan, w którym poziom naszej wiedzy teoretycznej w żaden sposób nie przekłada się na codzienne zachowanie. Możesz przeczytać kilkadziesiąt podręczników psychologii, ukończyć zaawansowane szkolenia z zarządzania czasem, doskonale rozumieć biochemię snu i znać na pamięć opłakane konsekwencje prokrastynacji, a mimo to o pierwszej w nocy wciąż bezmyślnie przewijać krótkie filmy w smartfonie, odczuwając rosnące poczucie winy.',
        'Zjawisko to w literaturze naukowej określane jest jako Intention-Behavior Gap (przepaść między intencją a zachowaniem). Badania empiryczne pokazują jednoznacznie, że sama czysta deklaracja celu oraz wysoki poziom motywacji wyjaśniają jedynie około 28% wariancji w rzeczywistym wykonaniu działania. Oznacza to, że w ponad 70% przypadków o tym, czy zrobimy to, co zaplanowaliśmy, decydują zupełnie inne mechanizmy niż nasza świadoma wola czy "szczere intencje".',
        'Dlaczego tak się dzieje? Pętla wynika ze strukturalnego podziału architektury mózgu. Wiedza i intencja kodowane są w pamięci deklaratywnej, zlokalizowanej głównie w korze nowej (zwłaszcza kora przedczołowa). Z kolei nawykowe, automatyczne i impulsywne reakcje sterowane są przez subkortykalne obwody jąder podstawy, prążkowia oraz ciała migdałowatego. Gdy znajdujesz się w stanie zmęczenia, presji czasu, przeciążenia informacyjnego lub emocjonalnego wzburzenia, połączenia zaborcze kory przedczołowej ulegają drastycznemu osłabieniu. Kontrolę nad pojazdem przejmuje system odruchowy, który nie czytał książek i dąży wyłącznie do natychmiastowej redukcji dyskomfortu lub łatwego zastrzyku dopaminy.',
        'Aby przejść od biernej wiedzy do skutecznego kierowania sobą, musimy przestać traktować człowieka jako czysto racjonalną istotę logiczną. Musimy zacząć projektować systemy regulacyjne, które działają nie tylko w idealnych warunkach laboratoryjnych, lecz przede wszystkim wtedy, gdy jesteś zmęczony, zestresowany i masz ochotę rzucić wszystko w kąt.'
      ]
    },

    {
      id: 'sec-22-2',
      pageNumber: 3,
      sectionNumber: '22.2',
      title: 'Od Tożsamości i Przekonań do Działania — Integracja Rozdziałów 1–5',
      category: 'teoria',
      readingTimeMinutes: 14,
      quote: {
        text: 'Nie działamy w oparciu o to, jaki świat jest naprawdę, ale w oparciu o to, kim uważamy, że jesteśmy.',
        author: 'Epiktet'
      },
      paragraphs: [
        'Samoregulacja nie istnieje w próżni. Jest najwyższym piętrem budynku, którego fundamenty wznieśliśmy w pierwszych pięciu rozdziałach tego tomu. Każda próba zmiany zachowania, która ignoruje tożsamość, przekonania, samoocenę, wartości i świadomość metapoznawczą, jest skazana na szybkie załamanie.',
        'Spójrzmy na tę współzależność jako na zintegrowany łańcuch przyczynowo-skutkowy:',
        '1. TOŻSAMOŚĆ (Rozdział 1): Jeśli na poziomie tożsamościowym definiujesz się jako "osoba ze słabą wolą" lub "wieczny prokrastynator", każde trudne zadanie aktywuje konflikt tożsamościowy. Mózg podświadomie dąży do spójności z własną etykietą — uleganie pokusie staje się wówczas samospełniającą się przepowiednią.',
        '2. PRZEKONANIA (Rozdział 2): Twoje ukryte założenia ("Muszę zrobić to idealnie", "Jeśli mi nie wyjdzie, ośmieszę się") determinują poziom generowanego lęku. To nie samo zadanie wywołuje opór, lecz przekonanie o straszliwych konsekwencjach ewentualnego błędu.',
        '3. SAMOOCENA I POCZUCIE SKUTECZNOŚCI (Rozdział 3): Poczucie własnej skuteczności (Self-Efficacy) decyduje o tym, ile trudu włożysz w pokonywanie przeszkód. Osoba o niskiej skuteczności traktuje pierwszy opór jako dowód bezsensu dalszych prób.',
        '4. WARTOŚCI I POTRZEBY (Rozdział 4): Wartości nadają sens wysiłkowi. Samoregulacja bez zakotwiczenia w głębokich wartościach staje się bezdusznym, opresyjnym zmuszaniem się do rzeczy, które nie mają dla Ciebie autentycznego znaczenia.',
        '5. ŚWIADOMOŚĆ SIEBIE (Rozdział 5): Metapoznanie pozwala w porę zauważyć, że właśnie wchodzisz w automatyczną pętlę ucieczkową. Bez uważności zauważysz porażkę samokontroli dopiero po fakcie — z pustym opakowaniem po ciastkach w dłoni.',
        'Samoregulacja jest zatem operacyjnym wykonawcą całej architektury Twojego wnętrza. Gdy wszystkie piętra współpracują ze sobą, działanie przestaje być walką siłową, a staje się naturalnym przepływem ukierunkowanym na cel.'
      ]
    },

    {
      id: 'sec-22-3',
      pageNumber: 6,
      sectionNumber: '22.3',
      title: 'Dekonstrukcja Mitu "Silnej Woli" — Model Siłowy vs Model Procesowy',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      quote: {
        text: 'Silna wola to niewłaściwa metafora. Sukces nie zależy od prężenia mięśni, lecz od sprytnego unikania starcia.',
        author: 'Dr Angela Duckworth'
      },
      paragraphs: [
        'Przez dziesięciolecia w psychologii popularnej i poradnikach motywacyjnych dominował tak zwany Model Siłowy Samokontroli (Ego Depletion Model), spopularyzowany przez Roya Baumeistera. W myśl tej koncepcji siła woli przypomina mięsień lub zbiornik z paliwem (glukozą) — każde użycie samokontroli (opieranie się pokusie, tłumienie emocji, podejmowanie trudnych decyzji) wyczerpuje te same ograniczone zasoby. Gdy zbiornik się opróżni, człowiek staje się całkowicie bezbronny wobec pokus.',
        'Współczesna neuronauka i replikacyjne badania psychologiczne z ostatniej dekady (m.in. prace Michaela Inzlichta, Kentaro Fujity czy Jamesa Grossa) weryfikują ten pogląd. Okazało się, że zjawisko spadku samokontroli nie wynika z fizycznego "spalenia glukozy w mózgu", lecz ze zmiany orientacji motywacyjnej i atencyjnej.',
        'Zamiast Modelu Siłowego, nauka proponuje dziś Model Procesowy Samokontroli (Gross / Inzlicht):',
        '• Spadek wydajności po długiej pracy to nie brak "paliwa", lecz sygnał informacyjny mózgu: "Czas przestawić się ze sprawdzania celów narzuconych (Have-to goals) na nagrody natychmiastowe (Want-to goals)".',
        '• Samokontrola nie polega na walce na śmierć i życie w momencie, gdy impuls uderza z pełną siłą. Polega na elastycznym stosowaniu odpowiednich strategii na różnych etapach powstawania reakcji emocjonalnej i motywacyjnej.',
        'Gdy polegasz wyłącznie na "prężeniu mięśnia silnej woli" (zmuszaniu się do patrzenia na pączka i niejedzeniu go), używasz najmniej skutecznej, najbardziej wyczerpującej i najbardziej podatnej na awarię strategii regulacyjnej — tzw. tłumienia reakcji (Response Suppression).'
      ]
    },

    {
      id: 'sec-22-4',
      pageNumber: 9,
      sectionNumber: '22.4',
      title: 'Cybernetyczny Model Samoregulacji Carver & Scheier (Pętla Sprzężenia Zwrotnego)',
      category: 'teoria',
      readingTimeMinutes: 16,
      subsections: [
        {
          title: 'Pętla TOTE: Test - Operate - Test - Exit',
          paragraphs: [
            'Najbardziej precyzyjnym matematycznie i cybernetycznie ujęciem samoregulacji jest model Charlesa Carvera i Michaela Scheiera, wywodzący się z teorii systemów sterowania (pętla sprzężenia zwrotnego ujemnego).',
            'Każdy proces samoregulacyjny składa się z czterech nierozerwalnych kroków:',
            '1. WZORZEC (Standard): Cel, norma, wartość lub kryterium zachowania przechowywane w pamięci (np. "Chcę pisać 500 słów dziennie").',
            '2. KOMPARATOR (Test / Monitor): Mechanizm porównujący obecny stan jednostki ze standardem. Główną rolę pełni tu przednia kora zakrętu obręczy (dACC), która wykrywa rozbieżności.',
            '3. OPERACJA (Operate / Action): Uruchomienie zachowania korygującego mającego na celu zmniejszenie wykrytej rozbieżności (np. usunięcie rozpraszaczy i pisanie).',
            '4. RE-TEST I WYJŚCIE (Test & Exit): Ponowne sprawdzenie stanu. Jeśli rozbieżność spadła do zera — pętla się zamyka i zostaje pomyślnie opuszczona.'
          ],
          highlightBox: {
            title: 'Gdzie pęka pętla cybernetyczna?',
            content: 'Porażka samoregulacji występuje z reguły na jednym z trzech etapów: 1) Brak jasnego standardu (nie wiem dokładnie, czego chcę), 2) Brak monitorowania (nie wiem, gdzie obecnie jestem, bo unikam sprawdzania faktów), 3) Brak skutecznej operacji korygującej.',
            type: 'insight'
          }
        }
      ],
      paragraphs: [
        'Zwróć uwagę na ogromne znaczenie funkcji MONITOROWANIA. Badania pokazują, że sam fakt prowadzenia dokładnego pomiaru (np. zapisywanie wydanych kwot, ważenie się, mierzenie czasu pracy w aplikacji) drastycznie poprawia samoregulację nawet bez podejmowania świadomych decyzji o zmianie. Zjawisko to nazywane jest reaktywnością pomiarową — sam komparator wzbudzony do działania wysyła do kory przedczołowej sygnały korygujące.'
      ]
    },

    {
      id: 'sec-22-5',
      pageNumber: 12,
      sectionNumber: '22.5',
      title: 'Teoria Rozbieżności Ja według E. Tory Higginsa — Emocjonalne Koszty Nieadekwatności',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Dlaczego brak samoregulacji rodzi tak głębokie cierpienie psychiczne? Odpowiedź daje Teoria Rozbieżności Ja (Self-Discrepancy Theory) stworzona przez E. Tory Higginsa.',
        'Higgins wyróżnił trzy kluczowe reprezentacje własnej osoby:',
        '• Ja Realne (Actual Self): To, jaki obiektywnie postrzegasz siebie w tym momencie.',
        '• Ja Idealne (Ideal Self): Twoje własne nadzieje, marzenia, aspiracje i wizje tego, kim chciałbyś być.',
        '• Ja Powinnościowe (Ought Self): Twoje poczucie obowiązków, zobowiązań, norm moralnych i oczekiwań innych ludzi.',
        'Samoregulacja polega na ustawicznym zmniejszaniu dystansu między Ja Realnym a dwoma pozostałymi wzorcami. Jeśli w pętli komparatora powstaje trwałe pęknięcie, rodzą się specyficzne stany afektywne:',
        '1. Rozbieżność między Ja Realnym a Ja Idealnym prowadzi do emocji o walencji deprymującej: smutku, rozczarowania, poczucia klęski, wstydu i apatii (reakcja typu depresyjnego).',
        '2. Rozbieżność między Ja Realnym a Ja Powinnościowym wywołuje emocje o walencji pobudzeniowej: niepokój, lęk, poczucie winy, strach przed karą i wewnętrzne napięcie (reakcja typu lękowego).',
        'Zrozumienie, z którą rozbieżnością masz do czynienia, pozwala precyzyjnie dobrać narzędzia regulacyjne. Jeśli prokrastynujesz z powodu lęku przed nieodpowiedzialnością (Ja Powinnościowe), potrzebujesz obniżenia presji zewnętrznej. Jeśli prokrastynujesz z braku pasji (Ja Idealne), potrzebujesz ponownego połączenia ze swoimi autentycznymi wartościami.'
      ]
    },

    {
      id: 'sec-22-6',
      pageNumber: 15,
      sectionNumber: '22.6',
      title: 'Neurobiologiczny Pakt Mózgu — Walka Układu Gorącego z Układem Zimnym',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Na poziomie neuronalnym samoregulacja jest nieustannym dialogiem i rywalizacją dwóch anatomicznie odmiennych sieci:',
        '1. UKŁAD GORĄCY (Hot / Emotional System): Oparty na ciele migdałowatym, prążkowiu i brzusznej części pola nakrywkowego (VTA). Jest szybki, odruchowy, bezrefleksyjny, czuły na natychmiastową nagrodę dopaminergiczną i nastawiony na przeżycie tu i teraz. Uruchamia się w ułamku sekundy pod wpływem widoku pokusy lub zagrożenia.',
        '2. UKŁAD ZIMNY (Cool / Executive System): Oparty na grzbietowo-bocznej korze przedczołowej (dlPFC), brzuszno-przyśrodkowej korze przedczołowej (vmPFC) oraz grzbietowej części zakrętu obręczy (dACC). Jest wolny, refleksyjny, elastyczny, zdolny do symulowania przyszłości, operowania na symbolach i hamowania reakcji odruchowych.',
        'W stanie optymalnym układ zimny sprawnie nakłada hamulec na układ gorący, pozwalając na odroczenie nagrody. Jednak w warunkach stresu (wysoki kortyzol i noradrenalina), zmęczenia sennego czy hipoglikemii, połączenia synaptyczne z dlPFC ulegają odłączeniu (tzw. wyłączenie kory przedczołowej w stresie Arnstena). Układ gorący przejmuje wtedy bezwzględną władzę.',
        'Kluczem do neurobiologicznej samoregulacji nie jest "zmiażdżenie" układu gorącego — co jest niemożliwe — lecz takie zarządzenie poziomem stresu i bodźcami, aby układ zimny zachował łączność zarządczą.'
      ]
    },

    {
      id: 'sec-22-7',
      pageNumber: 18,
      sectionNumber: '22.7',
      title: 'Prokrastynacja jako Nieadaptacyjna Regulacja Emocjonalna — Anatomia Uniku',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      caseStudyRef: caseStudiesChapterTwentyTwo[1],
      paragraphs: [
        'Przez dziesięciolecia prokrastynację błędnie diagnozowano jako deficyt umiejętności organizacji czasu. Osobie odkładającej radzono kupno ładniejszego kalendarza, zrobienie listy zadań lub podzielenie projektu na mniejsze części. W zdecydowanej większości przypadków metody te kończyły się fiaskiem.',
        'Współczesna psychologia kliniczna nie ma wątpliwości: prokrastynacja to nie problem z zarządzaniem czasem, lecz nieadaptacyjna strategia regulowania trudnych emocji.',
        'Gdy siadasz do zadania, które budzi w Tobie niepokój, poczucie przytłoczenia, lęk przed porażką, nudę lub poczucie niekompetencji, Twój umysł rejestruje samą obecność tego zadania jako zagrożenie dla dobrostanu psychicznego. Następuje gwałtowna potrzeba Mood Repair (naprawy nastroju tu i teraz).',
        'Zamknięcie trudnego dokumentu i otwarcie portalu społecznościowego lub rozpoczęcie sprzątania daje NATYCHMIASTOWĄ spadek napięcia lękowego. Mózg otrzymuje potężne wzmocnienie negatywne: "Ucieczka od zadania usunęła niepokój". W ten sposób nawyk ucieczkowy zostaje utrwalony w obwodach jąder podstawy.',
        'Prawdziwe leczenie prokrastynacji wymaga porzucenia nacisku na czas na rzecz budowania tolerancji na dyskomfort emocjonalny (Emotional Tolerance) oraz obniżania progu wejścia w zadanie.'
      ]
    },

    {
      id: 'sec-22-8',
      pageNumber: 21,
      sectionNumber: '22.8',
      title: 'Pętla Impulsu i Odroczona Satysfakcja — Eksperyment Marshmallow w XXI Wieku',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Słynny eksperyment ze słodką pianką (Marshmallow Test), przeprowadzony przez Waltera Mischela na Uniwersytecie Stanforda w latach 60. XX wieku, stał się fundamentem badań nad odroczoną satysfakcją (Delay of Gratification). Dzieci, które potrafiły powstrzymać się przed zjedzeniem jednej pianki przez 15 minut, aby otrzymać drugą, w dojrzałym życiu osiągały wyższe wyniki akademickie, miały niższy wskaźnik masy ciała i lepsze relacje społeczne.',
        'Jednak kluczowe odkrycie Mischela — często pomijane w uproszczonych przekazach — nie dotyczyło "siły woli" dzieci, lecz ich STRATEGII ATENCYJNYCH:',
        '• Dzieci, które ulegały pokusie, wpatrywały się bezustannie w piankę, dotykały jej i wąchały (stymulacja układy gorącego).',
        '• Dzieci, które odroczyły nagrodę, stosowały Przekierowanie Uwagi (Attentional Deployment) — zasłaniały oczy dłońmi, śpiewały piosenki, bawiły się swoimi butami lub wyobrażały sobie, że pianka jest jedynie chmurką na obrazku (przewartościowanie poznawcze).',
        'W dzisiejszym świecie, w którym algorytmy mediów społecznościowych i dostawców treści serwują dopaminergiczne pianki co kilka sekund, zdolność do świadomego przekierowania uwagi staje się najważniejszą walutą autonimii jednostki.'
      ]
    },

    {
      id: 'sec-22-9',
      pageNumber: 24,
      sectionNumber: '22.9',
      title: 'Architektura Sytuacyjna i Modyfikacja Środowiska — Inżynieria Ttarcia',
      category: 'teoria',
      readingTimeMinutes: 15,
      caseStudyRef: caseStudiesChapterTwentyTwo[6],
      paragraphs: [
        'Najskuteczniejsze osoby na świecie nie różnią się od innych tym, że posiadają tytanową siłę woli. Różnią się tym, że rzadko muszą z niej korzystać. Projektują swoje życie tak, aby pokusy nie pojawiały się w ich otoczeniu.',
        'Podstawową zasadą nowoczesnej samoregulacji jest Inżynieria Ttarcia (Friction Engineering):',
        '1. ZWIĘKSZANIE TTARCIA DLA ZŁYCH NAWYKÓW: Jeśli każde sięgnięcie po telefon wymaga wstania z fotela, wpisania 12-cyfrowego hasła i wyciągnięcia go z zamkniętej szuflady, odcinasz automatyczną pętlę dopaminową. Zwiększenie oporu o zaledwie 20 sekund drastycznie redukuje częstotliwość niepożądanego zachowania.',
        '2. ZMNIEJSZANIE TTARCIA DLA DOBRYCH NAWYKÓW: Jeśli strój na poranny trening leży przygotowany przy łóżku, a mata jest rozwinięta, usunąłeś wszystkie mikrodecyzje, które rano generują opór.',
        'Pamiętaj: Środowisko zawsze wygrywa z motywacją w długiej perspektywie czasowej. Zamiast trenować hart ducha w niesprzyjającym otoczeniu, zmień architekturę pomieszczenia.'
      ]
    },

    {
      id: 'sec-22-10',
      pageNumber: 27,
      sectionNumber: '22.10',
      title: 'Intencje Implementacyjne Gollwitzera — Planowanie typu "Jeśli X, to Y"',
      category: 'teoria',
      readingTimeMinutes: 15,
      caseStudyRef: caseStudiesChapterTwentyTwo[2],
      paragraphs: [
        'Niemiecki psycholog Peter Gollwitzer dokonał przełomu w badaniach nad realizacją celów, wprowadzając pojęcie Intencji Implementacyjnych (Implementation Intentions).',
        'Podczas gdy tradycyjna intencja celu ma postać: "Chcę osiągnąć Z" (np. "Będę więcej ćwiczył"), intencja implementacyjna ma postać sztywnego algorytmu wykonawczego:',
        '„JEŚLI pojawi się sytuacja X, TO wykonam działanie Y.”',
        'Dlaczego ta prosta zmiana składniowa drastycznie zwiększa skuteczność (metaanalizy wskazują na wskaźnik d Cohena = 0.65)?',
        '• Tworzy w pamięci wyrazistą reprezentację wyzwalacza sytuacyjnego "X". Mózg podświadomie wypatruje momentu pojawienia się sygnału.',
        '• Odciąża korę przedczołową z konieczności podejmowania decyzji w stanie zmęczenia lub emocjonalnego wzburzenia. Kiedy pojawia się "X", zachowanie "Y" uruchamia się niemal automatycznie (proceduralnie).',
        'Przykłady precyzyjnych intencji implementacyjnych:',
        '• "JEŚLI kelner zapyta o deser, TO zamówię czarną kawę bez cukru."',
        '• "JEŚLI o godzinie 17:00 wyłączę komputer, TO natychmiast założę buty do biegania."'
      ]
    },

    {
      id: 'sec-22-11',
      pageNumber: 30,
      sectionNumber: '22.11',
      title: 'Mental Contrasting z Intencjami Implementacyjnymi — Metoda WOOP Gabriele Oettingen',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      caseStudyRef: caseStudiesChapterTwentyTwo[3],
      exerciseRef: selfExercisesChapterTwentyTwo[2],
      paragraphs: [
        'Gabriele Oettingen z New York University połączyła badania nad kontrastowaniem mentalnym z intencjami implementacyjnymi Gollwitzera, tworząc potężny, naukowo zweryfikowany protokół WOOP (Wish, Outcome, Obstacle, Plan).',
        'WOOP przełamuje największą słabość tradycyjnego pozytywnego myślenia. Większość ludzi popada w pułapkę czystego fantazjowania — wyobrażają sobie sukces, co usypia czujność układu nerwowego. WOOP zmusza do bezwzględnie uczciwego zderzenia marzenia z wewnętrznym oporem.',
        'Cztery kroki protokołu WOOP:',
        '1. W — WISH (Życzenie): Zdefiniowanie wyzywającego, ale realnego celu na najbliższy czas.',
        '2. O — OUTCOME (Wynik): Żywe wyobrażenie sobie najlepszego rezultatu i emocji towarzyszących sukcesowi.',
        '3. O — OBSTACLE (Przeszkoda): Zidentyfikowanie GŁÓWNEJ WEWNĘTRZNEJ PRZESZKODY (emocji, przekonania, odruchu), która w przeszłości niweczyła Twoje starania.',
        '4. P — PLAN (Plan Jeśli-To): Stworzenie precyzyjnej intencji implementacyjnej ukierunkowanej na neutralizację zidentyfikowanej przeszkody.',
        'Regularne stosowanie WOOP przeprogramowuje architekturę oczekiwań mózgu, budując pomost między emocjonalną intencją a konkretnym mikroruchem.'
      ]
    },

    {
      id: 'sec-22-12',
      pageNumber: 33,
      sectionNumber: '22.12',
      title: 'Przewartościowanie Poznawcze i Regulacja Emocjonalna według Jamesa Grossa',
      category: 'teoria',
      readingTimeMinutes: 15,
      caseStudyRef: caseStudiesChapterTwentyTwo[5],
      paragraphs: [
        'James Gross ze Stanford University stworzył Model Procesowy Regulacji Emocjonalnej, w którym podzielił strategie samoregulacyjnych ingerencji na dwie główne grupy:',
        '1. STRATEGIE ANTYCYPACYJNE (Antecedent-focused): Działające zanim emocja i impuls w pełni się rozwiną (Modyfikacja Sytuacji, Przekierowanie Uwagi, Przewartościowanie Poznawcze).',
        '2. STRATEGIE REAKTYWNE (Response-focused): Działające w momencie, gdy reakcja fizjologiczna już nastąpiła (Tłumienie ekspresji, Zmuszanie się).',
        'Gwiazdą w koronie strategii antycypacyjnych jest Przewartościowanie Poznawcze (Cognitive Reappraisal). Polega ono na zmianie sposobu interpretacji znaczenia danego bodźca.',
        'Gdy czujesz przyspieszone bicie serca przed wystąpieniem publicznym, możesz zinterpretować to doznanie jako: "Jestem przerażony, zaraz zemdleję" (co wywoła paraliż) LUB jako: "Moje ciało daje mi darmową dawkę adrenaliny, bym wypadł z maksymalną dynamiką" (co wywoła ekscytację). Doznanie fizjologiczne jest to samo — zmiana etykiety poznawczej całkowicie modyfikuje zachowanie.'
      ]
    },

    {
      id: 'sec-22-13',
      pageNumber: 36,
      sectionNumber: '22.13',
      title: 'Obciążenie Poznawcze, Zmęczenie i Zjawisko Deprywacji Decyzyjnej (Decision Fatigue)',
      category: 'teoria',
      readingTimeMinutes: 15,
      caseStudyRef: caseStudiesChapterTwentyTwo[4],
      paragraphs: [
        'Kora przedczołowa jest najbardziej energochłonną strukturą w naszym ciele. Każda wyspecjalizowana funkcja zarządcza — podejmowanie decyzji, hamowanie impulsów, analiza ryzyka, wyszukiwanie informacji — czerpie z tego samego wspólnego zasobu mocy obliczeniowej.',
        'Gdy w ciągu dnia podejmujesz setki błahych decyzji (co założyć, co odpisać na e-mail, co zjeść, którą ścieżką pojechać), wchodzisz w stan Deprywacji Decyzyjnej (Decision Fatigue).',
        'Skutki zmęczenia decyzyjnego są przerażająco powtarzalne:',
        '• Wzrost impulsywności i szukanie natychmiastowych gratyfikacji.',
        '• Przejście na skróty poznawcze (bierne wybieranie opcji domyślnej).',
        '• Drastyczny spadek tolerancji na frustrację i wybuchowość emocjonalna.',
        'Ochrona zasobów zarządczych wymaga bezwzględnego eliminowania konieczności podejmowania decyzji w kwestiach wtórnych poprzez rutynizację i automatyzację poranków oraz środowiska.'
      ]
    },

    {
      id: 'sec-22-14',
      pageNumber: 39,
      sectionNumber: '22.14',
      title: 'Rola Poczucia Skuteczności (Albert Bandura) w Trwałości Samoregulacji',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Albert Bandura udowodnił, że kluczowym mediatorem wszelkiej samoregulacji jest Poczucie Własnej Skuteczności (Self-Efficacy) — przekonanie o własnej zdolności do zorganizowania i wykonania działań niezbędnych do osiągnięcia określonego celu.',
        'Poczucie skuteczności nie jest ogólnym "optymizmem". Jest kontekstową wiarą w to, że potrafię poradzić sobie z konkretną przeszkodą.',
        'Poczucie skuteczności buduje się poprzez cztery źródła (uporządkowane od najsilniejszego):',
        '1. Doświadczenia opanowania (Mastery Experiences): Drobne, skumulowane sukcesy w realnym działaniu.',
        '2. Doświadczenia zastępcze (Vicarious Experiences): Obserwowanie osób podobnych do nas, które pomyślnie pokonały tę samą trudność.',
        '3. Perswazja społeczna (Social Persuasion): Konstruktywne wsparcie i wiara ze strony wiarygodnych autorytetów.',
        '4. Stany fizjologiczne i emocjonalne: Interpretowanie własnego pobudzenia jako mobilizacji, a nie słabości.',
        'Każdy mikro-sukces samoregulacyjny (np. powstrzymanie się od sięgnięcia po telefon przez 30 minut) zasila bank poczucia skuteczności, ułatwiając podejmowanie trudniejszych wyzwań w przyszłości.'
      ]
    },

    {
      id: 'sec-22-15',
      pageNumber: 42,
      sectionNumber: '22.15',
      title: 'Elastyczność Regulacyjna — Sztywność jako Wyrok na Samokontroli',
      category: 'teoria',
      readingTimeMinutes: 15,
      caseStudyRef: caseStudiesChapterTwentyTwo[7],
      paragraphs: [
        'Wielu ludzi błędnie utożsamia samoregulację ze sztywnym, żelaznym rygorem. Tworzą drastyczne, nieznoszące sprzeciwu reguły: "Będę biegać codziennie o 5:00 rano bez względu na pogodę, samopoczucie i stan zdrowia".',
        'Tego rodzaju sztywność poznawcza jest największym wrogiem długoterminowej samokontroli. Gdy w życiu pojawia się nieunikniony kryzys (choroba, nieprzewidziana podróż, awaria w pracy), sztywny plan ulega roztrzaskaniu. Wtedy uruchamia się niszczycielskie myślenie dychotomiczne: "Plan legł w gruzach, jestem bezużyteczny, wszystko stracone".',
        'Badania George\'a Bonanno i Todd\'a Kashdana wskazują, że kluczem do odporności jest Elastyczność Regulacyjna (Regulatory Flexibility):',
        '• Zdolność do stałego monitorowania skuteczności stosowanej strategii.',
        '• Umiejętność modyfikowania lub całkowitej zmiany metody, gdy warunki otoczenia ulegają drastycznej zmianie.',
        '• Posiadanie protokołów awaryjnych (np. "Jeśli nie mam czasu na 60 minut treningu, wykonuję wariant B: 5 minut pompki i rozciągania").'
      ]
    },

    {
      id: 'sec-22-16',
      pageNumber: 45,
      sectionNumber: '22.16',
      title: 'Przegląd Błędów Regulacyjnych — Studium Przypadków z Życia Codziennego',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      caseStudyRef: caseStudiesChapterTwentyTwo[0],
      paragraphs: [
        'Przeanalizujmy najczęstsze pułapki regulacyjne, w które wpadają wysoce inteligentni ludzie:',
        '1. Efekt "A niech to!" (What-the-hell effect): Występuje, gdy drobna usterka w samokontroli (np. zjedzenie jednej frytki na diecie) jest interpretowana jako całkowita klęska, co prowadzi do porzucenia jakichkolwiek hamulców ("Skoro i tak złamałem dietę, zjem cały zestaw i deser").',
        '2. Moralne Rozgrzeszenie (Moral Licensing): Zjawisko polegające na tym, że po wykonaniu "dobrego uczynku" (np. zjedzeniu sałatki na obiad) czujemy podświadome przyzwolenie na pobłażliwość w innej sferze ("Ciężko pracowałem przez 2 godziny, więc należy mi się 3 godziny gier").',
        '3. Przecenianie Przyszłej Silnej Woli: Naiwne przekonanie, że "jutrzejszy Ja" będzie posiadał nieograniczone pokłady energii, braku stresu i tytanowej dyscypliny, co skłania nas do przerzucania trudnych zadań na jutro.'
      ]
    },

    {
      id: 'sec-22-17',
      pageNumber: 48,
      sectionNumber: '22.17',
      title: 'Laboratorium Samoregulacji — Praktyczny Przewodnik Diagnostyczny i Aplikacyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      exerciseRef: selfExercisesChapterTwentyTwo[0],
      paragraphs: [
        'Oto kompletny algorytm wdrażania samoregulacji w dowolnym obszarze życia:',
        'KROK 1: Wybierz jedno konkretne zachowanie (nie 5 na raz).',
        'KROK 2: Zwiększ tarcie dla zły nawyków i usuń wyzwalacze z otoczenia.',
        'KROK 3: Stwórz 3 precyzyjne intencje implementacyjne typu "Jeśli X, to Y".',
        'KROK 4: Zastosuj metodę WOOP i zderz cel z główną wewnętrzną przeszkodą.',
        'KROK 5: Ustal "Minimum Dobrego Dnia" (Wersję Awaryjną B) na dni kryzysowe.',
        'KROK 6: Monitoruj postępy bez samokrytyki, wyciągając wnioski z każdego potknięcia.'
      ]
    },

    {
      id: 'sec-22-18',
      pageNumber: 50,
      sectionNumber: '22.18',
      title: 'Błędne Intuicje dotyczące Samokontroli i Silnej Woli',
      category: 'teoria',
      readingTimeMinutes: 12,
      subsections: [
        {
          title: 'Mit 1: "Ludzie sukcesu mają nieograniczoną siłę woli"',
          paragraphs: [
            'Rzeczywistość: Badania pokazują, że osoby o wysokiej skuteczności rzadziej doświadczają pokus w codziennym życiu, ponieważ wyeliminowały je ze swojego otoczenia.'
          ]
        },
        {
          title: 'Mit 2: "Tłumienie myśli i zachcianek prowadzi do ich wyeliminowania"',
          paragraphs: [
            'Rzeczywistość: Tłumienie wywołuje tzw. efekt odbicia (Wegner), sprawiając, że tłumiona treść powraca ze zdwojoną siłą.'
          ]
        },
        {
          title: 'Mit 3: "Surowa samokrytyka buduje charakter i dyscyplinę"',
          paragraphs: [
            'Rzeczywistość: Samokrytyka nasila wstyd i stres, aktywując ciało migdałowate i zmuszając umysł do ucieczki w natychmiastowe pocieszacze.'
          ]
        }
      ],
      paragraphs: [
        'Zrozumienie tych błędnych intuicji pozwala usunąć z procesu samoregulacji zbędny ciężar poczucia winy.'
      ]
    },

    {
      id: 'sec-22-19',
      pageNumber: 51,
      sectionNumber: '22.19',
      title: 'Co Nadal Nie Jest Jasne? — Ograniczenia Wiedzy i Granice Nauki',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Mimo ogromnego postępu neuronauki i psychologii poznawczej, w obszarze samoregulacji pozostaje wiele otwartych pytań:',
        '1. Kontrowersja wokół Replikacji Ego Depletion: Międzynarodowe kryzysy replikacyjne pokazały, że efekt wyczerpywania się glukozy w mózgu nie jest tak uniwersalny, jak sądzono. Wciąż trwa debata, w jakim stopniu spadek samokontroli jest kwestią biochemii, a w jakim przekonań jednostki o własnych zasobach.',
        '2. Różnice Osobnicze w Plastyczności Układów Zarządczych: Nie wiemy dokładnie, w jakim stopniu uwarunkowania genetyczne (np. warianty genu COMT odpowiedzialnego za rozkład dopaminy w PFC) wyznaczają nieprzekraczalny sufit dla samokontroli.',
        '3. Wpływ Technologii Algorytmicznych: Długofalowy wpływ codziennego kontaktu z algorytmami rekomendacyjnymi na pojemność uwagi dzieci i dorosłych jest dopiero przedmiotem badań podłużnych.'
      ]
    },

    {
      id: 'sec-22-20',
      pageNumber: 52,
      sectionNumber: '22.20',
      title: 'Jak Zastosować To Jutro? — Protokół 24-Godzinny i 7-Dniowy',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'PROTOKÓŁ NA JUTRO (Pierwsze 24 godziny):',
        '1. Rano wyeliminuj telefon z pierwszych 30 minut po przebudzeniu. Zastąp go mikroruchem.',
        '2. Wybierz jedno kluczowe zadanie i przygotuj stanowisko pracy wieczorem, usuwając z biurka wszystkie zbędne przedmioty.',
        '3. Gdy poczujesz chęć odłożenia zadania, zastosuj zasadę 90 sekund (Urge Surfing) — przeczekaj falę impulsu bez sięgania po rozpraszacz.',
        'PLAN NA 7 DNI:',
        '• Dzień 1-2: Audyt punktów tarcia i wyeliminowanie 2 głównych wyzwalaczy w otoczeniu.',
        '• Dzień 3-4: Napisanie 3 intencji implementacyjnych "Jeśli-To".',
        '• Dzień 5-6: Przeprowadzenie pełnego protokołu WOOP dla celu tygodniowego.',
        '• Dzień 7: Ewaluacja pętli sprzężenia zwrotnego i dostosowanie wariantu B.'
      ]
    },

    {
      id: 'sec-22-21',
      pageNumber: 52,
      sectionNumber: '22.21',
      title: 'Podsumowanie, Synteza i Most do Rozdziału 7',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'W tym rozdziale dokonaliśmy głębokiej dekonstrukcji samoregulacji. Zrozumiałeś, że samokontrola nie jest bezmyślnym zmuszaniem się do wysiłku siłą woli, lecz wysoce dostrojonym cybernetycznym systemem zarządzania kontekstem, uwagą, emocjami i środowiskiem.',
        'Nauczyłeś się tworzyć pętle sprzężenia zwrotnego (TOTE), neutralizować prokrastynację emocjonalną, stosować intencje implementacyjne Gollwitzera, korzystać z metody WOOP oraz stosować elastyczność regulacyjną.',
        'Jednak prawdziwy sprawdzian samoregulacji nadchodzi w momentach ekstremałych — gdy pojawia się silny stres, kryzys życiowy, presja społeczna lub nagła zmiana warunków. W następnym rozdziale — Rozdziale 7 — przejdziemy do badania odporności psychicznej (Resilience) i samoregulacji w warunkach wysokiego obciążenia emocjonalnego.'
      ]
    }
  ]
};

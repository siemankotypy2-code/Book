import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 12 (GLOBALNIE ROZDZIAŁ 28 W STRUKTURZE DZIEŁA)
 * TYTUŁ: PODEJMOWANIE DECYZJI — MECHANIZMY WYBORU, INFORMACJE, EMOCJE, BŁĘDY POZNAWCZE I SYSTEM ŚWIADOMEGO DECYDOWANIA
 */

export const chapterTwentyEightExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest fundamentalna różnica między pojęciem „wyboru” (choice) a pojęciem „decyzji” (decision) w psychologii poznawczej?',
    topic: 'Struktura Procesu Decyzyjnego',
    sectionRef: 'Sekcja 28.1',
    options: [
      { label: 'A', text: 'Wybór to obiektywny zestaw możliwości w otoczeniu, natomiast decyzja to wewnętrzny proces psychiczny obejmujący wartościowanie, selekcję, redukcję opcji oraz zaangażowanie zasobów w określony kierunek działania.', isCorrect: true },
      { label: 'B', text: 'Wybór dotyczy wyłącznie zakupów konsumenckich, a decyzja relacji międzyludzkich.', isCorrect: false },
      { label: 'C', text: 'Wybór jest zawsze nieświadomy, a decyzja jest zawsze w 100% racjonalna.', isCorrect: false },
      { label: 'D', text: 'Są to synonimy językowe nieposiadające żadnego rozróżnienia psychologicznego.', isCorrect: false }
    ],
    explanation: 'Wybór to zewnętrzna struktura wariantów dostępnych dla jednostki. Decyzja jest aktywnym aktem poznawczo-afektywnym, w którym podmiot przetwarza informacje, waży zyski i straty oraz podejmuje zobowiązanie mentalne lub behawioralne.',
    keyTakeaway: 'Możesz mieć przed sobą wiele wyborów, ale dopóki nie zaangażujesz procesów wartościowania i nie odrzucisz alternatyw, nie podjąłeś decyzji.'
  },
  {
    id: 2,
    question: 'Czym różni się sytuacja podejmowania decyzji w warunkach RYZYKA od warunków NIEPEWNOŚCI w klasycznym ujęciu Franka Knighta?',
    topic: 'Ryzyko a Niepewność',
    sectionRef: 'Sekcja 28.8',
    options: [
      { label: 'A', text: 'W warunkach ryzyka znany jest rozkład prawdopodobieństwa możliwych wyników (np. rzut kostką), podczas gdy w warunkach niepewności prawdopodobieństwo skutków jest nieznane lub z natury niemierzalne.', isCorrect: true },
      { label: 'B', text: 'Ryzyko dotyczy tylko spraw finansowych, a niepewność wyłącznie emocji.', isCorrect: false },
      { label: 'C', text: 'W niepewności zawsze podejmuje się decyzje bezbłędne, a w ryzyku zawsze ponosi się porażkę.', isCorrect: false },
      { label: 'D', text: 'Warunki ryzyka wykluczają udział emocji, a niepewność je wywołuje.', isCorrect: false }
    ],
    explanation: 'Klasyczny podział Knighta rozróżnia sytuacje mierzalne probabilistycznie (ryzyko) od sytuacji otwartych, unikalnych i dynamicznych (głęboka niepewność), w których kalkulacja matematyczna musi ustąpić miejsca heurystykom i odporności na błąd.',
    keyTakeaway: 'Większość ważnych decyzji życiowych to niepewność, a nie policzalne ryzyko — dlatego kluczem jest elastyczność i odwracalność opcji.'
  },
  {
    id: 3,
    question: 'Na czym polega błąd poznawczy znany jako „pułapka kosztów utopionych” (sunk cost fallacy)?',
    topic: 'Błędy Poznawcze w Decyzjach',
    sectionRef: 'Sekcja 28.18',
    options: [
      { label: 'A', text: 'Na kontynuowaniu nieefektywnego przedsięwzięcia tylko dlatego, że zainwestowano już w nie czas, emocje lub pieniądze, których i tak nie da się odzyskać.', isCorrect: true },
      { label: 'B', text: 'Na podejmowaniu decyzji wyłącznie w oparciu o pierwszą usłyszaną informację.', isCorrect: false },
      { label: 'C', text: 'Na przecenianiu prawdopodobieństwa wystąpienia rzadkich zdarzeń katastroficznych.', isCorrect: false },
      { label: 'D', text: 'Na natychmiastowym porzucaniu każdego projektu przy pierwszej przeszkodzie.', isCorrect: false }
    ],
    explanation: 'Koszty utopione to nakłady przeszłe, których nie można cofnąć. Racjonalna analiza powinna uwzględniać wyłącznie przyszłe zyski i przyszłe koszty (marginalne), jednak ludzki umysł pod wpływem awersji do straty próbuje „ratować” minione inwestycje.',
    keyTakeaway: 'Podejmując decyzję dzisiaj, patrz w przyszłość — przeszłych kosztów nie odzyskasz poprzez trwanie w błędnym kierunku.'
  },
  {
    id: 4,
    question: 'W jaki sposób model „Drzwi Typu 1 i Drzwi Typu 2” (decyzje odwracalne vs nieodwracalne) chroni przed paraliżem analitycznym?',
    topic: 'Typologia Decyzji: Odwracalność',
    sectionRef: 'Sekcja 28.24',
    options: [
      { label: 'A', text: 'Pozwala szybko podejmować decyzje odwracalne (Typ 2) przy około 70% danych, rezerwując głęboką analizę i czas wyłącznie dla decyzji trudnoodwracalnych o wysokich stawkach (Typ 1).', isCorrect: true },
      { label: 'B', text: 'Zaleca traktowanie każdej decyzji jakby była nieodwracalna i śmiertelnie groźna.', isCorrect: false },
      { label: 'C', text: 'Eliminuje potrzebę zbierania jakichkolwiek informacji przed rozpoczęciem działania.', isCorrect: false },
      { label: 'D', text: 'Wymaga konsultowania każdego kroku z grupą co najmniej 10 osób.', isCorrect: false }
    ],
    explanation: 'Większość codziennych decyzji to decyzje dwukierunkowe (odwracalne). Traktowanie ich z taką samą powagą jak decyzji jednokierunkowych (nieodwracalnych) wyczerpuje zasoby poznawcze i prowadzi do paraliżu decyzyjnego.',
    keyTakeaway: 'Zidentyfikuj, czy Twoja decyzja to drzwi z klamką z obu stron — jeśli tak, podejmij ją szybko i koryguj w marszu.'
  },
  {
    id: 5,
    question: 'Dlaczego nadmiar informacji (information overload) pogarsza jakość złożonych decyzji zamiast ją podnosić?',
    topic: 'Przeciążenie Informacyjne i Heurystyki',
    sectionRef: 'Sekcja 28.9',
    options: [
      { label: 'A', text: 'Ponieważ przekracza pojemność pamięci roboczej, zwiększa szum poznawczy, wywołuje zmęczenie decyzyjne i zmusza umysł do opierania się na przypadkowych, powierzchownych przesłankach.', isCorrect: true },
      { label: 'B', text: 'Ponieważ ludzki mózg jest zaprogramowany na ignorowanie wszystkich faktów liczbowych.', isCorrect: false },
      { label: 'C', text: 'Ponieważ każda dodatkowa informacja zmniejsza poziom dopaminy w korze potylicznej.', isCorrect: false },
      { label: 'D', text: 'Ponieważ intuicja zawsze działa lepiej bez jakiejkolwiek wiedzy.', isCorrect: false }
    ],
    explanation: 'Zgodnie z koncepcją ograniczonej racjonalności (Herbert Simon) oraz badaniami nad cognitive load, powyżej pewnego progu nowe dane wprowadzają więcej zakłóceń niż użytecznego sygnału, dając fałszywe poczucie kontroli.',
    keyTakeaway: 'Więcej danych nie oznacza lepszej decyzji — kluczowa jest selekcja istotnych kryteriów i ignorowanie szumu.'
  }
];

export const chapterTwentyEightCaseStudyTrudnaDecyzja: CaseStudy = {
  id: 'cs-ch28-krzysztof-kariera',
  title: 'Wielkie Studium Przypadku: Dylemat Dwóch Dróg — Zmiana Kariery Krzysztofa',
  subtitle: 'Analiza paraliżu decyzyjnego, lęku przed stratą i konfrontacji między stabilizacją a rozwojem',
  protagonist: 'Krzysztof, 34 lata, starszy specjalista ds. logistyki w stabilnym koncernie międzynarodowym',
  context: 'Krzysztof od 8 lat pracuje w międzynarodowej korporacji logistycznej. Ma stałą pensję, bezpieczny kontrakt i powtarzalne obowiązki, które od dwóch lat wywołują w nim głębokie poczucie wypalenia i znużenia. Otrzymał propozycję przejścia do dynamicznego software-house’u na stanowisko Product Managera wdrażającego innowacyjne systemy AI w logistyce. Wynagrodzenie zasadnicze jest nieco niższe, ale umowa przewiduje wysokie premie i ogromne możliwości rozwoju. Krzysztof od trzech miesięcy nie potrafi podjąć decyzji — tworzy niekończące się tabele w Excelu, nie śpi po nocach i cierpi na dolegliwości żołądkowe.',
  story: [
    'Krzysztof każdego wieczoru otwiera swój arkusz kalkulacyjny. Ma tam 47 kolumn: od przewidywanego poziomu inflacji, przez odległość biura od domu, aż po subiektywną ocenę „stabilności branży technologicznej w horyzoncie 5 lat”.',
    'Za każdym razem, gdy szala przechyla się w stronę nowej oferty, pojawia się nagły wyrzut adrenaliny i natrętna myśl: „A co, jeśli startup zbankrutuje w pół roku? Co powiem żonie? Mam przecież kredyt hipoteczny”.',
    'Gdy z kolei decyduje, że zostanie w obecnej firmie, natychmiast ogarnia go przytłaczający smutek, bezsilność i złość na samego siebie: „Zostanę tu na kolejne 10 lat, mój mózg zardzewieje, a technologia mnie ominie”.',
    'Krzysztof wpadł w klasyczny stan ambiwalencji decyzyjnej. Zamiast podejmować decyzję, zbierał kolejne dane: czytał fora internetowe, analizował wypowiedzi byłych pracowników i pytał o zdanie każdego znajomego. Każda nowa opinia rodziła kolejne pytania, potęgując chaos poznawczy.',
    'Przełom nastąpił podczas sesji z psychologiem biznesu, gdy Krzysztof musiał zrekonstruować swoje ukryte założenia. Zrozumiał, że szukał decyzji „bezkosztowej” — takiej, która zagwarantuje bezpieczeństwo i jednocześnie da pełną ekscytację rozwojem.',
    'Wprowadził model: zdefiniował twardy bufor finansowy (6 miesięcy kosztów życia), ustalił z nowym pracodawcą 6-miesięczny okres ewaluacji z mierzalnymi KPI oraz podzielił decyzję na sekwencję testowalnych kroków. Podjął nowe wyzwanie i po 12 miesiącach awansował na dyrektora wdrożeń.'
  ],
  dialogue: [
    { speaker: 'Krzysztof (do żony, godzina 23:30)', text: 'Jeśli zostanę, będę żałować do końca życia. Ale jeśli pójdę i polegnę, zniszczę naszą stabilność. Nie widzę dobrego wyjścia.', subtext: 'Dychotomizacja sytuacji i uwięzienie w pułapce wyboru zero-jedynkowego.' },
    { speaker: 'Żona (spokojnie)', text: 'Krzysiek, patrzysz na to tak, jakbyś podpisywał cyrograf na 20 lat. Co najgorszego stanie się, jeśli za rok wrócisz do zwykłej logistyki z nowym wpisem w CV?', subtext: 'Odsłonięcie odwracalności decyzji (Drzwi Typu 2).' },
    { speaker: 'Krzysztof (po chwili milczenia)', text: 'Rzeczywiście... przecież rynek logistyków nie zniknie za rok. Straciłbym tylko dumę, a zyskałbym wiedzę.', subtext: 'Przełamanie katastrofizowania i obniżenie pobudzenia limbicznego.' }
  ],
  decisionTaken: 'Przejście od próby wyeliminowania wszelkiego ryzyka do zarządzania ryzykiem: zabezpieczenie bufora finansowego, podpisanie nowej umowy z jasnymi kryteriami weryfikacji i zaakceptowanie przejściowego dyskomfortu.',
  whatProtagonistSaw: 'Fałszywą dychotomię: „całkowite bezpieczeństwo i nuda” kontra „skrajne ryzyko i katastrofa finansowa”.',
  whatWasMissed: 'Że pozostanie w starej firmie również jest decyzją o wysokim, choć ukrytym koszcie (utrata konkurencyjności rynkowej, regres zdrowotny, narastająca frustracja); że brak decyzji jest w rzeczywistości decyzją o trwaniu w status quo.',
  psychologicalAnalysis: {
    coreMechanism: 'Paraliż decyzyjny wywołany awersją do straty (Kahneman & Tversky) oraz błędem status quo połączonym z przeciążeniem poznawczym.',
    cognitiveBiases: [
      { name: 'Awersja do straty (Loss Aversion)', description: 'Ból potencjalnej straty zarobków o 15% był psychologicznie dwukrotnie silniejszy niż radość z 50% potencjalnego wzrostu w przyszłości.', impact: 'Blokada przed jakimkolwiek ruchem.' },
      { name: 'Bias Status Quo', description: 'Nieuzasadnione traktowanie obecnej, frustrującej sytuacji jako bezpieczniejszej tylko dlatego, że jest już znana.', impact: 'Usprawiedliwianie bierności.' },
      { name: 'Analiza Paraliżująca (Analysis Paralysis)', description: 'Przekonanie, że kolejna porcja danych usunie egzystencjalną niepewność przyszłości.', impact: 'Trzymiesięczna zwłoka i chroniczny stres.' }
    ],
    defenseMechanisms: [
      { name: 'Intelektualizacja', explanation: 'Ucieczka od lęku i odpowiedzialności w niekończące się obliczenia w arkuszu kalkulacyjnym.' }
    ],
    emotionalDynamic: 'Oscylacja między lękiem przed utratą bezpieczeństwa a żalem z powodu marnowanego potencjału.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Próba chłodnej kalkulacji 47 zmiennych', activationState: 'Skrajnie przeciążona' },
      { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Integracja markerów somatycznych i wartości emocjonalnej opcji', activationState: 'Zablokowana przez sprzeczne sygnały afektywne' },
      { region: 'Ciało migdałowate i przednia wyspa', role: 'Generowanie sygnałów trwogi i wstrętu wobec potencjalnej straty statusu', activationState: 'Przewlekle nadreaktywne' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol', roleInScenario: 'Utrzymujący się wysoki poziom wywołujący bezsenność i problemy gastryczne.' },
      { name: 'Noradrenalina', roleInScenario: 'Wywołująca ciągłe poczucie czujności i alarmu poznawczego.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Otwarcie arkusza z ofertą', process: 'Błyskawiczny skok tętna i skurcz naczyń trzewnych.' },
      { timeMs: 'Próba porównania opcji', process: 'Pętla konfliktowa między ACC a vmPFC skutkująca wyczerpaniem woli.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Audyt Ukrytych Kosztów Status Quo', script: 'Wypisz realne straty osobiste, zdrowotne i rynkowe, jakie poniesiesz, jeśli za 3 lata nic się nie zmieni.', rationale: 'Równoważy asymetrię awersji do straty poprzez unaocznienie kosztu zaniechania.' },
      { step: 'Protokół Worst-Case Scenario (Pre-mortem)', script: 'Załóż najgorszy możliwy obrót spraw i stwórz konkretny 3-punktowy plan ratunkowy.', rationale: 'Obniża lęk limbiczny i przywraca poczucie kontroli instrumentalnej.' }
    ]
  },
  keyTakeaway: 'Nie istnieje decyzja bezkosztowa. Każdy wybór wiąże się z rezygnacją z alternatywy. Prawdziwa dojrzałość polega na świadomym wyborze tego, jakie koszty i ryzyka decydujesz się ponieść.'
};

export const chapterTwentyEightCaseStudyPresjaCzasu: CaseStudy = {
  id: 'cs-ch28-magda-kryzys',
  title: 'Studium Przypadku: Decyzja w Oku Cyklonu — Awaria Systemu pod Presją Czasu',
  subtitle: 'Jak ograniczenie tunelu poznawczego i algorytm szybkiej priorytetyzacji uratowały projekt',
  protagonist: 'Magda, 29 lat, liderka zespołu inżynierii danych w firmie e-commerce',
  context: 'Podczas Black Friday o godzinie 14:00 następuje awaria głównego klastra bazodanowego. Sklep traci 40 tysięcy złotych na minutę. W pokoju operacyjnym panuje krzyk, dyrektor handlowy żąda natychmiastowego restartu serwerów, a zespół techniczny podaje trzy sprzeczne hipotezy dotyczące źródła błędu. Magda ma 3 minuty na podjęcie kluczowej decyzji: zresetować system (ryzykując utratę niezapisanych transakcji tysięcy klientów) czy odizolować uszkodzony węzeł i przejść na procedurę awaryjną (co przedłuży przestój o 10 minut, ale ocali integralność danych).',
  story: [
    'Magda czuje, jak krew uderza jej do skroni. W pokoju jest duszno, telefony dzwonią nieprzerwanie, a dyrektor stoi nad jej biurkiem, krzycząc: „Resetuj to natychmiast, tracimy miliony!”.',
    'Pierwszy odruch Magdy to ulec presji autorytetu i wykonać polecenie, by zrzucić z siebie ciężar odpowiedzialności i natychmiast uciszyć krzyk.',
    'W ułamku sekundy rozpoznaje jednak objawy własnego tunelu poznawczego: zaciśnięte gardło, płytki oddech i pokusę ucieczki w najprostszą czynność.',
    'Zamiast natychmiastowego kliknięcia, Magda wykonuje głęboki wydech, podnosi dłoń i mówi stanowczym, spokojnym głosem: „Proszę o ciszę w pokoju na 30 sekund. Działamy według protokołu awaryjnego Bravo”.',
    'Wycisza szum, prosi dwóch głównych inżynierów o podanie jednego twardego faktu (nie opinii), odrzuca opcję panicznego restartu i decyduje o izolacji węzła.',
    'Po 8 minutach system wznawia działanie w trybie bezpiecznym bez utraty ani jednego rekordu finansowego. Decyzja okazała się optymalna, a późniejszy audyt wykazał, że restart spowodowałby wielomilionowe straty w wyniku uszkodzenia struktury tabel transakcyjnych.'
  ],
  dialogue: [
    { speaker: 'Dyrektor (krzycząc)', text: 'Magda, na co ty czekasz?! Klikaj restart! Każda sekunda to tysiące złotych!', subtext: 'Paniczny przymus działania (Action Bias) zrzucany na podwładnego.' },
    { speaker: 'Magda (głos obniżony, kontakt wzrokowy)', text: 'Rozumiem stawkę finansową. Jeśli zrobimy restart teraz, uszkodzimy tabele płatności i straty będą nieodwracalne. Izoluję węzeł. Potrzebuję 90 sekund.', subtext: 'Asertywne ugruntowanie w faktach i odzyskanie dowodzenia.' }
  ],
  decisionTaken: 'Zatrzymanie panicznej eskalacji emocjonalnej, odrzucenie presji hierarchicznej i wdrożenie ustrukturyzowanego algorytmu decyzyjnego w oparciu o hierarchię wartości (integralność danych ponad chwilowy przestój).',
  whatProtagonistSaw: 'Krzyczącego przełożonego, licznik strat finansowych i paraliżujący lęk przed zwolnieniem z pracy.',
  whatWasMissed: 'Że presja czasu często zmusza ludzi do pozornych działań, które przynoszą natychmiastową ulgę psychiczną, ale katastrofalne skutki systemowe.',
  psychologicalAnalysis: {
    coreMechanism: 'Zarządzanie uwagą w warunkach ostrego pobudzenia adrenergicznego; przełamanie konformizmu wobec autorytetu pod presją.',
    cognitiveBiases: [
      { name: 'Action Bias (Skłonność do bezrefleksyjnego działania)', description: 'Odruch robienia „czegokolwiek”, byle tylko rozładować napięcie wywołane kryzysem.', impact: 'Ryzyko katastrofalnego restartu.' },
      { name: 'Heurystyka Dostępności pod Stresem', description: 'Skupienie się wyłącznie na najbardziej krzykliwym bodźcu (gniew dyrektora) zamiast na architekturze systemu.', impact: 'Zawężenie pola widzenia.' }
    ],
    defenseMechanisms: [
      { name: 'Rozładowanie w działaniu (Acting Out)', explanation: 'Pokusa natychmiastowego wykonania pochopnego kroku w celu ucieczki przed lękiem.' }
    ],
    emotionalDynamic: 'Transformacja ostrej paniki w chłodne skupienie operacyjne poprzez wprowadzenie procedury strukturyzującej.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Kora przedczołowa grzbietowa', role: 'Utrzymanie celów strategicznych wbrew dystraktorom', activationState: 'Uratowana dzięki technice pauzy' },
      { region: 'Układ siatkowaty i locus coeruleus', role: 'Wyrzut noradrenaliny', activationState: 'Maksymalne pobudzenie' }
    ],
    neurotransmitters: [
      { name: 'Adrenalina i Noradrenalina', roleInScenario: 'Mobilizacja układu krążenia.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Krzyk dyrektora', process: 'Gwałtowny skok oporu naczyniowego i przyspieszenie tętna.' },
      { timeMs: 'Pauza 30 sekund', process: 'Aktywacja nerwu błędnego i odzyskanie elastyczności myślenia.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Wymuszenie pośpiechu i intimidacja hierarchiczna', description: 'Wykorzystanie pozycji dyrektora i presji czasu do zmuszenia inżyniera do zaniechania procedur.', vulnerabilityExploited: 'Lęk przed sankcją służbową.' }
    ],
    counterMeasures: [
      { step: 'Werbalna Rama Stop-Protokół', script: '„Rozumiem stawkę finansową. Aby ocalić dane, potrzebujemy 30 sekund ciszy na realizację procedury”.', rationale: 'Przenosi rozmowę z poziomu emocjonalnej walki o władzę na poziom profesjonalnych standardów.' }
    ]
  },
  keyTakeaway: 'Im większa presja czasu i krzyk otoczenia, tym ważniejsza jest świadoma, kilkusekundowa pauza. Panika zawsze wybiera najgłośniejszą opcję, profesjonalizm wybiera opcję skuteczną.'
};

export const chapterTwentyEightCaseStudyEmocjeAnaliza: CaseStudy = {
  id: 'cs-ch28-tomasz-mieszkanie',
  title: 'Studium Przypadku: Wojna Rozumu z Sercem — Zakup Mieszkania Tomasza i Ewy',
  subtitle: 'Konflikt między analizą twardych parametrów a intuicyjnym zachwytem estetycznym',
  protagonist: 'Tomasz (analityk finansowy) i Ewa (architekt wnętrz), para podejmująca kluczową decyzję życiową',
  context: 'Tomasz i Ewa szukają pierwszego wspólnego mieszkania na kredyt na 25 lat. Po 6 miesiącach poszukiwań stają przed wyborem między dwoma lokalami: Mieszkanie A (funkcjonalne, blisko metra, świetne parametry techniczne i rozsądna cena, ale w surowym, bezdusznym bloku z lat 90.) oraz Mieszkanie B (klimatyczna kamienica z wysokimi sufitami, starym parkietem i widokiem na park, lecz z wilgocią w piwnicy, brakiem windy i czynszem wyższym o 40%). Tomasz forsuje opcję A, Ewa jest zakochana w opcji B. Konflikt grozi rozpadem relacji.',
  story: [
    'Tomasz przygotował 12-stronicowy raport z wykresami spłaty rat przy różnych stopach procentowych i kosztach remontu. Mówi: „Liczby nie kłamią, Mieszkanie B to finansowe samobójstwo”.',
    'Ewa odpowiada ze łzami w oczach: „Nie chcę żyć w betonowym więzieniu tylko dlatego, że ma ładny bilans w Excelu. Dom to uczucie, światło, przestrzeń i inspiracja, a nie tylko stopa zwrotu”.',
    'Każde z nich okopało się na swojej pozycji: Tomasz oskarżał Ewę o skrajną nieodpowiedzialność i dziecinność, a Ewa oskarżała Tomasza o brak serca, obsesyjną kontrolę i zabijanie radości życia.',
    'Sytuacja utknęła w martwym punkcie, a właściciele obu mieszkań postawili ultimatum czasowe.',
    'Zastosowali metodę wielokryterialnej analizy wartości zintegrowanej: zamiast walczyć „liczby vs emocje”, rozłożyli decyzję na fundamentalne potrzeby obojga partnerów.',
    'Zidentyfikowali, co dla Ewy stanowi esencję klimatu (światło, wysokość, zieleń za oknem) oraz co dla Tomasza stanowi nienegocjowalną granicę bezpieczeństwa (maksymalna rata nieprzekraczająca 30% dochodu netto, brak ukrytych wad konstrukcyjnych budynku).',
    'Odrzucili oba skrajne lokale i w ciągu 3 tygodni znaleźli Mieszkanie C — w zrewitalizowanej kamienicy z nową infrastrukturą techniczną, które spełniało 85% wymogów estetycznych Ewy i 90% kryteriów bezpieczeństwa finansowego Tomasza.'
  ],
  dialogue: [
    { speaker: 'Tomasz', text: 'Spójrz na tę tabelę. Koszt remontu kamienicy przekracza nasz budżet o 180 tysięcy. To obłęd.', subtext: 'Używanie liczb jako tarczy obronnej przed lękiem o bezpieczeństwo.' },
    { speaker: 'Ewa', text: 'Rozumiem liczby, Tomek, ale ja w tym bloku uschnę z rozpaczy. Będę nienawidzić każdego powrotu do domu.', subtext: 'Obrona potrzeby piękna i dobrostanu psychicznego.' },
    { speaker: 'Tomasz (po zastosowaniu metody kryteriów)', text: 'Zdefiniujmy to inaczej: czy możemy znaleźć miejsce z wysokim sufitem i dużymi oknami, ale w budynku z nowym pionem hydraulicznym i w naszym budżecie?', subtext: 'Wyjście z fałszywej dychotomii ku poszukiwaniu Trzeciej Drogi.' }
  ],
  decisionTaken: 'Porzucenie fałszywego kompromisu (w którym jedna strona czuje się przegrana) na rzecz zdefiniowania głębokich kryteriów brzegowych i poszukiwania trzeciej opcji integrującej emocje z logiką.',
  whatProtagonistSaw: 'Wojnę między „chłodnym rozsądkiem” a „życiową pasją”.',
  whatWasMissed: 'Że emocje sygnalizują fundamentalne wartości ludzkie (potrzeba piękna, harmonii, regeneracji), a logika jest narzędziem weryfikacji wykonalności — te dwa systemy powinny ze sobą współpracować, a nie zwalczać się nawzajem.',
  psychologicalAnalysis: {
    coreMechanism: 'Integracja racjonalności instrumentalnej (System 2) z markerami somatycznymi i potrzebami afektywnymi (System 1) w procesach decyzyjnych par.',
    cognitiveBiases: [
      { name: 'Dychotomia Myślenia (Czarno-Białe)', description: 'Przekonanie, że istnieje tylko wybór między ponurym bezpieczeństwem a piękną ruiną finansową.', impact: 'Polaryzacja relacji.' },
      { name: 'Egocentryzm Poznawczy', description: 'Przekonanie, że własna waluta wartościowania (arkusz kalkulacyjny u Tomasza, poczucie estetyki u Ewy) jest jedyną obiektywnie słuszną miarą świata.', impact: 'Brak empatii decyzyjnej.' }
    ],
    defenseMechanisms: [
      { name: 'Projekcja', explanation: 'Przypisywanie partnerowi złych intencji i chęci zniszczenia wspólnej przyszłości.' }
    ],
    emotionalDynamic: 'Eskalacja napięcia od lęku przed zdominowaniem do ulgi po odnalezieniu wspólnego mianownika wartości.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Most łączący analizę logiczną z odczuciami estetycznymi', activationState: 'Klucz do zintegrowanego wyboru' },
      { region: 'Wyspa (Insula)', role: 'Rejestracja dyskomfortu związanego z naruszeniem estetyki lub bezpieczeństwa', activationState: 'Uspokojona po wyborze opcji C' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna', roleInScenario: 'Wzrosła po osiągnięciu porozumienia, przywracając bliskość w parze.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Konfrontacja argumentów', process: 'Skok kortyzolu i zamknięcie kanałów komunikacji.' },
      { timeMs: 'Wspólne tworzenie kryteriów C', process: 'Synchronizacja procesów przedczołowych i poczucie sprawstwa.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Matryca Integrowania Wartości Nienegocjowalnych', script: 'Każda strona definiuje maksymalnie 2 kryteria twarde („must have”) oraz 2 granice absolutnego weta („deal breakers”). Reszta podlega elastycznej negocjacji.', rationale: 'Odpolitycznia konflikt i usuwa jałowe spory o drobiazgi.' }
    ]
  },
  keyTakeaway: 'Najlepsze decyzje życiowe nie zapadają w wyniku wyciszenia emocji ani w wyniku zignorowania faktów. Powstają wtedy, gdy rozum służy jako nawigator dla wartości, które wskazuje serce.'
};

export const chapterTwentyEightExerciseDecisionMatrix: SelfExercise = {
  id: 'ex-ch28-decision-matrix',
  title: 'Wielkie Ćwiczenie Praktyczne: Zbuduj Własny System Podejmowania Decyzji i Protokół Pre-Mortem',
  subtitle: 'Kompleksowy warsztat podejmowania złożonych decyzji osobistych, zawodowych i relacyjnych',
  objective: 'Przejście od chaotycznego zamartwiania się do ustrukturyzowanego procesu wyboru opartego na wagach kryteriów, usuwaniu fałszywych dychotomii i testowaniu odporności scenariusza.',
  durationMinutes: 30,
  neuroScientificFoundation: 'Zewnętrzna wizualizacja kryteriów i wag odciąża grzbietowo-boczną korę przedczołową (dlPFC), redukując lęk limbiczny wywołany niepewnością i przeciążeniem pamięci roboczej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj dylemat w formie otwartego pytania wyjściowego',
      instruction: 'Zamiast pytania wąskiego i dychotomicznego („Czy powinienem rzucić pracę X?”), sformułuj problem w postaci szerokiej: „W jaki sposób mogę osiągnąć [główny cel rozwoju/satysfakcji], minimalizując [główne ryzyko finansowe/relacyjne]?”.',
      promptText: 'Moje precyzyjnie zdefiniowane pytanie decyzyjne:',
      placeholder: 'W jaki sposób mogę przejść do branży nowoczesnych technologii, zachowując płynność finansową rodziny na najbliższe 12 miesięcy?'
    },
    {
      stepNumber: 2,
      title: 'Wygeneruj minimum 3 realne opcje (w tym opcję hybrydową C)',
      instruction: 'Wypisz opcję A (status quo z modyfikacją procesową), opcję B (radykalna, pełna zmiana kierunku) oraz opcję C (krok pośredni, mikrokrok testowy lub eksperyment pilotażowy).',
      promptText: 'Moje 3 opcje decyzyjne:',
      placeholder: 'Opcja A: Zostaję w firmie i negocjuję 1 dzień pracy zdalnej na naukę. Opcja B: Natychmiastowe odejście i kurs dzienny. Opcja C: Kurs wieczorowy + realizacja 2 zleceń testowych w weekendy przez 6 miesięcy.'
    },
    {
      stepNumber: 3,
      title: 'Ustal 4 kluczowe kryteria i przypisz im wagi (suma wag = 100%)',
      instruction: 'Co w tej decyzji jest obiektywnie najważniejsze? Przypisz wagi procentowe: np. Wzrost kompetencji rynkowych (35%), Bezpieczeństwo finansowe (30%), Równowaga życiowa i czas dla bliskich (20%), Poziom stresu i zdrowie (15%).',
      promptText: 'Moje kryteria i wagi procentowe:',
      placeholder: '1. Bezpieczeństwo finansowe (30%), 2. Satysfakcja i rozwój intelektualny (35%), 3. Czas dla rodziny (20%), 4. Poziom stresu (15%). Suma = 100%.'
    },
    {
      stepNumber: 4,
      title: 'Przeprowadź Analizę Pre-Mortem dla wybranej opcji faworyzowanej',
      instruction: 'Wyobraź sobie, że minął dokładnie rok od wdrożenia Twojej decyzji, a projekt zakończył się całkowitą klapą. Co dokładnie poszło nie tak? Wypisz 3 najbardziej prawdopodobne przyczyny porażki i zaprojektuj konkretne zabezpieczenia (bezpieczniki) już dzisiaj.',
      promptText: 'Moje wnioski z Pre-Mortem i zaprojektowane bezpieczniki:',
      placeholder: 'Główna pułapka: wypalenie z powodu braku odpoczynku w weekendy. Bezpiecznik: ustalam sztywny limit 8 godzin nauki w tygodniu i 1 pełny dzień całkowitego offline.'
    }
  ],
  reflectionQuestions: [
    'Która z opcji wywołuje w Twoim ciele największe poczucie spokoju i stabilności, gdy wyobrażasz sobie swoje życie za 5 lat?',
    'Jaki jest najmniejszy, w 100% odwracalny mikrokrok (Drzwi Typu 2), który możesz wykonać w ciągu najbliższych 48 godzin, by przetestować tę decyzję w praktyce?'
  ]
};

export const chapterTwentyEight: Chapter = {
  number: 28,
  volume: 3,
  volumeChapterNumber: 12,
  title: 'Rozdział 28: Podejmowanie Decyzji — Mechanizmy Wyboru, Informacje, Emocje, Błędy Poznawcze i System Świadomego Decydowania',
  subtitle: 'Od psychologicznych pułapek myślenia i paraliżu analitycznego do wielokryterialnych modeli decyzyjnych w warunkach niepewności',
  leadParagraph: 'Każdego dnia człowiek podejmuje od kilkuset do kilkunastu tysięcy decyzji — od trywialnych mikrowyborów dotyczących porannej kawy po fundamentalne rozstrzygnięcia kształtujące karierę, relacje, finanse i zdrowie na całe dekady. Choć lubimy myśleć o sobie jako o racjonalnych architektach własnego losu, psychologia poznawcza i neuronauka bezlitośnie obnażają ograniczenia ludzkiego aparatu decyzyjnego. W tym rozdziale przeprowadzimy Cię przez 30 szczegółowych etapów anatomii decyzji: odróżnimy wybór od zaangażowania, zbadamy naturę niepewności i ryzyka, przeanalizujemy podstępne błędy poznawcze (takie jak koszty utopione czy kotwiczenie) oraz wyposażymy Cię w kompletny, odporny na kryzys system podejmowania świadomych decyzji.',
  totalEstimatedPages: 110,
  sections: [
    // BLOK I — PODSTAWY PODEJMOWANIA DECYZJI (28.1 - 28.5)
    {
      id: 'sec-28-1',
      pageNumber: 900,
      sectionNumber: '28.1',
      title: 'Czym właściwie jest decyzja? Definicja psychologiczna, proces wartościowania i alokacja zasobów',
      category: 'wstep',
      readingTimeMinutes: 16,
      quote: {
        text: 'Decyzja nie jest pojedynczym momentem olśnienia, lecz ukoronowaniem długiego łańcucha selekcji, wartościowania i odrzucania alternatyw.',
        author: 'Herbert A. Simon'
      },
      paragraphs: [
        'W potocznym rozumieniu słowo „decyzja” kojarzy się z jednym, spektakularnym punktem w czasie: podpisaniem umowy o pracę, wypowiedzeniem sakramentalnego „tak” na ślubnym kobiercu czy kliknięciem przycisku „kup teraz” w sklepie internetowym. W ujęciu psychologii poznawczej i neuronauki decyzja jest jednak czymś znacznie głębszym i bardziej złożonym — to wieloetapowy proces psychiczny polegający na przetworzeniu informacji, przypisaniu subiektywnej wartości dostępnym scenariuszom, zredukowaniu wielości opcji do jednego kierunku oraz alokacji realnych zasobów: czasu, energii, uwagi i pieniędzy.',
        'Wielu ludzi myli stan biernej intencji („chciałbym kiedyś schudnąć”, „planuję kiedyś zmienić branżę”) z faktycznym stanem decyzji. Intencja nie ponosi kosztów i nie rodzi natychmiastowych konsekwencji behawioralnych; możesz przez 10 lat chcieć napisać książkę i nie napisać ani jednego zdania. Decyzja natomiast bezpowrotnie zmienia stan rzeczywistości — reorganizuje zachowanie całego organizmu i przestawia priorytety kory przedczołowej.',
        'Każda autentyczna decyzja wiąże się z zamknięciem innych ścieżek. Etymologia łacińskiego słowa decidere dosłownie oznacza „odciąć” (de- od, caedere ciąć). Podjęcie decyzji to akt odwagi poznawczej, w którym jednostka godzi się na odcięcie możliwości alternatywnych w imię pełnego zaangażowania w wybraną drogę. Kiedy mówisz „tak” jednemu projektowi, nieuchronnie mówisz „nie” dziesiątkom innych.',
        'Dojrzałość decyzyjna nie polega na posiadaniu stuprocentowej pewności, że wybrana opcja okaże się idealna — polega na pełnej, dorosłej zgodzie na poniesienie kosztów rezygnacji z opcji odrzuconych.'
      ],
      subsections: [
        {
          title: 'Wybór zewnętrzny a decyzja wewnętrzna',
          paragraphs: [
            'Wybór (choice) to struktura otoczenia — to fizyczna półka w sklepie z 30 rodzajami herbaty lub lista 5 ofert pracy w portalu rekrutacyjnym. Decyzja (decision) to wewnętrzny akt podmiotu, który waży swoje wartości, redukuje szum i przypisuje zaangażowanie jednemu wariantowi.',
            'Często tkwimy w iluzji, że posiadanie wielu wyborów czyni nas wolnymi. Jednak bez wypracowanego wewnętrznego aparatu decyzyjnego bogactwo zewnętrznych wyborów zamienia się w koszmar paraliżu i chronicznego niezadowolenia.'
          ],
          highlightBox: {
            title: 'Zasada Odcięcia (Decidere)',
            content: 'Dopóki nie odrzuciłeś pozostałych opcji i nie zaakceptowałeś utraty korzyści z alternatyw, nie podjąłeś decyzji — tkwisz jedynie w poczekalni intencji.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-28-2',
      pageNumber: 904,
      sectionNumber: '28.2',
      title: 'Jak powstaje decyzja? 7 kluczowych faz procesu: od problemu do konsekwencji',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Z punktu widzenia psychologii decyzji każdy świadomy wybór, od zakupu mieszkania po wybór strategii firmowej, przebiega przez sekwencję 7 powiązanych faz. Zrozumienie tej architektury pozwala natychmiast zdiagnozować, w którym punkcie najczęściej dochodzi u nas do zacięcia.',
        'FAZA 1: Identyfikacja problemu (dostrzeżenie rozbieżności między stanem obecnym a stanem pożądanym). Bez trafnej diagnozy problemu cały dalszy wysiłek jest chybiony.',
        'FAZA 2: Zbieranie informacji (pozyskanie danych o ograniczeniach, kosztach i realiach otoczenia).',
        'FAZA 3: Generowanie wariantów (twórcze tworzenie puli potencjalnych rozwiązań — minimum 3 opcji).',
        'FAZA 4: Wartościowanie i ocena (porównanie opcji według przyjętych kryteriów, ważenie zysków i strat).',
        'FAZA 5: Akt wyboru (redukcja alternatyw i podjęcie wewnętrznego zobowiązania).',
        'FAZA 6: Wdrożenie i działanie (behawioralna alokacja zasobów w świecie fizycznym).',
        'FAZA 7: Ewaluacja i informacja zwrotna (analiza konsekwencji i aktualizacja bazy doświadczeń).'
      ],
      subsections: [
        {
          title: 'Gdzie najczęściej pęka łańcuch decyzyjny?',
          paragraphs: [
            'Większość ludzi nie ma problemu z fazą 2 (zbieraniem informacji) — wręcz przeciwnie, zbierają ich za dużo. Prawdziwy zator powstaje między fazą 4 (oceną) a fazą 5 (aktem wyboru) oraz między fazą 5 a fazą 6 (działaniem).',
            'Jeśli utkniesz w fazie 4, wpadasz w paraliż analityczny. Jeśli zatrzymasz się na fazie 5 i nie przejdziesz do fazy 6, Twoja decyzja pozostaje martwym zapisem w notatniku, generującym frustrację i poczucie nieskuteczności.'
          ],
          highlightBox: {
            title: 'Błędna Intuicja Decyzyjna',
            content: 'Wydaje nam się, że najtrudniejszą częścią jest znalezienie „najlepszej opcji”. W rzeczywistości najtrudniejszą częścią jest zaakceptowanie nieuchronnych wad i ograniczeń opcji wybranej.',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-28-3',
      pageNumber: 908,
      sectionNumber: '28.3',
      title: 'Dlaczego podejmowanie decyzji może być trudne? Ewolucyjne źródła lęku, sprzeczne cele i ciężar odpowiedzialności',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Trudność w podejmowaniu decyzji nie jest dowodem słabości charakteru ani deficytu intelektualnego — jest bezpośrednią konsekwencją biologicznej ewolucji naszego mózgu. Ludzki układ nerwowy kształtował się w warunkach plemiennych sawanny, gdzie większość wyborów dotyczyła bezpośredniego, fizycznego przetrwania (gdzie polować, czy zaufać obcemu, kiedy uciekać przed drapieżnikiem). Błędna decyzja niosła za sobą natychmiastową śmierć lub wykluczenie z grupy.',
        'Współczesny człowiek musi podejmować decyzje w zupełnie innym środowisku: abstrakcyjnym, wielowymiarowym i odroczonym w czasie (np. wybór profilu studiów, inwestycja w fundusz emerytalny, zmiana ścieżki kariery). Mimo to nasze struktury limbiczne — w tym ciało migdałowate i przednia kora obręczy — traktują każdy potencjalny błąd decyzyjny tak, jakby groził nam śmiercią głodową.',
        'Dodatkową trudnością jest wewnętrzny konflikt celów. W każdym z nas współistnieją sprzeczne motywacje: potrzeba bezpieczeństwa walczy z pragnieniem ekscytacji i rozwoju, lojalność wobec rodziny ściera się z dążeniem do autonomii, a chęć natychmiastowej gratyfikacji zderza się z celami długoterminowymi.',
        'Wreszcie, decyzja niesie ze sobą ciężar odpowiedzialności egzystencjalnej. Jak pisał Jean-Paul Sartre, człowiek jest „skazany na wolność”. Podjęcie decyzji oznacza, że za jej konsekwencje nie będziesz mógł winić rządu, rodziców ani pecha — odpowiedzialność spocznie wyłącznie na Tobie.'
      ],
      subsections: [
        {
          title: 'Minićwiczenie: Rozpoznanie źródła oporu',
          paragraphs: [
            'Gdy stoisz przed decyzją i czujesz paraliżujący opór, zadaj sobie trzy pytania diagnostyczne:',
            '1. Czy boję się błędu merytorycznego (utraty pieniędzy/czasu)?',
            '2. Czy boję się oceny społecznej (wstydu przed innymi, etykiety porażki)?',
            '3. Czy boję się żalu z powodu rezygnacji z drugiej opcji?'
          ]
        }
      ]
    },
    {
      id: 'sec-28-4',
      pageNumber: 912,
      sectionNumber: '28.4',
      title: 'Koszt decyzji — Koszt alternatywny, zasoby poznawcze i wyczerpywanie energii woli',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Każda decyzja niesie za sobą dwa fundamentalne rodzaje kosztów: koszt psychobiologiczny oraz koszt alternatywny (opportunity cost). Ignorowanie któregokolwiek z nich prowadzi do chronicznego wyczerpania i błędów życiowych.',
        'Koszt psychobiologiczny wiąże się ze zużyciem zasobów glukozy i neuroprzekaźników w grzbietowo-bocznej korze przedczołowej (dlPFC). Zjawisko to, zbadane m.in. przez Roya Baumeistera jako zmęczenie decyzyjne (decision fatigue), sprawia, że po podjęciu kilkudziesięciu wyborów w ciągu dnia nasza zdolność do samokontroli i logicznej oceny drastycznie spada. Pod koniec intensywnego dnia podejmujemy decyzje skrajnie impulsywne lub całkowicie bierne.',
        'Koszt alternatywny to pojęcie zaczerpnięte z ekonomii, mające gigantyczne znaczenie psychologiczne. Oznacza ono wartość najlepszej z opcji, z których musisz zrezygnować, wybierając dany wariant. Jeśli decydujesz się spędzić sobotę na nadgodzinach w biurze, zarabiasz określoną kwotę, ale kosztem alternatywnym jest brak regeneracji, brak kontaktu z dziećmi i zaniedbanie relacji partnerskiej.',
        'Wielu ludzi cierpi na syndrom FOMO (Fear of Missing Out) właśnie dlatego, że nie potrafią zaakceptować nieuchronności kosztu alternatywnego. Chcą mieć ciastko i zjeść ciastko, co prowadzi do powierzchowności i ciągłego rozproszenia uwagi.'
      ],
      subsections: [
        {
          title: 'Jak mądrze zarządzać budżetem decyzyjnym?',
          paragraphs: [
            '1. Automatyzuj decyzje trywialne: ustal stały zestaw ubrań roboczych, powtarzalne menu śniadaniowe i stały harmonogram treningów (tak jak robili to Steve Jobs czy Barack Obama).',
            '2. Podejmuj decyzje strategiczne i trudnoodwracalne w pierwszej fazie dnia, gdy poziom energii kory przedczołowej jest najwyższy.',
            '3. Nigdy nie podejmuj decyzji finansowych ani relacyjnych w stanie głodu, niewyspania lub ostrego stresu.'
          ]
        }
      ]
    },
    {
      id: 'sec-28-5',
      pageNumber: 916,
      sectionNumber: '28.5',
      title: 'Ćwiczenie Praktyczne — Analiza Własnej Trudnej Decyzji: Dekompozycja Dylematu',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Pora przenieść teorię pierwszego bloku na grunt Twojego osobistego doświadczenia. Wybierz jeden trudny dylemat decyzyjny, przed którym aktualnie stoisz (lub decyzję z przeszłości, która wciąż budzi w Tobie wątpliwości i niepokój).',
        'KROK 1: Zdefiniuj dylemat w jednym precyzyjnym zdaniu. Czego dokładnie dotyczy wybór?',
        'KROK 2: Wypisz dwie główne opcje (Opcja A i Opcja B), unikając oceniania ich na tym etapie.',
        'KROK 3: Zidentyfikuj ukryty konflikt wartości: Jaka fundamentalna wartość stoi za Opcją A (np. stabilność, przewidywalność, akceptacja otoczenia), a jaka za Opcją B (np. wolność, rozwój, autentyczność)?',
        'KROK 4: Oblicz realny koszt alternatywny: Z czego dokładnie i bezpowrotnie rezygnujesz, jeśli wybierzesz Opcję A? Z czego rezygnujesz, jeśli wybierzesz Opcję B?',
        'KROK 5: Test Somatyczny: Wyobraź sobie, że rzuciłeś monetą i orzeł wskazał Opcję A. Zwróć uwagę na pierwszą, bezrefleksyjną reakcję swojego ciała — poczułeś ulgę czy nagły skurcz zawodu? Ciało jest Twoim najszybszym rejestratorem ukrytych preferencji aksjologicznych.'
      ]
    },

    // BLOK II — INFORMACJE, RYZYKO I NIEPEWNOŚĆ (28.6 - 28.10)
    {
      id: 'sec-28-6',
      pageNumber: 920,
      sectionNumber: '28.6',
      title: 'Ile informacji naprawdę potrzebujemy? Sygnał vs szum i reguła 70% informacji',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Powszechnym mitem kulturowym jest przekonanie, że dobra decyzja wymaga zebrania „wszystkich możliwych informacji”. W epoce cyfrowej zbiór wszystkich dostępnych danych jest praktycznie nieskończony, co oznacza, że dążenie do absolutnej kompletności wiedzy jest prostą drogą do paraliżu i wyczerpania.',
        'W teorii informacji (Nate Silver, Claude Shannon) kluczowe jest rozróżnienie między SYGNAŁEM a SZUMEM. Sygnał to wąska grupa faktów o wysokiej sile dyskryminacyjnej, które rzeczywiście wpływają na prawdopodobieństwo sukcesu. Szum to tysiące nieistotnych zmiennych, plotek, marginalnych opinii i szczegółów technicznych, które jedynie zanieczyszczają pole uwagi.',
        'W psychologii zarządzania i doktrynach wojskowych powszechnie stosuje się tzw. Regułę 70% (często przypisywaną gen. Colinowi Powellowi i Jeffowi Bezosowi). Zasada ta głosi: jeśli posiadasz mniej niż 40% informacji, działasz po omacku i podejmujesz ślepe ryzyko. Jednak jeśli czekasz, aż zgromadzisz ponad 70–80% danych, jest już za późno — koszt zwłoki przewyższy korzyść z dodatkowej precyzji, a sytuacja w dynamicznym otoczeniu ulegnie zmianie.',
        'Świadomy decydent zadaje sobie pytanie: „Jakie 3 krytyczne fakty są mi niezbędne, by ruszyć z miejsca?” i po ich ustaleniu podejmuje działanie.'
      ]
    },
    {
      id: 'sec-28-7',
      pageNumber: 924,
      sectionNumber: '28.7',
      title: 'Decyzje przy niepełnych danych — Heurystyka satysfakcjonowania Simona i myślenie probabilistyczne',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Laureat Nagrody Nobla Herbert Simon sformułował rewolucyjną koncepcję ograniczonej racjonalności (bounded rationality). Klasyczna ekonomia zakładała istnienie Homo oeconomicus — istoty o nieskończonej mocy obliczeniowej, która bezbłędnie optymalizuje każdy wybór. Simon udowodnił, że ludzki mózg nigdy nie dysponuje pełną wiedzą ani nieograniczonym czasem.',
        'W rzeczywistości ludzie dzielą się na dwa typy decydentów: MAKSYMALIZATORÓW (Maximizers) oraz SATYSFAKCJONATORÓW (Satisficers). Maksymalizator próbuje przeanalizować każdą dostępną ofertę na rynku, szukając wariantu absolutnie perfekcyjnego. Satysfakcjonator z góry definiuje kryteria brzegowe („chcę mieszkania do 600 tys. zł, minimum 50 m², z balkonem i do 10 min od metra”) i wybiera pierwszą opcję, która spełnia te standardy.',
        'Badania psychologiczne jednoznacznie wykazują, że maksymalizatorzy — mimo że czasami uzyskują obiektywnie odrobinę lepsze wyniki finansowe — są znacznie mniej szczęśliwi, odczuwają wyższy poziom lęku, chroniczny żal podestowy i częściej wpadają w depresję niż satysfakcjonatorzy.',
        'Myślenie probabilistyczne polega na traktowaniu decyzji w kategoriach szans i rozkładów prawdopodobieństwa (np. „ta opcja daje 75% szans na sukces i 25% ryzyka straty”), a nie w kategoriach magicznych gwarancji.'
      ]
    },
    {
      id: 'sec-28-8',
      pageNumber: 928,
      sectionNumber: '28.8',
      title: 'Ryzyko a niepewność — Różnica Knighta, przewidywalność i asymetria konsekwencji',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'W 1921 roku ekonomista Frank Knight wprowadził rozróżnienie, które do dziś stanowi fundament teorii podejmowania decyzji: podział na RYZYKO i GŁĘBOKĄ NIEPEWNOŚĆ.',
        'RYZYKO dotyczy sytuacji, w których znany jest pełen katalog możliwych wyników oraz matematyczny rozkład ich prawdopodobieństwa. Przykładem jest rzut symetryczną monetą (50% orzeł, 50% reszka), ruletka czy tabele aktuarialne firm ubezpieczeniowych szacujące ryzyko zgonu w danej grupie wiekowej. W warunkach ryzyka można stosować ścisłe modele statystyczne.',
        'NIEPEWNOŚĆ (Knightian uncertainty) występuje wtedy, gdy sytuacja jest unikalna, otwarta i dynamiczna — nie znamy nie tylko prawdopodobieństw, ale nawet pełnej listy możliwych scenariuszy przyszłości. Przykładem jest wybór kierunku rozwoju nowej technologii (np. AI), wybuch wojny czy decyzja o wejściu w związek małżeński na 40 lat.',
        'Tragicznym błędem współczesnego człowieka jest próba traktowania niepewności za pomocą modeli ryzyka. Prowadzi to do fałszywej pewności siebie i katastrofalnych pomyłek (Czarne Łabędzie Nassima Taleba). W warunkach niepewności kluczem nie jest kalkulacja matematyczna, lecz budowanie odporności na błąd (antykruchości), dywersyfikacja i unikanie ryzyka ruiny.'
      ]
    },
    {
      id: 'sec-28-9',
      pageNumber: 932,
      sectionNumber: '28.9',
      title: 'Efekt nadmiaru informacji — Information Overload, paradoks wyboru i wyczerpanie pamięci roboczej',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Powszechna intuicja głosi: „im więcej opcji i danych mam do dyspozycji, tym większą wolność i satysfakcję osiągnę”. Odkrycia Barry’ego Schwartza opisane w książce Paradoks wyboru (The Paradox of Choice) dowodzą, że powyżej pewnego progu liczba możliwości staje się psychologiczną trucizną.',
        'W słynnym eksperymencie Sheeny Iyengar i Marka Leppera na stoisku degustacyjnym wystawiono 24 smaki ekskluzywnych dżemów lub 6 smaków. Stoisko z 24 dżemami przyciągnęło więcej gapiów (60% vs 40%), jednak zakupu dokonało zaledwie 3% osób oglądających duży zestaw, podczas gdy przy zestawie 6 dżemów zakupu dokonało aż 30% klientów (dziesięciokrotnie wyższa konwersja!).',
        'Z punktu widzenia neuronauki nadmiar informacji powoduje gwałtowne przeciążenie pamięci roboczej (working memory) zlokalizowanej w grzbietowo-bocznej korze przedczołowej, która może jednocześnie operować zaledwie na 4–7 jednostkach informacyjnych (chunks). Gdy mózg zostaje zalany dziesiątkami parametrów, kora wyłącza analityczne myślenie i zaczyna opierać się na losowych, prymitywnych heurystykach.',
        'Świadomy decydent celowo ogranicza liczbę analizowanych opcji do maksymalnie 3 najsilniejszych kandydatów.'
      ]
    },
    {
      id: 'sec-28-10',
      pageNumber: 936,
      sectionNumber: '28.10',
      title: 'Analiza Sytuacji — Kiedy dalsze analizowanie przestaje pomagać? Historia Marka i audyt pętli paraliżu',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      paragraphs: [
        'HISTORIA MARKA: Marek, 31-letni programista, przez 9 miesięcy planował zakup pierwszego samochodu. Przeczytał 140 testów motoryzacyjnych, obejrzał 200 godzin recenzji na YouTube i stworzył arkusz kalkulacyjny z 50 modelami, porównując spalanie z dokładnością do 0,1 litra, grubość lakieru i dostępność części zamiennych. Za każdym razem, gdy miał jechać do salonu, pojawiała się nowa informacja o planowanym faceliftingu innego modelu, co cofało go do punktu wyjścia. W tym czasie wydał 4800 zł na taksówki i wynajem aut, a chroniczne poczucie niezdecydowania zatruwało mu każdy weekend.',
        'ANALIZA PSYCHOLOGICZNA: Co działo się w umyśle Marka? Działała u niego iluzja całkowitej kontroli oraz ucieczka w analizę (mechanizm intelektualizacji) przed lękiem przed podjęciem niedoskonałej decyzji. Ciągłe gromadzenie danych dawało mu dopaminową nagrodę pozornego działania bez ponoszenia ryzyka zaangażowania i bez konfrontacji z rzeczywistością.',
        'PUNKTY ZWROTNE: Marek nie zauważył, że koszt zbierania informacji (czas, energia, pieniądze wydane na taksówki, frustracja) dawno przewyższył potencjalną stratę z zakupu nieco gorszego auta.',
        'PROTOKÓŁ PRZEŁAMANIA PĘTLI: 1. Wprowadzenie twardego limitu czasowego (Stop-Loss czasu); 2. Redukcja listy do 2 modeli; 3. Zasada rzutu monetą w przypadku remisu parametrów.'
      ],
      subsections: [
        {
          title: 'Pytania refleksyjne dla czytelnika',
          paragraphs: [
            '1. W jakiej sprawie w Twoim obecnym życiu zbierasz informacje dłużej niż 3 miesiące bez podjęcia realnego kroku?',
            '2. Jakie koszty ukryte ponosisz każdego dnia, odwlekając ten wybór?',
            '3. Co najgorszego stanie się, jeśli podejmiesz decyzję wystarczająco dobrą na poziomie 80% doskonałości?'
          ]
        }
      ]
    },

    // BLOK III — EMOCJE I DECYZJE (28.11 - 28.15)
    {
      id: 'sec-28-11',
      pageNumber: 940,
      sectionNumber: '28.11',
      title: 'Emocje podczas podejmowania decyzji — Markery somatyczne Antonio Damasio i rola vmPFC',
      category: 'neuronauka',
      readingTimeMinutes: 19,
      paragraphs: [
        'Przez ponad dwa tysiące lat w zachodniej tradycji filozoficznej dominował pogląd Platona i Kartezjusza, że idealna decyzja to decyzja czysto racjonalna, całkowicie oczyszczona z emocji, które postrzegano jako zakłócający „szum”. Przełom neurobiologiczny dokonany przez Antonio Damasio w latach 90. XX wieku bezpowrotnie zburzył ten mit.',
        'W klasycznych badaniach nad pacjentami z uszkodzeniem brzuszno-przyśrodkowej kory przedczołowej (vmPFC) — z których najsłynniejszym był współczesny odpowiednik Phineasa Gage’a, pacjent Elliot — Damasio zaobserwował zjawisko wstrząsające: osoby te zachowały nienaruszone IQ, doskonałą pamięć i bezbłędną logikę formalną, jednak utraciły zdolność odczuwania emocji. Rezultat? Stali się całkowicie niezdolni do podejmowania jakichkolwiek decyzji życiowych. Potrafili przez 4 godziny analizować wady i zalety dwóch terminów wizyty u fryzjera, nie potrafiąc dokonać ostatecznego wyboru.',
        'Zgodnie z Hipotezą Markerów Somatycznych Damasio, emocje to cielesne sygnały afektywne (skurcz żołądka, zmiana rytmu serca, napięcie mięśniowe, poczucie lekkości), wykształcone na bazie wcześniejszych doświadczeń życiowych. Markery somatyczne działają jak błyskawiczny radar — w ułamku sekundy eliminują opcje niebezpieczne i nadają wagę emocjonalną wariantom korzystnym, odciążając wolną korę przedczołową.',
        'Zdrowe decydowanie to nie eliminacja emocji, lecz zharmonizowany dialog między logiczną kalkulacją kory grzbietowej a cielesną mądrością markerów somatycznych.'
      ]
    },
    {
      id: 'sec-28-12',
      pageNumber: 944,
      sectionNumber: '28.12',
      title: 'Strach przed konsekwencjami — Katastrofizacja, antycypowany żal i unikanie decyzyjne',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Jednym z najpotężniejszych emocjonalnych hamulców procesu decyzyjnego jest antycypowany żal (anticipated regret) — psychologiczna projekcja przyszłego cierpienia, wstydu i samooskarżeń w sytuacji, gdyby wybrana opcja zakończyła się niepowodzeniem.',
        'Gdy w umyśle uruchamia się zniekształcenie poznawcze w postaci katastrofizacji („jeśli zmienię pracę i sobie nie poradzę, zniszczę życie mojej rodziny, stracę dom i już nigdy nikt mnie nie zatrudni”), mózg przełącza się w tryb unikania decyzyjnego (decision avoidance).',
        'Unikanie decyzyjne przybiera trzy typowe maski: 1. Delegowanie wyboru („zdecyduj za mnie, kochanie” — zrzucenie odpowiedzialności); 2. Wybieranie opcji domyślnej / status quo (bierne trwanie w znoszonym schemacie); 3. Prokrastynacja strategiczna (odwlekanie decyzji tak długo, aż czynniki zewnętrzne lub inni ludzie podejmą decyzję za nas).',
        'Pamiętaj: brak decyzji jest również decyzją — decyzją o oddaniu kontroli nad własnym losem w ręce przypadku i innych ludzi.'
      ]
    },
    {
      id: 'sec-28-13',
      pageNumber: 948,
      sectionNumber: '28.13',
      title: 'Decyzje podejmowane pod wpływem złości — Porwanie emocjonalne, zawężenie perspektywy i impulsywność',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Gniew i wściekłość to stany afektywne o potężnym ładunku mobilizacyjnym, ewolucyjnie zaprojektowane do ataku, niszczenia przeszkód i obrony terytorium. Pod wpływem ostrej złości dochodzi do tzw. porwania przez ciało migdałowate (amygdala hijack).',
        'W stanie wzbudzenia adrenergicznego dochodzi do dramatycznego zniekształcenia percepcji ryzyka: człowiek odczuwa iluzoryczną wszechmoc i skrajnie lekceważy niebezpieczeństwo. Złość zmusza do natychmiastowych, radykalnych kroków: trzaśnięcia drzwiami i natychmiastowego rzucenia pracy, wysłania wściekłego, wulgarnego maila do klienta czy zerwania wieloletniej relacji pod wpływem jednej sprzeczki.',
        'Po opadnięciu fali neurochemicznej (spadku adrenaliny i noradrenaliny) kora przedczołowa odzyskuje sprawność i człowiek staje w obliczu zdewastowanej rzeczywistości oraz przytłaczającego poczucia winy.',
        'ŻELAZNA ZASADA OPERACYJNA: Wprowadź twardą regułę 24-godzinnej kwarantanny emocjonalnej. W stanie ostrego wzburzenia masz zakaz wysyłania wiadomości, podpisywania dokumentów i podejmowania ostatecznych deklaracji.'
      ]
    },
    {
      id: 'sec-28-14',
      pageNumber: 952,
      sectionNumber: '28.14',
      title: 'Presja czasu — Wpływ ostrego stresu, tunel poznawczy i kompromis między szybkością a precyzją',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Presja czasu drastycznie zmienia architekturę przetwarzania informacji w mózgu. W obliczu uciekających sekund układ nerwowy przełącza się z wolnego, refleksyjnego Systemu 2 na szybki, odruchowy System 1 (Kahneman).',
        'Zjawisko tunelu poznawczego (cognitive tunneling) sprawia, że pole uwagi zawęża się wyłącznie do bodźców najbardziej krzykliwych, jaskrawych i bezpośrednich, ignorując tło, kontekst, długofalowe konsekwencje oraz opcje alternatywne.',
        'W warunkach silnej presji czasu i stresu człowiek nie wznosi się na poziom swoich oczekiwań — spada na poziom swoich najbardziej utrwalonych nawyków i procedur operacyjnych. Dlatego piloci, chirurdzy i służby ratunkowe w sytuacjach kryzysowych nie polegają na improwizacji, lecz na bezwzględnym stosowaniu wcześniej przygotowanych list kontrolnych (checklists).',
        'Kiedy ktoś wywiera na Ciebie sztuczną presję czasu („decyduj natychmiast, bo okazja przepadnie!”), niemal zawsze masz do czynienia z próbą manipulacji mającą na celu wyłączenie Twojej kory przedczołowej.'
      ]
    },
    {
      id: 'sec-28-15',
      pageNumber: 956,
      sectionNumber: '28.15',
      title: 'Ćwiczenie Praktyczne — Rozum czy Emocje? Protokół Rozdzielenia 4 Warstw Poznawczych',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Aby podjąć klarowną decyzję w sytuacji silnego napięcia afektywnego, zastosuj tabelę dekompozycji czteropolowej, która rozbija chaos myśli na cztery precyzyjne składowe:',
        'KOLUMNA 1: FAKTY (Opisz sytuację językiem kamery wideo — bez przymiotników, ocen i domysłów. Np. „Pracodawca przedstawił aneks do umowy zmniejszający podstawę o 10% i wprowadzający 25% premii od wyników”).',
        'KOLUMNA 2: EMOCJE I MARKERY SOMATYCZNE (Co fizycznie rejestruje Twoje ciało? Np. ścisk w żołądku, przyspieszone tętno, lęk, złość, ekscytacja).',
        'KOLUMNA 3: INTERPRETACJE I NARRACJE (Jakie automatyczne myśli tworzy Twój umysł? Np. „Chcą mnie wykorzystać”, „Nie szanują mojego wkładu”, „To dowód, że jestem dla nich nikim”).',
        'KOLUMNA 4: PRZEWIDYWANIA I TESTOWALNE HIPOTEZY (Jakie są realne, weryfikowalne scenariusze przyszłości zamiast czarno-białych wizji katastrofy?).',
        'Dopiero po rozdzieleniu nagich faktów od subiektywnych interpretacji i reakcji ciała zyskujesz przestrzeń na dojrzały, suwerenny wybór.'
      ]
    },

    // BLOK IV — BŁĘDY W PODEJMOWANIU DECYZJI (28.16 - 28.20)
    {
      id: 'sec-28-16',
      pageNumber: 960,
      sectionNumber: '28.16',
      title: 'Decyzja impulsywna — Krótkoterminowa dopamina, dyskontowanie odroczone i zasada tarcia czasowego',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Decyzja impulsywna to akt, w którym kontrolę nad motoryką i zachowaniem przejmuje układ nagrody (brzuszne pole nakrywki VTA i jądro półleżące), obiecujący natychmiastowy wyrzut dopaminy w odpowiedzi na bliski bodziec zmysłowy.',
        'Neuroekonomia opisuje ten mechanizm jako dyskontowanie odroczone (hyperbolic discounting). Ludzki mózg wycenia nagrodę dostępną natychmiast nieproporcjonalnie wyżej niż nagrodę odległą w czasie. Zjedzenie batonika teraz daje pewną dopaminę w 5 sekund; zgrabna sylwetka i zdrowie za 5 lat to abstrakcyjna obietnica, z którą obwody limbiczne nie potrafią się utożsamić.',
        'Najskuteczniejszą obroną przed decyzjami impulsywnymi nie jest walka siłą woli w momencie pokusy (siła woli ulega szybkiemu wyczerpaniu), lecz wprowadzenie tzw. fizycznego tarcia (behavioral friction).',
        'Przykłady tarcia: zasada 72 godzin przed zakupem dowolnej rzeczy niebędącej artykułem pierwszej potrzeby, usunięcie danych karty kredytowej z przeglądarki, schowanie telefonu do innego pokoju podczas pracy.'
      ]
    },
    {
      id: 'sec-28-17',
      pageNumber: 964,
      sectionNumber: '28.17',
      title: 'Wpływ pierwszej informacji — Kotwiczenie (Anchoring Bias), manipulacja punktem odniesienia i obrona',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Efekt kotwiczenia (anchoring bias), odkryty przez Daniela Kahnemana i Amosa Tversky’ego, to błąd poznawczy polegający na tym, że pierwsza informacja liczbowa lub jakościowa, z jaką zetknie się nasz umysł, staje się niewidzialnym punktem odniesienia dla wszystkich kolejnych szacunków.',
        'W negocjacjach handlowych strona, która jako pierwsza rzuca kwotę (nawet absurdalnie zawyżoną), kotwiczy percepcję drugiej strony. W relacjach międzyludzkich pierwsza etykieta przypisana nowemu pracownikowi lub projektowi („to będzie trudny klient”) potrafi zniekształcić interpretację faktów na całe miesiące.',
        'Kotwiczenie działa podprogowo — nawet eksperci z wieloletnim stażem (np. sędziowie orzekający wyroki czy rzeczoznawcy majątkowi) ulegają wpływowi losowych liczb, jeśli zostały one wcześniej wyeksponowane.',
        'OBRONA PRZED KOTWICZENIEM: Zawsze ustalaj własne, niezależne widełki wyceny i kryteria PRZED rozpoczęciem rozmów. Jeśli usłyszysz agresywną kotwicę, natychmiast ją zneutralizuj: „Ta kwota jest całkowicie poza zakresem naszych realiów, odłóżmy ją na bok i zacznijmy od parametrów bazowych”.'
      ]
    },
    {
      id: 'sec-28-18',
      pageNumber: 968,
      sectionNumber: '28.18',
      title: 'Koszt utopiony — Pułapka Sunk Cost Fallacy, syndrom Concorde i racjonalizacja minionych strat',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Pułapka kosztów utopionych (sunk cost fallacy) to tendencja do kontynuowania nierentownego projektu, tkwienia w toksycznym związku czy utrzymywania chybionej inwestycji tylko dlatego, że włożono już w to dużo czasu, pieniędzy lub emocji.',
        'Klasycznym przykładem historycznym był naddźwiękowy samolot pasażerski Concorde. Rządy Wielkiej Brytanii i Francji już w połowie lat 70. wiedziały, że samolot jest komercyjną katastrofą, jednak pompowały weń kolejne miliardy funtów i franków, argumentując: „zainwestowaliśmy już zbyt wiele, by się teraz wycofać” (stąd druga nazwa: Syndrom Concorde).',
        'Z punktu widzenia czystej logiki i ekonomii koszty przeszłe są nieodwracalne i powinny wynosić dokładnie ZERO w bieżącym równaniu decyzyjnym. Pieniądze, które wydałeś wczoraj, przepadły bez względu na to, co zrobisz dzisiaj.',
        'Jedyne racjonalne pytanie decyzyjne brzmi: „Czy w świetle dzisiejszej wiedzy, zaczynając od zera, zainwestowałbym w ten projekt choćby jedną złotówkę i jedną godzinę?”. Jeśli odpowiedź brzmi „nie” — wycofaj się natychmiast bez oglądania się za siebie.'
      ]
    },
    {
      id: 'sec-28-19',
      pageNumber: 972,
      sectionNumber: '28.19',
      title: 'Nadmierna pewność siebie — Efekt Overconfidence, błąd planowania (Planning Fallacy) i pokora poznawcza',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Efekt nadmiernej pewności siebie (overconfidence bias) sprawia, że ludzie systematycznie przeceniają swoją wiedzę, trafność własnych prognoz oraz stopień kontroli nad przypadkowym biegiem wydarzeń.',
        'Najczęstszym przejawem tego błędu jest błąd planowania (planning fallacy, Kahneman & Tversky) — niemal każdy remont mieszkania, wdrożenie systemu IT czy pisanie pracy magisterskiej zajmuje 2–3 razy więcej czasu i kosztuje 50–100% więcej, niż pierwotnie z optymizmem zakładano. Mózg skupia się na scenariuszu idealnym, ignorując nieuchronne tarcia, awarie i opóźnienia podwykonawców.',
        'Antidotum na nadmierną pewność siebie jest stosowanie perspektywy zewnętrznej (outside view): zamiast pytać siebie „w ile czasu ja to zrobię?”, sprawdź twarde dane statystyczne: „ile średnio czasu zajmuje to przedsięwzięcie 100 innym osobom w podobnej sytuacji?”.',
        'Pokora poznawcza polega na założeniu, że rzeczywistość zawsze okaże się bardziej skomplikowana niż nasz najbardziej elegancki plan.'
      ]
    },
    {
      id: 'sec-28-20',
      pageNumber: 976,
      sectionNumber: '28.20',
      title: 'Paraliż decyzyjny — Ambiwalencja, perfekcjonizm i algorytm przełamywania impasu decyzyjnego',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Paraliż decyzyjny (analysis paralysis) to stan chronicznego zawieszenia, w którym koszt niepodjęcia żadnej decyzji dawno przewyższył potencjalny koszt pomyłki w wybranym wariancie.',
        'Głównym korzeniem paraliżu jest ukryty, neurotyczny perfekcjonizm — nierealistyczne pragnienie znalezienia decyzji „bezkosztowej”, która zapewni same zyski bez jakichkolwiek strat, wątpliwości czy dyskomfortu.',
        'ALGORYTM PRZEŁAMYWANIA IMPASU:',
        '1. Metoda Eliminacji Negatywnej: zamiast szukać opcji najlepszej, odrzuć najpierw opcje najgorsze, zawężając wybór do dwóch możliwości.',
        '2. Kryterium „Wystarczająco Dobre” (Good Enough): wybierz opcję, która spełnia 80% Twoich kluczowych wymagań.',
        '3. Narzucenie Sztywnego Terminu: wyznacz twardą godzinę (np. „piątek, godzina 15:00”), po której następuje obligatoryjny wybór — w razie remisu decyduje rzut monetą.',
        '4. Zdefiniowanie Mikrokroku Testowego: zamiast skakać na głęboką wodę, wykonaj mały, bezpieczny eksperyment sondujący.'
      ]
    },

    // BLOK V — SYSTEM ŚWIADOMEGO PODEJMOWANIA DECYZJI (28.21 - 28.25)
    {
      id: 'sec-28-21',
      pageNumber: 980,
      sectionNumber: '28.21',
      title: 'Jak prawidłowo zdefiniować problem? Efekt ramowania (Framing Effect) i sztuka pytań pierwotnych',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Sposób, w jaki sformułujesz pytanie wyjściowe, w 90% determinuje zbiór dostępnych odpowiedzi. Zjawisko to w psychologii nosi nazwę efektu ramowania (framing effect).',
        'Jeśli zadasz pytanie wąskie i uwięzione w fałszywej dychotomii: „Czy powinienem rzucić pracę?”, Twój mózg zamyka się w pułapce zero-jedynkowej: albo rezygnacja i skok w nieznane, albo trwanie w frustracji.',
        'Jeśli przekształcisz problem w pytanie otwarte oparte na potrzebach: „W jaki sposób mogę zwiększyć satysfakcję zawodową i dochody, zachowując stabilność finansową rodziny?”, otwierasz przestrzeń dla kilkunastu nowych wariantów (renegocjacja warunków, przejście na 4/5 etatu, zmiana działu, kurs wieczorowy, zlecenia freelanserskie w weekendy).',
        'Zawsze poświęć pierwsze 30% czasu decyzyjnego na precyzyjne, szerokie przeformułowanie problemu bazowego.'
      ]
    },
    {
      id: 'sec-28-22',
      pageNumber: 984,
      sectionNumber: '28.22',
      title: 'Jak stworzyć możliwe opcje? Myślenie lateralne, poszukiwanie trzeciej drogi i usuwanie fałszywych dychotomii',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Większość ludzi popełnia błąd przedwczesnego domknięcia (premature closure) — dostrzegają tylko dwie najbardziej oczywiste, skrajne opcje (A lub B) i natychmiast przechodzą do sporu o to, która jest lepsza.',
        'Tymczasem w złożonych problemach życiowych najlepsze rozwiązania leżą niemal zawsze w strefie Opcji C — opcji hybrydowej, kompromisowej lub całkowicie nowatorskiej.',
        'TECHNIKI GENEROWANIA TRZECIEJ DROGI:',
        '1. Test Znikających Opcji: „Gdyby Opcja A i Opcja B były fizycznie niemożliwe i prawnie zakazane, co innego mógłbyś zrobić?”. Ta technika natychmiast zmusza korę przedczołową do wyjścia poza utarte schematy.',
        '2. Opcja Hybrydowa: „W jaki sposób mogę połączyć 30% zalet Opcji A z 70% bezpieczeństwa Opcji B?”.',
        'Nigdy nie podejmuj decyzji strategicznej, dopóki nie masz przed sobą minimum 3 realnych, jakościowych wariantów.'
      ]
    },
    {
      id: 'sec-28-23',
      pageNumber: 988,
      sectionNumber: '28.23',
      title: 'Jak porównywać konsekwencje? Myślenie drugiego i trzeciego rzędu (Second-Order Thinking)',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Myślenie pierwszego rzędu pyta: „Jaki będzie natychmiastowy, bezpośredni skutek mojego wyboru?”. Jest proste, szybkie i powierzchowne (np. „Jeśli wezmę pożyczkę na wakacje, pojadę do ciepłych krajów i poczuję radość”).',
        'Myślenie drugiego i trzeciego rzędu (Howard Marks, Shane Parrish) pyta: „A co stanie się potem? Jakie będą konsekwencje tych konsekwencji za 6 miesięcy, 2 lata i 5 lat?”. (Np. „W drugim rzędzie będę spłacać raty przez 2 lata, co ograniczy mój budżet na kursy; w trzecim rzędzie brak kursów opóźni mój awans i zwiększy chroniczny stres”).',
        'Większość wielkich błędów życiowych i biznesowych wynika z wyboru opcji, które w pierwszym rzędzie dają natychmiastową przyjemność i ulgę (prokrastynacja, alkohol, unikanie trudnej rozmowy), lecz w drugim i trzecim rzędzie przynoszą katastrofalne koszty skumulowane.',
        'Mądrość decyzyjna polega na wybieraniu działań, które w pierwszym rzędzie niosą wysiłek i dyskomfort (trening, nauka, asertywna konfrontacja), lecz w kolejnych rzędach przynoszą wykładnicze zyski i spokój.'
      ]
    },
    {
      id: 'sec-28-24',
      pageNumber: 992,
      sectionNumber: '28.24',
      title: 'Decyzje odwracalne i nieodwracalne — Model Drzwi Typu 1 i Drzwi Typu 2 Jeffa Bezosa',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Jednym z najbardziej eleganckich i praktycznych modeli podejmowania decyzji jest podział wprowadzony przez Jeffa Bezosa w listach do akcjonariuszy Amazon:',
        'DECYZJE TYPU 1 (Drzwi Jednokierunkowe): Decyzje nieodwracalne lub skrajnie trudne do cofnięcia (np. sprzedaż firmy, podpisanie 30-letniego kredytu na granicy płynności, narodziny dziecka, poważna operacja chirurgiczna). Przejście przez te drzwi zatrzaskuje je za Tobą. Te decyzje wymagają głębokiej deliberacji, konsultacji z ekspertami, zbierania danych i wielotygodniowej ostrożności.',
        'DECYZJE TYPU 2 (Drzwi Dwukierunkowe): Decyzje odwracalne (np. wypróbowanie nowego oprogramowania, zmiana układu strony www, zatrudnienie stażysty na 3-miesięczny okres próbny, wyjazd na weekend w nowe miejsce). Jeśli decyzja okaże się błędem, wystarczy po prostu otworzyć drzwi i wrócić do punktu wyjścia przy minimalnym koszcie.',
        'NAJWIĘKSZY BŁĄD ORGANIZACJI I LUDZI: Traktowanie decyzji Typu 2 tak, jakby były Typem 1! Prowadzi to do powolności, paraliżu i marnowania zasobów na debaty o drobiazgach. Decyzje Typu 2 należy podejmować szybko (przy 70% danych) i korygować w marszu.'
      ]
    },
    {
      id: 'sec-28-25',
      pageNumber: 996,
      sectionNumber: '28.25',
      title: 'Jak ustalać kryteria decyzji? Bramki nienegocjowalne (Must-Have) i wagi punktowe',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Aby uniknąć subiektywnego dryfowania pod wpływem chwilowych emocji, profesjonalny proces decyzyjny wymaga ustalenia kryteriów PRZED przystąpieniem do oceny konkretnych wariantów.',
        'KRYTERIA NALEŻY PODZIELIĆ NA DWA POZIOMY:',
        '1. BRAMKI NIENEGOCJOWALNE (Deal-Breakers / Must-Have): warunki progowe, których brak natychmiast i bezdyskusyjnie dyskwalifikuje daną opcję (np. maksymalny budżet 500 tys. zł, brak toksycznych klauzul w umowie, praca wyłącznie w promieniu 30 km od domu). Jeśli opcja nie spełnia choćby jednej bramki, odpada z konkursu.',
        '2. KRYTERIA PUNKTOWE (Ważone): parametry, które podlegają ocenie w skali 1–10 (np. prestiż, atmosfera w zespole, perspektywy rozwoju, elastyczność czasu pracy) z przypisanymi wagami procentowymi (suma wag = 100%).',
        'Dzięki takiemu rozdzieleniu oddzielasz chłodne wymogi elementarnego bezpieczeństwa od elastycznych preferencji optymalizacyjnych.'
      ]
    },

    // BLOK VI — WIELKIE STUDIA PRZYPADKU I PRAKTYCZNA INTEGRACJA (28.26 - 28.30)
    {
      id: 'sec-28-26',
      pageNumber: 1000,
      sectionNumber: '28.26',
      title: 'Wielkie Studium Przypadku — Dylemat Dwóch Dróg: Zmiana Kariery Krzysztofa',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      caseStudyRef: chapterTwentyEightCaseStudyTrudnaDecyzja,
      paragraphs: [
        'W tym studium przypadku poddajemy drobiazgowej wiwisekcji 3-miesięczny paraliż decyzyjny Krzysztofa (34 lata), starszego specjalisty ds. logistyki, uwięzionego między wypalającą stabilnością a ryzykowną ofertą w startupie AI.',
        'Zwróć szczególną uwagę na to, w jaki sposób Krzysztof uciekał w mechanizm intelektualizacji (tworzenie 47 kolumn w arkuszu kalkulacyjnym) przed konfrontacją z egzystencjalnym lękiem przed utratą bezpieczeństwa.',
        'Przeanalizuj interaktywną kartę studium przypadku powyżej: dekompozycję błędów poznawczych (awersja do straty, bias status quo), analizę neurobiologiczną przeciążenia kory dlPFC oraz protokół wyjścia z impasu poprzez zdefiniowanie bufora bezpieczeństwa i odwracalności wyboru.'
      ]
    },
    {
      id: 'sec-28-27',
      pageNumber: 1006,
      sectionNumber: '28.27',
      title: 'Studium Przypadku — Decyzja pod Presją Czasu: Awaria Systemu Magdy',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      caseStudyRef: chapterTwentyEightCaseStudyPresjaCzasu,
      paragraphs: [
        'Drugie studium przypadku ilustruje dramat operacyjny Magdy — liderki inżynierii danych, która w ciągu 3 minut musiała podjąć krytyczną decyzję technologiczną podczas Black Friday, pod ostrzałem krzyczącego dyrektora handlowego.',
        'Przeanalizuj zjawisko Action Bias (odruchu bezrefleksyjnego działania) oraz zobacz, jak 30-sekundowa pauza taktyczna i asertywne przejęcie kontroli ocaliły bazy transakcyjne przed wielomilionową katastrofą.',
        'Wnioski z tego przypadku mają bezpośrednie zastosowanie w każdej sytuacji ostrego kryzysu: od awarii w pracy po nagłe wypadki w życiu prywatnym.'
      ]
    },
    {
      id: 'sec-28-28',
      pageNumber: 1012,
      sectionNumber: '28.28',
      title: 'Studium Przypadku — Konflikt Emocji i Racjonalnej Analizy: Wybór Mieszkania Tomasza i Ewy',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      caseStudyRef: chapterTwentyEightCaseStudyEmocjeAnaliza,
      paragraphs: [
        'Trzecie studium przypadku odsłania dynamikę konfliktu decyzyjnego w parze: wojnę między chłodnym arkuszem kalkulacyjnym Tomasza a intuicyjną wrażliwością estetyczną Ewy przy zakupie mieszkania na 25-letni kredyt.',
        'Zobacz, jak próba narzucenia własnej „waluty wartościowania” doprowadziła partnerów na skraj rozstania i jak zastosowanie metody poszukiwania Trzeciej Drogi (Opcji C) pozwoliło zintegrować logikę finansową z potrzebami emocjonalnymi.',
        'Zapoznaj się z matrycą integrowania wartości nienegocjowalnych opisaną w interaktywnej karcie powyżej.'
      ]
    },
    {
      id: 'sec-28-29',
      pageNumber: 1018,
      sectionNumber: '28.29',
      title: 'Wielkie Ćwiczenie Praktyczne — Zbuduj Własny System Podejmowania Decyzji i Protokół Pre-Mortem',
      category: 'cwiczenia',
      readingTimeMinutes: 25,
      exerciseRef: chapterTwentyEightExerciseDecisionMatrix,
      paragraphs: [
        'Nadszedł czas na skompletowanie Twojego osobistego, odpornego na kryzys systemu decyzyjnego. Skorzystaj z interaktywnego warsztatu ćwiczenia 28.1 powyżej.',
        'Przejdź przez 4 kluczowe fazy: 1. Przeformułowanie pytania w postać otwartą; 2. Wygenerowanie minimum 3 wariantów (w tym opcji hybrydowej); 3. Ustalenie 4 wag kryteriów (suma = 100%); 4. Przeprowadzenie bezcennej analizy Pre-Mortem (Gary Klein).',
        'Analiza Pre-Mortem to najskuteczniejsza znana metoda prewencji porażek decyzyjnych: wyobrażenie sobie, że projekt za rok poniósł całkowitą klapę, zidentyfikowanie przyczyn i wdrożenie bezpieczników już dzisiaj.'
      ]
    },
    {
      id: 'sec-28-30',
      pageNumber: 1024,
      sectionNumber: '28.30',
      title: 'Podsumowanie Rozdziału 28 — Słownik Pojęć, Kluczowe Idee i Most do Rozdziału 29',
      category: 'podsumowanie',
      readingTimeMinutes: 18,
      paragraphs: [
        'SŁOWNIK KLUCZOWYCH POJĘĆ ROZDZIAŁU 28:',
        '• DECYZJA (Decidere) — wewnętrzny akt poznawczo-afektywny polegający na wartościowaniu, odcięciu alternatyw i alokacji realnych zasobów w wybrany kierunek.',
        '• KOSZT ALTERNATYWNY (Opportunity Cost) — utracona wartość najlepszej z niewybranych opcji, z której musimy bezpowrotnie zrezygnować.',
        '• RYZYKO vs NIEPEWNOŚĆ (Knight) — mierzalny rozkład prawdopodobieństw (ryzyko) kontra sytuacja unikalna o nieznanych parametrach przyszłości (niepewność).',
        '• KOSZTY UTOPIONE (Sunk Costs) — nakłady przeszłe, których nie można odzyskać i które powinny wynosić zero w bieżącej kalkulacji decyzyjnej.',
        '• DRZWI TYPU 1 i TYPU 2 (Bezos) — podział na wybory nieodwracalne (jednokierunkowe) i łatwo odwracalne (dwukierunkowe).',
        '• MARKERY SOMATYCZNE (Damasio) — cielesne sygnały afektywne wspierające proces wartościowania w korze brzuszno-przyśrodkowej (vmPFC).',
        '• HEURYSTYKA SATYSFAKCJONOWANIA (Simon) — wybór opcji spełniającej kryteria progowe (wystarczająco dobrej) zamiast paraliżującej maksymalizacji.',
        '• PRE-MORTEM (Klein) — technika antycypacji porażki przed podjęciem ostatecznego działania w celu zaprojektowania bezpieczników.',
        'PYTANIA SPRAWDZAJĄCE I REFLEKSYJNE: 1. Jak odróżniasz w swoim życiu dylematy odwracalne od nieodwracalnych? 2. W jakich sytuacjach dajesz się złapać w pułapkę kosztów utopionych? 3. Jakie twarde zabezpieczenia stosujesz, podejmując decyzje pod presją czasu?',
        'MOST DO ROZDZIAŁU 29: Kiedy podejmiesz już decyzję o swoich celach i wartościach, stajesz przed wyzwaniem obrony tych wyborów w środowisku społecznym. W kolejnym rozdziale zbadamy, jak stawiać zdrowe granice osobiste, by nie pozwolić innym na dewastację Twojej autonomii decyzyjnej.'
      ]
    }
  ]
};

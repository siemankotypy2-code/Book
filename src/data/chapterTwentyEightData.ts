import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 12 (GLOBALNIE ROZDZIAŁ 28 W STRUKTURZE DZIEŁA)
 * TYTUŁ: PODEJMOWANIE DECYZJI — MECHANIZMY WYBORU, NIEPEWNOŚĆ, BŁĘDY POZNAWCZE I ARCHITEKTURA ŚWIADOMEGO DECYDOWANIA
 */

export const chapterTwentyEightExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest fundamentalna różnica między pojęciem „wyboru” (choice) a pojęciem „decyzji” (decision) w psychologii poznawczej?',
    topic: 'Struktura Procesu Decyzyjnego',
    sectionRef: 'Sekcja 28.2',
    options: [
      { label: 'A', text: 'Wybór to zestaw istniejących możliwości w środowisku, natomiast decyzja to wewnętrzny proces psychiczny obejmujący analizę, wartościowanie, redukcję opcji oraz zaangażowanie zasobów w określony kierunek działania.', isCorrect: true },
      { label: 'B', text: 'Wybór dotyczy wyłącznie zakupów materialnych, a decyzja dotyczy relacji międzyludzkich.', isCorrect: false },
      { label: 'C', text: 'Wybór jest zawsze nieświadomy, a decyzja jest zawsze w 100% racjonalna.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy merytorycznej — są to synonimy językowe o identycznym mechanizmie.', isCorrect: false }
    ],
    explanation: 'Wybór to zewnętrzna struktura wariantów dostępnych dla jednostki. Decyzja jest aktywnym aktem poznawczo-afektywnym, w którym podmiot przetwarza informacje, waży zyski i straty oraz podejmuje zobowiązanie mentalne lub behawioralne.',
    keyTakeaway: 'Możesz mieć przed sobą wiele wyborów, ale dopóki nie zaangażujesz procesów wartościowania i nie odrzucisz alternatyw, nie podjąłeś decyzji.'
  },
  {
    id: 2,
    question: 'Na czym polega błąd poznawczy znany jako „pułapka kosztów utopionych” (sunk cost fallacy) podczas podejmowania trudnych decyzji?',
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
    id: 3,
    question: 'Czym różni się sytuacja podejmowania decyzji w warunkach RYZYKA od decyzji w warunkach NIEPEWNOŚCI (ujęcie Franka Knighta)?',
    topic: 'Ryzyko a Niepewność',
    sectionRef: 'Sekcja 28.8',
    options: [
      { label: 'A', text: 'W warunkach ryzyka znany jest rozkład prawdopodobieństwa możliwych wyników (np. rzut kostką), podczas gdy w warunkach niepewności prawdopodobieństwo skutków jest nieznane lub niemierzalne.', isCorrect: true },
      { label: 'B', text: 'Ryzyko dotyczy tylko spraw finansowych, a niepewność wyłącznie emocji.', isCorrect: false },
      { label: 'C', text: 'W niepewności zawsze podejmuje się decyzje bezbłędne, a w ryzyku zawsze ponosi się porażkę.', isCorrect: false },
      { label: 'D', text: 'Warunki ryzyka wykluczają udział emocji, a niepewność je wywołuje.', isCorrect: false }
    ],
    explanation: 'Klasyczny podział Knighta rozróżnia sytuacje mierzalne probabilistycznie (ryzyko) od sytuacji otwartych, unikalnych i dynamicznych (głęboka niepewność), w których kalkulacja matematyczna musi ustąpić miejsca heurystykom i odporności na błąd.',
    keyTakeaway: 'Większość ważnych decyzji życiowych to niepewność, a nie policzalne ryzyko — dlatego kluczem jest elastyczność i odwracalność opcji.'
  },
  {
    id: 4,
    question: 'W jaki sposób model „Drzwi Typu 1 i Drzwi Typu 2” (decyzje odwracalne vs nieodwracalne) chroni przed paraliżem analitycznym?',
    topic: 'Typologia Decyzji: Odwracalność',
    sectionRef: 'Sekcja 28.24',
    options: [
      { label: 'A', text: 'Pozwala szybko podejmować decyzje odwracalne (Typ 2) przy 70% danych, rezerwując głęboką analizę i czas wyłącznie dla decyzji trudnoodwracalnych o wysokich konsekwencjach (Typ 1).', isCorrect: true },
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
    sectionRef: 'Sekcja 28.10',
    options: [
      { label: 'A', text: 'Ponieważ przekracza pojemność pamięci roboczej, zwiększa szum poznawczy, wywołuje zmęczenie decyzyjne i zmusza umysł do opierania się na przypadkowych, powierzchownych przesłankach.', isCorrect: true },
      { label: 'B', text: 'Ponieważ ludzki mózg jest zaprogramowany na ignorowanie wszystkich faktów liczbowych.', isCorrect: false },
      { label: 'C', text: 'Ponieważ każda dodatkowa informacja zmniejsza poziom dopaminy w korze potylicznej.', isCorrect: false },
      { label: 'D', text: 'Ponieważ naukowcy udowodnili, że intuicja zawsze działa lepiej bez jakiejkolwiek wiedzy.', isCorrect: false }
    ],
    explanation: 'Zgodnie z koncepcją ograniczonej racjonalności (Herbert Simon) oraz badaniami nad cognitive load, powyżej pewnego progu nowe dane wprowadzają więcej zakłóceń niż użytecznego sygnału, dając fałszywe poczucie kontroli.',
    keyTakeaway: 'Więcej danych nie oznacza lepszej decyzji — kluczowa jest selekcja istotnych kryteriów i ignorowanie szumu.'
  }
];

export const chapterTwentyEightCaseStudyTrudnaDecyzja: CaseStudy = {
  id: 'cs-ch28-krzysztof-kariera',
  title: 'Studium Przypadku 1: Dylemat Dwóch Dróg — Zmiana Kariery Krzysztofa',
  subtitle: 'Analiza paraliżu decyzyjnego, lęku przed stratą i konfrontacji między stabilizacją a rozwojem',
  protagonist: 'Krzysztof, 34 lata, starszy specjalista ds. logistyki w stabilnym koncernie',
  context: 'Krzysztof od 8 lat pracuje w międzynarodowej korporacji logistycznej. Ma stałą pensję, bezpieczny kontrakt i powtarzalne obowiązki, które od dwóch lat wywołują w nim głębokie poczucie wypalenia i znużenia. Otrzymał propozycję przejścia do dynamicznego software-house’u na stanowisko Product Managera wdrażającego innowacyjne systemy AI w logistyce. Wynagrodzenie zasadnicze jest nieco niższe, ale umowa przewiduje wysokie udziały i ogromne możliwości rozwoju. Krzysztof od trzech miesięcy nie potrafi podjąć decyzji — tworzy niekończące się tabele w Excelu, nie śpi po nocach i cierpi na dolegliwości żołądkowe.',
  story: [
    'Krzysztof każdego wieczoru otwiera swój arkusz kalkulacyjny. Ma tam 47 kolumn: od przewidywanego poziomu inflacji, przez odległość biura od domu, aż po subiektywną ocenę „stabilności branży technologicznej w horyzoncie 5 lat”.',
    'Za każdym razem, gdy szala przechyla się w stronę nowej oferty, pojawia się nagły wyrzut adrenaliny i natrętna myśl: „A co, jeśli startup zbankrutuje w pół roku? Co powiem żonie? Mam przecież kredyt hipoteczny”.',
    'Gdy z kolei decyduje, że zostanie w obecnej firmie, natychmiast ogarnia go przytłaczający smutek, bezsilność i złość na samego siebie: „Zostanę tu na kolejne 10 lat, mój mózg zardzewieje, a technologia mnie ominie”.',
    'Krzysztof wpadł w klasyczny stan ambiwalencji decyzyjnej. Zamiast podejmować decyzję, zbierał kolejne dane: czytał fora internetowe, analizował wypowiedzi byłych pracowników i pytał o zdanie każdego znajomego. Każda nowa opinia rodziła kolejne pytania, potęgując chaos.',
    'Przełom nastąpił podczas sesji z psychologiem biznesu, gdy Krzysztof musiał zrekonstruować swoje ukryte założenia. Zrozumiał, że szukał decyzji „bezkosztowej” — takiej, która zagwarantuje bezpieczeństwo i jednocześnie da pełną ekscytację rozwojem.',
    'Wprowadził model: zdefiniował twardy bufor finansowy (6 miesięcy kosztów życia), ustalił z nowym pracodawcą 6-miesięczny okres ewaluacji z mierzalnymi KPI oraz podzielił decyzję na sekwencję testowalnych kroków. Podjął nowe wyzwanie i po 12 miesiącach awansował na dyrektora wdrożeń.'
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
  title: 'Studium Przypadku 2: Decyzja w Oku Cyklonu — Zarządzanie Kryzysem pod Presją Czasu',
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
  title: 'Studium Przypadku 3: Wojna Rozumu z Sercem — Zakup Mieszkania Tomasza i Ewy',
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
  title: 'Ćwiczenie 28.1: Wielokryterialna Matryca Świadomego Wyboru i Protokół Pre-Mortem',
  subtitle: 'Praktyczny warsztat podejmowania złożonych decyzji osobistych i zawodowych',
  objective: 'Przejście od chaotycznego zamartwiania się do ustrukturyzowanego procesu wyboru opartego na wagach kryteriów i testowaniu odporności.',
  durationMinutes: 30,
  neuroScientificFoundation: 'Zewnętrzna wizualizacja kryteriów i wag odciąża grzbietowo-boczną korę przedczołową, redukując lęk limbiczny wywołany niepewnością.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj dylemat w formie otwartego pytania',
      instruction: 'Zamiast pytania zamkniętego („Czy powinienem zrobić X?”), sformułuj problem w postaci: „W jaki sposób mogę osiągnąć [cel], minimalizując [główne ryzyko]?”.',
      promptText: 'Moje precyzyjnie zdefiniowane pytanie decyzyjne:',
      placeholder: 'W jaki sposób mogę zmienić profil zawodowy, zachowując płynność finansową rodziny?'
    },
    {
      stepNumber: 2,
      title: 'Wygeneruj minimum 3 realne opcje (w tym opcję hybrydową)',
      instruction: 'Wypisz opcję A (status quo z modyfikacją), opcję B (radykalna zmiana) oraz opcję C (krok pośredni / eksperyment pilotażowy).',
      promptText: 'Moje 3 opcje decyzyjne:',
      placeholder: 'Opcja A: Zostaję i negocjuję nowe projekty. Opcja B: Natychmiastowe odejście. Opcja C: 6 miesięcy kursu + 2 zlecenia freelanserskie w weekendy.'
    },
    {
      stepNumber: 3,
      title: 'Ustal 4 kluczowe kryteria i przypisz im wagi (suma wag = 100%)',
      instruction: 'Co naprawdę ma znaczenie? Np. Wzrost kompetencji (30%), Bezpieczeństwo finansowe (30%), Równowaga życiowa (20%), Spójność z wartościami (20%).',
      promptText: 'Moje kryteria i wagi:',
      placeholder: '1. Finanse (30%), 2. Satysfakcja i rozwój (35%), 3. Czas dla rodziny (20%), 4. Poziom stresu (15%).'
    },
    {
      stepNumber: 4,
      title: 'Przeprowadź Analizę Pre-Mortem dla wybranej opcji faworyzowanej',
      instruction: 'Wyobraź sobie, że minął rok, a Twoja decyzja okazała się całkowitą katastrofą. Co dokładnie poszło nie tak? Wypisz 3 główne przyczyny i zaprojektuj środki zaradcze już dzisiaj.',
      promptText: 'Moje wnioski z Pre-Mortem i zabezpieczenia:',
      placeholder: 'Główna pułapka: brak klientów w 3. miesiącu. Zabezpieczenie: stworzę bazę 20 kontaktów przed podpisaniem wypowiedzenia.'
    }
  ],
  reflectionQuestions: [
    'Która z opcji wywołuje w Tobie największy spokój w ciele, gdy patrzysz na nią przez pryzmat 5 lat?',
    'Jaki jest najmniejszy, odwracalny eksperyment, który możesz przeprowadzić w ciągu najbliższych 72 godzin, by przetestować tę decyzję w praktyce?'
  ]
};

export const chapterTwentyEight: Chapter = {
  number: 28,
  volume: 3,
  volumeChapterNumber: 12,
  title: 'Rozdział 28: Podejmowanie Decyzji — Mechanizmy Wyboru, Niepewność, Błędy Poznawcze i Architektura Świadomego Decydowania',
  subtitle: 'Od psychologicznych pułapek myślenia i paraliżu analitycznego do wielokryterialnych modeli decyzyjnych w warunkach niepewności',
  leadParagraph: 'Każdego dnia człowiek podejmuje od kilkuset do kilkunastu tysięcy decyzji — od trywialnych mikrowyborów dotyczących porannej kawy po fundamentalne rozstrzygnięcia kształtujące karierę, relacje, finanse i zdrowie na całe dekady. Choć lubimy myśleć o sobie jako o racjonalnych architektach własnego losu, psychologia poznawcza i neuronauka bezlitośnie obnażają ograniczenia ludzkiego aparatu decyzyjnego. W tym rozdziale przeprowadzimy Cię przez 30 szczegółowych etapów anatomii decyzji: odróżnimy wybór od zaangażowania, zbadamy naturę niepewności i ryzyka, przeanalizujemy podstępne błędy poznawcze (takie jak koszty utopione czy kotwiczenie) oraz wyposażymy Cię w kompletny, odporny na kryzys system podejmowania świadomych decyzji.',
  totalEstimatedPages: 95,
  sections: [
    {
      id: 'sec-28-1',
      pageNumber: 900,
      sectionNumber: '28.1',
      title: 'Czym jest decyzja? Definicja psychologiczna, proces wartościowania i alokacja zasobów',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Decyzja nie jest pojedynczym momentem olśnienia, lecz ukoronowaniem długiego łańcucha selekcji, wartościowania i odrzucania alternatyw.',
        author: 'Herbert A. Simon'
      },
      paragraphs: [
        'W potocznym rozumieniu słowo „decyzja” kojarzy się z jednym, spektakularnym punktem w czasie: podpisaniem umowy, wypowiedzeniem sakramentalnego „tak” czy kliknięciem przycisku „kup teraz”. W ujęciu psychologii poznawczej i neuronauki decyzja jest jednak czymś znacznie głębszym — to wieloetapowy proces psychiczny polegający na przetworzeniu informacji, przypisaniu subiektywnej wartości dostępnym scenariuszom, zredukowaniu wielości opcji do jednego kierunku oraz alokacji realnych zasobów (czasu, energii, uwagi i pieniędzy).',
        'Każda autentyczna decyzja wiąże się z zamknięciem innych ścieżek. Etymologia łacińskiego słowa *decidere* dosłownie oznacza „odciąć”. Podjęcie decyzji to akt odwagi poznawczej, w którym jednostka godzi się na odcięcie możliwości alternatywnych w imię zaangażowania w wybraną drogę.',
        'Wielu ludzi myli stan intencji („chciałbym kiedyś zmienić pracę”) ze stanem decyzji. Intencja nie ponosi kosztów i nie rodzi konsekwencji; decyzja zmienia stan rzeczywistości i reorganizuje zachowanie całego organizmu.'
      ]
    },
    {
      id: 'sec-28-2',
      pageNumber: 904,
      sectionNumber: '28.2',
      title: 'Decyzja a wybór — Różnice pojęciowe między strukturą opcji a aktem woli',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Choć w języku codziennym pojęcia „wybór” i „decyzja” są stosowane zamiennie, psychologia dokonuje między nimi istotnego rozróżnienia strukturalnego. WYBÓR (choice) to układ dostępnych wariantów oferowanych przez środowisko. Wchodząc do księgarni, stajesz przed wyborem tysięcy tytułów; przeglądając portal ogłoszeniowy, widzisz setki ofert.',
        'DECYZJA (decision) jest natomiast wewnętrznym procesem podmiotu. O ile wybór jest obiektywnym faktem zewnętrznym (menu w restauracji), o tyle decyzja jest Twoim subiektywnym aktem hierarchizacji, odrzucenia i zobowiązania.',
        'Można znajdować się w sytuacji bogatego wyboru i jednocześnie nie podjąć żadnej decyzji — co z punktu widzenia dynamiki psychicznej stanowi decyzję domyślną (default decision) o pozostaniu w punkcie wyjścia.'
      ]
    },
    {
      id: 'sec-28-3',
      pageNumber: 908,
      sectionNumber: '28.3',
      title: 'Decyzja a działanie — Luka implementacyjna (Intention-Action Gap) w procesie decyzyjnym',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jednym z najbardziej fascynujących zjawisk psychologicznych jest moment przejścia od decyzji mentalnej do fizycznego działania. Zdarza się nader często, że człowiek uważa sprawę za rozstrzygniętą („postanowiłem, że od poniedziałku biegam”), lecz jego ciało nie podejmuje żadnego nowego zachowania.',
        'Zjawisko to, badane m.in. przez Petera Gollwitzera, określa się mianem luki między intencją a zachowaniem (intention-behavior gap). Podjęcie decyzji na poziomie deklaratywnym angażuje grzbietowo-boczną korę przedczołową, lecz uruchomienie motoryczne wymaga pokonania oporu limbicznego i przekształcenia decyzji w tzw. intencję wdrożeniową (Implementation Intention) o formule: „Kiedy zdarzy się sytuacja X, wykonam czynność Y”.',
        'Dopóki decyzja nie zawiera w sobie sprecyzowanego parametru czasu, miejsca i pierwszej fizycznej czynności, pozostaje jedynie życzeniem poznawczym.'
      ]
    },
    {
      id: 'sec-28-4',
      pageNumber: 912,
      sectionNumber: '28.4',
      title: 'Dlaczego decyzje bywają trudne? Ewolucyjne podłoże lęku przed błędem i konflikt wartości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Złożoność procesu decyzyjnego wynika z faktu, że ludzki mózg nie ewoluował w świecie wielkich, abstrakcyjnych dylematów strategicznych, lecz w środowisku bezpośredniego przetrwania. W pierwotnych warunkach błędna decyzja (np. podejście do nieznanego krzaka) mogła skutkować natychmiastową śmiercią lub wykluczeniem z plemienia.',
        'Współczesne decyzje rzadko niosą bezpośrednie zagrożenie biologiczne, jednak nasze obwody limbiczne (przede wszystkim ciało migdałowate i przednia kora obręczy) reagują na niepewność i potencjalny błąd dokładnie takim samym alarmem fizjologicznym.',
        'Trudność decyzji rośnie wykładniczo, gdy w grę wchodzi konflikt fundamentalnych wartości: bezpieczeństwo kontra wolność, lojalność wobec rodziny kontra własny rozwój, natychmiastowa przyjemność kontra długoterminowe zdrowie.'
      ]
    },
    {
      id: 'sec-28-5',
      pageNumber: 916,
      sectionNumber: '28.5',
      title: 'Koszt decyzji — Zmęczenie decyzyjne (Decision Fatigue) i wyczerpywanie zasobów ego',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Każdy akt świadomego wyboru zużywa energię metaboliczną mózgu — w szczególności glukozę w obwodach kory przedczołowej. Zjawisko to, opisane przez Roya Baumeistera, nosi nazwę zmęczenia decyzyjnego (decision fatigue).',
        'Gdy człowiek przez cały dzień podejmuje dziesiątki drobnych decyzji (w co się ubrać, na które maile odpisać, jakie zadanie wybrać), wieczorem jego zdolność do chłodnej samokontroli i analizy drastycznie spada. Umysł zaczyna wybierać drogi na skróty: staje się impulsywny (zamawia niezdrowe jedzenie, kupuje zbędne rzeczy) albo całkowicie pasywny (odkłada wszystko na jutro).',
        'Zrozumienie biologicznego kosztu decyzji nakazuje chronić zasoby przedczołowe: eliminować trywialne mikrodecyzje poprzez rutyny i automatyzacje, a kluczowe rozstrzygnięcia planować na godziny poranne, po pełnej regeneracji snem.'
      ]
    },
    {
      id: 'sec-28-6',
      pageNumber: 920,
      sectionNumber: '28.6',
      title: 'Informacje potrzebne do decyzji — Selekcja sygnału z szumu i zasada kryteriów kluczowych',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Powszechnym mitem jest przekonanie, że dobra decyzja wymaga zebrania „wszystkich możliwych informacji”. W epoce cyfrowej zbiór wszystkich informacji jest nieskończony, co oznacza, że dążenie do pełnej wiedzy jest prostą drogą do paraliżu.',
        'Do podjęcia wysokiej jakości decyzji potrzebujemy jedynie wąskiego wycinka danych o wysokiej sile dyskryminacyjnej (tzw. sygnału), odrzucając tysiące nieistotnych zmiennych (szumu).',
        'Kluczowym krokiem profesjonalnego decydowania jest wcześniejsze zdefiniowanie: jakich konkretnie 3–4 parametrów szukamy? Jakie dane zmieniłyby mój wybór, a jakie są jedynie ciekawostkami nieposiadającymi wagi operacyjnej?'
      ]
    },
    {
      id: 'sec-28-7',
      pageNumber: 924,
      sectionNumber: '28.7',
      title: 'Decyzje przy niepełnych danych — Heurystyka satysfakcjonowania Simona i reguła 70%',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Laureat Nagrody Nobla Herbert Simon sformułował koncepcję ograniczonej racjonalności (bounded rationality). Człowiek nigdy nie dysponuje pełną wiedzą, nieograniczonym czasem ani nieskończoną mocą obliczeniową. W praktyce nie szukamy więc opcji absolutnie idealnej (maksymalizacja), lecz opcji wystarczająco dobrej, spełniającej przyjęte progi akceptacji (satysfakcjonowanie — *satisficing*).',
        'Współczesna psychologia zarządzania i wojskowości stosuje tzw. regułę 70%: jeśli posiadasz około 70% potrzebnych informacji, masz wystarczającą podstawę do podjęcia decyzji. Czekanie na 90% danych powoduje, że koszt zwłoki przewyższa korzyści z dodatkowej precyzji, a sytuacja na rynku lub w życiu ulega zmianie.',
        'Maksymalizatorzy (osoby szukające wyłącznie doskonałości) podejmują decyzje dłużej, odczuwają większy żal podestowy i częściej cierpią na stany lękowe niż satysfakcjonatorzy.'
      ]
    },
    {
      id: 'sec-28-8',
      pageNumber: 928,
      sectionNumber: '28.8',
      title: 'Niepewność — Różnica między prawdopodobieństwem obliczalnym a niewiadomą egzystencjalną',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W ekonomii i psychologii fundamentalne znaczenie ma rozróżnienie wprowadzone przez Franka Knighta: podział na ryzyko i niepewność. Ryzyko dotyczy sytuacji, w których znamy możliwe scenariusze i możemy przypisać im matematyczne prawdopodobieństwo (np. ruletka, rzut monetą, tabele ubezpieczeniowe).',
        'Głęboka niepewność (Knightian uncertainty) występuje wtedy, gdy nie znamy nawet pełnej listy możliwych wyników, nie mówiąc o ich prawdopodobieństwie (np. rozwój nowej technologii, globalny kryzys geopolityczny, wybór partnera życiowego na 40 lat).',
        'Próba traktowania niepewności za pomocą modeli ryzyka rodzi fałszywą pewność siebie. W warunkach niepewności najważniejszą strategią nie jest optymalizacja, lecz budowanie antykruchości — odporności systemu na nieprzewidziane wstrząsy.'
      ]
    },
    {
      id: 'sec-28-9',
      pageNumber: 932,
      sectionNumber: '28.9',
      title: 'Ryzyko — Psychologia percepcji zagrożenia, asymetria zysków i strat (Teoria Perspektywy)',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'W klasycznej Teorii Perspektywy Daniel Kahneman i Amos Tversky wykazali, że ludzie nie oceniają ryzyka w sposób liniowy i obiektywny. Nasz aparat poznawczy charakteryzuje się wrodzoną asymetrią zwaną awersją do straty (loss aversion).',
        'Psychologiczny ból związany z utratą kwoty 1000 zł jest odczuwany mniej więcej dwukrotnie intensywniej niż radość ze zdobycia tej samej sumy. Ta nieliniowość powoduje, że w obliczu potencjalnych zysków unikamy ryzyka (wolimy pewne 500 zł niż 50% szans na 1000 zł), natomiast w obliczu nieuchronnej straty stajemy się skrajnie ryzykowni (bierzemy niebezpieczne zakłady, byle uniknąć zaksięgowania porażki).',
        'Zrozumienie tej asymetrii pozwala dostrzec, kiedy nasz mózg sabotuje obiektywnie korzystne szanse życiowe z powodu przesadnego wyolbrzymiania potencjalnej straty.'
      ]
    },
    {
      id: 'sec-28-10',
      pageNumber: 936,
      sectionNumber: '28.10',
      title: 'Nadmiar informacji — Zjawisko Information Overload i paradoks wyboru Barry’ego Schwartza',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Intuicja podpowiada, że im więcej możliwości mamy do wyboru, tym większą wolność i satysfakcję odczuwamy. Badania Barry’ego Schwartza nad paradoksem wyboru (The Paradox of Choice) dowodzą, że powyżej pewnego poziomu liczba opcji staje się destrukcyjna.',
        'W słynnym eksperymencie z dżemami (Iyengar & Lepper) stoisko z 6 smakami przyciągnęło mniej gapiów, ale zaowocowało dziesięciokrotnie wyższą sprzedażą niż stoisko z 24 smakami. Nadmiar opcji wywołuje paraliż decyzyjny, podnosi poprzeczkę oczekiwań do nierealistycznego poziomu oraz potęguje żal po podjęciu wyboru („gdybym wybrał tamto drugie, na pewno byłoby lepsze”).',
        'Świadomy decydent celowo ogranicza liczbę analizowanych opcji do 2–3 najsilniejszych kandydatów, chroniąc swój dobrostan psychiczny.'
      ]
    },
    {
      id: 'sec-28-11',
      pageNumber: 940,
      sectionNumber: '28.11',
      title: 'Kiedy analiza pomaga? Obszary wysokiej struktury, powtarzalności i przejrzystych reguł',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Dogłębna, metodyczna analiza matematyczno-logiczna przynosi znakomite rezultaty w środowiskach o wysokim stopniu uporządkowania i stabilności (tzw. środowiska łagodne — *kind learning environments* wg Robina Hogartha).',
        'Należą do nich finanse osobiste (kalkulacja rat kredytu, bilans dochodów i wydatków), inżynieria, diagnostyka techniczna czy dobór optymalnej trasy logistycznej. W takich obszarach reguły gry są stałe, dane historyczne mają wysoką wartość prognostyczną, a informacja zwrotna jest szybka i jednoznaczna.',
        'W tych warunkach wyłączenie emocji na rzecz arkusza kalkulacyjnego i formalnych algorytmów decyzyjnych chroni przed ludzką niedokładnością i stronniczością.'
      ]
    },
    {
      id: 'sec-28-12',
      pageNumber: 944,
      sectionNumber: '28.12',
      title: 'Kiedy analiza zaczyna przeszkadzać? Paraliż analityczny, zjawisko Choking under Pressure i intuicja ekspercka',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Analiza staje się destrukcyjna w dwóch sytuacjach: w środowiskach złożonych, dynamicznych i nieprzewidywalnych (*wicked environments*) oraz w sytuacjach wymagających płynnego wykonania zautomatyzowanych umiejętności motorycznych lub społecznych.',
        'Zjawisko dławienia się pod presją (*choking under pressure*) polega na tym, że kora przedczołowa próbuje świadomie kontrolować procesy, które powinny przebiegać automatycznie w jądrach podstawy (np. rzut karny u zawodowego piłkarza, płynna rozmowa na randce, naturalne wystąpienie publiczne).',
        'Ponadto w złożonych relacjach międzyludzkich próba rozpisania miłości czy przyjaźni na punkty w Excelu prowadzi do odcięcia od kluczowych sygnałów z układu afektywnego i skutkuje absurdalnymi wyborami życiowymi.'
      ]
    },
    {
      id: 'sec-28-13',
      pageNumber: 948,
      sectionNumber: '28.13',
      title: 'Emocje podczas decyzji — Markery somatyczne Antonio Damasio i rola brzuszno-przyśrodkowej kory przedczołowej',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Przez stulecia w filozofii zachodniej dominował pogląd, że idealna decyzja to decyzja całkowicie wyprana z emocji. Rewolucja neurobiologiczna zapoczątkowana przez Antonio Damasio zburzyła ten mit.',
        'W badaniach nad pacjentami z uszkodzeniem brzuszno-przyśrodkowej kory przedczołowej (vmPFC), którzy zachowali nienaruszone IQ, lecz utracili zdolność odczuwania emocji, Damasio odkrył zjawisko paradoksalne: ludzie ci nie stali się doskonałymi maszynami logicznymi — stali się całkowicie niezdolni do podejmowania jakichkolwiek decyzji. Potrafili godzinami analizować wady i zalety dwóch dat spotkania, nie mogąc dokonać wyboru.',
        'Zgodnie z hipotezą markerów somatycznych, emocje to cielesne sygnały (skurcz żołądka, przyspieszenie tętna, poczucie lekkości) powstałe na bazie wcześniejszych doświadczeń, które błyskawicznie zawężają pole poszukiwań i nadają wagę opcjom logicznym.'
      ]
    },
    {
      id: 'sec-28-14',
      pageNumber: 952,
      sectionNumber: '28.14',
      title: 'Strach przed konsekwencjami — Anticipated Regret i zjawisko unikania odpowiedzialności',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jednym z najsilniejszych hamulców decyzyjnych jest antycypowany żal (anticipated regret) — wyobrażanie sobie przyszłego bólu i poczucia winy, jeśli wybrana opcja okaże się pomyłką.',
        'Lęk przed żalem popycha ludzi do tzw. unikania decyzyjnego (decision avoidance). Strategia ta przybiera formy: delegowania wyboru na innych („zdecyduj za mnie, mnie to obojętne”), wybierania opcji bezpiecznej instytucjonalnie („nikt jeszcze nie został zwolniony za kupienie sprzętu od lidera rynku”) lub odwlekania decyzji aż do momentu, gdy okoliczności zewnętrzne rozstrzygną sprawę za nas.',
        'Warto uświadomić sobie, że zaniechanie działania jest również wyborem, który w długiej perspektywie generuje znacznie głębszy żal egzystencjalny niż błędy popełnione w wyniku aktywnego działania.'
      ]
    },
    {
      id: 'sec-28-15',
      pageNumber: 956,
      sectionNumber: '28.15',
      title: 'Presja czasu — Wpływ ostrego stresu na zawężenie pola uwagi i powrót do nawyków',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Presja czasu drastycznie zmienia architekturę przetwarzania informacji. Pod wpływem uciekających minut mózg przełącza się z wolnego, deliberatywnego Systemu 2 na szybki, odruchowy System 1 (Kahneman).',
        'Zwiększa się podatność na manipulacje perswazyjne (techniki wywierania wpływu oparte na sztucznej niedostępności czasowej), a uwaga skupia się wyłącznie na parametrach najbardziej wyrazistych i jaskrawych, ignorując kontekst.',
        'W warunkach presji czasu nie wznosisz się na poziom swoich oczekiwań — spadasz na poziom swoich najbardziej utrwalonych nawyków i wcześniej przygotowanych procedur operacyjnych.'
      ]
    },
    {
      id: 'sec-28-16',
      pageNumber: 960,
      sectionNumber: '28.16',
      title: 'Impulsywne decyzje — Krótkoterminowa dopamina kontra długofalowa kora czołowa',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Decyzja impulsywna to akt, w którym dominację nad zachowaniem przejmuje układ nagrody (brzuszne pole nakrywki i jądro półleżące), obiecujący natychmiastowy zastrzyk dopaminowy w odpowiedzi na bliski bodziec.',
        'W tym stanie grzbietowo-boczna kora przedczołowa zostaje czasowo zepchnięta na margines. Człowiek doskonale wie, że wydatek na drogi gadżet naruszy budżet lub że zjedzenie ciastka zniszczy dietę, lecz natychmiastowa obecność bodźca redukuje wartość odległych celów niemal do zera.',
        'Najskuteczniejszą obroną przed impulsywnością nie jest walka siłą woli w momencie pokusy, lecz wprowadzenie tzw. sztywnego tarcia czasowego: zasady 24 godzin lub 7 dni przed dokonaniem nieplanowanego zakupu.'
      ]
    },
    {
      id: 'sec-28-17',
      pageNumber: 964,
      sectionNumber: '28.17',
      title: 'Efekt pierwszej informacji — Kotwiczenie (Anchoring Bias) i manipulacja punktem odniesienia',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Efekt kotwiczenia to błąd poznawczy polegający na tym, że pierwsza informacja liczbowa lub jakościowa, z jaką zetknie się nasz umysł, staje się niewidzialnym punktem odniesienia dla wszystkich kolejnych szacunków.',
        'W negocjacjach cenowych osoba, która rzuca pierwszą (nawet absurdalnie wysoką) kwotę, kotwiczy percepcję drugiej strony. W sądownictwie żądanie prokuratora potrafi zakotwiczyć wyrok sędziego; w relacjach pierwsza etykieta przypisana nowemu pracownikowi kształtuje interpretację jego zachowań przez miesiące.',
        'Przełamanie kotwicy wymaga aktywnego, świadomego wygenerowania kontr-kotwicy opartej na niezależnych źródłach danych przed przystąpieniem do dyskusji.'
      ]
    },
    {
      id: 'sec-28-18',
      pageNumber: 968,
      sectionNumber: '28.18',
      title: 'Koszt utopiony — Pułapka Sunk Cost Fallacy, racjonalizacja i syndrom Concorde',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Pułapka kosztów utopionych to jeden z najbardziej powszechnych i kosztownych błędów decyzyjnych w życiu osobistym i biznesie. Polega na kontynuowaniu nieopłacalnego projektu, tkwieniu w destrukcyjnym związku czy utrzymywaniu nierentownej inwestycji tylko dlatego, że włożono już w to dużo wysiłku, czasu lub kapitału.',
        'Klasycznym przykładem historycznym był naddźwiękowy samolot Concorde — rządy Wielkiej Brytanii i Francji wiedziały, że projekt jest komercyjną klapą, lecz pompowały weń kolejne miliardy, argumentując: „zainwestowaliśmy już zbyt wiele, by się teraz wycofać”.',
        'Z punktu widzenia czystej logiki i ekonomii, przeszłe koszty są nieodwracalne i powinny wynosić zero w bieżącym równaniu decyzyjnym. Pytanie brzmi wyłącznie: „Czy w świetle dzisiejszej wiedzy zainwestowałbym w to chociaż jedną złotówkę i jedną godzinę?”. Jeśli nie — wycofaj się natychmiast.'
      ]
    },
    {
      id: 'sec-28-19',
      pageNumber: 972,
      sectionNumber: '28.19',
      title: 'Nadmierna pewność siebie — Overconfidence Effect, iluzja kontroli i ślepota na błędy',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Efekt nadmiernej pewności siebie (overconfidence effect) sprawia, że ludzie systematycznie przeceniają trafność swoich sądów, własne umiejętności oraz stopień kontroli nad przypadkowymi zdarzeniami losowymi.',
        'W badaniach psychologicznych 80–90% kierowców uważa, że jeździ bezpieczniej niż średnia populacyjna, a większość menedżerów jest przekonana, że ich fuzje i przejęcia zakończą się sukcesem, mimo że statystyki rynkowe pokazują porażkę w 70% przypadków.',
        'Nadmierna pewność siebie rodzi arogancję decyzyjną i zniechęca do tworzenia planów awaryjnych. Skutecznym antidotum jest kultywowanie pokory epistemicznej — stałej świadomości granic własnej wiedzy.'
      ]
    },
    {
      id: 'sec-28-20',
      pageNumber: 976,
      sectionNumber: '28.20',
      title: 'Paraliż decyzyjny — Mechanizmy unikania, ambiwalencja i przeciążenie pamięci roboczej',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Paraliż decyzyjny (analysis paralysis) pojawia się wtedy, gdy lęk przed popełnieniem błędu w połączeniu z nadmiarem sprzecznych informacji całkowicie blokuje zdolność do wykonania kroku.',
        'W tym stanie człowiek wchodzi w pętlę obsesyjnego poszukiwania kolejnych danych: czyta recenzje, pyta znajomych, tworzy kolejne wersje planów, przeżywając udrękę ambiwalencji. Każdy argument „za” natychmiast przywołuje równoważny argument „przeciw”.',
        'Przełamanie paraliżu wymaga sztucznego ograniczenia czasu na decyzję (tzw. technika twardego terminu) oraz uświadomienia sobie, że brak decyzji jest w istocie decyzją o oddaniu kontroli przypadkowi.'
      ]
    },
    {
      id: 'sec-28-21',
      pageNumber: 980,
      sectionNumber: '28.21',
      title: 'Definiowanie problemu — Ramowanie (Framing), perspektywa i pytanie fundamentalne',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Najczęstszą przyczyną złych decyzji nie jest wybór błędnej odpowiedzi, lecz próba odpowiedzi na źle postawione pytanie. Sposób, w jaki sformułujemy problem (tzw. ramowanie — *framing*), w 90% determinuje zbiór dostępnych rozwiązań.',
        'Jeśli zdefiniujesz problem: „Jak przekonać szefa, by dał mi podwyżkę?”, Twoje pole manewru ogranicza się do techniki negocjacji w jednej firmie. Jeśli jednak zdefiniujesz problem: „W jaki sposób mogę zwiększyć rynkową wartość swoich kompetencji i zarobki o 30% w ciągu 12 miesięcy?”, otwierasz przestrzeń na zmianę pracy, freelancing, podniesienie kwalifikacji czy zmianę branży.',
        'Przed rozpoczęciem poszukiwania rozwiązań poświęć 80% czasu na precyzyjne, szerokie i bezstronne zdefiniowanie rdzenia problemu.'
      ]
    },
    {
      id: 'sec-28-22',
      pageNumber: 984,
      sectionNumber: '28.22',
      title: 'Tworzenie możliwych opcji — Przełamywanie fałszywych dychotomii i myślenie lateralne',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Ludzki umysł pod wpływem stresu ma silną tendencję do wpadania w pułapkę fałszywej dychotomii: „Albo zostanę w tym toksycznym miejscu, albo zbankrutuję”, „Albo rozwód, albo nieszczęście do końca życia”.',
        'Tymczasem w rzeczywistości rzadko istnieją tylko dwie skrajne drogi. Profesjonalne podejmowanie decyzji wymaga celowego wygenerowania minimum trzech wyraźnie różniących się wariantów (w tym opcji kompromisowych, hybrydowych oraz eksperymentów niskokosztowych).',
        'Zadaj sobie pytanie: „Gdyby obie dotychczasowe opcje nagle okazały się całkowicie niemożliwe z przyczyn zewnętrznych, co zrobiłbym w trzeciej kolejności?”. Ta prosta technika natychmiast odblokowuje kreatywność poznawczą.'
      ]
    },
    {
      id: 'sec-28-23',
      pageNumber: 988,
      sectionNumber: '28.23',
      title: 'Porównywanie konsekwencji — Myślenie drugiego rzędu (Second-Order Thinking) i efekty wtórne',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Myślenie pierwszego rzędu koncentruje się wyłącznie na bezpośrednich, natychmiastowych skutkach decyzji: „Zjem słodycze -> będzie mi miło”, „Wezmę szybką pożyczkę -> kupię telewizor”. Jest to myślenie proste, powszechne i krótkowzroczne.',
        'Myślenie drugiego i trzeciego rzędu (Howard Marks) zadaje kluczowe pytanie procesowe: „A co wydarzy się potem? Jakie będą konsekwencje tych bezpośrednich konsekwencji w horyzoncie roku, trzech i pięciu lat?”.',
        'Często opcje, które przynoszą natychmiastową ulgę w pierwszym rzędzie, generują katastrofalne straty w rzędzie drugim (np. unikanie trudnej rozmowy prowadzi do eskalacji konfliktu i rozpadu relacji). I odwrotnie: trudny wysiłek w pierwszym rzędzie przynosi lawinę korzyści w rzędach kolejnych.'
      ]
    },
    {
      id: 'sec-28-24',
      pageNumber: 992,
      sectionNumber: '28.24',
      title: 'Decyzje odwracalne i nieodwracalne — Model Drzwi Typu 1 i Typu 2 Jeffa Bezosa',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jednym z najbardziej eleganckich i praktycznych modeli decyzyjnych w nowoczesnym zarządzaniu jest typologia Jeffa Bezosa dzieląca wybory na Drzwi Typu 1 i Typu 2.',
        'DECYZJE TYPU 1 (drzwi jednokierunkowe) są nieodwracalne lub ich cofnięcie wiąże się z gigantycznym kosztem (np. sprzedaż firmy, wypowiedzenie wojny, decyzja o posiadaniu dziecka, wykonanie ryzykownej operacji chirurgicznej). Takie decyzje wymagają metodycznej, powolnej analizy, szerokich konsultacji i pełnej rozwagi.',
        'DECYZJE TYPU 2 (drzwi dwukierunkowe) są łatwo odwracalne: jeśli popełnisz błąd, możesz po prostu otworzyć drzwi i wrócić do punktu wyjścia (np. zmiana wyglądu strony, wypróbowanie nowego narzędzia, pilotażowy projekt edukacyjny). Te decyzje powinny być podejmowane błyskawicznie przez małe zespoły lub pojedyncze osoby przy 70% danych.',
        'Największym błędem organizacji i jednostek jest traktowanie decyzji Typu 2 jakby były decyzjami Typu 1, co prowadzi do ociężałości, paraliżu i marnotrawstwa energii.'
      ]
    },
    {
      id: 'sec-28-25',
      pageNumber: 996,
      sectionNumber: '28.25',
      title: 'Kryteria decyzji — Tworzenie wag, eliminacja szumu i hierarchia nienegocjowalna',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Aby uniknąć subiektywnego dryfu i manipulowania własnymi ocenami w zależności od nastroju, profesjonalny proces decyzyjny wymaga uprzedniego zdefiniowania twardych kryteriów oceny.',
        'Kryteria dzielimy na dwie kategorie: KRYTERIA NIENEGOCJOWALNE (tzw. bramki logiczne / deal breakers) — jeśli opcja nie spełnia chociaż jednego z nich, odpada automatycznie bez dalszej analizy (np. maksymalny dopuszczalny budżet, zgodność z prawem, bezpieczeństwo zdrowotne) oraz KRYTERIA WAGOWANE — parametry podlegające ocenie punktowej z przypisanymi wagami procentowymi.',
        'Taki system wymusza dyscyplinę intelektualną i zapobiega zakochaniu się w powierzchownie atrakcyjnej opcji, która łamie fundamentalne zasady bezpieczeństwa.'
      ]
    },
    {
      id: 'sec-28-26',
      pageNumber: 1000,
      sectionNumber: '28.26',
      title: 'Studium Przypadku 1 — Dylemat Dwóch Dróg: Zmiana Kariery Krzysztofa i Przełamanie Status Quo',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      caseStudyRef: chapterTwentyEightCaseStudyTrudnaDecyzja,
      paragraphs: [
        'W niniejszym studium przypadku analizujemy historię 34-letniego Krzysztofa, który przez trzy miesiące tkwił w paraliżu decyzyjnym między bezpieczną, lecz wypalającą korporacją a ryzykownym startupem technologicznym.',
        'Przypadek ten ilustruje działanie awersji do straty, błędu status quo oraz transformację dylematu z poziomu „wszystko albo nic” do poziomu zarządzania testowalnymi etapami ryzyka.'
      ]
    },
    {
      id: 'sec-28-27',
      pageNumber: 1005,
      sectionNumber: '28.27',
      title: 'Studium Przypadku 2 — Decyzja w Oku Cyklonu: Zarządzanie Kryzysem Technicznym Magdy pod Presją Czasu',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      caseStudyRef: chapterTwentyEightCaseStudyPresjaCzasu,
      paragraphs: [
        'W drugim studium przypadku przyglądamy się sytuacji kryzysowej w firmie e-commerce podczas Black Friday, w której inżynier Magda musiała podjąć kluczową decyzję w ciągu 180 sekund pod presją krzyczącego zarządu.',
        'Analizujemy mechanizmy tunelu poznawczego, pułapkę ulegania presji hierarchicznej oraz potęgę 30-sekundowej pauzy oddechowej i algorytmów procedury awaryjnej.'
      ]
    },
    {
      id: 'sec-28-28',
      pageNumber: 1010,
      sectionNumber: '28.28',
      title: 'Studium Przypadku 3 — Wojna Rozumu z Sercem: Zakup Mieszkania Tomasza i Ewy',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      caseStudyRef: chapterTwentyEightCaseStudyEmocjeAnaliza,
      paragraphs: [
        'Trzecie studium przypadku bada dylemat pary partnerskiej stojącej przed wyborem mieszkania na 25 lat, gdzie logika finansowa Tomasza starła się z potrzebami estetycznymi i emocjonalnymi Ewy.',
        'Analiza pokazuje, jak przejść od destrukcyjnej polaryzacji i fałszywego kompromisu do zintegrowanego zdefiniowania kryteriów nienegocjowalnych i odnalezienia Trzeciej Drogi (Opcji C).'
      ]
    },
    {
      id: 'sec-28-29',
      pageNumber: 1015,
      sectionNumber: '28.29',
      title: 'Ćwiczenia z Podejmowania Decyzji — Wielokryterialna Matryca Świadomego Wyboru i Protokół Pre-Mortem',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      exerciseRef: chapterTwentyEightExerciseDecisionMatrix,
      paragraphs: [
        'Przejdź do praktycznego warsztatu decyzyjnego. W tym module zastosujesz 4-stopniowy algorytm dekonstrukcji problemu, wygenerujesz opcję hybrydową, ustalisz wagi kryteriów oraz przeprowadzisz analizę Pre-Mortem dla Twojej najważniejszej bieżącej decyzji życiowej.'
      ]
    },
    {
      id: 'sec-28-30',
      pageNumber: 1020,
      sectionNumber: '28.30',
      title: 'Podsumowanie, Słownik Pojęć i Własny Model Świadomego Podejmowania Decyzji',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Przeszliśmy przez 30 fundamentalnych kroków psychologii podejmowania decyzji. Podsumujmy najważniejsze filary dojrzałego decydenta:',
        '1. Decyzja to odcięcie opcji alternatywnych i zaangażowanie zasobów — brak decyzji jest w istocie decyzją o trwaniu w status quo.',
        '2. Odróżniaj decyzje odwracalne (Typ 2) od nieodwracalnych (Typ 1) — te pierwsze podejmuj szybko przy 70% danych.',
        '3. Nie szukaj decyzji idealnej i bezkosztowej — każda ścieżka niesie określone koszty alternatywne. Wybierz świadomie, które koszty decydujesz się ponieść.',
        '4. Zintegruj markery somatyczne z analizą logiczną — rozum weryfikuje fakty i zabezpiecza granice, a wartości wskazują kierunek.',
        'SŁOWNIK POJĘĆ ROZDZIAŁU 28:',
        '• Bounded Rationality (Ograniczona Racjonalność) — model Simona wskazujący na ograniczenia ludzkiego aparatu poznawczego, czasu i informacji w procesach decyzyjnych.',
        '• Sunk Cost Fallacy (Pułapka Kosztów Utopionych) — irracjonalne trwanie w błędnym kierunku z powodu wcześniejszych, nieodwracalnych nakładów.',
        '• Anchoring Bias (Kotwiczenie) — nieświadome opieranie kolejnych osądów na pierwszej usłyszanej informacji liczbowej lub jakościowej.',
        '• Pre-Mortem Analysis — technika psychologiczna polegająca na założeniu porażki projektu w przyszłości i wstecznej identyfikacji przyczyn w celu zabezpieczenia planu przed jego wdrożeniem.',
        '• Somatic Markers (Markery Somatyczne) — cielesne odczucia generowane przez vmPFC i układ limbiczny wspomagające szybką selekcję opcji decyzyjnych.',
        'W kolejnym rozdziale (Rozdział 29) zbadamy, w jaki sposób podjęte decyzje przekładają się na relacje z innymi ludźmi — przeanalizujemy psychologię zdrowych granic, asertywnej obrony autonomii oraz zarządzania konfliktami.'
      ]
    }
  ]
};

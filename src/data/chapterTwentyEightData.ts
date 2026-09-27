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
  protagonist: 'Krzysztof, 34 lata, starszy specjalista ds. logistyki w stabilnym koncernie',
  context: 'Krzysztof od 8 lat pracuje w międzynarodowej korporacji logistycznej. Ma stałą pensję, bezpieczny kontrakt i powtarzalne obowiązki, które od dwóch lat wywołują w nim głębokie poczucie wypalenia i znużenia. Otrzymał propozycję przejścia do dynamicznego software-house’u na stanowisko Product Managera wdrażającego innowacyjne systemy AI w logistyce. Wynagrodzenie zasadnicze jest nieco niższe, ale umowa przewiduje wysokie premie i ogromne możliwości rozwoju. Krzysztof od trzech miesięcy nie potrafi podjąć decyzji — tworzy niekończące się tabele w Excelu, nie śpi po nocach i cierpi na dolegliwości żołądkowe.',
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
  title: 'Ćwiczenie Praktyczne: Wielokryterialna Matryca Świadomego Wyboru i Protokół Pre-Mortem',
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
  title: 'Rozdział 28: Podejmowanie Decyzji — Mechanizmy Wyboru, Informacje, Emocje, Błędy Poznawcze i System Świadomego Decydowania',
  subtitle: 'Od psychologicznych pułapek myślenia i paraliżu analitycznego do wielokryterialnych modeli decyzyjnych w warunkach niepewności',
  leadParagraph: 'Każdego dnia człowiek podejmuje od kilkuset do kilkunastu tysięcy decyzji — od trywialnych mikrowyborów dotyczących porannej kawy po fundamentalne rozstrzygnięcia kształtujące karierę, relacje, finanse i zdrowie na całe dekady. Choć lubimy myśleć o sobie jako o racjonalnych architektach własnego losu, psychologia poznawcza i neuronauka bezlitośnie obnażają ograniczenia ludzkiego aparatu decyzyjnego. W tym rozdziale przeprowadzimy Cię przez 30 szczegółowych etapów anatomii decyzji: odróżnimy wybór od zaangażowania, zbadamy naturę niepewności i ryzyka, przeanalizujemy podstępne błędy poznawcze (takie jak koszty utopione czy kotwiczenie) oraz wyposażymy Cię w kompletny, odporny na kryzys system podejmowania świadomych decyzji.',
  totalEstimatedPages: 96,
  sections: [
    // BLOK I — PODSTAWY PODEJMOWANIA DECYZJI (28.1 - 28.5)
    {
      id: 'sec-28-1',
      pageNumber: 900,
      sectionNumber: '28.1',
      title: 'Czym właściwie jest decyzja? Definicja psychologiczna, proces wartościowania i alokacja zasobów',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Decyzja nie jest pojedynczym momentem olśnienia, lecz ukoronowaniem długiego łańcucha selekcji, wartościowania i odrzucania alternatyw.',
        author: 'Herbert A. Simon'
      },
      paragraphs: [
        'W potocznym rozumieniu słowo „decyzja” kojarzy się z jednym, spektakularnym punktem w czasie: podpisaniem umowy, wypowiedzeniem sakramentalnego „tak” czy kliknięciem przycisku „kup teraz”. W ujęciu psychologii poznawczej i neuronauki decyzja jest jednak czymś znacznie głębszym — to wieloetapowy proces psychiczny polegający na przetworzeniu informacji, przypisaniu subiektywnej wartości dostępnym scenariuszom, zredukowaniu wielości opcji do jednego kierunku oraz alokacji realnych zasobów (czasu, energii, uwagi i pieniędzy).',
        'Każda autentyczna decyzja wiąże się z zamknięciem innych ścieżek. Etymologia łacińskiego słowa decidere dosłownie oznacza „odciąć”. Podjęcie decyzji to akt odwagi poznawczej, w którym jednostka godzi się na odcięcie możliwości alternatywnych w imię zaangażowania w wybraną drogę.',
        'Wielu ludzi myli stan intencji („chciałbym kiedyś zmienić pracę”) ze stanem decyzji. Intencja nie ponosi kosztów i nie rodzi konsekwencji; decyzja zmienia stan rzeczywistości i reorganizuje zachowanie całego organizmu.',
        'Kiedy decydujesz, rezygnujesz z iluzji, że możesz mieć wszystko naraz. Dojrzałość decyzyjna polega na pełnej zgodzie na nieodwracalny koszt rezygnacji z opcji odrzuconych.'
      ]
    },
    {
      id: 'sec-28-2',
      pageNumber: 904,
      sectionNumber: '28.2',
      title: 'Jak powstaje decyzja? 7 kluczowych faz procesu: od problemu do konsekwencji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'W ujęciu psychologicznym każda świadoma decyzja przebiega przez sekwencję 7 powiązanych etapów: 1. Identyfikacja problemu (dostrzeżenie rozbieżności między stanem obecnym a pożądanym); 2. Zbieranie informacji; 3. Generowanie wariantów (stworzenie puli opcji); 4. Wartościowanie i ocena (ważenie zysków, strat i ryzyk); 5. Wybór (akt woli eliminujący opcje gorsze); 6. Działanie (wdrożenie behawioralne); 7. Informacja zwrotna i konsekwencje.',
        'Zaburzenie procesu na którymkolwiek z tych etapów prowadzi do dysfunkcji. Jeśli błędnie zdefiniujesz problem w punkcie 1, nawet genialna analiza w punkcie 4 doprowadzi Cię do niewłaściwego celu.',
        'Jeśli z kolei zatrzymasz się na etapie 4, tworząc niekończące się porównania bez przejścia do etapu 5 i 6, popadasz w chroniczny paraliż decyzyjny.',
        'Wysokiej jakości decydowanie wymaga świadomości tego, w której fazie procesu aktualnie się znajdujesz.'
      ]
    },
    {
      id: 'sec-28-3',
      pageNumber: 908,
      sectionNumber: '28.3',
      title: 'Dlaczego podejmowanie decyzji może być trudne? Ewolucyjne źródła lęku, sprzeczne cele i ciężar odpowiedzialności',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Złożoność procesu decyzyjnego wynika z faktu, że ludzki mózg nie ewoluował w świecie wielkich, abstrakcyjnych dylematów strategicznych, lecz w środowisku bezpośredniego przetrwania. W pierwotnych warunkach błędna decyzja (np. podejście do nieznanego krzaka) mogła skutkować natychmiastową śmiercią lub wykluczeniem z plemienia.',
        'Współczesne decyzje rzadko niosą bezpośrednie zagrożenie biologiczne, jednak nasze obwody limbiczne (przede wszystkim ciało migdałowate i przednia kora obręczy) reagują na niepewność i potencjalny błąd dokładnie takim samym alarmem fizjologicznym.',
        'Trudność decyzji rośnie wykładniczo, gdy w grę wchodzi konflikt fundamentalnych wartości: bezpieczeństwo kontra wolność, lojalność wobec rodziny kontra własny rozwój, natychmiastowa przyjemność kontra długoterminowe zdrowie.',
        'Dodatkowym ciężarem jest odpowiedzialność egzystencjalna: świadomość, że za skutki wyboru nie można winić nikogo innego poza sobą samym.'
      ]
    },
    {
      id: 'sec-28-4',
      pageNumber: 912,
      sectionNumber: '28.4',
      title: 'Koszt decyzji — Koszt alternatywny, zasoby poznawcze i wyczerpywanie energii woli',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Każda decyzja niesie za sobą dwa fundamentalne rodzaje kosztów: koszt psychobiologiczny oraz koszt alternatywny (opportunity cost).',
        'Koszt psychobiologiczny wiąże się ze zużyciem glukozy i energii metabolicznej w obwodach grzbietowo-bocznej kory przedczołowej (dlPFC). Zjawisko to, opisane jako zmęczenie decyzyjne (decision fatigue), powoduje, że pod koniec dnia pełnego wyborów nasza zdolność do samokontroli i logicznej oceny drastycznie spada.',
        'Koszt alternatywny to z kolei ekonomiczna i psychologiczna wartość tego, z czego musisz zrezygnować, wybierając daną ścieżkę. Decydując się spędzić wieczór na nauce języka, płacisz kosztem odpoczynku, spotkania ze znajomymi lub snu.',
        'Niezdolność do zaakceptowania kosztu alternatywnego rodzi frustrację i poczucie, że „zawsze coś nas omija” (FOMO).'
      ]
    },
    {
      id: 'sec-28-5',
      pageNumber: 916,
      sectionNumber: '28.5',
      title: 'Ćwiczenie Praktyczne — Analiza Własnej Trudnej Decyzji: Dekompozycja Dylematu',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Pora przenieść teorię pierwszego bloku na grunt Twojego osobistego doświadczenia. Wybierz jedną trudną decyzję, przed którą aktualnie stoisz (lub decyzję z przeszłości, która wciąż wywołuje w Tobie wątpliwości).',
        'KROK 1: Zdefiniuj dylemat w jednym zdaniu. Czego dokładnie dotyczy wybór?',
        'KROK 2: Wypisz dwie główne opcje (Opcja A i Opcja B).',
        'KROK 3: Zidentyfikuj ukryty konflikt wartości: Jaka wartość stoi za Opcją A (np. stabilność finansowa), a jaka za Opcją B (np. samorealizacja)?',
        'KROK 4: Oblicz koszt alternatywny: Z czego dokładnie rezygnujesz, jeśli wybierzesz A? Z czego rezygnujesz, jeśli wybierzesz B?',
        'KROK 5: Ocena somatyczna: Wyobraź sobie, że rzuciłeś monetą i wypadła Opcja A. Zwróć uwagę na pierwszą reakcję swojego ciała — poczułeś ulgę czy zawód? Ciało jest Twoim najszybszym kompasem aksjologicznym.'
      ]
    },

    // BLOK II — INFORMACJE, RYZYKO I NIEPEWNOŚĆ (28.6 - 28.10)
    {
      id: 'sec-28-6',
      pageNumber: 920,
      sectionNumber: '28.6',
      title: 'Ile informacji naprawdę potrzebujemy? Sygnał vs szum i reguła 70% informacji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Powszechnym mitem jest przekonanie, że dobra decyzja wymaga zebrania „wszystkich możliwych informacji”. W epoce cyfrowej zbiór wszystkich informacji jest nieskończony, co oznacza, że dążenie do pełnej wiedzy jest prostą drogą do paraliżu.',
        'Do podjęcia wysokiej jakości decyzji potrzebujemy jedynie wąskiego wycinka danych o wysokiej sile dyskryminacyjnej (tzw. sygnału), odrzucając tysiące nieistotnych zmiennych (szumu).',
        'Współczesna psychologia zarządzania i wojskowości stosuje tzw. regułę 70%: jeśli posiadasz około 70% potrzebnych informacji, masz optymalną podstawę do podjęcia decyzji. Czekanie na 90% danych powoduje, że koszt zwłoki przewyższa korzyści z dodatkowej precyzji, a sytuacja w otoczeniu ulega zmianie.',
        'Kluczem jest wcześniejsze określenie: jakie 3 twarde dane są niezbędne, by ruszyć z miejsca?'
      ]
    },
    {
      id: 'sec-28-7',
      pageNumber: 924,
      sectionNumber: '28.7',
      title: 'Decyzje przy niepełnych danych — Heurystyka satysfakcjonowania Simona i myślenie probabilistyczne',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Laureat Nagrody Nobla Herbert Simon sformułował koncepcję ograniczonej racjonalności (bounded rationality). Człowiek nigdy nie dysponuje pełną wiedzą, nieograniczonym czasem ani nieskończoną mocą obliczeniową. W praktyce nie szukamy więc opcji absolutnie idealnej (maksymalizacja), lecz opcji wystarczająco dobrej, spełniającej przyjęte progi akceptacji (satysfakcjonowanie — satisficing).',
        'Myślenie probabilistyczne polega na zaakceptowaniu, że decyzje podejmuje się w kategoriach szans i rozkładów prawdopodobieństwa, a nie 100% gwarancji.',
        'Maksymalizatorzy (osoby szukające wyłącznie doskonałości) podejmują decyzje dłużej, odczuwają większy żal podestowy i częściej cierpią na stany lękowe niż satysfakcjonatorzy, którzy potrafią powiedzieć: „To rozwiązanie spełnia moje kryteria i jest wystarczająco dobre”.'
      ]
    },
    {
      id: 'sec-28-8',
      pageNumber: 928,
      sectionNumber: '28.8',
      title: 'Ryzyko a niepewność — Różnica Knighta, przewidywalność i asymetria konsekwencji',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W ekonomii i psychologii fundamentalne znaczenie ma rozróżnienie wprowadzone przez Franka Knighta: podział na ryzyko i niepewność.',
        'RYZYKO dotyczy sytuacji, w których znamy możliwe scenariusze i możemy przypisać im matematyczne prawdopodobieństwo (np. ruletka, rzut monetą, tabele ubezpieczeniowe). W warunkach ryzyka sprawdzają się modele statystyczne.',
        'GŁĘBOKA NIEPEWNOŚĆ (Knightian uncertainty) występuje wtedy, gdy nie znamy nawet pełnej listy możliwych wyników, nie mówiąc o ich prawdopodobieństwie (np. rozwój nowej technologii, załamanie geopolityczne, wybór partnera życiowego na 40 lat).',
        'Próba traktowania niepewności za pomocą modeli ryzyka rodzi fałszywą pewność siebie. W warunkach niepewności najważniejszą strategią nie jest matematyczna optymalizacja, lecz budowanie odporności na błąd (antykruchości) i zachowanie elastyczności operacyjnej.'
      ]
    },
    {
      id: 'sec-28-9',
      pageNumber: 932,
      sectionNumber: '28.9',
      title: 'Efekt nadmiaru informacji — Information Overload, paradoks wyboru i wyczerpanie pamięci roboczej',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Intuicja podpowiada, że im więcej możliwości mamy do wyboru, tym większą wolność i satysfakcję odczuwamy. Badania Barry’ego Schwartza nad paradoksem wyboru (The Paradox of Choice) dowodzą, że powyżej pewnego poziomu liczba opcji staje się destrukcyjna.',
        'W słynnym eksperymencie z dżemami (Iyengar & Lepper) stoisko z 6 smakami przyciągnęło mniej gapiów, ale zaowocowało dziesięciokrotnie wyższą sprzedażą niż stoisko z 24 smakami. Nadmiar opcji wywołuje przeciążenie pamięci roboczej w korze przedczołowej, paraliż decyzyjny oraz potęguje żal po podjęciu wyboru („gdybym wybrał tamto drugie, na pewno byłoby lepsze”).',
        'Świadomy decydent celowo ogranicza liczbę analizowanych wariantów do maksymalnie 3–4 najsilniejszych kandydatów.'
      ]
    },
    {
      id: 'sec-28-10',
      pageNumber: 936,
      sectionNumber: '28.10',
      title: 'Analiza Sytuacji — Kiedy dalsze analizowanie przestaje pomagać? Historia Marka i audyt pętli paraliżu',
      category: 'studium-przypadku',
      readingTimeMinutes: 19,
      paragraphs: [
        'Marek, 31 lat, przez 9 miesięcy planował zakup samochodu. Przeczytał 140 testów branżowych, obejrzał 200 godzin recenzji na YouTube i stworzył bazę 50 modeli z oceną grubości lakieru i pojemności bagażnika. Za każdym razem, gdy miał jechać do salonu, pojawiała się nowa informacja o faceliftingu innego modelu, co cofało go do punktu wyjścia. W tym czasie wydał 4500 zł na taksówki i wynajem aut, a chroniczne poczucie niezdecydowania zatruwało mu każdy weekend.',
        'ANALIZA PSYCHOLOGICZNA: Co działo się w umyśle Marka? Działała u niego iluzja całkowitej kontroli oraz ucieczka w analizę (intelektualizacja) przed lękiem przed podjęciem niedoskonałej decyzji. Gromadzenie danych dawało mu dopaminową nagrodę pozornego działania bez ponoszenia ryzyka zaangażowania.',
        'JAK PRZERWAĆ TĘ PĘTLĘ? Wprowadzenie kryterium „stop-loss” czasowego: wyznaczenie sztywnego terminu (np. 14 dni), po którym następuje obligatoryjny wybór najlepszej dostępnej opcji z krótkiej listy.',
        'PYTANIA DLA CZYTELNIKA: 1. W jakiej sprawie w Twoim życiu zbierasz informacje dłużej niż 3 miesiące bez podjęcia kroku? 2. Co najgorszego stanie się, jeśli wybierzesz opcję na poziomie 80% doskonałości?'
      ]
    },

    // BLOK III — EMOCJE I DECYZJE (28.11 - 28.15)
    {
      id: 'sec-28-11',
      pageNumber: 940,
      sectionNumber: '28.11',
      title: 'Emocje podczas podejmowania decyzji — Markery somatyczne Antonio Damasio i rola vmPFC',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Przez stulecia w filozofii zachodniej dominował pogląd, że idealna decyzja to decyzja całkowicie wyprana z emocji. Rewolucja neurobiologiczna zapoczątkowana przez Antonio Damasio zburzyła ten mit.',
        'W badaniach nad pacjentami z uszkodzeniem brzuszno-przyśrodkowej kory przedczołowej (vmPFC), którzy zachowali wysokie IQ, lecz utracili zdolność odczuwania emocji, Damasio odkrył zjawisko paradoksalne: ludzie ci nie stali się doskonałymi maszynami logicznymi — stali się całkowicie niezdolni do podejmowania jakichkolwiek decyzji. Potrafili godzinami analizować wady i zalety dwóch dat spotkania, nie mogąc dokonać wyboru.',
        'Zgodnie z hipotezą markerów somatycznych, emocje to cielesne sygnały (skurcz żołądka, przyspieszenie tętna, poczucie lekkości) powstałe na bazie wcześniejszych doświadczeń, które błyskawicznie zawężają pole poszukiwań i nadają wagę opcjom logicznym.',
        'Zdrowe decydowanie to dialog między logiką kory czołowej a czuciem markerów somatycznych.'
      ]
    },
    {
      id: 'sec-28-12',
      pageNumber: 944,
      sectionNumber: '28.12',
      title: 'Strach przed konsekwencjami — Katastrofizacja, antycypowany żal i unikanie decyzyjne',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jednym z najsilniejszych hamulców decyzyjnych jest antycypowany żal (anticipated regret) — wyobrażanie sobie przyszłego bólu, jeśli wybrana opcja okaże się pomyłką.',
        'Gdy w umyśle uruchamia się katastrofizacja („jeśli to się nie uda, moje życie będzie zrujnowane”), mózg przechodzi w tryb unikania decyzyjnego (decision avoidance). Strategia ta przybiera formy: delegowania wyboru na innych („zdecyduj za mnie”), wybierania opcji bezpiecznej instytucjonalnie lub odwlekania decyzji aż okoliczności zewnętrzne wymuszą cokolwiek.',
        'Warto pamiętać: zaniechanie działania jest również wyborem, który w długiej perspektywie generuje znacznie głębszy żal egzystencjalny niż błędy popełnione w wyniku aktywnego działania.'
      ]
    },
    {
      id: 'sec-28-13',
      pageNumber: 948,
      sectionNumber: '28.13',
      title: 'Decyzje podejmowane pod wpływem złości — Porwanie emocjonalne, zawężenie perspektywy i impulsywność',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Złość i gniew są emocjami o wysokim ładunku mobilizacyjnym, zaprojektowanymi ewolucyjnie do walki i usuwania przeszkód. Pod wpływem ostrego gniewu dochodzi do tzw. porwania przez ciało migdałowate (amygdala hijack).',
        'Zmniejsza się percepcja ryzyka — człowiek czuje fałszywą wszechmoc i gotowość do podejmowania skrajnie ryzykownych kroków (np. trzaśnięcie drzwiami i natychmiastowe rzucenie pracy, wysłanie wściekłego maila do klienta, zerwanie wieloletniej przyjaźni pod wpływem jednej kłótni).',
        'Zasada operacyjna: Nigdy nie podejmuj ostatecznych decyzji w stanie ostrego wzbudzenia adrenergicznego. Wprowadź twardą regułę 24-godzinnej kwarantanny afektywnej przed wysłaniem wiadomości lub podpisaniem dokumentu.'
      ]
    },
    {
      id: 'sec-28-14',
      pageNumber: 952,
      sectionNumber: '28.14',
      title: 'Presja czasu — Wpływ ostrego stresu, tunel poznawczy i kompromis między szybkością a precyzją',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Presja czasu drastycznie zmienia architekturę przetwarzania informacji. Pod wpływem uciekających minut mózg przełącza się z wolnego, deliberatywnego Systemu 2 na szybki, odruchowy System 1 (Kahneman).',
        'Zjawisko tunelu poznawczego sprawia, że uwaga skupia się wyłącznie na parametrach najbardziej wyrazistych i krzykliwych, ignorując kontekst, długoterminowe skutki i alternatywne opcje.',
        'W warunkach presji czasu nie wznosisz się na poziom swoich oczekiwań — spadasz na poziom swoich nawyków i wcześniej przygotowanych procedur operacyjnych. Dlatego profesjonaliści w warunkach kryzysu stosują wcześniej opracowane listy kontrolne (checklists).'
      ]
    },
    {
      id: 'sec-28-15',
      pageNumber: 956,
      sectionNumber: '28.15',
      title: 'Ćwiczenie Praktyczne — Rozum czy Emocje? Protokół Rozdzielenia 4 Warstw Poznawczych',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Aby podjąć klarowną decyzję w sytuacji silnego napięcia emocjonalnego, należy rozłożyć sytuację na 4 odrębne kategorie w tabeli czteropolowej:',
        'KOLUMNA 1: FAKTY (Co widzi kamera wideo? Bez ocen i przymiotników. Np. „Pracodawca zaproponował 10% niższą pensję podstawową i 20% premii”).',
        'KOLUMNA 2: EMOCJE (Co fizycznie czuję w ciele? Np. lęk, rozczarowanie, złość, ekscytacja).',
        'KOLUMNA 3: INTERPRETACJE (Jakie narracje tworzy mój umysł? Np. „Chcą mnie wykorzystać”, „Nie doceniają mnie”).',
        'KOLUMNA 4: PRZEWIDYWANIA (Jakie są realne, testowalne scenariusze przyszłości zamiast czarnych wizji?).',
        'Dopiero po rozdzieleniu faktów od emocji i interpretacji zyskujesz przestrzeń na suwerenny, dojrzały wybór.'
      ]
    },

    // BLOK IV — BŁĘDY W PODEJMOWANIU DECYZJI (28.16 - 28.20)
    {
      id: 'sec-28-16',
      pageNumber: 960,
      sectionNumber: '28.16',
      title: 'Decyzja impulsywna — Krótkoterminowa dopamina, dyskontowanie odroczone i zasada tarcia czasowego',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Decyzja impulsywna to akt, w którym dominację nad zachowaniem przejmuje układ nagrody (brzuszne pole nakrywki i jądro półleżące), obiecujący natychmiastowy wyrzut dopaminowy w odpowiedzi na bliski bodziec.',
        'Zjawisko dyskontowania odroczonego (hyperbolic discounting) sprawia, że ludzki mózg wycenia nagrodę dostępną natychmiast znacznie wyżej niż nagrodę odległą w czasie (np. batonik teraz vs zdrowie za 10 lat).',
        'Najskuteczniejszą obroną przed impulsywnością nie jest walka siłą woli w momencie pokusy, lecz wprowadzenie tzw. fizycznego tarcia (friction): zasady 48 godzin przed dokonaniem nieplanowanego zakupu powyżej określonej kwoty lub usunięcia aplikacji zakupowych z ekranu głównego telefonu.'
      ]
    },
    {
      id: 'sec-28-17',
      pageNumber: 964,
      sectionNumber: '28.17',
      title: 'Wpływ pierwszej informacji — Kotwiczenie (Anchoring Bias), manipulacja punktem odniesienia i obrona',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Efekt kotwiczenia to błąd poznawczy polegający na tym, że pierwsza informacja liczbowa lub jakościowa, z jaką zetknie się nasz umysł, staje się niewidzialnym punktem odniesienia dla wszystkich kolejnych szacunków.',
        'W negocjacjach cenowych osoba, która rzuca pierwszą kwotę, kotwiczy percepcję drugiej strony. W relacjach pierwsza etykieta przypisana nowemu projektowi lub człowiekowi zniekształca interpretację jego zachowań przez całe miesiące.',
        'Obrona przed kotwiczeniem wymaga aktywnego wygenerowania niezależnych punktów odniesienia przed przystąpieniem do negocjacji oraz celowego zadania sobie pytania: „Gdybym nie usłyszał tej pierwszej liczby, jaka byłaby moja obiektywna wycena?”.'
      ]
    },
    {
      id: 'sec-28-18',
      pageNumber: 968,
      sectionNumber: '28.18',
      title: 'Koszt utopiony — Pułapka Sunk Cost Fallacy, syndrom Concorde i racjonalizacja minionych strat',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Pułapka kosztów utopionych polega na kontynuowaniu nieopłacalnego projektu, tkwieniu w destrukcyjnym związku czy utrzymywaniu nierentownej inwestycji tylko dlatego, że włożono już w to dużo wysiłku, czasu lub pieniędzy.',
        'Klasycznym przykładem historycznym był naddźwiękowy samolot Concorde — rządy Wielkiej Brytanii i Francji wiedziały, że projekt jest komercyjną klapą, lecz pompowały weń kolejne miliardy, argumentując: „zainwestowaliśmy już zbyt wiele, by się teraz wycofać”.',
        'Z punktu widzenia czystej logiki i ekonomii, przeszłe koszty są nieodwracalne i powinny wynosić zero w bieżącym równaniu decyzyjnym. Pytanie decyzyjne brzmi wyłącznie: „Czy w świetle dzisiejszej wiedzy zainwestowałbym w to chociaż jedną złotówkę i jedną godzinę?”. Jeśli nie — wycofaj się natychmiast.'
      ]
    },
    {
      id: 'sec-28-19',
      pageNumber: 972,
      sectionNumber: '28.19',
      title: 'Nadmierna pewność siebie — Efekt Overconfidence, błąd planowania (Planning Fallacy) i pokora poznawcza',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Nadmierna pewność siebie to tendencja do przeceniania własnej wiedzy, umiejętności przewidywania przyszłości oraz stopnia kontroli nad biegiem zdarzeń.',
        'Przejawia się m.in. w błędzie planowania (planning fallacy) — niemal każdy remont, projekt IT czy praca dyplomowa zajmuje 2–3 razy więcej czasu i kosztuje 50% więcej, niż pierwotnie z optymizmem zakładano.',
        'Antidotum na nadmierną pewność siebie jest pokora epistemiczna: systematyczne uwzględnianie tzw. bazy zewnętrznej (outside view) — sprawdzanie, ile średnio czasu i środków zajmuje podobny projekt innym ludziom, zamiast opierania się wyłącznie na własnych życzeniach.'
      ]
    },
    {
      id: 'sec-28-20',
      pageNumber: 976,
      sectionNumber: '28.20',
      title: 'Paraliż decyzyjny — Ambiwalencja, perfekcjonizm i algorytm przełamywania impasu decyzyjnego',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Paraliż decyzyjny to stan zawieszenia, w którym koszt niepodjęcia żadnej decyzji zaczyna przewyższać koszt ewentualnego błędu w wybranej opcji.',
        'Źródłem paraliżu jest zazwyczaj ukryty perfekcjonizm — nierealistyczne pragnienie znalezienia decyzji idealnej, która da same zyski bez żadnych strat.',
        'Algorytm przełamywania paraliżu obejmuje: 1. Zdefiniowanie decyzji minimalnej (odwracalnego mikrokroku testowego); 2. Narzucenie twardego limitu czasowego (zasada „decyzji do piątku do 15:00”); 3. Metodę eliminacji negatywnej — zamiast szukać najlepszego wariantu, odrzuć najpierw opcje najgorsze, zawężając wybór do dwóch możliwości.'
      ]
    },

    // BLOK V — SYSTEM ŚWIADOMEGO PODEJMOWANIA DECYZJI (28.21 - 28.25)
    {
      id: 'sec-28-21',
      pageNumber: 980,
      sectionNumber: '28.21',
      title: 'Jak prawidłowo zdefiniować problem? Efekt ramowania (Framing Effect) i sztuka pytań pierwotnych',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Sposób, w jaki sformułujesz pytanie wyjściowe, determinuje zbiór dostępnych odpowiedzi. Jeśli zadasz pytanie wąskie i dychotomiczne: „Czy powinienem rzucić pracę?”, Twój mózg zamyka się w pułapce wyboru zero-jedynkowego.',
        'Jeśli przekształcisz problem w pytanie otwarte: „W jaki sposób mogę zwiększyć satysfakcję zawodową i zarobki, zachowując stabilność życiową?”, otwierasz przestrzeń dla kilkunastu nowych wariantów (negocjacja warunków, kurs doszkalający, zmiana działu, zlecenia poboczne).',
        'Zawsze poświęć pierwsze 30% czasu decyzyjnego na precyzyjne i szerokie zdefiniowanie problemu bazowego.'
      ]
    },
    {
      id: 'sec-28-22',
      pageNumber: 984,
      sectionNumber: '28.22',
      title: 'Jak stworzyć możliwe opcje? Myślenie lateralne, poszukiwanie trzeciej drogi i usuwanie fałszywych dychotomii',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Większość ludzi popełnia błąd przedwczesnego domknięcia — widzą tylko dwie skrajne opcje (A lub B) i natychmiast przechodzą do sporu o to, która jest lepsza.',
        'Tymczasem najlepsze rozwiązania leżą niemal zawsze w strefie opcji C (hybrydowej, kompromisowej lub nowatorskiej). Aby ją znaleźć, zastosuj technikę eliminacji opcji oczywistych: „Gdyby Opcja A i Opcja B były prawnie zakazane, co innego mógłbym zrobić?”.',
        'Zmuszenie kory przedczołowej do wygenerowania minimum 3 realnych wariantów drastycznie podnosi jakość ostatecznego wyboru.'
      ]
    },
    {
      id: 'sec-28-23',
      pageNumber: 988,
      sectionNumber: '28.23',
      title: 'Jak porównywać konsekwencje? Myślenie drugiego i trzeciego rzędu (Second-Order Thinking)',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Myślenie pierwszego rzędu pyta: „Jaki będzie natychmiastowy, bezpośredni skutek mojego wyboru?”. Jest szybkie, proste i powierzchowne (np. „Jeśli zjem ciastko, poczuję przyjemność”).',
        'Myślenie drugiego i trzeciego rzędu (Howard Marks) pyta: „A co stanie się potem? Jakie będą konsekwencje tych konsekwencji za 6 miesięcy, 2 lata i 5 lat?”.',
        'Wielkie sukcesy życiowe i zawodowe wynikają z wyboru opcji, które w pierwszym rzędzie niosą wysiłek i dyskomfort (nauka, trening, oszczędzanie), lecz w drugim i trzecim rzędzie przynoszą wykładnicze korzyści i stabilność.'
      ]
    },
    {
      id: 'sec-28-24',
      pageNumber: 992,
      sectionNumber: '28.24',
      title: 'Decyzje odwracalne i nieodwracalne — Model Drzwi Typu 1 i Drzwi Typu 2 Jeffa Bezosa',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jeff Bezos zaproponował genialną typologię decyzji biznesowych i osobistych:',
        'DECYZJE TYPU 1 (Drzwi Jednokierunkowe): Decyzje nieodwracalne lub o potężnych, trudnych do cofnięcia konsekwencjach (np. sprzedaż firmy, narodziny dziecka, poważna operacja). Te decyzje wymagają głębokiej deliberacji, czasu, konsultacji i ostrożności.',
        'DECYZJE TYPU 2 (Drzwi Dwukierunkowe): Decyzje odwracalne (np. zmiana układu strony internetowej, wypróbowanie nowego hobby, zakup sprzętu z prawem zwrotu). Jeśli decyzja okaże się pomyłką, można po prostu otworzyć drzwi i wrócić do punktu wyjścia.',
        'Największym błędem decyzyjnym jest traktowanie decyzji Typu 2 jakby były Typem 1 — prowadzi to do paraliżu i marnowania zasobów na drobiazgi.'
      ]
    },
    {
      id: 'sec-28-25',
      pageNumber: 996,
      sectionNumber: '28.25',
      title: 'Jak ustalać kryteria decyzji? Bramki nienegocjowalne (Must-Have) i wagi punktowe',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Aby uniknąć subiektywnego dryfowania, profesjonalny proces decyzyjny wymaga ustalenia kryteriów PRZED przystąpieniem do oceny konkretnych wariantów.',
        'Wyróżniamy dwa poziomy kryteriów: 1. BRAMKI NIENEGOCJOWALNE (Deal-breakers / Must-Have): warunki progowe, których brak natychmiast dyskwalifikuje daną opcję (np. maksymalna cena, brak toksycznych zapisów w umowie); 2. KRYTERIA WAŻONE: parametry podlegające ocenie punktowej (np. lokalizacja, prestiż, elastyczność czasu pracy) z przypisanymi wagami procentowymi.',
        'W ten sposób oddzielasz chłodne wymogi bezpieczeństwa od preferencji estetycznych i optymalizacyjnych.'
      ]
    },

    // BLOK VI — PRAKTYCZNA INTEGRACJA (28.26 - 28.30)
    {
      id: 'sec-28-26',
      pageNumber: 1000,
      sectionNumber: '28.26',
      title: 'Wielkie Studium Przypadku — Dylemat Dwóch Dróg: Zmiana Kariery Krzysztofa',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      caseStudyRef: chapterTwentyEightCaseStudyTrudnaDecyzja,
      paragraphs: [
        'W tym studium przypadku analizujemy głęboki dylemat Krzysztofa (34 lata), który przez 3 miesiące tkwił w paraliżu decyzyjnym między bezpieczną, lecz wypalającą posadą w korporacji logistycznej a dynamiczną ofertą w startupie technologicznym.',
        'Zapoznaj się ze szczegółową analizą psychologiczną, dekompozycją błędów poznawczych (awersja do straty, bias status quo) oraz protokołem wyjścia z kryzysu opisanym w interaktywnej karcie powyżej.'
      ]
    },
    {
      id: 'sec-28-27',
      pageNumber: 1006,
      sectionNumber: '28.27',
      title: 'Studium Przypadku — Decyzja pod Presją Czasu: Awaria Systemu Magdy',
      category: 'studium-przypadku',
      readingTimeMinutes: 19,
      caseStudyRef: chapterTwentyEightCaseStudyPresjaCzasu,
      paragraphs: [
        'W drugim studium przypadku przyglądamy się Magdzie — liderce zespołu inżynierii danych, która w ciągu 3 minut musiała podjąć krytyczną decyzję operacyjną w trakcie awarii serwerów podczas Black Friday, pod ostrzałem krzyczącego dyrektora.',
        'Zwróć uwagę na to, w jaki sposób 30-sekundowa pauza taktyczna i przejście do procedury awaryjnej uchroniły system przed wielomilionową katastrofą.'
      ]
    },
    {
      id: 'sec-28-28',
      pageNumber: 1012,
      sectionNumber: '28.28',
      title: 'Studium Przypadku — Konflikt Emocji i Racjonalnej Analizy: Wybór Mieszkania Tomasza i Ewy',
      category: 'studium-przypadku',
      readingTimeMinutes: 19,
      caseStudyRef: chapterTwentyEightCaseStudyEmocjeAnaliza,
      paragraphs: [
        'Trzecie studium przypadku ilustruje wojnę między twardą kalkulacją w arkuszu kalkulacyjnym Tomasza a intuicyjnym zachwytem estetycznym Ewy przy zakupie pierwszego mieszkania.',
        'Zobacz, jak odrzucenie walki pozycyjnej i zdefiniowanie wspólnych fundamentalnych wartości pozwoliło parze odnaleźć Opcję C — lokal spełniający 90% wymogów bezpieczeństwa i 85% wymogów klimatu.'
      ]
    },
    {
      id: 'sec-28-29',
      pageNumber: 1018,
      sectionNumber: '28.29',
      title: 'Wielkie Ćwiczenie Praktyczne — Zbuduj Własny System Podejmowania Decyzji i Protokół Pre-Mortem',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      exerciseRef: chapterTwentyEightExerciseDecisionMatrix,
      paragraphs: [
        'Nadszedł czas na skompletowanie Twojego osobistego protokołu decyzyjnego. Skorzystaj z interaktywnego formularza ćwiczenia 28.1 powyżej, aby przejść przez 4 kroki: od sformułowania pytania otwartego, przez generowanie 3 opcji i wag kryteriów, aż po bezcenny protokół Pre-Mortem (Gary Klein).',
        'Analiza Pre-Mortem polega na założeniu, że za rok Twoja decyzja poniosła klapę — zidentyfikowaniu potencjalnych przyczyn i wdrożeniu zabezpieczeń już teraz.'
      ]
    },
    {
      id: 'sec-28-30',
      pageNumber: 1024,
      sectionNumber: '28.30',
      title: 'Podsumowanie Rozdziału 28 — Słownik Pojęć, Kluczowe Idee i Most do Rozdziału 29',
      category: 'podsumowanie',
      readingTimeMinutes: 16,
      paragraphs: [
        'SŁOWNIK KLUCZOWYCH POJĘĆ ROZDZIAŁU 28:',
        '• DECYZJA — proces psychiczny selekcji, wartościowania i alokacji zasobów w wybrany kierunek przy rezygnacji z alternatyw.',
        '• KOSZT ALTERNATYWNY (Opportunity Cost) — utracona wartość najlepszej z niewybranych opcji.',
        '• RYZYKO vs NIEPEWNOŚĆ — sytuacja o mierzalnym rozkładzie prawdopodobieństwa (ryzyko) kontra sytuacja o nieznanych parametrach przyszłości (niepewność Knighta).',
        '• KOSZTY UTOPIONE (Sunk Costs) — nakłady przeszłe, których nie można cofnąć i które nie powinny wpływać na bieżący wybór.',
        '• DECYZJE TYPU 1 i TYPU 2 — podział na wybory nieodwracalne (jednokierunkowe) i łatwo odwracalne (dwukierunkowe).',
        '• MARKERY SOMATYCZNE — cielesne sygnały afektywne wspierające proces wartościowania w korze brzuszno-przyśrodkowej.',
        'PYTANIA SPRAWDZAJĄCE I REFLEKSYJNE: 1. Jak odróżniasz w swoim życiu dylematy odwracalne od nieodwracalnych? 2. W jakich sytuacjach dajesz się złapać w pułapkę kosztów utopionych? 3. Jakie twarde zabezpieczenia stosujesz, podejmując decyzje pod presją czasu?',
        'MOST DO ROZDZIAŁU 29: Kiedy podejmiesz już decyzję o swoich celach i wartościach, stajesz przed wyzwaniem obrony tych wyborów w środowisku społecznym. W kolejnym rozdziale zbadamy, jak stawiać zdrowe granice osobiste, by nie pozwolić innym na dewastację Twojej autonomii decyzyjnej.'
      ]
    }
  ]
};

import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentyExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii motywacji fundamentalna różnica między wartością a celem polega na tym, że:',
    topic: 'Wartości a Cele',
    sectionRef: 'Sekcja 20.2',
    options: [
      { label: 'A', text: 'Wartość jest ciągłym kierunkiem działania i sposobem bycia (jak kompas na północ), podczas gdy cel jest konkretnym, odhaczalnym punktem końcowym.', isCorrect: true },
      { label: 'B', text: 'Wartość jest kwotą pieniędzy w banku, a cel jest propozycją handlową.', isCorrect: false },
      { label: 'C', text: 'Cele są ważne tylko dla dzieci, a wartości dla emerytów.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to pojęcia tożsame w naukach społecznych.', isCorrect: false },
    ],
    explanation: 'Cele można osiągnąć i „odhaczyć” (np. „przebiec maraton”). Wartością jest sam styl życia i troska o zdrowie – nie można jej „odhaczyć”, lecz można nią żyć każdego dnia.',
    keyTakeaway: 'Cel to przystań, do której płyniesz; wartość to kompas wyznaczający kurs.',
  },
  {
    id: 2,
    question: 'Według Teorii Samostanowienia (Self-Determination Theory – SDT) Deciego i Ryana, trzema uniwersalnymi potrzebami psychicznymi człowieka są:',
    topic: 'Teoria Samostanowienia SDT',
    sectionRef: 'Sekcja 20.3',
    options: [
      { label: 'A', text: 'Autonomia, Kompetencja i Powiązanie z innymi (Autonomy, Competence, Relatedness).', isCorrect: true },
      { label: 'B', text: 'Pieniądze, Władza i Sława.', isCorrect: false },
      { label: 'C', text: 'Sen, Kofeina i Szybki Internet.', isCorrect: false },
      { label: 'D', text: 'Dominacja, Konkurorowanie i Brak zasad.', isCorrect: false },
    ],
    explanation: 'Niezaspokojenie którejkolwiek z tych trzech potrzeb wywołuje przewlekły spadek motywacji wewnętrznej, wypalenie i objawy depresyjne.',
    keyTakeaway: 'Autonomia, kompetencja i relacyjność to paliwo dla ludzkiego dobrostanu.',
  },
  {
    id: 3,
    question: 'Na czym polega dysonans aksjologiczny (Axiological Dissonance) opisany w Sekcji 20.6?',
    topic: 'Konflikt Wartości',
    sectionRef: 'Sekcja 20.6',
    options: [
      { label: 'A', text: 'Głęboki stan napięcia psychicznego powstający wtedy, gdy codzienne zachowanie i wybory są w stałej sprzeczności z deklarowanymi wartościami.', isCorrect: true },
      { label: 'B', text: 'Brak umiejętności śpiewania w chórze.', isCorrect: false },
      { label: 'C', text: 'Kupowanie przedmiotów na raty z wysokim oprocentowaniem.', isCorrect: false },
      { label: 'D', text: 'Niechęć do nauki języków obcych.', isCorrect: false },
    ],
    explanation: 'Jeśli deklarujesz, że najważniejsza jest dla Ciebie rodzina, a spędzasz w pracy 16 godzin dziennie, pojawia się bezimienny lęk i poczucie pustki wynikające z niespójności.',
    keyTakeaway: 'Niespójność między tym, co mówisz, a tym, co robisz, zjada spokój ducha.',
  },
  {
    id: 4,
    question: 'Motywacja zintrojektowana (Introjected Motivation) w teorii SDT charakteryzuje się tym, że:',
    topic: 'Typy Motywacji',
    sectionRef: 'Sekcja 20.8',
    options: [
      { label: 'A', text: 'Działanie jest podejmowane pod wpływem wewnętrznej presji, aby uniknąć poczucia winy lub zdobyć aprobatę, bez pełnej integracji z własną tożsamością.', isCorrect: true },
      { label: 'B', text: 'Działanie sprawia czystą radość i jest w pełni autonomiczne.', isCorrect: false },
      { label: 'C', text: 'Działanie wynika z nakazu sądowego.', isCorrect: false },
      { label: 'D', text: 'Człowiek nie wie, dlaczego wykonuje dany ruch.', isCorrect: false },
    ],
    explanation: 'To motywacja oparta na zwrocie „muszę, bo inaczej będę złym człowiekiem”. Choć bywa skuteczna krótkoterminowo, długofalowo prowadzi do wyczerpania.',
    keyTakeaway: 'Zamiast działać z poczucia winy, szukaj głębokiego połączenia ze swoimi wartościami.',
  },
  {
    id: 5,
    question: 'Kołowy model wartości Shaloma Schwartza (Schwartz Value Theory) pokazuje, że:',
    topic: 'Model Schwartza',
    sectionRef: 'Sekcja 20.4',
    options: [
      { label: 'A', text: 'Wartości są zorganizowane w ciągłym uniwersalnym systemie, w którym sąsiadujące wartości wspierają się, a leżące naprzeciwko stoją w konflikcie (np. Otwartość na zmianę vs Zachowawczość).', isCorrect: true },
      { label: 'B', text: 'Wszyscy ludzie na świecie mają identyczną hierarchię wartości.', isCorrect: false },
      { label: 'C', text: 'Wartości zmieniają się co 15 minut w zależności od pory dnia.', isCorrect: false },
      { label: 'D', text: 'Istnieją tylko dwie wartości na świecie: dobro i zło.', isCorrect: false },
    ],
    explanation: 'Model Schwartza pomaga zrozumieć uniwersalne konflikty ludzkie – np. niemożność jednoczesnej maksymalizacji skrajnego bezpieczeństwa i skrajnej przygody bez kompromisów.',
    keyTakeaway: 'Wybór jednej wartości w danej sytuacji często wymaga akceptacji kosztu innej.',
  },
  {
    id: 6,
    question: 'Różnica między krótkoterminową nagrodą dopaminową a satysfakcją eudajmonistyczną (Eudaimonia) polega na tym, że:',
    topic: 'Eudajmonia vs Hedonizm',
    sectionRef: 'Sekcja 20.7',
    options: [
      { label: 'A', text: 'Nagroda dopaminowa przynosi natychmiastowy, lecz krótki strzał przyjemności, podczas gdy eudajmonia to poczucie głębokiego sensu wynikające z życia w zgodzie z wartościami.', isCorrect: true },
      { label: 'B', text: 'Dopamina jest szkodliwym kwasem, a eudajmonia lekami ziołowymi.', isCorrect: false },
      { label: 'C', text: 'Eudajmonia występuje tylko w starożytnej Grecji.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, oba pojęcia oznaczają to samo.', isCorrect: false },
    ],
    explanation: 'Scrollowanie social mediów daje szybki wyrzut dopaminy, ale pozostawia poczucie pustki. Wykonanie trudnego zadania zgodnego z wartościami daje trwałe poczucie spełnienia.',
    keyTakeaway: 'Nie myl chwilowej przyjemności z życiowym poczuciem sensu.'
  },
  {
    id: 7,
    question: 'Wjaki sposób presja społeczna tworzy tzw. „wartości zapożyczone” (Borrowed Values)?',
    topic: 'Presja Społeczna',
    sectionRef: 'Sekcja 20.9',
    options: [
      { label: 'A', text: 'Jednostka bezrefleksyjnie przyjmuje priorytety otoczenia (np. status, drogi zegarek) i goni za nimi, myląc je z własnymi pragnieniami.', isCorrect: true },
      { label: 'B', text: 'Pożycza pieniądze od znajomych na zakupy.', isCorrect: false },
      { label: 'C', text: 'Przekazuje swoje wartości dzieciom w spadku.', isCorrect: false },
      { label: 'D', text: 'Nie wyraża żadnych opinii podczas spotkań towarzyskich.', isCorrect: false }
    ],
    explanation: 'Gdy goni się za wartościami zapożyczonymi, osięgnięcie celu nie przynosi satysfakcji, lecz wywołuje pytanie: „I to ma być wszystko?”.',
    keyTakeaway: 'Sprawdź, czy cel, do którego biegniesz, jest naprawdę Twój.'
  },
  {
    id: 8,
    question: 'Jakie działanie pomaga w praktycznym rozwiązywaniu konfliktu wartości?',
    topic: 'Rozwiązywanie Konfliktów',
    sectionRef: 'Sekcja 20.5',
    options: [
      { label: 'A', text: 'Świadoma hierarchizacja wartości w danym kontekście życiowym i zaakceptowanie koniecznego kosztu wyboru.', isCorrect: true },
      { label: 'B', text: 'Udawanie, że konflikt nie istnieje i liczenie na przypadek.', isCorrect: false },
      { label: 'C', text: 'Rzucenie monetą przed każdą trudną decyzją.', isCorrect: false },
      { label: 'D', text: 'Obwinianie innych ludzi za własne trudne wybory.', isCorrect: false }
    ],
    explanation: 'Nie można mieć wszystkiego jednocześnie w maksymalnym natężeniu. Dojrzałość polega na nazwaniu priorytetu i wzięciu odpowiedzialności za utracone alternatywy.',
    keyTakeaway: 'Każdy wybór jest rezygnacją z czegoś innego – zaakceptuj ten koszt.'
  },
  {
    id: 9,
    question: 'Co charakteryzuje autentyczną autonomię w podejmowaniu decyzji życiowych?',
    topic: 'Autonomia',
    sectionRef: 'Sekcja 20.10',
    options: [
      { label: 'A', text: 'Poczucie, że jest się autorem własnych wyborów, działającym z własnej woli w oparciu o zintegrowane wartości.', isCorrect: true },
      { label: 'B', text: 'Robienie wszystkiego na przekór rodzicom i szefowi bez względu na logikę.', isCorrect: false },
      { label: 'C', text: 'Całkowita izolacja od cywilizacji i brak kontaktów z ludźmi.', isCorrect: false },
      { label: 'D', text: 'Podejmowanie decyzji wyłącznie na podstawie rzutu kostką.', isCorrect: false }
    ],
    explanation: 'Autonomia to nie dziecinny bunt czy rewolucja. To świadoma zgoda na to, co robimy i branie za to pełnej odpowiedzialności.',
    keyTakeaway: 'Bądź autorem własnych decyzji, a nie reżyserowanym aktorem.'
  },
  {
    id: 10,
    question: 'Jakie ryzyko wiąże się ze sztywnym kultywowaniem wartości bez elastyczności kontekstowej?',
    topic: 'Sztywność Aksjologiczna',
    sectionRef: 'Sekcja 20.11',
    options: [
      { label: 'A', text: 'Popadnięcie w dogmatyzm i wyrządzanie krzywdy innym w imię „wyższych zasad” (np. okrutna szczerość niszcząca relacje).', isCorrect: true },
      { label: 'B', text: 'Nkontrolowany spadek masy mięśniowej.', isCorrect: false },
      { label: 'C', text: 'Niezapłacenie rachunku za prąd.', isCorrect: false },
      { label: 'D', text: 'Zwiększenie zysków w firmie o 200%.', isCorrect: false }
    ],
    explanation: 'Nawet najpiękniejsza wartość (np. Szczerość) stosowana bez empatii i wyczucia kontekstu potrafi stać się narzędziem przemocy psychicznej.',
    keyTakeaway: 'Wartości mają służyć człowiekowi, a nie być taranem do niszczenia relacji.'
  },
  {
    id: 11,
    question: 'Sformułowanie „Wartości Rzeczywiste” (Values in Action) oznacza:',
    topic: 'Wartości w Działaniu',
    sectionRef: 'Sekcja 20.4',
    options: [
      { label: 'A', text: 'Wartości, które można odczytać bezpośrednio z kalendarza i wyciągu bankowego danej osoby, a nie z jej deklaracji słownych.', isCorrect: true },
      { label: 'B', text: 'Wartości zapisane w konstytucji państwa.', isCorrect: false },
      { label: 'C', text: 'Złote monety przechowywane w sejfie.', isCorrect: false },
      { label: 'D', text: 'Życzenia urodzinowe składane znajomym.', isCorrect: false }
    ],
    explanation: 'Twoje prawdziwe wartości to te, na które poświęcasz swój czas, energię i pieniądze, a nie te, które deklarujesz na rozmowie rekrutacyjnej.',
    keyTakeaway: 'Twój wyciąg z konta i kalendarz mówią o Twoich wartościach więcej niż Twoje słowa.'
  },
  {
    id: 12,
    question: 'Co jest celem protokołu „Klarowania Priorytetów Aksjologicznych” (Sekcja 20.15)?',
    topic: 'Praktyczny Protokół Wartości',
    sectionRef: 'Sekcja 20.15',
    options: [
      { label: 'A', text: 'Wyłonienie 3 rdzennych wartości i odrzucenie lub przesunięcie na dalszy plan pozostałych w celu odzyskania jasności decyzyjnej.', isCorrect: true },
      { label: 'B', text: 'Zapamiętanie na pamięć definicji 50 wartości słownikowych.', isCorrect: false },
      { label: 'C', text: 'Zmuszenie partnera do przyjęcia naszej hierarchii celów.', isCorrect: false },
      { label: 'D', text: 'Kupowanie poradników motywacyjnych.', isCorrect: false }
    ],
    explanation: 'Gdy wszystko jest priorytetem, nic nie jest priorytetem. Wybranie 3 głównych wartości daje jasne kryterium do odsiewania zbędnych propozycji.',
    keyTakeaway: 'Wybór rdzennych wartości to sztuka rezygnacji z rzeczy mniej ważnych.'
  }
];

export const caseStudiesChapterTwenty: CaseStudy[] = [
  {
    id: 'studium-20-1-pustka-sukcesu',
    title: 'Cena złotej klatki: Jak goniąc za prestiżem, Kamil zgubił poczucie sensu',
    subtitle: 'Wartości zapożyczone, wyczerpanie aksjologiczne i powrót do autonomii',
    protagonist: 'Kamil, 41 lat, partner w międzynarodowej firmie doradczej',
    context: 'Kamil osiągnął wszystko, co w jego środowisku uważano za miarę sukcesu: dwupoziomowy apartament, luksusowy samochód i wysokie stanowisko. Jednak stojąc na tarasie swojego biurowca, czuł dojmującą pustkę i zadawał sobie pytanie: „Dlaczego to wszystko w ogóle mnie nie cieszy?”.',
    story: [
      'Kamil przez 15 lat realizował model życia narzucony przez oczekiwania rodziny i kulturę korporacyjną. Wybrał studia prawnicze zamiast architektury, bo „po prawie jest pewny chleb”. Awansował, kosztem zdrowia i relacji z żoną.',
      'Jego zadeklarowanymi wartościami były: Ambicja, Prestiż i Niezależność Finansowa. Jednak w głębi serca jego nieuszanowanymi potrzebami według SDT były: Autonomia (chęć tworzenia po swojemu) oraz Bliskość (potrzeba głębokich relacji). Kamil żył na „wartościach zapożyczonych”.',
      'Kiedy jego zespół domknął największy kontrakt roku, a zarząd pogratulował mu wybitnego wyniku, Kamil nie poczuł dumy. Poczuł paraliżujące zmęczenie i wściekłość. Zdał sobie sprawę, że zamienił własne życie w wyścig po nagrody, których tak naprawdę nie pragnie.',
      'Wstąpienie na drogę odzyskiwania spójności wymagało od Kamila rezygnacji z części dochodów, skrócenia czasu pracy i podjęcia trudnych rozmów z żoną o redefinicji ich wspólnych celów.'
    ],
    dialogue: [
      { speaker: 'Mentor', text: 'Kamil, jesteś na samym szczycie. O co jeszcze możesz prosić?', subtext: 'Spjrzenie z perspektywy zewnętrznych mierników sukcesu.' },
      { speaker: 'Kamil', text: 'Jestem na szczycie, ale drabina stoi przy złej ścianie.', subtext: 'Uświadomienie sobie głębokiego dysonansu aksjologicznego.' }
    ],
    decisionTaken: 'Rezygnacja ze statusu partnera na rzecz mniejszej roli doradczej i odzyskanie 20 godzin tygodniowo na pracę twórczą i rodzinę.',
    whatProtagonistSaw: 'Luksusowe rekwizyty sukcesu, zazdrość kolegów i wyśrubowane wymagania zarządu.',
    whatWasMissed: 'Własny stan zdrowia psychicznego, zanikające relacje i całkowity brak radości z codziennych zadań.',
    psychologicalAnalysis: {
      coreMechanism: 'Motywacja zintrojektowana (Introjected Motivation) i przewlekły dysonans aksjologiczny wynikający z życia na zapożyczonych wartościach.',
      cognitiveBiases: [
        { name: 'Afekt nagrody dopaminowej', description: 'Mylenie krótkotrwałych strzałów dopaminy przy awansie z trwałym dobrostanem eudajmonistycznym.', impact: 'Gonił za kolejnymi awansami, myśląc, że wreszcie dadzą spokój.' }
      ],
      defenseMechanisms: [
        { name: 'Tłumienie (Suppression)', explanation: 'Upakowywanie poczucia pustki za pomocą pracy i zakupów.' }
      ],
      emotionalDynamic: 'Przejście od manijnej pogoni za sukcesem do aksjologicznego wyczerpania i depresyjnego przebudzenia.'
    },
    decisionProcessAnalysis: {
      trigger: 'Brak radości po domknięciu życiowego kontraktu.',
      attentionFocus: 'Pustka wewnątrz i poczucie zmarnowanego czasu.',
      interpretation: '„Żyję nie swoim życiem; sukces biznesowy stał się moją klatką”.',
      emotion: 'Głęboki żal, lęk przed zmianą, ale i pierwsza od lat nadzieja.',
      impulse: 'Zatrzymać się, zrezygnować z wyścigu, przewartościować wszystko.',
      action: 'Zmiana stanowiska i redefinicja priorytetów życiowych.',
      consequence: 'Spadek dochodów o 30%, ale gwałtowny wzrost satysfakcji z życia i odbudowa małżeństwa.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Sygnalizowanie przewlekłego konfliktu między potrzebami a zachowaniem', activationState: 'Hiperaktywacja' },
        { region: 'Brzuszne pole nakrywki (VTA)', role: 'Wyczerpanie obwodów dopaminowych z powodu braku motywacji wewnętrznej', activationState: 'Obniżona sprawność' }
      ],
      neurotransmitters: [
        { name: 'Serotonina', roleInScenario: 'Spadek poziomu serotoniny związany z brakiem poczucia głębokiego sensu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Dźwięk powiadomienia o premii nie wywołuje pobudzenia.' },
        { timeMs: '500 ms+', process: 'Kora przedczołowa dokonuje trzeźwego rachunku strat moralnych.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Korporacyjne hakowanie wartości', description: 'Zamiana wartości autonomii na obietnicę prestiżu i wysokich zarobków.', vulnerabilityExploited: 'Potrzeba uznania i statusu.' }
      ],
      counterMeasures: [
        { step: '1. Test Kontekstu Umarłego', script: '„Gdybym miał przed sobą ostatni rok życia, czy spędziłbym go na tych zebraniach?”.', rationale: 'Błyskawicznie czyści fałszywe priorytety.' }
      ]
    },
    alternativePath: 'Gdyby Kamil zignorował sygnał pustki, w ciągu 2 lat doszłoby do ciężkiego epizodu wypalenia lub choroby psychosomatycznej.',
    readerQuestion: 'Czy cele, na które przeznaczasz większość swojego tygodnia, są naprawdę Twoje, czy zostały zapożyczone z oczekiwań innych?',
    keyTakeaway: 'Prawdziwy sukces to życie w zgodzie z własnymi wartościami, a nie spełnianie cudzego scenariusza.'
  }
];

export const selfExercisesChapterTwenty: SelfExercise[] = [
  {
    id: 'cwiczenie-20-1-matrix-wartosci',
    title: 'Audit Priorytetów Aksjologicznych: Od Deklaracji do Wyciągu z Konta',
    subtitle: 'Narzędzie weryfikacji spójności między tym, co mówisz, a tym, jak żyjesz',
    objective: 'Wyłonienie 3 rdzennych wartości i dostosowanie do nich codziennego kalendarza oraz budżetu.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Redukcja dysonansu aksjologicznego poprzez świadome wyrównanie aktywności kory przedczołowej z decyzjami wykonawczymi.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie wartości deklarowanych',
        instruction: 'Wybierz z listy 5 wartości, które uważasz za najważniejsze w swoim życiu.',
        promptText: 'Moje deklarowane wartości:',
        placeholder: 'np. Zdrowie, Rodzina, Wolność, Twórczość, Rozwój'
      },
      {
        stepNumber: 2,
        title: 'Konfrontacja z kalendarzem z ostatniego tygodnia',
        instruction: 'Przeanalizuj, ile godzin w minionym tygodniu przeznaczyłeś na każdą z tych wartości.',
        promptText: 'Rzeczywisty czas przeznaczony w tygodniu:',
        placeholder: 'np. „Zdrowie: 1 godzina; Rodzina: 4 godziny; Praca/Telefon: 50 godzin”'
      },
      {
        stepNumber: 3,
        title: 'Korekta mikrodecyzyjna',
        instruction: 'Zdecyduj o jednej konkretnej zmianie w grafiku na przyszły tydzień, która przywróci spójność.',
        promptText: 'Moja mikrozmiana w kalendarzu:',
        placeholder: 'np. „Odpisuję od telefonu po 18:00 i przeznaczam 1 godzinę na spacer z bliskimi”'
      }
    ],
    reflectionQuestions: [
      'Jakie odczuwasz napięcie, gdy widzisz rozbieżność między deklaracjami a faktami?',
      'Co stoi na przeszkodzie, by Twoja najważniejsza wartość otrzymała więcej miejsca w Twoim życiu?'
    ]
  }
];

export const chapterTwenty: Chapter = {
  number: 20,
  volume: 3,
  volumeChapterNumber: 4,
  title: 'Rozdział 4: Wartości, Potrzeby i Priorytety',
  subtitle: 'Aksjologia decyzji, Teoria Samostanowienia SDT, konflikty wartości i sztuka budowania życiowego sensu',
  leadParagraph: 'Wartości i potrzeby stanowią najgłębszy system nawigacyjny człowieka. O ile procesy poznawcze dostarczają mapy, a samoocena wyznacza poczucie siły, o tyle wartości odpowiadają na pytanie: „Dokąd i po co właściwie idę?”. Niestety, w świecie pełnym zgiełku i agresywnego marketingu niezwykle łatwo pomylić własne rdzenne potrzeby z zapożyczonymi zachciankami i oczekiwaniami otoczenia. W tym rozdziale przyjrzymy się naukowej teorii samostanowienia (SDT), zbadamy kołowy model wartości Schwartza i nauczymy się rozwiązywać konflikty wartości tak, by żyć w głębokiej spójności i poczuciu autonomii.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-20-1',
      pageNumber: 1,
      sectionNumber: '20.1',
      title: 'Czym Są Wartości? Kompas vs Przystań Docelowa',
      category: 'wstep',
      readingTimeMinutes: 7,
      quote: {
        text: 'Nie wystarczy żyć, trzeba mieć coś, dla czego warto żyć.',
        author: 'Seneka'
      },
      paragraphs: [
        'Jednym z najczęstszych błędów w planowaniu życiowym jest mylenie wartości z celami. Cel jest punktem na mapie – można go osiągnąć, kupić lub zdobyć (np. „kupić dom”, „awansować”). Wartość jest sposobem podróżowania – wyznacza kierunek i jakość działania (np. „twórczość”, „troska”, „niezależność”).',
        'Gdy osiągniesz cel, musisz wyznaczyć nowy. Wartością żyjesz w każdej minucie. Jeżeli Twoją wartością jest troska o relacje, realizujesz ją w sposobie, w jaki parzysz herbatę bliskiej osobie i w jaki rozmawiasz z nią podczas kryzysu.'
      ]
    },
    {
      id: 'sec-20-2',
      pageNumber: 4,
      sectionNumber: '20.2',
      title: 'Teoria Samostanowienia (SDT) Deciego i Ryana: Trzy Filary Potrzeb',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Edward Deci i Richard Ryan udowodnili, że bez względu na kulturę i wiek, każdy człowiek potrzebuje do szczęścia zaspokojenia trzech podstawowych potrzeb psychicznych: Autonomii, Kompetencji i Powiązania (Relatedness).',
        'Jeśli pracujesz w miejscu, gdzie zarabiasz duże pieniądze, ale nie masz żadnego wpływu na swoje zadania (brak autonomii), czujesz się traktowany jak robót (brak kompetencji) i nie masz z kim porozmawiać (brak powiązania), powoli umierasz psychicznie.'
      ]
    },
    {
      id: 'sec-20-3',
      pageNumber: 7,
      sectionNumber: '20.3',
      title: 'Kołowy Model Wartości Shaloma Schwartza: Konflikty Aksjologiczne',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Shalom Schwartz wykazał, że wartości układają się w kołowy system zależności. Wartości leżące naprzeciwko siebie są w naturalnym konflikcie – np. Stymulacja i Hedonizm stoją w sprzeczności z Tradycją i Bezpieczeństwem.',
        'Nie da się żyć w maksymalnym natężeniu wszystkimi wartościami naraz. Dojrzałość polega na akceptacji faktu, że wybór wartości X w danym momencie życiowym wymaga zapłacenia kosztu w postaci odłożenia wartości Y.'
      ]
    },
    {
      id: 'sec-20-4',
      pageNumber: 10,
      sectionNumber: '20.4',
      title: 'Wartości Deklarowane vs Wartości Rzeczywiste (Values in Action)',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Wielu ludzi z zachwytem opowiada o tym, jak ważne jest dla nich zdrowie, rozwój i rodzina. Gdy jednak przeanalizujemy ich wyciąg z konta i grafik w kalendarzu, okazuje się, że 90% czasu i pieniędzy przeznaczają na pracę, telewizję i zakupy.',
        'Prawdziwe wartości to nie te, o których piszesz w CV – to te, na które realnie poświadczasz własnymi zasobami.'
      ]
    },
    {
      id: 'sec-20-5',
      pageNumber: 13,
      sectionNumber: '20.5',
      title: 'Dysonans Aksjologiczny i Cena Niespójności Życiowej',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Życie w sprzeczności z własnymi wartościami wywołuje przewlekły dysonans aksjologiczny. Objawia się on bezimiennym lękiem, bezsennością i brakiem satysfakcji mimo osiągania kolejnych sukcesów.',
        'Organizm wysyła sygnał: „Wygrywasz w grze, w którą wcale nie chciałeś grać”.'
      ]
    },
    {
      id: 'sec-20-6',
      pageNumber: 16,
      sectionNumber: '20.6',
      title: 'Hedonizm vs Eudajmonia: Od Dopaminowych Wyrzutów do Trwałego Sensu',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Współczesna kultura utożsamia szczęście z przyjemnością (hedonizmem). Tymczasem biochemia mózgu pokazuje jasną różnicę między dopaminowym szczytem nagrody a serotoninowym poczuciem spełnienia.',
        'Eudajmonia, czyli poczucie sensu wynikające z trudu włożonego w sprawy ważne, daje trwalszy dobrostan i zwiększa odporność na stres.'
      ]
    },
    {
      id: 'sec-20-7',
      pageNumber: 19,
      sectionNumber: '20.7',
      title: 'Motywacja Zintrojektowana: Gdy „Muszę” Zastępuje „Chcę”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Motywacja zintrojektowana opiera się na wewnętrznym szantażu emocjonalnym. Robisz coś nie dlatego, że widzisz w tym sens, ale po to, by uniknąć poczucia winy lub wstydu przed rodzicami czy otoczeniem.',
        'Przepięcie motywacji zintrojektowanej na motywację zintegrowaną („Robię to, bo to moja świadoma decyzja”) przywraca pełną energię.'
      ]
    },
    {
      id: 'sec-20-8',
      pageNumber: 22,
      sectionNumber: '20.8',
      title: 'Wartości Zapożyczone: Jak Nie Stać Się Ofiarą Cudzych Marzeń',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Media społecznościowe i reklamy nieustannie podsuwają nam wartości zapożyczone. Wmawiają nam, że musimy chcieć drogich podróży, luksusowych przedmiotów i ciągłego blichtru.',
        'Umiejętność zadania sobie pytania: „Czy ja tego naprawdę pragnę, czy po prostu nauczyłem się to podziwiać?” to fundament ochrony autonomii.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[0]
    },
    {
      id: 'sec-20-9',
      pageNumber: 25,
      sectionNumber: '20.9',
      title: 'Autonomia i Poczucie Wyboru w Świecie Presji',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Autonomia nie polega na braku jakichkolwiek zobowiązań. Polega na wolności wyboru zobowiązań, które chcemy podjąć.',
        'Gdy sam wybierasz trud i pracę nad projektem, nie czujesz się niewolnikiem – czujesz się twórcą.'
      ]
    },
    {
      id: 'sec-20-10',
      pageNumber: 28,
      sectionNumber: '20.10',
      title: 'Sztywność Aksjologiczna: Gdy Zasady Niszczą Relacje',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Wartości mają służyć życiu, a nie uderzać w innych ludzi. Sztywność aksjologiczna sprawia, że człowiek staje się dogmatykiem gotowym zniszczyć małżeństwo czy przyjaźń w imię „swojej zasady”.'
      ]
    },
    {
      id: 'sec-20-11',
      pageNumber: 31,
      sectionNumber: '20.11',
      title: 'Sztuka Ustalania Priorytetów: Macierz Aksjologiczna',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Ustalanie priorytetów wymaga odwagi odrzucenia rzeczy dobrych na rzecz rzeczy najważniejszych. Poniższa macierz pomaga uporządkować własne zaangażowanie.'
      ]
    },
    {
      id: 'sec-20-12',
      pageNumber: 34,
      sectionNumber: '20.12',
      title: 'Zmiana Priorytetów na Różnych Etapach Życia',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Hierarchia wartości nie jest dana raz na zawsze. To, co było najważniejsze w wieku 20 lat (stymulacja, przygoda), w wieku 40 lat może ustąpić miejsca stabilizacji i przekazywaniu wiedzy innym (generatywność).'
      ]
    },
    {
      id: 'sec-20-13',
      pageNumber: 37,
      sectionNumber: '18.13',
      title: '🧠 BŁĘDNA INTUICJA: „Dobre Życie Polega na Braku Wszelkich Konfliktów Wartości”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Wydaje się nam, że jeśli dobrze poukładamy wartości, nigdy nie doświadczymy trudnych wyborów ani smutku.',
        'CO MOŻE BYĆ BŁĘDNE? Konflikt wartości jest nieuniknionym elementem ludzkiej egzystencji. Wybór kariery może oznaczać mniej czasu dla domu; wybór stabilizacji może ograniczać przygodę.',
        'CO MÓWI PSYCHOLOGIA? Dojrzałość nie polega na braku konfliktów, lecz na zdolności do podejmowania świadomych decyzji i opłakania utraconych alternatyw bez poczucia winy.',
        'BARDZIEJ PRECYZYJNY MODEL: Akceptuj koszt swoich wyborów i bądź wierny wybranemu kierunkowi.'
      ]
    },
    {
      id: 'sec-20-14',
      pageNumber: 40,
      sectionNumber: '20.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Uniwersalność Wartości a Różnice Kulturowe',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'W jakim stopniu wartości są uniwersalne dla gatunku Homo sapiens, a w jakim są wyłącznie produktem danej kultury? Choć model Schwartza odnajduje podobne struktury na całym świecie, waga przypisywana indywidualizmowi vs kolektywizmowi różni się drastycznie między Wschodem a Zachodem.'
      ]
    },
    {
      id: 'sec-20-15',
      pageNumber: 43,
      sectionNumber: '20.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Klarowania Wartości',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Wybierz 3 rdzenne wartości z listy.',
        '2. Odrzuć pozostałe, nazywając je „wartościami drugorzędnymi”.',
        '3. Zrób audit kalendarza na jutro: czy przynajmniej 1 godzina jest bezpośrednim odbiciem Twojej rdzennej wartości?',
        '4. Odpowiedz „nie” na jedno zapytanie zewnętrzne, które narusza Twój priorytet.'
      ],
      exerciseRef: selfExercisesChapterTwenty[0]
    },
    {
      id: 'sec-20-16',
      pageNumber: 46,
      sectionNumber: '20.16',
      title: 'Most do Rozdziału 21 oraz Integracja z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Zrozumienie własnych wartości daje nam kryterium decyzyjne. Jednak aby stale monitorować, czy kroki, które podejmujemy, są naprawdę spójne z naszym kompasem, potrzebujemy wyższego poziomu kontroli umysłowej.',
        'W następnym rozdziale przejdziemy do szczytowego osiągnięcia ludzkiego poznania: Świadomości Siebie i Metapoznania. Zobaczysz, jak obserwować własne myśli, monitorować błędy i rozwijać trafną refleksyjność.'
      ]
    },
    {
      id: 'sec-20-17',
      pageNumber: 48,
      sectionNumber: '20.17',
      title: 'Interaktywny Symulator Konfliktu Wartości i Macierz Decyzyjna',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Przeanalizuj własne trudne wybory za pomocą interaktywnego symulatora konfliktu aksjologicznego.'
      ]
    },
    {
      id: 'sec-20-18',
      pageNumber: 50,
      sectionNumber: '20.18',
      title: 'Egzamin Końcowy Rozdziału 20: Wartości i Potrzeby',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Sprawdź swój poziom wiedzy z zakresu Teorii Samostanowienia, modelu Schwartza oraz rozwiązywania konfliktów aksjologicznych.'
      ]
    }
  ]
};

import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 19 (GLOBALNIE ROZDZIAŁ 35 W STRUKTURZE DZIEŁA)
 * TYTUŁ: KONFLIKT I ESKALACJA
 * PODTYTUŁ: Dlaczego mały problem może przerodzić się w konflikt dotyczący szacunku, kontroli, winy i tożsamości
 */

export const chapterThirtyFiveExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest kluczowa różnica między konfliktem interesów a konfliktem tożsamości?',
    topic: 'Poziomy Konfliktu',
    sectionRef: 'Sekcja 35.2 & 35.12',
    options: [
      { label: 'A', text: 'Konflikt interesów dotyczy podziału konkretnych, mierzalnych zasobów (czas, pieniądze, zadania), podczas gdy konflikt tożsamości dotyczy poczucia własnej wartości, szacunku, statusu i tego, kim jestem w oczach drugiego człowieka.', isCorrect: true },
      { label: 'B', text: 'Konflikt interesów zachodzi tylko w sądzie, a tożsamości w małżeństwie.', isCorrect: false },
      { label: 'C', text: 'Konflikt tożsamości można rozwiązać za pomocą przelewu bankowego.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy funkcjonalnej — każdy konflikt jest wyłącznie sporem o pieniądze.', isCorrect: false }
    ],
    explanation: 'Dopóki spór dotyczy zasobów (kto wyrzuca śmieci), istnieje pole do kompromisu technicznego. Gdy spór przekształca się w walkę o tożsamość („nie szanujesz mnie”, „zawsze mnie lekceważysz”), kompromis logistyczny przestaje działać, bo każda ustępliwość jest odbierana jako upokorzenie.',
    keyTakeaway: 'Dopóki kłócimy się o problem, szukamy rozwiązania; gdy zaczynamy walczyć o tożsamość, szukamy odwetu.'
  },
  {
    id: 2,
    question: 'Który z tzw. „Czterech Jeźdźców Apokalipsy” Johna Gottmana jest statystycznie najsilniejszym predyktorem rozpadu relacji?',
    topic: 'Badania Gottmana nad Konfliktem',
    sectionRef: 'Sekcja 35.21',
    options: [
      { label: 'A', text: 'POGARDA (Contempt) — okazywana poprzez sarkazm, przewracanie oczami, kpiny i stawianie się w pozycji moralnej wyższości.', isCorrect: true },
      { label: 'B', text: 'Krytyka zachowania.', isCorrect: false },
      { label: 'C', text: 'Podniesienie głosu o 5 decybeli.', isCorrect: false },
      { label: 'D', text: 'Pojawienie się odmiennych poglądów politycznych.', isCorrect: false }
    ],
    explanation: 'Badania laboratoryjne Gottmana w Love Lab wykazały, że pogarda jest kwasem niszczącym więź — atakuje godność partnera i wywołuje u niego przewlekły spadek odporności immunologicznej.',
    keyTakeaway: 'Krytyka mówi: „nie podoba mi się to, co zrobiłeś”; pogarda mówi: „jesteś czymś gorszym ode mnie”.'
  },
  {
    id: 3,
    question: 'Dlaczego używanie uogólnień typu „Ty zawsze...” i „Ty nigdy...” natychmiast uniemożliwia porozumienie?',
    topic: 'Język Konfliktu i Uogólnienia',
    sectionRef: 'Sekcja 35.10',
    options: [
      { label: 'A', text: 'Ponieważ odbiorca skupia całą energię poznawczą na znalezieniu choćby jednego wyjątku obalającego tezę, zamiast słuchać istoty problemu, a krytyka zostaje odebrana jako niesprawiedliwy zamach na cały obraz siebie.', isCorrect: true },
      { label: 'B', text: 'Ponieważ słowa te są zabronione przez kodeks karny.', isCorrect: false },
      { label: 'C', text: 'Ponieważ słowa te natychmiast usypiają rozmówcę.', isCorrect: false },
      { label: 'D', text: 'Działa to wyłącznie w języku polskim, w innych językach ułatwia ugodę.', isCorrect: false }
    ],
    explanation: 'Uogólnienie („zawsze się spóźniasz”) zamienia pojedynczy fakt w etykietę tożsamościową. Umysł partnera natychmiast przypomina sobie sytuację sprzed trzech tygodni, gdy przyszedł na czas, i przechodzi do kontrataku prawnego.',
    keyTakeaway: 'Słowa „zawsze” i „nigdy” zamieniają rozmowę o potrzebach w proces sądowy.'
  },
  {
    id: 4,
    question: 'Czym w ujęciu fizjologicznym jest zjawisko „Zalania Emocjonalnego” (Flooding / Diffuse Physiological Arousal)?',
    topic: 'Fizjologia Eskalacji',
    sectionRef: 'Sekcja 35.14 & 35.21',
    options: [
      { label: 'A', text: 'Stanem pobudzenia współczulnego, w którym tętno przekracza ~100 bpm, kora przedczołowa traci zdolność przetwarzania niuansów, a organizm przełącza się w prymitywny tryb walki, ucieczki lub zamrożenia.', isCorrect: true },
      { label: 'B', text: 'Płaceniem rachunków przez internet.', isCorrect: false },
      { label: 'C', text: 'Wypiciem zbyt dużej ilości wody mineralnej przed kłótnią.', isCorrect: false },
      { label: 'D', text: 'Całkowitym brakiem jakichkolwiek reakcji somatycznych.', isCorrect: false }
    ],
    explanation: 'W stanie zalania fizjologicznego dalsza dyskusja jest bezcelowa — układ nerwowy nie jest w stanie rejestrować argumentów logicznych, a każde słowo partnera jest przetwarzane przez ciało migdałowate jako atak fizyczny.',
    keyTakeaway: 'Gdy tętno przekracza 100 uderzeń na minutę, nie rozwiązujesz problemu — walczysz o przetrwanie biologiczne.'
  },
  {
    id: 5,
    question: 'Jaka jest kluczowa cecha konfliktu, który NIE eskaluje, w porównaniu z konfliktem niszczącym relację?',
    topic: 'Deeskalacja i Odporność Relacyjna',
    sectionRef: 'Sekcja 35.22 & 35.23',
    options: [
      { label: 'A', text: 'Zdolność do wysyłania i przyjmowania „prób naprawczych” (Repair Attempts) oraz utrzymanie rozróżnienia między problemem a wartością człowieka.', isCorrect: true },
      { label: 'B', text: 'Całkowity brak jakichkolwiek różnic zdań przez 50 lat.', isCorrect: false },
      { label: 'C', text: 'Zgadzanie się na wszystko, czego żąda silniejsza strona.', isCorrect: false },
      { label: 'D', text: 'Udawanie, że problem sam zniknie po zaśnięciu.', isCorrect: false }
    ],
    explanation: 'Zdrowe pary nie kłócą się mniej — one kłócą się inaczej. Potrafią zauważyć uśmiech, przeprosiny lub pauzę (próbę naprawczą) w trakcie sporu i nie dopuszczają do tego, by złość przekształciła się w pogardę.',
    keyTakeaway: 'O sile relacji decyduje nie brak kłótni, lecz prędkość i jakość powrotu do wzajemnego szacunku.'
  }
];

export const chapterThirtyFiveCaseStudies: CaseStudy[] = [
  {
    id: 'cs-35-kamil-magda-naczynia',
    title: 'Studium Przypadku: Brudna Patelnia i Walka o Władzę — Kamil i Magda',
    subtitle: 'Jak 10 sekund niezmytej patelni doprowadziło do 48 godzin wojny domowej i groźby rozstania',
    protagonist: 'Kamil (32 lata, analityk) i Magda (31 lat, architektka wnętrz)',
    context: 'Cztery lata małżeństwa, wspólne mieszkanie na kredyt, przewlekłe zmęczenie pracą zawodową.',
    story: [
      'ETAP I — BODZIEC MATERIALNY: We wtorek o 18:45 Magda wchodzi do kuchni po 9 godzinach pracy na budowie. W zlewie leży patelnia po jajecznicy, którą Kamil zostawił rano.',
      'ETAP II — INTERPRETACJA ZMĘCZONEGO UMYSŁU: Magda nie widzi patelni jako kawałka teflonu. W jej głowie pojawia się myśl: „Dla niego jestem sprzątaczką. On uważa, że mój czas jest mniej warty niż jego. Znowu to zrobił”.',
      'ETAP III — ATAK UOGÓLNIONY: Magda wchodzi do pokoju Kamila i rzuca: „Czy ty chociaż raz w życiu mógłbyś po sobie zmyć? Zawsze muszę po tobie sprzątać, jesteś kompletnie niedojrzały!”.',
      'ETAP IV — OBRONA TOŻSAMOŚCI KAMILA: Kamil słyszy słowa „zawsze” i „niedojrzały”. Jego mózg natychmiast przypomina sobie, że wczoraj wyniósł śmieci i naprawił zmywarkę. Czuje gwałtowny impuls niesprawiedliwości: „Ja nic nie robię?! A kto wczoraj wymieniał syfon? Ty jesteś wiecznie niezadowolona, nikt by z tobą nie wytrzymał!”.',
      'ETAP V — PRZEJŚCIE W POGARDĘ: Magda prycha, przewraca oczami i mówi z jadem: „Och, bohater! Syfon wymienił raz na pięć lat! Gratuluję, chcesz medal?”.',
      'ETAP VI — ZALANIE FIZJOLOGICZNE I ZAMROŻENIE: Tętno Kamila osiąga 125 bpm. Czuje gorąco w uszach. Trzaska drzwiami sypialni. Przez kolejne dwa dni nie odzywają się do siebie słowem, a patelnia leży w zlewie jako pomnik wojenny.'
    ],
    dialogue: [
      { speaker: 'Magda', text: 'Zawsze muszę po tobie sprzątać! Jesteś jak małe dziecko!', subtext: 'Zmęczenie, poczucie bycia nieważną, atak na tożsamość partnera.' },
      { speaker: 'Kamil', text: 'A ty jesteś toksyczną furiatką, której nic nigdy nie pasuje!', subtext: 'Obrona urażonej godności poprzez kontratak i poniżenie drugiej strony.' }
    ],
    decisionTaken: 'Zamiast deeskalacji oboje wybrali walkę o udowodnienie, kto ma większą rację i kto jest większą „ofiarą”.',
    whatProtagonistSaw: 'Magda widziała egoistę, który nią gardzi. Kamil widział tyrankę, która czeka na najmniejszy błąd.',
    whatWasMissed: 'Oboje byli wyczerpani pracą i zamiast poprosić o wsparcie i przytulenie, użyli patelni jako pretekstu do wylania frustracji egzystencjalnej.',
    psychologicalAnalysis: {
      coreMechanism: 'Eskalacja symetryczna: przejście od sporu o zadanie do ataku na tożsamość z użyciem uogólnień i pogardy.',
      cognitiveBiases: [
        { name: 'Podstawowy błąd atrybucji', description: 'Magda wyjaśnia zachowanie Kamila jego „niedojrzałością”, ignorując, że rano dzwonił do niego prezes z awarią.', impact: 'Eskalacja wrogości.' },
        { name: 'Selektywna pamięć potwierdzająca', description: 'Kamil pamięta tylko swoje zasługi, a Magda tylko jego zaniedbania.', impact: 'Brak wspólnej bazy faktów.' }
      ],
      defenseMechanisms: [
        { name: 'Projekcja winy i dewaluacja', explanation: 'Oboje chronią kruche poczucie wartości poprzez poniżenie partnera.' }
      ],
      emotionalDynamic: 'Od zmęczenia przez gniew i zranienie aż po toksyczny chłód i ciche dni.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Układ limbiczny (Ciało migdałowate)', role: 'Wzbudzenie alarmu „zagrożenie tożsamości”', activationState: 'Ekstremalna' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Blokada racjonalnego myślenia i empatii', activationState: 'Zablokowana przez wyrzut katecholamin' }
      ],
      neurotransmitters: [
        { name: 'Adrenalina i Noradrenalina', roleInScenario: 'Skok tętna do 125 bpm, fizjologiczne zalanie emocjonalne.' }
      ],
      biologicalTimeline: [
        { timeMs: '18:45 Widok zlewu', process: 'Błyskawiczna interpretacja -> wyrzut adrenaliny.' },
        { timeMs: '18:48 Wybuch słowny', process: 'Pogarda -> tachykardia u obojga -> załamanie komunikacji.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Ciche dni (Stonewalling)', description: 'Używanie milczenia jako kary emocjonalnej.', vulnerabilityExploited: 'Lęk przed odrzuceniem i samotnością.' }
      ],
      counterMeasures: [
        { step: 'Przerwanie zalania fizjologicznego', script: '„Jestem zbyt wzburzony, by rozmawiać mądrze. Moje tętno szaleje. Robimy 20 minut przerwy, idę na spacer i wrócę o 19:15”.', rationale: 'Pozwala wygasić poziom kortyzolu i przywraca sprawność korze mózgowej.' }
      ]
    },
    keyTakeaway: 'Nigdy nie rozwiązuj konfliktu w stanie zalania fizjologicznego. Gdy w ciele wyje syrena alarmowa, każde słowo będzie pociskiem.'
  }
];

export const chapterThirtyFiveSelfExercises: SelfExercise[] = [
  {
    id: 'ex-35-1-dekonstrukcja-zawsze',
    title: 'Ćwiczenie: Oczyszczanie Języka Konfliktu — Likwidacja „Zawsze” i „Nigdy”',
    subtitle: 'Przekład toksycznych uogólnień na konkretne fakty i prośby',
    objective: 'Wykształcenie nawyku operowania na konkretnych obserwacjach zamiast etykietach tożsamościowych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Zastąpienie uogólnień precyzyjnym opisem faktów zmniejsza aktywację ciała migdałowatego u odbiorcy, zapobiegając odruchowej obronie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zidentyfikowanie własnego zdania-pocisku',
        instruction: 'Przypomnij sobie oskarżenie, które rzucasz w złości (np. „Nigdy mnie nie słuchasz!”, „Zawsze musisz mieć rację!”).',
        promptText: 'Moje typowe uogólnienie w kłótni:',
        placeholder: '„Zawsze siedzisz w telefonie, gdy do ciebie mówię!”...'
      },
      {
        stepNumber: 2,
        title: 'Przekład na nagie fakty (Kamera wideo)',
        instruction: 'Opisz dokładnie jedno konkretne wydarzenie bez słów „zawsze/nigdy”.',
        promptText: 'Konkretny fakt:',
        placeholder: '„Wczoraj podczas kolacji spojrzałeś w telefon trzy razy w trakcie gdy opowiadałem o pracy”...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie bezbronnej prośby',
        instruction: 'Nazwij swoją potrzebę zamiast oceniać charakter partnera.',
        promptText: 'Czysta prośba:',
        placeholder: '„Zależy mi na twojej uwadze. Czy możemy odłożyć telefony na te 20 minut kolacji?”...'
      }
    ],
    reflectionQuestions: [
      'O ile łatwiej jest partnerowi przyjąć prośbę niż obronić się przed oskarżeniem?',
      'Co czujesz w ciele, gdy rezygnujesz z wyższości moralnej na rzecz prostej prośby?'
    ]
  }
];

export const chapterThirtyFive: Chapter = {
  number: 35,
  volume: 3,
  volumeChapterNumber: 19,
  title: 'Konflikt i Eskalacja',
  subtitle: 'Dlaczego mały problem może przerodzić się w konflikt dotyczący szacunku, kontroli, winy i tożsamości',
  leadParagraph: 'Konflikt nie jest dowodem na to, że relacja jest pomyłką. Jest nieuchronnym skutkiem zderzenia dwóch odrębnych światów psychicznych, różnych potrzeb i odmiennych historii życia. Dlaczego jednak nieporozumienie wokół brudnej patelni, spóźnionego przelewu czy nieodebranego telefonu potrafi w kilka minut przekształcić się w wojnę o szacunek, dominację i własną godność? W tym rozdziale analizujemy mechanizmy eskalacji, anatomię przypisywania intencji, fizjologię zalania emocjonalnego oraz sztukę deeskalacji, która chroni więź.',
  totalEstimatedPages: 64,
  sections: [
    // 35.1
    {
      id: 'sec-35-1',
      pageNumber: 2370,
      sectionNumber: '35.1',
      title: 'Czym jest konflikt? Różnica zdań, interesów, potrzeb a rzeczywisty konflikt',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Wielu ludzi żyje w naiwnym przekonaniu, że idealny związek, idealny zespół czy idealna przyjaźń to przestrzeń wolna od jakichkolwiek spięć. Takie przekonanie jest niebezpieczną iluzją. Brak jakiegokolwiek konfliktu w wieloletniej relacji rzadko oznacza głęboką harmonię — najczęściej świadczy o paraliżującym lęku przed konfrontacją, uległości jednej ze stron lub emocjonalnym zamrożeniu.',
        'Aby mądrze zarządzać napięciem, musimy precyzyjnie rozróżnić poziomy trudności relacyjnej:',
        '1. RÓŻNICA ZDAŃ: Dotyczy odmiennych opinii poznawczych (np. „Ja wolę góry, ty wolisz morze”). Nie wymaga kompromisu, o ile nie wymusza wspólnego działania.\n2. RÓŻNICA INTERESÓW: Dotyczy sytuacji, w której wybór jednej opcji ogranicza zasoby drugiej strony (np. „Mamy 5000 zł: czy wydajemy je na remont łazienki, czy na kurs językowy?”).\n3. RZECZYWISTY KONFLIKT (Conflict): Powstaje wtedy, gdy strony postrzegają swoje cele jako wzajemnie wykluczające się, a zachowanie partnera jest interpretowane jako świadome blokowanie moich potrzeb lub brak szacunku dla moich granic.'
      ]
    },

    // 35.2
    {
      id: 'sec-35-2',
      pageNumber: 2382,
      sectionNumber: '35.2',
      title: 'Konflikt interesów: Kiedy cele dwóch osób rzeczywiście się wykluczają',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W klasycznej teorii negocjacji (Fisher, Ury — Szkoła Harvarda) konflikt interesów jest sporem o zasoby policzalne: czas, przestrzeń, pieniądze, podział obowiązków domowych.',
        'W konflikcie interesów istnieje obiektywny problem decyzyjny. Obie strony mogą mieć w 100% racjonalne argumenty. Jeśli rodzice mają jeden samochód, a oboje muszą być o 8:00 rano na przeciwległych krańcach miasta — mamy do czynienia z twardym dylematem logistycznym.',
        'Klucz do rozwiązania konfliktu interesów tkwi w odróżnieniu STANOWISK od POTRZEB. Stanowisko brzmi: „Samochód ma być mój”. Potrzeba brzmi: „Muszę dowieźć bezpiecznie dziecko do szpitala na rehabilitację”. Dopóki negocjujemy stanowiska — tkwimy w impasie. Gdy odkrywamy potrzeby — pojawia się przestrzeń na taksówkę, pomoc sąsiada czy przesunięcie grafiku.'
      ]
    },

    // 35.3
    {
      id: 'sec-35-3',
      pageNumber: 2395,
      sectionNumber: '35.3',
      title: 'Konflikt potrzeb: Kiedy źródłem napięcia są odmienne rytmy psychobiologiczne',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Znacznie głębszy od sporu o pieniądze jest konflikt potrzeb. Dotyczy on фундаментальных dyspozycji psychofizycznych człowieka:',
        '- Potrzeba stymulacji vs potrzeba ciszy (introwersja vs ekstrawersja),\n- Potrzeba przewidywalności vs potrzeba spontaniczności,\n- Potrzeba czułości fizycznej vs potrzeba nienaruszalności cielesnej.',
        'Tragedia polega na tym, że partnerzy często moralizują te różnice: „Ty jesteś nudny domator!”, „A ty jesteś wiecznie rozbiegana i płytka!”. Potrzeba biologiczna nie jest kaprysem — jest parametrem układu nerwowego. Dojrzały dialog nie polega na zmuszaniu sowy, by stała się skowronkiem, lecz na architekturze bezpiecznego współistnienia dwóch odmiennych chronotypów.'
      ]
    },

    // 35.4
    {
      id: 'sec-35-4',
      pageNumber: 2408,
      sectionNumber: '35.4',
      title: 'Konflikt wartości: Spory o sprawiedliwość, lojalność, odpowiedzialność i zasady',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Konflikt wartości jest najtrudniejszym rodzajem sporu interpersonalnego, ponieważ dotyczy fundamentów etycznych i moralnych, na których człowiek buduje swoje poczucie sensu.',
        'Przykłady: Co jest ważniejsze w kryzysie rodziny: bezwzględna lojalność wobec rodziców czy autonomia własnego małżeństwa? Jak wychowywać dzieci: w dyscyplinie i surowych wymaganiach czy w wolności i bezwarunkowej akceptacji?',
        'Wartości nie podlegają prostemu targowaniu się („Dziś ty jesteś uczciwy w 50%, a jutro ja w 50%”). Próba wymuszenia na partnerze zdrady jego fundamentalnych wartości rodzi głęboką urazę i poczucie gwałtu psychicznego. W tym obszarze rozwiązaniem rzadko bywa unifikacja — częściej jest nim głęboki, pełen szacunku kompromis granic.'
      ]
    },

    // 35.5
    {
      id: 'sec-35-5',
      pageNumber: 2420,
      sectionNumber: '35.5',
      title: 'Konflikt interpretacji: To samo wydarzenie, dwa skrajnie odmienne znaczenia',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Większość awantur domowych i biurowych nie dotyczy faktów. Wszyscy zgadzają się co do tego, co zaszło: „Rachunek nie został opłacony na czas”. Wojna toczy się o ZNACZENIE tego faktu.',
        'Dla osoby A nieopłacony rachunek to: „Drobne przeoczenie w zabieganym tygodniu, nic się nie stało, zapłacę jutro z odsetkami 1,50 zł”.\nDla osoby B nieopłacony rachunek to: „Brak odpowiedzialności za nasze wspólne bezpieczeństwo, dowód na to, że nie można na tobie polegać, znowu muszę myśleć za dwoje”.',
        'Zauważmy: Osoba B nie kłóci się o 1,50 zł odsetek. Kłóci się o lęk przed katastrofą finansową, który nosi w sobie od dzieciństwa.'
      ]
    },

    // 35.6
    {
      id: 'sec-35-6',
      pageNumber: 2432,
      sectionNumber: '35.6',
      title: 'Historia: „Kto miał to zrobić?” — Mały problem, który rozpala pożar',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Piątek, godzina 17:00. Aneta i Robert wracają z pracy. Mieli wspólnie odebrać paczkę z paczkomatu — przesyłkę z sukienką na wesele siostry Anety, które odbywa się w sobotę rano.',
        'Przed blokiem okazuje się, że kod odbioru wygasł 2 godziny temu, a paczka wróciła do oddziału centralnego oddalonego o 40 km. Sukienka przepadła.',
        'W samochodzie zapada grobowa cisza, po czym następuje wymiana zdań, która w ciągu 180 sekund przekształca się w brutalną wiwisekcję całego siedmioletniego związku.',
        'Przeanalizujmy, co wydarzyło się naprawdę w poniższym module analitycznym.'
      ],
      interactiveWindowRef: {
        id: 'iw-35-6-co-sie-stalo',
        type: 'what_we_know',
        title: 'Co wydarzyło się naprawdę? — Sprawa wygasłego kodu',
        subtitle: 'Rozplątywanie faktów, zaniedbań i nadinterpretacji w zarodku awantury',
        context: 'Paczka z sukienką wróciła do magazynu. Aneta krzyczy: „Zrobiłeś to specjalnie, żeby mnie upokorzyć przed moją rodziną!”.',
        whatWeKnow: {
          items: [
            {
              id: 'c35-item-1',
              statement: 'Kod do paczkomatu wygasł o 15:00 z powodu upływu 48 godzin od umieszczenia w skrytce.',
              category: 'fakt',
              explanation: 'Obiektywny proces automatyczny systemu logistycznego.'
            },
            {
              id: 'c35-item-2',
              statement: 'Robert otrzymał SMS-a o 14:00, ale był w trakcie prezentacji dla klienta i zapomniał przekazać go Anecie.',
              category: 'fakt',
              explanation: 'Rzeczywisty błąd ludzki wynikający z przeciążenia poznawczego.'
            },
            {
              id: 'c35-item-3',
              statement: 'Robert sabotował odbiór paczki, ponieważ podświadomie nie znosi rodziny Anety i chciał popsuć jej wyjazd.',
              category: 'interpretacja',
              explanation: 'Klasyczna nadinterpretacja motywu — zamiana błędu operacyjnego na spisek psychologiczny.'
            },
            {
              id: 'c35-item-4',
              statement: 'Gdyby Aneta sama monitorowała status przesyłki w aplikacji sklepu, paczkę można było odebrać w czwartek.',
              category: 'hipoteza',
              explanation: 'Hipoteza pokazująca współodpowiedzialność za proces organizacyjny.'
            }
          ]
        },
        takeaway: 'Przypisanie partnerowi złośliwej intencji („zrobiłeś to specjalnie”) natychmiast blokuje szukanie rozwiązania awaryjnego i zamienia problem w wojnę.'
      }
    },

    // 35.7
    {
      id: 'sec-35-7',
      pageNumber: 2445,
      sectionNumber: '35.7',
      title: 'Pierwsza interpretacja intencji: Moment, w którym zachowanie zostaje uznane za celowe',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W każdym eskalującym konflikcie istnieje precyzyjny punkt zwrotny (Tipping Point). Jest to moment, w którym jedna ze stron przestaje postrzegać błąd partnera jako wypadek, a zaczyna widzieć w nim CELOWE DZIAŁANIE.',
        'Z punktu widzenia neurobiologii społecznej to krytyczna cezura. Kiedy uznajemy, że ktoś popełnił błąd przez nieuwagę, w naszym mózgu aktywuje się sieć empatii i gotowość do pomocy. Kiedy jednak uznamy, że ktoś zrobił to „specjalnie, by mi dokuczyć” — sieć empatii zostaje natychmiast wyłączona, a stery przejmuje obwód wrogości i odwetu.',
        'Większość ludzi nie robi rzeczy „przeciwko nam”. Ludzie robią rzeczy DLA SIEBIE, ze swojego zmęczenia, ze swojego roztargnienia lub ze swojego lęku. Mylenie czyjejś nieporadności ze złośliwością to najpowszechniejszy błąd relacyjny.'
      ]
    },

    // 35.8
    {
      id: 'sec-35-8',
      pageNumber: 2458,
      sectionNumber: '35.8',
      title: 'Dlaczego przypisujemy innym intencje? Podstawowy błąd atrybucji w relacjach',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Zjawisko to zostało szczegółowo opisane przez Lee Rossa jako PODSTAWOWY BŁĄD ATRYBUCJI (Fundamental Attribution Error):',
        'Kiedy JA popełniam błąd (np. spóźnię się na spotkanie), wyjaśniam to CZYNNIKAMI SYTUACYJNYMI: „Był potworny korek, wypadek na moście, szef mnie zatrzymał”. Moja tożsamość pozostaje czysta.\nKiedy PARTNER popełnia dokładnie ten sam błąd (spóźnia się 15 minut), wyjaśniam to CZYNNIKAMI DYSPOSYCYJNYMI: „On jest nielojalny, lekceważący, leniwy i ma mnie gdzieś”.',
        'W relacjach intymnych podstawowy błąd atrybucji ulega zwielokrotnieniu pod wpływem przewlekłego zmęczenia. Im mniej mamy energii biologicznej, tym szybciej nasz mózg rezygnuje ze sprawdzania kontekstu i przypisuje partnerowi wady charakteru.'
      ]
    },

    // 35.9
    {
      id: 'sec-35-9',
      pageNumber: 2470,
      sectionNumber: '35.9',
      title: 'Od problemu do osoby: Przesunięcie wektora krytyki i narodziny pogardy',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Eskalacja konfliktu zawsze postępuje według określonej trajektorii językowej:',
        'KROK 1: Sprawa zadaniowa: „Nie zamknąłeś okna i napadał deszcz”.\nKROK 2: Zarzut nawyku: „Ciągle zapominasz o zamykaniu okien”.\nKROK 3: Etykieta tożsamościowa: „Jesteś nieodpowiedzialnym facetem”.\nKROK 4: Atak egzystencjalny: „Żałuję, że za ciebie wyszłam, zniszczyłeś mi życie”.',
        'W momencie, gdy krytyka przesuwa się z zachowania na tożsamość, partner nie ma już możliwości naprawienia błędu. Nie może „od-być” swojego charakteru. Pozostaje mu jedynie ucieczka lub brutalny kontratak.'
      ]
    },

    // 35.10
    {
      id: 'sec-35-10',
      pageNumber: 2482,
      sectionNumber: '35.10',
      title: '„Ty zawsze” i „ty nigdy”: Semantyczne pułapki eskalacji',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Słowa „zawsze” i „nigdy” to granaty wrzucane do rozmowy. Działają jak fałszywe kwantyfikatory wielkie. Poniższy moduł analityczny pokazuje, jak zamiana problemu w etykietę paraliżuje porozumienie.'
      ],
      interactiveWindowRef: {
        id: 'iw-35-10-problem-etykieta',
        type: 'counter_case',
        title: 'Problem czy Etykieta? — Anatomia zdania-pocisku',
        subtitle: 'Jak zamiana słów zmienia reakcję układu nerwowego partnera',
        context: 'Robert zapomniał kupić chleba wracając z pracy. Aneta stoi w kuchni.',
        counterCase: {
          standardTheory: 'Trzeba otwarcie mówić o swoich emocjach i nazywać rzeczy po imieniu, np.: „Zawsze o wszystkim zapominasz, jesteś beznadziejny!”.',
          counterExample: 'Wypowiedzenie tego zdania natychmiast aktywuje u Roberta pień mózgu i reakcję obronną. Robert zamiast przeprosić, wyciąga paragon z wczorajszych zakupów i krzyczy: „A wczoraj kto kupił mleko?! Kłamiesz!”. Rozmowa o chlebie zamienia się w proces o prawdomówność.',
          whyItDefiesRule: 'Mówienie „prosto z mostu” z użyciem etykiet tożsamościowych nie jest szczerością — jest przemocą werbalną, która uniemożliwia realizację celu.',
          deeperLesson: 'Skuteczna komunikacja wymaga oddzielenia konkretnego braku (brak chleba) od globalnej oceny wartości człowieka.'
        },
        takeaway: 'Chcesz mieć rację czy chcesz mieć chleb i dobrą relację? Wybór należy do Ciebie.'
      }
    },

    // 35.11
    {
      id: 'sec-35-11',
      pageNumber: 2495,
      sectionNumber: '35.11',
      title: 'Historia: „To nie chodzi już o naczynia” — Gdy stawką staje się szacunek',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Wróćmy do Kamila i Magdy z naszego studium przypadku. Gdy Magda rzuciła patelnię do zlewu, w ich salonie nie toczyła się dyskusja o zasadach zmywania naczyń teflonowych.',
        'Prawdziwy dialog podtekstowy brzmiał tak:\nMagda: „Czy jestem dla ciebie ważna? Czy widzisz, jak bardzo jestem zmęczona? Czy muszę prosić o podstawowe rzeczy, żebyś zauważył moje istnienie?”.\nKamil: „Czy cokolwiek, co robię, ma dla ciebie wartość? Czy zawsze będę dla ciebie nieudacznikiem? Czy w tym domu mam prawo do błędu bez utraty twojego szacunku?”.',
        'Ponieważ żadne z nich nie miało odwagi nazwać swojego podtekstu, oboje chwycili za broń pancerną: Magda za pogardę, Kamil za trzaśnięcie drzwiami.'
      ]
    },

    // 35.12
    {
      id: 'sec-35-12',
      pageNumber: 2508,
      sectionNumber: '35.12',
      title: 'Obrona obrazu siebie: Dlaczego krytyka zachowania bywa odbierana jako zamach na tożsamość',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Ludzki mózg chroni spójność własnego obrazu siebie (Self-Concept) z taką samą zaciętością, z jaką układ odpornościowy zwalcza wirusy. Każdy z nas potrzebuje wierzyć, że jest człowiekiem przyzwoitym, kompetentnym i godnym miłości.',
        'Gdy bliska osoba mówi: „Zachowałeś się egoistycznie”, kora przedczołowa odbiera to jako zagrożenie egzystencjalne: „Jeśli przyznam jej rację, to znaczy, że jestem złym człowiekiem”.',
        'Aby uciec przed tym dysonansem poznawczym, człowiek natychmiast uruchamia mechanizmy obronne: wyparcie, racjonalizację („Musiałem tak zrobić!”) lub przerzucenie winy („To twoja wina, bo mnie sprowokowałaś!”).'
      ]
    },

    // 35.13
    {
      id: 'sec-35-13',
      pageNumber: 2520,
      sectionNumber: '35.13',
      title: 'Atak jako forma obrony: Agresja napędzana poczuciem bezradności',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Większość agresji w relacjach intymnych nie jest atakiem drapieżnika — jest paniką zranionego zwierzęcia zapędzonego w kozi róg. Kiedy człowiek czuje, że traci kontrolę, że jego argumenty są ignorowane, a jego godność deptana, poziom bezradności przekracza próg tolerancji.',
        'Wtedy z pnia mózgu wystrzeliwuje pierwotna reakcja WALKI: krzyk, złośliwe docinki, wyciąganie wstydliwych tajemnic partnera, uderzenie w najczulszy punkt („Jesteś dokładnie taki jak twój ojciec!”).',
        'Ta agresja nie jest dowodem siły. Jest krzykiem skrajnej słabości i braku narzędzi regulacyjnych.'
      ]
    },

    // 35.14
    {
      id: 'sec-35-14',
      pageNumber: 2532,
      sectionNumber: '35.14',
      title: 'Eskalacja wzajemna: Reakcja staje się bodźcem — Sprzężenie zwrotne dodatnie',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Eskalacja konfliktu jest zjawiskiem czysto systemowym opartym na SPRZĘŻENIU ZWROTNYM DODATNIM (Positive Feedback Loop):',
        'Bodziec A wywołuje reakcję B. Reakcja B jest o 10% silniejsza od bodźca A. W tym momencie reakcja B staje się nowym bodźcem dla osoby A, która odpowiada reakcją C (kolejne 10% głośniej). W ciągu czterech wymian poziom decybeli i wrogości podwaja się.',
        'Nikt nie kontroluje procesu. Uczestnicy stają się marionetkami dynamiki eskalacyjnej. Każdy z nich ma poczucie, że jedynie „odpowiada na atak drugiego”, co tworzy złudzenie całkowitej niewinności po obu stronach.'
      ]
    },

    // 35.15
    {
      id: 'sec-35-15',
      pageNumber: 2545,
      sectionNumber: '35.15',
      title: 'Pętla konfliktu: Gdzie naprawdę rozpoczęła się eskalacja?',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Gdy pytamy skłóconą parę: „Kto zaczął?”, każde z nich wskazuje inny punkt w czasie. Magda mówi: „Kamil, bo zostawił patelnię”. Kamil mówi: „Magda, bo weszła z krzykiem”.',
        'Prawda jest taka, że w pętli cyklicznej pojęcie „początku” jest iluzją poznawczą wynikającą z arbitralnej punktacji sekwencji zdarzeń (Watzlawick). Poniższy moduł pozwala zlokalizować ukryte ogniwa pętli.'
      ],
      interactiveWindowRef: {
        id: 'iw-35-15-petla-eskalacji',
        type: 'loop',
        title: 'Pętla Eskalacji Konfliktu — Od bodźca do zamrożenia',
        subtitle: 'Cztery fazy pożaru relacyjnego',
        context: 'Typowy cykl awantury małżeńskiej o drobiazg organizacyjny.',
        loopSteps: [
          {
            step: 1,
            title: 'Wyzwalacz z interpretacją',
            actor: 'Strona A',
            action: 'Wytknięcie błędu z użyciem oskarżenia: „Znowu nie zrobiłeś X!”.',
            interpretationByOther: '„Ona mnie atakuje i nie szanuje moich wysiłków”.',
            emotionalTrigger: 'Ukłucie poczucia winy zamienione w złość u Strony B.',
            counterAction: 'Kontratak obronny z wyciągnięciem win Strony A.'
          },
          {
            step: 2,
            title: 'Licytacja krzywd',
            actor: 'Strona B',
            action: '„A ty w zeszłym tygodniu zapomniałaś o Y! Kto tu jest gorszy?!”.',
            interpretationByOther: '„On w ogóle nie słucha mojego bólu, tylko odwraca kota ogonem”.',
            emotionalTrigger: 'Wzrost bezradności i poczucia osamotnienia u Strony A.',
            counterAction: 'Przejście do pogardy, sarkazmu i kpin.'
          },
          {
            step: 3,
            title: 'Uderzenie tożsamościowe',
            actor: 'Strona A',
            action: 'Złośliwy śmiech, przewracanie oczami, cios poniżej pasa.',
            interpretationByOther: '„Ona mną gardzi, dalsza rozmowa grozi utratą godności”.',
            emotionalTrigger: 'Zalanie fizjologiczne (tętno >110 bpm) u Strony B.',
            counterAction: 'Trzaśnięcie drzwiami lub kamienny chłód (Stonewalling).'
          },
          {
            step: 4,
            title: 'Ciche dni i inkubacja urazy',
            actor: 'Oboje',
            action: 'Milczenie przez 48 godzin, spanie pod osobnymi kołdrami.',
            interpretationByOther: '„Ten związek to fikcja, jesteśmy dla siebie obcymi ludźmi”.',
            emotionalTrigger: 'Przewlekły stres i obniżenie nastroju.',
            counterAction: 'Kolejny drobiazg za tydzień odpali pętlę ze zdwojoną siłą.'
          }
        ],
        takeaway: 'Eskalacji nie zatrzymuje ten, kto ma większą rację, lecz ten, kto pierwszy ma odwagę przerwać łańcuch odwetu.'
      }
    },

    // 35.16
    {
      id: 'sec-35-16',
      pageNumber: 2560,
      sectionNumber: '35.16',
      title: 'Historia wieloetapowa: Konflikt narastający przez miesiące — Niewidzialny dług urazy',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Wojciech i Monika nie kłócili się przez pierwsze trzy lata małżeństwa. W ich domu panował tzw. „święty spokój”. Monika uważała, że dobra żona nie powinna robić problemów, więc gdy Wojciech zapominał o rocznicach czy spędzał weekendy przy konsoli, uśmiechała się i mówiła: „Nic się nie stało”.',
        'Co działo się z jej emocjami? Nic nie ginęło w przyrodzie. Każde niewypowiedziane rozczarowanie odkładało się w psychice Moniki jak toksyczny osad w rurach. Nazywamy to NIEWIDZIALNYM DŁUGIEM URAZY.',
        'W czwartym roku Wojciech kupił w markecie złą markę masła. Monika spojrzała na kostkę masła, wzięła nóż kuchenny, wbiła go w stół i zaczęła krzyczeć tak strasznym głosem, że sąsiedzi wezwali policję. Wojciech był w szoku: „Oszalała z powodu masła!”. Nie rozumiał, że nóż nie był za masło. Był za trzy lata tłumionego upokorzenia.'
      ]
    },

    // 35.17
    {
      id: 'sec-35-17',
      pageNumber: 2575,
      sectionNumber: '35.17',
      title: 'Pamięć wcześniejszych konfliktów: Jak przeszłość zatruwa teraźniejszość',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Dlaczego tak trudno rozwiązać bieżący konflikt? Ponieważ żaden spór nie toczy się w próżni. W mózgu człowieka istnieje zjawisko PAMIĘCI ZALEŻNEJ OD NASTROJU (Mood-Congruent Memory).',
        'W momencie, gdy partner wywołuje w nas złość, hipokamp i ciało migdałowate natychmiast przeszukują magazyn pamięci długotrwałej pod kątem hasła „złość na partnera”. W ułamku sekundy przed oczami stają nam wszystkie jego błędy z 2018, 2021 i zeszłego wtorku.',
        'Rozmówca przestaje walczyć z jednym problemem z godziny 17:00 — staje przed skumulowanym archiwum wszystkich swoich grzechów z całej historii relacji.'
      ]
    },

    // 35.18
    {
      id: 'sec-35-18',
      pageNumber: 2588,
      sectionNumber: '35.18',
      title: 'Dlaczego człowiek przywołuje przeszłość? Pamięć jako tarcza i pocisk',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Wyciąganie spraw sprzed lat (tzw. Kitchen-sinking — wrzucanie wszystkiego do zlewu) spełnia dwie funkcje psychologiczne:',
        '1. Funkcja obronna: Kiedy czuję, że w bieżącej sprawie nie mam do końca racji, wyciągam dawny, bezdyskusyjny błąd partnera („Może i nie zamknąłem drzwi, ale ty trzy lata temu zdradziłaś mnie na wyjeździe integracyjnym!”). To natychmiast odwraca wektor winy.',
        '2. Próba pokazania wzorca: Człowiek rozpaczliwie próbuje udowodnić: „Tu nie chodzi o tę jedną rzecz, zrozum wreszcie, że to jest stały motyw twojego traktowania mnie!”.',
        'Niestety, wrzucenie przeszłości do kłótni gwarantuje natychmiastową śmierć merytorycznego dialogu.'
      ]
    },

    // 35.19
    {
      id: 'sec-35-19',
      pageNumber: 2600,
      sectionNumber: '35.19',
      title: 'Konflikt rzeczywisty kontra postrzegany: Odcedzanie faktów od wyolbrzymień',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Kiedy opadną emocje, warto zadać sobie pytanie testowe: „Jaki był REALNY KOSZT tego zdarzenia w świecie fizycznym?”.',
        'W przypadku brudnej patelni: koszt wynosił 90 sekund zmywania gąbką z płynem.\nW przypadku wygasłego kodu do paczkomatu: koszt wynosił 40 zł za kuriera ekspresowego lub założenie innej sukienki z szafy.',
        'Zauważmy dysproporcję: koszty fizyczne wynosiły kilkadziesiąt sekund lub kilkadziesiąt złotych. Koszt psychologiczny konfliktu wyniósł dwa dni zatrucia relacji, bezsenność, skok ciśnienia i osłabienie więzi. Czy patelnia była warta tej ceny?'
      ]
    },

    // 35.20
    {
      id: 'sec-35-20',
      pageNumber: 2612,
      sectionNumber: '35.20',
      title: 'Co widzi obserwator? Różnica między perspektywą uczestnika a chłodnym okiem z zewnątrz',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Gdybyśmy nagrali kłócącą się parę ukrytą kamerą i puścili im to nagranie po tygodniu bez dźwięku, oboje byliby zszokowani. Zobaczyliby dwoje dorosłych, wykształconych ludzi o wykrzywionych twarzach, machających rękami i przyjmujących postawy przypominające walkę kogutów.',
        'Obserwator z zewnątrz nie czuje zalania katecholaminowego. Widzi to, czego uczestnicy widzieć nie mogą: rozpaczliwą walkę o miłość prowadzoną za pomocą narzędzi wojennych.'
      ],
      interactiveWindowRef: {
        id: 'iw-35-20-obserwator-uczestnik',
        type: 'dual_perspectives',
        title: 'Obserwator vs Uczestnik — Dwa spojrzenia na kłótnię',
        subtitle: 'Jak emocjonalne zanurzenie zniekształca ocenę sytuacji',
        context: 'Awantura w przedpokoju o zgubione kluczyki do samochodu przed wyjazdem na lotnisko.',
        dualPerspective: {
          situation: 'Kluczyki leżą pod gazetą na komodzie. Para krzyczy na siebie od 10 minut.',
          personA: {
            name: 'Uczestnik (W środku pożaru)',
            quote: 'On celowo sabotuje nasz wyjazd na wakacje! Zawsze gubi rzeczy, przez niego przepadną nam bilety!',
            whatTheyKnow: 'Tylko własne rosnące tętno (118 bpm) i wizję spóźnienia na samolot.',
            whatTheyMiss: 'Że partner w panice przeszukuje kieszenie i czuje potworny wstyd.',
            interpretation: '„Jestem w związku z nieodpowiedzialnym sabotażystą”.',
            coreNeed: 'Bezpieczeństwo czasowe i kontrola.',
            fear: 'Utrata pieniędzy i upokorzenie.',
            action: 'Krzyk, wypominanie bałaganiarstwa, groźba rozwodu.'
          },
          personB: {
            name: 'Chłodny Obserwator (Kamera na ścianie)',
            quote: 'Oboje są przerażeni spóźnieniem. Gdyby zamilkli na 15 sekund, zobaczyliby kluczyki leżące 30 cm od ich rąk.',
            whatTheyKnow: 'Kluczyki są na szafce pod gazetą, do odlotu są jeszcze 3 godziny, korki na trasie są minimalne.',
            whatTheyMiss: 'Nie odczuwa lęku, więc widzi całą przestrzeń zmysłową.',
            interpretation: '„Klasyczny tunel poznawczy wywołany lękiem czasowym”.',
            coreNeed: 'Zatrzymanie paniki i prosta koordynacja ruchów.',
            fear: 'Brak.',
            action: 'Wskazanie palcem na gazetę.'
          },
          synthesis: 'Kiedy jesteś w środku kłótni, Twoje pole widzenia zawęża się do lufy pistoletu. Aby rozwiązać problem, musisz na 30 sekund wyjść z własnego ciała i spojrzeć na scenę oczami życzliwego obserwatora.'
        },
        takeaway: 'Zatrzymaj się i zapytaj w myślach: „Co powiedziałby mądry, spokojny przyjaciel, gdyby stał teraz obok nas w tym pokoju?”.'
      }
    },

    // 35.21
    {
      id: 'sec-35-21',
      pageNumber: 2628,
      sectionNumber: '35.21',
      title: 'Badania nad konfliktem i komunikacją: Laboratorium Johna Gottmana i wskaźnik 5:1',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'John Gottman na Uniwersytecie Waszyngtońskim przez cztery dekady badał pary w tzw. „Laboratorium Miłości” (Love Lab) — mieszkaniu wyposażonym w kamery, mikrofony oraz aparaturę monitorującą EKG, przewodnictwo skóry i poziom hormonów stresu w moczu.',
        'Jego najważniejsze odkrycia zrewolucjonizowały wiedzę o konflikcie:',
        '1. CZTEREJ JEŹDŹCY APOCALYPSY:\n- Krytyka (atak na osobę zamiast skargi na fakt),\n- Pogarda (poczucie wyższości, sarkazm, kokieteria złośliwości — najgroźniejszy jeździec),\n- Defensywność (odpieranie zarzutu kontratakiem lub udawaniem ofiary),\n- Mur obojętności / Stonewalling (odcięcie kontaktu, zamrożenie wzroku — występuje w 85% u mężczyzn z powodu szybszego zalania fizjologicznego).',
        '2. WSKAŹNIK GOTTMANA (5:1):\nW stabilnych, szczęśliwych relacjach podczas kłótni na 1 negatywną interakcję (irytacja, różnica zdań) przypada MINIMUM 5 INTERAKCJI POZYTYWNYCH (uśmiech, wzięcie za rękę, żart rozładowujący, uznanie racji partnera). Gdy wskaźnik spada poniżej 1:1, prawdopodobieństwo rozwodu w ciągu 5 lat wynosi ponad 90%!',
        '3. PRÓBY NAPRAWCZE (Repair Attempts):\nTo nie brak kłótni chroni parę, lecz zdolność do wciśnięcia hamulca: „Kochanie, zagalopowałem się, przepraszam”, „Zróbmy przerwę, bo zaczynamy krzyczeć”. Sukces próby naprawczej zależy w 100% od tego, czy DRUGA STRONA ZECHCE JĄ PRZYJĄĆ.'
      ]
    },

    // 35.22
    {
      id: 'sec-35-22',
      pageNumber: 2642,
      sectionNumber: '35.22',
      title: 'Kontrprzypadek: Konflikt, który nie eskaluje — Ta sama sytuacja, inna architektura',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Porównajmy sytuację z patelnią z inną parą: Adam i Sylwia. Ta sama brudna patelnia w zlewie o 18:45 po ciężkim dniu pracy.',
        'Sylwia wchodzi do kuchni, widzi patelnię. Bierze głęboki oddech (rejestruje zmęczenie), wchodzi do pokoju Adama, siada na podłodze przy jego fotelu i mówi miękkim, zmęczonym głosem: „Adam, padam z nóg po pracy, a w zlewie leży patelnia. Mógłbyś ją zmyć i zrobić mi herbaty? Naprawdę nie mam siły”.',
        'Adam odrywa wzrok od komputera. Co słyszy? Nie słyszy oskarżenia: „Znowu nie zmyłeś, jesteś dzieckiem!”. Słyszy prośbę bezbronnej, kochanej kobiety. Odpowiada: „Jasne, przepraszam, zapomniałem rano. Usiądź, już idę”.',
        'Konflikt został rozwiązany w 12 sekund bez podniesienia tętna o choćby jedno uderzenie. Różnica nie tkwiła w patelni. Tkwiła w BRAKU ATAKU NA TOŻSAMOŚĆ.'
      ]
    },

    // 35.23
    {
      id: 'sec-35-23',
      pageNumber: 2655,
      sectionNumber: '35.23',
      title: 'Różnica zdań bez rozpadu relacji: Zasady higieny dojrzałego sporu',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Dojrzały spór wymaga przestrzegania żelaznych reguł higieny komunikacyjnej:',
        '1. Reguła 1: Jeden konflikt — jeden temat. Kategoryczny zakaz wyciągania spraw z przeszłości lub łączenia naczyń z budżetem wakacyjnym.\n2. Reguła 2: Zakaz pogardy i poniżania. Żadnego przewracania oczami, przedrzeźniania głosu partnera i publicznego upokarzania.\n3. Reguła 3: Prawo do pauzy fizjologicznej. Jeśli którakolwiek ze stron mówi: „Stop, moje tętno szaleje, potrzebuję 20 minut”, druga strona bezwzględnie to szanuje, a strona prosząca o przerwę gwarantuje powrót o określonej godzinie.\n4. Reguła 4: Szukanie wspólnego gruntu (Softened Startup). Rozpoczynaj rozmowę od tego, co was łączy i od własnych uczuć, a nie od oskarżeń.'
      ]
    },

    // 35.24
    {
      id: 'sec-35-24',
      pageNumber: 2668,
      sectionNumber: '35.24',
      title: 'Analiza dwóch osób w tym samym konflikcie: Pełna dekonstrukcja sporu o finanse',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Przeanalizujmy spór Jakuba i Klaudii o zakup nowego samochodu. Jakub chce wziąć leasing na auto wyższej klasy; Klaudia żąda kupna pięcioletniego auta używanego za gotówkę. Kłócą się o to od trzech tygodni.',
        'Poniższy moduł analityczny dekonstruuje obie pozycje.'
      ],
      interactiveWindowRef: {
        id: 'iw-35-24-dwie-osoby-konflikt',
        type: 'dual_perspectives',
        title: 'Dwie Osoby, Jeden Konflikt — Spór o Auto',
        subtitle: 'Ukryte wartości pod dyskusją o ratach leasingowych',
        context: 'Jakub i Klaudia spierają się o budżet motoryzacyjny. Spór eskaluje do zarzutów o skąpstwo vs rozrzutność.',
        dualPerspective: {
          situation: 'Wybór strategii zakupu samochodu dla czteroosobowej rodziny.',
          personA: {
            name: 'Jakub',
            quote: 'Nowe auto to bezpieczeństwo dzieci w trasie i prestiż przed klientami.',
            whatTheyKnow: 'Zarabia więcej niż rok temu, ratę leasingową można wrzucić w koszty firmy.',
            whatTheyMiss: 'Że Klaudia dorastała w domu, gdzie komornik licytował majątek z powodu długów ojca.',
            interpretation: '„Klaudia mi nie ufa, ogranicza mój rozwój i chce, żebyśmy żyli jak dziady”.',
            coreNeed: 'Uznanie sukcesu, duma, poczucie nowoczesności i bezpieczeństwo techniczne.',
            fear: 'Utrknięcie w przeciętności i poczucie bycia kontrolowanym przez żonę.',
            action: 'Forsowanie leasingu, kpiny ze skąpstwa Klaudii.'
          },
          personB: {
            name: 'Klaudia',
            quote: 'Dług to pętla na szyi. Wolę skromniejsze auto, ale spokojny sen w nocy.',
            whatTheyKnow: 'Rynek jest niepewny, stopy procentowe mogą wzrosnąć, stały koszt to ryzyko.',
            whatTheyMiss: 'Że dla Jakuba samochód jest narzędziem budowania statusu biznesowego przynoszącego kontrakty.',
            interpretation: '„Jakub jest nieodpowiedzialnym marzycielem, który ryzykuje byt rodziny dla lansu”.',
            coreNeed: 'Stabilność ontologiczna, brak długów, kontrola nad przyszłością.',
            fear: 'Bankructwo, utrata płynności, powtórka z traumy dzieciństwa.',
            action: 'Weto finansowe, oskarżanie Jakuba o próżność i egoizm.'
          },
          synthesis: 'Spór nie dotyczy marki samochodu. Jest to zderzenie lęku przed ubóstwem (Klaudia) z lękiem przed byciem nikim (Jakub). Dopóki nie uznają nawzajem tych lęków, żadna kalkulacja w Excelu nie przyniesie pokoju.'
        },
        takeaway: 'W konfliktach o pieniądze najrzadziej chodzi o matematykę — najczęściej chodzi o ukryte traumy i definicję bezpieczeństwa.'
      }
    },

    // 35.25
    {
      id: 'sec-35-25',
      pageNumber: 2682,
      sectionNumber: '35.25',
      title: 'SYNTEZA: Konflikt jako proces wzajemnego oddziaływania i szansa na rozwój',
      category: 'podsumowanie',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zakończmy ten rozdział fundamentalnym wnioskiem: KONFLIKT SAM W SOBIE NIE JEST ZNISZCZENIEM RELACJI. Jest informacją zwrotną o tym, że dotychczasowy sposób koordynacji przestał działać.',
        'Relacja, która potrafi przejść przez ogień sporu bez użycia pogardy, bez uciekania w ciche dni i bez niszczenia godności partnera, wychodzi z kryzysu silniejsza, głębsza i bardziej autentyczna. Odkrywamy wtedy, kim naprawdę jest drugi człowiek, gdy opadną maski uprzejmości.',
        'Co jednak dzieje się w sytuacji, gdy podczas konfliktu lub poza nim jedno z partnerów przekroczy fundamentalną granicę i złamie zawarte przymierze? Co dzieje się z ludzkim umysłem, gdy dochodzi do ZDRADY, a dotychczasowy model zaufania obraca się w popiół? Temu dramatycznemu wyzwaniu poświęcimy kolejny, 36. Rozdział naszej książki.'
      ]
    }
  ]
};

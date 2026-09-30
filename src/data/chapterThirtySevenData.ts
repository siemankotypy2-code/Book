import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 21 (GLOBALNIE ROZDZIAŁ 37 W STRUKTURZE DZIEŁA)
 * TYTUŁ: KONFORMIZM I PRESJA GRUPY
 * PODTYTUŁ: Dlaczego człowiek czasami zmienia zachowanie lub publicznie wyraża inne zdanie pod wpływem grupy
 */

export const chapterThirtySevenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest kluczowa różnica między konformizmem a posłuszeństwem (obejdence)?',
    topic: 'Definicja Konformizmu',
    sectionRef: 'Sekcja 37.1',
    options: [
      { label: 'A', text: 'Konformizm to dostosowanie zachowania lub przekonań do nieformalnej presji rówieśników lub grupy o podobnym statusie, podczas gdy posłuszeństwo to uległość wobec bezpośredniego polecenia autorytetu w strukturze hierarchicznej.', isCorrect: true },
      { label: 'B', text: 'Konformizm występuje tylko u dzieci, a posłuszeństwo u dorosłych.', isCorrect: false },
      { label: 'C', text: 'Konformizm dotyczy wyłącznie ubioru, a posłuszeństwo prawa karnego.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy naukowej — oba pojęcia oznaczają hipnozę.', isCorrect: false }
    ],
    explanation: 'W badaniach Ascha (konformizm) presję wywierają koledzy siedzący obok; w badaniach Milgrama (posłuszeństwo) polecenie wydaje eksperymentator z pozycji zwierzchniej.',
    keyTakeaway: 'Konformizm to presja pozioma (od stada); posłuszeństwo to presja pionowa (od hierarchii).'
  },
  {
    id: 2,
    question: 'Co dzieje się z poziomem błędu konformistycznego w eksperymencie Ascha, gdy badany ma w grupie choćby jednego sojusznika mówiącego prawdę?',
    topic: 'Rola Sojusznika Prawdy',
    sectionRef: 'Sekcja 37.7 & 37.13',
    options: [
      { label: 'A', text: 'Poziom błędów konformistycznych spada dramatycznie z ~37% do zaledwie ~5%, ponieważ rozbicie jednomyślności stada legalizuje prawo do samodzielnego myślenia.', isCorrect: true },
      { label: 'B', text: 'Poziom błędów rośnie do 100%, bo dwie osoby mylą się bardziej niż jedna.', isCorrect: false },
      { label: 'C', text: 'Obecność sojusznika nie ma żadnego mierzalnego wpływu.', isCorrect: false },
      { label: 'D', text: 'Eksperymentator natychmiast przerywa badanie i wyrzuca sojusznika.', isCorrect: false }
    ],
    explanation: 'To jedno z najważniejszych odkryć Ascha: presja grupy wymaga monolitycznej jednomyślności. Pojedynczy dysydent zdejmuje z jednostki paraliżujący lęk przed byciem jedynym dziwakiem.',
    keyTakeaway: 'Jeden odważny głos wystarczy, by dać tlen całemu stadu sparaliżowanemu lękiem.'
  },
  {
    id: 3,
    question: 'Czym jest zjawisko „Pluralistycznej Ignorancji” (Pluralistic Ignorance) w kontekście milczenia zespołu?',
    topic: 'Milczenie i Fałszywa Jednomyślność',
    sectionRef: 'Sekcja 37.11 & 37.12',
    options: [
      { label: 'A', text: 'Stanem, w którym większość członków grupy prywatnie nie zgadza się z decyzją, ale każdy milczy, błędnie zakładając, że wszyscy inni milczą z powodu pełnej aprobaty.', isCorrect: true },
      { label: 'B', text: 'Nieznajomością języków obcych w międzynarodowej korporacji.', isCorrect: false },
      { label: 'C', text: 'Świadomym sabotażem projektu przez wynajętych hakerów.', isCorrect: false },
      { label: 'D', text: 'Zasypianiem podczas długich zebrań zarządu.', isCorrect: false }
    ],
    explanation: 'Pluralistyczna ignorancja rodzi fałszywą jednomyślność: nikt nie protestuje, bo każdy boi się wyjść na niekompetentnego, a w efekcie zespół podejmuje decyzję, której nie popierał żaden z jego członków!',
    keyTakeaway: 'Wszyscy milczą, myśląc, że inni się zgadzają — tak rodzą się największe katastrofy zbiorowe.'
  },
  {
    id: 4,
    question: 'Kiedy dostosowanie własnego zachowania do grupy jest w pełni RACJONALNĄ strategią adaptacyjną?',
    topic: 'Informacyjny Wpływ jako Mądrość',
    sectionRef: 'Sekcja 37.4 & 37.16',
    options: [
      { label: 'A', text: 'W warunkach wysokiej niepewności i braku danych własnych, gdy grupa posiada rzetelne doświadczenie kulturowe lub wiedzę ekspercką (np. ewakuacja z nieznanego budynku).', isCorrect: true },
      { label: 'B', text: 'Nigdy — człowiek rozumny powinien w 100% sytuacji robić dokładnie na odwrót niż tłum.', isCorrect: false },
      { label: 'C', text: 'Tylko wtedy, gdy za konformizm otrzymujemy nagrodę finansową.', isCorrect: false },
      { label: 'D', text: 'Podczas podpisywania umów kredytowych.', isCorrect: false }
    ],
    explanation: 'Gdy w obcym mieście turyści widzą miejscowych uciekających z plaży przed falą tsunami, biegnięcie razem z nimi jest racjonalnym wykorzystaniem wiedzy społecznej (Social Learning). Ślepy bunt (kontrkonformizm) byłby samobójstwem.',
    keyTakeaway: 'Uczenie się od stada jest mądrością; ślepe podążanie za stadem wbrew faktom jest głupotą.'
  },
  {
    id: 5,
    question: 'Dlaczego internet i algorytmy mediów społecznościowych zradykalizowały presję konformizmu rówieśniczego?',
    topic: 'Presja Grupy w Erze Cyfrowej',
    sectionRef: 'Sekcja 37.22',
    options: [
      { label: 'A', text: 'Z powodu mierzalnych metryk statusu (lajki), nieustannej widoczności ocen 24/7 oraz zjawiska cyfrowego linczu i baniek filtrujących karzących za najmniejsze odstępstwo od normy plemiennej.', isCorrect: true },
      { label: 'B', text: 'Ponieważ w internecie nie ma żadnych grup społecznych.', isCorrect: false },
      { label: 'C', text: 'Internet zmniejszył konformizm o 90%.', isCorrect: false },
      { label: 'D', text: 'Z powodu awarii światłowodów w Europie.', isCorrect: false }
    ],
    explanation: 'Media społecznościowe zamieniły dyskretną presję grupy rówieśniczej w globalne panoptikon, w którym jednostka żyje w permanentnym lęku przed publicznym wykluczeniem i cyfrowym ostracyzmem.',
    keyTakeaway: 'W erze cyfrowej odwaga do bycia w mniejszości wymaga silniejszego kręgosłupa niż kiedykolwiek.'
  }
];

export const chapterThirtySevenCaseStudies: CaseStudy[] = [
  {
    id: 'cs-37-rafal-zebranie-milczenie',
    title: 'Studium Przypadku: Rafał i Milczący Zespół — Anatomia Katastrofalnej Decyzji',
    subtitle: 'Jak 12 wykształconych inżynierów zagłosowało za projektem, o którym każdy prywatnie wiedział, że nie ma prawa działać',
    protagonist: 'Rafał (35 lat, Senior Project Manager) oraz zarząd firmy technologicznej',
    context: 'Spotkanie strategiczne w korporacji telekomunikacyjnej decydujące o wdrożeniu oprogramowania wartego 15 mln euro.',
    story: [
      'ETAP I — JEDNOMYŚLNA INTRODUKCJA: Wiceprezes ds. Rozwoju otwiera zebranie z szerokim uśmiechem: „Drodzy, po sukcesie zeszłorocznym wdrożenie Projektu Orion w terminie czerwcowym jest priorytetem całej Grupy. Mamy pełne zaufanie inwestorów. Czy ktoś widzi jakiekolwiek przeszkody?”.',
      'ETAP II — WĄTPLIWOŚCI RAFAŁA: Rafał wie z twardych raportów QA, że serwery w chmurze przegrzewają się przy 30% zakładanego ruchu. Koszt naprawy architektury to 4 miesiące pracy.',
      'ETAP III — SPOJRZENIA W STÓŁ: Rafał rozgląda się po sali. Główny architekt Piotr wpatruje się w ekran laptopa. Dyrektor Jakości Anna skubie brzeg filiżanki. Nikt nie podnosi ręki.',
      'ETAP IV — RACJONALIZACJA WEWNĘTRZNA: Rafał myśli: „Skoro Piotr milczy, to może problem da się załatać patchami po premierze? Jeśli teraz powiem o czterech miesiącach, prezes uzna mnie za defetystę, a mój awans przepadnie”.',
      'ETAP V — GŁOSOWANIE: Wiceprezes mówi: „Świetnie, brak zastrzeżeń. Przejdźmy do głosowania przez aklamację”. Wszyscy, łącznie z Rafałem, unoszą ręce w górę z uśmiechami.',
      'ETAP VI — CZERWCOWY ARMAGEDON: System wystartował 1 czerwca. O 9:45 nastąpił globalny blackout. Straty wyniosły 18 mln euro. Podczas audytu wewnętrznego okazało się, że 9 z 12 członków zebrania miało w szufladach notatki ostrzegające przed katastrofą, ale żaden nie odważył się odezwać.'
    ],
    dialogue: [
      { speaker: 'Wiceprezes', text: 'Cieszę się, że jesteśmy w 100% zgodni. Zespół Orion to elita, która dowozi wyniki bez marudzenia.', subtext: 'Normatywna pułapka lojalności: brak sprzeciwu jako jedyny dowód bycia profesjonalistą.' },
      { speaker: 'Rafał (po katastrofie)', text: 'Gdybym wiedział, że Piotr i Anna też widzieli te błędy, odezwałbym się. Byłem pewien, że tylko ja mam wątpliwości.', subtext: 'Klasyczna pluralistyczna ignorancja rozbita dopiero przez katastrofę.' }
    ],
    decisionTaken: 'Zagłosowanie za wdrożeniem wbrew twardym danym inżynierskim ze strachu przed wyjściem przed szereg i utratą statusu w zespole.',
    whatProtagonistSaw: 'Jednomyślny, pewny siebie zarząd i ryzyko stania się kozłem ofiarnym.',
    whatWasMissed: 'Że wszyscy wokół niego czuli ten sam paraliżujący strach i czekali na kogoś, kto pierwszy powie prawdę.',
    psychologicalAnalysis: {
      coreMechanism: 'Myślenie grupowe (Groupthink), pluralistyczna ignorancja i konformizm normatywny pod presją autorytetu.',
      cognitiveBiases: [
        { name: 'Iluzja niezwyciężoności i fałszywa jednomyślność', description: 'Milczenie zinterpretowane jako 100% entuzjazm.', impact: 'Katastrofa wdrożeniowa.' },
        { name: 'Efekt kaskady informacyjnej', description: 'Kolejne osoby dołączały do zgody widząc aprobatę poprzedników.', impact: 'Wyłączenie krytycznego myślenia.' }
      ],
      defenseMechanisms: [
        { name: 'Rozproszenie odpowiedzialności w tłumie', explanation: '„Skoro wszyscy głosowali, to nie moja osobista wina”.' }
      ],
      emotionalDynamic: 'Od lęku przed kompromitacją przez fałszywą ulgę konformizmu aż po druzgocący wstyd podczas audytu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowa kora obręczy (dACC)', role: 'Sygnalizacja błędu poznawczego („kłamię podnosząc rękę”) zdominowana przez lęk przed wykluczeniem ze stada', activationState: 'Wysoka' },
        { region: 'Brzuszno-boczna kora przedczołowa', role: 'Racjonalizacja konformistycznego wyboru', activationState: 'Wysoka' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Serotonina', roleInScenario: 'Doraźna ulga po dopasowaniu się do grupy przy długofalowym spadku szacunku do siebie.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Pytanie prezesa (0 min)', process: 'Zauważenie milczenia innych -> obniżenie tętna po podniesieniu ręki.' },
        { timeMs: '1 czerwca (Awaria)', process: 'Wyrzut kortyzolu -> szok pourazowy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Aklamacja przy otwartej kurtynie', description: 'Uniemożliwienie tajnego głosowania w celu wymuszenia uległości normatywnej.', vulnerabilityExploited: 'Lęk pracowników przed byciem uznanym za nielojalnych.' }
      ],
      counterMeasures: [
        { step: 'Instytucjonalne tajne votum', script: '„Przed finalnym wdrożeniem każdy inżynier anonimowo wypełnia ankietę: W skali 1-10 jak bardzo wierzysz w stabilność systemu?”.', rationale: 'Błyskawicznie demaskuje fałszywą jednomyślność bez ryzyka kary.' }
      ]
    },
    keyTakeaway: 'Odwaga do powiedzenia prawdy w korporacji kosztuje chwilowy dyskomfort; konformistyczne milczenie kosztuje miliony i utratę twarzy.'
  }
];

export const chapterThirtySevenSelfExercises: SelfExercise[] = [
  {
    id: 'ex-37-1-trening-glosu-odrebnosci',
    title: 'Ćwiczenie: Trening Głosu Odrębności — Jak Zgłosić Weto Bez Agresji',
    subtitle: 'Behawioralny protokół wyrażania odmiennego zdania w grupie',
    objective: 'Wykształcenie umiejętności przełamywania jednomyślności stada w sposób elegancki i merytoryczny.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Stosowanie gotowych skryptów werbalnych redukuje obciążenie pamięci roboczej w stanie stresu społecznego, umożliwiając spokojną ekspresję autonomii.',
    steps: [
      {
        stepNumber: 1,
        title: 'Formuła Walidacji Celu Grupy',
        instruction: 'Nigdy nie zaczynaj od słów: „Mylice się”. Zacznij od uznania wspólnego celu.',
        promptText: 'Wzór zdania wstępnego:',
        placeholder: '„Wszyscy chcemy, żeby ten projekt odniósł sukces i żebyśmy dowieźli wynik...”'
      },
      {
        stepNumber: 2,
        title: 'Wprowadzenie Roli Adwokata Danych',
        instruction: 'Przedstaw swoje wątpliwości nie jako opinię osobistą, lecz jako obowiązek rzetelności.',
        promptText: 'Wzór wprowadzenia weta:',
        placeholder: '„Jako inżynier mam jednak obowiązek pokazać wam jeden parametr w testach obciążeniowych, który stwarza krytyczne ryzyko...”'
      },
      {
        stepNumber: 3,
        title: 'Pytanie Otwierające Dialog',
        instruction: 'Zamiast żądać kapitulacji, zaproś grupę do wspólnego rozwiązania problemu.',
        promptText: 'Pytanie otwierające:',
        placeholder: '„Jak możemy zabezpieczyć ten punkt zanim podejmiemy ostateczną decyzję?”.'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się reakcja grupy, gdy Twoje weto jest przedstawione w służbie wspólnego dobra, a nie jako walka o rację?',
      'Co czujesz w ciele po odważnym wypowiedzeniu niewygodnej prawdy?'
    ]
  }
];

export const chapterThirtySeven: Chapter = {
  number: 37,
  volume: 3,
  volumeChapterNumber: 21,
  title: 'Konformizm i Presja Grupy',
  subtitle: 'Dlaczego człowiek czasami zmienia zachowanie lub publicznie wyraża inne zdanie pod wpływem grupy',
  leadParagraph: 'Człowiek w samotności myśli inaczej niż w obecności trzech osób, a zupełnie inaczej niż w tłumie stuosobowym. Grupa posiada niewidzialne pole grawitacyjne: potrafi zniekształcić nasz zmysł wzroku, uciszyć sumienie i skłonić wykształconych ludzi do popełniania katastrofalnych błędów w imię pozornej harmonii. Dlaczego lęk przed byciem odmieńcem jest tak silny i co dzieje się, gdy choćby jedna osoba odważy się powiedzieć „nie”? W tym rozdziale badamy mechanizmy wpływu informacyjnego i normatywnego, eksperymenty Ascha, dynamikę fałszywej jednomyślności oraz psychologię odwagi cywilnej.',
  totalEstimatedPages: 64,
  sections: [
    // 37.1
    {
      id: 'sec-37-1',
      pageNumber: 3050,
      sectionNumber: '37.1',
      title: 'Czym jest konformizm? Definicja, ewolucyjne korzenie i rozróżnienie od posłuszeństwa',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Nasz współczesny system społeczny nakłada na jednostkę olbrzymią presję, by ta dostosowywała swoje przekonania do opinii otoczenia. Gdy wykształceni, inteligentni ludzie w oczywistej sprawie wybierają fałsz tylko po to, by nie wyróżniać się z tłumu, stawia to fundamentalne pytanie o charakter naszej wolności i edukacji.',
        author: 'Prof. Solomon E. Asch',
        source: 'Swarthmore College, „Opinions and Social Pressure”, Scientific American, 1955'
      },
      paragraphs: [
        'Konformizm należy do najbardziej powszechnych, a zarazem najbardziej potępianych mechanizmów w psychologii człowieka. W języku potocznym słowo to nosi silne piętno pejoratywne: kojarzy się z bezmyślnym naśladownictwem, brakiem kręgosłupa moralnego i oportunizmem.',
        'W naukowej psychologii społecznej KONFORMIZM definiuje się jako: Zmianę zachowania, postaw lub prywatnych przekonań jednostki pod wpływem rzeczywistej, wyobrażonej lub domniemanej presji ze strony grupy społecznej.',
        'Warto precyzyjnie odróżnić trzy pokrewne pojęcia behavioralne:',
        '- ULEGŁOŚĆ (Compliance): Publiczne dopasowanie się do żądania bez wewnętrznego przekonania (np. założenie garnituru na oficjalne spotkanie z szacunku dla protokołu).',
        '- POSŁUSZEŃSTWO (Obedience): Wykonanie bezpośredniego nakazu wydanego przez autorytet w strukturze hierarchicznej (presja pionowa — np. eksperyment Milgrama).',
        '- KONFORMIZM (Conformity): Dostosowanie się do niepisanych norm grupy rówieśniczej lub współuczestników o zbliżonym statusie (presja pozioma — np. eksperyment Ascha).'
      ],
      subsections: [
        {
          id: 'sub-37-1-1',
          title: 'Analiza słów prof. Solomona Ascha: Presja Stada a Kapitulacja Woli',
          content: [
            'Słynne słowa prof. Solomona Ascha z 1955 roku uderzają w samo serce mitu o niepodległym, suwerennym jednostkowym intelekcie. Asch wykazał, że konformizm nie jest marginesem patologii — jest bazowym programem domyślnym ludzkiego mózgu.',
            'Z perspektywy ewolucyjnej, odłączenie się od stada w plemiennym środowisku praprzodków oznaczało nieuchronną śmierć biologiczną. Ciało migdałowate reaguje więc na odmienność opinii od grupy jak na fizyczne zagrożenie wykluczeniem. Odwaga cywilna i niezależność myślenia wymagają oporu wobec własnej biologii.'
          ],
          highlightBox: {
            title: 'Wgląd Ewolucyjny: Dlaczego Stado Zawsze Wygrywa?',
            content: 'Mózg wolne chwile niepewności traktuje jako potencjalne zagrożenie. Skoro wszyscy uciekają w lewo, to ten, kto zatrzymuje się, by sprawdzić przyczynę, zostaje zjedzony przez drapieżnika. Konformizm informacyjny uratował tysiące pokoleń naszych przodków.',
            type: 'neuro'
          }
        }
      ]
    },

    // 37.2
    {
      id: 'sec-37-2',
      pageNumber: 3062,
      sectionNumber: '37.2',
      title: 'Norma społeczna: Jak rodzą się niepisane reguły zachowania',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Norma społeczna jest niewidzialnym szkieletem każdej grupy. Wyróżniamy dwa rodzaje norm:',
        '1. NORMY OPISOWE (Descriptive Norms): Informują o tym, co ludzie RZECZYWIŚCIE ROBIĄ w danej sytuacji (np. „Wszyscy w tym biurze zostają po godzinach do 18:30”).\n2. NORMY NAKAZUJĄCE (Injunctive Norms): Informują o tym, co grupa UWAŻA ZA WŁAŚCIWE i co nagradza lub karze moralnie (np. „Należy pomagać nowym pracownikom”).',
        'Znakomity eksperyment Roberta Cialdiniego w Parku Narodowym Skamieniałego Lasu wykazał, że tabliczka: „Wielu turystów zabiera kawałki skamieniałego drewna, niszcząc park” (aktywująca normę opisową: „wszyscy kradną”) POTROIŁA liczbę kradzieży w porównaniu z tabliczką zakazującą! Ludzki mózg najpierw patrzy na to, co robi stado, a dopiero potem na to, co nakazuje regulamin.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-2-norma-parku',
        type: 'counter_case',
        title: 'Kontrprzypadek: Tabliczka, która powstrzymała kradzież',
        subtitle: 'Sztuka programowania norm społecznych w przestrzeni publicznej',
        context: 'Zarządzanie zachowaniem turystów w chronionym parku narodowym.',
        counterCase: {
          standardTheory: 'Aby powstrzymać ludzi przed kradzieżą, należy na czerwono i wielkimi literami pokazać skalę problemu, np.: „Codziennie dziesiątki osób kradną skały, niszcząc nasz wspólny las! Prosimy przestać!”.',
          counterExample: 'Wprowadzenie takiego napisu trzykrotnie zwiększyło liczbę kradzieży. Turysta myślał: „Skoro wszyscy biorą na pamiątkę, to i ja wezmę jedną małą, to normalne”. Dopiero tabliczka aktywująca normę nakazującą: „Zabieranie drewna jest zabronione. Pomóż nam ocalić ten las dla przyszłych pokoleń” (bez wspominania o kryminalnym zachowaniu innych) zredukowała kradzieże do minimum.',
          whyItDefiesRule: 'Mózg ludzki jest zaprogramowany na naśladowanie większości (norma opisowa). Pokazywanie złego zachowania większości legalizuje je społecznie.',
          deeperLesson: 'Chcesz, żeby ludzie zachowywali się dobrze? Pokazuj im, że dobre zachowanie jest powszechne lub pożądane, a nie że zło jest normą.'
        },
        takeaway: 'Nigdy nie piętnuj patologii poprzez pokazywanie, jak wielu ludzi jej ulega — w ten sposób nieświadomie ją ułatwiasz.'
      }
    },

    // 37.3
    {
      id: 'sec-37-3',
      pageNumber: 3075,
      sectionNumber: '37.3',
      title: 'Dlaczego obserwujemy innych? Grupa jako epistemologiczne lustro rzeczywistości',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Ewolucja wyposażyła nas w neurony lustrzane i zdolność do szybkiego monitorowania otoczenia nie po to, by czynić z nas niewolników, lecz by zapewnić nam PRZETRWANIE.',
        'W złożonym świecie żaden człowiek nie jest w stanie samodzielnie przetestować każdej jagody w lesie, sprawdzić każdego mostu ani przeczytać każdej ustawy. Zaufanie do mądrości stada (Social Learning) jest fundamentem kultury ludzkiej. Obserwowanie innych pozwala uczyć się na ich błędach bez płacenia ceny biologicznej.'
      ]
    },

    // 37.4
    {
      id: 'sec-37-4',
      pageNumber: 3088,
      sectionNumber: '37.4',
      title: 'Informacyjny wpływ grupy: Kiedy inni stają się jedynym kompasem prawdy',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Gdy znajdujemy się w sytuacji nowej, skomplikowanej lub kryzysowej, pojawia się INFORMACYJNY WPŁYW SPOŁECZNY (Deutsch & Gerard).',
        'Klasyczny eksperyment Muzafera Sherifa z efektem autokinetycznym (1936): Badani w całkowicie ciemnym pokoju patrzyli na nieruchomy punkt świetlny, który z powodu mikroruchów gałki ocznej wydawał się poruszać. Gdy badani oceniali ruch indywidualnie, ich szacunki były skrajnie różne (od 2 do 20 cm). Kiedy jednak połączono ich w grupy — w ciągu trzech sesji ich oceny zbiegły się w jedną wspólną, trwałą normę grupową!',
        'Co najważniejsze: badani po roku, badani pojedynczo, nadal posługiwali się wypracowaną wcześniej normą grupy. Doszło do autentycznej, głębokiej PRYWATNEJ AKCEPTACJI.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-4-ewakuacja',
        type: 'what_if',
        title: 'Zmień jeden element: Alarm w obcym budynku',
        subtitle: 'Symulacja wpływu zachowania innych na decyzję o ucieczce przed niebezpieczeństwem',
        context: 'Rozlega się cichy sygnał alarmowy w czytelni uniwersyteckiej. W pokoju siedzi 15 osób.',
        whatIfOptions: {
          defaultScenario: 'Gdy nikt się nie rusza (14 podstawionych osób milczy i czyta dalej), badany ignoruje dym pod drzwiami i siedzi bezczynnie przez kolejne 20 minut.',
          options: [
            {
              id: 'c37-opt-ew1',
              changeLabel: 'Choćby jedna inna osoba wstaje, pakuje laptopa i zmierza do wyjścia',
              resultingInterpretation: 'Badany myśli: „A jednak to nie pomyłka. Skoro ona ucieka, to ja też wychodzę, nie będę ryzykować”.',
              resultingBehavior: 'Badany natychmiast wstaje i opuszcza budynek.',
              psychologicalImpact: 'Rozbicie iluzji bezpieczeństwa i aktywacja proaktywnego instynktu samozachowawczego.'
            },
            {
              id: 'c37-opt-ew2',
              changeLabel: 'Badany dowiaduje się przed wejściem, że budynek ma uszkodzoną instalację czujek dymu',
              resultingInterpretation: 'Badany myśli: „Inni nie wiedzą o awarii czujek, dlatego milczą. Muszę ich ostrzec”.',
              resultingBehavior: 'Badany wstaje i krzyczy: „Słuchajcie, to prawdziwy alarm, wychodzimy!”.',
              psychologicalImpact: 'Przełamanie konformizmu informacyjnego dzięki posiadaniu unikalnej, twardej wiedzy.'
            }
          ]
        },
        takeaway: 'W warunkach niepewności podążamy za stadem, zapominając, że stado może być tak samo niedoinformowane jak my.'
      }
    },

    // 37.5
    {
      id: 'sec-37-5',
      pageNumber: 3100,
      sectionNumber: '37.5',
      title: 'Normatywny wpływ grupy: Cena akceptacji i lęk przed wykluczeniem ze stada',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zupełnie inny mechanizm napędza NORMATYWNY WPŁYW SPOŁECZNY. Tutaj sytuacja jest w 100% jasna. Człowiek doskonale wie, co jest prawdą. Nie ma cienia wątpliwości.',
        'Mimo to ulega grupie. Dlaczego? Z lęku przed wyśmianiem, odrzuceniem, etykietą „odmieńca” lub utratą statusu. Wpływ normatywny prowadzi do PUBLICZNEGO ULEGANIA przy jednoczesnym zachowaniu prywatnego sprzeciwu. Człowiek mówi: „Tak, macie rację”, a w myślach dodaje: „Co za stado idiotów”.'
      ]
    },

    // 37.6
    {
      id: 'sec-37-6',
      pageNumber: 3112,
      sectionNumber: '37.6',
      title: 'Historia: „Wszyscy są za” — Gdy stajesz sam naprzeciw jednomyślnej sali',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Młoda architektka Joanna trafia na swoje pierwsze spotkanie w prestiżowej pracowni projektowej. Zespół omawia koncepcję nowego osiedla mieszkaniowego. Wszyscy starsi partnerzy zachwycają się projektem: „Cudowna, odważna bryła, świetne wykorzystanie przestrzeni!”.',
        'Joanna zauważa na rzutach konstrukcyjnych rażący błąd nasłonecznienia: 40% mieszkań na parterze nie będzie miało ani jednej godziny bezpośredniego światła słonecznego w zimie, co narusza polskie normy budowlane.',
        'Prowadzący spotkanie mówi: „Wszyscy są zachwyceni, prawda Joasiu? Podpisujemy koncepcję i wysyłamy do inwestora”. Szesnaście par oczu spogląda na najmłodszą pracownicę.',
        'Co dzieje się w tym momencie w ciele i umyśle Joanny? Przetestujmy to w poniższym oknie decyzyjnym.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-6-co-byś-zrobil',
        type: 'what_if',
        title: 'Co byś zrobił? — Presja w sali konferencyjnej',
        subtitle: 'Wybór strategii Joanny wobec jednomyślności seniorów',
        context: '16 osób popiera projekt z wadą prawno-budowlaną. Pytanie pada wprost do najmłodszej stażem.',
        whatIfOptions: {
          defaultScenario: 'Joanna uśmiecha się, kiwa głową i mówi: „Tak, bardzo ciekawy projekt”.',
          options: [
            {
              id: 'c37-opt-1',
              changeLabel: 'Wariant A: Konformizm publiczny (Milczenie i uległość)',
              resultingInterpretation: 'Zespół odbiera Joannę jako miłą i bezkonfliktową. Joanna wraca do domu z bólem żołądka i poczuciem zdrady etyki inżynierskiej.',
              resultingBehavior: 'Projekt trafia do inwestora, po 3 miesiącach zostaje odrzucony przez urząd miejski ze skandalem.',
              psychologicalImpact: 'Cena krótkoterminowego spokoju to długoterminowa katastrofa zawodowa.'
            },
            {
              id: 'c37-opt-2',
              changeLabel: 'Wariant B: Weto agresywne („Czy wy jesteście ślepi? Przecież to niezgodne z prawem!”)',
              resultingInterpretation: 'Zespół czuje się upokorzony przez nowicjuszkę. Seniorzy przechodzą do obrony pozycji i marginalizują Joannę.',
              resultingBehavior: 'Awantura na zebraniu, etykieta „zarozumiałej amatorki”, wilczy bilet.',
              psychologicalImpact: 'Prawda bez empatii i szacunku dla dynamiki grupy rodzi kontratak.'
            },
            {
              id: 'c37-opt-3',
              changeLabel: 'Wariant C: Weto wiedzowe z formułą zaciekawienia („Projekt jest wspaniały, ale czy sprawdzaliśmy normę par. 57 dla mieszkań parterowych?”)',
              resultingInterpretation: 'Seniorzy nie czują się zaatakowani; uwaga przenosi się z tożsamości na dokument techniczny.',
              resultingBehavior: 'Główny architekt sprawdza przepis, przyznaje rację i wprowadza korektę bryły. Joanna zyskuje szacunek jako wnikliwy ekspert.',
              psychologicalImpact: 'Odzyskanie suwerenności bez wywoływania reaktancji stada.'
            }
          ]
        },
        takeaway: 'Odwaga cywilna w grupie nie wymaga krzyku — wymaga spokoju, precyzji faktów i szacunku dla godności rozmówców.'
      }
    },

    // 37.7
    {
      id: 'sec-37-7',
      pageNumber: 3128,
      sectionNumber: '37.7',
      title: 'Eksperymenty Solomona Ascha: Przebieg badań nad konformizmem percepcyjnym',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'W 1951 roku Solomon Asch na Swarthmore College stworzył badanie, które na zawsze zmieniło nasze rozumienie ludzkiej niezależności. Asch chciał dowieść, że w sytuacjach jednoznacznych, w których zmysły dają jasne świadectwo, człowiek NIE ULEGNIE grupie.',
        'Procedura: 1 badany student i 7 podstawionych pomocników eksperymentatora. Zadanie: wskazać, która z trzech linii (A, B, C) odpowiada długości linii X. Różnice były ewidentne — sięgały kilku centymetrów.',
        'W pierwszych próbach wszyscy odpowiadali poprawnie. W próbach krytycznych pomocnicy z kamienną twarzą wskazywali linię ewidentnie fałszywą. Wyniki zaszokowały samego badacza:\n- 75% badanych przynajmniej raz uległo błędnej opinii większości!\n- W sumie 37% wszystkich odpowiedzi w próbach krytycznych było konformistycznymi błędami!\n- W grupie kontrolnej (bez obecności grupy) badani popełniali mniej niż 1% błędów.'
      ]
    },

    // 37.8
    {
      id: 'sec-37-8',
      pageNumber: 3142,
      sectionNumber: '37.8',
      title: 'Co naprawdę pokazały badania Ascha? Trzy poziomy uległości',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W wywiadach poeksperymentalnych Asch odkrył, że badani ulegali z trzech zupełnie różnych powodów:',
        '1. Zniekształcenie percepcji (bardzo rzadkie): Kilku badanych naprawdę zaczęło widzieć linie inaczej — presja stada wpłynęła na pierwotne przetwarzanie wzrokowe w korze potylicznej.\n2. Zniekształcenie osądu (częste): Badani widzieli różnicę, ale uznali, że skoro 7 inteligentnych studentów mówi inaczej, to ich własny wzrok musi być wadliwy („pewnie mam astygmatyzm lub kąt patrzenia mnie myli”).\n3. Zniekształcenie działania (najczęstsze): Badani wiedzieli, która linia jest poprawna, ale nie byli w stanie znieść fizycznego dyskomfortu bycia jedyną osobą głosującą inaczej w pokoju!'
      ],
      interactiveWindowRef: {
        id: 'iw-37-8-prawda-asch',
        type: 'what_we_know',
        title: 'Co naprawdę pokazał Asch? — Demitologizacja uległości',
        subtitle: 'Oddzielenie rzetelnych danych od obiegowych opinii podręcznikowych',
        context: 'Analiza psychologiczna zachowania badanych w salach Swarthmore College.',
        whatWeKnow: {
          items: [
            {
              id: 'c37-asch-k1',
              statement: 'Większość badanych w eksperymencie Ascha uległa grupie w każdej pojedynczej próbie.',
              category: 'interpretacja',
              explanation: 'To mit. Aż 25% badanych zachowało absolutną niezależność i NIGDY nie uległo kłamstwu grupy, a średni odsetek uległości wynosił 37%.'
            },
            {
              id: 'c37-asch-k2',
              statement: 'Uleganie grupie najczęściej wynikało z chęci uniknięcia śmieszności (konformizm normatywny), a nie z realnej zmiany percepcji.',
              category: 'fakt',
              explanation: 'Prawda. Gdy badany mógł zapisywać swoje odpowiedzi na kartce, zamiast wygłaszać je na głos, poziom uległości spadł do zaledwie 12%!'
            },
            {
              id: 'c37-asch-k3',
              statement: 'Wystarczy, by jedna osoba z grupy podała poprawną odpowiedź, by uległość badanego spadła o 75%.',
              category: 'fakt',
              explanation: 'Znakomite odkrycie Ascha: rozbicie jednomyślności monolitu znosi paraliżujący lęk przed samotną innością.'
            },
            {
              id: 'c37-asch-k4',
              statement: 'Badani, którzy ulegli grupie, byli słabymi ludźmi o ugodowym charakterze i niskim ilorazie inteligencji.',
              category: 'interpretacja',
              explanation: 'Błąd atrybucji. Byli to wybitni studenci prestiżowej uczelni. Siła presji społecznej jest mechanizmem adaptacyjnym, a nie defektem moralnym.'
            }
          ]
        },
        takeaway: 'Konformizm nie jest słabością jednostki — jest biologicznym polem magnetycznym, przed którym chroni nas tylko świadome budowanie sojuszy prawdy.'
      }
    },

    // 37.9
    {
      id: 'sec-37-9',
      pageNumber: 3155,
      sectionNumber: '37.9',
      title: 'Czego badania Ascha nie pokazały? Ograniczenia i różnice ze światem realnym',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Rzetelność naukowa wymaga wskazania ograniczeń badań Ascha:\n- Po pierwsze: aż 25% badanych NIGDY nie uległo grupie, wykazując niezłomną autonomię we wszystkich próbach.\n- Po drugie: w laboratorium Ascha badani nie znali swoich współuczestników i wiedzieli, że widzą ich po raz pierwszy i ostatni. W realnym życiu presja grupy rówieśniczej, rodzinnej czy zawodowej jest stokroć silniejsza, ponieważ wiąże się z realnym ryzykiem długotrwałego ostracyzmu i utraty środków do życia.\n- Po trzecie: linie na kartce papieru nie miały żadnego ładunku moralnego ani wartościowego. W sprawach światopoglądowych mechanizmy konformizmu są znacznie bardziej skomplikowane.'
      ]
    },

    // 37.10
    {
      id: 'sec-37-10',
      pageNumber: 3168,
      sectionNumber: '37.10',
      title: 'Historia: „Nie chcę być pierwszy” — Paraliż pierwszego kroku w tłumie',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      paragraphs: [
        'Kamil uczestniczy w zebraniu wspólnoty mieszkaniowej. Deweloper proponuje wycięcie stuletniego dębu na dziedzińcu, by zbudować 4 dodatkowe miejsca parkingowe. Przewodniczący mówi: „Rozumiem, że wszyscy są za parkingiem, to oczywista korzyść dla wartości naszych lokali”.',
        'Kamil kocha to drzewo. W lecie daje cień, ptaki w nim śpiewają, jest sercem osiedla. Kamil czuje ucisk w klatce piersiowej. Rozgląda się po sali. 40 sąsiadów milczy. Kamil myśli: „Jeśli podniosę rękę, nazwą mnie ekoterrorystą, powiedzą, że przez mnie nie mają gdzie parkować”. Siedzi cicho z opuszczoną głową.',
        'W ten sposób powstaje FAŁSZYWA JEDNOMYŚLNOŚĆ.'
      ]
    },

    // 37.11
    {
      id: 'sec-37-11',
      pageNumber: 3180,
      sectionNumber: '37.11',
      title: 'Milczenie jako zachowanie społeczne: Dlaczego brak sprzeciwu nie jest zgodą',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'W kulturze funkcjonuje szkodliwe przysłowie: „Milczenie oznacza zgodę”. W psychologii społecznej milczenie najczęściej oznacza STRACH, ZMĘCZENIE lub BEZRADNOŚĆ.',
        'Człowiek milczy, gdy:\n- Koszt sprzeciwu przewyższa jego bieżące zasoby energetyczne,\n- Boi się odwetu ze strony dominującego lidera,\n- Uważa, że jego głos i tak niczego nie zmieni,\n- Doświadcza zjawiska pluralistycznej ignorancji.',
        'Mądry lider nigdy nie interpretuje milczenia zespołu jako sukcesu. Wie, że milczenie jest grobowcem innowacyjności i bezpieczeństwa organizacji.'
      ]
    },

    // 37.12
    {
      id: 'sec-37-12',
      pageNumber: 3192,
      sectionNumber: '37.12',
      title: 'Fałszywa jednomyślność: Pluralistyczna ignorancja w praktyce decyzyjnej',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Poniższy moduł analityczny dekonstruuje mechanizm, dzięki któremu grupa 40 osób podejmuje decyzję, której w rzeczywistości nie popiera prawie nikt.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-12-czy-grupa-sie-zgadza',
        type: 'dual_perspectives',
        title: 'Czy grupa naprawdę się zgadza? — Anatomia Pluralistycznej Ignorancji',
        subtitle: 'Konfrontacja fasady publicznej z prywatnymi myślami członków zebrania',
        context: 'Głosowanie nad wycięciem stuletniego dębu na zebraniu wspólnoty mieszkaniowej.',
        dualPerspective: {
          situation: 'Przewodniczący pyta: „Kto jest przeciw wycięciu?”. Nikt nie podnosi ręki.',
          personA: {
            name: 'Kamil (Mieszkaniec bloku A)',
            quote: 'Chcę ocalić drzewo, ale skoro 39 innych sąsiadów milczy, to widocznie tylko ja jestem sentymentalnym dziwakiem.',
            whatTheyKnow: 'Widzi milczenie innych i interpretuje je jako 100% poparcie dla parkingu.',
            whatTheyMiss: 'Nie wie, że 28 innych sąsiadów myśli dokładnie to samo co on.',
            interpretation: '„Jestem w beznadziejnej mniejszości”.',
            coreNeed: 'Bezpieczeństwo relacyjne z sąsiadami, unikanie ostracyzmu.',
            fear: 'Publiczny atak i etykieta wichrzyciela.',
            action: 'Trzymanie rąk w kieszeniach, wzrok wbity w podłogę.'
          },
          personB: {
            name: 'Pani Barbara (Mieszkanka bloku B)',
            quote: 'Serce mi pęka na myśl o wycince, ale Kamil i młodzi z klatki milczą, a oni znają się na przepisach. Nie będę się błaźnić.',
            whatTheyKnow: 'Widzi milczącego Kamila i uważa go za eksperta.',
            whatTheyMiss: 'Że Kamil milczy dokładnie z tego samego powodu co ona.',
            interpretation: '„Wszyscy uznali wycinkę za konieczną”.',
            coreNeed: 'Spokój na emeryturze, niechęć do bycia wyśmianą.',
            fear: 'Upokorzenie przez przewodniczącego.',
            action: 'Milczenie i ciche westchnienie.'
          },
          synthesis: 'Ponad 70% mieszkańców prywatnie kocha drzewo. Jednak wzajemna obserwacja swojego milczenia stworzyła iluzję jednomyślnej zgody na wycinkę. Drzewo padnie nie z powodu złej woli, lecz z powodu braku pierwszego odważnego głosu.'
        },
        takeaway: 'Nigdy nie zakładaj, że milczący tłum się zgadza. Zanim ulegniesz — zapytaj na głos: „A co myślą ci, którzy do tej pory milczeli?”.'
      }
    },

    // 37.13
    {
      id: 'sec-37-13',
      pageNumber: 3208,
      sectionNumber: '37.13',
      title: 'Co się dzieje, gdy pojawia się pierwszy sprzeciw? Psychologia rozbicia monolitu',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W eksperymentach Ascha moment, w którym jeden podstawiony pomocnik eksperymentatora wyłamywał się z grupy i podawał poprawną odpowiedź, wywoływał natychmiastową zmianę neurobiologiczną u badanego.',
        'Poziom pobudzenia lękowego w ciele migdałowatym gwałtownie spadał. Obecność choćby JEDNEGO sojusznika prawdy sprawia, że człowiek przestaje czuć się szaleńcem. Nawet jeśli sojusznik podawał INNĄ błędną odpowiedź (czyli grupa dzieliła się na frakcje 6 vs 1 vs 1) — sam fakt braku monolitu wystarczał, by przywrócić badanemu odwagę do samodzielnego myślenia!',
        'Monolit społeczny jest kruchy jak szkło: wystarczy jedno małe pęknięcie, by cała hipnotyczna siła konformizmu legła w gruzach.'
      ]
    },

    // 37.14
    {
      id: 'sec-37-14',
      pageNumber: 3220,
      sectionNumber: '37.14',
      title: 'Historia: „Jedna osoba mówi NIE” — Efekt kaskadowej odwagi',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wróćmy na zebranie wspólnoty Kamila. W chwili, gdy przewodniczący bierze już pieczątkę do zatwierdzenia protokołu, z ostatniego rzędu wstaje starszy pan Stanisław — emerytowany nauczyciel biologii.',
        'Mówi spokojnym, donośnym głosem: „Proszę pana, ja nie wyrażam zgody na wycinkę. Ten dąb rósł tu, gdy budowano te bloki 50 lat temu. Żadne cztery blaszane samochody nie są warte zniszczenia żywego pomnika przyrody”.',
        'W sali dzieje się coś niezwykłego. W ciągu 3 sekund rękę podnosi Kamil: „Ja też jestem przeciw!”. Za nim wstaje pani Barbara: „I ja!”. W ciągu dwóch minut 26 osób deklaruje sprzeciw. Przewodniczący chowa pieczątkę. Projekt parkingu upada.',
        'Pan Stanisław nie przekonał 26 osób swoimi argumentami biologicznymi. On po prostu ZDJĄŁ Z NICH PARALIŻUJĄCY LĘK PRZED BYCIEM PIERWSZYM.'
      ]
    },

    // 37.15
    {
      id: 'sec-37-15',
      pageNumber: 3232,
      sectionNumber: '37.15',
      title: 'Konformizm publiczny a prywatne przekonanie: Życie w rozszczepieniu',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Długotrwały konformizm publiczny (mówienie tego, czego chce partia, szef czy rodzina, przy wewnętrznym sprzeciwie) ma potworny koszt psychologiczny.',
        'Prowadzi do tzw. DYSONANSU MORALNEGO i erozji poczucia tożsamości. Człowiek, który przez lata publicznie klaszcze ideom, którymi prywatnie gardzi, zaczyna odczuwać wstręt do samego siebie. Aby uciec przed tym wstrętem, mózg często uruchamia ostateczną racjonalizację obronną: zaczyna naprawdę wierzyć w kłamstwo, byle tylko zlikwidować bolesne pęknięcie wewnętrzne.'
      ]
    },

    // 37.16
    {
      id: 'sec-37-16',
      pageNumber: 3244,
      sectionNumber: '37.16',
      title: 'Grupa jako źródło informacji: Mądrość tłumu a szaleństwo stada',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Francis Galton w 1906 roku na targach rolniczych w Plymouth poprosił 787 mieszkańców o oszacowanie wagi oprawionego wołu. Żaden z uczestników indywidualnie nie podał dokładnej wagi. Jednak ŚREDNIA ze wszystkich 787 głosów wyniosła 1197 funtów — dokładnie o jeden funt mniej niż rzeczywista waga zwierzęcia (1198 funtów)!',
        'To jest MĄDROŚĆ TŁUMU (Wisdom of Crowds). Kiedy jednak tłum jest mądry? Tylko wtedy, gdy spełnione są trzy warunki Surowieckiego:\n1. RÓŻNORODNOŚĆ opinii,\n2. NIEZALEŻNOŚĆ osądów (ludzie nie mogą widzieć odpowiedzi innych przed oddaniem własnego głosu),\n3. DECENTRALIZACJA.',
        'W momencie, gdy ludzie zaczynają na siebie patrzeć i ulegać presji większości — mądrość tłumu zamienia się w histerię stada.'
      ]
    },

    // 37.17
    {
      id: 'sec-37-17',
      pageNumber: 3256,
      sectionNumber: '37.17',
      title: 'Kiedy dostosowanie jest racjonalne? Granica między kooperacją a oportunizmem',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Nie każde dostosowanie jest słabością. Życie w społeczeństwie wymaga tysięcy codziennych kompromisów konformistycznych: stajemy w kolejce, nosimy ubrania adekwatne do sytuacji, przestrzegamy reguł ruchu drogowego.',
        'Kiedy dostosowanie jest cnotą kooperacji? Wtedy, gdy służy wspólnemu dobru i NIE ŁAMIE TWOICH FUNDAMENTALNYCH WARTOŚCI MORALNYCH ANI FAKTÓW NAUKOWYCH.\nKiedy staje się oportunizmem? Wtedy, gdy zapierasz się prawdy, krzywdzisz niewinnego lub milczysz wobec zła wyłącznie po to, by ocalić własną wygodę i święty spokój.'
      ]
    },

    // 37.18
    {
      id: 'sec-37-18',
      pageNumber: 3268,
      sectionNumber: '37.18',
      title: 'Kiedy grupa zaczyna popełniać wspólny błąd? Kaskady informacyjne i polaryzacja',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zjawisko KASKADY INFORMACYJNEJ (Bikhchandani, Hirshleifer, Welch) polega na tym, że każdy kolejny decydent ignoruje swoje prywatne sygnały, opierając się wyłącznie na obserwacji decyzji poprzedników.',
        'Przykład: Pierwszy lekarz stawia wstępną, błędną diagnozę. Drugi lekarz widzi wpis autorytetu i choć ma wątpliwości, nie chce podważać kolegi. Trzeci lekarz widzi, że „dwóch specjalistów się zgadza”, więc bez czytania wyników podpisuje receptę. Pacjent umiera na uleczalną chorobę, mimo że w procesie uczestniczyło trzech wybitnych ekspertów!'
      ]
    },

    // 37.19
    {
      id: 'sec-37-19',
      pageNumber: 3280,
      sectionNumber: '37.19',
      title: 'Historia wieloosobowa: Jak zespół ekspertów zjechał w przepaść',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Poniższy moduł analityczny odtwarza chronologię katastrofy decyzyjnej w zespole inwestycyjnym Rafała.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-19-kiedy-skrecila',
        type: 'loop',
        title: 'W którym momencie grupa skręciła? — Kaskada milczenia',
        subtitle: 'Chronologia narastania błędu zbiorowego',
        context: 'Projekt Orion za 15 mln euro. Od pierwszych wątpliwości do katastrofy.',
        loopSteps: [
          {
            step: 1,
            title: 'Narzucenie tonu przez autorytet',
            actor: 'Wiceprezes',
            action: 'Deklaracja sukcesu przed zebraniem danych: „Jesteśmy elitą, która dowozi wyniki”.',
            interpretationByOther: '„Krytyka będzie uznana za brak profesjonalizmu”.',
            emotionalTrigger: 'Lęk przed etykietą hamulcowego.',
            counterAction: 'Milczenie dyrektora jakości.'
          },
          {
            step: 2,
            title: 'Kaskada atrybucji',
            actor: 'Główny Architekt',
            action: 'Widząc milczenie dyrektora jakości, chowa swój raport do teczki.',
            interpretationByOther: '„Skoro dział jakości nie widzi problemu, widocznie moje obawy są przesadzone”.',
            emotionalTrigger: 'Pluralistyczna ignorancja.',
            counterAction: 'Uniesienie ręki za projektem.'
          },
          {
            step: 3,
            title: 'Aklamacja i domknięcie pułapki',
            actor: 'Rafał i reszta sali',
            action: 'Jednogłośne podniesienie rąk z uśmiechami.',
            interpretationByOther: 'Wiceprezes myśli: „Miałem rację, wszyscy popierają plan!”.',
            emotionalTrigger: 'Złudzenie nieomylności (Groupthink).',
            counterAction: 'Podpisanie kontraktu bez poprawek.'
          },
          {
            step: 4,
            title: 'Katastrofa w świecie realnym',
            actor: 'Rzeczywistość techniczna',
            action: 'Serwery padają po 45 minutach od premiery.',
            interpretationByOther: 'Wszyscy wzajemnie oskarżają się o ukrywanie prawdy.',
            emotionalTrigger: 'Wstyd, zwolnienia, utrata reputacji.',
            counterAction: 'Przejście do audytu śledczego.'
          }
        ],
        takeaway: 'Grupa zjeżdża w przepaść w chwili, gdy lojalność wobec przełożonego staje się ważniejsza niż szacunek dla faktów.'
      }
    },

    // 37.20
    {
      id: 'sec-37-20',
      pageNumber: 3295,
      sectionNumber: '37.20',
      title: 'Presja rówieśnicza: Neurobiologia nastolatka i ból odrzucenia z paczki',
      category: 'neuronauka',
      readingTimeMinutes: 22,
      paragraphs: [
        'Dla nastolatka wykluczenie z grupy rówieśniczej jest neurobiologicznym odpowiednikiem zagrożenia fizycznej śmierci. Kora przedczołowa jest w fazie intensywnej przebudowy synaptycznej (pruning), podczas gdy układ dopaminergiczny i układ nagrody społecznej pracują na maksymalnych obrotach.',
        'Badania Laurence’a Steinberga wykazały, że nastolatkowie w obecności rówieśników podejmują DWUKROTNIE większe ryzyko w grze samochodowej (przejeżdżanie na żółtym świetle) niż gdy grają sami. U dorosłych obecność rówieśników nie zmieniała wskaźnika ryzyka!',
        'Karcić nastolatka za uleganie paczce bez zrozumienia tej biologicznej podatności jest bezcelowe. Młody człowiek potrzebuje bezpiecznej bazy w rodzinie, by mieć odwagę postawić się stadu.'
      ]
    },

    // 37.21
    {
      id: 'sec-37-21',
      pageNumber: 3308,
      sectionNumber: '37.21',
      title: 'Presja grupy w pracy: Jak korporacje hodują konformizm i niszczą innowacje',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W korporacjach konformizm rzadko wymusza się krzykiem. Wymusza się go KULTURĄ „FITU KULTUROWEGO” i subtelnymi nagrodami statusowymi.',
        'Pracownik szybko uczy się, że karierę robią ci, którzy ładnie ubierają pomysły zarządu w modne slajdy, a nie ci, którzy zadają trudne pytania o opłacalność. Powstaje tzw. FUNKCJONALNA GŁUPOTA (Alvesson & Spicer): inteligentni oameni dobrowolnie rezygnują z używania własnego krytycyzmu na rzecz korporacyjnego spokoju.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-21-funkcjonalna-glupota',
        type: 'counter_case',
        title: 'Kontrprzypadek: Gdy asertywny lider legalizuje krytykę',
        subtitle: 'Przełamywanie kultury potakiwania w zespołach kreatywnych',
        context: 'Zebranie działu marketingu w sprawie nowej kampanii reklamowej.',
        counterCase: {
          standardTheory: 'Lider powinien zawsze głośno i entuzjastycznie przedstawić swój pomysł na początku zebrania, oczekując, że zespół od razu podchwyci jego wizję i wykaże pełną lojalność.',
          counterExample: 'Prezes Janusz wchodzi i mówi: „Oto mój pomysł na kampanię. Chcę, żebyśmy zrobili X”. Wszyscy milczą i potakują, mimo że kampania jest przestarzała. Dopiero w drugim zespole dyrektor Marek mówi: „Oto moja propozycja. A teraz mianuję Piotra oficjalnym Adwokatem Diabła — jego jedynym zadaniem na następne 20 minut jest znalezienie 5 powodów, dla których ten pomysł legnie w gruzach. Piotr, zaczynaj”. Nagle zespół ożywa, a projekt zostaje poprawiony o 40%.',
          whyItDefiesRule: 'Lider celowo delegalizuje fałszywą jednomyślność, nakładając rolę krytyka jako oficjalny, bezpieczny obowiązek zawodowy.',
          deeperLesson: 'Ludzie nie zgłoszą sprzeciwu, jeśli grozi to utratą akceptacji. Aby usłyszeć prawdę, musisz uczynić krytykę formalną normą grupy.'
        },
        takeaway: 'Chcesz innowacji? Nie pytaj „kto się nie zgadza” — wyznacz kogoś, czyim zadaniem jest się nie zgadzać.'
      }
    },

    // 37.22
    {
      id: 'sec-37-22',
      pageNumber: 3320,
      sectionNumber: '37.22',
      title: 'Presja grupy w internecie: Licznik lajków, cyfrowe stado i lincz plemienny',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W mediach społecznościowych konformizm zyskał postać zautomatyzowanego sędziego: LICZNIKA REAKCJI. Gdy wrzucasz post odbiegający od narracji Twojej bańki, spotyka Cię natychmiastowa kara: chłód algorytmiczny (brak lajków) lub zmasowany hejt.',
        'Człowiek zaczyna stosować AUTOCENZURĘ PREWENCYJNĄ: nie pisze tego, co naprawdę myśli, lecz to, co przyniesie bezpieczną porcję dopaminowej aprobaty od cyfrowego plemienia.'
      ]
    },

    // 37.23
    {
      id: 'sec-37-23',
      pageNumber: 3332,
      sectionNumber: '37.23',
      title: 'Kontrprzypadek: Człowiek odporny na presję — Co wyróżnia nonkonformistę',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Kim są ci, którzy w badaniach Ascha nigdy nie ulegli (owe 25%)? Badania osobowościowe wskazują na trzy kluczowe cechy:',
        '1. Wysokie wewnętrzne poczucie umiejscowienia kontroli (Internal Locus of Control),\n2. Niska potrzeba aprobaty społecznej przy wysokim szacunku do siebie zakorzenionym w wartościach transcendentnych,\n3. Posiadanie tzw. „bezpiecznej bazy poza grupą”: nonkonformista w pracy ma często głębokie oparcie w rodzinie, w wierze lub w pasji, dzięki czemu utrata statusu w danym zespole nie oznacza dla niego końca świata.'
      ]
    },

    // 37.24
    {
      id: 'sec-37-24',
      pageNumber: 3345,
      sectionNumber: '37.24',
      title: 'Analiza człowieka stojącego przeciwko grupie: Co wie, co ryzykuje i dlaczego mówi „nie”',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Poniższy moduł analityczny dekonstruuje stan psychiczny człowieka, który podejmuje heroiczną decyzję o sprzeciwie wobec jednomyślnego stada.'
      ],
      interactiveWindowRef: {
        id: 'iw-37-24-cena-sprzeciwu',
        type: 'microscope',
        title: 'Cena Sprzeciwu — Wiwisekcja nonkonformisty',
        subtitle: 'Co dzieje się w umyśle człowieka, który podnosi rękę przeciwko wszystkim',
        context: 'Inżynier Adam na zebraniu komisji technicznej odmawia podpisania protokołu odbioru wadliwego mostu.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: 'SYTUACJA',
            question: 'Co dokładnie się dzieje?',
            content: 'Wszyscy trzej starsi rzeczoznawcy podpisali odbiór. Dokument leży przed Adamem z długopisem.',
            subtext: 'Maksymalna presja normatywna i autorytetu.'
          },
          {
            stepNumber: 2,
            label: 'CO CZŁOWIEK WIE?',
            question: 'Jakie twarde dane posiada?',
            content: 'Wie, że próbki betonu w pylonie B wykazują mikropęknięcia przy obciążeniu dynamicznym powyżej 40 ton.',
            subtext: 'Prawda fizyczna oparta na faktach laboratoryjnych.'
          },
          {
            stepNumber: 3,
            label: 'CZEGO SIĘ OBAWIA?',
            question: 'Jaki koszt społeczny przewiduje?',
            content: 'Wie, że odmowa podpisu oznacza wstrzymanie inwestycji o 6 miesięcy, wściekłość prezydenta miasta i wilczy bilet w branży.',
            subtext: 'Realne ryzyko utraty kariery.'
          },
          {
            stepNumber: 4,
            label: 'CO CZUJE?',
            question: 'Jakie emocje zalewają ciało?',
            content: 'Potworny lęk, drżenie dłoni, suchość w gardle, ale pod spodem — żelazny spokój sumienia.',
            subtext: 'Napięcie somatyczne wygaszane przez poczucie prawości.'
          },
          {
            stepNumber: 5,
            label: 'CO WYBIERA?',
            question: 'Dlaczego podejmuje decyzję o sprzeciwie?',
            content: 'Mówi: „Nie podpiszę. Jeśli ten most runie za dwa lata z autobusem pełnym dzieci, nie spojrzę w lustro”.',
            subtext: 'Wierność nadrzędnym wartościom etycznym ponad lojalność stada.'
          }
        ],
        takeaway: 'Nonkonformizm nie jest brakiem strachu. Jest świadomością, że istnieje coś znacznie ważniejszego niż opinia otoczenia: własne człowieczeństwo i wierność faktom.'
      }
    },

    // 37.25
    {
      id: 'sec-37-25',
      pageNumber: 3360,
      sectionNumber: '37.25',
      title: 'SYNTEZA: Konformizm jako wynik gry sił między informacją, normą a sumieniem',
      category: 'podsumowanie',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zakończmy ten rozdział wielką syntezą. Konformizm nie jest anomalią — jest potężnym polem magnetycznym ludzkiego życia społecznego.',
        'Człowiek mądry nie udaje, że jest na to pole niewrażliwy. Wie, jak silnie oddziałuje na niego opinia stada. Właśnie dlatego buduje świadome zabezpieczenia: szuka sojuszników prawdy, wprowadza procedury anonimowego zgłaszania błędów i trenuje swój głos w drobnych sprawach codziennych, by nie zawiódł go w chwili próby.',
        'Zrozumieliśmy dynamikę grupy. Pozostaje jednak jeszcze jedno, być może najbardziej fascynujące i bezwzględne pytanie psychologii społecznej: Dlaczego w każdej grupie, od piaskownicy po zarząd państwa, natychmiast wyłania się HIERARCHIA? Dlaczego ludzie tak obsesyjnie walczą o STATUS, porównują się z innymi i jak zmiana pozycji społecznej potrafi zmienić mózg i zachowanie człowieka? Temu zagadnieniu poświęcimy finałowy, 38. Rozdział naszego bloku: STATUS, HIERARCHIA I POZYCJA SPOŁECZNA.'
      ]
    }
  ]
};

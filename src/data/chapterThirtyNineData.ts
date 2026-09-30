import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 23 (GLOBALNIE ROZDZIAŁ 39 W STRUKTURZE DZIEŁA)
 * TYTUŁ: PERSWAZJA — JAK LUDZIE ZMIENIAJĄ CUDZE PRZEKONANIA
 * PODTYTUŁ: Dlaczego człowiek czasami zmienia zdanie pod wpływem drugiej osoby, a czasami mimo bardzo silnych argumentów pozostaje przy swoim
 */

export const chapterThirtyNineExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest kluczowa różnica funkcjonalna między perswazją a manipulacją w ujęciu etyki komunikacyjnej i psychologii poznawczej?',
    topic: 'Definicja Perswazji i Granica Manipulacji',
    sectionRef: 'Sekcja 39.2',
    options: [
      { label: 'A', text: 'Perswazja opiera się na jawności intencji nadawcy, rzetelności informacji oraz pełnej autonomii odbiorcy do odrzucenia argumentu bez ukrytych kosztów psychologicznych.', isCorrect: true },
      { label: 'B', text: 'Perswazja polega na używaniu łagodniejszych słów, podczas gdy cel zawsze pozostaje utajony.', isCorrect: false },
      { label: 'C', text: 'Manipulacja zachodzi wyłącznie w polityce, a perswazja w relacjach rodzinnych.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy naukowej — każde przekonywanie jest formą ukrytego przymusu.', isCorrect: false }
    ],
    explanation: 'Fundamentalnym kryterium odróżniającym perswazję od manipulacji jest transparentność celu, symetria informacyjna oraz rzeczywiste poszanowanie wolnej woli i prawa odbiorcy do powiedzenia „nie”.',
    keyTakeaway: 'Perswazja zaprasza do dialogu i wspólnej weryfikacji faktów; manipulacja zniekształca pole decyzyjne, by wymusić pożądany rezultat.'
  },
  {
    id: 2,
    question: 'Zgodnie z Modelem Prawdopodobieństwa Przetwarzania (ELM — Petty & Cacioppo), kiedy odbiorca przetwarza komunikat torem centralnym?',
    topic: 'Model ELM Petty’ego i Cacioppo',
    sectionRef: 'Sekcja 39.13 & 39.14',
    options: [
      { label: 'A', text: 'Wtedy, gdy posiada jednocześnie wysoką motywację osobistą oraz poznawczą zdolność (czas, wiedzę, skupienie uwagi) do krytycznej analizy argumentów.', isCorrect: true },
      { label: 'B', text: 'Zawsze wtedy, gdy nadawca jest ubrany w drogi garnitur i posługuje się żargonem naukowym.', isCorrect: false },
      { label: 'C', text: 'Tylko pod wpływem silnego stresu i podwyższonego tętna powyżej 120 bpm.', isCorrect: false },
      { label: 'D', text: 'Gdy komunikat jest powtarzany co najmniej pięćdziesiąt razy w mediach społecznościowych.', isCorrect: false }
    ],
    explanation: 'Tor centralny wymaga zaangażowania zasobów metabolicznych kory przedczołowej. Wymaga on zarówno chęci (znaczenie tematu dla jednostki), jak i możliwości poznawczych (brak dystraktorów, odpowiednia wiedza bazowa).',
    keyTakeaway: 'Trwała zmiana przekonań następuje głównie w torze centralnym; tor peryferyjny generuje zmiany powierzchowne i podatne na kontrargumenty.'
  },
  {
    id: 3,
    question: 'Czym jest zjawisko reaktancji psychologicznej (Psychological Reactance) opisane przez Jacka Brehma?',
    topic: 'Opór Psychologiczny i Reaktancja',
    sectionRef: 'Sekcja 39.17',
    options: [
      { label: 'A', text: 'Nieprzyjemnym stanem pobudzenia motywacyjnego pojawiającym się, gdy jednostka czuje, że jej swoboda wyboru lub autonomia zostaje zagrożona, co prowadzi do buntu i umocnienia pierwotnego stanowiska.', isCorrect: true },
      { label: 'B', text: 'Zdolnością do natychmiastowego zapamiętywania liczb i faktów pod presją czasu.', isCorrect: false },
      { label: 'C', text: 'Utratą pamięci krótkotrwałej w trakcie publicznych wystąpień.', isCorrect: false },
      { label: 'D', text: 'Całkowitą obojętnością emocjonalną na argumenty drugiej strony.', isCorrect: false }
    ],
    explanation: 'Reaktancja to ewolucyjny mechanizm ochrony suwerenności ja. Gdy nacisk perswazyjny jest zbyt agresywny, odbiorca przestaje oceniać meritum argumentu, a skupia całą energię na odzyskaniu poczucia wolności.',
    keyTakeaway: 'Zbyt silny nacisk wywołuje efekt bumerangowy: odbiorca odrzuca nawet najlepszy argument, by chronić własną autonomię.'
  },
  {
    id: 4,
    question: 'Dlaczego zmiana postawy lub przekonania („Uważam”) tak często nie prowadzi do zmiany rzeczywistego zachowania („Robię”)?',
    topic: 'Luka Między Postawą a Działaniem (Attitude-Behavior Gap)',
    sectionRef: 'Sekcja 39.21',
    options: [
      { label: 'A', text: 'Ponieważ zachowanie jest determinowane nie tylko deklarowanym przekonaniem, ale również nawykami, normami subiektywnymi otoczenia, poziomem postrzeganej kontroli (PBC) oraz kosztami energetycznymi działania.', isCorrect: true },
      { label: 'B', text: 'Ponieważ ludzie zawsze kłamią w badaniach ankietowych.', isCorrect: false },
      { label: 'C', text: 'Świadczy to o wrodzonym uszkodzeniu płatów czołowych u większości populacji.', isCorrect: false },
      { label: 'D', text: 'Gdyż przekonania intelektualne nie mają żadnego połączenia z układem motorycznym.', isCorrect: false }
    ],
    explanation: 'Teoria Planowanego Zachowania (Ajzen) dowodzi, że postawa to zaledwie jeden z czynników. Presja stada, brak zasobów, nawykowe skrypty podkorowe i doraźny dyskomfort często blokują realizację nowo przyjętego przekonania.',
    keyTakeaway: 'Skuteczna perswazja zmieniająca życie musi projektować nie tylko argument intelektualny, ale także usuwać bariery wdrożeniowe w środowisku działania.'
  }
];

export const chapterThirtyNineCaseStudies: CaseStudy[] = [
  {
    id: 'cs-39-1-innowacja-w-szpitalu',
    title: 'Studium Przypadku: Bitwa o Nowy Protokół Chirurgiczny',
    context: 'Szpital kliniczny w dużym mieście wojewódzkim. Dr Tomasz (35 lat), młody chirurg po stażu w Bostonie, próbuje przekonać ordynatora prof. Jana (62 lata) do wprowadzenia checklisty przedoperacyjnej WHO.',
    characters: [
      { name: 'Dr Tomasz', role: 'Inicjator zmiany', personality: 'Ambitny, zorientowany na dane empiryczne, niecierpliwy, skłonny do mentorsko-akademickiego tonu.' },
      { name: 'Prof. Jan', role: 'Ordynator oddziału', personality: 'Wybitny operator z 35-letnim stażem, dumny ze swojej intuicji i nieomylności, wyczulony na punkcie szacunku i hierarchii.' }
    ],
    dilemma: 'Jak przekonać autorytet z kilkudziesięcioletnim doświadczeniem do zmiany nawyków, nie uruchamiając u niego obronnej reaktancji i poczucia zamachu na status?',
    timeline: [
      { time: 'Tydzień 1', event: 'Tomasz drukuje 40 stron artykułów z The New England Journal of Medicine i kładzie je na biurku ordynatora ze słowami: „W Ameryce to standard, u nas operujemy jak w latach 90.”.' },
      { time: 'Tydzień 2', event: 'Prof. Jan nawet nie otwiera teczki. Na odprawie publicznie ironizuje: „Niektórzy koledzy zamiast uczyć się szyć, wolą czytać amerykańskie broszurki”. Tomasz czuje upokorzenie i wściekłość.' },
      { time: 'Tydzień 4', event: 'Podczas rutynowego zabiegu dochodzi do omyłkowego podania antybiotyku, na który pacjent był uczulony — sytuację udaje się opanować, ale napięcie sięga zenitu.' },
      { time: 'Tydzień 5', event: 'Tomasz zmienia strategię: zamiast pouczać, prosi profesora o konsultację: „Panie Profesorze, w trudnych operacjach naczyniowych presja na zespół jest nieludzka. Czy mógłby Pan rzucić okiem na 5 punktów, które odciążyłyby asystentów z pamiętania o dawkach leków?”.' },
      { time: 'Tydzień 6', event: 'Profesor redaguje punkty własnym wiecznym piórem, dodaje dwie autorskie poprawki i wprowadza dokument jako „Protokół Bezpieczeństwa Kliniki Profesora Jana”.' }
    ],
    psychologicalDynamics: {
      cognitiveBiases: [
        { biasName: 'Efekt Reaktancji (Reactance)', manifestation: 'Profesor odrzucił twarde fakty medyczne, bo komunikat Tomasza godził w jego poczucie suwerenności i status.' },
        { biasName: 'Błąd Etykietowania (Labeling)', manifestation: 'Tomasz zdefiniował opór profesora jako „zacofanie”, ignorując jego potrzebę zachowania prestiżu mentora.' },
        { biasName: 'Efekt IKEA (IKEA Effect)', manifestation: 'Gdy profesor osobiście przeredagował checklistę, uznał ją za własny projekt i stał się jej najgorętszym obrońcą.' }
      ],
      emotionalStates: [
        { trigger: 'Sformułowanie „operujemy jak w latach 90.”', emotion: 'Poczucie zagrożenia tożsamości profesjonalnej u ordynatora.' },
        { trigger: 'Prośba o autorską korektę dokumentu', emotion: 'Poczucie kompetencji, uznanie statusu i powrót do roli opiekuńczego lidera.' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Noradrenalina', roleInScenario: 'Aktywowane u profesora w momencie ataku na jego autorytet, wywołały obronny cynizm i zamknięcie poznawcze.' },
        { name: 'Dopamina', roleInScenario: 'Uruchomiona w fazie współtworzenia checklisty, połączyła innowację z nagrodą prestiżową.' }
      ],
      biologicalTimeline: [
        { timeMs: '0-200 ms', process: 'Rejestracja zagrożenia hierarchicznego w ciele migdałowatym profesora.' },
        { timeMs: '500-1500 ms', process: 'dlPFC generuje sarkastyczną ripostę jako pancerz obronny statusu.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Perswazja torem centralnym bez uwzględnienia relacji (Tomasz faza I)', description: 'Zalanie rozmówcy suchymi danymi przy jednoczesnym podważeniu jego godności.', vulnerabilityExploited: 'Brak — taktyka całkowicie nieskuteczna.' },
        { tactic: 'Ramowanie partycypacyjne (Tomasz faza II)', description: 'Przekazanie autorstwa i kontroli nad wdrożeniem odbiorcy perswazji.', vulnerabilityExploited: 'Potrzeba uznania statusu i znaczenia.' }
      ],
      counterMeasures: [
        { step: 'Oddzielenie argumentu od ataku na status', script: '„Ten protokół nie podważa pańskich umiejętności, lecz chroni zespół przed zmęczeniem”.', rationale: 'Gasi alarm limbiczny.' }
      ]
    },
    keyTakeaway: 'Nawet najdoskonalszy dowód naukowy zostanie zniszczony przez opór psychologiczny, jeśli jego przedstawienie wymaga od rozmówcy publicznego przyznania się do wieloletniej niekompetencji.'
  }
];

export const chapterThirtyNineExercises: SelfExercise[] = [
  {
    id: 'ex-39-audyt-perswazji',
    title: 'Autodiagnostyka Wpływu: Czy Przekonujesz, czy Wymuszasz?',
    subtitle: 'Narzędzie dekonstrukcji własnych nawyków komunikacyjnych w sporach i negocjacjach',
    objective: 'Zidentyfikowanie własnych tendencji do ulegania reaktancji, fałszywego ramowania oraz przeskakiwania z perswazji do nacisku.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Świadoma autorefleksja nad własnym stylem perswazyjnym aktywuje grzbietowo-przyśrodkową korę przedczołową (dmPFC), tłumiąc nawykową agresję werbalną.',
    steps: [
      {
        stepNumber: 1,
        title: 'Analiza Ostatniego Sporu',
        instruction: 'Przypomnij sobie sytuację z ostatnich dwóch tygodni, w której ktoś uparcie nie chciał zgodzić się z twoim stanowiskiem (w pracy lub w domu).',
        promptText: 'Jaka była twoja pierwsza automatyczna reakcja na jego sprzeciw?',
        placeholder: 'Np. Podniosłem głos, powtórzyłem ten sam argument szybciej i pomyślałem, że rozmówca jest po prostu złośliwy...'
      },
      {
        stepNumber: 2,
        title: 'Test Reaktancji i Autonomii',
        instruction: 'Czy w twoim komunikacie znajdowało się jawne lub ukryte zdanie odbierające drugiej stronie wolność wyboru (np. „Nie masz innego wyjścia”, „Każdy rozsądny człowiek to wie”)?',
        promptText: 'W jaki sposób mógłbyś przeformułować swój argument, by jednoznacznie potwierdzić autonomię rozmówcy?',
        placeholder: 'Np. „Wiem, że ostateczna decyzja należy wyłącznie do ciebie. Chciałbym ci tylko pokazać dane, które mnie przekonały...”'
      }
    ],
    reflectionQuestions: [
      'Dlaczego tak bardzo boimy się dać drugiej osobie pełne prawo do niezgody z naszym zdaniem?',
      'Czy twoje argumenty są dopasowane do wartości rozmówcy, czy wyłącznie do twoich własnych potrzeb?'
    ]
  }
];

export const chapterThirtyNine: Chapter = {
  number: 39,
  volume: 3,
  volumeChapterNumber: 23,
  title: 'Perswazja — Jak Ludzie Zmieniają Cudze Przekonania',
  subtitle: 'Dlaczego człowiek czasami zmienia zdanie pod wpływem drugiej osoby, a czasami mimo bardzo silnych argumentów pozostaje przy swoim',
  leadParagraph: `Perswazja nie jest magiczną sztuczką ani tajnym zestawem zaklęć manipulacyjnych. W dojrzałym ujęciu psychologicznym to dynamiczny, relacyjny proces komunikacyjny, w którym nadawca oferuje racje, dane i perspektywę, a autonomiczny odbiorca waży je w oparciu o własne zasoby poznawcze, tożsamość, emocje i zaufanie do źródła. Zrozumienie perswazji to odkrycie, dlaczego żelazna logika przegrywa z lękiem przed utratą twarzy i jak budować mosty porozumienia tam, gdzie wcześniej stały mury obronnego uporu.`,
  totalEstimatedPages: 68,
  sections: [
    // 39.1
    {
      id: 'sec-39-1',
      pageNumber: 1,
      sectionNumber: '39.1',
      title: 'Czym właściwie jest perswazja? Odgraniczenie pojęciowe od przymusu, manipulacji i czystej informacji',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Perswazję można zdefiniować jako udaną, celową próbę wywarcia wpływu na stan psychiczny drugiej osoby poprzez komunikację, w warunkach, w których odbiorca zachowuje pewną miarę wolności wyboru i interpretacji.',
        author: 'Prof. Daniel J. O’Keefe',
        source: 'Northwestern University, „Persuasion: Theory and Research”, SAGE Publications, 2015'
      },
      paragraphs: [
        'W potocznym dyskursie słowo „perswazja” bywa niebezpiecznie mylone z manipulacją, hipnozą, propagandą lub wyrafinowanym przymusem. Ludzie powiadają: „Użył wobec mnie perswazji”, mając na myśli, że zostali zmuszeni do czegoś wbrew woli. Psychologia komunikacji i filozofia języka kategorycznie odrzucają to uproszczenie. Perswazja jest zjawiskiem szlachetnym, leżącym u samych podstaw demokracji, nauki, prawa i dojrzałego współżycia społecznego.',
        'Aby precyzyjnie zrozumieć naturę perswazji, musimy przeprowadzić rygorystyczne rozgraniczenie pojęciowe pomiędzy sześcioma formami oddziaływania społecznego:',
        '1. INFORMOWANIE (Informing): Nadawca dzieli się danymi bez intencji ukierunkowywania wyboru odbiorcy („Pociąg do Krakowa odjeżdża o 14:15”). Cel poznawczy kończy się na przekazaniu faktów.',
        '2. ARGUMENTACJA (Argumentation): Strukturalne przedstawienie przesłanek prowadzących do określonego wniosku logicznego. Może być chłodna i bezosobowa, skupiona wyłącznie na wartości prawdy (prawda/fałsz).',
        '3. PERSWAZJA (Persuasion): Celowe oddziaływanie na postawy, przekonania, intencje lub zachowania odbiorcy, w którym cel nadawcy jest jawny, argumenty podlegają weryfikacji, a odbiorca zachowuje pełne prawo i realną swobodę odrzucenia propozycji.',
        '4. NACISK / PRESJA (Pressure): Wywieranie wpływu poprzez podnoszenie kosztów emocjonalnych odmowy (np. dąsy, wywoływanie zniecierpliwienia, pośpieszanie, demonstracyjny chłód).',
        '5. PRZYMUS (Coercion): Drastyczne ograniczenie lub likwidacja alternatyw poprzez groźbę zastosowania sankcji fizycznej, prawnej lub materialnej („Zrób to, albo cię zwolnię”).',
        '6. MANIPULACJA (Manipulation): Wpływ, w którym rzeczywisty cel, architektura wyboru lub kluczowe informacje zostają celowo zatajone przed odbiorcą, by skłonić go do działania korzystnego dla manipulatora, a potencjalnie szkodliwego dla niego samego.',
        'Perswazja różni się od przymusu obecnością wolności; różni się od manipulacji obecnością prawdy i transparentności intencji.'
      ],
      subsections: [
        {
          id: 'sub-39-1-1',
          title: 'Analiza słów prof. Daniela O’Keefe: Wolność jako Warunek Konieczny Perswazji',
          content: [
            'Profesor Daniel O’Keefe w swojej klasycznej definicji kładzie nacisk na warunek „miary wolności wyboru”. Jeśli odbiorca nie może powiedzieć „nie” bez obawy o natychmiastową utratę środków do życia, zdrowia czy bezpieczeństwa bliskich — nie mamy do czynienia z perswazją, lecz z wymuszeniem.',
            'Prawdziwa perswazja szanuje podmiotowość człowieka. Oznacza to, że nadawca przedstawia swoje racje przed trybunałem rozumu i emocji odbiorcy, uznając, że ostateczny wyrok należy do drugiej strony. Z chwilą gdy zaczynasz karać rozmówcę za brak zgody, opuszczasz terytorium perswazji i wkraczasz w rewir przemocy psychicznej.'
          ],
          highlightBox: {
            title: 'Kryterium Diagnostyczne: Test Prawa do Odmowy',
            content: 'Zadaj sobie pytanie: „Co stanie się w naszej relacji, jeśli mój rozmówca spokojnie odpowie: «Wysłuchałem twoich argumentów, ale nie zgadzam się z nimi i wybieram inaczej»?”. Jeśli twoją reakcją jest wściekłość, obraza lub chęć odwetu — nigdy nie uprawiałeś perswazji; próbowałeś narzucić swoją wolę.',
            type: 'insight'
          }
        }
      ]
    },

    // 39.2
    {
      id: 'sec-39-2',
      pageNumber: 4,
      sectionNumber: '39.2',
      title: 'Perswazja a manipulacja: Transparentność celu, asymetria informacji i nienaruszalność autonomii',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'Granica między perswazją a manipulacją bywa w życiu codziennym subtelna, lecz z punktu widzenia etyki i psychologii jest bezwzględnie ostra. Dotyczy ona trzech filarów relacyjnych:',
        'FILAR 1: JAWNOŚĆ CELU. W perswazji nadawca nie ukrywa, do czego zmierza. Handlowiec mówi: „Chcę przekonać pana do tego pakietu ubezpieczeń, bo uważam, że najlepiej zabezpieczy pana dzieci”. W manipulacji cel jest zakamuflowany pod pozorem bezinteresownej troski lub rzekomego dobra ofiary.',
        'FILAR 2: DOSTĘP DO INFORMACJI. Perswazja dostarcza rzetelnych danych, w tym nie boi się ujawnić wad i ograniczeń własnej propozycji. Manipulacja opiera się na celowej asymetrii informacyjnej: selektywnym przemilczaniu ryzyk, żonglowaniu danymi wyrwanymi z kontekstu i tworzeniu fałszywego poczucia naglącego pośpiechu (tzw. sztuczny niedobór).',
        'FILAR 3: AUTONOMIA DECYZYJNA. Perswazja wzmacnia sprawczość odbiorcy. Manipulacja systematycznie zawęża pole widzenia, gra na poczuciu winy, lęku przed odrzuceniem lub próżności, sprawiając, że ofiara podejmuje decyzję, której w warunkach pełnej wiedzy i spokoju nigdy by nie podjęła.'
      ],
      interactiveWindowRef: {
        id: 'win-39-2-wplyw-czy-manipulacja',
        title: 'MODUŁ A: Wpływ, Perswazja czy Manipulacja?',
        subtitle: 'Laboratorium analizy intencji, transparentności i poszanowania wolności wyboru',
        context: 'Ocena czterech realistycznych sytuacji z życia zawodowego i prywatnego pod kątem czystości etycznej wywieranego wpływu.',
        type: 'what_we_know',
        takeaway: 'O naturze wpływu decyduje nie to, jak płynnie mówi nadawca, lecz czy odbiorca ma pełną wiedzę i swobodę odmowy.',
        whatWeKnow: {
          items: [
            {
              id: 'case-39-2-1',
              statement: 'Lekarz mówi pacjentowi: „Rzucenie palenia zmniejszy ryzyko zawału o 50%. Wiem, że to trudne, ale oto plan terapii nikotynozastępczej, który możemy wdrożyć, jeśli pan zechce”.',
              category: 'fakt',
              explanation: 'Podręcznikowa, etyczna perswazja: cel jest jawny (zdrowie pacjenta), argumenty oparte na twardej wiedzy medycznej, a autonomia pacjenta w pełni uszanowana.'
            },
            {
              id: 'case-39-2-2',
              statement: 'Menedżer mówi: „Podpisz ten aneks rezygnujący z nadgodzin teraz, bo od jutra wchodzi nowy regulamin i możesz nie dostać żadnej premii. Robię to tylko dla twojego dobra, żebyś nie stracił”.',
              category: 'motyw',
              explanation: 'Manipulacja i nacisk: sztuczne poczucie pośpiechu, ukrycie faktów prawnych, fałszywa troska maskująca cięcie kosztów działu.'
            },
            {
              id: 'case-39-2-3',
              statement: 'Partner w związku mówi: „Jeśli pojedziesz na weekend z przyjaciółmi, widocznie nasza relacja nic dla ciebie nie znaczy i będę musiał przemyśleć naszą przyszłość”.',
              category: 'interpretacja',
              explanation: 'Szantaż emocjonalny i manipulacja poczuciem winy: podmienienie prawa do autonomii na rzekomy brak miłości.'
            },
            {
              id: 'case-39-2-4',
              statement: 'Doradca finansowy przedstawia dwie oferty kredytu: dokładnie omawia prowizje, ryzyko kursowe oraz marżę banku, wskazując opcję bezpieczniejszą.',
              category: 'fakt',
              explanation: 'Uczciwa perswazja doradcza: symetria informacyjna i transparentność bilansu zysków i strat.'
            }
          ]
        }
      }
    },

    // 39.3
    {
      id: 'sec-39-3',
      pageNumber: 7,
      sectionNumber: '39.3',
      title: 'Dlaczego człowiek zmienia przekonania? Mechanika aktualizacji modeli mentalnych w mózgu',
      category: 'neuronauka',
      readingTimeMinutes: 25,
      paragraphs: [
        'Z punktu widzenia neurobiologii poznawczej przekonanie nie jest pojedynczym plikiem zapisanym w pamięci, który można skasować i zastąpić nowym tekstem. Przekonanie jest UTRWALONĄ SIECIĄ WAG SYNAPTYCZNYCH — skomplikowaną mapą predykcyjną, którą mózg budował latami w celu przewidywania świata i oszczędzania energii metabolicznej (tzw. Predictive Processing, Karl Friston).',
        'Zmiana przekonania jest dla organizmu kosztowną rewolucją energetyczną. Wymaga wygaszenia starych szlaków neuronalnych, przeżycia błędu predykcji (Prediction Error) i przebudowy struktur w korze przedczołowej. Człowiek decyduje się na ten wydatek tylko wtedy, gdy spełnione zostaną określone warunki:',
        '1. AKUMULACJA ANOMALII: Nowe dane empiryczne nie dają się już dłużej ignorować ani wytłumaczyć przypadkiem.',
        '2. BEZPIECZEŃSTWO TOŻSAMOŚCI: Porzucenie starego poglądu nie oznacza społecznej śmierci ani wykluczenia ze stada (przynależność plemienna).',
        '3. SPÓJNOŚĆ Z CELAMI ŻYCIOWYMI: Nowe przekonanie pozwala skuteczniej działać i unikać cierpienia w realnym świecie.',
        'Gdy próba perswazji zagraża poczuciu własnej wartości odbiorcy, jego mózg natychmiast odpala błąd konfirmacji (Confirmation Bias) oraz obronne racjonalizacje, byle tylko ocalić dotychczasową strukturę neuronalną.'
      ]
    },

    // 39.4
    {
      id: 'sec-39-4',
      pageNumber: 10,
      sectionNumber: '39.4',
      title: 'Źródło komunikatu: Kim jest nadawca? Reputacja, status i zaufanie relacyjne',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Jednym z najstarszych i najbardziej zweryfikowanych odkryć psychologii społecznej (sięgającym klasycznych prac Carla Hovlanda z Uniwersytetu Yale) jest fakt, że treść argumentu niemal nigdy nie dociera do ludzkiego ucha w stanie laboratoryjnej czystości. Jest ona filtrowana przez percepcję osoby, która ten argument wypowiada.',
        'Zanim kora mózgowa zacznie przetwarzać gramatykę i logikę zdania, układ limbiczny przeprowadza błyskawiczny audyt źródła: 1) „Czy ten człowiek jest kompetentny w tej materii?”, 2) „Czy ma dobrą wolę i życzliwe intencje wobec mnie?”, 3) „Czy reprezentuje moją grupę, czy obce, zagrażające plemię?”.',
        'Jeśli źródło zostanie sklasyfikowane jako wrogie, nielojalne lub niekompetentne, nawet logiczny sylogizm matematyczny zostanie odrzucony jako podstępna pułapka. Wiarygodność nadawcy jest walutą, która otwiera bramy uwagi odbiorcy.'
      ]
    },

    // 39.5
    {
      id: 'sec-39-5',
      pageNumber: 13,
      sectionNumber: '39.5',
      title: 'Historia: „Ten sam argument, dwie osoby” — Dlaczego tożsamość źródła zmienia znaczenie słów',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Wyobraźmy sobie naradę w dużej firmie technologicznej. Na stole leży propozycja przeniesienia serwerów do chmury obliczeniowej, co wiąże się z 3-miesięcznym ryzykiem zakłóceń pracy.',
        'Jako pierwszy głos zabiera Igor — 28-letni programista, znany w firmie z częstych konfliktów, aroganckiego tonu i ciągłego narzekania na zarząd. Igor przedstawia precyzyjne wyliczenia: „Jeśli nie przejdziemy na chmurę do końca kwartału, przepustowość bazy padnie przy obciążeniu świątecznym, tracimy 200 tysięcy złotych dziennie”. Reakcja zarządu? Skrzywione miny, zniecierpliwienie prezesa: „Igor znowu panikuje i szuka dziury w całym. Wracajmy do porządku obrad”.',
        'Dwadzieścia minut później na salę wchodzi Krzysztof — główny architekt systemowy, człowiek z 15-letnim stażem, powszechnie szanowany za spokój, życzliwość wobec młodych i lojalność wobec firmy w najcięższych kryzysach. Krzysztof siada, bierze do ręki dokładnie ten sam wykres, który przygotował Igor, i mówi spokojnym głosem: „Przeanalizowałem liczby. Jeśli nie zmigrujemy bazy do chmury przed świętami, staniemy z ruchem i straty wyniosą 200 tysięcy dziennie”.',
        'Reakcja prezesa? „Dziękuję Krzysztofie. To alarmujące dane. Powołujemy zespół wdrożeniowy od jutra”.',
        'Treść argumentu była w 100% tożsama. Wykres był ten sam. Liczby były te same. Co zdecydowało o sukcesie perswazji? Wiarygodność relacyjna źródła, zaufanie do intencji oraz brak podejrzeń o ukrytą grę ego.'
      ],
      interactiveWindowRef: {
        id: 'win-39-5-dwie-perspektywy',
        title: 'MODUŁ B: Dwa Spojrzenia na Wiarygodność Źródła',
        subtitle: 'Dekonstrukcja odbioru tego samego komunikatu przez pryzmat reputacji nadawcy',
        context: 'Konfrontacja zachowania prezesa wobec Igora i Krzysztofa w sporze o migrację chmurową.',
        type: 'dual_perspectives',
        takeaway: 'Argument jest wart tyle, ile wynosi kapitał zaufania i spokoju osoby, która go artykułuje.',
        dualPerspective: {
          situation: 'Przedstawienie identycznych danych o ryzyku awarii infrastruktury IT przez dwóch różnych pracowników.',
          personA: {
            name: 'Igor (Nadawca z etykietą mąciciela)',
            quote: '„Mówię im czystą prawdę popartą wykresami, a oni mnie ignorują, bo boją się faktów!”.',
            whatTheyKnow: 'Zna doskonałe dane techniczne i ma rację co do grożącej katastrofy serwerów.',
            whatTheyMiss: 'Nie rozumie, że jego wcześniejsza agresja i arogancja zamknęły uszy słuchaczy na jakiekolwiek jego słowa.',
            interpretation: '„Zarząd to ignoranci dbający tylko o własne stołki”.',
            coreNeed: 'Potrzeba uznania własnej wyższości intelektualnej i racji.',
            fear: 'Lęk przed byciem zlekceważonym.',
            action: 'Podnoszenie głosu i publiczne rzucanie oskarżeń.'
          },
          personB: {
            name: 'Prezes (Odbiorca perswazji)',
            quote: '„Kiedy Igor krzyczy, słyszę tylko jego złość; kiedy Krzysztof mówi, słyszę troskę o los firmy”.',
            whatTheyKnow: 'Wie, że firma musi dbać o budżet i nie może ulegać histerii każdego pracownika.',
            whatTheyMiss: 'Początkowo odrzucił krytyczne ostrzeżenie techniczne tylko z powodu niechęci do charakteru Igora (błąd ad personam).',
            interpretation: '„Krzysztof to głos rozsądku, Igor to roszczeniowy wichrzyciel”.',
            coreNeed: 'Poczucie stabilności, kontroli i zaufania do doradców.',
            fear: 'Lęk przed chaosem i nieprzemyślanymi wydatkami.',
            action: 'Zatwierdzenie projektu dopiero po parafowaniu go przez zaufanego mentora.'
          },
          synthesis: 'Wiarygodność perswazyjna nie jest cechą argumentu — jest sumą wcześniejszych interakcji i postrzeganej lojalności nadawcy wobec wspólnego dobra.'
        }
      }
    },

    // 39.6
    {
      id: 'sec-39-6',
      pageNumber: 16,
      sectionNumber: '39.6',
      title: 'Wiarygodność źródła w ujęciu empirycznym: Kompetencja, bezstronność i spójność moralna',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Wiarygodność komunikatora składa się z dwóch niezależnych wymiarów: postrzeganej wiedzy eksperckiej (czy wie, co mówi?) oraz postrzeganego zaufania (czy ma odwagę powiedzieć prawdę, nawet gdy jest to dla niego niekorzystne?).',
        author: 'Prof. Carl I. Hovland',
        source: 'Yale University, „Communication and Persuasion”, Yale University Press, 1953'
      },
      paragraphs: [
        'Carl Hovland i jego współpracownicy w programie badań nad komunikacją na Uniwersytecie Yale udowodnili, że sama wiedza ekspercka (Expertise) to za mało. Jeśli odbiorca uważa, że ekspert ma ukryty interes finansowy lub polityczny w przekonaniu publiczności, siła perswazji spada niemal do zera.',
        'Prawdziwy przełom w zaufaniu następuje w momencie, który psychologia nazywa ZACHOWANIEM WBREW WŁASNEMU INTERESOWI (Counter-Attitudinal Advocacy). Kiedy prokurator żąda uniewinnienia oskarżonego, albo prezes koncernu naftowego wzywa do ograniczenia emisji spalin — siła perswazji osiąga maksimum. Odbiorca myśli: „Skoro mówi coś, co bije w jego własną kieszeń, to musi to być prawda”.',
        'Spójność moralna (Integrity) i bezstronność są najpotężniejszymi katalizatorami akceptacji trudnych komunikatów.'
      ],
      subsections: [
        {
          id: 'sub-39-6-1',
          title: 'Analiza słów prof. Carla Hovlanda: Efekt Uśpienia (Sleeper Effect)',
          content: [
            'Hovland odkrył fascynujące zjawisko: tuż po wysłuchaniu komunikatu z niewiarygodnego źródła ludzie odrzucają jego treść. Jednak po 4–6 tygodniach poziom akceptacji argumentu... ROŚNIE! Dlaczego?',
            'Zjawisko to nazwano „efektem uśpienia” (Sleeper Effect): ludzki mózg szybciej zapomina o źródle informacji (np. podejrzana gazeta, anonimowy post w sieci) niż o samej treści argumentu. Po pewnym czasie w pamięci pozostaje nagi fakt: „gdzieś czytałem, że X jest szkodliwe”, a etykieta niewiarygodności ulega zatarciu. To potężne ostrzeżenie przed mechanicznym pochłanianiem niesprawdzonych treści.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny: Higiena Źródeł',
            content: 'Dbaj o to, skąd czerpiesz informacje. Twój mózg po miesiącu zapomni, że sensacyjna wiadomość pochodziła z plotkarskiego portalu, i zacznie traktować ją jak obiektywną wiedzę o świecie.',
            type: 'warning'
          }
        }
      ]
    },

    // 39.7
    {
      id: 'sec-39-7',
      pageNumber: 19,
      sectionNumber: '39.7',
      title: 'Treść komunikatu: Logika dowodu, redukcja złożoności i znaczenie osobiste dla słuchacza',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Kiedy źródło zyska już prawo głosu, na scenę wkracza architektura samego komunikatu. Jakie cechy argumentu decydują o jego sile?',
        '1. DOWÓD WSPARTY PRZYKŁADEM: Sam abstrakcyjny wskaźnik statystyczny trafia w próżnię poznawczą. Liczba musi zostać ożywiona konkretnym studium przypadku. Dane przekonują intelekt; pojedyncza historia pozwala wyobrazić sobie konsekwencje.',
        '2. REDUKCJA ZŁOŻONOŚCI (Prostota bez banalizacji): Jeśli argument wymaga zrozumienia 15 skomplikowanych założeń, uwaga robocza odbiorcy ulega przeciążeniu. Zwycięża ten komunikat, który potrafi uchwycić istotę zjawiska w klarownej strukturze przyczynowo-skutkowej.',
        '3. OSOBISTE ZNACZENIE (Self-Relevance): Najważniejsze pytanie, jakie kora słuchacza zadaje w ułamku sekundy, brzmi: „Co to ma wspólnego ze mną, moją rodziną i moimi celami?”. Argumenty, które nie posiadają punktu stycznego z losem odbiorcy, są traktowane jak biały szum.'
      ]
    },

    // 39.8
    {
      id: 'sec-39-8',
      pageNumber: 22,
      sectionNumber: '39.8',
      title: 'Odbiorca perswazji: Wcześniejsze przekonania, wiedza dziedzinowa i motywacja do obrony tożsamości',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Największym błędem naiwnych perswadatorów jest traktowanie umysłu odbiorcy jak pustej tablicy (tabula rasa), na której wystarczy zapisać własne zdanie. Umysł dorosłego człowieka przypomina raczej gęsto zabudowane miasto z potężnymi murami obronnymi.',
        'Każdy nowy komunikat jest konfrontowany z tzw. KOTWICĄ POZNAWCZĄ (Cognitive Anchor) — zbiorem dotychczasowych poglądów, wartości i doświadczeń życiowych. Zgodnie z teorią asymilacji i kontrastu (Muzafer Sherif), wokół obecnego przekonania człowieka istnieją trzy strefy:',
        '- STREFA AKCEPTACJI (Latitude of Acceptance): Idee zbliżone do obecnych poglądów, które człowiek chętnie przyjmuje.',
        '- STREFA OBOJĘTNOŚCI (Latitude of Noncommitment): Kwestie, w których odbiorca nie ma wyrobionego zdania i jest najbardziej otwarty na argumenty.',
        '- STREFA ODRZUCENIA (Latitude of Rejection): Poglądy stojące w jaskrawej sprzeczności z jego tożsamością. Wepchnięcie argumentu w tę strefę natychmiast wywołuje paniczny opór i jeszcze silniejsze okopanie się na starych pozycjach.'
      ]
    },

    // 39.9
    {
      id: 'sec-39-9',
      pageNumber: 25,
      sectionNumber: '39.9',
      title: 'Historia: „Nie chcę zmienić zdania” — Studium oporu poznawczego wobec niepodważalnego faktu',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Marek (45 lat), doświadczony menedżer logistyki w firmie produkcyjnej, od 10 lat osobiście układał grafiki transportowe w arkuszu kalkulacyjnym. Uważał się za mistrza optymalizacji i z dumą powtarzał: „Żaden algorytm nie zastąpi mojego oka do tras”.',
        'Młody analityk Rafał przeprowadził audyt za ostatnie pół roku. Wyniki były druzgocące: automatyczny system wyznaczania tras zaoszczędziłby firmie 180 tysięcy złotych na paliwie i skrócił czas dostaw o 14%. Rafał sporządził elegancki raport, wydrukował mapy i zaprezentował je Markowi na osobności.',
        'Co zrobił Marek? Czy podziękował za odkrycie rezerw? Absolutnie nie. Poczerwieniał na twarzy, rzucił raportem o biurko i wykrzyczał: „Te wasze algorytmy nie uwzględniają remontu mostu w Grudziądzu i humorów kierowców! Wy zza biurka życia nie znacie! Moje trasy gwarantują spokój, a ten program doprowadzi firmę do bankructwa!”.',
        'Dlaczego Marek odrzucił matematyczny fakt? Ponieważ arkusz kalkulacyjny był jego tożsamością. Uznanie prawdy raportu oznaczało przyznanie, że przez dekadę marnował pieniądze firmy i stał się niepotrzebny.'
      ],
      interactiveWindowRef: {
        id: 'win-39-9-zmiana-interpretacji',
        title: 'MODUŁ C: Co Musiałoby Się Zmienić, Byś Zmienił Zdanie?',
        subtitle: 'Laboratorium dekonstrukcji tożsamościowego oporu przed racjonalnym dowodem',
        context: 'Analiza sytuacji Marka: poszukiwanie alternatywnych dróg dotarcia do zablokowanego menedżera.',
        type: 'what_if',
        takeaway: 'Gdy fakt zagraża tożsamości człowieka, tożsamość zawsze wygrywa z faktem — chyba że pozwolisz mu ocalić godność.',
        whatIfOptions: {
          defaultScenario: 'Rafał kładzie raport na stole i mówi: „Liczby pokazują, że twój system generuje straty”. Marek wpada w furię i blokuje wdrożenie.',
          options: [
            {
              id: 'opt-39-9-1',
              changeLabel: 'Rafał przedstawia algorytm jako „cyfrowego asystenta Marka” do rutynowych tras',
              resultingInterpretation: 'Marek myśli: „Ten program zdejmie ze mnie nudną robotę z kurierami, a ja zajmę się kluczowymi partnerami”.',
              resultingBehavior: 'Marek z ciekawością testuje oprogramowanie na trzech trasach testowych.',
              psychologicalImpact: 'Ocalenie poczucia kompetencji i statusu mentora.'
            },
            {
              id: 'opt-39-9-2',
              changeLabel: 'Rafał prosi Marka o wskazanie błędów w algorytmie: „Panie Marku, ten system myli się w 20% sytuacji — potrzebujemy pańskiego oka, by go skalibrować”',
              resultingInterpretation: 'Marek czuje się ekspertem nadrzędnym wobec technologii: „Bez mojej wiedzy ten komputer jest bezradny”.',
              resultingBehavior: 'Marek z dumą poprawia algorytm i staje się liderem wdrożenia innowacji.',
              psychologicalImpact: 'Wykorzystanie błędu poznawczego na rzecz adaptacji i rozwoju.'
            }
          ]
        }
      }
    },

    // 39.10
    {
      id: 'sec-39-10',
      pageNumber: 28,
      sectionNumber: '39.10',
      title: 'Argument a sposób jego przedstawienia: Teoria perspektywy, ramowanie (framing) i punkt odniesienia',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'W przełomowych badaniach Daniela Kahnemana i Amosa Tversky’ego wykazano, że decyzje ludzi zależą nie tyle od samych nagich faktów, ile od RAMY POZNAWCZEJ (Cognitive Framing), w jakiej te fakty zostaną osadzone.',
        'Klasyczny eksperyment z „chorobą azjatycką” ujawnił fundamentalną asymetrię ludzkiego umysłu: LĘK PRZED STRATĄ JEST PSYCHOLOGICZNIE DWUKROTNIE SILNIEJSZY NIŻ RADOŚĆ Z IDENTYCZNEGO ZYSKU (Loss Aversion).',
        'Ten sam fakt medyczny przedstawiony jako: „Zabieg ma 90% szans powodzenia” skłania do zgody niemal wszystkich pacjentów. Gdy to samo zdanie sformułujemy jako: „Zabieg niesie 10% ryzyka zgonu na stole operacyjnym”, większość ludzi cofa się z przerażeniem.',
        'Sztuka etycznej perswazji polega na zrozumieniu, w jaki sposób punkt odniesienia (Reference Point) oraz kolejność podawania informacji determinują percepcję ryzyka i korzyści.'
      ]
    },

    // 39.11
    {
      id: 'sec-39-11',
      pageNumber: 31,
      sectionNumber: '39.11',
      title: 'Emocje w perswazji: Znaczenie afektu, lęk paraliżujący a lęk mobilizujący',
      category: 'neuronauka',
      readingTimeMinutes: 25,
      paragraphs: [
        'Wielowiekowa tradycja kartezjańska przeciwstawiała „rozsądek” i „emocje”, traktując uczucia jak zanieczyszczenie logicznego myślenia. Współczesna neuronauka afektywna (Antonio Damasio, Joseph LeDoux) obaliła ten mit: bez emocjonalnego markera somatycznego człowiek staje się całkowicie niezdolny do podjęcia jakiejkolwiek decyzji.',
        'Emocje w perswazji pełnią rolę soczewki skupiającej uwagę. Jednak wykorzystanie emocji wymaga niezwykłej ostrożności medycznej:',
        '- LĘK PARALIŻUJĄCY (High Fear without Efficacy): Jeśli nastraszysz człowieka katastrofą (np. rakiem płuc, bankructwem, samotnością), nie dając mu natychmiastowego, prostego i wykonalnego planu ratunkowego — jego umysł uruchomi mechanizm obronny wyparcia i racjonalizacji („Mój dziadek palił i żył 90 lat”).',
        '- LĘK MOBILIZUJĄCY (Fear with High Self-Efficacy — Model EPPM Kim Witte): Lęk działa proaktywnie tylko wtedy, gdy w tej samej sekundzie zaoferujesz odbiorcy narzędzie o wysokiej skuteczności, przywracające mu poczucie sprawczości i kontroli.'
      ]
    },

    // 39.12
    {
      id: 'sec-39-12',
      pageNumber: 34,
      sectionNumber: '39.12',
      title: 'Historia: „Argument, który przyszedł za późno” — Czas, kontekst i stan gotowości odbiorcy',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Ewa i Grzegorz prowadzili spółkę produkującą meble ogrodowe. W marcu Grzegorz zorientował się, że ceny drewna na rynkach światowych zaczną gwałtownie rosnąć. Zamiast spokojnie porozmawiać, wpadł do gabinetu Ewy w piątek o 17:30, gdy ta podpisywała sprawozdanie finansowe pod presją kontroli skarbowej.',
        'Grzegorz krzyczał: „Musimy natychmiast zaciągnąć milion złotych kredytu i wykupić tarcicę w tartakach, bo za miesiąc zbankrutujemy!”. Ewa, z bólem głowy i roztrzęsionymi nerwami, wyrzuciła go za drzwi: „Czyś ty zwariował?! Zadłużać firmę w środku kontroli skarbowej?! Przestań mnie terroryzować swoimi wizjami!”.',
        'Trzy miesiące później cena drewna wzrosła o 140%. Spółka straciła marżę roczną. Kiedy Grzegorz z goryczą rzucił: „Przecież ci mówiłem!”, Ewa odpowiedziała: „Nie mówiłeś mi. Ty mnie zaatakowałeś w najgorszym momencie mojego życia”.',
        'Genialny argument rzucony w warunkach przeciążenia poznawczego i wyczerpania metabolicznego staje się dla mózgu agresorem, a nie szansą.'
      ]
    },

    // 39.13
    {
      id: 'sec-39-13',
      pageNumber: 37,
      sectionNumber: '39.13',
      title: 'Perswazja centralna i poboczna: Model ELM Richarda Petty’ego i Johna Cacioppo',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Istnieją dwie odmienne drogi perswazji. Tor centralny polega na skrupulatnym rozważaniu argumentów i wymaga motywacji oraz zasobów poznawczych. Tor peryferyjny opiera się na prostych wskazówkach sygnałowych, takich jak urok nadawcy czy liczba argumentów, dając szybką, lecz kruchą zmianę postawy.',
        author: 'Prof. Richard E. Petty & Prof. John T. Cacioppo',
        source: 'Ohio State University, „The Elaboration Likelihood Model of Persuasion”, Advances in Experimental Social Psychology, 1986'
      },
      paragraphs: [
        'Model Prawdopodobieństwa Przetwarzania (Elaboration Likelihood Model — ELM) to absolutny kamień milowy w nauce o perswazji. Petty i Cacioppo wykazali, że ludzki mózg jako oszczędny skąpiec poznawczy (Cognitive Miser) nieustannie dokonuje selekcji:',
        '1. TOR CENTRALNY (Central Route): Aktywowany, gdy sprawa ma dla odbiorcy fundamentalne znaczenie osobiste i dysponuje on czasem oraz wiedzą. Odbiorca analizuje jakość logiczną dowodów, sprawdza spójność, zadaje trudne pytania. Zmiana postawy dokonana tym torem jest TRWAŁA, odporna na kontrataki i bezpośrednio przekłada się na zachowanie.',
        '2. TOR PERYFERYJNY (Peripheral Route): Aktywowany w pośpiechu, zmęczeniu lub przy braku zainteresowania tematem. Odbiorca nie analizuje faktów — kieruje się heurystykami: „Mówi pewnym głosem, ładnie wygląda, ma garnitur i poparło go 10 osób — pewnie ma rację”. Zmiana tą drogą jest POWIERZCHOWNA, nietrwała i znika przy pierwszym oporze środowiskowym.'
      ]
    },

    // 39.14
    {
      id: 'sec-39-14',
      pageNumber: 40,
      sectionNumber: '39.14',
      title: 'Kiedy odbiorca myśli głęboko? Warunki aktywacji toru centralnego: Znaczenie, wiedza i spokój poznawczy',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Aby Twój rozmówca zechciał wejść w wymagający proces myślenia centralnego, muszą zaistnieć równocześnie trzy warunki:',
        '- ZDOLNOŚĆ POZNAWCZA (Cognitive Capacity): Rozmówca nie może być głodny, niewyspany, zestresowany ani rozpraszany powiadomieniami z telefonu.',
        '- ZROZUMIAŁOŚĆ KODU (Message Comprehensibility): Język musi być pozbawiony hermetycznego żargonu, który zmusza mózg do kapitulacji.',
        '- STAWKA OSOBISTA (High Personal Stakes): Rozmówca musi widzieć bezpośredni związek decyzji ze swoją przyszłością.',
        'Jeśli tych warunków brakuje, odbiorca zepchnie Twój najlepszy referat do toru peryferyjnego, oceniając Cię wyłącznie po tembrze głosu i długości prezentacji.'
      ]
    },

    // 39.15
    {
      id: 'sec-39-15',
      pageNumber: 43,
      sectionNumber: '39.15',
      title: 'Kiedy odbiorca idzie na skróty? Heurystyki peryferyjne: Długość argumentu, sympatia i autorytet zewnętrzny',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'W torze peryferyjnym królują heurystyki perswazyjne opisane m.in. przez Chaiken i Cialdiniego:',
        '- HEURYSTYKA DŁUGOŚCI („Length Equals Strength”): Przeciętny słuchacz uważa, że lista 10 argumentów jest lepsza niż lista 2 argumentów, nawet jeśli 8 z nich to puste banały.',
        '- HEURYSTYKA SYMPATII I PODOBIEŃSTWA: Chętniej wierzymy ludziom, którzy ubierają się podobnie do nas, mają zbliżony akcent lub pochodzą z tej samej miejscowości.',
        '- HEURYSTYKA SPOŁECZNEGO DOWODU SŁUSZNOŚCI: Skoro pod postem jest 5000 polubień, to treść musi być wartościowa.',
        'Świadomy człowiek musi stale monitorować własny umysł, by nie dać się złapać na przynęty peryferyjne w sprawach o wysokiej stawce życiowej.'
      ]
    },

    // 39.16
    {
      id: 'sec-39-16',
      pageNumber: 46,
      sectionNumber: '39.16',
      title: 'Historia wieloetapowa: „Zmiana zdania” — Pięć faz transformacji przekonania w czasie',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Prześledźmy losy Barbary — dyrektorki finansowej w tradycyjnym wydawnictwie prasowym, która przez lata zwalczała pomysł przejścia na płatną subskrypcję cyfrową (paywall).',
        'FAZA 1 — ODRZUCENIE (Miesiąc 1): Zespół cyfrowy przynosi raport. Barbara odrzuca go po 5 minutach: „Prasa drukowana to nasza tradycja i prestiż, internet zabija kulturę czytania”.',
        'FAZA 2 — PĘKNIĘCIE I ANOMALIA (Miesiąc 3): Trzy kluczowe tytuły tracą 25% nakładu w kioskach, a zaufana redaktorka naczelna odchodzi do portalu internetowego. Barbara nie może już spać spokojnie.',
        'FAZA 3 — BEZPIECZNA INKUBACJA (Miesiąc 5): Zamiast naciskać, prezes wysyła Barbarę na zamknięte warsztaty do Sztokholmu, gdzie spotyka dyrektorów finansowych szwedzkich gazet. Słyszy od ludzi o identycznym profilu, jak subskrypcje uratowały ich niezależność dziennikarską.',
        'FAZA 4 — CICHY TEST (Miesiąc 7): Barbara po powrocie sama zamawia pilotaż subskrypcji dla jednego niszowego magazynu historycznego. Sukces pilotażu przynosi zysk.',
        'FAZA 5 — REORGANIZACJA I INTEGRACJA (Miesiąc 9): Na zebraniu zarządu Barbara osobiście przedstawia 3-letni plan pełnej transformacji cyfrowej grupy. Zmiana dokonała się całkowicie.'
      ],
      interactiveWindowRef: {
        id: 'win-39-16-etapy-zmiany',
        title: 'MODUŁ E: W Którym Momencie Rozpoczęła Się Zmiana?',
        subtitle: 'Analiza pętli sprzężeń i faz transformacji przekonania Barbary',
        context: 'Identyfikacja punktu krytycznego w ewolucji postawy dyrektor finansowej.',
        type: 'loop',
        takeaway: 'Zmiana głębokiego przekonania wymaga czasu, spotkania z równorzędną grupą odniesienia i przestrzeni na samodzielne przetestowanie faktów.',
        loopSteps: [
          {
            step: 1,
            title: 'Obrona status quo',
            actor: 'Barbara',
            action: 'Odrzucenie raportu młodych innowatorów w obronie tradycyjnego druku.',
            interpretationByOther: '„Dyrektorka jest niereformowalnym hamulcowym rozwoju”.',
            emotionalTrigger: 'Lęk przed chaosem i niepewnością u Barbary.',
            counterAction: 'Zwiększenie presji przez zespół cyfrowy.'
          },
          {
            step: 2,
            title: 'Zderzenie z rynkową anomalią',
            actor: 'Rynek prasowy',
            action: 'Spadek nakładów o 25% i odejście kluczowych autorów.',
            interpretationByOther: '„Nasze dotychczasowe modele predykcyjne zawodzą”.',
            emotionalTrigger: 'Dysonans poznawczy i utrata poczucia kontroli.',
            counterAction: 'Zgoda Barbary na wyjazd do Sztokholmu bez deklaracji zmian.'
          },
          {
            step: 3,
            title: 'Kontakt z bezpieczną grupą rówieśniczą',
            actor: 'Skandynawscy CFO',
            action: 'Podzielenie się twardymi danymi finansowymi z perspektywy przyjaciół.',
            interpretationByOther: '„Cyfryzacja nie niszczy prestiżu — ona go finansuje”.',
            emotionalTrigger: 'Spadek lęku tożsamościowego i otwarcie kory przedczołowej.',
            counterAction: 'Samodzielne zaprojektowanie pilotażu przez Barbarę.'
          }
        ]
      }
    },

    // 39.17
    {
      id: 'sec-39-17',
      pageNumber: 49,
      sectionNumber: '39.17',
      title: 'Opór psychologiczny i reaktancja: Teoria Jacka Brehma i paradoks zakazanego owocu',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Kiedy wolność jednostki zostaje ograniczona lub zagrożona odebraniem, budzi się w niej stan reaktancji psychologicznej — siła motywacyjna skierowana na odzyskanie utraconej swobody. Sprawia ona, że zagrożona opcja staje się natychmiast bardziej pożądana niż przedtem.',
        author: 'Prof. Jack W. Brehm',
        source: 'University of Kansas, „A Theory of Psychological Reactance”, Academic Press, 1966'
      },
      paragraphs: [
        'Zjawisko reaktancji psychologicznej (Psychological Reactance) tłumaczy, dlaczego nachalny, zbyt pewny siebie sprzedawca lub despocizny rodzic osiągają rezultaty dokładnie odwrotne do zamierzonych (tzw. efekt bumerangowy).',
        'Kiedy słyszymy kategoryczne zdanie: „Musisz to zrobić”, „Każdy inteligentny człowiek się z tym zgodzi”, „Nie masz wyboru” — w naszym pniu mózgu i ciele migdałowatym odpala się alarm suwerenności. Mózg nie analizuje już, czy propozycja jest mądra czy głupia. Myśli tylko o jednym: „Ktoś próbuje mnie uwięzić i odebrać mi wolność!”.',
        'W rezultacie człowiek potrafi z pełną świadomością wybrać opcję gorszą, bardziej ryzykowną i nieopłacalną, tylko po to, by udowodnić sobie i otoczeniu, że pozostaje niezależnym panem własnych wyborów.'
      ]
    },

    // 39.18
    {
      id: 'sec-39-18',
      pageNumber: 52,
      sectionNumber: '39.18',
      title: 'Perswazja a autonomia: Technika BYAF (But You Are Free) i siła upodmiotowienia odbiorcy',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Jednym z najbardziej fascynujących odkryć współczesnej psychologii perswazji jest technika BYAF („But You Are Free” — „Ale jesteś całkowicie wolny”). Metaanalizy Christophera Carpentera (obejmujące ponad 40 badań na 22 000 uczestników) wykazały, że dodanie na końcu prośby prostego zdania potwierdzającego wolność wyboru rozmówcy PODWAJA szansę na uzyskanie zgody!',
        'Przykłady zdań rozbrajających reaktancję: „Oto nasza oferta, ale oczywiście decyzja należy w 100% do ciebie”, „Chciałbym cię zaprosić na to spotkanie, ale jeśli masz inne plany, w pełni to zrozumiem”.',
        'Dlaczego ta technika działa tak potężnie? Ponieważ gasi alarm reaktancyjny w zarodku. Odbiorca nie musi tracić energii na walkę o swoją przestrzeń — jego autonomia została uznana i uhonorowana. Wtedy jego kora mózgowa może w spokoju zająć się merytoryczną oceną samej propozycji.'
      ]
    },

    // 39.19
    {
      id: 'sec-39-19',
      pageNumber: 55,
      sectionNumber: '39.19',
      title: 'Badania nad perswazją: Od Yale po neuronaukę decyzji i granice uniwersalnych modeli',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Współczesna psychologia perswazji łączy dorobek behawioralny z neuroobrazowaniem funkcjonalnym (fMRI). Badania zespołu Matthew Liebermana i Emily Falk w UCLA nad tzw. „neuronauką perswazji” ujawniły, że sukces komunikatu predykuje aktywacja w brzuszno-przyśrodkowej korze przedczołowej (vmPFC).',
        'Im silniejsza aktywacja vmPFC u badanych podczas oglądania kampanii antynikotynowej, tym silniejszy był realny spadek sprzedaży papierosów w całym stanie w kolejnych miesiącach — nawet jeśli badani w ankietach deklarowali, że reklama im się nie podobała!',
        'Jednak nauka nakazuje ostrożność metodologiczną: nie istnieje żaden „przycisk perswazyjny w mózgu”. Ludzie różnią się potrzebą domknięcia poznawczego (Need for Closure), stylem przywiązania i kapitałem kulturowym. To, co przekonuje inżyniera w Zurychu, wywoła opór u artysty w Nowym Jorku.'
      ]
    },

    // 39.20
    {
      id: 'sec-39-20',
      pageNumber: 58,
      sectionNumber: '39.20',
      title: 'Historia: „Dwa sposoby przekonania” — Porównanie długofalowych skutków logicznej ugody i emocjonalnego przymusu',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Dwóch dyrektorów w tej samej korporacji logistycznej miało za zadanie nakłonić pracowników do przejścia na system pracy w 12-godzinnych zmianach rotacyjnych w weekendy.',
        'Dyrektor Wiktor użył twardego nacisku peryferyjnego: wezwał liderów, uderzył pięścią w stół i zapowiedział: „Kto nie podpisze zgody, niech zapomni o premiach rocznych i awansach. Nie interesują mnie wasze plany rodzinne, firma musi przetrwać”. Pracownicy podpisali dokumenty ze spuszczonymi głowami.',
        'Dyrektor Adam wybrał drogę żmudnej perswazji centralnej: zorganizował trzy otwarte spotkania, przedstawił kalkulację kosztów utraty kontraktu, a następnie oddał zespołowi projektowanie grafików: „Musimy obsłużyć ten wolumen, ale to wy decydujecie, jak podzielicie się dyżurami, by nikt nie stracił dwóch sobót z rzędu”.',
        'Skutki po 6 miesiącach? W dziale Wiktora: 40% zwolnień lekarskich, fala odejść kluczowych operatorów, sabotowanie maszyn i spadek wydajności o 30%. W dziale Adama: zerowa absencja, zaangażowanie i rekordowa wydajność. Przymus daje natychmiastowe posłuszeństwo z długim ogonem toksycznych kosztów; rzetelna perswazja wymaga czasu, ale buduje trwałą motywację wewnętrzną.'
      ]
    },

    // 39.21
    {
      id: 'sec-39-21',
      pageNumber: 61,
      sectionNumber: '39.21',
      title: 'Perswazja a zachowanie: Dlaczego zmiana opinii („Uważam”) tak rzadko przekłada się na działanie („Robię”)?',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Jednym z najbardziej frustrujących zjawisk dla edukatorów, liderów i rodziców jest tzw. LUKA MIĘDZY POSTAWĄ A ZACHOWANIEM (Attitude-Behavior Gap). Człowiek może całkowicie szczerze zgodzić się z twoim argumentem: „Tak, cukier jest trucizną”, „Tak, należy regularnie robić kopie zapasowe”, a godzinę później zjeść pączka i zapomnieć o backupie.',
        'Teoria Planowanego Zachowania Icka Ajzena wyjaśnia, dlaczego samo przekonanie intelektualne to za mało. Aby doszło do czynu, muszą zagrać trzy dodatkowe wektory:',
        '1. NORMY SUBIEKTYWNE (Subjective Norms): Co o tym zachowaniu myśli moje bezpośrednie otoczenie? (Jeśli wszyscy w biurze jedzą pączki, presja stada unieważnia wiedzę dietetyczną).',
        '2. POSTRZEGANA KONTROLA BEHAWIORALNA (Perceived Behavioral Control): Czy uważam, że potrafię to zrobić fizycznie i technicznie w realnym świecie?',
        '3. ARCHITEKTURA WYBORU I NAWYK: Podkorowe skrypty nawykowe (prążkowie) zawsze wygrywają z korowym postanowieniem, jeśli środowisko nie zostanie odpowiednio przebudowane (Rozdział 23).'
      ]
    },

    // 39.22
    {
      id: 'sec-39-22',
      pageNumber: 63,
      sectionNumber: '39.22',
      title: 'Kontrprzypadek I: Żelazny argument, niepodważalne dowody — i brak jakiejkolwiek zmiany',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Klasyczna teoria racjonalnego wyboru zakłada, że gdy człowiek otrzyma niepodważalny, logicznie bezbłędny i empirycznie zweryfikowany dowód na fałszywość swojego przekonania — natychmiast je zaktualizuje. W świecie realnym dzieje się coś dokładnie przeciwnego.',
        'Dlaczego żelazny argument zawodzi? Ponieważ w warunkach polaryzacji światopoglądowej porzucenie błędu wiąże się ze zjawiskiem zdrady tożsamościowej. W badaniach Dana Kahana nad „poznaniem chroniącym tożsamość” (Identity-Protective Cognition) wykazano, że ludzie o najwyższych kompetencjach matematycznych i logicznych potrafią najbardziej kunsztownie przekręcać dane statystyczne, byle tylko nie dopuścić do wniosku sprzecznego z doktryną ich partii czy plemienia.',
        'Rozum w takich warunkach nie pełni roli bezstronnego sędziego — staje się adwokatem broniącym emocjonalnego status quo.'
      ],
      interactiveWindowRef: {
        id: 'win-39-22-kontrprzypadek-fakt',
        title: 'MODUŁ D: Kontrprzypadek — Kiedy Dowód Niszczy Porozumienie',
        subtitle: 'Analiza granic racjonalności w zderzeniu z tożsamością plemienną',
        context: 'Naukowa debata o faktach klimatycznych lub medycznych zamieniająca się w wojnę plemienną.',
        type: 'counter_case',
        takeaway: 'Dopóki argument jest traktowany jako sztandar wrogiego plemienia, żaden dowód nie przebije się przez mury obronne tożsamości.',
        counterCase: {
          standardTheory: 'Dostarczenie precyzyjnych wykresów, danych statystycznych i recenzowanych badań naukowych automatycznie przekonuje sceptyka do zmiany błędnego stanowiska.',
          counterExample: 'W eksperymencie Nyhana i Reiflera (Efekt Odpływu / Backfire Effect) przedstawienie twardych sprostowań faktograficznych osobom silnie zaangażowanym ideologicznie sprawiło, że uwierzyły one w pierwotny fałsz JESZCZE MOCNIEJ niż przed lekturą sprostowania.',
          whyItDefiesRule: 'Mózg potraktował sprostowanie jako wrogi atak na własną grupę odniesienia, uruchamiając agresywną produkcję kontrargumentów obronnych.',
          deeperLesson: 'Nie zaczynaj od udowadniania rozmówcy, że tkwi w błędzie. Zacznij od zbudowania wspólnej płaszczyzny wartości i poczucia bezpieczeństwa.'
        }
      }
    },

    // 39.23
    {
      id: 'sec-39-23',
      pageNumber: 65,
      sectionNumber: '39.23',
      title: 'Kontrprzypadek II: Słaby, nielogiczny argument — i masowy, spektakularny wpływ',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z drugiej strony obserwujemy w dziejach ludzkości sytuacje paradoksalne: komunikaty merytorycznie puste, pełne błędów logicznych, oparte na jawnych sprzecznościach, które porywają miliony wykształconych ludzi.',
        'Dlaczego słaby argument potrafi zatriumfować nad mądrością? Odpowiedź tkwi w mechanizmach pozamerytorycznych:',
        '1. WALIDACJA TŁUMIONYCH EMOCJI: Słaby argument oferuje prostego kozła ofiarnego, na którego można bezpiecznie zrzucić winę za własne życiowe niepowodzenia i lęki.',
        '2. POCZUCIE ELITARNEJ PRZYNALEŻNOŚCI: Nadawca mówi: „Tylko my, garstka przebudzonych, znamy prawdę — reszta to ślepe stado”. To potężna dopaminowa nagroda dla kruchej samooceny.',
        '3. RYTMIKA I HIPNOTYCZNA POWTARZALNOŚĆ (Efekt Prawdy Iluzorycznej — Fazio): Komunikat powtórzony 100 razy staje się dla mózgu łatwy w przetwarzaniu (Fluency Effect), co kora bezrefleksyjnie myli z prawdą obiektywną.'
      ]
    },

    // 39.24
    {
      id: 'sec-39-24',
      pageNumber: 67,
      sectionNumber: '39.24',
      title: 'Człowiek pod mikroskopem: Kompletna sekwencja perswazyjna — Od impulsu nadawcy do nawyku odbiorcy',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Podsumujmy cały aparat analityczny rozdziału w postaci pełnej wiwisekcji laboratoryjnej. Zobaczmy, przez jakie filtry przechodzi każda próba wpłynięcia na drugiego człowieka:',
        'NADAWCA (Intencja, Status, Emocje) → ARCHITEKTURA KOMUNIKATU (Treść, Ramowanie, Dowód, Szacunek dla Autonomii) → ODBIORCA (Układ Limbiczny: Filtry Zaufania i Zagrożenia Tożsamości) → KORA PRZEDCZOŁOWA (Wybór Toru: Centralny vs Peryferyjny) → AKTUALIZACJA MODELU OPERACYJNEGO → REALNE ZACHOWANIE W ŚRODOWISKU.',
        'Poniższy moduł analityczny pozwala prześledzić ten proces na 19 poziomach głębi psychologicznej.'
      ],
      interactiveWindowRef: {
        id: 'win-39-24-mikroskop-perswazji',
        title: 'CZŁOWIEK POD MIKROSKOPEM: Wielopoziomowa Anatomia Perswazji',
        subtitle: '19 etapów dekonstrukcji procesu przekonywania w sytuacji wysokiego napięcia',
        context: 'Inżynier Adam próbuje przekonać dyrektor Ewę do wstrzymania niebezpiecznego projektu budowlanego na 48 godzin przed terminem odbioru.',
        type: 'microscope',
        takeaway: 'Skuteczna perswazja wymaga bezbłędnej koordynacji faktów, empatii relacyjnej i ochrony godności decydenta.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: '1. SYTUACJA OBIEKTYWNA',
            question: 'Co dokładnie dzieje się w świecie fizycznym?',
            content: 'Na budowie mostu wykryto mikropęknięcia w 3 z 20 lin nośnych. Raport laboratoryjny wskazuje na wadę fabryczną stali.',
            subtext: 'Nagi fakt techniczny o krytycznym znaczeniu dla życia ludzkiego.'
          },
          {
            stepNumber: 2,
            label: '2. WIEDZA ADAMA (NADAWCY)',
            question: 'Co wie Adam?',
            content: 'Wie, że most może runąć przy obciążeniu wiatrem powyżej 90 km/h. Ma twarde dane z mikroskopii elektronowej.',
            subtext: 'Wysoka pewność epistemiczna w obszarze inżynieryjnym.'
          },
          {
            stepNumber: 3,
            label: '3. BRAK WIEDZY ADAMA',
            question: 'Czego Adam nie wie o sytuacji Ewy?',
            content: 'Nie wie, że inwestor zagroził karą 5 milionów złotych za każdą dobę opóźnienia i zerwaniem kontraktu z winy generalnego wykonawcy.',
            subtext: 'Brak wglądu w presję finansowo-prawną ciążącą na drugiej stronie.'
          },
          {
            stepNumber: 4,
            label: '4. UWAGA ADAMA',
            question: 'Na czym ogniskuje się uwaga inżyniera?',
            content: 'Na fizyce materiałów i panice przed katastrofą budowlaną.',
            subtext: 'Wąski tunel zadaniowy.'
          },
          {
            stepNumber: 5,
            label: '5. PERCEPCJA EWY (ODBIORCY)',
            question: 'Co rejestruje Ewa, gdy Adam wchodzi do gabinetu?',
            content: 'Widzi bladego, roztrzęsionego inżyniera machającego papierami, który krzyczy: „Musimy natychmiast zatrzymać budowę!”.',
            subtext: 'Układ limbiczny Ewy rejestruje zagrożenie paniką i chaosem organizacyjnym.'
          },
          {
            stepNumber: 6,
            label: '6. PIERWSZA INTERPRETACJA EWY',
            question: 'Jak Ewa nadaje znaczenie wejściu Adama?',
            content: '„Inżynierowie zawsze panikują na finiszu, boją się odpowiedzialności i chcą asekuracyjnie zrzucić winę na zarząd”.',
            subtext: 'Heurystyka obronna chroniąca przed stratą finansową.'
          },
          {
            stepNumber: 7,
            label: '7. EMOCJE ADAMA',
            question: 'Co czuje inżynier?',
            content: 'Przerażenie perspektywą katastrofy i złość, że dyrekcja nie rozumie elementarnej fizyki.',
            subtext: 'Pobudzenie współczulne (tętno 115 bpm).'
          },
          {
            stepNumber: 8,
            label: '8. EMOCJE EWY',
            question: 'Co czuje dyrektor?',
            content: 'Wściekłość z powodu kolejnego problemu na 48 godzin przed wstęgą oraz lęk przed ruiną spółki.',
            subtext: 'Zalanie katecholaminowe i zawężenie pola widzenia.'
          },
          {
            stepNumber: 9,
            label: '9. GŁĘBOKA POTRZEBA ADAMA',
            question: 'Czego Adam potrzebuje najgłębiej?',
            content: 'Poczucia bezpieczeństwa etycznego: „Nie chcę mieć krwi na rękach”.',
            subtext: 'Wartość nadrzędna: życie ludzkie.'
          },
          {
            stepNumber: 10,
            label: '10. GŁĘBOKA POTRZEBA EWY',
            question: 'Czego Ewa potrzebuje najgłębiej?',
            content: 'Ocalenia płynności finansowej spółki i obrony własnego stanowiska przed radą nadzorczą.',
            subtext: 'Wartość nadrzędna: przetrwanie organizacji.'
          },
          {
            stepNumber: 11,
            label: '11. PUNKT ZWROTNY PERSWAZJI (KROK DECYZYJNY ADAMA)',
            question: 'Jak Adam zmienia architekturę komunikatu?',
            content: 'Zamiast krzyczeć „Most runie!”, siada, kładzie raport i mówi: „Pani Dyrektor, rozumiem stawkę 5 milionów kary. Ale jeśli most pęknie podczas próby obciążeniowej, prezes i pani pójdą do więzienia na 10 lat za katastrofę w ruchu lądowym. Znalazłem rozwiązanie: zamówmy zewnętrzny dźwig podtrzymujący na 48 godzin — to kosztuje 40 tysięcy, a pozwoli nam przetestować liny bez ryzyka katastrofy i bez wstrzymywania odbioru”.',
            subtext: 'Ramowanie ratunkowe: połączenie etyki z realną ochroną osobistą dyrektor.'
          },
          {
            stepNumber: 12,
            label: '12. WYBÓR TORU PRZETWARZANIA U EWY',
            question: 'Jak reaguje mózg dyrektor?',
            content: 'Aktywacja toru centralnego: Ewa widzi konkretną cyfrę (40 tysięcy vs 10 lat więzienia) i realną drogę wyjścia ocalającą kontrakt.',
            subtext: 'Zastąpienie paraliżującego lęku mobilizującą sprawczością.'
          },
          {
            stepNumber: 13,
            label: '13. DECYZJA KOŃCOWA',
            question: 'Co postanawia Ewa?',
            content: 'Podpisuje zlecenie na dźwig asekuracyjny i dodatkową ekspertyzę lin.',
            subtext: 'Triumf dojrzałej perswazji nad emocjonalnym impasem.'
          }
        ]
      }
    },

    // 39.25
    {
      id: 'sec-39-25',
      pageNumber: 70,
      sectionNumber: '39.25',
      title: 'SYNTEZA: Perswazja jako zaproszenie do wspólnej weryfikacji rzeczywistości',
      category: 'podsumowanie',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zakończmy naszą wędrówkę przez meandry perswazji najważniejszą definicją integrującą:',
        'Perswazja nie jest walką bokserską, w której jeden umysł powala drugi siłą ciosów retorycznych. Prawdziwa perswazja jest ZAPROSZENIEM DO WSPÓLNEJ WERYFIKACJI RZECZYWISTOŚCI.',
        'Wymaga ona od nadawcy głębokiej pokory: uznania, że rozmówca jest autonomicznym podmiotem posiadającym własne lęki, cele i doświadczenia. Wymaga odwagi do transparentnego odsłonięcia własnych intencji i gotowości do wysłuchania kontrargumentu. Przekonanie kogoś bez poszanowania jego godności i wolności wyboru nie jest sukcesem — jest zwiastunem przyszłego buntu.',
        'Wiemy już, jak ludzie zmieniają zdanie w warunkach jawności i prawdy. Co dzieje się jednak wtedy, gdy nadawca postanawia ukryć swój prawdziwy cel, zafałszować pole informacyjne i wykorzystać cudze lęki oraz poczucie winy do bezwzględnej realizacji własnych korzyści? O tym traktuje kolejny, 40. Rozdział naszej książki: MANIPULACJA.'
      ]
    }
  ]
};

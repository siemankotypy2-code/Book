import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 24 (GLOBALNIE ROZDZIAŁ 40 W STRUKTURZE DZIEŁA)
 * TYTUŁ: MANIPULACJA — WPŁYW, UKRYTY CEL I OGRANICZENIE ŚWIADOMEGO WYBORU
 * PODTYTUŁ: Kiedy wpływ drugiej osoby przestaje być zwykłym przekonywaniem, a zaczyna wykorzystywać informacje, emocje, zależność lub ograniczenia człowieka
 */

export const chapterFortyExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Co stanowi rdzenny mechanizm odróżniający manipulację psychologiczną od twardej, lecz etycznej perswazji?',
    topic: 'Istota Manipulacji',
    sectionRef: 'Sekcja 40.2',
    options: [
      { label: 'A', text: 'Celowe zatajenie rzeczywistej intencji lub ukrycie kluczowych faktów w celu skłonienia ofiary do decyzji, której nie podjęłaby w warunkach pełnej symetrii informacyjnej.', isCorrect: true },
      { label: 'B', text: 'Używanie trudnych słów i odwoływanie się do statystyk.', isCorrect: false },
      { label: 'C', text: 'Podniesienie głosu podczas kłótni domowej.', isCorrect: false },
      { label: 'D', text: 'Każda prośba o pomoc skierowana do bliskiej osoby.', isCorrect: false }
    ],
    explanation: 'Manipulacja pasożytuje na asymetrii informacyjnej i emocjonalnej. Jej celem jest pozbawienie odbiorcy rzetelnego obrazu sytuacji, by odebrać mu realną kontrolę nad własnym losem.',
    keyTakeaway: 'Perswazja walczy na argumenty w pełnym świetle; manipulacja przestawia dekoracje w ciemności.'
  },
  {
    id: 2,
    question: 'Czym z punktu widzenia psychologii klinicznej jest zjawisko Gaslightingu i kiedy NIE NALEŻY go diagnozować?',
    topic: 'Gaslighting i Granice Pojęcia',
    sectionRef: 'Sekcja 40.9',
    options: [
      { label: 'A', text: 'Jest to systematyczne, długofalowe podważanie zaufania ofiary do własnych zmysłów, pamięci i zdrowia psychicznego; nie należy go mylić ze zwykłą różnicą zdań czy incydentalnym kłamstwem.', isCorrect: true },
      { label: 'B', text: 'To każda sytuacja, w której partner nie pamięta, o której godzinie miał odebrać paczkę z poczty.', isCorrect: false },
      { label: 'C', text: 'Jest to odmowa pójścia do kina na film wybrany przez drugą osobę.', isCorrect: false },
      { label: 'D', text: 'To forma hipnozy scenicznej stosowana przez iluzjonistów.', isCorrect: false }
    ],
    explanation: 'Inflacja pojęciowa terminu gaslighting w pop-psychologii jest niebezpieczna. Prawdziwy gaslighting to metodyczna destrukcja aparatu poznawczego („Wymyślasz to”, „Jesteś chora psychicznie”), a nie każda sprzeczka o fakty.',
    keyTakeaway: 'Nie każda różnica zdań to gaslighting; gaslighting zaczyna się tam, gdzie celem jest wmówienie ci szaleństwa.'
  },
  {
    id: 3,
    question: 'W jaki sposób syndrom FOG (Fear, Obligation, Guilt) Susan Forward paraliżuje autonomię człowieka?',
    topic: 'Syndrom FOG i Manipulacja Emocjonalna',
    sectionRef: 'Sekcja 40.6 & 40.7',
    options: [
      { label: 'A', text: 'Wykorzystuje pierwotne lęki przed odrzuceniem, poczucie niewypłacalnego długu wdzięczności oraz fałszywe poczucie winy, by zablokować jakiekolwiek prawo do odmowy.', isCorrect: true },
      { label: 'B', text: 'Sprawia, że człowiek natychmiast zapada w głęboki sen w ciągu dnia.', isCorrect: false },
      { label: 'C', text: 'Wywołuje nagłą utratę zdolności mówienia w języku ojczystym.', isCorrect: false },
      { label: 'D', text: 'Działa wyłącznie w stosunkach międzynarodowych między dyplomatami.', isCorrect: false }
    ],
    explanation: 'FOG to trójgłowy smok emocjonalnego uwięzienia: manipulator sprawia, że ofiara czuje się złą córką, złym partnerem lub nielojalnym pracownikiem za każdym razem, gdy próbuje postawić zdrową granicę.',
    keyTakeaway: 'Gdy czujesz, że twoja odmowa czyni z ciebie potwora, prawdopodobnie tkwisz w mgle FOG.'
  },
  {
    id: 4,
    question: 'Dlaczego człowiek stosujący manipulację rzadko myśli o sobie jako o „złym manipulatorze”?',
    topic: 'Psychodynamika Sprawcy Manipulacji',
    sectionRef: 'Sekcja 40.3',
    options: [
      { label: 'A', text: 'Ponieważ jego kora przedczołowa produkuje racjonalizacje obronne: uważa, że „tylko tak można coś załatwić”, działa „dla wyższego dobra” lub sam czuje się ofiarą bezdusznego otoczenia.', isCorrect: true },
      { label: 'B', text: 'Ponieważ wszyscy manipulatorzy mają uszkodzony mózg w 80%.', isCorrect: false },
      { label: 'C', text: 'Gdyż manipulatorzy nie posiadają żadnych myśli ani procesów świadomych.', isCorrect: false },
      { label: 'D', text: 'Świadczy to o całkowitym braku pamięci autobiograficznej.', isCorrect: false }
    ],
    explanation: 'Psychologia rzadko spotyka czyste kinowe potwory. Większość manipulacji to reakcje wyuczone w dzieciństwie przez jednostki przerażone bezpośrednią konfrontacją, maskujące własną bezradność podstępem.',
    keyTakeaway: 'Manipulacja bywa często bronią ludzi słabych, którzy nie wierzą, że mogliby dostać to, czego pragną, prosząc wprost.'
  }
];

export const chapterFortyCaseStudies: CaseStudy[] = [
  {
    id: 'cs-40-1-sukcesja-w-firmie',
    title: 'Studium Przypadku: Cicha Gra o Udziały w Firmie Rodzinnej',
    context: 'Średniej wielkości przedsiębiorstwo przetwórstwa spożywczego. Nestora rodu Henryka (68 lat) i jego dwóch synów: starszego Marcina (38 lat, dyrektor operacyjny) i młodszego Jakuba (30 lat, powrócił ze studiów w Londynie).',
    characters: [
      { name: 'Henryk', role: 'Właściciel', personality: 'Charyzmatyczny, starzejący się patriarcha, boi się utraty kontroli nad życiowym dziełem.' },
      { name: 'Marcin', role: 'Starszy syn', personality: 'Tytan pracy, uważa, że firma należy się jemu, mistrz przemilczeń i aluzji.' },
      { name: 'Jakub', role: 'Młodszy syn', personality: 'Innowacyjny, bezpośredni, nieświadomy intryg starszego brata.' }
    ],
    dilemma: 'Jak rozpoznać manipulację, gdy nie pada ani jedno otwarte kłamstwo, a cały proces toczy się za pomocą selektywnego filtrowania faktów i podsycania lęków ojca?',
    timeline: [
      { time: 'Miesiąc 1', event: 'Jakub proponuje ojcu wdrożenie platformy e-commerce i wejście na rynki skandynawskie, przesyłając pełny biznesplan.' },
      { time: 'Miesiąc 2', event: 'Marcin w rozmowach przy niedzielnym obiedzie nie krytykuje Jakuba wprost. Zamiast tego rzuca z zatroskaną miną: „Jakub ma taki młodzieńczy entuzjazm... Szkoda tylko, że ta warszawska firma, która robiła to samo, w zeszłym miesiącu ogłosiła upadłość. Ale nie martw się tato, ja dopilnuję, żeby Jakub nie stracił za dużo naszych oszczędności”.' },
      { time: 'Miesiąc 3', event: 'Marcin celowo „zapomina” przekazać Jakubowi zaproszenia na kluczowe spotkanie z bankiem finansującym, a ojcu mówi: „Jakub wolał dziś pójść na squasha, nie ma głowy do nudnych papierów”.' },
      { time: 'Miesiąc 4', event: 'Henryk zaczyna traktować młodszego syna jak nieodpowiedzialnego lekkoducha. Dochodzi do wybuchu awantury między braćmi, po której Jakub rezygnuje z pracy w firmie.' }
    ],
    psychologicalDynamics: {
      cognitiveBiases: [
        { biasName: 'Manipulacja Selektywna (Selective Truth-Telling)', manifestation: 'Marcin nie kłamał wprost o bankructwie konkurenta, lecz celowo zataił różnicę w skali i modelu biznesowym.' },
        { biasName: 'Zatruwanie Studni (Poisoning the Well)', manifestation: 'Uprzedzające etykietowanie Jakuba jako „marzyciela bez twardych kompetencji” w umyśle ojca.' }
      ],
      emotionalStates: [
        { trigger: 'Aluzja o bankructwie konkurenta', emotion: 'Ostry lęk Henryka przed zniszczeniem dorobku życia.' },
        { trigger: 'Pominięcie w spotkaniu z bankiem', emotion: 'Poczucie bezradności i wściekłość Jakuba, zinterpretowana przez ojca jako niedojrzałość.' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Uruchomiony u Henryka przez opowieści o ryzyku, wywołał odruch kurczowego trzymania się starego ładu i zaufania do Marcina.' }
      ],
      biologicalTimeline: [
        { timeMs: '0-500 ms', process: 'Słowo „bankructwo” aktywuje ciało migdałowate seniora, blokując racjonalną ocenę liczb Jakuba.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Fałszywa troska (Pseudocare)', description: 'Atakowanie konkurenta pod pozorem opieki i dbałości o rodzinny majątek.', vulnerabilityExploited: 'Lęk ojca przed starością i utratą dorobku.' },
        { tactic: 'Izolacja informacyjna', description: 'Ukrywanie terminów zebrań przed bratem w celu wykreowania go na nieobecnego i leniwego.', vulnerabilityExploited: 'Naiwność i brak podejrzliwości Jakuba.' }
      ],
      counterMeasures: [
        { step: 'Bezpośrednia konfrontacja trójstronna', script: '„Tato, zbierzmy się we trzech z dokumentami przy jednym stole, bez pośredników”.', rationale: 'Natychmiast rozbija asymetrię informacyjną.' }
      ]
    },
    keyTakeaway: 'Najgroźniejsza manipulacja nie posługuje się kłamstwem, lecz kunsztownie dobraną prawdą cząstkową, która popycha drugiego człowieka do fałszywych wniosków.'
  }
];

export const chapterFortyExercises: SelfExercise[] = [
  {
    id: 'ex-40-detektor-fog',
    title: 'Audyt Wolności Decyzyjnej: Czy Działasz ze Zgody, czy z Poczucia Winy?',
    subtitle: 'Narzędzie dekonstrukcji ukrytych nacisków emocjonalnych w relacjach osobistych i zawodowych',
    objective: 'Zidentyfikowanie sytuacji, w których mówisz „tak”, czując w ciele paraliżujący lęk przed odrzuceniem lub winę.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Rozpoznanie sygnałów trzewnych (insula i somatosensory cortex) pozwala oddzielić autentyczną chęć pomocy od somatycznego przymusu obronnego.',
    steps: [
      {
        stepNumber: 1,
        title: 'Lokalizacja Nacisku',
        instruction: 'Wypisz jedną relację, w której po spotkaniu czujesz się wyczerpany, „brudny emocjonalnie” lub masz poczucie, że musisz ciągle spłacać niewidzialny dług.',
        promptText: 'Jakiego zdania najczęściej używa ta osoba, gdy próbujesz odmówić jej prośbie?',
        placeholder: 'Np. „Po tym wszystkim, co dla ciebie zrobiłem...”, „Myślałem, że mogę na ciebie liczyć...”'
      },
      {
        stepNumber: 2,
        title: 'Formułowanie Transparentnej Granicy',
        instruction: 'Zbuduj zdanie oddzielające twoją miłość/szacunek od odmowy wykonania konkretnej czynności.',
        promptText: 'Jak brzmi twoja nowa, spokojna odpowiedź bez tłumaczenia się?',
        placeholder: 'Np. „Bardzo cię kocham i cenię naszą relację, ale w ten weekend nie pomogę ci w remoncie, bo potrzebuję odpocząć”.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego tak trudno znieść nam cudze rozczarowanie, gdy stawiamy zdrową granicę?',
      'Czy twoje poczucie winy wynika z realnej krzywdy wyrządzonej komuś, czy ze złamania cudzego scenariusza kontroli?'
    ]
  }
];

export const chapterForty: Chapter = {
  number: 40,
  volume: 3,
  volumeChapterNumber: 24,
  title: 'Manipulacja — Wpływ, Ukryty Cel i Ograniczenie Świadomego Wyboru',
  subtitle: 'Kiedy wpływ drugiej osoby przestaje być zwykłym przekonywaniem, a zaczyna wykorzystywać informacje, emocje, zależność lub ograniczenia człowieka',
  leadParagraph: `Manipulacja jest cieniem rzucanym przez relacje międzyludzkie. Nie polega ona na widowiskowych sztuczkach filmowych czarnych charakterów, lecz na codziennym, cichym przesuwaniu granic cudzej percepcji. To gra prowadzona na asymetrii wiedzy, na tłumionych lękach przed samotnością, na sprytnie podsycanym poczuciu winy i długu. Rozpoznanie manipulacji nie służy temu, by zgorzknieć i przestać ufać ludziom — służy temu, by odzyskać trzeźwy wzrok i ocalić własną wolność wyboru.`,
  totalEstimatedPages: 66,
  sections: [
    // 40.1
    {
      id: 'sec-40-1',
      pageNumber: 1,
      sectionNumber: '40.1',
      title: 'Czym jest manipulacja? Ewolucja pojęcia: Od rzemieślniczego kunsztu do psychologicznego zawłaszczenia',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Słowo manipulacja wywodzi się z łacińskiego manipulus — garść, manewrowanie dłońmi. W sensie psychologicznym manipulować człowiekiem to traktować go jak bezduszną materię: przestawiać go w cudzym teatrze tak, by służył scenariuszowi reżysera, wierząc naiwnie, że sam wybiera swoją rolę.',
        author: 'Prof. Robert E. Goodin',
        source: 'Australian National University, „Manipulatory Politics”, Yale University Press, 1980'
      },
      paragraphs: [
        'W epoce nowożytnej słowo „manipulacja” przeszło fascynującą ewolucję semantyczną. Początkowo oznaczało kunsztowne, manualne posługiwanie się narzędziami w jubilerstwie, alchemii czy medycynie (manipulowanie przyrządem). Z czasem przeniknęło do nauk społecznych, opisując zjawisko skrajnie niepokojące: traktowanie drugiego CZŁOWIEKA jako plastycznego materiału, który można ukształtować podstępem ku własnej korzyści.',
        'W literaturze naukowej funkcjonują dwa ujęcia manipulacji:',
        '- UJĘCIE WĄSKIE (Etyczno-Kliniczne): Celowe wprowadzenie w błąd, oszustwo emocjonalne lub eksploatacja poznawcza, w której manipulator działa z pełną premedytacją i cynizmem, traktując ofiarę wyłącznie instrumentalnie.',
        '- UJĘCIE SZEROKIE (Funkcjonalno-Relacyjne): Każdy rodzaj oddziaływania, w którym jedna strona w sposób niejawny modyfikuje pole decyzyjne drugiej strony — często bez pełnej świadomości własnych ukrytych motywów, z lęku przed odrzuceniem lub nawyku wyniesionego z dysfunkcyjnego domu rodzinnego.',
        'Zrozumienie, że manipulacja nie zawsze rodzi się z czystego sadyzmu, lecz często z lękowej bezradności, pozwala badać ten mechanizm z chirurgiczną precyzją, bez popadania w naiwne moralizatorstwo.'
      ],
      subsections: [
        {
          id: 'sub-40-1-1',
          title: 'Analiza słów prof. Roberta Goodina: Instrumentalizacja Istoty Ludzkiej',
          content: [
            'Filozof polityki prof. Robert Goodin zwraca uwagę na sedno krzywdy manipulacyjnej. Złodziej, który wyciąga pistolet i krzyczy: „Pieniądze albo życie”, szanuje przynajmniej twoją percepcję rzeczywistości — wiesz dokładnie, kim on jest i przed jakim wyborem stoisz.',
            'Manipulator idzie znacznie dalej: on kradnie twoją zdolność do trafnej oceny sytuacji. Sprawia, że sam, z własnej woli, oddajesz mu swoje zasoby, czas lub godność, a na koniec jeszcze dziękujesz mu za „opiekę”. Z tego powodu manipulacja jest najgłębszym zamachem na autonomię człowieka — odbiera ci podmiotowość od środka.'
          ],
          highlightBox: {
            title: 'Kluczowy Wgląd Filozoficzny: Kantowska Zasada Celowości',
            content: 'Immanuel Kant sformułował fundamentalne prawo etyki: „Postępuj tak, byś człowieczeństwa w osobie własnej i każdego innego używał zawsze zarazem jako celu, nigdy tylko jako środka”. Manipulacja jest radykalnym złamaniem tej zasady — zamienia człowieka w narzędzie.',
            type: 'insight'
          }
        }
      ]
    },

    // 40.2
    {
      id: 'sec-40-2',
      pageNumber: 4,
      sectionNumber: '40.2',
      title: 'Manipulacja a perswazja: Trzy osie demarkacyjne — intencja, pole informacyjne i prawo do odmowy',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'Aby nie ulec paranoi i nie widzieć manipulatora w każdym partnerze biznesowym czy małżonku, musimy zastosować ścisłą matrycę diagnostyczną opartą na trzech osiach:',
        'OŚ I: CZY CEL JEST JAWNY? W perswazji nadawca nie wstydzi się swoich zamiarów: „Chcę cię namówić na ten projekt, bo wierzę, że razem zrobimy coś wielkiego”. W manipulacji prawdziwy cel jest głęboko ukryty pod maską pozornej troski: „Martwię się o ciebie, powinieneś oddać mi te obowiązki, bo w twoim stanie sobie nie poradzisz”.',
        'OŚ II: CZY INFORMACJE SĄ KOMPLETNE? Perswadowanie polega na uczciwym bilansowaniu argumentów pro i contra. Manipulacja żywi się selektywnym przemilczaniem faktów, preparowaniem danych i blokowaniem dostępu do niezależnych źródeł weryfikacji.',
        'OŚ III: JAKI JEST KOSZT POWIEDZENIA „NIE”? To najważniejszy test wolności. W perswazji odmowa kończy rozmowę lub prowadzi do dalszej dyskusji. W manipulacji odmowa natychmiast odpala karę relacyjną: foch, chłód emocjonalny, oskarżenia o egoizm, szantaż zerwaniem kontaktu lub sabotowanie innych sfer życia.'
      ],
      interactiveWindowRef: {
        id: 'win-40-2-perswazja-presja-manipulacja',
        title: 'MODUŁ A: Perswazja, Presja czy Manipulacja?',
        subtitle: 'Interaktywny test rozróżniania form wpływu w sytuacjach granicznych',
        context: 'Ocena czterech dialogów z życia zawodowego pod kątem wolności decyzyjnej.',
        type: 'what_we_know',
        takeaway: 'Jeśli za odmowę płacisz poczuciem winy lub strachem przed karą — nie jesteś przekonywany, jesteś manipulowany.',
        whatWeKnow: {
          items: [
            {
              id: 'diag-40-1',
              statement: 'Szef mówi: „Mamy kryzys z wdrożeniem. Potrzebuję cię w sobotę na 4 godziny. Płacimy podwójnie plus dzień wolny w tygodniu. Wiem, że to obciążenie, możesz odmówić, ale bardzo na ciebie liczę”.',
              category: 'fakt',
              explanation: 'Uczciwa, twarda perswazja: jawny problem, rekompensata, potwierdzenie prawa do odmowy bez manipulacji emocjami.'
            },
            {
              id: 'diag-40-2',
              statement: 'Szef mówi: „No tak, rozumiem, że rodzina jest ważna... Inni liderzy jakoś potrafią poświęcić sobotę dla dobra zespołu bez marudzenia, no ale nie każdy nadaje się na stanowiska kierownicze... Zrobisz, jak uważasz”.',
              category: 'interpretacja',
              explanation: 'Podręcznikowa manipulacja i szantaż statusem: ukryta groźba utraty szans na awans, porównanie rówieśnicze wywołujące wstyd, fałszywa autonomia („Zrobisz, jak uważasz”).'
            }
          ]
        }
      }
    },

    // 40.3
    {
      id: 'sec-40-3',
      pageNumber: 7,
      sectionNumber: '40.3',
      title: 'Dlaczego ludzie manipulują? Psychodynamika lęku, kontroli, deficytów narcystycznych i wyuczonej bezradności',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Dlaczego człowiek decyduje się na krętą, ryzykowną ścieżkę manipulacji, zamiast poprosić wprost? Z punktu widzenia psychologii głębi i teorii przywiązania, motywacje sprawców rzadko bywają demoniczne. Najczęściej wynikają z głębokich deficytów emocjonalnych:',
        '1. LĘK PRZED BEZPOŚREDNIM ODRZUCENIEM: Człowiek, który w dzieciństwie doświadczył, że jego otwarte prośby spotykały się z chłodem lub karą, uczy się: „Jeśli poproszę wprost — usłyszę «nie». Jedynym sposobem na przetrwanie jest wymanewrowanie innych tak, by nie mieli wyjścia”.',
        '2. DEFICYT KONTROLI I ZESPÓŁ OBLĘŻONEJ TWIERDZY: Osoba o niskiej odporności na niepewność traktuje każdą autonomię otoczenia jako śmiertelne zagrożenie. Manipulacja staje się dla niej systemem wczesnego ostrzegania i sterowania ludźmi jak pionkami na szachownicy.',
        '3. RANIONE EGO I NARCYZM WRAŻLIWY: Manipulator maskuje podstępem głębokie przekonanie o własnej niewystarczalności. Otwarta debata grozi obnażeniem jego braków; intryga pozwala triumfować z ukrycia.'
      ]
    },

    // 40.4
    {
      id: 'sec-40-4',
      pageNumber: 10,
      sectionNumber: '40.4',
      title: 'Informacja jako narzędzie wpływu: Zarządzanie asymetrią, technika kropelkowa i białe kłamstwo',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Kto kontroluje dopływ informacji, ten kontroluje wyobraźnię odbiorcy. W manipulacji informacyjnej wyróżniamy trzy wyrafinowane techniki:',
        '- MANIPULACJA KROPELKOWA (Drip Feeding): Dozowanie trudnych faktów po maleńkim kawałku, by odbiorca stopniowo godził się na pogorszenie warunków, nie zauważając całościowej katastrofy.',
        '- ZATAJENIE STRATEGICZNE (Lie of Omission): Nadawca mówi 100% prawdy w słowach, które wypowiada, ale celowo przemilcza jeden fakt, który całkowicie odwróciłby sens sytuacji (np. sprzedaż samochodu bez wspomnienia o pękniętej głowicy silnika).',
        '- SZUM INFORMACYJNY (Gish Gallop): Zalanie odbiorcy setkami nieistotnych, skomplikowanych danych technicznych, by wywołać wyczerpanie kory przedczołowej i wymusić bezrefleksyjny podpis na umowie.'
      ]
    },

    // 40.5
    {
      id: 'sec-40-5',
      pageNumber: 13,
      sectionNumber: '40.5',
      title: 'Historia: „Nie powiedział wszystkiego” — Anatomia zatajenia i upadek zaufania wspólników',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Michał i Damian prowadzili spółkę zajmującą się wynajmem apartamentów turystycznych. W trakcie negocjacji zakupu nowej kamienicy Michał dowiedział się od znajomego w urzędzie miasta, że za 6 miesięcy przed budynkiem rozpocznie się 2-letnia budowa linii tramwajowej, która całkowicie odetnie dojazd i wywoła gigantyczny hałas.',
        'Michał nie skłamał ani razu. Przyniósł Damianowi piękne kalkulacje stóp zwrotu z najmu z ostatnich lat. Gdy Damian zapytał: „Czy widzisz jakieś ryzyka w tej lokalizacji?”, Michał odpowiedział z promiennym uśmiechem: „Lokalizacja jest bezbłędna, 5 minut do rynku, turyści to pokochają”. Umowa została podpisana, kredyt na 3 miliony złotych uruchomiony.',
        'Kiedy po pół roku przed kamienicę wjechały koparki i turyści zaczęli masowo anulować rezerwacje, Damian stanął w obliczu bankructwa. Michał rozłożył ręce: „Przecież nie mogłem przewidzieć remontów miejskich, skąd miałem wiedzieć?”.',
        'Zatajenie prawdy przyniosło Michałowi doraźny zysk (prowizję pośredniczą), ale na zawsze zniszczyło jego reputację i zakończyło przyjaźń trwającą od czasów liceum.'
      ]
    },

    // 40.6
    {
      id: 'sec-40-6',
      pageNumber: 16,
      sectionNumber: '40.6',
      title: 'Manipulacja emocjami: Syndrom FOG (Fear, Obligation, Guilt) Susan Forward',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Szantaż emocjonalny to potężna forma manipulacji, w której bliskie nam osoby grożą — bezpośrednio lub pośrednio — że ukarzą nas, jeśli nie zrobimy tego, czego chcą. W centrum każdego szantażu leży toksyczna mgła: Lęk (Fear), Obowiązek (Obligation) i Poczucie Winy (Guilt).',
        author: 'Dr Susan Forward',
        source: 'University of California, „Emotional Blackmail: When the People in Your Life Use Fear, Obligation, and Guilt to Manipulate You”, HarperCollins, 1997'
      },
      paragraphs: [
        'Dr Susan Forward zidentyfikowała trzy dźwignie emocjonalne, za pomocą których manipulatorzy więżą swoje ofiary:',
        '1. LĘK (Fear): Wykorzystanie najgłębszych obaw ofiary — lęku przed porzuceniem, samotnością, skandalem, utratą pracy czy gniewem autorytetu („Jeśli nie zrobisz tego, odejdę i zostaniesz sam”).',
        '2. OBOWIĄZEK (Obligation): Odwoływanie się do wypaczonego poczucia długu i lojalności. Manipulator instaluje w tobie przekonanie, że twoim nadrzędnym obowiązkiem moralnym jest uszczęśliwianie jego, nawet kosztem własnego zdrowia i rodziny („Poświęciłam dla ciebie najlepsze lata życia, a ty nie masz dla mnie czasu w niedzielę!”).',
        '3. POCZUCIE WINY (Guilt): Najbardziej destrukcyjne narzędzie. Manipulator czyni cię osobiście odpowiedzialnym za swoje złe samopoczucie, choroby somatyczne, depresję i porażki życiowe („Przez ciebie rozbolało mnie serce, doprowadzisz mnie do grobu”).'
      ]
    },

    // 40.7
    {
      id: 'sec-40-7',
      pageNumber: 19,
      sectionNumber: '40.7',
      title: 'Poczucie winy jako narzędzie nacisku: Rzeczywista odpowiedzialność a wina neurotyczna',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Aby uwolnić się z pętli winy, musimy dokonać rygorystycznego rozróżnienia:',
        '- WINA RZECZYWISTA / ZDROWA: Pojawia się wtedy, gdy obiektywnie złamałem zasady etyczne, skłamałem, zdradziłem lub wyrządziłem komuś realną krzywdę. Prowadzi do zadośćuczynienia, przeprosin i zmiany postępowania.',
        '- WINA ZINDUKOWANA / MANIPULACYJNA: Pojawia się wtedy, gdy po prostu ODMÓWIŁEM spełnienia cudzego, nieuzasadnionego żądania, chroniąc własne granice psychofizyczne. Manipulator natychmiast interpretuje twoją odmowę jako „atak”, zmuszając cię do wiecznych przeprosin za to, że masz własne potrzeby.',
        'Dojrzałość emocjonalna polega na zdolności do zniesienia cudzego niezadowolenia bez brania na siebie winy za to, co czuje druga osoba.'
      ]
    },

    // 40.8
    {
      id: 'sec-40-8',
      pageNumber: 22,
      sectionNumber: '40.8',
      title: 'Historia: „Jeśli naprawdę ci zależy…” — Anatomia szantażu lojalnością i szacunkiem',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Aneta (32 lata) od 3 lat pracowała w agencji marketingowej prowadzonej przez Monikę — charyzmatyczną, starszą o dekadę mentorkę, która pomogła Anecie wejść na rynek.',
        'W czwartek o 19:00 Monika wzywa Anetę do gabinetu i prosi o napisanie strategii dla nowego klienta na poniedziałek rano. Aneta blada z wyczerpania odpowiada: „Moniko, w ten weekend mam 60. urodziny mojej mamy, mamy zaplanowany zjazd rodzinny, nie dam rady”.',
        'Monika zdejmuje okulary, milczy przez 20 sekund, po czym mówi głębokim, rozczarowanym tonem: „Aneta... Ja myślałam, że budujemy tę agencję razem. Pamiętasz, jak wyciągnęłam cię z korporacji, gdy nikt w ciebie nie wierzył? Dałam ci szansę, chroniłam cię przed klientami. A teraz, gdy firma walczy o przetrwanie, ty wybierasz imprezę z ciastem? Jeśli tak wygląda twoja lojalność i wdzięczność, to chyba pomyliłam się co do twojego charakteru”.',
        'W głowie Anety odpala się eksplozja winy i lęku przed byciem uznaną za niewdzięczną egoistkę. Z płaczem anuluje bilet na urodziny matki i spędza weekend przed monitorem.'
      ],
      interactiveWindowRef: {
        id: 'win-40-8-dekonstrukcja-fog',
        title: 'MODUŁ B: Co Dokładnie Dzieje Się w Tej Rozmowie?',
        subtitle: 'Rozłożenie szantażu lojalnością Moniki na czynniki pierwsze',
        context: 'Konfrontacja Anety z szantażem wdzięczności i obowiązku.',
        type: 'dual_perspectives',
        takeaway: 'Wdzięczność za przeszłą pomoc nie oznacza wieczystego niewolnictwa emocjonalnego.',
        dualPerspective: {
          situation: 'Odmowa pracy w weekend przez pracownicę z powodu rodzinnej uroczystości.',
          personA: {
            name: 'Monika (Manipulator stosujący FOG)',
            quote: '„Poświęciłam dla ciebie tyle czasu, a ty zawiodłaś mnie w najważniejszym momencie”.',
            whatTheyKnow: 'Wie, że nie zapłaciła podwykonawcom i potrzebuje darmowej pracy Anety.',
            whatTheyMiss: 'Całkowicie ignoruje granice i życie prywatne drugiej osoby.',
            interpretation: '„Lojalność oznacza 100% dyspozycyjności na moje zawołanie”.',
            coreNeed: 'Kontrola, ratowanie budżetu i dominacja nad podwładną.',
            fear: 'Lęk przed utratą prestiżu agencji.',
            action: 'Indukowanie toksycznego wstydu i podważanie moralności Anety.'
          },
          personB: {
            name: 'Aneta (Ofiara szantażu)',
            quote: '„Może rzeczywiście jestem niewdzięczna? Przecież Monika tyle dla mnie zrobiła...”.',
            whatTheyKnow: 'Wie, że obiecała mamie obecność i że fizycznie pada z sił.',
            whatTheyMiss: 'Nie zauważa, że jej praca przez 3 lata wielokrotnie spłaciła dług wdzięczności.',
            interpretation: '„Odmowa szefowej oznacza, że jestem złym człowiekiem”.',
            coreNeed: 'Potrzeba bycia akceptowaną i docenioną przez autorytet.',
            fear: 'Lęk przed odrzuceniem i etykietą niewdzięcznicy.',
            action: 'Kapitulacja, wykasowanie własnych potrzeb i uległość.'
          },
          synthesis: 'Szantaż lojalnością zamienia przeszłą pomoc w dożywotnią hipotekę emocjonalną. Pomoc z przeszłości, która wymaga rezygnacji z godności w teraźniejszości, nie była darem — była inwestycją w smycz.'
        }
      }
    },

    // 40.9
    {
      id: 'sec-40-9',
      pageNumber: 25,
      sectionNumber: '40.9',
      title: 'Gaslighting — czym jest, a czym nie jest? Precyzyjna definicja kliniczna i ochrona przed inflacją pojęciową',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Gaslighting to forma manipulacji psychologicznej, w której sprawca systematycznie sieje ziarna zwątpienia w umyśle ofiary lub członków grupy, sprawiając, że zaczynają oni kwestionować własną pamięć, percepcję, zdrowie psychiczne i osąd rzeczywistości.',
        author: 'Dr Robin Stern',
        source: 'Yale Center for Emotional Intelligence, „The Gaslight Effect”, Morgan Road Books, 2007'
      },
      paragraphs: [
        'Termin „gaslighting” wywodzi się z brytyjskiej sztuki teatralnej Patricka Hamiltona z 1938 roku Gas Light (oraz jej słynnej ekranizacji z Ingrid Bergman z 1944 roku), w której mąż metodycznie przyciemniał lampy gazowe w domu, a gdy żona to zauważała, wmawiał jej z kamienną twarzą, że światło się nie zmienia, a ona traci rozum.',
        'W ostatnich latach termin ten padł ofiarą dramatycznej inflacji w mediach społecznościowych. Mianem gaslightingu zaczęto nazywać każdą różnicę zdań („Nie pamiętam, żebym to mówił”), każde kłamstwo czy zły humor partnera. Psychologia kliniczna protestuje przeciwko temu spłaszczeniu.',
        'Gaslighting NIE JEST: 1) Zwykłą różnicą w zapamiętaniu szczegółów rozmowy, 2) Odrzuceniem twojej interpretacji faktów, 3) Incydentalnym kłamstwem w celu uniknięcia kłótni.',
        'Gaslighting JEST: Metodycznym, powtarzalnym i długofalowym procesem niszczenia aparatu poznawczego drugiego człowieka. Sprawca używa zwrotów: „Zmyślasz”, „Wszyscy wiedzą, że jesteś niestabilna emocjonalnie”, „Nigdy nic takiego się nie wydarzyło, masz urojenia”, w celu całkowitego uzależnienia ofiary od swojej wersji prawdy.'
      ]
    },

    // 40.10
    {
      id: 'sec-40-10',
      pageNumber: 28,
      sectionNumber: '40.10',
      title: 'Podważanie percepcji i erozja zaufania do własnych zmysłów: Etapy wciągania w mgłę poznawczą',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Proces gaslightingu rozwija się w trzech podstępnych fazach:',
        'FAZA 1: NIEDOWIERZANIE (Incredulity). Ofiara zauważa jawną sprzeczność (np. widzi sms-a partnera z inną kobietą), ale gdy ten zaprzecza („To pomyłka, jesteś przewrażliwiona”), uznaje to za dziwne nieporozumienie i próbuje racjonalnie dyskutować.',
        'FAZA 2: OBRONA I WALKA (Defense). Ofiara zbiera dowody, robi zrzuty ekranu, spisuje daty rozmów. Sprawca eskaluje atak: „Znowu robisz ze mnie wariata? Szpiegujesz mnie? Powinnaś pójść do psychiatry, niszczysz naszą rodzinę swoją paranoją!”. Ofiara zaczyna tracić siły i wątpić w ostrość własnego spojrzenia.',
        'FAZA 3: KAPITULACJA I DEPRESJA (Depression & Compliance). Ofiara przestaje ufać własnym oczom i uszom. Każde swoje wspomnienie zaczyna konsultować ze sprawcą: „Czy ja naprawdę to powiedziałam? Czy ja przesadzam?”. Jej kora przedczołowa kapituluje — zewnętrzny dyktator przejmuje kontrolę nad jej tożsamością.'
      ]
    },

    // 40.11
    {
      id: 'sec-40-11',
      pageNumber: 31,
      sectionNumber: '40.11',
      title: 'Historia: „Może rzeczywiście przesadzam” — Kronika powolnej utraty pewności poznawczej',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Kasia i Robert byli małżeństwem od 6 lat. Robert był wziętym prawnikiem, mistrzem retoryki. Za każdym razem, gdy Robert obiecywał wrócić na kolację i zjawiał się o północy pod wpływem alkoholu, scenariusz był ten sam.',
        'Kasia mówiła: „Przecież dzwoniłeś o 18:00 i mówiłeś, że wyjeżdżasz z biura”. Robert patrzył na nią z politowaniem i mówił miękkim, kojącym głosem: „Kasiu, kochanie, znowu przekręcasz moje słowa. Powiedziałem, że wyjadę, JEŚLI skończę pismo procesowe. Jak zwykle słyszysz tylko to, co chcesz usłyszeć. Martwię się o twoją pamięć, ostatnio jesteś taka przemęczona... Może powinnaś brać leki uspokajające?”.',
        'Z czasem Robert zaczął przestawiać drobne rzeczy w domu, chowając kluczyki i twierdząc, że Kasia sama je tam położyła. Po dwóch latach Kasia przestała zabierać głos przy znajomych. Przed każdą wypowiedzią patrzyła na męża, szukając potwierdzenia, czy to, co pamięta, jest prawdą. Stała się cieniem samej siebie.'
      ]
    },

    // 40.12
    {
      id: 'sec-40-12',
      pageNumber: 34,
      sectionNumber: '40.12',
      title: 'Manipulacja przez zależność: Finansowa, emocjonalna, prawna i zawodowa smycz',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Manipulacja rzadko unosi się w próżni. Jej fundamentem jest zawsze ZALEŻNOŚĆ ZASOBOWA (nawiązując do teorii Emersona z Rozdziału 38):',
        '- ZALEŻNOŚĆ FINANSOWA: Zmuszenie partnera do rezygnacji z pracy („Po co masz się męczyć, ja zarobię na wszystko”), co w perspektywie kilku lat pozbawia go własnego konta, historii zatrudnienia i możliwości ucieczki.',
        '- ZALEŻNOŚĆ EMOCJONALNA: Systematyczne odcinanie ofiary od przyjaciół i rodziny („Twoja matka ma na ciebie zły wpływ, twoje koleżanki ci zazdroszczą”), aż manipulator staje się jedynym oknem na świat i jedynym lustrem samooceny.',
        '- ZALEŻNOŚĆ ZAWODOWA: Przełożony, który monopolizuje wiedzę o projektach i wmawia podwładnemu, że „poza tą firmą nikt cię nie zatrudni”, więżąc talenty w klatce niskich płac.'
      ]
    },

    // 40.13
    {
      id: 'sec-40-13',
      pageNumber: 37,
      sectionNumber: '40.13',
      title: 'Manipulacja bliskością i więzią: Od Love Bombingu do odrzucenia (Intermittent Reinforcement)',
      category: 'neuronauka',
      readingTimeMinutes: 26,
      paragraphs: [
        'Najpotężniejszą biologiczną pułapką manipulacyjną jest tzw. NIEREGULARNE WZMOCNIENIE (Intermittent Reinforcement) — ten sam mechanizm, który uzależnia hazardzistów od automatów do gry.',
        'Cykl rozpoczyna się od BOMBARDIOWANIA MIŁOŚCIĄ (Love Bombing): lawiny komplementów, deklaracji wielkiej przyjaźni, idealizacji. Odbiorca zostaje zalany dopaminą i oksytocyną.',
        'Nagle, bez wyraźnego powodu, manipulator staje się chłodny, złośliwy i niedostępny. Poziom dopaminy u ofiary gwałtownie spada, wywołując fizyczny ból odstawienny i panikę przywiązaniową w dACC. Ofiara zrobi wszystko, by odzyskać choć jedno ciepłe spojrzenie.',
        'Wtedy manipulator na chwilę rzuca ochłap czułości — mózg ofiary doznaje potężnego wyrzutu neuroprzekaźników ulgi. Ta huśtawka tworzy tzw. TRAUMATYCZNE PRZYWIĄZANIE (Trauma Bond), które jest silniejsze niż najzdrowsza miłość.'
      ]
    },

    // 40.14
    {
      id: 'sec-40-14',
      pageNumber: 40,
      sectionNumber: '40.14',
      title: 'Manipulacja lojalnością i przynależnością rodzinną: Klątwa „rodzinnych tajemnic” i lojalności plemiennej',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Rodzina jest środowiskiem o najwyższej stawce emocjonalnej. W dysfunkcyjnych systemach rodzinnych manipulacja przybiera formę tabu i uwikłania (Enmeshment):',
        'Komunikat brzmi: „Brudy pierze się we własnym domu”, „Cokolwiek dzieje się w rodzinie, nie wolno ci o tym mówić nikomu na zewnątrz”. W ten sposób ofiara przemocy psychicznej czy molestowania zostaje zablokowana przed szukaniem pomocy.',
        'Wyznaczenie granicy (np. odmowa spędzenia świąt pod dyktando przemocowego rodzica) jest natychmiast piętnowane jako „zdrada krwi”. Człowiek musi wybierać między lojalnością wobec klanu a wiernością własnemu zdrowiu psychicznemu.'
      ]
    },

    // 40.15
    {
      id: 'sec-40-15',
      pageNumber: 43,
      sectionNumber: '40.15',
      title: 'Manipulacja grupą i presją stadną: Rola sojuszników manipulacji (Flying Monkeys) i lincz reputacyjny',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Wyrafinowany manipulator rzadko atakuje w pojedynkę. Buduje wokół siebie sieć nieświadomych pomocników — w psychologii określanych terminem FLYING MONKEYS (Latające Małpy, w nawiązaniu do czarownicy z Czarnoksiężnika z Krainy Oz).',
        'Są to znajomi, koledzy z pracy czy krewni, którym manipulator przedstawia spreparowaną wersję wydarzeń, kreując siebie na zranioną ofiarę, a cel ataku na bezdusznego agresora. Następnie wysyła te osoby, by „przemówiły do rozsądku” buntującej się jednostce.',
        'Gdy nagle pięć bliskich osób powtarza ci: „Jak możesz tak ranić Marka, on tak bardzo cię kocha?”, presja normatywna (Rozdział 37) staje się niemal niemożliwa do udźwignięcia w pojedynkę.'
      ]
    },

    // 40.16
    {
      id: 'sec-40-16',
      pageNumber: 46,
      sectionNumber: '40.16',
      title: 'Status a podatność na manipulację: Kiedy wysoka pozycja oślepia, a niska odbiera głos',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Wbrew powszechnym mitom, ludzie o wysokim statusie społecznym (prezesi, profesorowie, dyrektorzy) są równie podatni na manipulację, co osoby o statusie niskim — zmienia się jedynie haczyk:',
        '- HODOWANIE PYCHY LIDERA: Manipulator schlebia próżności lidera („Tylko pan ma tak genialną wizję”), usypiając jego czujność krytyczną i stając się szarą eminencją kierującą decyzjami gabinetu.',
        '- ZASTAWIENIE PUŁAPKI NA SŁABYCH: Wobec osób o niskim statusie manipulator stosuje bezpośrednie zastraszanie utratą pracy i eksploatuje ich lęk przed instytucjonalną bezbronnością.'
      ]
    },

    // 40.17
    {
      id: 'sec-40-17',
      pageNumber: 49,
      sectionNumber: '40.17',
      title: 'Historia: „Coraz mniej możliwości wyboru” — Jak sekwencja drobnych ustępstw buduje więzienie',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Kiedy Paweł zatrudnił się jako asystent w kancelarii znanego mecensa Jerzego, wydawało się, że złapał pana Boga za nogi.',
        'Pierwsze ustępstwo: Mecenas poprosił w niedzielę o odebranie garnituru z pralni. Paweł pomyślał: „Żaden problem, chcę pokazać zaangażowanie”.',
        'Drugie ustępstwo: Mecenas poprosił o sfałszowanie daty na potwierdzeniu odbioru pisma o jeden dzień wstecz, mówiąc: „To tylko formalność biurowa, uratujesz klienta”. Paweł poczuł ukłucie niepokoju, ale podpisał.',
        'Trzecie ustępstwo: Mecenas wciągnął Pawła do spółki celowej jako figuranta w ryzykownym przejęciu nieruchomości. Gdy Paweł zaprotestował, mecenas uśmiechnął się chłodno i położył na stole tamto antydatowane pismo z podpisem Pawła: „Mój drogi, jeśli ta sprawa trafi do izby adwokackiej, twój wpis na aplikację jest skończony. Jedziemy na tym samym wózku”.',
        'Paweł zdał sobie sprawę, że klatka zamknęła się na dobre. Manipulator nie zaczął od zbrodni — zaczął od garnituru.'
      ],
      interactiveWindowRef: {
        id: 'win-40-17-zawiezanie-autonomii',
        title: 'MODUŁ C: W Którym Momencie Zmniejszyła Się Autonomia?',
        subtitle: 'Laboratorium śledzenia gradacji pułapki behawioralnej Pawła',
        context: 'Identyfikacja punktu, w którym uległość zamieniła się w przymus szantażowy.',
        type: 'microscope',
        takeaway: 'Granicę etyczną należy stawiać przy pierwszym pozornie niewinnym naruszeniu — przy trzecim jesteś już wspólnikiem.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: '1. TEST ELASTYCZNOŚCI',
            question: 'Co oznaczało odebranie garnituru?',
            content: 'Testowanie podatności na przekraczanie granic roli zawodowej i gotowości do uległości pozasłużbowej.',
            subtext: 'Zbadanie, czy Paweł ma odwagę stawiać granice czasowe.'
          },
          {
            stepNumber: 2,
            label: '2. PIERWSZY KOMPROMIS ETYCZNY',
            question: 'Dlaczego antydatowanie pisma było punktem bez powrotu?',
            content: 'W momencie popełnienia deliktu prawnego mecenas zyskał kompromitujący materiał (kompromat) trzymający Pawła w szachu.',
            subtext: 'Wejście w spiralę uwikłania i utrata moralnej niewinności.'
          },
          {
            stepNumber: 3,
            label: '3. ZAMKNIĘCIE PUŁAPKI',
            question: 'Jaka jest pozycja Pawła przy spółce celowej?',
            content: 'Paweł nie ma już wyboru wewnątrz układu: odmowa oznacza zniszczenie kariery, uległość grozi odpowiedzialnością karną.',
            subtext: 'Całkowita likwidacja alternatyw decyzyjnych.'
          }
        ]
      }
    },

    // 40.18
    {
      id: 'sec-40-18',
      pageNumber: 52,
      sectionNumber: '40.18',
      title: 'Manipulacja a autonomia: Test Trzech Pytań Decyzyjnych i prawo do nieuzasadnionej odmowy',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Aby sprawdzić, czy decyzja, którą zamierzasz podjąć, jest suwerennym aktem twojej woli, czy produktem manipulacji, zastosuj TEST TRZECH PYTAŃ:',
        'PYTANIE 1: „Gdybym miał 100% gwarancji, że druga osoba nie obrazi się, nie ukarze mnie chłodem ani nie zrobi mi awantury — czy nadal wybrałbym tę opcję?”. Jeśli odpowiedź brzmi „nie” — działasz z lęku.',
        'PYTANIE 2: „Czy dysponuję wszystkimi danymi finansowymi, prawnymi i relacyjnymi, czy opieram się wyłącznie na zapewnieniach drugiej strony?”.',
        'PYTANIE 3: „Czy czuję nagły, sztuczny pośpiech, że muszę podjąć decyzję natychmiast?”. Prawdziwa perswazja daje czas na sen i konsultację z przyjaciółmi; manipulacja żąda podpisu tu i teraz.'
      ]
    },

    // 40.19
    {
      id: 'sec-40-19',
      pageNumber: 55,
      sectionNumber: '40.19',
      title: 'Badania nad podatnością na wpływ: Kto jest najbardziej zagrożony? Rola samokontroli i stylu przywiązania',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Badania psychologii różnic indywidualnych obalają mit, że ofiarami manipulacji padają wyłącznie ludzie naiwni lub mało inteligentni. Podatność na manipulację nie koreluje z IQ — koreluje z profilami osobowościowymi:',
        '1. LĘKOWY STYL PRZYWIĄZANIA: Paniczny strach przed opuszczeniem sprawia, że osoby te godzą się na każde upokorzenie i manipulację winą, byle tylko utrzymać iluzję bliskości.',
        '2. WYSOKA UGODOWOŚĆ I NEUROTICYZM (Wielka Piątka): Patologiczna potrzeba zadowalania innych (People Pleasing) i unikania jakichkolwiek zarzutów o egoizm.',
        '3. WYCZERPANIE EGO (Ego Depletion): Człowiek przewlekle zmęczony, chory lub pracujący po 14 godzin na dobę traci korowe zasoby wetowania (Free Won’t) i podpisuje dokumenty bez czytania.'
      ]
    },

    // 40.20
    {
      id: 'sec-40-20',
      pageNumber: 58,
      sectionNumber: '40.20',
      title: 'Kontrprzypadek I: Skuteczny, twardy wpływ bez cienia manipulacji — Czyste negocjacje interesów',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Wielu ludzi myli asertywną, twardą postawę negocjacyjną z manipulacją. Wyobraźmy sobie twardego negocjatora w biznesie:',
        'Mówi wprost: „Nasza cena wynosi 500 tysięcy złotych. Nie zejdziemy ani o grosz. Wiemy, że jesteśmy jedynym dostawcą tych części w regionie. Jeśli nie podpiszecie umowy do piątku, podpisujemy ją z waszą konkurencją”.',
        'Czy to jest manipulacja? ABSOLUTNIE NIE. To jest twarde wykorzystanie pozycji rynkowej (władzy zasobowej). Cel jest jawny, fakty są prawdziwe, reguły gry są jasne, nikt nie udaje fałszywego przyjaciela ani nie gra na poczuciu winy. Odbiorca może podjąć suwerenną, choć trudną decyzję biznesową.'
      ]
    },

    // 40.21
    {
      id: 'sec-40-21',
      pageNumber: 60,
      sectionNumber: '40.21',
      title: 'Kontrprzypadek II: Manipulacja bez ani jednego kłamstwa — Żonglerka faktami i fałszywa troska',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z drugiej strony manipulacja osiąga swój szczyt wyrafinowania wtedy, gdy sprawca nie wypowiada ani jednego fałszywego zdania w sensie procesowym.',
        'Przykład: Matka mówi do dorosłej córki planującej przeprowadzkę do innego miasta: „Kochanie, oczywiście jedź. Wiesz, że twój ojciec w zeszłym roku miał ten stan przedzawałowy, a sąsiadka mówiła wczoraj, że w tamtej dzielnicy w Warszawie ostatnio napadli kobietę po zmroku. Ale ty się nami nie przejmuj, my jakoś z tatą damy sobie radę sami w tym pustym domu”.',
        'Każdy pojedynczy fakt jest prawdziwy: ojciec miał incydent sercowy, w Warszawie doszło do napadu. Jednak połączenie tych faktów w jednym komunikacie jest perfidną konstrukcją szantażu emocjonalnego, mającą wywołać paraliżujący lęk i poczucie winy bez ponoszenia odpowiedzialności za jawny zakaz.'
      ]
    },

    // 40.22
    {
      id: 'sec-40-22',
      pageNumber: 62,
      sectionNumber: '40.22',
      title: 'Historia: „Dwie wersje tej samej rozmowy” — Jak te same cele można osiągnąć w prawdzie lub w podstępie',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Porównajmy dwie wersje rozmowy menedżera z pracownikiem o konieczności poprawy jakości raportów:',
        'WERSJA A (Manipulacyjna): „Wiesz Tomek, martwię się o ciebie... Ludzie na korytarzach zaczynają gadać o twoich raportach. Ja cię oczywiście bronię przed zarządem, ale jeśli tak dalej pójdzie, to nawet ja nie dam rady ci pomóc. Może powinieneś oddać mi swoje premie projektowe, a ja zajmę się korektą?”. Wynik: przerażenie, brak konkretnych wskazówek, zależność od „dobrego pana”.',
        'WERSJA B (Perswazyjna i partnerska): „Tomek, w ostatnich trzech raportach znalazłem 5 błędów w tabelach bilansowych. Przez to zarząd odesłał dokumentację. Wymagam 100% poprawności tych wyliczeń. Przejdźmy teraz przez te błędy punkt po punkcie, chcę usłyszeć, z czego wynikały i jakiego wsparcia narzędziowego potrzebujesz, by to się nie powtórzyło”. Wynik: twarde fakty, szacunek, jasna droga naprawy, zero gier emocjonalnych.'
      ]
    },

    // 40.23
    {
      id: 'sec-40-23',
      pageNumber: 64,
      sectionNumber: '40.23',
      title: 'Człowiek pod mikroskopem: Sekwencja manipulacyjna — Od ukrytego celu do uzależnienia ofiary',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Przeanalizujmy laboratoryjną anatomię procesu manipulacji w 10 krokach psychologicznych:',
        'UKRYTY CEL SPRAWCY → WYKRYCIE CZUŁEGO PUNKTU OFIARY (Lęk, Wina, Próżność) → ZAINSTALOWANIE ASYMETRII INFORMACYJNEJ → INDUKCJA DEFICYTU EMOCJONALNEGO → ZAOFEROWANIE FAŁSZYWEGO RATUNKU → KROK PO KROKU ZAWĘŻENIE ALTERNATYW → DECYZJA OFIARY W POCZUCIU PRZYMUSU → RACJONALIZACJA („Sam tego chciałem”) → UTRWALENIE ZALEŻNOŚCI.',
        'Poniższy moduł analityczny pozwala rozebrać tę dynamikę w interaktywnym śledztwie.'
      ],
      interactiveWindowRef: {
        id: 'win-40-23-mikroskop-manipulacji',
        title: 'CZŁOWIEK POD MIKROSKOPEM: Kto Kontroluje Twoje Opcje?',
        subtitle: 'Precyzyjna dekonstrukcja 10 etapów wciągania w zależność manipulacyjną',
        context: 'Relacja wspólnika Dominika i programisty Kamila w startupie technologicznym.',
        type: 'microscope',
        takeaway: 'Manipulacja odbiera ci wolność nie poprzez kajdany, lecz poprzez sprawienie, że sam zamykasz się w celi z obawy przed światem.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: '1. UKRYTY CEL DOMINIKA',
            question: 'O co naprawdę toczy się gra?',
            content: 'Dominik chce przejąć 80% kodu Kamila za ułamek wartości, bez płacenia rynkowej pensji.',
            subtext: 'Cel czysto eksploatacyjny ukryty pod hasłem „braterstwa startupowego”.'
          },
          {
            stepNumber: 2,
            label: '2. IDENTYFIKACJA PODATNOŚCI KAMILA',
            question: 'W jaki czuły punkt celuje Dominik?',
            content: 'Kamil cierpi na syndrom oszusta (Impostor Syndrome), boi się kontaktów z ludźmi i rozmów o pieniądzach.',
            subtext: 'Brak wiary we własną wartość rynkową.'
          },
          {
            stepNumber: 3,
            label: '3. CYKL ZARZĄDZANIA PERCEPCJĄ',
            question: 'Jak Dominik podważa pozycję Kamila?',
            content: 'Wmawia mu: „Kamil, twój kod jest chaotyczny, żaden inwestor by na to nie spojrzał, ale ja cię uciągnę i znajdę klientów”.',
            subtext: 'Zmniejszanie poczucia własnej sprawczości programisty.'
          }
        ]
      }
    },

    // 40.24
    {
      id: 'sec-40-24',
      pageNumber: 67,
      sectionNumber: '40.24',
      title: 'Granice psychologicznej diagnozy manipulacji: Etyka nieetykietowania i prawo do ludzkich błędów',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zanim przykleisz komuś łatkę „toksycznego manipulatora”, zachowaj najwyższą ostrożność diagnostyczną. Człowiek to istota niedoskonała.',
        'Każdy z nas w chwilach paniki, bezradności czy ostrego stresu ucieka się czasami do manipulacyjnych odruchów: trzaśnie drzwiami, przemilczy niewygodny fakt, spróbuje wzbudzić litość czy zagra na poczuciu winy. Czym innym jest jednak doraźny błąd komunikacyjny przerażonego człowieka, a czym innym systematyczny, wyrachowany styl życia żerujący na cudzej krzywdzie.',
        'Odporność na manipulację nie polega na tropieniu wrogów, lecz na budowaniu własnej stabilności emocjonalnej: jasnych granic, braku zgody na tajemnice i odwadze do mówienia prawdy prosto w oczy.'
      ]
    },

    // 40.25
    {
      id: 'sec-40-25',
      pageNumber: 70,
      sectionNumber: '40.25',
      title: 'SYNTEZA: Manipulacja jako relacja uwikłania i droga do odzyskania suwerenności',
      category: 'podsumowanie',
      readingTimeMinutes: 24,
      paragraphs: [
        'Podsumujmy Rozdział 40 syntetycznym wzorem merytorycznym:',
        'MANIPULACJA = UKRYTY CEL + ASYMETRIA INFORMACJI + DŹWIGNIA EMOCJONALNA (FOG) + ZAWĘŻENIE AUTONOMII DECYZYJNEJ.',
        'Uwolnienie się od manipulacji nie wymaga studiowania tajemnych technik ani toczenia wojen psychologicznych. Wymaga trzech prostych, lecz heroicznych kroków: 1) Zapalenia światła (zażądania jasnych faktów na piśmie), 2) Przetrzymania cudzego niezadowolenia bez poczucia winy, 3) Posiadania alternatywy życiowej (BATNA), która sprawia, że szantaż traci swoją siłę rażenia.',
        'Widzimy już, jak jednostki wpływają na siebie poprzez perswazję (Rozdział 39) oraz manipulację (Rozdział 40). Co jednak dzieje się w sytuacji, gdy asymetria sił zostaje sformalizowana, a jedna strona zyskuje trwałą, strukturalną kontrolę nad zasobami, czasem i losem innych ludzi? O naturze hierarchii, dominacji i psychologicznych kosztach posiadania panowania nad innymi traktuje Rozdział 41: WŁADZA I KONTROLA.'
      ]
    }
  ]
};

import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach Johna Gottmana nad trwałością małżeństw i relacji partnerskich (Sekcja 10.12), który ze „Złotych Wskaźników” jest najsilniejszym predyktorem przetrwania związku w obliczu trudności?',
    topic: 'Wskaźnik Gottmana 5:1 i Czterej Jeźdźcy Apokalipsy',
    sectionRef: 'Sekcja 10.12',
    options: [
      { label: 'A', text: 'Całkowity, absolutny brak jakichkolwiek kłótni przez 10 lat.', isCorrect: false },
      { label: 'B', text: 'Utrzymanie proporcji minimum 5 pozytywnych interakcji (ciepło, uśmiech, dotyk, słuchanie) na każdą 1 negatywną interakcję w trakcie konfliktu.', isCorrect: true },
      { label: 'C', text: 'Posiadanie identycznych zainteresowań hobbystycznych.', isCorrect: false },
      { label: 'D', text: 'Wspólne konto bankowe bez prawa do prywatnych wydatków.', isCorrect: false }
    ],
    explanation: 'Gottman udowodnił, że kłótnie są naturalne i zdrowe dla relacji. Kluczem nie jest brak konfliktów, lecz to, czy na każdą przykrą uwagę przypada co najmniej 5 gestów miłości i docenienia (tzw. Magiczna Proporcja 5:1). Gdy spada ona poniżej 1:1, rozwód jest niemal pewny.',
    keyTakeaway: 'Zdrowy związek to nie brak burz, lecz bogate konto emocjonalne, które pozwala przetrwać sztorm.'
  },
  {
    id: 2,
    question: 'Który z „Czterech Jeźdźców Apokalipsy” relacyjnej wg Gottmana jest najbardziej toksyczny i niszczący dla układu odpornościowego partnera (Sekcja 10.8)?',
    topic: 'Pogarda jako trucizna relacyjna',
    sectionRef: 'Sekcja 10.8',
    options: [
      { label: 'A', text: 'Rzeczowa krytyka zachowania.', isCorrect: false },
      { label: 'B', text: 'Pogarda (Contempt) — sarkazm, przewracanie oczami, kpina i traktowanie partnera z pozycji moralnej lub intelektualnej wyższości.', isCorrect: true },
      { label: 'C', text: 'Poproszenie o 15 minut ciszy na ochłonięcie.', isCorrect: false },
      { label: 'D', text: 'Różnica zdań w kwestii wyboru koloru zasłon.', isCorrect: false }
    ],
    explanation: 'Pogarda jest wyrazem obrzydzenia psychologicznego. Badania fizjologiczne wykazały, że osoby będące obiektem pogardy partnera chorują na infekcje dróg oddechowych statystycznie częściej — pogarda dosłownie niszczy układ immunologiczny.',
    keyTakeaway: 'Pogarda to kwas, który przeżera każdą relację. Nie ma w niej miejsca na dialog.'
  },
  {
    id: 3,
    question: 'W koncepcji Brené Brown zaufanie nie jest budowane przez wielkie heroiczne gesty, lecz przez (Sekcja 10.2 i 10.3):',
    topic: 'Zaufanie jako Słój z Marmurkami (The Marble Jar)',
    sectionRef: 'Sekcja 10.3',
    options: [
      { label: 'A', text: 'Kupienie drogiego samochodu w rocznicę ślubu.', isCorrect: false },
      { label: 'B', text: 'Setki małych, z pozoru nieznaczących mikro-momentów uważności: odłożenie telefonu, gdy druga osoba mówi, zapamiętanie imienia jej chorej ciotki, dotrzymanie drobnej obietnicy.', isCorrect: true },
      { label: 'C', text: 'Złożenie przysięgi przed notariuszem.', isCorrect: false },
      { label: 'D', text: 'Wspólny skok ze spadochronem.', isCorrect: false }
    ],
    explanation: 'Brown porównuje zaufanie do słoika z marmurkami. Każdy drobny gest lojalności i obecności wrzuca do słoja jeden marmurek. Zdrada lub lekceważenie wywraca cały słój jednym ruchem ręki.',
    keyTakeaway: 'Zaufanie buduje się łyżeczką przez lata, a traci chochlą w jedną sekundę.'
  },
  {
    id: 4,
    question: 'Na czym polega prawdziwe, dojrzałe przeproszenie w relacji (Sekcja 10.10)?',
    topic: 'Anatomia Skutecznych Przeprosin',
    sectionRef: 'Sekcja 10.10',
    options: [
      { label: 'A', text: 'Rzucenie: „Przepraszam cię, JEŚLI poczułeś się urażony, ale sam mnie sprowokowałeś”.', isCorrect: false },
      { label: 'B', text: 'Wzięcie 100% odpowiedzialności za swoje zachowanie, nazwanie krzywdy bez słowa „ale”, okazanie skruchy i zaoferowanie konkretnego zadośćuczynienia lub zmiany nawyku na przyszłość.', isCorrect: true },
      { label: 'C', text: 'Kupienie kwiatów bez ani jednego słowa wyjaśnienia.', isCorrect: false },
      { label: 'D', text: 'Obwinienie własnych rodziców za braki w wychowaniu.', isCorrect: false }
    ],
    explanation: 'Słowo „ale” w przeprosinach natychmiast unieważnia całe przeprosiny („Przepraszam, ale...”). Prawdziwe przeprosiny uznają ból drugiej osoby bez szukania wymówek w okolicznościach zewnętrznych.',
    keyTakeaway: 'Wszystko, co powiesz przed słowem „ale”, przestaje istnieć.'
  },
  {
    id: 5,
    question: 'Dlaczego mówienie „NIE” jest w rzeczywistości najgłębszym aktem troski o jakość relacji (Sekcja 10.5 i 10.6)?',
    topic: 'Granice i Czystość Relacji',
    sectionRef: 'Sekcja 10.6',
    options: [
      { label: 'A', text: 'Ponieważ pozwala udowodnić swoją dominację nad partnerem.', isCorrect: false },
      { label: 'B', text: 'Ponieważ wymuszone, nieszczere „TAK” rodzi w podświadomości urazę, złość i pasywną agresję, zatruwając relację od środka. Prawdziwe „NIE” dla prośby jest bezpiecznym „TAK” dla autentyczności więzi.', isCorrect: true },
      { label: 'C', text: 'Mówienie „nie” jest zawsze błędem relacyjnym.', isCorrect: false },
      { label: 'D', text: 'Zmniejsza koszty podatkowe prowadzenia gospodarstwa domowego.', isCorrect: false }
    ],
    explanation: 'Gdy mówisz „tak”, choć Twoje ciało krzyczy „nie”, stajesz się męczennikiem. Za każdą taką przysługę podświadomie wystawiasz partnerowi niewidzialny rachunek z odsetkami urazy.',
    keyTakeaway: 'Granice to nie mury obronne; granice to instrukcja obsługi bezpiecznego kontaktu z tobą.'
  },
  {
    id: 6,
    question: 'W teorii poliwagalnej Stephena Porgesa zjawisko „Współregulacji Nerwowej” (Co-regulation) oznacza, że (Sekcja 10.1):',
    topic: 'Teoria Poliwagalna i Bezpieczeństwo Somatyczne',
    sectionRef: 'Sekcja 10.1',
    options: [
      { label: 'A', text: 'Ludzie mogą sterować cudzymi falami mózgowymi za pomocą fal radiowych.', isCorrect: false },
      { label: 'B', text: 'Spokojny, ugruntowany układ nerwowy jednej osoby (brzuszna gałąź nerwu błędnego, łagodny głos, ciepły wzrok) fizjologicznie uspokaja pobudzony stresem układ nerwowy drugiej osoby.', isCorrect: true },
      { label: 'C', text: 'Każdy człowiek musi radzić sobie z emocjami w 100% samotnie.', isCorrect: false },
      { label: 'D', text: 'Dotyk fizyczny zawsze wywołuje natychmiastowy skok ciśnienia krwi.', isCorrect: false }
    ],
    explanation: 'Współregulacja to podstawa biologicznego przetrwania ssaków. Bezpieczna obecność drugiego człowieka fizjologicznie hamuje oś stresu HPA i obniża wyrzut kortyzolu.',
    keyTakeaway: 'Nie jesteśmy wyspami. Nasz układ nerwowy szuka ukojenia w układzie nerwowym drugiego człowieka.'
  },
  {
    id: 7,
    question: 'Czym różni się autentyczne Wybaczenie (Forgiveness) od Pojednania (Reconciliation) (Sekcja 10.11)?',
    topic: 'Wybaczenie a Pojednanie',
    sectionRef: 'Sekcja 10.11',
    options: [
      { label: 'A', text: 'Wybaczenie to wewnętrzny proces uwolnienia własnego ciała od trucizny urazy i nienawiści, natomiast pojednanie to decyzja o ponownym wpuszczeniu kogoś do swojego życia i wymaga odbudowy zaufania oraz bezpieczeństwa.', isCorrect: true },
      { label: 'B', text: 'Nie ma żadnej różnicy, wybaczenie zawsze zmusza do powrotu do dawnej zażyłości.', isCorrect: false },
      { label: 'C', text: 'Pojednanie jest możliwe tylko przed sądem powszechnym.', isCorrect: false },
      { label: 'D', text: 'Wybaczenie zawsze wymaga zgody i obecności sprawcy.', isCorrect: false }
    ],
    explanation: 'Możesz komuś w pełni wybaczyć (dla własnego zdrowia psychicznego), ale podjąć mądrą decyzję, że ze względu na brak zmian w jego zachowaniu nigdy więcej nie będziesz z nim współpracować ani utrzymywać kontaktu.',
    keyTakeaway: 'Wybaczasz dla siebie, by odzyskać wolność; jednasz się tylko wtedy, gdy jest bezpiecznie.'
  }
];

export const chapterTenCaseStudyFriendship: CaseStudy = {
  id: 'cs-ch10-przyjazn-zaufanie',
  title: 'Pęknięty Słój: Paweł, Krzysztof i Zdrada Tajemnicy',
  subtitle: 'Jak jedno niefortunne zdanie na imprezie wywróciło 15 lat braterskiej przyjaźni',
  protagonist: 'Paweł (40 lat, architekt) i Krzysztof (41 lat, dyrektor handlowy)',
  context: 'Spotkanie towarzyskie w gronie dawnych znajomych ze studiów.',
  story: [
    'Paweł i Krzysztof znali się od pierwszego roku politechniki. Razem przeszli przez studencką biedę, zakładanie pierwszych firm, śluby i narodziny dzieci. Paweł uważał Krzysztofa za jedynego człowieka na świecie, przed którym nie musiał nosić żadnej maski.',
    'Miesiąc wcześniej Paweł zwierzył się Krzysztofowi w tajemnicy, że jego pracownia architektoniczna przechodzi głęboki kryzys i musiał zaciągnąć pożyczkę hipoteczną pod dom, by nie zwalniać ludzi. Poprosił: „Krzysiek, nikt o tym nie wie, nawet moi rodzice. Proszę, niech to zostanie między nami”. Krzysztof uścisnął jego dłoń: „Masz to jak w banku”.',
    'Podczas sobotniego grilla u wspólnych znajomych, po kilku drinkach, wywiązała się dyskusja o sukcesach zawodowych. Jeden ze znajomych zażartował z drogiego zegarka Krzysztofa. Krzysztof, chcąc zabłysnąć i podbić swój status, rzucił głośno przy stole: „No wiecie, w przeciwieństwie do Pawła przynajmniej nie muszę zastawiać własnego domu, żeby opłacić pracowników!”.',
    'Przy stole zapadła śmiertelna cisza. Paweł poczuł, jakby ktoś uderzył go obuchem w tył głowy. Cała krew odpłynęła mu z twarzy. Spojrzał na Krzysztofa, który w ułamku sekundy uświadomił sobie, co powiedział, i zmieszał się. Paweł wstał, bez słowa położył kluczyki na stole i wyszedł z przyjęcia.',
    'Przez kolejne cztery miesiące Paweł nie odbierał telefonów. Słój z marmurkami, napełniany przez 15 lat, został roztrzaskany o beton w 3 sekundy. Krzysztof musiał przejść przez bolesną lekcję tego, czym różni się tanie „przepraszam, to był żart” od prawdziwej, rocznej pracy nad zadośćuczynieniem.'
  ],
  decisionTaken: 'Paweł całkowicie zamroził kontakt, stawiając bezwzględną granicę obronną, zmuszając Krzysztofa do skonfrontowania się z własnym narcyzmem.',
  whatProtagonistSaw: 'Paweł widział publiczne upokorzenie, zdradę najświętszej tajemnicy i zniszczenie fundamentu bezpieczeństwa.',
  whatWasMissed: 'Krzysztof nie chciał celowo zniszczyć Pawła; uległ impulsowi podbicia własnego statusu w grupie pod wpływem alkoholu, co jednak nie zmniejszało wagi zdrady.',
  psychologicalAnalysis: {
    coreMechanism: 'Złamanie lojalności więzi pierwotnej połączone z wywróceniem „Słoja z Marmurkami” (Brené Brown) i raną zdrady statusowej.',
    cognitiveBiases: [
      { name: 'Krótkowzroczność statusowa (Status Myopia)', description: 'Chęć zabłyśnięcia w 5-sekundowym żarcie przeważyła nad 15-letnią lojalnością.', impact: 'Katastrofalna erozja zaufania.' }
    ],
    defenseMechanisms: [
      { name: 'Początkowa minimalizacja u Krzysztofa', explanation: '„Przecież to był tylko niewinny żart przy piwie, dlaczego on tak histeryzuje?”.' }
    ],
    emotionalDynamic: 'Głęboka żałoba relacyjna Pawła po utracie jedynego bezpiecznego powiernika.'
  },
  decisionProcessAnalysis: {
    trigger: 'Ujawnienie tajemnicy finansowej przed grupą znajomych.',
    attentionFocus: 'Szok, spojrzenia znajomych i poczucie obnażenia.',
    interpretation: '„Krzysztof użył mojego największego dramatu jako amunicji do dowcipu. Nigdy nie byłem dla niego bratem”.',
    emotion: 'Wstyd somatyczny, głęboki smutek, gniew.',
    impulse: 'Uderzyć przyjaciela lub natychmiast uciec.',
    action: 'Ciche opuszczenie imprezy i zerwanie kontaktu na 120 dni.',
    consequence: 'Długa, bolesna terapia relacji i powolna odbudowa na nowych, znacznie ostrożniejszych zasadach.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia wyspa i zakręt obręczy', role: 'Doświadczenie zdrady społecznej aktywuje fizyczny ból zawałowy', activationState: 'Maksymalna' },
      { region: 'Hipokamp', role: 'Zapisanie traumatycznego wspomnienia z grilla jako skazy na wizerunku przyjaciela', activationState: 'Utrwalenie śladu afektywnego' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna', roleInScenario: 'Natychmiastowy spadek poziomu oksytocyny, gwałtowny wzrost wazopresyny i kortyzolu' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 100 ms', process: 'Słowa Krzysztofa docierają do kory słuchowej A1.' },
      { timeMs: '200 ms', process: 'Ciało migdałowate wyzwala falę gorąca i odpływ krwi z trzewi.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Protokół Rzetelnej Naprawy (Restitution Protocol)', script: 'Krzysztof napisał list: „Pawle, nie ma żadnego usprawiedliwienia dla tego, co zrobiłem. Zdradziłem twoje zaufanie dla żałosnego poklasku przy stole. Przeprosiłem już każdego obecnego tam świadka i sprostowałem sytuację. Nie oczekuję, że mi wybaczysz teraz. Będę czekał tyle, ile potrzebujesz, i zrobię wszystko, by odkupić twoje zaufanie”.', rationale: 'Wzięcie 100% winy i publiczne sprostowanie zdejmuje wstyd z ofiary.' }
    ]
  },
  alternativePath: 'Gdyby Krzysztof obrócił się w żart i powiedział: „Daj spokój, Paweł to twardziel, żartowałem”, przyjaźń umarłaby bezpowrotnie na zawsze.',
  readerQuestion: 'Czy zdarzyło Ci się kiedyś zdradzić czyjąś tajemnicę tylko po to, by wydać się ciekawszym lub zabawniejszym w towarzystwie?',
  keyTakeaway: 'Lojalność sprawdza się wtedy, gdy przyjaciela nie ma w pokoju. To, jak mówisz o nim pod jego nieobecność, jest miarą Twojego człowieczeństwa.'
};

export const chapterTenCaseStudySiblings: CaseStudy = {
  id: 'cs-ch10-rodzenstwo-granice',
  title: 'Wieczna Ratowniczka: Sylwia i Pętla Długów Brata',
  subtitle: 'Jak nieumiejętność postawienia granicy zniszczyła finanse i spokój 33-letniej siostry',
  protagonist: 'Sylwia (33 lata, kierowniczka działu logistyki) i Mariusz (38 lat, jej starszy brat)',
  context: 'Kolejny nocny telefon z prośbą o natychmiastowy przelew ratunkowy.',
  story: [
    'Sylwia od dzieciństwa była tą „odpowiedzialną”. Mariusz, starszy o pięć lat, wiecznie wpadał w kłopoty: rzucał studia, zakładał nieudane biznesy, pożyczał pieniądze od podejrzanych ludzi. Rodzice zawsze powtarzali Sylwii: „Musisz mu pomóc, to przecież twój jedyny brat, rodzina musi trzymać się razem”.',
    'Przez osiem lat dorosłego życia Sylwia spłaciła za brata ponad 80 000 zł długów. Za każdym razem Mariusz płakał, przysięgał na kolanach, że to „ostatni raz”, po czym po pół roku schemat powtarzał się z zegarmistrzowską precyzją.',
    'We wtorek o 23:30 zadzwonił telefon. Mariusz łkał do słuchawki: „Sylwia, komornik wszedł mi na pensję, a właściciel mieszkania wyrzuca mnie jutro na bruk z rzeczami. Jeśli nie przelejesz mi do rana 6000 zł, wyląduję pod mostem. Jesteś moją jedyną nadzieją”.',
    'Sylwia poczuła znany, paraliżujący skurcz żołądka. Te 6000 zł to były jej ostatnie oszczędności odłożone na remont łazienki i leczenie stomatologiczne. Spojrzała w lustro i zobaczyła wycieńczoną, 33-letnią kobietę z podkrążonymi oczami, która od dekady żyła w ciągłym stanie alarmowym cudzego życia.',
    'Zrozumiała coś fundamentalnego: za każdym razem, gdy ratowała Mariusza pieniędzmi, okradała go z konsekwencji jego własnych wyborów. Jej „pomoc” nie była miłością — była paliwem podtrzymującym jego niedojrzałość i nałóg.'
  ],
  decisionTaken: 'Sylwia po raz pierwszy w życiu powiedziała bratu bezwzględne „NIE”, odmawiając jakiejkolwiek pomocy finansowej, oferując jedynie pomoc w znalezieniu doradcy upadłościowego.',
  whatProtagonistSaw: 'Początkowo widziała bezdomnego brata zamarzającego pod mostem i potępienie w oczach matki.',
  whatWasMissed: 'Że dopóki ona była jego darmowym bankomatem, Mariusz nie miał ani jednego biologicznego powodu, by zmienić swoje autodestrukcyjne zachowanie.',
  psychologicalAnalysis: {
    coreMechanism: 'Współuzależnienie (Codependency) i Trójkąt Dramatyczny Karpmana (Sylwia w roli Wybawiciela, który staje się Ofiarą).',
    cognitiveBiases: [
      { name: 'Iluzja kontroli nad losem dorosłego', description: 'Przekonanie, że przelew finansowy uchroni brata przed upadkiem życiowym.', impact: 'Przedłużanie agonii nałogu.' }
    ],
    defenseMechanisms: [
      { name: 'Wyparcie faktu pasożytnictwa', explanation: 'Sylwia nazywała finansowanie długów brata „obowiązkiem rodzinnym”.' }
    ],
    emotionalDynamic: 'Przełamanie schematu ratowniczki wywołało u Sylwii potężny szok odstawienny i paniczny lęk przed odrzuceniem przez rodzinę.'
  },
  decisionProcessAnalysis: {
    trigger: 'Telefon o 23:30 i żądanie 6000 zł do rana.',
    attentionFocus: 'Własne wyczerpanie i wizja utraty ostatnich oszczędności.',
    interpretation: '„Jeśli znowu zapłacę, będę płacić do końca życia. Moje ratowanie go zabija”.',
    emotion: 'Żal, złość, determinacja, lęk somatyczny.',
    impulse: 'Jak zwykle otworzyć aplikację bankową i zrobić szybki przelew BLIK.',
    action: 'Wypowiedzenie spokojnego, twardego „Nie”.',
    consequence: 'Wściekłość brata, próby szantażu, a po roku — podjęcie przez niego pierwszej legalnej, stałej pracy.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Świadome zablokowanie automatycznego odruchu uległości', activationState: 'Wysiłek wolitywny na najwyższym poziomie' },
      { region: 'Wyspa i ciało migdałowate', role: 'Wyrzut bólu społecznego w odpowiedzi na wyzwiska brata', activationState: 'Utrzymana pod kontrolą kory' }
    ],
    neurotransmitters: [
      { name: 'Noradrenalina', roleInScenario: 'Początkowy paraliż przekształcony w determinację obrony granic' }
    ],
    biologicalTimeline: [
      { timeMs: '23:31', process: 'Impuls do przelewu (stary nawyk).' },
      { timeMs: '23:35', process: 'Świadome zatrzymanie palca i wypowiedzenie formuły granicy.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Szantaż katastroficzny i Presja czasu', description: '„Wyrzucają mnie jutro, wyląduję pod mostem”.', vulnerabilityExploited: 'Matczyna troska i syndrom odpowiedzialnej starszej siostry' }
    ],
    counterMeasures: [
      { step: 'Twarda Granica Miłości (Tough Love)', script: '„Mariuszu, bardzo cię kocham, ale nie przeleję ci ani złotówki. Nie zapłacę za to mieszkanie. Jeśli chcesz, pomogę ci napisać wniosek o upadłość konsumencką i możemy pójść razem do opieki społecznej po zasiłek mieszkaniowy. Finansowo jesteś od dziś w 100% odpowiedzialny za siebie”.', rationale: 'Oddaje sprawczość i odpowiedzialność w ręce dorosłego człowieka.' }
    ]
  },
  alternativePath: 'Gdyby Sylwia przelała 6000 zł, za 4 miesiące Mariusz zażądałby 15 000 zł, a ona musiałaby wziąć kredyt gotówkowy, popadając we własną spiralę zadłużenia.',
  readerQuestion: 'Komu w swoim życiu stale ułatwiasz trwanie w nieodpowiedzialności, myląc ratownictwo z prawdziwą miłością?',
  keyTakeaway: 'Prawdziwa miłość potrafi powiedzieć: „Nie pomogę ci w tym, co niszczy ciebie i mnie”. Czasem najgłębszą pomocą jest pozwolić komuś zderzyć się z dnem.'
};

export const chapterTenExerciseMarbleJar: SelfExercise = {
  id: 'ex-ch10-marble-jar',
  title: 'Ćwiczenie 10.1: Audyt Słoja z Marmurkami (Brené Brown)',
  subtitle: 'Zbadaj stan konta emocjonalnego w Twoich 3 najważniejszych relacjach',
  objective: 'Zrozumienie, jakie mikro-zachowania budują, a jakie niszczą zaufanie w Twoim codziennym życiu.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadome monitorowanie drobnych aktów obecności i lojalności stymuluje wydzielanie oksytocyny i wzmacnia neuronalne obwody przywiązania w korze przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz kluczową relację',
      instruction: 'Wskaż osobę, z którą chcesz zbadać poziom wzajemnego zaufania (partner, dziecko, przyjaciel, wspólnik).',
      promptText: 'O kim myślisz i jak oceniasz obecny poziom „napełnienia słoja” (w %)?',
      placeholder: 'Myślę o mojej relacji z partnerem. Słój jest napełniony w około 60%...'
    },
    {
      stepNumber: 2,
      title: 'Zidentyfikuj 3 mikro-marmurki (Zasilenia)',
      instruction: 'Wypisz 3 małe, konkretne gesty z ostatnich tygodni, które wrzuciły marmurek do Waszego słoja (np. zrobienie herbaty bez pytania, wysłuchanie w trudnym momencie, dotrzymanie słowa).',
      promptText: 'Jakie 3 konkretne zachowania zbudowały bliskość?',
      placeholder: '1. Odłożył telefon podczas mojej opowieści o pracy. 2. Pamiętał o wizycie u lekarza. 3. Przytulił mnie rano...'
    },
    {
      stepNumber: 3,
      title: 'Zidentyfikuj nieszczelności (Wybicia marmurków)',
      instruction: 'Jakie drobne nawyki (np. sarkazm, zapominanie o obietnicach, unikanie kontaktu wzrokowego) podkradają marmurki z Waszej relacji?',
      promptText: 'Co regularnie podcina zaufanie w tej relacji?',
      placeholder: 'Częste przewracanie oczami, gdy partner dzieli się swoimi planami...'
    }
  ],
  reflectionQuestions: [
    'Czy częściej oczekujesz, że to inni będą wrzucać marmurki do Twojego słoja, czy sam dbasz o ich konto?',
    'Jaki jeden drobny gest możesz zrobić dzisiaj wieczorem, by wrzucić nowy marmurek do ważnej relacji?'
  ]
};

export const chapterTenExerciseBoundaryMatrix: SelfExercise = {
  id: 'ex-ch10-boundary-matrix',
  title: 'Ćwiczenie 10.2: Matryca Granic Osobistych — Czyste NIE zamiast Toksycznego TAK',
  subtitle: 'Zdefiniuj swoje nienaruszalne terytorium psychiczne i naucz się go bronić bez poczucia winy',
  objective: 'Zastąpienie uległości i pozornej zgody jasną, spokojną komunikacją własnych granic.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Wyznaczenie jasnych granic redukuje chroniczne pobudzenie układu współczulnego i zabezpiecza przed wypaleniem relacyjnym.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj swoje 3 czerwone linie (Nienaruszalne)',
      instruction: 'Wypisz 3 zachowania innych ludzi, na które od dzisiaj definitywnie nie wyrażasz zgody (np. podnoszenie głosu, spóźnienia powyżej 30 min bez uprzedzenia, komentowanie Twojej wagi).',
      promptText: 'Moje 3 nienaruszalne czerwone linie:',
      placeholder: '1. Nie zgadzam się na krzyki w moim domu. 2. Nie pożyczam pieniędzy osobom z nałogami. 3. Nie odbieram maili służbowych w niedziele...'
    },
    {
      stepNumber: 2,
      title: 'Sformułuj Formułę Granicy z Konsekwencją',
      instruction: 'Dobra granica składa się z informacji o Twoim działaniu: „Jeśli ty zrobisz X, ja zrobię Y”.',
      promptText: 'Moja granica i moja konsekwencja:',
      placeholder: '„Jeśli podczas rozmowy zaczniesz na mnie krzyczeć, przerwę spotkanie i wyjdę z pokoju na 20 minut”.'
    },
    {
      stepNumber: 3,
      title: 'Trening czystego „NIE” bez tłumaczenia się',
      instruction: 'Pamiętaj: „Nie” to pełne zdanie. Przygotuj krótką formułę odmowną na najbliższy tydzień.',
      promptText: 'Moja czysta formuła odmowna:',
      placeholder: '„Dziękuję za propozycję, ale nie wezmę w tym udziału. Moja decyzja jest ostateczna”.'
    }
  ],
  reflectionQuestions: [
    'Czy wiesz, że kiedy mówisz komuś nieszczere „tak”, tak naprawdę mówisz krzywdzące „nie” samemu sobie?',
    'Kto w Twoim otoczeniu zareaguje największą złością na Twoje nowe granice i dlaczego?'
  ]
};

export const chapterTenExerciseApologyBuilder: SelfExercise = {
  id: 'ex-ch10-apology-builder',
  title: 'Ćwiczenie 10.3: Konstruktor Autentycznych Przeprosin (Protokół 5 Kroków)',
  subtitle: 'Napraw pękniętą więź bez słowa „ale” i bez zrzucania winy na okoliczności',
  objective: 'Opanowanie umiejętności przepraszania w sposób, który realnie koi ból drugiej osoby i przywraca zaufanie.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Prawdziwe przeprosiny obniżają poziom kortyzolu i tętno u osoby zranionej, umożliwiając wydzielenie oksytocyny niezbędnej do odbudowy więzi.',
  steps: [
    {
      stepNumber: 1,
      title: 'Nazwij konkretny błąd (Zero ogólników)',
      instruction: 'Wskaż dokładnie swoje zachowanie bez usprawiedliwiania się („Przepraszam, że wczoraj podniosłem na ciebie głos przy dzieciach”).',
      promptText: 'Co dokładnie zrobiłeś niewłaściwego?',
      placeholder: '„Przepraszam, że zapomniałem odebrać ważnego dokumentu i okłamałem cię, że to wina poczty”...'
    },
    {
      stepNumber: 2,
      title: 'Uznaj wpływ emocjonalny na drugą osobę (Empatia)',
      instruction: 'Opisz ból lub stres, jaki Twoje zachowanie wywołało u partnera („Rozumiem, że poczułeś się zlekceważony i musiałeś sam rozwiązywać problem w stresie”).',
      promptText: 'Jak moje zachowanie wpłynęło na drugą osobę?',
      placeholder: '„Rozumiem, że poczułaś się oszukana i straciłaś do mnie zaufanie...”'
    },
    {
      stepNumber: 3,
      title: 'Zaproponuj konkretną naprawę i zmianę zachowania',
      instruction: 'Co konkretnie zrobisz dzisiaj, by naprawić szkodę, i jaki mechanizm wprowadzisz, by to się nie powtórzyło?',
      promptText: 'Moje zadośćuczynienie i plan prewencyjny:',
      placeholder: '„Dziś sam pojadę do urzędu załatwić duplikat, a od jutra wpisuję wszystkie terminy do wspólnego kalendarza”.'
    }
  ],
  reflectionQuestions: [
    'Dlaczego Twoje ego tak panicznie boi się powiedzieć: „Myliłem się, to była w 100% moja wina”?',
    'Jakie to uczucie usłyszeć od kogoś przeprosiny, w których nie ma ani jednego słowa „ale”?'
  ]
};

export const chapterTen: Chapter = {
  number: 10,
  title: 'Relacje: Architektura Zaufania, Granic i Bliskości',
  subtitle: 'Dlaczego jedni ludzie budują z nami bezpieczeństwo, a inni napięcie — i jak naprawiać pęknięte więzi',
  leadParagraph: 'Badania Harvard Study of Adult Development — najdłuższy, trwający nieprzerwanie od ponad 85 lat eksperyment w historii nauki — przyniosły jedną, jednoznaczną konkluzję: tym, co decyduje o naszym zdrowiu fizycznym, odporności na demencję, poziomie szczęścia i długości życia, nie są ani pieniądze, ani sława, ani cholesterol. Są to DOBRE, BEZPIECZNE RELACJE Z LUDŹMI. W tym rozdziale zbadamy inżynierię więzi: od współregulacji nerwowej po naprawę zaufania.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-10-1',
      pageNumber: 442,
      sectionNumber: '10.1',
      title: 'Czym jest relacja? Biologia współregulacji nerwowej',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Nasz układ nerwowy nie jest układem zamkniętym. Został zaprojektowany tak, by nieustannie współregulować się z układami nerwowymi tych, których kochamy.',
        author: 'Stephen Porges'
      },
      paragraphs: [
        'Wyobraź sobie niemowlę płaczące w łóżeczku. Jego kora przedczołowa jest jeszcze nieukształtowana; samo nie potrafi obniżyć poziomu kortyzolu ani uspokoić bicia serca. Matka lub ojciec biorą je w ramiona, przytulają do klatki piersiowej i nucą kołysankę. W ciągu minuty oddech dziecka zwalnia, a ciało wiotczeje w bezpiecznym śnie.',
        'To jest współregulacja (Co-regulation). Myślimy, że jako dorośli stajemy się całkowicie samowystarczalnymi wyspami biologicznymi. To mit. Kiedy wracasz po koszmarnym dniu w pracy, Twój układ współczulny płonie. Wystarczy jedno ciepłe, bezpieczne spojrzenie zaufanego partnera, mocny uścisk dłoni i słowa: „Jestem przy tobie”, by Twój układ przywspółczulny (tonus nerwu błędnego) natychmiast wyrównał rytm serca i obniżył ciśnienie krwi.',
        'Warto zauważyć, że choć Teoria Poliwagalna Stephena Porgesa budzi dyskusje wśród neuroanatomów ewolucyjnych co do filogenezy gałęzi nerwu błędnego, sam mechanizm współregulacji somatycznej i synchronizacji zmienności rytmu zatokowego (HRV) między bliskimi osobami jest bezspornym faktem fizjologicznym.',
        'Relacja to nie abstrakcyjny status czy podpisana umowa. Relacja to żywy obwód bioelektryczny między dwoma układami nerwowymi. Jeśli w tym obwodzie płynie bezpieczeństwo — organizm regeneruje tkanki i obniża stany zapalne. Jeśli płynie w nim ciągłe napięcie, lęk i krytyka — ciało funkcjonuje w wyniszczającym, przewlekłym stresie.'
      ]
    },
    {
      id: 'sec-10-2',
      pageNumber: 446,
      sectionNumber: '10.2',
      title: 'Zaufanie: Niewidzialny fundament każdej trwałej konstrukcji',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zaufanie to biologiczna kalkulacja ryzyka dokonywana przez pień mózgu i korę przedczołową: „Czy w obecności tej osoby mogę opuścić tarczę obronną i zasnąć bez obawy, że zostanę zaatakowany?”.',
        'Kiedy ufasz drugiemu człowiekowi, Twój mózg przestaje marnować cenną glukozę na ciągłe monitorowanie zagrożenia (Social Vigilance). Otwierają się zasoby na kreatywność, zabawę, intymność i głęboką pracę. Bez zaufania każda rozmowa staje się dyplomatyczną wojną podjazdową.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Poranny powrót z dyżuru na SORze — Fizjologia współregulacji',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Lekarka rezydentka Monika (34 lata) wraca do domu po 24-godzinnym, skrajnie obciążającym dyżurze na szpitalnym oddziale ratunkowym, podczas którego reanimowała dwóch pacjentów. Jej tętno wynosi 96 bpm, mięśnie karku są zesztywniałe, a w uszach wciąż słyszy piski kardiomonitorów.',
            '2. Co widzi bohater (Monika): Monika czuje, że zaraz eksploduje z przebodźcowania sensorycznego. Boi się, że w domu spotka grad pytań i obowiązków, na które nie ma ani grama energii metabolicznej.',
            '3. Czego bohater nie widzi (martwe pole): Monika nie dostrzega, że jej mąż Piotr (36 lat) przez ostatnie pół godziny wyciszył mieszkanie, przygotował ciepłą kąpiel i świadomie uspokoił własny oddech, by stworzyć dla niej bezpieczną przestrzeń.',
            '4. Działający mechanizm psychologiczny: Współregulacja autonomiczna (Co-regulation) i somatyczne ugruntowanie bezpieczeństwa. Sygnały prospołeczne (niski, ciepły tembr głosu, brak pośpiechu, łagodny kontakt wzrokowy) aktywują przywspółczulny hamulec nerwu błędnego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): U ssaków powrót z polowania do bezpiecznego stada wymagał natychmiastowego obniżenia czujności obronnej, by umożliwić regenerację i sen.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się głębokiego, mimowolnego westchnienia, opadnięcie uniesionych ramion i spadek napięcia mięśni żwaczy.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Piotr wita żonę w progu bez słowa, delikatnie zdejmuje z niej kurtkę, podaje kubek ciepłego naparu i przytula ją mocno, stabilnym chwytem przez 3 minuty w całkowitej ciszy.',
            '8. Konsekwencje alternatywnego wyboru: Tętno Moniki spada do 70 bpm w ciągu kilku minut, poziom pobudzenia adrenergicznego opada, a ciało wchodzi w stan regeneracji bez konieczności relacjonowania koszmaru dyżuru.',
            '9. Wniosek dydaktyczny dla czytelnika: Czasami największym darem miłości nie są mądre słowa czy rady, lecz uregulowany, spokojny układ nerwowy obecny obok.'
          ]
        }
      ]
    },
    {
      id: 'sec-10-3',
      pageNumber: 450,
      sectionNumber: '10.3',
      title: 'Słój z marmurkami Brené Brown: Anatomia mikro-momentów',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Brené Brown w swoich badaniach nad więzią i wstydem obaliła mit, że zaufanie buduje się wielkimi, heroicznymi gestami (oświadczyny na wieży Eiffla, drogie prezenty). Zaufanie to SŁÓJ Z MARMURKAMI.',
        'Każdy drobny gest uważności — zapamiętanie imienia psa partnera, odłożenie telefonu na stół, gdy mówi o swoim lęku, zadzwonienie z pytaniem „jak minęła prezentacja?” — wrzuca do słoja jeden marmurek. Zdrada lub lekceważenie wywracają cały słój.',
        'Poniższy warsztat pozwala przeprowadzić rzetelny audyt słoja z marmurkami w Twoich kluczowych relacjach.'
      ],
      exerciseRef: chapterTenExerciseMarbleJar
    },
    {
      id: 'sec-10-4',
      pageNumber: 454,
      sectionNumber: '10.4',
      title: 'Kiedy pęka zaufanie: Pomiędzy zdradą a lojalnością',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Zdrada rzadko zaczyna się od zdrady fizycznej czy oszustwa majątkowego. Zaczyna się od mikroskopijnych momentów nielojalności: wyśmiania partnera w towarzystwie, zbagatelizowania jego prośby, flirtu w sieci czy zdradzenia sekretu dla taniego poklasku.',
        'Poniższe studium przypadku stanowi przejmującą wiwisekcję pęknięcia słoja z zaufaniem w wieloletniej męskiej przyjaźni i ukazuje trudną drogę odbudowy więzi.'
      ],
      caseStudyRef: chapterTenCaseStudyFriendship
    },
    {
      id: 'sec-10-5',
      pageNumber: 458,
      sectionNumber: '10.5',
      title: 'Granice to nie mury: Dlaczego zdrowe relacje potrzebują płotu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wielu ludzi myli granice z agresją lub odrzuceniem. Boją się, że jeśli powiedzą matce, partnerowi czy przyjacielowi: „Nie, nie zrobię tego”, zostaną uznani za samolubnych i porzuceni.',
        'Prawda jest dokładnie odwrotna: BRAK GRANIC RODZI NIENAWIŚĆ. Jeśli nie potrafisz powiedzieć czystego „nie”, Twoje wymuszone „tak” staje się trucizną. Za każdym razem, gdy zgadzasz się na coś wbrew sobie, w Twoim ciele rośnie ukryta złość do osoby, która o to poprosiła.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Przyjaciółka dzwoniąca o 23:30 — Nocne pogotowie emocjonalne',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: O godzinie 23:30 do 32-letniej Magdy dzwoni jej bliska przyjaciółka Kasia. To czwarty taki telefon w tym tygodniu; Kasia po raz kolejny płacze z powodu tego samego toksycznego romansu. Magda rano o 6:00 wstaje do odpowiedzialnej pracy w laboratorium.',
            '2. Co widzi bohater (Magda): Magda czuje rozrywające rozdarcie między wyczerpaniem fizycznym a poczuciem winy: „Jeśli nie odbiorę, będę podłą przyjaciółką, a ona może zrobić sobie coś złego”.',
            '3. Czego bohater nie widzi (martwe pole): Magda nie dostrzega, że jej nocna dyspozycyjność nie pomaga Kasi rozwiązać problemu, lecz utrwala jej rolę biernej ofiary i uzależnia ją od zewnętrznego rozładowywania emocji.',
            '4. Działający mechanizm psychologiczny: Brak granic osobistych i syndrom ratownika (Karpman Drama Triangle). Uległość wobec cudzych emocji kosztem własnej integralności biologicznej.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Lęk przed odrzuceniem przez członka stada i utrwalone w dzieciństwie przekonanie: „Moja wartość zależy od tego, jak bardzo jestem użyteczna dla innych”.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się fali złości na dźwięk dzwonka telefonu, połączonej z natychmiastowym tłumieniem tej złości i podnoszeniem słuchawki z udawanym uśmiechem.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Wypowiedzenie życzliwej, nienaruszalnej granicy: „Kasiu, bardzo cię kocham i zależy mi na tobie, ale jest 23:30 i muszę się wyspać do pracy. Nie porozmawiamy teraz. Zdzwońmy się jutro o 17:30 przy kawie, wtedy poświęcę ci pełną uwagę. Śpij spokojnie, dobrej nocy”. I wyciszenie telefonu.',
            '8. Konsekwencje alternatywnego wyboru: Magda przesypia 7 godzin, wstaje zregenerowana, a Kasia uczy się samoregulacji i wieczornego wyciszenia.',
            '9. Wniosek dydaktyczny dla czytelnika: Granice chronią relację przed Twoją własną ukrytą nienawiścią. Kiedy mówisz szczere „NIE” cudzym roszczeniom, mówisz „TAK” swojemu zdrowiu i autentyczności więzi.'
          ]
        }
      ]
    },
    {
      id: 'sec-10-6',
      pageNumber: 462,
      sectionNumber: '10.6',
      title: 'Mówienie „NIE” jako akt miłości: Chronienie autentyczności',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Granice to nie zasieki z drutu kolczastego — granice to płot z furtką, przez którą wpuszczasz to, co dobre, a zatrzymujesz to, co niszczycielskie. Granice nie służą do zmieniania drugiego człowieka; granice informują o tym, co TY zrobisz, by chronić swój spokój.',
        'Poniższy warsztat uczy budowania twardej matrycy granic osobistych.'
      ],
      exerciseRef: chapterTenExerciseBoundaryMatrix
    },
    {
      id: 'sec-10-7',
      pageNumber: 466,
      sectionNumber: '10.7',
      title: 'Współuzależnienie i ratownictwo: Kiedy pomoc staje się nałogiem',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wielu ludzi buduje swoją tożsamość wokół roli „wiecznego ratownika”. Pomagają nie dlatego, że druga strona tego potrzebuje, lecz dlatego, że cudza zależność daje im poczucie bycia potrzebnym i wartościowym.',
        'Ratownictwo paraliżuje rozwój drugiego człowieka. Poniższe studium przypadku ukazuje dramat siostry, która przez dekadę spłacała długi dorosłego brata, dopóki nie zrozumiała, że jej pomoc jest formą niszczenia jego sprawczości.'
      ],
      caseStudyRef: chapterTenCaseStudySiblings
    },
    {
      id: 'sec-10-8',
      pageNumber: 470,
      sectionNumber: '10.8',
      title: 'Czterej Jeźdźcy Apokalipsy Gottmana: Zwiastuny rozpadu więzi',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'John Gottman w swoim Love Lab w Seattle potrafił z 94-procentową dokładnością przewidzieć rozwód pary po zaledwie 15-minutowej obserwacji ich kłótni. Zidentyfikował czterech zabójców relacji:',
        '1. Krytyka (Krytyka tożsamości zamiast zachowania: „Zawsze jesteś leniwy”).',
        '2. Postawa Obronna (Defensywność, usprawiedliwianie się, kontratak: „A ty sama nigdy nie pamiętasz!”).',
        '3. Pogarda (Najgroźniejszy ze wszystkich: sarkazm, kpina, przewracanie oczami, moralna wyższość).',
        '4. Mur Obojętności (Stonewalling — odcięcie kontaktu, ignorowanie, wycofanie się).'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Pogarda w towarzystwie — Przewrócenie oczami i publiczna kpina',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Na kolacji u wspólnych znajomych mąż Marek (36 lat) z entuzjazmem opowiada anegdotę z ich wyprawy w Tatry. Żona Ilona (35 lat) głośno parska śmiechem, ostentacyjnie przewraca oczami do pozostałych gości i rzuca z kpiną: „Marek znowu fantazjuje, jakby w ogóle tam był. Daj spokój, nic takiego nie miało miejsca”.',
            '2. Co widzi bohater (Marek): Marek czuje nagły paraliż krtani i piekący wstyd. Czuje się publicznie obdarty z godności przez najbliższą osobę, z którą dzieli życie.',
            '3. Czego bohater nie widzi (martwe pole): Marek nie dostrzega, że zachowanie Ilony to kumulacja wielotygodniowej frustracji i poczucia osamotnienia, które zamiast wprost w rozmowie, wybiły w postaci jadowitej pogardy.',
            '4. Działający mechanizm psychologiczny: Trzeci Jeździec Gottmana (Pogarda / Contempt). Komunikat wyższości moralnej i intelektualnej połączony z publicznym upokorzeniem. Gottman wykazał, że ekspresja pogardy u partnera jest najsilniejszym predyktorem rozpadu więzi i osłabienia odporności biologicznej u drugiego małżonka.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W społecznościach plemiennych ostracyzm i kpina służyły degradacji statusu osobnika w hierarchii.',
            '6. Jak rozpoznać w czasie rzeczywistym: Zaciśnięcie żołądka, asymetryczny uśmieszek z uniesieniem jednego kącika ust (mikroekspresja pogardy) i paraliżująca cisza przy stole.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Spokojne postawienie twardej granicy w cztery oczy: „Ilono, przewracanie oczami i ośmieszanie mnie przy znajomych to pogarda. To zachowanie niszczy naszą bliskość i szacunek. Nie wyrażam zgody na taki ton ani prywatnie, ani publicznie. Jeśli jesteś na mnie zła, porozmawiajmy w domu o faktach”.',
            '8. Konsekwencje alternatywnego wyboru: Ilona zatrzymuje eskalację jadu, uświadamia sobie destrukcyjną siłę swojego sarkazmu i konfrontuje się z rzeczywistymi źródłami swojego żalu.',
            '9. Wniosek dydaktyczny dla czytelnika: Pogarda jest kwasem siarkowym dla relacji. Jeśli w Waszym języku pojawił się sarkazm i przewracanie oczami, natychmiast zneutralizujcie ten jad, zanim wypali zaufanie do zera.'
          ]
        }
      ]
    },
    {
      id: 'sec-10-9',
      pageNumber: 474,
      sectionNumber: '10.9',
      title: 'Mur obojętności (Stonewalling): Kiedy układ nerwowy odcina zasilanie',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Stonewalling (stawianie kamiennego muru) jest zazwyczaj błędnie interpretowany jako zła wola czy arogancja. W 85% przypadków u mężczyzn jest to jednak reakcja na FIZJOLOGICZNE ZALANIE (Flooding).',
        'Kiedy tętno podczas kłótni przekracza 100 uderzeń na minutę, układ nerwowy wchodzi w stan biologicznego paraliżu. Mózg odcina zdolność przetwarzania mowy, by chronić serce przed zawałem. Człowiek zamyka się w sobie nie dlatego, że mu nie zależy, lecz dlatego, że tonie somatycznie.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 5: Paraliż i zamrożenie w samochodzie — Flooding u partnera',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Podczas powrotu samochodem z niedzielnego obiadu u teściów Paulina gwałtownie i z podniesionym głosem wyrzuca mężowi Karolowi, że nie stanął w jej obronie podczas złośliwego komentarza matki. Karol prowadzi auto, nagle milknie, wpatruje się tępo w asfalt przed maską i przestaje odpowiadać na pytania.',
            '2. Co widzi bohater (Paulina): Paulina widzi bezduszną, arogancką ścianę. Myśli: „On ma mnie gdzieś, ja tu płaczę, a on nawet na mnie nie spojrzy!”.',
            '3. Czego bohater nie widzi (martwe pole): Paulina nie widzi, że tętno Karola wynosi 118 bpm, ciśnienie skoczyło do 160/100, a jego mózg wszedł w stan somatycznego zalania (Flooding). Odcięcie mowy nie jest wyborem moralnym, lecz fizjologicznym paraliżem układu autonomicznego.',
            '4. Działający mechanizm psychologiczny: Czwarty Jeździec Gottmana (Stonewalling) wywołany przeciążeniem adrenergicznym. Powyżej progu 100 bpm grzbietowo-boczna kora przedczołowa traci zdolność przetwarzania semantycznego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W obliczu przytłaczającego ataku odruch znieruchomienia (Freeze) redukował widoczność dla drapieżnika i chronił układ krążenia przed zapaścią.',
            '6. Jak rozpoznać w czasie rzeczywistym: Bladość twarzy, zesztywnienie karku, płytki oddech, wbicie wzroku w jeden punkt i brak reakcji na wołanie po imieniu.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Rozpoznanie biologicznego floodingu i zarządzenie 20-minutowego resetu: „Karol, widzę, że cię odcięło. Zjedźmy na najbliższą stację, napijmy się wody w ciszy przez 20 minut bez wracania do tematu. Pogadamy w domu, gdy obojgu spadnie tętno”.',
            '8. Konsekwencje alternatywnego wyboru: Autonomiczny układ nerwowy odzyskuje równowagę, krew wraca do kory przedczołowej, a wieczorna rozmowa w domu odbywa się na poziomie merytorycznym bez krzyku.',
            '9. Wniosek dydaktyczny dla czytelnika: Próba wymuszenia rozmowy na osobie w stanie zalania fizjologicznego jest biologicznie bezsensowna. Kiedy tętno przekracza 100 bpm, kora logiczna nie odbiera komunikatów.'
          ]
        },
        {
          title: 'PRZYKŁAD 6: Pseudoprzeprosiny vs Prawdziwa naprawa w zespole projektowym',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Kierownik projektu Tomasz spóźnił się z dostarczeniem specyfikacji technicznej o 4 dni, przez co graficzka Joanna musiała pracować po 12 godzin w sobotę i niedzielę, rezygnując z rodzinnego wyjazdu. W poniedziałek Tomasz rzuca w biegu: „Joanno, przepraszam cię, JEŚLI poczułaś presję, ALE klient zmienił zdanie”.',
            '2. Co widzi bohater (Joanna): Joanna czuje wściekłość i bezsilność. Słyszy komunikat: „To twoja wina, że jesteś przewrażliwiona, a ja jestem niewinny”.',
            '3. Czego bohater nie widzi (martwe pole): Tomasz nie dostrzega, że używając słów-wytrychów („jeśli”, „ale”), próbuje obronić własne kruche ego przed poczuciem winy, niszcząc zaufanie w zespole.',
            '4. Działający mechanizm psychologiczny: Pseudoprzeprosiny (Non-apology apology) zrzucające odpowiedzialność na wrażliwość odbiorcy i okoliczności zewnętrzne.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Obrona statusu i unikanie przyznania się do błędu chroniło pozycję dominującą w klanie.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się w przeprosinach warunku: „jeśli poczułeś” lub spójnika kasującego: „przepraszam, ale...”.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Pełny protokół dojrzałych przeprosin: „Joanno, zawaliłem organizację tego etapu i biorę za to 100% odpowiedzialności. Mój błąd zniszczył twój wolny weekend z rodziną. Przepraszam cię. Odbierz proszę dwa dni wolnego w tym tygodniu, a w kolejnych sprintach wprowadzam 48-godzinny bufor bezpieczeństwa”.',
            '8. Konsekwencje alternatywnego wyboru: Zranienie zostaje uznane, Joanna odzyskuje szacunek do lidera, a zespół zyskuje bezpieczniejsze procedury.',
            '9. Wniosek dydaktyczny dla czytelnika: Prawdziwe przeprosiny nie zawierają słowa „ALE”. Prawdziwe przeprosiny to uznanie bólu drugiego człowieka i konkretne zadośćuczynienie.'
          ]
        }
      ]
    },
    {
      id: 'sec-10-10',
      pageNumber: 478,
      sectionNumber: '10.10',
      title: 'Anatomia skutecznych przeprosin: Jak naprawdę naprawić szkodę',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość ludzi nie potrafi przepraszać. Rzucają toksyczne pseudoprzeprosiny: „Przepraszam cię, JEŚLI poczułeś się urażony” (co oznacza: ty jesteś przewrażliwiony, ja jestem niewinny) lub „Przepraszam, ALE sam mnie sprowokowałeś”.',
        'Prawdziwe przeprosiny wymagają zrzucenia zbroi ego, uznania bólu drugiego człowieka bez żadnych „ale” i zaoferowania realnego zadośćuczynienia. Poniższy warsztat uczy konstrukcji dojrzałych przeprosin.'
      ],
      exerciseRef: chapterTenExerciseApologyBuilder
    },
    {
      id: 'sec-10-11',
      pageNumber: 482,
      sectionNumber: '10.11',
      title: 'Wybaczenie a pojednanie: Uwolnienie z trucizny urazy',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Płynące z mądrości wieków zdanie mówi: „Uraza to trucizna, którą pijesz sam z nadzieją, że umrze ktoś inny”. Chroniczne chowanie urazy utrzymuje wysokie ciśnienie krwi i niszczy telomery Twoich komórek.',
        'Wybaczenie to akt wewnętrzny: rezygnacja z prawa do zemsty i uwolnienie siebie od cienia sprawcy. Nie wymaga ono pojednania. Możesz komuś wybaczyć w duchu, a jednocześnie zamknąć przed nim drzwi do swojego domu na zawsze, jeśli jest niebezpieczny.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 7: Zdrada wspólnika biznesowego — Wybaczenie wewnętrzne a brak pojednania',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Wspólnik Robert po 6 latach współpracy potajemnie wyprowadził ze spółki kluczowych klientów i założył konkurencyjny podmiot. Poszkodowany wspólnik Grzegorz przez 2 lata żył wyłącznie żądzą odwetu, budząc się w nocy z zaciśniętymi pięściami i niszcząc relacje z żoną.',
            '2. Co widzi bohater (Grzegorz): Grzegorz uważa, że dopóki nie zniszczy Roberta w sądach i nie doprowadzi go do ruiny, nie zazna spokoju. Myśli, że nienawiść daje mu siłę do walki.',
            '3. Czego bohater nie widzi (martwe pole): Grzegorz nie zauważa, że to nie Robert niszczy jego obecne życie, lecz jego własna chroniczna ruminacja zdrady, która wywołuje stały wyrzut kortyzolu, nadciśnienie tętnicze i emocjonalne odcięcie od dzieci.',
            '4. Działający mechanizm psychologiczny: Pętla ruminacji krzywdy (Trauma-related Rumination) i rozróżnienie między wybaczeniem (procesem wewnątrzpsychicznym) a pojednaniem (procesem relacyjnym).',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Pamięć o zdradzie miała zapobiegać ponownemu zaufaniu zdradzieckiemu osobnikowi, ale w formie obsesyjnej staje się chorobą autoimmunologiczną psychiki.',
            '6. Jak rozpoznać w czasie rzeczywistym: Ciągłe odtwarzanie w myślach dialogów ze sprawcą, monitorowanie jego profilu w sieci i niemożność cieszenia się sukcesami w teraźniejszości.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Akt wybaczenia dla własnego zdrowia: „Uwalniam Roberta ze swoich myśli. Przekazuję sprawę radcy prawnemu i nie poświęcę mu już ani jednej sekundy mojej energii życiowej. Zamykam ten rozdział, by żyć tu i teraz”. Jednocześnie brak jakiejkolwiek zgody na ponowną współpracę biznesową.',
            '8. Konsekwencje alternatywnego wyboru: Poziom kortyzolu spada, Grzegorz przesypia całą noc, odzyskuje radość w rodzinie i z sukcesem buduje nowy projekt technologiczny.',
            '9. Wniosek dydaktyczny dla czytelnika: Wybaczenie nie oznacza, że to, co zrobił sprawca, było w porządku. Wybaczenie oznacza jedynie, że nie pozwalasz już sprawcy mieszkać za darmo w Twojej głowie.'
          ]
        }
      ]
    },
    {
      id: 'sec-10-12',
      pageNumber: 486,
      sectionNumber: '10.12',
      title: 'Zdrowa relacja nie oznacza braku problemów: Magiczna proporcja 5:1',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Około 69% problemów w każdym trwałym związku to Problemy Wieczne (Perpetual Problems) wynikające z różnic biologicznych i osobowościowych. Z nimi uczy się dialogować z humorem i czułością.',
        'Dopóki w Waszej relacji panuje Magiczna Proporcja 5:1 — na jedno spięcie przypada pięć ciepłych spojrzeń, wspólnych herbat, pocałunków w czoło i słów uznania — Wasz związek jest pancerny. Problemy stają się wtedy tylko tłem dla głębokiej bliskości.'
      ]
    },
    {
      id: 'sec-10-13',
      pageNumber: 490,
      sectionNumber: '10.13',
      title: 'Wielkie Studium Przypadku: Małżeństwo pod presją narodzin dziecka',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Przejmująca, kliniczna analiza kryzysu relacyjnego po narodzinach pierwszego dziecka. Studium pokazuje, jak chroniczny deficyt snu, zmiana ról społecznych i zablokowane granice doprowadziły kochającą się parę na skraj rozwodu.'
      ],
      caseStudyRef: {
        id: 'cs-ch10-malzenstwo',
        title: 'Cisza Po Płaczu: Anatomia Kryzysu Rodzicielskiego Marty i Jakuba',
        subtitle: 'Jak brak współregulacji i narastająca pogarda niemal zniszczyły 8 lat miłości',
        protagonist: 'Marta (32 lata) i Jakub (34 lata), rodzice 6-miesięcznego Franka',
        context: 'Mieszkanie na warszawskim Mokotowie, 3:00 w nocy, po 4 miesiącach chronicznej bezsenności.',
        story: [
          'Przed narodzinami Franka Marta i Jakub uchodzili za parę idealną. Wspólne podróże, dobra komunikacja, satysfakcjonująca praca. Kryzys uderzył nagle: dziecko cierpiało na ostre kolki, budząc się z krzykiem co 45 minut.',
          'Marta czuła się uwięziona w domu, zredukowana do funkcji laktatora. Jej układ nerwowy był na skraju wyczerpania. Jakub wracał z pracy w korporacji po 10 godzinach, czując się wyobcowany i zepchnięty na boczny tor. Wchodząc do domu, zamiast ciepła spotykał lodowatą twarz Marty.',
          'Zaczęły się ataki Pierwszego Jeźdźca (Krytyka): „Oczywiście znowu kupiłeś złe pieluchy. Czy ty w ogóle potrafisz zrobić cokolwiek porządnie?”. Jakub reagował Drugim Jeźdźcem (Postawa Obronna): „Pracuję po 10 godzin, żeby utrzymać ten dom, a ty tylko siedzisz i narzekasz!”.',
          'Pewnej nocy, gdy Franek płakał kolejną godzinę, Jakub wszedł do kuchni, spojrzał na płaczącą Martę i z sarkastycznym uśmieszkiem wycedził: „I to ma być ta wspaniała matka roku? Żałosne”. To był Trzeci Jeździec — Pogarda.',
          'W Marcie coś pękło. Weszła w Czwarty Jeździec — Mur Obojętności (Stonewalling). Przestała z Jakubem rozmawiać, spali w osobnych pokojach, a w ich domu zapanowała trująca, grobowa cisza.',
          'Uratowała ich wizyta u terapeuty par, który natychmiast postawił diagnozę fizjologiczną: „Wy nie jesteście źli ani niedopasowani. Wasze kory przedczołowe są wyłączone przez chroniczny brak snu. Wasza amygdala walczy o przetrwanie”. Wdrożyli protokół ratunkowy: wynajęcie opiekunki na dwie noce w tygodniu, zakaz rozmów o problemach po godzinie 21:00 oraz codzienne 10 minut bezpiecznego przytulenia w ciszy bez telefonów.'
        ],
        decisionTaken: 'Zamiast podpisać pozew rozwodowy, potraktowali swój kryzys jako awarię systemu biologicznego i zwrócili się o zewnętrzną pomoc.',
        whatProtagonistSaw: 'Marta widziała Jakuba jako egoistę uciekającego w pracę; Jakub widział Martę jako wiecznie niezadowoloną jędzę.',
        whatWasMissed: 'Że oboje doświadczali głębokiego lęku przed nieadekwatnością w roli rodzica i rozpaczliwie tęsknili za bliskością, której nie potrafili nazwać słowami.',
        psychologicalAnalysis: {
          coreMechanism: 'Deprywacja snu wyłączyła hamowanie przedczołowe, uwalniając wszystkich czterech jeźdźców Gottmana.',
          cognitiveBiases: [
            { name: 'Podstawowy błąd atrybucji', description: 'Marta tłumaczyła spóźnienie Jakuba brakiem miłości, a nie korkami na Mordorze.', impact: 'Eskalacja pretensji.' }
          ],
          defenseMechanisms: [
            { name: 'Projekcja', explanation: 'Jakub rzutował własne poczucie bezradności wobec płaczu dziecka na Martę.' }
          ],
          emotionalDynamic: 'Paniczny głód bycia zauważonym i docenionym przekształcony w zgorzkniały atak.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Hamowanie agresywnych impulsów słownych i racjonalny nadzór', activationState: 'Porażenie metaboliczne z powodu głębokiego deficytu snu wolnofalowego (NREM)' },
            { region: 'Ciało migdałowate i przednia wyspa', role: 'Detekcja zagrożenia i generowanie afektu obronnego', activationState: 'Utrata przedczołowego hamowania odgórnego (Top-down Inhibition), skutkująca permanentną nadreaktywnością' }
          ],
          neurotransmitters: [
            { name: 'Układ monoaminergiczny i deficyt snu', roleInScenario: 'Chroniczna deprywacja faz NREM/REM rozregulowuje homeostazę serotoninergiczną i noradrenergiczną, obniżając próg tolerancji frustracji do zera' }
          ],
          biologicalTimeline: [
            { timeMs: '3:00 w nocy', process: 'Płacz dziecka w stanie wyczerpania fizjologicznego wywołuje nagłe odcięcie resztek kontroli korowej.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Protokół Biologicznego Wyciszenia', script: '„Oboje jesteśmy wykończeni. Nie podejmujemy żadnych decyzji o związku w stanie skrajnego zmęczenia. Porozmawiamy w sobotę po południu”.', rationale: 'Chroni przed wypowiedzeniem słów niszczących więź.' }
          ]
        },
        alternativePath: 'Gdyby kontynuowali kłótnie w nocy, pogarda doprowadziłaby do rozwodu przed pierwszymi urodzinami Franka, pozostawiając zgliszcza emocjonalne u obojga.',
        readerQuestion: 'W jakich momentach swojego życia traktujesz zmęczenie biologiczne jako problem z charakterem partnera?',
        keyTakeaway: 'Nigdy nie rozwiązuj problemów relacyjnych po 21:00. Najpierw nakarm ciało i wyśpij mózg — rano większość demonów znika.'
      }
    },
    {
      id: 'sec-10-14',
      pageNumber: 494,
      sectionNumber: '10.14',
      title: 'Mapa Relacji, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Zbadaliśmy najgłębsze fundamenty relacji międzyludzkich: współregulację nerwową, neurochemię zaufania, świętość granic osobistych, anatomię czterech jeźdźców oraz uzdrawiającą moc przeprosin i wybaczenia.',
        'Wiesz już, jak funkcjonować wśród ludzi, jak rozmawiać, jak wywierać wpływ i jak budować bezpieczne więzi. Pora teraz zadać pytanie o własne wnętrze i napęd życiowy:',
        'DLACZEGO CZASEM CHCEMY COŚ ZROBIĆ, WIEMY JAK TO ZROBIĆ, ALE TEGO NIE ROBIMY? Co rządzi naszą siłą woli, chęcią do działania i prokrastynacją?',
        'W Rozdziale 11 wejdziemy w fascynujący świat MOTYWACJI — odczarujemy mity wokół dopaminy, poznamy koszt aktywacji i zbudujemy niezniszczalny system codziennego działania.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 10.'
      ]
    }
  ]
};

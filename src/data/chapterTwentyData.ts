import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentyExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii motywacji fundamentalna różnica między wartością a celem polega na tym, że:',
    topic: 'Wartości a Cele',
    sectionRef: 'Sekcja 20.2',
    options: [
      { label: 'A', text: 'Wartość jest ciągłym kierunkiem działania i sposobem bycia (jak kompas wyznaczający północ), podczas gdy cel jest konkretnym, odhaczalnym punktem końcowym.', isCorrect: true },
      { label: 'B', text: 'Wartość jest kwotą pieniędzy w banku, a cel jest propozycją handlową.', isCorrect: false },
      { label: 'C', text: 'Cele są ważne tylko dla dzieci, a wartości dla emerytów.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to pojęcia tożsame w naukach społecznych.', isCorrect: false }
    ],
    explanation: 'Cele można osiągnąć i „odhaczyć” (np. „przebiec maraton”). Wartością jest sam styl życia i troska o zdrowie – nie można jej „odhaczyć”, lecz można nią żyć każdego dnia.',
    keyTakeaway: 'Cel to przystań, do której płyniesz; wartość to kompas wyznaczający kurs.'
  },
  {
    id: 2,
    question: 'Według Teorii Samostanowienia (Self-Determination Theory – SDT) Deciego i Ryana, trzema uniwersalnymi potrzebami psychicznymi człowieka są:',
    topic: 'Teoria Samostanowienia SDT',
    sectionRef: 'Sekcja 20.3',
    options: [
      { label: 'A', text: 'Autonomia, Kompetencja i Powiązanie z innymi (Autonomy, Competence, Relatedness).', isCorrect: true },
      { label: 'B', text: 'Pieniądze, Władza i Sława.', isCorrect: false },
      { label: 'C', text: 'Bezpieczeństwo, Kofeina i Szybki internet.', isCorrect: false },
      { label: 'D', text: 'Rygor, Izolacja i Stały nadzór.', isCorrect: false }
    ],
    explanation: 'Gdy środowisko zaspokaja te trzy uniwersalne potrzeby, motywacja wewnętrzna i dobrostan kwitną w sposób naturalny.',
    keyTakeaway: 'Autonomia, kompetencja i więzi to biologiczne odżywki ludzkiego ducha.'
  },
  {
    id: 3,
    question: 'Dlaczego rozbieżność między deklarowanymi wartościami („rodzina jest najważniejsza”) a rzeczywistym zachowaniem (praca po 16 godzin dziennie) NIE MUSI wynikać ze złej woli człowieka?',
    topic: 'Deklaracje vs Zachowanie',
    sectionRef: 'Sekcja 20.4',
    options: [
      { label: 'A', text: 'Ponieważ zachowanie jest wypadkową natychmiastowych bodźców środowiskowych, lęku przed brakiem bezpieczeństwa i pętli dopaminowych tu i teraz.', isCorrect: true },
      { label: 'B', text: 'Człowiek ten jest z natury oszustem i kłamcą.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej rozbieżności, praca i rodzina to to samo.', isCorrect: false },
      { label: 'D', text: 'Deklarowane wartości ulegają skasowaniu po godzinie 17:00.', isCorrect: false }
    ],
    explanation: 'Umysł często ulega presji natychmiastowych nagród i lęku przed brakiem bezpieczeństwa, przez co odsuwa realizację głębokich wartości na rzekome „później”.',
    keyTakeaway: 'Nie oceniaj człowieka — zbadaj mechanizm, który odciąga go od jego wartości.'
  },
  {
    id: 4,
    question: 'Na czym polega Konflikt Wartości (Value Conflict) w sytuacjach decyzyjnych?',
    topic: 'Konflikty Wartości',
    sectionRef: 'Sekcja 20.5',
    options: [
      { label: 'A', text: 'Sytuacja, w której wybór działania zgodnego z jedną wartością (np. Wolność) wymaga bolesnego ustępstwa na rzecz innej wartości (np. Bezpieczeństwo).', isCorrect: true },
      { label: 'B', text: 'Kłótnia dwóch osób na temat cen w sklepie.', isCorrect: false },
      { label: 'C', text: 'Błąd w obliczeniach matematycznych na fakturze.', isCorrect: false },
      { label: 'D', text: 'Brak możliwości kupienia biletu na pociąg.', isCorrect: false }
    ],
    explanation: 'Konflikty wartości są nieuniknioną częścią dorosłego życia. Dojrzałość polega na świadomym dokonywaniu priorytetyzacji w danym kontekście.',
    keyTakeaway: 'Wypowiedzenie „tak” jednej wartości bywa często wypowiedzeniem „nie” innej.'
  },
  {
    id: 5,
    question: 'W jaki sposób konflikt celów krótkoterminowych i długoterminowych wywołuje zjawisko Dyskontowania Hiperbolicznego?',
    topic: 'Dyskonto Hiperboliczne',
    sectionRef: 'Sekcja 20.6',
    options: [
      { label: 'A', text: 'Układ limbiczny przyznaje nieproporcjonalnie wyższą wagę natychmiastowej nagrodzie (np. batonik, serial) niż odroczonej w czasie dużej wartości (zdrowie za 10 lat).', isCorrect: true },
      { label: 'B', text: 'Zniżka cenowa w sklepach ze sprzętem AGD.', isCorrect: false },
      { label: 'C', text: 'Błąd w trajektorii lotu satelity.', isCorrect: false },
      { label: 'D', text: 'Proces obniżania wartości waluty przez bank centralny.', isCorrect: false }
    ],
    explanation: 'Dla podkorowych struktur mózgu „ja za 10 lat” jest obcą osobą. Praca nad wartościami wymaga przybliżania przyszłych konsekwencji do teraźniejszości.',
    keyTakeaway: 'Spraw, by koszty złych decyzji były natychmiastowe, a nagrody z dobrych — widoczne dzisiaj.'
  },
  {
    id: 6,
    question: 'Czym różnią się wartości autonomiczne od wartości introwykowanych (narzuconych przez presję społeczną)?',
    topic: 'Autonomia Wartości',
    sectionRef: 'Sekcja 20.7',
    options: [
      { label: 'A', text: 'Wartości autonomiczne są głęboko przemyślane i zintegrowane z jaźnią; wartości introjekcyjne realizowane są z lęku przed wstydem lub odrzuceniem.', isCorrect: true },
      { label: 'B', text: 'Wartości introjekcyjne są zawsze zapisane w konstytucji państwa.', isCorrect: false },
      { label: 'C', text: 'Wartości autonomiczne występują wyłącznie u pustelników.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w poczuciu sensu podczas ich realizacji.', isCorrect: false }
    ],
    explanation: 'Podążanie za wartościami narzuconymi rodzi przewlekły opór i poczucie pustki, nawet przy osiąganiu wielkich sukcesów.',
    keyTakeaway: 'Życie wedle cudzych wartości to najszybsza droga do egzystencjalnego wypalenia.'
  },
  {
    id: 7,
    question: 'Jaka jest rola Potrzeb Natychmiastowych w hierarchii potrzeb Abrahama Maslowa i współczesnych modelach motywacyjnych?',
    topic: 'Hierarchia Potrzeb',
    sectionRef: 'Sekcja 20.8',
    options: [
      { label: 'A', text: 'Niezaspokojenie potrzeb podstawowych (sen, bezpieczeństwo, głód) drastycznie zawęża pole uwagi i uniemożliwia realizację wartości wyższego rzędu.', isCorrect: true },
      { label: 'B', text: 'Potrzeby fizjologiczne są całkowicie nieistotne dla ludzi o wysokiej inteligencji.', isCorrect: false },
      { label: 'C', text: 'Maslow udowodnił, że człowiek potrzebuje wyłącznie uznania w mediach.', isCorrect: false },
      { label: 'D', text: 'Potrzeby wyższego rzędu ulegają skasowaniu po ukończeniu 30 lat.', isCorrect: false }
    ],
    explanation: 'Gdy Twój organizm jest deprywowany ze snu lub poczucia bezpieczeństwa, kora przedczołowa traci zasoby na rzecz podkorowej walki o przetrwanie.',
    keyTakeaway: 'Zadbaj o biologiczny fundament, by móc żyć głębokimi wartościami.'
  },
  {
    id: 8,
    question: 'Jaką funkcję pełni matryca prioryteryzacji Eisenhowera w codziennym zarządzaniu wartościami?',
    topic: 'Matryca Eisenhowera',
    sectionRef: 'Sekcja 20.10',
    options: [
      { label: 'A', text: 'Kategoryzuje zadania na Pilne/Nieważne, Pilne/Ważne, Niepilne/Ważne i Niepilne/Nieważne, chroniąc czas dla wartości długoterminowych (Ćwiartka II).', isCorrect: true },
      { label: 'B', text: 'Służy do obliczania podatku od nieruchomości.', isCorrect: false },
      { label: 'C', text: 'Zmusza człowieka do robienia wszystkiego na raz.', isCorrect: false },
      { label: 'D', text: 'Wyeliminuje potrzebę snu i odpoczynku.', isCorrect: false }
    ],
    explanation: 'Większość ludzi spędza życie w Ćwiartce I (pożary) i Ćwiartce III (pilne cudze sprawy). Wartości i rozwój mieszkają w Ćwiartce II (ważne, ale niepilne).',
    keyTakeaway: 'Chroń czas na sprawy ważne, ale niepilne — tam buduje się Twoja przyszłość.'
  },
  {
    id: 9,
    question: 'Co charakteryzuje Złudzenie Ostatecznego Celu (Arrival Fallacy)?',
    topic: 'Złudzenie Ostatecznego Celu',
    sectionRef: 'Sekcja 20.9',
    options: [
      { label: 'A', text: 'Przekonanie, że osiągnięcie konkretnego celu (np. zakup domu, awans) da nam trwałe, niewzruszone szczęście do końca życia.', isCorrect: true },
      { label: 'B', text: 'Błąd w nawigacji GPS przy dojeździe do celu.', isCorrect: false },
      { label: 'C', text: 'Strach przed podróżowaniem samolotem.', isCorrect: false },
      { label: 'D', text: 'Niezgoda na podpisanie umowy o pracę.', isCorrect: false }
    ],
    explanation: 'Adaptacja hedoniczna sprawia, że po osiągnięciu celu poziom szczęścia szybko wraca do punktu bazowego. Szczęście leży w procesie, nie w mecie.',
    keyTakeaway: 'Nie czekaj ze szczęściem na metę — zakochaj się w samym żeglowaniu.'
  },
  {
    id: 10,
    question: 'Na czym polega technika „Klarowania Wartości” (Values Clarification) w terapii ACT (Acceptance and Commitment Therapy)?',
    topic: 'Klarowanie Wartości ACT',
    sectionRef: 'Sekcja 20.12',
    options: [
      { label: 'A', text: 'Wyodrębnienie serca własnych wartości i zaplanowanie elastycznych działań zmierzających w ich kierunku mimo obecności trudnych emocji.', isCorrect: true },
      { label: 'B', text: 'Spalenie wszystkich swoich dotychczasowych dokumentów.', isCorrect: false },
      { label: 'C', text: 'Przekonywanie innych ludzi, że mają żyć wedle naszych zasad.', isCorrect: false },
      { label: 'D', text: 'Powtarzanie reguł z podręcznika logiki.', isCorrect: false }
    ],
    explanation: 'ACT uczy, że wartości nie wymagają pozbycia się lęku — wartości dają odwagę do działania RAZEM z lękiem idącym pod pachę.',
    keyTakeaway: 'Nie czekaj, aż lęk zniknie — weź go ze sobą i rób to, co ważne.'
  },
  {
    id: 11,
    question: 'W jaki sposób zmiana etapu życia (np. narodziny dziecka, przejście na emeryturę) wpływa na reorganizację hierarchii priorytetów?',
    topic: 'Zmiana Priorytetów w Życiu',
    sectionRef: 'Sekcja 20.13',
    options: [
      { label: 'A', text: 'Wymusza rekonfigurację zasobów czasowych i wartości, co jest naturalnym procesem rozwojowym, a nie objawem niestabilności.', isCorrect: true },
      { label: 'B', text: 'Powoduje natychmiastową utratę wszystkich wspomnień z przeszłości.', isCorrect: false },
      { label: 'C', text: 'Sprawia, że człowiek przestaje odczuwać jakiekolwiek emocje.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnego wpływu na codzienne decyzje.', isCorrect: false }
    ],
    explanation: 'Hierarchia wartości jest żywym organizmem. To, co było priorytetem w wieku 20 lat (przygoda, niezależność), może ustąpić miejsca stabilności w wieku 35 lat.',
    keyTakeaway: 'Pozwól swoim priorytetom ewoluować razem z Twoim etapem życia.'
  },
  {
    id: 12,
    question: 'Co jest głównym celem Ćwiczenia „Nekrolog / Mowa Pogrzebowa” w określaniu głębokich wartości?',
    topic: 'Perspektywa Ostateczna',
    sectionRef: 'Sekcja 20.14',
    options: [
      { label: 'A', text: 'Uruchomienie perspektywy ostatecznej, która usuwa powierzchowne szumy społecznej aprobaty i odsłania to, co naprawdę się liczy.', isCorrect: true },
      { label: 'B', text: 'Wywołanie stanów depresyjnych u osoby ćwiczącej.', isCorrect: false },
      { label: 'C', text: 'Napisanie testamentu prawnego u notariusza.', isCorrect: false },
      { label: 'D', text: 'Zaplanowanie budżetu na uroczystości rodzinne.', isCorrect: false }
    ],
    explanation: 'Spojrzenie na własne życie z perspektywy jego końca drastycznie oczyszcza priorytety: nikt na łożu śmierci nie żałuje, że spędził za mało czasu w biurze.',
    keyTakeaway: 'Pamiętaj o końcu, by pamiętać o tym, jak żyć dzisiaj.'
  },
  {
    id: 13,
    question: 'Jaką rolę w chronieniu własnych wartości pełni umiejętność Stawiania Granic (Boundary Setting)?',
    topic: 'Stawianie Granic',
    sectionRef: 'Sekcja 20.15',
    options: [
      { label: 'A', text: 'Jest operacyjnym narzędziem obrony czasu i energii przed roszczeniami otoczenia, umożliwiającym realizację własnych priorytetów.', isCorrect: true },
      { label: 'B', text: 'Polega na obrażaniu każdego, kto ma odmienne zdanie.', isCorrect: false },
      { label: 'C', text: 'Jest metodą budowania płotów wokół domu.', isCorrect: false },
      { label: 'D', text: 'Zmusza innych do płacenia nam za rozmowę.', isCorrect: false }
    ],
    explanation: 'Brak granic sprawia, że Twój kalendarz staje się śmietnikiem na cudze nagłe sprawy.',
    keyTakeaway: 'Możesz powiedzieć „nie” prośbie innego człowieka, mówiąc „tak” własnym wartościom.'
  },
  {
    id: 14,
    question: 'Co oznacza pojęcie Intencji Implementacyjnej (Implementation Intentions) w realizacji celów opartych na wartościach?',
    topic: 'Intencje Implementacyjne',
    sectionRef: 'Sekcja 20.16',
    options: [
      { label: 'A', text: 'Sformułowanie precyzyjnego planu typu: „JEŚLI pojawi się sytuacja X, TO wykonam działanie Y”.', isCorrect: true },
      { label: 'B', text: 'Kupowanie drogich poradników o sukcesie.', isCorrect: false },
      { label: 'C', text: 'Głośne krzyczenie na skrzyżowaniu o swoich marzeniach.', isCorrect: false },
      { label: 'D', text: 'Czekanie na natchnienie w niedzielne popołudnie.', isCorrect: false }
    ],
    explanation: 'Reguła „Jeśli-To” zdejmuje ciężar decyzyjny z zmęczonej kory przedczołowej i automatyzuje zachowanie zgodne z wartością.',
    keyTakeaway: 'Zaplanuj wyzwalacz i akcję wcześniej, by nie negocjować ze sobą w chwili próby.'
  },
  {
    id: 15,
    question: 'W jaki sposób presja grupy społecznej może doprowadzić do zjawiska „Erozji Wartości”?',
    topic: 'Erozja Wartości',
    sectionRef: 'Sekcja 20.5',
    options: [
      { label: 'A', text: 'Powolne, drobne ustępstwa na rzecz norm grupy sprawiają, że człowiek stopniowo przesuwa granice tego, co uważa za dopuszczalne.', isCorrect: true },
      { label: 'B', text: 'Zjawisko to występuje wyłącznie w wojsku.', isCorrect: false },
      { label: 'C', text: 'Erozja wartości następuje w ułamku sekundy po błysku pioruna.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej możliwości ulegania wpływowi grupy.', isCorrect: false }
    ],
    explanation: 'Erozja wartości nie dzieje się w jednym wielkim skoku — to seria tysiąca małych kompromisów ze swoim sumieniem.',
    keyTakeaway: 'Chroń swoje granice przy pierwszych drobnych naruszeniach.'
  },
  {
    id: 16,
    question: 'Jaka jest rola nagród wewtrznych i zmartwychwstania motywacji w procesie długofalowego dążenia do celów?',
    topic: 'Nagrody Wewnętrzne',
    sectionRef: 'Sekcja 20.3',
    options: [
      { label: 'A', text: 'Poczucie spójności i dumy z własnego postępowania działa jako najtrwalszy stymulator neurologiczny podtrzymujący wysiłek.', isCorrect: true },
      { label: 'B', text: 'Tylko nagrody pieniężne potrafią skłonić mózg do pracy.', isCorrect: false },
      { label: 'C', text: 'Nagrody wewnętrzne są wymysłem literatury pięknej.', isCorrect: false },
      { label: 'D', text: 'Wysiłek długofalowy nie wymaga żadnego wsparcia dopaminowego.', isCorrect: false }
    ],
    explanation: 'Czyste sumienie i poczucie spójności wewnętrznej dają głęboki spokój i odporność na wstrząsy zewnętrzne.',
    keyTakeaway: 'Największą nagrodą za życie w zgodzie z wartościami jest szacunek do samego siebie.'
  },
  {
    id: 17,
    question: 'Na czym polega pułapka „Myślenia Życzeniowego” (Wishful Thinking) w ustalaniu priorytetów?',
    topic: 'Myślenie Życzeniowe',
    sectionRef: 'Sekcja 20.4',
    options: [
      { label: 'A', text: 'Planowanie zadań bez uwzględnienia twardych ograniczeń czasowych i zasobów energetycznych organizmu.', isCorrect: true },
      { label: 'B', text: 'Piszczenie życzeń do Świętego Mikołaja.', isCorrect: false },
      { label: 'C', text: 'Zdolność do bezbłędnego przewidywania przyszłości.', isCorrect: false },
      { label: 'D', text: 'Unikanie jakiegokolwiek planowania.', isCorrect: false }
    ],
    explanation: 'Ignorowanie faktu, że doba ma 24 godziny, a zasoby woli są ograniczone, prowadzi do przewlekłego poczucia winy i klęski.',
    keyTakeaway: 'Planuj z kalendarzem w ręku, a nie z nierealistycznymi życzeniami.'
  },
  {
    id: 18,
    question: 'Jakie jest główne zadanie Symulatora Konfliktu Wartości (Sekcja 20.11)?',
    topic: 'Symulator Wartości',
    sectionRef: 'Sekcja 20.11',
    options: [
      { label: 'A', text: 'Przećwiczenie podejmowania trudnych wyborów w scenariuszach zderzenia dwóch ważnych racji przy pełnej świadomości kosztów.', isCorrect: true },
      { label: 'B', text: 'Nauka obsługi nowych gier komputerowych.', isCorrect: false },
      { label: 'C', text: 'Wyrokowanie o tym, kto ma rację w sporach małżeńskich.', isCorrect: false },
      { label: 'D', text: 'Automatyczne rozwiązywanie problemów finansowych.', isCorrect: false }
    ],
    explanation: 'Symulator pozwala zobaczyć, że każda decyzja niesie ze sobą koszt i uczy akceptowania tych kosztów bez ucieczki w racjonalizację.',
    keyTakeaway: 'Wybór priorytetu to także odwaga do przyjęcia kosztu odrzuconej alternatywy.'
  }
  { id: "deep-20.22", pageNumber:40, sectionNumber:"20.22", title:"Wartość, cel i preferencja", category:"teoria", readingTimeMinutes:8, paragraphs:["Wartość opisuje kierunek uznawany za ważny, na przykład uczciwość, autonomia, troska o bliskich czy rozwój. Cel jest konkretnym rezultatem, takim jak ukończenie kursu. Preferencja mówi, co w danej chwili wolimy. Te poziomy mogą współpracować, ale nie są tym samym.","Ktoś może cenić zdrowie, mieć cel regularnego treningu i jednocześnie preferować wieczór z serialem. Konflikt preferencji z celem nie musi oznaczać konfliktu wartości. Problem pojawia się wtedy, gdy krótkoterminowe wybory systematycznie uniemożliwiają realizację kierunku, który człowiek uważa za ważny.","To rozróżnienie chroni przed wnioskiem „skoro nie zrobiłem planu, moje wartości są kłamstwem”. Przyczyną może być planowanie, zmęczenie, środowisko albo konflikt kilku uzasadnionych potrzeb."] },
  { id: "deep-20.23", pageNumber:41, sectionNumber:"20.23", title:"Wartości deklarowane a realizowane", category:"teoria", readingTimeMinutes:8, paragraphs:["Ludzie mogą szczerze deklarować, że ważna jest dla nich rodzina, rozwój albo autonomia, a jednocześnie poświęcać większość czasu na inne działania. Taka rozbieżność nie musi oznaczać hipokryzji. Decyzje są ograniczone obowiązkami, pieniędzmi, czasem i zobowiązaniami wobec innych.","Pomocne jest porównanie deklaracji z kalendarzem i decyzjami. Nie po to, by wystawić sobie ocenę moralną, lecz by zobaczyć koszt alternatywny. Jeśli rozwój jest ważny, ale przez miesiąc nie ma na niego czasu, jest to informacja o realnym układzie priorytetów.","Czasem trzeba też zrewidować deklarację. Jeśli po spokojnym namyśle okazuje się, że dana wartość była głównie oczekiwaniem rodziny, warto sprawdzić, czy rzeczywiście chcemy ją zachować."] },
  { id: "deep-20.24", pageNumber:42, sectionNumber:"20.24", title:"Konflikt wartości nie zawsze ma rozwiązanie bez kosztu", category:"teoria", readingTimeMinutes:8, paragraphs:["Niektóre decyzje stawiają naprzeciw siebie dwie rzeczy, które naprawdę są ważne. Wymagająca praca może wspierać rozwój i niezależność, ale ograniczać czas dla rodziny. Pozostanie w obecnej pracy może chronić stabilność, ale opóźniać zmianę.","Analiza powinna zacząć się od nazwania kosztów. Która wartość jest ważniejsza w tym okresie? Jaki minimalny poziom drugiej trzeba zachować? Które koszty są odwracalne, a które długoterminowe?","Nie każda hierarchia musi obowiązywać całe życie. Priorytety częściowo zależą od etapu życia i sytuacji. Elastyczna hierarchia może być bardziej realistyczna niż jedna lista rozstrzygająca każdy przyszły konflikt."] },
  { id: "deep-20.25", pageNumber:43, sectionNumber:"20.25", title:"„Chcę” kontra „powinienem”", category:"teoria", readingTimeMinutes:8, paragraphs:["Słowo „powinienem” może oznaczać odpowiedzialność, normę społeczną albo własny standard. Zanim potraktujemy je jak nakaz, warto ustalić źródło i konsekwencje.","Jeśli niewykonanie czegoś powoduje realną szkodę dla mnie lub innych, mamy ważny powód do działania. Jeśli główną konsekwencją jest czyjeś rozczarowanie, warto dodatkowo zbadać, czy norma jest zgodna z własnymi wartościami.","Autonomia nie oznacza robienia wszystkiego, na co ma się ochotę. Oznacza świadome uwzględnianie powodów, potrzeb, ograniczeń i zobowiązań. Czasem autonomiczna decyzja brzmi: „nie mam ochoty, ale wybieram to, bo uznaję powód za ważny”."] },
  { id: "deep-20.26", pageNumber:44, sectionNumber:"20.26", title:"Priorytety jako decyzje o ograniczonych zasobach", category:"teoria", readingTimeMinutes:8, paragraphs:["Priorytet nie jest tylko tym, co uważamy za ważne. Jest również tym, czemu przydzielamy ograniczone zasoby: czas, uwagę, energię, pieniądze i dostępność emocjonalną. Hierarchia wartości staje się praktyczna dopiero wtedy, gdy można ją zobaczyć w decyzjach.","Dobra hierarchia nie musi być idealna ani stała. Powinna być wystarczająco jasna, aby pomagać w trudnych sytuacjach, i wystarczająco elastyczna, aby uwzględniać zmianę okoliczności.","To prowadzi do ostatniego rozdziału tego bloku. Skoro człowiek może mylić deklaracje, oceny i interpretacje z rzeczywistością, potrzebuje sposobu obserwowania własnego funkcjonowania."] },
  { id:19, question:"Które rozróżnienie najlepiej pomaga analizować ten temat?", topic:"Wartości, potrzeby i priorytety", sectionRef:"Sekcja 20.22", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Rozdzielenie danych, interpretacji i warunków, w których dany opis jest trafny.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:20, question:"Co jest przykładem aktualizacji przekonania zamiast jego bezrefleksyjnej obrony?", topic:"Wartości, potrzeby i priorytety", sectionRef:"Sekcja 20.23", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Zmiana zdania tylko dlatego, że zrobiła to większość.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:21, question:"Które działanie dostarcza lepszej informacji o własnym funkcjonowaniu?", topic:"Wartości, potrzeby i priorytety", sectionRef:"Sekcja 20.24", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Porównanie kilku obserwacji z własną hipotezą i korekta jej zakresu.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:22, question:"Dlaczego kontekst jest ważny przy ocenie człowieka lub jego zachowania?", topic:"Wartości, potrzeby i priorytety", sectionRef:"Sekcja 20.25", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Uwzględnienie sytuacji zamiast wyciągania globalnego wniosku.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:23, question:"Które pytanie najlepiej ujawnia ograniczenie własnej pewności?", topic:"Wartości, potrzeby i priorytety", sectionRef:"Sekcja 20.26", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Sprawdzenie, jakie dane mogłyby pokazać, że mój wniosek jest błędny.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
];

export const caseStudiesChapterTwenty: CaseStudy[] = [
  {
    id: 'studium-20-1-deklaracje-vs-zachowanie',
    title: 'W pułapce korpo-sukcesu: Dlaczego Paweł poświęcił rodzinę dla kolejnego awansu?',
    subtitle: 'Niezgodność deklarowanych wartości z zachowaniem, presja statusowa i odzyskiwanie spójności',
    protagonist: 'Paweł, 38 lat, partner w firmie doradczej',
    context: 'Paweł w wywiadach i rozmowach ze znajomymi powtarzał, że „rodzina jest dla niego bezwzględnym numerem jeden”. W rzeczywistości pracował po 70 godzin tygodniowo, a córka widywała go głównie, gdy spała.',
    story: [
      'Paweł szczerze wierzył, że kocha swoją rodzinę i robi wszystko dla ich dobra. Kupował drogi dom, zagraniczne wakacje i prywatne szkoły dla dzieci.',
      'Jednak jego kalendarz opowiadał inną historię. Z 16 godzin aktywności dziennej 13 spędzał w biurze lub w podróżach służbowych. Gdy wracał do domu, jego umysł nadal przetwarzał maile i tabelki w Excelu.',
      'Kiedy żona postawiła mu ultimatum i zaproponowała separację, Paweł odczuł głęboki szok: „Jak to? Przecież haruję jak wół dla was! Rodzina jest dla mnie najważniejsza!”.',
      'Dopiero w toku analizy własnego postępowania zrozumiał mechanizm: praca dawała mu natychmiastowe, dopaminowe nagrody statusowe (pochwały klientów, bonusy), podczas gdy budowanie relacji w domu wymagało cierpliwości bez natychmiastowego poklasku. Paweł przesunął wskaźniki i obniżył wymiar czasu pracy o 25%.'
    ],
    dialogue: [
      { speaker: 'Żona', text: 'Paweł, dzieci cię nie znają. Pieniądze nie zastąpią im ojca przy stole.', subtext: 'Konfrontacja deklaracji z twardą rzeczywistością.' },
      { speaker: 'Paweł', text: 'Przecież robię to wszystko dla was! Chcę, żebyście mieli bezpieczne życie!', subtext: 'Racjonalizacja ucieczki w pracę pod płaszczykiem troski.' }
    ],
    decisionTaken: 'Paweł zrezygnował z przewodniczenia trzem komitetom i ograniczył pracę do 45 godzin tygodniowo.',
    whatProtagonistSaw: 'Poczucie obowiązku zapewnienia dostatku, status i wizję bycia świetnym żywicielem rodziny.',
    whatWasMissed: 'Fakt, że jego obecność emocjonalna była dla dzieci ważniejsza niż kolejne luksusowe gadżety.',
    psychologicalAnalysis: {
      coreMechanism: 'Rozbieżność między Deklarowaną Wartością (Rodzina) a Aktywną Wartością w Działaniu (Status/Sukces).',
      cognitiveBiases: [
        { name: 'Dyskonto hiperboliczne', description: 'Wybieranie natychmiastowej premii zawodowej kosztem odroczonej harmonii rodzinnej.', impact: 'Zniszczenie więzi małżeńskiej.' }
      ],
      defenseMechanisms: [
        { name: 'Projekcja altruistyczna', explanation: 'Tłumaczenie pracoholizmu szlachetnym poświęceniem dla bliskich.' }
      ],
      emotionalDynamic: 'Guilt response (poczucie winy) przeplatane z poczuciem niesprawiedliwości, że wysiłek nie jest doceniany.'
    },
    decisionProcessAnalysis: {
      trigger: 'Ultimatum małżeńskie i wniosek o separację.',
      attentionFocus: 'Pustka w domu i lęk przed utratą rodziny.',
      interpretation: '„Moje zachowanie zaprzecza temu, co deklaruję, muszę to natychmiast zmienić”.',
      emotion: 'Przerażenie, wstyd, głębokie opamiętanie.',
      impulse: 'Zrezygnowanie z części obowiązków w firmie.',
      action: 'Zmniejszenie wymiaru pracy i wprowadzenie nienegocjowalnego czasu dla rodziny.',
      consequence: 'Odbudowa relacji z dziećmi i stabilizacja małżeństwa.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (NAcc)', role: 'Uzależnienie od dopaminowych nagród zawodowych', activationState: 'Wyhamowanie pętli nagrody' },
        { region: 'Przednia kora obwodu (ACC)', role: 'Rejestracja ostrego konfliktu wartości', activationState: 'Wysoka aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna', roleInScenario: 'Wzrost poziomu po spędzeniu czasu z dziećmi bez telefonu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowa „wniosek o separację” wywołują skok kortyzolu.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Korporacyjny kult dyspozycyjności', description: 'Promowanie przekazu, że sukces wymaga oddania całego życia.', vulnerabilityExploited: 'Potrzeba uznania i ambicja.' }
      ],
      counterMeasures: [
        { step: '1. Twardy Audyt Kalendarza', script: 'Sprawdzenie, ile godzin w tygodniu FAKTYCZNIE przeznacza się na deklarowane wartości.', rationale: 'Zderza iluzje z twardymi danymi.' }
      ]
    },
    alternativePath: 'Gdyby Paweł zignorował ultimatum, doszłoby do rozwodu, a on sam załamałby się psychicznie w pustym domu.',
    readerQuestion: 'Gdyby ktoś przeanalizował Twój kalendarz z ostatniego miesiąca, jakie wartości uznałby za Twoje prawdziwe priorytety?',
    keyTakeaway: 'Twoje prawdziwe wartości to nie to, co deklarujesz, lecz to, na co przeznaczasz swój czas, energię i pieniądze.'
  },
  {
    id: 'studium-20-2-konflikt-wolnosc-bezpieczenstwo',
    title: 'Między etatem a własną firmą: Dylemat wartości u Karoliny',
    subtitle: 'Konflikt wartości Wolność vs Bezpieczeństwo i podejmowanie decyzji w warunkach niepewności',
    protagonist: 'Karolina, 33 lata, projektantka UX',
    context: 'Karolina od 8 lat pracowała na bezpiecznym etacie w banku. Marzyła o otwarciu własnego studia projektowego, lecz lęk przed utratą stałej pensji paraliżował ją przed złożeniem wypowiedzenia.',
    story: [
      'Karolina odczuwała głęboką potrzebę Wolności i Kreatywności. Praca w banku była powtarzalna, pełna absurdalnych procedur i ograniczeń.',
      'Z drugiej strony w jej umyśle silnie rezonowała wartość Bezpieczeństwa Finansowego. Każda myśl o odejściu z etatu wywoływała u niej wizję braku środków na spłatę kredytu hipotecznego.',
      'Karolina tkwiła w stanie paraliżu decyzyjnego przez 3 lata. Wolność ciągnęła ją w jedną stronę, Bezpieczeństwo w drugą. Ten stały konflikt wywołał u niej objawy psychosomatyczne (bóle kręgosłupa, migreny).',
      'Dopiero zastosowanie metody hybrydowej (stworzenie poduszki finansowej na 12 miesięcy i przejście na pół etatu w banku) pozwoliło jej zrealizować Wolność bez drastycznego naruszania Bezpieczeństwa.'
    ],
    dialogue: [
      { speaker: 'Partner', text: 'Karolina, ciągle narzekasz na ten bank. Rzuć to w cholerę i zacznij robić swoje!', subtext: 'Zachecanie do skoku na głęboką wodę bez uwzględnienia potrzeby bezpieczeństwa.' },
      { speaker: 'Karolina', text: 'Łatwo ci mówić! A co, jeśli przez pół roku nie znajdę ani jednego klienta? Z czego zapłacimy ratę?', subtext: 'Lęk o fundament bezpieczeństwa finansowego.' }
    ],
    decisionTaken: 'Karolina wynegocjowała przejście na 1/2 etatu i przeznaczyła pozostały czas na budowanie własnego studia.',
    whatProtagonistSaw: 'Skrajne scenariusze: albo bezpieczna niewola na etacie, albo skok w przepaść bez środków do życia.',
    whatWasMissed: 'Fakt, że konflikt wartości można rozwiązać poprzez strategie hybrydowe, które łączą obie wartości na akceptowalnym poziomie.',
    psychologicalAnalysis: {
      coreMechanism: 'Konflikt Wartości (Wolność vs Bezpieczeństwo) i paraliż decyzyjny.',
      cognitiveBiases: [
        { name: 'Myślenie czarno-białe', description: 'Widzenie tylko dwóch skrajnych rozwiązań bez opcji pośrednich.', impact: 'Trwanie w paraliżu przez lata.' }
      ],
      defenseMechanisms: [
        { name: 'Odkładanie decyzji', explanation: 'Trwanie w męczącym status quo z lęku przed ryzykiem.' }
      ],
      emotionalDynamic: 'Frustracja na etacie przeplatana ze lękiem przed samodzielnością.'
    },
    decisionProcessAnalysis: {
      trigger: 'Kolejna zmiana procedur w banku niszcząca kreatywność.',
      attentionFocus: 'Brak perspektyw rozwoju i pragnienie wolności.',
      interpretation: '„Muszę znaleźć sposób na połączenie wolności z bezpiecznym dochodem”.',
      emotion: 'Dystans do etatu, ostrożna nadzieja.',
      impulse: 'Negocjacje z szefem o zmniejszenie wymiaru czasu pracy.',
      action: 'Przejście na pół etatu i uruchomienie firmy.',
      consequence: 'Spadek niepokoju i udany start własnej działalności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Przetwarzanie konfliktu decyzyjnego', activationState: 'Uspokojenie po wypracowaniu opcji hybrydowej' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Planowanie poduszki finansowej i kroków wykonawczych', activationState: 'Wysoka sprawność' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Wzrost motywacji po otwarciu własnego studia.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Myśl „pół etatu” zredukowała impuls lękowy w ciele migdałowatym.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kulturowy mit bezkompromisowości', description: 'Promowanie hasła „wszystko albo nic” w biznesie.', vulnerabilityExploited: 'Młodzieńcza niecierpliwość.' }
      ],
      counterMeasures: [
        { step: '1. Projektowanie Rozwiązań Hybrydowych', script: 'Łączenie przeciwnych wartości w jednym modelu działania.', rationale: 'Obniża poziom stresu i ryzyka.' }
      ]
    },
    alternativePath: 'Gdyby Karolina rzuciła etat bez przygotowania i poduszki, panika finansowa zmusiłaby ją do powrotu do korporacji po 3 miesiącach.',
    readerQuestion: 'Jakie dwie wartości rywalizują w Tobie w tym momencie i jak możesz zbudować most hybrydowy pomiędzy nimi?',
    keyTakeaway: 'Nie musisz wybierać między skrajnościami. Dojrzała decyzja często polega na sprytnym połączeniu wartości.'
  },
  {
    id: 'studium-20-3-zludzenie-ostatecznego-celu',
    title: 'Gdy awans nie przyniósł szczęścia: Pułapka Arrival Fallacy u Tomasza',
    subtitle: 'Adaptacja hedoniczna, gonitwa za mecenatem i odkrywanie wartości w procesie',
    protagonist: 'Tomasz, 42 lata, dyrektor operacyjny w branży logistycznej',
    context: 'Tomasz przez 10 lat dążył do zdobycia stanowiska dyrektora i pensji 50 000 zł. Kiedy osiągnął cel, po tygodniu euforii wpadł w głęboką pustkę i pytanie: „I to ma być wszystko?”.',
    story: [
      'Tomasz żył w głębokim przekonaniu o Złudzeniu Ostatecznego Celu (Arrival Fallacy). Mówił sobie: „Gdy tylko zostanę dyrektorem i kupię dom w Wilanowie, będę w pełni szczęśliwy i spokojny”.',
      'Przez dekadę poświęcał zdrowie, snu i relacje, by dotrzeć do tego punktu. Każdą niedogodność tłumaczył słowami: „To tylko teraz, na mecie będzie wspaniale”.',
      'Kiedy został oficjalnie mianowany dyrektorem i odebrał kluczyki do służbowego SUV-a, odczuł wybuch euforii. Jednak już po 10 dniach poziom jego szczęścia powrócił do punktu bazowego (Adaptacja Hedoniczna).',
      'Zamiast oczekiwanego spokoju pojawiły się nowe stresy, presja wyników i dojmująca pustka. Tomasz zrozumiał, że uzależnił swoje życie od punktu końcowego, ignorując fakt, że życie dzieje się w trakcie podróży.'
    ],
    dialogue: [
      { speaker: 'Tomasz', text: 'Mam wszystko, o czym marzyłem przez 10 lat... Dlaczego czuję się tak potwornie pusty?', subtext: 'Konfrontacja ze złudzeniem ostatecznego celu.' },
      { speaker: 'Mentor', text: 'Tomek, cel daje kierunek, ale nie daje szczęścia. Szczęście było w tym, kim stawałeś się po drodze.', subtext: 'Wyjaśnienie różnicy między mecenatem a procesem.' }
    ],
    decisionTaken: 'Tomasz zmienił podejście do pracy: przestał traktować stanowisko jako mecenat i skupił się na budowaniu wartościowych relacji z zespołem i pasji trenerskiej.',
    whatProtagonistSaw: 'Stanowisko dyrektora jako ostateczną przystań szczęścia i ulgi.',
    whatWasMissed: 'Fakt, że umysł ludzki szybko przyzwyczaja się do nowego statusu, a prawdziwy dobrostan daje proces działania zgodnego z wartościami.',
    psychologicalAnalysis: {
      coreMechanism: 'Złudzenie Ostatecznego Celu (Arrival Fallacy) oraz Adaptacja Hedoniczna.',
      cognitiveBiases: [
        { name: 'Afektywne błędne przewidywanie', description: 'Przeliczanie stopnia i czasu trwania szczęścia po osiągnięciu celu.', impact: 'Głębokie rozczarowanie na mecie.' }
      ],
      defenseMechanisms: [
        { name: 'Przesunięcie poprzeczki', explanation: 'Wyznaczanie kolejnego, jeszcze większego celu, byle nie poczuć pustki.' }
      ],
      emotionalDynamic: 'Krótka euforia przechodząca w egzystencjalny zawód i poszukiwanie sensu.'
    },
    decisionProcessAnalysis: {
      trigger: 'Osiągnięcie celu i powrót do punktu bazowego samopoczucia.',
      attentionFocus: 'Obecna pustka mimo realizacji marzeń.',
      interpretation: '„Cele nie dają trwałego szczęścia, muszę odnaleźć sens w codziennym procesie”.',
      emotion: 'Rozczarowanie, refleksja, głęboki spokój po odpuszczeniu gonitwy.',
      impulse: 'Zmiana stylu zarządzania i redukcja presji.',
      action: 'Skupienie się na rozwoju ludzi i własnych pasjach.',
      consequence: 'Odzyskanie radości z codziennej pracy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (NAcc)', role: 'Gwałtowny spadek dopaminy po konsumpcji nagrody', activationState: 'Spadek aktywacji po osiągnięciu celu' },
        { region: 'Korowy układ serotoninergiczny', role: 'Stabilny poziom zadowolenia z procesu', activationState: 'Wzrost przy działaniu zgodnym z wartościami' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Dopamina uwalnia się w trakcie polowania, a nie u celu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Moment osiągnięcia celu daje strzał dopaminy, który gaśnie po kilku dniach.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kulturowy mit „I żyć będą długo i szczęśliwie”', description: 'Promowanie przekazu, że meta zmienia wszystko na zawsze.', vulnerabilityExploited: 'Niecierpliwość i tęsknota za ulgą.' }
      ],
      counterMeasures: [
        { step: '1. Orientacja na Proces (Systems vs Goals)', script: 'Zakochaj się w codziennym systemie działania, a cele traktuj tylko jako drogowskazy.', rationale: 'Chroni przed pułapką Arrival Fallacy.' }
      ]
    },
    alternativePath: 'Gdyby Tomasz nie zrozumiał tej lekcji, rzuciłby się w kolejny wyścig po jeszcze wyższe stanowisko, wykańczając swój organizm.',
    readerQuestion: 'Kiedy ostatnio osiągnąłeś długo wyczekiwany cel i jak szybko Twoje samopoczucie wróciło do normy?',
    keyTakeaway: 'Osiągnięcie celu przynosi ulgę na chwilę. Prawdziwe, trwałe zadowolenie daje życie zgodne z wartościami każdego dnia.'
  },
  {
    id: 'studium-20-4-konflikt-krotki-dlugi-termin',
    title: 'Gdy impuls wygrywa ze zdrowiem: Przypadek Michała',
    subtitle: 'Nawyki żywieniowe, Dyskonto Hiperboliczne i budowanie intencji implementacyjnych',
    protagonist: 'Michał, 36 lat, programista',
    context: 'Michał miał zdiagnozowane stłuszczenie wątroby i stany przedcukrzycowe. Mimo jasnych instrukcji od lekarza, co wieczór ulegał pokusie zamawiania fast-foodów i słodyczy.',
    story: [
      'Michał deklarował, że jego główną wartością jest Zdrowie i chęć zobaczenia, jak dorastają jego dzieci. Rozumiał zagrożenie biologiczne.',
      'Jednak o godzinie 21:00, po 9 godzinach kodowania, jego kora przedczołowa była wyczerpana metabolicznie. Wtedy do głosu dochodziło Dyskonto Hiperboliczne.',
      'Dla jego układu limbicznego natychmiastowa ulga i wyrzut dopaminy z tłustego jedzenia tu i teraz wygrywały z wizją zdrowia za 15 lat. Michał mówił sobie: „Tylko dzisiaj zamówię pizzę, od jutra przechodzę na dietę”.',
      'Dopiero zmiana architektury środowiska (brak aplikacji do zamawiania jedzenia w telefonie, przygotowane zdrowe posiłki w lodówce) oraz wdrożenie Intencji Implementacyjnych („JEŚLI poczuję głód po 20:00, TO wypiję szklankę wody i zjem jabłko”) pozwoliły mu pokonać odruch impulsywny.'
    ],
    dialogue: [
      { speaker: 'Żona', text: 'Michał, znowu kurier? Przecież wyniki badań były fatalne!', subtext: 'Przypomnienie o wartości zdrowia i długofalowych konsekwencjach.' },
      { speaker: 'Michał', text: 'Miałem koszmarny dzień w pracy! Muszę coś zjeść, żeby nie zwariować. Od jutra naprawdę zaczynam dietę!', subtext: 'Uleganie natychmiastowej uldze i odsuwanie kosztów na przyszłość.' }
    ],
    decisionTaken: 'Michał usunął aplikacje do dostawy jedzenia i ustalił regułę niejedzenia po godzinie 20:00.',
    whatProtagonistSaw: 'Natychmiastową ulgę emocjonalną i przyjemność z jedzenia w chwile zmęczenia.',
    whatWasMissed: 'Fakt, że każde uleganie impulsowi osłabia wolę i przybliża go do rozwoju pełnoobjawowej cukrzycy.',
    psychologicalAnalysis: {
      coreMechanism: 'Dyskonto Hiperboliczne (Hyperbolic Discounting) i wyczerpanie zasobów samokontroli.',
      cognitiveBiases: [
        { name: 'Racjonalizacja natychmiastowa', description: 'Obiecywanie poprawy „od jutra” celem zmniejszenia poczucia winy dzisiaj.', impact: 'Trwanie w niszczącym nawyku.' }
      ],
      defenseMechanisms: [
        { name: 'Znieczulanie emocjonalne', explanation: 'Używanie jedzenia do regulacji trudnych stanów napięciowych.' }
      ],
      emotionalDynamic: 'Chwilowa ulga przechodząca w poczucie wstydu i wyrzuty sumienia.'
    },
    decisionProcessAnalysis: {
      trigger: 'Zmęczenie po pracy o godzinie 21:00.',
      attentionFocus: 'Smak pizzy i chęć natychmiastowego relaksu.',
      interpretation: '„Zasłużyłem na to, muszę rozładować stres”.',
      emotion: 'Głód dopaminowy, zniecierpliwienie.',
      impulse: 'Kliknięcie w aplikację do dostawy jedzenia.',
      action: 'Zamówienie i zjedzenie pizzy.',
      consequence: 'Spadek poczucia sprawczości, pogorszenie wyników badań i wstyd.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (NAcc)', role: 'Silna aktywacja na widok obrazków jedzenia w aplikacji', activationState: 'Gwałtowny głód dopaminowy' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Spadek kontroli w wyniku wyczerpania glukozy', activationState: 'Osłabienie hamowania' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Spadek poziomu bazowego wywołujący impuls poszukiwania nagrody.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Ikona aplikacji wywołuje natychmiastowy wyrzut dopaminy w NAcc.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Projektowanie aplikacji food-delivery', description: 'Ułatwianie zakupu do jednego kliknięcia celem ominiecia kontroli przedczołowej.', vulnerabilityExploited: 'Zmęczenie wieczorne klientów.' }
      ],
      counterMeasures: [
        { step: '1. Zwiększenie Tarcia Środowiskowego (Friction)', script: 'Usunięcie aplikacji, usunięcie zapamiętanych kart płatniczych.', rationale: 'Wymusza czas na refleksję w dlPFC.' }
      ]
    },
    alternativePath: 'Gdyby Michał zignorował sygnały, za 5 lat musiałby przyjmować insulinę i straciłby sprawność fizyczną.',
    readerQuestion: 'Jaki mały, natychmiastowy impuls regularnie niszczy Twój ważny cel długoterminowy?',
    keyTakeaway: 'Nie walcz z pokusą silną wolą wieczorem. Zaprojektuj środowisko rano tak, by pokusa nie miała dostępu do Twojego mózgu.'
  },
  {
    id: 'studium-20-5-autonomia-vs-konformizm',
    title: 'Pod prąd rodziny: Decyzja Ewy o wyborze studiów artystycznych',
    subtitle: 'Autonomia wartości, odrzucenie presji społecznej i radzenie sobie ze wstydem grupy',
    protagonist: 'Ewa, 19 lat, studentka wzornictwa przemysłowego',
    context: 'Ewa pochodziła z rodziny o wielopokoleniowych tradycjach medycznych. Jej decyzja o rezygnacji ze medycyny na rzecz akademii sztuk pięknych wywołała oskarżenia o „marnowanie talentu i zdradę rodziny”.',
    story: [
      'Dla rodziny Ewy wartość Bezpieczeństwa i Prestiżu Medycznego była nienegocjowalnym fundamentem. Od dziecka przygotowywano ją do zawodu lekarskiego.',
      'Ewa czuła jednak, że jej autentyczną wartością jest Twórczość i Projektowanie. Myśl o spędzeniu życia w szpitalu napawała ją przerażeniem.',
      'Gdy ogłosiła wyniki rekrutacji na ASP, ojciec przestał się do niej odzywać przez 3 miesiące, a matka płakała, mówiąc: „Co my powiemy rodzinie na święta?”. Ewa doświadczyła potężnego naporu presji konformistycznej.',
      'Dzięki wsparciu mentorki Ewa przetrwała ten trudny okres. Po dwóch latach jej sukcesy projektowe i autentyczna radość z życia sprawiły, że rodzice powoli zaakceptowali jej autonomiczną drogę.'
    ],
    dialogue: [
      { speaker: 'Ojciec', text: 'Sztuka? Z czego ty będziesz żyć? Przehandlowałaś pewną przyszłość na mrzonki!', subtext: 'Obrona własnego skryptu bezpieczeństwa i lęk przed opinią otoczenia.' },
      { speaker: 'Ewa', text: 'Tato, szanuję medycynę, ale to nie jest moje życie. Chcę projektować rzeczy, które pomagają ludziom inaczej.', subtext: 'Stawianie autonomicznych granic w zgodzie ze swoimi wartościami.' }
    ],
    decisionTaken: 'Ewa złożyła dokumenty na ASP i zamieszkała w akademiku, finansując studia z pracy dorywczej.',
    whatProtagonistSaw: 'Odrzucenie przez rodzinę, wstyd rodziców i niepewność finansową.',
    whatWasMissed: 'Fakt, że dorosła autonomia wymaga odwagi do przejścia przez czasowy chłód w relacjach z bliskimi.',
    psychologicalAnalysis: {
      coreMechanism: 'Autonomia wartości vs Presja Rodzinna i Konformizm.',
      cognitiveBiases: [
        { name: 'Efekt uległości rodzinnej', description: 'Przekonanie, że spełnianie oczekiwań rodziców jest jedyną drogą do zasłużenia na miłość.', impact: 'Paraliż przed wyborem pasji.' }
      ],
      defenseMechanisms: [
        { name: 'Separacja wartości', explanation: 'Różnicowanie własnych celów od tradycji rodzinnej.' }
      ],
      emotionalDynamic: 'Lęk przed wykluczeniem przechodzący w poczucie ulgi i dumy z własnej drogi.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia wyspa', role: 'Przetwarzanie lęku przed odrzuceniem społecznym', activationState: 'Uspokojenie po podjęciu decyzji' },
        { region: 'Przednia kora obwodu', role: 'Monitorowanie konfliktu wartości', activationState: 'Stopniowy spadek aktywacji' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Wzrost poziomu w odpowiedzi na realizację autentycznej pasji projektowej.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Myśl o rozczarowaniu rodziców wywołuje ból w wyspie.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż emocjonalny wstydem', description: 'Wywieranie presji pytaniami: „Co powiemy rodzinie?”.', vulnerabilityExploited: 'Potrzeba przynależności i aprobaty.' }
      ],
      counterMeasures: [
        { step: '1. Asertywna Różnicowanie Self', script: '„Szanuję wasz wybór, ale to jest moja droga”.', rationale: 'Utrzymuje granicę tożsamościową.' }
      ]
    },
    keyTakeaway: 'Autonomia wymaga odważnego wybierania własnych wartości, nawet jeśli otoczenie nie reaguje entuzjazmem.'
  },
  {
    id: 'studium-20-6-stawianie-granic-pracoholizm',
    title: 'Naukasz Mówienia „NIE”: Jak Katarzyna obroniła swój czas wolny',
    subtitle: 'Stawianie granic w pracy, lęk przed odrzuceniem i odzyskiwanie priorytetów',
    protagonist: 'Katarzyna, 34 lata, senior project manager',
    context: 'Katarzyna była osobą, do której wszyscy w firmie przychodzili z „nagłymi sprawami”. Nie potrafiła odmówić żadnej prośbie, przez co pracowała w weekendy i była na skraju załamania.',
    story: [
      'Katarzyna kierowała się przekonaniem: „Jeśli odmówię pomocy, ludzie uznają, że jestem leniwa, i przestaną mnie lubić”. Jej wartość Pomocniczości została wypaczona w brak granic.',
      'Kiedy otrzymała kolejny projekt z nierealnym terminem do wykonania na niedzielę, poczuła, że jej organizm odmówił posłuszeństwa — pojawiły się zawroty głowy i drżenie rąk.',
      'Przełamała lęk i zastosowała procedurę asertywnej odmowy: „Chętnie wezmę ten projekt, ale wymaga to przesunięcia terminu projektu X na przyszły tydzień. Który temat ma wyższy priorytet?”.',
      'Ku jej zaskoczeniu przełożony nie zwolnił jej, lecz powiedział: „Masz rację, przesuniemy projekt X. Dziękuję, że mówisz o moich zasobach”. Katarzyna odzyskała weekendy i szacunek w zespole.'
    ],
    dialogue: [
      { speaker: 'Przełożony', text: 'Kasia, musisz wziąć jeszcze ten raport dla zarządu na poniedziałek rano.', subtext: 'Presja na przekroczenie granic w warunkach braku zasobów.' },
      { speaker: 'Katarzyna', text: 'Szefie, chętnie go zrobię, ale przy obecnym obciążeniu wymaga to przełożenia projektu Y. Co ma priorytet?', subtext: 'Asertywne postawienie granicy z podaniem opcji wyboru.' }
    ],
    decisionTaken: 'Katarzyna wprowadziła regułę nieodpisywania na maile po 18:00 i asertywnego negocjowania priorytetów.',
    whatProtagonistSaw: 'Zagrożenie odrzuceniem, wizję bycia uznaną za samolubną i lęk przed gniewem szefa.',
    whatWasMissed: 'Fakt, że stawiając jasne granice, uczy innych szacunku do swojego czasu i podnosi swoją profesjonalną wartość.',
    psychologicalAnalysis: {
      coreMechanism: 'Asertywne stawianie granic i osłabianie lęku przed odrzuceniem.',
      cognitiveBiases: [
        { name: 'Błąd przypodobania (People Pleasing)', description: 'Nierealistyczne przekonanie, że odmowa zniszczy relacje zawodowe.', impact: 'Przeładowanie i wypalenie.' }
      ],
      defenseMechanisms: [
        { name: 'Uległość obronna', explanation: 'Zgadzanie się na wszystko z lęku przed konfrontacją.' }
      ],
      emotionalDynamic: 'Przejście od skrajnego wyczerpania i lęku do poczucia ulgi i szacunku dla siebie.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Utrzymanie racjonalnej struktury odmowy', activationState: 'Przejęcie kontroli' },
        { region: 'Ciało migdałowate', role: 'Sygnał zagrożenia oceną', activationState: 'Wygaszenie' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Spadek poziomu stresu po odzyskaniu kontroli nad czasem.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 150 ms', process: 'Prośba o projekt na niedzielę wywołuje odruch ścisku w gardle.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Eksploatacja pomocniczości', description: 'Narzucanie zadań osobom o niskich granicach.', vulnerabilityExploited: 'Lęk przed byciem ocenionym jako niekoleżeński.' }
      ],
      counterMeasures: [
        { step: '1. Pytanie o Priorytety', script: '„Chętnie pomogę, ale z czego mam zrezygnować?”.', rationale: 'Przenosi odpowiedzialność za wybór na zlecającego.' }
      ]
    },
    keyTakeaway: 'Stawiając granice innym, stawiasz fundament pod szacunek do samego siebie.'
  },
  {
    id: 'studium-20-7-reorganizacja-emerytura',
    title: 'Nowy rozdział: Jak Andrzej odnalazł priorytety po przejściu na emeryturę',
    subtitle: 'Reorganizacja priorytetów w nowym etapie życia i odzyskiwanie sensu',
    protagonist: 'Andrzej, 65 lat, był inżynier architektury',
    context: 'Andrzej po przejściu na emeryturę czuł się niepotrzebny i pusty. Dawne priorytety zawodowe przestały istnieć, a nowe jeszcze się nie uformowały.',
    story: [
      'Dla Andrzeja praca była głównym operatorem sensu przez 40 lat. Kiedy przeszedł na emeryturę, odczuł potężną próżnię czasową i tożsamościową.',
      'Przez pierwsze miesiące spędzał dni przed telewizorem, popadając w stan zniechęcenia. Czując, że jego życie traci sterowność, postanowił zrobić audyt wartości na nowy etap życia.',
      'Odkrył, że jego nowymi priorytetami są: Przekazywanie Wiedzy i Troska o Lokalną Społeczność. Zgłosił się jako wolontariusz do uniwersytetu trzeciego wieku i zaczął prowadzić darmowe warsztaty z rysunku dla młodzieży z trudnych domów.',
      'Ta zmiana priorytetów dała mu nową falę energii i sprawiła, że emerytura stała się najbardziej twórczym okresem w jego życiu.'
    ],
    dialogue: [
      { speaker: 'Żona', text: 'Andrzej, zobacz, jak te dzieciaki na ciebie czekają. Znowu masz ten sam błysk w oku co kiedyś.', subtext: 'Zauważenie powrotu sensu i energii po zmianie priorytetów.' },
      { speaker: 'Andrzej', text: 'Wiesz... czuję, że teraz robię coś, co naprawdę ma znaczenie. Nie dla pieniędzy, ale dla nich.', subtext: 'Odkrycie autonomicznych wartości w nowym etapie życia.' }
    ],
    decisionTaken: 'Andrzej przeznaczył 15 godzin tygodniowo na pracę wolontariacką i stworzył międzypokoleniową pracownię rysunku.',
    whatProtagonistSaw: 'Starość jako czas bezczynności i powolnego odchodzenia w niepamięć.',
    whatWasMissed: 'Fakt, że zmiana etapu życia stwarza unikalną szansę na realizację wartości, na które wcześniej brakowało czasu.',
    psychologicalAnalysis: {
      coreMechanism: 'Reorganizacja Priorytetów na nowym etapie życia i Generatywność (Erikson).',
      cognitiveBiases: [
        { name: 'Mityczna sztywność wieku', description: 'Przekonanie, że po zakończeniu kariery zawodowej rola człowieka w świecie się kończy.', impact: 'Początkowy stupor rezygnacyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Przesunięcie sensu', explanation: 'Odnalezienie nowej domeny dla dawnej pasji rysunkowej.' }
      ],
      emotionalDynamic: 'Przejście od pustki i smutku do głębokiej satysfakcji z dzielenia się wiedzą.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące', role: 'Dopaminowy napęd z wolontariatu i pracy z dziećmi', activationState: 'Ponowne wzbudzenie pętli nagrody' },
        { region: 'Domyślna Sieć Neuronalna', role: 'Integracja nowej roli społecznej', activationState: 'Harmonijna praca' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna i Dopamina', roleInScenario: 'Wzrost poczucia więzi społecznej i sensu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Widok uśmiechniętych uczniów wywołuje ciepło i wyciszenie niepokoju.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Emerytalny mit bezczynności', description: 'Spostrzeganie seniorów wyłącznie jako pasywnych konsumentów.', vulnerabilityExploited: 'Lęk przed brakiem przydatności.' }
      ],
      counterMeasures: [
        { step: '1. Audyt Wartości na Nowy Etap', script: 'Przeformułowanie pytań: „Co chcę dać z siebie w tym nowym czasie?”.', rationale: 'Otwiera nowe ścieżki aktywnego działania.' }
      ]
    },
    keyTakeaway: 'Zmieniają się etapy życia, lecz potrzeba sensu i tworzenia dobra pozostaje niezmienna. Przeprojektuj swoje priorytety.'
  }
];

export const selfExercisesChapterTwenty: SelfExercise[] = [
  {
    id: 'cwiczenie-20-1-hierarchia-wartosci',
    title: 'Krystalizator Hierarchii Wartości (Values Hierarchy Matrix)',
    subtitle: 'Wyodrębnienie 5 fundamentalnych kompasów własnego życia',
    objective: 'Wyselekcjonowanie z listy 30 wartości 5 najważniejszych i poukładanie ich w rygorystyczną hierarchię.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Stymulacja przyśrodkowej kory przedczołowej (mPFC) do dokonywania wyborów w oparciu o głęboką samowiedzę.',
    steps: [
      {
        stepNumber: 1,
        title: 'Selekcja wstępna',
        instruction: 'Wybierz z pamięci 10 wartości, które są dla Ciebie ważne (np. Wolność, Zdrowie, Rodzina, Sukces, Prawda, Spokój).',
        promptText: 'Moje 10 wartości:',
        placeholder: 'Rodzina, Wolność, Rozwój, Zdrowie, Uczciwość, Sukces, Bezpieczeństwo...'
      },
      {
        stepNumber: 2,
        title: 'Pojedynek wartości',
        instruction: 'Poddaj wartości konfrontacji dwójkami: Gdybyś musiał wybrać między A a B, co wybierasz?',
        promptText: 'Moje ścisłe TOP 5 w hierarchii:',
        placeholder: '1. Zdrowie. 2. Prawda. 3. Wolność. 4. Rodzina. 5. Rozwój.'
      }
    ],
    reflectionQuestions: [
      'Która z Twoich top 5 wartości jest obecnie najbardziej zaniedbywana w codziennym działaniu?'
    ]
  },
  {
    id: 'cwiczenie-20-2-audyt-kalendarza',
    title: 'Twardy Audyt Kalendarza i Portfela',
    subtitle: 'Zderzenie deklarowanych wartości z rzeczywistym alokowaniem zasobów',
    objective: 'Odkrycie prawdziwych aktywnych wartości na podstawie analizy czasu i wydatków z minionego miesiąca.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Redukcja Błędu Samooceny poprzez konfrontację z twardymi danymi empirycznymi.',
    steps: [
      {
        stepNumber: 1,
        title: 'Analiza czasu',
        instruction: 'Przejrzyj swój kalendarz z minionego tygodnia i oblicz, ile godzin przeznaczyłeś na poszczególne obszary.',
        promptText: 'Bilans godzinowy:',
        placeholder: 'Praca: 55h. Ekran/Social media: 20h. Rodzina: 8h. Zdrowie/Sport: 2h.'
      },
      {
        stepNumber: 2,
        title: 'Wnioski i korekta',
        instruction: 'Zidentyfikuj największą rozbieżność i zaplanuj przeniesienie 3 godzin z obszaru jałowego na obszar wartościowy.',
        promptText: 'Mój plan korekty zasobów:',
        placeholder: 'Ograniczę social media o 1h dziennie i przeznaczę ten czas na wspólne spacery z dziećmi.'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie zobaczyć czarno na białym, na co naprawdę spalamy swoje życie?'
    ]
  },
  {
    id: 'cwiczenie-20-3-cwiczenie-nekrolog',
    title: 'Ćwiczenie Perspektywy Ostatecznej (Mowa Pogrzebowa)',
    subtitle: 'Oczyszczanie priorytetów z szumu społecznego aprobaty',
    objective: 'Odkrycie, co naprawdę chciałbyś po sobie zostawić i jakim człowiekiem zostać zapamiętanym.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Deaktywacja bieżących dopaminowych pokus na rzecz głębokiej integracji narracyjnej w mPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Mowa najbliższej osoby',
        instruction: 'Napisz 3 zdania, które chciałbyś, aby Twoje dziecko lub partner wypowiedział o Tobie na Twoim pogrzebie.',
        promptText: 'Co chciałbym usłyszeć:',
        placeholder: '„Był człowiekiem prawym, obecnym i dającym poczucie bezpieczeństwa. Zawsze można było na niego liczyć.”'
      },
      {
        stepNumber: 2,
        title: 'Zderzenie z dzisiejszym dniem',
        instruction: 'Napisz, co musisz zmienić w swoim dzisiejszym zachowaniu, by ta mowa stała się prawdą.',
        promptText: 'Wymagana zmiana dziś:',
        placeholder: 'Muszę przestać krzyczeć ze zmęczenia i odłożyć telefon po powrocie do domu.'
      }
    ],
    reflectionQuestions: [
      'Co z rzeczy, którymi zamartwiasz się dzisiaj, będzie miało jakiekolwiek znaczenie za 30 lat?'
    ]
  },
  {
    id: 'cwiczenie-20-4-matryca-eisenhowera',
    title: 'Praktyczna Matryca Eisenhowera w Zapobieganiu Pożarom',
    subtitle: 'Ochrona czasu na sprawy Ważne, ale Niepilne (Ćwiartka II)',
    objective: 'Kategoryzacja zadań i wyznaczenie stałych bloków czasowych na realizację wartości długoterminowych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Wzmacnianie kontroli wykonawczej w dlPFC przeciwko impulsywnemu reagowaniu na bodźce pilne.',
    steps: [
      {
        stepNumber: 1,
        title: 'Lista spraw bieżących',
        instruction: 'Wypisz 8 zadań ze swojej dzisiejszej listy i przydziel je do 4 ćwiartek.',
        promptText: 'Moje zadania w ćwiartkach:',
        placeholder: 'I (Pilne/Ważne): awaria. II (Niepilne/Ważne): trening, strategia. III (Pilne/Nieważne): maile. IV: TV.'
      },
      {
        stepNumber: 2,
        title: 'Blokowanie czasu na Ćwiartkę II',
        instruction: 'Wpisz do kalendarza na ten tydzień 2 nienegocjowalne bloki po 90 minut na zadania z Ćwiartki II.',
        promptText: 'Moje bloki święte:',
        placeholder: 'Wtorek i Czwartek 8:00 - 9:30: Praca nad strategią rozwoju firmy (telefon wyłączony).'
      }
    ],
    reflectionQuestions: [
      'Dlaczego odsuwanie spraw Ważnych ale Niepilnych prowadzi do późniejszych katastrof i pożarów?'
    ]
  },
  {
    id: 'cwiczenie-20-5-intencje-implementacyjne',
    title: 'Kreator Intencji Implementacyjnych (Reguła JEŚLI-TO)',
    subtitle: 'Automatyzacja zachowań zgodnych z wartościami w sytuacjach trudnych',
    objective: 'Napisanie precyzyjnych skryptów zachowania na wypadek wystąpienia pokusy lub oporu.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Tworzenie gotowych pętli neuronalnych w korze przedczołowej omitujących konieczność wysiłkowej decyzji w stresie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zdefiniowanie wyzwalacza i akcji',
        instruction: 'Napisz 3 reguły w formacie: „JEŚLI [sytuacja pokusy], TO [akcja zgodna z wartością]”.',
        promptText: 'Moje reguły JEŚLI-TO:',
        placeholder: 'JEŚLI poczuję ochotę na słodycze o 21:00, TO wypiję szklankę wody i zrobię 10 pompek.'
      }
    ],
    reflectionQuestions: [
      'O ile łatwiej podejmuje się decyzje, gdy plan reakcji został przygotowany wcześniej w stanie spokoju?'
    ]
  },
  {
    id: 'cwiczenie-20-6-stawianie-granic',
    title: 'Trening Asertywnego Stawiania Granic w Ochronie Wartości',
    subtitle: 'Nauka mówienia NIE prośbom zderzającym się z własnymi priorytetami',
    objective: 'Sformułowanie i przećwiczenie formuły asertywnej odmowy bez wpadania w poczucie winy.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Wyhamowanie reakcji uległości (Fawn Response) poprzez wsparcie racjonalne z dlPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Scenariusz naruszenia granicy',
        instruction: 'Zapisz sytuację, w której ktoś nakłada na Ciebie zadanie naruszające Twój czas prywatny.',
        promptText: 'Sytuacja trudna:',
        placeholder: 'Prośba o podjęcie dodatkowego dyżuru w weekend...'
      },
      {
        stepNumber: 2,
        title: 'Formuła odmowy asertywnej',
        instruction: 'Napisz zdanie: „Doceniam... Jednak nie mogę... ponieważ moje priorytety... proponuję...”',
        promptText: 'Moja odmowa:',
        placeholder: 'Doceniam zaufanie, jednak nie wezmę tego dyżuru, gdyż ten weekend rezerwuję dla rodziny. Proponuję zamianę na wtorek.'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie obronić swój czas bez uciekania się do kłamstw czy wymówek zdrowotnych?'
    ]
  },
  {
    id: 'cwiczenie-20-7-reorganizacja-priorytetow',
    title: 'Plan Reorganizacji Priorytetów na Nowy Etap Życia',
    subtitle: 'Świadome pożegnanie starych celów i powitanie nowych zadań rozwojowych',
    objective: 'Uporządkowanie celów życiowych w zgodzie z aktualnym wiekiem, stanem zdrowia i rolą społeczną.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Reorganizacja schematów tożsamościowych w kory przedczołowej wspierająca adaptację.',
    steps: [
      {
        stepNumber: 1,
        title: 'Pożegnanie starego celu',
        instruction: 'Zapisz cel z przeszłości, który przestał być aktualny, i świadomie z niego zrezygnuj.',
        promptText: 'Odrzucana presja z przeszłości:',
        placeholder: 'Chęć udowodnienia dawnej grupie ze studiów, że zarobię pierwszy milion przed 35-tką.'
      },
      {
        stepNumber: 2,
        title: 'Powitanie nowego priorytetu',
        instruction: 'Napisz, co staje się Twoim głównym drogowskazem na najbliższe 3 lata.',
        promptText: 'Mój aktualny priorytet:',
        placeholder: 'Budowanie trwałego zdrowia, spokoju wewnętrznego i głębokiej relacji z partnerem.'
      }
    ],
    reflectionQuestions: [
      'O ile lżejszy się stajesz, gdy zrzucasz z barków realizację nieaktualnych celów z młodości?'
    ]
  },
  {id:"deep-20-ex-a",title:"Analiza przypadku krok po kroku",subtitle:"Od automatycznej oceny do sprawdzalnej hipotezy",objective:"Nauczyć się oddzielać dane od interpretacji i planować następny krok.",durationMinutes:18,neuroScientificFoundation:"Ćwiczenie rozwija metapoznawcze monitorowanie własnych ocen; nie zakłada jednego mechanizmu neuronalnego.",steps:[{stepNumber:1,title:"Zapisz konkretną sytuację.",instruction:"Zapisz konkretną sytuację.",promptText:"Co dokładnie się wydarzyło?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:2,title:"Oddziel obserwowalne fakty od własnego wniosku.",instruction:"Oddziel obserwowalne fakty od własnego wniosku.",promptText:"Co dopowiedziałem?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:3,title:"Wypisz dwa alternatywne wyjaśnienia.",instruction:"Wypisz dwa alternatywne wyjaśnienia.",promptText:"Co jeszcze może być prawdą?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:4,title:"Zaplanuj mały test lub działanie.",instruction:"Zaplanuj mały test lub działanie.",promptText:"Co mogę sprawdzić?",placeholder:"Zapisz odpowiedź tutaj."}],reflectionQuestions:["Co było faktem?","Który wniosek był najbardziej niepewny?","Jak zmienił się plan działania?"]},
  {id:"deep-20-ex-b",title:"Eksperyment z własnym opisem",subtitle:"Sprawdź, czy opis siebie przewiduje zachowanie",objective:"Porównać etykietę lub przekonanie z rzeczywistymi danymi z kilku sytuacji.",durationMinutes:20,neuroScientificFoundation:"Ćwiczenie wykorzystuje obserwację zachowania i aktualizację modelu siebie na podstawie powtarzających się danych.",steps:[{stepNumber:1,title:"Wybierz jedno zdanie o sobie.",instruction:"Wybierz jedno zdanie o sobie.",promptText:"Jak brzmi mój obecny opis?",placeholder:"Zapisz obserwacje."},{stepNumber:2,title:"Przez tydzień zbieraj konkretne przykłady za i przeciw.",instruction:"Przez tydzień zbieraj konkretne przykłady za i przeciw.",promptText:"Jakie mam dane?",placeholder:"Zapisz obserwacje."},{stepNumber:3,title:"Zaznacz warunki, w których opis działa.",instruction:"Zaznacz warunki, w których opis działa.",promptText:"Kiedy opis jest mniej trafny?",placeholder:"Zapisz obserwacje."},{stepNumber:4,title:"Przepisz zdanie tak, aby uwzględniało kontekst.",instruction:"Przepisz zdanie tak, aby uwzględniało kontekst.",promptText:"Jak brzmi bardziej precyzyjna wersja?",placeholder:"Zapisz obserwacje."}],reflectionQuestions:["Czy etykieta była zbyt globalna?","Jakie warunki miały znaczenie?","Co chcę sprawdzić ponownie?"]},
];

export const chapterTwenty: Chapter = {
  number: 20,
  volume: 3,
  volumeChapterNumber: 4,
  title: 'Rozdział 4: Wartości, Potrzeby i Priorytety',
  subtitle: 'Architektura kompasu moralnego, motywacja autonomiczna, rozwiazywanie konfliktów wartości i sztuka operacyjnej priorytetyzacji w życiu',
  leadParagraph: 'Życie bez jasnej hierarchii wartości przypomina nawigowanie statkiem po wzburzonym oceanie bez kompasu. Każda fala społecznej presji, mody czy chwilowego impulsu przesuwa nas w losowym kierunku. Wartości nie są abstrakcyjnymi hasłami z podręczników etyki — są operacyjnymi kryteriami wyboru, które decydują o tym, na co przeznaczamy nasz czas, energię i finanse. Zrozumienie różnicy między wartościami a celami, rozbrojenie konfliktów między wolnością a bezpieczeństwem oraz nauka przekładania wartości na codzienne nawyki stanowią fundament prawdziwej autonomii osobistej.',
  totalEstimatedPages: 58,
  sections: [
    {
      id: 'sec-20-1',
      pageNumber: 1,
      sectionNumber: '20.1',
      title: 'Wartości vs Cele vs Potrzeby vs Preferencje: Rozdzielczość Pojęciowa',
      category: 'wstep',
      readingTimeMinutes: 9,
      quote: {
        text: 'Kiedy Twoje wartości są dla Ciebie jasne, podejmowanie decyzji staje się proste.',
        author: 'Roy E. Disney'
      },
      paragraphs: [
        'W języku potocznym pojęcia takie jak „wartość”, „cel”, „potrzeba” i „zachcianka” są ze sobą permanentnie mylone. Aby skutecznie kierować własnym życiem, musimy wprowadzić ścisły porządek terminologiczny.',
        'Wartość (Value) to ciągły kierunek działania i sposób bycia (np. „bycie troskliwym rodzicem”). Wartości nie można „odhaczyć” ani osiągnąć raz na zawsze — można nią żyć w każdej minucie. Cel (Goal) to konkretny, weryfikowalny punkt w czasie (np. „przeczytać dzieciom książkę dzisiaj o 19:00”). Cel można osiągnąć i zamknąć.',
        'Potrzeba (Need) to biologiczny lub psychiczny stan braku wymagający zaspokojenia (np. sen, bezpieczeństwo, więź). Preferencja to subiektywny wybór formy (np. „wolę kawę od herbaty”).',
        'Gdy pomylisz cel z wartością, wpadasz w pułapkę: po osiągnięciu celu pojawia się pustka, gdyż cel się skończył, a wartość wymaga ciągłego zasilania.'
      ]
    },
    {
      id: 'sec-20-2',
      pageNumber: 4,
      sectionNumber: '20.2',
      title: 'Natura Wartości: Kompas vs Przystań',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Wartości działają jak kompas wyznaczający północ. Kompas nie jest miejscem, do którego dopływasz — jest narzędziem, które pozwala płynąć we właściwym kierunku niezależnie od pogody.',
        'Osoba, dla której wartością jest Rozwój, nie „kończy rozwoju” po uzyskaniu dyplomu. Dyplom był tylko jednym z przystani na drodze wyznaczonej przez kompas.',
        'Gdy kierujesz się wartościami, każde działanie podjęte w zgodzie z nimi przynosi natychmiastowe poczucie spójności i godności.'
      ]
    },
    {
      id: 'sec-20-3',
      pageNumber: 7,
      sectionNumber: '20.3',
      title: 'Teoria Samostanowienia SDT: Trzy Filarowe Potrzeby Psychiczne',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Deci i Ryan w Teorii Samostanowienia (SDT) udowodnili, że motywacja autonomiczna kwitnie tylko wtedy, gdy środowisko zaspokaja 3 uniwersalne potrzeby psychiczne:',
        '1. Autonomia (Autonomy) — poczucie, że jesteś autorem swoich wyborów, a nie pionkiem na planszy.',
        '2. Kompetencja (Competence) — poczucie rozwoju, sprawności i robienia postępów w trudnych zadaniach.',
        '3. Powiązanie / Przynależność (Relatedness) — poczucie głębokiej więzi, troski i bycia ważnym dla innych ludzi.',
        'Zignorowanie którejkolwiek z tych potrzeb prowadzi do spłycenia motywacji i poczucia jałowości działania.'
      ]
    },
    {
      id: 'sec-20-4',
      pageNumber: 10,
      sectionNumber: '20.4',
      title: 'Deklarowane Wartości vs Rzeczywiste Zachowanie: Anatomia Rozbieżności',
      category: 'studium-przypadku',
      readingTimeMinutes: 10,
      paragraphs: [
        'Dlaczego ludzie tak często powtarzają: „Rodzina/Zdrowie jest dla mnie najważniejsze”, a jednocześnie spędzają całe życie w biurze i zaniedbują badania lekarskie?',
        'Ta rozbieżność nie wynika ze złej woli czy hipokryzji. Wynika z faktu, że codzienne zachowanie jest stymulowane przez natychmiastowe nagrody dopaminowe i natychmiastowy lęk przed brakiem bezpieczeństwa.',
        'Praca w biurze daje szybki feedback i status. Troska o zdrowie wymaga wysiłku bez natychmiastowego poklasku.',
        'Odzyskanie spójności wymaga zbadania mechanizmów, które odciągają nas od deklarowanych priorytetów.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[0]
    },
    {
      id: 'sec-20-5',
      pageNumber: 13,
      sectionNumber: '20.5',
      title: 'Konflikty Wartości: Wolność vs Bezpieczeństwo, Sukces vs Relacje',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Najtrudniejsze decyzje życiowe nie dotyczą wyboru między Dobrem a Złem. Dotyczą wyboru między dwoma Przeciwstawnymi Dobrami (Konflikt Wartości).',
        'Chęć posiadania pełnej Wolności zderza się z potrzebą Bezpieczeństwa Finansowego. Chęć odniesienia wielkiego Sukcesu zderza się z potrzebą Bliskości w relacjach.',
        'Rozwiązaniem nie jest iluzoryczny brak wyboru, lecz świadoma priorytetyzacja i wypracowanie rozwiązań hybrydowych.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[1]
    },
    {
      id: 'sec-20-6',
      pageNumber: 16,
      sectionNumber: '20.6',
      title: 'Konflikt Krótkiego i Długiego Terminu: Dyskonto Hiperboliczne',
      category: 'studium-przypadku',
      readingTimeMinutes: 10,
      paragraphs: [
        'Układ limbiczny przyznaje priorytet nagrodom natychmiastowym (tłuste jedzenie, serial, zakup), ignorując odroczone koszty zdrowotne czy finansowe.',
        'Dyskonto Hiperboliczne zmusza nas do robienia rzeczy, których żałujemy 2 godziny później.',
        'Przełamanie tego mechanizmu wymaga zmiany architektury środowiska i budowania intencji implementacyjnych.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[3]
    },
    {
      id: 'sec-20-7',
      pageNumber: 19,
      sectionNumber: '20.7',
      title: 'Autonomia Wartości vs Presja Grupy i Introjekcja',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Wielu ludzi realizuje cele, które nie są ich własnymi wartościami, lecz stanowią cichy spadkobierczy nakaz rodziców lub grupy społecznej (Introjekcja).',
        'Odzyskanie autonomii wymaga odwagi do stawienia czoła lękowi przed odrzuceniem i pójścia własną drogą.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[4]
    },
    {
      id: 'sec-20-8',
      pageNumber: 22,
      sectionNumber: '20.8',
      title: 'Potrzeby Natychmiastowe vs Długoterminowe: Hierarchia Maslowa',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Gdy nie są zaspokojone potrzeby podstawowe (sen, bezbolesność, poczucie bezpieczeństwa), kora przedczołowa traci zasoby do realizowania wyższych wartości.',
        'Zadbaj o fizjologiczny fundament, by moc budować trwały dobrostan psychiczny.'
      ]
    },
    {
      id: 'sec-20-9',
      pageNumber: 25,
      sectionNumber: '20.9',
      title: 'Złudzenie Ostatecznego Celu (Arrival Fallacy)',
      category: 'studium-przypadku',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przekonanie, że osiągnięcie konkretnego celu przyniesie wieczne szczęście, jest iluzją poznawczą.',
        'Adaptacja hedoniczna sprowadza poziom samopoczucia do punktu bazowego. Szczęście leży w samym procesie płynięcia.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[2]
    },
    {
      id: 'sec-20-10',
      pageNumber: 28,
      sectionNumber: '20.10',
      title: 'Operacyjna Priorytetyzacja: Matryca Eisenhowera',
      category: 'cwiczenia',
      readingTimeMinutes: 9,
      paragraphs: [
        'Narzędzie Eisenhowera pozwala oddzielić sprawy Pilne od Spraw Ważnych.',
        'Ochrona czasu na sprawy Ważne, ale Niepilne (Ćwiartka II) to klucz do życia zgodnego z wartościami.'
      ],
      exerciseRef: selfExercisesChapterTwenty[3]
    },
    {
      id: 'sec-20-11',
      pageNumber: 31,
      sectionNumber: '20.11',
      title: 'Symulator Konfliktu Wartości i Decyzji Trudnych',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przeanalizujmy interaktywnie zderzenie dwóch ważnych racji w konkretnych scenariuszach. Poniższe narzędzie uczy akceptowania kosztów odrzuconych alternatyw.'
      ]
    },
    {
      id: 'sec-20-12',
      pageNumber: 34,
      sectionNumber: '20.12',
      title: 'Klarowanie Wartości w Terapii ACT',
      category: 'cwiczenia',
      readingTimeMinutes: 9,
      paragraphs: [
        'Klarowanie wartości polega na wyznaczeniu kierunku działania przy jednoczesnej akceptacji obecności lęku i oporu.'
      ],
      exerciseRef: selfExercisesChapterTwenty[0]
    },
    {
      id: 'sec-20-13',
      pageNumber: 37,
      sectionNumber: '20.13',
      title: 'Ewolucja Priorytetów na Różnych Etapach Życia',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Hierarchia priorytetów nie jest zamrożona na zawsze. Zmiana etapu życia wymusza dojrzałą rekonfigurację zasobów.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[6]
    },
    {
      id: 'sec-20-14',
      pageNumber: 40,
      sectionNumber: '20.14',
      title: 'Perspektywa Ostateczna: Ćwiczenie Mowy Pogrzebowej',
      category: 'cwiczenia',
      readingTimeMinutes: 9,
      paragraphs: [
        'Spojrzenie na własne życie z perspektywy jego końca odrzuca powierzchowny szum społeczny i ujawnia to, co naprawdę ważne.'
      ],
      exerciseRef: selfExercisesChapterTwenty[2]
    },
    {
      id: 'sec-20-15',
      pageNumber: 43,
      sectionNumber: '20.15',
      title: 'Stawianie Granic w Ochronie Wartości',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Stawianie granic jest operacyjnym narzędziem obrony własnych priorytetów przed roszczeniami otoczenia.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[5]
    },
    {
      id: 'sec-20-16',
      pageNumber: 46,
      sectionNumber: '20.16',
      title: 'Intencje Implementacyjne: Reguła JEŚLI-TO',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Formuła „Jeżeli X, To Y” automatyzuje trudne decyzje i wspiera wolę w chwili pokusy.'
      ],
      exerciseRef: selfExercisesChapterTwenty[4]
    },
    {
      id: 'sec-20-17',
      pageNumber: 49,
      sectionNumber: '20.17',
      title: '🧠 BŁĘDNA INTUICJA: „Jeśli Wartość Jest Prawdziwie Moja, Nigdy Nie Poczuję Oporu przed Jej Realizacją”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Przekonanie, że przy działaniu w zgodzie z prawdziwymi wartościami praca powinna przychodzić lekko, bezstresowo i z uśmiechem.',
        'CO MOŻE BYĆ BŁĘDNE? Mylein oporu i zmęczenia ze złą wartością. Nawet najpiękniejsza wartość (np. rodzicielstwo, sztuka, nauka) wymaga trudnego, powtarzalnego wysiłku.',
        'CO MÓWI PSYCHOLOGIA? Opór i zmęczenie są naturalną ceną za tworzenie rzeczy wartościowych w świecie realnym.',
        'BARDZIEJ PRECYZYJNY MODEL: Wartość nie usuwa trudu — wartość nadaje trudowi głęboki sens.'
      ]
    },
    {
      id: 'sec-20-18',
      pageNumber: 52,
      sectionNumber: '20.18',
      title: '🔬 CO NADAL NIE JEST JASNE? Uniwersalność Wartości Ludzkich (Schwartz Value Survey)',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'W jakim stopniu struktura wartości opisana przez Schaloma Schwartza jest uniwersalna dla wszystkich kultur, a w jakim stopniu zależy od uwarunkowań społeczno-gospodarczych?',
        'Badania pokazują, że podstawowe osie (Otwartość na zmianę vs Zachowawczość, Przekraczanie Jaźni vs Umacnianie Jaźni) występują we wszystkich społecznościach, lecz ich waga ulega przesunięciom.'
      ]
    },
    {
      id: 'sec-20-19',
      pageNumber: 54,
      sectionNumber: '20.19',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Wyboru Priorytetu',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Wybierz jedną najważniejszą wartość na ten tydzień.',
        '2. Zidentyfikuj jedno zadanie z Ćwiartki II (Ważne, Niepilne), które wspiera tę wartość.',
        '3. Wpisz nienegocjowalny blok czasowy na to zadanie do kalendarza.',
        '4. Wykonaj akcję chroniąc granice.'
      ],
      exerciseRef: selfExercisesChapterTwenty[1]
    },
    {
      id: 'sec-20-20',
      pageNumber: 56,
      sectionNumber: '20.20',
      title: 'Podsumowanie Rozdziału 4 i Most do Rozdziału 21',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Wartości i priorytety wyznaczają kurs naszej życiowej nawigacji. Gdy nauczymy się podejmować decyzje w zgodzie z własnym kompasem, odzyskujemy poczucie głębokiej spójności i sensu.',
        'Ale jak monitorować jakość naszych procesów myślowych i upewnić się, że nie ulegamy nowym iluzjom? Odpowiedzią jest Metapoznanie i Świadomość Siebie. Przejdźmy do zwieńczenia tego bloku — Rozdziału 21.'
      ]
    },
    {
      id: 'sec-20-21',
      pageNumber: 58,
      sectionNumber: '20.21',
      title: 'Egzamin Końcowy Rozdziału 4: Wartości, Potrzeby i Priorytety',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu architektury wartości, teorii SDT, dyskontowania hiperbolicznego i matrycy priorytetyzacji. Poniższy egzamin zawiera pytania analityczne i sytuacyjne.'
      ]
    }
  ]
};

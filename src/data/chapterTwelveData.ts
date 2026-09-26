import { Chapter, ExamQuestion } from '../types/book';

export const chapterTwelveExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach Ann Graybiel w MIT nad zwojami podstawy mózgu (Basal Ganglia), proces powstawania nawyku polega na tzw. „Grupowaniu Behawioralnym” (Chunking). Co dzieje się z aktywnością kory przedczołowej, gdy zachowanie staje się w pełni nawykowe (Sekcja 12.1)?',
    topic: 'Neurobiologia Nawyków: Zwoje Podstawy vs Kora Przedczołowa',
    sectionRef: 'Sekcja 12.1',
    options: [
      { label: 'A', text: 'Kora przedczołowa pracuje na maksymalnych obrotach przez cały czas trwania czynności.', isCorrect: false },
      { label: 'B', text: 'Aktywność kory nowej gwałtownie spada w trakcie trwania rutyny — kora włącza się na początku (przy wskazówce) i na końcu (przy nagrodzie), a cała sekwencja w środku jest wykonywana przez automatyczne zwoje podstawy bez udziału świadomej woli.', isCorrect: true },
      { label: 'C', text: 'Zwoje podstawy mózgu ulegają całkowitemu zanikowi.', isCorrect: false },
      { label: 'D', text: 'Mózg przestaje zużywać glukozę przez kolejne 24 godziny.', isCorrect: false }
    ],
    explanation: 'Ewolucyjnym celem nawyku jest oszczędzanie cennej energii metabolicznej kory przedczołowej. Zwoje podstawy przekształcają skomplikowany ciąg ruchów (np. prowadzenie auta, mycie zębów) w jeden automatyczny pakiet, uwalniając uwagę na inne zadania.',
    keyTakeaway: 'Nawyk to sposób mózgu na uśpienie kory przedczołowej w celu oszczędzania glukozy.'
  },
  {
    id: 2,
    question: 'W „Złotej Regule Zmiany Nawyków” Charlesa Duhigga (Sekcja 12.8 i 12.9), aby trwale wyeliminować destrukcyjny nawyk (np. sięganie po słodycze pod wpływem stresu), należy:',
    topic: 'Złota Reguła Zmiany Nawyku',
    sectionRef: 'Sekcja 12.9',
    options: [
      { label: 'A', text: 'Próbować całkowicie stłumić impuls samą siłą woli i karaniem samego siebie.', isCorrect: false },
      { label: 'B', text: 'Zachować tę samą wskazówkę (stres o 15:00) i tę samą nagrodę biologiczną (ulga emocjonalna, spadek kortyzolu), ale wymienić samą RUTYNĘ w środku (np. zamiast pączka — 5 minut szybkiego spaceru lub rozmowa z przyjacielem).', isCorrect: true },
      { label: 'C', text: 'Przestać jeść jakiekolwiek posiłki do końca tygodnia.', isCorrect: false },
      { label: 'D', text: 'Zmienić nazwisko i wyjechać za granicę.', isCorrect: false }
    ],
    explanation: 'Starych ścieżek neuronalnych nie da się wykasować jak pliku z dysku. Można je jedynie nadpisać nową, bardziej adaptacyjną rutyną, która dostarcza tę samą nagrodę afektywną.',
    keyTakeaway: 'Złego nawyku nie da się zlikwidować — złe zachowanie można jedynie ZASTĄPIĆ innym.'
  },
  {
    id: 3,
    question: 'W koncepcji „Nawyków Opartych na Tożsamości” (Identity-Based Habits) Jamesa Cleara (Sekcja 12.11), najgłębsza i najtrwalsza zmiana zachowania zachodzi wtedy, gdy:',
    topic: 'Tożsamość a Nawyki Behawioralne',
    sectionRef: 'Sekcja 12.11',
    options: [
      { label: 'A', text: 'Skupiasz się wyłącznie na tym, co chcesz OSIĄGNĄĆ (np. „chcę schudnąć 10 kg”).', isCorrect: false },
      { label: 'B', text: 'Skupiasz się na tym, KIM CHCESZ SIĘ STAĆ, a każdy pojedynczy nawyk traktujesz jako głos poparcia oddany na nową tożsamość („Jestem osobą, która dba o swoje ciało i nie opuszcza treningów”).', isCorrect: true },
      { label: 'C', text: 'Płacisz trenerowi personalnemu za krzyczenie na ciebie.', isCorrect: false },
      { label: 'D', text: 'Wytatuujesz sobie listę zadań na przedramieniu.', isCorrect: false }
    ],
    explanation: 'Cele mówią o tym, co chcesz dostać; tożsamość mówi o tym, kim jesteś. Kiedy niepalący odmawia papierosa, mówi: „Dziękuję, nie palę”. Kiedy rzucający mówi: „Dziękuję, próbuję rzucić”, wciąż identyfikuje się jako palacz zmuszający się do abstynencji.',
    keyTakeaway: 'Najwyższą formą nawyku jest tożsamość: nie robisz tego z wysiłku — robisz to, bo taki jesteś.'
  },
  {
    id: 4,
    question: 'Dlaczego w projektowaniu środowiska (Environment Design) usunięcie wskazówki wizualnej jest 10 razy skuteczniejsze niż walka z pokusą (Sekcja 12.7)?',
    topic: 'Architektura Wyboru i Wskazówki Środowiskowe',
    sectionRef: 'Sekcja 12.7',
    options: [
      { label: 'A', text: 'Ludzie z natury są niewidomi na pokusy.', isCorrect: false },
      { label: 'B', text: 'Samokontrola to ograniczony zasób metaboliczny. Jeśli miska z cukierkami stoi na Twoim biurku, Twój mózg musi 50 razy w ciągu dnia powiedzieć „nie”, co wyczerpuje korę nową. Schowanie miski do szafy eliminuje konieczność podejmowania walki.', isCorrect: true },
      { label: 'C', text: 'Słodycze w ciemności tracą kalorie.', isCorrect: false },
      { label: 'D', text: 'Wskazówki środowiskowe działają tylko na małe dzieci.', isCorrect: false }
    ],
    explanation: 'Ludzie o rzekomo „najsilniejszej woli” w rzeczywistości używają jej najrzadziej — ponieważ tak zaprojektowali swoje otoczenie, by nie wystawiać się na pokusy. Dyscyplina to architektura przestrzeni.',
    keyTakeaway: 'Nie bądź bohaterem walczącym z pokusą — bądź mądrym architektem swojego pokoju.'
  },
  {
    id: 5,
    question: 'Na czym polega zasada „Nigdy nie opuszczaj dwóch dni z rzędu” w budowaniu ciągłości nawyku (Sekcja 12.12)?',
    topic: 'Zarządzanie Porażką i Ciągłość Nawykowa',
    sectionRef: 'Sekcja 12.12',
    options: [
      { label: 'A', text: 'Jeśli opuścisz jeden dzień, musisz następnego dnia ćwiczyć przez 8 godzin bez przerwy.', isCorrect: false },
      { label: 'B', text: 'Jeden opuszczony dzień to wypadek losowy; dwa opuszczone dni z rzędu to początek nowego, destrukcyjnego nawyku zaniechania. W gorszy dzień liczy się zrobienie choćby wersji awaryjnej (np. 1 minuta zamiast 30 minut).', isCorrect: true },
      { label: 'C', text: 'Po opuszczeniu jednego dnia cały licznik nawyku zeruje się bezpowrotnie.', isCorrect: false },
      { label: 'D', text: 'Należy zapłacić karę finansową na konto organizacji charytatywnej.', isCorrect: false }
    ],
    explanation: 'Porażka w jeden dzień nie niszczy śladu pamięciowego nawyku. Jednak drugi dzień zaniechania uruchamia nową pętlę bezwładności i potwierdza tożsamość osoby, która „jednak nie dała rady”. Utrzymaj ciągłość za wszelką cenę, nawet symbolicznie.',
    keyTakeaway: 'W zły dzień nie chodzi o jakość treningu — chodzi o ocalenie tożsamości sportowca.'
  }
];

export const chapterTwelve: Chapter = {
  number: 12,
  title: 'Nawyki: Anatomia Bezwysiłkowego Działania',
  subtitle: 'Jak zachowania stają się automatyczne, jak przeprogramować pętlę prążkowia i zamienić walkę w tożsamość',
  leadParagraph: 'Około 40 do 45% wszystkiego, co robisz w ciągu każdego dnia swojego życia — od sposobu, w jaki zakładasz buty, przez sięganie po telefon po przebudzeniu, po trasę do pracy i sposób reagowania na stres — nie jest wynikiem świadomych decyzji kory nowej. To czyste automatyzmy nawykowe zawiadywane przez prastare zwoje podstawy mózgu. Jeśli nie przejmiesz kontroli nad swoimi nawykami, to one przejmą kontrolę nad Twoim losem.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-12-1',
      pageNumber: 550,
      sectionNumber: '12.1',
      title: 'Czym jest nawyk? Zwoje podstawy i grupowanie behawioralne',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Najpierw my tworzymy nasze nawyki, potem nasze nawyki tworzą nas.',
        author: 'John Dryden'
      },
      paragraphs: [
        'Przypomnij sobie swój pierwszy dzień za kierownicą samochodu. Twoja uwaga była napięta do granic możliwości. Musiałeś świadomie myśleć o wszystkim: sprzęgło w podłogę, prawy bieg, lusterko wsteczne, kierunkowskaz, gaz, hamulec ręczny, obserwacja pieszych. Po 30 minutach jazdy po mieście czułeś się tak wyczerpany, jakbyś napisał egzamin z fizyki kwantowej. Dlaczego? Ponieważ każdy ten mikroruch angażował zasoby kory przedczołowej.',
        'A teraz pomyśl, jak prowadzisz auto dzisiaj, po dziesięciu latach. Wsiadasz, odpalasz silnik, rozmawiasz z pasażerem, słuchasz wiadomości radiowych i nagle orientujesz się, że przejechałeś 15 kilometrów przez zakorkowane miasto, nie pamiętając ani jednej zmiany biegów. Jak to możliwe?',
        'W Twoim mózgu zaszło zjawisko Chunkingu (Grupowania Behawioralnego). W laboratorium MIT prof. Ann Graybiel odkryła, że gdy zachowanie jest powtarzane w stałym kontekście, zwoje podstawy mózgu (Basal Ganglia) kodują całą tę sekwencję w jeden automatyczny plik wykonywalny. Kora przedczołowa idzie spać, a ciało działa samo.'
      ]
    },
    {
      id: 'sec-12-2',
      pageNumber: 554,
      sectionNumber: '12.2',
      title: 'Wskazówka: Iskra w zapalniku nawyku',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Żaden nawyk nie odpala się w próżni. Każda pętla automatyzmu potrzebuje Wskazówki (Cue) — bodźca sensorycznego, który informuje zwoje podstawy: „Rozpocznij program numer 4”.',
        'Istnieje pięć uniwersalnych kategorii wskazówek nawykowych:',
        '1. Czas: Godzina 15:00 (mózg zaczyna szukać kawy i czegoś słodkiego).',
        '2. Miejsce: Wejście do sypialni (odruchowe sięgnięcie po telefon i położenie się do łóżka).',
        '3. Stan emocjonalny: Nuda, lęk, frustracja po trudnym telefonie (odruchowe otwarcie lodówki lub Facebooka).',
        '4. Inni ludzie: Spotkanie z konkretnym znajomym (odruchowe zapalenie papierosa).',
        '5. Poprzedzające działanie: Wyjście spod prysznica (odruchowe zaparzenie herbaty).',
        'Jeśli nie zidentyfikujesz precyzyjnie wskazówki, która uruchamia Twoje niechciane zachowanie, próba jego zmiany za pomocą samej siły woli jest skazana na porażkę.'
      ]
    },
    {
      id: 'sec-12-3',
      pageNumber: 558,
      sectionNumber: '12.3',
      title: 'Rutyna: Automatyczny skrypt działania',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Rutyna to samo zachowanie — to, co faktycznie robisz w odpowiedzi na wskazówkę. Może mieć charakter fizyczny (zjedzenie batona, obgryzanie paznokci), mentalny (katastrofizowanie, wchodzenie w spiralę samokrytyki) lub emocjonalny (wybuch gniewu w odpowiedzi na krytykę).',
        'Co fascynujące, w trakcie wykonywania utrwalonej rutyny poziom świadomości jest minimalny. Gdyby ktoś zapytał Cię w trakcie scrollowania rolek na Instagramie: „Dlaczego to robisz?”, Twoja odpowiedź byłaby pusta, ponieważ decyzja została podjęta na poziomie podkorowym bez udziału kory nowej.'
      ]
    },
    {
      id: 'sec-12-4',
      pageNumber: 562,
      sectionNumber: '12.4',
      title: 'Nagroda: Paliwo utrwalające ślad pamięciowy',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Dlaczego mózg zapamiętuje jedne rutyny, a inne odrzuca? Odpowiedzią jest Nagroda (Reward). Nagroda mówi zwojom podstawy: „To było świetne! Zapamiętaj tę sekwencję na przyszłość”.',
        'Wielkim błędem jest jednak mylenie nagrody pozornej z nagrodą rzeczywistą. Kiedy o 16:00 w biurze idziesz do kuchni po drożdżówkę, co jest Twoją prawdziwą biologiczną nagrodą? Czy naprawdę Twój żołądek umiera z głodu? Najczęściej nie! Nagrodą może być:',
        '- Chwilowa ulga od nudnego arkusza kalkulacyjnego (rozproszenie uwagi).',
        '- Pięć minut plotek z koleżanką przy ekspresie (potrzeba więzi społecznej).',
        '- Zastrzyk dopaminowy z cukru prostego (znieczulenie zmęczenia).',
        'Dopóki nie odkryjesz, JAKĄ PRAWDZIWĄ POTRZEBĘ afektywną zaspokaja Twój nawyk, nigdy go nie zmienisz.'
      ]
    },
    {
      id: 'sec-12-5',
      pageNumber: 566,
      sectionNumber: '12.5',
      title: 'Pętla zachowania: Złoty Trójkąt Charlesa Duhigga',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Charles Duhigg w bestsellerze „Siła nawyku” połączył te elementy w model Pętli Nawyku (The Habit Loop): Wskazówka → Rutyna → Nagroda.',
        'Z czasem w mózgu zachodzi zjawisko Neuroplastyczności (Tom I, Rozdział 1). Połączenia synaptyczne między wskazówką a nagrodą ulegają zmielinizowaniu — powstaje trwała autostrada neuronalna. Wskazówka zaczyna wywoływać Pragnienie (Craving) nagrody ZANIM jeszcze wykonasz rutynę.',
        'To pragnienie jest biologicznym motorem uzależnienia. Kiedy słyszysz dźwięk powiadomienia, Twoje prążkowie już domaga się dopaminy. Jeśli nie spojrzysz w telefon, poziom napięcia rośnie do momentu, w którym ulegasz, byle tylko przywrócić homeostazę.'
      ]
    },
    {
      id: 'sec-12-6',
      pageNumber: 570,
      sectionNumber: '12.6',
      title: 'Nawyki cyfrowe: Gdy kieszeń dyktuje zachowanie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Smartfon to najbardziej wyrafinowana maszyna do wytwarzania nawyków w historii ludzkości. Nir Eyal w książce „Hooked” opisał model projektowania produktów uzależniających: Zewnętrzny wyzwalacz (powiadomienie) zamienia się w wewnętrzny wyzwalacz (poczucie samotności, nuda, niepewność).',
        'Zmienna Nagroda (Variable Reward): Podobnie jak w kasynie przy jednorękim bandycie, za każdym razem, gdy odświeżasz feed social mediów, nie wiesz, co zobaczysz. Raz to nudna reklama (brak nagrody), innym razem szokujący news lub setka lajków pod Twoim zdjęciem (wielka nagroda). Ta nieprzewidywalność powoduje gigantyczny wyrzut dopaminy w prążkowiu.',
        'Inwestycja: Każdy Twój komentarz, dodany post czy lajk sprawia, że algorytm staje się lepiej dopasowany do Twoich słabości, zamykając pętlę uzależnienia na amen.'
      ]
    },
    {
      id: 'sec-12-7',
      pageNumber: 574,
      sectionNumber: '12.7',
      title: 'Projektowanie środowiska: Architektura przestrzeni zamiast silnej woli',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy psycholog Wendy Wood badała studentów osiągających najwyższe wyniki akademickie, odkryła zdumiewający fakt: studenci ci nie mieli wcale większej „silnej woli” w testach laboratoryjnych niż ich koledzy o słabych ocenach. Czym więc się różnili?',
        'Różnili się PROJEKTOWANIEM ŚRODOWISKA. Prymusi uczyli się w cichych czytelniach biblioteki uniwersyteckiej, zostawiając telefony w szafkach na parterze. Studenci ze słabymi wynikami próbowali uczyć się w hałaśliwym pokoju akademika, z telefonem leżącym obok klawiatury i otwartym Facebookiem na drugim monitorze.',
        'Walka z pokusą zużywa glukozę w korze przedczołowej (Tom I, Rozdział 1: Budżet Poznawczy). Po 40 minutach walki z pokusą silna wola kapituluje. Prawdziwi mistrzowie nawyków nie walczą z pokusami — oni sprawiają, że pokusy są fizycznie niewidoczne i niedostępne w ich bezpośrednim polu widzenia.'
      ]
    },
    {
      id: 'sec-12-8',
      pageNumber: 578,
      sectionNumber: '12.8',
      title: 'Złe nawyki: Dlaczego ich wykasowanie jest biologicznie niemożliwe',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Neuronauka ma złą wiadomość dla marzycieli: raz wytworzona ścieżka nawykowa w zwojach podstawy mózgu pozostaje tam NA ZAWSZE. Podobnie jak nie da się zapomnieć, jak jeździ się na rowerze, tak samo mózg alkoholika, palacza czy kompulsywnego objadacza pamięta schemat ucieczki w nałóg nawet po 20 latach abstynencji.',
        'Wystarczy silny kryzys emocjonalny, zgon bliskiej osoby lub nagłe załamanie życiowe (odcięcie kory przedczołowej przez kortyzol), by dawna pętla nawykowa obudziła się w ułamku sekundy.',
        'Dlatego próba „zlikwidowania” nawyku poprzez czysty zakaz („Od dziś nigdy więcej nie zapalę / nie tknę cukru”) tworzy potworne napięcie i niemal zawsze kończy się spektakularnym nawrotem zwanym Efektem Przebicia Tamy (The "What-the-Hell" Effect).'
      ]
    },
    {
      id: 'sec-12-9',
      pageNumber: 582,
      sectionNumber: '12.9',
      title: 'Zastępowanie zachowania: Złota reguła neurokognitywna',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Złota Reguła Zmiany Nawyku głosi: Nie możesz zniszczyć pętli, ale możesz podmienić jej środkowy element.',
        'Krok 1: Zachowaj tę samą WSKAZÓWKĘ (np. znużenie i spadek energii o 15:30).',
        'Krok 2: Zidentyfikuj i dostarcz tę samą biologiczną NAGRODĘ (np. pobudzenie krążenia i zmiana bodźców wzrokowych).',
        'Krok 3: Zmień wyłącznie RUTYNĘ. Zamiast iść do automatu po batonika i colę, załóż słuchawki, wyjdź na 6-minutowy energiczny spacer wokół biurowca po świeżym powietrzu i wypij szklankę zimnej wody z cytryną.',
        'Twój mózg otrzymuje dotlenienie, spadek kortyzolu i zastrzyk nowości — czyli dokładnie tę samą ulgę, której szukał w cukrze, bez obciążania trzustki i wyrzutów sumienia.'
      ]
    },
    {
      id: 'sec-12-10',
      pageNumber: 586,
      sectionNumber: '12.10',
      title: 'Metoda Kaizen i mikro-nawyki: Potęga 1%',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Większość ludzi ponosi porażkę, bo próbuje zmienić wszystko naraz: od jutra biegam 10 km, jem wyłącznie jarmuż i czytam 100 stron książek dziennie. Taka rewolucja budzi natychmiastowy alarm w ciele migdałowatym.',
        'Japońska filozofia Kaizen (oraz koncepcja Mini Habits Stephena Guise’a) uczy: Spraw, aby nawyk był tak mały, że nie sposób mu odmówić.',
        '- Zamiast 50 pompek dziennie: JEDNA pompka po wyjściu z łóżka.',
        '- Zamiast godziny czytania: JEDNA strona przed snem.',
        '- Zamiast godzinnego sprzątania: umycie JEDNEGO widelca od razu po obiedzie.',
        'Dlaczego to działa? Ponieważ jedna pompka nie wymaga żadnej motywacji ani silnej woli. Ale zrobienie tej jednej pompki każdego dnia przez 30 dni buduje nawykową tożsamość człowieka, który ćwiczy. A od jednej pompki nieskończenie łatwiej przejść do dziesięciu.'
      ]
    },
    {
      id: 'sec-12-11',
      pageNumber: 590,
      sectionNumber: '12.11',
      title: 'Nawyki i tożsamość: Kim się stajesz z każdym powtórzeniem',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Prawdziwa zmiana nawyków nie jest zmianą behawioralną — jest zmianą ontologiczną. Jest odpowiedzią na pytanie: „Kim jestem?”.',
        'Słowo tożsamość (Identity) pochodzi z łaciny od essentitas (bycie) oraz identidem (raz za razem). Twoja tożsamość to dosłownie to, co robisz raz za razem.',
        'Za każdym razem, gdy ścielesz rano łóżko — oddajesz jeden głos na tożsamość osoby zorganizowanej.',
        'Za każdym razem, gdy odkładasz telefon na czas kolacji z rodziną — oddajesz głos na tożsamość kochającego partnera.',
        'Za każdym razem, gdy siadasz do pisania, nawet gdy nie masz weny — oddajesz głos na tożsamość pisarza.',
        'Nie musisz być idealny. Wystarczy, że w wyborach parlamentarnych swojego życia Twoja nowa tożsamość zdobędzie 51% głosów.'
      ]
    },
    {
      id: 'sec-12-12',
      pageNumber: 594,
      sectionNumber: '12.12',
      title: 'Przerwanie ciągu: Jak wracać po wykolejeniu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Życie to nie laboratorium. Prędzej czy później zachorujesz, wyjedziesz w podróż służbową lub spotka Cię kryzys rodzinny. Twój 30-dniowy ciąg porannych ćwiczeń czy nauki zostanie bezlitośnie przerwany.',
        'W tym momencie amatorzy poddają się całkowicie: „Skoro złamałem dietę i zjadłem kawałek pizzy, to równie dobrze mogę zjeść całą blachę ciasta i zacząć od nowa od pierwszego stycznia”. To katastrofalny błąd uogólnienia.',
        'Zasada mistrzów brzmi: Jeden błąd to wypadek przy pracy; dwa błędy z rzędu to początek nowego nawyku zaniechania. Jeśli opuścisz jeden trening, Twoim absolutnym priorytetem jest pojawienie się na sali nazajutrz — choćby po to, by zrobić 5 przysiadów i wrócić do domu. Ocalenie tożsamości jest ważniejsze niż spalone kalorie.'
      ]
    },
    {
      id: 'sec-12-13',
      pageNumber: 598,
      sectionNumber: '12.13',
      title: 'Wielkie Studium Przypadku: Pętla Nocnego Objadania Magdaleny',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wnikliwa wiwisekcja behawioralna walki z nawykiem nocnego sięgania po słodycze i seriale. Zobaczmy, jak dekonstrukcja wskazówek i architektura środowiska uratowały zdrowie bohaterki.'
      ],
      caseStudyRef: {
        id: 'cs-ch12-nawyk',
        title: 'Lodówka o Północy: Jak Magdalena Przeprogramowała Pętlę Stresu',
        subtitle: 'Od bezsilnej walki z silną wolą do inżynierii przestrzeni i nowej tożsamości',
        protagonist: 'Magdalena, Dyrektor Finansowa (39 lat)',
        context: 'Kuchnia Magdaleny, 23:15, po 12 godzinach zamykania budżetu rocznego.',
        story: [
          'Magdalena była uosobieniem żelaznej dyscypliny w pracy. Zarządzała 30-osobowym zespołem, dowoziła audyty, kontrolowała miliony złotych. Ale w jej życiu istniała czarna dziura, o której nie wiedział nikt: nocne napady jedzenia.',
          'Codziennie około 23:00, gdy mąż i dzieci spali, a ona siadała wreszcie na kanapie z laptopem, w jej głowie budził się potwór. Szła do kuchni jak zahipnotyzowana. Otwierała szafkę: czekolada z orzechami, ciastka, chipsy. Zjadała wszystko w ciągu 15 minut przed telewizorem. Rano budziła się z opuchniętą twarzą, zgagą i rozrywającym poczuciem wstydu.',
          'Przez dwa lata próbowała „wziąć się w garść”. Przyklejała na lodówce kartki: „Nie żryj!”, kupowała kłódki, piła ocet jabłkowy. Nic nie działało. Kora przedczołowa po 12 godzinach pracy z liczbami była dosłownie wyczerpana z glukozy (Tom I, Rozdział 1: Ego Depletion). Zwoje podstawy przejmowały kontrolę bez walki.',
          'Przełom nastąpił po audycie pętli nawyku z psychodietetykiem:',
          'Wskazówka: Cisza w domu po 23:00 + samotność na kanapie + ekran włączonego telewizora.',
          'Rutyna: Spożycie 800 kcal cukru i tłuszczu.',
          'Prawdziwa Nagroda: Nie był to głód fizyczny! Nagrodą była ULGIA OD CIĄGŁEJ ODPOWIEDZIALNOŚCI. Przez te 15 minut Magdalena nie musiała być idealną szefową ani idealną matką; mogła znieczulić przeciążony układ nerwowy.',
          'Wdrożono plan przeprogramowania środowiska:',
          '1. Usunięcie wskazówek: Zakaz kupowania słodyczy do domu. Jeśli mąż chciał ciastka, trzymał je w zamkniętym schowku w garażu.',
          '2. Podmiana rutyny: O 22:45 Magdalena parzyła duży kubek gorącej herbaty z melisą i cynamonem, wchodziła do wanny z olejkami lawendowymi i czytała papierową powieść kryminalną przy świecach.',
          'Mózg otrzymał dokładnie tę samą nagrodę: zmysłowe ciepło, samotność, odcięcie od maili i głęboki relaks — ale bez ani jednego grama rafinowanego cukru. W ciągu pół roku Magdalena schudła 14 kg, odzyskała głęboki sen i spokój sumienia.'
        ],
        decisionTaken: 'Magdalena przestała polegać na sile woli o 23:00 i zainwestowała w architekturę środowiska oraz rytuał kąpieli jako nową rutynę.',
        whatProtagonistSaw: 'Widziała w sobie słabą, beznadziejną kobietę bez kręgosłupa moralnego.',
        whatWasMissed: 'Że jej biologia domagała się odpoczynku i znieczulenia po heroicznym dniu pracy, a jedzenie było jedynym znanym jej narzędziem szybkiej redukcji kortyzolu.',
        psychologicalAnalysis: {
          coreMechanism: 'Przełamanie pętli zwojów podstawy mózgu poprzez podmianę rutyny i usunięcie wskazówek sensorycznych.',
          cognitiveBiases: [
            { name: 'Iluzja siły woli', description: 'Wiara, że zmęczony mózg w nocy potrafi oprzeć się cukrowi stojącemu na wyciągnięcie ręki.', impact: 'Chroniczne pasmo porażek.' }
          ],
          defenseMechanisms: [
            { name: 'Regresja', explanation: 'Sięganie po słodycze jako powrót do dziecięcego poczucia bezpieczeństwa.' }
          ],
          emotionalDynamic: 'Ucieczka przed samotnością i ciężarem dorosłej odpowiedzialności.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Zwoje podstawy (Grzbietowe prążkowie)', role: 'Wykonywanie automatycznego skryptu jedzenia', activationState: 'Bardzo wysoka automatyzacja' },
            { region: 'Brzuszno-boczna kora przedczołowa', role: 'Kontrola impulsów', activationState: 'Całkowity brak paliwa metabolicznego o 23:00' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Spadek poziomu bazowego pod koniec dnia wywoływał głód stymulacji' }
          ],
          biologicalTimeline: [
            { timeMs: '23:00', process: 'Dźwięk cichnącego domu odpala automatyczny krok w stronę szafki.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Czysty Dom (Zero Tarcza)', script: '„Jeśli nie ma tego w szafce, nie muszę z tym walczyć o 23:00”.', rationale: 'Przenosi decyzję na moment zakupów w sklepie w stanie sytości.' }
          ]
        },
        alternativePath: 'Gdyby Magdalena nadal polegała na „silnej woli”, w ciągu kolejnych 5 lat rozwinęłaby insulinooporność i cukrzycę typu 2, tonąc w depresji.',
        readerQuestion: 'Jaki niechciany nawyk powtarzasz wieczorem, gdy Twoja kora przedczołowa nie ma już siły się bronić?',
        keyTakeaway: 'Nie testuj swojej silnej woli w nocy. Zadbaj o swoje środowisko w dzień, kiedy Twój umysł jest wypoczęty.'
      }
    },
    {
      id: 'sec-12-14',
      pageNumber: 602,
      sectionNumber: '12.14',
      title: 'Eksperyment 14-Dniowy, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Zrozumieliśmy biomechanikę nawyków: zwoje podstawy, pętlę wskazówka-rutyna-nagroda, złotą regułę podmiany zachowania oraz potęgę tożsamości. Nawyki to szyny, po których toczy się pociąg Twojego życia.',
        'Jednak na nasze decyzje i nawyki wpływa coś jeszcze — środowisko, w którym jesteśmy zanurzeni przez 16 godzin na dobę: ŚRODOWISKO INFORMACYJNE. Reklamy, clickbaity, algorytmy TikToka, bańki filtrujące i armie dezinformacji.',
        'W Rozdziale 13 przejdziemy do wielkiej bitwy o Twoją uwagę w świecie cyfrowym: zbadamy ekonomię uwagi, zjawisko FOMO, psychologię fake newsów i zbudujemy system higieny informacyjnej.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 12.'
      ]
    }
  ]
};

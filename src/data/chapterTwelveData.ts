import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

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
  },
  {
    id: 6,
    question: 'Czym są „Nawyki Kluczowe” (Keystone Habits) opisane przez Charlesa Duhigga (Sekcja 12.5)?',
    topic: 'Nawyki Kluczowe (Keystone Habits)',
    sectionRef: 'Sekcja 12.5',
    options: [
      { label: 'A', text: 'Nawykami noszenia kluczy zawsze w lewej kieszeni.', isCorrect: false },
      { label: 'B', text: 'Pojedynczymi nawykami, które po wdrożeniu wywołują efekt domina i automatycznie pociągają za sobą pozytywne zmiany w wielu innych sferach życia (np. regularny trening fizyczny poprawia dietę, sen i skupienie w pracy).', isCorrect: true },
      { label: 'C', text: 'Nawykami, które można kupić w sklepie internetowym.', isCorrect: false },
      { label: 'D', text: 'Nawykami występującymi wyłącznie u kadry zarządzającej.', isCorrect: false }
    ],
    explanation: 'Nawyki kluczowe przebudowują strukturę tożsamości. Kiedy zaczynasz regularnie ćwiczyć, Twój mózg zaczyna postrzegać Cię jako osobę dbającą o zdrowie, co bez wysiłku eliminuje śmieciowe jedzenie i alkohol.',
    keyTakeaway: 'Nie musisz zmieniać wszystkiego naraz — znajdź jeden nawyk kluczowy, a reszta ułoży się sama.'
  },
  {
    id: 7,
    question: 'Na czym polega technika „Łączenia Nawyków” (Habit Stacking) opracowana przez BJ Fogga i Jamesa Cleara (Sekcja 12.6)?',
    topic: 'Łączenie Nawyków (Habit Stacking)',
    sectionRef: 'Sekcja 12.6',
    options: [
      { label: 'A', text: 'Wykonywaniu 5 różnych czynności jednocześnie podczas jazdy na rowerze.', isCorrect: false },
      { label: 'B', text: 'Wykorzystaniu istniejącego, silnego nawyku jako kotwicy i wskazówki dla nowego zachowania według wzoru: „Zaraz po [obecny nawyk], zrobię [nowy nawyk]”.', isCorrect: true },
      { label: 'C', text: 'Układaniu książek o samorozwoju w stosy na podłodze.', isCorrect: false },
      { label: 'D', text: 'Piciu trzech kaw pod rząd każdego ranka.', isCorrect: false }
    ],
    explanation: 'Najtrudniejszym elementem nowego nawyku jest pamiętanie o wskazówce. Połączenie nowego zachowania ze starym (np. „Gdy tylko włączę ekspres do kawy rano, zrobię 10 przysiadów”) wykorzystuje gotowe autostrady synaptyczne.',
    keyTakeaway: 'Podepnij nowy nawyk pod stary pociąg, który już pędzi po torach.'
  }
];

export const chapterTwelveCaseStudySmoking: CaseStudy = {
  id: 'cs-ch12-palenie-praca',
  title: 'Dymna Przerwa: Tomasz i Prawdziwa Nagroda Papierosa',
  subtitle: 'Jak 28-letni programista odkrył, że nie jest uzależniony od nikotyny, lecz od ucieczki od biurka',
  protagonist: 'Tomasz, 28 lat, Full-Stack Developer',
  context: 'Biuro firmy informatycznej, 14:30, po 4 godzinach debugowania kodu.',
  story: [
    'Tomasz wypalał paczkę papierosów dziennie. Od dwóch lat próbował rzucić: żuł gumy nikotynowe, naklejał plastry, czytał poradniki. Wszystko kończyło się fiaskiem przy pierwszym trudniejszym sprincie programistycznym.',
    'Pewnego popołudnia, po kolejnej awarii serwera, Tomasz poczuł nieznośne ciśnienie w skroniach. Rzucił myszką, wstał i poszedł na schody ewakuacyjne na dymka. Zapalając papierosa, wziął głęboki oddech, spojrzał na chmury za oknem, a po chwili dołączył do niego kolega z innego zespołu, z którym uciął 5-minutową, pełną śmiechu pogawędkę.',
    'Wracając do biurka, Tomasz poczuł spokój. Po raz pierwszy w życiu zadał sobie precyzyjne pytanie z psychologii behawioralnej: „Jaka była FAKTYCZNA nagroda biologiczna tej czynności?”.',
    'Zrobił audyt pętli: Wskazówką nie był brak nikotyny we krwi — wskazówką było zmęczenie oczu, przebodźcowanie monitorem i samotność. Prawdziwą nagrodą były: głęboki oddech przeponowy na świeżym powietrzu, ruch fizyczny po schodach oraz 5 minut kontaktu społecznego bez ekranu! Papieros był jedynie pretekstem, jedynym społecznie akceptowanym biletem na 10 minut przerwy w korporacji.',
    'Tomasz wdrożył Złotą Regułę Duhigga: zachował wskazówkę (zmęczenie o 14:00) i nagrodę (oddech, schody, pogawędka), ale wyrzucił papierosa. Kupił butelkę z filtrem na wodę. O 14:00 wstawał, schodził na parter do ogrodu biurowego, robił 3 głębokie wdechy i rozmawiał z kimś na patio. W ciągu miesiąca rzucił palenie bez ani jednego objawu głodu nikotynowego.'
  ],
  decisionTaken: 'Tomasz zdekodował ukrytą nagrodę nawyku i zastąpił rytuał tytoniowy spacerem po schodach z butelką wody.',
  whatProtagonistSaw: 'Widział w sobie beznadziejnego nałogowca chemicznie uzależnionego od nikotyny.',
  whatWasMissed: 'Że papieros był jedynie fizycznym nośnikiem dla głębokiej potrzeby regulacji sensorycznej i odpoczynku kory wzrokowej.',
  psychologicalAnalysis: {
    coreMechanism: 'Złota Reguła Zmiany Nawyku (Duhigg) i demaskowanie ukrytej nagrody w pętli zwojów podstawy mózgu.',
    cognitiveBiases: [
      { name: 'Mylenie nośnika z nagrodą', description: 'Przekonanie, że ulgę przynosi dym tytoniowy, podczas gdy przynosił ją głęboki oddech i zmiana otoczenia.', impact: 'Poczucie bezsilności wobec substancji.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja nałogu', explanation: '„Palenie pomaga mi lepiej myśleć przy kodowaniu”.' }
    ],
    emotionalDynamic: 'Ucieczka przed klaustrofobią open space’u i monotonią pracy umysłowej.'
  },
  decisionProcessAnalysis: {
    trigger: 'Błąd w kodzie i zmęczenie kognitywne o 14:30.',
    attentionFocus: 'Napięcie w karku i chęć natychmiastowego odejścia od biurka.',
    interpretation: '„Muszę zapalić, bo inaczej eksploduję”.',
    emotion: 'Frustracja, przebodźcowanie, znużenie.',
    impulse: 'Sięgnąć do kieszeni po zapalniczkę.',
    action: 'Wyjście do ogrodu z butelką wody zamiast paczki papierosów.',
    consequence: 'Trwałe uwolnienie od nałogu, oszczędność 600 zł miesięcznie i lepsza wydolność tlenowa.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Zwoje podstawy (Prążkowie)', role: 'Wyzwalanie automatycznego skryptu sięgania po ogień', activationState: 'Przekierowane na nowy wzorzec sięgania po butelkę' },
      { region: 'Kora wyspy (Insula)', role: 'Rejestracja wewnętrznych sygnałów somatycznych głodu tlenowego', activationState: 'Ukojona przez oddechy przeponowe' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i acetylocholina', roleInScenario: 'Dopamina została powiązana ze spacerem po schodach zamiast z dymem tytoniowym' }
    ],
    biologicalTimeline: [
      { timeMs: '14:30', process: 'Sygnał zmęczenia oczu aktywuje nawykową chęć wstania.' },
      { timeMs: '14:35', process: 'Wdech świeżego powietrza na patio wygasza napięcie w układzie współczulnym.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Dekonstrukcja Nagrody Ukrytej', script: '„Czego tak naprawdę potrzebuje teraz mój organizm? Nikotyny, czy po prostu 5 minut bez patrzenia w ekran?”.', rationale: 'Ujawnia prawdziwą biologiczną potrzebę.' }
    ]
  },
  alternativePath: 'Gdyby Tomasz nadal walczył „silną wolą”, siedząc przy biurku i zakazując sobie palenia, po 3 dniach uległby frustracji i wypalił 5 papierosów pod rząd.',
  readerQuestion: 'Jaki Twój zły nawyk (podjadanie, social media, kawa) jest w rzeczywistości wołaniem Twojego ciała o przerwę i oddech?',
  keyTakeaway: 'Nie walcz z potrzebą stojącą za nawykiem — potrzeba jest zawsze zdrowa. Zmień tylko sposób, w jaki ją zaspokajasz.'
};

export const chapterTwelveCaseStudyPhoneJulia: CaseStudy = {
  id: 'cs-ch12-telefon-julia',
  title: 'Mikro-Nuda i Kciuk: Julia i 150 Sprawdzeń Ekranu',
  subtitle: 'Jak 19-letnia studentka utraciła zdolność czytania książek przez automatyzm sięgania po smartfon',
  protagonist: 'Julia, 19 lat, studentka psychologii',
  context: 'Pokój w mieszkaniu studenckim, próba przeczytania 20 stron podręcznika akademickiego.',
  story: [
    'Julia kochała książki w liceum. Potrafiła spędzić całą niedzielę z powieścią. Jednak na pierwszym roku studiów zauważyła przerażającą zmianę: nie była w stanie przeczytać dwóch stron tekstu bez sięgnięcia po telefon.',
    'Aplikacja monitorująca czas ekranowy pokazała bezlitosną prawdę: Julia odblokowywała telefon średnio 154 razy na dobę! Najbardziej uderzające było to, że w 80% przypadków działo się to całkowicie poza jej świadomością.',
    'Wystarczyła mikrosekunda trudniejszego akapitu, moment zawahania przy pisaniu notatki czy 3 sekundy oczekiwania na zagotowanie wody w czajniku — jej dłoń sama, jak sterowana magnesem, wędrowała do kieszeni, odblokowywała ekran i kciuk otwierał Instagrama lub TikToka.',
    'To był nawyk atomowy. Wskazówką była MIKRO-NUDA lub lekki dyskomfort kognitywny. Rutyną było dotknięcie ekranu. Nagrodą — mikro-zastrzyk dopaminy z nowego powiadomienia.',
    'Julia zastosowała technikę Łączenia Nawyków (Habit Stacking) i Radykalnego Tarcia: kupiła fizyczny budzik, a telefon o 20:00 zamykała w pudełku z zamkiem czasowym (Kitchen Safe) w przedpokoju. Na biurku położyła czysty szkicownik z ołówkiem. Za każdym razem, gdy pojawiał się impuls sięgnięcia po telefon, miała nawyk zrobienia jednej małej bazgroły na kartce. W ciągu 3 tygodni jej zdolność głębokiej koncentracji powróciła.'
  ],
  decisionTaken: 'Julia wprowadziła fizyczną barierę czasową dla telefonu i zastąpiła odruch sięgania po ekran rysowaniem na papierze.',
  whatProtagonistSaw: 'Julia bała się, że rozwija się u niej wczesne ADHD lub uszkodzenie mózgu.',
  whatWasMissed: 'Że jej układ nerwowy został po prostu uwarunkowany instrumentalnie na szukanie ucieczki przed najmniejszym dyskomfortem braku stymulacji.',
  psychologicalAnalysis: {
    coreMechanism: 'Nawyk automatycznego rozpraszania uwagi (Compulsive Checking Loop) połączony z nietolerancją mikronudy.',
    cognitiveBiases: [
      { name: 'Złudzenie wielozadaniowości', description: 'Przekonanie, że „sprawdzenie powiadomienia na 3 sekundy nie przerywa czytania”.', impact: 'Dramatyczny spadek retencji wiedzy (Tom I, Rozdział 3).' }
    ],
    defenseMechanisms: [
      { name: 'Zautomatyzowane wyparcie', explanation: 'Sięganie po telefon bez udziału kory przedczołowej, uniemożliwiające świadomą ocenę.' }
    ],
    emotionalDynamic: 'Lęk przed ciszą i pustką poznawczą zamieniony w nałogowe poszukiwanie bodźców.'
  },
  decisionProcessAnalysis: {
    trigger: 'Trudniejszy fragment tekstu o neurobiologii.',
    attentionFocus: 'Chwilowy spadek dopaminy i mikronuda.',
    interpretation: 'Mózg szuka natychmiastowej stymulacji.',
    emotion: 'Niepokój sensoryczny.',
    impulse: 'Wyciągnąć telefon z kieszeni.',
    action: 'Zablokowanie telefonu w pudełku i szkicowanie ołówkiem.',
    consequence: 'Odzyskanie zdolności czytania monografii przez 60 minut bez przerwy.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowe prążkowie', role: 'Sterowanie zautomatyzowanym ruchem kciuka', activationState: 'Wygaszone po 14 dniach braku dostępności bodźca' },
      { region: 'Sieć wzbudzeń domyślnych (DMN)', role: 'Generowanie własnych myśli i refleksji w ciszy', activationState: 'Udana reaktywacja' }
    ],
    neurotransmitters: [
      { name: 'Dopamina', roleInScenario: 'Przywrócenie wrażliwości receptorów D2 na wolniejsze, bardziej subtelne bodźce książkowe' }
    ],
    biologicalTimeline: [
      { timeMs: 'Dzień 1-3', process: 'Silny niepokój odstawienny (Phantom Vibrations).' },
      { timeMs: 'Dzień 14', process: 'Pojawienie się stanu Flow podczas lektury.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Twarde Pudełko Czasowe (Time-Lock Safe)', script: 'Fizyczne uniemożliwienie sięgnięcia po bodziec przez wyznaczony czas.', rationale: 'Eliminuje konieczność podejmowania walki przez zmęczoną wolę.' }
    ]
  },
  alternativePath: 'Gdyby Julia nie przerwała tego nawyku, oblałaby egzaminy z anatomii i zrezygnowała ze studiów, wierząc, że nie ma zdolności intelektualnych.',
  readerQuestion: 'Co robisz w pierwszych 5 sekundach, gdy musisz na cokolwiek poczekać (winda, kolejka, czerwone światło)?',
  keyTakeaway: 'Zdolność do znoszenia mikronudy bez ucieczki w ekran jest fundamentem wszelkiego głębokiego myślenia i kreatywności.'
};

export const chapterTwelveExerciseLoopDeconstruct: SelfExercise = {
  id: 'ex-ch12-habit-loop-deconstruct',
  title: 'Ćwiczenie 12.1: Dekonstruktor Pętli Nawyku (Duhigg & Graybiel)',
  subtitle: 'Rozłóż swój automatyzm na 3 elementy: Wskazówkę, Rutynę i Prawdziwą Nagrodę',
  objective: 'Zdemaskowanie nieświadomego schematu zwojów podstawy mózgu.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadoma analiza pętli nawyku zmusza korę przedczołową do ponownego przejęcia nadzoru nad zautomatyzowanymi obwodami prążkowia.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj nawyk, który chcesz zbadać',
      instruction: 'Wybierz jedno automatyczne zachowanie, które wykonujesz codziennie, a którego chciałbyś się pozbyć.',
      promptText: 'Co to za zachowanie i w jakich okolicznościach się pojawia?',
      placeholder: 'Wieczorne scrollowanie telefonu w łóżku przed snem przez ponad godzinę...'
    },
    {
      stepNumber: 2,
      title: 'Zidentyfikuj Wskazówkę (Trigger)',
      instruction: 'Wskaż jeden z 5 uniwersalnych wyzwalaczy: Miejsce, Czas, Stan Emocjonalny, Inni Ludzie lub Poprzedzające Działanie.',
      promptText: 'Jaka jest dokładna wskazówka wyzwalająca ten nawyk?',
      placeholder: 'Miejsce: sypialnia, Czas: 22:30, Emocja: zmęczenie i lęk przed jutrzejszym dniem w pracy.'
    },
    {
      stepNumber: 3,
      title: 'Zidentyfikuj Prawdziwą Nagrodę Biologiczną',
      instruction: 'Co tak naprawdę otrzymuje Twój mózg? (Podpowiedź: to rzadko jest sam telefon czy jedzenie — najczęściej to ucieczka od myśli, odpoczynek, poczucie więzi).',
      promptText: 'Jaka jest głęboka nagroda afektywna?',
      placeholder: 'Znieczulenie lęku i odroczenie momentu pójścia spać, by jutrzejszy dzień nie nadszedł zbyt szybko...'
    }
  ],
  reflectionQuestions: [
    'Dlaczego dotychczasowe próby „prostego zakazania sobie tego” kończyły się fiaskiem?',
    'Jak możesz dostarczyć sobie tę samą nagrodę bez niszczenia swojego snu?'
  ]
};

export const chapterTwelveExerciseReplacementLab: SelfExercise = {
  id: 'ex-ch12-habit-replacement-lab',
  title: 'Ćwiczenie 12.2: Laboratorium Złotej Reguły Podmiany Rutyny',
  subtitle: 'Zachowaj starą wskazówkę i nagrodę — wymień jedynie rutynę w środku',
  objective: 'Zaprojektowanie konkretnego zastępnika behawioralnego, który zaspokoi ten sam głód biologiczny.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Nadpisywanie śladu synaptycznego nową rutyną wykorzystuje istniejące połączenia neuronalne wskazówki, drastycznie skracając czas adaptacji.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz starą wskazówkę i nagrodę z ćwiczenia 12.1',
      instruction: 'Wpisz wyzwalacz i pożądaną nagrodę biologiczną.',
      promptText: 'Wskazówka oraz docelowa nagroda:',
      placeholder: 'Wskazówka: Stres po ciężkiej naradzie. Nagroda: 5 minut głębokiego wyciszenia i ulgi.'
    },
    {
      stepNumber: 2,
      title: 'Zaprojektuj Nową, Zdrową Rutynę',
      instruction: 'Jakie konstruktywne zachowanie dostarczy Ci dokładnie tę samą nagrodę w tym samym czasie?',
      promptText: 'Moja nowa rutyna zamienna:',
      placeholder: 'Zamiast słodyczy: 3 minuty ćwiczeń oddechowych 4-7-8 z zamkniętymi oczami i szklanka wody z cytryną.'
    },
    {
      stepNumber: 3,
      title: 'Zdefiniuj Intencję Wdrożeniową (Implementation Intention)',
      instruction: 'Ułóż zdanie w formacie Petera Gollwitzera: „JEŚLI pojawi się [wskazówka], TO zrobię [nowa rutyna]”.',
      promptText: 'Moja formuła JEŚLI-TO:',
      placeholder: '„JEŚLI poczuję po naradzie ochotę na cukier, TO wstanę, założę słuchawki i włączę 3-minutowy utwór relaksacyjny”.'
    }
  ],
  reflectionQuestions: [
    'Czy Twoja nowa rutyna jest wystarczająco łatwa do wykonania w stanie wyczerpania?',
    'W jaki sposób możesz nagrodzić siebie natychmiast po wykonaniu nowej rutyny?'
  ]
};

export const chapterTwelveExerciseIdentityHabits: SelfExercise = {
  id: 'ex-ch12-identity-habits',
  title: 'Ćwiczenie 12.3: Dziennik Tożsamości Behawioralnej (James Clear)',
  subtitle: 'Zamień walkę z zachowaniem w budowanie nowej tożsamości',
  objective: 'Przekształcenie nawyków w głosy poparcia oddawane na człowieka, jakim pragniesz się stać.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Zmiana samopojęcia (Self-concept) angażuje przyśrodkową korę przedczołową (mPFC), integrując nawyk z rdzeniem tożsamości jednostki.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj nową tożsamość w jednym zdaniu',
      instruction: 'Nie pisz, co chcesz osiągnąć. Napisz, KIM jesteś lub kim chcesz być (np. „Jestem pisarzem”, „Jestem osobą dbającą o swoje serce”, „Jestem zorganizowanym profesjonalistą”).',
      promptText: 'Kim jestem?',
      placeholder: 'Jestem osobą, która szanuje swoje ciało i dba o czystość swojego umysłu...'
    },
    {
      stepNumber: 2,
      title: 'Zdefiniuj 3 codzienne mikro-głosy poparcia',
      instruction: 'Wypisz 3 małe, bezdyskusyjne nawyki, które będą niepodważalnym dowodem na to, że jesteś tą osobą.',
      promptText: 'Moje 3 głosy poparcia:',
      placeholder: '1. Każdego ranka piję szklankę wody przed kawą. 2. Ścielę łóżko zaraz po wstaniu. 3. Robię 10 minut spaceru bez telefonu.'
    },
    {
      stepNumber: 3,
      title: 'Pytanie bezpiecznikowe w chwili pokusy',
      instruction: 'Sformułuj pytanie tożsamościowe, które zadasz sobie, gdy pojawi się pokusa powrotu do starego nawyku.',
      promptText: 'Moje pytanie tożsamościowe:',
      placeholder: '„Co w tej sytuacji zrobiłaby osoba, która prawdziwie dba o swoje zdrowie i szanuje swoje słowo?”'
    }
  ],
  reflectionQuestions: [
    'O ile lżej podejmuje się decyzje, gdy nie musisz negocjować z samym sobą, bo „po prostu taki jesteś”?',
    'Kiedy ostatnio poczułeś dumę z małego zwycięstwa, o którym nie wiedział nikt poza Tobą?'
  ]
};

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
      title: 'Pętla nawyku: Wskazówka, rutyna i nagroda',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Charles Duhigg w The Power of Habit zdefiniował uniwersalną architekturę każdego automatyzmu:',
        '1. Wskazówka (Cue): Bodziec ze środowiska (miejsce, czas, emocja, dźwięk), który informuje zwoje podstawy: „Włącz ten konkretny program automatyczny”.',
        '2. Rutyna (Routine): Samo zachowanie fizyczne, emocjonalne lub umysłowe (zjedzenie ciastka, zapalenie papierosa, zrobienie 20 przysiadów).',
        '3. Nagroda (Reward): Zastrzyk neurochemiczny, który informuje mózg: „To zachowanie przyniosło ulgę lub przyjemność — zapamiętaj tę pętlę na przyszłość”.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Poranna filiżanka kawy',
          paragraphs: [
            'Sytuacja i bohater: 35-letni Robert budzi się o 6:30. Nie myśli, nie analizuje. Nogi same niosą go do kuchni. Dłoń sama wciska przycisk ekspresu.',
            'Działający mechanizm: Klasyczna pętla nawykowa. Dźwięk mielenia ziaren i zapach kawy to potężna wskazówka sensoryczna wyzwalająca wyrzut dopaminy jeszcze przed pierwszym łykiem.',
            'Jak rozpoznać w czasie rzeczywistym: Wykonywanie czynności w stanie półsnu bez jakiegokolwiek wysiłku woli.',
            'Możliwa konstruktywna reakcja: Wykorzystanie tego silnego nawyku jako kotwicy dla nowego zachowania (Habit Stacking).',
            'Wniosek dydaktyczny dla czytelnika: Silne nawyki nie wymagają motywacji — działają z siłą grawitacji.'
          ]
        }
      ]
    },
    {
      id: 'sec-12-3',
      pageNumber: 558,
      sectionNumber: '12.3',
      title: 'Pożądanie w mózgu: Jak wskazówka wyzwala głód dopaminowy',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy nawyk jest już ukształtowany, dopamina przestaje uwalniać się przy samej nagrodzie. Uwalnia się już w ułamku sekundy po zarejestrowaniu WSKAZÓWKI!',
        'To właśnie ten przedwczesny wyrzut dopaminy odczuwamy w ciele jako GŁÓD (Craving). Kiedy palacz widzi paczkę papierosów, w jego mózgu pojawia się natychmiastowe ssanie. Jeśli zachowanie nie nastąpi, poziom dopaminy spada poniżej zera, wywołując bolesne napięcie somatyczne.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Sięganie po smartfon na czerwonym świetle',
          paragraphs: [
            'Sytuacja i bohater: Kierowca Michał zatrzymuje się na czerwonym świetle. Światło będzie czerwone przez 20 sekund. Dłoń Michała automatycznie sięga do uchwytu samochodowego po telefon.',
            'Działający mechanizm: Wskazówką jest mikronuda spoczynkowa na skrzyżowaniu. Pragnieniem jest natychmiastowa mikro-stymulacja.',
            'Jak rozpoznać w czasie rzeczywistym: Złapanie się na tym, że trzymasz telefon w ręku, zanim zdążyłeś pomyśleć, po co go wziąłeś.',
            'Możliwa konstruktywna reakcja: Schowanie telefonu do schowka między fotelami na czas jazdy.',
            'Wniosek dydaktyczny dla czytelnika: Zwoje podstawy działają szybciej niż świadomość. Kontroluj przestrzeń, by wyprzedzić automatyzm.'
          ]
        }
      ]
    },
    {
      id: 'sec-12-4',
      pageNumber: 562,
      sectionNumber: '12.4',
      title: 'Dekonstrukcja pętli: Jak namierzyć prawdziwą nagrodę',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Większość ludzi myli zewnętrzną formę zachowania z jego prawdziwą biologiczną nagrodą. Kiedy o 15:00 idziesz do firmowego automatu po batonik, Twoje ciało rzadko potrzebuje cukru. Najczęściej potrzebuje odejścia od biurka, rozprostowania nóg i zresetowania zmęczonej uwagi.',
        'Poniższy warsztat uczy precyzyjnego dekonstruowania pętli nawyku i odkrywania ukrytej nagrody.'
      ],
      exerciseRef: chapterTwelveExerciseLoopDeconstruct
    },
    {
      id: 'sec-12-5',
      pageNumber: 566,
      sectionNumber: '12.5',
      title: 'Nawyki kluczowe (Keystone Habits): Efekt domina w życiu',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Nie wszystkie nawyki są sobie równe. Istnieją tzw. Nawyki Kluczowe (Keystone Habits) — pojedyncze zachowania, które po wdrożeniu wywołują łańcuchową reakcję w całym systemie życiowym.',
        'Gdy ktoś zaczyna regularnie ćwiczyć 3 razy w tygodniu, nagle — bez żadnego dodatkowego wysiłku — zaczyna lepiej jeść, wcześniej kłaść się spać, rzadziej sięgać po alkohol i pracować z większym skupieniem. Studium przypadku poniżej przedstawia demaskowanie ukrytej nagrody w nałogu nikotynowym.'
      ],
      caseStudyRef: chapterTwelveCaseStudySmoking
    },
    {
      id: 'sec-12-6',
      pageNumber: 570,
      sectionNumber: '12.6',
      title: 'Stos nawyków (Habit Stacking): Podłączanie pod istniejącą sieć',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Próba wdrożenia nowego nawyku w próżni („Od jutra będę robić 10 minut rozciągania”) niemal zawsze kończy się porażką, ponieważ Twój mózg nie wie, KIEDY dokładnie ma to zrobić.',
        'Technika Habit Stacking polega na wykorzystaniu silnego, istniejącego nawyku jako naturalnej kotwicy: „Zaraz po tym, jak [obecny nawyk], zrobię [nowy nawyk]”. Nowe zachowanie płynie po torach, które są już wyryte w zwojach podstawy mózgu.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Łączenie nawyków porannych',
          paragraphs: [
            'Sytuacja i bohater: Anna (31 lat) chciała wdrożyć nawyk wdzięczności i planowania dnia. Stworzyła formułę stosu:',
            '„Zaraz po tym, jak naleję poranną herbatę (stary nawyk), otwieram notes leżący obok czajnika i zapisuję 3 rzeczy, za które jestem wdzięczna, oraz 1 priorytet dnia (nowy nawyk)”.',
            'Działający mechanizm: Habit Stacking. Herbata stała się automatycznym wyzwalaczem dla notesu.',
            'Jak rozpoznać w czasie rzeczywistym: Brak konieczności pamiętania o zadaniu — sam widok czajnika przypomina o notesie.',
            'Możliwa konstruktywna reakcja: Utrzymanie notesu zawsze w tym samym miejscu przy czajniku.',
            'Wniosek dydaktyczny dla czytelnika: Połącz to, co chcesz robić, z tym, co już robisz bez myślenia.'
          ]
        }
      ]
    },
    {
      id: 'sec-12-7',
      pageNumber: 574,
      sectionNumber: '12.7',
      title: 'Projektowanie środowiska: Wskazówki wizualne decydują o losie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość naszych nawyków jest wyzwalana wzrokowo. Jeśli na blacie w kuchni stoi talerz z pączkami, będziesz po nie sięgać za każdym razem, gdy przejdziesz obok, nawet jeśli nie jesteś głodny.',
        'Najważniejszą zasadą inżynierii nawyków jest: Uczyń dobre nawyki WIDOCZNYMI i ŁATWYMI, a złe nawyki NIEWIDOCZNYMI i TRUDNYMI. Dyscyplina to nie walka z pokusą; dyscyplina to usunięcie pokusy z pola widzenia.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Zmiana diety bez diety — Misa z owocami',
          paragraphs: [
            'Sytuacja i bohater: Rodzina Nowaków chciała jeść więcej owoców. Zamiast chować jabłka do dolnej szuflady lodówki, postawili wielką, ceramiczną misę ze świeżymi owocami na środku stołu jadalnego. Słodycze przenieśli do najwyższej szafki w spiżarni, wymagającej przyniesienia drabinki.',
            'Działający mechanizm: Wskazówka wizualna + asymetria tarcia fizycznego.',
            'Jak rozpoznać w czasie rzeczywistym: Automatyczne sięganie po jabłko podczas przechodzenia przez pokój.',
            'Wniosek dydaktyczny dla czytelnika: Jesteś tym, co znajduje się na wysokości Twoich oczu.'
          ]
        }
      ]
    },
    {
      id: 'sec-12-8',
      pageNumber: 578,
      sectionNumber: '12.8',
      title: 'Złota reguła zmiany nawyku: Nie eliminuj, lecz zastępuj',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Zwoje podstawy mózgu nie znają pojęcia „przestań to robić”. Próba wygaszenia nawyku samą negacją („Od jutra zero cukru / zero telefonu / zero złości”) tworzy próżnię neurologiczną, w której napięcie dopaminowe rośnie do poziomu krytycznego.',
        'Złota reguła mówi: ZACHOWAJ WSKAZÓWKĘ, ZACHOWAJ NAGRODĘ, PODMIEŃ RUTYNĘ. Poniższy warsztat pozwala zaprojektować precyzyjną procedurę podmiany nawyku.'
      ],
      exerciseRef: chapterTwelveExerciseReplacementLab
    },
    {
      id: 'sec-12-9',
      pageNumber: 582,
      sectionNumber: '12.9',
      title: 'Pragnienie (Craving) i nagroda: Jak dopamina koduje wartość',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Nagroda musi być natychmiastowa. Mózg zwierzęcy nie rozumie nagród odsuniętych o 6 miesięcy. Jeśli po treningu nie poczujesz natychmiastowego wyrzutu endorfin, ciepłego prysznica lub poczucia dumy, zwoje podstawy nie utrwalą zachowania.',
        'Wprowadzaj mikro-nagrody bezpośrednie: pyszna kawa pita tylko w trakcie czytania trudnej książki, odhaczenie ptaszka w estetycznym planerze (zastrzyk dopaminy z ukończenia).'
      ]
    },
    {
      id: 'sec-12-10',
      pageNumber: 586,
      sectionNumber: '12.10',
      title: 'Atomowe nawyki w praktyce: Potęga 1% poprawy każdego dnia',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jeśli każdego dnia staniesz się o zaledwie 1% lepszy w danej dziedzinie, po roku będziesz 37 razy lepszy (1.01^365 = 37.78). Zmiany atomowe są z pozoru niewidoczne w skali tygodnia, ale tworzą gigantyczny procent składany w skali lat.',
        'Studium przypadku poniżej przedstawia zmagania studentki z nawykiem nałogowego sięgania po telefon i odbudowę uwagi za pomocą reguł atomowych.'
      ],
      caseStudyRef: chapterTwelveCaseStudyPhoneJulia
    },
    {
      id: 'sec-12-11',
      pageNumber: 590,
      sectionNumber: '12.11',
      title: 'Nawyki oparte na tożsamości: „Jestem kimś, kto...”',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Najwyższym poziomem zmiany behawioralnej jest tożsamość. Przestań mówić: „Próbuję biegać”. Mów: „Jestem biegaczem”. Kiedy nawyk staje się częścią Twojego poczucia tożsamości, nie musisz zmuszać się do działania — robisz to, bo zdrada nawyku byłaby zdradą samego siebie.',
        'Poniższy warsztat uczy budowania dziennika tożsamości behawioralnej.'
      ],
      exerciseRef: chapterTwelveExerciseIdentityHabits
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
        'Zasada mistrzów brzmi: Jeden błąd to wypadek przy pracy; dwa błędy z rzędu to początek nowego nawyku zaniechania. Jeśli opuścisz jeden trening, Twoim absolutnym priorytetem jest pojawienie się na sali nazajutrz — choćby po to, by zrobić 5 przysiadów i wrócić do domu. Ocalenie tożsamości jest ważniejsze niż spalone kalorie.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 7: Opuszczony trening we wtorek — Zasada 5 pompek',
          paragraphs: [
            'Sytuacja i bohater: Michał (30 lat) wraca z delegacji wykończony o 22:00. Powinien iść na siłownię, ale ledwo stoi na nogach.',
            'Działający mechanizm: Pułapka „Wszystko albo nic”. Zamiast zrezygnować całkowicie, Michał kładzie się na dywanie i robi 10 pompek.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie, że mikroruch nie ma sensu fizycznego.',
            'Wniosek dydaktyczny dla czytelnika: Te 10 pompek nie zmieniło jego tkanki mięśniowej, ale uratowało jego tożsamość człowieka, który nie odpuszcza dwóch dni z rzędu.'
          ]
        }
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

import { Chapter, ExamQuestion } from '../types/book';

export const chapterSixteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W Myśleniu Systemowym (Systemic Thinking) Ludwiga von Bertalanffy’ego i Petera Senge (Sekcja 16.1 i 16.3), dlaczego próba rozwiązania problemu społecznego lub relacyjnego poprzez izolowane „naprawianie jednej osoby” jest skazana na porażkę?',
    topic: 'Człowiek jako Element Systemu i Sprzężenia Zwrotne',
    sectionRef: 'Sekcja 16.3',
    options: [
      { label: 'A', text: 'Ponieważ ludzie nigdy się nie zmieniają.', isCorrect: false },
      { label: 'B', text: 'Ponieważ zachowanie jednostki jest wypadkową pętli sprzężeń zwrotnych całego systemu (rodziny, zespołu, kultury). Zmiana zachowania jednej osoby natychmiast wywołuje opór homeostatyczny systemu, dążącego do przywrócenia dawnej równowagi.', isCorrect: true },
      { label: 'C', text: 'Tylko psychoterapia grupowa jest legalna.', isCorrect: false },
      { label: 'D', text: 'Systemy społeczne działają w oparciu o czysty przypadek.', isCorrect: false }
    ],
    explanation: 'W systemie przyczyna i skutek nie biegną po linii prostej (A powoduje B). Działają w pętli: A wpływa na B, co zwrotnie modyfikuje A. Dopiero zmiana reguł gry i architektury pętli pozwala na trwałą transformację.',
    keyTakeaway: 'Nie naprawiaj pojedynczych trybików — zmień dynamikę całego zegarka.'
  },
  {
    id: 2,
    question: 'Prześledźmy całościowy łańcuch decyzyjny zintegrowany w Tomie I i Tomie II (Sekcja 16.1): Bodziec → Uwaga → Emocja → Interpretacja → Decyzja → Wpływ Społeczny → Reakcja Otoczenia. W którym punkcie tego łańcucha człowiek ma największy wpływ na zmianę trajektorii swojego losu?',
    topic: 'Zintegrowany Łańcuch Decyzyjny Tomu I i II',
    sectionRef: 'Sekcja 16.1',
    options: [
      { label: 'A', text: 'Na poziomie reakcji otoczenia (zmuszając innych do posłuszeństwa).', isCorrect: false },
      { label: 'B', text: 'Na poziomie ŚWIADOMEJ PAUZY pomiędzy pierwotnym impulsem emocjonalnym a interpretacją/działaniem (reewaluacja poznawcza i ugruntowanie w korze przedczołowej).', isCorrect: true },
      { label: 'C', text: 'Człowiek nie ma żadnego wpływu na żaden etap tego łańcucha.', isCorrect: false },
      { label: 'D', text: 'Tylko na poziomie genetycznym przed narodzinami.', isCorrect: false }
    ],
    explanation: 'Nie masz wpływu na pojawienie się bodźca ani na pierwszy mikrobłysk amygdali. Ale w chwili, gdy włączasz świadomy reflektor uwagi i zmieniasz interpretację sytuacji, cały dalszy łańcuch społeczny biegnie ku porozumieniu zamiast wojny.',
    keyTakeaway: 'Nie wybierasz bodźców, które cię spotykają. Wybierasz znaczenie, jakie im nadajesz.'
  },
  {
    id: 3,
    question: 'Na czym polega zjawisko „Pętli Cyrkularnej Konfliktu” w zespole lub małżeństwie (Sekcja 16.5)?',
    topic: 'Pętla Cyrkularna: Wycofanie a Atak',
    sectionRef: 'Sekcja 16.5',
    options: [
      { label: 'A', text: 'Obie strony kręcą się w kółko na krzesłach obrotowych.', isCorrect: false },
      { label: 'B', text: 'Klasyczna pętla Demand-Withdraw (Żądanie-Wycofanie): Im bardziej partner A naciska i krytykuje, tym bardziej partner B zamyka się w sobie i milczy; im bardziej B milczy, tym głośniej A krzyczy — oboje karmią zachowanie, którego nienawidzą.', isCorrect: true },
      { label: 'C', text: 'Podpisanie umowy notarialnej o wzajemnym przebaczeniu.', isCorrect: false },
      { label: 'D', text: 'Konflikt rozwiązuje się samoczynnie po 24 godzinach.', isCorrect: false }
    ],
    explanation: 'W pętli cyrkularnej nie ma „początku”. Każde działanie jest jednocześnie reakcją na zachowanie drugiej strony. Przerwanie pętli wymaga, by jedna osoba miała odwagę przestać grać swoją standardową rolę.',
    keyTakeaway: 'Jeśli robisz to, co zawsze, dostaniesz to, co zawsze. Zmień swój ruch w pętli.'
  },
  {
    id: 4,
    question: 'W ostatecznej integracji dzieła „Anatomia Umysłu”, dlaczego świadomość własnych błędów poznawczych nie czyni nas odpornymi na nie w 100% (Sekcja 16.2 i 16.14)?',
    topic: 'Pokora Poznawcza i Ograniczenia Samowiedzy',
    sectionRef: 'Sekcja 16.14',
    options: [
      { label: 'A', text: 'Ponieważ psychologia jest nauką całkowicie fałszywą.', isCorrect: false },
      { label: 'B', text: 'Błędy poznawcze to nie wady oprogramowania, lecz ewolucyjna struktura sprzętowa naszego mózgu. Wiedza daje nam pokorę i procedury ochronne (checklisty, zaufanych doradców, pauzę), a nie boską nieomylność.', isCorrect: true },
      { label: 'C', text: 'Człowiek po przeczytaniu tej książki staje się w 100% nieomylnym geniuszem.', isCorrect: false },
      { label: 'D', text: 'Błędy poznawcze znikają po ukończeniu 40. roku życia.', isCorrect: false }
    ],
    explanation: 'Daniel Kahneman, noblista i ojciec psychologii poznawczej, na pytanie, czy po 40 latach badań przestał ulegać złudzeniom Systemu 1, odpowiedział: „Nigdy. Jedyna różnica polega na tym, że dziś szybciej zauważam, kiedy wpadłem w pułapkę”.',
    keyTakeaway: 'Prawdziwa mądrość nie polega na byciu doskonałym, lecz na pokorze wobec własnych ograniczeń.'
  },
  {
    id: 5,
    question: 'Co jest najważniejszym celem „Mapy Własnych Mechanizmów” opracowanej w zwieńczeniu Tomu II (Sekcja 16.13)?',
    topic: 'Mapa Własnych Mechanizmów jako Kompas Życiowy',
    sectionRef: 'Sekcja 16.13',
    options: [
      { label: 'A', text: 'Wydrukowanie jej i powieszenie w gabinecie szefa.', isCorrect: false },
      { label: 'B', text: 'Zidentyfikowanie swoich unikalnych wyzwalaczy emocjonalnych, czułych punktów na manipulację, schematów w relacjach i stworzenie osobistego protokołu powrotu do równowagi.', isCorrect: true },
      { label: 'C', text: 'Użycie jej do manipulowania przyjaciółmi.', isCorrect: false },
      { label: 'D', text: 'Zastąpienie nią wizyt u lekarza pierwszego kontaktu.', isCorrect: false }
    ],
    explanation: 'Mapa własnych mechanizmów łączy Tom I (wnętrze umysłu) z Tomem II (świat relacji społecznych). Staje się Twoją prywatną instrukcją obsługi samego siebie w obliczu burz współczesnego świata.',
    keyTakeaway: 'Poznaj samego siebie, a zrozumiesz cały świat.'
  }
];

export const chapterSixteen: Chapter = {
  number: 16,
  title: 'Człowiek Jako System Społeczny: Wielka Synteza Dzieła',
  subtitle: 'Jak połączyć mechanizmy umysłu, relacji i wpływu w jeden spójny system świadomego życia',
  leadParagraph: 'Dotarliśmy do szczytu góry. Przez szesnaście rozbudowanych rozdziałów badaliśmy człowieka w każdym wymiarze: od neuroprzekaźników w szczelinie synaptycznej, przez pożary ciała migdałowatego, reflektor uwagi i pułapki percepcji w Tomie I, aż po presję stada, sztukę rozmowy, etykę wpływu, sidła manipulacji, architekturę więzi, nawyki, potop informacyjny, negocjacje i hart woli w Tomie II. Teraz pora połączyć te wszystkie rzeki w jeden potężny ocean zrozumienia.',
  totalEstimatedPages: 56,
  sections: [
    {
      id: 'sec-16-1',
      pageNumber: 766,
      sectionNumber: '16.1',
      title: 'Od bodźca do działania: Zintegrowany obwód decyzyjny',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Wszystko jest ze sobą połączone. Żadna myśl nie rodzi się w izolacji i żaden czyn nie umiera bez echa w strukturze wszechświata społecznego.',
        author: 'Gregory Bateson'
      },
      paragraphs: [
        'Spójrzmy na pełen łańcuch, jaki pokonuje informacja w Twoim życiu każdego dnia:',
        '1. Środowisko informacyjne (Rozdział 13) dostarcza surowy bodziec (np. mail od prezesa).',
        '2. Reflektor uwagi (Tom I, Rozdział 3) wyłapuje go oddolnie i wpuszcza do świadomości.',
        '3. Filtry percepcji (Tom I, Rozdział 4) i archiwa pamięci (Tom I, Rozdział 5) nadają mu wstępne znaczenie.',
        '4. Ciało migdałowate i układ afektywny (Tom I, Rozdział 2) wywołują somatyczny skok tętna.',
        '5. System 1 i System 2 (Tom I, Rozdział 1) toczą walkę o wybór reakcji.',
        '6. Normy grupy i hierarchia społeczna (Rozdział 6) wyznaczają granice tego, co wypada zrobić.',
        '7. Narzędzia komunikacji (Rozdział 7) i perswazji (Rozdział 8) manifestują decyzję w słowach.',
        '8. Relacja (Rozdział 10) lub konflikt (Rozdział 14) otrzymują uderzenie fali zwrotnej.',
        '9. Zwoje podstawy (Rozdział 12) utrwalają to zachowanie jako nawyk na przyszłość.',
        '10. Wola i odporność psychiczna (Rozdział 15) decydują o tym, czy wyciągniesz z tego lekcję, czy pogrążysz się w żalu.',
        'Nie jesteś zbiorem luźnych funkcji psychicznych. Jesteś jednym, pulsującym, zintegrowanym systemem społeczno-biologicznym.'
      ]
    },
    {
      id: 'sec-16-2',
      pageNumber: 770,
      sectionNumber: '16.2',
      title: 'Gdzie może pojawić się błąd? Diagnostyka systemu w 10 punktach',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Kiedy Twoje życie zaczyna przypominać pole minowe, nie pytaj z rozpaczą: „Dlaczego to znowu mi się przytrafia?”. Sprawdź swój system jak inżynier badający awarię reaktora:',
        'Punkt 1 (Uwaga): Czy moje rozproszenie nie wynika ze zbyt wielu powiadomień w telefonie?',
        'Punkt 2 (Ciało): Czy moja wybuchowość w domu nie jest prostym skutkiem 5 godzin snu i głodu (HALT)?',
        'Punkt 3 (Percepcja): Czy nie ulegam Podstawowemu Błędowi Atrybucji, przypisując partnerowi złą wolę zamiast zmęczenia?',
        'Punkt 4 (Relacje): Czy nie zapomniałem o Magicznej Proporcji 5:1, rzucając same krytyczne uwagi?',
        'Punkt 5 (Granice): Czy moje poczucie wypalenia nie wynika z panicznego lęku przed powiedzeniem „NIE” szefowi?',
        'Punkt 6 (Manipulacja): Czy ktoś w moim otoczeniu nie stosuje systematycznego gaslightingu lub DARVO?',
        'Punkt 7 (Negocjacje): Czy walczę o sztywne stanowisko, zamiast zapytać o interesy stron?',
        'Punkt 8 (Nawyki): Czy moje otoczenie nie jest zastawione pułapkami dopaminowymi?',
        'Punkt 9 (Informacja): Czy nie karmię swojego mózgu toksycznymi wiadomościami budzącymi lęk?',
        'Punkt 10 (Samokrytyka): Czy nie biczuję się za to, że jestem tylko człowiekiem?'
      ]
    },
    {
      id: 'sec-16-3',
      pageNumber: 774,
      sectionNumber: '16.3',
      title: 'Człowiek wpływa na człowieka: Niewidzialna sieć rezonansu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'W fizyce kwantowej istnieje zjawisko splątania; w neurobiologii istnieje zjawisko Rezonansu Limbicznego (Lewis, Amini, Lannon).',
        'Kiedy wchodzisz do pokoju w stanie głębokiego, wewnętrznego spokoju i życzliwości, tętno osób siedzących przy stole obniża się bez ich wiedzy. Twoje neurony lustrzane, Twój ton głosu i Twój rozluźniony nerw błędny wysyłają sygnały bezpieczeństwa.',
        'I odwrotnie: jeden wściekły, zalękniony, manipulujący człowiek potrafi zatruć atmosferę 50-osobowego działu w korporacji w ciągu jednego poranka. Nie jesteś bezradnym odbiorcą nastrojów otoczenia — jesteś stacją nadawczą. Jakość Twojej obecności zmienia rzeczywistość wokół Ciebie.'
      ]
    },
    {
      id: 'sec-16-4',
      pageNumber: 778,
      sectionNumber: '16.4',
      title: 'Pętla społeczna: Jak nasze oczekiwania kreują zachowania innych',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przypomnij sobie badania Roberta Rosenthala nad Efektem Pigmaliona (i jego mrocznym bratem, Efektem Golema). Kiedy nauczyciele wierzyli, że losowo wybrani uczniowie są „ukrytymi geniuszami”, nieświadomie poświęcali im więcej uwagi, częściej się do nich uśmiechali i dawali im więcej czasu na odpowiedź. Po roku IQ tych dzieci wzrosło obiektywnie o kilkanaście punktów!',
        'To jest Pętla Społeczna. Jeśli wchodzisz w relację z założeniem: „Ludzie to oszuści, którzy chcą mnie wykorzystać”, Twoja mowa ciała staje się podejrzliwa, chłodna i agresywna. W odpowiedzi ludzie wokół Ciebie zamykają się i reagują wrogością. Mówisz wtedy z triumfem: „Wiedziałem! Miałem rację!”.',
        'Nie miałeś racji. Twoje własne lękowe oprogramowanie wygenerowało potwory, przed którymi próbowało Cię ostrzec.'
      ]
    },
    {
      id: 'sec-16-5',
      pageNumber: 782,
      sectionNumber: '16.5',
      title: 'Konflikt jako pętla: Przełamywanie zaklętego kręgu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'W każdym przewlekłym konflikcie obie strony są w 100% przekonane, że „ja się tylko bronię, to tamten zaczął!”.',
        'Wyobraź sobie wyścig zbrojeń w relacji: On milczy, bo ona krzyczy. Ona krzyczy, bo on milczy. Jeśli spytasz jego, powie: „Milczę, bo z nią nie da się rozmawiać, od razu krzyczy!”. Jeśli spytasz ją, powie: „Krzyczę, bo jak mówię normalnie, to on mnie całkowicie ignoruje!”.',
        'Szukanie winnego w pętli cyrkularnej jest tak samo mądre jak szukanie początku koła od roweru. Jedynym wyjściem jest odwaga jednostki do PRZERWANIA SWOJEGO FRAGMENTU PĘTLI: „Nawet jeśli ona krzyczy, ja nie zamilknę — podejdę, wezmę ją za rękę i powiem: Słyszę cię. Nie uciekam. Zależy mi na nas”. W tym momencie zaklęcie pryska.'
      ]
    },
    {
      id: 'sec-16-6',
      pageNumber: 786,
      sectionNumber: '16.6',
      title: 'Manipulacja jako pętla: Kiedy ofiara karmi kata',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'To bolesna, ale wyzwalająca prawda: żaden manipulator nie może manipulować człowiekiem, który nie zgadza się na udział w manipulacyjnej pętli.',
        'Manipulator potrzebuje Twojego poczucia winy, Twojego lęku przed odrzuceniem, Twojej potrzeby bycia „dobrym i kochanym przez wszystkich”. Kiedy odmawiasz wejścia w rolę ofiary — kiedy na szantaż emocjonalny odpowiadasz spokojnym: „Bardzo mi przykro, że tak to widzisz, i moja decyzja pozostaje niezmienna” — manipulator traci grunt pod nogami.',
        'Jego broń działa tylko na Twoje własne niezaleczone kompleksy. Uzdrawiając swoje poczucie własnej wartości, rozbrajasz wszystkie bomby manipulatorów tego świata.'
      ]
    },
    {
      id: 'sec-16-7',
      pageNumber: 790,
      sectionNumber: '16.7',
      title: 'Relacja jako żywy ekosystem: Pielęgnacja ogrodu więzi',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Relacja nie jest rzeźbą z marmuru, którą stawia się raz na całe życie na cokole ślubu czy przyjaźni. Relacja jest ogrodem.',
        'Jeśli przestaniesz podlewać ogród przez trzy miesiące, nie mów z pretensją: „Dziwne, ten ogród sam z siebie wysechł!”. Chwasty (pretensje, drobne złośliwości, brak uważności) rosną same z siebie bez żadnego wysiłku. Kwiaty (bliskość, zaufanie, seks, czułość) wymagają codziennego, świadomego trudu.',
        'Wprowadź do swoich relacji codzienne mikroskopijne rytuały pielęgnacyjne: 6-sekundowy pocałunek na pożegnanie, 15 minut szczerej rozmowy przy herbacie bez ekranów, słowo „dziękuję” powiedziane za ugotowany obiad czy wyrzucone śmieci. Te małe rzeczy to woda dająca życie.'
      ]
    },
    {
      id: 'sec-16-8',
      pageNumber: 794,
      sectionNumber: '16.8',
      title: 'Decyzja pod wpływem grupy: Zachować siebie w tłumie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nawiązując do Rozdziału 6 (Asch i Milgram): największą próbą charakteru człowieka jest moment, w którym cała sala mówi „A”, a Twoje sumienie i rozum widzą „B”.',
        'Bycie nonkonformistą nie polega na byciu wiecznie zbuntowanym nastolatkiem, który dla zasady zaprzecza wszystkiemu. Bycie dojrzałym człowiekiem polega na zdolności do zadania sobie pytania w ciszy własnej kory przedczołowej:',
        '„Czy ja naprawdę w to wierzę, czy po prostu boję się, że koledzy z biura przestaną mnie lubić?”.',
        'Odwaga cywilna to najrzadszy kruszec ludzkiej cywilizacji. Wystarczy jeden człowiek stojący prosto w sali pełnej uległości, by dać nadzieję setkom innych.'
      ]
    },
    {
      id: 'sec-16-9',
      pageNumber: 798,
      sectionNumber: '16.9',
      title: 'Decyzja pod wpływem emocji: Mądrość zintegrowanego serca i rozumu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Nie jesteśmy robotami i nigdy nie powinniśmy dążyć do chłodnego, psychopatycznego odcięcia się od uczuć. Emocje to nasza głębia, nasza miłość, nasza pasja i nasz kompas moralny.',
        'Mądrość nie polega na tłumieniu emocji. Mądrość polega na tym, by EMOCJE BYŁY DORADCAMI PRZY STOLE, ALE BY TO ŚWIADOME „JA” PODEJMOWAŁO OSTATECZNĄ DECYZJĘ.',
        'Pozwól złości powiedzieć: „Ta granica została przekroczona!”. Pozwól lękowi powiedzieć: „Tu czai się realne ryzyko!”. Wysłuchaj ich z szacunkiem. A potem weź głęboki oddech, włącz korę przedczołową i powiedz: „Dziękuję wam za ostrzeżenie. Teraz ja wybiorę najmądrzejszy sposób działania”.'
      ]
    },
    {
      id: 'sec-16-10',
      pageNumber: 802,
      sectionNumber: '16.10',
      title: 'Decyzja pod wpływem informacji: Wolność w erze algorytmów',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Twoja uwaga to Twoje życie. Dosłownie: to, na co kierujesz reflektor swojej świadomości przez 16 godzin na dobę, staje się Twoją biologiczną strukturą mózgu i Twoim przeznaczeniem.',
        'Kiedy bezmyślnie oddajesz swoją uwagę algorytmom z Doliny Krzemowej, stajesz się cyfrowym niewolnikiem karmiącym korporacje swoim lękiem i oburzeniem.',
        'Wybierz suwerenność. Zbuduj wokół swojego umysłu fosę obronną. Czytaj książki zamiast postów. Rozmawiaj z ludźmi twarzą w twarz zamiast wymieniać komentarze pod artykułami. Bądź panem swojego reflektora.'
      ]
    },
    {
      id: 'sec-16-11',
      pageNumber: 806,
      sectionNumber: '16.11',
      title: 'Decyzja pod wpływem drugiego człowieka: Od zależności do współzależności',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Stephen Covey w „7 nawykach skutecznego działania” opisał wspaniałą drogę dojrzałości:',
        'Faza 1: Zależność (Dziecięctwo) — „Ty się mną opiekujesz, a jeśli coś idzie nie tak, to twoja wina”.',
        'Faza 2: Niezależność (Młodość) — „Niczego od nikogo nie potrzebuję, sam dam sobie radę, nikt mi nie będzie mówił, co mam robić”.',
        'Faza 3: Współzależność (Dojrzałość) — „Jestem wolną, autonomiczną jednostką z własnymi granicami, i świadomie decyduję się połączyć siły z innymi wolnymi ludźmi, bo razem możemy stworzyć coś nieskończenie większego niż w pojedynkę”.',
        'To jest cel Tomu II: doprowadzić Cię do stanu mądrej, silnej, bezpiecznej Współzależności.'
      ]
    },
    {
      id: 'sec-16-12',
      pageNumber: 810,
      sectionNumber: '16.12',
      title: 'Wielkie Studium Przypadku: Symfonia Systemu — Kryzys w Kancelarii',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      paragraphs: [
        'Kulminacyjne, całościowe studium przypadku integrujące WSZYSTKIE 16 ROZDZIAŁÓW DZIEŁA. Zobaczmy, jak splot zmęczenia, błędu atrybucji, manipulacji, fałszywych ramek i braku samokontroli niemal zniszczył czołową kancelarię prawną, i jak myślenie systemowe przyniosło uzdrowienie.'
      ],
      caseStudyRef: {
        id: 'cs-ch16-symfonia',
        title: 'Punkt Zbiegu: Anatomia Przetrwania w Kancelarii Lex Veritas',
        subtitle: 'Wielka synteza mechanizmów: od neurobiologii wyczerpania po potęgę zintegrowanego dialogu',
        protagonist: 'Marta (Starszy Partner, 45 lat) i Tomasz (Młody Partner, 33 lata)',
        context: 'Siedziba kancelarii w centrum Warszawy, nocny maraton przed fuzją roku.',
        story: [
          'Przez 48 godzin zespół kancelarii pracował bez snu nad umową fuzji dwóch spółek energetycznych o wartości 2 miliardów złotych. Presja czasu była nieludzka.',
          'Poziom 1 (Tom I: Biologia i Uwaga): Kora przedczołowa Marty i Tomasza była wypłukana z neuroprzekaźników. Wąskie gardło uwagi zaczęło przepuszczać krytyczne błędy w załącznikach podatkowych.',
          'Poziom 2 (Rozdział 6: Grupa i Status): Młodsi prawnicy widzieli literówki w dokumentach, ale z powodu paraliżu hierarchicznego i efektu widza nikt nie odważył się odezwać przy groźnej Marcie.',
          'Poziom 3 (Rozdział 7: Komunikacja): Kiedy Tomasz wszedł do gabinetu Marty, by zgłosić wątpliwość, rzucił zdanie: „Marta, w punkcie 14 jest błąd logiczny”. Marta, w stanie wyczerpania, odebrała to „Uchem Relacji”: „Uważasz mnie za niekompetentną!”. W sali wybuchł potężny krzyk.',
          'Poziom 4 (Rozdział 9: Manipulacja): Prawnik drugiej strony, wytrawny manipulator, zauważył pęknięcie w zespole i zastosował technikę sztucznej presji czasu oraz fałszywego wyboru: „Albo podpisujecie ten draft w 20 minut, albo zrywamy transakcję i ogłaszamy mediom waszą nieudolność!”.',
          'Punkt zwrotny: Tomasz wziął głęboki oddech fizjologiczny (Pauza Święta, Rozdział 15). Spojrzał na Martę. Zamiast kontratakować, zastosował Etykietowanie Taktyczne Vossa (Rozdział 14): „Marto, jesteśmy oboje potwornie wyczerpani i przerażeni tym, że ta transakcja może runąć. Zależy mi na tobie i na firmie. Dajmy sobie 15 minut ciszy”.',
          'W sali zapadła cisza. Po 15 minutach oboje wrócili do stołu zjednoczeni. Odrzucili fałszywy dylemat oponenta (Rozdział 8: Odporność na manipulację), wykorzystali swoją silną BATNA i zamknęli fuzję z 15-milionowym bonusem dla klienta.'
        ],
        decisionTaken: 'Zastosowanie zintegrowanego protokołu deeskalacji, uziemienia biologicznego i myślenia systemowego w szczytowym momencie kryzysu.',
        whatProtagonistSaw: 'Początkowo widzieli w sobie nawzajem wrogów i rywali o władzę w kancelarii.',
        whatWasMissed: 'Że cały konflikt był wygenerowany przez brak snu i manipulacyjną grę przeciwnika negocjacyjnego.',
        psychologicalAnalysis: {
          coreMechanism: 'Integracja wszystkich poziomów: od somatyki po systemy społeczne.',
          cognitiveBiases: [
            { name: 'Tunelowanie uwagi', description: 'Wyczerpanie odcięło zdolność widzenia szerszego kontekstu.', impact: 'Prawie doszło do podpisania wadliwej umowy.' },
            { name: 'Podstawowy błąd atrybucji', description: 'Marta przypisała Tomaszowi nielojalność, a nie troskę o projekt.', impact: 'Eskalacja agresji w zespole.' }
          ],
          defenseMechanisms: [
            { name: 'Projekcja lęku', explanation: 'Rzutowanie własnego przerażenia odpowiedzialnością na partnera.' }
          ],
          emotionalDynamic: 'Przejście od lęku i walki o dominację do zaufania i głębokiej współzależności.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Układ siatkowaty i Pień Mózgu', role: 'Sygnalizacja skrajnego wyczerpania metabolicznego', activationState: 'Alarm' },
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Odzyskanie sterowania po 15-minutowej pauzie somatycznej', activationState: 'Zresetowana' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol i Oksytocyna', roleInScenario: 'Oksytocyna z porozumienia wygasiła toksyczny pożar kortyzolu' }
          ],
          biologicalTimeline: [
            { timeMs: 'Pauza 15 minut', process: 'Resynchronizacja autonomiczna obojga liderów.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Presja Czasu i Groźba Wizerunkowa', description: 'Przeciwnik: „Podpisujcie albo zrywamy!”.', vulnerabilityExploited: 'Strach przed kompromitacją w mediach' }
          ],
          counterMeasures: [
            { step: 'Demaskowanie Gry i Wezwanie do Faktów', script: '„Doceniamy wasz pośpiech, i jednocześnie nasza kancelaria nie podpisuje dokumentów zawierających błędy w wyliczeniach podatkowych. Wracamy o 9:00 rano z poprawionym załącznikiem”.', rationale: 'Rozbija blef oponenta twardą BATNA.' }
          ]
        },
        alternativePath: 'Gdyby Marta uległa panice i podpisała umowę w nocy, błąd podatkowy kosztowałby klienta 40 milionów złotych kar skarbowych, a kancelaria straciłaby licencję.',
        readerQuestion: 'W jakich kluczowych momentach swojego życia pozwolisz, by wyczerpanie i błędy poznawcze podyktowały Twoje najważniejsze wybory?',
        keyTakeaway: 'Nie możesz kontrolować sztormu na oceanie. Ale mając mapę, kompas i zgrany zespół, potrafisz dopłynąć do każdego portu.'
      }
    },
    {
      id: 'sec-16-13',
      pageNumber: 814,
      sectionNumber: '16.13',
      title: 'Mapa Własnych Mechanizmów: Twój osobisty kompas nawigacyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Oto Twoje najważniejsze zadanie podsumowujące całe dzieło „Anatomia Umysłu”. Weź czystą kartkę lub otwórz dziennik refleksyjny i stwórz swoją unikalną Mapę Systemową w 5 wymiarach:',
        '1. Mój Profil Biologiczny: W jakich godzinach moja kora przedczołowa pracuje najostrzej? Jak reaguję na głód i deficyt snu? (Mój wskaźnik HALT).',
        '2. Mój Główny Wyzwalacz Relacyjny: Który z Czterech Jeźdźców Gottmana jest moim domyślnym odruchem w złości (Krytyka, Obrona, Pogarda, Mur)? Jakie słowo kluczowe natychmiast mnie usztywnia?',
        '3. Moja Czułość na Manipulację: Na co jestem najbardziej podatny (Poczucie winy? Lęk przed odrzuceniem? Sztuczna presja czasu? Chęć bycia podziwianym)?',
        '4. Moje Środowisko Nawykowe: Jaka jedna zmiana w architekturze mojego pokoju/biurka uwolni 50% mojej woli?',
        '5. Mój Protokół Przebudzenia: Jakie jedno zdanie powiem sobie w chwili, gdy zorientuję się, że znowu wpadłem w starą pętlę?'
      ]
    },
    {
      id: 'sec-16-14',
      pageNumber: 818,
      sectionNumber: '16.14',
      title: 'Zwieńczenie Dzieła: Co Dalej? Życie jako świadoma praktyka',
      category: 'podsumowanie',
      readingTimeMinutes: 14,
      paragraphs: [
        'Książka, którą trzymasz w rękach — Tom I i Tom II — nie jest podręcznikiem do zaliczenia egzaminu. Jest zaproszeniem do zupełnie nowego sposobu istnienia w świecie.',
        'Nie staniesz się idealny z dnia na dzień. Nadal będziesz czasem prokrastynować, nadal czasem uniesiesz się w kłótni z partnerem, nadal czasem kupisz coś zbędnego na wyprzedaży. Różnica polega na tym, że od dzisiaj NIE JESTEŚ JUŻ ŚLEPY.',
        'W chwili, gdy poczujesz ucisk w klatce piersiowej, Twój wewnętrzny Obserwator uśmiechnie się z czułością i powie: „Oho, poznaję cię. To moja droga niska LeDouxa. To mój lęk przed odrzuceniem ze stada. To błąd atrybucji. Weź głęboki oddech. Zastosuj pauzę. Wybierz mądrość”.',
        'Świat nie potrzebuje kolejnych bezdusznych maszyn do osiągania celów. Świat rozpaczliwie potrzebuje ludzi przebudzonych, zintegrowanych, życzliwych dla siebie i odważnych w budowaniu mostów porozumienia.',
        'Idź i żyj świadomie. Sprawdź swoją wiedzę w Wielkim Egzaminie Końcowym z Rozdziału 16.'
      ]
    }
  ]
};

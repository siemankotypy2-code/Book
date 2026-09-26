import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

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
  },
  {
    id: 6,
    question: 'W koncepcji Stephena Coveya dotyczącej dojrzałości psychologicznej (Sekcja 16.11), szczytowym stadium rozwoju człowieka jest:',
    topic: 'Trzy Stadia Dojrzałości Coveya: Od Zależności do Współzależności',
    sectionRef: 'Sekcja 16.11',
    options: [
      { label: 'A', text: 'Zależność — całkowite oddanie kontroli instytucjom lub rodzicom.', isCorrect: false },
      { label: 'B', text: 'Współzależność (Interdependence) — stan, w którym wolna, niezależna jednostka świadomie łączy siły z innymi autonomicznymi ludźmi, tworząc synergię wykraczającą poza możliwości jednostki.', isCorrect: true },
      { label: 'C', text: 'Samotna izolacja w jaskini bez kontaktu z technologią.', isCorrect: false },
      { label: 'D', text: 'Agresywna dominacja nad słabszymi członkami grupy.', isCorrect: false }
    ],
    explanation: 'Niezależność („sam sobie poradzę”) to dopiero etap pośredni wyjścia z zależności. Prawdziwa mądrość dorosłego to współzależność oparta na szacunku, zaufaniu i wspólnej misji.',
    keyTakeaway: 'Niezależność daje wolność, ale dopiero współzależność daje wielkie owoce.'
  },
  {
    id: 7,
    question: 'Co oznacza pojęcie „Podwójnego Sprzężenia Zwrotnego” (Double-Loop Learning) Chrisa Argyrisa w analizie błędów życiowych (Sekcja 16.7)?',
    topic: 'Uczenie się Podwójnej Pętli Argyrisa',
    sectionRef: 'Sekcja 16.7',
    options: [
      { label: 'A', text: 'Wykonywanie dwóch okrążeń bieżni po każdej pomyłce.', isCorrect: false },
      { label: 'B', text: 'Zamiast pytać tylko „Jak naprawić ten pojedynczy błąd?” (pojedyncza pętla), pytasz „Jakie fundamentalne założenia, wartości i modele myślowe doprowadziły do powstania tego problemu?” (podwójna pętla).', isCorrect: true },
      { label: 'C', text: 'Podwójne sprawdzanie faktury przed wysłaniem do księgowości.', isCorrect: false },
      { label: 'D', text: 'Technika programistyczna w językach niskiego poziomu.', isCorrect: false }
    ],
    explanation: 'Pojedyncza pętla to termostat: jest za zimno, więc włącza grzanie. Podwójna pętla pyta: „Dlaczego w ogóle mamy okno otwarte w środku zimy i czy termostat jest ustawiony na właściwą temperaturę?”.',
    keyTakeaway: 'Nie poprawiaj w kółko tych samych objawów — zbadaj ukryte założenia leżące u podstaw Twoich decyzji.'
  }
];

export const chapterSixteen: Chapter = {
  number: 16,
  title: 'Człowiek Jako System Społeczny: Wielka Synteza Dzieła',
  subtitle: 'Jak połączyć mechanizmy umysłu, relacji i wpływu w jeden spójny system świadomego życia',
  leadParagraph: 'Dotarliśmy do szczytu góry. Przez szesnaście rozbudowanych rozdziałów badaliśmy człowieka w każdym wymiarze: od neuroprzekaźników w szczelinie synaptycznej, przez pożary ciała migdałowatego, reflektor uwagi i pułapki percepcji w Tomie I, aż po presję stada, sztukę rozmowy, etykę wpływu, sidła manipulacji, architekturę więzi, nawyki, potop informacyjny, negocjacje i hart woli w Tomie II. Teraz pora połączyć te wszystkie rzeki w jeden potężny ocean zrozumienia.',
  totalEstimatedPages: 60,
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
        '6. Wpływ grupy i normy społeczne (Rozdział 6) wyznaczają granice tego, co dopuszczalne.',
        '7. Komunikacja i język (Rozdział 7) nadają formę Twojemu komunikatowi na zewnątrz.',
        '8. Odbiorca reaguje przez własną matrycę obaw, nawyków (Rozdział 12) i mechanizmów obronnych.',
        'Widzisz to? Jesteś żywym węzłem w gigantycznej sieci kognitywno-społecznej.'
      ]
    },
    {
      id: 'sec-16-2',
      pageNumber: 770,
      sectionNumber: '16.2',
      title: 'Umysł w sieci relacji: Od psychologii jednostki do myślenia systemowego',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przez ponad sto lat psychologia badała człowieka tak, jakby był samotną wyspą — próbówką w laboratorium. Badano pamięć, refleks, inteligencję jednostki.',
        'Jednak rewolucja systemowa Petera Senge i Gregory’ego Batesona ujawniła, że jednostka wyjęta ze swojego kontekstu społecznego jest abstrakcją. Twoje zachowanie zależy w 80% od pola sił, w którym się poruszasz.',
        'PRZYKŁAD 1: Wybitny programista Krzysztof, spokojny i cichy w domu, w nowej korporacji staje się agresywny i opryskliwy. Dyrektor HR wysyła go na „trening panowania nad złością” (błąd leczenia jednostki). Wnikliwy audyt systemowy wykazał, że w firmie premie przyznawano wyłącznie za publiczne wytykanie błędów kolegom, a zarząd nagradzał bezwzględną rywalizację. Zachowanie Krzysztofa było racjonalną adaptacją do patologicznego systemu nagród.'
      ]
    },
    {
      id: 'sec-16-3',
      pageNumber: 774,
      sectionNumber: '16.3',
      title: 'Sprzężenia zwrotne: Pętle wzmacniające i równoważące w życiu codziennym',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W każdym systemie istnieją dwa rodzaje pętli sprzężeń zwrotnych:',
        '1. Pętla Wzmacniająca (Reinforcing Loop): Mechanizm kuli śnieżnej. Sukces rodzi pewność siebie, która rodzi odwagę, która przynosi większy sukces (lub w wersji negatywnej: lęk rodzi izolację, która rodzi poczucie odrzucenia, potęgujące lęk).',
        '2. Pętla Równoważąca (Balancing Loop): Termostat poszukujący homeostazy. Kiedy próbujesz drastycznie zmienić nawyki, system (Twoje ciało lub Twoja rodzina) generuje opór, by przywrócić dawny stan równowagi.',
        'Zrozumienie tych pętli pozwala przestać walczyć z wiatrakami i znaleźć Punkty Dźwigni (Leverage Points) — miejsca, gdzie mała zmiana wywołuje gigantyczny efekt.'
      ]
    },
    {
      id: 'sec-16-4',
      pageNumber: 778,
      sectionNumber: '16.4',
      title: 'Architektura spójności: Kiedy ciało, myśl i relacja mówią jednym głosem',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Człowiek niespójny żyje w permanentnym rozdarciu kognitywnym: jego ciało mówi „stop, jestem wyczerpany” (somatyka), jego myśl mówi „musisz pracować, bo cię zwolnią” (krytyk), a jego słowa brzmią „oczywiście, szefie, chętnie wezmę ten projekt” (fałszywe dostosowanie).',
        'Spójność Wewnętrzna (Congruence) Carla Rogersa pojawia się wtedy, gdy Twoje doznania somatyczne, Twoje procesy poznawcze i Twoje zachowania społeczne są w pełnej harmonii. Nie musisz udawać nikogo innego, nie marnujesz energii na maskowanie intencji.',
        'PRZYKŁAD 2: Lekarka Joanna po 10 latach pracy w korporacyjnym centrum medycznym odmawiała sobie prawa do odpoczynku, zmagając się z przewlekłym bólem kręgosłupa i bezsennością. Podczas warsztatu spójności zauważyła, że jej ciało dosłownie kuli się przed wejściem do kliniki. Zdecydowała się na radykalną spójność: odeszła z sieciówki, otworzyła kameralny gabinet medycyny rodzinnej na wsi, gdzie poświęca każdemu pacjentowi 45 minut. W ciągu miesiąca bóle pleców ustąpiły bez żadnych leków.'
      ],
      exerciseRef: {
        id: 'ex-16-audyt-spojnosci',
        title: 'Audyt Spójności Osobistej: Ciało, Myśl, Słowo i Czyn',
        subtitle: 'Zdiagnozuj i ulecz pęknięcia pomiędzy Twoją somatyką, myślami i zachowaniami',
        objective: 'Przywrócenie kongruencji (spójności) pomiędzy wewnętrznymi odczuciami a zewnętrzną komunikacją.',
        durationMinutes: 20,
        neuroScientificFoundation: 'Redukcja dysonansu poznawczo-somatycznego obniża permanentny tonus współczulny i przywraca optymalne funkcjonowanie osi podwzgórze-przysadka-nadnercza.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór sfery życia',
            instruction: 'Wybierz obszar, w którym czujesz największy wewnętrzny opór: Praca, Związek lub Zdrowie.',
            promptText: 'Wybrany obszar i aktualny stan:',
            placeholder: 'Relacja z przełożonym w pracy — czuję chroniczne zmęczenie...'
          },
          {
            stepNumber: 2,
            title: 'Trójkąt Spójności',
            instruction: 'Wypisz: co czuje Twoje ciało, co myśli Twój mózg, co mówią Twoje usta.',
            promptText: 'Ciało vs Myśl vs Słowa:',
            placeholder: 'Ciało: zaciśnięte gardło; Myśl: jestem wykorzystywany; Słowa: tak, oczywiście, zrobię to na jutro...'
          },
          {
            stepNumber: 3,
            title: 'Krok Integracyjny',
            instruction: 'Sformułuj jedno zdanie, które wyrówna te trzy poziomy w najbliższej rozmowie.',
            promptText: 'Moje zdanie kongruentne:',
            placeholder: 'Potrzebuję przedyskutować podział zadań, ponieważ obecny harmonogram przekracza moje moce operacyjne...'
          }
        ],
        reflectionQuestions: [
          'Ile energii życiowej zużywasz każdego dnia na udawanie kogoś, kim nie jesteś?',
          'O ile lżejsze staje się życie, gdy Twoje „tak” oznacza naprawdę „tak”, a Twoje „nie” oznacza „nie”?'
        ]
      }
    },
    {
      id: 'sec-16-5',
      pageNumber: 782,
      sectionNumber: '16.5',
      title: 'Pętle cyrkularne w relacjach i zespołach: Taniec oskarżeń',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'W relacjach nie ma prostej przyczynowości. Istnieje taniec sprzężony zwrotnie. Klasyczny wzorzec to pętla Demand-Withdraw (Żądanie-Wycofanie):',
        'Partner A czuje lęk przed odrzuceniem → zaczyna krytykować i naciskać na rozmowę („Nigdy ze mną nie rozmawiasz!”) → Partner B czuje zalanie emocjonalne i lęk przed oceną → wycofuje się do pokoju i milczy → Partner A widzi milczenie jako potwierdzenie odrzucenia → krzyczy głośniej → Partner B ucieka z domu.',
        'Kto zaczął? Nikt. Oboje są uwięzieni w choreografii, którą sami współtworzą.',
        'PRZYKŁAD 3: W zespole marketingu menedżer Darek uważał, że jego copywriterka Kasia jest „niesamodzielna i leniwa”, więc kontrolował każdy przecinek w jej tekstach (mikromanagement). Kasia, czując brak zaufania i stałą krytykę, przestała zgłaszać własne pomysły i czekała na dokładne polecenia Darka. Darek widząc to, utwierdzał się w przekonaniu: „Widzicie? Gdybym jej nie kontrolował, nic by nie zrobiła!”. Dopiero interwencja coacha systemowego, który pokazał im pętlę na tablicy, pozwoliła Darkowi cofnąć nadzór, co natychmiast odblokowało kreatywność Kasi.'
      ],
      caseStudyRef: {
        id: 'cs-ch16-malzenstwo-system',
        title: 'Taniec w Labiryncie: Jak Ewa i Krzysztof Przerwali 10-letnią Pętlę Żądanie-Wycofanie',
        subtitle: 'Od cichych dni i wzajemnych oskarżeń do dojrzałego przymierza w terapii systemowej',
        protagonist: 'Ewa (architekt wnętrz, 42 lata) i Krzysztof (inżynier automatyki, 45 lat)',
        context: 'Małżeństwo z 15-letnim stażem, dwójka dzieci w wieku szkolnym, atmosfera chronicznego chłodu emocjonalnego.',
        story: [
          'Ewa czuła się w małżeństwie samotna i przeciążona obowiązkami domowymi. Za każdym razem, gdy Krzysztof wracał z pracy, witała go listą pretensji: „Znowu nic nie zrobiłeś! Muszę o wszystkim myśleć sama!”.',
          'Krzysztof, po całym dniu rozwiązywania awarii w fabryce, odbierał ton żony jako bezwzględny atak na jego męską wartość. Zamykał się w garażu lub zakładał słuchawki, majsterkując przy motocyklu.',
          'Milczenie Krzysztofa doprowadzało Ewę do szału. Wchodziła do garażu, wyrywała mu słuchawki z uszu i krzyczała. Krzysztof wychodził na spacer bez słowa na 3 godziny.',
          'Wreszcie po ostrej awanturze w święta, kiedy Krzysztof spakował walizkę, trafili do terapeuty systemowego. Byli przekonani, że terapeuta rozstrzygnie: „kto ma rację, a kto jest winny”.',
          'Terapeuta odmówił szukania winnego. Narysował na tablicy cyrkularną pętlę: 1. Krzysztof czuje się niedoceniony → ucieka w milczenie. 2. Ewa czuje się opuszczona → ucieka w krzyk. 3. Krzyk Ewy potwierdza obawy Krzysztofa, że jest złym mężem → ucieka głębiej. 4. Ucieczka Krzysztofa potwierdza obawy Ewy, że jest sama → krzyczy głośniej.',
          'Oboje zobaczyli, że ich wrogiem nie jest partner — ich wrogiem jest SAM TANIEC, w który dali się wciągnąć.',
          'Protokół przerwania pętli: Krzysztof zobowiązał się, że gdy poczuje chęć ucieczki, powie: „Ewo, czuję się przytłoczony. Nie uciekam od ciebie, potrzebuję 20 minut ciszy, a o 19:30 usiądę z tobą do herbaty i porozmawiamy”. Ewa zobowiązała się, że w tym czasie nie wejdzie do pokoju i nie użyje słów „ty zawsze”.',
          'Po 6 miesiącach małżeństwo odzyskało bliskość, intymność i poczucie głębokiego przymierza partnerskiego.'
        ],
        decisionTaken: 'Zrezygnowanie z szukania winnego na rzecz wspólnego zdemontowania toksycznej pętli komunikacyjnej.',
        whatProtagonistSaw: 'Ewa widziała w Krzysztofie bezdusznego ignoranta; Krzysztof widział w Ewie wiecznie niezadowoloną jędzę.',
        whatWasMissed: 'Że za jej krzykiem kryła się paniczna tęsknota za bliskością, a za jego ucieczką — głęboki ból z powodu bycia niewystarczającym.',
        psychologicalAnalysis: {
          coreMechanism: 'Cyrkularna pętla Demand-Withdraw napędzana stylami przywiązania (lękowy Ewy i unikający Krzysztofa).',
          cognitiveBiases: [
            { name: 'Podstawowy błąd atrybucji', description: 'Oboje tłumaczyli zachowanie partnera złą wolą i defektem charakteru.', impact: 'Eskalacja pogardy.' },
            { name: 'Selektywna uwaga', description: 'Ewa rejestrowała tylko chwile, gdy Krzysztof milczał; Krzysztof rejestrował tylko momenty jej krzyku.', impact: 'Utrwalenie zniekształceń.' }
          ],
          defenseMechanisms: [
            { name: 'Wycofanie emocjonalne (Stonewalling)', explanation: 'Znieczulenie układu nerwowego przed zalaniem afektywnym.' }
          ],
          emotionalDynamic: 'Przejście od wzajemnego terroru obronnego do bezbronnej, bezpiecznej empatii.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ośrodek bólu społecznego (dACC)', role: 'Rejestracja odrzucenia jako fizycznego zranienia', activationState: 'Nadaktywny u obojga' },
            { region: 'Układ przywspółczulny (gałąź brzuszna nerwu błędnego)', role: 'Zaangażowanie społeczne i bezpieczny kontakt wzrokowy', activationState: 'Przywrócony po interwencji terapeuty' }
          ],
          neurotransmitters: [
            { name: 'Oksytocyna', roleInScenario: 'Odbudowa więzi przywiązaniowej podczas spokojnych rozmów wieczornych' }
          ],
          biologicalTimeline: [
            { timeMs: 'Umówione 20 minut pauzy', process: 'Tętno Krzysztofa opada z 105 do 68 bpm, umożliwiając racjonalny dialog.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Cyrkularna Przebudowa Dialogu', script: '„Widzę, jak wpadamy w naszą starą pętlę. Kocham cię i nie chcę w to grać. Usiądźmy na kanapie i powiedz mi, czego w tej chwili najbardziej potrzebujesz”.', rationale: 'Natychmiast przerywa automatyzm kłótni.' }
          ]
        },
        alternativePath: 'Gdyby nie terapia systemowa, za 2 lata doszłoby do bolesnego rozwodu z walką o majątek i traumatyzacją dzieci.',
        readerQuestion: 'W jaki powtarzalny taniec cyrkularny dajesz się wciągać swoim bliskim i współpracownikom?',
        keyTakeaway: 'Nie pytaj, kto zaczął. Zapytaj, jak możecie oboje przestać tańczyć taniec zniszczenia.'
      }
    },
    {
      id: 'sec-16-6',
      pageNumber: 786,
      sectionNumber: '16.6',
      title: 'Odporność ekologiczna: Budowanie antykruchego środowiska życia',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nassim Nicholas Taleb w książce „Antykruchość” wprowadził fundamentalne rozróżnienie:',
        'Rzeczy kruche pękają pod wpływem wstrząsu (szklanka spadająca na podłogę).',
        'Rzeczy odporne wytrzymują wstrząs bez zmian (kamień).',
        'Rzeczy ANTYKRUCHE stają się SILNIEJSZE pod wpływem wstrząsu (mięśnie rosnące pod wpływem mikrourazów na treningu, układ odpornościowy uczący się na kontakcie z bakterią).',
        'Celem tej książki jest uczynienie Cię człowiekiem antykruchym. Każdy kryzys, każda zdrada, każda porażka staje się materiałem budulcowym dla Twojej nowej mądrości.'
      ]
    },
    {
      id: 'sec-16-7',
      pageNumber: 790,
      sectionNumber: '16.7',
      title: 'Pętla podwójna (Double-Loop Learning): Zmiana zasad zamiast gaszenia pożarów',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Chris Argyris z Harvard Business School wyróżnił dwa poziomy uczenia się:',
        'Pojedyncza Pętla (Single-Loop): „Zrobiłem błąd → jak go szybko naprawić?”. Skupia się na technice i objawach.',
        'Podwójna Pętla (Double-Loop): „Zrobiłem błąd → jakie ukryte założenia, schematy myślenia i wartości sprawiły, że podjąłem taką decyzję?”. Skupia się na systemie operacyjnym umysłu.',
        'Ludzie sukcesu nie rozwiązują w kółko tych samych problemów. Przeprowadzają audyt podwójnej pętli i zmieniają reguły gry.',
        'PRZYKŁAD 4: Przedsiębiorca Robert co pół roku tracił kluczowego kierownika sprzedaży. W pojedynczej pętli za każdym razem zatrudniał nową agencję rekrutacyjną i oferował 20% wyższą pensję (leczenie objawowe). W podwójnej pętli usiadł i zbadał własne założenia: „Dlaczego odchodzą? Ponieważ mam ukryte przekonanie, że nikt nie zrobi tego lepiej ode mnie, przez co nie pozwalam im podjąć ani jednej samodzielnej decyzji”. Robert zmienił strukturę uprawnień w spółce — od 3 lat rotacja na kluczowych stanowiskach wynosi zero.'
      ]
    },
    {
      id: 'sec-16-8',
      pageNumber: 794,
      sectionNumber: '16.8',
      title: 'Etyka wpływu w świecie dezinformacji i algorytmów',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Z wiedzą zawartą w Tomie I i Tomie II stajesz się człowiekiem o wyjątkowej sile rażenia. Znasz słabe punkty ludzkiego umysłu, wiesz, jak działa framing, znasz regułę wzajemności, techniki etykietowania emocji i błędy atrybucji.',
        'W tym miejscu pojawia się fundamentalne pytanie etyczne: CZYM RÓŻNI SIĘ MISTRZ WPŁYWU OD MANIPULATORA?',
        'Różnica tkwi w INTENCJI i PRZEJRZYSTOŚCI:',
        'Manipulator ukrywa swoje intencje, traktuje drugiego człowieka jak przedmiot do osiągnięcia własnej korzyści i pozostawia go osłabionego lub ograbionego.',
        'Lider Etyczny działa z otwartą przyłbicą, wzmacnia podmiotowość drugiej strony i dąży do porozumień, w których rosną obie strony.',
        'W świecie zdominowanym przez algorytmy manipulujące emocjami, Twoja prawość i wierność prawdzie są najcenniejszą walutą społeczną.'
      ]
    },
    {
      id: 'sec-16-9',
      pageNumber: 798,
      sectionNumber: '16.9',
      title: 'Higiena ekologiczna umysłu: Tworzenie azylu kognitywnego',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nie możesz zachować jasności umysłu, kąpiąc się codziennie w szambie informacyjnym. Twój umysł staje się tym, czym go karmisz.',
        'ZASADY EKOLOGII POZNAWCZEJ:',
        '1. Bezwzględna selekcja źródeł (mniej wiadomości, więcej książek i recenzowanych badań).',
        '2. Ochrona poranków i wieczorów (pierwsza i ostatnia godzina dnia wolna od ekranów).',
        '3. Spacery w naturze bez elektroniki (przywracanie uwagi mimowolnej wg Attention Restoration Theory Kaplana).',
        '4. Przebywanie z ludźmi, którzy podnoszą Twoją poprzeczkę moralną i intelektualną.'
      ]
    },
    {
      id: 'sec-16-10',
      pageNumber: 802,
      sectionNumber: '16.10',
      title: 'Od plemienności do przymierza: Sztuka budowania mostów ponad podziałami',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Ewolucja wyposażyła nas w plemienny mózg (W My kontra Oni, Rozdział 6). Algorytmy mediów społecznościowych bezwzględnie to wykorzystują, polaryzując narody, rodziny i społeczności.',
        'Dojrzałość społeczna polega na przekroczeniu logiki plemienia na rzecz logiki Przymierza. Przymierze nie wymaga jednomyślności. Wymaga uznania godności drugiego człowieka i gotowości do poszukiwania wspólnego dobra.',
        'PRZYKŁAD 5: Zebranie wspólnoty mieszkaniowej na krakowskim osiedlu. Wybucha zajadła kłótnia między młodymi rodzicami chcącymi wybudować plac zabaw a właścicielami samochodów żądającymi dodatkowych miejsc parkingowych. Padają wyzwiska, sprawa trafia do sądu. Starsza mieszkanka osiedla, emerytowana nauczycielka pani Helena, zabiera głos w duchu pojednania: „Szanowni sąsiedzi, czy pamiętacie, że wszyscy wybraliśmy to osiedle, bo chcieliśmy spokoju i bezpieczeństwa? Przejdźmy się po okolicy”. Okazało się, że za blokiem leży nieużywana działka miejska. Dzięki wspólnej petycji miasto przekazało działkę na parking, a dawny trawnik stał się pięknym placem zabaw. Plemienna wojna zamieniła się w sukces całej społeczności.'
      ],
      caseStudyRef: {
        id: 'cs-ch16-szkola-dialog',
        title: 'Wojna o Smartfony w Liceum: Jak Myślenie Systemowe Przekształciło Polaryzację w Przymierze',
        subtitle: 'Konflikt rodziców, nauczycieli i uczniów rozwiązany za pomocą zintegrowanych zasad dialogu',
        protagonist: 'Magdalena (Dyrektorka Społecznego Liceum, 48 lat), Mateusz (przewodniczący samorządu uczniowskiego, 18 lat) i Rafał (przewodniczący rady rodziców, 46 lat)',
        context: 'Gwałtowny spadek wyników w nauce, fala cyberprzemocy na TikToku i wniosek grupy rodziców o natychmiastowy zakaz wnoszenia telefonów do szkoły pod groźbą kar dyscyplinarnych.',
        story: [
          'Szkoła stanęła w ogniu wojny domowej. Rafał (rada rodziców) krzyczał na zebraniu: „Telefony niszczą mózgi naszych dzieci! Jeśli dyrekcja nie wprowadzi zakazu, zabierzemy dzieci ze szkoły!”.',
          'Uczniowie poczuli się potraktowani jak bezmyślni przestępcy. Mateusz ogłosił strajk uczniowski: „Nie jesteśmy więźniami! Żyjemy w XXI wieku, używamy telefonów do notatek i nauki! Zakaz to średniowiecze!”.',
          'Nauczyciele byli wyczerpani byciem policjantami rekwirującymi telefony na przerwach. Atmosfera w szkole stała się nie do zniesienia.',
          'Dyrektorka Magdalena zrozumiała, że wprowadzenie jednostronnego zakazu (Styl Rywalizacji) wywoła jedynie podziemny opór, fałszowanie obecności i eskalację cyberprzemocy w domach.',
          'Zastosowanie myślenia systemowego: Magdalena zorganizowała „Okrągły Stół Edukacji Cyfrowej”. Zamiast głosowania większościowego, zastosowała 3 zasady:',
          '1. Rozdzielenie ludzi od problemu: Zakaz ataków osobistych; badanie twardych danych neurologicznych o dopaminie i uwadze.',
          '2. Odkrycie ukrytych interesów: Rodzice nie chcieli gnębić dzieci — bali się o ich przyszłość i zdrowie psychiczne. Uczniowie nie chcieli bezmyślnie scrollować — bali się wykluczenia rówieśniczego i braku kontaktu ze światem.',
          '3. Współtworzenie rozwiązań integracyjnych: Uczniowie pod przewodnictwem Mateusza sami opracowali „Kartę Higieny Cyfrowej”.',
          'Postanowienia Karty: Lekcje w pełnym trybie Focus (telefony w dedykowanych etui na biurku nauczyciela). Przerwy: stworzenie strefy analogowej z bilardem, planszówkami i muzyką, gdzie ekrany są wyłączone, oraz strefy cyfrowej w bibliotece do pracy projektowej.',
          'Rezultat: Liczba incydentów cyberprzemocy spadła o 85%, wyniki matur wzrosły, a szkoła stała się ogólnokrajowym modelem dojrzałego dialogu społecznego.'
        ],
        decisionTaken: 'Dyrektorka odrzuciła autorytarny zakaz na rzecz włączenia wszystkich stron w proces projektowania reguł systemowych.',
        whatProtagonistSaw: 'Początkowo rodzice widzieli w uczniach uzależnione zombie, a uczniowie w rodzicach autorytarnych tyranów.',
        whatWasMissed: 'Że obie strony miały wspólny cel: dobrostan młodego pokolenia i jego zdolność do odniesienia sukcesu w dorosłym życiu.',
        psychologicalAnalysis: {
          coreMechanism: 'Przejście od polaryzacji plemiennej (In-group vs Out-group) do tożsamości nadrzędnej (Superordinate Goal).',
          cognitiveBiases: [
            { name: 'Naiwny realizm', description: 'Przekonanie rodziców, że ich spojrzenie na technologię jest jedynym obiektywnym.', impact: 'Ignorowanie argumentów młodzieży.' },
            { name: 'Reaktancja psychiczna', description: 'Gwałtowny opór uczniów przed narzuceniem zakazu bez konsultacji.', impact: 'Bunt i strajk.' }
          ],
          defenseMechanisms: [
            { name: 'Polaryzacja grupowa', explanation: 'Radykalizacja postaw wewnątrz zamkniętych grup rodziców na WhatsAppie.' }
          ],
          emotionalDynamic: 'Przejście od lęku i gniewu do dumy ze wspólnie wypracowanego kompromisu.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Przednia kora zakrętu obręczy', role: 'Konflikt wartości i monitorowanie błędów', activationState: 'Ukojona po uzgodnieniu wspólnych norm' },
            { region: 'Kora przedczołowa', role: 'Długofalowe planowanie i samokontrola uczniów', activationState: 'Wzmocniona poczuciem współwłasności reguł' }
          ],
          neurotransmitters: [
            { name: 'Dopamina i Oksytocyna', roleInScenario: 'Zastąpienie pustych strzałów dopaminowych z TikToka oksytocyną z realnych relacji przy planszówkach na przerwach' }
          ],
          biologicalTimeline: [
            { timeMs: '3 miesiące po wdrożeniu', process: 'Mierzalna poprawa wskaźników uwagi i nastroju u 90% uczniów.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Protokół Okrągłego Stołu', script: '„Nie pytamy, kto ma rację. Pytamy, jak możemy razem stworzyć szkołę, z której wszyscy będziemy dumni”.', rationale: 'Wymusza kooperację ponad podziałami pokoleniowymi.' }
          ]
        },
        alternativePath: 'Gdyby dyrektorka wprowadziła bezwzględny zakaz policyjny, szkołę opuściłoby 40% uczniów, a konflikt przeniósłby się na sale sądowe i media lokalne.',
        readerQuestion: 'W jakich konfliktach w Twojej społeczności lub rodzinie brakuje odwagi, by usiąść do Okrągłego Stołu i poszukać tożsamości nadrzędnej?',
        keyTakeaway: 'Ludzie nie sprzeciwiają się zmianom. Ludzie sprzeciwiają się temu, gdy są zmieniani siłą bez prawa do głosu.'
      }
    },
    {
      id: 'sec-16-11',
      pageNumber: 806,
      sectionNumber: '16.11',
      title: 'Do Współzależności: Trzy etapy dojrzałości kognitywno-społecznej',
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
            { tactic: 'Presja Czasu i Groźba Wizerunkowa', description: 'Przeciwnik: „Podpisujcie albo zrywamy!” — manipulacja wykorzystująca lęk przed kompromitacją w mediach.', vulnerabilityExploited: 'Strach przed publiczną utratą twarzy' }
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
      ],
      exerciseRef: {
        id: 'ex-16-mapa-systemowa',
        title: 'Konstruktor Osobistej Mapy Systemowej (Wielka Synteza)',
        subtitle: 'Zintegruj wiedzę z Tomu I i Tomu II w jeden spójny dokument operacyjny Twojego życia',
        objective: 'Stworzenie indywidualnego kompasu samoregulacji poznawczo-społecznej.',
        durationMinutes: 30,
        neuroScientificFoundation: 'Integracja narracyjna doświadczeń wzmacnia połączenia pomiędzy hipokampem, ciałem migdałowatym a przyśrodkową korą przedczołową, podnosząc odporność psychologiczną.',
        steps: [
          {
            stepNumber: 1,
            title: 'Błędy poznawcze (Tom I)',
            instruction: 'Wypisz swoje 2 najczęstsze błędy poznawcze z Tomu I (np. błąd potwierdzenia, tunelowanie uwagi).',
            promptText: 'Moje pułapki umysłu:',
            placeholder: 'Błąd atrybucji (oceniam innych surowiej niż siebie) i myślenie katastroficzne...'
          },
          {
            stepNumber: 2,
            title: 'Styl w relacjach (Tom II)',
            instruction: 'Wpisz swój dominujący styl w konflikcie i wskaż 1 pętlę cyrkularną, w której tkwisz.',
            promptText: 'Moja dynamika relacyjna:',
            placeholder: 'Styl unikania; pętla: gdy ktoś naciska, ja milczę, co wzmaga jego presję...'
          },
          {
            stepNumber: 3,
            title: 'Nawyk kotwiczący i Przymierze',
            instruction: 'Zdefiniuj jeden nienegocjowalny nawyk regeneracji i sformułuj osobistą Deklarację Współzależności.',
            promptText: 'Mój nawyk i deklaracja:',
            placeholder: 'Nawyk: 8h snu i 30 minut spaceru bez telefonu. Deklaracja: Tworzę relacje oparte na prawdzie i zaufaniu...'
          }
        ],
        reflectionQuestions: [
          'O ile bardziej współczujący i wyrozumiały stałeś się dla samego siebie po zrozumieniu biologii swojego mózgu?',
          'O ile bardziej cierpliwy jesteś wobec innych ludzi, wiedząc, z jakimi niewidzialnymi mechanizmami się zmagają?'
        ]
      }
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

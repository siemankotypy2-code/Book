import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterFourteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W jaki sposób obraz siebie wpływa na podejmowanie kolejnych decyzji w codziennym życiu (Sekcja 14.1)?',
    topic: 'Czym jest obraz siebie',
    sectionRef: 'Sekcja 14.1',
    options: [
      { label: 'A', text: 'Obraz siebie to bezużyteczna etykieta słowna, która nie ma przełożenia na zachowanie.', isCorrect: false },
      { label: 'B', text: 'Obraz siebie działa jak filtr regulujący zachowanie — określa, które działania są uznawane za naturalne dla danej osoby, a które za obce.', isCorrect: true },
      { label: 'C', text: 'Obraz siebie jest ukształtowany w 100% genetycznie i nie ulega zmianie.', isCorrect: false },
      { label: 'D', text: 'Obraz siebie wpływa wyłącznie na relacje ze znajomymi w mediach społecznościowych.', isCorrect: false }
    ],
    explanation: 'Sposób, w jaki opisujemy samego siebie („jestem zorganizowany” vs „jestem leniwy”), definiuje oczekiwania co do własnych reakcji i wpływa na wybierane opcje.',
    keyTakeaway: 'Tożsamość nie tylko odpowiada na pytanie „Kim jestem?”, ale współdecyduje o tym: „Co zrobię w tej sytuacji?”.'
  },
  {
    id: 2,
    question: 'Na czym polega pętla samowzmacniającego się przekonania o sobie (Sekcja 14.3)?',
    topic: 'Pętla samowzmacniająca',
    sectionRef: 'Sekcja 14.3',
    options: [
      { label: 'A', text: 'Przekonanie wywołuje oczekiwanie porażki, co prowadzi do unikania ćwiczeń i słabszego rezultatu, który następnie jest interpretowany jako dowód słuszności wyjściowego przekonania.', isCorrect: true },
      { label: 'B', text: 'Przekonanie automatycznie gwarantuje sukces bez podjmowania jakiegokolwiek wysiłku.', isCorrect: false },
      { label: 'C', text: 'Pętla samowzmacniająca działa wyłącznie przy pozytywnych przekonaniach.', isCorrect: false },
      { label: 'D', text: 'Przekonanie zmienia wyniki badań naukowych bez udziału zachowania.', isCorrect: false }
    ],
    explanation: 'Negatywna etykieta („Jestem słaby z matematyki”) powoduje zniechęcenie i brak prób, co daje gorszy wynik. Wynik ten jest potem błędnie traktowany jako „dowód” wrodzonego braku zdolności.',
    keyTakeaway: 'Pojedynczy wynik nie uzasadnia globalnego wniosku o całej tożsamości jednostki.'
  },
  {
    id: 3,
    question: 'Co dzieje się, gdy człowiek postępuje w sposób sprzeczny ze swoim obrazem siebie (Sekcja 14.5)?',
    topic: 'Spójność psychologiczna i dysonans',
    sectionRef: 'Sekcja 14.5',
    options: [
      { label: 'A', text: 'Doświadcza napięcia psychicznego (dysonansu poznawczego), które stara się zredukować poprzez zmianę zachowania, zmianę interpretacji lub zmianę przekonania o sobie.', isCorrect: true },
      { label: 'B', text: 'Nie odczuwa żadnych emocji, bo umysł nie zauważa sprzeczności.', isCorrect: false },
      { label: 'C', text: 'Automatycznie zapomina o tym wydarzeniu w ciągu 5 sekund.', isCorrect: false },
      { label: 'D', text: 'Jego tożsamość natychmiast ulega całkowitej destrukcji.', isCorrect: false }
    ],
    explanation: 'Dążenie do spójności sprawia, że ludzie często racjonalizują swoje postępowanie („to był wyjątek”, „nie miałem wyboru”), aby obronić dotychczasowy obraz samego siebie.',
    keyTakeaway: 'Umysł dąży do zachowania spójności pomiędzy przekonaniami, wartościami a działaniem.'
  },
  {
    id: 4,
    question: 'W jaki sposób dojdzie do trwałej zmiany obrazu samego siebie (Sekcja 14.7)?',
    topic: 'Zmiana tożsamości',
    sectionRef: 'Sekcja 14.7',
    options: [
      { label: 'A', text: 'Wyłącznie poprzez wielokrotne powtarzanie pozytywnych haseł przed lustrem.', isCorrect: false },
      { label: 'B', text: 'Poprzez gromadzenie rzeczywistych dowodów z powtarzalnego zachowania, które stopniowo aktualizują opis własnej osoby.', isCorrect: true },
      { label: 'C', text: 'Poprzez całkowite odcięcie się od swojej przeszłości i zmianę imienia.', isCorrect: false },
      { label: 'D', text: 'Zmiana tożsamości jest niemożliwa po ukończeniu 18. roku życia.', isCorrect: false }
    ],
    explanation: 'Sama deklaracja słowna bez pokrycia w doświadczeniu jest odrzucana przez umysł jako niewiarygodna. To rzeczywiste, mierzalne próby dostarczają dowodów dla nowej tożsamości.',
    keyTakeaway: 'Zmiana tożsamości zachodzi na drodze gromadzenia dowodów z powtarzalnego działania.'
  },
  {
    id: 5,
    question: 'W historii Pawła (Sekcja 14.8), co pozwoliło przerwać pętlę „Nie jestem dobry z nauki”?',
    topic: 'Studia przypadku — przerwanie pętli',
    sectionRef: 'Sekcja 14.8',
    options: [
      { label: 'A', text: 'Sformułowanie hasła: „Od dzisiaj jestem genialnym uczniem”.', isCorrect: false },
      { label: 'B', text: 'Zmiana pytania z „Czy jestem dobry z matematyki?” na „Czy potrafię poprawić konkretną umiejętność?” oraz praca nad małą częścią materiału z obserwacją postępu.', isCorrect: true },
      { label: 'C', text: 'Rezygnacja z nauki i zmiana szkoły na prostszą.', isCorrect: false },
      { label: 'D', text: 'Obwinienie nauczycieli za wszystkie dotychczasowe niepowodzenia.', isCorrect: false }
    ],
    explanation: 'Przesunięcie uwagi ze sztywnej etykiety na proces uczenia się i wykonanie konkretnego ćwiczenia dostarczyło dowodu poprawy, zmieniając przewidywania Pawła.',
    keyTakeaway: 'Zastąp pytanie o stałą cechę pytaniem o konkretną umiejętność możliwą do poprawienia.'
  },
  {
    id: 6,
    question: 'Jaka jest różnica pomiędzy sformułowaniem „Jestem beznadziejny” a „Zrobiłem błąd w tym zadaniu” (Sekcja 14.10)?',
    topic: 'Etykietowanie siebie vs ocena zachowania',
    sectionRef: 'Sekcja 14.10',
    options: [
      { label: 'A', text: 'Pierwsze jest tożsamościową etykietą uogólniającą całą osobę, podczas gdy drugie opisuje konkretne, pojedyncze zachowanie możliwe do poprawy.', isCorrect: true },
      { label: 'B', text: 'Obydwa zdania oznaczają dokładnie to samo w analizie psychologicznej.', isCorrect: false },
      { label: 'C', text: 'Drugie zdanie świadczy o braku krytycyzmu wobec siebie.', isCorrect: false },
      { label: 'D', text: 'Pierwsze zdanie mobilizuje do większego wysiłku niż drugie.', isCorrect: false }
    ],
    explanation: 'Przypisanie błędu stałej cesie osobowości niszczy poczucie skuteczności, podczas gdy ocena konkretnego zachowania pozostawia przestrzeń na naukę i korektę.',
    keyTakeaway: 'Oddzielaj ocenę pojedynczego zachowania od definicji całej swojej osoby.'
  },
  {
    id: 7,
    question: 'W jaki sposób przynależność do grupy wpływa na tożsamość indywidualną (Sekcja 14.6)?',
    topic: 'Tożsamość grupowa',
    sectionRef: 'Sekcja 14.6',
    options: [
      { label: 'A', text: 'Tożsamość grupowa całkowicie kasuje pamięć osobistą.', isCorrect: false },
      { label: 'B', text: 'Tożsamość grupowa dostarcza poczucia przynależności i celów, ale gdy wymaga bezkrytycznej lojalności, krytyka grupy może być odbierana jako atak na własne „ja”.', isCorrect: true },
      { label: 'C', text: 'Tożsamość grupowa występuje wyłącznie w kibicowaniu drużynom sportowym.', isCorrect: false },
      { label: 'D', text: 'Tożsamość grupowa nie ma żadnego związku z poczuciem bezpieczeństwa.', isCorrect: false }
    ],
    explanation: 'Podział na „my” i „oni” wzmacnia więzi wewnątrz grupy, ale może skłaniać do odrzucania argumentów i obrony statusu grupy za wszelką cenę.',
    keyTakeaway: 'Przynależność daje siłę, ale nie powinna zastępować samodzielnego myślenia krytycznego.'
  }
];

export const chapterFourteenCaseStudyPawel: CaseStudy = {
  id: 'cs-ch14-pawel-nauka',
  title: 'Pętla Samospełniającej Etykiety: Paweł i Przekonanie „Nie Nadaję Się do Nauki”',
  subtitle: 'Anatomia etykietowania siebie, oczekiwania porażki i metodycznego zbierania dowodów na rzecz nowej tożsamości',
  protagonist: 'Paweł, 16 lat, uczeń szkoły średniej',
  context: 'Pokój domowy, próba podjęcia przygotowań do sprawdzianu z chemii.',
  story: [
    'Przez kilka lat w szkole podstawowej Paweł miał trudności z przedmiotami ścisłymi. Po kilku słabych ocenach zaczął słyszeć od otoczenia i powtarzać samemu sobie: „Nie jestem typem osoby, która dobrze się uczy. Jestem słaby z nauki”.',
    'Z czasem to zdanie przestało być oporem czy podsumowaniem przeszłych ocen — stało się przewidywaniem przyszłości. Przed każdym kolejnym sprawdzianem Paweł zakładał z góry: „I tak tego nie zrozumieniem”. Oczekiwanie porażki wywoływało zniechęcenie, więc siadał do książek późno, uczył się pobieżnie i szybko rezygnował przy pierwszym trudniejszym zadaniu.',
    'Brak rzetelnej pracy prowadził do słabego wyniku ze sprawdzianu. Otrzymując dwójkę, Paweł myślał z ulgą: „Wiedziałem! Przecież mówiłem, że jestem słaby z nauki”. Ocena stawała się rzekomym „dowodem”, lecz Paweł nie zauważał, że to jego własne przekonanie doprowadziło do zachowania, które zagwarantowało porażkę.',
    'Powstała pełna pętla samowzmacniająca: przekonanie („nie umiem”) → oczekiwanie („i tak oblężę”) → zachowanie (pobieżny brak ćwiczeń) → rezultat (słaba ocena) → interpretacja („mam dowód”) → wzmocnienie przekonania.',
    'Przełom nastąpił po zmianie pytania. Zamiast pytać: „Czy jestem zdolny?”, Paweł postawił pytanie procesowe: „Czy potrafię opanować ten jeden konkretny schemat bilansowania równań?”. Rozbił materiał na małą część, wykonał 5 zadań z korektą błędów i po raz pierwszy otrzymał czwórkę. Ten konkretny dowód zaczął kruszyć stary obraz samego siebie.'
  ],
  decisionTaken: 'Paweł przestał oceniać całą swoją tożsamość i skupił się na gromadzeniu dowodów z pojedynczych opanowanych umiejętności.',
  whatProtagonistSaw: 'Paweł widział w sobie osobę naturalnie pozbawioną talentu do nauki.',
  whatWasMissed: 'Że słabe wyniki były konsekwencją braku regularnego ćwiczenia i szybkiego rezygnowania, wywołanych lękiem przed potwierdzeniem etykiety.',
  psychologicalAnalysis: {
    coreMechanism: 'Samospełniające się proroctwo oparte na sztywnej etykiecie tożsamościowej i błądzie potwierdzenia.',
    cognitiveBiases: [
      { name: 'Etykietowanie uogólniające', description: 'Przeniesienie pojedynczych niepowodzeń na stałą cechę całej osobowości.', impact: 'Poczucie bezradności i brak prób.' },
      { name: 'Błąd potwierdzenia (Confirmation Bias)', description: 'Zauważanie wyłącznie ocen potwierdzających tezę „jestem słaby” i ignorowanie małych sukcesów.', impact: 'Utrwalenie negatywnego obrazu siebie.' }
    ],
    defenseMechanisms: [
      { name: 'Asekuracja (Self-handicapping)', explanation: 'Nieuczenie się do sprawdzianu, by w razie porażki winą obarczyć brak czasu, a nie brak zdolności.' }
    ],
    emotionalDynamic: 'Rezygnacja i lęk przed oceną → pobieżna praca → ulga z porażki zgodnej z przewidywaniem → wzmocnienie etykiety.'
  },
  decisionProcessAnalysis: {
    trigger: 'Informacja o nadchodzącym sprawdzianie z chemii.',
    attentionFocus: 'Myśl o własnej niekompetencji i trudności materiału.',
    interpretation: '„Nie nadaję się do tego, i tak nie zrozumiem”.',
    emotion: 'Rezygnacja, zniechęcenie, wstyd.',
    impulse: 'Odcinać się od nauki i zająć się czymś prostym.',
    action: 'Przejrzenie notatek przez 5 minut bez rozwiązywania zadań.',
    consequence: 'Słaby wynik ze sprawdzianu i utwierdzenie się w negatywnym przekonaniu.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przyśrodkowa kora przedczołowa (mPFC)', role: 'Przetwarzanie informacji dotyczących tożsamości i własnej osoby', activationState: 'Utrwalony wzorzec negatywnego opisu siebie' },
      { region: 'Układ nagrody', role: 'Brak spodziewanego sukcesu wygasza chęć do podejmowania wysiłku', activationState: 'Spadek poziomu gotowości dopaminowej' }
    ],
    neurotransmitters: [
      { name: 'Dopamina', roleInScenario: 'Brak poczucia skuteczności obniżał motywację do podjęcia kolejnych prób.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Przed nauką', process: 'Myśl o braku zdolności obniża gotowość kory przedczołowej do wysiłku.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Przesunięcie na Proces', script: '„Nie oceniam, jaki jestem ogólnie — sprawdzam tylko, czy rozumiem to jedno konkretne zadanie”.', rationale: 'Usuwa zagrożenie dla tożsamości i pozwala na chłodne uczenie się.' }
    ]
  },
  alternativePath: 'Gdyby Paweł nadal powtarzał „jestem słaby z nauki”, wkrótce porzuciłby myśl o dalszej edukacji i wybrał drogę życiową poniżej swoich rzeczywistych możliwości.',
  readerQuestion: 'Jaką etykietę przykleiłeś sobie w dzieciństwie i traktujesz ją dzisiaj jak prawdę objawioną?',
  keyTakeaway: 'Nie musisz być geniuszem — wystarczy, że zgromadzisz konkretne dowody opanowania pojedynczych czynności.'
};

export const chapterFourteenCaseStudyKatarzyna: CaseStudy = {
  id: 'cs-ch14-katarzyna-lider',
  title: 'Przełamanie Etykiety Uległości: Katarzyna i Tożsamość Lidera',
  subtitle: 'Od przekonania „nie potrafię stawiać granic” do budowania nowej roli w zespole',
  protagonist: 'Katarzyna, 32 lata, specjalistka ds. marketingu',
  context: 'Firma prywatna, awans na stanowisko kierownika zespołu po 5 latach pracy wykonawczej.',
  story: [
    'Katarzyna przez całe życie opisywała siebie słowami: „Jestem osobą miłą, ugodową i niekonfliktową. Nie nadaję się do rządzenia ludźmi ani stawiania twardych wymagań”. Ten obraz siebie pomagał jej w relacjach towarzyskich, ale stał się pułapką po awansie.',
    'Gdy została kierownikiem 5-osobowego zespołu, za każdym razem, gdy miała przekazać trudną uwagę lub rozliczyć pracownika ze spóźnienia, odczuwała silny dysonans poznawczy. Myślała: „Jeśli powiem to twardo, przestanę być sobą. Będę wyrodną, złą osobą”.',
    'Dlatego unikała konfrontacji, przejmowała zadania podwładnych i pracowała do późnej nocy. Zespół zaczął ignorować terminy, a Katarzyna była wykończona. Jej tożsamość „osoby miłej” uniemożliwiała jej pełnienie roli kierownika.',
    'Przełom nastąpił, gdy zmieniła definicję pojęcia „stawianie granic”. Zamiast traktować to jako „bycie agresywną”, zdefiniowała asertywność jako „dbałość o jasność i szacunek dla całego zespołu”. Zaczęła wprowadzać mikro-zmiany: jasny kontrakt na początku projektu, cotygodniowe powtarzalne rozmowy i twarde egzekwowanie ustaleń.',
    'Po trzech miesiącach zauważyła, że zespół pracuje sprawniej i darzy ją większym szacunkiem. Jej obraz siebie uległ aktualizacji: „Jestem liderem, który potrafi łączyć życzliwość z jasnymi wymaganiami”.'
  ],
  decisionTaken: 'Katarzyna zredefiniowała przekonanie o własnej tożsamości i zaczęła gromadzić dowody profesjonalnego kierowania zespołem.',
  whatProtagonistSaw: 'Katarzyna uważała, że stawianie wymagań jest sprzeczne z jej „prawdziwą naturą”.',
  whatWasMissed: 'Że ugodowość i życzliwość można połączyć z asertywnością, a dotychczasowa etykieta była jedynie nawykiem unikania dyskomfortu.',
  psychologicalAnalysis: {
    coreMechanism: 'Transformacja obrazu siebie poprzez redefinicję pojęć i gromadzenie doświadczeń w nowej roli.',
    cognitiveBiases: [
      { name: 'Fałszywa alternatywa (Myślenie czarno-białe)', description: 'Założenie, że można być albo „miłym i uległym”, albo „agresywnym i złym”.', impact: 'Paraliż asertywności.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja uległości', explanation: 'Tłumaczenie braku egzekwowania zadań „dbałością o dobrą atmosferę”.' }
    ],
    emotionalDynamic: 'Dysonans poznawczy przy stawianiu granic → zmiana definicji roli → małe sukcesy → aktualizacja tożsamości.'
  },
  decisionProcessAnalysis: {
    trigger: 'Spóźnienie pracownika z kluczowym raportem.',
    attentionFocus: 'Lęk przed wyjściem na osobę nieprzyjemną.',
    interpretation: '„Stawianie wymagań zniszczy moją relację z zespołem”.',
    emotion: 'Niepokój, poczucie przeciążenia.',
    impulse: 'Samodzielnie dokończyć raport w nocy.',
    action: 'Przeprowadzenie zrównoważonej rozmowy oceniającej według jasnego kontraktu.',
    consequence: 'Dostarczenie raportu przez pracownika i wzrost szacunku w zespole.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Detekcja dysonansu między obrazem siebie a wymaganiami roli', activationState: 'Uciszona po redefinicji pojęć' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna i serotonina', roleInScenario: 'Spadek poczucia zagrożenia relacyjnego po udanych rozmowach asertywnych.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Pierwsza rozmowa', process: 'Wysokie wzbudzenie somatyczne ustępuje po przeprowadzeniu rozmowy według skryptu.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Jasne Kontraktowanie', script: '„Moja życzliwość oznacza szacunek do Twojej osoby, ale szacunek do organizacji wymaga terminowości”.', rationale: 'Łączy nową tożsamość lidera z dotychczasowymi wartościami.' }
    ]
  },
  alternativePath: 'Gdyby Katarzyna nie zmieniła obrazu siebie, zrezygnowałaby z awansu lub wylądowała w szpitalu z powodu wypalenia zawodowego.',
  readerQuestion: 'Jaką rolę zawodową lub społeczną odrzucasz tylko dlatego, że wydaje się sprzeczna z Twoją stałą etykietą?',
  keyTakeaway: 'Nie musisz zmieniać swoich wartości — wystarczy, że rozszerzysz definicję tego, kim potrafisz być w różnych kontekstach.'
};

export const chapterFourteenExerciseSelfMap: SelfExercise = {
  id: 'ex-ch14-self-map',
  title: 'Ćwiczenie 14.1: Mapa Własnego Obrazu Siebie',
  subtitle: 'Zbadaj strukturę przymiotników i ról, którymi opisujesz samego siebie',
  objective: 'Uświadomienie sobie zawartości swojego bieżącego systemu tożsamości.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Strukturyzacja wiedzy tożsamościowej aktywuje przyśrodkową korę przedczołową (mPFC).',
  steps: [
    {
      stepNumber: 1,
      title: 'Odpowiedz na Pytanie „Kim Jestem?”',
      instruction: 'Zapisz 10 dokończeń zdania „Jestem...”. Używaj cech, ról, umiejętności i przekonań.',
      promptText: 'Moje 10 określeń:',
      placeholder: 'Jestem... spokojny, pracowity, słaby z języków, troskliwy, ostrożny, partnerem, inżynierem...'
    },
    {
      stepNumber: 2,
      title: 'Podziel Określenia na Wspierające i Ograniczające',
      instruction: 'Które z tych określeń dają Ci siłę i otwartość, a które budują mur nie do przebicia?',
      promptText: 'Wspierające vs Ograniczające:',
      placeholder: 'Wspierające: pracowity, troskliwy. Ograniczające: słaby z języków, nieśmiały w grupie...'
    },
    {
      stepNumber: 3,
      title: 'Oceń Trwałość Określeń',
      instruction: 'Czy określenia ograniczające to stałe prawdy fizyczne, czy opisy minionych nawyków?',
      promptText: 'Ocena trwałości:',
      placeholder: '„Słaby z języków” to nie cecha genetyczna — to podsumowanie braku regularnych ćwiczeń w przeszłości...'
    }
  ],
  reflectionQuestions: [
    'O ile lżej czujesz się, wiedząc, że opis siebie nie jest wyryty w kamieniu?',
    'Które z tych określeń przejąłeś bezkrytycznie od swoich rodziców lub nauczycieli?'
  ]
};

export const chapterFourteenExerciseHowDoIKnow: SelfExercise = {
  id: 'ex-ch14-how-do-i-know',
  title: 'Ćwiczenie 14.2: „Skąd Wiem, że to Prawda?”',
  subtitle: 'Poddaj krytycznej weryfikacji swoje najsilniejsze ograniczenie tożsamościowe',
  objective: 'Osłabienie ślepej wiary w negatywne przekonanie o sobie.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Kwestionowanie ugruntowanych dogmatów zakłóca automatyczne odruchy myślowe w sieci domyślnej (DMN).',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz Jedno Przekonanie Ograniczające',
      instruction: 'Zapisz zdanie w rodzaju: „Nie potrafię...”, „Nie nadaję się do...”, „Jestem z natury...”.',
      promptText: 'Przekonanie ograniczające:',
      placeholder: '„Nie potrafię przemawiać publicznie i panicznie się ośmieszę”...'
    },
    {
      stepNumber: 2,
      title: 'Zadaj Pytanie „Skąd wiem, że to prawda?”',
      instruction: 'Wypisz konkretne dowody z przeszłości, na których opiera się to przekonanie.',
      promptText: 'Moje dowody z przeszłości:',
      placeholder: 'Dwa słabe wystąpienia w szkole 5 lat temu, gdy pociły mi się dłonie...'
    },
    {
      stepNumber: 3,
      title: 'Zbadaj Luki w Dowodach',
      instruction: 'Czy te 2 wydarzenia sprzed lat naprawdę uzasadniają wniosek o całej Twojej przyszłości?',
      promptText: 'Weryfikacja wniosku:',
      placeholder: 'Nie, te wydarzenia dowodzą tylko braku przygotowania wtedy, a nie braku możliwości nauczenia się tego teraz...'
    }
  ],
  reflectionQuestions: [
    'Gdyby Twój przyjaciel powiedział o sobie to samo, jakich argumentów użyłbyś, by go pocieszyć?',
    'Dlaczego dla siebie jesteś zazwyczaj bardziej surowym sędzią niż dla innych?'
  ]
};

export const chapterFourteenExerciseBeliefAnalysis: SelfExercise = {
  id: 'ex-ch14-belief-analysis',
  title: 'Ćwiczenie 14.3: Analiza Przekonania o Sobie',
  subtitle: 'Prześledź, jak przekonanie wpływa na Twoje decyzje i oczekiwania',
  objective: 'Zrozumienie mechanizmu powiązania między etykietą a konkretnym wyborem.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Analiza ciągu przekonanie → oczekiwanie → wybór zwiększa świadomość ról tożsamościowych.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zapisz Przekonanie i Oczekiwanie',
      instruction: 'Co myślisz o sobie w danym obszarze i czego w związku z tym oczekujesz?',
      promptText: 'Przekonanie i oczekiwanie:',
      placeholder: 'Przekonanie: „Nie jestem osobą sprawną fizycznie”. Oczekiwanie: „Na treningu będę najgorszy”...'
    },
    {
      stepNumber: 2,
      title: 'Zapisz Zachowanie wynikające z Oczekiwania',
      instruction: 'Jak zachowujesz się w sytuacji próby pod wpływem tego oczekiwania?',
      promptText: 'Konkretne zachowanie:',
      placeholder: 'Unikam zapisania się na zajęcia / ćwiczę niechętnie i szybko rezygnuję...'
    },
    {
      stepNumber: 3,
      title: 'Zapisz Interpretację Wyniku',
      instruction: 'Jak interpretujesz brak postępu?',
      promptText: 'Interpretacja rezultatu:',
      placeholder: '„Mówiłem! Przecież z natury nie nadaję się do sportu”...'
    }
  ],
  reflectionQuestions: [
    'Czy widzisz, jak samo przekonanie wyprodukowało zachowanie, które dało słaby wynik?',
    'W którym miejscu możesz podjąć decyzję o zmianie zachowania mimo starego przekonania?'
  ]
};

export const chapterFourteenExerciseLabelVsBehavior: SelfExercise = {
  id: 'ex-ch14-label-vs-behavior',
  title: 'Ćwiczenie 14.4: Etykieta a Konkretne Zachowanie',
  subtitle: 'Zamień globalne uogólnienie tożsamościowe na opis modyfikowalnego działania',
  objective: 'Przejście z języka cech stałych na język konkretnych czynności.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Opis procesowy aktywuje grzbietowo-boczną korę przedczołową ukierunkowaną na rozwiązywanie zadań.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zapisz Etykietę Tożsamościową',
      instruction: 'Napisz zdanie uogólniające całą Twoją osobę.',
      promptText: 'Etykieta uogólniająca:',
      placeholder: '„Jestem bałaganiarzem i nieogarniętym człowiekiem”...'
    },
    {
      stepNumber: 2,
      title: 'Przełóż Etykietę na Opis Zachowania',
      instruction: 'Opisz to samo zjawisko używając języka konkretnych czynności bez używania słowa „jestem”.',
      promptText: 'Opis zachowania:',
      placeholder: '„W tym tygodniu nie odłożyłem ubrań do szafy po powrocie z pracy i nie uporządkowałem papierów na biurku”...'
    },
    {
      stepNumber: 3,
      title: 'Zdefiniuj Korektę Zachowania',
      instruction: 'Jaki konkretny krok naprawczy zrobisz w obszarze tych czynności?',
      promptText: 'Korekta zachowania:',
      placeholder: 'Dzisiaj o 19:00 poświęcę 10 minut na odłożenie ubrań i ułożenie papierów...'
    }
  ],
  reflectionQuestions: [
    'O ile łatwiej zmienić 10-minutowe zachowanie niż „całą swoją osobowość”?',
    'Za ile dni powtarzania tego zachowania przestaniesz nazywać siebie tym mianem?'
  ]
};

export const chapterFourteenExerciseIdentityDecision: SelfExercise = {
  id: 'ex-ch14-identity-decision',
  title: 'Ćwiczenie 14.5: Tożsamość a Decyzja',
  subtitle: 'Zastosuj pytania tożsamościowe jako filtr przy wyborach życiowych',
  objective: 'Wykorzystanie opisu siebie jako pozytywnego wyznacznika kierunku działania.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Decyzje zgodne ze wspierającym samopojęciem wywołują poczucie spójności i satysfakcji w układzie nagrody.',
  steps: [
    {
      stepNumber: 1,
      title: 'Określ Pożądaną Tożsamość',
      instruction: 'Kim chcesz być w wybranym obszarze życiowym?',
      promptText: 'Pożądana tożsamość:',
      placeholder: 'Osoba dbająca o własne zdrowie / odpowiedzialny profesjonalista...'
    },
    {
      stepNumber: 2,
      title: 'Sformułuj Pytanie Filtrujące',
      instruction: 'Zbuduj pytanie w formacie: „Co w tej sytuacji zrobiłaby osoba, która...”?',
      promptText: 'Pytanie filtrujące:',
      placeholder: '„Co w tej sytuacji wybrałaby osoba, która prawdziwie dba o swoje ciało?”...'
    },
    {
      stepNumber: 3,
      title: 'Zastosuj Pytanie do Bieżącego Wyboru',
      instruction: 'Przeanalizuj decyzję, przed którą stoisz dzisiaj, używając swojego pytania.',
      promptText: 'Moja decyzja:',
      placeholder: 'Zamiast zjeść przetworzony posiłek z dostawy, poświęcę 15 minut na przygotowanie prostej sałatki...'
    }
  ],
  reflectionQuestions: [
    'Jak czujesz się w ciele, gdy Twoja decyzja jest zgodna z Twoją wymarzoną tożsamością?',
    'W jakich obszarach najczęściej podejmujesz decyzje sprzeczne ze swoimi wartościami?'
  ]
};

export const chapterFourteenExerciseSelfReinforcingLoop: SelfExercise = {
  id: 'ex-ch14-self-reinforcing-loop',
  title: 'Ćwiczenie 14.6: Analiza Pętli Samowzmacniającej',
  subtitle: 'Przeanalizuj cały obwód od przekonania do interpretacji rezultatu',
  objective: 'Zidentyfikowanie słabych ogniw w ugruntowanym schemacie myślowym.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Krok po kroku rozłożenie schematu umożliwia świadome przerwanie automatycznego cyklu.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wpisz Przekonanie i Oczekiwanie',
      instruction: 'Zapisz negatywne założenie początkowe.',
      promptText: 'Przekonanie i oczekiwanie:',
      placeholder: '„Nie potrafię budować głębokich relacji” → Oczekiwanie: „I tak zostanę odrzucony”...'
    },
    {
      stepNumber: 2,
      title: 'Wpisz Zachowanie i Rezultat',
      instruction: 'Jakie zachowanie podejmujesz pod wpływem oczekiwania i jaki jest tego wynik?',
      promptText: 'Zachowanie i wynik:',
      placeholder: 'Zachowanie: wycofanie i brak inicjatywy w rozmowie → Wynik: płytki kontakt...'
    },
    {
      stepNumber: 3,
      title: 'Wskaż Punkt Przerwania Pętli',
      instruction: 'W którym z tych 4 kroków zrealizujesz zmianę w najbliższym tygodniu?',
      promptText: 'Punkt przerwania:',
      placeholder: 'Zmienię zachowanie: mimo lęku zadam 2 otwarte pytania i zaczekam na odpowiedź...'
    }
  ],
  reflectionQuestions: [
    'Dlaczego zmiana samego zachowania jest łatwiejsza niż bezpośrednia „zmiana przekonania”?',
    'Jak zareaguje Twój umysł, gdy zgromadzisz pierwszy pozytywny wynik?'
  ]
};

export const chapterFourteenExerciseEvidenceForAndAgainst: SelfExercise = {
  id: 'ex-ch14-evidence-for-and-against',
  title: 'Ćwiczenie 14.7: Dowody Za i Przeciw Przekonaniu',
  subtitle: 'Zrób rzetelny audyt procesowy swoich założeń tożsamościowych',
  objective: 'Zbudowanie obiektywnego bilansu doświadczeń życiowych.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Wypisanie dowodów przeciwnych osłabia błąd potwierdzenia w kory przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zapisz Przekonanie do Audytu',
      instruction: 'Napisz zdanie, które chcesz sprawdzić.',
      promptText: 'Przekonanie:',
      placeholder: '„Zawsze odkładam wszystko na ostatnią chwilę”...'
    },
    {
      stepNumber: 2,
      title: 'Wypisz Dowody Za (Potwierdzające)',
      instruction: 'Jakie sytuacje przemawiają za tym przekonaniem?',
      promptText: 'Dowody ZA:',
      placeholder: 'Odebrałem dowód osobisty w ostatnim dniu, uczyłem się do egzaminu w nocy...'
    },
    {
      stepNumber: 3,
      title: 'Wypisz Dowody Przeciw (Zaprzeczające)',
      instruction: 'Przypomnij sobie sytuacje, w których postąpiłeś inaczej — chociażby raz lub dwa razy!',
      promptText: 'Dowody PRZECIW:',
      placeholder: 'Opłaciłem rachunek 3 dni przed terminem, kupiłem bilety miesiąc wcześniej, przyszedłem na spotkanie 5 minut przed czasem...'
    }
  ],
  reflectionQuestions: [
    'Dlaczego do tej pory ignorowałeś dowody z punktu 3?',
    'Jak brzmi zrównoważone wnioskowanie po przeanalizowaniu obu kolumn?'
  ]
};

export const chapterFourteenExerciseDesigningNewBehavior: SelfExercise = {
  id: 'ex-ch14-designing-new-behavior',
  title: 'Ćwiczenie 14.8: Projektowanie Nowego Zachowania',
  subtitle: 'Zaplanuj eksperyment behawioralny do zgromadzenia dowodu nowej tożsamości',
  objective: 'Stworzenie konkretnej próby dostarczającej nowych danych do obrazu siebie.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Praktyczne wykonanie zaplanowanej próby tworzy nowy ślad synaptyczny i dostarcza informacji zwrotnej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj Nową Cechę / Rolę',
      instruction: 'Jaki dowód zachowania chciałbyś zgromadzić?',
      promptText: 'Nowy dowód tożsamości:',
      placeholder: 'Chcę zgromadzić dowód, że potrafię przygotować rzetelne wystąpienie...'
    },
    {
      stepNumber: 2,
      title: 'Zaprojektuj Mały Eksperyment Behawioralny',
      instruction: 'Jako konkretne, małe działanie wykonasz w tym tygodniu jako dowód?',
      promptText: 'Eksperyment behawioralny:',
      placeholder: 'Przedstawię 3-minutowe podsumowanie na najbliższym zebraniu zespołu przygotowane dzień wcześniej...'
    },
    {
      stepNumber: 3,
      title: 'Zapisz Wniosek Po Wykonaniu',
      instruction: 'Co powiedziała Ci ta próba o Twoich możliwościach?',
      promptText: 'Mój wniosek z eksperymentu:',
      placeholder: 'Przygotowanie daje mi spokój, a myśli o ośmieszeniu były przesadzone...'
    }
  ],
  reflectionQuestions: [
    'Ile takich małych eksperymentów potrzebujesz, aby trwale zmienić opis siebie?',
    'Dlaczego pojedyncza próba jest cenna niezależnie od tego, czy wypadła idealnie?'
  ]
};

export const chapterFourteenExerciseIdentityVsAction: SelfExercise = {
  id: 'ex-ch14-identity-vs-action',
  title: 'Ćwiczenie 14.9: Różnica Między „Jestem Taki” a „Zrobiłem To”',
  subtitle: 'Rozdziel swoją wartość ludzką od oceny pojedynczego zdarzenia',
  objective: 'Ochrona poczucia własnej wartości przy jednoczesnym zachowaniu odpowiedzialności za błędy.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Rozdzielenie oceny struktury „ja” od zachowania obniża poziom reakcji lękowo-wstydowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zapisz Ostatnie Niepowodzenie lub Błąd',
      instruction: 'Opisz konkretną sytuację, z której nie jesteś ddumny.',
      promptText: 'Sytuacja błędu:',
      placeholder: 'Uniosłem głos na bliską osobę podczas rozmowy wieczorem...'
    },
    {
      stepNumber: 2,
      title: 'Sformułuj Ocenę w Języku Tożsamości (Niewłaściwa)',
      instruction: 'Jak brzmiała negatywna etykieta tożsamościowa?',
      promptText: 'Etykieta tożsamościowa:',
      placeholder: '„Jestem złym, agresywnym partnerem i nie potrafię kochać”...'
    },
    {
      stepNumber: 3,
      title: 'Sformułuj Ocenę w Języku Działania (Właściwa)',
      instruction: 'Przekształć to zdanie na precyzyjny opis zachowania z uwzględnieniem kontekstu.',
      promptText: 'Opis zachowania:',
      placeholder: '„Byłem skrajnie zmęczony i zareagowałem podniesionym głosem na trudne pytanie. Zrobiłem błąd i przeproszę za to zachowanie”...'
    }
  ],
  reflectionQuestions: [
    'O ile łatwiej przeprosić i naprawić relację, gdy nie musisz bronić się przed etykietą „złego człowieka”?',
    'Jak możesz ćwiczyć tę różnicę w ocenie zachowań swoich dzieci lub współpracowników?'
  ]
};

export const chapterFourteen: Chapter = {
  number: 14,
  title: 'Tożsamość, Obraz Siebie i Przekonania o Sobie',
  subtitle: 'Jak powstaje opis własnej osoby, mechanizm samowzmacniających przekonań, tożsamość jako filtr decyzji oraz zmiana obrazu siebie',
  leadParagraph: 'Każdy człowiek posiada pewien obraz samego siebie. „Jestem spokojny”, „Jestem nieśmiały”, „Jestem dobry z matematyki”, „Nie jestem osobą, która potrafi przemawiać”, „Jestem osobą, która zawsze kończy to, co zaczyna”. Takie zdania mogą wydawać się zwykłymi opisami. Jednak kiedy zaczynają wpływać na kolejne decyzje, stają się częścią systemu regulującego zachowanie. Tożsamość nie jest wyłącznie odpowiedzią na pytanie „Kim jestem?”. Wpływa również na pytanie: „Co zrobimy w tej sytuacji?”.',
  totalEstimatedPages: 58,
  sections: [
    {
      id: 'sec-14-1',
      pageNumber: 658,
      sectionNumber: '14.1',
      title: 'Czym jest obraz siebie? System reprezentacji własnej osoby',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Nikt nie może przez dłuższy czas nosić jednej twarzy dla siebie, a drugiej dla reszty świata, nie ulegając w końcu dezorientacji.',
        author: 'Nathaniel Hawthorne'
      },
      paragraphs: [
        'Każdy człowiek posiada pewien obraz samego siebie: „Jestem spokojny”, „Jestem nieśmiały”, „Jestem dobry z matematyki”, „Nie jestem osobą, która potrafi przemawiać”, „Jestem sportowcem”, „Jestem osobą, która zawsze kończy to, co zaczyna”.',
        'Takie zdania mogą wydawać się zwykłymi opisami stanu rzeczy. Jednak kiedy zaczynają wpływać na kolejne decyzje, stają się częścią systemu regulującego zachowanie. Tożsamość nie jest wyłącznie odpowiedzią na pytanie „Kim jestem?”. Może również wpływać na pytanie: „Co zrobię w tej sytuacji?”.',
        'Obraz siebie to sposób, w jaki człowiek postrzega i opisuje samego siebie. Obejmuje między innymi cechy, umiejętności, role społeczne, wartości, historię własnych doświadczeń, przynależność do grup oraz przekonania dotyczące własnych możliwości.',
        'Nie jest to jeden, całkowicie sztywny i niezmienny obraz. Człowiek może postrzegać siebie inaczej w różnych sytuacjach — ktoś może być pewny siebie wśród przyjaciół, ale niepewny podczas wystąpień publicznych; ktoś może czuć się kompetentny zawodowo, ale niepewny w relacjach. Dlatego zamiast myśleć o jednym stałym „ja”, bardziej trafne jest widzenie systemu różnych reprezentacji własnej osoby.'
      ]
    },
    {
      id: 'sec-14-2',
      pageNumber: 663,
      sectionNumber: '14.2',
      title: '„Kim jestem?” Źródła budowania tożsamości',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Człowiek buduje odpowiedź na pytanie „kim jestem?” na podstawie wielu źródeł:',
        '1. Własne doświadczenia — jeżeli ktoś wielokrotnie rozwiązywał trudne problemy lub wychodził z opresji, rozwija przekonanie: „Potrafię radzić sobie z trudnościami”.',
        '2. Informacje społeczne — komunikaty zwrotne płynące od rodziców, nauczycieli, rówieśników i przełożonych. Jeżeli przez wiele lat ktoś słyszy: „Jesteś beznadziejny z matematyki” lub „Ty zawsze wszystko psujesz”, taki komunikat może zostać włączony do obrazu siebie.',
        'Nie oznacza to jednak, że każde zdanie usłyszane od innych automatycznie staje się wewnętrznym przekonaniem. Znaczenie ma to, kto wypowiada komunikat, jak często, w jakim kontekście, czy jest zgodny z innymi doświadczeniami oraz jak został zinterpretowany przez samego zainteresowanego.'
      ],
      exerciseRef: chapterFourteenExerciseSelfMap
    },
    {
      id: 'sec-14-3',
      pageNumber: 668,
      sectionNumber: '14.3',
      title: 'Przekonania o sobie i pętla samowzmacniająca',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przekonanie „Nie potrafię przemawiać publicznie” zaczyna wpływać na zachowanie jeszcze przed samym wystąpieniem. Człowiek może unikać zgłaszania się, nie ćwiczyć, odczuwać większy stres oraz interpretować drobne błędy jako dowód własnej niekompetencji.',
        'Wtedy powstaje mechanizm samowzmacniający:',
        'przekonanie → oczekiwanie → zachowanie → doświadczenie → interpretacja → wzmocnienie przekonania.',
        'Wyobraźmy sobie ucznia uważającego: „Jestem słaby z matematyki”. Z powodu tego przekonania nie ćwiczy, przed sprawdzianem ma duże braki i otrzymuje słabą ocenę. Następnie myśli: „Wiedziałem! Naprawdę jestem słaby z matematyki”. Ocena stała się dla niego rzekomym „dowodem”, ale jednocześnie to samo przekonanie przyczyniło się do zachowania, które zwiększyło prawdopodobieństwo słabego wyniku.',
        'Nie oznacza to, że wszystkie przekonania są fałszywe lub wyimaginowane. Może istnieć rzeczywista trudność. Problem polega na tym, że pojedynczy wynik nie zawsze uzasadnia szeroki, absolutny wniosek o całej osobie.'
      ],
      exerciseRef: chapterFourteenExerciseBeliefAnalysis
    },
    {
      id: 'sec-14-4',
      pageNumber: 673,
      sectionNumber: '14.4',
      title: 'Tożsamość a decyzje: Filtr „Człowiek taki jak ja...”',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Tożsamość może działać jak filtr decyzji. Jeżeli człowiek myśli: „Jestem osobą, która dba o zdrowie”, wybór określonego zachowania (np. spacer zamiast przetworzonego posiłku) staje się zgodny z jego obrazem siebie.',
        'Jeżeli myśli: „Jestem osobą, która zawsze odkłada wszystko na później”, podobne opóźnianie pracy zostaje potraktowane jako norma.',
        'Powstaje ciąg:',
        '„Jestem X” → „Człowiek taki jak ja robi Y” → decyzja → zachowanie → nowe doświadczenie.',
        'Tożsamość wpływa na działanie, ale działanie może również wpływać na tożsamość. Każdy wykonany ruch staje się dowodem wspierającym określony opis samego siebie.'
      ],
      exerciseRef: chapterFourteenExerciseIdentityDecision
    },
    {
      id: 'sec-14-5',
      pageNumber: 678,
      sectionNumber: '14.5',
      title: 'Spójność psychologiczna i dysonans poznawczy',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Człowiek zazwyczaj nie chce doświadczać siebie jako osoby sprzecznej wewnętrznie. Jeżeli ktoś uważa siebie za osobę uczciwą, a postępuje w sposób, który uznaje za nieuczciwy, pojawia się nieprzyjemne napięcie — dysonans poznawczy.',
        'W takiej sytuacji istnieją trzy drogi redukcji napięcia:',
        '1. Zmiana zachowania (zaprzestanie nieuczciwego działania),',
        '2. Zmiana interpretacji zachowania („to był wyjątek”, „nie miałem wyboru”, „każdy zrobiłby to samo”),',
        '3. Zmiana obrazu siebie („może wcale nie jestem taki uczciwy”).',
        'Najczęściej ludzki umysł wybiera drogę drugą — zmianę interpretacji lub usprawiedliwienie, aby obronić dotychczasowe przekonanie o własnej wartości i spójności.'
      ],
      exerciseRef: chapterFourteenExerciseIdentityVsAction
    },
    {
      id: 'sec-14-6',
      pageNumber: 683,
      sectionNumber: '14.6',
      title: 'Tożsamość grupowa: Mechanizm „My” i „Oni”',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Człowiek nie określa siebie wyłącznie poprzez cechy indywidualne. Definiuje się także poprzez przynależność: „Jestem członkiem tej grupy”, „Jestem częścią tej społeczności”, „To są moi ludzie”.',
        'Powstaje podział na „my” i „oni”. Przynależność daje ogromne wsparcie, poczucie bezpieczeństwa, wspólne cele i język wartości. Problem pojawia się wtedy, gdy przynależność zaczyna wymagać bezkrytycznej lojalności.',
        'Wówczas merytoryczna krytyka zachowania grupy bywa odbierana nie jako dyskusja o faktach, lecz jako bezpośredni atak na własną tożsamość, co blokuje krytyczne myślenie.'
      ]
    },
    {
      id: 'sec-14-7',
      pageNumber: 688,
      sectionNumber: '14.7',
      title: 'Zmiana tożsamości poprzez powtarzalne doświadczenia',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jednym z najbardziej obiecujących aspektów tożsamości jest jej plastyczność i możliwość zmiany. Człowiek może przez lata mówić: „Nie jestem osobą aktywną”, a następnie zacząć regularnie ćwiczyć.',
        'Początkowo zachowanie jest obym eksperymentem: „Próbuję biegać”. Po pewnym czasie: „Biegam regularnie”. Jeszcze później opis brzmi: „Jestem osobą aktywną”. Zmienił się opis samego siebie.',
        'Ta zmiana nie dokonała się przez powtarzanie życzeniowych afirmacji przed lustrem, lecz przez zgromadzenie rzeczywistych dowodów z powtarzalnego zachowania. Dlatego trwała zmiana tożsamości jest ściśle powiązana z działaniem.'
      ],
      exerciseRef: chapterFourteenExerciseDesigningNewBehavior
    },
    {
      id: 'sec-14-8',
      pageNumber: 693,
      sectionNumber: '14.8',
      title: 'Studium przypadku A: Paweł i etykieta „Nie jestem dobry z nauki”',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przeanalizujmy przypadek Pawła, u którego przekonanie o braku zdolności naukowej przekształciło się w samowzmacniającą się pętlę unikania.'
      ],
      caseStudyRef: chapterFourteenCaseStudyPawel
    },
    {
      id: 'sec-14-9',
      pageNumber: 698,
      sectionNumber: '14.9',
      title: 'Studium przypadku B: Katarzyna i tożsamość ugodowości w roli lidera',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przeanalizujmy przypadek Katarzyny, która musiała przebudować definicję własnej tożsamości po awansie na stanowisko kierownicze.'
      ],
      caseStudyRef: chapterFourteenCaseStudyKatarzyna
    },
    {
      id: 'sec-14-10',
      pageNumber: 703,
      sectionNumber: '14.10',
      title: 'Zbiór Warsztatów i Ćwiczeń Rozwojowych z Rozdziału 14',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Praktyczne ćwiczenia umożliwiające mapowanie własnego obrazu siebie, weryfikację ograniczających przekonań, zamianę etykiet na opisy zachowań oraz prowadzenie eksperymentów behawioralnych.'
      ],
      exerciseRef: chapterFourteenExerciseEvidenceForAndAgainst
    },
    {
      id: 'sec-14-11',
      pageNumber: 707,
      sectionNumber: '14.11',
      title: 'Połączenia z innymi rozdziałami: Tożsamość, Motywacja i Stres',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Tożsamość stanowi centralny węzeł integrujący wiedzę o ludzkim zachowaniu:',
        '1. Tożsamość ↔ Motywacja: Wybór celów i poziom gotowości do wysiłku zależą od tego, za jakiego człowieka się uważamy. Powtarzalne przekraczanie luki wykonawczej buduje nowe poczucie skuteczności.',
        '2. Tożsamość ↔ Stres: Przekonania o własnych możliwościach („poradzę sobie” vs „załamię się”) decydują o tym, czy dany stresor zostanie oceniony jako zagrożenie, czy wyzwanie.',
        '3. Tożsamość ↔ Nawyki: Nawyki oparte na tożsamości („Jestem biegaczem”) trwają znacznie dłużej niż nawyki oparte wyłącznie na chęci osiągnięcia celu.'
      ]
    },
    {
      id: 'sec-14-12',
      pageNumber: 711,
      sectionNumber: '14.12',
      title: 'Podsumowanie, Słownik Pojęć i Egzamin Końcowy z Rozdziału 14',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najważniejsze idee do zapamiętania z Rozdziału 14:',
        '• Obraz siebie to system reprezentacji własnej osoby, który działa jak filtr regulujący kolejne decyzje.',
        '• Przekonania o sobie tworzą pętły samowzmacniające: przekonanie → oczekiwanie → zachowanie → wynik → interpretacja.',
        '• Ludzki umysł dąży do spójności psychologicznej i redukcji dysonansu poznawczego.',
        '• Etykiety tożsamościowe („jestem X”) warto zastępować precyzyjnym opisem czynności w czasie i przestrzeni („zrobiłem Y”).',
        '• Trwała zmiana tożsamości następuje w wyniku gromadzenia rzeczywistych dowodów z powtarzalnego działania.',
        'Słownik terminów Rozdziału 14:',
        '• Obraz siebie (Self-Concept) — całościowy system przekonań, wyobrażeń i ocen dotyczących własnej osoby.',
        '• Samospełniająca się przepowiednia — mechanizm, w którym wyjściowe oczekiwanie prowadzi do zachowań wywołujących przewidywany rezultat.',
        '• Dysonans poznawczy — stan napięcia wywołany sprzecznością pomiędzy przekonaniami, wartościami a podjętym działaniem.',
        '• Tożsamość grupowa — część obrazu siebie wynikająca z przynależności do określonych grup społecznych.',
        '• Eksperyment behawioralny — celowe podjęcie nowego zachowania w celu przetestowania i zaktualizowania przekonania o sobie.'
      ]
    }
  ]
};

import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterSeventeenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii społecznej i poznawczej pojęcie „obrazu siebie” (self-concept) różni się od „tożsamości osobistej” tym, że:',
    topic: 'Struktura Tożsamości',
    sectionRef: 'Sekcja 17.2',
    options: [
      { label: 'A', text: 'Obraz siebie to genetycznie zdeterminowany odruch, podczas gdy tożsamość osobista zależy wyłącznie od wykształcenia.', isCorrect: false },
      { label: 'B', text: 'Obraz siebie to całokształt przekonań, wyobrażeń i ocen na własny temat, natomiast tożsamość osobista dotyczy subiektywnego poczucia odrębności, spójności i ciągłości w czasie.', isCorrect: true },
      { label: 'C', text: 'Tożsamość osobista znikająca po ukończeniu 25. roku życia ustępuje miejsca obrazowi siebie.', isCorrect: false },
      { label: 'D', text: 'Obraz siebie jest pojęciem z neobarokowej filozofii, a tożsamość osobista nie istnieje w naukach społecznych.', isCorrect: false }
    ],
    explanation: 'Obraz siebie (self-concept) gromadzi wiedzę deklaratywną („kim jestem, jaki jestem”), podczas gdy tożsamość daje podmiotowe poczucie trwania tego samego „ja” mimo upływu lat i zmian okoliczności.',
    keyTakeaway: 'Obraz siebie to mapa właściwości, tożsamość to poczucie bycia autorem i gospodarzem tej mapy.'
  },
  {
    id: 2,
    question: 'Na czym polega zjawisko self-stereotyping (samospełniającego się etykietowania tożsamościowego)?',
    topic: 'Etykiety i Schematy Tożsamościowe',
    sectionRef: 'Sekcja 17.5',
    options: [
      { label: 'A', text: 'Przyjęcie przez jednostkę etykiety ról lub grupy (np. „jestem humanistą, nie umiem w matematykę”) i podświadome dostosowanie zachowań do ograniczeń wpisanych w tę etykietę.', isCorrect: true },
      { label: 'B', text: 'Kupowanie produktów wyłącznie z naklejoną marką premium.', isCorrect: false },
      { label: 'C', text: 'Krytykowanie innych ludzi za to, że nie posiadają wyższego wykształcenia.', isCorrect: false },
      { label: 'D', text: 'Przekazanie sterowania własnym życiem sztucznej inteligencji.', isCorrect: false }
    ],
    explanation: 'Gdy człowiek przyjmuje tożsamościową etykietę („jestem introwertykiem”, „jestem wybuchowy”), jego mózg traktuje tę etykietę jako normę wykonawczą i filtruje okazje do zachowań niezgodnych z tą matrycą.',
    keyTakeaway: 'Etykieta „jestem taki” zdejmuje odpowiedzialność za elastyczną zmianę zachowania.'
  },
  {
    id: 3,
    question: 'W jaki sposób pamięć autobiograficzna (Sekcja 17.6) uczestniczy w ciągłym rekonstruowaniu tożsamości?',
    topic: 'Pamięć Autobiograficzna a Tożsamość',
    sectionRef: 'Sekcja 17.6',
    options: [
      { label: 'A', text: 'Pamięć autobiograficzna działa jak niepodatne na zmiany nagranie wideo z taśmy monitoringu.', isCorrect: false },
      { label: 'B', text: 'Mózg selektywnie wydobywa i zniekształca wspomnienia tak, aby były zgodne z aktualną narracją tożsamościową i chroniły samopoczucie (ego-defensive bias).', isCorrect: true },
      { label: 'C', text: 'Zapisuje tylko wspomnienia dotyczące innych ludzi, całkowicie ignorując własne przeżycia.', isCorrect: false },
      { label: 'D', text: 'Służy wyłącznie do zapamiętywania dat historycznych i wzorów matematycznych.', isCorrect: false }
    ],
    explanation: 'Jak wykazał Dan McAdams, tożsamość to ewoluująca narracja życiowa. Przypominając sobie wydarzenia z dzieciństwa, modyfikujemy je tak, by pasowały do naszego dzisiejszego obrazu siebie.',
    keyTakeaway: 'Nie pamiętamy przeszłości takiej, jaka była, lecz tworzymy ją na nowo, by uzasadnić to, kim jesteśmy dzisiaj.'
  },
  {
    id: 4,
    question: 'Różnica między sformułowaniem tożsamościowym „Jestem leniwy” a cechą behawioralną „Odkładałem to zadanie przez 3 dni” polega na tym, że:',
    topic: 'Tożsamość a Zachowanie',
    sectionRef: 'Sekcja 17.8',
    options: [
      { label: 'A', text: 'Pierwsze opisuje niezmienną istotę człowieka (stałą cechę), a drugie opisuje konkretne zachowanie w określonym czasie i kontekście, które można zmienić.', isCorrect: true },
      { label: 'B', text: 'Nie ma żadnej różnicy, oba zwroty oznaczają dokładnie to samo fizjologicznie.', isCorrect: false },
      { label: 'C', text: 'Drugie sformułowanie jest objawem zaburzeń neurologicznych.', isCorrect: false },
      { label: 'D', text: 'Sformułowanie „Jestem leniwy” zwiększa plastyczność mózgu dziesięciokrotnie.', isCorrect: false }
    ],
    explanation: 'Etykiety essencjalistyczne („Jestem X”) zamykają przestrzeń sprawczości. Opis behawioralny („Zrobiłem X w warunkach Y”) pozostawia otwartą furtkę do modyfikacji strategii.',
    keyTakeaway: 'Jesteś gospodarzem swoich zachowań, a nie niewolnikiem etykiety, jaką sobie przypisałeś.'
  },
  {
    id: 5,
    question: 'Czym jest konflikt ról społecznych (Role Conflict) opisany w Sekcji 17.11?',
    topic: 'Konflikt Ról Społecznych',
    sectionRef: 'Sekcja 17.11',
    options: [
      { label: 'A', text: 'Brak jakichkolwiek obowiązków społecznych i zawodowych.', isCorrect: false },
      { label: 'B', text: 'Sytuacja, w której oczekiwania i wartości przypisane do jednej roli (np. wymagający dyrektor) wchodzą w bezpośrednią kolizję z wymogami innej roli (np. obecny rodzic, przyjaciel).', isCorrect: true },
      { label: 'C', text: 'Gra aktorska w teatrze bez przygotowanego scenariusza.', isCorrect: false },
      { label: 'D', text: 'Kłótnia między dwoma osobami o to, kto ma wykonać przelew.', isCorrect: false }
    ],
    explanation: 'Każdy człowiek pełni równolegle wiele ról. Próba idealnego spełnienia sprzecznych oczekiwań z różnych ról generuje przewlekłe napięcie tożsamościowe i poczucie winy.',
    keyTakeaway: 'Konflikt ról wymaga świadomej hierarchizacji, a nie próby bycia doskonałym we wszystkich rolach jednocześnie.'
  },
  {
    id: 6,
    question: 'W kontekście plastyczności tożsamości, odruch zachowawczy tożsamości (Identity Defense) objawia się poprzez:',
    topic: 'Obrona Tożsamości',
    sectionRef: 'Sekcja 17.10',
    options: [
      { label: 'A', text: 'Odrzucanie faktów i zwrotnych informacji sprzecznych z ugruntowanym wyobrażeniem o sobie, aby uniknąć bolesnego rozpadu dotychczasowej spójności.', isCorrect: true },
      { label: 'B', text: 'Natychmiastową zmianę wszystkich poglądów politycznych pod wpływem każdego obejrzanego filmu.', isCorrect: false },
      { label: 'C', text: 'Nkontrolowane zasypianie podczas rozmów kwalifikacyjnych.', isCorrect: false },
      { label: 'D', text: 'Utratę zdolności do uczenia się języków obcych.', isCorrect: false }
    ],
    explanation: 'Mózg traktuje podważenie tożsamości tak samo jak zagrożenie fizyczne. Gdy ktoś pokazuje nam dowód na nasz błąd, odczuwamy opór i dysonans, broniąc dotychczasowej struktury jaźni.',
    keyTakeaway: 'Ochrona spójności tożsamości często wygrywa z pragnieniem poznania prawdy.'
  },
  {
    id: 7,
    question: 'Jakie podejście charakteryzuje dojrzałą elastyczność tożsamościową (Identity Flexibility)?',
    topic: 'Elastyczność Tożsamościowa',
    sectionRef: 'Sekcja 17.14',
    options: [
      { label: 'A', text: 'Brak jakichkolwiek wartości i zmienianie poglądów w zależności od tego, kto płaci za lunch.', isCorrect: false },
      { label: 'B', text: 'Postrzeganie siebie jako ewoluującego procesu uczenia się, w którym stabilne pozostają fundamentalne wartości, a zmienne są strategie, przekonania i nawyki.', isCorrect: true },
      { label: 'C', text: 'Uparta obrona każdego błędu z przeszłości jako wyrazu „prawdziwego ja”.', isCorrect: false },
      { label: 'D', text: 'Całkowita izolacja od ludzi w celu uniknięcia jakiegokolwiek wpływu społecznego.', isCorrect: false }
    ],
    explanation: 'Dojrzała tożsamość nie jest sztywnym monolitem ani bezkształtną masą. Jest ugruntowana w rdzennych wartościach, ale zachowuje pełną plastyczność uczenia się z doświadczeń.',
    keyTakeaway: 'Bądź twardy w wartościach, lecz elastyczny w tożsamościowych opisach zachowania.'
  },
  {
    id: 8,
    question: 'Co według teorii autoprezentacji (Impression Management) Goffmana stanowi kluczowy element tożsamości w sytuacjach publicznych?',
    topic: 'Tożsamość w Roli',
    sectionRef: 'Sekcja 17.9',
    options: [
      { label: 'A', text: 'Zarządzanie rekwizytami i fasadą (front stage), by wywrzeć pożądane wrażenie na publiczności, z zachowaniem sfery kulis (backstage).', isCorrect: true },
      { label: 'B', text: 'Zawsze mówienie wszystkiego, co przyjdzie do głowy bez względu na konsekwencje.', isCorrect: false },
      { label: 'C', text: 'Ukrywanie swojej twarzy pod maską karnawałową.', isCorrect: false },
      { label: 'D', text: 'Przekonanie, że inni ludzie nie zwracają uwagi na nasze zachowanie.', isCorrect: false }
    ],
    explanation: 'Goffman porównał życie społeczne do teatru. Tożsamość tworzy się na styku tego, co prezentujemy na scenie głównej, i tego, co regenerujemy na kulisach.',
    keyTakeaway: 'Świadomość odgrywania ról chroni przed utożsamieniem własnej wartości z fasadą.'
  },
  {
    id: 9,
    question: 'Sformułowanie Carol Dweck dotyczące nastawienia na rozwój (Growth Mindset) w kontekście tożsamości oznacza, że:',
    topic: 'Nastawienie na Rozwój',
    sectionRef: 'Sekcja 17.13',
    options: [
      { label: 'A', text: 'Możliwości i cechy człowieka są stałe i nieodwołalnie zapisane w genach.', isCorrect: false },
      { label: 'B', text: 'Tożsamość i kompetencje są wynikiem wysiłku, strategii i uczenia się, a trudności są sygnałem rozwoju, nie dowodem niekompetencji.', isCorrect: true },
      { label: 'C', text: 'Każdy człowiek bez treningu może zostać mistrzem olimpijskim w dowolnej dziedzinie w dwa dni.', isCorrect: false },
      { label: 'D', text: 'Nie warto podejmować żadnego wysiłku, bo wszystko zależy od szczęścia.', isCorrect: false }
    ],
    explanation: 'Fixed mindset traktuje porażkę jako wyrok tożsamościowy („Jestem do niczego”), podczas gdy growth mindset traktuje ją jako informację zwrotną o procesie („Ta metoda nie zadziałała”).',
    keyTakeaway: 'Porażka to zdarzenie w czasie, a nie tożsamość człowieka.'
  },
  {
    id: 10,
    question: 'W jaki sposób proces narzucania intencyjnego (Looking-Glass Self – „jaźń odzwierciedlona”) wpływa na kształtowanie się obrazu siebie?',
    topic: 'Jaźń Odzwierciedlona',
    sectionRef: 'Sekcja 17.7',
    options: [
      { label: 'A', text: 'Budujemy obraz siebie na podstawie tego, jak wyobrażamy sobie, że widzą i oceniają nas kluczowe osoby z otoczenia.', isCorrect: true },
      { label: 'B', text: 'Patrzymy w lustro fizyczne przez co najmniej 3 godziny dziennie.', isCorrect: false },
      { label: 'C', text: 'Inni ludzie nie mają najmniejszego wpływu na nasze samopoczucie.', isCorrect: false },
      { label: 'D', text: 'Kopiujemy ruchy ciała każdej napotkanej osoby na ulicy.', isCorrect: false }
    ],
    explanation: 'Cooley wykazał, że społeczny obraz siebie jest zwierciadłem opinii innych ludzi. Jeśli otoczenie traktuje nas jak kompetentnych liderów, przyswajamy tę cechę do tożsamości.',
    keyTakeaway: 'To, jak myślą o nas inni, staje się materiałem budowlanym dla tego, co myślimy o sobie.'
  },
  {
    id: 11,
    question: 'Co jest głównym celem protokołu „Redefinicji Narracji Autobiograficznej” (Sekcja 17.16)?',
    topic: 'Praktyczna Redefinicja Narracji',
    sectionRef: 'Sekcja 17.16',
    options: [
      { label: 'A', text: 'Wymazanie trudnych wydarzeń z pamięci i udawanie, że nigdy nie miały miejsca.', isCorrect: false },
      { label: 'B', text: 'Przeformułowanie trudnych doświadczeń z pozycji „biernej ofiary losu” na pozycję „aktywnego podmiotu, który wyciągnął lekcję i przetrwał”.', isCorrect: true },
      { label: 'C', text: 'Napisanie fikcyjnej powieści fantastycznej pod pseudonimem.', isCorrect: false },
      { label: 'D', text: 'Oskarżenie wszystkich znajomych o własne niepowodzenia życiowe.', isCorrect: false }
    ],
    explanation: 'Przeformułowanie opowieści nie zmienia faktów, lecz ich tożsamościowe znaczenie. Zamiast „Zostałem zniszczony”, nowa narracja brzmi „Przeszedłem przez próbę i zdobyłem odporność”.',
    keyTakeaway: 'Nie zmienisz minionych faktów, ale możesz w pełni zmienić ich tożsamościowy sens.'
  },
  {
    id: 12,
    question: 'Jakie zagrożenie wiąże się ze zjawiskiem tożsamości opartej na zewnętrznej aprobacie (External Identity Validation)?',
    topic: 'Tożsamość Zewnętrzna',
    sectionRef: 'Sekcja 17.12',
    options: [
      { label: 'A', text: 'Ekstremalna niestabilność poczucia własnej wartości, zależna od lajków, pochwał lub chwilowej opinii otoczenia.', isCorrect: true },
      { label: 'B', text: 'Za duża odporność psychiczna na krytykę i stres.', isCorrect: false },
      { label: 'C', text: 'Niekontrolowany wzrost inteligencji logicznej.', isCorrect: false },
      { label: 'D', text: 'Brak możliwości zrobienia zakupów w sklepie spożywczym.', isCorrect: false }
    ],
    explanation: 'Gdy tożsamość stoi na filarach czyjegoś poklasku, jakakolwiek odmowa lub krytyka wywołuje egzystencjalną panikę i załamanie obrazu siebie.',
    keyTakeaway: 'Oparcie tożsamości na zewnętrznych lajkach to budowanie domu na cudzym fundamencie.'
  }
];

export const caseStudiesChapterSeventeen: CaseStudy[] = [
  {
    id: 'studium-17-1-pułapka-etykiety',
    title: 'W więzieniu własnego skryptu: Jak etykieta „analitycznego introwertyka” zablokowała awans Marty',
    subtitle: 'Samospełniająca się przepowiednia tożsamościowa i dekonstrukcja skryptu „ja taki jestem”',
    protagonist: 'Marta, 34 lata, główna analityczka danych w firmie technologicznej',
    context: 'Marta przez lata powtarzała zespołowi i sobie: „Jestem czystym introwertykiem i umysłem ścisłym, nie nadaję się do wystąpień i kierowania ludźmi”. Kiedy pojawiła się szansa awansu na stanowisko dyrektorskie, Marta nie złożyła aplikacji, mimo że merytorycznie przewyższała wszystkich kandydatów.',
    story: [
      'Marta od czasów szkolnych słyszała od nauczycieli i rodziców: „Marta jest cicha, dobrze liczy, ale z ludźmi się nie wychyla”. Przyjęła tę etykietę jako niezmienną prawdę biologiczną. Z czasem zbudowała wokół niej całą swoją tożsamość: ubierała się w stonowane kolory, unikała firmowych wyjść i przekazywała prezentowanie wyników kolegom.',
      'Gdy zarząd ogłosił rekrutację na stanowisko VP of Analytics, przełożony Marty powiedział jej wprost: „Marta, masz najlepsze wyniki i unikalną wiedzę. Zgłoś się”. W mózgu Marty wybuchła panika tożsamościowa. Zamiast ucieszyć się z uznania, odczuła silny dysonans: „Ja dyrektorem? Przecież dyrektor musi czarować tłumy, błyszczeć i dominować. To zupełnie nie jestem ja”.',
      'Marta nie złożyła dokumentów. Aplikację złożył za to jej młodszy kolega, Robert, osoba o znacznie mniejszych kompetencjach merytorycznych, lecz traktująca siebie jako „urodzonego lidera”. Po awansie Roberta Marta czuła rosnącą frustrację i żal, wykonując pod jego dyktando zadania, które sama wymyśliła.',
      'Dopiero podczas pracy z psychologiem Marta zrozumiała, że pomyliła swoje wyuczone zachowania nawykowe z niezmienną cechą tożsamości. Etykieta „cichej analityczki” służyła jej przez lata jako wygodna tarcza chroniąca przed lękiem przed oceną.'
    ],
    dialogue: [
      { speaker: 'Przełożony', text: 'Marta, zgłoś się na VP. Masz największą wiedzę w tym dziale.', subtext: 'Zewnętrzne uznanie kompetencji i próba przełamania etykiety.' },
      { speaker: 'Marta (w myślach)', text: 'Ja na scenie? Nie ma mowy, jestem introwertyczką. Wyśmieją mnie, gdy głos mi zadrży.', subtext: 'Lęk tożsamościowy przed złamaniem dotychczasowej narracji o sobie.' }
    ],
    decisionTaken: 'Marta zrezygnowała ze zgłoszenia kandydatury na stanowisko dyrektora z powodu tożsamościowego przekonania „ja się do tego nie nadaję”.',
    whatProtagonistSaw: 'Wyczerpujące wystąpienia publiczne, głośnych liderów, własny lęk i drżenie rąk przy tablicy.',
    whatWasMissed: 'Fakt, że przywództwo jest zbiorem wyuczalnych umiejętności behawioralnych, a cichy, merytoryczny styl zarządzania jest wysoko ceniony we współczesnych organizacjach.',
    psychologicalAnalysis: {
      coreMechanism: 'Self-stereotyping oraz esencjalistyczna pułapka tożsamościowa (Fixed Mindset wobec osobowości).',
      cognitiveBiases: [
        { name: 'Błąd esencjalizmu', description: 'Traktowanie zmiennych cech zachowania jako sztywnej, genetycznej istoty jednostki.', impact: 'Uniemożliwił Marcie podjęcie jakiejkolwiek próby treningu wystąpień.' },
        { name: 'Confirmation Bias', description: 'Wyszukiwanie w pamięci tylko tych sytuacji, w których Marta czuła się niepewnie w grupie.', impact: 'Wymazanie wspomnień o udanych kameralnych prezentacjach.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja', explanation: 'Tłumaczenie rezygnacji słowami: „Wolisz pracować z danymi, stanowiska menedżerskie są polityczne i brudne”.' }
      ],
      emotionalDynamic: 'Gwałtowny skok lęku przed odrzuceniem w reakcji na propozycję wyjścia z bezpiecznego nawyku rolnego.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja awansu od przełożonego.',
      attentionFocus: 'Własny lęk, wizja porażki przed zarządem.',
      interpretation: '„Jestem introwertyczką, zniszczę tę rolę i kompromituję się”.',
      emotion: 'Lęk egzystencjalny, spadek samopoczucia, późniejszy żal i poczucie krzywdy.',
      impulse: 'Ucieczka, unikanie ryzyka, pozostanie w strefie komfortu.',
      action: 'Niezłożenie aplikacji na stanowisko VP.',
      consequence: 'Praca pod kierunkiem mniej kompetentnego szefa i poczucie utknięcia zawodowego.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Wykrywanie konfliktu między propozycją awansu a wewnętrznym obrazem siebie', activationState: 'Wysoka aktywacja' },
        { region: 'Ciało migdałowate', role: 'Generowanie sygnału zagrożenia dla spójności self-concept', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Utrzymujący się wysoki poziom stresu hamujący plastyczność poznawczą.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowo „zarząd” wywołuje szybki impuls lękowy.' },
        { timeMs: '300 ms+', process: 'Kora przedczołowa generuje racjonalizacje broniące ucieczki.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Auto-manipulacja etykietą', description: 'Używanie introwersji jako wymówki przed podejmowaniem wyzwań.', vulnerabilityExploited: 'Potrzeba wygody i uniknięcia oceny.' }
      ],
      counterMeasures: [
        { step: '1. Zamiana etykiety na opis behawioralny', script: '„Nie jestem nieadekwatna w przemówieniach, lecz mam małe doświadczenie w dużych audytoriach i muszę przećwiczyć strukturę”.', rationale: 'Otwiera przestrzeń uczenia się.' }
      ]
    },
    alternativePath: 'Gdyby Marta rozbiła rolę dyrektora na konkretne umiejętności i podjęła mikrokroki, zdobyłaby awans i zbudowała elastyczny obraz siebie.',
    readerQuestion: 'Jaka etykieta na Twój własny temat powstrzymuje Cię przed podjęciem kluczowego kroku w życiu?',
    keyTakeaway: 'Nie jesteś swoją etykietą. Twoja tożsamość to ewoluujący proces, a nie sztywna matryca z przeszłości.'
  }
];

export const selfExercisesChapterSeventeen: SelfExercise[] = [
  {
    id: 'cwiczenie-17-1-dekonstrukcja-etykiet',
    title: 'Audit Etykiet Tożsamościowych: Od „Jestem taki” do „Zachowuję się tak”',
    subtitle: 'Przekształcanie sztywnych przekonań tożsamościowych w plastyczne opisy behawioralne',
    objective: 'Identyfikacja ograniczających etykiet na własny temat i zamiana ich na elastyczny opis sytuacji oraz nawyków.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Neuroplastyczność kory przedczołowej wymaga przełamania utrwalonych obwodów domyślnej sieci neuronalnej (DMN), które automatycznie aktywują stara narrację o sobie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie etykiet tożsamościowych',
        instruction: 'Zapisz 5 zdań zaczynających się od słów „Nie potrafię...”, „Jestem zbyt...”, „Nigdy nie będę...”.',
        promptText: 'Moje etykiety ograniczające:',
        placeholder: 'np. „Jestem zbyt chaotyczny”, „Nigdy nie nauczę się publicznie przemawiać”'
      },
      {
        stepNumber: 2,
        title: 'Analiza kontekstowa',
        instruction: 'Przy każdej etykiecie napisz, w jakich konkretnych sytuacjach to zachowanie występuje, a kiedy NIE występuje.',
        promptText: 'Wyjątki od reguły i kontekst:',
        placeholder: 'np. „Bywam chaotyczny, gdy działam bez listy zadań, ale w sytuacji kryzysowej potrafię uporządkować priorytety”'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie nowej hipotezy roboczej',
        instruction: 'Przekształć zdanie tożsamościowe na zdanie procesowe z użyciem słowa „Dotychczas...”.',
        promptText: 'Nowe sformułowanie procesowe:',
        placeholder: 'np. „Dotychczas nie stosowałem struktury w przemówieniach, ale mogę opanować tę technikę”'
      }
    ],
    reflectionQuestions: [
      'Kto pierwszy sprzedał Ci tę etykietę w przeszłości?',
      'Jakie korzyści (np. uniknięcie wysiłku lub krytyki) czerpiesz z utrzymywania tego wyobrażenia o sobie?'
    ]
  }
];

export const chapterSeventeen: Chapter = {
  number: 17,
  volume: 3,
  volumeChapterNumber: 1,
  title: 'Rozdział 1: Tożsamość: Kim Właściwie Jestem?',
  subtitle: 'Architektura obrazu siebie, narracja autobiograficzna, role społeczne i mechanizmy plastyczności tożsamościowej',
  leadParagraph: 'Pytanie „Kim jestem?” wydaje się najprostszą intuicją ludzkiego umysłu, lecz z perspektywy neuronauki i psychologii poznawczej odpowiedź na nie jest dynamicznym, stale rekonstruowanym procesem. Tożsamość nie jest nieruchomą rzeźbą ukrytą w głębi naszej psychiki, którą wystarczy „odkryć”. Jest skomplikowaną siecią narracji autobiograficznych, ról społecznych, odruchów zachowawczych i biologicznych struktur pamięci. Zrozumienie, jak powstaje obraz siebie, pozwala odzyskać kontrolę nad własnym życiem i przestać być więźniem etykiet narzuconych przez przeszłość.',
  totalEstimatedPages: 48,
  sections: [
    {
      id: 'sec-17-1',
      pageNumber: 1,
      sectionNumber: '17.1',
      title: 'Iluzja Rdzenia: Dlaczego Tożsamość Nie Jest Nieruchomą Rzeźbą?',
      category: 'wstep',
      readingTimeMinutes: 7,
      quote: {
        text: 'Tożsamość nie jest czymś znalezionym, jest czymś stworzonym.',
        author: 'Thomas Szasz'
      },
      paragraphs: [
        'Wielu ludzi spędza całe życie na poszukiwaniu tzw. „prawdziwego ja”, żywiąc głębokie przekonanie, że gdzieś wewnątrz nich istnieje stały, nieprzetworzony rdzeń osobowości. Oczekują, że pewnego dnia natrafią na ten fundament i odtąd wszystkie decyzje staną się proste. Jest to jednak jedna z najbardziej powszechnych iluzji poznawczych.',
        'Współczesna neuronauka poznawcza wyraźnie pokazuje, że mózg nie posiada jednego „ośrodka jaźni”. Wyobrażenie o sobie powstaje w wyniku skoordynowanej pracy Domyślnej Sieci Neuronalnej (Default Mode Network – DMN), która łączy fragmenty wspomnień, wyobrażenia przyszłości, oceny społeczne i sygnały z ciała w jedną, spójną opowieść.',
        'Gdy mówisz „Jestem introwertykiem”, „Jestem urodzonym liderem” lub „Nie mam talentu do języków”, nie opisujesz obiektywnego faktu fizycznego, takiego jak wzrost czy grupa krwi. Wyrażasz w ten sposób zrekonstruowaną hipotezę tożsamościową, do której Twój umysł dopasował wybrane dowody z przeszłości.'
      ],
      subsections: [
        {
          title: 'Dynamiczna rekonstrukcja self-concept',
          paragraphs: [
            'Obraz siebie (self-concept) ulega nieustannej aktualizacji. Każde nowe doświadczenie, odniesiony sukces czy poniesiona porażka jest przesiewana przez istniejące filtry, ale ma też potencjał do modyfikacji całej struktury.',
            'Problem polega na tym, że umysł wykazuje potężny odruch zachowawczy (Identity Preservation Bias). Woli trzymać się znanej, nawet krzywdzącej etykiety, niż wejść w stan niepewności związany ze zmianą wyobrażenia o sobie.'
          ],
          highlightBox: {
            title: 'Wgląd Neuronaukowy: DMN a narracja o sobie',
            content: 'Gdy nie zajmujesz się trudnym zadaniem obliczeniowym, Domyślna Sieć Neuronalna aktywuje się, snując opowieści o tym, kim jesteś, co inni o Tobie myślą i co wydarzy się jutro. To tam wykuwa się Twoja tożsamość.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-17-2',
      pageNumber: 3,
      sectionNumber: '17.2',
      title: 'Obraz Siebie a Tożsamość Osobista: Precyzyjna Rozdzielczość Pojęciowa',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'W języku potocznym pojęcia takie jak „samoocena”, „obraz siebie”, „tożsamość osobista” i „poczucie własnej wartości” są często używane zamiennie, co prowadzi do chaotycznych wniosków. Aby skutecznie pracować nad własnym rozwojem, musimy wprowadzić ścisłą dyscyplinę pojęciową.',
        'Obraz siebie (self-concept) to poznawczy katalog wiedzy o sobie. Zawiera odpowiedzi na pytania: Jakie mam cechy? Co umiem? Jakie są moje słabości? Jest to struktura informacyjna, przypominająca bazę danych.',
        'Tożsamość osobista (personal identity) to fenomenologiczne poczucie bycia tym samym człowiekiem w czasie. To ciągłość świadomości, która sprawia, że wiedząc, jak bardzo zmieniły się Twoje poglądy od czasów dzieciństwa, nadal czujesz, że to Ty przeszedłeś tę drogę.'
      ],
      subsections: [
        {
          title: 'Tożsamość Społeczna (Social Identity)',
          paragraphs: [
            'Obok tożsamości osobistej istnieje tożsamość społeczna – ta część obrazu siebie, która wywodzi się z przynależności do grup (naród, zawód, klub sportowy, rodzina).',
            'Tożsamość społeczna daje poczucie bezpieczeństwa i przynależności, ale niosąc ze sobą gotowe skrypty zachowań, może drastycznie ograniczać indywidualną autonomię.'
          ]
        }
      ]
    },
    {
      id: 'sec-17-3',
      pageNumber: 5,
      sectionNumber: '17.3',
      title: 'Architektura Ról Społecznych i Maski Tożsamościowe',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Człowiek nie funkcjonuje w próżni. Wchodząc do teatru życia społecznego, nakłada różnorodne role: pracownika, rodzica, partnera, obywatela, klienta. Socjolog Erving Goffman opisał to zjawisko jako dramaturgię życia codziennego.',
        'Każda rola wymaga innego zestawu zachowań, słownictwa, a nawet ekspresji emocjonalnej. Przejście z roli wymagającego szefa w biurze do roli opiekuńczego ojca w domu wymaga elastycznego przełączania obwodów tożsamościowych.',
        'Problem pojawia się wtedy, gdy człowiek całkowicie zrasta się z jedną rolą (np. rolą dyrektora), traktując jej utratę jako fizyczną śmierć własnego „ja”.'
      ]
    },
    {
      id: 'sec-17-4',
      pageNumber: 8,
      sectionNumber: '17.4',
      title: 'Interaktywna Mapa Tożsamości i Ról Społecznych',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przeanalizujmy praktycznie, z jakich filarów składa się Twoja obecna tożsamość. Poniższe narzędzie pozwala wyrenderować mapę ról i zobaczyć, które obszary są ze sobą w konflikcie, a które stanowią Twoją główną siłę.'
      ]
    },
    {
      id: 'sec-17-5',
      pageNumber: 11,
      sectionNumber: '17.5',
      title: 'Samospełniające się Etykiety: Jak Słowa Kształtują Biologię Zachowania',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Kiedy powtarzasz sobie lub innym: „Ja już taki jestem”, uruchamiasz potężny mechanizm poznawczy. Mózg dąży do spójności (cognitive consistency). Jeśli uwierzysz, że jesteś osobą nieśmiałą, każda próba odezwania się na forum będzie traktowana przez ciało migdałowate jako zagrożenie dla przyjętej tożsamości.',
        'Etykiety działają jak soczewka, która przepuszcza tylko te dowody, które potwierdzają przyjęty schemat. Błąd potłuczenia szklanki przez osobę o etykiecie „gajowy i niezgrabny” zostanie uznany za dowód reguły, podczas gdy u osoby o etykiecie „zręcznego sportowca” zostanie potraktowany jako przypadek.'
      ]
    },
    {
      id: 'sec-17-6',
      pageNumber: 14,
      sectionNumber: '17.6',
      title: 'Pamięć Autobiograficzna jako Autorski Warsztat Pisarski',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Większość ludzi wierzy, że wspomnienia są przechowywane w mózgu jak pliki MP4 w twardym dysku. Tymczasem odnajdywanie wspomnień jest procesem twórczym. Każde przywołanie wydarzenia z przeszłości jest jego ponownym przepisaniem w kontekście aktualnego stanu emocjonalnego.',
        'Dan McAdams, badacz psychologii narracyjnej, wykazał, że tożsamość to wyreżyserowana opowieść, w której człowiek przydziela sobie rolę ofiary, bohatera, uciekiniera lub męczennika.',
        'Zmieniając sposób opowiadania o swoich porażkach z przeszłości, zmienia się struktura połączeń neuronalnych odpowiedzialnych za odczuwanie lęku i sprawczości.'
      ]
    },
    {
      id: 'sec-17-7',
      pageNumber: 17,
      sectionNumber: '17.7',
      title: 'Jaźń Odzwierciedlona: Wpływ Innych na Nasz Obraz Siebie',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Pojęcie „jaźni odzwierciedlonej” (looking-glass self) wprowadzone przez Charlesa Cooleya wskazuje, że nie budujemy obrazu siebie w izolacji. Nasze wyobrażenie o własnej wartości jest odbiciem tego, jak sądzimy, że postrzegają nas inni.',
        'Jeśli w dzieciństwie lub w pierwszej pracy Twoje pomysły spotykały się z protekcjonalnym uśmiechem, mogłeś przyswoić tożsamość osoby „mniej błyskotliwej”. Warto zadać sobie pytanie: Czyje oczy patrzą na Ciebie, gdy oceniasz siebie przed lustrem?'
      ]
    },
    {
      id: 'sec-17-8',
      pageNumber: 20,
      sectionNumber: '17.8',
      title: '„Jestem Taki” vs „Zachowuję Się Tak”: Kluczowa Transformacja Językowa',
      category: 'cwiczenia',
      readingTimeMinutes: 7,
      paragraphs: [
        'Jednym z najpotężniejszych narzędzi przebudowy tożsamości jest zmiana gramatyki wewnętrznego monologu. Zdania esencjalistyczne zamrażają plastyczność poznawczą.',
        'Zamiast mówić: „Jestem leniwy”, powiedz: „W ostatnich dwóch dniach odsuwałem napisanie raportu z powodu niejasnych wytycznych”. Pierwsze zdanie przypisuje Ci skazę moralną; drugie precyzyjnie definiuje problem wykonawczy, który można rozwiązać.'
      ],
      exerciseRef: selfExercisesChapterSeventeen[0]
    },
    {
      id: 'sec-17-9',
      pageNumber: 22,
      sectionNumber: '17.9',
      title: 'Scena i Kulisy: Tożsamość w Teatrze Interakcji Społecznych',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'W erze mediów społecznościowych granica między sceną (front stage) a kulisami (backstage) uległa całkowitemu zatarciu. Ludzie ciągle odgrywają wyreżyserowane wersje siebie, oczekując cyfrowej aprobaty.',
        'Gdy wirtualna fasada staje się ważniejsza od rzeczywistego stanu psychicznego, dochodzi do pęknięcia tożsamościowego i przewlekłego poczucia pustki.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[0]
    },
    {
      id: 'sec-17-10',
      pageNumber: 25,
      sectionNumber: '17.10',
      title: 'Odruch Zachowawczy Tożsamości: Za Co Dyskredytujemy Prawdę?',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Mózg broni spójności tożsamości z taką samą zawziętością, z jaką broni ciała przed infekcją. Gdy docierają do nas fakty świadczące o tym, że podjęliśmy złą decyzję lub skrzywdziliśmy kogoś, pojawia się dysonans poznawczy.',
        'Zamiast zmienić obraz siebie („byłem nieuczciwy”), wolimy zinterpretować fakt („oni na to zasłużyli”). Ochrona ego wygrywa z prawdą merytoryczną.'
      ]
    },
    {
      id: 'sec-17-11',
      pageNumber: 28,
      sectionNumber: '17.11',
      title: 'Konflikt Ról: Gdy Oczekiwania Stają w Kolizji',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Bycie bezkompromisowym menedżerem i wyrozumiałym przyjacielem, gdy musisz zwolnić bliską osobę z zespołu, to klasyczny przykład konfliktu ról.',
        'Brak jasnej hierarchii wartości sprawia, że w sytuacjach węzłowych człowiek czuje się zdrajcą niezależnie od tego, którą opcję wybierze.'
      ]
    },
    {
      id: 'sec-17-12',
      pageNumber: 31,
      sectionNumber: '17.12',
      title: 'Tożsamość Zewnętrzna vs Autonomiczna: Gdzie Leży Twój Środek Ciężkości?',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Osoby o tożsamości zewnętrznej uzależniają poczucie wartości od statusu, stanowiska, cen posiadanych przedmiotów i opinii otoczenia. Ich stan psychiczny przypomina łódkę bez kotwicy.',
        'Tożsamość autonomiczna opiera się na wewnętrznych kryteriach: spójności z wartościami, rozwoju kompetencji i zdolności do samoregulacji.'
      ]
    },
    {
      id: 'sec-17-13',
      pageNumber: 34,
      sectionNumber: '17.13',
      title: 'Nastawienie na Rozwój (Growth Mindset) w Budowaniu Obrazu Siebie',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Badania Carol Dweck nad mindsetem pokazują, że ludzie dzielą się na tych, którzy traktują cechy jako stałe (Fixed Mindset), i tych, którzy widzą je jako potencjał do rozwoju (Growth Mindset).',
        'W Growth Mindset błąd nie oznacza „jestem do niczego”, lecz „ten sposób jeszcze nie zadziałał”. To fundamentalna różnica w biologii reakcji na stres.'
      ]
    },
    {
      id: 'sec-17-14',
      pageNumber: 37,
      sectionNumber: '17.14',
      title: '🧠 BŁĘDNA INTUICJA: „Muszę Odnaleźć Prawdziwego Siebie”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Wielu ludzi wierzy, że gdzieś w świecie istnieje ich „prawdziwe ja”, które trzeba odnaleźć poprzez podróże, zmianę pracy czy wielogodzinne rozmyślania.',
        'CO MOŻE BYĆ BŁĘDNE? Szukanie „prawdziwego ja” zakłada, że jesteś rzeźbą czekającą na odkopanie. Sprzyja to bierności i poczuciu, że skoro jeszcze go nie odnalazłeś, nie musisz podejmować wysiłku.',
        'CO MÓWI PSYCHOLOGIA? Nie ma gotowego „ja”, które czeka w szufladzie. Tożsamość jest tworzona przez codzienne wybory, podejmowane nawyki i działania w świecie realnym.',
        'BARDZIEJ PRECYZYJNY MODEL: Nie „szukaj siebie”, lecz świadomie projektuj i buduj swoje zachowania w oparciu o wybrane wartości.'
      ]
    },
    {
      id: 'sec-17-15',
      pageNumber: 40,
      sectionNumber: '17.15',
      title: '🔬 CO NADAL NIE JEST JASNE? Granice Plastyczności Tożsamościowej',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Naukowe badanie tożsamości napotyka na poważne pytania metodologiczne. W jakim stopniu podstawa temperamentu (genetycznie uwarunkowana reaktywność układu nerwowego) ogranicza możliwość zmiany obrazu siebie?',
        'Choć neuroplastyczność pozwala na modyfikację nawyków i narracji, nie każdy człowiek może w dowolnym stopniu zmienić poziom neurotyczności czy ekstrawersji. Spór między determinizmem biologicznym a konstruktywizmem społecznym pozostaje otwarty.'
      ]
    },
    {
      id: 'sec-17-16',
      pageNumber: 43,
      sectionNumber: '17.16',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Redefinicji Narracji',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Identyfikacja kluczowej etykiety: Zauważ moment, w którym wypowiadasz w myśli słowa „Ja po prostu taki jestem”.',
        '2. Zastosowanie pauzy językowej: Przetłumacz to zdanie na konkretną sytuację i brak nawyku.',
        '3. Mikrokrok tożsamościowy: Wykonaj jedno małe działanie, które jest bezpośrednim zaprzeczeniem starej etykiety (np. zabierz głos na spotkaniu przez 30 sekund).',
        '4. Zapis w dzienniku sprawczości: Zarejestruj fakt wykonania akcji jako nowy dowód w Twojej prywatnej bazie danych.'
      ]
    },
    {
      id: 'sec-17-17',
      pageNumber: 46,
      sectionNumber: '17.17',
      title: 'Most do Rozdziału 18 oraz Powiązania z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Tożsamość, którą poznaliśmy w tym rozdziale, opiera się na fundamencie mechanizmów poznawczych z Tomu I (pamięć autobiograficzna z Rozdziału 5, uwaga z Rozdziału 3) oraz dynamiki społecznej z Tomu II (konformizm z Rozdziału 6, komunikacja z Rozdziału 7).',
        'Jednak tożsamość nie istnieje w próżni – jej cegiełkami są przekonania. W następnym rozdziale przejdziemy do badania tego, czym są przekonania, jak powstają schematy poznawcze i jak aktualizować swój sposób patrzenia na świat, gdy napotykamy nowe fakty.'
      ]
    },
    {
      id: 'sec-17-18',
      pageNumber: 48,
      sectionNumber: '17.18',
      title: 'Egzamin Końcowy Rozdziału 17: Tożsamość i Obraz Siebie',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu architektury tożsamości, etykiet tożsamościowych i reakcji zachowawczych. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};

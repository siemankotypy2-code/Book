import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

export const chapterNineteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej i społecznej pojęcie „Poczucia Skuteczności” (Self-Efficacy, Albert Bandura) różni się od „Samooceny” (Self-Esteem) tym, że:',
    topic: 'Samoocena vs Self-Efficacy',
    sectionRef: 'Sekcja 19.1',
    options: [
      { label: 'A', text: 'Self-Efficacy to przekonanie o zdolności do wykonania konkretnego zadania, podczas gdy samoocena to ogólna wartościująca ocena własnej osoby jako człowieka.', isCorrect: true },
      { label: 'B', text: 'Self-Efficacy dotyczy wzrostu ciała, a samoocena wykształcenia.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, obydwa terminy oznaczają Dokładnie to samo.', isCorrect: false },
      { label: 'D', text: 'Samoocena mierzy poziom dopaminy, a Self-Efficacy poziom serotoniny.', isCorrect: false }
    ],
    explanation: 'Można mieć wysokie poczucie skuteczności w grze w szachy („Wiem, że potrafię wygrać tę partię”), ale niską ogólną samoocenę („Uważam się za mało wartościowego człowieka”).',
    keyTakeaway: 'Self-Efficacy dotyczy kompetencji wykonawczej, samoocena zaś ogólnego szacunku do samego siebie.'
  },
  {
    id: 2,
    question: 'Co według Alberta Bandury jest najsilniejszym źródłem budowania Poczucia Skuteczności (Self-Efficacy)?',
    topic: 'Źródła Self-Efficacy',
    sectionRef: 'Sekcja 19.4',
    options: [
      { label: 'A', text: 'Doświadczenia opanowania (Mastery Experiences) — osobiste, empiryczne sukcesy osiągnięte poprzez pokonanie trudności.', isCorrect: true },
      { label: 'B', text: 'Głośne powtarzanie pozytywnych afirmacji rano przed lustrem.', isCorrect: false },
      { label: 'C', text: 'Oglądanie filmów motywacyjnych w internecie.', isCorrect: false },
      { label: 'D', text: 'Unikanie jakichkolwiek wyzwań i trudnych zadań.', isCorrect: false }
    ],
    explanation: 'Umysł nie wierzy pustym obietnicom. Najsilniejszym dowodem dla kory przedczołowej jest pamięć realnie pokonanych przeszkód w działaniu.',
    keyTakeaway: 'Doświadczenie sprawstwa buduje się w działaniu, a nie w samej teorii.'
  },
  {
    id: 3,
    question: 'Jak według Teorii Porównań Społecznych (Leon Festinger) porównania w górę (Upward Social Comparison) wpływają na samoocenę?',
    topic: 'Porównania Społeczne',
    sectionRef: 'Sekcja 19.5',
    options: [
      { label: 'A', text: 'Mogą inspirować do rozwoju, lecz w przypadku nierealistycznych punktów odniesienia (np. wyreżyserowane media społecznościowe) obniżają samoocenę i wywołują zazdrość.', isCorrect: true },
      { label: 'B', text: 'Zawsze i bez wyjątku podnoszą poczucie własnej wartości o 50%.', isCorrect: false },
      { label: 'C', text: 'Wyłączają działanie układu limbicznego.', isCorrect: false },
      { label: 'D', text: 'Nie mają żadnego wpływu na emocje człowieka.', isCorrect: false }
    ],
    explanation: 'Śledzenie wyłącznie wyreżyserowanych pasm sukcesów innych osób sprawia, że własne zwyczajne życie wydaje się porażką.',
    keyTakeaway: 'Porównuj się do tego, kim byłeś wczoraj, a nie do wyreżyserowanej fasady kogoś innego.'
  },
  {
    id: 4,
    question: 'Czym różni się perfekcjonizm adaptacyjny (funkcjonalny) od perfekcjonizmu dysfunkcyjnego (neurotycznego)?',
    topic: 'Perfekcjonizm',
    sectionRef: 'Sekcja 19.7',
    options: [
      { label: 'A', text: 'Adaptacyjny stawia wysokie standardy z czerpaniem radości z procesu, zaś dysfunkcyjny uzależnia wartość człowieka od braku jakiegokolwiek błędu, generując ciągły lęk.', isCorrect: true },
      { label: 'B', text: 'Perfekcjonizm adaptacyjny występuje tylko u lekarzy.', isCorrect: false },
      { label: 'C', text: 'Perfekcjonizm dysfunkcyjny gwarantuje brak jakichkolwiek pomyłek w życiu.', isCorrect: false },
      { label: 'D', text: 'Oba typy prowadzą do natychmiastowej depresji.', isCorrect: false }
    ],
    explanation: 'Dysfunkcyjny perfekcjonista nie cieszy się z sukcesu, lecz odczuwa jedynie ulgową ewakuację przed demaskacją błędu.',
    keyTakeaway: 'Zamień nierealistyczny perfekcjonizm na dążenie do merytorycznej jakości.'
  },
  {
    id: 5,
    question: 'Na czym polega Syndrom Oszusta (Impostor Syndrome)?',
    topic: 'Syndrom Oszusta',
    sectionRef: 'Sekcja 19.8',
    options: [
      { label: 'A', text: 'Uporczywe przekonanie, że własne osiągnięcia są wynikiem przypadku lub szczęścia, powiązane z lękiem przed zdemaskowaniem rzekomego braku kompetencji.', isCorrect: true },
      { label: 'B', text: 'Cyniczne oszukiwanie ludzi w celu wyłudzenia pieniędzy.', isCorrect: false },
      { label: 'C', text: 'Choroba zakaźna układu pokarmowego.', isCorrect: false },
      { label: 'D', text: 'Niezdolność do zapamiętywania nazwisk.', isCorrect: false }
    ],
    explanation: 'Osoba z syndromem oszusta przypisuje sukcesy czynnikom zewnętrznym („szczęście”), a porażki cechom wewnętrznym („jestem głupi”).',
    keyTakeaway: 'Urealnij ocenę faktów: Twoje sukcesy są owocem Twojej pracy.'
  },
  {
    id: 6,
    question: 'Czym jest samoocena niestabilna/warunkowa (Contingent Self-Esteem)?',
    topic: 'Samoocena Warunkowa',
    sectionRef: 'Sekcja 19.12',
    options: [
      { label: 'A', text: 'Samoocena uzależniona od ciągłego spełniania zewnętrznych warunków (np. ostatni sukces, pochwała, wyniki), podatna na gwałtowne załamania.', isCorrect: true },
      { label: 'B', text: 'Samoocena, która zmienia się dokładnie co 60 minut.', isCorrect: false },
      { label: 'C', text: 'Samoocena występująca wyłącznie u sportowców.', isCorrect: false },
      { label: 'D', text: 'Trwały stan głębokiego spokoju bez względu na okoliczności.', isCorrect: false }
    ],
    explanation: 'Warunkowa samoocena wymaga ciągłego „karmienia” sukcesami. Brak kolejnej wygranej wywołuje natychmiastowy spadek poczucia wartości.',
    keyTakeaway: 'Buduj samoocenę ugruntowaną wewnętrznie, a nie zależną od codziennych wyników.'
  },
  {
    id: 7,
    question: 'Jak Efekt Dunninga-Krugera odnosi się do pewności siebie?',
    topic: 'Efekt Dunninga-Krugera',
    sectionRef: 'Sekcja 19.10',
    options: [
      { label: 'A', text: 'Osoby o najniższych kompetencjach wykazują najwyższy poziom nieuzasadnionej pewności siebie z powodu braku wiedzy o złożoności dziedziny.', isCorrect: true },
      { label: 'B', text: 'Osoby o najwyższych kompetencjach są zawsze najbardziej krzykliwe.', isCorrect: false },
      { label: 'C', text: 'Pewność siebie jest w 100% proporcjonalna do rzeczywistych umiejętności.', isCorrect: false },
      { label: 'D', text: 'Eksperci nigdy nie miewają wątpliwości.', isCorrect: false }
    ],
    explanation: 'Brak wiedzy uniemożliwia dostrzeżenie własnych błędów, generując fałszywą pewność siebie na Szczycie Głupoty.',
    keyTakeaway: 'Prawdziwa pewność siebie rośnie powoli, przechodząc przez dolinę pokory nauki.'
  },
  {
    id: 8,
    question: 'Jaką rolę w kształtowaniu samooceny odgrywa samowspółczucie (Self-Compassion, Kristin Neff)?',
    topic: 'Self-Compassion',
    sectionRef: 'Sekcja 19.14',
    options: [
      { label: 'A', text: 'Zastępuje surową samoocenę życzliwością wobec własnych niedoskonałości, uznaniem wspólnoty ludzkiego cierpienia i uważnością.', isCorrect: true },
      { label: 'B', text: 'Narzuca użalanie się nad sobą i brak jakichkolwiek wymagań.', isCorrect: false },
      { label: 'C', text: 'Zmusza do ciągłego kupowania sobie prezentów.', isCorrect: false },
      { label: 'D', text: 'Wyłącza chęć osiągania jakichkolwiek celów.', isCorrect: false }
    ],
    explanation: 'Self-compassion daje stabilną bazę emocjonalną w trudnych chwilach, bez konieczności ciągłego oceniania siebie jako „lepszego od innych”.',
    keyTakeaway: 'Bądź dla siebie wspierającym mentorem, a nie bezwzględnym katem.'
  },
  {
    id: 9,
    question: 'Jak informacja zwrotna (Feedback) powinna być przetwarzana, by wspierać rozwój kompetencji bez niszczenia samooceny?',
    topic: 'Informacja Zwrotna',
    sectionRef: 'Sekcja 19.11',
    options: [
      { label: 'A', text: 'Należy oddzielić ocenę wykonanego zadania od oceny własnej wartości jako człowieka, traktując uwagi jako surowiec merytoryczny.', isCorrect: true },
      { label: 'B', text: 'Należy odrzucać każdą krytykę jako przerwę w spokoju.', isCorrect: false },
      { label: 'C', text: 'Należy natychmiast uznać siebie za nieudacznika po każdej uwadze.', isCorrect: false },
      { label: 'D', text: 'Należy obrazić się na osobę dającą feedback.', isCorrect: false }
    ],
    explanation: 'Krytyka pliku czy projektu nie jest krytyką Twojego prawa do szacunku. To informacja o konkretnej zmianie w działaniu.',
    keyTakeaway: 'Oddziel swoją wartość jako człowieka od jakości wykonanego zadania.'
  },
  {
    id: 10,
    question: 'Co charakteryzuje realistyczną ocenę własnych możliwości?',
    topic: 'Realistyczna Ocena',
    sectionRef: 'Sekcja 19.14',
    options: [
      { label: 'A', text: 'Zdolność do precyzyjnego określenia swoich mocnych stron oraz obszarów wymagających rozwoju, bez popadania w pychę ani w samobiczowanie.', isCorrect: true },
      { label: 'B', text: 'Przekonanie, że potrafi się zrobić wszystko bez przygotowania.', isCorrect: false },
      { label: 'C', text: 'Poczucie, że nie potrafi się zrobić absolutnie niczego.', isCorrect: false },
      { label: 'D', text: 'Ignorowanie wszelkich ograniczeń fizycznych i czasowych.', isCorrect: false }
    ],
    explanation: 'Realizm poznawczy pozwala wybierać wyzwania dopasowane do aktualnej strefy najbliższego rozwoju (ZPD).',
    keyTakeaway: 'Znaj swoje granice, aby móc je bezpiecznie przesuwać.'
  },
  {
    id: 11,
    question: 'Jak krytyka w dzieciństwie ze strony dorosłych wpływa na dorosły w wewnętrzny monolog?',
    topic: 'Wewnętrzny Krytyk',
    sectionRef: 'Sekcja 19.3',
    options: [
      { label: 'A', text: 'Głos krytycznego rodzica zostaje zinternalizowany jako wewnętrzny krytyk, który w dorosłym życiu odtwarza te same surowe supozycje.', isCorrect: true },
      { label: 'B', text: 'Automatycznie podnosi poziom pewności siebie.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnego wpływu na dorosłe życie.', isCorrect: false },
      { label: 'D', text: 'Zwiększa odporność na stres bez pracy nad sobą.', isCorrect: false }
    ],
    explanation: 'Słowa, które słyszymy w dzieciństwie, stają się głosem, którym mówimy do siebie w dorosłości.',
    keyTakeaway: 'Zidentyfikuj, czyj głos słyszysz, gdy krytykujesz siebie za błąd.'
  },
  {
    id: 12,
    question: 'W jaki sposób media społecznościowe nasilają zjawisko nierealistycznych punktów odniesienia?',
    topic: 'Media a Samoocena',
    sectionRef: 'Sekcja 19.6',
    options: [
      { label: 'A', text: 'Prezentują wyselekcjonowane, wyreżyserowane momenty sukcesu i urody, z którymi umysł bezwiednie porównuje swoje codzienne, zwyczajne życie.', isCorrect: true },
      { label: 'B', text: 'Uczą obiektywnego oceniania własnych kompetencji.', isCorrect: false },
      { label: 'C', text: 'Zmniejszają poziom zazdrości w społeczeństwie.', isCorrect: false },
      { label: 'D', text: 'Zapobiegają powstawaniu depresji.', isCorrect: false }
    ],
    explanation: 'Umysł nie jest dostosowany do codziennego porównywania się z tysiącami najpiękniejszych i najbogatszych ludzi na planecie.',
    keyTakeaway: 'Ogranicz ekspozycję na cyfrowe fasady, by chronić swój spokój.'
  },
  {
    id: 13,
    question: 'Na czym polega re-kalibracja poczucia skuteczności (Self-Efficacy Calibration)?',
    topic: 'Re-kalibracja Self-Efficacy',
    sectionRef: 'Sekcja 19.15',
    options: [
      { label: 'A', text: 'Dostosowanie przewidywań co do własnych możliwości do rzeczywistych wyników osiąganych w małych eksperymentach behawioralnych.', isCorrect: true },
      { label: 'B', text: 'Zwiększanie dawek kofeiny przed pracą.', isCorrect: false },
      { label: 'C', text: 'Ignorowanie wszelkich porażek z przeszłości.', isCorrect: false },
      { label: 'D', text: 'Kupowanie drogich ubrań biznesowych.', isCorrect: false }
    ],
    explanation: 'Kalibracja pozwala uniknąć zarówno paraliżującego zaniżania możliwości, jak i lekkomyślnego ich przeszarżowania.',
    keyTakeaway: 'Buduj pewność siebie na twardych dowodach z działania.'
  },
  {
    id: 14,
    question: 'Jak przymus „Muszę być najlepszy” wpływa na elastyczność decyzyjną?',
    topic: 'Przymus Osiągnięć',
    sectionRef: 'Sekcja 19.9',
    options: [
      { label: 'A', text: 'Generuje lęk przed podjęciem jakiejkolwiek nowej dziedziny, w której początkowo byłoby się nowicjuszem, blokując rozwój.', isCorrect: true },
      { label: 'B', text: 'Gwarantuje szczęście w każdym projekcie.', isCorrect: false },
      { label: 'C', text: 'Eliminuje stres związany z oceną.', isCorrect: false },
      { label: 'D', text: 'Zwiększa chęć do podejmowania ryzyka.', isCorrect: false }
    ],
    explanation: 'Lęk przed byciem początkującym zmusza człowieka do pozostawania wyłącznie w strefie dobrze znanych nawyków.',
    keyTakeaway: 'Daj sobie prawo do bycia nowicjuszem, gdy uczysz się nowych rzeczy.'
  },
  {
    id: 15,
    question: 'Jaka jest rola modelowania (Vicarious Experiences) w budowaniu Self-Efficacy według Bandury?',
    topic: 'Modelowanie Bandury',
    sectionRef: 'Sekcja 19.4',
    options: [
      { label: 'A', text: 'Obserwowanie osoby podobnej do nas, która pokonuje trudności i osiąga cel, podnosi nasze przekonanie: „Jeśli ona dała radę, ja też potrafię”.', isCorrect: true },
      { label: 'B', text: 'Kopiowanie ruchów ciała aktorów filmowych.', isCorrect: false },
      { label: 'C', text: 'Rysowanie modeli przestrzennych.', isCorrect: false },
      { label: 'D', text: 'Unikanie jakichkolwiek autorytetów.', isCorrect: false }
    ],
    explanation: 'Modelowanie działa najsilniej wtedy, gdy model jest postrzegany jako podobny do nas pod względem możliwości i punktu startu.',
    keyTakeaway: 'Szukaj wzorców osób podobnych do Ciebie, które pokonały przeszkody.'
  },
  {
    id: 16,
    question: 'Czym charakteryzuje się lęk przed oceną (Evaluation Apprehension)?',
    topic: 'Lęk przed Oceną',
    sectionRef: 'Sekcja 19.8',
    options: [
      { label: 'A', text: 'Paraliżujący stres wywołany przekonaniem, że inni ludzie nieustannie i surowo oceniają naszą wartość i kompetencje.', isCorrect: true },
      { label: 'B', text: 'Radość z wystąpień przed dużą publicznością.', isCorrect: false },
      { label: 'C', text: 'Niezależność od opinii otoczenia.', isCorrect: false },
      { label: 'D', text: 'Brak reakcji fizjologicznej na krytykę.', isCorrect: false }
    ],
    explanation: 'Lęk przed oceną opiera się na tzw. Spotlight Effect — złudzeniu, że oczy wszystkich są skierowane na nasze najmniejsze potknięcie.',
    keyTakeaway: 'Ludzie myślą o Tobie znacznie mniej, niż Ci się wydaje — są zajęci sobą.'
  },
  {
    id: 17,
    question: 'Jaką funkcję pełni dziennik sprawczości w odbudowywaniu zaniżonej samooceny?',
    topic: 'Dziennik Sprawczości',
    sectionRef: 'Sekcja 19.15',
    options: [
      { label: 'A', text: 'Gromadzi twarde, codzienne dowody wykonanych działań, przełamując tendencję umysłu do pamiętania tylko porażek.', isCorrect: true },
      { label: 'B', text: 'Służy do zapisywania wyłącznie narzekań na pogodę.', isCorrect: false },
      { label: 'C', text: 'Zastępuje potrzebę podejmowania jakichkolwiek działań.', isCorrect: false },
      { label: 'D', text: 'Wyłącza pamięć roboczą.', isCorrect: false }
    ],
    explanation: 'Systematyczny zapis małych zwycięstw stanowi surowiec dla DMN do rekonstrukcji nowej, sprawczej opowieści o sobie.',
    keyTakeaway: 'Dostarczaj swojemu umysłowi codziennych dowodów sprawczości na piśmie.'
  },
  {
    id: 18,
    question: 'W jaki sposób nawyk nagradzania wysiłku zamiast talentu wpływa na dzieci i dorosłych?',
    topic: 'Pochwała Wysiłku vs Talentu',
    sectionRef: 'Sekcja 19.3',
    options: [
      { label: 'A', text: 'Buduje Growth Mindset i poczucie skuteczności oparte na działaniu, podczas gdy chwalenie talentu buduje lęk przed utratą etykiety „zdolnego”.', isCorrect: true },
      { label: 'B', text: 'Niszczy jakąkolwiek motywację do pracy.', isCorrect: false },
      { label: 'C', text: 'Sprawia, że ludzie przestają się uczyć.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnego znaczenia dydaktycznego.', isCorrect: false }
    ],
    explanation: 'Pochwała za wysiłek wskazuje na zmienną pod Twoją kontrolą (strategia, praca), zaś pochwała za talent — na sztywną cechę.',
    keyTakeaway: 'Doceniaj wykonaną pracę i strategię, a nie mityczny talent.'
  },
  {
    id: 19,
    question: 'Na czym polega pętla bezradności w zaniżonej samoocenie?',
    topic: 'Pętla Bezradności',
    sectionRef: 'Sekcja 19.2',
    options: [
      { label: 'A', text: 'Niska samoocena -> Lęk przed porażką -> Unikanie działania -> Brak sukcesów -> Potwierdzenie niskiej samooceny.', isCorrect: true },
      { label: 'B', text: 'Wysoka samoocena -> Sukces -> Radość.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek myśli o przyszłości.', isCorrect: false },
      { label: 'D', text: 'Automatyczny awans w pracy bez wysiłku.', isCorrect: false }
    ],
    explanation: 'Przerwanie pętli bezradności wymaga wykonania mikrokroku w działaniu MIMO odczuwanego lęku.',
    keyTakeaway: 'Działanie wyprzedza pewność siebie — nie czekaj, aż lęk całkowicie zniknie.'
  },
  {
    id: 20,
    question: 'Co jest ostatecznym celem dojrzałego rozwoju w obszarze samooceny?',
    topic: 'Dojrzałość Samooceny',
    sectionRef: 'Sekcja 19.14',
    options: [
      { label: 'A', text: 'Przejście od samooceny chwiejnej i uzależnionej od sukcesów do stabilnej samoakceptacji ugruntowanej w wartościach i autentycznym rozwoju.', isCorrect: true },
      { label: 'B', text: 'Osiągnięcie stanu, w którym uważa się siebie za lepszego od wszystkich ludzi.', isCorrect: false },
      { label: 'C', text: 'Całkowita obojętność na wyniki własnej pracy.', isCorrect: false },
      { label: 'D', text: 'Przekonanie o własnej nieomylności.', isCorrect: false }
    ],
    explanation: 'Dojrzała samoocena nie potrzebuje ciągłego udowadniania wyższości nad innymi — jest spokojnym ugruntowaniem w wartościach.',
    keyTakeaway: 'Prawdziwa pewność siebie to spokój wynikający z akceptacji siebie i ciągłego uczenia się.'
  }
];

export const caseStudiesChapterNineteen: CaseStudy[] = [
  {
    id: 'studium-19-1-scena-i-paraliz',
    title: 'W cieniu idealnego wzorca: Jak Syndrom Oszusta sparaliżował karierę naukową Julii',
    subtitle: 'Lęk przed demaskacją, dyskwalifikowanie pozytywów i rekonstrukcja poczucia skuteczności',
    protagonist: 'Dr Julia, 33 lata, adiunkt na wydziale biologii molekularnej',
    context: 'Julia wygrała prestiżowy grant badawczy na kwotę 2 milionów złotych. Zamiast odczuwać dumę, spędzała noce na drżeniu, że komisja popełniła błąd, a jej koledzy z katedry uświadomią sobie jej „przeciętność”.',
    story: [
      'Julia od czasów doktoratu słyszała pochwały od profesorów, lecz każdą z nich traktowała jako „pomyłkę” lub „efekt uroku osobistego”. W jej umyśle tkwiło sztywne przekonanie: „Nie jestem prawdziwym naukowcem, po prostu dobrze udaję”.',
      'Gdy ogłoszono wyniki konkursu grantowego, Julia odczuła przerażenie. Zamiast rozpocząć kompletowanie zespołu, odsuwała podpisanie umowy przez dwa miesiące, szukając błędów we własnym wniosku.',
      'Paraliż decyzyjny doprowadził do opóźnień w zakupie aparatury. Julia pracowała po 14 godzin dziennie, sprawdzając po dziesięć razy te same wyliczenia.',
      'Dopiero w toku terapii poznawczej zaczęła prowadzić Arkusz Dowodów Obiektywnych, w którym wypisywała twarde recenzje swoich artykułów z zagranicznych czasopism, odseparowując subiektywny lęk od merytorycznych faktów.'
    ],
    dialogue: [
      { speaker: 'Dziekan', text: 'Julio, to historyczny sukces naszego wydziału! Gratulacje!', subtext: 'Zewnętrzne uznanie oszałamiającego sukcesu.' },
      { speaker: 'Julia (w myśli)', text: 'Gdyby wiedział, ile razy musiałam poprawiać ten projekt, nie pogratulowałby mi... Wyśmieją mnie, gdy wyniki nie wyjdą.', subtext: 'Dyskwalifikowanie sukcesu i lęk przed demaskacją.' }
    ],
    decisionTaken: 'Julia rozpoczęła codzienny proces rejestracji faktów i podjęła kompletowanie zespołu badawczego.',
    whatProtagonistSaw: 'Własną rzekomą niekompetencję i wizję kompromitacji przed środowiskiem.',
    whatWasMissed: 'Fakt, że wniosek został oceniony przez trzech niezależnych, zagranicznych recenzentów bezimiennie.',
    psychologicalAnalysis: {
      coreMechanism: 'Syndrom Oszusta (Impostor Syndrome) oparty na warunkowej samoocenie.',
      cognitiveBiases: [
        { name: 'Dyskwalifikowanie pozytywów', description: 'Przypisywanie wygrania grantu szczęściu lub ślepocie recenzentów.', impact: 'Uniemożliwienie budowania poczucia wartości.' }
      ],
      defenseMechanisms: [
        { name: 'Kompensacja przez pracoholizm', explanation: 'Praca do utraty sił w celu zapobieżenia demaskacji.' }
      ],
      emotionalDynamic: 'Głęboki lęk przed oceną, wstyd i wyczerpanie.'
    },
    decisionProcessAnalysis: {
      trigger: 'Wygranie grantu badawczego.',
      attentionFocus: 'Własne wątpliwości i potencjalne błędy.',
      interpretation: '„Nie zasłużyłam na to, to pomyłka”.',
      emotion: 'Przerażenie, spadek poczucia wartości.',
      impulse: 'Odkładanie podpisania umowy, ucieczka.',
      action: 'Podjęcie terapii i stworzenie rejestru dowodów merytorycznych.',
      consequence: 'Uruchomienie laboratorium i odzyskanie spokoju.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC', role: 'Analityczna ocena faktów przeciwko emocjonalnemu lękowi', activationState: 'Wzrost aktywacji po terapii' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Długotrwale podwyższony poziom stresu osłabiający odporność.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowo „grant” wywołuje nagły skok tętna.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Akademicki elitaryzm', description: 'Środowisko promujące nierealistyczne standardy i rywalizację.', vulnerabilityExploited: 'Lęk przed niedostatecznością.' }
      ],
      counterMeasures: [
        { step: '1. Oddzielenie Faktów od Emocji', script: '„Fakt: Recenzenci przyznali 98/100 punktów. Emocja: Czuję lęk. Emocja nie zmienia faktu 98 punktów”.', rationale: 'Urealnia obraz sytuacji.' }
      ]
    },
    alternativePath: 'Gdyby Julia zrezygnowała z grantu, zniszczyłaby swoją karierę i pogłębiłaby pętlę bezradności.',
    readerQuestion: 'Jakie sukcesy w swoim życiu przypisujesz „ślepemu szczęściu” zamiast własnej pracy?',
    keyTakeaway: 'Nie musisz czuć się pewnie, by działać kompetentnie. Pozwól faktom mówić za siebie.'
  },
  {
    id: 'studium-19-2-perfekcjonizm-wypalenie',
    title: 'Cena niewybaczalnego błędu: Perfekcjonizm dysfunkcyjny u architekta Damiana',
    subtitle: 'Warunkowa samoocena, lęk przed porażką i przechodzenie do samowspółczucia',
    protagonist: 'Damian, 40 lat, właściciel pracowni architektonicznej',
    context: 'Damian od dzieciństwa słyszał od ojca: „Albo robisz coś idealnie, albo nie rób tego wcale”. Gdy w wybudowanym domu wykryto wadę konstrukcyjną wymagającą poprawek za 50 tysięcy złotych, Damian popadł w stan ciężkiej ruminacji.',
    story: [
      'Dla Damiana błąd w projekcie nie był problemem inżynieryjnym do rozwiązania — był dowodem na to, że jest „bezwartościowym oszustem”.',
      'Przez trzy tygodnie nie wychodził z domu, nie odpowiadał na telefony od klientów i przestał jeść. Cała jego pracownia sparaliżowana była brakiem jego decyzji.',
      'Jego samoocena całkowicie zależała od braku jakichkolwiek potknięć. Jedna pomyłka zniszczyła całą jego budowaną przez 15 lat strukturę poczucia wartości.',
      'Dopiero interwencja żony i sesje CBT pozwoliły mu dostrzec, że błąd jest nieodłącznym elementem skomplikowanych projektów inżynieryjnych.'
    ],
    dialogue: [
      { speaker: 'Inwestor', text: 'Damian, pomyłki się zdarzają. Poprawmy ten rysunek i jedziemy dalej.', subtext: 'Merytoryczne i spokojne podejście do problemu.' },
      { speaker: 'Damian', text: 'Nie rozumiesz... Ja nie miałem prawa się pomylić. Przepraszam, jestem do niczego...', subtext: 'Katasrofizacja tożsamościowa po błędzie.' }
    ],
    decisionTaken: 'Damian podjął naprawę błędu na koszt ubezpieczenia i wdrożył procedurę podwójnego sprawdzania rysunków.',
    whatProtagonistSaw: 'Całkowitą ruinę swojej reputacji i dowód niekompetencji.',
    whatWasMissed: 'Fakt, że błąd był drobnym przeoczeniem podwykonawcy, a inwestor cenił go za uczciwość.',
    psychologicalAnalysis: {
      coreMechanism: 'Perfekcjonizm dysfunkcyjny i warunkowa samoocena.',
      cognitiveBiases: [
        { name: 'Myślenie zero-jedynkowe', description: '„Albo jestem nieomylny, albo jestem bezwartościowy”.', impact: 'Paraliż decyzyjny po pomyłce.' }
      ],
      defenseMechanisms: [
        { name: 'Izolacja i wycofanie', explanation: 'Chowanie się przed światem w poczuciu wstydu.' }
      ],
      emotionalDynamic: 'Miażdżący wstyd, poczucie winy i paraliż.'
    },
    decisionProcessAnalysis: {
      trigger: 'Wykrycie wady w projekcie.',
      attentionFocus: 'Własny błąd i wizja kompromitacji.',
      interpretation: '„Jestem do niczego, cała moja kariera to fikcja”.',
      emotion: 'Wstyd, rozpacz.',
      impulse: 'Ucieczka, wyłączenie telefonu.',
      action: 'Podjęcie rozmów i naprawa szkody.',
      consequence: 'Rozwiązanie problemu i lekcja dojrzałości.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Anterior Insula', role: 'Przetwarzanie intencjonalnego wstydu i obrzydzenia do siebie', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Serotonina', roleInScenario: 'Spadek spoczynkowego poziomu pod wpływem wstydu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Wiadomość o błędzie wywołuje natychmiastowy ucisk w klatce.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Wojna z błędem', description: 'Kulturowe przekonanie, że dojrzałość oznacza brak pomyłek.', vulnerabilityExploited: 'Potrzebę bezpieczeństwa.' }
      ],
      counterMeasures: [
        { step: '1. Praktyka Samowspółczucia (Self-Compassion)', script: '„Popełniłem błąd, bo jestem człowiekiem pracującym pod presją. Naprawiam błąd i uczę się”.', rationale: 'Przywraca spokój i jasność myślenia.' }
      ]
    },
    alternativePath: 'Gdyby Damian uciekał dalej, trafiłby na drogę sądową i stracił pracownię.',
    readerQuestion: 'Czy dajesz sobie prawo do popełniania błędów w sprawach, na których Ci zależy?',
    keyTakeaway: 'Jakość nie wynika z braku błędów, lecz ze sprawności ich naprawiania.'
  },
  {
    id: 'studium-19-3-porownania-instagram',
    title: 'Fabryka kompleksów: Jak porównania społeczne w sieci zniszczyły samoocenę Marty',
    subtitle: 'Upward Social Comparison, cyfrowe wyreżyserowanie i odbudowa realnych punktów odniesienia',
    protagonist: 'Marta, 26 lat, konsultantka HR',
    context: 'Marta spędzała średnio 3 godziny dziennie na Instagramie i TikToku, śledząc profile infuencerek fitness i sukcesu. Mimo dobrych zarobków i udanego związku odczuwała stałe przygnębienie.',
    story: [
      'Każdy poranek Marty zaczynał się od przeglądania relacji z idealnych śniadań w balijskich kawiarniach, wyretuszowanych sylwetek i luksusowych podróży.',
      'Jej umysł bezwiednie dokonywał porównań w górę (Upward Social Comparison): „Ona w moim wieku ma własną markę i ciało bogini, a ja siedzę w biurze na Mokotowie”.',
      'Marta zaczęła stosować drastyczne diety, kupować ubrania na kredyt i czuć narastającą niechęć do swojego partnera, który „nie był tak przystojny jak faceci z sieci”.',
      'Dopiero cyfrowy detox i analiza mechanizmów marketingu sieciowego pozwoliły jej zrozumieć, że porównywała swoje zakulisowe, zwyczajne życie z wyreżyserowaną reklama produktów.'
    ],
    dialogue: [
      { speaker: 'Partner', text: 'Marta, wyjedźmy na weekend w góry, odpocznijmy.', subtext: 'Propozycja realnego, prostego wypoczynku.' },
      { speaker: 'Marta', text: 'W góry? Do jakiegoś szarego domku? Zobacz, gdzie wyjeżdżają ludzie na moim feedzie!', subtext: 'Pogoń za wyreżyserowanym prestiżem z sieci.' }
    ],
    decisionTaken: 'Marta usunęła aplikacje mediów społecznościowych na 60 dni i zaczęła uprawiać sport dla zdrowia, a nie pod zdjęcia.',
    whatProtagonistSaw: 'Niedostatek własnego życia i własną rzekomą brzydotę.',
    whatWasMissed: 'Fakt, że zdjęcia w sieci są produktem reklamowym po filtry i retusz.',
    psychologicalAnalysis: {
      coreMechanism: 'Nierealistyczne porównania społeczne w górę (Upward Social Comparison).',
      cognitiveBiases: [
        { name: 'Błąd reprezentatywności', description: 'Przyjmowanie promila wyreżyserowanych kadrów za normę społeczną.', impact: 'Ciągła frustracja.' }
      ],
      defenseMechanisms: [
        { name: 'Kompensacja zakupowa', explanation: 'Kupowanie drogich przedmiotów na kredyt w obronie statusu.' }
      ],
      emotionalDynamic: 'Zazdrość, frustracja, spadek samooceny i odrzucenie realności.'
    },
    decisionProcessAnalysis: {
      trigger: 'Otwarcie aplikacji rano w łóżku.',
      attentionFocus: 'Idealne ciała i luksusowe wnętrza.',
      interpretation: '„Moje życie jest szare i do niczego”.',
      emotion: 'Zawiść, smutek, poczucie niższości.',
      impulse: 'Szukanie kolejnych profili, kupowanie ubrań.',
      action: 'Wyłączenie kont i powrót do rzeczywistości.',
      consequence: 'Spadek poziomu lęku i odzyskanie radości z życia.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące i Wyspa', role: 'Przetwarzanie zazdrości i ubytku statusu społecznego', activationState: 'Ciągły dyskomfort' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Zaburzona pętla dopaminowa przez szybkie bodźce z ekranu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Widok zdjęcia idealnej sylwetki wywołuje mikroskok kortyzolu.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Algorytmiczna fabryka kompleksów', description: 'Promowanie treści wywołujących niedostatek w celu sprzedaży produktów.', vulnerabilityExploited: 'Potrzebę atrakcyjności.' }
      ],
      counterMeasures: [
        { step: '1. Higiena Cyfrowa', script: '„Moim punktem odniesienia jest mój własny postęp zeszłoroczny, a nie produkt reklamowy na ekranie”.', rationale: 'Odtwarza realne punkty odniesienia.' }
      ]
    },
    alternativePath: 'Gdyby Marta trwała w pętli porównań, wpadłaby w pętlę zadłużenia i zaburzenia odżywiania.',
    readerQuestion: 'Jakie konta w sieci sprawiają, że po ich przejrzeniu czujesz się gorzej ze sobą?',
    keyTakeaway: 'Nie porównuj swojego środka z czyimś wyreżyserowanym wierzchem.'
  },
  {
    id: 'studium-19-4-dunning-kruger-menedzer',
    title: 'Gdy głośna pewność siebie zastępuje wiedzę: Historia awansu i upadku Norberta',
    subtitle: 'Efekt Dunninga-Krugera, pycha poznawcza i konfrontacja z weryfikacją rynkową',
    protagonist: 'Norbert, 35 lat, były kierownik projektu',
    context: 'Norbert zasłynął w firmie z głośnych, bezkompromisowych wypowiedzi i budowania wizerunku „samorodnego talentu”. Awansował na szefa kluczowego wdrożenia IT, nie posiadając wiedzy technicznej.',
    story: [
      'Norbert na każdym zebraniu dominował dyskusję, przerywał inżynierom i twierdził: „To jest banalnie proste, robicie z igły widły!”. Jego ekscentryczna pewność siebie uwiodła zarząd.',
      'Gdy inżynierowie ostrzegali go przed ryzykiem bezpieczeństwa danych, Norbert zbywał ich śmiechem, twierdząc, że „szukają dziury w całym”. Znajdował się na samym szczycie Efektu Dunninga-Krugera.',
      'Po uruchomieniu systemu doszło do wycieku danych 100 tysięcy klientów. Straty firmy wyniosły miliony złotych, a inwestorzy wycofali się z finansowania.',
      'Norbert został zwolniony dyscyplinarnie. Zderzenie z rzeczywistością zrzuciło go ze Szczytu Głupoty w Dolinę Rozpaczy.'
    ],
    dialogue: [
      { speaker: 'Inżynier', text: 'Norbert, ten kod nie ma szyfrowania na poziomie bazy. Nie możemy tego puścić na produkcję!', subtext: 'Merytoryczne ostrzeżenie ekspertów.' },
      { speaker: 'Norbert', text: 'Nie przesadzajcie! Klient chce efektu na wczoraj, puścimy i się poprawi w locie. Brak wam odwagi!', subtext: 'Arrogancja wynikająca z niewiedzy.' }
    ],
    decisionTaken: 'Norbert wymusił wdrożenie niedopracowanego systemu wbrew ostrzeżeniom inżynierów.',
    whatProtagonistSaw: 'Własne przywództwo i podziw zarządu.',
    whatWasMissed: 'Twarde zasady architektury oprogramowania i wymogi bezpieczeństwa.',
    psychologicalAnalysis: {
      coreMechanism: 'Efekt Dunninga-Krugera i Overconfidence Bias.',
      cognitiveBiases: [
        { name: 'Overconfidence Effect', description: 'Przecenianie własnej wiedzy w dziedzinie, której się nie zna.', impact: 'Katastrofalna decyzja biznesowa.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja i Dewaluacja', explanation: 'Traktowanie inżynierów jako powolnych przeszkód.' }
      ],
      emotionalDynamic: 'Ślepa pycha i pewność siebie, zakończona drastyczną kompromitacją.'
    },
    decisionProcessAnalysis: {
      trigger: 'Presja czasu ze strony zarządu.',
      attentionFocus: 'Własny wizerunek sprawczego lidera.',
      interpretation: '„Inżynierowie się boją, ja mam odwagę i rację”.',
      emotion: 'Duma, wyższość.',
      impulse: 'Zignorowanie procedur.',
      action: 'Podpisanie zgody na wdrożenie bez testów.',
      consequence: 'Wyciek danych, zwolnienie dyscyplinarne i proces sądowy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'ACC', role: 'Niedostateczne sygnały ostrzegawcze błędu', activationState: 'Brak aktywacji kontrolnej' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Pętla nagrody zasilana chwaleniem ze strony zarządu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Ostrzeżenie inżyniera wywołuje uśmiech lekceważenia.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Teatr pewności siebie', description: 'Głośne mówienie z pewnością siebie uwodzące niekompetentnych decydentów.', vulnerabilityExploited: 'Potrzebę prostych rozwiązań.' }
      ],
      counterMeasures: [
        { step: '1. Test Merytoryczny', script: '„Nie oceniamy pewności siebie lidera, lecz obiektywne wyniki testów merytorycznych kodu”.', rationale: 'Chroni przed oszustwem Dunninga-Krugera.' }
      ]
    },
    alternativePath: 'Gdyby Norbert posłuchał inżynierów i przesunął premierę o miesiąc, wdrożenie byłoby sukcesem.',
    readerQuestion: 'Czy mylisz głośną pewność siebie z rzeczywistą kompetencją merytoryczną?',
    keyTakeaway: 'Głośna pewność siebie często krzyczy najgłośniej tam, gdzie wiedza jest najpłytsza.'
  },
  {
    id: 'studium-19-5-odbudowa-po-porazce',
    title: 'Ścieżka do stabilnego self-concept: Jak Szymon odbudował poczucie wartości po bankructwie',
    subtitle: 'Przejście od samooceny warunkowej do ugruntowania w wartościach i procesie',
    protagonist: 'Szymon, 45 lat, przedsiębiorca',
    context: 'Szymon po 20 latach prowadzenia firmy budowlanej zbankrutował w wyniku kryzysu w branży. Stracił dom i samochody, popadając w głęboki kryzys tożsamościowy.',
    story: [
      'przez lata samoocena Szymona brzmiała: „Jestem bogatym, skutecznym biznesmenem”. Gdy majątek zniknął, Szymon czuł się jak nagi człowiek na mrozie.',
      'Przez pierwszy rok po bankructwie wstydził się wychodzić na ulicę, bojąc się spotkania dawnych znajomych. Jego samoocena leżała w gruzach.',
      'Przełom nastąpił, gdy podjął pracę jako brygadzista na etacie. Zrozumiał, że jego wiedza inżynieryjna, uczciwość i umiejętność pracy z ludźmi NIE ZNIKNĘŁY wraz z bankructwem.',
      'Szymon zaczął budować tożsamość opartą na wartościach: „Jestem uczciwym człowiekiem, który potrafi budować i dbać o ludzi, niezależnie od stanu konta”.'
    ],
    dialogue: [
      { speaker: 'Znajomy', text: 'Szymon, słyszałem o firmie... Straszne. Jak ty sobie z tym radzisz?', subtext: 'Pytanie pełne współczucia i badania statusu.' },
      { speaker: 'Szymon', text: 'Straciłem pieniądze, ale nie straciłem wiedzy ani uczciwości. Buduję wszystko od nowa na spokojniejszych zasadach.', subtext: 'Samoocena stabilna ugruntowana w wartościach.' }
    ],
    decisionTaken: 'Szymon podjął pracę na etacie, spłacał zobowiązania i zbudował stabilne, nieuzależnione od statusu poczucie wartości.',
    whatProtagonistSaw: 'Upadek majątku i wstyd przed światem.',
    whatWasMissed: 'Fakt, że jego rzeczywiste umiejętności inżynieryjne i cechy charakteru pozostały nienaruszone.',
    psychologicalAnalysis: {
      coreMechanism: 'Przejście od samooceny warunkowej (status) do samooceny ugruntowanej w wartościach.',
      cognitiveBiases: [
        { name: 'Błąd etykietowania statusowego', description: 'Uznawanie braku majątku za brak wartości ludzkiej.', impact: 'Spadek poczucia wartości.' }
      ],
      defenseMechanisms: [
        { name: 'Akceptacja i Rekonstrukcja', explanation: 'Porzucenie pretensji do świata i skupienie na realnym działaniu.' }
      ],
      emotionalDynamic: 'Żałoba po majątku zakończona głębokim, spokojnym ugruntowaniem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Licytacja majątku firmy.',
      attentionFocus: 'Puste konto, brak luksusowych rekwizytów.',
      interpretation: '„Straciłem majątek, ale moje umiejętności istnieją”.',
      emotion: 'Smutek, pokora, spokój.',
      impulse: 'Podjęcie prostej pracy wykonawczej.',
      action: 'Ciężka, uczciwa praca i spłata długów.',
      consequence: 'Odzyskanie szacunku do samego siebie na zupełnie nowym poziomie.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'mPFC', role: 'Integracja nowej, stabilnej narracji o sobie bez rekwizytów statusu', activationState: 'Równowaga' }
      ],
      neurotransmitters: [
        { name: 'Serotonina', roleInScenario: 'Stabilizacja poziomu serotoniny po oparciu wartości na wewnętrznym kompasie.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Spotkanie dawnego znajomego nie wywołuje już ucieczkowego skoku lęku.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Presja statusowa', description: 'Przekonanie społeczne, że człowiek bez majątku jest nieudacznikiem.', vulnerabilityExploited: 'Potrzebę akceptacji.' }
      ],
      counterMeasures: [
        { step: '1. Ugruntowanie w Wartościach', script: '„Moja wartość jako człowieka leży w moim charakterze i traktowaniu innych, a nie w marży mojej firmy”.', rationale: 'Uodparnia na kryzysy zewnętrzne.' }
      ]
    },
    alternativePath: 'Gdyby Szymon trwał w ucieczce i wstydzie, popadłby w uzależnienie od alkoholu.',
    readerQuestion: 'Na czym opiera się Twoje poczucie wartości, gdy zabrać Ci Twoje codzienne sukcesy?',
    keyTakeaway: 'Najsilniejsza samoocena to ta, której nikt nie może Ci odebrać zabierając Ci majątek czy stanowisko.'
  }
];

export const selfExercisesChapterNineteen: SelfExercise[] = [
  {
    id: 'ex-19-1',
    title: 'Arkusz Re-kalibracji Self-Efficacy',
    subtitle: 'Budowanie poczucia skuteczności na twardych dowodach z działania',
    objective: 'Przekształcenie lękowego przekonania „Nie poradzę sobie” w zbiór konkretnych mikrokroków sprawczych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Rejestracja realnych mikrosukcesów na piśmie stymuluje uwalnianie dopaminy i wzmacnia ścieżki sprawcze w kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór trudnego zadania',
        instruction: 'Zapisz wyzwanie, przed którym stoisz, a które wywołuje w Tobie opór i myśli „To za trudne” (np. Rozmowa o podwyżce, Napisanie raportu).',
        promptText: 'Moje wyzwanie testowe:',
        placeholder: 'Wyzwanie: Przeprowadzenie trudnej rozmowy renegocjacyjnej z klientem...'
      },
      {
        stepNumber: 2,
        title: 'Rozbicie na mikrokroki sprawcze',
        instruction: 'Rozbij to wyzwanie na 3 bardzo małe czynności, które jesteś w stanie wykonać w ciągu najbliższych 15 minut.',
        promptText: 'Moje 3 mikrokroki sprawcze:',
        placeholder: '1. Wypisanie 3 argumentów finansowych na kartce...\n2. Przećwiczenie pierwszego zdania na głos przed lustrem...\n3. Wyslanie e-maila z propozycją terminu spotkania...'
      },
      {
        stepNumber: 3,
        title: 'Rejestracja wykonania i poczucia kontroli',
        instruction: 'Wykonaj krok 1 i zapisz na piśmie: „Wykonano. Poradziłem sobie z krokiem 1”.',
        promptText: 'Potwierdzenie sprawczości:',
        placeholder: 'Krok 1 wykonany. Poczucie kontroli wzrosło z 20% do 60%...'
      }
    ],
    reflectionQuestions: [
      'Jak wykonanie małego mikrokroku wpływa na poziom paraliżującego lęku?',
      'Dlaczego Twój umysł straszył Cię całością zadania zamiast pokazać pierwszy krok?'
    ]
  },
  {
    id: 'ex-19-2',
    title: 'Detoks od Wewnętrznego Krytyka',
    subtitle: 'Przejście od samobiczowania do samowspółczucia (Self-Compassion)',
    objective: 'Zauważenie surowego monologu wewnętrznego i zastąpienie go wspierającym głosem realistycznego mentora.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Samowspółczucie obniża poziom wydzielania kortyzolu i stymuluje uwalnianie oksytocyny, przywracając przywspółczulną równowagę.',
    steps: [
      {
        stepNumber: 1,
        title: 'Uchwycenie głosu krytyka',
        instruction: 'Zapisz słowa, które wypowiedziałeś do siebie w myśli po ostatnim błędzie (np. Ale jesteś idiotą, Znowu to zepsułeś).',
        promptText: 'Atak wewnętrznego krytyka:',
        placeholder: 'Słowa krytyka: Znowu zapomniałeś o wytycznych, nigdy się tego nie nauczysz...'
      },
      {
        stepNumber: 2,
        title: 'Test Przyjaciela',
        instruction: 'Napisz, co w dokładnie tej samej sytuacji powiedziałbyś swojemu najlepszemu przyjacielowi, którego szanujesz.',
        promptText: 'Wypowiedź dla przyjaciela:',
        placeholder: 'Mój przyjacielu: Popełniłeś błąd bo byłeś zmęczony. Sprawdźmy co trzeba poprawić i pomogę Ci to zrobić...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie głosu Mentora',
        instruction: 'Przepisuj atak krytyka na zdanie wspierającego mentora kierowane do samego siebie.',
        promptText: 'Moja nowa wypowiedź Mentora:',
        placeholder: 'Zrobiłem błąd w raporcie. To informacja o braku uwagi przy zmęczeniu. Poprawiam tabelę i wyciągam wnioski na przyszłość.'
      }
    ],
    reflectionQuestions: [
      'Czyj głos z przeszłości najbardziej przypomina słowa Twojego wewnętrznego krytyka?',
      'O ile sprawniej naprawiasz błędy, gdy nie tracisz sił na samobiczowanie?'
    ]
  },
  {
    id: 'ex-19-3',
    title: 'Audyt Dowodów Obiektywnych (Anti-Impostor Sheet)',
    subtitle: 'Rozbrajanie Syndromu Oszusta za pomocą faktów',
    objective: 'Zebranie niezaprzeczalnych, obiektywnych faktów potwierdzających Twoje realne kompetencje.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Rzetelne zgromadzenie danych w koryprzedczołowej przełamuje tendencję DMN do zniekształcania i dyskwalifikowania sukcesów.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie twardych osiągnięć',
        instruction: 'Zapisz 5 twardych, obiektywnych faktów z ostatnich 3 lat (dyplomy, ukończone projekty, awanse, twarde liczby).',
        promptText: 'Moje 5 obiektywnych faktów kompetencji:',
        placeholder: '1. Ukończyłem trudny projekt X w terminie i budżecie...\n2. Otrzymałem awans po ocenie rocznej 4.8/5...\n3. Przeprowadziłem 50 godzin szkoleń z oceną bardzo dobrą...'
      },
      {
        stepNumber: 2,
        title: 'Analiza włożonego wysiłku',
        instruction: 'Dla każdego faktu zapisz, ile godzin pracy, nauki i dyscypliny włożyłeś w ten wynik.',
        promptText: 'Mój wkład pracy:',
        placeholder: 'Projekt X wymagał ode mnie 200 godzin nauki nowego oprogramowania i 3 miesięcy dyscypliny...'
      },
      {
        stepNumber: 3,
        title: 'Odrzucenie zniekształcenia „to przypadek”',
        instruction: 'Napisz zdanie podsumowujące: „Te wyniki są owocem mojej pracy i kompetencji, a nie ślepego przypadku”.',
        promptText: 'Moja nowa deklaracja obiektywności:',
        placeholder: 'Moje osiągnięcia są twardym wynikiem mojej pracy i nauki. Przestaję przepraszać za to, że jestem kompetentny.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego dotąd łatwiej było Ci wierzyć w swój „brak talentu” niż w dowody z wykonanej pracy?',
      'Jak czujesz się patrząc na pełną listę swoich twardych faktów?'
    ]
  },
  {
    id: 'ex-19-4',
    title: 'Dziennik Sprawczości i Małych Zwycięstw',
    subtitle: 'Codzienna pętla zasilania aktywnego self-concept',
    objective: 'Wykształcenie nawyku codzienne rejestrowania małych sukcesów behawioralnych.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Wieczorny przegląd sprawczości konsoliduje w hipokampie ślady pamięciowe związane z poczuciem kontroli i sprawstwa.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis 3 małych zwycięstw z dzisiaj',
        instruction: 'Zapisz 3 konkretne czynności z dzisiejszego dnia, w których wykazałeś się dyscypliną lub przełamałeś opór (np. Przeczytałem 10 stron, Odmówiłem słodyczy).',
        promptText: 'Dzisiejsze 3 małe zwycięstwa:',
        placeholder: '1. Wykonałem trudny telefon o 9:00 rano bez odkładania...\n2. Zrobiłem 20-minutowy trening mimo zmęczenia...\n3. Dokończyłem raport przed 17:00...'
      },
      {
        stepNumber: 2,
        title: 'Identyfikacja użytej cechy/zasobu',
        instruction: 'Dla każdego zwycięstwa dopisz cechę, którą zastosowałeś (np. Odwaga, Konsekwencja, Skupienie).',
        promptText: 'Zastosowane cechy sprawcze:',
        placeholder: '1. Odwaga decyzyjna\n2. Dyscyplina fizyczna\n3. Koncentracja na celu'
      },
      {
        stepNumber: 3,
        title: 'Podsumowanie sprawcze dnia',
        instruction: 'Zakończ wpis zdaniem: „Dzisiaj dostarczyłem mojemu umysłowi 3 dowodów na moją sprawczość”.',
        promptText: 'Podsumowanie dnia:',
        placeholder: 'Jestem człowiekiem, który dotrzymuje obietnic danych samemu sobie.'
      }
    ],
    reflectionQuestions: [
      'Jak prowadzenie tego dziennika przez 7 dni zmienia Twój poranny poziom energii?',
      'O ile łatwiej wstaje się z łóżka, gdy wiesz, że rejestrujesz swoje małe wygrane?'
    ]
  },
  {
    id: 'ex-19-5',
    title: 'Mapa Wewnętrznego Kompasu Wartości',
    subtitle: 'Ugruntowanie samooceny niezależnie od zewnętrznych wyników',
    objective: 'Oparcie poczucia własnej wartości na filarach moralnych i relacyjnych zamiast na tymczasowym statusie.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Aktywacja reprezentacji wartości w mPFC obniża podatność układu limbicznym na ciosy związane z utratą statusu czy krytyką.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór 3 wartości rdzennym',
        instruction: 'Wybierz 3 wartości, które są dla Ciebie absolutnie najważniejsze i których nikt nie może Ci odebrać (np. Uczciwość, Troska o bliskich, Prawda).',
        promptText: 'Moje 3 rdzenne wartości:',
        placeholder: '1. Uczciwość\n2. Odpowiedzialność za bliskich\n3. Autentyczność'
      },
      {
        stepNumber: 2,
        title: 'Opis postępowania w zgodzie z wartością',
        instruction: 'Opisz, jak wygląda postępowanie zgodne z tą wartością MIMO braku sukcesu finansowego czy braku aprobaty otoczenia.',
        promptText: 'Moje działanie wartościowe:',
        placeholder: 'Nawet jeśli projekt się nie uda, zachowam pełną uczciwość wobec zespołu i klienta...'
      },
      {
        stepNumber: 3,
        title: 'Deklaracja wartości stabilnej',
        instruction: 'Napisz zdanie: „Moje poczucie wartości opiera się na tym, jak żyję moimi wartościami, a nie na tym, co myślą o mnie inni”.',
        promptText: 'Moja deklaracja stabilności:',
        placeholder: 'Moja wartość jako człowieka jest nienaruszona, dopóki postępuję w zgodzie z moim kompasem etycznym.'
      }
    ],
    reflectionQuestions: [
      'O ile bardziej niezależny czujesz się od opinii i lajków po zdefiniowaniu tego kompasu?',
      'Którą z tych wartości najbardziej chcesz przekazać swojemu dziecku lub podopiecznym?'
    ]
  },
  {
    id: 'ex-19-6',
    title: 'Trening Przyjmowania Feedbacku',
    subtitle: 'Oddzielanie informacji merytorycznej od obrony ego',
    objective: 'Opracowanie procedury przyjmowania krytyki bez wchodzenia w ataki obronne czy załamanie samooceny.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Stworzenie procedury analitycznej przesuwa przetwarzanie słów krytycznych z ciała migdałowatego do grzbietowo-bocznej kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wspomnienie trudnej krytyki',
        instruction: 'Przypomnij sobie krytykę z przeszłości, która mocno Cię zraniła.',
        promptText: 'Słowa krytyki z przeszłości:',
        placeholder: 'Szef powiedział: Ten raport jest bezpłciowy i nieprzemyślany...'
      },
      {
        stepNumber: 2,
        title: 'Oddzielenie faktów od formy',
        instruction: 'Ekstrahuj z tej krytyki surowy fakt merytoryczny, odrzucając emocjonalne ubarwienia rozmówcy.',
        promptText: 'Surowy fakt merytoryczny:',
        placeholder: 'Fakt: Raport nie zawierał podsumowania finansowego na pierwszej stronie i wykresów trendu.'
      },
      {
        stepNumber: 3,
        title: 'Plan korekty działania',
        instruction: 'Napisz, co konkretnie zrobisz z tą informacją w przyszłości.',
        promptText: 'Moja procedura poprawy:',
        placeholder: 'W każdym kolejnym raporcie dodam 1-stronnicowe executive summary z 3 głównymi wykresami.'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się Twoja reakcja na krytykę, gdy widzisz w niej po prostu darmową korektę błędu?',
      'Jak podziękować rozmówcy za merytoryczną uwagę bez wchodzenia w obronę?'
    ]
  },
  {
    id: 'ex-19-7',
    title: 'Eksperyment Odrzucenia Nierealistycznych Wzorców',
    subtitle: 'Higiena punktów odniesienia w mediach społecznościowych',
    objective: 'Oczyszczenie otoczenia cyfrowego z profili wywołujących nierealistyczne porównania w górę.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Usunięcie sztucznych bodźców statusowych obniża poziom cichej frustracji i przywraca naturalną dynamikę dopaminową.',
    steps: [
      {
        stepNumber: 1,
        title: 'Audyt śledzonych profili',
        instruction: 'Przejrzyj konta, które obserwujesz w sieci i wypisz 3, po których obejrzeniu czujesz ukłucie zawiści lub niedostateczności.',
        promptText: '3 konta wywołujące complexes:',
        placeholder: '1. Konto X (luksusowe podróże)\n2. Konto Y (idealne sylwetki)\n3. Konto Z (pokazywanie sukcesów finansowych)'
      },
      {
        stepNumber: 2,
        title: 'Akcja wyciszenia / unfollow',
        instruction: 'Kliknij unfollow lub wycisz relacje z tych profili na 30 dni.',
        promptText: 'Potwierdzenie usunięcia:',
        placeholder: 'Wykonano: Usunięto z obserwowaanych 3 konta wywołujące presję.'
      },
      {
        stepNumber: 3,
        title: 'Zamiana na realne punkty odniesienia',
        instruction: 'Zaobserwuj w to miejsce 2 konta edukacyjne lub naukowe, które uczą konkretnych umiejętności.',
        promptText: 'Nowe wartościowe źródła:',
        placeholder: 'Zaobserwowano profil naukowy o architektury i profil stolarstwa rzemieślniczego.'
      }
    ],
    reflectionQuestions: [
      'O ile spokorniejszy i czystszy staje się Twój umysł bez ciągłej ekspozycji na cyfrowe fasady?',
      'Jak możesz wykorzystać zaoszczędzony czas na realny rozwój pasji?'
    ]
  },
  {
    id: 'ex-19-8',
    title: 'Manifest Stabilnej Samooceny',
    subtitle: 'Osobista deklaracja samowystarczalności i szacunku do samego siebie',
    objective: 'Zsyntetyzowanie wglądów z Rozdziału 3 w stabilny manifest prowadzący przez wyzwania życiowe.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Głęboka rekonstrukcja skryptów tożsamościowych w kory przedczołowej buduje odporność na kryzysy i niepowodzenia.',
    steps: [
      {
        stepNumber: 1,
        title: 'Moje prawo do bycia człowiekiem',
        instruction: 'Napisz zdanie dające sobie prawo do popełniania błędów i bycia początkującym.',
        promptText: 'Moje prawo do nauki:',
        placeholder: 'Daję sobie pełne prawo do popełniania błędów na ścieżce nauki. Błąd jest informacją, a nie wyrokiem.'
      },
      {
        stepNumber: 2,
        title: 'Moje źródło sprawczości',
        instruction: 'Napisz, dokąd kierujesz swoją uwagę, gdy stajesz przed trudnym wyzwaniem.',
        promptText: 'Mój kierunek uwagi:',
        placeholder: 'Kieruję uwagę na pierwszy mikrokrok, który mogę wykonać tu i teraz, zamiast bać się całości zadania.'
      },
      {
        stepNumber: 3,
        title: 'Ostateczna deklaracja szacunku',
        instruction: 'Stwórz 2-zdaniową deklarację: „Szanuję siebie za moje wartości i włożony wysiłek...”',
        promptText: 'Mój osobisty manifest samooceny:',
        placeholder: 'Szanuję siebie za moją uczciwość, wykonaną pracę i odwagę do rozwoju. Moja wartość jest nienaruszona bez względu na oceny otoczenia.'
      }
    ],
    reflectionQuestions: [
      'Jak ten manifest zmienia Twoje podejście do najbliższego trudnego zadania w tym tygodniu?',
      'Komu w swoim środowisku chcesz przestać cokolwiek udowadniać?'
    ]
  }
];

export const chapterNineteen: Chapter = {
  number: 19,
  volume: 3,
  volumeChapterNumber: 3,
  title: 'Samoocena, pewność siebie i obraz własnych możliwości',
  subtitle: 'Self-Efficacy Alberta Bandury, architektura poczucia wartości, re-kalibracja kompetencji i uwalnianie od porównań',
  leadParagraph: 'Samoocena jest jednym z najbardziej przereklamowanych, a zarazem najsłabiej rozumianych pojęć w popularnej psychologii. Lata bezrefleksyjnego promowania mitycznej „wysokiej samooceny” i pustych afirmacji stworzyły pokolenie ludzi o kruchym ego, paraliżowanym przez najmniejszą krytykę i uzależnionym od zewnętrznego poklasku. Tymczasem rzetelna nauka o zachowaniu pokazuje, że kluczem do stabilności psychicznej nie jest sztuczne nadmuchiwanie samooceny, lecz budowanie ugruntowanego Poczucia Skuteczności (Self-Efficacy), realistyczna kalibracja kompetencji oraz odcięcie od nierealistycznych punktów odniesienia.',
  totalEstimatedPages: 64,
  sections: [
    {
      id: 'sec-19-1',
      pageNumber: 1,
      sectionNumber: '19.1',
      title: 'Mapa Pojęciowa: Samoocena vs Poczucie Własnej Wartości vs Self-Efficacy vs Pewność Siebie',
      category: 'teoria',
      readingTimeMinutes: 15,
      quote: {
        text: 'Nie musisz przekonywać siebie, że jesteś doskonały. Musisz jedynie dostarczać swojemu umysłowi dowodów z działania.',
        author: 'Albert Bandura'
      },
      paragraphs: [
        'Jednym z głównych powód zamieszania w rozwoju osobistym jest wrzucanie do jednego worka pojęć, które w naukach poznawczych opisują zupełnie inne mechanizmy.',
        'Samoocena (Self-Esteem) to całościowa, wartościująca ocena własnej osoby — uogólnione odczucie: „Jestem w porządku jako człowiek” lub „Jestem do niczego”. Poczucie Własnej Wartości to najgłębsza, bezwarunkowa warstwa tej oceny, nienaruszona przez codzienne sukcesy czy porażki.',
        'Poczucie Skuteczności (Self-Efficacy, Albert Bandura) dotyczy natomiast konkretnego przekonania o zdolności do zorganizowania i wykonania działań niezbędnych do osiągnięcia określonego celu („Wiem, że potrafię przygotować ten raport”).',
        'Pewność siebie (Self-Confidence) jest wypadkową powyższych, często oznaczającą poziom zaufania do własnych sądów i braku lęku w ekspozycji społecznej. Rzeczywista kompetencja to realny, sprawdzalny stan wiedzy i umiejętności.'
      ]
    },
    {
      id: 'sec-19-2',
      pageNumber: 4,
      sectionNumber: '19.2',
      title: 'Architektura Samooceny: Jak Umysł Ocenia Własne Osiągnięcia i Porażki',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Umysł tworzy oceny na swój temat w procesie stałego porównywania wyników działań z przyjętym wewnętrznym standardem.',
        'Jeśli standard jest nierealistycznie wysoki (np. „Muszę zawsze być najlepszy”), każde wykonanie zadania na poziomie po prostu „bardzo dobrym” rejestrowane jest przez architekturę poznawczą jako porażka, obniżając samoocenę.',
        'Pętla bezradności powstaje wtedy, gdy niska samoocena generuje lęk przed porażką, co prowadzi do unikania działania, braku sukcesów i w konsekwencji do ponownego potwierdzenia tezy o własnej nieadekwatności.'
      ]
    },
    {
      id: 'sec-19-3',
      pageNumber: 7,
      sectionNumber: '19.3',
      title: 'Korzenie Samooceny: Wpływ Wczesnych Relacji, Krytyki i Pochwał',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Fundament pod dorosłą samoocenę wylewany jest we wczesnym dzieciństwie w relacjach z opiekunami.',
        'Dziecko chwalone za talent („Jesteś taki mądry!”) wykształca warunkową samoocenę i Fixed Mindset — przy pierwszej trudności odczuwa lęk, że zniszczy etykietę geniusza. Dziecko doceniane za wysiłek i strategię („Widzę, jak ciężko nad tym pracowałeś”) buduje stabilne poczucie skuteczności.',
        'Zinternalizowany głos surowego, nieznoszącego sprzeciwu rodzica staje się w dorosłym życiu wewnętrznym krytykiem, który torpeduje każde przedsięwzięcie zanim jeszcze się rozpocznie.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[1]
    },
    {
      id: 'sec-19-4',
      pageNumber: 10,
      sectionNumber: '19.4',
      title: 'Poczucie Skuteczności (Albert Bandura) — 4 Filary Sprawczości',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Przekonania ludzi na temat ich skuteczności wpływają na to, jakie cele sobie wyznaczają, ile wysiłku wkładają w ich realizację, jak długo są wytrwali w obliczu trudności oraz jak radzą sobie z porażkami.',
        author: 'Albert Bandura (Self-Efficacy: The Exercise of Control, 1997)'
      },
      paragraphs: [
        'Albert Bandura z Uniwersytetu Stanforda, jeden z najbardziej wpływowych psychologów XX wieku, dokonał przełomowego odkrycia: to nie sama inteligencja ani obiektywne zdolności decydują o sukcesie człowieka, lecz jego poczucie własnej skuteczności (Self-Efficacy).',
        'Poczucie skuteczności to podmiotowe przekonanie jednostki, że posiada zdolność do zmobilizowania zasobów poznawczych, motywacji oraz ciągów działań niezbędnych do sprostania wymogom określonej sytuacji.',
        'Bandura precyzyjnie zidentyfikował cztery niezastąpione źródła budowania Self-Efficacy:',
        '1. DOŚWIADCZENIA OPANOWANIA (Mastery Experiences): Najpotężniejszy fundament. Prawdziwe poczucie sprawczości rodzi się wyłącznie z pokonania realnej przeszkody własnym wysiłkiem. Łatwe sukcesy rodzą kruchą iluzję pewności siebie, która pryska przy pierwszym oporze. Potrzebujesz doświadczeń przezwyciężenia porażki, by Twój umysł nauczył się, że błąd jest etapem nauki, a nie wyrokiem.\n2. DOŚWIADCZENIA ZASTĘPCZE (Vicarious Experiences / Modeling): Obserwowanie ludzi podobnych do nas pod względem wieku, statusu czy punktu wyjścia, którzy osiągają sukces dzięki wytrwałości. Myśl: „Skoro on, będąc w takiej samej sytuacji, dał radę, to ja również mogę się tego nauczyć”.\n3. PERSWAZJA SPOŁECZNA (Social Persuasion): Konstruktywna, wiarygodna informacja zwrotna od szanowanego mentora lub autorytetu, który wskazuje realne możliwości rozwoju, zamiast pustego pochlebstwa.\n4. STANY FIZJOLOGICZNE I EMOCJONALNE (Somatic & Emotional States): Zdolność do interpretacji pobudzenia autonomicznego (przyspieszone tętno, suchość w ustach) nie jako dowodu na zbliżającą się katastrofę („Boże, paraliżuje mnie!”), lecz jako mobilizacji organizmu do walki („Moje ciało pompuje tlen do mózgu, bym był maksymalnie skupiony”).'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Alberta Bandury: Dlaczego afirmacje bez działania nie działają?',
          paragraphs: [
            'Bandura wprost kpił z pop-poradników zalecających powtarzanie przed lustrem: „Jestem zwycięzcą”. Kora przedczołowa i układ limbiczny nie dają się oszukać werbalnym zaklinaniem rzeczywistości. Jeśli stoisz przed wyzwaniem i nie posiadasz w hipokampie śladów pamięciowych realnie pokonanych trudności (Mastery Experiences), układ nerwowy odrzuci afirmację jako fałsz.',
            'Sprawczość jest konstruowana empirycznie. Jedynym sposobem na uciszenie lęku jest podjęcie mikrodziałania w świecie fizycznym, które zakończy się mierzalnym rezultatem, dostarczając układowi nerwowemu twardego dowodu sprawstwa.'
          ],
          highlightBox: {
            title: 'Wgląd Alberta Bandury: Różnica między optymizmem a sprawczością',
            content: '„Naiwny optymista wierzy, że wszystko ułoży się samo z siebie. Człowiek o wysokim Self-Efficacy nie wierzy w magiczne szczęście — wierzy, że cokolwiek się wydarzy, posiada zdolność do adaptacji, nauki i wypracowania rozwiązania”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-19-4-bandura-sprawczosc',
        type: 'what_we_know',
        title: 'Co naprawdę wiemy? — Demontaż Mitów o Pewności Siebie wg Bandury',
        subtitle: 'Oddzielenie faktów naukowych od iluzji coachingu motywacyjnego',
        context: 'Przygotowanie pracownika do objęcia roli lidera nowego projektu.',
        whatWeKnow: {
          items: [
            {
              id: 'c19-bnd-1',
              statement: 'Prawdziwe poczucie skuteczności buduje się wyłącznie poprzez osobiste przezwyciężenie trudnych sytuacji (Mastery Experiences).',
              category: 'fakt',
              explanation: 'To centralna teza Bandury poparta dekadami badań eksperymentalnych: umysł potrzebuje empirycznych dowodów z działania.'
            },
            {
              id: 'c19-bnd-2',
              statement: 'Wystarczy codziennie powtarzać pozytywne afirmacje, by trwale podnieść poczucie własnej wartości i odnieść sukces.',
              category: 'interpretacja',
              explanation: 'Mit obalony naukowo (Wood et al., 2009). U osób o niskiej samoocenie powtarzanie nierealistycznych afirmacji wywołuje dysonans poznawczy i pogłębia depresję.'
            },
            {
              id: 'c19-bnd-3',
              statement: 'Drżenie rąk i przyspieszone tętno przed prezentacją oznaczają, że nie nadajesz się na mówcę i powinieneś zrezygnować.',
              category: 'interpretacja',
              explanation: 'Błąd interpretacji somatycznej. Badania Alii Crum pokazują, że przekadrowanie pobudzenia (arousal reappraisal) jako energii do działania drastycznie podnosi jakość wystąpienia.'
            },
            {
              id: 'c19-bnd-4',
              statement: 'Obserwacja rówieśnika lub osoby o podobnych zasobach pokonującej problem (modelowanie) skutecznie podnosi własne Self-Efficacy.',
              category: 'fakt',
              explanation: 'Doświadczenie zastępcze (Vicarious Experience) aktywuje neurony lustrzane i redukuje wyuczoną bezradność.'
            }
          ]
        },
        takeaway: 'Nie czekaj, aż poczujesz pewność siebie, by zacząć działać. Zacznij działać w mikroskali, by Twoje działanie wytworzyło pewność siebie jako produkt uboczny.'
      }
    },
    {
      id: 'sec-19-5',
      pageNumber: 13,
      sectionNumber: '19.5',
      title: 'Porównania Społeczne (Leon Festinger): Porównania w Górę i w Dół',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'W ludzkim umyśle istnieje niepowstrzymany pęd do oceniania własnych zdolności i opinii. W braku obiektywnych fizycznych standardów człowiek bezwzględnie porównuje się z innymi ludźmi.',
        author: 'Leon Festinger (A Theory of Social Comparison Processes, 1954)'
      },
      paragraphs: [
        'Leon Festinger w 1954 roku sformułował Teorię Porównań Społecznych (Social Comparison Theory), odkrywając jeden z najbardziej fundamentalnych napędów ludzkiej psychiki.',
        'Większość ludzi wierzy, że ocenia swoje życie według obiektywnych kryteriów: „Zarabiam X, mam dach nad głową, moje zdrowie jest stabilne”. Festinger dowiódł, że mózg ludzki jest biologicznie niezdolny do oceny dobrostanu w próżni. Wszelkie pojęcia takie jak „sukces”, „bogactwo”, „atrakcyjność” czy „mądrość” są definiowane wyłącznie relacyjnie — poprzez zestawienie z grupą odniesienia (Reference Group).',
        'Festinger podzielił porównania na dwa wektory o odmiennej dynamice psychologicznej:',
        '1. PORÓWNANIA W GÓRĘ (Upward Social Comparison): Zestawianie się z osobami osiągającymi wyższy status, większe zarobki lub lepsze wyniki. W warunkach adaptacyjnych może inspirować do nauki i wyznaczać kierunek rozwoju. Jednak w dobie cyfrowej, gdy obiektem porównania stają się wyreżyserowane profile celebrytów, generuje chroniczny wstyd, poczucie ubytku statusowego i depresję.\n2. PORÓWNANIA W DÓŁ (Downward Social Comparison): Zestawianie się z osobami w gorszym położeniu biologicznym lub finansowym. Daje natychmiastową ulgę i podbija samoocenę („Przynajmniej nie jestem w tak fatalnej sytuacji jak on”), lecz jest to proteza krucha i pasywna — nie buduje realnej kompetencji, a jedynie znieczula ból egzystencjalny.'
      ],
      subsections: [
        {
          title: 'Analiza słów Festingera: Pułapka asymetrii poznawczej',
          paragraphs: [
            'Współczesna psychologia rozwinęła tezę Festingera o zjawisko „asymetrii kulis i sceny”. Porównując się z innymi w życiu społecznym lub w internecie, popełniamy kardynalny błąd logiczny: porównujemy swoje WŁASNE KULISY (nasz wewnętrzny chaos, lęki, wstyd, zmęczenie i poranne wątpliwości) z CUDZĄ SCENĄ (wyprasowanym garniturem, uśmiechem na konferencji, wyretuszowanym zdjęciem z wakacji).',
            'Ta asymetria sprawia, że własne życie wydaje się żałosne i wybrakowane, podczas gdy cudze życie jawi się jako pasmo nieustających triumfów bez cienia cierpienia.'
          ],
          highlightBox: {
            title: 'Wgląd Festingera: Jak wybierać grupę odniesienia?',
            content: '„Nie możesz przestać się porównywać — tak został ukształtowany Twój mózg przez miliony lat ewolucji w stadzie. Możesz jednak świadomie wybrać grupę odniesienia. Zamiast porównywać się z miliarderami z Instagrama, porównuj się z samym sobą z przeszłości”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-19-5-porownanie-spoleczne',
        type: 'dual_perspectives',
        title: 'Dwie Perspektywy: Magda i Ewa — Porównanie Społeczne na LinkedIn',
        subtitle: 'Konfrontacja wyidealizowanego wizerunku sukcesu z rzeczywistym kosztem psychicznym',
        context: 'Magda przegląda post Ewy ogłaszający awans na partnera zarządzającego w międzynarodowej korporacji.',
        dualPerspective: {
          situation: 'Wtorek, godzina 22:30. Magda siedzi w dresie przy biurku, poprawiając zaległe arkusze, i widzi na ekranie profesjonalne zdjęcie uśmiechniętej Ewy z kwiatami i gratulacjami.',
          personA: {
            name: 'Magda (Ofiara porównania w górę)',
            quote: '„Ewa ma wszystko: spektakularną karierę, idealną figurę i czas na konferencje. Ja mam 32 lata, tkwię na średnim szczeblu i marnuję swoje życie”.',
            whatTheyKnow: 'Zna wszystkie swoje błędy z tego tygodnia, chroniczne zmęczenie i niepewność co do przyszłości.',
            whatTheyMiss: 'Nie ma pojęcia, że Ewa od roku zmaga się z ciężką bezsennością i rozwodzi się z mężem.',
            interpretation: '„Jestem leniwa, gorsza i nieudolna w porównaniu z Ewą”.',
            coreNeed: 'Poczucie uznania, sensu własnej pracy i spokój tożsamościowy.',
            fear: 'Przeciętność, życiowa porażka i bycie niewidzialną dla otoczenia.',
            action: 'Zamknięcie laptopa w poczuciu bezsilności, bezsenna noc pełna ruminacji i spadek energii rano.'
          },
          personB: {
            name: 'Ewa (Autorka wyreżyserowanej sceny)',
            quote: '„Jeśli nie wstawię tego posta o awansie, zarząd uzna, że brakuje mi siły przebicia. W środku czuję absolutną pustkę”.',
            whatTheyKnow: 'Wie, że za ten awans zapłaciła rozpadem małżeństwa, wrzodami żołądka i brakiem kontaktu z córką.',
            whatTheyMiss: 'Nie wie, że jej znajome z roku patrzą na nią z zawiścią i niszczą własną samoocenę jej kosztem.',
            interpretation: '„Muszę utrzymać tę maskę sukcesu za wszelką cenę, bo jeśli pęknie, zostanę z niczym”.',
            coreNeed: 'Prawdziwa bliskość, odpoczynek i uwolnienie od morderczych oczekiwań rady nadzorczej.',
            fear: 'Utrata statusu, demaskacja kryzysu osobistego i samotność.',
            action: 'Wymuszone pozowanie do zdjęć, pisanie autopromocyjnego tekstu i zażycie tabletki nasennej.'
          },
          synthesis: 'Magda zazdrości Ewie czegoś, co w rzeczywistości nie istnieje: poczucia spełnienia. Porównuje swój autentyczny ból z marketingową fasadą Ewy, nie dostrzegając, że Ewa oddałaby połowę swojej pensji za jeden spokojny wieczór, jaki Magda mogłaby spędzić z bliskimi.'
        },
        takeaway: 'Nigdy nie zazdrość nikomu jego sukcesu, dopóki nie poznasz ceny, jaką za niego płaci za zamkniętymi drzwiami.'
      }
    },
    {
      id: 'sec-19-6',
      pageNumber: 16,
      sectionNumber: '19.6',
      title: 'Media Społecznościowe Jako Fabryka Nierealistycznych Punktów Odniesienia',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Tradycyjne grupy porównawcze ograniczały się do klasy szkolnej czy zespołu w pracy. Media społecznościowe eksponują umysł na sztucznie wyselekcjonowane pasmo sukcesów miliona najbogatszych i najatrakcyjniejszych ludzi.',
        'Mózg nie jest ewolucyjnie przystosowany do filtrowania retuszu i marketingu cyfrowego. Rejestruje te obrazki jako obiektywną normę społeczną, wywołując przewlekłe poczucie niedostateczności i ubytek statusowy.',
        'Higiena cyfrowa i celowe wyciszanie bodźców statusowych są niezbędne do odzyskania spokoju psychicznego.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[2]
    },
    {
      id: 'sec-19-7',
      pageNumber: 19,
      sectionNumber: '19.7',
      title: 'Perfekcjonizm Adaptacyjny vs Dysfunkcyjny',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Perfekcjonizm nie jest cechą jednolitą. Perfekcjonizm adaptacyjny stawia wysokie standardy merytoryczne, pozwalając czerpać radość z uczenia się i akceptując błędy jako koszt procesu.',
        'Perfekcjonizm dysfunkcyjny uzależnia prawo do istnienia od absolutnego braku jakiegokolwiek potknięcia. Każda pomyłka jest tu traktowana jako katastrofa tożsamościowa.',
        'Dysfunkcyjny perfekcjonizm jest głównym motorem prokrastynacji — człowiek woli nie zacząć zadania wcale, niż zrealizować je na poziomie „tylko bardzo dobrym”.'
      ]
    },
    {
      id: 'sec-19-8',
      pageNumber: 22,
      sectionNumber: '19.8',
      title: 'Lęk Przed Oceną i Syndrom Oszusta (Impostor Syndrome)',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Mimo wybitnych dowodów zewnętrznych na sukces, osoby te zachowują niezłomne przekonanie, że są oszustami i nie zasługują na swój status. Każdy sukces uważają za przypadek, a każdą pochwałę za pomyłkę otoczenia.',
        author: 'Pauline R. Clance & Suzanne A. Imes (The Impostor Phenomenon in High Achieving Women, 1978)'
      },
      paragraphs: [
        'W 1978 roku psychoterapeutki Pauline Rose Clance i Suzanne Imes opisały zjawisko, które dotyka nawet do 70% wybitnych specjalistów, naukowców, artystów i liderów biznesu: Zjawisko Oszusta (Impostor Phenomenon).',
        'Syndrom Oszusta nie jest jednostką chorobową w klasyfikacji psychiatrycznej, lecz specyficznym, utrwalonym zniekształceniem atrybucyjnym. Osoba dotknięta tym syndromem stosuje podwójny standard interpretacyjny:',
        '1. SUKCESY przypisuje wyłącznie czynnikom zewnętrznym, niestabilnym i niezależnym od siebie: „To był czysty przypadek”, „Miałem szczęście”, „Komisja miała słabszy dzień”, „Pomogli mi koledzy”, „Po prostu dobrze ściemniałem na rozmowie”.\n2. PORAŻKI przypisuje bezwzględnie czynnikom wewnętrznym, stałym i tożsamościowym: „Stało się tak, bo jestem głupi, niekompetentny i leniwy”.',
        'W rezultacie żaden, nawet najbardziej spektakularny sukces (uzyskanie doktoratu, wygranie przetargu na 10 milionów, nagroda literacka) nie zasila rezerwuaru samooceny. Wręcz przeciwnie: każdy awans potęguje lęk! Człowiek myśli: «Teraz postawiono mi jeszcze wyższe wymagania — stawka wzrosła i tym łatwiej będzie im odkryć, że nic nie umiem».'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Clance i Imes: Cykl Oszusta i mechanizmy obronne',
          paragraphs: [
            'Clance i Imes zmapowały tzw. Cykl Oszusta (Impostor Cycle). Gdy przed jednostką staje nowe zadanie, pojawia się paraliżujący lęk przed demaskacją. Umysł wybiera jedną z dwóch strategii kompensacyjnych:',
            'STRATEGIA 1: Nadmierne przygotowanie (Over-preparation) — praca po 18 godzin na dobę, czytanie setek artykułów, sprawdzanie każdego przecinka. Gdy przychodzi sukces, człowiek mówi: „Udało się tylko dlatego, że harowałem ponad siły. Gdybym pracował normalnie, ponisłbym klęskę”.\nSTRATEGIA 2: Prokrastynacja i panika w ostatniej chwili — odkładanie zadania do ostatniej nocy. Gdy przychodzi sukces, człowiek mówi: „To był fart, znowu udało mi się prześlizgnąć”. W obu przypadkach wiara w rzeczywiste kompetencje pozostaje zerowa.'
          ],
          highlightBox: {
            title: 'Wgląd Kliniczny: Kto najczęściej cierpi na Syndrom Oszusta?',
            content: 'Prawdziwi ignoranci i hochsztaplerzy nigdy nie cierpią na Syndrom Oszusta (działa u nich Efekt Dunninga-Krugera). Zjawisko to dotyka niemal wyłącznie ludzi sumiennych, inteligentnych i etycznych, których standardy są tak wysokie, że żadne ludzkie wykonanie nie może im sprostać.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-19-8-mikroskop-oszusta',
        type: 'microscope',
        title: 'Człowiek pod mikroskopem: Dr Paweł i panika przed odebraniem nagrody',
        subtitle: 'Wiwisekcja 19 etapów zniekształcenia atrybucyjnego w gabinecie dziekana',
        context: 'Dr Paweł (35 lat, neurobiolog) dowiaduje się o przyznaniu mu prestiżowego europejskiego grantu badawczego ERC.',
        microscopeSteps: [
          { stepNumber: 1, label: 'SYTUACJA', question: 'Co fizycznie zaszło?', content: 'Dziekan wydziału wchodzi do laboratorium Pawła z oficjalnym pismem z Brukseli potwierdzającym przyznanie 1,5 mln euro na badania nad biomarkerami alzheimera.', subtext: 'Fakt instytucjonalny najwyższej rangi merytorycznej.' },
          { stepNumber: 2, label: 'INFORMACJE ZNANE', question: 'Co Paweł wie o swoim wniosku?', content: 'Wie, że pracował nad wnioskiem przez 8 miesięcy, zebrał rzetelne dane pilotażowe na 200 próbkach i zaproponował unikalną metodologię.', subtext: 'Twardy rejestr faktograficzny.' },
          { stepNumber: 3, label: 'BRAK INFORMACJI', question: 'Czego Paweł NIE wie o recenzentach?', content: 'Nie znał osobiście członków panelu oceniającego w Brukseli ani ich wewnętrznych dyskusji.', subtext: 'Luka w wiedzy o procesie oceny.' },
          { stepNumber: 4, label: 'UWAGA', question: 'Na czym natychmiast skupia się uwaga Pawła?', content: 'Na pojedynczym zdaniu z recenzji, w którym recenzent 3 zauważył: „Wielkość próby w kohorcie C mogłaby być w przyszłości poszerzona”.', subtext: 'Hiper-selektywność negatywna.' },
          { stepNumber: 5, label: 'PERCEPCJA', question: 'Co rejestrują zmysły?', content: 'Widzi uśmiech dziekana, ale słyszy w głowie wycie syreny alarmowej.', subtext: 'Rozejście między sygnałem społecznym a stanem wewnętrznym.' },
          { stepNumber: 6, label: 'INTERPRETACJA', question: 'Jakie znaczenie nadaje pismu?', content: '„Musieli się pomylić. Przypadkowo zamienili wnioski. Jeśli wezmę te pieniądze, po roku odkryją, że moje hipotezy są banalne i wylecę z uczelni w niesławie”.', subtext: 'Zniekształcenie atrybucyjne Syndromu Oszusta.' },
          { stepNumber: 7, label: 'EMOCJE', question: 'Co czuje w ciele?', content: 'Lodowaty strach, ucisk w mostku, dławienie w gardle i wszechogarniający wstyd.', subtext: 'Brak radości; reakcja grozy zamiast triumfu.' },
          { stepNumber: 8, label: 'POBUDZENIE', question: 'Fizjologiczny stan organizmu?', content: 'Gwałtowny skok kortyzolu, drżenie mięśni czwórogłowych, spadek temperatury dłoni.', subtext: 'Stan ostrego zagrożenia biologicznego.' },
          { stepNumber: 9, label: 'POTRZEBA', question: 'Czego potrzebuje?', content: 'Natychmiastowego zrzucenia z siebie odpowiedzialności i ucieczki przed oczekiwaniami.', subtext: 'Potrzeba bezpieczeństwa przed demaskacją.' },
          { stepNumber: 10, label: 'MOTYWACJA', question: 'Do czego dąży?', content: 'Do umniejszenia wagi sukcesu w oczach dziekana.', subtext: 'Defensywna autodeprecjacja.' },
          { stepNumber: 11, label: 'OBAWY', question: 'Najczarniejszy scenariusz?', content: 'Konferencja prasowa, na której dziennikarze zadają mu pytanie, a on nie potrafi odpowiedzieć, stając się memem w środowisku akademickim.', subtext: 'Lęk przed publiczną kompromitacją.' },
          { stepNumber: 12, label: 'CEL', question: 'Co postanawia?', content: 'Zminimalizować entuzjazm dziekana i przygotować go na klapę.', subtext: 'Obniżanie poprzeczki oczekiwań.' },
          { stepNumber: 13, label: 'ALTERNATYWY', question: 'Co mógł zrobić dojrzały naukowiec?', content: 'Uśmiechnąć się, uścisnąć dłoń dziekana i powiedzieć: „Dziękuję, to owoc ciężkiej pracy całego naszego zespołu. Cieszę się, że Europa doceniła naszą koncepcję”.', subtext: 'Asertywne przyjęcie sukcesu.' },
          { stepNumber: 14, label: 'DECYZJA', question: 'Dlaczego wybiera umniejszenie?', content: 'By stworzyć sobie poduszkę powietrzną na wypadek trudności badawczych.', subtext: 'Mechanizm asekuracji ego.' },
          { stepNumber: 15, label: 'ZACHOWANIE', question: 'Co mówi na głos?', content: '„Panie dziekanie, nie cieszmy się za wcześnie... To chyba jakaś pomyłka w Brukseli, konkurencja musiała złożyć słabe projekty, a recenzent 3 miał spore uwagi”.', subtext: 'Dewaluacja własnego osiągnięcia.' },
          { stepNumber: 16, label: 'REAKCJA INNYCH', question: 'Jak reaguje dziekan?', content: 'Dziekan jest skonsternowany: „Paweł, opamiętaj się, to najwyżej oceniony grant w Polsce w tej edycji. Przestań się wiecznie biczować”.', subtext: 'Zderzenie z obiektywną oceną z zewnątrz.' },
          { stepNumber: 17, label: 'KONSEKWENCJE', question: 'Bilans sytuacji?', content: 'Paweł zamiast świętować z zespołem sukces, zamyka się w toalecie i wymiotuje ze stresu. Zespół traci zapał, widząc przerażonego lidera.', subtext: 'Zatrucie sukcesu neurotycznym lękiem.' },
          { stepNumber: 18, label: 'AKTUALIZACJA PRZEKONAŃ', question: 'Czego uczy się umysł Pawła?', content: '„Skoro dziekan tak we mnie wierzy, to presja jest jeszcze potworniejsza. Muszę pracować po nocach, bo inaczej koniec”.', subtext: 'Kolejny obrót Cyklu Oszusta.' },
          { stepNumber: 19, label: 'KOLEJNA RUNDA', question: 'Co nastąpi za 3 miesiące?', content: 'Skrajne wypalenie zawodowe, bezsenność i konieczność farmakoterapii przeciwlękowej mimo posiadania miliona euro na koncie.', subtext: 'Cena nieprzepracowanego syndromu oszusta.' }
        ],
        takeaway: 'Sukces nie uleczy Syndromu Oszusta — wręcz przeciwnie, podniesie stawkę lęku. Uleczyć go może jedynie zmiana wewnętrznej reguły przypisywania zasług i akceptacja własnej wystarczalności.'
      },
      caseStudyRef: caseStudiesChapterNineteen[0]
    },
    {
      id: 'sec-19-9',
      pageNumber: 25,
      sectionNumber: '19.9',
      title: 'Przymus Osiągnięć („Muszę Być Najlepszy”) i Warunkowa Samoakceptacja',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przymus osiągnięć powstaje wtedy, gdy dziecko nauczyło się, że ciepło rodzicielskie jest nagrodą za wysokie stopnie czy puchary.',
        'W dorosłym życiu tworzy to mechanizm samooceny warunkowej: człowiek odczuwa spokój jedynie w momencie wygranej. Kilka dni później głód sukcesu powraca z podwojoną siłą.',
        'Uwolnienie od przymusu osiągnięć polega na wykształceniu bezwarunkowej samoakceptacji na poziomie wartości przy jednoczesnym zachowaniu amunicji rozwojowej.'
      ]
    },
    {
      id: 'sec-19-10',
      pageNumber: 28,
      sectionNumber: '19.10',
      title: 'Nadmierna Pewność Siebie (Efekt Dunninga-Krugera) vs Zaniżanie Możliwości',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Ludzie niekompetentni w danej dziedzinie cierpią na podwójne przekleństwo: nie tylko dochodzą do błędnych wniosków i podejmują fatalne decyzje, ale sam brak kompetencji pozbawia ich aparatu metapoznawczego niezbędnego do zdania sobie sprawy z własnej ignorancji.',
        author: 'David Dunning & Justin Kruger (Unskilled and Unaware of It, 1999)'
      },
      paragraphs: [
        'W 1999 roku psychologowie David Dunning i Justin Kruger z Cornell University opublikowali pracę, która stała się jednym z najbardziej cytowanych klasyków psychologii poznawczej. Punktem wyjścia była historia McArthura Wheelera, który obrabował dwa banki w Pittsburghu w biały dzień bez maski, uprzednio wysmarowawszy twarz sokiem z cytryny — był święcie przekonany, że skoro sok z cytryny służy jako atrament sympatyczny, to w kamerach monitoringu jego twarz będzie całkowicie niewidzialna.',
        'Dunning i Kruger przeprowadzili serię rygorystycznych badań na studentach, testując ich kompetencje w logice, gramatyce i poczuciu humoru, a następnie prosząc o oszacowanie własnego wyniku na tle grupy.',
        'Wyniki ukazały fundamentalną asymetrię poznawczą:',
        '1. NAJMNIEJ KOMPETENTNI (dolne 25%): Drastycznie przeszacowywali swoje zdolności. Średnio plasowali się w 12. percentylu rzeczywistych umiejętności, lecz byli przekonani, że znajdują się w 62. percentylu! Brak wiedzy z logiki uniemożliwiał im odróżnienie poprawnego wnioskowania od bzdury. Znajdowali się na tzw. SZCZYCIE GŁUPOTY (Mount Stupid).\n2. NAJBARDZIEJ KOMPETENTNI (górne 25%): Niedoszacowywali swojej pozycji! Będąc w 90. percentylu, sądzili, że wypadli przeciętnie (ok. 70. percentyla). Zakładali błędnie, że skoro dla nich zadania logiczne były oczywiste i proste, to dla wszystkich innych również muszą być banalne (tzw. Klątwa Wiedzy — Curse of Knowledge).'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Dunninga i Krugera: Metapoznanie jako warunek pokory',
          paragraphs: [
            'Dunning i Kruger sformułowali kluczową definicję: brak kompetencji to przede wszystkim DEFICYT METAPOZNAWCZY (Metacognitive Deficit). Aby wiedzieć, jak słaby jesteś w medycynie, prawie czy kodowaniu, musisz najpierw posiąść wystarczającą wiedzę o złożoności tych dziedzin.',
            'Dopiero gdy człowiek zaczyna się uczyć i wkracza w tzw. DOLINĘ ROZPACZY (Valley of Despair), zdaje sobie sprawę z oceanu własnej niewiedzy. Prawdziwa pewność siebie rośnie powoli na STOKU OŚWIECENIA (Slope of Enlightenment) i charakteryzuje się precyzyjną świadomością granic własnych kompetencji.'
          ],
          highlightBox: {
            title: 'Wgląd Dunninga: Dlaczego debiutanci są najgłośniejsi w dyskusji?',
            content: '„Na Szczycie Głupoty nie masz żadnych wątpliwości. Świat wydaje się czarno-biały, a rozwiązania problemów ekonomicznych czy zdrowotnych — dziecinnie proste. Im mniej wiesz, z tym większą agresją i pewnością siebie narzucasz swoje zdanie otoczeniu”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-19-10-dunning-kruger-startup',
        type: 'counter_case',
        title: 'Kontrprzypadek: Gdy „Szczyt Głupoty” doprowadził do katastrofy inwestycyjnej',
        subtitle: 'Jak 3-tygodniowy kurs krypto stworzył „eksperta”, który stracił oszczędności rodziny',
        context: 'Decyzje inwestycyjne młodego inwestora detalicznego w dobie hossy.',
        counterCase: {
          standardTheory: 'Intuicja podpowiada: człowiek, który włożył oszczędności całego życia w ryzykowny instrument finansowy, z pewnością gruntownie przestudiował analizę fundamentalną, matematykę finansową i prawo rynków kapitałowych.',
          counterExample: 'Krzysztof (26 lat, z wykształcenia fizjoterapeuta) po obejrzeniu kilkunastu filmów na YouTube i przeczytaniu dwóch e-booków poczuł się absolutnym geniuszem tradingu. Z uśmiechem pouczał swojego wuja (od 30 lat profesora ekonomii), że „tradycyjne finanse to przeżytek dla dinozaurów, a on zarobi 500% w kwartał”. Wziął kredyt na 200 tysięcy złotych z dźwignią finansową 1:20. Gdy nastąpiła 15-procentowa korekta rynkowa, jego pozycja została zlikwidowana w 4 minuty. Został z długiem na 15 lat.',
          whyItDefiesRule: 'Krzysztof nie miał pojęcia o pojęciu płynności rynkowej, ryzyku korelacyjnym ani matematyce likwidacji lewarowanej — właśnie ta ignorancja dała mu 100% pewności siebie.',
          deeperLesson: 'Prawdziwy ekspert nieustannie mówi o ryzyku, scenariuszach awaryjnych i prawdopodobieństwie. Jeśli ktoś w złożonej dziedzinie gwarantuje 100% sukcesu i wyśmiewa ryzyko — masz przed sobą człowieka stojącego na samym czubku Szczytu Głupoty Dunninga-Krugera.'
        },
        takeaway: 'Bądź podejrzliwy wobec własnej pewności siebie za każdym razem, gdy zaczynasz nową dziedzinę. Prawdziwa wiedza zaczyna się od bolesnego uświadomienia sobie, jak niewiele wiesz.'
      },
      caseStudyRef: caseStudiesChapterNineteen[3]
    },
    {
      id: 'sec-19-11',
      pageNumber: 31,
      sectionNumber: '19.11',
      title: 'Informacja Zwrotna i Błąd Jako Surowiec do Nauki',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przyjmowanie krytyki bez wchodzenia w ataki obronne wymaga odseparowania własnego ego od realizowanego pliku czy projektu.',
        'Dojrzała postawa traktuje informację zwrotną (feedback) jako darmowy surowiec diagnostyczny. Uwaga przełożonego czy klienta nie dotyczy Twojego prawa do szacunku — dotyczy konkretnej poprawki w tabeli.',
        'Zamiana pytania „Co to mówi o mojej wartości?” na pytanie „Co to mówi o mojej procedurze pracy?” natychmiast przywraca spokój.'
      ]
    },
    {
      id: 'sec-19-12',
      pageNumber: 34,
      sectionNumber: '19.12',
      title: 'Samoocena Niestabilna (Contingent) vs Samoocena Ugruntowana i Samowspółczucie',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Samowspółczucie nie polega na litowaniu się nad sobą ani na pobłażliwości dla lenistwa. To traktowanie siebie z taką samą życzliwością, troską i konstruktywnym wsparciem, z jakim potraktowalibyśmy serdecznego przyjaciela w chwili jego największej porażki.',
        author: 'Kristin Neff (Self-Compassion: The Proven Power of Being Kind to Yourself, 2011)'
      },
      paragraphs: [
        'Przełomowe badania prof. Jennifer Crocker z University of Michigan nad Samooceną Warunkową (Contingent Self-Esteem) oraz prof. Kristin Neff z University of Texas nad Samowspółczuciem (Self-Compassion) przyniosły rewolucję w nowoczesnej psychologii dobrostanu.',
        'Crocker wykazała, że tradycyjna samoocena opiera się na tzw. podstawach warunkowych (Contingencies of Self-Worth): wyglądzie fizycznym, aprobacie społecznej, statusie materialnym czy wybitnych osiągnięciach. Kiedy człowiek opiera swoją wartość na sukcesach zawodowych, każdy spadek sprzedaży czy uwaga szefa traktowany jest przez układ nerwowy jako śmiertelne zagrożenie egzystencjalne.',
        'W odpowiedzi na wady samooceny warunkowej, Kristin Neff zaproponowała alternatywny, znacznie stabilniejszy model relacji ze sobą — SAMOWSPÓŁCZUCIE (Self-Compassion). Model ten składa się z trzech nierozerwalnych filarów:',
        '1. ŻYCZLIWOŚĆ DLA SIEBIE (Self-Kindness) vs Samokrytyka: Gdy ponosisz porażkę, Twój wewnętrzny dialog nie zamienia się w chłostę („Jesteś beznadziejny, znowu wszystko zepsułeś”), lecz przybiera ton dojrzałego, wspierającego trenera: „To trudny moment. Zrobiłeś błąd, ale to nie przekreśla Twojej wartości. Sprawdźmy na spokojnie, co poszło nie tak”.\n2. WSPÓLNE CZŁOWIECZEŃSTWO (Common Humanity) vs Izolacja: Świadomość, że cierpienie, błędy, niedoskonałość i potknięcia są uniwersalnym, wspólnym doświadczeniem wszystkich ludzi na Ziemi, a nie Twoją osobistą, haniebną ułomnością.\n3. UWAŻNOŚĆ (Mindfulness) vs Nadmierna Identyfikacja: Zdolność do zauważenia bolesnych emocji bez ich wypierania, ale i bez katastroficznego nakręcania się w spiralę rozpaczy.'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Kristin Neff: Neurobiologia samobiczowania vs samowspółczucia',
          paragraphs: [
            'Neff wraz z neurobiologami wykazała, że gdy człowiek bezlitośnie krytykuje samego siebie, jego układ nerwowy aktywuje układ zagrożenia (Threat-Defense System). Kora przedczołowa staje się napastnikiem, a ciało migdałowate ofiarą — organizm zalewa się kortyzolem i noradrenaliną, co prowadzi do chronicznego wyczerpania i depresji.',
            'Kiedy natomiast stosujemy samowspółczucie, aktywujemy układ opieki i ukojenia (Caregiving / Soothing System) powiązany z wyrzutem oksytocyny i endorfin. Tętno zwalnia, układ przywspółczulny przejmuje kontrolę, co przywraca korze przedczołowej pełną jasność myślenia niezbędną do naprawienia błędu.'
          ],
          highlightBox: {
            title: 'Wgląd Kristin Neff: Samowspółczucie to nie pobłażliwość',
            content: '„Najczęstszy mit głosi, że jeśli będziesz dla siebie życzliwy, staniesz się leniwy i osiądziesz na laurach. Badania pokazują coś dokładnie odwrotnego: samokrytyka paraliżuje lękiem przed kolejnym błędem, podczas gdy samowspółczucie daje odwagę do podejmowania najtrudniejszych wyzwań, bo wiesz, że w razie potknięcia nie zostaniesz skatowany przez samego siebie”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-19-12-samowspolczucie-neff',
        type: 'what_if',
        title: 'Zmień jeden element: Od samobiczowania do samowspółczucia po stracie kontraktu',
        subtitle: 'Symulacja reakcji dyrektora handlowego po odrzuceniu kluczowej oferty',
        context: 'Robert (39 lat, dyrektor sprzedaży) traci kluczowego klienta wartego 2 miliony złotych rocznie na rzecz konkurencji.',
        whatIfOptions: {
          defaultScenario: 'Robert wraca do domu i przez 5 godzin pije alkohol, powtarzając sobie w myślach: „Jestem skończonym zerem, przez moją głupotę firma pójdzie na dno, nie nadaję się na dyrektora”. Następnego dnia przychodzi do biura wrogi, wyżywa się na zespole i popełnia kolejne błędy operacyjne.',
          options: [
            {
              id: 'c19-opt-n1',
              changeLabel: 'Zastosowanie protokołu Self-Compassion Neff: pauza uważności, życzliwość i perspektywa wspólnego człowieczeństwa',
              resultingInterpretation: 'Robert bierze głęboki oddech i mówi sobie: „To potężny cios i boli. Każdy handlowiec na świecie traci czasem wielkie kontrakty. To nie oznacza, że jestem zerem — to oznacza, że musimy zrewidować naszą ofertę cenową”.',
              resultingBehavior: 'Spokojny wieczór z rodziną, regenerujący sen, a rano rzeczowa, inspirująca narada z zespołem analizująca ofertę konkurencji.',
              psychologicalImpact: 'Ocalenie zasobów metabolicznych mózgu, zachowanie zaufania zespołu i wygranie kolejnego przetargu miesiąc później.'
            },
            {
              id: 'c19-opt-n2',
              changeLabel: 'Eskalacja samooceny warunkowej: próba udowodnienia swojej wartości przez pracę 16h na dobę w poczuciu paniki',
              resultingInterpretation: 'Robert traktuje utratę klienta jako osobistą zniewagę, którą musi natychmiast zmazać za wszelką cenę.',
              resultingBehavior: 'Terror w dziale sprzedaży, przymusowe nadgodziny, odejście z pracy dwóch najlepszych handlowców.',
              psychologicalImpact: 'Wzrost poziomu lęku w całym zespole, zawał serca u Roberta w wieku 41 lat.'
            }
          ]
        },
        takeaway: 'Nie możesz zbudować trwałego sukcesu na fundamencie nienawiści do samego siebie. Prawdziwa siła rodzi się z życzliwości, która pozwala podnieść się po każdej porażce z podniesioną głową.'
      },
      caseStudyRef: caseStudiesChapterNineteen[4]
    },
    {
      id: 'sec-19-13',
      pageNumber: 37,
      sectionNumber: '19.13',
      title: '💡 BŁĘDNA INTUICJA: Wysoka samoocena rozwiązuje wszystkie problemy',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Ruch na rzecz sztucznego podnoszenia samooceny w latach 90. przyniósł opłakane skutki. Wmawianie dzieciom, że są „wyjątkowe i najlepsze” bez powiązania tego z wysiłkiem stworzyło postawy narcyzmu i roszczeniowości.',
        'Wysoka, lecz nierealistyczna samoocena jest skrajnie niestabilna i prowadzi do agresji przy pierwszej konfrontacji z krytyką.',
        'Należy dążyć nie do samooceny „wysokiej”, lecz do samooceny STABILNEJ I REALISTYCZNEJ.'
      ]
    },
    {
      id: 'sec-19-14',
      pageNumber: 40,
      sectionNumber: '19.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Samowspółczucie (Self-Compassion) vs Samoocena',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Czy samowspółczucie (Self-Compassion, Kristin Neff) z czasem całkowicie zastąpi pojęcie samooceny w psychologii klinicznej?',
        'Badania pokazują, że samowspółczucie daje wszystkie korzyści wysokiej samooceny bez jej wad (narcyzmu, rywalizacyjności i lęku przed porażką).'
      ]
    },
    {
      id: 'sec-19-15',
      pageNumber: 42,
      sectionNumber: '19.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Re-kalibracja Poczucia Skuteczności',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        '1. Wybierz wyzwanie i rozbij je na mikrokroki sprawcze.',
        '2. Prowadź codzienny Rejestr Dowodów Obiektywnych.',
        '3. Zamień samobiczowanie na pytania merytoryczne mentora.',
        '4. Ogranicz ekspozycję na cyfrowe punkty odniesienia.'
      ],
      exerciseRef: selfExercisesChapterNineteen[0]
    },
    {
      id: 'sec-19-16',
      pageNumber: 44,
      sectionNumber: '19.16',
      title: 'Warsztat Samorozwojowy: Zbiór Narzędzi Budowania Sprawczości',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poniżej znajduje się zestaw ćwiczeń dedykowanych dekonstrukcji Syndromu Oszusta, higienie cyfrowej i budowaniu stabilnego kompasu wartości.'
      ],
      exerciseRef: selfExercisesChapterNineteen[1]
    },
    {
      id: 'sec-19-17',
      pageNumber: 47,
      sectionNumber: '19.17',
      title: 'Most do Rozdziału 20 oraz Powiązania z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Samoocena i poczucie skuteczności decydują o tym, czy mamy odwagę realizować nasze priorytety życiowe.',
        'W następnym rozdziale przejdziemy do badania Wartości, Potrzeb i Priorytetów — kompasu, który wskazuje kierunek naszym wyborom w obliczu konfliktów i presji społecznej.'
      ]
    },
    {
      id: 'sec-19-18',
      pageNumber: 49,
      sectionNumber: '19.18',
      title: 'Podsumowanie Rozdziału 3: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        '1. Self-Efficacy buduje się na twardych dowodach z działania, a nie na samych afirmacjach.',
        '2. Syndrom Oszusta to zniekształcenie poznawcze ignorujące twarde fakty kompetencji.',
        '3. Porównywanie swojego wnętrza do cyfrowych fasad innych niszczy spokój.',
        '4. Najtrwalsza samoocena opiera się na wewnętrznym kompasie wartości.'
      ]
    },
    {
      id: 'sec-19-19',
      pageNumber: 52,
      sectionNumber: '19.19',
      title: 'Egzamin Końcowy Rozdziału 3: Samoocena i Obraz Siebie',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu architektury samooceny, poczucia skuteczności i radzenia sobie z zniekształceniami poznawczymi. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};

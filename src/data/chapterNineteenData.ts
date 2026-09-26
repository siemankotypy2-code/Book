import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

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
      title: 'Poczucie Skuteczności (Albert Bandura) — 4 Filar Sprawczości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Albert Bandura zidentyfikował cztery główne źródła budowania Poczucia Skuteczności (Self-Efficacy):',
        '1. Doświadczenia opanowania (Mastery Experiences) — najbardziej wpływy filar: osobiste przeżycie sukcesu wywalczonego pokonaniem przeszkód; 2. Doświadczenia zastępcze (Vicarious Experiences) — obserwowanie modela podobnego do nas, który osiąga cel; 3. Perswazja społeczna — merytoryczne wsparcie ze strony autorytetu; 4. Stan fizjologiczny i emocjonalny — interpretacja sygnałów z ciała (np. drżenie rąk jako mobilizacji, a nie paraliżu).',
        'Budowanie Self-Efficacy wymaga stwarzania sytuacji, w których człowiek dostarcza swojemu umysłowi dowodów sprawczości krok po kroku.'
      ]
    },
    {
      id: 'sec-19-5',
      pageNumber: 13,
      sectionNumber: '19.5',
      title: 'Porównania Społeczne (Leon Festinger): Porównania w Górę i w Dół',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Teoria Porównań Społecznych Festingera wskazuje, że ludzie mają wbudowany automat do oceniania swoich możliwości poprzez zestawianie się z innymi.',
        'Porównania w górę (Upward Comparison) z osobami osiagającymi lepsze wyniki mogą działać jako motywacja do rozwoju, lecz przy nierealistycznym punkcie odniesienia niszczą samoocenę.',
        'Porównania w dół (Downward Comparison) z osobami w gorszej sytuacji dają chwilową ulgę, lecz nie budują trwałej kompetencji.'
      ]
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
      readingTimeMinutes: 15,
      paragraphs: [
        'Lęk przed oceną (Evaluation Apprehension) opiera się na złudzeniu, że oczy wszystkich wokół są skierowane na nasze potknięcia (Spotlight Effect).',
        'Syndrom Oszusta sprawia, że nawet wybitne osiągnięcia (nagrody, awanse) są przypisywane przypatkowi lub ślepocie otoczenia. Człowiek żyje w ciągłym przerażeniu, że „zaraz wszyscy zobaczą, że nic nie umiem”.',
        'Terapia Syndromu Oszusta wymaga kategorycznego oddzielenia subiektywnego lęku od obiektywnych faktów i ocen merytorycznych.'
      ],
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
      readingTimeMinutes: 15,
      paragraphs: [
        'Zaburzenia kalibracji pewności siebie przybierają dwie skrajne formy.',
        'Efekt Dunninga-Krugera to ślepa pewność debiutanta na Szczycie Głupoty — brak wiedzy uniemożliwia dostrzeżenie własnych braków.',
        'Z drugiej strony wybitni eksperci często zaniżają swoje możliwości, zakładając, że skoro dla nich dane zadanie jest łatwe, to dla każdego innego również musi takie być.'
      ],
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
      title: 'Samoocena Niestabilna (Contingent) vs Samoocena Ugruntowana',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Samoocena niestabilna (Contingent Self-Esteem) stoi na zewnętrznych szczudłach: statusie, marży, polubieniach, komplimencach. Jeden zły dzień niszczy cały budynek.',
        'Samoocena ugruntowana opiera się na wewnętrznym kompasie etycznym, autentycznych relacjach i szacunku do własnej pracy.',
        'Człowiek o samoocenie ugruntowanej potrafi przetrwać bankructwo czy porażkę zawodową bez utraty godności i sensu życia.'
      ],
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

import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 26 (GLOBALNIE ROZDZIAŁ 42 W STRUKTURZE DZIEŁA)
 * TYTUŁ: AUTORYTET I POSŁUSZEŃSTWO
 * PODTYTUŁ: Dlaczego ludzie uznają niektóre osoby za uprawnione do kierowania nimi i kiedy podporządkowanie się autorytetowi staje się problemem
 */

export const chapterFortyTwoExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest kluczowa różnica funkcjonalna między autorytetem (auctoritas) a władzą wymuszoną (potestas)?',
    topic: 'Istota Autorytetu',
    sectionRef: 'Sekcja 42.1 & 42.2',
    options: [
      { label: 'A', text: 'Autorytet opiera się na dobrowolnym, wewnętrznym uznaniu przez podwładnego kompetencji, mądrości lub moralnego prawa lidera do kierowania, podczas gdy władza wymuszona wymaga stałego nadzoru i sankcji.', isCorrect: true },
      { label: 'B', text: 'Autorytet to wyłącznie formalny tytuł naukowy lub szarża wojskowa.', isCorrect: false },
      { label: 'C', text: 'Autorytet nie pozwala na zadawanie żadnych pytań.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy — oba pojęcia oznaczają bezwzględną przemoc psychiczną.', isCorrect: false }
    ],
    explanation: 'Władzę można narzucić siłą dekretu; autorytetu nie da się zadekretować — musi zostać przyznany przez tych, którzy decydują się za nim podążać.',
    keyTakeaway: 'Władza żąda posłuszeństwa zewnętrznego; autorytet rodzi wewnętrzny szacunek i zaufanie.'
  },
  {
    id: 2,
    question: 'Co według współczesnych reanaliz (Haslam, Reicher) najlepiej wyjaśnia zachowanie uczestników w eksperymencie Milgrama?',
    topic: 'Rewizja Badań Milgrama',
    sectionRef: 'Sekcja 42.10 & 42.11',
    options: [
      { label: 'A', text: 'Identyfikacja z misją naukową i zaufanie do autorytetu badacza jako reprezentanta dobra ogólnego (Engaged Followership), a nie ślepy, bezmyślny automatyzm robotów.', isCorrect: true },
      { label: 'B', text: 'Ukryty, sadystyczny popęd do mordowania obcych ludzi obecny w 65% populacji.', isCorrect: false },
      { label: 'C', text: 'Hipoalgezja i brak zdolności odczuwania empatii.', isCorrect: false },
      { label: 'D', text: 'Wypłacenie badanym milionowych nagród finansowych.', isCorrect: false }
    ],
    explanation: 'Badani słuchali eksperymentatora wtedy, gdy apelował do wagi nauki, a natychmiast odmawiali, gdy wydawał chłodny rozkaz wojskowy. Ulegli wierze, że służą szlachetnemu celowi.',
    keyTakeaway: 'Ludzie dopuszczają się najgorszych czynów nie z umiłowania zła, lecz w przekonaniu, że służą wyższej sprawie nakazanej przez autorytet.'
  },
  {
    id: 3,
    question: 'W jakich sytuacjach społecznych posłuszeństwo wobec autorytetu jest mechanizmem ADAPTACYJNYM i pożądanym?',
    topic: 'Funkcjonalność Autorytetu',
    sectionRef: 'Sekcja 42.17',
    options: [
      { label: 'A', text: 'W warunkach ostrych kryzysów czasowych, medycynie ratunkowej, lotnictwie i katastrofach, gdzie natychmiastowa koordynacja działań decyduje o ocaleniu życia.', isCorrect: true },
      { label: 'B', text: 'Nigdy — człowiek rozumny powinien w każdej sekundzie kontestować wszystkie polecenia lekarzy i pilotów.', isCorrect: false },
      { label: 'C', text: 'Tylko wtedy, gdy za posłuszeństwo dostajemy awans.', isCorrect: false },
      { label: 'D', text: 'Wyłącznie w sektach religijnych.', isCorrect: false }
    ],
    explanation: 'Autorytet to ewolucyjne narzędzie redukcji chaosu. Na sali operacyjnej nie ma czasu na referendum — zaufanie do chirurga ratuje pacjenta.',
    keyTakeaway: 'Autorytet kompetencyjny chroni życie; patologią staje się dopiero wtedy, gdy zakazuje pytań w chwilach spokoju.'
  },
  {
    id: 4,
    question: 'Co stanowi najpotężniejszą barierę psychologiczną chroniącą jednostkę przed destrukcyjnym posłuszeństwem?',
    topic: 'Ochrona Autonomii Wobec Autorytetu',
    sectionRef: 'Sekcja 42.24',
    options: [
      { label: 'A', text: 'Zasada zachowania indywidualnej odpowiedzialności moralnej, obecność choćby jednego dysydenta w grupie oraz odwaga do żądania transparentnych procedur.', isCorrect: true },
      { label: 'B', text: 'Ucieczka z kraju przed każdym trudnym wyborem.', isCorrect: false },
      { label: 'C', text: 'Agresja fizyczna wobec każdego przełożonego.', isCorrect: false },
      { label: 'D', text: 'Udawanie niepoczytalności.', isCorrect: false }
    ],
    explanation: 'Jak wykazał Asch i Milgram, obecność choćby jednego sojusznika prawdy redukuje destrukcyjne posłuszeństwo siedmiokrotnie, a świadomość osobistej winy uniemożliwia wejście w stan agentalny.',
    keyTakeaway: 'Autorytet traci swoją niszczycielską moc w chwili, gdy przypomnisz sobie, że to twoje ręce wykonują czyn.'
  }
];

export const chapterFortyTwoCaseStudies: CaseStudy[] = [
  {
    id: 'cs-42-1-katastrofa-lotnicza-crm',
    title: 'Studium Przypadku: Tragedia Lotu w Cieniu Kapitańskiego Autorytetu',
    context: 'Kokpit pasażerskiego samolotu odrzutowego. Kapitan Janusz (55 lat, legendarny pilot wojskowy, 18 000 godzin w powietrzu) i młody pierwszy oficer Bartek (28 lat, 600 godzin na tym typie maszyny).',
    characters: [
      { name: 'Kapitan Janusz', role: 'Dowódca statku powietrznego', personality: 'Apodyktyczny, nieomylny, przyzwyczajony do wojskowej dyscypliny, karci za każde pytanie.' },
      { name: 'Pierwszy Oficer Bartek', role: 'Drugi pilot', personality: 'Zdolny, perfekcyjny proceduralnie, sparaliżowany lękiem przed podważeniem autorytetu legendy lotnictwa.' }
    ],
    dilemma: 'Co dzieje się, gdy młody oficer widzi śmiertelny błąd kapitana, lecz bariera autorytetu paraliżuje jego zdolność do przejęcia sterów?',
    timeline: [
      { time: 'Godzina 14:10', event: 'Podejście do lądowania w gęstej mgle. Kapitan schodzi poniżej minimalnej wysokości zniżania (MDA) bez widoczności pasa.' },
      { time: 'Godzina 14:11', event: 'Bartek zauważa błąd wysokościomierza. Zamiast wydać komendę „Go-Around” (Odejście na drugi krąg), nieśmiało sugeruje: „Panie kapitanie, chyba jesteśmy trochę za nisko...”.' },
      { time: 'Godzina 14:11:30', event: 'Kapitan warczy: „Wiem, co robię, patrz na przyrządy, nie panikuj!”. Bartek milknie, wchodzi w stan agentalny i paraliż decyzyjny.' },
      { time: 'Godzina 14:12', event: 'System GPWS krzyczy: „TERRAIN! PULL UP!”. Bartek ma 4 sekundy na przejęcie sterów, ale blokada hierarchiczna odbiera mu władzę w rękach. Samolot ścina czubki drzew — tylko cud i natychmiastowe dodanie ciągu w ostatniej sekundzie ratuje maszynę przed uderzeniem w ziemię.' }
    ],
    psychologicalDynamics: {
      cognitiveBiases: [
        { biasName: 'Błąd Autorytetu (Authority Bias)', manifestation: 'Bartek podświadomie założył, że „legenda lotnictwa” nie może popełnić błędu pomiarowego.' },
        { biasName: 'Mitigowana Mowa (Mitigated Speech)', manifestation: 'Używanie zawoalowanych, miękkich sugestii („chyba jesteśmy nisko”) zamiast twardej komendy proceduralnej z lęku przed gniewem zwierzchnika.' }
      ],
      emotionalStates: [
        { trigger: 'Ostre warknięcie kapitana', emotion: 'Paraliżujący lęk przed upokorzeniem i odrzuceniem zawodowym.' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Adrenalina', roleInScenario: 'Eksplozja stresu wywołała reakcję zamrożenia (freezing) zamiast motorycznej akcji przejęcia wolantu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0-500 ms', process: 'Dźwięk alarmu GPWS zderza się z utrwalonym nawykiem uległości wobec kapitana.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Władza przymusu i tłumienie dissent’u', description: 'Uciszanie pytań załogi pod pozorem ochrony autorytetu dowódcy.', vulnerabilityExploited: 'Młody wiek i brak pewności siebie drugiego pilota.' }
      ],
      counterMeasures: [
        { step: 'Procedura CRM (Crew Resource Management)', script: '„Kapitanie, łamiemy procedurę, przejmuję stery: I HAVE CONTROLS, GO-AROUND!”.', rationale: 'Proceduralny obowiązek przełamania autorytetu w imię życia pasażerów.' }
      ]
    },
    keyTakeaway: 'Ślepe posłuszeństwo autorytetowi w kokpicie, na sali operacyjnej czy w zarządzie banku jest najczęstszą przyczyną katastrof, w których wszyscy wiedzieli o błędzie, ale nikt nie odważył się krzyknąć.'
  }
];

export const chapterFortyTwoExercises: SelfExercise[] = [
  {
    id: 'ex-42-test-odmowy-autorytetowi',
    title: 'Trening Autonomii Etycznej: Gdzie Leży Twoja Granica Posłuszeństwa?',
    subtitle: 'Narzędzie przygotowania psychologicznego do konfrontacji z nieetycznym poleceniem autorytetu',
    objective: 'Zbudowanie gotowych skryptów werbalnych i somatycznej odporności na wejście w stan pośredniczący.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Wstępne przetrenowanie reakcji asertywnej (Implementation Intentions — Gollwitzer) obniża latencję decyzyjną kory przedczołowej pod presją stresu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Lokalizacja Własnej Granicy Czerwonej',
        instruction: 'Wskaż jedno polecenie w twojej pracy zawodowej lub życiu osobistym, którego NIGDY nie wykonasz, bez względu na to, kto wyda rozkaz (np. sfałszowanie podpisu, kłamstwo wobec klienta, mobbing kolegi).',
        promptText: 'Jaki czyn jest dla ciebie absolutnie nieprzekraczalną granicą etyczną?',
        placeholder: 'Np. Nigdy nie podpiszę dokumentu poświadczającego nieprawdę ani nie wezmę udziału w poniżaniu współpracownika...'
      },
      {
        stepNumber: 2,
        title: 'Projekt Skryptu Odmowy',
        instruction: 'Zbuduj precyzyjne, spokojne zdanie odmawiające wykonania takiego polecenia z zachowaniem szacunku do osoby przełożonego, lecz bez cienia wahania co do czynu.',
        promptText: 'Jak brzmi twoje zdanie odmowy?',
        placeholder: 'Np. „Panie Dyrektorze, bardzo szanuję pańskie przywództwo, ale tego dokumentu nie podpiszę, ponieważ jest niezgodny z faktami i moim sumieniem”.'
      }
    ],
    reflectionQuestions: [
      'Jakie lęki budzą się w tobie, gdy wyobrażasz sobie wypowiedzenie tego zdania swojemu szefowi?',
      'Kiedy ostatnio uległeś autorytetowi, mimo że w głębi serca wiedziałeś, że podejmuje złą decyzję?'
    ]
  }
];

export const chapterFortyTwo: Chapter = {
  number: 42,
  volume: 3,
  volumeChapterNumber: 26,
  title: 'Autorytet i Posłuszeństwo',
  subtitle: 'Dlaczego ludzie uznają niektóre osoby za uprawnione do kierowania nimi i kiedy podporządkowanie się autorytetowi staje się problemem',
  leadParagraph: `Autorytet jest jedną z najbardziej fascynujących i niebezpiecznych sił w dziejach cywilizacji. Potrafi skoordynować wysiłek tysięcy ludzi w budowie szpitali, lotów w kosmos i ratowaniu życia po katastrofach. Jednak ten sam autorytet, wyzuty z kontroli moralnej i krytycznego myślenia podwładnych, potrafi zamienić przyzwoitych, wykształconych obywateli w bezwolne tryby machin zbrodni. Ten rozdział prowadzi przez meandry psychologii posłuszeństwa: od prawomocnego zaufania, przez wstrząsające laboratoria Milgrama, aż po sztukę zachowania suwerenności sumienia.`,
  totalEstimatedPages: 66,
  sections: [
    // 42.1
    {
      id: 'sec-42-1',
      pageNumber: 1,
      sectionNumber: '42.1',
      title: 'Podstawy autorytetu: Auctoritas kontra Potestas — Geneza społecznego uznania prawa do wpływu',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Cum potestas in populo, auctoritas in senatu sit — Podczas gdy władza spoczywa w ludzie, autorytet przynależy senatowi. Potestas to siła wymuszenia prawnego; auctoritas to moralny ciężar gatunkowy mądrości, który sprawia, że słuchasz rady bez potrzeby stosowania bata.',
        author: 'Cyceron',
        source: 'Starożytny Rzym, „De Legibus”, 52 p.n.e.'
      },
      paragraphs: [
        'Starożytni Rzymianie, z ich genialną intuicją prawną i ustrojową, wprowadzili fundamentalne rozróżnienie, które do dziś stanowi kamień węgielny filozofii politycznej:',
        'POTESTAS (Władza formalna / Wymuszenie): Uprawnienie do rozkazywania wynikające ze stanowiska urzędowego (konsul, pretor, prezes). Może być puste moralnie, poparte wyłącznie mieczem legionisty lub paragrafem kodeksu.',
        'AUCTORITAS (Autorytet / Ranga moralna): Prestiż, zaufanie, mądrość, spójność życiowa i powaga rady. Kiedy rzymski senator zabierał głos, nikt nie groził śmiercią za brak posłuchu — ludzie słuchali go, bo wierzyli w jego mądrość i oddanie ojczyźnie.',
        'Dramat współczesnego przywództwa polega na tym, że wielu liderów myli potestas z auctoritas. Sądzą, że powołanie na stanowisko dyrektora automatycznie czyni z nich autorytet. Nic bardziej błędnego: potestas można dostać z nadania w pięć minut; auctoritas buduje się latami prawości, wiedzy i lojalności wobec prawdy.'
      ],
      subsections: [
        {
          id: 'sub-42-1-1',
          title: 'Analiza słów Cycerona: Ciężar Moralny a Przemoc Instytucjonalna',
          content: [
            'Wypowiedź Cycerona ujawnia osiowy warunek trwałego ładu społecznego. Kiedy instytucje tracą auctoritas (moralną powagę i wiarygodność), muszą coraz bardziej eskalować potestas (kamery, kary, policję, inwigilację), by utrzymać posłuch stada.',
            'Autorytet jest najtańszą i najszlachetniejszą formą koordynacji społecznej: ludzie słuchają lekarza, profesora czy mądrego rodzica dobrowolnie, z radością czerpiąc z ich wiedzy. Władza bez autorytetu jest jedynie zorganizowaną formą strachu.'
          ],
          highlightBox: {
            title: 'Kluczowe Odróżnienie: Autorytet a Dominacja',
            content: 'Tyran wymaga posłuszeństwa, by karmić swoje ego i władzę. Prawdziwy autorytet używa swojego wpływu, by rozwijać samodzielność tych, którzy go słuchają, dążąc do momentu, w którym uczeń przewyższy mistrza.',
            type: 'insight'
          }
        }
      ]
    },

    // 42.2
    {
      id: 'sec-42-2',
      pageNumber: 4,
      sectionNumber: '42.2',
      title: 'Źródła autorytetu: Kompetencja, doświadczenie życiowe, zaufanie moralne i spójność w kryzysie',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z czego rodzi się autentyczny autorytet w oczach drugiego człowieka? Psychologia społeczna wyróżnia cztery kluczowe filary:',
        '1. KOMPETENCJA TWARDA (Expertise): Niepodważalna wiedza, kunszt rzemieślniczy, precyzja działania. Podziwiamy chirurga, który potrafi przeprowadzić 12-godzinną operację mózgu, bo wiemy, ile lat tytanicznej pracy kosztowało go osiągnięcie tego mistrzostwa.',
        '2. PRÓBA OGNIA (Battle-Tested Experience): Doświadczenie w realnych kryzysach. Młodzi żołnierze nie ufają teoretykowi ze sztabu; ufają sierżantowi, który wyprowadził pluton z zasadzki.',
        '3. PRAWOŚĆ I BRAK HIPOKRYZJI (Integrity): Spójność między głoszonymi wartościami a codziennym życiem. Jeśli nauczyciel mówi o szacunku, a publicznie szydzi ze słabszych uczniów — jego autorytet umiera w milisekundę.',
        '4. ZDOLNOŚĆ DO OCHRONY OTOCZENIA: Autorytet staje się liderem, gdy w chwilach zagrożenia nie zasłania się podwładnymi, lecz bierze odpowiedzialność na własną klatkę piersiową.'
      ]
    },

    // 42.3
    {
      id: 'sec-42-3',
      pageNumber: 7,
      sectionNumber: '42.3',
      title: 'Autorytet formalny i nieformalny: Rola symboli statusu, tytułów i rytuałów instytucjonalnych',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Ludzki mózg jest istotą rytualną. Ewolucja nauczyła nas błyskawicznego rozpoznawania symboli władzy i wiedzy w ułamku sekundy:',
        'SYMBOLE FORMALNE: Biały fartuch lekarski, toga sędziowska, mundur z pagonami, stetoskop na szyi, pieczęć lakowa, gabinet z mahoniowym biurkiem na 40. piętrze wieżowca.',
        'W słynnych eksperymentach Roberta Cialdiniego udowodniono, że kierowcy na skrzyżowaniu trąbią trzykrotnie rzadziej na luksusową limuzynę, która nie rusza na zielonym świetle, niż na stary, zardzewiały samochód. Sam atrybut bogactwa i prestiżu paraliżuje agresję otoczenia.',
        'Problem polega na tym, że symbole można łatwo sfałszować. Oszuści matrymonialni, fałszywi lekarze i sekciarscy guru posługują się wyłącznie teatralną scenografią autorytetu, by wyłączyć krytyczne myślenie swoich ofiar.'
      ]
    },

    // 42.4
    {
      id: 'sec-42-4',
      pageNumber: 10,
      sectionNumber: '42.4',
      title: 'Historia: „Nauczyciel i klasa” — Jak próba wymuszenia posłuchu krzykiem niszczy autorytet pedagoga',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Piotr (25 lat) rozpoczął pracę jako nauczyciel historii w renomowanym liceum. Chciał natychmiast pokazać „kto tu rządzi”. Wszedł do klasy z groźną miną, uderzył dziennikiem o biurko i zapowiedział: „U mnie nie ma żartów! Za każde odezwanie się bez pytania stawiam jedynkę i wzywam rodziców!”.',
        'Klasa natychmiast wyczuła jego paniczny lęk przed utratą kontroli. Zamiast spokoju, rozpoczęła się cicha partyzantka: upuszczanie długopisów, synchroniczne chrząkanie, złośliwe pytania o błahe daty. Piotr zaczął krzyczeć, pisały mu się ręce, stawiał jedynki całej klasie. Po dwóch miesiącach był na skraju załamania nerwowego, a uczniowie traktowali go jak pośmiewisko.',
        'Do tej samej klasy przyszedł pan Marek — 60-letni polonista. Wszedł w znoszonym swetrze, usiadł na brzegu biurka, uśmiechnął się i zaczął czytać fragment Trenów Kochanowskiego z tak obezwładniającą pasją, bólem i głębią, że w 30-osobowej sali zapadła cisza jak w kościele. Przez 45 minut nikt nie spojrzał w telefon.',
        'Piotr próbował wymusić posłuszeństwo krzykiem (potestas); pan Marek emanował hipnotyczną siłą autorytetu merytorycznego i ludzkiego (auctoritas).'
      ]
    },

    // 42.5
    {
      id: 'sec-42-5',
      pageNumber: 13,
      sectionNumber: '42.5',
      title: 'Kompetencja jako fundament autorytetu: Dlaczego wiedza bez życzliwości rodzi bunt, a życzliwość bez wiedzy litość',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'W psychologii percepcji społecznej (Model Fiske, Cuddy, Glick) ocena każdego człowieka opiera się na dwóch wymiarach: CIEPŁO (Warmth / Dobre intencje) oraz KOMPETENCJA (Competence / Zdolność do działania):',
        '- WYSOKA KOMPETENCJA + NISKIE CIEPŁO: Wzbudza u podwładnych podziw zmieszany z zazdrością i lękiem. Ludzie słuchają takiego eksperta, ale czekają na jego potknięcie, by zrzucić go z piedestału.',
        '- WYSOKIE CIEPŁO + NISKA KOMPETENCJA: Wzbudza sympatię i litość. Nikt nie traktuje takiego lidera poważnie w chwilach prawdziwego sztormu.',
        '- WYSOKA KOMPETENCJA + WYSOKIE CIEPŁO: To jedyny grunt, na którym rodzi się niezniszczalny autorytet. Uczniowie wiedzą, że mistrz wymaga twardo, bo zależy mu na ich rozwoju.'
      ]
    },

    // 42.6
    {
      id: 'sec-42-6',
      pageNumber: 16,
      sectionNumber: '42.6',
      title: 'Autorytet bez zaufania: Kruchość struktur opartych na strachu i syndrom upadku tyrana',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Struktura oparta wyłącznie na strachu jest skrajnie kosztowna metabolicznie. Wymaga nieustannego nadzoru: jeśli szef musi osobiście sprawdzać każdego maila, a dyktator musi trzymać cenzorów na każdym rogu ulicy, organizacja marnuje 80% energii na kontrolę zamiast na twórczość.',
        'W chwili gdy w systemie pojawia się anomalia — kryzys finansowy, choroba wodza, wojna — rzekomy autorytet oparty na strachu rozpada się w ciągu kilku godzin. Ludzie, którzy wczoraj bili brawo i kłaniali się w pas, stają się pierwszymi, którzy obalają pomniki.'
      ]
    },

    // 42.7
    {
      id: 'sec-42-7',
      pageNumber: 19,
      sectionNumber: '42.7',
      title: 'Reputacja a autorytet: Efekt aureoli (Halo Effect) i społeczny transfer wiarygodności',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zaufanie do autorytetu podlega prawom EFEKTU AUREOLI (Halo Effect): jeśli ktoś jest wybitnym fizykiem jądrowym (jak Albert Einstein), opinia publiczna zaczyna bezkrytycznie przypisywać mu autorytet w dziedzinie teologii, etyki małżeńskiej, diety czy ekonomii.',
        'Ten transfer autorytetu jest potężnym błędem poznawczym. Geniusz w jednej wąskiej dziedzinie nie chroni przed skrajną naiwnością w innych obszarach życia. Dojrzały człowiek musi umieć oddzielić autorytet dziedzinowy od uniwersalnej nieomylności.'
      ]
    },

    // 42.8
    {
      id: 'sec-42-8',
      pageNumber: 22,
      sectionNumber: '42.8',
      title: 'Gdy autorytet popełnia błąd: Efekt potknięcia (Pratfall Effect) Elliota Aronsona i odwaga do przeprosin',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Co dzieje się z autorytetem, gdy ten popełnia jawny błąd? Większość niepewnych siebie liderów panicznie ukrywa pomyłki, brnąc w kłamstwo ze strachu przed utratą prestiżu.',
        'Badania Elliota Aronsona nad EFEKTEM POTKNIĘCIA (Pratfall Effect) ujawniły zaskakującą prawdę: kiedy wybitny, powszechnie szanowany ekspert popełnia drobną gafę (np. oblewa się kawą na wizji) lub otwarcie przyznaje: „W tej kwestii pomyliłem się, zrewidowałem stanowisko” — JEGO SYMPATIA I AUTORYTET W OCZACH LUDZI ROSNĄ!',
        'Dlaczego? Ponieważ nieomylność jest nieludzka i budzi chłód. Pomyłka w połączeniu z wielką kompetencją czyni mistrza człowiekiem z krwi i kości, z którym można się utożsamić.'
      ]
    },

    // 42.9
    {
      id: 'sec-42-9',
      pageNumber: 25,
      sectionNumber: '42.9',
      title: 'Anatomia posłuszeństwa: Od dobrowolnej współpracy, przez konformizm, aż po stan agentalny',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Posłuszeństwo nie jest jednolitym zjawiskiem. Przebiega wzdłuż kontinuum motywacyjnego:',
        '1. WSPÓŁPRACA PARTNERSKA: Słucham cię, bo rozumiem i popieram wspólny cel.',
        '2. PODPORZĄDKOWANIE PROCEDURALNE: Wykonuję polecenie dla ładu organizacyjnego, zachowując prywatne zdanie.',
        '3. ULEGŁOŚĆ ZE STRACHU: Słucham cię, bo paraliżuje mnie lęk przed karą.',
        '4. POSŁUSZEŃSTWO AGENTALNE (Agentic Obedience): Stan krańcowy. Moje sumienie zostaje wyłączone i przekazane zwierzchnikowi. Czuję się jedynie biologicznym kablem przekazującym impuls z góry.'
      ]
    },

    // 42.10
    {
      id: 'sec-42-10',
      pageNumber: 28,
      sectionNumber: '42.10',
      title: 'Eksperyment Stanleya Milgrama (Yale 1961–1963): Procedura, wstrząsające dane i prekursorzy posłuszeństwa',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'W lipcu 1961 roku, trzy miesiące po rozpoczęciu procesu Adolfa Eichmanna w Jerozolimie, 27-letni psycholog Stanley Milgram w piwnicach Linsly-Chittenden Hall na Uniwersytecie Yale rozpoczął badanie, które na zawsze zmieniło obraz ludzkiej natury.',
        'Przypomnijmy twarde fakty metodologiczne:',
        '- Uczestnicy: 40 mężczyzn w wieku 20–50 lat, przekrój społeczny (od robotników po inżynierów).',
        '- Zadanie: Aplikowanie wstrząsów elektrycznych „Uczniowi” (aktorowi) za błędy w nauce par słów.',
        '- Generator: 30 przełączników od 15 V do 450 V z oznaczeniami od „Lekki wstrząs” po „XXX”.',
        '- Wyniki przewidywane przez 40 psychiatrów: Mniej niż 1% (skrajni sadyści dojdą do końca).',
        '- Rzeczywisty wynik: AŻ 65% UCZESTNIKÓW (26 na 40) ZAAPLIKOWAŁO MAKSYMALNY WSTRZĄS 450 V, trzykrotnie powtarzając dawkę, mimo że zza ściany dobiegały krzyki agonii, skargi na chore serce, a powyżej 330 V zapadła martwa cisza!'
      ]
    },

    // 42.11
    {
      id: 'sec-42-11',
      pageNumber: 31,
      sectionNumber: '42.11',
      title: 'Nowe odczytanie Milgrama: Prace Haslama i Reichera — Model Zaangażowanego Zwolennika (Engaged Followership)',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Ludzie w badaniach Milgrama nie byli bezmyślnymi zombie w transie agentalnym. Byli głęboko zaangażowanymi moralnie jednostkami, które zdecydowały się zaufać autorytetowi nauki i poświęcić doraźny ból ucznia w imię wyższego dobra postępu wiedzy.',
        author: 'Prof. S. Alexander Haslam & Prof. Stephen D. Reicher',
        source: 'University of Queensland & St Andrews, „Contesting the Nature of Conformity: What Milgram and Zimbardo Really Show”, PLOS Biology, 2012'
      },
      paragraphs: [
        'Współczesna psychologia społeczna odrzuciła naiwną tezę, że badani Milgrama zamienili się w bezwolne maszyny. Analiza taśm audio z archiwum Yale ujawniła kluczowy fakt:',
        'Kiedy eksperymentator używał czwartego ponaglenia (Czystego rozkazu wojskowego: „Nie ma pan innego wyboru, musi pan kontynuować”) — 100% BADANYCH ODMAWIAŁO DALSZEJ WSPÓŁPRACY! Rozkaz budził reaktancję i bunt.',
        'Badani ulegali tylko wtedy, gdy badacz apelował do wartości: „Eksperyment wymaga, byśmy to dokończyli dla dobra nauki”. Oznacza to, że najgroźniejsze posłuszeństwo rodzi się nie ze strachu przed batem, lecz z IDEALIZMU: ze ślepej wiary, że ten wspaniały autorytet prowadzi nas ku wyższemu dobru.'
      ]
    },

    // 42.12
    {
      id: 'sec-42-12',
      pageNumber: 34,
      sectionNumber: '42.12',
      title: 'Ograniczenia metodologiczne i etyczne eksperymentu Milgrama: Dylemat traumy badanych i trafność ekologiczna',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Rzetelność naukowa wymaga omówienia cieni badania Milgrama:',
        '- TRAUMA BADANYCH: Uczestnicy wychodzili z laboratorium we łzach, z drżeniem mięśni, przekonani, że zabili człowieka. Współczesne komisje bioetyczne (IRB) nigdy nie dopuściłyby do powtórzenia takiego paradygmatu.',
        '- TRAFNOŚĆ EKOLOGICZNA: Sztuczne laboratorium Yale z prestiżowym naukowcem w fartuchu nie odzwierciedla w pełni realiów wieloletnich systemów totalitarnych, gdzie posłuszeństwo buduje się latami indoktrynacji i propagandy.',
        'Mimo tych ograniczeń, replikacje badania przeprowadzone przez Jerry’ego Burgera w 2009 roku w USA oraz Tomasza Grzyba i Dariusza Dolińskiego w 2017 roku w Polsce (do progu 150 V) dały niemal identyczny odsetek uległości (ok. 90% badanych szło dalej po pierwszym krzyku ucznia)!'
      ]
    },

    // 42.13
    {
      id: 'sec-42-13',
      pageNumber: 37,
      sectionNumber: '42.13',
      title: 'Historia: „Polecenie, które przekracza granicę” — Dylemat młodego audytora w banku inwestycyjnym',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Kamil (26 lat) był młodszym analitykiem ryzyka w międzynarodowym banku. W trakcie corocznego audytu portfela kredytów deweloperskich odkrył lukę na 150 milionów złotych — zabezpieczenia pod kredyty były trzykrotnie przeszacowane.',
        'Gdy przyniósł raport do dyrektora departamentu — legendarnego finansisty, którego portrety wisiały w branżowych pismach — ten zamknął drzwi gabinetu i powiedział cichym, pewnym głosem: „Kamil, świetna robota analityczna. Ale ten raport w obecnej formie zniszczy kurs akcji banku. Zmień wskaźnik dyskonta z 8% na 3,5%. Wtedy wyjdziemy na zero. Zrób to dziś do 18:00. Biorę za to pełną odpowiedzialność, a twój awans na starszego menedżera leży już podpisany na moim biurku”.',
        'Kamil poczuł suchość w ustach. Autorytet człowieka, którego podziwiał od czasów studiów, zażądał od niego przestępstwa fałszowania dokumentacji giełdowej.'
      ],
      interactiveWindowRef: {
        id: 'win-42-13-kiedy-powiedzialbys-nie',
        title: 'MODUŁ C: Kiedy Powiedziałbyś NIE?',
        subtitle: 'Interaktywny dylemat moralny w cieniu potężnego autorytetu finansowego',
        context: 'Decyzja Kamila: uległość w zamian za karierę czy odmowa z ryzykiem wilczego biletu.',
        type: 'what_if',
        takeaway: 'Obietnica przełożonego: „Biorę za to pełną odpowiedzialność”, jest prawną fikcją — przed prokuratorem zawsze stoisz z własnym podpisem.',
        whatIfOptions: {
          defaultScenario: 'Kamil zmienia wskaźnik dyskonta, podpisuje bilans i dostaje awans. Dwa lata później bank upada, a Kamil otrzymuje wyrok w zawieszeniu i dożywotni zakaz pracy w finansach.',
          options: [
            {
              id: 'opt-42-13-1',
              changeLabel: 'Kamil odmawia wprost i zgłasza sprawę do rzecznika ds. etyki (Whistleblowing)',
              resultingInterpretation: 'Dyrektor jest wściekły, ale komisja etyki zabezpiecza logi systemu i wszczyna wewnętrzne śledztwo.',
              resultingBehavior: 'Kamil traci sympatię dyrektora, ale ratuje wolność i czyste sumienie.',
              psychologicalImpact: 'Ocalenie integralności moralnej kosztem doraźnego komfortu.'
            },
            {
              id: 'opt-42-13-2',
              changeLabel: 'Kamil żąda pisemnego polecenia służbowego z podpisem dyrektora',
              resultingInterpretation: 'Dyrektor orientuje się, że Kamil nie da się wciągnąć w pułapkę pośredniczącą.',
              resultingBehavior: 'Dyrektor wycofuje żądanie i sam podpisuje dokument na własne ryzyko.',
              psychologicalImpact: 'Rozbicie iluzji anonimowości i zrzucenia winy.'
            }
          ]
        }
      }
    },

    // 42.14
    {
      id: 'sec-42-14',
      pageNumber: 40,
      sectionNumber: '42.14',
      title: 'Mechanizm gradacji uległości: Technika stopy w drzwiach i przesuwanie granic etycznych o milimetr',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Nikt nie zaczyna posłuszeństwa od zbrodni. U Milgrama wstrząs nie zaczynał się od 450 V — zaczynał się od niewinnych 15 V, które łaskotały w palce. Kolejny krok to było 30 V, potem 45 V.',
        'W tym tkwi piekielny geniusz techniki STOPY W DRZWIACH (Foot-in-the-Door): na każdym etapie różnica wynosi zaledwie 15 V. Gdyby badany zbuntował się przy 150 V, musiałby skonfrontować się z bolesnym dysonansem poznawczym: „Dlaczego 150 V jest złe, skoro przy 135 V posłusznie wcisnąłem przycisk?”.',
        'Zło systemowe posuwa się naprzód metodą małych kroków: najpierw przymykasz oko na drobne kłamstwo, potem na fałszowanie faktury, a po pięciu latach bierzesz udział w wielomilionowym przekręcie, nie wiedząc, kiedy przekroczyłeś granicę.'
      ]
    },

    // 42.15
    {
      id: 'sec-42-15',
      pageNumber: 43,
      sectionNumber: '42.15',
      title: 'Rozproszenie odpowiedzialności w strukturach pionowych: „Ja tylko wykonywałem polecenia”',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Największym alibi psychologicznym w historii ludzkości jest formuła z Norymbergi: Befehl ist Befehl — Rozkaz to rozkaz.',
        'W strukturze hierarchicznej odpowiedzialność ulega paraliżującemu rozproszeniu: 1) Szef uważa, że to wykonawca nacisnął guzik, 2) Wykonawca uważa, że to szef podjął decyzję, 3) Prawnik uważa, że tylko opiniował procedurę.',
        'W efekcie powstaje zbrodnia bez winnych: ogromna machina krzywdzi ludzi, a każdy jej pojedynczy element ma poczucie absolutnej moralnej czystości i niewinności.'
      ]
    },

    // 42.16
    {
      id: 'sec-42-16',
      pageNumber: 46,
      sectionNumber: '42.16',
      title: 'Historia wieloetapowa: „Coraz dalej” — Od drobnej przysługi biurowej do współudziału w przestępstwie gospodarczym',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Prześledźmy 18 miesięcy kariery Marty — głównej księgowej w spółce medycznej:',
        'ETAP 1 (Miesiąc 2): Prezes prosi o zaksięgowanie prywatnego obiadu z żoną jako „kolacji biznesowej z inwestorem”. Marta waha się, ale podpisuje: „Przecież to tylko 300 zł, prezes tyle dla nas robi”.',
        'ETAP 2 (Miesiąc 6): Prezes prosi o przesunięcie płatności VAT na kolejny kwartał za pomocą fikcyjnej faktury korygującej. Marta protestuje, ale prezes mówi: „Martusiu, to tylko na dwa tygodnie, uratujemy pensje dla pielęgniarek”. Marta podpisuje.',
        'ETAP 3 (Miesiąc 12): Marta odkrywa, że prezes wyprowadza setki tysięcy złotych na cypryjską spółkę swojej córki za fikcyjne doradztwo. Kiedy płacze w gabinecie, prezes kładzie jej rękę na ramieniu: „Marto, jesteś w tym ze mną od początku. Jeśli wejdzie tu skarbówka, tamte faktury z zeszłego roku obciążają bezpośrednio ciebie. Nie masz odwrotu”.',
        'Marta weszła do więzienia nie przez chciwość, lecz przez niemożność powiedzenia „nie” przy pierwszej kolacji za 300 zł.'
      ]
    },

    // 42.17
    {
      id: 'sec-42-17',
      pageNumber: 49,
      sectionNumber: '42.17',
      title: 'Kiedy autorytet pomaga? Rola zaufania w medycynie, ratownictwie, lotnictwie i kryzysach militarnych',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Byłoby katastrofalnym błędem uznać, że każde posłuszeństwo jest złem. Autorytet jest jednym z najwspanialszych wynalazków ewolucyjnych gatunku ludzkiego:',
        'Wyobraźmy sobie pożar wieżowca: jeśli strażacy na klatce schodowej zaczną dyskutować i głosować nad każdym krokiem, wszyscy lokatorzy spłoną. Dowódca akcji ratowniczej musi posiadać bezwzględny, natychmiastowy posłuch.',
        'Zaufanie do autorytetu chirurga na sali operacyjnej, pilota w turbulencjach czy mistrza w warsztacie pozwala zaoszczędzić czas, zredukować panikę i ocalić ludzkie życie. Prawdziwa mądrość polega nie na odrzuceniu autorytetu, lecz na czujnym monitorowaniu jego granic.'
      ]
    },

    // 42.18
    {
      id: 'sec-42-18',
      pageNumber: 52,
      sectionNumber: '42.18',
      title: 'Kiedy autorytet staje się toksyczny? Pięć czerwonych flag sekciarstwa, autorytaryzmu i ślepego kultu',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Kiedy zdrowy autorytet zamienia się w niszczycielski kult? Rozpoznaj PIĘĆ CZERWONYCH FLAG:',
        'FLAGA 1: KARANIE ZA PYTANIA. W zdrowej wspólnocie pytania są mile widziane; w kulcie autorytetu jakiekolwiek wątpliwości są traktowane jak zdrada lub brak wiary.',
        'FLAGA 2: MONOPOL NA PRAWDĘ. Lider twierdzi, że wszyscy na zewnątrz kłamią, a jedyne zbawienie znajduje się wewnątrz jego grupy.',
        'FLAGA 3: WYMAGANIE ZŁAMANIA ZASAD ETYCZNYCH. Autorytet żąda, byś dla „wyższego dobra sprawy” okłamał rodzinę, złamał prawo lub poniżył innego człowieka.',
        'FLAGA 4: OSOBISTA NIEOMYLNOŚĆ. Lider nigdy nie przeprasza, a za każdą porażkę wini zdrajców wewnątrz zespołu.',
        'FLAGA 5: SYSTEMATYCZNE ODCIĘCIE OD ŚWIATA ZEWNĘTRZNEGO. Podważanie więzi rodzinnych i przyjacielskich, by ofiara nie miała dokąd uciec.'
      ]
    },

    // 42.19
    {
      id: 'sec-42-19',
      pageNumber: 55,
      sectionNumber: '42.19',
      title: 'Współczesne badania nad sprzeciwem: Eksperyment Bocchiaro nad sygnalistami (Whistleblowing in the Lab)',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Co dzieje się, gdy badani mają szansę zbuntować się przeciwko nieetycznemu badaczowi? Odpowiedź przyniosły badania Bocchiaro, Zimbardo i van Lange (Amsterdam 2012):',
        'Uczestnicy otrzymali polecenie napisania entuzjastycznego listu zachęcającego innych studentów do wzięcia udziału w skrajnie niebezpiecznym badaniu deprywacji sensorycznej. Mieli trzy opcje: 1) Podporządkować się, 2) Odmówić, 3) Zgłosić nieetyczne badanie do komisji bioetycznej (Whistleblowing) w osobnym pokoju.',
        'Przed badaniem studenci deklarowali: „Tylko 3% posłucha, 64% zgłosi sprawę do komisji bioetyki”.',
        'RZECZYWISTOŚĆ W LABORATORIUM: Aż 76,5% badanych posłusznie napisało kłamliwy list, 14% odmówiło, a zaledwie 9,4% odważyło się złożyć doniesienie do komisji! Jak widać, gap między moralną deklaracją („Ja na pewno bym się sprzeciwił”) a realnym czynem w obecności autorytetu jest porażający.'
      ]
    },

    // 42.20
    {
      id: 'sec-42-20',
      pageNumber: 58,
      sectionNumber: '42.20',
      title: 'Kontrprzypadek I: Potężny autorytet moralny — i całkowity brak posłuchu w tłumie (Los proroka)',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Klasycznym kontrprzypadkiem jest los myślicieli, naukowców i proroków, którzy głosili prawdę w czasach powszechnego szaleństwa (np. Janusz Korczak, Aleksander Sołżenicyn, Ignaz Semmelweis wzywający lekarzy do mycia rąk przed porodami).',
        'Posiadali oni najwyższy możliwy autorytet moralny i wiedzę empiryczną, a mimo to tłum i środowisko medyczne odrzucały ich z nienawiścią. Autorytet nie działa w próżni: jeśli stado jest zjednoczone w fałszu i lęku, nawet najświętszy autorytet zostanie ukrzyżowany lub uznany za wariata.'
      ]
    },

    // 42.21
    {
      id: 'sec-42-21',
      pageNumber: 60,
      sectionNumber: '42.21',
      title: 'Kontrprzypadek II: Formalna władza munduru — która traci posłuch w ułamku sekundy',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z drugiej strony historia obfituje w momenty nagłego paraliżu władzy formalnej. W chwilach przełomów rewolucyjnych oficer wydaje rozkaz strzelania do tłumu — a żołnierze opuszczają lufy karabinów.',
        'W tym jednym ułamku sekundy potestas wyparowuje. Wystarczy, że zniknie lęk i pojawi się zbiorowa solidarność podwładnych, by najpotężniejszy aparat ucisku zamienił się w bezradnych ludzi w śmiesznych czapkach.'
      ]
    },

    // 42.22
    {
      id: 'sec-42-22',
      pageNumber: 62,
      sectionNumber: '42.22',
      title: 'Historia: „Kiedy grupa przestaje słuchać” — Pęknięcie pancerza dyrektora i upadek mitu nieomylności',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Przez 10 lat dyrektor Ryszard rządził szpitalem powiatowym za pomocą terroru psychicznego i aury „jedynego człowieka z kontaktami w ministerstwie”. Każdy ordynator bał się wejść do jego gabinetu.',
        'Aż nadszedł dzień, w którym na odprawie lekarskiej Ryszard zaczął publicznie ubliżać młodej anestezjolog, obwiniając ją o brak obsady na dyżurach. W sali panowała zwykła, grobowa cisza.',
        'Nagle wstał najstarszy chirurg, prof. Tadeusz. Poprawił okulary, spojrzał dyrektorowi prosto w oczy i powiedział niezwykle cichym, spokojnym tonem: „Ryszardzie, krzyczysz, bo brakuje ci argumentów i pieniędzy na pensje. Obrażasz kobietę, która pracowała przez 36 godzin bez przerwy. Nie pozwolimy ci na to dłużej. Przeproś panią doktor, albo od jutra operujemy tylko ostre przypadki”.',
        'Ryszard zbladł, zająknął się i wybiegł z sali. Czar prysł. Wystarczył jeden spokojny głos sprawiedliwego człowieka, by obalić dekadę tyranii.'
      ]
    },

    // 42.23
    {
      id: 'sec-42-23',
      pageNumber: 64,
      sectionNumber: '42.23',
      title: 'Człowiek pod mikroskopem: Sekwencja uległości — Oczekiwanie, rozkaz, interpretacja i decyzja o sprzeciwie',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Rozłóżmy pod mikroskopem pełną dynamikę konfrontacji jednostki z presją autorytetu:',
        'POLECENIE AUTORYTETU → OCENA ZGODNOŚCI Z PRAWEM I SUMIENIEM → WEWNĘTRZNY ROZDŹWIĘK (Dysonans) → PONAGLENIE ZE STRONY HIERARCHII → BILANS KOSZTÓW ODPOWIEDZIALNOŚCI → WYBÓR MIĘDZY STANEM AGENTALNYM A SUWERENNOŚCIĄ → AKT ODPOWIEDZI.',
        'Poniższy moduł laboratoryjny pozwala zdiagnozować naturę relacji podległości.'
      ],
      interactiveWindowRef: {
        id: 'win-42-23-mikroskop-posluszenstwa',
        title: 'CZŁOWIEK POD MIKROSKOPEM: Czy To Posłuszeństwo, Współpraca czy Przymus?',
        subtitle: 'Dekonstrukcja reakcji oficera Bartka w krytycznym locie we mgle',
        context: 'Sytuacja w kokpicie: zderzenie młodego pilota z autorytetem legendarnego kapitana.',
        type: 'microscope',
        takeaway: 'Odwaga do sprzeciwu wobec autorytetu jest najwyższą formą profesjonalizmu i lojalności wobec prawdy.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: '1. SYTUACJA LOTNICZA',
            question: 'Co wskazują przyrządy pokładowe?',
            content: 'Samolot schodzi 100 metrów poniżej ścieżki zniżania w zerowej widoczności.',
            subtext: 'Obiektywne, śmiertelne zagrożenie katastrofą.'
          },
          {
            stepNumber: 2,
            label: '2. BARIERA PSYCHOLOGICZNA BARTKA',
            question: 'Co paraliżuje drugiego pilota?',
            content: 'Kapitan jest jego mentorem i legendą lotnictwa. Bartek boi się, że jeśli krzyknie, wyjdzie na histeryka i zniszczy swoją karierę.',
            subtext: 'Lęk przed sankcją statusową silniejszy niż instynkt samozachowawczy.'
          },
          {
            stepNumber: 3,
            label: '3. WEJŚCIE W STAN AGENTALNY',
            question: 'Jaka myśl ratunkowa pojawia się w głowie Bartka?',
            content: '„Kapitan ma 18 000 godzin nalotu, widocznie widzi coś, czego ja nie dostrzegam. To on dowodzi, to jego odpowiedzialność”.',
            subtext: 'Zrzucenie moralnego ciężaru na autorytet.'
          }
        ]
      }
    },

    // 42.24
    {
      id: 'sec-42-24',
      pageNumber: 67,
      sectionNumber: '42.24',
      title: 'Jak zachować autonomię wobec autorytetu? Protokół Odpowiedzialności Osobistej i siła procedur niezależnych',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Jak chronić własne sumienie przed uległością wobec destrukcyjnego autorytetu? Wdroż PROTOKÓŁ CZTERECH ZASAD:',
        '1. ZASADA PODPISU: Pamiętaj, że w sądzie i przed własnym sumieniem nigdy nie obroni cię zdanie: „Szef mi kazał”. Twoje ręce podpisały pismo — ty ponosisz odpowiedzialność.',
        '2. ŻĄDANIE FORMALIZACJI: Kiedy otrzymujesz wątpliwe polecenie, odpowiedz spokojnie: „Proszę przesłać mi to polecenie mailem ze służbowego konta”. Despoci natychmiast wycofują się z nielegalnych żądań, gdy pojawia się ślad cyfrowy.',
        '3. SZUKAJ SOJUSZNIKA PRAWIDŁOWOŚCI: Nie walcz w samotności. Porozmawiaj z innymi członkami zespołu — odkryjesz, że większość myśli to samo, tylko wszyscy boją się odezwać pierwsi.',
        '4. ZACHOWAJ NIEZALEŻNE ŹRÓDŁO WARTOŚCI: Twój zawód i stanowisko to nie całe twoje życie. Kiedy masz oparcie w rodzinie, wierze i wartościach moralnych, żaden dyrektor nie jest w stanie kupić twojego sumienia.'
      ]
    },

    // 42.25
    {
      id: 'sec-42-25',
      pageNumber: 70,
      sectionNumber: '42.25',
      title: 'SYNTEZA: Autorytet jako służba mądrości i granice ludzkiego posłuszeństwa',
      category: 'podsumowanie',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zwieńczmy Rozdział 42 nadrzędną konkluzją filozoficzno-psychologiczną:',
        'AUTORYTET TO SPOŁECZNIE UZNANA MĄDROŚĆ, KTÓRA PRZEWODZI BEZ PRZYMUSU, SŁUŻĄC DOBRU TYCH, KTÓRZY JEJ UFAJĄ.',
        'Prawdziwy autorytet nigdy nie lęka się trudnych pytań, nie żąda ślepego posłuszeństwa i nie buduje kultu własnej osoby. Wie, że jego ranga wynika z wierności prawdzie, a nie z wielkości gabinetu. Posłuszeństwo jest cnotą tylko wtedy, gdy służy sprawiedliwości i ochronie życia; staje się zbrodnią, gdy zamienia człowieka w posłuszne narzędzie krzywdzenia innych.',
        'Poznaliśmy mechanizmy perswazji, manipulacji, władzy i autorytetu. Co jednak decyduje o tym, jak człowiek jest postrzegany przez całe społeczeństwo, jak powstaje jego dobre imię, wizerunek i tożsamość w oczach wspólnoty — oraz jak łatwo jeden błąd potrafi zniszczyć dorobek całego życia? O tym traktuje zamykający nasz blok Rozdział 43: REPUTACJA, WIZERUNEK I TOŻSAMOŚĆ SPOŁECZNA.'
      ]
    }
  ]
};

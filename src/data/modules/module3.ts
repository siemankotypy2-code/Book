import { Module } from '../../types/book';

export const MODULE_3: Module = {
  id: 'modul-3-anatomia-manipulacji',
  index: 3,
  romanNumeral: 'III',
  title: 'Anatomia Manipulacji i Obrona Granic',
  tagline: 'Jak rozpoznać erozję rzeczywistości, ciemną triadę i chronić suwerenność własnego umysłu',
  description: 'Zgłęb mechanizmy gaslightingu, przemocy psychologicznej, uzależnienia od zmiennego wzmocnienia i naucz się żelaznych technik obronnych.',
  iconName: 'ShieldAlert',
  chapters: [
    {
      id: 'rozdzial-5-gaslighting',
      moduleIndex: 3,
      chapterNumber: 5,
      title: 'Gaslighting i Zacieranie Rzeczywistości: Gdy Przestajesz Ufać Zmysłom',
      subtitle: 'Niewidzialna przemoc psychiczna, atrofia hipokampa i odzyskiwanie prawdy',
      quote: {
        text: 'Najbardziej niebezpiecznym rodzajem kłamstwa jest to, które sprawia, że zaczynasz wątpić we własne oczy i uszy.',
        author: 'Robin Stern'
      },
      readingTimeMinutes: 15,
      leadParagraph: '„Przecież nigdy czegoś takiego nie mówiłem. Znowu zmyślasz”. „Jesteś przewrażliwiona, wszyscy w biurze to widzą, chyba naprawdę potrzebujesz leków”. Gdy słyszysz te słowa regularnie z ust osoby, którą kochasz lub która jest Twoim przełożonym, Twój świat powoli osuwa się w mrok. Zaczynasz sprawdzać po dziesięć razy daty w telefonie, boisz się odezwać i w końcu dochodzisz do wniosku, że to z Tobą jest coś fundamentalnie nie tak. Witaj w świecie gaslightingu.',
      foundationalTheory: {
        title: 'Trzy Fazy Erozji Poznawczej i Uszkodzenie Pamięci',
        paragraphs: [
          'Nazwa zjawiska pochodzi ze sztuki teatralnej „Gas Light” z 1938 roku, w której mąż celowo przyciemnia lampy gazowe w domu, a gdy żona to zauważa, wmawia jej, że lampy świecą bez zmian, doprowadzając ją na skraj obłędu.',
          'Dr Robin Stern z Yale University opisuje trzy fazy, przez które przechodzi ofiara: 1. Niedowierzanie („To jakaś pomyłka, przecież pamiętam inaczej”); 2. Obrona („Kłócę się godzinami, przynoszę dowody, próbuję mu wytłumaczyć”); 3. Depresja i poddanie („Może rzeczywiście jestem wariatką, nie mam już siły walczyć”).',
          'Na poziomie neurobiologicznym długotrwały gaslighting wywołuje stan przewlekłej hiperkortyzolemii. Toksyczny poziom kortyzolu dosłownie uszkadza neurony w hipokampie – strukturze kluczowej dla konsolidacji pamięci deklaratywnej i orientacji w czasie. W efekcie ofiara autentycznie zaczyna mieć luki pamięciowe, co manipulator triumfalnie wykorzystuje jako kolejny „dowód” jej niepoczytalności.'
        ]
      },
      caseStudy: {
        id: 'cs-5',
        title: 'Znikające Ustalenia: Historia Anny i Dyrektora Piotra',
        characters: ['Anna (starsza analityczka finansowa, 32 l.)', 'Piotr (dyrektor departamentu, 45 l.)'],
        setting: 'Renomowana firma doradcza, cotygodniowe spotkania 1-on-1.',
        scenario: 'Anna przygotowuje skomplikowaną wycenę fuzji według wytycznych przekazanych ustnie przez Piotra w zeszły wtorek. Poświęca na to trzy noce. Na spotkaniu zarządu Piotr patrzy na jej slajdy ze zdegustowaną miną: „Aniu, o czym ty mówisz? Miałaś przygotować model konserwatywny, a nie ekspansywny. Przecież wyraźnie ci to zaznaczyłem w zeszłym tygodniu. Przepraszam państwa za tę wpadkę, Ania ostatnio ma trudny czas prywatny”. Anna czuje, jak ziemia usuwa jej się spod nóg. Na późniejszej rozmowie w cztery oczy Piotr mówi z fałszywą troską: „Martwię się o ciebie, Aniu. Zapominasz o podstawowych rzeczach. Może powinnaś pójść na urlop zdrowotny?”. Anna zaczyna płakać i przepraszać za błąd, którego nie popełniła.',
        turningPoint: 'Przyjaciółka Anny sugeruje jej, by zaczęła nagrywać lub bezzwłocznie wysyłać mailem podsumowania każdego spotkania z Piotrem. Gdy tydzień później Piotr znowu próbuje wyprzeć się ustaleń, Anna patrzy na własne notatki z pieczątką czasu i po raz pierwszy nie czuje wstydu, lecz lodowatą jasność: to nie ona traci zmysły, to Piotr cynicznie fałszuje rzeczywistość.',
        outcome: 'Zgłoszenie mobbingu do działu compliance, zmiana zespołu i powrót do równowagi psychicznej.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Przestawianie Słupków Bramki (Moving the Goalposts)',
            description: 'Nieustanna zmiana reguł gry i oczekiwań, tak by ofiara nigdy nie mogła poczuć satysfakcji ze spełnienia wymagań.',
            realWorldManifestation: 'Gdy Anna zrobiła model ekspansywny, Piotr twierdził, że chciał konserwatywny. Gdyby zrobiła konserwatywny, zarzuciłby jej brak odwagi.'
          },
          {
            name: 'Odwrócenie Ról Sprawca-Ofiara (DARVO)',
            description: 'Deny, Attack, and Reverse Victim and Offender: Wyparcie, atak i zrobienie z siebie pokrzywdzonego.',
            realWorldManifestation: '„Jak możesz mnie posądzać o oszustwo po wszystkim, co dla ciebie w tej firmie zrobiłem?”.'
          }
        ],
        emotionalDynamics: 'Systematyczne niszczenie poczucia własnej sprawczości i zastępowanie go paraliżującym zwątpieniem.',
        hiddenMotivations: 'Całkowita kontrola nad narracją, władza i zrzucenie odpowiedzialności za własne błędy.',
        cognitiveDistortions: ['Personalizacja cudzych zachowań', 'Utrata zaufania do własnej percepcji']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Hipokamp (Hippocampus)',
            role: 'Ośrodek tworzenia nowej pamięci i kontekstu przestrzenno-czasowego.',
            functionInScenario: 'Uległ czynnościowemu zahamowaniu pod wpływem przewlekłego wyrzutu kortyzolu.'
          },
          {
            name: 'Przyśrodkowa Kora Przedczołowa (mPFC)',
            role: 'Reprezentacja koncepcji własnego „ja” i poczucia tożsamości.',
            functionInScenario: 'Jej aktywność została zdominowana przez narrację i oceny narzucane przez manipulatora.'
          }
        ],
        neurotransmitters: [
          { name: 'Kortyzol', effect: 'Neurotoksyczny w wysokich, przewlekłych dawkach; niszczy synapsy w strukturach pamięciowych.' }
        ],
        scientificSummary: 'Ofiara gaslightingu żyje w stanie permanentnego wzbudzenia układu współczulnego. Brak stabilnego punktu odniesienia uniemożliwia konsolidację pamięci operacyjnej.',
        keyTakeaway: 'Nigdy nie dyskutuj z manipulatorem o tym, co pamiętasz – twórz fizyczne, niepodważalne ślady rzeczywistości.'
      },
      practicalApplication: {
        title: 'Strategia Kotwiczenia Rzeczywistości (Reality Anchoring)',
        adviceList: [
          {
            heading: 'Złota Zasada Pisemnego Śladu',
            content: 'Po każdej ustnej rozmowie z podejrzaną osobą wyślij maila: „Dziękuję za rozmowę. W celu upewnienia się, że dobrze zrozumiałem: ustalamy, że wykonam kroki X i Y do dnia Z. Jeśli coś pominąłem, proszę o korektę”. Masz obiektywną kotwicę czasu.'
          },
          {
            heading: 'Zewnętrzne Lustro Rzeczywistości',
            content: 'Utrzymuj przynajmniej jedną relację z osobą całkowicie niezależną od środowiska manipulatora (przyjaciel, terapeuta). Dziel się faktami, by zweryfikować: „Czy to, co opisuję, brzmi dla ciebie normalnie?”.'
          },
          {
            heading: 'Zakaz Przekonywania Przekonanego',
            content: 'Nie marnuj energii na udowadnianie gaslighterowi, że kłamie. On doskonale wie, co robi. Twoim celem nie jest przekonanie go, lecz ocalenie własnego spokoju.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch5',
        type: 'gaslighting_anchor',
        title: 'Kotwica Rzeczywistości: Tabela Obiektywnych Faktów',
        description: 'Oddziel bezsporne fakty od narracji i oskarżeń manipulatora. Zbuduj nienaruszalny fundament prawdy.',
        instruction: 'Wprowadź to, co zarzuca Ci druga strona, oraz zestaw to z obiektywnymi, materialnymi dowodami.'
      },
      exercise: {
        id: 'ex-ch5',
        title: 'Dziennik Kotwiczenia Faktów',
        estimatedMinutes: 12,
        category: 'granice',
        goal: 'Stworzenie nawyku rejestrowania faktów i emocji w celu ochrony przed manipulacją narracyjną.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór Spornej Sytuacji',
            description: 'Opisz zdarzenie, w którym ktoś próbował wmówić Ci, że coś pamiętasz źle lub wyolbrzymiasz.',
            inputType: 'text',
            promptQuestion: 'Sytuacja i zarzut drugiej strony:'
          },
          {
            stepNumber: 2,
            title: 'Zestawienie Obiektywnych Faktów',
            description: 'Wypisz wyłącznie to, co zarejestrowałaby obiektywna kamera wideo (dokładne słowa, wiadomości SMS, godziny).',
            inputType: 'textarea',
            promptQuestion: 'Niezaprzeczalne fakty z kamery:'
          }
        ],
        reflectionPrompt: 'W jakich momentach najczęściej rezygnujesz z obrony własnego zdania dla „świętego spokoju”? Jaki jest długofalowy koszt takiego kompromisu?'
      },
      keyTakeaways: [
        'Gaslighting to zorganizowany atak na Twoją zdolność ufania własnym zmysłom.',
        'Przewlekły stres niszczy hipokamp, powodując realne luki pamięciowe, co ułatwia manipulację.',
        'Jedynym lekarstwem jest pisemna dokumentacja, zewnętrzne wsparcie i odmowa kłótni o percepcję.',
        'Nie musisz przekonywać manipulatora, by mieć prawo do własnej prawdy.'
      ]
    },
    {
      id: 'rozdzial-6-triada-ciemna',
      moduleIndex: 3,
      chapterNumber: 6,
      title: 'Triada Ciemna i Techniki Erozyjne: Od Narcyzmu do Huśtawki Emocjonalnej',
      subtitle: 'Bombardowanie miłością, karanie ciszą i neurobiologia więzi traumatycznej',
      quote: {
        text: 'Toksyczna relacja uzależnia dokładnie tak samo jak twardy narkotyk – nie dlatego, że jest w niej tak dobrze, lecz dlatego, że ból przeplata się z nagłą euforią.',
        author: 'Dr Shahida Arabi'
      },
      readingTimeMinutes: 16,
      leadParagraph: 'Początek wygląda jak z bajki: natychmiastowe porozumienie dusz, morze komplementów, prezenty, deklaracje dozgonnej przyjaźni lub miłości po dwóch tygodniach. Czujesz się jak w centrum wszechświata. A potem nagle, bez żadnego ostrzeżenia, zapada lodowata cisza. Druga strona przestaje odpowiadać na wiadomości, a jej wzrok jest pusty i obojętny. Zrobisz wszystko, byle tylko wrócić do tamtego pierwszego etapu. Gratulacje – właśnie zostałeś schwytany w pułapkę więzi traumatycznej.',
      foundationalTheory: {
        title: 'Ciemna Triada i Neurobiologia Zmiennego Wzmocnienia',
        paragraphs: [
          'W psychologii mianem Ciemnej Triady określa się trzy nakładające się na siebie rysy osobowości: Narcyzm (wielkościowe mniemanie o sobie, brak empatii, roszczeniowość), Makiawelizm (cyniczna manipulacja, traktowanie ludzi jak pionków) oraz Psychopatię (bezduszność, impulsywność, brak wyrzutów sumienia).',
          'Jednym z najpotężniejszych narzędzi wykorzystywanych przez takie osoby jest cykl przemocy: Love-Bombing (bombardowanie miłością) -> Devaluation (dewaluacja i karanie ciszą) -> Discard (odrzucenie) -> Hoovering (zasysanie z powrotem przy pomocy fałszywych obietnic poprawy).',
          'Dlaczego tak trudno z takiej relacji odejść? Odpowiedź tkwi w neurochemii. Gdy okresy czułości i pochwał następują w sposób całkowicie nieprzewidywalny i losowy, w mózgu ofiary dochodzi do zjawiska więzi traumatycznej (trauma bond). Poziom dopaminy szybuje w reakcji na najdrobniejszy uśmiech oprawcy, a receptory opioidowe łakną ulgi po katuszach karania ciszą (Silent Treatment).'
        ]
      },
      caseStudy: {
        id: 'cs-6',
        title: 'Złoty Chłopiec i Zniszczony Wspólnik: Michał i Wiktor',
        characters: ['Michał (architekt oprogramowania, 30 l.)', 'Wiktor (charyzmatyczny inwestor i mówca, 39 l.)'],
        setting: 'Warszawski startup technologiczny, ekskluzywne biuro w wieżowcu.',
        scenario: 'Wiktor pojawia się w życiu Michała jak zjawisko: „Michał, jesteś geniuszem, z nikim mi się tak dobrze nie pracowało, zrobimy z tego jednorożca!”. Michał czuje się wniebowzięty. Wiktor zaprasza go na kolacje z gwiazdami biznesu, zasypuje prezentami. Po 4 miesiącach Wiktor nagle przestaje odbierać telefony Michała. Na korytarzu mija go bez słowa. Michał popada w panikę: „Co zrobiłem źle?”. Zaczyna pracować po 16 godzin na dobę, by zadowolić Wiktora. Gdy wreszcie Wiktor rzuca od niechcenia: „No, ten raport jest wreszcie na poziomie, dobra robota, misiu”, Michał czuje ekstazę. Tydzień później Wiktor bez wiedzy Michała przepisuje prawa do patentu na własną spółkę.',
        turningPoint: 'Michał trafia na szpitalny oddział ratunkowy z objawami zawału serca (skrajny atak paniki wywołany wyczerpaniem układu współczulnego). Lekarz mówi wprost: „Jeśli pan nie odetnie źródła tego stresu, pana organizm tego nie wytrzyma”.',
        outcome: 'Zerwanie relacji, długa terapia odbudowująca granice i założenie własnej firmy bez toksycznych partnerów.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Karanie Ciszą (Silent Treatment) jako Ostracyzm',
            description: 'Umyślne ignorowanie obecności drugiego człowieka w celu wywołania bezsilności i wymuszenia bezwarunkowego podporządkowania.',
            realWorldManifestation: 'Wiktor nie krzyczał na Michała – po prostu traktował go jak powietrze, dopóki Michał nie zaczął błagać o wybaczenie.'
          },
          {
            name: 'Więź Traumatyczna (Trauma Bonding)',
            description: 'Silne przywiązanie emocjonalne ofiary do sprawcy, napędzane cyklem przemocy i sporadycznych nagród.',
            realWorldManifestation: 'Michał czuł większe przywiązanie do Wiktora niż do lojalnych, spokojnych przyjaciół, bo relacja z Wiktorem była emocjonalnym rollercoasterem.'
          }
        ],
        emotionalDynamics: 'Huśtawka pomiędzy euforycznym poczuciem wyjątkowości a druzgocącym lękiem przed porzuceniem.',
        hiddenMotivations: 'Żerowanie na empatii i potrzebie uznania drugiej osoby (tzw. zasób narcystyczny).',
        cognitiveDistortions: ['Przekonanie, że „to ja mogę go zmienić swoją miłością/pracą”', 'Bagatelizowanie okrucieństwa']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Przednia Kora Zakrętu Obręczy (dACC)',
            role: 'Rejestracja bólu wykluczenia społecznego podczas karania ciszą.',
            functionInScenario: 'Aktywowała się potężnie za każdym razem, gdy Wiktor ignorował wiadomości.'
          },
          {
            name: 'Pole Brzuszne Nakrywki (VTA) i Układ Opiatowy',
            role: 'Produkcja dopaminy i endorfin w reakcji na nagłe pojednanie.',
            functionInScenario: 'Wywoływały euforyczny „haj” ulgi po powrocie Wiktora do łask.'
          }
        ],
        neurotransmitters: [
          { name: 'Oksytocyna i Wazopresyna', effect: 'Biologiczne spoiwo przywiązania; w warunkach stresu cementuje toksyczną zależność.' }
        ],
        scientificSummary: 'Zmienne wzmocnienie (intermittent reinforcement) tworzy w mózgu najtrwalsze ślady pamięciowe ze wszystkich znanych protokołów uczenia się. Rozbicie tej więzi wymaga procesu analogicznego do leczenia uzależnienia biochemicznego.',
        keyTakeaway: 'Namiętność i ekscytacja w relacji to często nie miłość, lecz alarm Twojego układu nerwowego ostrzegający przed drapieżnikiem.'
      },
      practicalApplication: {
        title: 'Tarcza Przeciwwstrząsowa: Metoda Szarego Kamienia',
        adviceList: [
          {
            heading: 'Zasada Szarego Kamienia (Gray Rock Method)',
            content: 'Gdy musisz mieć kontakt z manipulatorem (np. w pracy lub z byłym partnerem przy dzieciach), stań się tak nudny i pozbawiony reakcji emocjonalnych jak polny kamień. Odpowiadaj monotonnym głosem: „Tak”, „Nie”, „Rozumiem”, „Sprawdzę to”. Bez dramatu, bez łez, bez kłótni. Manipulator szuka dopaminowego paliwa – gdy go nie znajdzie, odpłynie w poszukiwaniu innej ofiary.'
          },
          {
            heading: 'Zasada Zero Kontaktu (No Contact)',
            content: 'Jeśli to tylko możliwe, jedynym trwałym rozwiązaniem przy skrajnych cechach Ciemnej Triady jest całkowite zablokowanie kanałów komunikacji. Każda próba „zamknięcia relacji dojrzałą rozmową” zostanie wykorzystana do ponownego zassania (hoovering).'
          },
          {
            heading: 'Rozbrajanie Karania Ciszą',
            content: 'Nigdy nie pytaj: „Co ci zrobiłem?”. Gdy ktoś stosuje karanie ciszą, powiedz raz: „Widzę, że nie chcesz teraz rozmawiać. Daj mi znać, gdy będziesz gotowy”, po czym zajmij się swoim życiem, pracą i pasjami. Brak paniki ofiary natychmiast neutralizuje to narzędzie.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch6',
        type: 'red_flag_matrix',
        title: 'Radar Czerwonych Flag i Generator Odpowiedzi Szarego Kamienia',
        description: 'Zdiagnozuj natężenie toksycznych zachowań w relacji i przećwicz beznamiętne, neutralne odpowiedzi deeskalujące konflikt.',
        instruction: 'Wybierz typ prowokacji, aby wygenerować idealną odpowiedź w stylu Szarego Kamienia.'
      },
      exercise: {
        id: 'ex-ch6',
        title: 'Ustanawianie Żelaznej Granicy Behawioralnej',
        estimatedMinutes: 15,
        category: 'granice',
        goal: 'Sformułowanie i wdrożenie granicy typu „Jeśli ty zrobisz X, ja zrobię Y”.',
        steps: [
          {
            stepNumber: 1,
            title: 'Identyfikacja Niedopuszczalnego Zachowania',
            description: 'Jakie zachowanie konkretnej osoby narusza Twoją godność lub spokój psychiczny?',
            inputType: 'text',
            promptQuestion: 'Niedopuszczalne zachowanie:'
          },
          {
            stepNumber: 2,
            title: 'Konstrukcja Granicy Działaniowej (Nie Prośby!)',
            description: 'Pamiętaj: granica to nie prośba o to, by ktoś się zmienił. Granica to Twoja deklaracja tego, co Ty zrobisz. Wzór: „Jeśli podnosisz na mnie głos / stosujesz karanie ciszą, ja kończę tę rozmowę i wychodzę z pokoju”.',
            inputType: 'textarea',
            promptQuestion: 'Moja żelazna granica behawioralna:'
          }
        ],
        reflectionPrompt: 'Dlaczego tak bardzo boisz się złości lub obrazy manipulatora? Czyja aprobata jest dla Ciebie cenniejsza: jego, czy Twojego własnego sumienia?'
      },
      keyTakeaways: [
        'Love-bombing i karanie ciszą to dwie strony tej samej monety zmiennego wzmocnienia.',
        'Więź traumatyczna uzależnia biochemicznie tak samo jak narkotyk poprzez receptory dopaminowo-opioidowe.',
        'Metoda Szarego Kamienia odcina manipulatorowi dopływ pożywki emocjonalnej.',
        'Granice osobiste to Twoje własne działania i konsekwencje, a nie próba kontrolowania drugiego człowieka.'
      ]
    }
  ]
};

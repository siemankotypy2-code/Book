import { Module } from '../../types/book';

export const MODULE_2: Module = {
  id: 'modul-2-psychologia-spoleczna',
  index: 2,
  romanNumeral: 'II',
  title: 'Psychologia Społeczna, Wpływ i Niewidzialne Siły',
  tagline: 'Jak grupa i ewolucyjna potrzeba przynależności kształtują nasze sumienie i wybory',
  description: 'Zbadaj mechanizmy konformizmu, społecznego dowodu słuszności, długu wzajemności oraz neurobiologicznego lęku przed wykluczeniem ze stada.',
  iconName: 'Users',
  chapters: [
    {
      id: 'rozdzial-3-spoleczny-dowod-slusznosci',
      moduleIndex: 2,
      chapterNumber: 3,
      title: 'Społeczny Dowód Słuszności i Presja Grupy: Jak Tłum Przejmuje Zmysły',
      subtitle: 'Dlaczego robimy to, co inni, nawet gdy wiemy, że to błąd?',
      quote: {
        text: 'Gdy wszyscy myślą tak samo, to znaczy, że nikt nie myśli zbyt wiele.',
        author: 'Walter Lippmann'
      },
      readingTimeMinutes: 13,
      leadParagraph: 'Czy zauważyłeś, że stojąc w obcym mieście, instynktownie wybierasz restaurację z długą kolejką, a tę pustą obok omijasz szerokim łukiem z podejrzeniem, że jedzenie jest tam nieświeże? Albo że podczas zebrania w pracy milczysz, choć widzisz rażący błąd w projekcie, tylko dlatego, że nikt inny nie podnosi ręki? Nasz mózg traktuje odrzucenie społeczne z taką samą powagą jak fizyczne zranienie.',
      foundationalTheory: {
        title: 'Eksperyment Ascha i Neurobiologia Konformizmu',
        paragraphs: [
          'W 1951 roku psycholog Solomon Asch przeprowadził jeden z najsłynniejszych eksperymentów w dziejach nauki. Pokazywał badanym karty z liniami o różnej długości. Zadanie było banalnie proste: wskazać linię identyczną ze wzorcową. Gdy uczestnik odpowiadał sam, popełniał błąd w mniej niż 1% przypadków. Gdy jednak w pokoju posadzono podstawionych aktorów, którzy jednogłośnie wskazywali ewidentnie złą linię, aż 75% prawdziwych uczestników przynajmniej raz uległo i powtórzyło absurdalną odpowiedź grupy.',
          'Współczesne badania z użyciem rezonansu magnetycznego (fMRI) przeprowadzone przez dr. Gregory\'ego Bernsa ujawniły coś jeszcze bardziej szokującego: u osób ulegających grupie nie dochodziło do cynicznego kłamstwa. Aktywowała się ich kora potyliczna i ciemieniowa – obszary odpowiedzialne za percepcję wzrokową. Oznacza to, że presja grupy autentycznie zniekształciła to, co ich oczy widziały w rzeczywistości.',
          'Z kolei u tych nielicznych, którzy odważyli się sprzeciwić grupie, zaobserwowano gwałtowny rozbłysk w ciele migdałowatym oraz przedniej korze zakrętu obręczy (dACC) – strukturze rejestrującej fizyczny ból. Samotny sprzeciw dosłownie boli mózg.'
        ]
      },
      caseStudy: {
        id: 'cs-3',
        title: 'Milczenie Nad Krawędzią: Katastrofa Projektu Titan',
        characters: ['Paweł (senior project manager, 38 l.)', 'Ewa (główna analityczka, 31 l.)', 'Zarząd firmy'],
        setting: 'Sala konferencyjna korporacji technologicznej, kluczowe zebranie przed startem kampanii wartej 4 miliony złotych.',
        scenario: 'Ewa odkrywa w arkuszach poważną lukę: system płatności zawiesza się przy obciążeniu powyżej 10 tysięcy użytkowników. Podczas prezentacji CEO zachwyca się harmonogramem: „Wszyscy jesteśmy zgodni, że wchodzimy na rynek w piątek, prawda?”. Rozgląda się po sali. Dyrektor techniczny kiwa z uśmiechem głową, szef marketingu bije brawo. Ewa czuje, jak żołądek podchodzi jej do gardła. Patrzy na Pawła, który również znał raport o błędach. Paweł jednak patrzy w stół i potakuje. Ewa zaciska dłonie pod blatem i decyduje się nie odzywać, myśląc: „Skoro dyrektor techniczny się nie boi, może ja przesadzam?”. W piątek system pada po 14 minutach, powodując paraliż i straty idące w miliony.',
        turningPoint: 'Po fakcie na spotkaniu kryzysowym wszyscy przyznają: „Przecież czułem, że to nie wypali!”. Zjawisko zbiorowej ignorancji (pluralistic ignorance) doprowadziło do paraliżu całej grupy mądrych ludzi.',
        outcome: 'Dymisja kierownictwa i brutalna lekcja o cenie braku psychologicznego bezpieczeństwa.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Zbiorowa Ignorancja (Pluralistic Ignorance)',
            description: 'Sytuacja, w której każdy członek grupy prywatnie odrzuca daną normę, ale błędnie zakłada, że wszyscy inni ją akceptują.',
            realWorldManifestation: 'Ewa i Paweł milczeli, widząc spokój pozostałych, nie wiedząc, że inni również udają spokój z tego samego powodu.'
          },
          {
            name: 'Dyfuzja Odpowiedzialności (Bystander Effect)',
            description: 'Im więcej osób jest świadkami problemu lub zagrożenia, tym mniejsza szansa, że jakakolwiek pojedyncza osoba podejmie działanie.',
            realWorldManifestation: '„Skoro jest tu 15 osób z zarządu, na pewno ktoś inny to zgłosi”.'
          }
        ],
        emotionalDynamics: 'Ewolucyjny paniczny lęk przed wykluczeniem ze stada (ostracyzmem), który w czasach plemiennych oznaczał pewną śmierć z głodu lub w szponach drapieżnika.',
        hiddenMotivations: 'Ochrona własnego statusu i reputacji kosztem dobra całego przedsięwzięcia.',
        cognitiveDistortions: ['Złudzenie jednomyślności', 'Autocenzura', 'Nadmierny optymizm grupowy']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Grzbietowa Przednia Kora Zakrętu Obręczy (dACC)',
            role: 'Ośrodek wykrywania błędów poznawczych oraz bólu fizycznego i społecznego.',
            functionInScenario: 'Zarejestrowała potencjalny sprzeciw jako bolesne zagrożenie izolacją.'
          },
          {
            name: 'Brzuszne Prążkowie (Ventral Striatum)',
            role: 'Generowanie sygnałów aprobaty i poczucia nagrody.',
            functionInScenario: 'Nagradzało dopaminą za podążanie za konsensusem grupy.'
          }
        ],
        neurotransmitters: [
          { name: 'Oksytocyna', effect: 'Wzmacnia spójność i zaufanie wewnątrz własnej grupy (in-group), ale nasila wrogość lub uległość wobec presji stada.' }
        ],
        scientificSummary: 'Mózg ludzki traktuje zgodność z grupą jako bezpieczny stan homeostazy. Złamanie konsensusu wymaga ogromnego nakładu energii kory przedczołowej na przełamanie alarmu bólowego z dACC.',
        keyTakeaway: 'Niezależność myślenia nie jest cechą wrodzoną – to biologiczny heroizm wymagający tolerancji na somatyczny ból odrzucenia.'
      },
      practicalApplication: {
        title: 'Jak Pielęgnować Konstruktywny Dyssens',
        adviceList: [
          {
            heading: 'Rola Oficjalnego Adwokata Diabła',
            content: 'Nigdy nie pytaj: „Czy wszyscy się zgadzają?”. Wyznacz na każdym kluczowym spotkaniu jedną osobę, której formalnym zadaniem jest znalezienie 3 powodów, dla których pomysł runie.'
          },
          {
            heading: 'Technika Pre-Mortem (Sekcja Zwłok Projektu)',
            content: 'Metoda Gary’ego Kleina: Zanim wdrożycie plan, powiedz zespołowi: „Wyobraźcie sobie, że minął rok, a nasz projekt poniósł całkowitą, spektakularną klapę. Napiszcie na kartkach historię tego, co poszło nie tak”. To zdejmuje piętno czarnowidztwa.'
          },
          {
            heading: 'Złamanie Efektu Widza',
            content: 'W sytuacji kryzysowej nigdy nie krzycz: „Niech ktoś zadzwoni po pomoc!”. Wskaż palcem konkretną osobę: „Pan w niebieskiej kurtce – proszę zadzwonić pod 112!”. Personalizacja niszczy dyfuzję odpowiedzialności.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch3',
        type: 'social_pressure_sim',
        title: 'Symulator Odporności na Presję Grupy i Myślenie Stadne',
        description: 'Przetestuj swoje reakcje w scenariuszach wysokiego konformizmu i przećwicz formułowanie asertywnego sprzeciwu.',
        instruction: 'Wybierz scenariusz presji grupowej i dobierz strategię komunikacji, która neutralizuje lęk stada.'
      },
      exercise: {
        id: 'ex-ch3',
        title: 'Trening Asertywnego Dyssensu: Formuła Otwartej Karty',
        estimatedMinutes: 10,
        category: 'granice',
        goal: 'Opanowanie schematu zgłaszania wątpliwości bez atakowania grupy i bez wywoływania wrogości.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór Sprawy z Twojego Życia',
            description: 'W jakiej kwestii obecnie milczysz w pracy lub w rodzinie, chociaż w głębi duszy się nie zgadzasz?',
            inputType: 'text',
            promptQuestion: 'Sytuacja, w której dostosowuję się wbrew sobie:'
          },
          {
            stepNumber: 2,
            title: 'Konstrukcja Wypowiedzi wg Metody "Troska + Fakt"',
            description: 'Ułóż wypowiedź zaczynając od wspólnego celu: „Zależy mi na sukcesie naszego zespołu / naszej relacji, dlatego czuję się w obowiązku zwrócić uwagę na...”',
            inputType: 'textarea',
            promptQuestion: 'Moja przygotowana wypowiedź brzmi:'
          }
        ],
        reflectionPrompt: 'Jaki najgorszy scenariusz podpowiada Ci Twoje ciało migdałowate, gdy myślisz o wyrażeniu odmiennego zdania? Na ile jest on obiektywnie prawdopodobny?'
      },
      keyTakeaways: [
        'Konformizm zniekształca samą percepcję zmysłową, a nie tylko wypowiadane słowa.',
        'Sprzeciwienie się grupie aktywuje w mózgu te same szlaki neuronalne co ból po oparzeniu.',
        'Zbiorowa ignorancja sprawia, że tłum mądrych ludzi podejmuje katastrofalne decyzje.',
        'Wprowadzenie procedury pre-mortem i roli Adwokata Diabła chroni zespoły przed samozagładą.'
      ]
    },
    {
      id: 'rozdzial-4-regula-wzajemnosci',
      moduleIndex: 2,
      chapterNumber: 4,
      title: 'Reguła Wzajemności i Zobowiązania: Niewidzialny Dług Wdzięczności',
      subtitle: 'Jak darmowa przysługa zamienia się w narzędzie bezwzględnego wpływu',
      quote: {
        text: 'Nie ma darmowych obiadów – nie dlatego, że ktoś musi za nie zapłacić, lecz dlatego, że koszt psychologiczny ponosi obdarowany.',
        author: 'Robert B. Cialdini'
      },
      readingTimeMinutes: 14,
      leadParagraph: 'Wchodzisz na targowisko lub do salonu samochodowego. Uśmiechnięty sprzedawca wręcza Ci bezpłatny kubek aromatycznej kawy, częstuje kawałkiem sera na wykałaczce albo poświęca pół godziny, by bezinteresownie wyjaśnić skomplikowane kruczki. W Twoim żołądku pojawia się dziwne, lepkie uczucie: czujesz, że po prostu NIE MOŻESZ teraz odejść z pustymi rękami. Zostałeś schwytany w najstarszą sieć społeczną ludzkości.',
      foundationalTheory: {
        title: 'Biologia Wymiany Darów i Ewolucyjne Źródła Przymusu',
        paragraphs: [
          'Antropolodzy tacy jak Marcel Mauss oraz psychologowie społeczni na czele z Robertem Cialdinim zgodnie podkreślają: reguła wzajemności („odwdzięcz się za to, co otrzymałeś”) jest fundamentem cywilizacji. Umożliwiła podział pracy, handel i tworzenie sojuszy. Osobnik, który brał i nie oddawał, stawał się wyrzutkiem.',
          'Z tego powodu nasz mózg został ewolucyjnie zaprogramowany tak, by stan zadłużenia odczuwać jako głęboki dyskomfort psychiczny. Nieodwzajemniona przysługa rodzi wstyd i lęk przed potępieniem.',
          'Manipulatorzy doskonale o tym wiedzą. Poprzez zaoferowanie nieproszonej przysługi (darmowa próbka, przysługa koleżeńska, zaproszenie na kolację) wywołują w nas asymetryczny dług. Reakcją na drobny gest bywa zgoda na wielotysięczny wydatek lub podpisanie niekorzystnej umowy.'
        ]
      },
      caseStudy: {
        id: 'cs-4',
        title: 'Kawa za Dwadzieścia Tysięcy: Negocjacje Karoliny',
        characters: ['Karolina (lekarka, 35 l.)', 'Marek (doradca klienta w salonie motoryzacyjnym)'],
        setting: 'Luksusowy salon samochodowy, sobotnie przedpołudnie.',
        scenario: 'Karolina wchodzi do salonu z zamiarem jedynie rozejrzenia się po modelach. Marek natychmiast wita ją serdecznym uśmiechem, pyta o zmęczenie po dyżurze i zaprasza na „najlepsze espresso w mieście” z ekspresu ciśnieniowego. Przynosi świeże rogaliki, a gdy Karolina wspomina, że jej syn uwielbia miniaturowe modele aut, Marek znika na zapleczu i wręcza jej firmowy metalowy modelik: „To prezent ode mnie dla małego mistrza!”. Spędzają razem dwie godziny. Gdy przychodzi do konfiguracji auta, Marek przedstawia pakiet dodatkowych ubezpieczeń i wyposażenia o wartości 22 000 zł, znacznie przekraczający budżet Karoliny. Choć Karolina wie, że tego nie potrzebuje, myśl o powiedzeniu: „Nie, dziękuję, rezygnuję z tego” wywołuje w niej fizyczny wstyd. Podpisuje aneks.',
        turningPoint: 'Wracając do domu, Karolina patrzy na modelik w torebce i czuje mdłości. Uświadamia sobie, że kupiła pakiet za 22 tysiące tylko po to, by nie sprawić przykrości człowiekowi, który dał jej zabawkę za 30 zł.',
        outcome: 'Nadwyrężony budżet domowy i poczucie bycia naiwną ofiarą manipulacji.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Technika "Drzwi w Twarz" (Door-in-the-Face)',
            description: 'Postawienie najpierw wygórowanego żądania, a po jego odrzuceniu – przejście do żądania mniejszego, które odbierane jest jako ustępstwo wymagające rewanżu.',
            realWorldManifestation: '„Skoro sprzedawca zszedł z ceny i dorzucił prezent, ja muszę zgodzić się na resztę warunków”.'
          },
          {
            name: 'Dysonans Poznawczy i Zobowiązanie',
            description: 'Potrzeba zachowania spójności własnego wizerunku: chcemy widzieć siebie jako osoby kulturalne, wdzięczne i honorowe.',
            realWorldManifestation: 'Odmowa po dwóch godzinach serdecznej rozmowy zburzyłaby autowizerunek Karoliny jako życzliwej i sprawiedliwej osoby.'
          }
        ],
        emotionalDynamics: 'Poczucie winy wywołane sztucznie spreparowanym długiem emocjonalnym.',
        hiddenMotivations: 'Pragnienie uniknięcia etykiety „niewdzięcznika” za wszelką cenę.',
        cognitiveDistortions: ['Przecenianie wartości otrzymanego gestu', 'Zlewanie relacji biznesowej z prywatną']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Wyspa (Insula Anterior)',
            role: 'Ośrodek trzewnego obrzydzenia, moralnego dyskomfortu i poczucia niesprawiedliwości.',
            functionInScenario: 'Generowała fizyczne poczucie ucisku w żołądku na samą myśl o odmowie.'
          },
          {
            name: 'Brzuszno-Przyśrodkowa Kora Przedczołowa (vmPFC)',
            role: 'Integracja emocji z kalkulacją wartości społecznej i moralnej.',
            functionInScenario: 'Została sparaliżowana konfliktem między bilansem finansowym a długiem społecznym.'
          }
        ],
        neurotransmitters: [
          { name: 'Oksytocyna', effect: 'Wywołana ciepłym poczęstunkiem i uśmiechem, obniżyła czujność krytyczną i poziom lęku.' }
        ],
        scientificSummary: 'Otrzymanie niespodziewanego daru wywołuje biologiczny stan nierównowagi w układzie nagrody. Dopiero wyrównanie rachunku (odwzajemnienie) przywraca spokój neurobiologiczny.',
        keyTakeaway: 'Nieproszony podarunek to często nie wyraz miłości, lecz haczyk zarzucony na Twoją korę przedczołową.'
      },
      practicalApplication: {
        title: 'Jak Neutralizować Toksyczny Dług Wdzięczności',
        adviceList: [
          {
            heading: 'Zasada Przeklasyfikowania Daru',
            content: 'Gdy zorientujesz się, że „miły gest” był zabiegiem handlowym, powiedz sobie w duchu: „To nie był prezent od przyjaciela, lecz narzędzie marketingowe. Na narzędzie marketingowe odpowiadam analizą arkusza kalkulacyjnego, a nie długiem serca”.'
          },
          {
            heading: 'Rozdzielenie Uprzejmości od Decyzji',
            content: 'Możesz być nieskończenie uprzejmy i jednocześnie całkowicie nieugięty w negocjacjach. Uśmiechnij się i powiedz: „Bardzo dziękuję za pyszną kawę i pana poświęcony czas. Niestety te warunki finansowe są dla mnie nie do zaakceptowania”.'
          },
          {
            heading: 'Zasada 24 Godzin Kwarantanny',
            content: 'Nigdy nie podpisuj umów na tym samym spotkaniu, na którym zostałeś hojnie ugoszczony. Wyjdź z salonu lub biura. Wpływ neurochemiczny oksytocyny opada po wyjściu na świeże powietrze.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch4',
        type: 'reciprocity_detector',
        title: 'Wykrywacz Podstępnych Przysług i Długu Transakcyjnego',
        description: 'Przeanalizuj otrzymany gest lub prezent: czy to bezinteresowna sympatia, czy próba zaciągnięcia emocjonalnego kredytu?',
        instruction: 'Wprowadź szczegóły sytuacji, by obliczyć współczynnik manipulacji wzajemnością.'
      },
      exercise: {
        id: 'ex-ch4',
        title: 'Trening Odmawiania z Życzliwością',
        estimatedMinutes: 10,
        category: 'granice',
        goal: 'Nauczenie się asertywnej odmowy bez popadania w poczucie winy i bez agresji.',
        steps: [
          {
            stepNumber: 1,
            title: 'Analiza Twojego Bieżącego Długu Wdzięczności',
            description: 'Wobec kogo czujesz obecnie przymus zrobienia czegoś wbrew sobie tylko dlatego, że ta osoba kiedyś Ci pomogła?',
            inputType: 'text',
            promptQuestion: 'Osoba lub sytuacja wywołująca poczucie długu:'
          },
          {
            stepNumber: 2,
            title: 'Sformułowanie Eleganckiej Odmowy',
            description: 'Użyj wzorca: „Dziękuję Ci za [nazwij gest]. Doceniam to. Jednocześnie w sprawie [twoje żądanie/prośba] moja odpowiedź brzmi nie”.',
            inputType: 'textarea',
            promptQuestion: 'Moja formuła odmowy:'
          }
        ],
        reflectionPrompt: 'Dlaczego odmowa tak często kojarzy Ci się z byciem „złym człowiekiem”? Skąd w Twojej historii wzięło się przekonanie, że musisz płacić za każdy uśmiech?'
      },
      keyTakeaways: [
        'Reguła wzajemności jest ewolucyjnym fundamentem ludzkich społeczeństw.',
        'Nieproszona przysługa potrafi wywołać nieproporcjonalnie duże ustępstwo finansowe lub życiowe.',
        'Przeklasyfikowanie daru na chwyt perswazyjny uwalnia od poczucia moralnego zobowiązania.',
        'Wysoka uprzejmość może iść w parze z żelazną asertywnością decyzyjną.'
      ]
    }
  ]
};

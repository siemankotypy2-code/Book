import { Chapter } from '../types/book';

export const chapterFive: Chapter = {
  number: 5,
  title: 'Pamięć',
  subtitle: 'Dlaczego twoja pamięć nie jest nagraniem?',
  leadParagraph:
    'Gdy sięgasz pamięcią do wydarzeń sprzed kilku lat – pierwszego dnia w pracy, ślubu czy trudnej rozmowy z partnerem – masz całkowite przekonanie, że odtwarzasz w głowie dokładny plik wideo z twardego dysku. To jedno z najbardziej niebezpiecznych złudzeń poznawczych. W tym rozdziale udowadniamy, że ludzka pamięć nie działa jak kamera wideo, lecz jak scenarzysta i montażysta, który przy każdym przypomnieniu składa historię na nowo z dostępnych fragmentów.',
  totalEstimatedPages: 39,
  sections: [
    {
      id: 'sec-5-1',
      pageNumber: 168,
      sectionNumber: '5.1',
      title: 'Złudzenie Kamery Wideo: Spór o Słowa, Które Nigdy Nie Padły',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Pamięć nie jest rekonstrukcją przeszłości. Jest konstrukcja teraźniejszości opartą na śladach przeszłości.',
        author: 'Sir Frederic Bartlett, "Remembering"'
      },
      paragraphs: [
        'Podczas niedzielnego obiadu rodzinnego Michał i jego siostra Aneta pokłócili się o wydarzenie sprzed trzech lat. Chodziło o moment, w którym ich ojciec ogłosił decyzję o sprzedaży starego domu letniskowego.',
        'Michał twierdził z niezłomną pewnością: „Aneta, byłeś wtedy wściekła! Wstałaś od stołu, trzasnęłaś drzwiami i powiedziałaś, że ojciec niszczy nasze wspomnienia z dzieciństwa. Pamiętam to tak wyraźnie, jakby to było wczoraj. Miałaś na sobie czerwoną bluzkę”.',
        'Aneta spojrzała na niego ze zdumieniem: „Michał, o czym ty mówisz? W dniu, kiedy ojciec o tym mówił, leżałam w szpitalu po operacji kolana! Nie było mnie przy tym stole! To nasza kuzynka Kasia wstała i wyszła!”.',
        'Michał poczuł głęboki opór. Jego wspomnienie było tak żywe, pełne kolorów, emocji i detali, że nie potrafił dopuścić do siebie myśli, że może się mylić. Dochodzenie ze zdjęciami i wpisami w kalendarzu potwierdziło wersję Anety. Jak to możliwe, że zdrowy, inteligentny człowiek może „pamiętać” z absolutną pewnością zdarzenie, w którym brał udział zupełnie inny aktor?'
      ]
    },
    {
      id: 'sec-5-2',
      pageNumber: 173,
      sectionNumber: '5.2',
      title: 'Trzy Architektoniczne Etapy Pamięci: Kodowanie, Przechowywanie i Przypominanie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Proces pamięciowy składa się z trzech odrębnych faz, a na każdej z nich dochodzi do zniekształceń:',
        '1. KODOWANIE (Encoding): Przekształcenie bodźców zmysłowych w ślad pamięciowy (engram). Kodowanie nigdy nie obejmuje całości zdarzenia – zależy od tego, na co skierowaliśmy uwagę (patrz Rozdział 3) oraz od naszego poziomu pobudzenia emocjonalnego.',
        '2. PRZECHOWYWANIE / KONSOLIDACJA (Storage & Consolidation): Utwalanie engramu w sieciach neuronowych (z udziałem hipokampa i kory nowej). Ślad pamięciowy nie leży w mózgu w stanie nienaruszonym. Ulega ciągłym modyfikacjom pod wpływem nowych doświadczeń, snu i upływu czasu.',
        '3. PRZYPOMINANIE / REKONSTRUKCJA (Retrieval): Proces wydobywania informacji. Za każdym razem, gdy przypominasz sobie zdarzenie, ślad pamięciowy staje się niestabilny (zjawisko REKONSOLIDACJI) i zostaje zapisany na nowo – wzbogacony o Twój AKTUALNY stan emocjonalny, wiek i kontekst!'
      ]
    },
    {
      id: 'sec-5-3',
      pageNumber: 179,
      sectionNumber: '5.3',
      title: 'Taksonomia Systemów Pamięci: Robocza, Deklaratywna i Proceduralna',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Pamięć jest zbiorem zróżnicowanych modułów neuronalnych:',
        '• Pamięć Robocza / Operacyjna (Working Memory – model Baddeleya): Podręczny bufor poznawczy (utrzymujący informacje przez 15–30 sekund). To w niej wykonujesz obliczenia i przetwarzasz zdania.',
        '• Pamięć Deklaratywna (Jawna / Świadoma): obejmuje pamięć epizodyczną (wydarzenia osobiste umiejscowione w czasie i przestrzeni, np. pierwszy dzień w szkole – podatna na rekonstrukcję) oraz pamięć semantyczną (fakty i wiedza o świecie, np. stolicą Francji jest Paryż).',
        '• Pamięć Niedeklaratywna / Utajona (Proceduralna): Pamięć nawyków motorowych i automatyzmów („Jazda na rowerze”, „Pisanie na klawiaturze”). Odporna na upływ czasu i uszkodzenia hipokampa.'
      ]
    },
    {
      id: 'sec-5-4',
      pageNumber: 185,
      sectionNumber: '5.4',
      title: 'Odkrycia Elizabeth Loftus: Efekt Wprowadzania w Błąd (Misinformation Effect)',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wybitna badaczka prof. Elizabeth Loftus z University of California w Irvine poświęciła cztery dekady na badanie elastyczności ludzkiej pamięci. W jednym z klasycznych eksperymentów badanym pokazano nagranie stłuczki dwóch samochodów.',
        'Następnie podzielono uczestników na dwie grupy i zadano im nieznacznie różniące się pytania:',
        '• Grupa A: „Jak szybko jechały samochody, gdy zderzyły się ze sobą?” (hit each other)',
        '• Grupa B: „Jak szybko jechały samochody, gdy ROZTRZASKAŁY się o siebie?” (smashed into each other)',
        'Uczestnicy z Grupy B szacowali prędkość pojazdów jako znacznie wyższą. Ale prawdziwy szok przyniósł sprawdzian po tygodniu. Na pytanie: „Czy na miejscu wypadku widziałeś rozbite szkło?”, ponad 30% osób z Grupy B potwierdziło! W rzeczywistości na nagraniu NIE BYŁO ŻADNEGO rozbitego szkła.',
        'Jedno słowo sugerujące w pytaniu wystarczyło, aby mózg uczestników przebudował ślad pamięciowy i wstawił do niego nieistniejący detal.'
      ],
      subsections: [
        {
          title: 'Efekt Wprowadzania w Błąd w Sądzie',
          paragraphs: [],
          highlightBox: {
            title: 'Kluczowe Odkrycie Prawne',
            content: 'Brak korelacji między pewnością a dokładnością! Badania sądowe pokazują, że świadkowie mówiący z najgłębszym przekonaniem i emocjami potrafią wskazać niewinną osobę z powodu zniekształcenia pamięciowego źródła (source monitoring error).',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-5-5',
      pageNumber: 192,
      sectionNumber: '5.5',
      title: 'Dlaczego Niewierna Pamięć Jest Ewolucyjnym Sukcesem?',
      category: 'neuronauka',
      readingTimeMinutes: 14,
      paragraphs: [
        'Gdy dowiadujemy się o zawodności pamięci, pierwszym odruchem jest rozczarowanie: „Dlaczego ewolucja stworzyła tak niedoskonały system?”.',
        'Jednak zdaniem neurobiologów (np. Daniela Schactera, autora „Siedmiu grzechów pamięci”) rekonstrukcyjny charakter pamięci jest genialną adaptacją:',
        '1. Zapobieganie Przeładowaniu: Gdybyśmy pamiętali każdy pojedynczy liść na drzewie i każdy odcień szarości chodnika, nasza kora uległaby paraliżowi informacyjnemu.',
        '2. Abstrakcja i Generalizacja: Pamięć wyciąga sens i regułę ze zdarzeń, pozwalając na stosowanie wiedzy w NOWYCH, niespotykanych dotąd sytuacjach.',
        '3. Elastyczność i Symulowanie Przyszłości: Ten sam system neuronalny (hipokamp i sieć wzbudzeń podstawowych DMN), który służy do odtwarzania przeszłości, służy nam do WYOBRAŻANIA SOBIE PRZYSZŁOŚCI! Gdyby pamięć była sztywnym twardym dyskiem, nie potrafilibyśmy elastycznie planować.'
      ]
    },
    {
      id: 'sec-5-6',
      pageNumber: 198,
      sectionNumber: '5.6',
      title: 'Studium Przypadku: Michał i Spór o Umowę Ustną',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'Michał (35 lat, współwłaściciel agencji kreatywnej) od pół roku pozostawał w ostrym konflikcie ze swoim wspólnikiem.'
      ],
      caseStudyRef: {
        id: 'cs-michal-memory',
        title: 'Konfabulacja Nieświadoma: Jak Zmieniły Się Ustalenia Sprzed Roku',
        subtitle: 'Gdy dwie strony pamiętają absolutnie sprzeczne warunki podziału zysków',
        protagonist: 'Michał, Co-founder (35 lat)',
        context: 'Rozliczenie rocznej dywidendy w firmie na podstawie rozmowy ustnej z kawiarni.',
        story: [
          'Rok wcześniej przy kawiarnianym stoliku Michał i jego wspólnik Paweł uzgadniali zasady premiowania za pozyskanie inwestora. Wtedy ustalili, że ten, kto sprowadzi klienta, otrzyma dodatkowe 15% zysku z projektu.',
          'Przez rok firma się rozrosła, a relacje między wspólnikami uległy ochłodzeniu. Podczas rocznego podsumowania Michał zażądał wypłaty 25% premii. Gdy Paweł ze zdumieniem przypomniał mu o 15%, Michał oburzył się i oskarżył Pawła o oszustwo.',
          'Michał miał przed oczami żywe wspomnienie: kawiarnię, zapach espresso i moment, w którym Paweł przytakuje na kwotę 25%.',
          'Na szczęście Paweł zachował stary, odręczny szkic na serwetce z tamtego dnia, na którym widniała wyraźna cyfra: „15%”. Michał zamarł. Przez rok narastającej niechęci do Pawła jego mózg podświadomie i stopniowo „korygował” kwotę z 15% na 25%, dopasowując poczucie własnej krzywdy do zrekonstruowanego wspomnienia.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Rekonsolidacja pamięci zniekształcona bieżącym stanem emocjonalnym i motywacją finansową (Motivated Remembering).',
          cognitiveBiases: [
            {
              name: 'Efekt Wspierania Decyzji (Choice-Supportive Bias)',
              description: 'Zniekształcenie wspomnień w taki sposób, by pasowały do aktualnego poczucia sprawiedliwości.',
              impact: 'Wywołało fałszywe poczucie pewności prawnej.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Konfabulacja Nieświadoma',
              explanation: 'Wypełnienie luki w pamięci fałszywym detalem bez intencji kłamstwa (utrzymanie spójnego obrazu siebie jako uczciwego wspólnika).'
            }
          ],
          emotionalDynamic: 'Głębokie poczucie bycia oszukanym bazujące na nieistniejącym fakcie.'
        },
        decisionProcessAnalysis: {
          trigger: 'Pytanie o wypłatę rocznej premii.',
          attentionFocus: 'Własne wkład w rozwój firmy i narastająca niechęć do Pawła.',
          interpretation: '„Przecież ustalałem z nim 25%, on próbuje mnie teraz okraść”.',
          emotion: 'Oburzenie i zawiść.',
          impulse: 'Oskarżenie wspólnika o kłamstwo.',
          action: 'Gwałtowna konfrontacja na zebraniu.',
          consequence: 'Kryzys zaufania w zarządzie i kompromitacja po przedstawieniu serwetki.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Hipokamp (Hippocampus)', role: 'Wydobywanie i ponowny zapis śladu pamięciowego', activationState: 'Podatność na rekonsolidację' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Utrudniał chłodne wyodrębnienie pierwotnego kontekstu zebrania.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 100 ms', process: 'Aktywacja śladu pamięciowego z kawiarni połączona z aktualną emocją żalu.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Dokumentowanie ustaleń (Verba volant, scripta manent)', script: 'Wysyłanie e-maila podsumowującego po każdej rozmowie ustnej.', rationale: 'Chroni przed naturalnym falowaniem pamięci obu stron.' }
          ]
        },
        keyTakeaway: 'Nigdy nie polegaj na samej pamięci ustnej przy kluczowych ustaleniach finansowych. Mózg bez trudu zastąpi fakty życzeniową narracją.'
      }
    },
    {
      id: 'sec-5-7',
      pageNumber: 204,
      sectionNumber: '5.7',
      title: 'Podsumowanie Rozdziału 5 i Zwieńczenie Części I',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Przeszliśmy wspólnie przez fascynującą podróż po fundamencie naszej świadomości w Części I:',
        '• W Rozdziale 1 poznaliśmy Podwójny System Przetwarzania (System 1 i 2) oraz 11-etapową mapę decyzji.',
        '• W Rozdziale 2 rozbroiliśmy porwanie emocjonalne, odkrywając szybką i wolną drogę afektu.',
        '• W Rozdziale 3 zobaczyliśmy ograniczenia naszej uwagi, cenę przełączania zadań i ślepotę nieuwagi.',
        '• W Rozdziale 4 udowodniliśmy, że nasza percepcja jest odgórnym modelem predykcyjnym.',
        '• W Rozdziale 5 odsłoniliśmy elastyczny, rekonstrukcyjny charakter naszej pamięci.',
        'Mając ten solidny fundament neurobiologiczny i psychologiczny, jesteśmy gotowi, by przejść do CZĘŚCI II: MYŚLENIE I INTERPRETOWANIE – gdzie przyjrzymy się skrótom myślowym (heurystykom), błędom poznawczym oraz temu, jak nasz umysł buduje poczucie absolutnej pewności na chwiejnych przesłankach!'
      ]
    }
  ]
};

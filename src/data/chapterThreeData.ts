import { Chapter } from '../types/book';

export const chapterThree: Chapter = {
  number: 3,
  title: 'Uwaga',
  subtitle: 'Dlaczego możesz patrzeć i czegoś nie zauważyć?',
  leadParagraph:
    'Co sekundę na Twoje narządy zmysłów opada ponad 11 milionów bitów informacji. Jednak Twój świadomy umysł jest w stanie przetworzyć zaledwie od 40 do 50 bitów na sekundę. Różnica ta stanowi fundament najcenniejszej waluty poznawczej ludzkości: UWAGI. W tym rozdziale odkrywamy, jak działa reflektor naszej świadomości, dlaczego multitasking jest groźną iluzją i dlaczego patrzysz wprost na zjawiska, których zupełnie nie dostrzegasz.',
  totalEstimatedPages: 35,
  sections: [
    {
      id: 'sec-3-1',
      pageNumber: 101,
      sectionNumber: '3.1',
      title: 'Zjawisko Ślepoty Nieuwagi: Niewidzialny Goryl na Środku Boiska',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Nie widzimy świata takim, jaki jest. Widzimy świat takim, jakim pozwala nam go zobaczyć ograniczona szerokość pasma naszej uwagi.',
        author: 'Daniel Simons & Christopher Chabris, "The Invisible Gorilla"'
      },
      paragraphs: [
        'W 1999 roku dwóch psychologów z Uniwersytetu Harvarda, Christopher Chabris i Daniel Simons, przeprowadziło jeden z najsłynniejszych eksperymentów w historii psychologii poznawczej. Badanym przedstawiono krótki film, na którym dwie drużyny – jedna w białych, druga w czarnych koszulkach – podawały do siebie piłki do koszykówki.',
        'Zadanie uczestników brzmiało prosto: „Liczcie po cichu wyłącznie dokładną liczbę podań wykonanych przez zawodników w BIAŁYCH koszulkach”. Po obejrzeniu 60-sekundowego nagrania badacze pytali: „Ile było podań?”. Większość podawała prawidłowy wynik: 15 lub 16. Wtedy padało kluczowe pytanie: „A czy zauważyliście coś niezwykłego na filmie?”.',
        'Około 50% badanych odpowiadało z całkowitym przekonaniem: „Nie, niczego niezwykłego”. Tymczasem w połowie filmu na środku boiska pojawiała się kobieta przebrana w pełny strój goryla. Zatrzymywała się dokładnie w centrum kadrów, uderzała się pięściami w klatkę piersiową przez 9 sekund, po czym spokojnie schodziła z boiska!',
        'Gdy badanym pokazywano film ponownie, tym razem bez polecenia liczenia podań, nie mogli uwierzyć, że przeoczyli tak ewidentny bodziec. Zjawisko to w psychologii nazwano ŚLEPOTĄ NIEUWAGI (Inattentional Blindness). Pokazuje ono w sposób dobitny: fakt, że Twój wzrok jest skierowany na dany obiekt, nie gwarantuje, że Twój mózg stworzy jego świadomą reprezentację!'
      ]
    },
    {
      id: 'sec-3-2',
      pageNumber: 106,
      sectionNumber: '3.2',
      title: 'Anatomia Reflektora: Uwaga Selektywna, Skupiona i Podzielna',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Uwaga nie jest jednolitą strukturą. To złożona sieć neuronalna, składająca się z trzech głównych podsystemów (zgodnie z modelem Michaela Posnera):',
        '1. UWAGA SELEKTYWNA (Selective Attention): Umiejętność wyłowienia konkretnego bodźca z tła pełnego szumu (np. słuchanie głosu rozmówcy w hałaśliwej restauracji – tzw. Efekt Cocktail Party). Reflektor uwagi oświetla wybrany obiekt, przesuwając resztę bodźców w mrok nieświadomości.',
        '2. UWAGA SKUPIONA / PODTRZYMYWANA (Sustained Attention / Vigilance): Zdolność do utrzymania ciągłej czujności i skupienia na jednym zadaniu przez dłuższy czas bez rozpraszania się (np. praca nad skomplikowanym kodem lub długi lot samolotem).',
        '3. UWAGA PODZIELNA (Divided Attention): Zdolność do równoległego przetwarzania informacji z dwóch lub więcej źródeł. Współczesna neurobiologia jednoznacznie dowodzi, że uwaga podzielna jest możliwa TYLKO WTEDY, gdy przynajmniej jedno z zadań jest w pełni zautomatyzowane (np. chodzenie i rozmowa) i nie angażuje zasobów kory przedczołowej.'
      ]
    },
    {
      id: 'sec-3-3',
      pageNumber: 112,
      sectionNumber: '3.3',
      title: 'Mity Multitaskingu i Koszt Przełączania Zadań (Task-Switching Cost)',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wielu współczesnych profesjonalistów z dumą wpisuje w CV umiejętność pracy w trybie „multitaskingu”. Prawda naukowa jest jednak nieubłagana: ludzki mózg NIE POTRAFI wykonywać równolegle dwóch zadań wymagających świadomej kontroli poznawczej.',
        'To, co nazywamy multitaskingiem, w rzeczywistości jest szybkim, seryjnym PRZEŁĄCZANIEM UWAGI (Task Switching) z jednego zadania na drugie. Każde takie przełączenie niesie ze sobą ogromny koszt fizjologiczny i poznawczy:',
        '• Koszt Czasowy (Switching Time Penalty): Za każdym razem, gdy odrywasz wzrok od raportu, by spojrzeć na powiadomienie na Slacku, Twój mózg potrzebuje od kilkunastu sekund do nawet kilkunastu minut, aby w pełni odbudować kontekst roboczy w pamięci operacyjnej.',
        '• Resztki Uwagi (Attention Residue): Badania prof. Sophie Leroy ujawniły, że po przełączeniu uwagi na nowe zadanie część Twoich zasobów poznawczych pozostaje zawieszona w poprzednim wątku. Zjawisko to dramatycznie obniża sprawność analityczną.',
        '• Wyczerpanie Zasobów Glukozy: Przełączanie zadań wywołuje intensywne zużycie glukozy i tlenu w grzbietowo-bocznej korze przedczołowej (dlPFC), prowadząc do szybkiego zmęczenia psychicznego i wzrostu błędów.'
      ],
      subsections: [
        {
          title: 'Koszt Przełączania Zadań',
          paragraphs: [],
          highlightBox: {
            title: 'Fakt Naukowy',
            content: 'Badania pokazały, że ciągłe rozpraszanie powiadomieniami i przełączanie zadań obniża efektywne IQ o około 10–15 punktów – co stanowi spadek dwukrotnie większy niż po przespaniu całej nocy!',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-3-4',
      pageNumber: 118,
      sectionNumber: '3.4',
      title: 'Dwa Tryby Sterowania Uwagi: Odgórny (Top-Down) vs Oddolny (Bottom-Up)',
      category: 'neuronauka',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kto tak naprawdę kieruje reflektorem Twojej uwagi? W naszym mózgu trwa nieustanny wyścig zbrojeń pomiędzy dwoma sieciami neuronalnymi:',
        '1. SIECI ODGÓRNA / CZERWONA (Top-Down Attention / Executive Network): Sterowana przez korę przedczołową i płat ciemieniowy. To świadoma, wolicjonalna kontrola. Włączasz ją, gdy mówisz sobie: „Przez najbliższe 45 minut czytam wyłącznie ten rozdział książki”. Wymaga stałego nakładu energii metabolicznej.',
        '2. SIECI ODDOLNA / AUTOMATYCZNA (Bottom-Up Attention / Salience Network): Sterowana przez wzgórek górny (Superior Colliculus), brzuszne pole ciemieniowo-skroniowe oraz ciało migdałowate. Działa automatycznie na bodźce wyraziste, niespodziewane lub zagrażające: głośny huk, jaskrawa czerwona kropka powiadomienia, ruch w kącie oka, wypowiedzenie Twojego imienia.',
        'Projektanci aplikacji i mediów społecznościowych bezlitośnie wykorzystują oddolny obwód uwagi. Każde powiadomienie pushing z dźwiękiem lub wibracją wywołuje bezwarunkowy odruch orientacyjny, rozbijając odgórną kontrolę kory przedczołowej.'
      ]
    },
    {
      id: 'sec-3-5',
      pageNumber: 124,
      sectionNumber: '3.5',
      title: 'Przykłady z Życia Codziennego: Od Biorącego Udział w Ruchu Drogowym do Szkoły',
      category: 'studium-przypadku',
      readingTimeMinutes: 14,
      paragraphs: [
        'Mechanizmy uwagi kształtują nasze bezpieczeństwo i skuteczność w każdej sferze życia:',
        '• Prowadzenie Samochodu i Telefon: Rozmowa przez zestaw głośnomówiący obniża pole widzenia kierowcy o ponad 30%. Oczy mogą być skierowane na drogę, ale z powodu ślepoty nieuwagi kierowca nie rozpozna hamującego pojazdu ani pieszego na przejściu.',
        '• Smartfon podczas Spotkania: Samo leżenie wyłączonego ekranem do dołu smartfona na stole konferencyjnym obniża dostępną pojemność pamięci roboczej uczestników (badania wykazały tzw. Brain Drain Effect – umysł pożera zasoby na podświadome hamowanie chęci sięgnięcia po telefon).',
        '• Gra Komputerowa vs Nauka: Gry e-sportowe treningują błyskawiczne przełączanie uwagi oddolnej na bodźce wizualne, ale nie budują nawyku długofalowego skupienia odgórnego niezbędnego przy czytaniu literatury naukowej.'
      ]
    },
    {
      id: 'sec-3-6',
      pageNumber: 130,
      sectionNumber: '3.6',
      title: 'Studium Przypadku: Karolina i Rozproszony Dzień Pracy Analityka',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'Karolina (32 lata, starszy analityk danych) miała przed sobą zadanie stworzenia krytycznego raportu prognoz sprzedażowych na kolejny rok.'
      ],
      caseStudyRef: {
        id: 'cs-karolina-attention',
        title: 'Pułapka Mikro-Rozproszeń: Dzień z Życia Analityka',
        subtitle: 'Jak 40 powiadomień zniszczyło głęboką pracę i doprowadziło do błędu rzędu miliona złotych',
        protagonist: 'Karolina, Senior Data Analyst (32 lata)',
        context: 'Przygotowanie modelu predykcyjnego dla zarządu w warunkach otwartego biura (open space) i aktywnego Slacka.',
        story: [
          'Karolina usiadła do pracy o 9:00 z zamiarem skończenia arkusza do 12:00. Jednak co kilka minut na jej pulpicie pojawiały się powiadomienia: komunikat od koleżanki na Slacku („Masz chwilę?”), e-mail o zmianie sali konferencyjnej, wibracja prywatnego telefonu na biurku.',
          'Za każdym razem Karolina odrywała wzrok na 5–10 sekund, odpowiadała na krótko i wracała do formuły w Excelu. Przez całe rano wydawało jej się, że świetnie godzi wszystkie wątki.',
          'O 11:45 wysłała raport. Południu zarząd wykrył, że w kluczowej kolumnie prognozy przychodów zabrakło jednego zera – błąd przesunął prognozę o 900 000 PLN w dół. Karolina nie rozumiała, jak mogła przegapić tak oczywistą pomyłkę.',
          'Gdy przeanalizowano jej logi systemowe, okazało się, że w ciągu 3 godzin jej uwaga została przełączona aż 47 razy. W efekcie nagromadzonego resztkowego zmęczenia uwagi (attention residue) jej kora przedczołowa przestawiła się na autokorektę nawykową i po prostu nie dostrzegła brakującej cyfry.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Ślepota nieuwagi wynikająca z ekstremalnego przeciążenia pamięci roboczej poprzez wywołane środowiskowo ciągłe przełączanie zadań.',
          cognitiveBiases: [
            {
              name: 'Złudzenie Kontroli (Illusion of Control)',
              description: 'Przekonanie Karoliny, że mikroszybkie odpowiadanie na e-maile nie wpływa na jakość analityczną pracy.',
              impact: 'Uniemożliwiło wyłączenie powiadomień na czas pracy głębokiej.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Racjonalizacja (Rationalization)',
              explanation: '„Muszę być stale dostępna na komunikatorze, bo inaczej uzna mnie się za nieefektywną” (usprawiedliwienie rezygnacji ze skrajnej higieny poznawczej).'
            }
          ],
          emotionalDynamic: 'Stałe, ciche podniecenie dopaminowe przy odbieraniu powiadomień przeplatane rosnącym wyczerpaniem.'
        },
        decisionProcessAnalysis: {
          trigger: 'Dźwięk powiadomienia na Slacku w trakcie wpisywania formuły.',
          attentionFocus: 'Czerwona kropka powiadomienia i treść pytania koleżanki.',
          interpretation: '„Szybko odpiszę, to zajmie tylko 5 sekund i wrócę do liczenia”.',
          emotion: 'Krótki impuls dopaminowej ciekawości.',
          impulse: 'Przełączenie okna aplikacji.',
          action: 'Napisanie odpowiedzi i powrót do Excela z utraconym kontekstem.',
          consequence: 'Niezauważenie błędu w skali liczbowej i utrata reputacji przed zarządem.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'dlPFC (Grzbietowo-boczna kora przedczołowa)', role: 'Pamięć robocza i holding wskaźników finansowych', activationState: 'Kompulsywne przeczyszczanie bufora' },
            { region: 'Salience Network (Sieć Istotności)', role: 'Przechwytywanie uwagi przez bodźce oddolne', activationState: 'Ciągła nadaktywność' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Uwalniana przy każdym powiadomieniu, wzmacniająca nawyk odrywania się od pracy.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 100 ms', process: 'Dźwięk powiadomienia aktywuje wzgórek górny i odruch orientacyjny.' },
            { timeMs: '500 ms', process: 'Zawartość bufora pamięci roboczej zostaje zastąpiona nową treścią.' },
            { timeMs: '15 - 25 min', process: 'Czas potrzebny na pełne odtworzenie stanu głębokiej koncentracji po rozproszeniu.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Bloki Pracy Głębokiej (Time Blocking)', script: 'Wyłączenie Slacka i poczty na 90-minutowy blok nieprzerwanej pracy analitycznej.', rationale: 'Eliminuje przełączanie zadań i oszczędza pamięć roboczą.' }
          ]
        },
        keyTakeaway: 'Uwaga jest zasobem skończonym. Praca w ciągłym rozproszeniu daje złudzenie wysokiej produktywności przy jednoczesnym drastycznym spadku jakości decyzji.'
      }
    },
    {
      id: 'sec-3-7',
      pageNumber: 136,
      sectionNumber: '3.7',
      title: 'Podsumowanie Rozdziału 3 i Most do Rozdziału 4',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Uwaga jest bramą do naszej świadomości. W tym rozdziale udowodniliśmy, że nasza zdolność przetwarzania równoległego jest iluzją, a koszt przełączania zadań niszczy jakość naszych decyzji i powoduje ślepotę nieuwagi.',
        'Ale gdy uwaga skieruje swój reflektor na dany bodziec i prześle go dalej do wyższych pięter mózgu – co dokładnie dzieje się z tą informacją? Czy widzimy świat w jego surowej, obiektywnej postaci?',
        'Odkryjesz, że to, co nazywasz „widzeniem” lub „słyszeniem”, jest skomplikowaną konstrukcją psychiczną. Zapraszamy do Rozdziału 4: PERCEPCJA.'
      ]
    }
  ]
};

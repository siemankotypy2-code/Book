import { Chapter } from '../types/book';

export const chapterTwo: Chapter = {
  number: 2,
  title: 'Porwanie Emocjonalne',
  subtitle: 'Dlaczego czasami emocja pojawia się szybciej niż myśl?',
  leadParagraph:
    'Zanim zdążysz wypowiedzieć jedno logiczne zdanie, Twoje serce zaczyna walić jak młot, dłonie stają się wilgotne, a w klatce piersiowej rozlewa się ścisk. Dlaczego rewolucje psychiczne i fizjologiczne wybuchają w ułamku sekundy, wyprzedzając chłodny namysł? W tym rozdziale odsłaniamy mechanizmy porwania emocjonalnego, rozbrajając mit, że emocje są wrogiem rozumu.',
  totalEstimatedPages: 38,
  sections: [
    {
      id: 'sec-2-1',
      pageNumber: 53,
      sectionNumber: '2.1',
      title: 'Sygnał Odrzucenia: Wiadomość „Musimy porozmawiać”',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Emocje to nie błędy w oprogramowaniu naszego mózgu. To pierwotne, genialne ewolucyjnie programy przetrwania, które niekiedy działają na przestarzałych danych.',
        author: 'Joseph LeDoux, "Synaptic Self"'
      },
      paragraphs: [
        'Jest wtorkowe popołudnie. Marta siedzi przed monitorem komputera, dopracowując kwartalny zestawienie finansowe dla klienta. W tle cicho szumi klimatyzacja biurowa. Nagle w prawym dolnym rogu ekranu pojawia się cicha powiadomienie z komunikatora służbowego. Nadawca: Dyrektor Operacyjny. Treść zwięzła i bezżadnych ozdobników: „Marta, wejdź do mojego gabinetu za 10 minut. Musimy porozmawiać.”',
        'Zanim umysł Marty zdąży postawić racjonalne pytanie: „Co dokładnie jest w agendzie?”, jej ciało reaguje błyskawiczną kaskadą hormonalną. Serce przyspiesza z 72 do 110 uderzeń na minutę. W ustach pojawia się suchość, a żołądek zaciska się w twardą pięść. W ciągu zaledwie 180 milisekund – zanim jakakolwiek świadoma myśl zdąży uformować się w korze przedczołowej – os podwzgórze-przysadka-nadnercza (HPA) wpompowuje do jej krwiobiegu pokaźną dawkę noradrenaliny i adrenaliny.',
        '„Coś schrzaniłam. Pewnie wykryli błąd w bilansie. Będą chcieli ze mną rozwiązać umowę” – podpowiada natychmiast wewnętrzny głos. W ułamku sekundy świat Marty kurczy się do scenariusza przetrwania. Cały kunszt analityczny, znajomość przepisów podatkowych i chłodny profesjonalizm znikają, ustępując miejsca pierwotnej chęci ucieczki lub poddania się. Marta stała się właśnie obiektem klasycznego porwania emocjonalnego (Emotional Hijacking).'
      ],
      subsections: [
        {
          title: 'Definicja Porwania Emocjonalnego',
          paragraphs: [
            'Pojęcie porwania limbicznolimbicznego (często nazywanego porwaniem ciała migdałowatego) zostało wprowadzone do psychologii przez Daniela Golemana. Oznacza ono sytuację, w której układ limbiczny – w szczególności ciało migdałowate (amygdala) – przejmuje kontrolę nad zachowaniem i fizjologią organizmu zanim wyższe ośrodki kory nowej zdołają w pełni przeanalizować spływające bodźce.',
            'Porwanie to nie jest oznaką choroby psychicznej ani braku silnej woli. To precyzyjnie oszlifowany przez miliony lat ewolucji mechanizm obronny. Problem polega na tym, że nasz układ nerwowy traktuje e-mail od szefa, publiczną krytykę czy brak odpowiedzi na SMS-a z tą samą powagą fizjologiczną, z jaką nasi przodkowie traktowali wstrząs w zaroślach zwiastujący ataki drapieżnika.'
          ],
          highlightBox: {
            title: 'Wgląd Neurobiologiczny',
            content: 'Czas potrzebny bodźcowi sensorycznemu na dotarcie do ciała migdałowatego drogą niską (ze wzgórza bezpośrednio do amygdali) wynosi zaledwie 12–15 milisekund. Dotarcie tego samego sygnału drogą wysoką (przez korę czuciową do kory przedczołowej) zajmuje około 300 milisekund. Oznacza to, że cieleśnie reagujesz na zagrożenie dwa razy szybciej niż świadomie je rozumiesz!',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-2-2',
      pageNumber: 58,
      sectionNumber: '2.2',
      title: 'Taksonomia Stanów Afektywnych: Emocja, Nastrój, Pobudzenie i Zachowanie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W potocznym języku pojęcia „emocja”, „nastrój”, „uczucie” i „pobudzenie” używane są zamiennie. Gdy mówimy: „jestem w złym nastroju”, „czuję złość” albo „jestem zestresowany”, często opisujemy zupełnie różne procesy neurobiologiczne. Aby nauczyć się regulować stany wewnętrzne, musimy najpierw wprowadzić ścisłą taksonomię naukową.',
        '1. Pobudzenie fizjologiczne (Arousal): To poziom aktywacji obwodowego układu nerwowego (współczulnego vs przywspółczulnego). Mierzy się je tętnem, przewodnictwem skóry (GSR), rozszerzeniem źrenic i napięciem mięśniowym. Pobudzenie może być wysokie (np. podczas biegu lub paniki) albo niskie (podczas snu lub głębokiej relaksacji), ale samo w sobie jest neutralne wartościująco.',
        '2. Emocja (Emotion): To rzutki, krótkotrwały (trwający od kilku sekund do kilku minut) kompleksowy wzorzec reakcji biopsychicznej na konkretny bodziec. Składa się z subiektywnego odczucia afektywnego, reakcji fizjologicznej oraz wyrazu ekspresyjnego (twarz, głos, postawa). Emocja zawsze ma swój obiektywny wyzwalacz.',
        '3. Nastrój (Mood): To tło afektywne o niższym natężeniu, ale znacznie dłuższym czasie trwania (godziny, dni, a nawet tygodnie). Nastrój często nie ma jednego, jasno zidentyfikowanego wyzwalacza. Stanowi racjonalne uśrednienie naszej kondycji biologicznej, zasobów oraz doświadczeń.',
        '4. Zachowanie (Behavior): To widoczna na zewnątrz, obiektywna reakcja motoryczna lub słowna. Kluczowa zasada neurobiologii brzmi: Emocja tworzy silny IMPULS do zachowania, ale sama emocja NIE JEST zachowaniem. Między odczuciem złości a uderzeniem pięścią w stół istnieje przestrzeń decyzyjna.'
      ]
    },
    {
      id: 'sec-2-3',
      pageNumber: 64,
      sectionNumber: '2.3',
      title: 'Architektura Reakcji: Model Bodziec → Ocena → Emocja → Pobudzenie → Impuls',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Tradycyjny model potoczny zakłada liniowość: wydarza się coś złego → automatycznie czuję złość → muszę wybuchnąć. Współczesna psychologia poznawczo-afektywna (model Richarda Lazarusa i Klausa Scherera) pokazuje jednak, że między bodźcem a emocją znajduje się kluczowy ogniwo: OCENA POZNAWCZA (Cognitive Appraisal).',
        'Nie sam bodziec wywołuje emocję, lecz ZNACZENIE, jakie nasz mózg przypisuje danemu bodźcowi w kontekście naszych celów, wartości, lęków i bezpieczeństwa.',
        'Oto sekwencja, która zachodzi w ułamku sekundy:'
      ],
      subsections: [
        {
          title: 'Sekwencja 6 Etapów Reakcji Emocjonalnej',
          paragraphs: [
            'Etap 1: BODZIEC (Stimulus) – Odczyt sensoryczny ze środowiska zewnętrznego (np. sygnał dźwiękowy wiadomości, wyraz twarzy rozmówcy) lub wewnętrznego (np. wspomnienie, kłucie w klatce piersiowej).',
            'Etap 2: PIERWOTNA OCENA POZNAWCZA (Primary Appraisal) – Podświadome pytanie mózgu: „Czy to jest dla mnie bezpieczne, czy zagraża mojemu dobrostanowi/statusowi/przetrwaniu?”.',
            'Etap 3: EMOCJA (Emotional Affect) – Wyzwolenie konkretnego stanu afektywnego (np. strach, złość, wstyd, radość).',
            'Etap 4: POBUDZENIE FIZJOLOGICZNE (Physiological Arousal) – Mobilizacja zasobów ciała przez autonomiczny układ nerwowy (wyrzut hormonów, zmiana tętna i oddychania).',
            'Etap 5: IMPULS (Action Tendency) – Gotowość do określonego działania (np. chęć ucieczki, ataku, przypodobania się lub znieruchomienia).',
            'Etap 6: ŚWIADOME DZIAŁANIE (Conscious Action) – Ostateczny wybór zachowania, wynegocjowany pomiędzy impulsem limbicznym a kontrolą wykonawczą kory przedczołowej.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-4',
      pageNumber: 71,
      sectionNumber: '2.4',
      title: 'Emocja jako Funkcja Adaptacyjna: Dlaczego Nie Istnieją „Złe” Emocje',
      category: 'neuronauka',
      readingTimeMinutes: 14,
      paragraphs: [
        'W zachodniej kulturze przez stulecia panował szkodliwy podział na emocje „dobre” (radość, spokój, wdzięczność) oraz emocje „złe” lub „destrukcyjne” (strach, złość, smutek, zazdrość, wstyd). Współczesna psychologia ewolucyjna odrzuca ten manichejski podział. Każda podstawowa emocja stanowi wyspecjalizowany program adaptacyjny, zaprojektowany do rozwiązywania konkretnych problemów przetrwania.',
        '• STRACH (Fear): Mobilizuje organizm do unikania lub ucieczki przed bezpośrednim niebezpieczeństwem. Wyostrza uwagę na sygnały zagrożenia.',
        '• ZŁOŚĆ (Anger): Reakcja na przekroczenie granic, niesprawiedliwość lub przeszkodę na drodze do celu. Dostarcza energii metabolicznej do obrony własnego terytorium i praw.',
        '• SMUTEK (Sadness): Sygnał utraty wartościowego zasobu lub relacji. Zmusza organizm do spowolnienia, wycofania się i oszczędzania energii oraz sygnalizuje otoczeniu potrzebę wsparcia społeczne.',
        '• WSTYD (Shame): Chroni przed wykluczeniem z grupy społecznej (co w toku ewolucji oznaczało śmierć). Sygnalizuje ryzyko utraty reputacji i wymusza dostosowanie się do norm plemiennych.',
        '• RADOŚĆ I NAGRODA (Joy & Reward): Utwalają zachowania sprzyjające przetrwaniu (zdobycie pożywienia, nawiązanie więzi, sukces produktywny).'
      ],
      subsections: [
        {
          title: 'Zasada Podwójnej Prawdy',
          paragraphs: [
            'Aby bezpiecznie nawigować w świecie emocji, musimy zrealizować dwie z pozoru sprzeczne prawdy:',
            '1. EMOCJA ≠ BŁĄD. Twoja emocja jest zawsze autentyczną i uzasadnioną reakcją biologiczna na sposób, w jaki Twój mózg zinterpretował sytuację w danej milisekundzie. Zmuszanie się do słowami „nie powinienem czuć złości” jest biologicznie niedorzeczne.',
            '2. EMOCJA ≠ AUTOMATYCZNA PRAWDA O RZECZYWISTOŚCI. To, że czujesz przerażenie, nie oznacza, że sytuacja jest obiektywnie śmiertelna. To, że czujesz złość, nie oznacza automatycznie, że druga strona miała złośliwe intencje. Emocja jest informacją o stanie Twojego umysłu, a nie niezbiwalnym dowodem w sprawie.'
          ],
          highlightBox: {
            title: 'Kluczowa Zasada Mądrości Emocjonalnej',
            content: 'Traktuj swoje emocje jak kontrolki na desce rozdzielczej samochodu. Zapalona kontrolka niskiego poziomu oleju nie jest wrogiem silnika – informuje o stanie układu. Ale zjechanie do mechanika nie oznacza, że musisz spalić auto!',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-2-5',
      pageNumber: 78,
      sectionNumber: '2.5',
      title: 'Anatomia Porwania: Dwie Drogi Przetwarzania w Mózgu',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wybitny neurobiolog Joseph LeDoux z New York University odkrył, w jaki sposób mózg przetwarza bodźce o potencjalnym ładunku emocjonalnym. Badania ujawniły istnienie dwóch równoległych szlaków neuronalnych:',
        '1. Droga Niska (The Low Road – krótka, szybka, niedokładna): Bodziec wzrokowy lub słuchowy trafia ze zmysłów do WZGÓRZA (Thalamus). stamtąd bezpośrednio, omijając korę mózgową, jedzie wąskim pęczkiem aksonów do CIAŁA MIGDAŁOWATEGO. Ta droga trwa zaledwie 12–15 milisekund. Nie zapewnia szczegółowej analizy obrazu, ale błyskawicznie uruchamia odpowiedź obronną. To dzięki niej odskakujesz od czarnej gałęzi w lesie, zanim uświadomisz sobie, że to nie wąż.',
        '2. Droga Wysoka (The High Road – długa, wolna, precyzyjna): Równolegle ten sam sygnał ze wzgórza wędruje do odpowiednich pól KORY CZUCIOWEJ (np. wzrokowej w płacie potylicznym), a następnie do KORY PRZEDCZOŁOWEJ (dlPFC). Kora dokonywać precyzyjnego montażu danych, analizuje kontekst, wspomnienia i po 300 milisekundach wysyła komendę korygującą: „Spokojnie, to tylko zwiędła gałąź, nie żmija”.'
      ]
    },
    {
      id: 'sec-2-6',
      pageNumber: 84,
      sectionNumber: '2.6',
      title: 'Strategie Regulacji Emocji: Reewaluacja vs Tłumienie',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Skoro emocje pojawiają się automatycznie, jak możemy odzyskać nad nimi sprawczość? Wybitna badaczka James Gross z Stanford University opracowała Procesowy Model Regulacji Emocji. Kluczowe rozróżnienie dotyczy dwóch najczęstszych strategii:',
        'A. TŁUMIENIE EKSPRESJI (Expressive Suppression): Polega na próbie ukrycia, zahamowania lub zablokowania uzewnętrzniania emocji, gdy ta już wybuchła (np. zagryzanie warg, udawanie niewzruszonego). Badania fMRI pokazują, że tłumienie NIE ZMNIEJSZA pobudzenia ciała migdałowatego, a wręcz zwiększa aktywację układu współczulnego, podnosi ciśnienie krwi i obciąża pamięć roboczą.',
        'B. REEWALUACJA POZNAWCZA (Cognitive Reappraisal): Polega na świadomej zmianie interpretacji sytuacji, ZANIM reakcja emocjonalna osiągnie punkt szczytowy (np. „Przełożony prosi o rozmowę, ponieważ chce przydzielić mi nowy projekt, a nie dlatego, że chce mnie zwolnić”). Reewaluacja skutecznie wycisza ciało migdałowate i obniża pobudzenie fizjologiczne.'
      ],
      subsections: [
        {
          title: 'Technika Etykietowania Afektu (Affect Labeling)',
          paragraphs: [
            'Jednym z najprostszych i najsilniej przebadanych narzędzi osłabiania porwania emocjonalnego jest proste nazwanie własnego stanu wewnętrznego. Badania Matthew Liebermana z UCLA wykazały, że wypowiedzenie w myśli lub na głos precyzyjnego słowa opisującego stan (np. „Czuję obawę przed odrzuceniem”, „To jest złość na brak szacunku”) wywołuje natychmiastowy spadek aktywności w ciele migdałowatym.',
            'Mechanizm ten działa poprzez aktywację prawej brzuszno-bocznej kory przedczołowej (rvPFC), która działa jak biologiczny hamulec dla struktury limbicznej. Gdy nazywasz emocję, przenosisz aktywność z automatycznego układu czuciowego do struktury pojęciowej.'
          ],
          highlightBox: {
            title: 'Narzędzie Praktyczne',
            content: 'Gdy czujesz rosnący impuls emocjonalny, zastosuj regułę „Name It to Tame It” (Nazwij, aby oswoić): Powiedz sobie w myśli dwukrotnie: „Zauważam w sobie uczucie złości/lęku”. Użycie słowa „Zauważam” tworzy dystans poznawczy.',
            type: 'exercise'
          }
        }
      ]
    },
    {
      id: 'sec-2-7',
      pageNumber: 90,
      sectionNumber: '2.7',
      title: 'Studium Przypadku: Pętla Reaktywności Tomasza na Zebraniu Zespołu',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przeanalizujmy szczegółowo sytuację Tomasza (38-letniego kierownika projektu IT), który podczas cotygodniowego zebrania zarządu doświadczył nagłego porwania emocjonalnego w odpowiedzi na uwagę młodszego programisty.'
      ],
      caseStudyRef: {
        id: 'cs-tomasz-meeting',
        title: 'Atak na Kompetencje: Porwanie Emocjonalne na Żywo',
        subtitle: 'Jak niewinna uwaga techniczna uruchomiła obwód zagrożenia egzystencjalnego',
        protagonist: 'Tomasz, Senior Project Manager (38 lat)',
        context: 'Prezentacja nowego harmonogramu wdrożenia systemu przed zarządem spółki.',
        story: [
          'Tomasz kończył omówienie slajdu dotyczącego terminów oddania modułu płatności. W tym momencie młodszy architekt o imieniu Łukasz podniósł rękę i powiedział spokojnym tonem: „Tomasz, ten harmonogram nie uwzględnia nowej dyrektywy bezpieczeństwa API. Jeśli wdrożymy to w tym kształcie, system wyłoży się przy pierwszym audycie.”',
          'W ułamku sekundy krew uderzyła Tomaszowi do głowy. Uszy zrobiły się gorące. W oczach zarządu Tomasz odczytał – jak mu się wydawało – pobłażliwe uśmieszki. Jego ciało migdałowate zaklasyfikowało wypowiedź Łukasza nie jako wsparcie merytoryczne, lecz jako publiczny zamach na jego pozycję i autorytet zawodowy.',
          'Zamiast powiedzieć: „Dzięki Łukasz za uwagę, sprawdźmy te dyrektywę po zebraniu”, Tomasz wyprostował się gwałtownie, podniósł głos i odpowiedział z wyraźną irytacją: „Łukasz, od trzech tygodni proszę cię o aktualne wytyczne na Slacku i nic nie wysłałeś! Teraz nagle wyskakujesz z tym na zarządzie? Może najpierw zacznij wykonywać swoje podstawowe obowiązki!”',
          'W sali zapadła głucha, krępująca cisza. Członkowie zarządu spuścili wzrok. Po zebraniu Tomasz wrócił do gabinetu z poczuciem ogromnego kwasu i wstydu.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Porwanie emocjonalne wywołane zagrożeniem statusu społecznego (SCARF model: Status & Certainty threat). Tomasz zinterpretował informację o błędzie technicznym jako komunikat: „Jesteś niekompetentny i bezwartościowy”.',
          cognitiveBiases: [
            {
              name: 'Personalizacja (Personalization)',
              description: 'Przypisanie wypowiedzi technicznej Łukasza złośliwej intencji ukierunkowanej na zniszczenie reputacji Tomasza.',
              impact: 'Uniemożliwiła chłodną analizę faktu i przeniosła dyskusję na płaszczyznę Personalną.'
            },
            {
              name: 'Myślenie Tunelowe (Tunnel Vision)',
              description: 'Odcęcie widzenia kontekstu zebrania pod wpływem wysokiego pobudzenia noradrenalinowego.',
              impact: 'Skupienie całej uwagi wyłącznie na rzekomym ataku i braku odwrotu.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Projekcja i Kontratak (Projection & Fight Response)',
              explanation: 'Przeniesienie odpowiedzialności na Łukasza poprzez zaatakowanie jego sumienności na Slacku (ochrona chwiejnej samooceny przed poczuciem wstydu).'
            }
          ],
          emotionalDynamic: 'Gwałtowny skok z poczucia pewności siebie w głęboki lęk przed kompromitacją, natychmiast zamieniony w defensywną złość.'
        },
        decisionProcessAnalysis: {
          trigger: 'Krytyczna wypowiedź Łukasza o braku uwzględnienia dyrektywy API.',
          attentionFocus: 'Zmarszczone brwi członka zarządu i wyobrażenie własnej kompromitacji.',
          interpretation: '„On chce mnie publicznie poniżyć i podważyć moje kompetencje przed szefami”.',
          emotion: 'Piekący wstyd błyskawicznie przepalony w defensywną wściekłość.',
          impulse: 'Zniszczyć wiarygodność krytyka i odzyskać dominację w sali.',
          action: 'Słowny atak ad hominem na Łukasza dotyczący opóźnień na Slacku.',
          consequence: 'Utrata twarzy w oczach zarządu, zniszczenie zaufania w zespole i kac moralny.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ciało Migdałowate (Amygdala)', role: 'Wykrycie zagrożenia statusu i aktywacja osi HPA', activationState: 'Ekstremalna nadaktywność' },
            { region: 'dlPFC (Kora Przedczołowa)', role: 'Chłodna kontrola wykonawcza i hamowanie impulsów', activationState: 'Wyłączenie / Hypoaktywność' },
            { region: 'dACC (Kora Zakrętu Obręczy)', role: 'Rejestracja bólu społecznego odrzucenia', activationState: 'Wysoka aktywacja' }
          ],
          neurotransmitters: [
            { name: 'Noradrenalina', roleInScenario: 'Spowodowała zwężenie pola uwagi i reakcję walcz-lub-uciekaj.' },
            { name: 'Kortyzol', roleInScenario: 'Podtrzymał podwyższone tętno i czujność przez kolejne godziny po wydarzeniu.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 15 ms', process: 'Sygnał słuchowy trafia ze wzgórza do ciała migdałowatego.' },
            { timeMs: '50 ms', process: 'Wyrzut noradrenaliny ze miejsca sinawego (Locus Coeruleus).' },
            { timeMs: '200 ms', process: 'Tętno rośnie o 35 uderzeń/min, mięśnie karku ulegają usztywnieniu.' },
            { timeMs: '800 ms', process: 'Tomasz wypowiada pierwsze agresywne słowo zanim kora przedczołowa zdoła zahamować wypowiedź.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Pauza Oddechowa', script: 'Przełknij ślinę, poczuj stopy na podłodze, weź głęboki wydech.', rationale: 'Stymuluje nerw błędny i przywraca kontrolę przywspółczulną.' },
            { step: 'Krok 2: Parafraza Zadaniowa', script: '„Łukasz, podajesz ważny punkt techniczny. Upewnijmy się, że dobrze rozumiem: chodzi o zgodność z dyrektywą X, tak?”', rationale: 'Przenosi rozmowę z poziomu statusu na poziom faktów merytorycznych.' }
          ]
        },
        keyTakeaway: 'Atak słowny pod wpływem emocji prawie nigdy nie dotyczy sytuacji bieżącej – jest rozpaczliwą obroną ego przed poczuciem bezradności lub wstydu.'
      }
    },
    {
      id: 'sec-2-8',
      pageNumber: 97,
      sectionNumber: '2.8',
      title: 'Podsumowanie Rozdziału 2 i Most do Rozdziału 3',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'W tym rozdziale zgłębiliśmy naturę porwania emocjonalnego. Wiemy już, że emocje to zaawansowane ewolucyjnie programy adaptacyjne, a nie błędy logiczne. Kluczem do sprawczości nie jest bezawaryjne tłumienie uczuć, lecz rozumienie kaskady Bodziec → Ocena → Emocja → Pobudzenie → Impuls oraz umiejętność stosowania reewaluacji poznawczej i pauzy oddechowej.',
        'Jednak emocje i ich wyzwalacze nie działają w próżni. Zanim jakikolwiek bodziec wywoła w nas reakcję afektywną lub ocenę wartościującą, nasz mózg musi go wpierw wyłowić z nieustannego szumu informacji sensorycznych.',
        'Dlaczego jedne bodźce przyciągają nasz wzrok natychmiast, a inne ignorujemy, nawet patrząc bezpośrednio na nie? Jak powiadomienia w telefonie i koncepcja wielozadaniowości (multitaskingu) drenażują nasze zasoby poznawcze? Na te pytania odpowiada Rozdział 3: UWAGA.'
      ]
    }
  ]
};

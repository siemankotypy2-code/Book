import { Chapter, ExamQuestion } from '../types/book';

export const chapterThreeExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W eksperymencie Simonsa i Chabrisa z „Niewidzialnym Gorylem” (Sekcja 3.1) około 50% badanych nie zauważyło postaci goryla. Dlaczego?',
    topic: 'Ślepota Nieuwagi',
    sectionRef: 'Sekcja 3.1',
    options: [
      { label: 'A', text: 'Ponieważ ich wzrok był odwrócony od ekranu.', isCorrect: false },
      { label: 'B', text: 'Z powodu ślepoty nieuwagi (Inattentional Blindness) — ich świadome zasoby uwagi były w 100% zaangażowane w wymagające zadanie liczenia podań zawodników w bieli.', isCorrect: true },
      { label: 'C', text: 'Postać goryla była przezroczysta i nie generowała fotonów.', isCorrect: false },
      { label: 'D', text: 'Badani mieli uszkodzenie kory potylicznej.', isCorrect: false }
    ],
    explanation: 'Skierowanie wzroku na obiekt nie jest tożsame z jego percepcją. Jeśli uwaga odgórna jest maksymalnie zaangażowana w inne zadanie, bodźce z tła — nawet tak wyraziste jak goryl — nie uzyskują dostępu do świadomości.',
    keyTakeaway: 'Patrzeć nie oznacza widzieć. Widzimy tylko to, na co kierujemy uwagę.'
  },
  {
    id: 2,
    question: 'Dlaczego neuronauka odrzuca pojęcie równoległego multitaskingu przy zadaniach wymagających kontroli poznawczej?',
    topic: 'Mit Multitaskingu',
    sectionRef: 'Sekcja 3.3',
    options: [
      { label: 'A', text: 'Ponieważ kora przedczołowa potrafi przetwarzać równolegle miliony operacji naraz.', isCorrect: false },
      { label: 'B', text: 'Ponieważ to, co nazywamy multitaskingiem, jest w istocie szybkim, seryjnym PRZEŁĄCZANIEM UWAGI (Task Switching), które niesie za sobą koszt czasowy, błędy i spadek efektywnego IQ.', isCorrect: true },
      { label: 'C', text: 'Ponieważ multitasking jest możliwy tylko dla mężczyzn.', isCorrect: false },
      { label: 'D', text: 'Ponieważ mózg wyłącza się całkowicie przy próbie zrobienia dwóch rzeczy naraz.', isCorrect: false }
    ],
    explanation: 'Dwa zadania zautomatyzowane (np. żucie gumy i marsz) mogą biec równolegle. Dwa zadania angażujące pamięć roboczą i korę przedczołową (np. pisanie maila i słuchanie rozmowy) wymuszają gwałtowne skakanie uwagi.',
    keyTakeaway: 'Multitasking w pracy umysłowej to tylko iluzja, która drenuje mózg z glukozy.'
  },
  {
    id: 3,
    question: 'Czym jest zjawisko „Resztek Uwagi” (Attention Residue) odkryte przez prof. Sophie Leroy?',
    topic: 'Resztki Uwagi',
    sectionRef: 'Sekcja 3.3',
    options: [
      { label: 'A', text: 'Fizycznym kurzem gromadzącym się na powierzchni oka.', isCorrect: false },
      { label: 'B', text: 'Stanem, w którym po przerwaniu zadania A i przejściu do zadania B część zasobów poznawczych pozostaje zawieszona w poprzednim wątku, obniżając sprawność myślenia.', isCorrect: true },
      { label: 'C', text: 'Zdolnością do natychmiastowego zapominania wszystkich problemów.', isCorrect: false },
      { label: 'D', text: 'Zjawiskiem występującym wyłącznie po spożyciu kofeiny.', isCorrect: false }
    ],
    explanation: 'Nawet 5-sekundowe spojrzenie na powiadomienie ze Slacka zostawia „resztki uwagi”. Umysł podświadomie przetwarza komunikat, przez co powrót do pełnego skupienia nad raportem zajmuje od kilkunastu minut.',
    keyTakeaway: 'Każde mikro-rozproszenie kradnie nie tylko sekundy, ale jakość kolejnych minut.'
  },
  {
    id: 4,
    question: 'Czym różni się uwaga ODGÓRNA (Top-Down) od uwagi ODDOLNEJ (Bottom-Up)?',
    topic: 'Dwa Tryby Uwagi',
    sectionRef: 'Sekcja 3.4',
    options: [
      { label: 'A', text: 'Odgórna jest wolicjonalna, kontrolowana przez korę przedczołową i nakierowana na cel, podczas gdy oddolna jest automatyczna, sterowana bodźcami wyrazistymi (np. huk, czerwone powiadomienie).', isCorrect: true },
      { label: 'B', text: 'Odgórna działa tylko w nocy, a oddolna w dzień.', isCorrect: false },
      { label: 'C', text: 'Oddolna wymaga zażywania suplementów diety.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy funkcjonalnej.', isCorrect: false }
    ],
    explanation: 'Projektanci powiadomień i social mediów celowo atakują uwagę oddolną (czerwone badge, dźwięki dzwonka), aby bezlitośnie przełamać wolną wolę odgórnej sieci wykonawczej.',
    keyTakeaway: 'Albo ty sterujesz reflektorem odgórnie, albo algorytmy przejmą go oddolnie.'
  },
  {
    id: 5,
    question: 'W eksperymencie George\'a Sperlinga nad pamięcią ikoniczną (Sekcja 3.5) wykazano, że:',
    topic: 'Pamięć Ikoniczna vs Świadomy Dostęp',
    sectionRef: 'Sekcja 3.5',
    options: [
      { label: 'A', text: 'Ludzie pamiętają wszystko, co widzieli od urodzenia.', isCorrect: false },
      { label: 'B', text: 'Zmysły rejestrują w ułamku sekundy ogromną ilość danych (obraz ikoniczny), ale wąskie gardło uwagi pozwala przenieść do pamięci roboczej zaledwie 4–5 elementów.', isCorrect: true },
      { label: 'C', text: 'Wzrok ludzki nie potrafi odczytać liter wyświetlanych krócej niż 10 sekund.', isCorrect: false },
      { label: 'D', text: 'Pamięć ikoniczna znajduje się w rdzeniu kręgowym.', isCorrect: false }
    ],
    explanation: 'Pamięć ikoniczna ma dużą pojemność, ale gaśnie w ciągu 250–500 ms. Świadomość widzi tylko to, co reflektor uwagi zdoła w tym ułamku sekundy przepchnąć do bufora roboczego.',
    keyTakeaway: 'Rejestracja sensoryczna jest szeroka, ale świadomy dostęp — mikroskopijnie wąski.'
  },
  {
    id: 6,
    question: 'Na czym polega zjawisko Ślepoty na Zmiany (Change Blindness) zbadane m.in. przez Simonsa i Levina (eksperyment z drzwiami)?',
    topic: 'Ślepota na Zmiany',
    sectionRef: 'Sekcja 3.6',
    options: [
      { label: 'A', text: 'Na nagłej utracie widzenia barw po przekroczeniu progu drzwi.', isCorrect: false },
      { label: 'B', text: 'Na trudności w zauważeniu istotnej zmiany w otoczeniu (np. podmiany rozmówcy na inną osobę za przechodzącymi drzwiami), jeśli zmianie towarzyszy krótkie zakłócenie wzrokowe.', isCorrect: true },
      { label: 'C', text: 'Na lęku przed zmianą pracy.', isCorrect: false },
      { label: 'D', text: 'Na niechęci do remontów mieszkań.', isCorrect: false }
    ],
    explanation: 'Ponad połowa przechodniów nie zauważyła, że po tym, jak między nimi a pytającym o drogę przeszli robotnicy niosący drzwi, pytający został podmieniony na zupełnie innego człowieka!',
    keyTakeaway: 'Nasz mózg zakłada ciągłość świata i nie odświeża każdego detalu klatka po klatce.'
  },
  {
    id: 7,
    question: 'Dlaczego samo leżenie wyłączonego ekranem do dołu smartfona na biurku obniża sprawność poznawczą (tzw. Brain Drain Effect)?',
    topic: 'Brain Drain Effect',
    sectionRef: 'Sekcja 3.7',
    options: [
      { label: 'A', text: 'Ponieważ smartfon emituje promieniowanie niszczące neurony w odległości 2 metrów.', isCorrect: false },
      { label: 'B', text: 'Ponieważ kora przedczołowa musi nieustannie zużywać zasoby glukozy na aktywne hamowanie nawykowego odruchu sięgnięcia po urządzenie.', isCorrect: true },
      { label: 'C', text: 'Ponieważ ekran telefonu odbija światło żarówek biurowych.', isCorrect: false },
      { label: 'D', text: 'Zjawisko to nie zostało nigdy potwierdzone naukowo.', isCorrect: false }
    ],
    explanation: 'Badania Adriana Warda (University of Texas) dowiodły, że nawet wyciszony telefon w polu widzenia kradnie moc obliczeniową pamięci roboczej. Dopiero wyniesienie telefonu do innego pokoju przywraca pełne zasoby.',
    keyTakeaway: 'Usuń pokusę z pola widzenia, zamiast polegać na sile woli.'
  },
  {
    id: 8,
    question: 'W studium przypadku Karoliny (Sekcja 3.10), błąd w prognozie na kwotę 900 000 PLN wyniknął z:',
    topic: 'Studium Przypadku Karolina',
    sectionRef: 'Sekcja 3.10',
    options: [
      { label: 'A', text: 'Celowego sabotażu firmy przez analityczkę.', isCorrect: false },
      { label: 'B', text: 'Kumulacji resztek uwagi wywołanych 47 przełączeniami między Excelem a komunikatorem Slack, co doprowadziło do ślepoty nieuwagi na brakujące zero.', isCorrect: true },
      { label: 'C', text: 'Awarii zasilania serwerów bazy danych.', isCorrect: false },
      { label: 'D', text: 'Nieznajomości podstaw matematyki.', isCorrect: false }
    ],
    explanation: 'Karolina była przekonana, że świetnie godzi wątki. Ciągłe przełączanie zredukowało jej pamięć roboczą do poziomu, w którym mózg automatycznie „uzupełnił” brakującą cyfrę bez świadomej weryfikacji.',
    keyTakeaway: 'Praca analityczna wymaga ciągłości uwagi — mikro-rozproszenia niszczą precyzję.'
  },
  {
    id: 9,
    question: 'Jakie warunki są niezbędne do wejścia w Stan Przepływu (Flow) wg Mihálya Csíkszentmihályiego?',
    topic: 'Stan Przepływu (Flow)',
    sectionRef: 'Sekcja 3.8',
    options: [
      { label: 'A', text: 'Oglądanie krótkich filmów na TikToku przy jednoczesnym słuchaniu podcastu.', isCorrect: false },
      { label: 'B', text: 'Równowaga między wysokim poziomem wyzwania a posiadanymi umiejętnościami, jasny cel, natychmiastowa informacja zwrotna i całkowita eliminacja rozpraszaczy.', isCorrect: true },
      { label: 'C', text: 'Praca w głośnym open space z włączonymi powiadomieniami.', isCorrect: false },
      { label: 'D', text: 'Całkowity brak jakichkolwiek trudności w zadaniu.', isCorrect: false }
    ],
    explanation: 'Flow wymaga pełnego zaangażowania uwagi. Zbyt trudne zadanie rodzi lęk, zbyt łatwe rodzi nudę. Kluczem jest wąski korytarz wyzwania i nieprzerwany blok czasu.',
    keyTakeaway: 'Flow to stan, w którym uwaga jest w 100% zintegrowana z działaniem.'
  },
  {
    id: 10,
    question: 'W studium przypadku Marka (kierowcy/chirurga — Sekcja 3.11) krytyczny błąd nastąpił z powodu:',
    topic: 'Studium Przypadku Marek',
    sectionRef: 'Sekcja 3.11',
    options: [
      { label: 'A', text: 'Zawężenia pola uwagi (Tunneling) pod wpływem ostrego stresu czasowego, przez co zignorował migającą kontrolkę ostrzegawczą.', isCorrect: true },
      { label: 'B', text: 'Braków w wykształceniu medycznym.', isCorrect: false },
      { label: 'C', text: 'Zasypiania za kierownicą po obfitym posiłku.', isCorrect: false },
      { label: 'D', text: 'Uderzenia meteorytu w budynek szpitala.', isCorrect: false }
    ],
    explanation: 'Wysokie pobudzenie noradrenalinowe zwęża reflektor uwagi jak obiektyw teleobiektywu. Człowiek widzi tylko jeden element (np. zegar odliczający minuty), całkowicie tracąc świadomość peryferyjną.',
    keyTakeaway: 'W stresie uwaga kurczy się do punktu. Świadomie poszerzaj pole widzenia.'
  },
  {
    id: 11,
    question: 'W koncepcji Głębokiej Pracy (Deep Work) Cala Newporta, optymalna długość pojedynczego bloku nieprzerwanej koncentracji wynosi:',
    topic: 'Deep Work i Higiena Uwagi',
    sectionRef: 'Sekcja 3.13',
    options: [
      { label: 'A', text: '10 sekund z przerwą na sprawdzenie telefonu.', isCorrect: false },
      { label: 'B', text: 'Około 60 do 90 minut, co odpowiada naturalnemu biologicznemu rytmowi ultradialnemu człowieka.', isCorrect: true },
      { label: 'C', text: 'Nieprzerwanie 14 godzin bez picia wody i jedzenia.', isCorrect: false },
      { label: 'D', text: 'Czas trwania jednego utworu muzycznego w radiu.', isCorrect: false }
    ],
    explanation: 'Po 90 minutach intensywnej pracy kora przedczołowa wyczerpuje lokalne zapasy glukozy i acetylocholiny. Wymaga to 15–20 minut przerwy regeneracyjnej (np. spacer, brak ekranów).',
    keyTakeaway: 'Pracuj w 90-minutowych sprintach, a nie w 8-godzinnym maratonie rozproszenia.'
  },
  {
    id: 12,
    question: 'Co dzieje się z uwagą kierowcy rozmawiającego przez telefon przy użyciu zestawu głośnomówiącego?',
    topic: 'Uwaga w Ruchu Drogowym',
    sectionRef: 'Sekcja 3.9',
    options: [
      { label: 'A', text: 'Jego uwaga jest nienaruszona, ponieważ ręce spoczywają na kierownicy.', isCorrect: false },
      { label: 'B', text: 'Jego pole widzenia i szybkość reakcji na hamowanie spadają tak samo, jak przy trzymaniu słuchawki przy uchu, ponieważ obciążenie poznawcze wynika z generowania mowy i obrazów w pamięci roboczej.', isCorrect: true },
      { label: 'C', text: 'Jego czas reakcji poprawia się o 40%.', isCorrect: false },
      { label: 'D', text: 'Kierowca zyskuje widzenie w podczerwieni.', isCorrect: false }
    ],
    explanation: 'Zestaw głośnomówiący eliminuje problem motoryczny, ale nie rozwiązuje problemu poznawczego. Tworzenie wyobrażeń rozmówcy i analiza zdań kradną zasoby kory wzrokowej i ciemieniowej.',
    keyTakeaway: 'To nie ręce prowadzą auto — prowadzi je uwaga kory mózgowej.'
  }
];

export const chapterThree: Chapter = {
  number: 3,
  title: 'Uwaga',
  subtitle: 'Dlaczego możesz patrzeć i czegoś nie zauważyć?',
  leadParagraph:
    'Co sekundę na Twoje narządy zmysłów opada ponad 11 milionów bitów informacji. Jednak Twój świadomy umysł jest w stanie przetworzyć zaledwie od 40 do 50 bitów na sekundę. Różnica ta stanowi fundament najcenniejszej waluty poznawczej ludzkości: UWAGI. W tym rozdziale odkrywamy, jak działa reflektor naszej świadomości, dlaczego multitasking jest groźną iluzją i dlaczego patrzysz wprost na zjawiska, których zupełnie nie dostrzegasz.',
  totalEstimatedPages: 42,
  sections: [
    {
      id: 'sec-3-1',
      pageNumber: 141,
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
      ],
      subsections: [
        {
          title: 'Śledzenie Wzroku: Oko Patrzy, Umysł Nie Widzi',
          paragraphs: [
            'W późniejszych replikacjach eksperymentu wykorzystano zaawansowane eyetrackery (urządzenia śledzące ruchy gałek ocznych). Okazało się, że uczestnicy, którzy nie zauważyli goryla, patrzyli na niego bezpośrednio przez średnio 1,5 do 2 sekund! Ich fiksacja wzrokowa spoczywała na postaci w futrze.',
            'Dlaczego więc go nie zobaczyli? Ponieważ fotony padające na siatkówkę to zaledwie surowy sygnał elektryczny. Aby sygnał stał się świadomym doznaniem („Oto goryl na boisku”), musi zostać wzmocniony przez sieć uwagi kory czołowo-ciemieniowej. Skoro sieć ta była w 100% obciążona filtrowaniem „tylko białych koszulek”, czarna sylwetka goryla została odrzucona jako szum tła.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-2',
      pageNumber: 147,
      sectionNumber: '3.2',
      title: 'Anatomia Reflektora: Uwaga Selektywna, Skupiona i Podzielna',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Uwaga nie jest pojedynczym, jednolitym organem. To wysoce wyspecjalizowana sieć neuronalna. Zgodnie z przełomowymi pracami Michaela Posnera i Jamesa Petersena, możemy wyróżnić trzy fundamentalne podsystemy uwagi:',
        '1. UWAGA SELEKTYWNA (Selective Attention): Umiejętność wyłowienia konkretnego bodźca z morza szumu sensorycznego (np. słuchanie głosu rozmówcy w głośnej kawiarni — tzw. Efekt Cocktail Party). Reflektor uwagi oświetla wybrany obiekt, przesuwając resztę bodźców w cień nieświadomości.',
        '2. UWAGA SKUPIONA / PODTRZYMYWANA (Sustained Attention / Vigilance): Zdolność do utrzymania ciągłej czujności i skupienia na jednym zadaniu przez dłuższy czas bez ulegania dystrakcjom (np. programowanie, czytanie sprawozdania finansowego czy monitorowanie radaru).',
        '3. UWAGA PODZIELNA (Divided Attention): Zdolność do równoległego przetwarzania informacji z dwóch źródeł. Współczesna neurobiologia jednoznacznie dowodzi, że uwaga podzielna jest możliwa TYLKO WTEDY, gdy jedno z zadań jest w pełni zautomatyzowane (np. marsz i rozmowa) i nie angażuje zasobów kory przedczołowej.'
      ],
      subsections: [
        {
          title: 'Wielka Debata o Filtrze Uwagi: Broadbent, Treisman oraz Deutsch & Deutsch',
          paragraphs: [
            'W psychologii poznawczej przez dekady toczył się spór o to, w którym dokładnie momencie nasz mózg filtruje niechciane informacje:',
            '• Model Wczesnej Selekcji (Donald Broadbent, 1958): Filtr działa jak fizyczna zwrotnica bezpośrednio po rejestracji zmysłowej. Wszystko, na co nie jest skierowana uwaga, zostaje bezpowrotnie odrzucone przed analizą znaczenia.',
            '• Model Osłabienia / Ściszenia (Anne Treisman, 1964): Sygnały nienadzorowane nie są całkowicie kasowane, lecz „przyciszane” (osłabiane). Jeśli w przyciszonym tle pojawi się bodziec o skrajnie niskim progu aktywacji (np. Twoje własne imię wypowiedziane na drugim końcu sali lub krzyk „Pożar!”), przedrze się on przez osłabiony filtr do świadomości.',
            '• Model Późnej Selekcji (J. Anthony Deutsch i Donald Deutsch, 1963): Mózg podświadomie analizuje semantycznie (znaczeniowo) wszystkie napływające bodźce, a selektywne wąskie gardło pojawia się dopiero tuż przed wyborem reakcji motorycznej i zapisem w pamięci roboczej.'
          ],
          highlightBox: {
            title: 'Wgląd w Architekturę Poznawczą',
            content: 'Nasz mózg łączy elementy modelu Treisman i późnej selekcji: nieświadome sieci korowe nieustannie analizują otoczenie w poszukiwaniu sygnałów kluczowych dla przetrwania i statusu, wpuszczając do świadomego reflektora tylko to, co uzyskana najwyższy priorytet behawioralny.',
            type: 'insight'
          }
        },
        {
          title: 'Zasoby Uwagi: Model Jednego Zbiornika Daniela Kahnemana',
          paragraphs: [
            'W swoim klasycznym modelu Kahneman porównał uwagę do ograniczonej puli energii metabolicznej. Każde zadanie wymagające wysiłku (obliczenia matematyczne, czytanie ze zrozumieniem, powstrzymywanie złości) czerpie z tego samego, wspólnego zbiornika.',
            'Jeśli wykonujesz zadanie pochłaniające 80% pojemności zbiornika, na wszystkie pozostałe procesy zostaje zaledwie 20%. Gdy w takiej chwili ktoś zapyta Cię o prostą rzecz, zirytujesz się, ponieważ Twoja pojemność uwagi osiągnęła stan nasycenia (Cognitive Overload).'
          ]
        }
      ]
    },
    {
      id: 'sec-3-3',
      pageNumber: 153,
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
          paragraphs: [
            'W badaniach laboratoryjnych uczestnicy, którzy wykonywali zadania naprzemiennie, pracowali średnio o 40% wolniej i popełniali trzykrotnie więcej błędów niż osoby wykonujące te same zadania sekwencyjnie (jedno po drugim).'
          ],
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
      pageNumber: 159,
      sectionNumber: '3.4',
      title: 'Dwa Tryby Sterowania Uwagi: Odgórny (Top-Down) vs Oddolny (Bottom-Up)',
      category: 'neuronauka',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kto tak naprawdę kieruje reflektorem Twojej uwagi? W naszym mózgu trwa nieustanny wyścig zbrojeń pomiędzy dwoma wielkimi sieciami czołowo-ciemieniowymi, zidentyfikowanymi przez Maurizio Corbettę i Gordona Shulmana (2002):',
        '1. GRZBIETOWA SIEĆ UWAGI (Dorsal Attention Network - DAN / Odgórna): Obejmuje bruzdę śródciemieniową (IPS) oraz pole czołowe oczu (FEF). Odpowiada za wolicjonalne, endogenne kierowanie reflektora na cele wyznaczone przez korę przedczołową („Teraz skupiam się wyłącznie na pisaniu kodu”). DAN wysyła sygnały zstępujące do wczesnej kory zmysłowej, wzmacniając neurony kodujące pożądane cechy i wygaszając tło.',
        '2. BRZUSZNA SIEĆ UWAGI (Ventral Attention Network - VAN / Oddolna): Obejmuje skrzyżowanie skroniowo-ciemieniowe (TPJ) oraz brzuszną korę czołową (VFC: zakręt czołowy dolny i środkowy). Działa jak automatyczny wyłącznik bezpieczeństwa (Circuit-Breaker). Nie jest aktywna podczas stałego skupienia, lecz gwałtownie odpala się, gdy w polu sensorycznym pojawi się bodziec niespodziewany, wyrazisty lub istotny życiowo (huk, jaskrawe powiadomienie, krzyk). Wtedy VAN przerywa pracę sieci DAN i zmusza reflektor do natychmiastowego obrotu ku intruzowi.',
        'Współczesna gospodarka uwagi (Attention Economy) to wielomiliardowy przemysł inżynierii cyfrowej, którego jedynym celem jest bezwzględne hakowanie Twojej sieci brzusznej (VAN) za pomocą wibracji, badge’y i animacji, aby uniemożliwić sieci grzbietowej (DAN) utrzymanie głębokiego skupienia.'
      ],
      subsections: [
        {
          title: 'Neuroergonomia Skupienia: Jak Chronić Sieć Grzbietową?',
          paragraphs: [
            'Skoro sieć brzuszna (VAN) jest ewolucyjnie bezwarunkowym odruchem orientacyjnym, nie wygrasz z nią samą „siłą woli”. Jeśli telefon leży w polu widzenia, każdy rozbłysk ekranu automatycznie aktywuje VAN.',
            'Jedyną skuteczną obroną poznawczą jest higiena środowiskowa: usunięcie wyzwalaczy sensorycznych (fizyczne odłożenie telefonu do innego pokoju, praca w trybie pełnoekranowym, wyłączenie powiadomień wizualnych). Wtedy sieć grzbietowa może pracować bez ciągłego resetowania jej engramów.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-5',
      pageNumber: 165,
      sectionNumber: '3.5',
      title: '„Dlaczego Wiem, że Coś Widziałem, Skoro Tego Nie Zauważyłem?”: Pamięć Ikoniczna a Świadomy Dostęp',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Czy zdarzyło Ci się kiedyś iść ulicą i nagle poczuć niepokój, a po sekundzie zorientować się, że dwieście metrów wcześniej minąłeś znajomego, którego świadomie wcale nie zarejestrowałeś? Albo czytać stronę książki, dojść do jej dołu i zdać sobie sprawę, że nie pamiętasz ani jednego zdania, choć Twoje oczy przesunęły się po każdym słowie?',
        'Zjawisko to wynika z fundamentalnego podziału pomiędzy REJESTRACJĄ SENSORYCZNĄ a ŚWIADOMYM DOSTĘPEM (Conscious Access).'
      ],
      subsections: [
        {
          title: 'Eksperyment Sperlinga: Potęga i Ulotność Pamięci Ikonicznej',
          paragraphs: [
            'W 1960 roku George Sperling błyskał przed oczami badanych tablicę złożoną z 12 liter (trzy rzędy po 4 litery) przez zaledwie 50 milisekund (jedna dwudziesta sekundy).',
            'Gdy proszono uczestników o wymienienie wszystkich liter, byli w stanie podać tylko 4 lub 5. Twierdzili jednak, że „przez ułamek sekundy widzieli absolutnie wszystkie litery, ale zanim zdążyli je wypowiedzieć, obraz zgasł”.',
            'Sperling zastosował genialny zabieg: natychmiast po zgaśnięciu tablicy odtwarzał wysoki, średni lub niski ton dźwiękowy, wskazujący który rząd mają odczytać. Okazało się, że badani potrafili odczytać DOWOLNY rząd ze 100% dokładnością! Oznacza to, że przez około 300 milisekund w naszym układzie wzrokowym istnieje kompletna, fotograficzna kopia świata (pamięć ikoniczna).',
            'Świadomość to nie rejestracja — to wąskie gardło, przez które tylko garść danych z pamięci ikonicznej może przedostać się do pamięci operacyjnej.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-6',
      pageNumber: 171,
      sectionNumber: '3.6',
      title: 'Ślepota na Zmiany (Change Blindness): Eksperyment z Przenoszeniem Drzwi',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Pokrewnym, lecz odrębnym od ślepoty nieuwagi zjawiskiem jest ŚLEPOTA NA ZMIANY (Change Blindness). Dotyczy ona naszej niezdolności do zauważenia modyfikacji w scenie wizualnej, jeśli zmianie towarzyszy krótkie zakłócenie wzrokowe (np. mrugnięcie okiem, cięcie montażowe w filmie lub przeszkoda).',
        'W legendarnym eksperymencie Simonsa i Levina (1998) na kampusie uniwersyteckim badacz podszedł do przypadkowego pieszego z mapą i zapytał o drogę. W trakcie rozmowy między rozmawiającymi przeszło dwóch robotników niosących wielkie drewniane drzwi.',
        'Za drzwiami schowany był drugi badacz, który zamienił się miejscami z pierwszym. Miał inne ubranie, inny głos, inny wzrost i inną fryzurę. Mimo to ponad 50% osób kontynuowało rozmowę, zupełnie nie zauważając, że rozmawiają z całkowicie innym człowiekiem!'
      ],
      subsections: [
        {
          title: 'Dlaczego Mózg Pozwala na Takie Oszustwo?',
          paragraphs: [
            'Nasz mózg działa na zasadzie ekonomii poznawczej. Koduje ogólne znaczenie sytuacji („rozmawiam ze studentem pytającym o drogę”), a nie szczegółowe piksele twarzy. Dopóki rola społeczna się zgadza, układ poznawczy zakłada stabilność świata i oszczędza energię.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-7',
      pageNumber: 177,
      sectionNumber: '3.7',
      title: 'Ekonomia Uwagi i Pułapka Powiadomień: Algorytmiczne Przechwytywanie Dopaminy',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Żyjemy w epoce, w której uwaga stała się towarem cenniejszym od ropy naftowej. Giganci technologiczni zatrudniają neurobiologów, by projektować interfejsy optymalizowane pod kątem uwalniania dopaminy.',
        'Mechanizm ten opiera się na tzw. NIEREGULARNYM ZMIENNYM WZMOCNIENIU (Variable Reward Schedule) – tym samym, który napędza uzależnienie od jednorękich bandytów w kasynie. Gdy sięgasz po telefon, nie wiesz, co zobaczysz: nudnego spama czy ekscytującą wiadomość od sympatii. Ta niepewność wywołuje potężny wyrzut dopaminy w jądrze półleżącym, zmuszając do odświeżania feedu po raz setny w ciągu dnia.'
      ],
      subsections: [
        {
          title: 'Efekt Brain Drain: Koszt Samej Obecności Smartfona',
          paragraphs: [
            'W badaniach prof. Adriana Warda (University of Texas) studenci rozwiązywali testy pamięci roboczej i myślenia płynnego w trzech warunkach: z telefonem na biurku (wyłączonym ekranem do dołu), z telefonem w torbie oraz z telefonem zostawionym w innym pokoju.',
            'Wyniki były jednoznaczne: studenci z telefonem w innym pokoju osiągnęli istotnie wyższe wyniki niż ci z telefonem na biurku! Sama obecność urządzenia w polu widzenia wymusza podświadome wydatkowanie energii na samokontrolę.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-8',
      pageNumber: 183,
      sectionNumber: '3.8',
      title: 'Uwaga a Stan Przepływu (Flow) Mihálya Csíkszentmihályiego',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przeciwieństwem rozproszonej uwagi jest Stan Przepływu (Flow) – stan optymalnego doświadczenia, w którym człowiek jest tak pochłonięty wykonywaną czynnością, że traci poczucie czasu, a wewnętrzny krytyk ulega całkowitemu wyciszeniu.',
        'W stanie Flow zachodzi zjawisko Przejściowej Hipofrontalności (Transient Hypofrontality) – wyciszeniu ulega przyśrodkowa kora przedczołowa odpowiedzialna za ruminacje i autorefleksję, a uwaga zespala się w 100% z wykonywanym ruchem.'
      ],
      subsections: [
        {
          title: 'Warunki Osiągnięcia Flow',
          paragraphs: [
            '1. Balans wyzwania i umiejętności: Zadanie musi być na granicy naszych możliwości (około 4% powyżej strefy komfortu).',
            '2. Jasno sprecyzowany cel: Dokładnie wiesz, co ma być kolejnym krokiem.',
            '3. Natychmiastowa informacja zwrotna: Od razu widzisz skutek swojego działania (jak w grze na instrumencie lub programowaniu).',
            '4. Zero rozproszeń: Nawet jedno powiadomienie natychmiast wyrzuca z kanału Flow.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-9',
      pageNumber: 189,
      sectionNumber: '3.9',
      title: 'Przykłady z Życia Codziennego: Od Ruchu Drogowego i E-sportu do Szkoły i Biura',
      category: 'studium-przypadku',
      readingTimeMinutes: 14,
      paragraphs: [
        'Mechanizmy uwagi decydują o życiu i śmierci w świecie realnym:',
        '• Ruch Drogowy: Rozmowa przez zestaw głośnomówiący opóźnia czas hamowania o 0,5 sekundy. Przy prędkości 100 km/h oznacza to przejechanie dodatkowych 14 metrów na ślepo! Mózg kierowcy tworzy reprezentację osoby po drugiej stronie słuchawki kosztem obróbki pola widzenia.',
        '• Szkoła i Uczenie się: Student, który podczas wykładu ma otwartą kartę z przeglądarką i notatkami, zapamiętuje o 40% mniej materiału konceptualnego niż rówieśnik piszący notatki odręcznie na papierze.',
        '• E-sport: Zawodowi gracze nie posiadają „lepszego wzroku” — trenują zdolność do błyskawicznej inhibicji dystraktorów i alokacji uwagi w wybrane sektory ekranu.'
      ]
    },
    {
      id: 'sec-3-10',
      pageNumber: 195,
      sectionNumber: '3.10',
      title: 'Studium Przypadku: Karolina i Rozproszony Dzień Pracy Analityka',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
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
      id: 'sec-3-11',
      pageNumber: 201,
      sectionNumber: '3.11',
      title: 'Studium Przypadku: Marek i Przeoczenie Wskaźnika pod Presją Czasu (Kierowca / Operator)',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Drugie studium przypadku bada zjawisko zawężenia uwagi (Tunnel Vision) pod wpływem pośpiechu i stresu.'
      ],
      caseStudyRef: {
        id: 'cs-marek-tunneling',
        title: 'Pułapka Tunelu Poznawczego: Gdy Zegar Zabija Spostrzegawczość',
        subtitle: 'Jak pośpiech i presja terminu wyłączyły percepcję peryferyjną doświadczonego kierowcy',
        protagonist: 'Marek, Kierowca Transportu Międzynarodowego (41 lat)',
        context: 'Nocny przejazd tranzytowy przez gęstą mgłę pod presją surowej kary finansowej za spóźnienie.',
        story: [
          'Marek prowadził 40-tonowy zestaw ciężarowy autostradą. Do rozładunku w terminalu logistycznym brakowało mu 45 minut, a na wyświetlaczu tachografu pozostało zaledwie 35 minut dozwolonego czasu jazdy. Przekroczenie limitu groziło tysiącami euro mandatu.',
          'Cała uwaga Marka została zogniskowana w wąskim tunelu: na cyfrowym zegarze tachografu oraz na linii pasów tuż przed maską pojazdu. W kabinie głośno grało radio, które miało odpędzić senność.',
          'W pewnym momencie na desce rozdzielczej zapaliła się jasnopomarańczowa kontrolka ciśnienia w układzie hamulcowym naczepy. Kontrolka znajdowała się zaledwie 20 centymetrów od prędkościomierza.',
          'Marek patrzył w deskę rozdzielczą co kilkanaście sekund, ale JEJ NIE ZAUWAŻYŁ. Dopiero gdy zablokowane koło naczepy wystrzeliło snopem iskier i zapaliło oponę, zorientował się w sytuacji. Doszło do pożaru naczepy i zniszczenia ładunku.',
          'Dochodzenie wykazało pełną sprawność wzroku Marka. Stał się ofiarą tzw. zawężenia percepcyjnego (Perceptual Tunneling) wywołanego wysokim pobudzeniem stresowym.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Zawężenie pola uwagi (Cognitive & Perceptual Tunneling) pod wpływem ostrego stresu noradrenalinowego (prawo Yerkesa-Dodsona).',
          cognitiveBiases: [
            {
              name: 'Hiperkoncentracja na Jednym Wskaźniku',
              description: 'Absorpcja całej uwagi przez czas pozostały na tachografie z wyłączeniem pozostałych wskaźników telemetrycznych.',
              impact: 'Całkowita ślepota na sygnały ostrzegawcze z peryferii.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Wyparcie Sygnałów Zagrożenia',
              explanation: 'Umysł podświadomie ignoruje nowe problemy, by nie powiększać przeciążenia poznawczego.'
            }
          ],
          emotionalDynamic: 'Panika przed karą finansową i presja czasu odcinające chłodną kalkulację.'
        },
        decisionProcessAnalysis: {
          trigger: 'Upływający czas na tachografie.',
          attentionFocus: 'Zegar cyfrowy i pas jezdni.',
          interpretation: '„Muszę zdążyć za wszelką cenę, nie ma czasu na nic innego”.',
          emotion: 'Ostra presja, lęk przed karą.',
          impulse: 'Przyspieszenie i ignorowanie otoczenia.',
          action: 'Pominięcie kontroli wskaźników technicznych.',
          consequence: 'Pożar naczepy i wielotysięczne straty.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Miejsce Sinawe (Locus Coeruleus)', role: 'Maksymalny wyrzut noradrenaliny', activationState: 'Nadmierne pobudzenie niszczące elastyczność uwagi' },
            { region: 'Kora Ciemieniowa', role: 'Skanowanie przestrzenne', activationState: 'Zablokowanie peryferii' }
          ],
          neurotransmitters: [
            { name: 'Noradrenalina', roleInScenario: 'Zwęziła pole uwagi do pojedynczego punktu.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 10 min', process: 'Rosnący poziom stresu stopniowo wyłącza zauważanie bodźców peryferyjnych.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Procedura Zamiatania Wzrokiem (Instrument Scan)', script: 'Nawykowe, rytmiczne omiatanie wzrokiem całej tablicy rozdzielczej co 15 sekund bez względu na stres.', rationale: 'Mechaniczna procedura przełamuje biologiczne zawężenie uwagi.' }
          ]
        },
        keyTakeaway: 'W sytuacji ostrego stresu nie ufaj swojej spontanicznej uwadze. Stosuj sztywne procedury sprawdzające (checklists).'
      }
    },
    {
      id: 'sec-3-12',
      pageNumber: 207,
      sectionNumber: '3.12',
      title: 'Studium Przypadku: Julia i Złudzenie Nauki ze Smartfonem w Epoce TikToka',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Trzecie studium analizuje wyzwanie pokoleniowe: iluzję efektywnej nauki w środowisku cyfrowego przebodźcowania.'
      ],
      caseStudyRef: {
        id: 'cs-julia-study',
        title: 'Iluzja 6 Godzin Przy Biurku: Syndrom Rozproszonej Studentki',
        subtitle: 'Jak iluzja zaangażowania zniszczyła wyniki egzaminu z anatomii',
        protagonist: 'Julia, Studentka II Roku Medycyny (21 lat)',
        context: 'Przygotowanie do kluczowego kolokwium z neuroanatomii w sesji zimowej.',
        story: [
          'Julia uczyła się przez 6 godzin bez przerwy. Siedziała przy biurku, przed nią leżał podręcznik, a obok leżał telefon z włączonymi powiadomieniami z Instagrama i TikToka. Dodatkowo na Spotify grała energetyczna playlista z muzyką pop.',
          'Co kilka minut Julia zerkała w telefon: sprawdzała reelsy, odpowiadała na wiadomości grupowe z roku („Na którym slajdzie jesteście?”) i przewijała relacje znajomych.',
          'Po 6 godzinach była potwornie zmęczona. Czuła, że wykonała tytaniczną pracę. Nazajutrz na kolokwium z przerażeniem odkryła, że proste pytania o drogi piramidowe i pęczki nerwowe zlewają się jej w bezkształtną masę. Dostała ocenę niedostateczną.',
          'Gdy podliczyła czas z aplikacji monitorującej ekran, okazało się, że w ciągu tych 6 godzin odblokowała telefon 84 razy, spędzając na nim łącznie 2 godziny i 40 minut! Rzeczywisty czas skupienia nad podręcznikiem wyniósł niespełna godzinę, poszatkowaną na 2-minutowe skrawki.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Iluzja Kompetencji (Illusion of Competence) w połączeniu z uzależnieniem od mikrodawek dopaminy (Continuous Partial Attention).',
          cognitiveBiases: [
            {
              name: 'Myślenie Życzeniowe (Wishful Thinking)',
              description: 'Uznanie samego faktu siedzenia przy biurku przez 6 godzin za tożsamy z głębokim przyswojeniem wiedzy.',
              impact: 'Zablokowało rzetelną samoocenę stanu pamięci.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Racjonalizacja Nakładu Pracy',
              explanation: '„Przecież uczyłam się cały dzień, egzaminator musiał ułożyć złośliwe pytania”.'
            }
          ],
          emotionalDynamic: 'Zmęczenie poznawcze bez efektu konsolidacji pamięciowej.'
        },
        decisionProcessAnalysis: {
          trigger: 'Wibracja telefonu podczas czytania trudnego fragmentu.',
          attentionFocus: 'Powiadomienie z TikToka.',
          interpretation: '„Odpocznę 30 sekund, to mi pomoże zresetować głowę”.',
          emotion: 'Dopaminowa ulga od trudnego materiału.',
          impulse: 'Dotknięcie ekranu.',
          action: '20 minut bezmyślnego scrollowania.',
          consequence: 'Brak konsolidacji śladu pamięciowego i niezaliczenie egzaminu.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ventral Striatum (Jądro Półleżące)', role: 'Pogoń za nagrodą dopaminową', activationState: 'Nadaktywność przy powiadomieniach' },
            { region: 'Hipokamp', role: 'Konsolidacja pamięciowa', activationState: 'Brak możliwości utrwalenia engramu' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Warunkowała nawyk sięgania po telefon przy pierwszym odczuciu znużenia.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 50 ms', process: 'Dźwięk powiadomienia przerywa transfer informacji z pamięci roboczej do hipokampa.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Kwarantanna Smartfona', script: 'Umieszczenie telefonu w drugim pokoju w trybie samolotowym na 50-minutowe sesje nauki (technika Pomodoro).', rationale: 'Usuwa bodźce wyzwalające i przywraca ciągłość uwagi odgórnej.' }
          ]
        },
        keyTakeaway: 'Dwie godziny skupienia bez telefonu dają większy przyrost wiedzy niż dziesięć godzin w stanie ciągłego rozproszenia.'
      }
    },
    {
      id: 'sec-3-13',
      pageNumber: 213,
      sectionNumber: '3.13',
      title: 'Protokół Higieny Uwagi: Deep Work, Time-Blocking i Środowiskowa Redukcja Bodźców',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Skoro uwaga jest zasobem wyczerpywalnym, jej ochrona wymaga nie heroicznej walki ze sobą, lecz inteligentnej architektury środowiska (Choice Architecture).'
      ],
      subsections: [
        {
          title: '3 Filary Higieny Poznawczej wg Cala Newporta',
          paragraphs: [
            '1. Blokowanie Czasu (Time-Blocking): Planuj dzień w blokach zadaniowych, a nie w reaktywnej liście to-do. Z góry wyznacz 90-minutowy blok na Pracę Głęboką (Deep Work), w którym nie istnieją komunikatory ani telefon.',
            '2. Asynchroniczna Komunikacja: Sprawdzaj pocztę i Slacka tylko w 2–3 wyznaczonych oknach czasowych w ciągu dnia (np. 11:30 i 15:30). Wyłącz powiadomienia push (dźwiękowe, wibracyjne i banery).',
            '3. Fizyczna Kwarantanna Urządzeń: Na czas pracy wymagającej skupienia odkładaj smartfon do innego pomieszczenia lub zamykaj w szufladzie biurka.'
          ]
        }
      ]
    },
    {
      id: 'sec-3-14',
      pageNumber: 219,
      sectionNumber: '3.14',
      title: 'Podsumowanie Rozdziału 3, Egzamin Końcowy i Most do Rozdziału 4 (Percepcja)',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Uwaga jest najwęższym gardłem naszej architektury poznawczej. W tym rozdziale udowodniliśmy, że nasza zdolność jednoczesnego przetwarzania wielu wątków jest biologicznym mitem. Koszt przełączania zadań, resztki uwagi i ślepota nieuwagi to realne zjawiska fizjologiczne, które decydują o jakości naszych decyzji i bezpieczeństwie.',
        'Sprawdź swoje zrozumienie tych mechanizmów w poniższym Egzaminie Końcowym z Rozdziału 3.',
        'Gdy reflektor uwagi oświetli już dany bodziec i prześle go do kory mózgowej — co dokładnie dzieje się dalej? Czy to, co widzimy, jest wierną kopią świata, czy zaledwie hipotezą stworzoną przez nasz mózg? Zapraszamy do Rozdziału 4: PERCEPCJA.'
      ]
    }
  ]
};

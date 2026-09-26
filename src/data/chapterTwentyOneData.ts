import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentyOneExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej metapoznanie (metacognition) definiuje się jako:',
    topic: 'Definicja Metapoznania',
    sectionRef: 'Sekcja 21.1',
    options: [
      { label: 'A', text: 'Zdolność do myślenia o własnym myśleniu — procesy monitorowania i kontrolowania własnych stanów poznawczych, pamięciowych i emocjonalnych.', isCorrect: true },
      { label: 'B', text: 'Zdolność do szybkiego zapamiętywania nazwisk osób poznamych na imprezie.', isCorrect: false },
      { label: 'C', text: 'Umiejętność czytania w myślach innych ludzi bez używania słów.', isCorrect: false },
      { label: 'D', text: 'Proces automatycznego trawienia pokarmu po posiłku.', isCorrect: false }
    ],
    explanation: 'Metapoznanie to nadzorcza warstwa umysłu (Meta-Cognitive Executive), która obserwuje jak myślimy, pamiętamy i podejmujemy decyzje.',
    keyTakeaway: 'Metapoznanie to zdolność stanie się świadomym obserwatorem własnego umysłu.'
  },
  {
    id: 2,
    question: 'Na czym polega iluzja wglądu (Illusion of Insight) opisywana w badaniach nad introspekcją (Nisbett & Wilson)?',
    topic: 'Granice Introspekcji',
    sectionRef: 'Sekcja 21.4',
    options: [
      { label: 'A', text: 'Ludzie często nie mają bezpośredniego dostępu do wyższych procesów poznawczych i tworzą po fakcie dorobione, zmyślone teorie na temat przyczyn własnych decyzji.', isCorrect: true },
      { label: 'B', text: 'Introspekcja daje zawsze w 100% doskonałą i obiektywną wiedzę o przyczynach naszych zachowań.', isCorrect: false },
      { label: 'C', text: 'Introspekcja jest możliwa tylko podczas głębokiego snu.', isCorrect: false },
      { label: 'D', text: 'Nikt na świecie nie potrafi podjąć świadomej decyzji.', isCorrect: false }
    ],
    explanation: 'Nisbett i Wilson udowodnili, że gdy pytamy ludzi „dlaczego to wybrałeś?”, ich umysł często generuje racjonalizację post-hoc, zamiast podawać realną przyczynę.',
    keyTakeaway: 'Nie bierz swoich automatycznych wyjaśnień „dlaczego tak zrobiłem” za niepodważalną prawdę.'
  },
  {
    id: 3,
    question: 'Jaką funkcję w metapoznaniu pełni kalibracja metapoznawcza (Metacognitive Calibration)?',
    topic: 'Kalibracja Metapoznawcza',
    sectionRef: 'Sekcja 21.8',
    options: [
      { label: 'A', text: 'Mierzy stopień spójności między subiektywną pewnością człowieka co do słuszności swojego sądu a obiektywną trafnością tego sądu.', isCorrect: true },
      { label: 'B', text: 'Wylicza poziom cukru we krwi przed i po wysiłku.', isCorrect: false },
      { label: 'C', text: 'Służy do ustawiania ostrości w aparatach fotograficznych.', isCorrect: false },
      { label: 'D', text: 'Mierzy pojemność płuc w trakcie biegu.', isCorrect: false }
    ],
    explanation: 'Dobra kalibracja oznacza, że gdy jesteś pewien na 90%, mylisz się tylko w 10% przypadków. Zła kalibracja wywołuje fałszywą pewność siebie.',
    keyTakeaway: 'Wysoka pewność siebie przy niskiej trafności to prosta droga do katastroficznych błędów.'
  },
  {
    id: 4,
    question: 'Czym różni się obserwacja fenomenologiczna własnego stanu od jego interpretacji?',
    topic: 'Obserwacja vs Interpretacja',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Obserwacja rejestruje surowy bodziec z ciała („Czuję ścisk w żołądku”), zaś interpretacja dorabia do niego teorię („On mnie nienawidzi”).', isCorrect: true },
      { label: 'B', text: 'Interpretacja trwa 5 sekund, a obserwacja 2 godziny.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, oba słowa oznaczają to samo.', isCorrect: false },
      { label: 'D', text: 'Obserwacja dotyczy tylko fizyki, a interpretacja biologii.', isCorrect: false }
    ],
    explanation: 'Umiejętność rozdzielenia surowego doznania somatycznego od dramatycznej narracji jest fundamentem regulacji emocjonalnej.',
    keyTakeaway: 'Oddziel surowe doznanie biologiczne od dorobionej do niego teorii.'
  },
  {
    id: 5,
    question: 'Jak ruminacja (Overthinking) różni się od konstruktywnego metapoznania?',
    topic: 'Ruminacja vs Metapoznanie',
    sectionRef: 'Sekcja 21.13',
    options: [
      { label: 'A', text: 'Ruminacja to bezowocne, jałowe kręcenie się wokół problemu w poczuciu bezradności, zaś metapoznanie to analityczny obserwator, który prowadzi do korekty działania.', isCorrect: true },
      { label: 'B', text: 'Ruminacja jest zawsze przyjemna, a metapoznanie bolesne.', isCorrect: false },
      { label: 'C', text: 'Ruminacja występuje tylko u dzieci.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w funkcjonowaniu mózgu.', isCorrect: false }
    ],
    explanation: 'Ruminacja utrzymuje hiperaktywację w DMN i ciele migdałowatym, podczas gdy metapoznanie włącza sieć kontroli wykonawczej w dlPFC.',
    keyTakeaway: 'Nie pomyl jałowego zamartwiania się ze świadomym rozwiązywaniem problemu.'
  },
  {
    id: 6,
    question: 'Jaką rolę w wykrywaniu własnych błędów poznawczych w czasie rzeczywistym pełni kora przedczołowa?',
    topic: 'Wykrywanie Błędów w Mózgu',
    sectionRef: 'Sekcja 21.9',
    options: [
      { label: 'A', text: 'Przednia kora obwodu (ACC) wysyła sygnał konfliktu, a grzbietowo-boczna kora przedczołowa (dlPFC) powstrzymuje odruch automatyczny i wdraża korektę.', isCorrect: true },
      { label: 'B', text: 'Wykrywanie błędów zachodzi wyłącznie w rdzeniu kręgowym.', isCorrect: false },
      { label: 'C', text: 'Mózg nie posiada żadnego mechanizmu wykrywania własnych błędów.', isCorrect: false },
      { label: 'D', text: 'Kora przedczołowa służy tylko do rejestrowania zapachów.', isCorrect: false }
    ],
    explanation: 'Integracja ACC i dlPFC tworzy neuronalny hamulec bezpieczeństwa chroniący przed impulsywnymi błędami.',
    keyTakeaway: 'Pauza poznawcza przed reakcją to czas na aktywację Twojego wewnętrznego hamulca.'
  },
  {
    id: 7,
    question: 'Co charakteryzuje postawę „Meta-Warstwy” w odniesieniu do pierwszych 4 rozdziałów Tomu III?',
    topic: 'Meta-Warstwa Tomu III',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Traktowanie własnej tożsamości, przekonań, samooceny i wartości jako obserwowalnych procesów, które można badać i korygować z dystansu.', isCorrect: true },
      { label: 'B', text: 'Napisanie książki autobiograficznej pod pseudonimem.', isCorrect: false },
      { label: 'C', text: 'Zapomnienie wszystkiego czego nauczyliśmy się wcześniej.', isCorrect: false },
      { label: 'D', text: 'Kupowanie okularów do czytania w ciemności.', isCorrect: false }
    ],
    explanation: 'Przejście od „Jestem moimi myślami” do „Jestem obserwatorem moich myśli” jest największym skokiem rozwojowym w autonomicznym funkcjonowaniu.',
    keyTakeaway: 'Nie jesteś swoimi myślami — jesteś przestrzenią, w której te myśli się pojawiają.'
  },
  {
    id: 8,
    question: 'Jak zjawisko ślepych plamek (Blind Spots) wpływa na naszą samoświadomość?',
    topic: 'Ślepe Plamki Samoświadomości',
    sectionRef: 'Sekcja 21.10',
    options: [
      { label: 'A', text: 'Sprawia, że nie dostrzegamy własnych zniekształceń i błędów behawioralnych, które są doskonale widoczne dla zewnętrznych obserwatorów.', isCorrect: true },
      { label: 'B', text: 'Wywołuje trwała utratę wzroku w ciemnym pokoju.', isCorrect: false },
      { label: 'C', text: 'Uniemożliwia czytanie map drogowych.', isCorrect: false },
      { label: 'D', text: 'Zwiększa odporność na infekcje.', isCorrect: false }
    ],
    explanation: 'Dlatego uczciwy feedback od zaufanych mentorytów jest niezbędny dla zniwelowania własnych ślepych plamek.',
    keyTakeaway: 'Potrzebujemy innych ludzi jako luster, by zobaczyć to, co ukryte przed naszym własnym wzrokiem.'
  },
  {
    id: 9,
    question: 'Na czym polega monitorowanie procesów poznawczych w pętli Metapoznawczej?',
    topic: 'Pętla Metapoznawcza',
    sectionRef: 'Sekcja 21.3',
    options: [
      { label: 'A', text: 'Ciągły przepływ informacji między poziomem obiektowym (gdzie zachodzi myślenie) a poziomem meta (gdzie oceniamy sprawność i trafność tego myślenia).', isCorrect: true },
      { label: 'B', text: 'Liczenie oddechów przez 24 godziny bez przerwy.', isCorrect: false },
      { label: 'C', text: 'Powtarzanie regułek z gramatyki angielskiej.', isCorrect: false },
      { label: 'D', text: 'Sprawdzanie stanu konta bankowego.', isCorrect: false }
    ],
    explanation: 'Poziom meta dokonuje ewaluacji („Czy dobrze zrozumiałem ten tekst?”) i wywoływa kontrolę („Muszę przeczytać ten akapit jeszcze raz”).',
    keyTakeaway: 'Monitorowanie bez kontroli jest jałowe, kontrola bez monitorowania jest ślepa.'
  },
  {
    id: 10,
    question: 'Jaką rolę w kalibracji pewności siebie odgrywa pętla samoobserwacji z dziennikiem decyzji?',
    topic: 'Dziennik Decyzji i Metapoznanie',
    sectionRef: 'Sekcja 21.15',
    options: [
      { label: 'A', text: 'Pozwala po czasie zweryfikować obiektywną trafność własnych prognoz, odsłaniając błędy pewności siebie i racjonalizacje post-hoc.', isCorrect: true },
      { label: 'B', text: 'Służy do zapisywania wyłącznie listy zakupów.', isCorrect: false },
      { label: 'C', text: 'Wyłącza potrzebę myślenia przed podjęciem decyzji.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje brak jakichkolwiek niepowodzeń finansowych.', isCorrect: false }
    ],
    explanation: 'Zapisanie subiektywnego prawdopodobieństwa na piśmie PRZED poznałem wyniku chroni przed Błędem Mądrości Po Fakcie (Hindsight Bias).',
    keyTakeaway: 'Zapisuj swoje prognozy na piśmie, by konfrontować subiektywną pewność z obiektywnym wynikiem.'
  },
  {
    id: 11,
    question: 'Co według badań dotyczych autorefleksji charakteryzuje pytanie „CO?” w odróżnieniu od pytania „DLACZEGO?” (Tasha Eurich)?',
    topic: 'Pytanie CO vs DLACZEGO',
    sectionRef: 'Sekcja 21.14',
    options: [
      { label: 'A', text: 'Pytanie „DLACZEGO czuję lęk?” promuje jałową ruminację, podczas gdy „CO mogę zrobić w tej sytuacji?” kieruje uwagę na sprawcze działanie.', isCorrect: true },
      { label: 'B', text: 'Pytanie „DLACZEGO” daje natychmiastowe rozwiązania biznesowe.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy w psychologii autorefleksji.', isCorrect: false },
      { label: 'D', text: 'Pytanie „CO” wywołuje atak paniki.', isCorrect: false }
    ],
    explanation: 'Zamiana pytania „Dlaczego to mnie spotkało?” na „Co mogę z tym zrobić?” jest najprostszym przełączeniem z ruminacji na metapoznanie.',
    keyTakeaway: 'Pytaj „CO?” i „JAK?”, zamiast ugrzęznąć w jałowym „DLACZEGO?”.'
  },
  {
    id: 12,
    question: 'Jaką funkcję pełni pauza poznawcza (Cognitive Pause) w procesie podejmowania decyzji?',
    topic: 'Pauza Poznawcza',
    sectionRef: 'Sekcja 18.15',
    options: [
      { label: 'A', text: 'Tworzy szczelinę czasową między bodźcem a reakcją, pozwalając wyjść z automatycznego skryptu limficznego i włączyć refleksję w dlPFC.', isCorrect: true },
      { label: 'B', text: 'Narzuca natychmiastowe usnięcie na 15 minut.', isCorrect: false },
      { label: 'C', text: 'Uniemożliwia jakąkolwiek odpowiedź werbalną.', isCorrect: false },
      { label: 'D', text: 'Służy do wyliczania podatków.', isCorrect: false }
    ],
    explanation: 'W owej szczelinie między bodźcem a reakcją leży nasza cała wolność wyboru i autonomia decyzyjna.',
    keyTakeaway: 'Pomiędzy bodźcem a reakcją znajduje się przestrzeń na Twoją wolność.'
  },
  {
    id: 13,
    question: 'Na czym polega błąd „Pewność to Trafność” (Certainty-Accuracy Fallacy)?',
    topic: 'Błąd Pewność to Trafność',
    sectionRef: 'Sekcja 21.8',
    options: [
      { label: 'A', text: 'Fałszywe założenie, że im silniejsze i bardziej gwałtowne jest subiektywne poczucie pewności co do jakiegoś sądu, tym bardziej jest on obiektywnie prawdziwy.', isCorrect: true },
      { label: 'B', text: 'Przekonanie, że każdy wykres jest prawdziwy.', isCorrect: false },
      { label: 'C', text: 'Niezdolność do odczuwania pewności w jakiejkolwiek sprawie.', isCorrect: false },
      { label: 'D', text: 'Utrata pamięci po urazie głowy.', isCorrect: false }
    ],
    explanation: 'Siła emocjonalnego przekonania nie ma bezpośredniego związku z jego merytoryczną poprawnością.',
    keyTakeaway: 'Można być głęboko, absolutnie i gwałtownie przekonanym... i całkowicie się mylić.'
  },
  {
    id: 14,
    question: 'Jaką rolę w metapoznaniu odgrywa ciało migdałowate vs kora przedczołowa?',
    topic: 'Anatomi Mózgu w Metapoznaniu',
    sectionRef: 'Sekcja 21.6',
    options: [
      { label: 'A', text: 'Ciało migdałowate generuje szybkie, nawykowe reakcje lękowe, a kora przedczołowa sprawuje nadzór metapoznawczy i wycisza impuls obronny.', isCorrect: true },
      { label: 'B', text: 'Ciało migdałowate odpowiada za logikę, a kora za strach.', isCorrect: false },
      { label: 'C', text: 'Obie struktury wyłączają się w trakcie myślenia.', isCorrect: false },
      { label: 'D', text: 'Nie uczestniczą w procesach decyzyjnych.', isCorrect: false }
    ],
    explanation: 'Trening metapoznawczy wzmacnia funkcjonalne połączenia hamujące między dlPFC a ciałem migdałowatym.',
    keyTakeaway: 'Świadomy nadzór kory przedczołowej poskramia impulsywność układu limficznego.'
  },
  {
    id: 15,
    question: 'Czym charakteryzuje się samoobserwacja bez oceniania (Non-Judgmental Awareness)?',
    topic: 'Samoobserwacja bez Oceny',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Rejestrowanie pojawiających się myśli i emocji jak chmur na niebie, bez natychmiastowego przypisywania im etykiet „dobry” czy „zły”.', isCorrect: true },
      { label: 'B', text: 'Całkowity brak jakichkolwiek myśli w głowie.', isCorrect: false },
      { label: 'C', text: 'Ocenianie każdego swojego kroku w skali 1-10.', isCorrect: false },
      { label: 'D', text: 'Ignorowanie konsekwencji własnych działań.', isCorrect: false }
    ],
    explanation: 'Przyglądanie się myśli bez wchodzenia z nią w fuzję poznawczą pozwala na zachowanie dystansu i spokoju.',
    keyTakeaway: 'Zauważ myśl, pozwól jej przepłynąć i wybierz swoją odpowiedź.'
  },
  {
    id: 16,
    question: 'Jak błąd Hindsight Bias (Mądrość Po Fakcie) niszczy naszą samoświadomość?',
    topic: 'Hindsight Bias',
    sectionRef: 'Sekcja 21.10',
    options: [
      { label: 'A', text: 'Po poznaniu wyniku zdarzenia wmawiamy sobie: „Od początku wiedziałem że tak będzie!”, zniekształcając pamięć o naszej wstępnej niepewności.', isCorrect: true },
      { label: 'B', text: 'Uniemożliwia zapamiętywanie dat urodzin.', isCorrect: false },
      { label: 'C', text: 'Zmusza do ciągłego czytania gazet historycznych.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje idealną trafność prognoz giełdowych.', isCorrect: false }
    ],
    explanation: 'Hindsight Bias uniemożliwia uczenie się na błędach, wywołując iluzję nieomylności retrospektywnej.',
    keyTakeaway: 'Uczciwa ocena decyzji wymaga oceny danych dostępnych w W MOMENCIE jej podejmowania.'
  },
  {
    id: 17,
    question: 'Na czym polega defuzja poznawcza (Cognitive Defusion) w Terapii Akceptacji i Zaangażowania (ACT)?',
    topic: 'Defuzja Poznawcza',
    sectionRef: 'Sekcja 21.14',
    options: [
      { label: 'A', text: 'Oddzielenie siebie od myśli poprzez zauważenie: „Mam myśl, że nie dam rady”, zamiast fuzji: „Nie dam rady”.', isCorrect: true },
      { label: 'B', text: 'Próba całkowitego wymazania myśli z głowy siłą woli.', isCorrect: false },
      { label: 'C', text: 'Głośne krzyczenie na własne myśli w pokoju.', isCorrect: false },
      { label: 'D', text: 'Picie dużej ilości wody podczas nauki.', isCorrect: false }
    ],
    explanation: 'Defuzja tworzy przestrzeń metapoznawczą, w której myśl jest uznana za wytwór umysłu, a nie za nienaruszalny nakaz działania.',
    keyTakeaway: 'Ty jesteś obserwatorem myśli, a nie samą myślą.'
  },
  {
    id: 18,
    question: 'Jaką funkcję w metapoznaniu pełni proces re-framingu (Przeformułowania Poznawczego)?',
    topic: 'Re-framing',
    sectionRef: 'Sekcja 21.15',
    options: [
      { label: 'A', text: 'Świadoma zmiana ramy interpretacyjnej danego zdarzenia w celu odnalezienia nowej, bardziej sprawczej perspektywy.', isCorrect: true },
      { label: 'B', text: 'Malowanie ramek na zdjęcia na nowy kolor.', isCorrect: false },
      { label: 'C', text: 'Oszukiwanie samego siebie że trudna sytuacja nie istnieje.', isCorrect: false },
      { label: 'D', text: 'Wyłączanie pamięci krótkotrwałej.', isCorrect: false }
    ],
    explanation: 'Re-framing nie jest naiwnym optymizmem — jest poszukiwaniem prawdziwej, lecz bardziej użytecznej ramy dla tego samego faktu.',
    keyTakeaway: 'Zmień ramę obrazu, a zobaczysz zupełnie inne możliwości działania.'
  },
  {
    id: 19,
    question: 'Co jest głównym wskaźnikiem wysokiego poziomu Dojrzałości Metapoznawczej?',
    topic: 'Dojrzałość Metapoznawcza',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Spokojna zdolność do obserwowania własnych emocji, nawyków i błędów z życzliwym dystansem oraz sprawna korekta działania bez utraty poczucia wartości.', isCorrect: true },
      { label: 'B', text: 'Brak jakichkolwiek błędów myślowych i emocji.', isCorrect: false },
      { label: 'C', text: 'Przekonanie o własnej wyższości nad innymi.', isCorrect: false },
      { label: 'D', text: 'Ciągłe zamartwianie się o przyszłość.', isCorrect: false }
    ],
    explanation: 'Dojrzałość metapoznawcza łączy czujną samoobserwację z głębokim samowspółczuciem i elastycznością wykonawczą.',
    keyTakeaway: 'Dojrzałość to spokój w obserwacji własnego umysłu i odważna korekta w działaniu.'
  },
  {
    id: 20,
    question: 'Jak metapoznanie pozwala domknąć I blok Tomu III (Tożsamość, Przekonania, Samoocena, Wartości)?',
    topic: 'Synteza Bloku I Tomu III',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Daje narzędzie nadzorcze, które pozwala badać naszą tożsamość, przekonania, samoocenę i wartości jako dynamiczny system, nad którym sprawujemy aktywną kontrolę.', isCorrect: true },
      { label: 'B', text: 'Narzuca zapomnienie wszystkich zdobytych wglądów.', isCorrect: false },
      { label: 'C', text: 'Eliminuje potrzebę podejmowania jakichkolwiek decyzji życiowych.', isCorrect: false },
      { label: 'D', text: 'Zmusza do zrezygnowania z rozwoju osobistego.', isCorrect: false }
    ],
    explanation: 'Metapoznanie jest spoiwem, które zamienia teorię w codzienną, autonomiczną praktykę samokształtowania.',
    keyTakeaway: 'Zyskałeś klucz do własnego umysłu — używaj go z mądrością i odwaga.'
  }
];

export const caseStudiesChapterTwentyOne: CaseStudy[] = [
  {
    id: 'studium-21-1-iluzja-wgladu',
    title: 'W sieci własnych racjonalizacji: Jak Iluzja Wglądu oślepiła menedżera Konrada',
    subtitle: 'Illusion of Insight, opór przed feedbackiem i przełom metapoznawczy',
    protagonist: 'Konrad, 43 lata, dyrektor operacyjny',
    context: 'Konrad uważał siebie za wzór samoświadomości. Po przeczytaniu kilkudziesięciu książek psychologicznych potrafił z łatwością analizować mechanizmy innych ludzi, całkowicie przeoczając własny agresywny styl zarządzania.',
    story: [
      'Konrad na zebraniach często podnosił głos, przerywał podwładnym i drwił z ich pomysłów. Pytany o te zachowania podawał wyrafinowane teorie psychologiczne: „Ja po prostu stosuję prowokatywną metodę wyciągania ludzi ze strefy komfortu dla ich własnego rozwoju”.',
      'Był to podręcznikowy przykład Iluzji Wglądu (Nisbett & Wilson) — Konrad tworzył post-hoc błyskotliwe rationalizacje, by ukryć przed sobą prosty fakt: nie potrafił kontrolować własnej irytacji.',
      'Dopiero gdy z jego działu odeszło 4 kluczowych specjalistów w ciągu miesiąca, zarząd nakazał mu udział w sesjach feedbackowych z użyciem nagrań wideo z zebrań.',
      'Obejrzenie własnego nagrania bez możliwości ucieczki w teorie było dla Konrada szokiem metapoznawczym. Po raz pierwszy zobaczył swoje zachowanie bez zniekształcającej soczewki własnych rationalizacji.'
    ],
    dialogue: [
      { speaker: 'Coach', text: 'Konrad, spójrz na slajd 12 nagrania. Dlaczego przerwałeś Ani w 3 sekundzie jej wypowiedzi i podniosłeś głos?', subtext: 'Zderzenie z obiektywnym materiałem dowodowym.' },
      { speaker: 'Konrad', text: 'Bo ja wiedziałem co ona chce powiedzieć... Chciałem oszczędzić czas zespołu...', subtext: 'Automatyczna racjonalizacja post-hoc wyciszana przez nagranie.' }
    ],
    decisionTaken: 'Konrad rozpoczął codzienną praktykę rejestracji pauzy poznawczej i przeprosił zespół za swoje dotychczasowe zachowanie.',
    whatProtagonistSaw: 'Własną rzekomą mądrość psychologiczną i misję edukacyjną.',
    whatWasMissed: 'Fakt, że jego zachowanie było zwykłą, niekontrolowaną impulsywnością emocjonalną.',
    psychologicalAnalysis: {
      coreMechanism: 'Iluzja Wglądu (Illusion of Insight) i racjonalizacja post-hoc.',
      cognitiveBiases: [
        { name: 'Blind Spot Bias', description: 'Dostrzeganie błędów u innych przy ślepocie na własne zniekształcenia.', impact: 'Niszczenie relacji z zespołem.' }
      ],
      defenseMechanisms: [
        { name: 'Intelektualizacja', explanation: 'Używanie teorii psychologicznych do usprawiedliwiania braku samokontroli.' }
      ],
      emotionalDynamic: 'Pycha poznawcza pękająca w zderzeniu z obiektywnym nagraniem wideo.'
    },
    decisionProcessAnalysis: {
      trigger: 'Oglądanie nagrania własnego zebrania na sesji coachingu.',
      attentionFocus: 'Własna twarz i reakcja przerażenia na twarzach podwładnych.',
      interpretation: '„Ja ich nie motywowałem... ja ich zastraszałem”.',
      emotion: 'Szok, wstyd, pokora.',
      impulse: 'Obrona, przerywanie nagrania.',
      action: 'Zatrzymanie się, akceptacja faktów i przeprosiny zespołu.',
      consequence: 'Odbudowa relacji i uratowanie działu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'mPFC i dlPFC', role: 'Przejście do obiektywnego monitorowania metapoznawczego', activationState: 'Aktywacja kory nadzorczej' }
      ],
      neurotransmitters: [
        { name: 'Serotonina i Dopamina', roleInScenario: 'Spadek pychy na rzecz stabilnego ugruntowania w faktach.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Widok własnego krzyku na nagraniu wywołuje skok tętna i wstyd.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Intelektualne uzasadnienie przemocy', description: 'Nazywanie własnej agresji „prowokatywnym rozwojem”.', vulnerabilityExploited: 'Arogancję i potrzebę dominacji.' }
      ],
      counterMeasures: [
        { step: '1. Obiektywny Zapis Wideo/Audio', script: '„Nie dyskutujemy o Twoich intencjach. Oglądamy twardy materiał wideo i analizujemy fakt”.', rationale: 'Przełamuje racjonalizację post-hoc.' }
      ]
    },
    alternativePath: 'Gdyby Konrad odrzucił nagranie, zostałby zwolniony z zarządu za mobbing.',
    readerQuestion: 'Jakie własne niedociągnięcia dorabiasz do pięknych teorii psychologicznych?',
    keyTakeaway: 'Teoretyczna wiedza o psychologii bez uczciwej samoobserwacji staje się jedynie bardziej wyrafinowaną formą samooszustwa.'
  },
  {
    id: 'studium-21-2-ruminacja-vs-metapoznanie',
    title: 'Błędne koło myśli: Jak Marta zamieniła jałową ruminację na sprawcze metapoznanie',
    subtitle: 'Ruminacja (Overthinking), pętla DMN i przełączenie na pytania sprawcze',
    protagonist: 'Marta, 29 lat, analityczka finansowa',
    context: 'Marta po popelnieniu błędu w wycenie przeżywała nocne gonitwy myśli. Przez 4 godziny w łóżku powtarzała w głowie te same pytania: „Dlaczego ja zawsze muszę coś zepsuć? Co szef sobie o mnie pomyśli? Dlaczego jestem taka nieuważna?”.',
    story: [
      'Marta uważała, że jej nocne zamartwianie się jest dowodem odpowiedzialności i „głębokiej autorefleksji”. W rzeczywistości była to jałowa ruminacja.',
      'Ruminacja podtrzymywała hiperaktywację DMN i ciała migdałowatego, uniemożliwiając sen i generując poranne wyczerpanie.',
      'Terapeutka uświadomiła Marcie różnicę: Ruminacja pyta bez końca „DLACZEGO?”, nie szukając rozwiązań. Metapoznanie pyta „CO?” i „JAK?”, prowadząc do konkretnej akcji.',
      'Marta wdrożyła Protokół Przełączenia: gdy przychodziła nocna myśl, zapisywała ją w Dzienniku Metapoznawczym i zadawała jedno pytanie: „Co konkretnie mogę zrobić z tym jutro o 8:00?”.'
    ],
    dialogue: [
      { speaker: 'Wewnętrzny Głos (Ruminacja)', text: 'Dlaczego znowu to zrobiłam? Jestem do niczego... Cała moja kariera się zawali...', subtext: 'Jałowa pętla lękowa w DMN.' },
      { speaker: 'Marta (Metapoznanie)', text: 'Stop. To jest myśl lękowa, a nie fakt. Jutro o 8:00 wyślę korektę tabeli. Teraz idę spać.', subtext: 'Defuzja poznawcza i przełączenie na akcję.' }
    ],
    decisionTaken: 'Marta wdrożyła Dziennik Metapoznawczy i zamieniła pytania „Dlaczego” na pytania „Co zrobić”.',
    whatProtagonistSaw: 'Nocne zamartwianie się jako dowód troski o pracę.',
    whatWasMissed: 'Fakt, że ruminacja niszczyła jej zdrowie bez przynoszenia jakiejkolwiek korzyści merytorycznej.',
    psychologicalAnalysis: {
      coreMechanism: 'Ruminacja poznawcza (Overthinking) vs Metapoznawcza Kontrola Wykonawcza.',
      cognitiveBiases: [
        { name: 'Katastrofizacja', description: 'Rozmnażanie czarnych scenariuszy bez weryfikacji faktów.', impact: 'Bezsenność i wyczerpanie.' }
      ],
      defenseMechanisms: [
        { name: 'Ruminacja jako iluzja działania', explanation: 'Zamartwianie się jako zastępnik realnego rozwiązania.' }
      ],
      emotionalDynamic: 'Ciągły lęk, poczucie bezradności i poranne wyczerpanie.'
    },
    decisionProcessAnalysis: {
      trigger: 'Przypomnienie sobie błędu z pracy w łóżku o 23:00.',
      attentionFocus: 'Czarne scenariusze i własna niedostateczność.',
      interpretation: '„Moje zamartwianie się jest potrzebne”.',
      emotion: 'Lęk, panika, bezsenność.',
      impulse: 'Przewracanie się z boku na bok i odtwarzanie rozmów.',
      action: 'Włączenie światła, zapisanie akcji w dzienniku i defuzja.',
      consequence: 'Głęboki sen i wysłanie korekty rano.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'DMN i Ciało migdałowate', role: 'Hiperaktywacja pętli ruminacyjnej', activationState: 'Obniżenie aktywacji po defuzji' },
        { region: 'dlPFC', role: 'Przełączenie uwagi na konkretny plan akcji', activationState: 'Wzrost aktywacji' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Melatolina', roleInScenario: 'Spadek kortyzolu pozwalający na naturalny wyrzut melatoniny.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Myśl o błędzie wywołuje skok tętna wyciszany zapisem na piśmie.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Pułapka Overthinkingu', description: 'Mylenie zamartwiania się z rozwiązywaniem problemu.', vulnerabilityExploited: 'Lęk przed porażką.' }
      ],
      counterMeasures: [
        { step: '1. Pytanie CO zamiast DLACZEGO', script: '„Zamiast pytać dlaczego to się stało, pytam: CO dokładnie mogę z tym zrobić jutro o 8:00?”.', rationale: 'Przełącza DMN na kontrolę wykonawczą.' }
      ]
    },
    alternativePath: 'Gdyby Marta trwała w ruminacji, nabawiłaby się przewlekłej bezsenności i nerwicy lękowej.',
    readerQuestion: 'Czy Twoje nocne myśli prowadzą do konkretnego planu działania, czy są tylko jałowym katastrofizowaniem?',
    keyTakeaway: 'Nie myl zamartwiania się z myśleniem. Prawdziwe myślenie kończy się planem akcji.'
  },
  {
    id: 'studium-21-3-pauza-poznawcza',
    title: 'W szczelinie między bodźcem a reakcją: Jak Robert opanował wybuchy wściekłości',
    subtitle: 'Pauza poznawcza (Cognitive Pause), wyciszanie ciała migdałowatego i samokontrola',
    protagonist: 'Robert, 37 lat, architekt wnętrz',
    context: 'Robert słynął z gwałtownego charakteru. Gdy podwykonawca na budowie zrobił coś niezgodnie z rysunkiem, Robert wpadał w szał, krzyczał i rzucał przedmiotami, co niszczyło jego reputację.',
    story: [
      'Robert tłumaczył się: „Ja po prostu mam krótki lont, reaguję błyskawicznie, to jest silniejsze ode mnie!”. Uważał swój wybuch za automatyczny odruch biologiczny.',
      'Terapeuta zapoznał go z koncepcją Pauzy Poznawczej Viktor Frankla: „Między bodźcem a reakcją jest przestrzeń. W tej przestrzeni leży nasza wolność wyboru”.',
      'Robert zaczął trenować 3-sekundową pauzę oddechową (Kotwica Ciała) za każdym razem, gdy widział błąd na budowie. Zamiast natychmiast krzyczeć, brał głęboki wdech i zadawał sobie pytanie: „Jaka jest moja reakcja docelowa?”.',
      'Trening pauzy poznawczej pozwolił mu przejąć kontrolę nad odruchem limbicznym. Jego relacje z budowlańcami uległy radykalnej poprawie, a projekty zaczęły być dowożone bez opóźnień.'
    ],
    dialogue: [
      { speaker: 'Budowlaniec', text: 'Panie Robercie, ściana wyszła 5 cm w lewo, pomyliliśmy rysunki.', subtext: 'Bodzeć wyzwalający potencjalny wybuch.' },
      { speaker: 'Robert (po 3-sekundowej pauzie)', text: 'Rozumiem. Zatrzymajmy prace. Pokażcie mi rysunek i zobaczmy jak to najszybciej skorygować.', subtext: 'Autonomiczna, opanowana odpowiedź z dlPFC.' }
    ],
    decisionTaken: 'Robert wdrożył 3-sekundową pauzę oddechową i przejął kontrolę nad automatycznym atakiem.',
    whatProtagonistSaw: 'Swoją wściekłość jako nieunikniony odruch biologiczny.',
    whatWasMissed: 'Fakt, że miedzy bodźcem a reakcją zawsze istnieje przestrzeń na świadomy wybór.',
    psychologicalAnalysis: {
      coreMechanism: 'Pauza Poznawcza (Cognitive Pause) i odgórna kontrola przedczołowa nad ciałem migdałowatym.',
      cognitiveBiases: [
        { name: 'Iluzja braku wyboru', description: 'Przekonanie że emocja MUSI automatycznie prowadzić do agresywnego zachowania.', impact: 'Zwalnianie się z odpowiedzialności.' }
      ],
      defenseMechanisms: [
        { name: 'Acting out', explanation: 'Natychmiastowe rozładowanie napięcia emocjonalnego przez krzyk i agresję.' }
      ],
      emotionalDynamic: 'Gwałtowny skok wściekłości wyciszany przywspółczulnym oddechem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Widok błędnie wybudowanej ściany.',
      attentionFocus: 'Fala gorąca w ciele i impuls do krzyku.',
      interpretation: '„Mam 3 sekundy pauzy. Wybieram spokój i rozwiązanie”.',
      emotion: 'Złość wyciszana do poziomu opanowania.',
      impulse: 'Krzyk i rzucenie miarką.',
      action: '3 głębokie oddechy i spokojna rozmowa o korekcie.',
      consequence: 'Szybka naprawa błędu i zachowanie szacunku ekipy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC i ACC', role: 'Hamowanie impulsu limbicznego w szczelinie czasowej', activationState: 'Wzrost aktywacji kontrolnej' },
        { region: 'Ciało migdałowate', role: 'Generowanie pierwotnego impulsu walki', activationState: 'Wyhamowanie reakcji' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Spadek poziomu pobudzenia pod wpływem aktywacji nerwu błędnego.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Pauza 3-sekundowa daje czas na dotarcie sygnału do kory przedczołowej.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Mityczny krótki lont', description: 'Tłumaczenie braku samokontroli cechą temperamentu.', vulnerabilityExploited: 'Wygodę i impulsywność.' }
      ],
      counterMeasures: [
        { step: '1. Kotwica Oddechowa 3-Sekund', script: '„Widzę błąd -> Biorę wdech -> Liczę do 3 -> Dopiero wtedy mówię”.', rationale: 'Tworzy fizyczną pauzę poznawczą.' }
      ]
    },
    alternativePath: 'Gdyby Robert nie wdrożył pauzy, pobiłby się z podwykonawcą i stracił licencję.',
    readerQuestion: 'Jak długa jest Twoja pauza między bodźcem emocjonalnym a reakcją werbalną?',
    keyTakeaway: 'Twoja wolność leży w pauzie między tym, co Cię spotyka, a tym, jak na to odpowiadasz.'
  },
  {
    id: 'studium-21-4-kalibracja-pewnosci',
    title: 'Ślepa pewność w biznesie: Jak zła kalibracja metapoznawcza zniszczyła inwestycję Daniela',
    subtitle: 'Metacognitive Calibration, Overconfidence i dziennik prognoz',
    protagonist: 'Daniel, 41 lat, inwestor w branży nieruchomości',
    context: 'Daniel był w 100% pewien, że zakup działki pod Warszawą i budowa osiedla przyniesie 30% zysku w rok. Ignorował pytania doradców o warunki zabudowy i plany przestrzenne.',
    story: [
      'Daniel cierpiał na fatalną kalibrację metapoznawczą: jego subiektywna pewność wynosiła 100%, podczas gdy obiektywna trafność jego wiedzy o prawie budowlanym wynosiła zaledwie 30%.',
      'Mylił gwałtowną pewność emocjonalną z merytoryczną poprawnością sądu (Certainty-Accuracy Fallacy). Odrzucał audyty prawne jako „zbędne koszty”.',
      'Po zakupie ziemi okazało się, że przez działkę przebiega planowana linia wysokiego napięcia, co uniemożliwia jakąkolwiek budowę przez najbliższe 10 lat. Wartość ziemi spadła o 70%.',
      'Dopiero ta katastrofa zmusiła Daniela do nauki kalibracji metapoznawczej: zaczął szacować ilościowo prawdopodobieństwo i powoływać niezależnych audytorów do każdego projektu.'
    ],
    dialogue: [
      { speaker: 'Prawnik', text: 'Daniel, nie mamy jeszcze wypisu z planu zagospodarowania. Wstrzymaj przelew!', subtext: 'Merytoryczny sygnał ostrzegawczy.' },
      { speaker: 'Daniel', text: 'Ja wiem jak działają te urzędy! Załatwię to w tydzień, nie ma żadnego ryzyka! Przelewaj kapitał!', subtext: 'Zła kalibracja metapoznawcza i błąd pewności.' }
    ],
    decisionTaken: 'Daniel kupił działkę bez audytu prawnego na podstawie ślepej pewności siebie.',
    whatProtagonistSaw: 'Pewny zysk i własny nos do interesów.',
    whatWasMissed: 'Twarde zapisy w urzędowych księgach wieczystych i planach przestrzennych.',
    psychologicalAnalysis: {
      coreMechanism: 'Brak kalibracji metapoznawczej (Metacognitive Miscalibration) i Overconfidence Effect.',
      cognitiveBiases: [
        { name: 'Certainty-Accuracy Fallacy', description: 'Mylenie siły emocjonalnego przekonania z obiektywną prawdą.', impact: 'Tragiczna decyzja finansowa.' }
      ],
      defenseMechanisms: [
        { name: 'Wyparcie ryzyka', explanation: 'Traktowanie ostrzeżeń prawnika jako zbędnej biurokracji.' }
      ],
      emotionalDynamic: 'Ślepy huraoptymizm zakończony drastycznym upadkiem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Okazja zakupu działki poniżej ceny rynkowej.',
      attentionFocus: 'Wizja szybkiego zysku 30%.',
      interpretation: '„Jestem genialnym inwestorem, poradzę sobie ze wszystkim”.',
      emotion: 'Chciwość, pycha.',
      impulse: 'Natychmiastowy przelew zaliczki.',
      action: 'Podpisanie aktu bez audytu.',
      consequence: 'Zamrożenie milionów złotych w bezużytecznej ziemi.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'ACC', role: 'Niedostateczna sygnalizacja ryzyka przez brak kalibracji', activationState: 'Brak aktywacji' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Pętla nagrody zasilana wizją zysku wyłączająca krytyczne myślenie.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Ostrzeżenie prawnika zlekceważone uśmiechem pychy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Presja czasu i okazjonalność', description: 'Sprzedający narzucał pośpiech, by uniemożliwić audyt.', vulnerabilityExploited: 'Chciwość i pewność siebie.' }
      ],
      counterMeasures: [
        { step: '1. Dziennik Kalibracji Prognoz', script: '„Oceniam pewność tej decyzji na 90%. Zanim przeleję środki, wymuszam niezależny audyt merytoryczny”.', rationale: 'Urealnia kalibrację metapoznawczą.' }
      ]
    },
    alternativePath: 'Gdyby Daniel poczekał 3 dni na wypis z planu, uniknąłby straty milionów złotych.',
    readerQuestion: 'W jakich decyzjach mylisz siłę swojego optymizmu z twardymi faktami?',
    keyTakeaway: 'Pewność siebie to stan emocjonalny, a trafność to stan faktów. Nigdy ich nie myl.'
  },
  {
    id: 'studium-21-5-meta-warstwa-integracja',
    title: 'Nawigator własnego umysłu: Jak Krzysztof zintegrował 5 filarów Tomu III',
    subtitle: 'Tożsamość, Przekonania, Samoocena, Wartości i Metapoznanie w praktyce życiowej',
    protagonist: 'Krzysztof, 50 lat, dyrektor generalny i mentor biznesowy',
    context: 'Krzysztof po przejściu przez kryzys wieku średniego, rozwód i wypalenie zawodowe podjął głęboką pracę nad sobą. Zintegrował wiedzę z zakresu architektury umysłu w jeden spójny system samoregulacji.',
    story: [
      'Krzysztof nauczył się patrzeć na swoją tożsamość jako na ewoluujący proces (Rozdział 1), uwalniając się od sztywnej etykiety „prezesa-pracoholika”.',
      'Przekształcił swoje dotychczasowe dogmaty w hipotezy testowe (Rozdział 2), wykształcając pokorę epistemiczną i umiejętność słuchania innych.',
      'Oparł swoją samoocenę na wewnętrznym kompasie wartości i twardych dowodach sprawczości (Rozdział 3), całkowicie odcinając się od porównań społecznych.',
      'Zdefiniował nienaruszalne wartości (Rozdział 4) i zaczął zarządzać czasem zgodnie z zasadą Pareto. A nad wszystkim postawił czujnego obserwatora metapoznawczego (Rozdział 5).',
      'Krzysztof stał się człowiekiem o głębokiej autonomii, spokoju ducha i niezwykłej skuteczności w prowadzeniu ludzi.'
    ],
    dialogue: [
      { speaker: 'Młody Menedżer', text: 'Krzysztof, jak ty to robisz, że w największym kryzysie w firmie zachowujesz taki spokój i podejmujesz trafne decyzje?', subtext: 'Podziw dla dojrzałości metapoznawczej.' },
      { speaker: 'Krzysztof', text: 'Widzę emocje i ryzyka, ale nie jestem moimi emocjami. Mam proces, mam wartości i mam pauzę przed reakcją.', subtext: 'Pełna integracja Meta-Warstwy Tomu III.' }
    ],
    decisionTaken: 'Krzysztof stworzył osobczy system codziennej samoobserwacji i kalibracji decyzji oparty na 5 filarach.',
    whatProtagonistSaw: 'Własny umysł jako skomplikowany, ale obserwowalny i sterowalny system.',
    whatWasMissed: 'Nic — Krzysztof wykształcił pełną przejrzystość metapoznawczą.',
    psychologicalAnalysis: {
      coreMechanism: 'Pełna integracja Meta-Warstwy Tomu III: Nadzór Metapoznawczy nad procesami tożsamości, przekonań, samooceny i wartości.',
      cognitiveBiases: [
        { name: 'Redukcja wszystkich zniekształceń', description: 'Świadome wykrywanie i neutralizowanie błędów w czasie rzeczywistym.', impact: 'Niezwykła trafność decyzyjna.' }
      ],
      defenseMechanisms: [
        { name: 'Świadoma samoregulacja', explanation: 'Korekta zachowania z pozycji życzliwego obserwatora.' }
      ],
      emotionalDynamic: 'Głęboki, niezmącony spokój, spójność i duma z własnej drogi.'
    },
    decisionProcessAnalysis: {
      trigger: 'Kryzys biznesowy lub relacyjny.',
      attentionFocus: 'Meta-obserwacja własnych reakcji i faktów.',
      interpretation: '„Oto wyzwanie. Mam narzędzia, mam wartości, wybieram najlepszy krok”.',
      emotion: 'Spokój, skupienie, jasność.',
      impulse: 'Brak impulsywności.',
      action: 'Przemyślane, zrównoważone działanie.',
      consequence: 'Rozwiązanie problemu i budowanie autorytetu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Cała Sieć Kontroli Wykonawczej (FPN) i mPFC', role: 'Maksymalna synchronizacja procesów nadzorczych i emocjonalnych', activationState: 'Optymalna tonacja' }
      ],
      neurotransmitters: [
        { name: 'Równowaga Dopaminowo-Serotoninowa', roleInScenario: 'Stan wysokiego skupienia i poczucia dobrostanu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Sygnał stresowy jest natychmiast rejestrowany przez ACC i mitygowany przez dlPFC.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Odporność na wszelką manipulację', description: 'Dzięki znajomości własnych wartości i mechanizmów Krzysztof jest całkowicie niewrażliwy na szantaż emocjonalny.', vulnerabilityExploited: 'Brak podatności.' }
      ],
      counterMeasures: [
        { step: '1. Osobisty System Samoregulacji', script: '„Obserwuję mój umysł, kieruję moimi wartościami i podejmuję autonomiczne decyzje”.', rationale: 'Gwarantuje pełną autonomię psychologiczną.' }
      ]
    },
    alternativePath: 'Krzysztof stał się autentycznym liderem własnego życia i wzorem dla innych.',
    readerQuestion: 'Czy jesteś gotów zacząć traktować swój umysł jako system, który możesz świadomie obserwować i udoskonalać?',
    keyTakeaway: 'Autonomia to nie stan, w którym nie masz problemów. To zdolność świadomego nawigowania w swoim umyśle w każdym kryzysie.'
  }
];

export const selfExercisesChapterTwentyOne: SelfExercise[] = [
  {
    id: 'ex-21-1',
    title: 'Dziennik Obserwatora Metapoznawczego',
    subtitle: 'Praktyka rozdzielania surowych faktów od interpretacji',
    objective: 'Wykształcenie nawyku rejestrowania zdarzeń bez natychmiastowego dorabiania dramatycznych teorii.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Świadome rozdzielenie bodźca od interpretacji aktywuje grzbietowo-boczną korę przedczołową i wycisza reakcję limbiczną.',
    steps: [
      {
        stepNumber: 1,
        title: 'Rejestracja surowego faktu',
        instruction: 'Zapisz zdarzenie z dzisiaj w sposób czysto obiektywny, tak jak zarejestrowałaby je kamera wideo (bez przymiotników oceniasjących).',
        promptText: 'Surowy fakt wideo:',
        placeholder: 'Fakt: Szef wszedł do pokoju, nie powiedział „dzień dobry” i usiadł przy biurku o 9:01...'
      },
      {
        stepNumber: 2,
        title: 'Uchwycenie automatycznej interpretacji',
        instruction: 'Zapisz, jaką historię Twój umysł natychmiast do tego faktu dośpiewał.',
        promptText: 'Automatyczna historia mojego umysłu:',
        placeholder: 'Historia: On jest na mnie wściekły za ten raport, zaraz mnie wezwie i opieprzy...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie 2 alternatywnych wyjaśnień',
        instruction: 'Zapisz 2 inne, równie prawdopodobne wyjaśnienia tego samego faktu.',
        promptText: 'Alternatywne wyjaśnienia:',
        placeholder: '1. Szef jest zamyślony bo ma trudną rozmowę z zarządem...\n2. Boli go ząb i spieszył się do łazienki...'
      }
    ],
    reflectionQuestions: [
      'Jak często Twoja pierwsza automatyczna historia okazuje się fałszywa?',
      'O ile lżejsze staje się Twoje ciało, gdy nie wierzysz bezkrytycznie w pierwszą myśl?'
    ]
  },
  {
    id: 'ex-21-2',
    title: 'Trening 3-Sekundowej Pauzy Poznawczej',
    subtitle: 'Budowanie szczeliny między bodźcem a reakcją',
    objective: 'Wykształcenie fizycznego nawyku wyhamowania impulsywnej odpowiedzi werbalnej lub behawioralnej.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Trzysekundowa pauza oddechowa stwarza okno czasowe na dotarcie sygnału z podkorowego ciała migdałowatego do kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wyznaczenie kotwicy pauzy',
        instruction: 'Wybierz sygnał, który od dziś będzie dla Ciebie wezwaniem do 3-sekundowej pauzy (np. dźwięk powiadomienia, trudne pytanie od współpracownika).',
        promptText: 'Moja kotwica pauzy:',
        placeholder: 'Moja kotwica: Gdy ktoś zadaje mi trudne lub prowokujące pytanie na zebraniu...'
      },
      {
        stepNumber: 2,
        title: 'Procedura 3 sekund',
        instruction: 'Zapisz dokładny przebieg Twojej pauzy: 1. Zamknięcie ust, 2. Głęboki wdech do brzucha, 3. Ciche policzenie: 1... 2... 3...',
        promptText: 'Procedura pauzy:',
        placeholder: '1. Zamykam usta, 2. Biorę wdech nosem, 3. Liczę w myśli do 3, 4. Pytam sam siebie: Jaki jest mój cel?'
      },
      {
        stepNumber: 3,
        title: 'Trening na sucho',
        instruction: 'Wyobraź sobie prowokującą sytuację i przećwicz procedurę 3 sekund 5 razy zrzadką.',
        promptText: 'Potwierdzenie treningu:',
        placeholder: 'Przećwiczono na sucho 5 razy. Ciało zapamiętało odruch.'
      }
    ],
    reflectionQuestions: [
      'Jak ten krótki odruch chroni Cię przed wypowiedzeniem słów, których później żałujesz?',
      'Jak reaguje rozmówca, gdy widzi Twoje opanowanie i przemyślaną odpowiedź?'
    ]
  },
  {
    id: 'ex-21-3',
    title: 'Dziennik Kalibracji Prognoz i Pewności',
    subtitle: 'Urealnianie subiektywnej pewności z obiektywną trafnością',
    objective: 'Nauczenie się ilościowego szacowania prawdopodobieństwa i rozbrajanie Błędu Mądrości Po Fakcie.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Ilościowy zapis prognozy przed poznałem wyniku zmusza układ nadzorczy do nauki na błędach i koryguje Overconfidence Effect.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis prognozy i subiektywnej pewności',
        instruction: 'Przed podjęciem ważnej decyzji zapisz swoją prognozę i oceń swoją pewność w skali 0-100% (np. Ta rekrutacja zamknie się w 2 tygodnie - Pewność: 90%).',
        promptText: 'Prognoza i pewność:',
        placeholder: 'Prognoza: Klient podpisze umowę w tym tygodniu. Pewność: 85%.'
      },
      {
        stepNumber: 2,
        title: 'Weryfikacja obiektywnego wyniku po czasie',
        instruction: 'Po upływie wyznaczonego czasu zapisz rzeczywisty wynik zdarzenia.',
        promptText: 'Obiektywny wynik:',
        placeholder: 'Wynik: Klient przesunął decyzję o miesiąc z powodu braku budżetu.'
      },
      {
        stepNumber: 3,
        title: 'Analiza luki kalibracyjnej',
        instruction: 'Zapisz, dlaczego Twoja pewność była przesadzona i jaką lukę w informacjach przeoczyłeś.',
        promptText: 'Lekcja kalibracyjna:',
        placeholder: 'Moja pewność była za wysoka bo nie sprawdziłem cyklu budżetowego klienta. Następnym razem dodam to pytanie na pierwszej rozmowie.'
      }
    ],
    reflectionQuestions: [
      'O ile częściej mylisz się w sprawach, w których byłeś „w 100% pewien”?',
      'Jak rejestracja prognoz uczy Cię pokory epistemicznej?'
    ]
  },
  {
    id: 'ex-21-4',
    title: 'Praktyka Defuzji Poznawczej (ACT)',
    subtitle: 'Uwalnianie się od dyktatu automatycznych myśli',
    objective: 'Nauczenie się dystansowania od własnych myśli lękowych poprzez zmianę ramy językowej.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Zmiana ramy z „Jestem nieudacznikiem” na „Zauważam myśl, że jestem nieudacznikiem” aktywuje sieć kontroli i zmniejsza fuzję poznawczą.',
    steps: [
      {
        stepNumber: 1,
        title: 'Uchwycenie trudnej myśli w fuzji',
        instruction: 'Zapisz myśl, która często Cię paraliżuje w formie bezpośredniej (np. Nie dam rady, Zepsuję to).',
        promptText: 'Myśl w fuzji:',
        placeholder: 'Myśl: Kompromituję się na tym zebraniu...'
      },
      {
        stepNumber: 2,
        title: 'Zastosowanie ramy obserwatora',
        instruction: 'Przepisuj tę myśl dodając na początku frazę: „Mam myśl, że...”',
        promptText: 'Myśl z dystansem:',
        placeholder: 'Mam myśl, że kompromituję się na tym zebraniu...'
      },
      {
        stepNumber: 3,
        title: 'Głęboka defuzja metapoznawcza',
        instruction: 'Przepisuj myśl dodając frazę: „Zauważam, że mój umysł produkuje teraz myśl, że...”',
        promptText: 'Głęboka defuzja:',
        placeholder: 'Zauważam, że mój umysł produkuje teraz myśl, że kompromituję się na tym zebraniu. Dziękuję umyśle za tę myśl, ale wracam do prezentacji.'
      }
    ],
    reflectionQuestions: [
      'Jak zmiana słów wpływa na ciężar emocjonalny, jaki niesie ta myśl?',
      'Czy widzisz różnicę między BYCIEM myślą a BYCIEM OBSERWATOREM myśli?'
    ]
  },
  {
    id: 'ex-21-5',
    title: 'Audyt Ślepych Plamek (Blind Spot Survey)',
    subtitle: 'Używanie otoczenia jako obiektywnego lustra',
    objective: 'Zebranie życzliwego i rzetelnego feedbacku od 2 osób na temat Twoich schematów, których sam nie dostrzegasz.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Zewnętrzny feedback przełamuje automatyczne racjonalizacje DMN i pozwala korygować błędy w zachowaniu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór 2 zaufanych osób',
        instruction: 'Wybierz 2 osoby z Twojego otoczenia (partner, przyjaciel, życzliwy współpracownik), które znają Cię dobrze i mówią prawdę.',
        promptText: 'Moi 2 obiektywni obserwatorzy:',
        placeholder: '1. Przyjaciel Michał\n2. Współpracownik Ewa'
      },
      {
        stepNumber: 2,
        title: 'Zadanie 2 pytań diagnostycznych',
        instruction: 'Zapytaj te osoby: 1. Jaka jest moja największa mocna strona? 2. Jaki nawyk lub zachowanie najczęściej utrudnia mi osiąganie celów, a którego sam nie zauważam?',
        promptText: 'Zebrany feedback:',
        placeholder: 'Michał: Masz świetne pomysły, ale gdy ktoś się nie zgadza, natychmiast zamykasz się w sobie i przestajesz rozmawiać...'
      },
      {
        stepNumber: 3,
        title: 'Metapoznawcza akceptacja bez obrony',
        instruction: 'Zapisz zebrany feedback bez szukania usprawiedliwień i podziękuj za niego.',
        promptText: 'Moja lekcja ze ślepej plamki:',
        placeholder: 'Akceptuję fakt, że wycofanie się z dyskusji jest moim rodzajem zniekształcenia obronnego. Zaplanuję reakcję zastępczą.'
      }
    ],
    reflectionQuestions: [
      'O ile trudniej dostrzec własną ślepą plamkę bez pomocy drugiego człowieka?',
      'Jak docenić odwagę osoby, która dała Ci szczery i trudny feedback?'
    ]
  },
  {
    id: 'ex-21-6',
    title: 'Zamiana „DLACZEGO” na „CO” (Overthinking Detox)',
    subtitle: 'Przełączanie ruminacji na sprawcze rozwiązywanie problemów',
    objective: 'Przekształcenie jałowych pytań lękowych w pytania ukierunkowane na akcję.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Pytania typu „CO” aktywują kwadrant zadaniowy kory przedczołowej, hamując jałowe krążenie w DMN.',
    steps: [
      {
        stepNumber: 1,
        title: 'Uchwycenie pytania ruminacyjnego („Dlaczego?”)',
        instruction: 'Zapisz pytanie, które często męczy Cię w głowie (np. Dlaczego ja zawsze mam pecha? Dlaczego on tak do mnie powiedział?).',
        promptText: 'Moje pytanie ruminacyjne:',
        placeholder: 'Pytanie: Dlaczego szef zawsze krytykuje akurat moje pomysły?'
      },
      {
        stepNumber: 2,
        title: 'Przepisanie na pytanie sprawcze („CO?”)',
        instruction: 'Przepisuj to pytanie na formułę: „CO konkretnie mogę zrobić w tej sytuacji?” lub „JAK mogę przygotować się do następnej rozmowy?”.',
        promptText: 'Moje pytanie sprawcze:',
        placeholder: 'Pytanie sprawcze: CO konkretnie mogę poprawić w strukturze mojej kolejnej prezentacji, by argumenty były niepodważalne?'
      },
      {
        stepNumber: 3,
        title: 'Określenie 1 akcji wykonawczej',
        instruction: 'Zapisz jedno działanie, które wykonasz w odpowiedzi na nowe pytanie.',
        promptText: 'Moja akcja wykonawcza:',
        placeholder: 'Prześlę wstępny szkic prezentacji do konsultacji z Ewą w czwartek.'
      }
    ],
    reflectionQuestions: [
      'O ile szybciej odzyskujesz energię do działania po zamianie pytań?',
      'Jak ta prosta zmiana nawyku językowego chroni Twój sen?'
    ]
  },
  {
    id: 'ex-21-7',
    title: 'Syntetyczny Rejestr Spójności Bloku I Tomu III',
    subtitle: 'Integracja Tożsamości, Przekonań, Samooceny i Wartości',
    objective: 'Sprawdzenie spójności między Twoim nowym obrazem siebie, przekonaniami, samooceną i wartościami.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Całościowa synteza struktur poznawczych buduje zintegrowany, odporny na kryzysy model samoregulacji w mPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Tożsamość i Przekonania (Rozdziały 1 i 2)',
        instruction: 'Napisz kim jesteś w ujęciu procesowym i jaka jest Twoja główna zaktualizowana hipoteza o świecie.',
        promptText: 'Tożsamość i Przekonanie:',
        placeholder: 'Jestem ewoluującym człowiekiem, który uczy się na błędach. Świat jest skomplikowany, ale mam narzędzia, by w nim nawigować.'
      },
      {
        stepNumber: 2,
        title: 'Samoocena i Wartości (Rozdziały 3 i 4)',
        instruction: 'Napisz na czym opiera się Twoja samoocena i jaka wartość prowadzi Twoje codzienne wybory.',
        promptText: 'Samoocena i Wartość:',
        placeholder: 'Moja samoocena opiera się na twardych dowodach pracy i wierności mojej wartości: Uczciwości i Troski o bliskich.'
      },
      {
        stepNumber: 3,
        title: 'Nadzór Metapoznawczy (Rozdział 5)',
        instruction: 'Napisz zdanie określające Twoją rolę jako obserwatora własnego umysłu.',
        promptText: 'Mój nadzór metapoznawczy:',
        placeholder: 'Jestem uważnym obserwatorem moich myśli i emocji. Zanim zareaguję, biorę oddech i wybieram odpowiedź w zgodzie z moim kompasem.'
      }
    ],
    reflectionQuestions: [
      'Jak czujesz się patrząc na ten zintegrowany fundament własnej autonomii?',
      'Jak ten fundament zmienia Twoją postawę wobec wyzwań, które czekają Cię w kolejnych tomach?'
    ]
  },
  {
    id: 'ex-21-8',
    title: 'Manifest Metapoznawczej Autonomii',
    subtitle: 'Zwieńczenie bloku I Tomu III i osobista deklaracja dojrzałości',
    objective: 'Stworzenie ostatecznego manifestu nawigatora własnego umysłu.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Kodyfikacja manifestu tworzy najwyższy skrypt torujący dla kory przedczołowej na całe przyszłe życie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Moja przestrzeń wolności',
        instruction: 'Napisz zdanie o swojej wolności wyboru między bodźcem a reakcją.',
        promptText: 'Moja przestrzeń wyboru:',
        placeholder: 'Żaden bodziec ani emocja nie ma władzy wymusić na mnie automatycznej reakcji. Zawsze mam przestrzeń na pauzę i wybór.'
      },
      {
        stepNumber: 2,
        title: 'Moja postawa wobec własnego umysłu',
        instruction: 'Napisz jak będziesz traktować swoje myśli, błędy i sukcesy.',
        promptText: 'Postawa wobec umysłu:',
        placeholder: 'Traktuję moje myśli jako hipotezy, moje błędy jako darmowe lekcje, a moje sukcesy jako owoc mojej pracy.'
      },
      {
        stepNumber: 3,
        title: 'Ostateczny manifest dojrzałości',
        instruction: 'Napisz 2-zdaniowy manifest nawigatora własnego umysłu.',
        promptText: 'Mój manifest dojrzałości:',
        placeholder: 'Jestem gospodarzem mojego umysłu i autorem mojej opowieści. Żyję w zgodzie z moimi wartościami, stale ucząc się i rozwijając w świecie.'
      }
    ],
    reflectionQuestions: [
      'Gdzie umieścisz ten manifest, by towarzyszył Ci każdego dnia?',
      'O ile bardziej spójnym i silnym człowiekiem czujesz się po przejściu tej drogi?'
    ]
  }
];

export const chapterTwentyOne: Chapter = {
  number: 21,
  volume: 3,
  volumeChapterNumber: 5,
  title: 'Świadomość siebie i metapoznanie',
  subtitle: 'Metacognition, nadzór wykonawczy, granice introspekcji, kalibracja pewności siebie i integracja bloku I Tomu III',
  leadParagraph: 'Osiągnęliśmy punkt zwrotny naszej podróży przez architekturę ludzkiego umysłu. Poznaliśmy mechanizmy tworzenia tożsamości, powstawania przekonań, kształtowania samooceny oraz wyznaczania wartości. Jednak wiedza ta pozostałaby jedynie martwym zbiorem teorii, gdyby umysł nie posiadał zdolności najwyższego rzędu — zdolności do spojrzenia na samego siebie z dystansu. Metapoznanie (Metacognition) to umiejętność myślenia o własnym myśleniu, monitorowania własnych emocji i korygowania własnych decyzji w czasie rzeczywistym. To ten nadzorczy reflektor świadomości zamienia nas z bezwolnych odtwórców automatycznych skryptów w prawdziwych gospodarzy własnego życia.',
  totalEstimatedPages: 66,
  sections: [
    {
      id: 'sec-21-1',
      pageNumber: 1,
      sectionNumber: '21.1',
      title: 'Świadomość Siebie (Self-Awareness) i Architektura Metapoznania',
      category: 'teoria',
      readingTimeMinutes: 15,
      quote: {
        text: 'Dopóki nie uczynisz nieświadomego świadomym, będzie ono kierować Twoim życiem, a Ty będziesz nazywał to przeznaczeniem.',
        author: 'Carl Gustav Jung'
      },
      paragraphs: [
        'Świadomość siebie (Self-Awareness) nie jest stanem zero-jedynkowym, lecz wielopoziomową zdolnością do monitorowania własnych procesów wewnętrznych.',
        'Metapoznanie (Metacognition) jest pojęciem ukutym przez Johna Flavella w 1976 roku i oznacza wyższą funkcję wykonawczą umysłu: wiedzę o własnych procesach poznawczych oraz zdolność do ich aktywnej regulacji.',
        'System metapoznawczy składa się z dwóch powiązanych ze sobą pętli: 1. Monitorowania metapoznawczego (obserwacja: „Czy rozumiem ten tekst?”, „Czy czuję złość?”); 2. Kontroli metapoznawczej (decyzja: „Muszę przeczytać ten akapit wolniej”, „Muszę wziąć oddech przed odpowiedzią”).'
      ]
    },
    {
      id: 'sec-21-2',
      pageNumber: 4,
      sectionNumber: '21.2',
      title: 'Metapoznanie — Myślenie o Własnym Myśleniu i Obserwator Nadzorczy',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wyobraź sobie, że w Twoim umyśle znajduje się reżyser, który stoi za kamerą i obserwuje scenę, na której występują Twoje myśli, emocje i impulsy.',
        'Większość ludzi utożsamia się w 100% z aktorami na scenie („Jestem wściekły”, „Nie dam rady”). Trening metapoznawczy pozwala przenieść punkt ciężkości tożsamości do Reżysera („Zauważam, że w moim umyśle pojawiła się myśl o treści: nie dam rady”).',
        'Ta drobna zmiana perspektywy stwarza bezcenną przestrzeń decyzyjną i przerywa dyktat automatycznych nawyków limficznych.'
      ]
    },
    {
      id: 'sec-21-3',
      pageNumber: 7,
      sectionNumber: '21.3',
      title: 'Monitorowanie Procesów Poznawczych, Emocjonalnych i Decyzyjnych',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Monitorowanie metapoznawcze wymaga ciągłego zadawania sobie pytań sprawdzających stan własnego aparatu poznawczego.',
        '„Na ile jestem zmęczony i jak to wpływa na moją cierpliwość?”, „Czy ta decyzja opiera się na twardych danych, czy na moim lęku przed porażką?”, „Czy ta ocena rozmówcy nie jest napędzana moim Błędem Potwierdzenia?”.',
        'Ciągła diagnostyka własnego stanu zapobiega wpadaniu w pułapki zmęczeniowe i decyzje podejmowane pod wpływem afektu.'
      ]
    },
    {
      id: 'sec-21-4',
      pageNumber: 10,
      sectionNumber: '21.4',
      title: 'Introspekcja i Jej Granice — Badania Nisbetta i Wilsona nad Iluzją Wglądu',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przez wieki wierzono, że człowiek ma bezpośredni, nieograniczony i bezbłędny dostęp do przyczyn własnych decyzji poprzez introspekcję.',
        'Klasyczne badania Richarda Nisbetta i Timothy’ego Wilsona (1977 - „Telling More Than We Can Know”) zadały śmiertelny cios tej iluzji. Wykazano, że ludzie zapytani o powód swojego wyboru podawali z pełną pewnością siebie wyrafinowane teorie, które miały się nijak do rzeczywistych czynników sterujących (np. pozycji produktu na półce).',
        'Zrozumienie granic introspekcji uczy pokory: nasze uzasadnienia post-hoc są często jedynie ładnymi bajkami opowiadanymi przez DMN w celu obrony wizerunku racjonalnego człowieka.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-5',
      pageNumber: 13,
      sectionNumber: '21.5',
      title: 'Obserwacja Fenomenologiczna vs Interpretacja i Dorabianie Teorii',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Praktyczna samoświadomość wymaga umiejętności rozdzielenia surowej obserwacji doznaniowej od dorobionej do niej teorii.',
        'Obserwacja surowa brzmi: „Czuję przyspieszone tętno, ucisk w klatce i ścisk w żołądku”. Interpretacja brzmi: „Obojętność szefa oznacza, że zaraz mnie zwolni, a moje życie się zawali”.',
        'Gdy nauczysz się zatrzymywać na poziomie surowej obserwacji biologicznej, emocja traci swoją niszczycielską siłę i mija jak fala w ciągu kilkudziesięciu sekund.'
      ]
    },
    {
      id: 'sec-21-6',
      pageNumber: 16,
      sectionNumber: '21.6',
      title: 'Automatyzmy Behawioralne vs Świadoma Kontrola Wykonawcza',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Około 80% naszych codziennych zachowań przebiega w trybie automatycznym, sterowanym przez jądrą podstawy i układ limficzny (System 1 Daniel Kahneman).',
        'Świadoma kontrola wykonawcza (System 2) wywoływana przez grzbietowo-boczna korę przedczołową (dlPFC) jest zasobem skrajnie kosztownym metabolicznie.',
        'Metapoznanie działa jak inteligentny przełącznik: wykrywa sygnały błędu (ACC) i wyłącza automatycznego pilota dokładnie wtedy, gdy sytuacja wymaga nienawykowej, przemyślanej decyzji.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[2]
    },
    {
      id: 'sec-21-7',
      pageNumber: 19,
      sectionNumber: '21.7',
      title: '„Skąd Wiem, Że Wiem?” — Monitorowanie Wiedzy i Pewności w Pamięci',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Umysł posiada doznania metapoznawcze zwane „poczuciem wiedzy” (Feeling of Knowing - FOK) oraz „pamięcią na końcu języka” (Tip-of-the-Tongue State).',
        'Te subiektywne stany pozwalają nam ocenić, czy posiadamy dane zasoby w pamięci, zanim jeszcze dokładnie je wydobędziemy.',
        'Trening kalibracji FOK jest kluczowy dla efektywnego uczenia się i zapobiega iluzji opanowania materiału po samym pobieżnym przeczytaniu tekstu.'
      ]
    },
    {
      id: 'sec-21-8',
      pageNumber: 22,
      sectionNumber: '21.8',
      title: 'Pewność Siebie vs Trafność Sądu — Kalibracja Metapoznawcza',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Jednym z największych zagrożeń w decyzjach biznesowych i osobistych jest zjawisko Certainty-Accuracy Fallacy — fałszywe utożsamianie siły subiektywnej pewności z obiektywną trafnością sądu.',
        'Kalibracja metapoznawcza mierzy spójność między tymi dwoma wskaźnikami. Osoba o dobrej kalibracji jest bardzo pewna siebie tylko wtedy, gdy jej wiedza jest obiektywna i wysoka, a gdy dane są niepełne — szacuje swoją pewność na niska.',
        'Prowadzenie rejestru prognoz na piśmie jest najskuteczniejszą metodą urealniania kalibracji metapoznawczej.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[3]
    },
    {
      id: 'sec-21-9',
      pageNumber: 25,
      sectionNumber: '21.9',
      title: 'Wykrywanie Własnych Błędów Poznawczych w Czasie Rzeczywistym',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najwyższym stopniem dojrzałości metapoznawczej jest zdolność do złapania własnego umysłu na błędzie myślowym W MOMENCIE, gdy ten błąd się pojawia.',
        'Zamiast dać się ponieść fali Confirmation Bias czy Katastrofizacji, świadomy obserwator mówi do siebie: „Aha! Właśnie w tym momencie mój umysł uruchomił Błąd Potwierdzenia. Zrzycam soczewkę i szukam dowodów przeciwstawnych”.',
        'To jest prawdziwa autonomia decyzyjna w praktyce.'
      ]
    },
    {
      id: 'sec-21-10',
      pageNumber: 28,
      sectionNumber: '21.10',
      title: 'Informacja Zwrotna od Innych i Ślepe Plamki (Blind Spots) Samoświadomości',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nawet najbardziej rozwinięte metapoznanie nie chroni nas całkowicie przed własnymi ślepymi plamkami (Blind Spots).',
        'Istnieją zachowania, ton głosu i mikro-ekspresje, które są doskonale widoczne dla otoczenia, a pozostają całkowicie ukryte przed naszym wewnętrznym wzrokiem.',
        'Tworzenie bezpiecznych relacji z mentorami i przyajciółmi, którzy mają odwagę dać nam szczery feedback, jest nieodzownym uzupełnieniem własnej samoświadomości.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[4]
    },
    {
      id: 'sec-21-11',
      pageNumber: 31,
      sectionNumber: '21.11',
      title: 'Rozbieżność Między Obrazem Siebie a Rzeczywistym Zachowaniem',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wielu ludzi żyje w głębokim rozłamie między tym, jak wyobraża sobie siebie (np. „Jestem tolerancyjny, spokony i otwarty”), a tym, jak zachowuje się w sytuacjach stresowych (agresja, zamknięcie, krytykanctwo).',
        'Zniwelowanie tej rozbieżności wymaga odwagi do odrzucenia wyidealizowanej fasady i zaakceptowania prawdy o swoich obecnych nawykach.',
        'Dopiero akceptacja stanu faktycznego daje punkt oparcia do realnej zmiany.'
      ]
    },
    {
      id: 'sec-21-12',
      pageNumber: 34,
      sectionNumber: '21.12',
      title: 'Meta-Warstwa Tomu III — Integracja Tożsamości, Przekonań, Samooceny i Wartości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Ten rozdział stanowi zwieńczenie i klamrę kompozycyjną pierwszego bloku Tomu III.',
        'Tożsamość (Rozdział 1) daje nam elastyczną opowieść o sobie; Przekonania (Rozdział 2) dają nam zaktualizowane modele świata; Samoocena i Self-Efficacy (Rozdział 3) dają nam wiarę w działanie i urealnione kompetencje; Wartości (Rozdział 4) dają nam nienaruszalny kompas priorytetów.',
        'A Metapoznanie (Rozdział 5) jest nawigatorem, który spaja te 4 filary w jeden, spójny, żywy i autonomiczny system samokształtowania.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[4]
    },
    {
      id: 'sec-21-13',
      pageNumber: 37,
      sectionNumber: '21.13',
      title: '💡 BŁĘDNA INTUICJA: Analizowanie siebie bez końca prowadzi do samopoznania',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Częstą pułapką u osób dbających o rozwój osobisty jest mylenie sprawczego metapoznania z jałową ruminacją (Overthinking).',
        'Godziny spędzone na analizowaniu „dlaczego tak czuję” i rozkładaniu każdego detalu na czynniki pierwsze niszczą energię i prowadzą do paraliżu analitycznego (Analysis Paralysis).',
        'Metapoznanie ma służyć Lepszemu Działaniu w świecie realnym, a nie zastępować to działanie.'
      ]
    },
    {
      id: 'sec-21-14',
      pageNumber: 40,
      sectionNumber: '21.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Fizjologiczne Korelaty Metapoznania',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Jakie dokładnie obwody neuronalne odpowiadają za doznanie „wglądu metapoznawczego” (Insight) i na ile trening medytacyjny zmienia strukturę szarej masy w mPFC i ACC?',
        'Badania nad neuroobrazowaniem osób o wysokiej samoświadomości pokazują wzrost gęstości połączeń między korą przedczołową a wyspą.'
      ]
    },
    {
      id: 'sec-21-15',
      pageNumber: 42,
      sectionNumber: '21.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokoły Kalibracji Metapoznawczej',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        '1. Stosuj 3-sekundową pauzę poznawczą przed trudną reakcją.',
        '2. Prowadź Dziennik Prognoz z wyliczaniem procentu pewności.',
        '3. Zamieniaj pytania „DLACZEGO” na pytania „CO z tym zrobię”.',
        '4. Zbieraj regularny feedback od obiektywnych obserwatorów.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-16',
      pageNumber: 44,
      sectionNumber: '21.16',
      title: 'Warsztat Samorozwojowy: Laboratorium Nawigatora Umysłu',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poniżej znajduje się zestaw ćwiczeń dedykowanych treningowi defuzji poznawczej, audytowi ślepych plamek i integracji pierwszego bloku Tomu III.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[1]
    },
    {
      id: 'sec-21-17',
      pageNumber: 47,
      sectionNumber: '21.17',
      title: 'Most do Rozdziału 22 oraz Zapowiedź Bloku II Tomu III',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Opanowaliśmy fundamenty indywidualnej autonomii psychicznej: wiemy kim jesteśmy, jak myślimy, jak oceniamy swoje możliwości, czym się kierujemy i jak to wszystko monitorować.',
        'W kolejnym bloku Tomu III przejdziemy do badania tego, jak człowiek w praktyce kształtuje swoje środowisko, buduje odporność nawykową i realizuje długoterminowe cele w świecie zewnętrznym.'
      ]
    },
    {
      id: 'sec-21-18',
      pageNumber: 49,
      sectionNumber: '21.18',
      title: 'Podsumowanie Rozdziału 5: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        '1. Metapoznanie to zdolność myślenia o własnym myśleniu i odzyskiwania kontroli.',
        '2. Introspekcja ma swoje granice i tworzy racjonalizacje post-hoc.',
        '3. Pauza poznawcza tworzy wolność wyboru między bodźcem a reakcją.',
        '4. Metapoznanie spaja tożsamość, przekonania, samoocenę i wartości w jeden spójny system.'
      ]
    },
    {
      id: 'sec-21-19',
      pageNumber: 52,
      sectionNumber: '21.19',
      title: 'Egzamin Końcowy Rozdziału 5: Świadomość Siebie i Metapoznanie',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu metapoznania, kalibracji pewności siebie, defuzji poznawczej i integracji pierwszego bloku Tomu III. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};

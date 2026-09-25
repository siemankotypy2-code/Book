import { Module } from '../../types/book';

export const MODULE_1: Module = {
  id: 'modul-1-architektura-umyslu',
  index: 1,
  romanNumeral: 'I',
  title: 'Architektura Umysłu i Neuronauka Wyborów',
  tagline: 'Jak biologia mózgu kieruje naszymi decyzjami zanim zdążymy o nich pomyśleć',
  description: 'Odkryj ewolucyjne korzenie ludzkich reakcji: konflikt między korą przedczołową a ciałem migdałowatym oraz tajemnice układu nagrody, dopaminy i pętli nawyku.',
  iconName: 'Brain',
  chapters: [
    {
      id: 'rozdzial-1-porwanie-emocjonalne',
      moduleIndex: 1,
      chapterNumber: 1,
      title: 'Dwa Systemy w Jednej Czaszce: Porwanie Emocjonalne i Wojna o Świadomość',
      subtitle: 'Dlaczego inteligentni ludzie tracą panowanie nad sobą pod wpływem drobnostek?',
      quote: {
        text: 'Pomiędzy bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność i moc wyboru naszej odpowiedzi.',
        author: 'Viktor E. Frankl'
      },
      readingTimeMinutes: 12,
      leadParagraph: 'Czy zdarzyło Ci się kiedykolwiek powiedzieć w złości słowa, których po dziesięciu minutach szczerze żałowałeś? Albo poczuć nagłą falę gorąca i przyspieszone tętno, gdy ktoś zwrócił Ci uwagę na błahe niedopatrzenie? To nie brak silnej woli ani wada charakteru – to Twój ewolucyjny układ przetrwania przejął kontrolę nad kokpitem świadomości.',
      foundationalTheory: {
        title: 'Anatomia Szybkiego i Wolnego Szlaku',
        paragraphs: [
          'Ludzki mózg nie jest jednolitym monolitem racjonalności. Jest raczej geologicznym nawarstwieniem setek tysięcy lat ewolucji. W samym jego sercu znajduje się układ limbiczny, a w nim ciało migdałowate – starożytny strażnik przetrwania, którego jedynym zadaniem jest błyskawiczne wykrycie zagrożenia.',
          'Jak wykazał neuronaukowiec Joseph LeDoux, bodźce sensoryczne ze wzgórza docierają do ciała migdałowatego w ciągu zaledwie 12–15 milisekund (szlak krótki, tzw. droga podkorowa). Tymczasem przesłanie tych samych danych do kory przedczołowej (PFC), odpowiedzialnej za logiczną analizę, perspektywę i hamowanie odruchów, zajmuje 25–40 milisekund (szlak długi).',
          'Oznacza to, że ciało migdałowate potrafi zalać organizm hormonami stresu (adrenaliną i kortyzolem) i zainicjować reakcję walki, ucieczki lub zamrożenia, zanim kora nowa zdąży w ogóle zidentyfikować, co się dzieje. Daniel Goleman nazwał ten stan „porwaniem emocjonalnym” (Amygdala Hijack).'
        ]
      },
      caseStudy: {
        id: 'cs-1',
        title: 'Awantura o Zlew i Wyczerpany Kokpit: Marta i Tomasz',
        characters: ['Marta (dyrektorka marketingu, 34 l.)', 'Tomasz (architekt wnętrz, 36 l.)'],
        setting: 'Środowy wieczór, godzina 20:15, nowoczesna kuchnia po 10 godzinach intensywnej pracy obojga.',
        scenario: 'Tomasz wraca do domu po wyczerpującej naradzie budowlanej. Jest głodny i przemęczony. Marta od rana mierzyła się z kryzysem wizerunkowym klienta. Tomasz wchodzi do kuchni, chcąc zaparzyć herbatę, i widzi zlew pełen naczyń oraz pusty karton po mleku zostawiony na blacie. W ciągu 3 sekund jego ciało napina się, a twarz czerwienieje. Wypowiada głośne, pełne jadu zdanie: „Czy w tym domu ja muszę być jedyną dorosłą osobą?!”. Marta, która właśnie kończyła wysyłać maila, zrywa się z krzesła: „Ty jesteś dorosły?! Pracuję ciężej od ciebie, a ty potrafisz tylko wiecznie mieć pretensje!”. Przez kolejne 45 minut padają oskarżenia sięgające wydarzeń sprzed trzech lat.',
        turningPoint: 'Po wykrzyczeniu najgorszych słów oboje zamierają w milczeniu, czując fizyczne wyczerpanie, mdłości i paraliżujący wstyd. Żadne z nich tak naprawdę nie kłóciło się o zlew.',
        outcome: 'Zniszczony wieczór, zerwana bliskość na kolejne dwa dni oraz poczucie emocjonalnego spustoszenia.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Wyczerpanie Wolicjonalne (Ego Depletion)',
            description: 'Zdolność do samokontroli działa jak mięsień – zużywa glukozę i energię metaboliczną w korze przedczołowej.',
            realWorldManifestation: 'Po całym dniu hamowania frustracji wobec szefa i klientów, zasoby kontroli Marty i Tomasza spadły do zera.'
          },
          {
            name: 'Błąd Podstawowej Atrybucji',
            description: 'Przypisywanie zachowań innych ich rzekomo złym cechom charakteru przy jednoczesnym usprawiedliwianiu siebie okolicznościami.',
            realWorldManifestation: 'Tomasz nie pomyślał: „Marta miała ciężki dzień”. Pomyślał: „Ona mnie nie szanuje i jest egoistką”.'
          }
        ],
        emotionalDynamics: 'Poczucie braku docenienia wywołało u Tomasza pierwotny lęk przed zlekceważeniem. Atak złości był zbroją chroniącą przed bezsilnością.',
        hiddenMotivations: 'Tęsknota za bezpieczeństwem i troską wyrażona w formie agresywnego roszczenia.',
        cognitiveDistortions: ['Nadmierne uogólnianie („zawsze”, „nigdy”)', 'Czytanie w myślach', 'Katastrofizowanie']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Ciało Migdałowate (Corpus Amygdaloideum)',
            role: 'Detektor zagrożeń i aktywator osi HPA (podwzgórze-przysadka-nadnercza).',
            functionInScenario: 'Zinterpretowało widok brudnego zlewu jako brak szacunku i zagrożenie dla pozycji w stadzie, wywołując wyrzut adrenaliny.'
          },
          {
            name: 'Grzbietowo-Boczna Kora Przedczołowa (dlPFC)',
            role: 'Centrum racjonalnej kalkulacji, hamowania i elastyczności myślenia.',
            functionInScenario: 'Została czasowo „odłączona” z powodu biochemicznego zalewu katecholaminami.'
          }
        ],
        neurotransmitters: [
          { name: 'Adrenalina i Noradrenalina', effect: 'Błyskawiczne przyspieszenie tętna, zwężenie pola widzenia do wroga.' },
          { name: 'Kortyzol', effect: 'Przewlekły hormon stresu blokujący pamięć roboczą i hamujący empatię.' }
        ],
        scientificSummary: 'W trakcie porwania emocjonalnego krew odpływa z kory nowej w stronę mięśni i struktur pnia mózgu. Człowiek staje się biologicznie niezdolny do niuansowania.',
        keyTakeaway: 'Nie rozwiązuj problemów życiowych, gdy Twoje tętno przekracza 100 uderzeń na minutę, a ciało migdałowate trzyma palec na spuście.'
      },
      practicalApplication: {
        title: 'Jak Rozbroić Porwanie w Codziennej Praktyce',
        adviceList: [
          {
            heading: 'Zasada 6 Sekund Biochemii',
            content: 'Wyrzut neuroprzekaźników zalewających krwioobieg po impulsie z ciała migdałowatego trwa około 6 sekund. Jeśli w tym czasie nie dodasz oliwy do ognia nowymi myślami, stężenie zaczyna opadać.'
          },
          {
            heading: 'Fizjologiczne Westchnienie (Physiological Sigh)',
            content: 'Dwa szybkie wdechy nosem (drugi dopompowujący pęcherzyki płucne) i jeden długi, powolny wydech ustami. To najszybszy sposób na stymulację nerwu błędnego i obniżenie tętna.'
          },
          {
            heading: 'Protokół Bezpiecznego Odroczenia',
            content: 'Naucz się mówić jedno zdanie-tarczę: „Jestem teraz zbyt poruszony i zmęczony, by rozmawiać mądrze. Porozmawiajmy za 20 minut, gdy ochłonę”.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch1',
        type: 'emotional_thermometer',
        title: 'Termometr Porwania Emocjonalnego i Stoper 6 Sekund',
        description: 'Sprawdź swój aktualny poziom pobudzenia autonomicznego układu nerwowego i aktywuj fizjologiczny protokół wyciszający.',
        instruction: 'Wybierz poziom pobudzenia lub uruchom stoper 6 sekund, by przejąć kontrolę nad korą przedczołową.'
      },
      exercise: {
        id: 'ex-ch1',
        title: 'Protokół Autoregulacji: Kotwica Somatyczna',
        estimatedMinutes: 10,
        category: 'neuro-regulacja',
        goal: 'Zidentyfikowanie własnych wczesnych mikrosygnałów somatycznych zapowiadających porwanie emocjonalne.',
        steps: [
          {
            stepNumber: 1,
            title: 'Skanowanie Twojej Somatycznej Czerwonej Flagi',
            description: 'Gdzie w ciele najpierw czujesz wzbierający gniew lub lęk? (np. ucisk w żołądku, zaciskanie szczęki, płytki oddech, gorąco w karku).',
            inputType: 'text',
            promptQuestion: 'Moja wczesna somatyczna czerwona flaga to:'
          },
          {
            stepNumber: 2,
            title: 'Wybór Twojej Formuły Odroczenia',
            description: 'Zapisz dosłowne zdanie, które wypowiesz partnerowi, dziecku lub współpracownikowi w chwili, gdy poczujesz ten objaw.',
            inputType: 'textarea',
            promptQuestion: 'Gdy poczuję ten sygnał, powiem dokładnie:'
          }
        ],
        reflectionPrompt: 'W jakiej sytuacji w minionym tygodniu najmocniej doświadczyłeś porwania emocjonalnego? Jak mogłaby wyglądać ta sytuacja, gdybyś odczekał 6 sekund?'
      },
      keyTakeaways: [
        'Porwanie emocjonalne to naturalny mechanizm biologiczny szlaku podkorowego (12 ms vs 35 ms).',
        'Zdolność do racjonalnej empatii znika przy tętnie powyżej 100 bpm i wysokim kortyzolu.',
        'Wystarczy 6 sekund i podwójny wydech, by przywrócić ukrwienie kory przedczołowej.',
        'Nigdy nie podejmuj ostatecznych decyzji ani nie wyjaśniaj relacji w stanie głodu i wyczerpania wolicjonalnego.'
      ]
    },
    {
      id: 'rozdzial-2-dopaminowa-petla',
      moduleIndex: 1,
      chapterNumber: 2,
      title: 'Dopaminowa Pętla i Architektura Nawyków: Dlaczego Ulegamy Pokusom?',
      subtitle: 'Biologia pożądania, błąd przewidywania nagrody i projektowanie środowiska',
      quote: {
        text: 'Dopamina to nie cząsteczka przyjemności. Dopamina to cząsteczka oczekiwania, pragnienia i nieustannej pogoni za tym, co mogłoby być.',
        author: 'Dr Daniel Z. Lieberman'
      },
      readingTimeMinutes: 14,
      leadParagraph: 'Siadasz przy biurku z mocnym postanowieniem: przez następne dwie godziny piszesz ważny raport. Mija piętnaście minut. Twoja ręka niemal bezwiednie sięga po smartfon leżący obok klawiatury. Zanim zdążysz pomyśleć, kciuk odblokowuje ekran, a wzrok błądzi po powiadomieniach. Pół godziny później budzisz się z poczuciem winy. Dlaczego tak trudno przeciwstawić się impulsowi?',
      foundationalTheory: {
        title: 'Szlak Mezolimbiczny i Mit Cząsteczki Szczęścia',
        paragraphs: [
          'Przez dziesięciolecia dopamina była błędnie nazywana hormonem szczęścia. Współczesna neuronauka bezsprzecznie dowiodła, że za czyste odczuwanie przyjemności (tzw. "liking") odpowiadają endorfiny i receptory opioidowe. Dopamina odpowiada natomiast za pragnienie ("wanting") – motywację, pęd ku działaniu i skupienie uwagi na obietnicy nagrody.',
          'Kluczowym odkryciem Wolframa Schultza był mechanizm Błędu Przewidywania Nagrody (Reward Prediction Error). Jeśli nagroda jest w 100% przewidywalna, wyrzut dopaminy szybko zanika. Jeśli jednak nagroda jest niepewna i losowa (tzw. variable ratio schedule) – dokładnie tak jak w jednorękim bandycie w kasynie czy przy odświeżaniu tablicy w mediach społecznościowych – poziom dopaminy wystrzeliwuje w kosmos.',
          'Nawyk to nic innego jak neuronalna droga na skróty skonsolidowana w zwojach podstawy mózgu (striatum). Składa się z czterech elementów: Wskazówki (Cue), Pragnienia (Craving), Reakcji (Response) i Nagrody (Reward).'
        ]
      },
      caseStudy: {
        id: 'cs-2',
        title: 'Pętla Prokrastynacji i Nocny Trans: Historia Kamila',
        characters: ['Kamil (programista i team lead, 29 l.)'],
        setting: 'Mieszkanie Kamila, domowe biuro, godzina 22:30 w przeddzień ważnego wdrożenia.',
        scenario: 'Kamil ma dokończyć trudny moduł kodu, od którego zależy start platformy. Czuje w klatce piersiowej ucisk – lęk przed tym, że kod zawiera błędy i jutro wyjdzie na jaw jego niekompetencja (syndrom oszusta). Aby uciec przed tym dyskomfortem, otwiera nową kartę w przeglądarce pod pretekstem sprawdzenia nowości technologicznych. Trzy kliknięcia później ogląda recenzje sprzętu audio na YouTube, a potem przegląda fora dyskusyjne. Godzina 1:45 w nocy: kod nieukończony, Kamil jest potwornie zmęczony, a jutrzejszy dzień zapowiada się katastrofalnie.',
        turningPoint: 'Kamil uświadamia sobie, że to nie YouTube jest problemem, lecz unikanie negatywnej emocji – lęku przed porażką. Telefon i komputer stały się natychmiastowym znieczuleniem dopaminowym.',
        outcome: 'Zrozumienie, że prokrastynacja to problem regulacji emocji, a nie lenistwa.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Ujemne Wzmocnienie (Negative Reinforcement)',
            description: 'Ucieczka od nieprzyjemnego napięcia emocjonalnego przynosi natychmiastową ulgę, co potężnie wzmacnia nawyk ucieczkowy.',
            realWorldManifestation: 'Kamil sięga po ekran nie po to, by poczuć radość, lecz by wyłączyć lęk przed trudnym zadaniem.'
          },
          {
            name: 'Dyskontowanie Odroczone (Hyperbolic Discounting)',
            description: 'Mózg ludzki wycenia natychmiastową mikro-nagrodę (teraz) nieskończenie wyżej niż wielką nagrodę odroczoną w czasie (jutro).',
            realWorldManifestation: '5 sekund ulgi z przeglądania memów wygrywa z satysfakcją z udanego projektu za 24 godziny.'
          }
        ],
        emotionalDynamics: 'Lęk przed oceną maskowany pozorowaną aktywnością zastępczą.',
        hiddenMotivations: 'Pragnienie poczucia natychmiastowej kontroli i kompetencji w bezpiecznym środowisku cyfrowym.',
        cognitiveDistortions: ['Magiczne myślenie („jutro rano zrobię to w 2 godziny”)', 'Minimalizowanie kosztów']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Jądro Półleżące (Nucleus Accumbens)',
            role: 'Główny hub układu nagrody; kalkulator wartości motywacyjnej bodźca.',
            functionInScenario: 'Aktywowało się potężnie na widok czerwonych powiadomień i miniaturek filmów.'
          },
          {
            name: 'Zwoje Podstawy (Prążkowie - Striatum)',
            role: 'Pamięć proceduralna i automatyzacja wzorców behawioralnych.',
            functionInScenario: 'Uruchomiło automatyczny ruch ręki ku telefonowi bez udziału świadomości.'
          }
        ],
        neurotransmitters: [
          { name: 'Dopamina', effect: 'Generuje magnetyczne przyciąganie uwagi ku wskazówce nagrody.' },
          { name: 'GABA', effect: 'Hamuje pobudzenie; jej niedobór sprzyja gonitwie myśli i impulsywności.' }
        ],
        scientificSummary: 'Każde powtórzenie pętli nawyku powoduje mielinizację odpowiednich szlaków aksonalnych w prążkowiu. Im grubsza osłonka mielinowa, tym mniej energii wymaga nawyk i tym trudniej go przerwać czystą wolą.',
        keyTakeaway: 'Nie polegaj na silnej woli – przebuduj środowisko tak, by złe nawyki wymagały wysiłku, a dobre działy się bez oporu.'
      },
      practicalApplication: {
        title: 'Architektura Przełamywania Złych Nawyków',
        adviceList: [
          {
            heading: 'Zasada 20 Sekund Tarcia (Friction Design)',
            content: 'Jeśli chcesz wygasić nawyk, dodaj 20 sekund oporu pomiędzy impulsem a działaniem (schowaj telefon do szuflady w drugim pokoju, wyloguj się z aplikacji). To wystarczy, by kora przedczołowa odzyskała kontrolę.'
          },
          {
            heading: 'Przeformułowanie Złotej Reguły Nawyków',
            content: 'Nie możesz wykasować nawyku, możesz go jedynie podmienić. Zachowaj tę samą wskazówkę i tę samą nagrodę (np. ulgę od stresu), ale zmień reakcję (np. 10 głębokich oddechów lub krótki spacer zamiast scrollowania).'
          },
          {
            heading: 'Tolerancja Dyskomfortu (Urge Surfing)',
            content: 'Technika Alana Marlata: wyobraź sobie chęć sięgnięcia po pokusę jako falę oceaniczną. Fala rośnie, osiąga szczyt po 2–3 minutach, a potem nieuchronnie opada. Obserwuj ją z ciekawością bez walki.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch2',
        type: 'habit_loop_dissector',
        title: 'Dekonstruktor Pętli Nawyku i Plan Tarcia',
        description: 'Rozłóż swój toksyczny nawyk na czynniki pierwsze: zidentyfikuj ukrytą wskazówkę, głód emocjonalny i zaprojektuj strategiczne tarcie.',
        instruction: 'Wprowadź nawyk, który chcesz zneutralizować, i przeanalizuj jego anatomię.'
      },
      exercise: {
        id: 'ex-ch2',
        title: 'Audyt Tarcia i Projekt Środowiska',
        estimatedMinutes: 12,
        category: 'decyzje',
        goal: 'Stworzenie fizycznych barier dla nawyków rozpraszających i usunięcie barier dla nawyków pożądanych.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór Jednego Nawrotowego Rozpraszacza',
            description: 'Jaka czynność kradnie Ci najwięcej energii i czasu w ciągu dnia?',
            inputType: 'text',
            promptQuestion: 'Mój główny pożeracz uwagi to:'
          },
          {
            stepNumber: 2,
            title: 'Wprowadzenie Trzech Barier Tarcia',
            description: 'Jakie 3 konkretne przeszkody postawisz między sobą a tym zachowaniem jeszcze dziś?',
            inputType: 'textarea',
            promptQuestion: 'Trzy bariery tarcia, które wdrożę natychmiast:'
          }
        ],
        reflectionPrompt: 'Jaka nieprzyjemna emocja najczęściej poprzedza Twój odruch sięgnięcia po rozpraszacz? Czego w tym momencie tak naprawdę potrzebujesz?'
      },
      keyTakeaways: [
        'Dopamina steruje pożądaniem i oczekiwaniem, a nie samym zaspokojeniem.',
        'Zmienne wzmocnienie losowe to najpotężniejszy biologiczny magnes uzależniający.',
        'Prokrastynacja jest mechanizmem regulacji przytłaczających emocji, a nie brakiem dyscypliny.',
        'Zwiększenie tarcia o 20 sekund potrafi skutecznie wyhamować automatyzm zwojów podstawy.'
      ]
    }
  ]
};

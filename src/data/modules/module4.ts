import { Module } from '../../types/book';

export const MODULE_4: Module = {
  id: 'modul-4-pulapki-poznawcze',
  index: 4,
  romanNumeral: 'IV',
  title: 'Pułapki Poznawcze i Ekonomia Behawioralna',
  tagline: 'Jak błędy myślenia zniekształcają rachunek zysków i strat w codziennym życiu',
  description: 'Odkryj tajemnice ekonomii behawioralnej: od iluzji przecen i kotwiczenia, przez paraliż utopionych kosztów, po tożsamościowe zrastanie się z własnymi poglądami.',
  iconName: 'Scale',
  chapters: [
    {
      id: 'rozdzial-7-kotwiczenie-i-utopione-koszty',
      moduleIndex: 4,
      chapterNumber: 7,
      title: 'Kotwiczenie, Efekt Ramowania i Pułapka Utopionych Kosztów',
      subtitle: 'Dlaczego tkwimy w złych relacjach i przepłacamy za rzeczy, których nie potrzebujemy?',
      quote: {
        text: 'Cena to to, co płacisz. Wartość to to, co otrzymujesz. Problem w tym, że mózg rzadko potrafi je od siebie odróżnić.',
        author: 'Warren Buffett'
      },
      readingTimeMinutes: 14,
      leadParagraph: 'Kupujesz kurtkę przecenioną z 1499 zł na 599 zł i wracasz do domu dumny, że „zaoszczędziłeś 900 zł”, chociaż nigdy wcześniej nie planowałeś wydać na nią ani grosza. Albo tkwisz w nużącym, niszczącym projekcie biznesowym tylko dlatego, że „włożyłeś już w niego dwa lata życia i 50 tysięcy złotych”. Dlaczego tak panicznie boimy się przyznać do straty i jak sprytnie wykorzystują to stratedzy marketingu i negocjacji?',
      foundationalTheory: {
        title: 'Teoria Perspektywy i Asymetria Bólu Strata-Zysk',
        paragraphs: [
          'Laureaci Nagrody Nobla Daniel Kahneman i Amos Tversky wstrząsnęli klasyczną ekonomią, udowadniając Teorię Perspektywy. Ludzki umysł nie jest racjonalnym kalkulatorem. Nasza reakcja na stratę jest asymetryczna: ból po stracie 1000 zł jest od 2 do 2,5 raza silniejszy niż radość ze znalezienia lub zarobienia dokładnie tej samej kwoty (awersja do straty - loss aversion).',
          'Ta neurobiologiczna asymetria rodzi Pułapkę Utopionych Kosztów (Sunk Cost Fallacy). Mózg traktuje zamknięcie nieudanego projektu jako bolesną, ostateczną deklarację porażki. Aby uniknąć tego bólu, ludzie wolą inwestować kolejne środki i energię („dobry pieniądz za złym”), łudząc się, że karta jeszcze się odwróci.',
          'Z kolei Efekt Kotwiczenia (Anchoring) polega na tym, że pierwsza podana liczba staje się punktem odniesienia (kotwicą), wokół którego kora mózgowa szacuje wszystkie kolejne wartości. Przekreślona cena początkowa ustawia kotwicę, sprawiając, że każda niższa kwota wydaje się fantastyczną okazją.'
        ]
      },
      caseStudy: {
        id: 'cs-7',
        title: 'Kawiarnia, Która Pochłonęła Oszczędności Życia: Robert i Monika',
        characters: ['Robert (były manager sprzedaży, 41 l.)', 'Monika (architektka krajobrazu, 38 l.)'],
        setting: 'Niewielka kawiarnia w bocznej uliczce, bilans po 18 miesiącach działalności.',
        scenario: 'Robert i Monika zainwestowali 180 000 zł oszczędności życia w otwarcie klimatycznej kawiarni. Lokalizacja od początku była fatalna – brak parkingu i znikomy ruch pieszych. Po 6 miesiącach kawiarnia przynosiła 5 000 zł straty miesięcznie. Zamiast natychmiast zamknąć lokal i sprzedać sprzęt z minimalną stratą, Robert wziął 80 000 zł kredytu: „Nie możemy tego zamknąć, przecież włożyliśmy tu tyle potu, krwi i pieniędzy! Musimy przeczekać do lata”. Mija kolejny rok. Długi urosły do 160 000 zł, relacja Roberta i Moniki wisi na włosku, a codzienne otwieranie kawiarni to koszmar. Każdego miesiąca Robert dokłada pieniądze tylko po to, by nie musieć spojrzeć prawdzie w oczy: początkowe 180 000 zł przepadło na zawsze.',
        turningPoint: 'Niezależny doradca finansowy zadaje Robertowi jedno proste pytanie: „Gdybyś wszedł do tego lokalu dzisiaj po raz pierwszy jako obcy inwestor i zobaczył te liczby, czy kupiłbyś ten biznes za 1 złoty?”. Robert zamiera i mówi: „W życiu”.',
        outcome: 'Sprzedaż wyposażenia, likwidacja spółki, odzyskanie spokoju psychicznego i spłata długów z nowej, bezpiecznej pracy etatowej.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Księgowanie Umysłowe (Mental Accounting)',
            description: 'Traktowanie pieniędzy i wysiłku w sposób subiektywny w zależności od ich źródła i historii, zamiast traktowania ich wymiennie.',
            realWorldManifestation: 'Robert czuł, że zainwestowane 180 tysięcy to „święte pieniądze”, których nie wolno zaprzepaścić, co skłoniło go do wzięcia toksycznego kredytu.'
          },
          {
            name: 'Efekt Posiadania (Endowment Effect)',
            description: 'Przypisywanie rzeczom, projektom lub relacjom wyższej wartości tylko dlatego, że należą do nas.',
            realWorldManifestation: 'Kawiarnia wydawała się parze czymś bezcennym, mimo że dla rynku była bezwartościową studnią bez dna.'
          }
        ],
        emotionalDynamics: 'Paraliżujący lęk przed wstydem społecznym i poczuciem osobistej porażki.',
        hiddenMotivations: 'Ochrona kruchego ego przed przyznaniem się do błędu w ocenie sytuacji.',
        cognitiveDistortions: ['Ignorowanie kosztu alternatywnego', 'Iluzja kontroli nad losem']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Wyspa (Insula)',
            role: 'Generuje somatyczny ból w reakcji na stratę finansową i oszustwo.',
            functionInScenario: 'Jej silna aktywacja sprawiała, że myśl o zamknięciu lokalu bolała fizycznie jak rana.'
          },
          {
            name: 'Brzuszno-Przyśrodkowa Kora Przedczołowa (vmPFC)',
            role: 'Ocenianie wartości emocjonalnej alternatywnych scenariuszy.',
            functionInScenario: 'Została zniekształcona przez subiektywną kotwicę dotychczas poniesionych nakładów.'
          }
        ],
        neurotransmitters: [
          { name: 'Kortyzol', effect: 'Zawęża horyzont myślowy, zmuszając do desperackiej obrony status quo.' }
        ],
        scientificSummary: 'Z punktu widzenia neurobiologii poniesione w przeszłości koszty (czas, emocje, pieniądze) nie istnieją w teraźniejszości – to zjawisko czysto pamięciowe. Jednak ból wyobrażonej straty w wyspie blokuje racjonalną kalkulację przyszłych przepływów.',
        keyTakeaway: 'Pieniądze i czas wydane wczoraj przepadły bez względu na to, co zrobisz jutro. Liczy się tylko to, co zrobisz od tej sekundy.'
      },
      practicalApplication: {
        title: 'Narzędzia Odzyskiwania Rozsądku Decyzyjnego',
        adviceList: [
          {
            heading: 'Zasada Myślenia Od Zera (Zero-Base Thinking)',
            content: 'Zadaj sobie pytanie stworzone przez Briana Tracy\'ego: „Wiedząc to, co wiem dzisiaj o tym związku / tej pracy / tej inwestycji – czy wszedłbym w to ponownie, gdybym stał na początku drogi?”. Jeśli odpowiedź brzmi „nie”, jedynym logicznym pytaniem jest: „Jak szybko i bezpiecznie mogę to zakończyć?”.'
          },
          {
            heading: 'Zasada Ucięcia Straty (Stop-Loss)',
            content: 'Przed wejściem w jakikolwiek projekt lub relację wyznacz nieprzekraczalną granicę: „Jeśli w ciągu 6 miesięcy nie osiągniemy pułapu X lub jeśli relacja będzie wymagać ode mnie Y, kończę bez względu na poniesione koszty”. Zapisz to na papierze.'
          },
          {
            heading: 'Neutralizacja Kotwicy Cenowej',
            content: 'Gdy negocjujesz cenę lub widzisz promocję, natychmiast usuń z pola widzenia pierwotną kwotę. Zapytaj siebie: „Gdyby ten produkt leżał w szarym kartonie bez żadnej metki, ile maksymalnie byłbym skłonny za niego zapłacić na podstawie jego realnej użyteczności?”.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch7',
        type: 'sunk_cost_calculator',
        title: 'Kalkulator Czystego Rozsądku: Zerowanie Utopionych Kosztów',
        description: 'Oddziel nieodwracalne nakłady przeszłości od przyszłych zysków i strat. Sprawdź, czy Twój obecny projekt to inwestycja czy studnia bez dna.',
        instruction: 'Wprowadź poniesione koszty oraz prognozę przyszłości, by uzyskać obiektywną ocenę racjonalności kontynuacji.'
      },
      exercise: {
        id: 'ex-ch7',
        title: 'Test Przyjaciela z Zewnątrz',
        estimatedMinutes: 10,
        category: 'decyzje',
        goal: 'Zastosowanie dysocjacji poznawczej w celu wyeliminowania emocjonalnego przywiązania do strat.',
        steps: [
          {
            stepNumber: 1,
            title: 'Opis Twojego Dylematu Utopionych Kosztów',
            description: 'W jakiej sprawie (praca, związek, zakup, kurs) tkwisz głównie dlatego, że „szkoda ci tego, co już zainwestowałeś”?',
            inputType: 'text',
            promptQuestion: 'Projekt lub relacja, która mnie obciąża:'
          },
          {
            stepNumber: 2,
            title: 'Rada dla Najlepszego Przyjaciela',
            description: 'Wyobraź sobie, że Twój serdeczny przyjaciel przychodzi do Ciebie z DOKŁADNIE tą samą sytuacją. Co doradziłbyś mu z czystym sercem i chłodną głową?',
            inputType: 'textarea',
            promptQuestion: 'Moja rada dla przyjaciela:'
          }
        ],
        reflectionPrompt: 'Dlaczego tak łatwo doradzić odcięcie strat komuś innemu, a tak niesamowicie trudno zrobić to samemu? Jaki lęk stoi za Twoją zwłoką?'
      },
      keyTakeaways: [
        'Awersja do straty sprawia, że ból po utracie boli dwukrotnie mocniej niż cieszy zysk.',
        'Pułapka utopionych kosztów to neurobiologiczna próba ucieczki przed wstydem porażki.',
        'Myślenie od zera (Zero-Base Thinking) natychmiast przywraca klarowność oceny sytuacji.',
        'Przeszłość to koszt zamknięty – każda kolejna godzina i złotówka powinna być wyceniana według przyszłego zysku.'
      ]
    },
    {
      id: 'rozdzial-8-efekt-potwierdzenia',
      moduleIndex: 4,
      chapterNumber: 8,
      title: 'Efekt Potwierdzenia i Polaryzacja Przekonań: Dlaczego Tak Trudno Zmienić Zdanie',
      subtitle: 'Tożsamość jako twierdza, efekt rykoszetu i sztuka epistemicznej pokory',
      quote: {
        text: 'Gdy fakty przeczą moim teoriom – tym gorzej dla faktów.',
        author: 'Georg Wilhelm Friedrich Hegel'
      },
      readingTimeMinutes: 13,
      leadParagraph: 'Czy zauważyłeś, że w trakcie dyskusji politycznej lub światopoglądowej przy rodzinnym obiedzie przedstawienie twardych danych statystycznych i dowodów naukowych prawie nigdy nie sprawia, że druga strona mówi: „Dziękuję, miałeś rację, od dziś zmieniam poglądy”? Wręcz przeciwnie: Twoje argumenty sprawiają, że rozmówca jeszcze mocniej okopuje się na swoich pozycjach. Dlaczego ludzki mózg broni swoich przekonań z taką samą furią, jakby bronił własnego życia?',
      foundationalTheory: {
        title: 'Motywowane Rozumowanie i Efekt Rykoszetu (Backfire Effect)',
        paragraphs: [
          'Efekt Potwierdzenia (Confirmation Bias) to skłonność umysłu do wyszukiwania, zapamiętywania i interpretowania wyłącznie tych informacji, które potwierdzają nasze wcześniejsze hipotezy, przy jednoczesnym ignorowaniu lub dyskredytowaniu faktów sprzecznych.',
          'Jednak w sprawach dotyczących tożsamości (polityka, religia, wychowanie dzieci, etyka) zachodzi zjawisko jeszcze groźniejsze: Efekt Rykoszetu (Backfire Effect). Gdy badacz Jonas Kaplan poddał ludzi badaniu rezonansem fMRI podczas konfrontowania ich z dowodami obalającymi ich głębokie przekonania polityczne, zaobserwował natychmiastową aktywację ciała migdałowatego i kory wyspowej.',
          'Wniosek neuronaukowców jest wstrząsający: mózg nie odróżnia ataku na nasze poglądy od ataku fizycznego drapieżnika na nasze ciało. Kwestionowanie naszych przekonań jest odczuwane jako biologiczne zagrożenie dla spójności „ja”.'
        ]
      },
      caseStudy: {
        id: 'cs-8',
        title: 'Bój o Prawdę Przy Niedzielnym Rosołu: Janusz i Maciej',
        characters: ['Janusz (emerytowany inżynier, 67 l.)', 'Maciej (jego syn, analityk danych, 35 l.)'],
        setting: 'Rodzinny obiad, niedziela, rozmowa o nowinkach technologicznych i medycynie.',
        scenario: 'Maciej zauważa, że ojciec czyta w internecie artykuły głoszące spiskowe teorie o rzekomo śmiertelnych falach telefonii komórkowej i szkodliwości szczepień. Maciej, jako człowiek nauki, postanawia „wyedukować” ojca. Drukuje 30 stron recenzowanych badań klinicznych z „Nature” i „The Lancet”. Rzuca plik na stół: „Tato, zobacz, to są oficjalne dane na 500 tysiącach pacjentów, twoje filmiki z internetu to bzdura”. Janusz patrzy na papiery, jego twarz czerwienieje, odsuwa talerz i podnosi głos: „Tak?! A kto opłacił te badania?! Te wielkie koncerny! Jesteś naiwny jak dziecko, myślą, że jak zrobili studia, to wszystkie rozumy pozjadali!”. Przez kolejne 2 godziny obiad zamienia się w piekło. Na koniec Janusz jest jeszcze bardziej przekonany o spisku niż rano.',
        turningPoint: 'Maciej uświadamia sobie, że swoim mentorskim tonem i rzucaniem papierami nie zaatakował idei, lecz zaatakował godność, autorytet i poczucie sprawczości własnego ojca. Janusz bronił nie fal radiowych, lecz swojego poczucia bycia mądrym, szanowanym ojcem.',
        outcome: 'Zrozumienie, że zmiana czyichś przekonań wymaga najpierw zapewnienia mu poczucia bezpieczeństwa emocjonalnego.'
      },
      psychologicalAnalysis: {
        coreMechanisms: [
          {
            name: 'Tożsamościowe Zrastanie się z Poglądami (Identity Protective Cognition)',
            description: 'Mechanizm ewolucyjny chroniący naszą przynależność do plemienia: podzielanie poglądów grupy jest ważniejsze dla przetrwania niż obiektywna prawda.',
            realWorldManifestation: 'Dla Janusza przyznanie racji synowi oznaczałoby utratę statusu i zburzenie całego światopoglądu, który dawał mu poczucie porządku.'
          },
          {
            name: 'Motywowane Rozumowanie (Motivated Reasoning)',
            description: 'Używanie intelektu nie do poszukiwania prawdy, lecz do fabrykowania racjonalizacji broniących emocjonalnego wyboru.',
            realWorldManifestation: 'Gdy badania naukowe przeczą przekonaniu, natychmiast pojawia się hipoteza o „przekupionych naukowcach”.'
          }
        ],
        emotionalDynamics: 'Poczucie zagrożenia własnej wartości i lęk przed wyjściem na naiwnego.',
        hiddenMotivations: 'Pragnienie zachowania spójnego, bezpiecznego obrazu świata za wszelką cenę.',
        cognitiveDistortions: ['Myślenie czarno-białe', 'Selektywna uwaga', 'Dyskredytacja źródła']
      },
      neuroscienceInsight: {
        brainStructures: [
          {
            name: 'Domyślna Sieć Wzbudzeń (Default Mode Network - DMN)',
            role: 'Generowanie narracji o sobie, pamięć autobiograficzna i poczucie tożsamości.',
            functionInScenario: 'Aktywowała się potężnie, traktując atak na poglądy jako atak na integralność samego Janusza.'
          },
          {
            name: 'Grzbietowo-Boczna Kora Przedczołowa (dlPFC)',
            role: 'Logiczne rozumowanie i krytyczna analiza danych.',
            functionInScenario: 'Została zaprzęgnięta do budowania kontrargumentów obronnych zamiast do analizy faktów.'
          }
        ],
        neurotransmitters: [
          { name: 'Adrenalina', effect: 'Wywołała natychmiastową mobilizację bojową i podniesienie głosu.' }
        ],
        scientificSummary: 'Kiedy mózg styka się z faktami podważającymi tożsamość, krew odpływa z ośrodków obiektywnej analizy logicznej ku obwodom walki/ucieczki. Argumenty logiczne w stanie pobudzenia limbicznego działają jak benzyna dolana do ognia.',
        keyTakeaway: 'Nigdy nie wygrasz dyskusji o przekonaniach, dopóki rozmówca czuje, że jego godność jest zagrożona.'
      },
      practicalApplication: {
        title: 'Jak Rozmawiać z Ludźmi o Odmiennych Poglądach',
        adviceList: [
          {
            heading: 'Test Ideologicznego Turinga',
            content: 'Zanim zaczniesz polemizować, powiedz: „Chciałbym się upewnić, że dobrze rozumiem twoje stanowisko. Pozwól, że przedstawię twoje argumenty swoimi słowami, a ty powiesz mi, czy ująłem to wiernie”. Jeśli potrafisz sformułować racje oponenta tak, by sam powiedział: „Dokładnie tak uważam!”, zyskujesz jego szacunek i otwierasz jego korę przedczołową.'
          },
          {
            heading: 'Rozdzielenie Poglądów od Tożsamości',
            content: 'Naucz się myśleć: „Moje poglądy to nie jestem ja. To tylko ubrania, które mój umysł założył na podstawie dotychczasowych doświadczeń. Gdy zmienia się pogoda, zmieniam ubranie bez utraty siebie”.'
          },
          {
            heading: 'Pytania Sokratejskie Zamiast Wykładów',
            content: 'Nie rzucaj faktami w twarz. Zadawaj pytania otwierające: „Co musiałoby się wydarzyć, jaki dowód musiałby się pojawić, byś choć trochę zweryfikował to zdanie?”. Jeśli rozmówca odpowie: „Nic na świecie!”, wiesz, że masz do czynienia z dogmatem religijnym, a nie logiczną dyskusją.'
          }
        ]
      },
      interactiveTool: {
        id: 'tool-ch8',
        type: 'devils_advocate_test',
        title: 'Generator Testu Ideologicznego Turinga i Rozbrajania Błędów',
        description: 'Przetestuj swoją elastyczność poznawczą: sformułuj najsilniejszy możliwy argument przeciwko swojemu własnemu głębokiemu przekonaniu.',
        instruction: 'Wybierz jedno ze swoich silnych przekonań i zmierz się z wyzwaniem adwokata diabła.'
      },
      exercise: {
        id: 'ex-ch8',
        title: 'Protokół Epistemicznej Pokory',
        estimatedMinutes: 10,
        category: 'refleksja',
        goal: 'Rozszerzenie elastyczności poznawczej i wygaszenie defensywnej reakcji układu limbicznego.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór Silnego Poglądu',
            description: 'Zapisz jedno przekonanie polityczne, społeczne lub wychowawcze, w które głęboko wierzysz.',
            inputType: 'text',
            promptQuestion: 'Moje silne przekonanie:'
          },
          {
            stepNumber: 2,
            title: 'Zapisanie: „Czego w tej sprawie jeszcze nie wiem?”',
            description: 'Wypisz 3 obszary wiedzy lub doświadczeń ludzi o przeciwnym zdaniu, których osobiście nie znasz i których nie przeżyłeś.',
            inputType: 'textarea',
            promptQuestion: 'To, czego nie wiem lub nie rozumiem z perspektywy oponenta:'
          }
        ],
        reflectionPrompt: 'Przypomnij sobie moment w życiu, gdy byłeś czegoś w 100% pewien, a po latach okazało się, że byłeś w błędzie. Czego to doświadczenie nauczyło Cię o niezawodności Twojego umysłu?'
      },
      keyTakeaways: [
        'Mózg traktuje atak na poglądy z taką samą powagą jak atak fizyczny (aktywacja DMN i ciała migdałowatego).',
        'Zasypywanie faktami wywołuje efekt rykoszetu (Backfire Effect) i wzmacnia opór.',
        'Zmiana zdania wymaga najpierw poczucia bezpieczeństwa i nienaruszonej godności osobistej.',
        'Epistemiczna pokora to świadomość, że nasze przekonania są jedynie roboczym modelem rzeczywistości.'
      ]
    }
  ]
};

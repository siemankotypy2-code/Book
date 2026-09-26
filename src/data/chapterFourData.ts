import { Chapter } from '../types/book';

export const chapterFour: Chapter = {
  number: 4,
  title: 'Percepcja',
  subtitle: 'Dlaczego nie odbieramy rzeczywistości dokładnie takiej, jaka jest?',
  leadParagraph:
    'Gdy otwierasz oczy, masz przemożne wrażenie, że po prostu patrzysz na świat przez przezroczystą szybę i rejestrujesz fakty takimi, jakimi są. To fundamentalne złudzenie zwane realizmem naiwnym. W rzeczywistości Twoje doznanie percepcyjne nie jest odbiciem świata w lustrze, lecz dynamiczną, aktywną konstrukcją stworzoną przez Twój mózg. W tym rozdziale zbadamy, jak doświadczenia, kontekst i odgórne oczekiwania kształtują to, co uważasz za obiektywną prawdę.',
  totalEstimatedPages: 36,
  sections: [
    {
      id: 'sec-4-1',
      pageNumber: 137,
      sectionNumber: '4.1',
      title: 'Złudzenie Realizmu Naiwnego: Dlaczego Dwie Osoby Widzą Różne Rzeczy',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Mózg jest maszyną predykcyjną. Nie czeka biernie na sygnały ze świata – nieustannie zgaduje, co znajduje się na zewnątrz, i koryguje swoje hipotezy tylko wtedy, gdy popełni błąd.',
        author: 'Andy Clark, "Surfing Uncertainty"'
      },
      paragraphs: [
        'Wyobraź sobie salę konferencyjną, w której dwaj dyrektorzy – Piotr i Andrzej – słuchają tej samej prezentacji handlowej nowego dostawcy oprogramowania. Prelegent przedstawia slajd z wykresem awaryjności systemu wynoszącym 0.05% w skali roku.',
        'Piotr, który w poprzedniej firmie doświadczył katastrofalnego wycieku danych z powodu niedopracowanego kodu, patrzy na ten sam wykres i widzi śmiertelne zagrożenie. W jego głowie zapala się czerwona lampka: „Ukrywają prawdziwe ryzyko! Próbują nas uśpić ładnym slajdem”.',
        'Andrzej, z natury optymista stawiający na szybkie skalowanie biznesu, patrzy na ten sam slajd i uśmiecha się szeroko: „Genialna stabilność! Dokładnie tego potrzebujemy, by ruszyć z kopyta”.',
        'Gdy po spotkaniu obaj panowie wychodzą na korytarz, wywiązuje się między nimi ostra sprzeczka. Każdy z nich zarzuca drugiemu ślepotę, brak profesjonalizmu lub złą wolę. Żaden z nich nie zdaje sobie sprawy, że padł ofiarą REALIZMU NAIWNEGO (Naive Realism) – przekonania, że nasze narządy zmysłów dostarczają nam bezpośredniego, nieprzetworzonego obrazu rzeczywistości, a każdy, kto widzi rzeczy inaczej, musi być w błędzie lub manipulować.'
      ]
    },
    {
      id: 'sec-4-2',
      pageNumber: 142,
      sectionNumber: '4.2',
      title: 'Od Sygnału Sensorycznego do Doznania: Odgórne (Top-Down) vs Oddolne (Bottom-Up)',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Aby zrozumieć, jak powstaje wrażenie zmysłowe, musimy rozróżnić dwa pojęcia:',
        '1. BODZIEC FIZYCZNY / SYGNAŁ (Sensory Input): Fale elektromagnetyczne wpadające do siatkówki oka, fale akustyczne uderzające w błonę bębenkową czy cząsteczki chemiczne wiążące się z nabłonkiem węchowym. To surowy, pozbawiony znaczenia kod fizyczny.',
        '2. DOZNANIE PERCEPCYJNE (Perceptual Experience): Świadomy, zinterpretowany obraz w umyśle – widok czerwonego jabłka, dźwięk głosu przyjaciela, zapach świeżej kawy.',
        'Proces syntezy zachodzi przy udziale dwóch przeciwstawnych kierunków przepływu informacji:',
        '• Przetwarzanie Oddolne (Bottom-Up Processing): Analiza wstępująca od surowych cech bodźca (krawędzie, jasność, częstotliwość) w górę do struktur wyższych. To rejestracja danych ze środowiska.',
        '• Przetwarzanie Odgórne (Top-Down Processing): Analiza zstępująca. Wyższe ośrodki kory mózgowej (pamięć, oczekiwania, schematy pojęciowe, język, stan emocjonalny) „spływają” w dół, narzucając surowym danym konkretną interpretację.',
        'Twój świadomy obraz świata w 80% składa się z przetwarzania odgórnego, a tylko w 20% z surowego sygnału sensorycznego!'
      ]
    },
    {
      id: 'sec-4-3',
      pageNumber: 148,
      sectionNumber: '4.3',
      title: 'Mózg jako Maszyna Predykcyjna (Predictive Processing Framework)',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przez dekady psychologia traktowała mózg jako pasywny odbiornik – urządzenie, które czeka na sygnał, przetwarza go i wypluwa reakcję. Przełom w neuronauce XX-wiecznej (pionierzy: Karl Friston, Andy Clark, Jakob Hohwy) przyniósł zupełnie nowy model: PREDIKCYJNE PRZETWARZANIE (Predictive Processing).',
        'Zgodnie z tym modelem, Twój mózg usadzony w ciemnej, kościstej pusze czaszki NIE CZEKA na sygnały zewnątrz. On nieustannie generuje ODGÓRNE PRZEWIDYWANIA (Predictions / Generative Models) na temat tego, co powinno nastąpić w kolejnej milisekundzie.',
        'Sygnały ze zmysłów służą mózgowi wyłącznie do jednego celu: do sprawdzania, czy jego przewidywanie było trafne! Jeśli wystąpi rozbieżność między oczekiwaniem a sygnałem, powstaje tzw. BŁĄD PREDIKCJI (Prediction Error). Dopiero ten błąd wędruje w górę i koryguje nasz wewnętrzny model świata.'
      ],
      subsections: [
        {
          title: 'Wgląd Naukowy w Przetwarzanie Predykcyjne',
          paragraphs: [],
          highlightBox: {
            title: 'Wgląd Naukowy',
            content: 'Percepcja to kontrolowana halucynacja. Gdy Twoje przewidywania zgadzają się z sygnałem sensorycznym, nazywasz to rzeczywistością. Gdy przewidywania rozminą się z sygnałem i nie ulegną korekcie – powstaje iluzja lub halucynacja.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-4-4',
      pageNumber: 155,
      sectionNumber: '4.4',
      title: 'Moc Kontekstu i Ramy Interpretacyjne (Framing Effects)',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'To samo słowo, ten sam gest czy ten sam obiekt fizyczny nabiera zupełnie innego znaczenia w zależności od ramy kontekstowej, w której występuje.',
        '• Kontekst Społeczny: Zmarszczenie brwi przez przełożonego podczas prezentacji może być zinterpretowane jako wściekłość (gdy boimy się o posadę) albo jako głębokie skupienie merytoryczne (gdy czujemy się pewnie).',
        '• Kontekst Cenowy: Dwa identyczne wina podane w blind-teście smakują badanym zupełnie inaczej, gdy poinformuje się ich, że jedno kosztuje 20 PLN, a drugie 400 PLN. Skaner fMRI pokazuje realnie wyższą aktywację ośrodka przyjemności (orbitofrontal cortex) przy droższej etykiecie!',
        'Mózg nie ocenia rzeczy w próżni – zawsze tworzy względny kontrast.'
      ]
    },
    {
      id: 'sec-4-5',
      pageNumber: 161,
      sectionNumber: '4.5',
      title: 'Studium Przypadku: Piotr i Kontrakt Negocjacyjny z Klientem',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'Piotr (44 lata, dyrektor sprzedaży) prowadził kluczowe negocjacje handlowe z nowym partnerem zagranicznym.'
      ],
      caseStudyRef: {
        id: 'cs-piotr-perception',
        title: 'Filtr Podejrzliwości: Jak Nastawienie Odkształca Przebieg Negocjacji',
        subtitle: 'Gdy milczenie kontrahenta zostaje zinterpretowane jako próba szantażu',
        protagonist: 'Piotr, Dyrektor Handlowy (44 lata)',
        context: 'Negocjacje umowy dostawy podzespołów przemysłowych z kontrahentem z Niemiec.',
        story: [
          'Podczas kluczowego spotkania online niemiecki partner po usłyszeniu propozycji cenowej Piotra zamilkł na 15 sekund, spuścił wzrok i zaczął robić notatki w skórzanym zeszycie.',
          'Piotr, wychowany w kulturze natychmiastowych ripost i mający za sobą trudny rok w firmie, zinterpretował to milczenie odgórnie jako: „Oni uważają moją cenę za absurdalną, zaraz zerwą rozmowy i zostanę z niczym”.',
          'Pod wpływem tego wygenerowanego w własnej głowie lęku, zanim Niemiec zdążył odezwać się choćby słowem, Piotr pękł i powiedział gwałtownie: „Dobrze, jeśli ta kwota jest dla was nie do przyjęcia, możemy zejść o 12% z marży!”',
          'Dopiero po podpisaniu umowy okazało się, że niemiecki partner milczał wyłącznie dlatego, że powoli przeliczał w pamięci kurs euro na marki i uważał pierwotną ofertę Piotra za bardzo atrakcyjną! Przez własny filtr percepcyjny Piotr oddał 12% zysku bez absolutnie żadnego powodu.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Projekcja percepcyjna niepewności i odgórne nadanie negatywnego znaczenia neutralnemu bodźcowi (milczenie).',
          cognitiveBiases: [
            {
              name: 'Czytanie w Myślach (Mind Reading)',
              description: 'Przekonanie Piotra, że wie dokładnie, co oznacza pauza w wypowiedzi kontrahenta.',
              impact: 'Spowodowało niepotrzebną uległość cenową.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Racjonalizacja Prewencyjna',
              explanation: '„Lepszy gorszy kontrakt niż żaden” (usprawiedliwienie oddania marży przed weryfikacją faktów).'
            }
          ],
          emotionalDynamic: 'Niewyrażona niepewność zamieniona w nagłą panikę uległościową.'
        },
        decisionProcessAnalysis: {
          trigger: '15-sekundowe milczenie partnera negocjacyjnego.',
          attentionFocus: 'Spuszczony wzrok kontrahenta.',
          interpretation: '„Oni odrzucą ofertę, zaraz pożegnam się z prowizją”.',
          emotion: 'Nagle wzbudzony lęk przed porażką.',
          impulse: 'Zredukować napięcie poprzez ustępstwo.',
          action: 'Samowolne obniżenie ceny o 12%.',
          consequence: 'Utrata kilkudziesięciu tysięcy złotych zysku dla firmy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Kora Skroniowo-Ciemieniowa (TPJ / ToM)', role: 'Modelowanie intencji innych osób', activationState: 'Zniekształcenie przez lęk' }
          ],
          neurotransmitters: [
            { name: 'Adrenalina', roleInScenario: 'Przyspieszyła decyzję bez zaczekania na sygnał ze strony kontrahenta.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 5000 ms', process: 'Milczenie kontrahenta aktywuje hipotetyczny model porażki w umyśle Piotra.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Wytrzymanie Pauzy', script: 'Spokojny oddech i zadanie pytania otwartego: „Jak oceniają Państwo tę propozycję?”.', rationale: 'Pozwala poznać faktyczne stanowisko drugiej strony bez zgadywania.' }
          ]
        },
        keyTakeaway: 'Nigdy nie licytuj przeciwko samemu sobie na podstawie niepotwierdzonych domysłów percepcyjnych.'
      }
    },
    {
      id: 'sec-4-6',
      pageNumber: 167,
      sectionNumber: '4.6',
      title: 'Podsumowanie Rozdziału 4 i Most do Rozdziału 5',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Percepcja jest wysoce zindywidualizowaną syntezą sygnału sensorycznego i odgórnych hipotez naszego mózgu. Nie widzimy świata dokładnie takim, jaki jest, lecz takim, jakim nasz mózg przewiduje go na podstawie dotychczasowych wzorców.',
        'A skąd mózg czerpie te odgórne wzorce, schematy i oczekiwania, którymi nakłada ramy na bieżącą rzeczywistość?',
        'Źródłem tych wzorców jest nasz magazyn doświadczeń. W kolejnym rozdziale zbadamy strukturę, w której zapisane są nasze przeżycia – i odkryjemy, dlaczego przypominanie sobie zdarzeń nie przypomina odtwarzania nagrania z kamery. Zapraszamy do Rozdziału 5: PAMIĘĆ.'
      ]
    }
  ]
};

import React, { useState } from 'react';
import { Beaker, ArrowRight, RotateCcw, CheckCircle, HelpCircle, AlertCircle } from 'lucide-react';

interface ExperimentItem {
  id: string;
  number: number;
  title: string;
  category: string;
  prompt: string;
  interactiveScenario: {
    questionText: string;
    options: {
      id: string;
      label: string;
      isIntuitiveTrap?: boolean;
      explanation: string;
    }[];
  };
  mechanismExplanation: string;
  reflectionInsight: {
    whatItSaysAboutProcess: string;
    whatItDoesNotSayAboutYou: string;
  };
}

const experiments: ExperimentItem[] = [
  {
    id: 'exp1_speed_choice',
    number: 1,
    title: 'Eksperyment 1: Szybka Decyzja i Problem Kija i Piłki',
    category: 'Heurystyki Systemu 1 vs System 2',
    prompt: 'Odpowiedz tak szybko, jak potrafisz, nie używając kalkulatora:',
    interactiveScenario: {
      questionText: 'Kij bejsbolowy i piłka kosztują łącznie 1,10 zł. Kij jest o 1,00 zł droższy od piłki. Ile kosztuje piłka?',
      options: [
        {
          id: 'opt_10gr',
          label: '10 groszy (0,10 zł)',
          isIntuitiveTrap: true,
          explanation: 'Klasyczna pułapka Systemu 1! Jeśli piłka kosztowałaby 10 gr, a kij byłby o 1 zł droższy (czyli 1,10 zł), łączny koszt wyniósłby 1,20 zł, a nie 1,10 zł.'
        },
        {
          id: 'opt_5gr',
          label: '5 groszy (0,05 zł)',
          isIntuitiveTrap: false,
          explanation: 'Prawidłowo! Piłka kosztuje 5 gr, kij kosztuje 1,05 zł (jest o 1 zł droższy), a razem dają dokładnie 1,10 zł.'
        }
      ]
    },
    mechanismExplanation: 'Nawet ponad 50% studentów Harvardu i MIT wybiera intuicyjną odpowiedź „10 groszy”. System 1 dostrzega liczbę 1,10 i 1,00, po czym bezrefleksyjnie podsuwa różnicę (0,10 zł), bo to rozwiązanie jest najtańsze poznawczo. Dopiero włączenie powolnego Systemu 2 pozwala wychwycić ten błąd.',
    reflectionInsight: {
      whatItSaysAboutProcess: 'Twój umysł domyślnie wybiera drogę najmniejszego oporu poznawczego i natychmiastowe przybliżenie.',
      whatItDoesNotSayAboutYou: 'NIE oznacza to, że jesteś kiepski z matematyki ani że brakuje Ci inteligencji logicznej.'
    }
  },
  {
    id: 'exp2_fact_vs_interp',
    number: 2,
    title: 'Eksperyment 2: Fakt czy Interpretacja?',
    category: 'Rozdzielanie Bodźca od Oceny',
    prompt: 'Przeczytaj poniższy komunikat i wskaż, co w nim jest czystym faktem, a co dopowiedzeniem Twojego umysłu:',
    interactiveScenario: {
      questionText: 'Twój szef o godzinie 16:55 przysyła SMS: „Jutro o 9:00 musimy pilnie porozmawiać o Twoim projekcie”. Co jest tutaj FAKTEM?',
      options: [
        {
          id: 'f1',
          label: 'A. Szef ma do mnie pretensje i jest niezadowolony z projektu.',
          isIntuitiveTrap: true,
          explanation: 'To jest czysta interpretacja (katastrofizowanie i czytanie w myślach), a nie fakt.'
        },
        {
          id: 'f2',
          label: 'B. Otrzymałem wiadomość tekstową ze słowami o pilnej rozmowie o 9:00.',
          isIntuitiveTrap: false,
          explanation: 'To jest jedyny twardy, weryfikowalny FAKT, który zarejestrowałaby kamera w telefonie.'
        },
        {
          id: 'f3',
          label: 'C. Prawdopodobnie chcą mnie zwolnić lub odebrać budżet.',
          isIntuitiveTrap: true,
          explanation: 'To jest projekcja lękowa Twojego układu limbicznego szukającego najgorszego scenariusza.'
        }
      ]
    },
    mechanismExplanation: 'Mózg ludzki ma wstręt do próżni informacyjnej. W obliczu niejednoznacznego bodźca automatycznie wypełnia luki opowieścią — i zazwyczaj jest to opowieść negatywna, bo ewolucyjnie lepiej było pomylić szum wiatru z drapieżnikiem, niż zignorować lamparta.',
    reflectionInsight: {
      whatItSaysAboutProcess: 'Mózg ma wbudowany filtr zagrożenia (negativity bias), który natychmiast tworzy fabułę obronną.',
      whatItDoesNotSayAboutYou: 'NIE oznacza to, że jesteś panikarzem ani że Twoje lęki są obiektywną prawdą o jutrzejszym dniu.'
    }
  },
  {
    id: 'exp3_attention_blindness',
    number: 3,
    title: 'Eksperyment 3: Ślepota Pozauwagowa i Efekt Reflektora',
    category: 'Ograniczenia Percepcji',
    prompt: 'Zastanów się nad słynnym eksperymentem Simona i Chabrisa z „Niewidzialnym Gorylem”:',
    interactiveScenario: {
      questionText: 'Gdy badani mieli za zadanie dokładnie liczyć podania piłki między zawodnikami w białych koszulkach, ponad 50% z nich NIE ZAUWAŻYŁO człowieka w stroju goryla, który wszedł na środek boiska, uderzył się w pierś i zszedł. Dlaczego?',
      options: [
        {
          id: 'g_eyes',
          label: 'A. Ich wzrok fizycznie nie zarejestrował goryla (obraz nie padł na siatkówkę).',
          isIntuitiveTrap: true,
          explanation: 'Badania okulograficzne (eye-tracking) dowiodły, że ich oczy patrzyły wprost na goryla przez średnio 1 sekundę!'
        },
        {
          id: 'g_attention',
          label: 'B. Ich uwaga była całkowicie zaangażowana w liczenie, więc kora wzrokowa nie wpuściła obrazu do świadomości.',
          isIntuitiveTrap: false,
          explanation: 'Dokładnie tak! Widzenie to nie tylko odbieranie światła przez oczy — widzenie to świadoma interpretacja w korze czołowo-ciemieniowej.'
        }
      ]
    },
    mechanismExplanation: 'Uwaga działa jak wąski reflektor na scenie teatralnej. To, co znajduje się poza stożkiem światła, dosłownie nie istnieje dla Twojej świadomości, nawet jeśli stoi tuż przed Twoim nosem.',
    reflectionInsight: {
      whatItSaysAboutProcess: 'Nigdy nie widzisz całej rzeczywistości — widzisz tylko to, na co aktualnie Twój umysł skierował zasoby uwagi.',
      whatItDoesNotSayAboutYou: 'NIE oznacza to, że jesteś ślepy lub nierozgarnięty — to konieczna redukcja danych ratująca mózg przed zalaniem informacyjnym.'
    }
  },
  {
    id: 'exp4_emotional_pulse',
    number: 4,
    title: 'Eksperyment 4: Reakcja Emocjonalna a Prawda Sytuacji',
    category: 'Emocja jako Informacja, a nie Wyrok',
    prompt: 'Wyobraź sobie, że wchodzisz do pokoju socjalnego w biurze. Dwie osoby nagle przerywają rozmowę i cichną:',
    interactiveScenario: {
      questionText: 'Czujesz nagły skurcz w żołądku i wstyd: „Na pewno obgadywały mnie”. Co mówi Ci ta emocja?',
      options: [
        {
          id: 'e1',
          label: 'A. Skoro poczułem wstyd i odrzucenie, to dowód, że na 100% o mnie mówiły.',
          isIntuitiveTrap: true,
          explanation: 'To jest błąd rozumowania emocjonalnego (Emotional Reasoning: „Czuję tak, a więc tak musi być”).'
        },
        {
          id: 'e2',
          label: 'B. Emocja informuje mnie wyłącznie o mojej wrażliwości na ocenę, a nie o tym, o czym rozmawiały te osoby.',
          isIntuitiveTrap: false,
          explanation: 'Dokładnie! Mogły rozmawiać o chorobie krewnego, o tajnej premii albo po prostu skończyć zdanie.'
        }
      ]
    },
    mechanismExplanation: 'Emocje są jak lampki kontrolne na desce rozdzielczej samochodu — sygnalizują stan Twojego wewnętrznego silnika, ale nie mówią, jaka pogoda panuje za oknem.',
    reflectionInsight: {
      whatItSaysAboutProcess: 'Emocja jest cennym źródłem wiedzy o Twoich wewnętrznych potrzebach i przeszłych doświadczeniach.',
      whatItDoesNotSayAboutYou: 'NIE oznacza to, że Twoje pierwsze emocjonalne przeczucie jest trafnym opisem obiektywnej rzeczywistości.'
    }
  },
  {
    id: 'exp5_decision_audit',
    number: 5,
    title: 'Eksperyment 5: Analiza Własnej Decyzji w 3 Krokach',
    category: 'Metapoznanie i Autorefleksja',
    prompt: 'Przypomnij sobie wczorajszą małą decyzję, której lekko żałujesz (np. późne pójście spać, zakup drobiazgu, ostra uwaga):',
    interactiveScenario: {
      questionText: 'Gdybyś miał rozłożyć tę decyzję na czynniki pierwsze za pomocą Protokołu Pauzy, od czego należy zacząć?',
      options: [
        {
          id: 'aud_blame',
          label: 'A. Od znalezienia winnego lub zganienia siebie za brak silnej woli.',
          isIntuitiveTrap: true,
          explanation: 'Poczucie winy i samokrytyka natychmiast blokują proces uczenia się i aktywują mechanizmy obronne.'
        },
        {
          id: 'aud_trigger',
          label: 'B. Od zidentyfikowania: jaki był fizyczny BODZIEC i jaka EMOCJA pojawiła się tuż przed impulsem?',
          isIntuitiveTrap: false,
          explanation: 'Doskonale! Spojrzenie na decyzję jak naukowiec badający reakcję chemiczną uwalnia od wstydu i pozwala na zmianę wzorca.'
        }
      ]
    },
    mechanismExplanation: 'Metapoznanie (myślenie o własnym myśleniu) to jedyna funkcja ludzkiego umysłu, która pozwala wyrwać się z pętli automatycznych nawyków i stać się świadomym obserwatorem własnych wyborów.',
    reflectionInsight: {
      whatItSaysAboutProcess: 'Każde Twoje zachowanie miało w danym ułamku sekundy swój biologiczny lub emocjonalny sens.',
      whatItDoesNotSayAboutYou: 'Błąd w zachowaniu NIE jest dowodem na to, że jesteś osobą zepsutą czy bezwartościową.'
    }
  }
];

export const ChapterOneLab: React.FC = () => {
  const [activeExpIdx, setActiveExpIdx] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<string, string>>({});

  const exp = experiments[activeExpIdx];
  const selectedOptionId = userSelections[exp.id];
  const chosenOption = exp.interactiveScenario.options.find((o) => o.id === selectedOptionId);

  const handleSelect = (optionId: string) => {
    setUserSelections((prev) => ({
      ...prev,
      [exp.id]: optionId
    }));
  };

  return (
    <div className="my-10 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Beaker className="w-3.5 h-3.5" />
            Laboratorium Własnego Umysłu • Sekcja 1.11
          </span>
          <span className="text-xs font-mono text-stone-400">
            Eksperyment {activeExpIdx + 1} z {experiments.length}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-amber-100">
          5 Doświadczeń Poznawczych: Zobacz Swój Umysł w Akcji
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Prawdziwa zmiana zaczyna się od doświadczenia, a nie od suchej teorii. Przejdź przez poniższe 5 prób.
        </p>

        {/* Experiment Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 mt-5 pt-2 border-t border-white/10">
          {experiments.map((item, idx) => {
            const isCompleted = !!userSelections[item.id];
            const isCurrent = idx === activeExpIdx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveExpIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition flex items-center space-x-1.5 ${
                  isCurrent
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                }`}
              >
                <span>Próba {item.number}</span>
                {isCompleted && <CheckCircle className="w-3 h-3 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Experiment Body */}
      <div className="p-5 sm:p-7 space-y-6">
        <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
          <span className="text-xs font-mono uppercase text-amber-800 dark:text-amber-400 font-bold">
            {exp.category}
          </span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
            {exp.title}
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 font-serif italic">
            {exp.prompt}
          </p>
        </div>

        {/* Question and Interactive Options */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 font-serif text-sm sm:text-base text-stone-900 dark:text-stone-100 font-semibold leading-relaxed">
            {exp.interactiveScenario.questionText}
          </div>

          <div className="space-y-2.5">
            {exp.interactiveScenario.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm font-sans flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-amber-50 dark:bg-stone-800 border-amber-600 dark:border-amber-500 shadow-xs'
                      : 'bg-stone-50 dark:bg-stone-950/40 hover:bg-stone-100 dark:hover:bg-stone-800/50 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold ${
                    isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-stone-400 text-stone-500'
                  }`}>
                    {isSelected ? '✓' : ''}
                  </span>
                  <span className="leading-relaxed font-serif">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation & Insight if Selected */}
        {chosenOption && (
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800 animate-fadeIn">
            {/* Feedback Box */}
            <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
              chosenOption.isIntuitiveTrap
                ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
            }`}>
              <div className="font-mono text-xs font-bold uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Analiza Twojej Odpowiedzi:</span>
              </div>
              <p className="font-serif leading-relaxed">{chosenOption.explanation}</p>
            </div>

            {/* Scientific Mechanism */}
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm">
              <strong className="text-stone-900 dark:text-stone-100 font-mono text-xs uppercase block mb-1">
                Co Mówi Neuronauka i Psychologia Poznawcza:
              </strong>
              <p className="text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                {exp.mechanismExplanation}
              </p>
            </div>

            {/* Core Reflection: What it says vs What it does NOT say */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs">
                <span className="font-mono font-bold text-blue-900 dark:text-blue-300 uppercase block mb-1">
                  ✓ Co to mówi o procesie:
                </span>
                <p className="text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                  {exp.reflectionInsight.whatItSaysAboutProcess}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 text-xs">
                <span className="font-mono font-bold text-purple-900 dark:text-purple-300 uppercase block mb-1">
                  ✗ Czego to NIE mówi o Tobie:
                </span>
                <p className="text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                  {exp.reflectionInsight.whatItDoesNotSayAboutYou}
                </p>
              </div>
            </div>

            {/* Next Experiment Button */}
            {activeExpIdx < experiments.length - 1 && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveExpIdx((prev) => prev + 1)}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-amber-900 text-white dark:text-stone-900 font-mono text-xs font-semibold transition flex items-center space-x-1.5"
                >
                  <span>Przejdź do Eksperymentu {activeExpIdx + 2}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

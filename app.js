const STORAGE_KEY = "aletheia_wirklichkeitslabor_v1";

const AXES = [
  {
    id: "wahrheit",
    short: "Wahrheit",
    title: "Wahrheit vs. Relativismus",
    description: "Bernwards Absolutheitsdenken trifft auf Skepsis, Konstruktion und postfaktische Verschiebung."
  },
  {
    id: "aktion",
    short: "Handlung",
    title: "Theorie vs. Handlung",
    description: "Brigitte drueckt auf Eskalation, waehrend Theorie und Reflexion hinterherkommen muessen."
  },
  {
    id: "technik",
    short: "Technik",
    title: "Technik vs. Ideologie",
    description: "Die Chirurgin fragt nach Funktion, nicht nach moralischer Reinheit."
  },
  {
    id: "beobachtung",
    short: "Beobachtung",
    title: "Beobachtung vs. Teilnahme",
    description: "Byproxy steht zwischen Erzaehlen, Manipulation und Zeugenschaft."
  },
  {
    id: "loyalitaet",
    short: "Loyalitaet",
    title: "Loyalitaet vs. Selbstschutz",
    description: "Paul versucht zu vermitteln, ohne dass das Kollektiv in Misstrauen zerfaellt."
  },
  {
    id: "kontrolle",
    short: "Kontrolle",
    title: "Institution vs. Freiheit",
    description: "Frau M., Polizei, Gericht und Regelwerke markieren Macht von aussen."
  }
];

const FIGURES = [
  {
    id: "byproxy",
    name: "Byproxy / Petra Bretschneider",
    role: "Erzaehlerin, Spieleentwicklerin, strategische Beobachterin",
    mindset: "Analytisch, narrativ sensibel, machtbewusst; will verstehen und zugleich ihre eigene Position sichern.",
    axis: "beobachtung",
    function: "Sie macht sichtbar, dass jede Erzaehlung eine Auswahl und damit eine Machtgeste ist.",
    mission: {
      title: "Byproxy-Protokoll",
      goal: "Halte Realitaetsdruck und Ambiguitaet beide zwischen 35 und 70 und erreiche mindestens 16 Enthuellungspunkte.",
      blindSpot: "Du gewinnst leichter, wenn das Spiel nicht in Eindeutigkeit kippt."
    }
  },
  {
    id: "paul",
    name: "Paul",
    role: "Vermittler, Logistiker, Drucker",
    mindset: "Loyal, konfliktscheu, stabilisierend; sucht Sicherheit und versucht, Eskalation aufzuhalten.",
    axis: "loyalitaet",
    function: "Er ist das fragile Scharnier zwischen Ideologie, Aktion und Alltag.",
    mission: {
      title: "Paul-Protokoll",
      goal: "Beende das Spiel mit mindestens 55 Vertrauen und ohne dass ein Extremwert 80 erreicht.",
      blindSpot: "Zu viel Schlichtung ohne Klarheit kann als Verdeckung wirken."
    }
  },
  {
    id: "bernward",
    name: "Bernward",
    role: "Ideologischer Kopf der Gruppe",
    mindset: "Dogmatisch-philosophisch, anti-relativistisch, theoriegetrieben und realitaetsfern.",
    axis: "wahrheit",
    function: "Er radikalisiert den Wahrheitsbegriff bis an die Grenze autoritaerer Reinheit.",
    mission: {
      title: "Bernward-Protokoll",
      goal: "Setze mindestens zwei Doktrinen der Familie 'Absolutheit' und halte den Realitaetsdruck am Ende ueber 55.",
      blindSpot: "Zu viel Reinheit kippt in Zwang und zerstoert das Paarspiel."
    }
  },
  {
    id: "brigitte",
    name: "Brigitte",
    role: "Radikale Aktivistin",
    mindset: "Impulsiv, militant, handlungsorientiert; verachtet reine Theorie.",
    axis: "aktion",
    function: "Sie prueft, ob Wahrheit ohne Risiko nur Pose bleibt.",
    mission: {
      title: "Brigitte-Protokoll",
      goal: "Setze mindestens zwei Doktrinen der Familie 'Aktion' und erreiche in mindestens drei Runden eine richtige Verdachtsmarkierung.",
      blindSpot: "Aktion ohne Rueckbindung zerlegt Vertrauen."
    }
  },
  {
    id: "chirurgin",
    name: "Die Chirurgin",
    role: "Bombenbauerin und technische Spezialistin",
    mindset: "Pragmatisch, distanziert, zynisch; denkt in Umsetzbarkeit statt in Reinheit.",
    axis: "technik",
    function: "Sie zeigt, wie Technik Verantwortung verschieben kann, ohne neutral zu sein.",
    mission: {
      title: "Chirurgin-Protokoll",
      goal: "Setze mindestens eine Doktrin 'Aktion' und eine 'Nebel'-Doktrin, ohne dass Ambiguitaet ueber 78 steigt.",
      blindSpot: "Technische Loesungen wirken sauber, verschleiern aber Motive."
    }
  },
  {
    id: "bayer",
    name: "Bayer",
    role: "Anwalt der Gruppe",
    mindset: "Juristisch-strategisch, narrativ praezise, zynischer Realist.",
    axis: "kontrolle",
    function: "Er zeigt, dass Wahrheit vor Gericht immer auch als Geschichte organisiert wird."
  },
  {
    id: "dorothee",
    name: "Dorothee",
    role: "Kindheitsfreundin und Aussenperspektive",
    mindset: "Vorsichtig, konventionell, moralisch stabil; Gegenpol zur Gruppe.",
    axis: "loyalitaet",
    function: "Sie bringt Ethik und Alltag gegen die geschlossene Logik des Kollektivs in Stellung."
  },
  {
    id: "omar",
    name: "Omar Haj'Yahia",
    role: "Mitbewohner in der betreuten Einrichtung",
    mindset: "Nebenfigur mit institutioneller Sprengkraft; loest Konflikte mit Polizei und Ordnung aus.",
    axis: "kontrolle",
    function: "Er macht deutlich, wie schnell Institutionen Fremdheit, Koerper und Macht verknuepfen."
  },
  {
    id: "frau_m",
    name: "Frau M.",
    role: "Aufseherin im betreuten Wohnen",
    mindset: "Autoritaer, kontrollorientiert, kleinbuergerlich, ordnungsliebend.",
    axis: "kontrolle",
    function: "Sie verkoerpert die alltgliche Form institutioneller Macht."
  }
];

const CORE_FIGURE_IDS = ["byproxy", "paul", "bernward", "brigitte", "chirurgin"];

const EVENTS = [
  {
    id: "manifestkeller",
    title: "Manifest im Keller",
    teaser: "Die Gruppe feilt an der Behauptung, dass nur absolute Wahrheit die Gesellschaft retten kann.",
    stakes: "Wenn die Sprache kippt, kippt auch der politische Horizont.",
    tags: ["wahrheit", "dogma", "balance"],
    figures: ["bernward", "byproxy", "paul"],
    shift: { druck: 6, ambig: -2, vertrauen: -2 }
  },
  {
    id: "buecherbarriere",
    title: "Buecherbarriere",
    teaser: "Alltag, Koerper und Theorie kollidieren in einem Raum, der fuer manche passierbar und fuer andere blockiert ist.",
    stakes: "Das Setting zeigt, dass Deutung nie unabhaengig von Koerpern und Infrastruktur ist.",
    tags: ["beobachtung", "loyalitaet", "bruch"],
    figures: ["byproxy", "paul", "frau_m"],
    shift: { druck: 1, ambig: 3, vertrauen: -5 }
  },
  {
    id: "druckerei",
    title: "Flugblattmaschine",
    teaser: "Texte werden vervielfaeltigt, waehrend gleichzeitig unklar bleibt, ob Aufklaerung oder Propaganda produziert wird.",
    stakes: "Mediale Formen tragen Wahrheit nicht nur, sie verformen sie auch.",
    tags: ["aktion", "wahrheit", "nebel"],
    figures: ["paul", "bernward", "brigitte"],
    shift: { druck: 4, ambig: 4, vertrauen: -1 }
  },
  {
    id: "bombenlogik",
    title: "Bombenlogik",
    teaser: "Technische Umsetzbarkeit tritt an die Stelle der moralischen Frage.",
    stakes: "Was geschieht, wenn Funktionalitaet den Sinn ersetzt?",
    tags: ["technik", "aktion", "dogma"],
    figures: ["chirurgin", "brigitte", "bernward"],
    shift: { druck: 7, ambig: 1, vertrauen: -4 }
  },
  {
    id: "kindheitsblick",
    title: "Dorothees Gegenblick",
    teaser: "Eine Aussenfigur stellt der Gruppe die Frage, ob ihre Wahrheitsrede nicht nur neue Gewalt maskiert.",
    stakes: "Die Gruppe wird von ausserhalb moralisch gespiegelt.",
    tags: ["loyalitaet", "beobachtung", "balance"],
    figures: ["dorothee", "byproxy", "paul"],
    shift: { druck: -2, ambig: 2, vertrauen: 4 }
  },
  {
    id: "institution",
    title: "Institutioneller Zugriff",
    teaser: "Regeln, Koerperkontrolle und Polizei rutschen in den Vordergrund.",
    stakes: "Die Frage lautet nicht nur, was wahr ist, sondern wer definieren darf, was gilt.",
    tags: ["kontrolle", "bruch", "dogma"],
    figures: ["frau_m", "omar", "bayer"],
    shift: { druck: 4, ambig: 2, vertrauen: -3 }
  },
  {
    id: "gerichtsprobe",
    title: "Gericht und Narrativ",
    teaser: "Bayer ordnet die Ereignisse in ein rhetorisch kontrolliertes Verteidigungsnarrativ.",
    stakes: "Juristische Wahrheit ist Form, Auswahl und Strategie zugleich.",
    tags: ["kontrolle", "beobachtung", "nebel"],
    figures: ["bayer", "byproxy", "bernward"],
    shift: { druck: 1, ambig: 5, vertrauen: -1 }
  },
  {
    id: "posttruthfeed",
    title: "Paralleler Feed",
    teaser: "Geruechte, Gegenwahrheiten und alternative Fakten diffundieren in alle Richtungen.",
    stakes: "Zu viel Relativierung zerfrisst Handlungsfaehigkeit.",
    tags: ["wahrheit", "nebel", "bruch"],
    figures: ["bernward", "byproxy", "bayer"],
    shift: { druck: -3, ambig: 7, vertrauen: -3 }
  },
  {
    id: "teilnahme",
    title: "Erzaehlte Teilnahme",
    teaser: "Byproxy muss entscheiden, ob sie Beobachterin bleiben oder aktiv in die Dynamik eingreifen will.",
    stakes: "Zeugenschaft wird zur Handlung.",
    tags: ["beobachtung", "aktion", "balance"],
    figures: ["byproxy", "brigitte", "paul"],
    shift: { druck: 2, ambig: 3, vertrauen: 1 }
  },
  {
    id: "spaltung",
    title: "Spaltung im Kollektiv",
    teaser: "Jede Figur beansprucht fuer sich, die eigentliche Rettungsidee zu verkoerpern.",
    stakes: "Aletheia droht an ihren eigenen Rollen zu zerbrechen.",
    tags: ["loyalitaet", "aktion", "bruch"],
    figures: ["bernward", "brigitte", "paul", "chirurgin"],
    shift: { druck: 3, ambig: 3, vertrauen: -7 }
  }
];

const FRAGMENTS = [
  {
    id: "f1",
    title: "Der Spiegel mit Haarriss",
    text: "Eine Wahrheit spiegelt alles, aber jeder Riss erzeugt eine zweite Lesart.",
    axes: ["wahrheit", "beobachtung"],
    figures: ["bernward", "byproxy"],
    effect: { druck: 3, ambig: 1, vertrauen: 0, revelation: 2 }
  },
  {
    id: "f2",
    title: "Der Rollweg zwischen Buechern",
    text: "Ein Raum behauptet Neutralitaet und offenbart im gleichen Augenblick seine Ausschluesse.",
    axes: ["beobachtung", "kontrolle"],
    figures: ["byproxy", "frau_m"],
    effect: { druck: 1, ambig: 2, vertrauen: -1, revelation: 2 }
  },
  {
    id: "f3",
    title: "Die matte Druckerschwaerze",
    text: "Was gedruckt ist, sieht endgueltig aus, auch wenn es nur beschleunigter Zweifel ist.",
    axes: ["wahrheit", "aktion"],
    figures: ["paul", "bernward"],
    effect: { druck: 2, ambig: 3, vertrauen: 0, revelation: 1 }
  },
  {
    id: "f4",
    title: "Das kalte Werkzeug",
    text: "Eine technische Loesung entlastet nie ganz von Verantwortung.",
    axes: ["technik", "aktion"],
    figures: ["chirurgin", "brigitte"],
    effect: { druck: 3, ambig: 0, vertrauen: -1, revelation: 1 }
  },
  {
    id: "f5",
    title: "Die ausweichende Hand",
    text: "Jemand vermittelt so lange, bis niemand mehr weiss, wer begonnen hat.",
    axes: ["loyalitaet", "beobachtung"],
    figures: ["paul", "byproxy"],
    effect: { druck: -1, ambig: 2, vertrauen: 3, revelation: 0 }
  },
  {
    id: "f6",
    title: "Das Banner ohne Boden",
    text: "Ein grosser Begriff haengt ueber allen und beruehrt doch nirgends den Alltag.",
    axes: ["wahrheit", "aktion"],
    figures: ["bernward", "brigitte"],
    effect: { druck: 4, ambig: 1, vertrauen: -1, revelation: 1 }
  },
  {
    id: "f7",
    title: "Das Tribunal aus Fluesterstimmen",
    text: "Nicht das Urteil ist gefaehrlich, sondern die Vorentscheidung im Hintergrund.",
    axes: ["kontrolle", "beobachtung"],
    figures: ["bayer", "frau_m"],
    effect: { druck: 2, ambig: 2, vertrauen: -1, revelation: 2 }
  },
  {
    id: "f8",
    title: "Die Salzspur",
    text: "Eine Erinnerung stellt die Frage, ob spaetere Ideologien nur fruehere Wunden verkleiden.",
    axes: ["beobachtung", "loyalitaet"],
    figures: ["byproxy", "dorothee"],
    effect: { druck: -2, ambig: 2, vertrauen: 2, revelation: 1 }
  },
  {
    id: "f9",
    title: "Der Gehoerschutz",
    text: "Wer nichts hoeren will, kann behaupten, er habe nur gehandelt.",
    axes: ["technik", "kontrolle"],
    figures: ["chirurgin", "frau_m"],
    effect: { druck: 2, ambig: 1, vertrauen: -2, revelation: 1 }
  },
  {
    id: "f10",
    title: "Die Nebenfigur im Protokoll",
    text: "Erst wenn eine Institution reagiert, merkt man, wer bisher nie gemeint war.",
    axes: ["kontrolle", "loyalitaet"],
    figures: ["omar", "frau_m"],
    effect: { druck: 1, ambig: 2, vertrauen: -1, revelation: 2 }
  },
  {
    id: "f11",
    title: "Das perfekte Verteidigungsnarrativ",
    text: "Eine plausible Geschichte kann zugleich Schutz und Verformung sein.",
    axes: ["kontrolle", "wahrheit"],
    figures: ["bayer", "bernward"],
    effect: { druck: 1, ambig: 3, vertrauen: 0, revelation: 2 }
  },
  {
    id: "f12",
    title: "Die abrufbare Pose",
    text: "Militanz hat ein Tempo, das Nachdenken selten mitgehen kann.",
    axes: ["aktion", "loyalitaet"],
    figures: ["brigitte", "paul"],
    effect: { druck: 3, ambig: 0, vertrauen: -3, revelation: 0 }
  },
  {
    id: "f13",
    title: "Die kontrollierte Rampe",
    text: "Barrierefreiheit kann als Hilfe erscheinen und zugleich als Regime auftreten.",
    axes: ["kontrolle", "beobachtung"],
    figures: ["frau_m", "byproxy"],
    effect: { druck: 1, ambig: 1, vertrauen: -1, revelation: 2 }
  },
  {
    id: "f14",
    title: "Die weisse Handschuhlogik",
    text: "Saubere Technik ist oft nur die elegante Sprache fuer schmutzige Entscheidungen.",
    axes: ["technik", "wahrheit"],
    figures: ["chirurgin", "bernward"],
    effect: { druck: 3, ambig: -1, vertrauen: -1, revelation: 1 }
  },
  {
    id: "f15",
    title: "Der Restzweifel",
    text: "Eine kleine Unsicherheit kann die einzige Rettung vor totaler Sicherheit sein.",
    axes: ["wahrheit", "loyalitaet"],
    figures: ["dorothee", "paul"],
    effect: { druck: -2, ambig: 2, vertrauen: 2, revelation: 1 }
  },
  {
    id: "f16",
    title: "Die beobachtende Kamera",
    text: "Wer dokumentiert, entscheidet, was spaeter als wirklich gilt.",
    axes: ["beobachtung", "wahrheit"],
    figures: ["byproxy", "bayer"],
    effect: { druck: 1, ambig: 2, vertrauen: 1, revelation: 2 }
  },
  {
    id: "f17",
    title: "Der stille Helfer",
    text: "Loyalitaet bleibt unsichtbar, bis sie im entscheidenden Moment fehlt.",
    axes: ["loyalitaet", "aktion"],
    figures: ["paul", "brigitte"],
    effect: { druck: 0, ambig: 0, vertrauen: 3, revelation: 1 }
  },
  {
    id: "f18",
    title: "Die versiegelte Kiste",
    text: "Wenn niemand mehr nach dem Inhalt fragt, wird das Verfahren selbst zur Wahrheit.",
    axes: ["technik", "kontrolle"],
    figures: ["chirurgin", "bayer"],
    effect: { druck: 2, ambig: 1, vertrauen: -1, revelation: 2 }
  },
  {
    id: "f19",
    title: "Das Gegenmeer",
    text: "Eine private Erinnerung widerspricht der politischen Pose und verunsichert sie gerade deshalb.",
    axes: ["beobachtung", "loyalitaet"],
    figures: ["dorothee", "byproxy"],
    effect: { druck: -1, ambig: 1, vertrauen: 2, revelation: 1 }
  },
  {
    id: "f20",
    title: "Die blinde Restgruppe",
    text: "Nicht alle werden in den grossen Wahrheitsbegriffen gleich sichtbar.",
    axes: ["kontrolle", "wahrheit"],
    figures: ["omar", "bernward"],
    effect: { druck: 1, ambig: 2, vertrauen: -2, revelation: 2 }
  }
];

const DOCTRINE_CARDS = [
  {
    id: "d1",
    family: "absolut",
    title: "Manifest der Eindeutigkeit",
    text: "Mehr Wahrheit durch haertere Begriffe und klarere Fronten.",
    publicEffect: { druck: 8, ambig: -4, vertrauen: -2, revelation: 1 },
    shadowEffect: { druck: 3, ambig: 0, vertrauen: -1, revelation: 0 }
  },
  {
    id: "d2",
    family: "absolut",
    title: "Saeuberung der Mehrdeutigkeit",
    text: "Widerspruch wird als Gefahr gelesen, nicht als Erkenntnischance.",
    publicEffect: { druck: 7, ambig: -3, vertrauen: -3, revelation: 0 },
    shadowEffect: { druck: 2, ambig: -1, vertrauen: -1, revelation: 0 }
  },
  {
    id: "d3",
    family: "absolut",
    title: "Autoritaet des Begriffs",
    text: "Wer die Definition kontrolliert, kontrolliert auch die Wirklichkeit.",
    publicEffect: { druck: 6, ambig: -2, vertrauen: -2, revelation: 1 },
    shadowEffect: { druck: 2, ambig: 0, vertrauen: 0, revelation: 0 }
  },
  {
    id: "d4",
    family: "nebel",
    title: "Strategische Luege",
    text: "Eine zweckmaessige Verzerrung soll das groessere Ziel retten.",
    publicEffect: { druck: -1, ambig: 9, vertrauen: -5, revelation: 0 },
    shadowEffect: { druck: 0, ambig: 4, vertrauen: -2, revelation: 0 }
  },
  {
    id: "d5",
    family: "nebel",
    title: "Paralleler Feed",
    text: "Viele Versionen gleichzeitig untergraben jede feste Bezugsflaeche.",
    publicEffect: { druck: -2, ambig: 8, vertrauen: -4, revelation: 0 },
    shadowEffect: { druck: 0, ambig: 3, vertrauen: -1, revelation: 0 }
  },
  {
    id: "d6",
    family: "nebel",
    title: "Maskierte Zeugenschaft",
    text: "Beobachtung wird als Deckmantel fuer verdeckte Intervention benutzt.",
    publicEffect: { druck: 0, ambig: 7, vertrauen: -3, revelation: 1 },
    shadowEffect: { druck: 1, ambig: 3, vertrauen: -1, revelation: 0 }
  },
  {
    id: "d7",
    family: "vermittlung",
    title: "Pauls Aufschub",
    text: "Tempo wird gedrosselt, damit Beziehung vor Eskalation geschuetzt bleibt.",
    publicEffect: { druck: -4, ambig: 1, vertrauen: 8, revelation: 1 },
    shadowEffect: { druck: -1, ambig: 0, vertrauen: 3, revelation: 0 }
  },
  {
    id: "d8",
    family: "vermittlung",
    title: "Dorothees Gegenfrage",
    text: "Die moralische Aussenperspektive zwingt das Kollektiv zur Selbstpruefung.",
    publicEffect: { druck: -3, ambig: 2, vertrauen: 7, revelation: 2 },
    shadowEffect: { druck: -1, ambig: 1, vertrauen: 2, revelation: 0 }
  },
  {
    id: "d9",
    family: "vermittlung",
    title: "Fuersorge vor Reinheit",
    text: "Koerper und Beziehungen zaehlen mehr als begriffliche Sauberkeit.",
    publicEffect: { druck: -5, ambig: 0, vertrauen: 9, revelation: 0 },
    shadowEffect: { druck: -1, ambig: 0, vertrauen: 3, revelation: 0 }
  },
  {
    id: "d10",
    family: "aktion",
    title: "Brigittes Eskalation",
    text: "Handeln soll den Begriffsraum ueberholen.",
    publicEffect: { druck: 5, ambig: 1, vertrauen: -4, revelation: 2 },
    shadowEffect: { druck: 2, ambig: 0, vertrauen: -2, revelation: 0 }
  },
  {
    id: "d11",
    family: "aktion",
    title: "Chirurgische Loesung",
    text: "Eine technische Intervention verspricht Praezision, verengt aber den Blick.",
    publicEffect: { druck: 4, ambig: -1, vertrauen: -2, revelation: 1 },
    shadowEffect: { druck: 1, ambig: 0, vertrauen: -1, revelation: 0 }
  },
  {
    id: "d12",
    family: "aktion",
    title: "Bayers Narrativschub",
    text: "Das Ereignis wird sofort in eine vernuenftige Form gegossen.",
    publicEffect: { druck: 2, ambig: 3, vertrauen: -1, revelation: 2 },
    shadowEffect: { druck: 1, ambig: 1, vertrauen: 0, revelation: 0 }
  }
];

const REFLECTION_PROMPTS = [
  "Wann wird in dieser Runde Wahrheit als Machtinstrument sichtbar?",
  "Welche Figur oder Haltung hat das Geschehen am staerksten geformt und warum?",
  "Wo kippt Vermittlung in Verdeckung und wo kippt Radikalitaet in Leere?",
  "Welche Rolle spielt der Koerper fuer die Frage, was als wirklich gilt?",
  "Wie unterscheidet sich technische Funktionalitaet von moralischer Verantwortung?",
  "Wann hilft Mehrdeutigkeit, wann zerstoert sie Orientierung?",
  "Welche Erzaehlentscheidung waere in dieser Runde selbst schon eine Form von Gewalt?",
  "Wie veraendert der institutionelle Blick die Gruppe Aletheia?"
];

const SYSTEM_OVERVIEW = [
  {
    title: "1. Nachtlogik",
    text: "Vor jeder Runde waehlt die App ein Szenendossier, einen Schattenakteur und verdeckte Werteverschiebungen. Die Lernenden sehen nur die Symptome, nicht die ganze Formel."
  },
  {
    title: "2. Fragmentphase",
    text: "Beide Spieler*innen waehlen aus mehrdeutigen Textfragmenten und geben ein kurzes Deutungswort dazu. Das ist der Dixit-Anteil: Bedeutung wird indirekt ausgehandelt."
  },
  {
    title: "3. Doktrinphase",
    text: "Spieler*in A verwirft eine von drei Doktrinkarten, Spieler*in B setzt eine der beiden verbleibenden. Das ueberzaehlige Gesetz wirkt verdeckt nach. Das ist der Secret-Hitler-Anteil."
  },
  {
    title: "4. Verdachtsphase",
    text: "Beide markieren getrennt, wer die Runde aus dem Schatten bestimmt hat und welcher Haltung sie in dieser Situation vertrauen. Das ist der Werewolf-Anteil."
  },
  {
    title: "5. Reflexionsphase",
    text: "Jede Runde endet mit einer kurzen Interpretationsnotiz. So wird Spielen direkt zu literarischer Begriffsarbeit."
  }
];

const DOCTRINE_OVERVIEW = [
  {
    title: "Absolutheit",
    text: "Erhoeht Realitaetsdruck, senkt Ambiguitaet und lockt autoritaere Klarheit an."
  },
  {
    title: "Nebel",
    text: "Erhoeht Ambiguitaet und unterminiert Vertrauen. Die Welt wird interpretierbar, aber instabil."
  },
  {
    title: "Vermittlung",
    text: "Stabilisiert Vertrauen und schafft Luft fuer genauere Beobachtung."
  },
  {
    title: "Aktion",
    text: "Erhoeht Tempo und Konfliktdichte. Manche Wahrheiten werden dadurch sichtbar, andere ueberrannt."
  }
];

const TEACHER_FLOW = [
  {
    title: "Vorbereitung (5 Minuten)",
    text: "Kurz die Figurenrollen und die sechs Interpretationsachsen sichern. Danach erst das Spiel freigeben."
  },
  {
    title: "Spielphase I (20-25 Minuten)",
    text: "Runden 1-3 spielen. Danach Zwischenstopp: Welche Doktrinfamilie dominiert? Welche Figur ist im Paar lauter als die anderen?"
  },
  {
    title: "Spielphase II (20-25 Minuten)",
    text: "Runden 4-6 oder bis zum Kollaps. Das Paar muss am Ende ein Urteil zur Frage formulieren, ob Aletheia Wahrheit rettet oder zerstueckelt."
  },
  {
    title: "Auswertung (15 Minuten)",
    text: "Protokolle vergleichen: Welche Paare kippten in autoritaere Wahrheit, welche in Simulationsnebel, welche hielten Ambivalenz aus?"
  }
];

const TEACHER_EVAL = [
  {
    title: "Analytischer Fokus",
    text: "Nicht fragen 'Wer hat gewonnen?', sondern: Welche Entscheidungen haben den Wahrheitsbegriff verengt, erweitert oder deformiert?"
  },
  {
    title: "Transferfrage",
    text: "Welche Figur repraesentiert fuer euch die groesste Gefahr: Dogma, Radikalitaet, Technik, Vermittlung oder Erzahldominanz?"
  },
  {
    title: "Differenzierung",
    text: "Leistungsstarke Paare muessen ihr Endurteil mit mindestens drei Figuren und zwei Achsen begruenden. Schwierigere Lerngruppen koennen mit nur vier Runden spielen."
  },
  {
    title: "Leistungsprodukt",
    text: "Das exportierte Markdown kann als Spielbericht, Interpretationsjournal oder Grundlage fuer eine muendliche Auswertung dienen."
  }
];

const FAMILY_LABELS = {
  absolut: "Absolutheit",
  nebel: "Nebel",
  vermittlung: "Vermittlung",
  aktion: "Aktion"
};

function defaultState() {
  return {
    ui: { activeTab: "spiel" },
    meta: {
      teamName: "",
      className: "",
      playerA: "",
      playerB: ""
    },
    round: 0,
    maxRounds: 6,
    started: false,
    finished: false,
    metrics: {
      druck: 42,
      ambig: 36,
      vertrauen: 58,
      revelation: 0
    },
    tracks: {
      absolut: 0,
      nebel: 0,
      vermittlung: 0,
      aktion: 0
    },
    secretMissions: {
      a: null,
      b: null
    },
    stats: {
      correctGuesses: 0,
      correctSuspicion: 0,
      enactedFamilies: [],
      roundsCollapsed: 0
    },
    current: null,
    history: [],
    outcome: null
  };
}

let state = loadState();

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultState();
    }
    const parsed = JSON.parse(saved);
    return {
      ...defaultState(),
      ...parsed,
      ui: { ...defaultState().ui, ...(parsed.ui || {}) },
      meta: { ...defaultState().meta, ...(parsed.meta || {}) },
      metrics: { ...defaultState().metrics, ...(parsed.metrics || {}) },
      tracks: { ...defaultState().tracks, ...(parsed.tracks || {}) },
      stats: { ...defaultState().stats, ...(parsed.stats || {}) }
    };
  } catch (error) {
    console.warn("State reset after parse failure", error);
    return defaultState();
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function figureById(id) {
  return FIGURES.find((figure) => figure.id === id);
}

function eventById(id) {
  return EVENTS.find((entry) => entry.id === id);
}

function fragmentById(id) {
  return FRAGMENTS.find((entry) => entry.id === id);
}

function doctrineById(id) {
  return DOCTRINE_CARDS.find((entry) => entry.id === id);
}

function axisById(id) {
  return AXES.find((axis) => axis.id === id);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function sample(list, count = 1) {
  return shuffle(list).slice(0, count);
}

function weightedChoice(weighted) {
  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = Math.random() * total;
  for (const entry of weighted) {
    roll -= entry.weight;
    if (roll <= 0) {
      return entry.item;
    }
  }
  return weighted[weighted.length - 1].item;
}

function applyDelta(delta) {
  state.metrics.druck = clamp(state.metrics.druck + (delta.druck || 0));
  state.metrics.ambig = clamp(state.metrics.ambig + (delta.ambig || 0));
  state.metrics.vertrauen = clamp(state.metrics.vertrauen + (delta.vertrauen || 0));
  state.metrics.revelation = clamp(state.metrics.revelation + (delta.revelation || 0));
}

function getPlayerLabel(key) {
  const name = key === "a" ? state.meta.playerA : state.meta.playerB;
  return name?.trim() || (key === "a" ? "Spieler*in A" : "Spieler*in B");
}

function dominantFamily() {
  const ordered = Object.entries(state.tracks).sort((left, right) => right[1] - left[1]);
  if (!ordered[0] || ordered[0][1] === 0) {
    return null;
  }
  return ordered[0][0];
}

function chooseEvent() {
  const weighted = EVENTS.map((entry) => {
    let weight = 2;
    if (state.metrics.druck > 62 && entry.tags.includes("dogma")) {
      weight += 4;
    }
    if (state.metrics.ambig > 58 && entry.tags.includes("nebel")) {
      weight += 4;
    }
    if (state.metrics.vertrauen < 42 && entry.tags.includes("bruch")) {
      weight += 4;
    }
    if (Math.abs(state.metrics.druck - state.metrics.ambig) < 10 && entry.tags.includes("balance")) {
      weight += 2;
    }
    const family = dominantFamily();
    if (family === "absolut" && entry.tags.includes("dogma")) {
      weight += 2;
    }
    if (family === "nebel" && entry.tags.includes("nebel")) {
      weight += 2;
    }
    if (family === "vermittlung" && entry.tags.includes("balance")) {
      weight += 2;
    }
    if (family === "aktion" && entry.tags.includes("aktion")) {
      weight += 2;
    }
    return { item: entry, weight };
  });
  return weightedChoice(weighted);
}

function chooseShadowFigure(event) {
  const candidates = event.figures.map((id) => {
    const figure = figureById(id);
    let weight = 2;
    if (!figure) {
      return null;
    }
    if (figure.axis === "wahrheit" && state.metrics.druck > 55) {
      weight += 3;
    }
    if (figure.axis === "kontrolle" && state.metrics.vertrauen < 50) {
      weight += 2;
    }
    if (figure.axis === "beobachtung" && state.metrics.ambig > 50) {
      weight += 2;
    }
    return { item: figure, weight };
  }).filter(Boolean);
  return weightedChoice(candidates);
}

function buildNightShift(event, shadowFigure) {
  const shift = { ...event.shift, revelation: 0 };
  const family = dominantFamily();
  if (family === "absolut") {
    shift.druck += 3;
  }
  if (family === "nebel") {
    shift.ambig += 3;
  }
  if (family === "vermittlung") {
    shift.vertrauen += 3;
  }
  if (family === "aktion") {
    shift.druck += 2;
    shift.vertrauen -= 2;
  }
  if (shadowFigure.axis === "kontrolle") {
    shift.vertrauen -= 1;
  }
  if (shadowFigure.axis === "beobachtung") {
    shift.ambig += 1;
  }
  if (shadowFigure.axis === "wahrheit") {
    shift.druck += 1;
  }
  return shift;
}

function buildFragmentHands(event) {
  const preferred = FRAGMENTS.filter((fragment) => fragment.axes.some((axis) => event.tags.includes(axis)) || fragment.figures.some((figure) => event.figures.includes(figure)));
  const basePool = preferred.length >= 8 ? preferred : FRAGMENTS;
  const handA = sample(basePool, 4);
  const remaining = FRAGMENTS.filter((fragment) => !handA.some((picked) => picked.id === fragment.id));
  const handBPool = remaining.length >= 4 ? remaining : FRAGMENTS;
  const handB = sample(handBPool, 4);
  return {
    a: handA.map((entry) => entry.id),
    b: handB.map((entry) => entry.id)
  };
}

function buildDoctrineHand() {
  return sample(DOCTRINE_CARDS, 3).map((entry) => entry.id);
}

function pickSecretMissions() {
  const picks = sample(CORE_FIGURE_IDS, 2);
  return { a: picks[0], b: picks[1] };
}

function ensureGameStarted() {
  if (!state.started) {
    state.started = true;
    state.finished = false;
    state.round = 0;
    state.metrics = { druck: 42, ambig: 36, vertrauen: 58, revelation: 0 };
    state.tracks = { absolut: 0, nebel: 0, vermittlung: 0, aktion: 0 };
    state.history = [];
    state.stats = { correctGuesses: 0, correctSuspicion: 0, enactedFamilies: [], roundsCollapsed: 0 };
    state.secretMissions = pickSecretMissions();
    state.current = null;
    state.outcome = null;
  }
}

function startGame() {
  ensureGameStarted();
  if (!state.current && !state.finished) {
    startRound();
    return;
  }
  saveState();
  render();
}

function startRound() {
  ensureGameStarted();
  if (state.current || state.finished || state.round >= state.maxRounds) {
    render();
    return;
  }
  const event = chooseEvent();
  const shadowFigure = chooseShadowFigure(event);
  const nightShift = buildNightShift(event, shadowFigure);
  applyDelta(nightShift);
  state.round += 1;
  state.current = {
    eventId: event.id,
    shadowFigureId: shadowFigure.id,
    nightShift,
    hint: buildHint(event, shadowFigure),
    fragmentHands: buildFragmentHands(event),
    fragmentChoice: { a: "", b: "" },
    fragmentClue: { a: "", b: "" },
    fragmentGuess: { a: "", b: "" },
    fragmentStep: "choose",
    fragmentResolution: null,
    doctrineHand: buildDoctrineHand(),
    doctrineDiscarded: "",
    doctrineEnacted: "",
    doctrineResidual: "",
    doctrineResolution: null,
    suspicion: { a: "", b: "" },
    trustFigure: { a: "", b: "" },
    accusePartner: { a: false, b: false },
    suspicionResolution: null,
    reflectionPrompt: sample(REFLECTION_PROMPTS, 1)[0],
    reflectionText: "",
    summary: ""
  };
  if (isCollapsed()) {
    state.stats.roundsCollapsed += 1;
  }
  saveState();
  render();
}

function buildHint(event, shadowFigure) {
  const parts = [
    `${event.title}: ${event.teaser}`,
    `Spannung im Vordergrund: ${event.tags.filter((tag) => AXES.some((axis) => axis.id === tag)).map((tag) => axisById(tag).short).join(", ") || "verdeckte Konflikte"}.`,
    `Die Engine protokolliert im Hintergrund eine Verschiebung, die zu ${shadowFigure.name} passt, nennt die Figur aber nicht offen.`
  ];
  return parts.join(" ");
}

function isCollapsed() {
  return state.metrics.druck >= 85 || state.metrics.ambig >= 85 || state.metrics.vertrauen <= 15;
}

function finishGameIfNeeded() {
  if (state.finished) {
    return;
  }
  if (isCollapsed() || state.round >= state.maxRounds) {
    state.finished = true;
    state.outcome = evaluateOutcome();
  }
}

function evaluateMission(id) {
  const figure = figureById(id);
  if (!figure?.mission) {
    return false;
  }
  switch (id) {
    case "byproxy":
      return state.metrics.druck >= 35 && state.metrics.druck <= 70 && state.metrics.ambig >= 35 && state.metrics.ambig <= 70 && state.metrics.revelation >= 16;
    case "paul":
      return state.metrics.vertrauen >= 55 && !isCollapsed();
    case "bernward":
      return state.tracks.absolut >= 2 && state.metrics.druck > 55;
    case "brigitte":
      return state.tracks.aktion >= 2 && state.stats.correctSuspicion >= 3;
    case "chirurgin":
      return state.tracks.aktion >= 1 && state.tracks.nebel >= 1 && state.metrics.ambig < 78;
    default:
      return false;
  }
}

function evaluateOutcome() {
  let headline = "Ambivalente Klarheit";
  let verdict = "Das Paar hat Wahrheit nicht als Besitz, sondern als riskante Praxis behandelt.";
  if (state.metrics.druck >= 85) {
    headline = "Autoritaere Wahrheit";
    verdict = "Der Wahrheitsbegriff wurde so verengt, dass Kontrolle ueber Erkenntnis dominiert.";
  } else if (state.metrics.ambig >= 85) {
    headline = "Simulationskollaps";
    verdict = "Zu viele Gegenerzaehlungen haben Wirklichkeit in konkurrierende Oberflaechen aufgeloest.";
  } else if (state.metrics.vertrauen <= 15) {
    headline = "Zerfall des Kollektivs";
    verdict = "Das Paar konnte die Spannung nicht mehr gemeinsam halten. Misstrauen wurde zum eigentlichen Motor.";
  } else if (state.metrics.revelation >= 18 && state.metrics.vertrauen >= 45) {
    headline = "Verantwortete Mehrdeutigkeit";
    verdict = "Das Paar hat Schattenakteure enttarnt und gleichzeitig vermieden, Ambiguitaet durch Zwang zu zerstoeren.";
  }
  return {
    headline,
    verdict,
    missionA: {
      id: state.secretMissions.a,
      success: evaluateMission(state.secretMissions.a)
    },
    missionB: {
      id: state.secretMissions.b,
      success: evaluateMission(state.secretMissions.b)
    }
  };
}

function resolveFragments() {
  const current = state.current;
  if (!current) {
    return;
  }
  const choiceA = fragmentById(current.fragmentChoice.a);
  const choiceB = fragmentById(current.fragmentChoice.b);
  if (!choiceA || !choiceB || !current.fragmentGuess.a || !current.fragmentGuess.b) {
    return;
  }
  applyDelta(choiceA.effect);
  applyDelta(choiceB.effect);
  const guessA = choiceB.axes.includes(current.fragmentGuess.a);
  const guessB = choiceA.axes.includes(current.fragmentGuess.b);
  const delta = { druck: 0, ambig: 0, vertrauen: 0, revelation: 0 };
  if (guessA) {
    delta.vertrauen += 5;
    delta.revelation += 2;
    state.stats.correctGuesses += 1;
  } else {
    delta.ambig += 4;
    delta.vertrauen -= 4;
  }
  if (guessB) {
    delta.vertrauen += 5;
    delta.revelation += 2;
    state.stats.correctGuesses += 1;
  } else {
    delta.ambig += 4;
    delta.vertrauen -= 4;
  }
  if (choiceA.axes.some((axis) => choiceB.axes.includes(axis))) {
    delta.revelation += 1;
  }
  applyDelta(delta);
  current.fragmentResolution = {
    guessA,
    guessB,
    delta
  };
  saveState();
  render();
}

function enactDoctrine() {
  const current = state.current;
  if (!current || !current.doctrineDiscarded || !current.doctrineEnacted) {
    return;
  }
  const enacted = doctrineById(current.doctrineEnacted);
  const residualId = current.doctrineHand.find((id) => id !== current.doctrineDiscarded && id !== current.doctrineEnacted);
  const residual = doctrineById(residualId);
  current.doctrineResidual = residual?.id || "";
  applyDelta(enacted.publicEffect);
  if (residual) {
    applyDelta(residual.shadowEffect);
  }
  state.tracks[enacted.family] += 1;
  state.stats.enactedFamilies.push(enacted.family);
  current.doctrineResolution = {
    enactedFamily: enacted.family,
    enactedTitle: enacted.title,
    residualTitle: residual?.title || ""
  };
  saveState();
  render();
}

function resolveSuspicion() {
  const current = state.current;
  if (!current || !current.suspicion.a || !current.suspicion.b || !current.trustFigure.a || !current.trustFigure.b) {
    return;
  }
  const correctA = current.suspicion.a === current.shadowFigureId;
  const correctB = current.suspicion.b === current.shadowFigureId;
  const delta = { druck: 0, ambig: 0, vertrauen: 0, revelation: 0 };
  if (correctA) {
    delta.revelation += 4;
    state.stats.correctSuspicion += 1;
  } else {
    delta.ambig += 2;
  }
  if (correctB) {
    delta.revelation += 4;
    state.stats.correctSuspicion += 1;
  } else {
    delta.ambig += 2;
  }
  if (correctA && correctB) {
    delta.vertrauen += 4;
    delta.ambig -= 3;
  }
  if (current.trustFigure.a === current.trustFigure.b) {
    delta.vertrauen += 2;
  }
  if (current.accusePartner.a) {
    delta.vertrauen -= 5;
  }
  if (current.accusePartner.b) {
    delta.vertrauen -= 5;
  }
  applyDelta(delta);
  current.suspicionResolution = {
    correctA,
    correctB,
    delta
  };
  saveState();
  render();
}

function closeRound() {
  const current = state.current;
  if (!current) {
    return;
  }
  const event = eventById(current.eventId);
  const shadowFigure = figureById(current.shadowFigureId);
  const choiceA = fragmentById(current.fragmentChoice.a);
  const choiceB = fragmentById(current.fragmentChoice.b);
  const enacted = doctrineById(current.doctrineEnacted);
  const summary = {
    round: state.round,
    eventId: current.eventId,
    shadowFigureId: current.shadowFigureId,
    eventTitle: event.title,
    shadowFigureName: shadowFigure.name,
    nightShift: current.nightShift,
    fragmentChoiceA: choiceA?.title || "",
    fragmentChoiceB: choiceB?.title || "",
    fragmentGuessA: current.fragmentGuess.a,
    fragmentGuessB: current.fragmentGuess.b,
    fragmentResolution: current.fragmentResolution,
    doctrineEnacted: enacted?.title || "",
    doctrineFamily: enacted?.family || "",
    doctrineResolution: current.doctrineResolution,
    suspicion: current.suspicion,
    trustFigure: current.trustFigure,
    suspicionResolution: current.suspicionResolution,
    reflectionPrompt: current.reflectionPrompt,
    reflectionText: current.reflectionText,
    metricsAfter: { ...state.metrics }
  };
  state.history.unshift(summary);
  state.current = null;
  finishGameIfNeeded();
  saveState();
  render();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  downloadBlob(blob, `aletheia-wirklichkeitslabor-${dateStamp()}.json`);
}

function exportMarkdown() {
  const lines = [];
  lines.push(`# Aletheia Wirklichkeitslabor`);
  lines.push("");
  lines.push(`- Team: ${state.meta.teamName || "-"}`);
  lines.push(`- Klasse/Kurs: ${state.meta.className || "-"}`);
  lines.push(`- Spieler*in A: ${getPlayerLabel("a")}`);
  lines.push(`- Spieler*in B: ${getPlayerLabel("b")}`);
  lines.push(`- Runden gespielt: ${state.round}`);
  lines.push("");
  lines.push(`## Endstand`);
  lines.push(`- Realitaetsdruck: ${state.metrics.druck}`);
  lines.push(`- Ambiguitaet: ${state.metrics.ambig}`);
  lines.push(`- Vertrauen: ${state.metrics.vertrauen}`);
  lines.push(`- Enthuellung: ${state.metrics.revelation}`);
  lines.push("");
  if (state.outcome) {
    lines.push(`## Urteil`);
    lines.push(`**${state.outcome.headline}**`);
    lines.push("");
    lines.push(state.outcome.verdict);
    lines.push("");
  }
  lines.push(`## Geheime Auftraege`);
  [state.secretMissions.a, state.secretMissions.b].forEach((missionId, index) => {
    const figure = figureById(missionId);
    if (!figure?.mission) {
      return;
    }
    lines.push(`- ${index === 0 ? getPlayerLabel("a") : getPlayerLabel("b")}: ${figure.mission.title} | ${figure.mission.goal}`);
  });
  lines.push("");
  lines.push(`## Rundenprotokoll`);
  state.history.slice().reverse().forEach((entry) => {
    lines.push(`### Runde ${entry.round}: ${entry.eventTitle}`);
    lines.push(`- Schattenakteur: ${entry.shadowFigureName}`);
    lines.push(`- Nachtshift: Druck ${signed(entry.nightShift.druck)}, Ambiguitaet ${signed(entry.nightShift.ambig)}, Vertrauen ${signed(entry.nightShift.vertrauen)}`);
    lines.push(`- Fragmente: ${entry.fragmentChoiceA} / ${entry.fragmentChoiceB}`);
    lines.push(`- Gesetzte Doktrin: ${entry.doctrineEnacted} (${FAMILY_LABELS[entry.doctrineFamily] || "-"})`);
    lines.push(`- Verdacht: ${figureById(entry.suspicion.a)?.name || entry.suspicion.a} / ${figureById(entry.suspicion.b)?.name || entry.suspicion.b}`);
    lines.push(`- Reflexion: ${entry.reflectionText || "-"}`);
    lines.push("");
  });
  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  downloadBlob(blob, `aletheia-wirklichkeitslabor-${dateStamp()}.md`);
}

function signed(value) {
  if (value > 0) {
    return `+${value}`;
  }
  return String(value);
}

function dateStamp() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetGame() {
  state = defaultState();
  saveState();
  render();
}

function setMetaValue(key, value) {
  state.meta[key] = value;
  saveState();
  renderBriefings();
  renderStatus();
}

function currentPhaseLabel() {
  if (state.finished) {
    return "Abschluss";
  }
  if (!state.started) {
    return "Bereit";
  }
  if (!state.current) {
    return "Zwischenrunde";
  }
  if (!state.current.fragmentResolution) {
    return state.current.fragmentStep === "choose" ? "Fragmentwahl" : "Fragmentdeutung";
  }
  if (!state.current.doctrineResolution) {
    return "Doktrin";
  }
  if (!state.current.suspicionResolution) {
    return "Verdacht";
  }
  return "Reflexion";
}

function render() {
  renderTabs();
  renderBriefings();
  renderStatus();
  renderScene();
  renderPhase();
  renderArchives();
  renderSystem();
  renderTeacher();
  renderProtocol();
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    const isActive = button.dataset.tabTarget === state.ui.activeTab;
    button.classList.toggle("active", isActive);
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === state.ui.activeTab);
  });
  const phasePill = document.getElementById("phase-pill");
  phasePill.textContent = currentPhaseLabel();
}

function renderBriefings() {
  const node = document.getElementById("briefings");
  const missions = state.secretMissions;
  if (!missions.a || !missions.b) {
    node.innerHTML = `<div class="empty-state">Nach dem Start erscheinen hier die geheimen Auftraege fuer beide Spieler*innen.</div>`;
    return;
  }
  node.innerHTML = ["a", "b"].map((key) => {
    const figure = figureById(missions[key]);
    const outcome = state.outcome ? (key === "a" ? state.outcome.missionA : state.outcome.missionB) : null;
    return `
      <details class="briefing">
        <summary>${escapeHtml(getPlayerLabel(key))}: geheimes Briefing oeffnen</summary>
        <div class="briefing-body">
          <strong>${escapeHtml(figure.mission.title)}</strong>
          <p>${escapeHtml(figure.role)}</p>
          <p><strong>Ziel:</strong> ${escapeHtml(figure.mission.goal)}</p>
          <p><strong>Blinder Fleck:</strong> ${escapeHtml(figure.mission.blindSpot)}</p>
          ${outcome ? `<p><strong>Status:</strong> ${outcome.success ? "erfuellt" : "nicht erfuellt"}</p>` : ""}
        </div>
      </details>
    `;
  }).join("");
}

function renderStatus() {
  const node = document.getElementById("status-panel");
  const family = dominantFamily();
  node.innerHTML = `
    <div class="metric-wrap">
      ${metricTemplate("Realitaetsdruck", state.metrics.druck, "druck")}
      ${metricTemplate("Ambiguitaet", state.metrics.ambig, "ambig")}
      ${metricTemplate("Vertrauen", state.metrics.vertrauen, "vertrauen")}
      ${metricTemplate("Enthuellung", state.metrics.revelation, "revelation")}
    </div>
    <div class="status-grid">
      <div class="mini-card">
        <strong>Runde</strong>
        <p>${state.round} / ${state.maxRounds}</p>
      </div>
      <div class="mini-card">
        <strong>Dominante Doktrin</strong>
        <p>${family ? FAMILY_LABELS[family] : "Noch offen"}</p>
      </div>
      <div class="mini-card">
        <strong>Verdachtsquote</strong>
        <p>${state.stats.correctSuspicion} richtige Markierungen</p>
      </div>
    </div>
    <div class="info-chip-row">
      <span class="chip">Absolutheit ${state.tracks.absolut}</span>
      <span class="chip">Nebel ${state.tracks.nebel}</span>
      <span class="chip">Vermittlung ${state.tracks.vermittlung}</span>
      <span class="chip">Aktion ${state.tracks.aktion}</span>
    </div>
  `;
  document.querySelectorAll("[data-meta]").forEach((input) => {
    input.value = state.meta[input.dataset.meta] || "";
  });
  renderRecentSummary();
}

function metricTemplate(label, value, variant) {
  return `
    <div class="metric">
      <div class="metric-label"><span>${label}</span><strong>${value}</strong></div>
      <div class="bar ${variant}"><span style="width:${value}%"></span></div>
    </div>
  `;
}

function renderScene() {
  const node = document.getElementById("scene-panel");
  if (!state.started) {
    node.innerHTML = `<div class="empty-state">Startet ein neues Spiel, damit die Engine ein erstes Szenendossier, einen Schattenakteur und verdeckte Nachtwerte erzeugen kann.</div>`;
    return;
  }
  if (!state.current) {
    if (state.finished && state.outcome) {
      node.innerHTML = `
        <div class="outcome-banner">
          <h3>${escapeHtml(state.outcome.headline)}</h3>
          <p>${escapeHtml(state.outcome.verdict)}</p>
          <div class="button-row">
            <button type="button" data-action="export-markdown" class="secondary">Urteil exportieren</button>
            <button type="button" data-action="reset-game" class="ghost">Neue Partie vorbereiten</button>
          </div>
        </div>
      `;
    } else {
      node.innerHTML = `
        <div class="empty-state">
          Runde abgeschlossen. Der naechste Start erzeugt ein neues Szenendossier auf Basis eurer bisherigen Entscheidungen.
        </div>
      `;
    }
    return;
  }
  const event = eventById(state.current.eventId);
  node.innerHTML = `
    <div class="stage-card">
      <h3>${escapeHtml(event.title)}</h3>
      <p>${escapeHtml(event.teaser)}</p>
      <div class="callout">
        <strong>Einsatz:</strong>
        <p>${escapeHtml(event.stakes)}</p>
      </div>
      <div class="callout alt">
        <strong>Systemhinweis:</strong>
        <p>${escapeHtml(state.current.hint)}</p>
      </div>
      <div class="info-chip-row">
        ${event.tags.map((tag) => `<span class="chip">${escapeHtml(axisById(tag)?.short || tag)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderPhase() {
  const node = document.getElementById("phase-panel");
  if (!state.started) {
    node.innerHTML = `<div class="empty-state">Das Rollenspiel fuehrt erst nach dem Start durch die Phasen Fragment, Doktrin, Verdacht und Reflexion.</div>`;
    return;
  }
  if (!state.current) {
    node.innerHTML = `
      <div class="selection-card">
        <h3>${state.finished ? "Partie beendet" : "Naechste Runde bereit"}</h3>
        <p>${state.finished ? "Ihr koennt nun das Urteil auswerten oder die Partie exportieren." : "Die App hat die vorherige Runde archiviert. Startet die naechste Runde, um ein neues Dossier zu laden."}</p>
        <div class="button-row">
          <button type="button" data-action="start-round">Naechste Runde</button>
          <button type="button" data-action="export-json" class="secondary">JSON exportieren</button>
        </div>
      </div>
    `;
    return;
  }

  const current = state.current;
  if (!current.fragmentResolution) {
    node.innerHTML = renderFragmentPhase(current);
    return;
  }
  if (!current.doctrineResolution) {
    node.innerHTML = renderDoctrinePhase(current);
    return;
  }
  if (!current.suspicionResolution) {
    node.innerHTML = renderSuspicionPhase(current);
    return;
  }
  node.innerHTML = renderReflectionPhase(current);
}

function renderFragmentPhase(current) {
  const hands = current.fragmentHands;
  if (current.fragmentStep === "choose") {
    return `
      <div class="selection-card">
        <h3>Fragmentphase: waehlen und verschluesseln</h3>
        <p>Beide Spieler*innen waehlen je ein Fragment und formulieren ein kurzes Deutungswort oder einen metaphorischen Hinweis. Nennt nicht direkt die Figur.</p>
        <div class="selection-grid">
          ${renderFragmentChooser("a", hands.a, current)}
          ${renderFragmentChooser("b", hands.b, current)}
        </div>
        <div class="button-row">
          <button type="button" data-action="fragment-next">Zu den Deutungsraten</button>
        </div>
      </div>
    `;
  }
  return `
    <div class="selection-card">
      <h3>Fragmentphase: deuten</h3>
      <p>Jetzt seht ihr nur die gewaelten Fragmente und Hinweiswoerter des Gegenuebers. Ordnet das Deutungssignal einer Achse zu.</p>
      <div class="split-note">
        ${renderFragmentGuessCard("a", fragmentById(current.fragmentChoice.b), current.fragmentClue.b, current.fragmentGuess.a)}
        ${renderFragmentGuessCard("b", fragmentById(current.fragmentChoice.a), current.fragmentClue.a, current.fragmentGuess.b)}
      </div>
      <div class="button-row">
        <button type="button" data-action="resolve-fragments">Fragmente auswerten</button>
      </div>
    </div>
  `;
}

function renderFragmentChooser(key, hand, current) {
  return `
    <div class="stage-card">
      <h3>${escapeHtml(getPlayerLabel(key))}</h3>
      <div class="choice-list">
        ${hand.map((id) => {
          const fragment = fragmentById(id);
          return `
            <label class="choice-card">
              <input type="radio" name="fragment-${key}" value="${fragment.id}" data-path="current.fragmentChoice.${key}" ${current.fragmentChoice[key] === fragment.id ? "checked" : ""}>
              <strong>${escapeHtml(fragment.title)}</strong>
              <p>${escapeHtml(fragment.text)}</p>
            </label>
          `;
        }).join("")}
      </div>
      <label class="field-block">
        Hinweissatz
        <input type="text" data-path="current.fragmentClue.${key}" value="${escapeHtml(current.fragmentClue[key])}" placeholder="z. B. 'zu glatt, um unschuldig zu sein'">
      </label>
    </div>
  `;
}

function renderFragmentGuessCard(key, fragment, clue, currentGuess) {
  return `
    <div class="stage-card">
      <h3>${escapeHtml(getPlayerLabel(key))} deutet</h3>
      <p><strong>Fragment:</strong> ${escapeHtml(fragment.title)}</p>
      <p><strong>Hinweis:</strong> ${escapeHtml(clue || "-")}</p>
      <label class="field-block">
        Welche Achse steckt dahinter?
        <select data-path="current.fragmentGuess.${key}">
          <option value="">Bitte waehlen</option>
          ${AXES.map((axis) => `<option value="${axis.id}" ${currentGuess === axis.id ? "selected" : ""}>${escapeHtml(axis.title)}</option>`).join("")}
        </select>
      </label>
    </div>
  `;
}

function fragmentChooseReady(current) {
  return Boolean(current.fragmentChoice.a && current.fragmentChoice.b && current.fragmentClue.a.trim() && current.fragmentClue.b.trim());
}

function fragmentGuessReady(current) {
  return Boolean(current.fragmentGuess.a && current.fragmentGuess.b);
}

function renderDoctrinePhase(current) {
  const hand = current.doctrineHand.map(doctrineById);
  const remaining = hand.filter((card) => card.id !== current.doctrineDiscarded);
  return `
    <div class="selection-card">
      <h3>Doktrinphase</h3>
      <p>Spieler*in A verwirft zuerst eine Karte. Danach setzt Spieler*in B eine der uebrigen. Die dritte Karte bleibt verdeckt wirksam.</p>
      <div class="choice-list">
        ${hand.map((card) => `
          <label class="choice-card">
            <input type="radio" name="doctrine-discard" value="${card.id}" data-path="current.doctrineDiscarded" ${current.doctrineDiscarded === card.id ? "checked" : ""}>
            <strong>${escapeHtml(card.title)}</strong>
            <p>${escapeHtml(card.text)}</p>
            <p><strong>Familie:</strong> ${escapeHtml(FAMILY_LABELS[card.family])}</p>
          </label>
        `).join("")}
      </div>
      <div class="button-row">
        <button type="button" data-action="apply-doctrine">Doktrin auswerten</button>
      </div>
      ${current.doctrineDiscarded ? `
        <div class="callout alt">
          <strong>${escapeHtml(getPlayerLabel("b"))} setzt jetzt:</strong>
          <div class="choice-list">
            ${remaining.map((card) => `
              <label class="choice-card">
                <input type="radio" name="doctrine-enacted" value="${card.id}" data-path="current.doctrineEnacted" ${current.doctrineEnacted === card.id ? "checked" : ""}>
                <strong>${escapeHtml(card.title)}</strong>
                <p>${escapeHtml(card.text)}</p>
              </label>
            `).join("")}
          </div>
        </div>
      ` : ""}
      ${current.fragmentResolution ? `
        <div class="mini-grid">
          <div class="mini-card"><strong>Deutung A</strong><p>${current.fragmentResolution.guessA ? "richtig" : "falsch"}</p></div>
          <div class="mini-card"><strong>Deutung B</strong><p>${current.fragmentResolution.guessB ? "richtig" : "falsch"}</p></div>
          <div class="mini-card"><strong>Folge</strong><p>Vertrauen ${signed(current.fragmentResolution.delta.vertrauen)}, Ambiguitaet ${signed(current.fragmentResolution.delta.ambig)}</p></div>
        </div>
      ` : ""}
    </div>
  `;
}

function renderSuspicionPhase(current) {
  return `
    <div class="selection-card">
      <h3>Verdachtsphase</h3>
      <p>Markiert getrennt, welche Figur die Runde aus dem Schatten bestimmt hat, und welcher Haltung ihr in dieser Konstellation eher vertrauen wuerdet.</p>
      <div class="selection-grid">
        ${renderSuspicionCard("a", current)}
        ${renderSuspicionCard("b", current)}
      </div>
      <div class="button-row">
        <button type="button" data-action="resolve-suspicion">Verdacht auswerten</button>
      </div>
      <div class="callout">
        <strong>Aktive Doktrin:</strong>
        <p>${escapeHtml(doctrineById(current.doctrineEnacted).title)} (${escapeHtml(FAMILY_LABELS[doctrineById(current.doctrineEnacted).family])})</p>
      </div>
    </div>
  `;
}

function renderSuspicionCard(key, current) {
  return `
    <div class="stage-card">
      <h3>${escapeHtml(getPlayerLabel(key))}</h3>
      <label class="field-block">
        Schattenakteur
        <select data-path="current.suspicion.${key}">
          <option value="">Bitte waehlen</option>
          ${FIGURES.map((figure) => `<option value="${figure.id}" ${current.suspicion[key] === figure.id ? "selected" : ""}>${escapeHtml(figure.name)}</option>`).join("")}
        </select>
      </label>
      <label class="field-block">
        Wem vertraust du in dieser Runde am ehesten?
        <select data-path="current.trustFigure.${key}">
          <option value="">Bitte waehlen</option>
          ${FIGURES.map((figure) => `<option value="${figure.id}" ${current.trustFigure[key] === figure.id ? "selected" : ""}>${escapeHtml(figure.name)}</option>`).join("")}
        </select>
      </label>
      <label class="field-block">
        <span>Ich glaube, mein Gegenueber verheimlicht absichtlich etwas.</span>
        <input type="checkbox" data-path="current.accusePartner.${key}" ${current.accusePartner[key] ? "checked" : ""}>
      </label>
    </div>
  `;
}

function suspicionReady(current) {
  return Boolean(current.suspicion.a && current.suspicion.b && current.trustFigure.a && current.trustFigure.b);
}

function renderReflectionPhase(current) {
  const event = eventById(current.eventId);
  return `
    <div class="selection-card">
      <h3>Reflexion und Archivierung</h3>
      <p><strong>Prompt:</strong> ${escapeHtml(current.reflectionPrompt)}</p>
      <textarea data-path="current.reflectionText" placeholder="2-5 Saetze zur Deutung der Runde">${escapeHtml(current.reflectionText || "")}</textarea>
      <div class="mini-grid">
        <div class="mini-card">
          <strong>Szenendossier</strong>
          <p>${escapeHtml(event.title)}</p>
        </div>
        <div class="mini-card">
          <strong>Doktrin</strong>
          <p>${escapeHtml(doctrineById(current.doctrineEnacted).title)}</p>
        </div>
        <div class="mini-card">
          <strong>Verdachtsresultat</strong>
          <p>${current.suspicionResolution.correctA && current.suspicionResolution.correctB ? "beide richtig" : current.suspicionResolution.correctA || current.suspicionResolution.correctB ? "teilweise richtig" : "beide falsch"}</p>
        </div>
      </div>
      <div class="button-row">
        <button type="button" data-action="close-round">Runde archivieren</button>
      </div>
    </div>
  `;
}

function renderRecentSummary() {
  const node = document.getElementById("recent-summary");
  const entry = state.history[0];
  if (!entry) {
    node.innerHTML = `<div class="empty-state">Noch keine Runde archiviert.</div>`;
    return;
  }
  node.innerHTML = `
    <div class="history-card">
      <strong>Runde ${entry.round}: ${escapeHtml(entry.eventTitle)}</strong>
      <p><strong>Schattenakteur:</strong> ${escapeHtml(entry.shadowFigureName)}</p>
      <p><strong>Fragmente:</strong> ${escapeHtml(entry.fragmentChoiceA)} / ${escapeHtml(entry.fragmentChoiceB)}</p>
      <p><strong>Doktrin:</strong> ${escapeHtml(entry.doctrineEnacted)} (${escapeHtml(FAMILY_LABELS[entry.doctrineFamily] || "-")})</p>
      <p><strong>Reflexion:</strong> ${escapeHtml(entry.reflectionText || "-")}</p>
    </div>
  `;
}

function renderArchives() {
  document.getElementById("figure-archive").innerHTML = FIGURES.map((figure) => `
    <div class="archive-card">
      <strong>${escapeHtml(figure.name)}</strong>
      <p><strong>Rolle:</strong> ${escapeHtml(figure.role)}</p>
      <p><strong>Mindset:</strong> ${escapeHtml(figure.mindset)}</p>
      <p><strong>Didaktische Funktion:</strong> ${escapeHtml(figure.function)}</p>
    </div>
  `).join("");

  document.getElementById("axis-archive").innerHTML = AXES.map((axis) => `
    <div class="archive-card">
      <strong>${escapeHtml(axis.title)}</strong>
      <p>${escapeHtml(axis.description)}</p>
    </div>
  `).join("");

  document.getElementById("event-archive").innerHTML = EVENTS.map((event) => `
    <div class="event-card">
      <strong>${escapeHtml(event.title)}</strong>
      <p>${escapeHtml(event.teaser)}</p>
      <p><strong>Einsatz:</strong> ${escapeHtml(event.stakes)}</p>
    </div>
  `).join("");
}

function renderSystem() {
  document.getElementById("system-overview").innerHTML = SYSTEM_OVERVIEW.map((entry) => `
    <div class="system-card">
      <strong>${escapeHtml(entry.title)}</strong>
      <p>${escapeHtml(entry.text)}</p>
    </div>
  `).join("");

  document.getElementById("doctrine-overview").innerHTML = DOCTRINE_OVERVIEW.map((entry) => `
    <div class="system-card">
      <strong>${escapeHtml(entry.title)}</strong>
      <p>${escapeHtml(entry.text)}</p>
    </div>
  `).join("");

  document.getElementById("win-conditions").innerHTML = `
    <div class="system-card">
      <strong>Gemeinsames Ziel</strong>
      <p>Das Paar soll sechs Runden lang Verdacht, Wahrheit und Beziehung austarieren. Gute Enden entstehen nur, wenn nicht ein Extremwert alles dominiert.</p>
      <ul class="small-list">
        <li>Zu viel Realitaetsdruck fuehrt zu "Autoritaere Wahrheit".</li>
        <li>Zu viel Ambiguitaet fuehrt zu "Simulationskollaps".</li>
        <li>Zu wenig Vertrauen fuehrt zu "Zerfall des Kollektivs".</li>
        <li>Hohe Enthuellung bei tragfaehigem Vertrauen fuehrt zu "Verantwortete Mehrdeutigkeit".</li>
      </ul>
    </div>
  `;
}

function renderTeacher() {
  document.getElementById("teacher-flow").innerHTML = TEACHER_FLOW.map((entry) => `
    <div class="archive-card">
      <strong>${escapeHtml(entry.title)}</strong>
      <p>${escapeHtml(entry.text)}</p>
    </div>
  `).join("");

  document.getElementById("teacher-eval").innerHTML = TEACHER_EVAL.map((entry) => `
    <div class="archive-card">
      <strong>${escapeHtml(entry.title)}</strong>
      <p>${escapeHtml(entry.text)}</p>
    </div>
  `).join("");
}

function renderProtocol() {
  const historyNode = document.getElementById("history-panel");
  const outcomeNode = document.getElementById("outcome-panel");

  historyNode.innerHTML = state.history.length ? state.history.map((entry) => `
    <div class="history-card">
      <strong>Runde ${entry.round}: ${escapeHtml(entry.eventTitle)}</strong>
      <p><strong>Schattenakteur:</strong> ${escapeHtml(entry.shadowFigureName)}</p>
      <p><strong>Nachtshift:</strong> Druck ${signed(entry.nightShift.druck)}, Ambiguitaet ${signed(entry.nightShift.ambig)}, Vertrauen ${signed(entry.nightShift.vertrauen)}</p>
      <p><strong>Doktrin:</strong> ${escapeHtml(entry.doctrineEnacted)} (${escapeHtml(FAMILY_LABELS[entry.doctrineFamily] || "-")})</p>
      <p><strong>Reflexion:</strong> ${escapeHtml(entry.reflectionText || "-")}</p>
    </div>
  `).join("") : `<div class="empty-state">Noch kein archiviertes Rundenprotokoll.</div>`;

  if (!state.outcome) {
    outcomeNode.innerHTML = `<div class="empty-state">Das finale Urteil erscheint nach Runde 6 oder nach einem Kollaps des Systems.</div>`;
    return;
  }
  const missionAFigure = figureById(state.outcome.missionA.id);
  const missionBFigure = figureById(state.outcome.missionB.id);
  outcomeNode.innerHTML = `
    <div class="outcome-banner">
      <h3>${escapeHtml(state.outcome.headline)}</h3>
      <p>${escapeHtml(state.outcome.verdict)}</p>
      <div class="archive-card">
        <strong>${escapeHtml(getPlayerLabel("a"))}</strong>
        <p>${escapeHtml(missionAFigure.mission.title)}: ${state.outcome.missionA.success ? "erfuellt" : "nicht erfuellt"}</p>
      </div>
      <div class="archive-card">
        <strong>${escapeHtml(getPlayerLabel("b"))}</strong>
        <p>${escapeHtml(missionBFigure.mission.title)}: ${state.outcome.missionB.success ? "erfuellt" : "nicht erfuellt"}</p>
      </div>
    </div>
  `;
}

function updateByPath(path, value, isCheckbox = false) {
  const parts = path.split(".");
  let cursor = state;
  for (let index = 0; index < parts.length - 1; index += 1) {
    cursor = cursor[parts[index]];
  }
  cursor[parts[parts.length - 1]] = isCheckbox ? Boolean(value) : value;
  saveState();
}

document.addEventListener("click", (event) => {
  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) {
    const tabNode = event.target.closest("[data-tab-target]");
    if (tabNode) {
      state.ui.activeTab = tabNode.dataset.tabTarget;
      saveState();
      render();
    }
    return;
  }
  const action = actionNode.dataset.action;
  switch (action) {
    case "start-game":
      startGame();
      break;
    case "start-round":
      startRound();
      break;
    case "fragment-next":
      if (state.current && fragmentChooseReady(state.current)) {
        state.current.fragmentStep = "guess";
        saveState();
        render();
      }
      break;
    case "resolve-fragments":
      resolveFragments();
      break;
    case "apply-doctrine":
      enactDoctrine();
      break;
    case "resolve-suspicion":
      resolveSuspicion();
      break;
    case "close-round":
      closeRound();
      break;
    case "export-json":
      exportJson();
      break;
    case "export-markdown":
      exportMarkdown();
      break;
    case "reset-game":
      resetGame();
      break;
    default:
      break;
  }
});

document.addEventListener("input", (event) => {
  const metaKey = event.target.dataset.meta;
  if (metaKey) {
    setMetaValue(metaKey, event.target.value);
    return;
  }
  const path = event.target.dataset.path;
  if (!path) {
    return;
  }
  updateByPath(path, event.target.type === "checkbox" ? event.target.checked : event.target.value, event.target.type === "checkbox");
});

document.addEventListener("change", (event) => {
  const path = event.target.dataset.path;
  if (!path) {
    return;
  }
  updateByPath(path, event.target.type === "checkbox" ? event.target.checked : event.target.value, event.target.type === "checkbox");
  render();
});

render();

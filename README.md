# Aletheia Wirklichkeitslabor

Lokale Static-Web-App fuer ein interaktives Zwei-Personen-Rollenspiel zu Raphaela Edelbauers "Die echtere Wirklichkeit".

## Konzept

Die App uebersetzt die gelieferten Materialien zur Gruppe Aletheia in eine spielbare Lernlandschaft:

- Figurenarchiv auf Basis der Factsheets, Figurenanalyse, Lehreruebersicht und Poster
- Szenendossiers zu Wahrheit, Handlung, Technik, Beobachtung, Loyalitaet und Institution
- Dixit-artige Fragmentkarten fuer indirekte Deutung
- Secret-Hitler-artige Doktrinphase mit verdeckter Restwirkung
- Werewolf-artige Verdachtsphase gegen einen von der Engine bestimmten Schattenakteur
- Exportierbares Spielprotokoll fuer Auswertung, Interpretation und Leistungsprodukte

## Dateien

- `index.html`: Struktur der Lernlandschaft
- `styles.css`: visuelle Gestaltung und responsive Oberfläche
- `app.js`: Spielengine, State, Rendering, Export
- `README.md`: Nutzungshinweise

## Start

Direkt im Browser oeffnen oder lokal per einfachem Webserver starten.

Beispiel:

```bash
npx serve /Users/patrickfischer/Documents/New\ project/aletheia-wirklichkeitslabor
```

## Spielablauf

1. Teamnamen und Spielernamen eintragen.
2. `Neues Spiel starten` klicken.
3. Geheime Briefings nacheinander oeffnen.
4. Pro Runde:
   - Fragment waehlen und verschluesseln
   - Achse des Gegenuebers deuten
   - Doktrin verwerfen / setzen
   - Schattenakteur verdaechtigen
   - Reflexion notieren
5. Nach sechs Runden oder bei Systemkollaps das Urteil auswerten und exportieren.

## Didaktischer Einsatz

- Doppelstunde mit Fokus auf Figurenkonstellation und Wahrheitsbegriff
- Vertiefung nach der Figurenanalyse
- Auswertungsgrundlage fuer Interpretation, Debatte oder Schreibauftrag
- Vergleich mehrerer Paarprotokolle als Klassenreflexion

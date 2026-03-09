# Aletheia Wirklichkeitslabor

Mehrgeraete-Lernlandschaft fuer Raphaela Edelbauers *Die echtere Wirklichkeit*.

Build-Stand: `Multi-Device Build 2026-03-09 11:27`

## Was jetzt anders ist

Die App ist keine lokale Einzelseite mehr, sondern ein synchronisiertes Klassenzimmer-Spiel:

- lokaler Node-Server mit Raumcodes
- zwei private Player-Ansichten fuer unterschiedliche Endgeraete
- optionaler Board-/Beamer-Modus fuer die gemeinsame Szene
- Host-Konsole mit Join-Links und versteckter Engine
- Live-Feed, private Inboxen, Timer und Systemeingriffe
- exportierbares JSON- und Markdown-Protokoll

## Start

Im Projektordner:

```bash
cd /Users/patrickfischer/Documents/New\ project/aletheia-wirklichkeitslabor
node server.mjs --host 0.0.0.0 --port 8787
```

Danach:

1. Auf dem Startgeraet `http://localhost:8787` oeffnen.
2. Einen Raum anlegen.
3. Die angezeigten Links fuer Spieler*in A, Spieler*in B und optional das Board an die Endgeraete verteilen.
4. Die beiden Spielenden treten mit ihren eigenen Geraeten bei.
5. Partie starten.

Der Server gibt beim Start auch die LAN-/WLAN-Adressen aus. Genau diese URL muessen die anderen Geraete im selben Netz verwenden.

## Modi

- `Host`: Raum anlegen, Join-Links kopieren, Systemmotor beobachten
- `Player`: private Rolle, geheimes Briefing, private Inbox und Aktionsformulare
- `Board`: gemeinsame Szene, Feed, Metriken, aber keine geheimen Infos

## Spielphasen

1. Fragment waehlen und metaphorischen Hinweis senden
2. Hinweis des Gegenuebers einer Achse zuordnen
3. Doktrin verwerfen und setzen
4. Schattenakteur markieren, Vertrauensfigur benennen, Intervention waehlen
5. Reflexion archivieren

## Reaktive Engine

Die Serverlogik reagiert live auf:

- Realitaetsdruck
- Ambiguitaet
- Vertrauen
- Enthuellung

Ab bestimmten Schwellen aktiviert sie Ereignisse wie:

- `Saeuberungsprotokoll`
- `Nebelmaschine`
- `Spaltungsmatrix`
- `Gegenzeugin`

Diese Eingriffe erzeugen neue Systemmeldungen und private Zuschriften und veraendern die Metriken unmittelbar.

Økonomi
Dette er en enkel økonomi-side hvor brukeren kan holde oversikt over inntekter og utgifter gjennom måneden.
Planlegging av løsning
Jeg planla nettsiden i forskjellige deler og fokuserte på hver av dem, i stedet for å lage alt sammen samtidig.

Deler
Inntekter
Utgifter
Månedlige inntekter
Månedlige utgifter
Månedlig sum

Valg jeg har tatt

Jeg bruker localStorage slik at inntekter og utgifter ikke forsvinner når du åpner nettsiden på nytt.
Jeg har laget inntekter og utgifter som objekter i arrays, slik at hver inntekt og utgift har både et beløp og et navn.
Jeg bruker JSON.stringify() for å lagre arrays med objekter i localStorage, og JSON.parse() for å hente dem tilbake.

Publisering

Nettsiden er publisert på skolens server.

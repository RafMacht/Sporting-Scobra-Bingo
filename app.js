// Setup voor de bingokaart met jouw custom challenges
let challenges = [
    "Ga met 2 andere sporters een sportwedstrijd bekijken voor inspiratie.",
    "Fiets in totaal van Brakel naar Parijs. (259,1 km)",
    "Gooi een strike in Bowling.",
    "Loop door alle deelgemeentes van Brakel.",
    "Beoefen 3 verschillende sporten.",
    "Zwem in totaal het kanaal van Dover-Calais over. (34 km)",
    "Maak een leuke figuur op Strava.",
    "Zet 5 motivational songs in de playlist.",
    "Beklim 3 bergen die ook in de Ronde van Vlaanderen worden gedaan.",
    "Eet de gezondste maaltijd: Een ovenschotel van Kip, Linzen en groentjes.",
    "Versla een andere sporter in een café sport.",
    "Toon een goede stretch oefening voor en na het sporten.",
    "LOOP EEN HALVE MARATHON.",
    "Speel een keer zwerkbal met de andere sporters.",
    "Benoem alle Belgische gouden medaillisten op de Olympische Spelen vanaf 2000 en hun discipline.",
    "Pomp in totaal 1000 keer.",
    "Zet 30.000 stappen in 1 dag.",
    "Drink een recovery/protein shake na je fysieke inspanning.",
    "Sport met min. 5 verschillende groepsleden.",
    "Sport 6 van de 7 dagen in een week.",
    "Speel een sport dat je nog nooit hebt gespeeld (behalve zwerkbal).",
    "Eet met 3 andere sporters een gezonde maaltijd en deel het recept.",
    "Triathlon: Fiets +10 km naar de Rijdt, loop 5 rondjes op de Finse piste en zwem 20 lengtes van het zwembad.",
    "Voltooi een Chloe Ting workout van minstens 20 minuten.",
    "Loop in totaal van Gent naar Brakel en terug (61,6 km)."
];

// Functie om de bingokaart te genereren met de specifieke uitdagingen
function generateBingoCard() {
    let kaartContainer = document.getElementById('bingokaart');
    kaartContainer.innerHTML = ''; // Reset de kaart

    challenges.forEach((challenge, index) => {
        let vakje = document.createElement('div');
        vakje.className = 'bingovakje';
        vakje.textContent = challenge; // Voeg de specifieke uitdaging toe
        vakje.addEventListener('click', () => toggleVakje(vakje));
        kaartContainer.appendChild(vakje);
    });
}

// Functie om een vakje als gehaald of niet-gehaald te markeren
function toggleVakje(vakje) {
    vakje.classList.toggle('gehaald');
}

// Functie om de kaart te resetten
function resetBingo() {
    let vakjes = document.querySelectorAll('.bingovakje');
    vakjes.forEach(vakje => vakje.classList.remove('gehaald'));
}

// Init
generateBingoCard();

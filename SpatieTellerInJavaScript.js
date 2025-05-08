document.getElementById("toonAantalSpaties").onclick = function (){

    let aantalSpaties = 0; //We make a counter for the Spaces

    for (const spaties of document.getElementById("text").value) { // Looks at every Char typed
        
        if (spaties === " "){ //Checks if the Char is a " " (space)
            aantalSpaties++; //Adds +1 every time a space is entered
        }
    }
    document.getElementById("aantalSpaties").innerText = aantalSpaties; //Shows the number of total spaces on the screen
}
document.getElementById("toonAantalSpaties").onclick = function (){

    let aantalSpaties = 0; //Counter for the Spaces

    for (const spaties of document.getElementById("text").value) { // Looks at every Char typed
        
        if (spaties === " "){ //Checks if the Char is a " " (space)
            aantalSpaties++; //Adds +1 every time a space is entered
        }
    }
    document.getElementById("aantalSpaties").innerText = aantalSpaties; //Shows the number of spaces on the screen
}
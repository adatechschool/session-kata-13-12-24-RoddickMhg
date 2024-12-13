const secret = ["blue", "red"]
const validColors = ["blue", "red", "yellow", "green"]
let attempts = 0
const maxAttempts = 3

function isValidColor(color) {
    
    if (color === "blue" || color === "red" || color === "yellow") {
        return true
    } else {
    return false
}
}

function playGame() {
    if (attempts >= maxAttempts) {
        console.log("Game Over! La combinaison était : " + secret[0] + ", " + secret[1])
        return
    }

    let guess = prompt("Devinez la combinaison de 2 couleurs (ex: blue, red)")

    
    let isValidFormat = true;
    let color1 = ""
    let color2 = ""
    
    let commaFound = false;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === " ")

        if (guess[i] === ",") {
            commaFound = true
        } else if (!commaFound) {
            color1 += guess[i] 
        } else {
            color2 += guess[i]
        }
    }

   
    if (!isValidColor(color1) || !isValidColor(color2)) {
        console.log("Entrée invalide. Utilisez uniquement les couleurs suivantes : blue, red, yellow, green.");
        return
    }

    attempts++

    let correct = 0;
    if (color1 === secret[0]) correct++
    if (color2 === secret[1]) correct++

    if (correct === 2) {
        console.log("Bravo ! Vous avez trouvé la combinaison !")
    } else {
        console.log(correct + " bonne(s) couleur(s). Il vous reste " + (maxAttempts - attempts) + " essais.")
        playGame() 
    }
}

playGame()

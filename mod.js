// Main content
const main = document.getElementById("mainContainer");
// Audio
const mainMenuMusic = document.getElementById("merlaut");
// Text
const overlay = document.getElementById("introOverlay");


    // Flou enabled
    main.classList.add("blur");



// Add the music when the person click anywhere in the page
document.addEventListener("click",function(e){
    
    mainMenuMusic.muted = false;
    // Remove the black background
    main.classList.remove("blur");
    
    overlay.style.display = "none";
    localStorage.setItem("alreadyEntered","true");


})

// Turn on/off the Matrix mode by pressing D
const color = document.getElementById("mainContainer");
document.addEventListener("keypress",function(e){
                    
    if(e.code === "KeyD"){
        color.classList.toggle("greenColor"); //Add or remove the greenColor class
        // Add the choice of the user in the localStorage
        localStorage.setItem("matrixMod",color.classList.contains("greenColor")); // Return true or false
        }
    })

    // Put the last mode that the user had chosen
    if(localStorage.getItem("matrixMod") === "true"){
        color.classList.add("greenColor");
    }


    // if the blur is already removed -> means that the user already clicked
    if(localStorage.getItem("alreadyEntered") === "true"){
        main.classList.remove("blur");
        overlay.style.display = "none";
    }
    
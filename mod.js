// Add the music when the person click anywhere in the page
document.addEventListener("click",function(e){
    const mainMenuMusic = document.getElementById("merlaut");
    mainMenuMusic.muted = false;
    

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
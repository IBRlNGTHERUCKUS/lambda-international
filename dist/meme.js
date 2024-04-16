const links = document.querySelectorAll("a");
for (let link of links) {
    link.addEventListener("click", ()=> {
        const audio = new Audio("./hamburger.mp3");
        audio.play();
        console.log("hamburger")
        } )

}
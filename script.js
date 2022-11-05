const randomWord = document.querySelector(".word");
let check = false;
let index = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let arrayWord = ["hello", "date", "car", "notebook", "bike"];
let randomIndex = getRandomInt(arrayWord.length);
randomWord.textContent = arrayWord[randomIndex];
document.addEventListener("keydown", (event) => {
    let poSimvolam = randomWord.textContent.split("");
    if (event.key == poSimvolam[index]) {
        for (let i = 0; i <= index; i++) {
            poSimvolam[i] = "<font color=green>" + poSimvolam[i] + "</font>";
        }
        //poSimvolam[index] = "<font color=green>" + poSimvolam[index] + "</font>";
        randomWord.innerHTML = poSimvolam.join("");
        index++;
        if (index == arrayWord[randomIndex].length) {
            randomIndex = getRandomInt(arrayWord.length);
            randomWord.innerHTML = arrayWord[randomIndex];
            index = 0;
        }
    } else if (event.key != poSimvolam[index]) {
        for (let i = 0; i < index; i++) {
            poSimvolam[i] = "<font color=green>" + poSimvolam[i] + "</font>";
        }
        poSimvolam[index] = "<font color=red>" + poSimvolam[index] + "</font>";
        randomWord.innerHTML = poSimvolam.join("");
    }
});
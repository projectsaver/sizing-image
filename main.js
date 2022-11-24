let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
let unitVar = "px";

let imageWidthText = document.getElementById("imageWidth");
let warningMessage = document.getElementById("warningMessage");
let currentImageWidth = imageElement.style.width;
imageWidthText.textContent = currentImageWidth;

function incrementFunction() {
    let whenClicked = parseInt(currentImageWidth) + 5;
    if (whenClicked > 300) {
        warningMessage.textContent = "Too big. Decrease the size of the Image.";
    } else {
        currentImageWidth = whenClicked + unitVar;
        imageWidthText.textContent = currentImageWidth;
        imageElement.style.width = currentImageWidth;
        warningMessage.textContent = "";
    }
}

function decrementFunction() {
    let whenClicked = (parseInt(currentImageWidth) - 5);
    if (whenClicked < 100) {
        warningMessage.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        currentImageWidth = whenClicked + unitVar;
        imageWidthText.textContent = currentImageWidth;
        imageElement.style.width = currentImageWidth;
        warningMessage.textContent = "";
    }
}

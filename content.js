init();

function init() {
    createSideButton();
    createSideDiv();
    createSideButtonToggle();
}

function createSideButton() {
    let sideButton = document.createElement("button");
    let sideButtonText = document.createTextNode("A N N O");
    sideButton.appendChild(sideButtonText);
    sideButton.id = "sideButton";
    document.body.appendChild(sideButton);
}

function createSideDiv() {
    let sideDiv = document.createElement("div");
    let sideDivText = document.createTextNode("Do you like this song?");
    sideDiv.appendChild(sideDivText);
    sideDiv.id = "sideDiv";
    document.body.appendChild(sideDiv);
}

function createSideButtonToggle() {
    let sideButtonClicked = false;
    let sideButton = document.getElementById("sideButton");
    let sideDiv = document.getElementById("sideDiv");

    sideButton.onclick = function () {
        if (!sideButtonClicked) {
            sideButtonClicked = true;
            sideDiv.style.display = 'block';
            sideButton.style.left = '100px';
        } else {
            sideButtonClicked = false;
            sideDiv.style.display = 'none';
            sideButton.style.left = '0px';
        }
    }
}
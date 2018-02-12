destroy();

function destroy() {
    let sideButton = document.getElementById("sideButton");
    let formDiv = document.getElementById("formDiv");
    let displayDiv = document.getElementById("displayDiv");
    sideButton.parentNode.removeChild(sideButton);
    formDiv.parentNode.removeChild(formDiv);
    displayDiv.parentNode.removeChild(displayDiv);
}

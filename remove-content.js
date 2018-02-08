destroy();

function destroy() {
    let sideButton = document.getElementById("sideButton");
    let sideDiv = document.getElementById("sideDiv");
    sideButton.parentNode.removeChild(sideButton);
    sideDiv.parentNode.removeChild(sideDiv);
}

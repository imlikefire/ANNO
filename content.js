function checkIfMusicPlaying() {
    let queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        let tab = tabs[0];
        if(tab.audible) {
            console.log("Music playing");
        }
        else {
            console.log("No music playing");
        }
    });
}

function getCurrentTabUrl(callback) {
    let queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        let tab = tabs[0];
        let url = tab.url;
        console.assert(typeof url === "string", "tab.url should be a string");

        callback(url);
    });
}

window.onload = function() {
    let sideButtonClicked = false;

    let sideButton = document.createElement("button");
    let sideButtonText = document.createTextNode("A N N O");
    sideButton.appendChild(sideButtonText);
    sideButton.id = "sideButton";
    document.body.appendChild(sideButton);

    let sideDiv = document.createElement("div");
    let sideDivText = document.createTextNode("Do you like this song?");
    sideDiv.appendChild(sideDivText);
    sideDiv.id = "sideDiv";
    document.body.appendChild(sideDiv);

    sideButton.onclick = function() {
        if(sideButtonClicked === false) {
            sideButtonClicked = true;
            sideDiv.style.display = 'block';
            sideButton.style.left = '100px';
        } else if(sideButtonClicked === true) {
            sideButtonClicked = false;
            sideDiv.style.display = 'none';
            sideButton.style.left = '0px';
        }
    }

};

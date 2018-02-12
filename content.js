init();

function init() {
    getCurrentTabUrl();
    createSideButton();
    createFormDiv();
    createFormDivContent();
    createDisplayDiv();
    createDisplayDivContent();
    createSideButtonToggle();
}

function getCurrentTabUrl() {
    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
        if (msg.action === 'SendIt') {
            console.log("Message received!");
        }
    });
}

function createSideButton() {
    let sideButton = document.createElement("button");
    let sideButtonText = document.createTextNode("A N N O");
    sideButton.appendChild(sideButtonText);
    sideButton.id = "sideButton";
    document.body.appendChild(sideButton);
}

function createFormDiv() {
    let formDiv = document.createElement("div");
    formDiv.id = "formDiv";
    document.body.appendChild(formDiv);
}

function createDisplayDiv() {
    let displayDiv = document.createElement("div");
    displayDiv.id = "displayDiv";
    document.body.appendChild(displayDiv);
}

function createDisplayDivContent() {
    createDisplayDivSongName();
    createDisplayDivTags();
    createDisplayDivImage();
    createDisplayDivAuthor();
    createDisplayDivButton();
    createBreakRow();
    createExportToJsonButton();
    createBreakRow();
    createExportToCsvButton();
    createBreakRow();
    createExportToXmlButton();
}

function createDisplayDivSongName() {
    let displayDiv = document.getElementById("displayDiv");
    let songNameParagraph = document.createElement("p");
    if (localStorage.songName != null && localStorage.songName !== "") {
        let songNameParagraphText = document.createTextNode("Song name: " + localStorage.songName);
        songNameParagraph.appendChild(songNameParagraphText);
    }
    songNameParagraph.id = "songName";
    displayDiv.appendChild(songNameParagraph);

}

function createDisplayDivTags() {
    let displayDiv = document.getElementById("displayDiv");
    let tagsParagraph = document.createElement("p");
    if (localStorage.tags != null && localStorage.tags !== "") {
        let tagsParagraphText = document.createTextNode("Tags: " + localStorage.tags);
        tagsParagraph.appendChild(tagsParagraphText);
    }
    tagsParagraph.id = "tags";
    displayDiv.appendChild(tagsParagraph);
}

function createDisplayDivImage() {
    let displayDiv = document.getElementById("displayDiv");
    let imageParagraph = document.createElement("p");
    if (localStorage.image != null && localStorage.image !== "") {
        let imageParagraphText = document.createTextNode("Image: " + localStorage.image);
        imageParagraph.appendChild(imageParagraphText);
    }
    imageParagraph.id = "image";
    displayDiv.appendChild(imageParagraph);
}

function createDisplayDivAuthor() {
    let displayDiv = document.getElementById("displayDiv");
    let authorParagraph = document.createElement("p");
    if (localStorage.author != null && localStorage.author !== "") {
        let authorParagraphText = document.createTextNode("Author: " + localStorage.author);
        authorParagraph.appendChild(authorParagraphText);
    }
    authorParagraph.id = "author";
    displayDiv.appendChild(authorParagraph);

}

function createDisplayDivButton() {
    let displayDiv = document.getElementById("displayDiv");
    let switchDivButton = document.createElement("button");
    let switchDivButtonText = document.createTextNode("Edit");
    switchDivButton.appendChild(switchDivButtonText);
    switchDivButton.onclick = showFormDiv;
    displayDiv.appendChild(switchDivButton);
}

function showFormDiv() {
    let formDiv = document.getElementById("formDiv");
    let displayDiv = document.getElementById("displayDiv");
    formDiv.style.display = "block";
    displayDiv.style.display = "none";
}

function showDisplayDiv() {
    let formDiv = document.getElementById("formDiv");
    let displayDiv = document.getElementById("displayDiv");
    let displayDivSongName = document.getElementById("songName");
    let displayDivTags = document.getElementById("tags");
    let displayDivImage = document.getElementById("image");
    let displayDivAuthor = document.getElementById("author");
    if (localStorage.songName != null) {
        if (localStorage.songName !== "") {
            displayDivSongName.innerText = "Song Name: " + localStorage.songName;
        } else {
            displayDivSongName.innerText = "";
        }
    }
    if (localStorage.tags != null) {
        if (localStorage.tags !== "") {
            displayDivTags.innerText = "Tags: " + localStorage.tags;
        } else {
            displayDivTags.innerText = "";
        }
    }
    if (localStorage.image != null) {
        if (localStorage.image !== "") {
            displayDivImage.innerText = "Image: " + localStorage.image;
        } else {
            displayDivImage.innerText = "";
        }
    }
    if (localStorage.author != null) {
        if (localStorage.author !== "") {
            displayDivAuthor.innerText = "Author: " + localStorage.author;
        } else {
            displayDivAuthor.innerText = "";
        }
    }
    if(localStorage.songName === "" && localStorage.tags === "" && localStorage.image === "" && localStorage.author === "") {
        document.getElementById("jsonButton").style.display = "none";
        document.getElementById("csvButton").style.display = "none";
        document.getElementById("xmlButton").style.display = "none";
    } else {
        document.getElementById("jsonButton").style.display = "block";
        document.getElementById("csvButton").style.display = "block";
        document.getElementById("xmlButton").style.display = "block";
    }
    formDiv.style.display = "none";
    displayDiv.style.display = "block";
}

function createFormDivContent() {
    createSongNameGroup();
    createBreakRow();
    createTagsGroup();
    createBreakRow();
    createImageGroup();
    createBreakRow();
    createAuthorGroup();
    createBreakRow();
    createBreakRow();
    createFormDivSubmitButton();
}

function createSongNameGroup() {
    let formDiv = document.getElementById("formDiv");
    let songNameLabel = document.createElement("label");
    let songNameInput = document.createElement("input");
    let songNameLabelText = document.createTextNode("Song Name:");
    songNameInput.id = "songNameInput";
    songNameLabel.setAttribute("for", songNameInput.id);
    songNameLabel.appendChild(songNameLabelText);
    if (localStorage.songName != null && localStorage.songName !== "") {
        songNameInput.value = localStorage.songName;
    }
    formDiv.appendChild(songNameLabel);
    formDiv.appendChild(songNameInput);
}

function createTagsGroup() {
    let formDiv = document.getElementById("formDiv");
    let tagsLabel = document.createElement("label");
    let tagsInput = document.createElement("input");
    let tagsLabelText = document.createTextNode("Tags:");
    tagsInput.id = "tagsInput";
    tagsLabel.setAttribute("for", tagsInput.id);
    tagsLabel.appendChild(tagsLabelText);
    if (localStorage.tags != null && localStorage.tags !== "") {
        tagsInput.value = localStorage.tags;
    }
    formDiv.appendChild(tagsLabel);
    formDiv.appendChild(tagsInput);
}

function createImageGroup() {
    let formDiv = document.getElementById("formDiv");
    let imageLabel = document.createElement("label");
    let imageInput = document.createElement("input");
    let imageLabelText = document.createTextNode("Set an image:");
    imageInput.id = "imageInput";
    imageLabel.setAttribute("for", imageInput.id);
    imageLabel.appendChild(imageLabelText);
    if (localStorage.image != null && localStorage.image !== "") {
        imageInput.value = localStorage.image;
    }
    formDiv.appendChild(imageLabel);
    formDiv.appendChild(imageInput);
}

function createAuthorGroup() {
    let formDiv = document.getElementById("formDiv");
    let authorLabel = document.createElement("label");
    let authorInput = document.createElement("input");
    let authorLabelText = document.createTextNode("Set author or contributor:");
    authorInput.id = "authorInput";
    authorLabel.setAttribute("for", authorInput.id);
    authorLabel.appendChild(authorLabelText);
    if (localStorage.author != null && localStorage.author !== "") {
        authorInput.value = localStorage.author;
    }
    formDiv.appendChild(authorLabel);
    formDiv.appendChild(authorInput);
}

function createFormDivSubmitButton() {
    let formDiv = document.getElementById("formDiv");
    let submitButton = document.createElement("button");
    let submitButtonText = document.createTextNode("Save");
    submitButton.id = "submitButton";
    submitButton.onclick = formDivSubmitButtonAction;
    submitButton.appendChild(submitButtonText);
    formDiv.appendChild(submitButton);
}

function createBreakRow() {
    let formDiv = document.getElementById("formDiv");
    let br = document.createElement("br");
    formDiv.appendChild(br);
}

function formDivSubmitButtonAction() {
    let songName = document.getElementById("songNameInput").value;
    let tags = document.getElementById("tagsInput").value;
    let image = document.getElementById("imageInput").value;
    let author = document.getElementById("authorInput").value;
    localStorage.songName = songName;
    localStorage.tags = tags;
    localStorage.image = image;
    localStorage.author = author;
    showDisplayDiv();
}

function createExportToJsonButton() {
    let displayDiv = document.getElementById("displayDiv");
    let jsonButton = document.createElement("button");
    let jsonButtonText = document.createTextNode("Export to JSON!");
    jsonButton.appendChild(jsonButtonText);
    jsonButton.onclick = function () {
        let jsonObject = createJSONObject();
        let dataString = JSON.stringify(jsonObject);
        let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataString);
        let exportFileDefaultName = "anno.json";
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };
    jsonButton.id = "jsonButton";
    displayDiv.appendChild(jsonButton);
}

function createJSONObject() {
    return {
        "songName": localStorage.songName,
        "tags": localStorage.tags,
        "imageLink": localStorage.image,
        "author": localStorage.author
    };
}

function createExportToCsvButton() {
    let displayDiv = document.getElementById("displayDiv");
    let csvButton = document.createElement("button");
    let csvButtonText = document.createTextNode("Export to CSV!");
    csvButton.appendChild(csvButtonText);
    csvButton.onclick = function () {
        var data, filename, link;

        var csv = convertArrayToCSV({
            data: [{
                "Song name": localStorage.songName,
                "Tags": localStorage.tags,
                "Image link": localStorage.image,
                "Author": localStorage.author
            }]
        });
        if (csv == null) return;

        filename = "anno.csv";

        csv = 'data:text/csv;charset=utf-8,' + csv;
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };
    csvButton.id = "csvButton";
    displayDiv.appendChild(csvButton);
}

function convertArrayToCSV(array) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = array.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = ',';
    lineDelimiter = '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function (item) {
        ctr = 0;
        keys.forEach(function (key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function createExportToXmlButton() {
    let displayDiv = document.getElementById("displayDiv");
    let xmlButton = document.createElement("button");
    let xmlButtonText = document.createTextNode("Export to XML!");
    xmlButton.appendChild(xmlButtonText);
    xmlButton.onclick = function () {
        let jsonObject = createJSONObject();
        let data = objectToXml(jsonObject);
        data = 'data:text/csv;charset=utf-8,' + data;
        //////////
        let filename = "anno.xml";
        let link = document.createElement('a');
        link.setAttribute('href', encodeURI(data));
        link.setAttribute('download', filename);
        link.click();
    };
    xmlButton.id = "xmlButton";
    displayDiv.appendChild(xmlButton);
}

function objectToXml(obj) {
    var xml = '';
    xml += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<anno>\n";
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }

        if (obj[prop] === undefined)
            continue;

        xml += "   <!--" + prop + "-->\n";
        xml += "   <" + prop + ">";
        xml += obj[prop];
        xml += "</" + prop + ">\n";
    }
    xml += "</anno>";
    return xml;
}

function createSideButtonToggle() {
    let sideButtonClicked = false;
    let sideButton = document.getElementById("sideButton");
    let formDiv = document.getElementById("formDiv");
    let displayDiv = document.getElementById("displayDiv");

    sideButton.onclick = function () {
        if (!sideButtonClicked) {
            sideButtonClicked = true;
            if (localStorage.songName || localStorage.tags || localStorage.image || localStorage.author) {
                displayDiv.style.display = "block";
            } else {
                formDiv.style.display = "block";
            }
            sideButton.style.left = "300px";
        } else {
            sideButtonClicked = false;
            formDiv.style.display = "none";
            displayDiv.style.display = "none";
            sideButton.style.left = "0px";
        }
    }
}
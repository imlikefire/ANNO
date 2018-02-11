init();

function init() {
    createSideButton();
    createFormDiv();
    createFormDivContent();
    createDisplayDiv();
    createDisplayDivContent();
    createSideButtonToggle();
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
}

function createDisplayDivSongName() {
    let displayDiv = document.getElementById("displayDiv");
    let songNameParagraph = document.createElement("p");
    let songNameParagraphText = document.createTextNode(localStorage.songName);
    songNameParagraph.appendChild(songNameParagraphText);
    songNameParagraph.id = "songName";
    displayDiv.appendChild(songNameParagraph);
}

function createDisplayDivTags() {
    let displayDiv = document.getElementById("displayDiv");
    let tagsParagraph = document.createElement("p");
    let tagsParagraphText = document.createTextNode(localStorage.tags);
    tagsParagraph.appendChild(tagsParagraphText);
    tagsParagraph.id = "tags";
    displayDiv.appendChild(tagsParagraph);
}

function createDisplayDivImage() {
    let displayDiv = document.getElementById("displayDiv");
    let imageParagraph = document.createElement("p");
    let imageParagraphText = document.createTextNode(localStorage.image);
    imageParagraph.appendChild(imageParagraphText);
    imageParagraph.id = "image";
    displayDiv.appendChild(imageParagraph);    
}

function createDisplayDivAuthor() {
    let displayDiv = document.getElementById("displayDiv");
    let authorParagraph = document.createElement("p");
    let authorParagraphText = document.createTextNode(localStorage.author);
    authorParagraph.appendChild(authorParagraphText);
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
    displayDivSongName.innerText = localStorage.songName;
    displayDivTags.innerText = localStorage.tags;
    displayDivImage.innerText = localStorage.image;
    displayDivAuthor.innerText = localStorage.author;
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
    songNameLabel.setAttribute("for",songNameInput.id);
    songNameLabel.appendChild(songNameLabelText);
    formDiv.appendChild(songNameLabel);
    formDiv.appendChild(songNameInput);
}

function createTagsGroup() {
    let formDiv = document.getElementById("formDiv");
    let tagsLabel = document.createElement("label");
    let tagsInput = document.createElement("input");
    let tagsLabelText = document.createTextNode("Tags:");
    tagsInput.id = "tagsInput";
    tagsLabel.setAttribute("for",tagsInput.id);
    tagsLabel.appendChild(tagsLabelText);
    formDiv.appendChild(tagsLabel);
    formDiv.appendChild(tagsInput);
}

function createImageGroup() {
    let formDiv = document.getElementById("formDiv");
    let imageLabel = document.createElement("label");
    let imageInput = document.createElement("input");
    let imageLabelText = document.createTextNode("Set an image:");
    imageInput.id = "imageInput";
    imageLabel.setAttribute("for",imageInput.id);
    imageLabel.appendChild(imageLabelText);
    formDiv.appendChild(imageLabel);
    formDiv.appendChild(imageInput);
}

function createAuthorGroup() {
    let formDiv = document.getElementById("formDiv");
    let authorLabel = document.createElement("label");
    let authorInput = document.createElement("input");
    let authorLabelText = document.createTextNode("Set author or contributor:");
    authorInput.id = "authorInput";
    authorLabel.setAttribute("for",authorInput.id);
    authorLabel.appendChild(authorLabelText);
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

function createSideButtonToggle() {
    let sideButtonClicked = false;
    let sideButton = document.getElementById("sideButton");
    let formDiv = document.getElementById("formDiv");
    let displayDiv = document.getElementById("displayDiv");

    sideButton.onclick = function () {
        if (!sideButtonClicked) {
            sideButtonClicked = true;
            if(localStorage.songName || localStorage.tags || localStorage.image || localStorage.author) {
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
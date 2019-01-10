var i,
    header = document.getElementsByClassName("reveal");

var toggleDesc = function () {
    "use strict";
    var pDesc = this.parentElement.children[2];

    //Change Text & Show / Hide Content
    if (this.innerHTML === '<button type="button" onclick="click">Hide</button>') {
        this.innerHTML = '<button type="button" onclick="click">Details...</button>';
        pDesc.style.display = "none";
    } else {
        this.innerHTML = '<button type="button" onclick="click">Hide</button>';
        pDesc.style.display = "block";
    }
};

// Add Event Listener to Click on Details... buttons
for (i = 0; i < header.length; i += 1) {
    header[i].addEventListener("click", toggleDesc);
}

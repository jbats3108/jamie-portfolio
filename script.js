/*jslint browser:true */

/*global
alert, confirm, console, prompt
*/
var i,
    header = document.getElementsByClassName("reveal"),
    pSection = document.getElementById("projects");


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

    var pDesc0 = pSection.children[2].children[2],
        pDesc1 = pSection.children[3].children[2],
        pDesc2 = pSection.children[4].children[2],
        pdd0 = pDesc0.style.display,
        pdd1 = pDesc1.style.display,
        pdd2 = pDesc2.style.display;

    // Resize section if no content showing
    if (pdd0 !== "block" &&  pdd1 !== "block" && pdd2 !== "block") {
        pSection.style.height = "200px";
    } else {
        pSection.style.height = "300px";
    }
};

// Add Event Listener to Click on Details... buttons
for (i = 0; i < header.length; i += 1) {
    header[i].addEventListener("click", toggleDesc);
}

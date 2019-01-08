/*jslint browser:true */

/*global
alert, confirm, console, prompt
*/

/* JS */

var i,
    header = document.getElementsByClassName("reveal");


var toggle = function () {
    "use strict";
    var projectDescription = this.parentElement.children[2],
        pdd = projectDescription.style.display;

    if (pdd === "block") {
        projectDescription.style.display = "none";

    } else {
        projectDescription.style.display = "block";
    }
};


for (i = 0; i < header.length; i += 1) {
    header[i].addEventListener("click", toggle);
}

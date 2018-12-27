/*jslint browser: true, vars: true*/
/*global console*/


//create Politician Objects
var makePolitician = function (name, partyColor) {

        "use strict";
        var politician = {};
        politician.name = name;
        politician.electionResults = null;
        politician.totalVotes = 0;
        politician.partyColor = partyColor;
        politician.tallyVotes = function () {
            var i;
            for (i = 0; i < this.electionResults.length; i++) {
                this.totalVotes = this.totalVotes + this.electionResults[i];
            }
        };
        return politician;
    };

var democrat = makePolitician("Matt Santos", [11, 32, 57]);
var republican = makePolitician("Arnold Vinick", [132, 17, 11]);

democrat.electionResults = [5,  1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

republican.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

democrat.electionResults[9] = 1;
democrat.electionResults[4] = 17;
democrat.electionResults[43] = 11;

republican.electionResults[9] = 28;
republican.electionResults[4] = 38;
republican.electionResults[43] = 27;

democrat.tallyVotes();
republican.tallyVotes();

console.log(democrat.totalVotes);
console.log(republican.totalVotes);

var winner;

if (democrat.totalVotes > republican.totalVotes) {
    winner = democrat.name;
} else if (republican.totalVotes > democrat.totalVotes) {
    winner = republican.name;
} else {
    winner = "Nobody - it is a draw!";
}

var setStateResults = function (state) {
    "use strict";

    theStates[state].winner = null;
    if (democrat.electionResults[state] > republican.electionResults[state]) {
        theStates[state].winner = democrat;
    } else if (republican.electionResults[state] > democrat.electionResults[state]) {
        theStates[state].winner = republican;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [60, 60, 60];
    }

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    candidate1Name.innerText = democrat.name;
    candidate2Name.innerText = republican.name;
    candidate1Results.innerText = democrat.electionResults[state];
    candidate2Results.innerText = republican.electionResults[state];

    if (theStates[state].winner ===null){
      winnersName.innerText = "TIE";
    } else winnersName.innerText = stateWinner.name;

};

var countryInfoTable = document.getElementById("countryResults");

countryInfoTable.children[0].children[0].children[0].innerText = democrat.name;
countryInfoTable.children[0].children[0].children[1].innerText = democrat.totalVotes;
countryInfoTable.children[0].children[0].children[2].innerText = republican.name;
countryInfoTable.children[0].children[0].children[3].innerText = republican.totalVotes;
countryInfoTable.children[0].children[0].children[5].innerText = winner;

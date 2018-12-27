var time = new Date().getHours();
var messageText;
var image;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var oneSecond = 1000;
var message = document.getElementById("timeEvent");
var lolcatImage = document.getElementById("lolcat");
var image; //url for dynamic image
var oneSecond = 1000;
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var showCurrentTime = function() {
	// display the string on the webpage
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	// Set hours
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}

	// Set Minutes
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	// Set Seconds
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	// put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

//To show current time each time updateClock is called
var updateClock = function() {
	{
	if (time == partyTime){
		messageText = "IZ PARTEE TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
		messageText = "IZ NAP TIME...";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeupTime) {
		messageText = "IZ TIME TO GETTUP.";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Good morning!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else if (time > evening) {
		messageText = "Good Evening!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else {
		messageText = "Good afternoon!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	}


	}
	message.innerText = messageText;
	lolcatImage.src = image;
	showCurrentTime();
};

//Call updateClock, which calls showCurrentTime, which gets the current time and displays it in 12Hr hh:mm:ss am/pm format, once at interval specified by oneSecond
setInterval(updateClock, oneSecond);

var partyEvent = function() {

	//check isPartyTime
	if (isPartyTime === false){
		// if isPartyTime is false, change it to true
		//so we know the button has been clicked
		isPartyTime = true;
		// set time to partyTime so the lolCat clock
		time = partyTime;
		//image and message update to the partyTime image and message
		partyTimeButton.innerText = "Party Over!";
		partyTimeButton.style.backgroundColor = "#222";
	} else {
		// if isPartyTime is true, change it to false to end the party
		isPartyTime = false;
		partyTimeButton.innerText= "Party Time";
		// set time back to the current time
		time = new Date().getHours();
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}

};

var wakeUpEvent = function() {
	wakeupTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
	lunchTime=lunchTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click",partyEvent);
wakeUpTimeSelector.addEventListener("change",wakeUpEvent);
lunchTimeSelector.addEventListener("change",lunchEvent);
napTimeSelector.addEventListener("change",napEvent);

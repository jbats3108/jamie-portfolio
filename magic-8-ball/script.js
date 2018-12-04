$(document).ready(function(){



var magic8Ball = {

	//Possible answers to be displayed
	listOfAnswers: ["Yes", "No", "Maybe", "I don't know", "Can you repeat the question?"],

	//Method to run when question is asked
	askAQuestion: function ask(question) {

	//Shake the 8 ball
	$("#8ball").effect("shake");


	//Switch image to answer side after 1s
	setTimeout(function(){
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	}, 1000);

	//Randomly select nr between 0 and length -1 to use as index in order to select a random answer
	var answer = this.listOfAnswers[Math.floor(Math.random()*this.listOfAnswers.length)];

	//Set answer text to the selected value
	$("#answer").text(answer);

	//Fade answer in over 4s, 1s after answer side appears
	setTimeout(function(){
	$("#answer").fadeIn(4000);},1000);
	}
};


var onClick = function(){
	//Hide previous answer
	$("#answer").hide();

	//Switch back to 8 side
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	//Wait 500ms before showing prompt
	setTimeout(
		function(){
			//Box to ask the question
			var question = prompt("ASK A YES/NO QUESTION!");

			//Call method to display answer
			magic8Ball.askAQuestion(question);
			}, 500);

};

//Call the onClick function when question button is clicked
$("#questionButton").click(onClick);




});

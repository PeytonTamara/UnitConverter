$(document).ready(function(){
	
	$("button").click( function() {
		
		var number = $("#number_inches").val();
		
		console.log(number);
		
		var sentence = parseInt(number) / 12.0;
		console.log(sentence);
		
		$("#result").html(sentence);
		
	});
	
	$("button").click( function() {
		
		var number2 = $("#number_feet").val();
		
		console.log(number2);
		
		var sentence = parseInt(number2) * 12.0;
		console.log(sentence);
		
		$("#result2").html(sentence);
	});

});
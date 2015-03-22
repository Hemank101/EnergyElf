$(document).ready(function(){
    $("#submit-button").click(function(e){
    	e.preventDefault();

		var incoming = $("#name").val();
		var result = validateInput(incoming); 
    	console.log(result);
    	if(result[0] != true) {
    		hideForm();
    		handleBadInput(result);
    	}
		
		if(result[0] == true)
	    {
        hideForm();


    	console.log(incoming);

    	var translated = translate(incoming);

    	console.log("translated:" + translated);

    	fillResults(translated);
    	}
    });
});

function hideForm(){
	console.log("The paragraph was clicked.");
    $("#submit-form").addClass("hide");
}

function fillResults(translated){
	$("#result").html(translated);
	$("#results").removeClass("hide");
}


var names=["Aishwarya","Kumar","Arjun","Raj","Abhinav","Parth","Neeraj","Nithin","Anish","Kaustubh","Dinesh","Vijay","Kunal","Rajesh","Kamesh","Hemanth","Nishant","Apurva","Aditya","Ram","Anirrudh","Manas","Jagannath","Payal"];
var translation=["Eye + Sh + Were + E + Yah", "Khum  (as in bloom) + Mar", "Er (as in her) + June", "Rog (as in Roger)", "A + Bee + Nough (as in enough)", "Pa (as in pawn) + rth (as in north)", "Near + Udge (as in fudge)", "Ni (as in nickel) + thin", "A + Neesh (rhymes with leash)", "COw + Sthub", "Dhin (rhymes with thin) + Ay (as in May) + Sh", "Vig (as in digital) + Ay (as in May)", "Kun (rhymes with dune) + all (as in wall)", "Rog (as in Roger) + Ay (as in May) + Sh", "CAlm + May + Sh", "Hey + Month", "Knee + Shawn + Th", "A + Poor + Va (as in varsity)", "Odd + dith (rhymes with pith) + ya", "Rom (as in CD rom)", "ON + Knee + Rudh (rhymes with good) + Dh", "Mon (Rhymes with on) + Us", "Jug + Un (rhymes with one) + nOTH", "PIE + Ull (as in hull)"];

function translate(inName) {
	for (var i = 0; i < names.length; i++) {
		if (names[i] == inName){
			return translation[i];
		}
	}
}

function validateInput(incoming){
	if ((names.indexOf(incoming) > -1) && incoming != null){
		return [true, 0];
	} 
		else if (incoming == null || incoming == ""){
		return [false, "You didn't enter a name!"];
	}
	else if (names.indexOf(incoming) == -1){
		return [false, "The submitted value was not recognized in our database."];
	}
	//If it passess validation, return TRUE
	//If fails, return array=[FALSE,"reason why"] returns boolean and string 
}

function handleBadInput(results){
	//Show an error message with the reason why it failed
	fillResults(results[1] + "\n Please try again!");
}
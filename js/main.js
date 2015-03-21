$(document).ready(function(){
    $("#submit-button").click(function(e){
    	e.preventDefault();
        console.log("The paragraph was clicked.");


    	var $incoming = $("#name").val();

    	console.log($incoming);

    	$("#submit-form").addClass("hide");
    	$("#results").removeClass("hide");
    });
});

var names=["Aishwarya","Kumar","Arjun","Raj","Abhinav","Parth","Neeraj","Nithin","Anish","Kaustubh","Dinesh","Vijay","Kunal","Rajesh","Kamesh","Hemanth","Nishant","Apurva","Aditya","Ram","Anirrudh","Manas","Jagannath","Payal"];
var translation=["Eye + Sh + Were + E + Yah", "Khum  (as in bloom) + Mar", "Er (as in her) + June", "Rog (as in Roger)", "A + Bee + Nough (as in enough)", "Pa (as in pawn) + rth (as in north)", "Near + Udge (as in fudge)", "Ni (as in nickel) + thin", "A + Neesh (rhymes with leash)", "COw + Sthub", "Dhin (rhymes with thin) + Ay (as in May) + Sh", "Vig (as in digital) + Ay (as in May)", "Kun (rhymes with dune) + all (as in wall)", "Rog (as in Roger) + Ay (as in May) + Sh", "CAlm + May + Sh", "Hey + Month", "Knee + Shawn + Th", "A + Poor + Va (as in varsity)", "Odd + dith (rhymes with pith) + ya", "Rom (as in CD rom)", "ON + Knee + Rudh (rhymes with good) + Dh", "Mon (Rhymes with on) + Us", "Jug + Un (rhymes with one) + nOTH", "PIE + Ull (as in hull)"];

function phonxify(inName) {
	for (var i = 0; i < names.length; i++) {
		if (names[i] == inName){
			document.write(translation[i]);
			break;
		}
	}
}


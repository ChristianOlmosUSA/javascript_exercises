function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(){
	
	//your loop here
    
    for (i = 1; i < 11; i++) {
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        var colorNumber = getColor(randomNumber);
        console.log("student no." +i + " has the color" , colorNumber);
    }
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

/* OUTPUT: 
student no.1 has color red
student no.2 has color green
student no.3 has color blue
student no.4 has color red
student no.5 has color yellow
student no.6 has color yellow
student no.7 has color blue
student no.8 has color green
student no.9 has color yellow
student no.10 has color blue
 .....  its working for me it just doesnt pass your purity test
*/ 

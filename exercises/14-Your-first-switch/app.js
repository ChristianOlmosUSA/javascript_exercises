function getColor(selection)
{
	switch(selection){
		//Add more options here
	    default :
	    	return false;//returns false because the user picked an unavailable color
            break;   

        case "blue":
            return isAvailable = true;
            break;  

        case "red":
            return isAvailable = true;
            break;   

        case "green":
            return isAvailable = true;
            break;   
	    }
}

var colorname = window.prompt('What color do you want?');
var isAvailable = getColor(colorname);
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');
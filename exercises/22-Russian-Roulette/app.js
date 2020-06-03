

// Remove the // below and complete the commented lines
const fireGun = () => {
    var bulletPosition = Math.floor((Math.random() * 6) + 1);
    var chamberPosition = Math.floor((Math.random() * 6) + 1);
    if (bulletPosition == chamberPosition) {
        return ("You're dead!");
    } 
    else {
        return ("Keep playing!");
    }
};

console.log(fireGun());
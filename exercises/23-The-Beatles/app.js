
function sing() {
    var apo = "'"
    var l = "let it be, ";
    var l2 = l.slice(0, -2);
    var w = "words of wisdom, ";
    var t = "there will be an answer, ";
    var song = apo+l+l+l+l + w+ l+l+l+l+l+ t+ l2+apo;
    return song;
}

//Your code above ^^^

console.log(sing());
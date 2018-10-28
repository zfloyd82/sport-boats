function mastLength() {
    var mastHeight = document.getElementsByName("mastHeight")[0].value;
    var toTip = document.getElementsByName("toTip")[0].value;
    var mastLength = Math.sqrt((Math.pow(mastHeight, 2)) + 
    (Math.pow(toTip, 2)));
    document.getElementById("mastLength").innerHTML = 
        (mastLength + 2).toFixed(2);
    return mastLength;
}

function boatDiagonal() {
    var boatWidth = document.getElementsByName("boatWidth")[0].value;
    var boatLength = document.getElementsByName("boatLength")[0].value;
    var boatDiagonal = Math.sqrt((Math.pow(boatWidth, 2)) + 
    (Math.pow(boatLength, 2)));
    document.getElementById("boatDiagonal").innerHTML = 
        (boatDiagonal + 2).toFixed(2);
    return boatDiagonal;
}

function boatTotal(mastLength, boatDiagonal) {
    var mastLength = mastLength();
    var boatDiagonal = boatDiagonal();
    var boatTotal = mastLength + boatDiagonal;
    document.getElementById("boatTotal").innerHTML = (boatTotal + 4).toFixed(2);
}

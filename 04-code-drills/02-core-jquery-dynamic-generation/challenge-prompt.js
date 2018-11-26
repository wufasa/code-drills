$(document).ready(function () {

    $(document).on("click", "#randomLetter", function() {

        // create variable called `text` and have it equal an empty string

        
        // create a variable called `possibleLetters` that contains all the letters of the alphabet

        
        // Create a new variable `randIndex` that is a random number between 0 and the last index of `possibleLetters`

        
        // Using the `randIndex` and `possibleLetters` variables, set `randLetter` to be a random letter

        
        // console log the value of `randLetter`

        
        // append `randLetter` to the element with an id of `letters`

        
        var randLetter = "";
        var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var randIndex = Math.floor(Math.random() * possibleLetters.length)
        randLetter = possibleLetters.charAt(randIndex); 
        console.log(randLetter);
        $("#letters").append(randLetter);

    });

});

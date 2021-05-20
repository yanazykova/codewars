
function isPangram(string) {
    // make the given parameter string compatible with the alphabet string:
    sentense = string.toLowerCase().trim();

        // create the alphabet variable:
    var alphabet = "abcdefghijklmnopqrstuvwxyz";


    // Iterate through the newString sentense:
    for (var i = 0; i < sentense.length; i++) {


        // Find the index of the matching letter in alphabet to delete:
        var letter = alphabet.indexOf(sentense[i]);

        //If the letter from the sentence is present in the alphabet, remove it from the alphabet string:
        if (sentense[i] == alphabet[letter]) {
            alphabet = alphabet.replace(sentense[i], '') 
        } 

    }
    // check if the string still contains any letters:
    return alphabet.length === 0;

}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))
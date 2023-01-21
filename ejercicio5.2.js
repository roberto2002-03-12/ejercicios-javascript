function isPangram(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();
    for (var i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) === -1) {
            return "not pangram";
        }
    }
    return "pangram";
}
  
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
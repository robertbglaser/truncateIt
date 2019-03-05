console.log("script.js")

function truncateIt (word) {
    
    var prefix = "=? ";
    var suffix = " ;"
        
    var lengthOfWord = word.length;
    var firstLetter = word.charAt(0);
    var lastLetter = word.charAt(lengthOfWord -1);
    var truncatedWord = lengthOfWord - 2 
    var returnWord = prefix + firstLetter + truncatedWord + lastLetter + suffix;

    console.log(returnWord)
    }

    truncateIt("printer");
    truncateIt("visa");
    truncateIt("function") 
function isVowel(letter){
    let vowels = ['a','e','i','o','u'];
    for (let i = 0; i < vowels.length; i++){
        if(vowels[i] === letter){
            return true;
        }
    }
    return false;
}

function hasMoreVowels(word){
    word = word.toLowerCase();
    let numOfVowels = 0;
    for(let i = 0; i < word.length; i++){
        if(isVowel(word[i])){
            numOfVowels++;
        }
    }
    if(numOfVowels > word.length/2){
        return true;
    }
    return false;
}

console.log(hasMoreVowels("moose"));
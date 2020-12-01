function beVowel(){
    count = 0;
    var vowels =['a','e','i','o','u'];
    var word ='hello';
    for(i in word){
        if('i--vowels'){
            return vowels;
        }
    }
    return beVowel();
}
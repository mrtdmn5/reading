class KEY {

    static createAnswerArray(words) {
        var allKeysArray = [];
        for (var i = 0; i < words.length; i++) {
            const word = words[i].split('');
            var keys = [];
            for (var t = 0; t < word.length; t++) {
                if (word[t] == " ") {
                 
                    word.splice(t, 1);
                    t--;
                    keys.push((t).toString());
                }
            }
            allKeysArray.push(keys);
    
        }
        return allKeysArray;
    }

}

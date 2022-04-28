console.clear();


function compareTwoWords(word1, word2) {
    if (word1.length === word2.length) {
        let wordDiff = 0;
        for(let i = 0; i < word1.length; i++) {
            let c1 = word1[i], c2 = word2[i];
            if (c1 !== c2) {
                wordDiff += 1;
            }
        }
        return wordDiff;
    }
    return word1.length;
}

var getClosestWords = (words, word) => {
    let closeWords = [];
    for(let i = 0; i < words.length; i++){
        if (compareTwoWords(words[i], word) === 1) {
            closeWords.push(words[i]);
        }
    }
    return closeWords;
};

var ladderLength = function(beginWord, endWord, wordList) {
    let map = {}, isEndWordExists = false, isBeginWordExists = false;

    let wordSet = new Set();
    for(let i = 0; i < wordList.length; i++){
        let word = wordList[i];
        if (word === endWord) {
            isEndWordExists = true;
        }
        if(word === beginWord) {
            isBeginWordExists = true;
        }

        wordSet.add(word);
    }

    if(isEndWordExists){
        let queToStart = [];
        queToStart.push({
            word: beginWord,
            depth: 1
        });

        let i = 0, maxLoop = wordList.length + 5;
        let foundEndWord = false, endWordDepth = 0;
        while(queToStart.length > 0 && i < maxLoop) {
            let queItem = queToStart.pop();
            let wordTocheck = queItem.word;
            console.log('wordTocheck,', wordTocheck);
            
            // if (wordTocheck === endWord){
            //     console.log('END!!!!!');
            //     endWordDepth = queItem.depth;
            //     foundEndWord = true;
            //     break;
            // }
            if (wordSet.has(wordTocheck)) {
                wordSet.delete(wordTocheck);
            }
            let endFound = false;
            for(let item of wordSet){
                let diff = compareTwoWords(wordTocheck, item);
                if (diff === 1) {
                    // if (item === endWord) {
                    //     console.log('END2222', queItem);
                    //     endFound = true;
                    //     break
                    // }
                    queToStart.push({ 
                        word:item,
                        depth: queItem.depth + 1,
                        prevWord: queItem
                    });
                }
            }
            // if (endFound) {
            //     foundEndWord = true;
            //     endWordDepth = queItem.depth;
            //     break;
            // }
            i++;
        }
        return foundEndWord ? endWordDepth + 1 : 0;
    } else {
        return 0;
    }
};


// console.log(ladderLength("ab", "cd",["rt", "we", "at", "ct", "ad", "cd"]));
console.log(ladderLength("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]));


/*
ab => at => ct => cd : 4
ab => ad => cd: 3
*/
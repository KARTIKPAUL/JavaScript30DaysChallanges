function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    
    const wordSet = new Set(wordList);
    const dp = {};
    dp[beginWord] = 1;

    const queue = [beginWord];

    while (queue.length > 0) {
        const currentWord = queue.shift();

        for (let i = 0; i < currentWord.length; i++) {
            const wordArray = currentWord.split('');
            for (let j = 0; j < 26; j++) {
                wordArray[i] = String.fromCharCode(97 + j); // Generating new words by changing one character
                const newWord = wordArray.join('');

                if (wordSet.has(newWord) && !dp.hasOwnProperty(newWord)) {
                    dp[newWord] = dp[currentWord] + 1;
                    if (newWord === endWord) {
                        return dp[newWord];
                    }
                    queue.push(newWord);
                }
            }
        }
    }

    return 0;
}

let beginWord1 = "hit";
let endWord1 = "cog";
let wordList1 = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord1,endWord1,wordList1));

let beginWord2 = "hit";
let endWord2 = "cog";
let wordList2 = ["hot","dot","dog","lot","log"];
console.log(ladderLength(beginWord2,endWord2,wordList2));


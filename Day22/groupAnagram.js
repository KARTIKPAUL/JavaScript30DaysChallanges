const getSignature = function(s) {
    const count = Array(26).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
        }
    }

    return result.join('');
};

const groupAnagrams = function(strs) {
    const result = [];
    const groups = new Map();

    for (const s of strs) {
        const signature = getSignature(s);
        if (!groups.has(signature)) {
            groups.set(signature, []);
        }
        groups.get(signature).push(s);
    }

    groups.forEach(value => result.push(value));

    return result;
};

let arr1 = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(arr1));
let arr2 = [""];
console.log(groupAnagrams(arr2));


/*
- Problem link: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
- Given a string and a list of equal-length words, find the indices of substrings that are a concatenation of all the words
- A valid substring should contain each word from the words list as many times as they are present in the words list
- Time complexity -> O(m + n * 2m) ~ O(n * m) where n = string length, m = number of words
- Space complexity -> O(2m + n) ~ O(m + n)
*/

function getSubstringStartingIndices(str, words) {
  const wordLength = words[0].length;
  const numberOfWords = words.length;
  const substringLength = wordLength * numberOfWords;
  const output = [];

  if (str === "" || wordLength === 0 || numberOfWords === 0) {
    return output;
  }

  function setOrIncrementFrequencyMapKey(key, map) {
    const count = map.get(key);
    if (count) {
      map.set(key, count + 1);
    } else {
      map.set(key, 1);
    }
  }

  // create a hash map to determine how many times each word can be present in a substring
  const wordFrequencyMap = new Map();
  for (const word of words) {
    setOrIncrementFrequencyMapKey(word, wordFrequencyMap);
  }

  // We need to iterate only until the start of the last possible substring in the string
  for (let i = 0; i <= str.length - substringLength; i++) {
    const substringWordFrequencyMap = new Map();
    let isValidSubstring = true;
    // check if a substring starting from the current letter contains all the words
    for (let j = i; j < i + substringLength; j += wordLength) {
      const word = str.substring(j, j + wordLength);
      // the word needs to match one of the words in the words array
      if (!wordFrequencyMap.get(word)) break;
      setOrIncrementFrequencyMapKey(word, substringWordFrequencyMap);
      // A word cannot be present in the substring more than the number of times it is present in the words array
      if (substringWordFrequencyMap.get(word) > wordFrequencyMap.get(word)) {
        break;
      }
    }
    // check if all the words are present
    if (substringWordFrequencyMap.size !== wordFrequencyMap.size) {
      continue;
    }
    // check if the words are present the correct number of times
    for (const [word, count] of substringWordFrequencyMap) {
      if (count !== wordFrequencyMap.get(word)) {
        isValidSubstring = false;
        break;
      }
    }

    if (isValidSubstring) output.push(i);
  }
  return output;
}

getSubstringStartingIndices("barfoothefoobarman", ["foo", "bar"]);
getSubstringStartingIndices("wordgoodgoodgoodbestword", [
  "word",
  "good",
  "best",
  "word",
]);
getSubstringStartingIndices(
  "lingmindraboofooowingdingbarrwingmonkeypoundcake",
  ["fooo", "barr", "wing", "ding", "wing"]
);

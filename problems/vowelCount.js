// Get the count of vowels in a string

// Time complexity -> O(n)
// Space complexity -> O(1)
function getVowelCount(str) {
  let count = 0;
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  for (let i = 0; i < str.length; i++) {
    const character = str[i].toLowerCase();
    if (vowels[character]) count++;
  }

  return count;
}

console.log(getVowelCount("hello world"));
console.log(getVowelCount("Geralt of Rivia"));
console.log(getVowelCount("GerAlt of RiviA"));

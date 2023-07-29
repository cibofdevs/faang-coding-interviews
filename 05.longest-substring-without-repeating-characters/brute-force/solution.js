const string = "abccabb"

const lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    let longest = 0;

    for (let left = 0; left < s.length; left++) {
        let seenChar = {}, currentLength = 0;

        for (let right = left; right < s.length; right++) {
            const currentChar = s[right];

            if (!seenChar[currentChar]) {
                currentLength++;
                seenChar[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }

    return longest;
}

console.log(lengthOfLongestSubstring(string));
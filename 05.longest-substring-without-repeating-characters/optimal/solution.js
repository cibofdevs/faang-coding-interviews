const string = "eu"

const lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    const seen= new Map();
    let left = 0, longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seen.get(currentChar);

        if (previouslySeenChar >= left) {
            left = previouslySeenChar + 1;
        }

        seen.set(currentChar, right);
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

console.log(lengthOfLongestSubstring(string));
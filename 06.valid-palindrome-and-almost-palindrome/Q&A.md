### Question
**Normal Palindrome:**
> Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity.

**Almost Palindrome:**
> Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity.

### Answer
**Step 1: Verify the constraints** <br>
- Do we consider a palindrome as almost a palindrome? <br>
  > Yes, return true if the string is already palindrome.

**Step 2: Write out some test cases** <br>

**Normal Palindrome:**

| Test Cases                       | Palindrome |
|----------------------------------|------------|
| "aabaa"                          | True       |
| "aabbaa"                         | True       |
| "abc"                            | False      |
| "a"                              | True       |
| ""                               | True       |
| "A man, a plan, a canal: Panama" | True       |

**Almost Palindrome:**

| Test Cases   | Palindrome  |
|--------------|-------------|
| "race a car" | True        |
| "abccdba"    | True        |
| "abcdefdba"  | False       |
| ""           | True        |
| "a"          | True        |
| "ab"         | True        |

**Explanation:**
```
Example 1:
"race a car"
     ↓
"rac`ea`car"

Removing `a`:
"race a car"
     ↓
 "racecar" → Valid Palindrome

Removing `e`:
"race a car"
     ↓
 "racacar" → Valid Palindrome
 
Example 2: (Almost Palindrome)
            "abccdba"
            /       \
        "abccba"  "abcdba"
        
Example 3: (Not Almost Palindrome)
            "abcdefdba"
            /       \
      "abcdefba"  "abdefdba"

```

**Step 3: Figure out a solution without code** <br>
```
      "abccdba"
       ↑     ↑
        ↑   ↑
         ↑ ↑
        /   \
  "abccba" "abcaba"
     ↓        ↓
   Valid   Invalid
```

**Step 4: Write out our solution in code** <br>
Please check the `06.valid-palindrome-and-almost-palindrome` folder for brute force and optimal solutions
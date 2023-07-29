### Question
> Given a string, find the length of the longest substring without repeating characters

### Answer
**Step 1: Verify the constraints** <br>
- Is the substring contiguous? <br>
  > Yes, look for a substring not a subsequence

    **Example:** <br />

    | Substring  | Subsequence  |
    |------------|--------------|
    | `abc`bbd   | `abc`bb`d`   |

- Does case sensitivity matter? <br>
  > No, assume all characters in the string are lowercase

**Step 2: Write out some test cases** <br>

| Original  | Result         | Longest |
|-----------|----------------|---------|
| "abccabb" | "`abc` `cab`b" | 3       |
| "cccccc"  | "cccccc"       | 1       |
| ""        | ""             | 0       |
| "abcbda"  | "ab`cbda`"     | 4       |

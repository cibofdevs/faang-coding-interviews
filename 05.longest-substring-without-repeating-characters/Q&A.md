### Question
> Given a string, find the length of the longest substring without repeating characters

### Answer
**Step 1: Verify the constraints** <br>
- Is the substring contiguous? <br>
  > Yes, look for a substring not a subsequence

    **Example:** <br />

    | Substring                                           | Subsequence                                                                                    |
    |-----------------------------------------------------|------------------------------------------------------------------------------------------------|
    | <span style="color:orange">**<u>abc</u>**</span>bbd | <span style="color:green">**<u>abc</u>**</span>bb<span style="color:green">**<u>d</u>**</span> |

- Does case sensitivity matter? <br>
  > No, assume all characters in the string are lowercase

**Step 2: Write out some test cases** <br>

| String                                                                                    | Longest |
|-------------------------------------------------------------------------------------------|---------|
| "<span style="color:blue"><u>abc</u></span><span style="color:purple"><u>cab</u></span>b" | 3       |
| "cccccc"                                                                                  | 1       |
| ""                                                                                        | 0       |
| "ab<span style="color:blue"><u>cbda</u></span>"                                           | 4       |

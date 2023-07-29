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

**Step 3: Figure out a solution without code** <br>

```
Process 1:
"abcbdca"
 ---

Longest = 3

{
    a,
    b,
    c
}
```

```
Process 2:
"abcbdca"
  -

Longest = 3

{
    b,
    c
}
```

```
Process 3:
"abcbdca"
   -

Longest = 3

{
    c,
    b,
    d
}
```

```
Process 4:
"abcbdca"
    -

Longest = 4

{
    b,
    d,
    c,
    a
}
```

**Step 4: Write out our solution in code** <br>
Please check the `05.longest-substring-without-repeating-characters` folder for brute force and optimal solutions
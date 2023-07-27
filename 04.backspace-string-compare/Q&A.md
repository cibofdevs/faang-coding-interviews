### Question
> Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as backspace.

### Answer
**Step 1: Verify the constraints** <br>
- What happens when two #'s appears beside each other? <br>
  > Delete the two values before the first #
  
    **Example:** `"ab##"` -> `""`


- What happens to # when there is no character to remove?
  > It deletes nothing then, just like backspace would
  
    **Example:** `"a###b"` -> `"b"`


- Are two empty strings equal each other ?
  > Yes, consider two empty strings as equal

  **Example:** S: `"x#y#z#"`, T: `"a#"` -> Match


- Does case sensitivity matter ?
  > Yes, it does, "a" does not equal "A"

**Step 2: Write out some test cases** <br>


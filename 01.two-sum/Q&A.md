### Question
> Given an array of integers, return the indices of the two numbers that add up to a given target.

### Answer

**Step 1: Verify the constraints** <br>
- Are all the numbers positive or can be there be negatives? <br>
    > All numbers are positive
- Are there duplicate numbers in the array?
    > No, there are no duplicates
- Will there always be a solution available?
  > No, there may not  always be a solution
- What do we return if there's no solution?
  > Just return null
- Can there be multiple pairs that add up to the target?
  > No, only 1 pair of numbers will add up to the target

**Step 2: Write out some test cases** <br>
Array of integers: `[1, 3, 7, 9, 2]` <br>
Target: `11` <br>
Return: `[3, 4]`

---

Array of integers: `[1, 3, 7, 9, 2]` <br>
Target: `25` <br>
Return: `null`

---

Array of integers: `[]` <br>
Target: `1` <br>
Return: `null`

---

Array of integers: `[5]` <br>
Target: `5` <br>
Return: `null`

---

Array of integers: `[1, 6]` <br>
Target: `7` <br>
Return: `[0, 1]`

**Step 3: Figure out a solution without code** <br>
> We can solve using two pointer techniques

`nums = [1, 3, 7, 9, 2]` <br>
`t = 11`

`p1 = 9` <br>
`p2 = 2`

Formula: `numberToFind = target - nums[p1]` <br>
Result: `2 = 11 - 9`

`result = 2` equal to `p2 = 2`, and return `[p1, p2] => [3, 4]`

**Step 4: Write out our solution in code** <br>
Please check the `01.two-sum` folder for brute force and optimal solutions

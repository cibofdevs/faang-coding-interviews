### Question
> Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.

![Trapping Rainwater](trapping-rainwater.jpg)

### Answer

**Step 1: Verify the constraints** <br>
- Do the left and right sides of the graph count as walls? <br>
  > No, the sides are not walls
- Will there be negative integers? <br>
  > No, assume all integers are positive

**Step 2: Write out some test cases** <br>

```
[0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2] => 8
[] => 0
[3] => 0
[3, 4, 3] => 0
```

**Step 3: Figure out a solution without code** <br>


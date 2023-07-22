### Questions

> You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

![Container With Most Water](container-with-most-water.jpg)

### Answer

**Step 1: Verify the constraints** <br>
- Does the thickness of the lines affect the area ? <br>
  > No, assume they take up no space
- Do the left and right sides of the graph count as walls ? <br>
  > No, the sides cannot be used to form a container
- Does a higher line inside our container affect our area ? <br>
  > No, lines inside our container don't affect the area

**Step 2: Write out some test cases** <br>
Array of integers: `[7, 1, 2, 3, 9]` <br>
The Greatest Container: `7 and 9`

> The `length` is going to be from the smallest of these two elements, So here length will be `7`.

> The `width`, Which is the distance between these two elements, by subtracting the indices, `4 - 0 = 4.`

Result: `7 x 4 = 28`

---

Array of integers: `[]` <br>
Result: `0`

---

Array of integers: `[7]` <br>
Result: `0`

---

Array of integers: `[6, 9, 3, 4, 5, 8]` <br>
The Greatest Container: `9 and 8`

> The `length` is going to be from the smallest of these two elements, So here length will be `8`.

> The `width`, Which is the distance between these two elements, by subtracting the indices, `5 - 1 = 4.`

Result: `8 x 4 = 32`

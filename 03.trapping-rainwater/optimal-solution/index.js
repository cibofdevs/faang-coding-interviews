const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */

const getTrappedRainwater = function(heights) {

  let left = 0, right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;
  
  while(left < right) {
    if(heights[left] <= heights[right]) {
      if(heights[left] >= maxLeft) { 
        maxLeft = heights[left]
      } else { 
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if(heights[right] >= maxRight) {
          maxRight = heights[right];
      } else {
          totalWater += maxRight - heights[right];
      }
        
      right--;
    }
  }

  return totalWater;
}


console.log(getTrappedRainwater(elevationArray));
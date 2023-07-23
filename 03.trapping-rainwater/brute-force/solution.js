const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

const getTrappedRainwater = function (heights) {
  let totalWater = 0;
  
  for (let p = 0; p < heights.length; p++) {
    console.log(`Looping ke-${p+1}`)
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;
    
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      console.log({maxLeft});
      leftP--;
    }
    
    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      console.log({maxRight});
      rightP++;
    }
    
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    console.log({currentWater})
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
    console.log({totalWater})
  }
  
  return totalWater;
}

console.log(getTrappedRainwater(elevationArray));

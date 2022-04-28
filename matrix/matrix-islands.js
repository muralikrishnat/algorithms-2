console.clear();

var numIslands = function(grid) {
    let landMap = {}, landArea = new Map();
    var getCellVal = (r, c, grid) => {
      return grid[r][c];
    };
    var checkNearByLand = (grid, rowIndex, colIndex, row) => {
        let nearByLandIndex = null;
         // check top
         if (rowIndex - 1 >= 0) {
           let rCheck = rowIndex - 1, cCheck = colIndex;
           let cVal = getCellVal(rCheck, cCheck, grid);
           if (cVal == 1) {
             let isLand = landMap['R' + rCheck + 'C' + cCheck];
             if (isLand) {
               nearByLandIndex = isLand.landIndex;
             }
           }
         }
        // check bottom
        if (rowIndex + 1 < grid.length) {
           let rCheck = rowIndex + 1, cCheck = colIndex;
           let cVal = getCellVal(rCheck, cCheck, grid);
           if (cVal == 1) {
             let isLand = landMap['R' + rCheck + 'C' + cCheck];
             if (isLand) {
               nearByLandIndex = isLand.landIndex;
             }
           }
         }
         // check left
         if (colIndex - 1 >= 0) {
           let rCheck = rowIndex, cCheck = colIndex - 1;
           let cVal = getCellVal(rCheck, cCheck, grid);
           if (cVal == 1) {
             let isLand = landMap['R' + rCheck + 'C' + cCheck];
             if (isLand) {
               nearByLandIndex = isLand.landIndex;
             }
           }
         }
        // check right
         if (colIndex < row.length) {
           let rCheck = rowIndex, cCheck = colIndex + 1;
           let cVal = getCellVal(rCheck, cCheck, grid);
           if (cVal == 1) {
             let isLand = landMap['R' + rCheck + 'C' + cCheck];
             if (isLand) {
               nearByLandIndex = isLand.landIndex;
             }
           }
         }
        return nearByLandIndex;
    }
    var setNearByLandMarks = (grid, rowIndex, colIndex, row, landIndex) => {
      console.count('set near by land');
       // set left
      if (colIndex - 1 >= 0) {
        let rCheck = rowIndex, cCheck = colIndex - 1;
        let cVal = getCellVal(rCheck, cCheck, grid);
        if (cVal == 1 && !landMap['R' + rCheck + 'C' + cCheck]) {
          landMap['R' + rCheck + 'C' + cCheck] = { landIndex };
          if (landArea.has(landIndex)){
            landArea.set(landIndex, landArea.get(landIndex) + 1);
          }
          setNearByLandMarks(grid, rCheck, cCheck, row, landIndex);
          
        }
      }
      // set right
      if (colIndex + 1 < row.length) {
        let rCheck = rowIndex, cCheck = colIndex + 1;
        let cVal = getCellVal(rCheck, cCheck, grid);
        if (cVal == 1 && !landMap['R' + rCheck + 'C' + cCheck]) {
          landMap['R' + rCheck + 'C' + cCheck] = { landIndex };
          if (landArea.has(landIndex)){
            landArea.set(landIndex, landArea.get(landIndex) + 1);
          }
          setNearByLandMarks(grid, rCheck, cCheck, row, landIndex);
        }
      }
      // set top
      if (rowIndex - 1 >= 0) {
        let rCheck = rowIndex - 1, cCheck = colIndex;
        let cVal = getCellVal(rCheck, cCheck, grid);
        if (cVal == 1 && !landMap['R' + rCheck + 'C' + cCheck]) {
          landMap['R' + rCheck + 'C' + cCheck] = { landIndex };
          if (landArea.has(landIndex)){
            landArea.set(landIndex, landArea.get(landIndex) + 1);
          }
          setNearByLandMarks(grid, rCheck, cCheck, row, landIndex);
        }
      }
      // set bottom
      if (rowIndex + 1 < grid.length) {
        let rCheck = rowIndex + 1, cCheck = colIndex;
        let cVal = getCellVal(rCheck, cCheck, grid);
        if (cVal == 1 && !landMap['R' + rCheck + 'C' + cCheck]) {
          landMap['R' + rCheck + 'C' + cCheck] = { landIndex };
          if (landArea.has(landIndex)){
            landArea.set(landIndex, landArea.get(landIndex) + 1);
          }
          setNearByLandMarks(grid, rCheck, cCheck, row, landIndex);
        }
      }
    };
    let landCount = 0;
    grid.forEach((row, rowIndex) => {
       row.forEach((col, colIndex) => {
          let cellVal = grid[rowIndex][colIndex];
           if (cellVal == 1){
             if (!landMap['R' + rowIndex + 'C' + colIndex]) {
               let nearByLandIndex = checkNearByLand(grid, rowIndex, colIndex, row);
               if (nearByLandIndex) {
                 landMap['R' + rowIndex + 'C' + colIndex] = {
                   landIndex: nearByLandIndex
                 };
               } else {
                 landMap['R' + rowIndex + 'C' + colIndex] = {
                   landIndex: 'R' + rowIndex + 'C' + colIndex
                 };
                 landArea.set('R' + rowIndex + 'C' + colIndex, 1);
                 setNearByLandMarks(grid, rowIndex, colIndex, row, 'R' + rowIndex + 'C' + colIndex);
                 landCount += 1;
               }
              }
           }
       });
    });
  console.log('landArea', landArea);
    return landArea.size === 0 ? 0 : Math.max(...landArea.values());
};

var grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
// grid2 = [
//   ["1","0","1","1","1"],
//   ["1","0","0","0","1"],
//   ["1","1","1","0","1"]
// ];
// grid2 = [[0,0,0,0,0,0,0,0]];
console.log(numIslands(grid2));

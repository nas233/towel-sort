
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const newAr = [];

  if (!matrix || matrix.length === 0) {
    return newAr;
  }

  matrix.forEach((row, index) => {
    if (index % 2 === 0) {

      newAr.push(...row);
    } else {

      newAr.push(...row.reverse());
    }
  });

  return newAr;
}

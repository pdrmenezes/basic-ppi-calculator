export function calculatePPI(
  width: number,
  height: number,
  diagnoalSizeInInches: number
) {
  const diagonalPixels = Math.sqrt(width ** 2 + height ** 2);
  const ppi = diagonalPixels / diagnoalSizeInInches;

  return ppi.toFixed(2);
}

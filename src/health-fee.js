export default (gross) => {
  let part1 = 0;
  let part2 = 0;

  if (gross < 5804) {
    part1 = gross;
  }
  if (gross > 5804) {
    part1 = 5804;
    part2 = gross - 5804;
  }
  return Math.round((part1 * 0.031) + (part2 * 0.05));
};

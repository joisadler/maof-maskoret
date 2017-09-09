import calculateProvidentFund from './provident-fund';

export default (gross, creditPoints, baseSalary) => {
  const providentFund = calculateProvidentFund(baseSalary);
  const providentFundCredit = (providentFund * 0.35);
  const creditPoint = 215;

  let part1 = 0;
  let part2 = 0;
  let part3 = 0;
  let part4 = 0;

  if (gross < 6221) {
    part1 = gross;
  }
  if (gross >= 6221 && gross < 8921) {
    part1 = 6221;
    part2 = gross - 6221;
  }
  if (gross >= 8921 && gross < 14321) {
    part1 = 6221;
    part2 = 8921 - 6221;
    part3 = gross - 8921;
  }
  if (gross >= 14321 && gross < 19901) {
    part1 = 6221;
    part2 = 8921 - 6221;
    part3 = 14321 - 8921;
    part4 = gross - 14321;
  }
  return Math.round(((part1 * 0.1)
  + (part2 * 0.14)
  + (part3 * 0.2)
  + (part4 * 0.31))
  - (creditPoint * creditPoints)
  - providentFundCredit);
};

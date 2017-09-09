import calculateIncomeTax from './income-tax';
import calculateSocialSecurity from './social-security';
import calculateHealthFee from './health-fee';
import calculateProvidentFund from './provident-fund';

export default (gross, creditPoints, baseSalary) =>
  calculateIncomeTax(gross, creditPoints, baseSalary)
  + calculateSocialSecurity(gross)
  + calculateHealthFee(gross)
  + calculateProvidentFund(baseSalary);

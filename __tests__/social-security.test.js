import calculateSocialSecurity from '../src/social-security';

const gross = 12856;

test('Social security value must be correct', () => {
  expect(calculateSocialSecurity(gross)).toEqual(517);
});

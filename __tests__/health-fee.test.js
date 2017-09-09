import calculateHealthFee from '../src/health-fee';

const gross = 12856;

test('Health fee value must be correct', () => {
  expect(calculateHealthFee(gross)).toEqual(533);
});

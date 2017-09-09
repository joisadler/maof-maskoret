import shalom from '../dist/shalom';

test('shalom', () => {
  expect(shalom()).toEqual('Shalom, World!');
});

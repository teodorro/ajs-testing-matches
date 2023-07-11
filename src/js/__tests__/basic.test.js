import sortHealths from '../basic';

test('should sort', () => {
  const items = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  sortHealths(items);

  expect(items).toEqual(expected);
});

test('should process null arg', () => {
  const items = null;
  const expected = null;
  sortHealths(items);
  expect(items).toEqual(expected);
});

test('should throw wrong health type', () => {
  const items = [
    { name: 'мечник', health: 'asd' },
    { name: 'маг', health: null },
    { name: 'лучник', health: 80 },
  ];
  expect(() => sortHealths(items)).toThrow();
});

test('should throw wrong type', () => {
  const items = [
    { name: 'мечник', health: 123 },
    { name: 'asdf' },
    null,
  ];

  expect(() => sortHealths(items)).toThrow('illegal argument');
});

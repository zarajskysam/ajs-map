import ErrorRepository from '../app';

test('ErroeRepositoru correct', () => {
  const obj = new ErrorRepository();
  obj.errors.set(10, 'Ошибонька');
  obj.errors.set(11, 'Ошибочка');
  obj.errors.set(12, 'Не правильно введено имя');
  const expected = 'Не правильно введено имя';
  const received = obj.translate(12);
  expect(received).toEqual(expected);
});

test('ErroeRepositoru correct', () => {
  const obj = new ErrorRepository();
  obj.errors.set(10, 'Ошибонька');
  obj.errors.set(11, 'Ошибочка');
  obj.errors.set(12, 'Не правильно введено имя');
  const expected = 'Unknown error';
  const received = obj.translate(12545);
  expect(received).toEqual(expected);
});

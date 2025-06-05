const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Vasya', () => {
    expect(values.firstName).toEqual('Vasya');
  });
  test('lastName is Pupkin', () => {
    expect(values.lastName).toEqual('Pupkin');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2014', () => {
    expect(values.birthYear).toEqual(2014);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Vasya Pupkin and I am 11 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Vasya Pupkin', () => {
    expect(values.fullName).toEqual('Vasya Pupkin');
  });
  test('age is 11', () => {
    expect(values.age).toEqual(11);
  });
});

import { jest } from '@jest/globals';
import discharge from '../../src/services/discharge';

let date;

beforeEach(() => {
    date = new Date('2024-05-14T08:59:12');
    jest.useFakeTimers().setSystemTime(date);
});

it('ก่อน 9:00 discharge ไม่ได้', () => {
    const expectedResult = false;

    const actualResult = discharge();

    expect(actualResult).toEqual(expectedResult);
});

it('9:00 discharge ได้', () => {
    date = new Date('2024-05-14T09:00:12');
    jest.useFakeTimers().setSystemTime(date);
    const expectedResult = true;

    const actualResult = discharge();

    expect(actualResult).toEqual(expectedResult);
});

it('22:00 discharge ได้', () => {
    date = new Date('2024-05-14T21:59:59');
    jest.useFakeTimers().setSystemTime(date);
    const expectedResult = true;

    const actualResult = discharge();

    expect(actualResult).toEqual(expectedResult);
});

it('หลัง 22:00 discharge ไม่ได้', () => {
    date = new Date('2024-05-14T22:00:00');
    jest.useFakeTimers().setSystemTime(date);
    const expectedResult = false;

    const actualResult = discharge();

    expect(actualResult).toEqual(expectedResult);
});



it('set time', () => {
  expect(new Date()).toEqual(date);
  expect(new Date().getMonth()).toEqual(4);
});

it('ดูเวลาปัจจุบัน', () => {
    jest.useRealTimers();
    const date = new Date('2024-05-14T12:12:12');

    expect(new Date().getMonth()).not.toEqual(date.getMonth());
    expect(new Date()).not.toEqual(date);
});

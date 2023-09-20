import { test } from 'node:test';
import assert from 'node:assert';
import { calculateWage, randomToDice, diceGame } from './index.js';
// node --test --watch index.test.js
// test('일당 계산기', () => {
//   const dayTime = new Date(2023, 8, 19, 13, 12, 11);
//   assert.strictEqual(
//     calculateWage(1, dayTime),
//     9620,
//     '1시간 최저는 9620원이다'
//   );
//   const nightTime = new Date(2023, 8, 19, 23, 35, 15);
//   assert.strictEqual(
//     calculateWage(1, nightTime),
//     9620 * 1.5,
//     '야간 수당은 1.5배 언제 지키나'
//   );
//   const weekendNight = new Date(2023, 8, 23, 23, 35, 15);
//   assert.strictEqual(
//     calculateWage(1, weekendNight),
//     9620 * 1.5 * 1.5,
//     '주말 야간수당'
//   );
// });

test('주사위 함수', () => {
  const num = randomToDice();
  assert.strictEqual(1 <= num && num <= 6, true, '범위');
  const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const pre = 1000;
  for (let i = 0; i < pre * 6; i++) {
    const t = randomToDice(() => 1 / (pre * 6));
    result[t] = result[t] + 1;
  }

  assert.strictEqual(result[1], pre, '1');
  assert.strictEqual(result[2], pre, '2');
  assert.strictEqual(result[3], pre, '3');
  assert.strictEqual(result[4], pre, '4');
  assert.strictEqual(result[5], pre, '5');
  assert.strictEqual(result[6], pre, '6');
});

test('주사위 게임', () => {
  assert.strictEqual(
    diceGame('홀', 100, () => 4),
    0,
    '게임 지면 0원'
  );
  assert.strictEqual(
    diceGame('홀', 100, () => 1),
    200,
    '게임 이기면 2배'
  );
});

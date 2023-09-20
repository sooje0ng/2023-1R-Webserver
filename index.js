export const randomToDice = (randomGen = Math.random) => {
  return Math.ceil(randomGen() * 6 + 0.00001);
};

export const diceGame = (user, bet, dice = randomToDice()) => {
  if (dice % 2 === 0 && user === '짝') {
    return bet * 2;
  } else if (dice % 2 === 1 && user === '홀') {
    return bet * 2;
  } else return 0;
};

export const calculateWage = (hour, today) => {
  if (today.getDay() >= 5) {
    return hour * 9620 * 1.5;
  } // 주말 수당
  if (today.getHours() >= 22) {
    return hour * 9620 * 1.5;
  } // 야간 수당
  if (today.getDay() >= 5 && today.getHours() >= 22) {
    return hour * 9620 * 1.5 * 1.5;
  } // 주말 + 야간 수당
  return hour * 9620;
};

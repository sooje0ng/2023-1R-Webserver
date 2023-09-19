function add(p1, p2, p3 = '') {
  if (p1 instanceof Array) {
    return p1.reduce((prev, cur) => prev + cur);
  } else if (isNaN(Number(p1)) || isNaN(Number(p2)) || isNaN(Number(p3))) {
    return p1 + p2 + p3;
  } else return Number(p1) + Number(p2) + Number(p3);
}

console.log(`TEST: add(3 + 5) == 8 | ${add(3, 5) === 8}`);
console.log(`TEST: add(8 + 9) == 17 | ${add(8, 9) === 17}`);
console.log(`TEST: add("3" + 5) == 8 | ${add('3', 5) === 8}`);
console.log(`TEST: add(3.1 + 4.9) == 8 | ${add(3.1, 4.9) === 8}`);
console.log(`TEST: add(2.21 + 3.78) == 5.99 | ${add(2.21, 3.78) === 5.99}`);
console.log(
  `TEST: add("대한" + "민국") == "대한민국" | ${
    add('대한', '민국') === '대한민국'
  }`
);
console.log(`TEST: add("3" + "5") == 8 | ${add('3', '5') === 8}`);
console.log(`TEST: add(1,2,3) == 6 | ${add(1, 2, 3) === 6}`);
console.log(`TEST: add([1,11,7]) == 19 | ${add([1, 11, 7]) === 19}`);

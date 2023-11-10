/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 * ======> 숫자가 될 수 있는 값이라면 +, -를 붙였을 때 타입이 숫자가 돼. 
 */

let sample = '99';

console.log(sample);
console.log(typeof sample);

console.log(+sample);
console.log(typeof +sample);

console.log(-sample);               //얘는 음수로 바뀌지. 
console.log(typeof -sample);

console.log("----------------------------------------------------------------");

/**
 * 비교연산자
 * 
 * 1. 값의 비교         ==
 * 2. 값과 타입의 비교  ===
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
// 전부 다 트루가 나왔어.


console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
//타입까지 비교하니까 전부 다 false가 나왔어. 실무에서는 그냥 ===를 쓰는걸로.

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true이면 우측 값 반환
 * &&를 사용했을 때 좌측이 false이면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true이면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false이면 우측 값 반환
 */

console.log("------------------------------------------------------------------");
console.log(true && '아이브');
console.log(false && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');
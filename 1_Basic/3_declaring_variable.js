/**
 * Variable 선언하기
 * 
 * 1. var : 더이상 쓰지 않아
 * 2. let
 * 3. const 
 */

var name = '코드팩토리';
console.log(name);

var age = 32;

let ive = '아이브';
console.log(ive);

/**
 * let 과 var로 선언하면 
 * 값을 추후 변경할 수 있다. 
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';  const는 값을 변경할 수 없어. 

/** 
 * 선언과 할당
 * 
 * 1. 변수를 선언하는것
 * 2, 할당
*/
var name = '코드팩토리';
console.log(name);

let girlFriend;
console.log(girlFriend);

// const girlFriend2;      값을 초기화를 해주고 써야돼 const는. 나중에 값을 바꿀 수 없기 때문에. const girlFriend2 = '여자친구2'; 처럼 값을 할당해줘야. 
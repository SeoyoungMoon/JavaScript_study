/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다. 
 * 
 * 자바스크립트의 타입을 구성하는 가장 작은 단위
 * 1. Number (숫자)
 * 2. String (문자열)
 * 3. boolean (참과 거짓)
 * 4. undefined
 * 5. null
 * 6. Symbol
 * 
 * 7. Object (객체)
 *      Function
 *      Array
 *      Object
 */

//Number 타입
const age = 32;
const pi = 3.14;

console.log(typeof age);

console.log('---------------------------------');

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);

//String 타입
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1. new Line -> \n
 * 2. tab -> \t
 * 3. 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다. 
 */
const iveYujin = '아이브\n안유진';
console.log(iveYujin);

const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

const backSlash = '아이브\\코드팩토리';
console.log(backSlash);

const smallQutoation = '아이브\'코드팩토리';        //따옴표를 문자로 쓰려면 앞에 이렇게 백슬래쉬를 해줘야돼. 
console.log(smallQutoation); 

const iveWonYoung2 = `아이브 '" ////            //백틱을 쓰면 이렇게 쓴 그대로 다 출력
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';

console.log("------------------------------------------------------");

/**
 * Map
 * 키:벨류 의 쌍으로 이루어져있다. 
 * key : value
 */

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    blue : '파랑색', 
};

console.log(dictionary);
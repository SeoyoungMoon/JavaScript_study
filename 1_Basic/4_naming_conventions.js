/**
 * Naming Conventions
 * 
 * 변수이름 지을 때
 * 1. 일반적으로 영어를 사용하며 문자와 숫자를 모두 사용할 수 있다. 
 * 2. 특수기호는 언더스코어_와 달러$만 사용할 수 있따. 
 * 3. 숫자로 이름을 시작할 수 없다. 
 *      1Name, 2Hello
 * 4. 키워드는 변수명으로 사용할 수 없다. 
 *      var const = 'var';   --> 안됨
 */

let codeFactory = '코드팩토리';
var $ive = '아이브';
const _yujin = '안유진';

console.log(codeFactory);
console.log($ive);
console.log(_yujin);

// let 1name = 'no';        //변수는 숫자로 시작할 수 없다
// let const = 'attention'; //키워드도 안됨

/**
 * Naming Conventions 2
 * 
 * 1. camelCase -> 대부분의 언어에서 많이 사용
 * 2. snake_case -> 파이썬같은 언어에서 사용
 * 3. PascalCase -> c# 마이크로 소프트 개발의 언어에서 사용
 */

window.onscroll = scrolling;
/**
 * 타입 변환
 * Type Conversion
 * 
 * 1. 명시적
 * 2. 암묵적
 */

let age = 32;
console.log(typeof age, age);

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//암묵적
let test = age + '';
console.log(typeof test, test);

//얘네들은 기능적으로 된다는거지 실제 사용을 하진 않아. 
console.log('98' + 2);      //이건 그대로 string으로 출력이 돼. 
console.log('98' * 2);
console.log('98' - 2);
console.log('98' + '2'); 
console.log(98 * 2);
console.log('98' - 2);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

//boolean타입으로 변환
console.log('x');       //이건 그냥 스트링이잖아
console.log(!'x');      //스트링안에 값이 들어있으면 그건 일단 true. 근데 그걸 !했으니까 false
console.log(!!'x');     //그래서 이건 true
console.log(!!'xdfsdfgsdgfsgsdfsdf');  

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log(!!'');
console.log(!!0);
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});      //object는 무조건 true.
console.log(!![]);      //array는 무조건 true.

/**
 * 1. 아무 글자도 없는 string
 * 2. 값이 없는 경우
 * 3. 0
 * 
 * 모두 false를 반환한다. 
 */
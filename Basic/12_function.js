/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고 싶다면
 * 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D : Don't
 * R : Repeat
 * Y : Yourself
 */

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

calculate();        //이렇게 호출을 해야 만든 함수가 실행되지. 밑에 새로 호출해서 얘는 이제 안돼. 

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());      //숫자 대신 number라는 변수를 넣어줬어 이걸 파라미터라고 해.
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다. 
 * 
 * 실제 입력하는 값은 argument라고 한다.  
 */

calculate(4);
calculate(5);

function multiply(x, y){
    console.log(x * y);
}
multiply(2, 7);

function multiply(x, y = 1000){       //y값만 초기화를 해줬어. 
    console.log(x * y);
}
multiply(2);
multiply(2, 9);         //y값은 원래 초기화를 해줘서 1000이지만 새로 세팅되어서 9가 덮어씌워졌어. 

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y){        //결과를 외부에서 받아볼 수 있게 하는거야. 콘솔 찍어서 나혼자 보는게 아니라. 
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow함수
 */

const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x : ${x} y : ${y} z: ${z}` ;
console.log(multiply5(2)(5)(7));

function multiply6(x){      
    return function(y){
        return function(z){
            return `x : ${x} y : ${y} z: ${z}`
        }
    };
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = (x, y) => {
    return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = (x, y, z) => {
    return x * y * z;
}
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments){     //무한하게 파라미터를 받을 수 있어.
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

//함수 즉시 실행하는 방법
(function(x, y){                
    console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);        //"multiply"라는 함수가 object인지 묻는거. 
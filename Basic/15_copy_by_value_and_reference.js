/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value다. 
 * 2. 객체는 copy by reference다. 
 */

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

clone += '안유진입니다.';
console.log('-----------------------------------');
console.log(original);
console.log(clone);         //이렇게 값을 그대로 가져오는 경우가 1번. 

let originalObj = {
    name : '안유진',
    group : '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-----------------------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);          //같대.
console.log(original === clone);                //다르대. 

originalObj = {
    name : '최지호',
    group : '코드팩토리',
};
cloneObj = {
    name : '최지호',
    group : '코드팩토리',
};
console.log(originalObj === cloneObj);          //object는 안에 값이 같다고 해서 같은 object가 아니야. 

/**
 * copy by value : 복사할 대상을 새롭게 만든 변수에 그 값 자체를 할당. 
 *               : 그래서 A는 바뀌어도 B는 안바뀌어. 
 * copy by reference : 가리키고 있는 공간을 복사한거야. 그래서 실제 객체가 바뀐 순간 가리키고 있는 애들도 바뀌게 돼. 
 *                   : 새롭게 만든 변수에 복사할 대상이 참조하고 있는 메모리의 주소값을 할당. 
 *                   : 그래서 A가 바뀌면 B도 바뀌지.
 * 
 * !!자바스크립트에서 객체는 값이 아닌 참조로 할당이 돼~!
 */

console.log('-----------------------------------');

// yuJin1이랑 yuJin3은 값은 똑같지만 다른 애들이야. 당연하지
const yuJin1 = {
    name : '안유진',
    group : '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name : '안유진',
    group : '아이브',   
}

console.log(yuJin1 === yuJin2);         //true
console.log(yuJin1 === yuJin3);         //false
console.log(yuJin2 === yuJin3);         //false

console.log('-----------------------------------');

/**
 * Spread Operator      : 순서가 중요!!
*/
const yuJin4 = {                    //object를 새로 선언. copy by value로. 
    ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin3);
console.log(yuJin3 === yuJin4); 

console.log('-----------------------------------');

const yuJin5 = {
    year : 2003, 
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name : '코드팩토리', 
    ...yuJin3,
};
console.log('yuJin6확인!!! ' + yuJin6);            // 이름이 안바뀌었어. 

const yuJin7 = {
    ...yuJin3,
    name : '코드팩토리', 
};
console.log(yuJin7);            // 순서를 바꿔주니까 바뀌었어. 그래서 순서가 중요해!

    /**
     * spread Operator를 왜 쓸까? 
     * 자바스크립트에서 객체는 값이 아닌 참조로 할당이 된단말이야?
     */

    const arr1 = [1, 2, 3];
    const arr2 = arr1;

    console.log(arr1);
    console.log(arr2);

    arr1.push(4);

    console.log(arr1);
    console.log(arr2);
    console.log('-----------------------------------------------------------------------------')
    /**
     * 이렇게 하면 arr1에 값4를 넣어도 arr2에도 들어가게 되잖아 참조 방식이니까
     * 근데 이걸 spread Operator로 하게되면 달라. 
     */

    const arr3 = [1, 2, 3];
    const arr4 = [...arr3];

    console.log(arr3);
    console.log(arr4);

    arr3.push(4);

    console.log(arr3);      //여기에만 값이 추가되고 
    console.log(arr4);      //여긴 아니야. 왜냐하면 메모리의 다른 위치에 존재하는 다른 배열이기 때문이지. 그래서 하나의 배열에 변화를 준다해도 다른 배열에 영향x. 

    console.log('-----------------------------------');

const numbers = [1, 3, 5];
const numbers2 = [
    10, 
    ...numbers,
    // 10,
];
console.log(numbers2);      // 추가는 상관없이 되는데 값을 바꿀땐 순서가 중요하네. 
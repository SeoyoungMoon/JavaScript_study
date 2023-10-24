/**
 * Loops
 * 
 * 1. for
 * 2. while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

for (let i = 0; i < 5; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//*을 이용하여 정사각형 만들기

let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

/**
 * for...in         ===> index를 가져오고 싶을때 사용!
*/

const yujin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for (let key in yujin) {
    console.log('yujin key를 출력해보겠다 : ' + key);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (let key in iveMembersArray) {
    // console.log('iveMembersArray key를 출력해보겠다 : ' + key);  //이렇게 써도 되지만 밑에처럼 쓰는게 좋을거같아!!
    console.log(`iveMembersArray key를 출력해보겠다 : ${key}`);
    console.log(`${key}:${iveMembersArray[key]}`);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

/**
 * for...of         ===> array에서 사용!
*/
for (let value of iveMembersArray) {          //of는 값을 가져와! 
    console.log(value);
}

for (let value in iveMembersArray) {          //in은 index를 가져와!
    console.log(value);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

/**
 * while
*/
let number = 0;

while (number < 10) {
    number++;
}

console.log(number);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

/**
 * break
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;                          //break가 걸린곳에서부턴 더이상 돌지 않고 루프를 빠져나와.
    }
    console.log(i);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

number = 0;

while (number < 10) {
    if (number === 5) {
        break;
    }

    number++;
    console.log(number);
}

/**
 * continue
*/
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
/**
 * array functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

// push()   -> 가장 마지막 자리에 추가
console.log(iveMembers.push('코드팩토리'));     // 푸시한거의 길이를 찍어보니 7이 나와
console.log(iveMembers);

console.log('--------------------------------------');

// pop()   -> 가장 마지막 자리값을 제거
console.log(iveMembers.pop());          //마지막 값을 삭제, 반환
console.log(iveMembers);

console.log('--------------------------------------');

// shift()    -> 첫번째 자리 값을 제거
console.log(iveMembers.shift());          //첫번째 값을 삭제, 반환
console.log(iveMembers);

console.log('--------------------------------------');

// unshift()    -> 첫번째 자리에 추가   (push와 기능은 같아)
console.log(iveMembers.unshift('안유진'));          //첫번째 자리에 값을 넣고 반환
console.log(iveMembers);

console.log('--------------------------------------');

// splice()    -> (시작할 인덱스의 위치, 원하는 개수)를 잘라내기
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

console.log('--------------------------------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

// 여기까지는 실무에서 잘 쓰지는 않지만 알고있어야 할 것들. 
// 이제부터가 실무에서 자주 쓰이는 array 함수

console.log('------------------ 실무에서 자주쓰이는 array 함수 시작! --------------------');

// concat()     -> push에 원래 array가 변경 안되는 버전. 
console.log(iveMembers.concat('코드팩토리'));       //새로운 array 공간에 저장되는거라서 실제 iveMembers라는 배열에는 영향x.
console.log(iveMembers);

console.log('--------------------------------------');

// slice()    -> splice에 원래 array가 변경 안되는 버전이라고 생각하면 돼. 
console.log(iveMembers.slice(0, 3));    //몇번 인덱스부터 몇번 인덱스까지 삭제할지. 3이라고 쓰면 3번인덱스 앞까지 삭제고 3번인덱스는 삭제x.
console.log(iveMembers);

console.log('--------------------------------------');

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

console.log('--------------------------------------');

let iveMembers3 = [
    iveMembers,     // 리스트의 0번째 인덱스값이 리스트인거. 
];
console.log(iveMembers3);
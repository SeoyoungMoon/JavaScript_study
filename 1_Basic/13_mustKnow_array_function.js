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

console.log('--------------------------------------');

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);        //이건 true야

console.log([                                   //이건 false야
    ...iveMembers,
] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() : 오름차순
iveMembers.sort();
console.log(iveMembers);

iveMembers.reverse();
console.log(iveMembers);

let numbers = [
    1,
    9,
    7,
    5,
    3,
]
console.log(numbers);

console.log("_____________________________________________________");
/**
 * a, b를 비교했을 때 
 * 1. a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환.
 * 2. a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환.
 * 3. 원래 순서를 그대로 두려면 0을 반환. 
*/

numbers.sort((a, b)=>{
    return a > b ? 1 : 0;
})
console.log(numbers);

numbers.sort((a, b)=>{      //내림차순
    return a > b ? -1 : 1;
})
console.log(numbers);

numbers.sort((a, b)=>{      //오름차순
    return a > b ? 1 : -1;
})
console.log(numbers);

console.log('--------------------------------------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));     //이거 백틱이야!

console.log(iveMembers.map((x) => {
    if(x ===  '안유진'){
        return `아이브: ${x}`;      //안유진일때에만 앞에 아이브를 붙이고
    } else {
        return x;                   //나머지는 그대로 리턴. 
    }
}));

console.log(iveMembers);            //근데 해보면 iveMembers는 그대로 나와. 원래의 array는 건드리지 않고 새로운 array를 반환. 

//filter()  : map이랑 똑같아. 모든값을 순회하면서 x에 값을 넣어줘. //해당되는 모든 값을 찾아. 
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => x % 2 === 0));        //해당되는 모든 값을 찾아. 

//find()    : 처음부터 찾다가 해당되는 첫번째 값만 반환.
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()    : 값의 인덱스를 반환.
console.log(numbers.findIndex((x) => x % 2 === 0));     //해당하는 값인 8은 인덱스의 1번째 자리에 있어서 1을 반환.

//reduce()      --> 어려워 잘 이해하고 넘어가자! 
/**
 * 여기서 p+n은 콜백함수이고, 0은 초기값이야. 
 * 순서가 p -> n -> p+n -> p -> n -> p+n -> p -> n -> p+n -> p -> n -> p+n ... 반복을 해
 * 1. 초기값인 0이 p에 입력된다. 
 * 2. numbers 어레이의 첫번째 값인 1이 n에 입력된다. 
 * 3. p+n 즉, 0+1의 결과값인 1이 반환된다. 
 * 4. 반환한 값 1이 p에 입력된다. 
 * 5. 어레이의 두번째 값인 8이 n에 입력된다. 
 * 6. p+n 즉, 1+8의 결과값인 9가 반환된다. 
 * 7. 반환한 값 9가 p에 입력된다. 
 * 8. numbers 리스트의 모든 값들을 다 순회할 때까지 반복. 
 * 9. 결국 모든 값을 다 더한 25가 반환된다. 
 */
console.log(numbers.reduce((p, n) => p + n, 0));    
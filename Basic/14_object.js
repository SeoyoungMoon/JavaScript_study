/**
 * Object / 객체
 */
// key / value 페어
let yujin = {
    name : '안유진', 
    group : '아이브',
    dance :  function(){        // 이렇게 객체를 선언하듯이 함수를 선언할수도 있어. 그게 바로 method야. //여기서 key는 dance이고 value는 함수야. 
        // return '안유진이 춤을 춥니다. ';        // 이렇게 선언하면 "안유진"이 중복되잖아 그래서 다르게 쓸거야. 
        return `${this.name}이 춤을 춥니다. `;          // ${this} : 이 함수가 정의되어 있는 객체. 
    }               
};

console.log(yujin);
console.log(yujin.name);        //결과는 안유진
console.log(yujin['name']);     //결과는 안유진

console.log('------------------------------------------------------------------------');

const key = 'name';

console.log(yujin[key]);
console.log(yujin.dance());

//객체를 사용할 떄 변수를 사용하는 방법
const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin2 = {
    [nameKey]: nameValue, 
    [groupKey]: groupValue,
    dance :  function(){ 
        return `${this.name}이 춤을 춥니다. `;
    }
}
console.log(yujin2);
console.log(yujin2.dance());

yujin2['group'] = '코드팩토리';             //이렇게 하니까 그룹이 바뀌었어. 
console.log(yujin2);

console.log('------------------------------------------------------------------------');

yujin2['englishName'] = 'An Yu Jin';        //존재하지 않는 key, value 값을 넣었더니 새로 프로퍼티가 생겼어. 자동으로 추가가 되는거지. 
console.log(yujin2);

delete yujin2['englishName'];               //프로퍼티 하나 삭제할 때. 
console.log(yujin2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1. const로 선언할경우 객체 자체를 변경할 수는 없다. 
 * 2. 객체안의 프로퍼티나 메서드는 변경할 수 있다. 
 */

const wonYoung = {
    name : '장원영', 
    group : '아이브',
}
console.log(wonYoung);

// wonYoung = {};              //이렇게 하면 에러가 나. 왜? 한번 초기화가 되어서 값을 바꿀 수 없기 때문에. 

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yujin3 = {
    // name : name,     이렇게 쓰지 않고 밑에처럼 그냥 써도 똑같아. 
    name,
}
console.log(yujin3);
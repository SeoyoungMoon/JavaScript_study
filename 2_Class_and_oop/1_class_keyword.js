/**
 * Class : 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한
 *         변수와 메서드(함수)를 정의하는 일종의 틀이다. 
 *       : 정보를 일반화해서 정리하는 방법이다. 
 * 
 * Class - 빵 틀
 * Instance - 빵
 */

/**
 * Class Keyword
 */
class IdolModel{
    name = '안유진';
    year =  2003;
}

//yuJin이라는 변수에 IdolModel이라는 인스턴스를 저장하고 싶을 때
//constructor - 생성자
const yuJin = new IdolModel();
console.log(yuJin);         

//--------------------------------------------------------------------------------------

class IdolSinger{
    name;       //이렇게 변수를 선언 안해주고 constructor만 써줘도 변수를 선언한것처럼 작동을 하는데 그래도 선언해주는게 좋아~
    year;
    
    constructor(name, year){
        this.name = name;       //this.name의 name은 위에서 선언한 name이고 //그 옆에 name은 파라미터로 가져오는 name이야. 
        this.year = year;
    }
}
const wonyoung = new IdolSinger();
console.log(wonyoung);      //이건 undefined라고 나와 왜? 원영이 이름과 출생연도를 안적어줘서. 

const gaeul = new IdolSinger('가을', 2002);
console.log(gaeul);

//이런식으로 IdolModel, IdolSinger라는 빵틀로 무한하게 빵을 만들수 있어 이게 바로 constructor의 장점이야. 

const liz = new IdolSinger('리즈', 2004);
console.log(liz);       //또 빵을 만들었지. 

//--------------------------------------------------------------------------------------

console.log(gaeul.name);        //얘네들을 실제로 객체처럼 사용할 수도 있지. 
console.log(liz.year);
/**
 * try...catch
 * 
 * 1. 발생시킬때 -> 던진다고 한다. (throw)
 * 2. 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 */
function runner(){

    try{

        console.log('Hello');
        
        throw new Error('큰 문제가 생겼습니다람쥐!');       //에러를 던지는 순간 함수가 정지가 돼. 그래서 밑에부턴 아예 실행조차 되지 않는거. //여기를 주석처리 해버리면 에러가 사라지는거니까 try다음 finally로 가겠지. 
        
        console.log('Code Factory');

    }catch(e){

        console.log('---여기는 catch! ---');
        console.log(e);        //에러가 뭔지 보여주는거. 
    
    }finally {      //try에서 에러가 났든 안났든 무조건 실행

        console.log('---여기는 finally! ---');

    }
}

runner();
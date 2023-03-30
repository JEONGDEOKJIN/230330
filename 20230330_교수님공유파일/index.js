// 예외 처리문

// try-catch문 코드 실행중 예외상황이 발생해도 프로그램이 종료가 되지않고.
// 프로그램을 유지할수있다.

// try-catch
// 프로그램의 안정성을 높힐수있다.

try {
    // 오류가 발생할거같은 코드

} catch (error) {
    
    // 오류가 발생했을때
    // 오류의 메시지 error
}

try {
    if(5 == 5)throw "Errdsfsdf"
    // throw 에러 메시지를 던질수있다.
} catch (error) {
    console.log(error);
}

function myStr(){
    let devValue = document.querySelector('.dev').value;
    
    try {
        if(devValue =="")throw "비었음";
        devValue = Number(devValue);
        console.log(devValue);
        // Number숫자로 타입을 변경해주는 생성자 함수
        if(isNaN(devValue)) throw "number가 아니다."
        // 문자열이 들어가면 문자가 숫자로 변환될수 없어서
        // number가 아니다.
        ㄹㄴㅇㅁㄹㄶㅈㄷㄻㄴㅇㄹㄴㅇㅁㅎㅈㄷㄻㄴㅇㄹㄴㅇㄻㄴ
        // 오류가 발생을해도 프로그램이 종료가 안된다.
    } catch (error) {
        // 코드를 실행하다 err가 발생하면 
        // catch문을 실행하고 오류의 내용은 
        // error매개변수에 들어온다.
        console.log(typeof devValue);
        console.log(devValue);
        document.querySelector(".message").innerHTML = error;
    }
    console.log('나도 실행됨? 오류떠도?')
}
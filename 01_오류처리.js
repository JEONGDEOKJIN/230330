// 📘 예외 처리 문 


// 🟦 try - catrch 문 
    // [기능]
        // 코드 실행중, 예외 상황이 발생 해도, 프로그램이 종료되지 않고, 프로그램을 유지할 수 있음.
            // 즉, '오류 발생' 되어도 > '코드는 실행' 됨.
        
    // [특징]
        // 프로그램의 '안정성' 을 높일 수 있음. 
    

    // [예문]
    // try {
    //     // 오류가 발생할 것 같은 코드

    // } catch (err) {
    //     // 오류가 발생했을 때, 
    //     // 오류의 메시지가 'error, err' 로 들어온다. 
    // }


    // try {
    //     if( 5 == 5) throw "에러났음"
    //                 // throw 로 에러메시지를 던질 수 있다. 


    // } catch (error) {
        
    // }

    function myStr() {
        let devValue = document.querySelector('.dev').value;

        try {
            if (devValue == "") throw "devvalue 값이 비어있으면 > 비었음! 이라고 던진다"
            // devValue = parseInt(devValue);
            console.log(isNaN(devValue))
            devValue = Number(devValue);
                // Number 는 '숫자로 타입을 변경' 해주는 함수 ⭐⭐⭐ 
                // number 숫자 타입으로 변경해주는 생성자 함수

            if(isNaN(devValue)) throw "number가 아님"
                // 문자열이 들어가면, 문자가 숫자료 변환될 수 없어서, number 가 아니다! 

        } catch (error) {
            console.log(typeof devValue);
            console.log(devValue);
            document.querySelector(".message").innerHTML = error;
        }
    }
        // 오류가 발생해도, 프로그램이 종료 안 된다. 
            // 오류 내용은 catch 에 잡힘. ⭐⭐⭐⭐⭐⭐ 
            // 오류의 내용은 'catch 의 error 매개변수' 에 들어온다. ⭐⭐⭐⭐⭐⭐⭐⭐ 















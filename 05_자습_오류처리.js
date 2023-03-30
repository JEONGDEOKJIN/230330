// 📘 예외 처리문 

    // '예외 처리를 한다는 건?' 
        // '오류' 가 발생했을 때, 뭔가를 해주는 것. 
        // 그러면, 구체적으로 '뭘 하는 걸까?' 
            // 1) 오류 발생했다고 메시지를 보내주고 -> throw? 
            // 2) 발생한 위치를 알려줌? 
            // 3) 오류가 발생해도, 코드가 실행되게 함. 


    // try - catch 는 뭔가 ?
        // try...catch는 성공하길 바라는 코드(try 블록)가 만약 실패하면 catch로 제어권을 넘겨야 할 때 사용합니다
            // (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)


    // 기본 문법
        try {
            // 오류가 발생할 것 같은 코드
        } catch (error) {
            // 오류가 발생했을 때, 오류 메시지가 err, 로 들어온다. 
        }
    
        
    // 예시 : 값이 비어있거나, 숫자가 아닌값이 들어오면 > '예외' 로 인식해서 처리
        function myStr() {
            
            let devValue = document.querySelector('.dev').value;

            try {
                    // 원치 않는'예외' 조건이 true면, > throw 에 작성한게, err 로 들어감.  
                    if (devValue == "") throw "값이 비어있음!" // 아! 예외가 발생했네!
                    if (isNaN(devValue)) throw "숫자가 들어와야 함! 숫자 아닌게 들어와서 > 예외 발생!"
            } catch(error) {
                console.log(error)
                document.querySelector('.message').innerHTML = error;
                // console.log(typeof devValue)
            }
        }

        // [실익]
            // 오류 내용은 catch 에 잡힘. ⭐⭐⭐⭐⭐⭐ 
            // 오류의 내용은 'catch 의 error 매개변수' 에 들어온다. ⭐⭐⭐⭐⭐⭐⭐⭐ 
            // 오류가 발생해도, 프로그램이 멈추지 않음. 
            // 원래, devValue == "" 를 만나면 -> 오류가 떠서 -> 멈춤. ❓❓❓  

        // [궁금증]
            // 그러면, '정의되지 않은 예외' 면 > 멈추는거 아냐❓❓❓❓❓ 
            // 근데, 이건 함수를 정의하기만 했는데 실행되네❓❓❓❓❓ 
            // 위치, 주소, 인거지? 


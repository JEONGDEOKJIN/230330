// 🟦 Promise 객체 

    // [쉽게 말하면]
        // Promise 객체는 뭔가를 기다렸다가 그 결과를 반환해주는 도구

        // (오류없으면) 실행이 되면 > Promise 의 첫 번째 매개변수인, resolve 함수 실행결과가 반환 
        // 오류나면 > Promise 의 두 번째 매개변수인, reject 함수 실행결과가 반환 

        // 1. 뭔가를 실행하게 함. 
        // 2. 실행을 '완료' 하면 > 그에 따라 펼쳐지는게 있고, ex) then, resolve
        // 3. 실행을 '미완료' 하면 > 그에 따라, catrch, reject 의 일이 발생한다. 


    // [기능]
        // 비동기 처리를 가능하게 해주는 객체

    // [비동기 처리 란?]
        // 코드를 실행하다가 > 오래걸릴 것 같은 녀석을 만남 
        // 1) main 실행은 계속 가고 2) sub 실행 라인을 파서, 동시에 실행하는 느낌. 
        // 지금까지 이렇게 이해하고 있는데, 추가 수정 필요 😥

    // [특징]
        // node.js 에서 많이 사용 
        // 이러한 '비동기 처리' 를 사용할 때, promise 객체를 사용


    // promise 객체 정의
    function testPromise(num) {

        return new Promise ( function(res, rej) {
            // [26 line 해석]
                // testPromise 함수는 new promise 객체를 반환하고 
                // 그걸 반환하면 function 을 실행한다.
                // 해당 function 에는 1) 성공시 res 함수를 실행 2) 실패시 rej 함수를 실행 하는 매개 변수가 들어간다. 
                // 그러면, 이 함수에서는 뭘 할거야? 

        try {
            if (num > 10)   rej ({date : "숫자가 커서, 오류났어!"});
                // [34 line 해석] : if 에 중괄호가 없으면, 바로 밑 코드만 실행됨! -> so, 그 밑으로는 안 넘어옴.
                
            // num 초 기다렸다가 -> 실행
            setTimeout( function() {
                res(num);       // 실행되면 -> 매개변수를 num 으로 받는다. 
            }, num * 1000)      // 'num x 1000 밀리초' 만큼 실행되도록 기다린다. 
        } catch (error) {
            rej(error);      // 현재 rej는 throw 와 동일한 기능?❓❓❓❓❓❓  
        }
    })
    }
        // [testPromise 해석]
            // 이 함수는 Promise 객체를 반환, 한다. 
                // Promise 객체를 반환 한다는 건 무슨 말 이지? ❓❓❓ 


    testPromise(8).then(function(date) {
        
        return testPromise(date);
            // res 를 실행하면 > then, 메소드가 실행된다. (성공 했을 때)
            // rej 를 실행하면 > catch, 메소드가 실행된다. (실패 했을 때)

    }).then(function(date) {
        // '성공' 했을 때
        console.log(date)

    }).catch(function(error) {
        // '실패' 했을 때
        console.log(error)
    })

















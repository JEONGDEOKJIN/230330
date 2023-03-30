// 🟦 promise 객체 
    // [기능]
        // 비동기 처리를 가능하게 해주는 객체

    // [특징] 
        // node.js 에서 많이 쓸 것
        // ⭐'비동기 처리'⭐ 를 할 때, promise 객체를 사용. ⭐ 


    function testPromise(num) {

        // 'new Promise' 생성자 함수 분석
            // new 하면 > 빈 객체가 생성 ⭐⭐⭐
            // Promise 객체를 생성 ⭐⭐⭐ 
            // 생성자 함수 선언이 없는데도 가능❓❓❓❓❓ 

            // 매개변수 이름은 resolve, reject 을 줄여서 사용 
            // 매개변수는 resolve, reject 를 받는데, 1) 둘 다 '함수' 임 
            // resolve : 1) 함수이고, 2) 처리 완료되면, '반환' 
            // reject : 1) 함수이고 2) 처리하다, 오류나면, 반환
        return new Promise(function(res, rej) {

            try {
    
                if (num > 10) 
                    rej ({date : "숫자큼"});
                    // if 의 중괄호가 없으면 , 바로 밑 코드 까지만! 영역임 
                // console.log(num)
    
                // 데이터를 받아온다고 가정하자. 
                    // 데이터를 가져오는 시간이 좀 있을 것 임. 
                    // 데이터를 다 가져오고, 작업을 진행시켜야 할 때, 
                
                setTimeout(function() {
                    res(num);      // 1 을 넣으면 10 초 뒤에 11 을 반환❓❓❓ 
    
                }, num * 1000)
                

            } catch (error) {

                rej(error);
                    // 오류나면, rej 함수로, 오류 구문을 보내 ⭐⭐⭐⭐⭐ 
                    // error 랑 throw 랑 뭐가 달라? ❓❓❓❓❓ 
                
            }

        }

        ) 
    }


    testPromise(8).then(function(date) {
        // console.log(date)
        // 8 찍히고 > 10초 뒤에 18 찍힘 
        // 데이터를 불러오고 > 처리할 구문을 여기에 작성! ⭐⭐⭐ 
        // 데이터를 가지고 처리해야할 작업을 여기에!!! ❓❓❓❓❓❓❓❓❓❓ 

        // 이 함수의 반환은 promise 객체? 

        return testPromise(date);


        // res 를 실행하면 > then 메소드가 실행된다 (성공했을 때)
        // rej 를 실행하면 > catch 메소드가 실행된다.   (실패 했을 때)
    }).then(function(date) {
        // 성공했을 때
        // console.log(date);

    }).catch(function(err) {
        // 실패 했을 때
        // console.log(err);
    })


// 🟦 then, 이랑, catch 를 안 쓰면? 

    // async, await 구문 
        // 다만, then, cath 랑, async, await 는 같이 쓰지마!!!!! ⭐⭐⭐⭐⭐ 
        // 둘 다 같이 쓴다는 건, promise 객체를 잘 이해 못 했다는 것. 

    // async await 구문
        // async 와 await 는 짝! 이다. 같이 붙어 다닌다! ⭐⭐⭐⭐⭐
    async function asyncFun () {

        // 왠만하면, try, catch 로 오류 잡으면서 작업해 ⭐⭐⭐⭐⭐ 
        try {
            let temp = await testPromise(5);
                // await 뒤에, Promise 객체를 넣어준다. 
                // 실행이 되면, > 저기에서 기다린다. 
                // Promise 객체는 res 나 res 가 처리 될 때 까지 기다리다가 밑에 것 실행
                console.log(temp);
                
                temp = await testPromise(temp);

                console.log(temp);
                // await + promise 를 작성하면 = promise 를 기다리고, resolve 값을 반환한다. ❓❓❓❓❓

            console.log(1)

        } catch (error) {

        
        }

    }

asyncFun();


















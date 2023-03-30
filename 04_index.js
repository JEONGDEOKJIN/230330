// 🟦 정규 표현식 (ResExp) 객체 

    // [사용이유]
        // 문자의 패턴을 검색하기 위해, 사용하는 문자

    // [예시]
        // 회원가입 시, 이메일, id 주소, 같은 형식을 입력하기 위한 '문자의 패턴을 정의'하는데 유용

    // [정규표현식 메소드]
        // search()
        // replace()
            // 
        // test()
            // 정규표현식과 일치하는 문자가 있으면 true 를 반환


    // 정규표현식 선언
        // 방법 1
        let reg1 = /a/ ;

        // 방법 2
        let reg2 = new RegExp('a');

        // 위처럼 정규표현식을 사용하는 이유는?  
            // '규칙' 을 가진 문자열을 찾기 위해서 ⭐⭐⭐ 


        // [] : 내부 중 한개 
        let tempReg = /[3,6,9]/
            // [해석]
                // 3 또는 6 또는 9 라는 의미
                // '3,6,9 중 하나' 라는 의미
                // 그 중에 하나 라는 의미

        // ~
        let tempReg1 = /[0~9]/;
            // 0 부터 9 까지 중 하나❓❓❓❓❓❓❓ 
            
        
        // search 
            // 해당 문자열의 '위치' 를 인덱스로 찾아주는 함수 
        let str = "Hello JavaScript Program..."
        let regExp_search = str.search(/JavaScript/);
        // let regExp_search1 = str.search(/Hello/);
            // 매개변수로 정규식을 전달! 
        console.log(regExp_search);
            // 6 이 뜸
            // 해당 매개변수의 '위치' 를 반환
            // 해당 문자열의 위치를 찾는 메소드 
        

        // replace 
            // 첫번째로 매개변수로 전달한 문자열을 찾아서 > 두 번째 매개변수로 전달한 문자열로 replace 해준다.
        let regExp_replace = str.replace(/Javascript/, 'css')
        console.log(regExp_replace)


        // test 
            // 정규식 패턴에 대한 문자열 검색 
            // 반환값은 true, false 로 반환
        let reg3 = /JavaScript/;
        let reg4 = /JavaScript2/;
            // 문자열이 있으면 -> true 가 나올 것
            // 문자열이 없으면 -> false 가 나올 것
            console.log(reg3.test(str))
            console.log(reg3.test(str))


    // 🟦 정규식 표현할 때, '플래그' 설정 
        // 검색에 대한 옵션 설정 
        // i 
            // 대소문자를 구분하지 않고 비교할 수 있다. 
        // g 
            // 전체 문자열을 정규식과 비교한다. 
            // 첫 번째로 일치한 문자열이 있으면, 비교를 중단
        // m 
            // 줄이 다른, 여러줄의 문자열을 정규표현식으로 비교한다. 

        let str2 = 'The best program is \n Javascript..';
        
        // i 사용
        // 플래그는 정규식 뒤에!
        let temp1 = /javascript/i;
            // 정규식 뒤에 붙인다. 

        // g 사용
            // match 
                // 해당 문자열을 찾고 > '배열'의 형태로 반환
            console.log(str2.match(temp1))
                // match 같은 문자열이 있는지 찾는다. 
                
            
                // match 는 문자열을 찾지 못 하면 -> null 을 반환
                    // 첫 번째로 일치하는 문자열을 찾아온다. 
                let temp2 = /JavaScript/g;
                console.log(str2.match(temp2)) 
        
        // m 
            // 줄이 다른 문자열을 비교  
        let temp3 = /JavaScript/m;
            console.log(str2.match(temp3));


        // 정규식의 패턴
            // [abc] : 대괄호 안에 있는 문자를 찾는다. 
            // [0-9] : 대괄호 사이의 숫자를 찾는다.
            // [x|y] : 문자 중, "|" 로 분리된 문자 중 하나를 찾는다. 
            
        let str3 = "The best program is JavaScript and HTML123123123123..."
        let temp4 = /Javascript/ig;
            // 플래그를 여러개 주고 싶으면, 같이 붙여서 쓰면 된다. 

        console.log(str3.match(temp4));
            // 전체 문자열 중에서 JavaScript만 가져왔음. 
            // 대소문자 구분 없이 가져왔음. 

        
        // [A-K]
        // 문자열 안에, 해당하는 알파벳을 다 찾아온다.
        let temp5 = /[A-K]/ig;
            // A 부터 K 값이 있는지 찾는다. 
        console.log(str3.match(temp5))


        // pr|x|z
        let temp6 = /pr|x|z/ig;
        console.log(str3.match(temp6))
            // 전체 문자열에서 pr 를 찾아와서 나옴. 
            // 앞에 쓴 분리된 문자열을 가져온다. 



    // 🟦  정규식에서 메타문자  
        // ex) 숫자만을 찾거나, 숫자를 제외하거나, 알파벳만 찾거나, 하는 것 등등의 속성을 표현한다. 

        // ^문자
            // ^ 표시 뒤에 있는 문자로 시작하는 문자를 찾는다. 
            // 정규식으로 저 문자로 시작하는 문자를 찾는다. 

        // 문자&
            // 정규식으로, 끝나는 문자를 찾는다. 
            // '해당 문자'로 '끝나는 문자열' 찾는다. 

        // \w
            // 모든 문자를 찾는다. 
            // 속하는 모든 문자를 찾는다. 

        // \W
            // 대문자 W
            // 알파벳, 대소문자, 숫자, '_' 이 문자를 제외한 모든 문자를 찾는다.
        
        // \d
            // 모든 숫자를 찾는다. 

        // \D
            // '숫자를 제외'하고 찾는다. 
            // '모든 문자를 찾는다.' 는 의미가 됨.

        // \s 
            // 공백문자를 찾는다. 
        
        // \S
            // 공백문자를 제외하고 찾는다. 

        
        // 앞에 전체 문장이 T 로 시작하니? > 맞으면 > TRUE 를 반환
        let temp7 = /^T/ig;
        console.log(str3.match(temp7));
            // 앞에 전체 문장이 T 로 시작하니? > 맞으면 > TRUE 를 반환 
        

        // 문자열에 있는 숫자를 찾음
        let temp8 = /\d/ 
        console.log(str3.match(temp8));


        // 정규식을 사용 할 때, 
            // 일단, '검색' 해서 사용! 
            // 솔직히 정규식은 다 검색해서 사용
            // 복습은 하 되... 복잡한건, 검색해서 사용 
            // 어려우니까 검색으로 사용
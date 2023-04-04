/* _____________ 다른 파일에서 자바스크립트 불러오기 _____________ */

/*
  확장자가 '.js'인 ㅈ바바스크립트 파일은 다른 파일에서 불러와 사용할 수 있으며,
  HTML 내부에 자바스크립트를 직접 기술하기 위해서는 script 태그를 이용한다.
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    // here
    <!-- main.js 불러오기 -->
    <script src="main.js" defer></script>
  </head>
  <body>
    
  </body>
  </html>

  *** defer 속성은 자바스크립트 실행 관련 지정자다.
  19장 '자바스크립트 읽기 타이밍 최적화' 에 자세히 설명

  - 상대 경로
  <script src="./script/script.js" defer></script>

  - 루트 경로
  <script src="/project/script/script.js" defer></script>

  - 절대 경로
  <script src="https://bibiboy.com/script/script.js" defer></script>
*/
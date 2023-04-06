/* _____________ 값을 로그로 출력하기 _____________ */

/*
  ***** 적용 시 *****
  스크립트의 데이터 값을 확인하고 싶을 때
  콘솔 패널에 값을 표시하고 싶을때

  console.log() 메소드 괄호안에 값을 넣어주면 콘솔에 값이
  표시가 된다.
   
  * 하나 이상의 파라미터를 전달하고 싶다면 , 로 구분하면 된다
*/

const a = 10;
const b = 20;
const sum = a + b;
console.log(sum); // 결과값 : 30
console.log("결과값입니다", a, b, sum); // 결과값 : 결과값입니다 10 20 30

const a = "kkamzzu";
const b = "milk";
const sum = a + "의" + b + "입니다";
console.log(sum);

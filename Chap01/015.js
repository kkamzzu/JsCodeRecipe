/* _____________ 조건문 사용하기 (if) _____________ */

/*
  ***** 적용 *****
- 조건을 만족하는 데이터를 처리하고 싶을 때

  ***** Syntax *****
  구문 : 의미
if(조건1) {처리1} : 조건1 ㅇ -> 처리1 싫행
else if(조건2) {처리2} : 조건1 x, 조건 2 ㅇ -> 처리 2 실행
else {처리3} : 조건1 x, 조건2 x -> 처리 3실행

- 프로그램의 내부 구조를 확인해보면 조건에 따른 처리가 이루어지는 작업이 많음.
- 조건문을 사용하여 조건에 따른 처리가 가능함.
*/

// ex) 상수의 값에 따라 세 종류의 알림차을 띄울 수 있음.
const myPrice = 100;

if (myPrice >= 50) {
  alert("myPrice는 50 이상입니다.");
} else if (myPrice >= 10) {
  alert("myPrice는 10 이상 50 미만입니다.");
} else {
  alert("myPricesms 10 미만 입니다.");
}
// myPrice를 20으로 변경하면 'myPrice >= 50'이 거짓,
// 'myPrice >= 10'이 참이 되므로 else if의 처리 내용이 실행됨.

const myPrice = 20;
// 생략

// myPrice를 1로 변경하면 'myPirce >=50'과 'myPrice >=10'도 거짓이 되므로
// else 처리됨.
const myPrice = 1;
// 생략

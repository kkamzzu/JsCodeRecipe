/* _____________ 화살표 함수(Arrow Function) _____________ */

/*
  ***** 적용 *****
- 함수를 간략히 정의하고 싶을 때
- this를 지정하고 싶을 때

  ***** Syntax *****
  구문 : 의미
  (파라미터) => {처리내용}   :  함수를 정의
  function외에도 화살표 함수를 사용하여 함수를 정의할 수 있음.

  * 화살표 함수는 일반 함수와 달리 일부를 생락할 수 있음.
  파라미터가 하나인 경우 ()의 생략이 가능하지만, 파라미터가 없거나 2개이상인 경우는 생략할 수 없음.
 */

// 함수를 정의
const calcSum = (a, b, c) => {
  const result = a + b + c;
  return result;
};

//  함수의 실행 방식은 일반함수와 같음
calcSum(1, 2, 3); // => 6

// 일부생략
const myFunction = (a) => {
  return a + 2;
};

// 화살표 함수의 정의가 한 줄인 경우 {}와 return 생략 (implicit return)
const myFunction2 = (a) => a + 2;

/* _____________ 함수 사용하기 _____________ */

/*
***** 적용 *****
 - 처리 작업을 하나로 모아 이름을 지정하고 싶을 때
 - 처리 작업을 반복하여 사용하고 싶을 때

# Syntax
- function 함수명 (파라미터) { 처리내용 } -> 함수를 정의
- return 값 -> 함수 내부의 값을 반환
- 함수명 (); -> 함수를 실행

함수는 들어온 값을 처리하고 그 결과를 반환하는 구조.
function으로 함수를 정의하고 함수명을 정할 수 있으며, {}블록 안에 처리할 내용을 입력.
함수에 전달되는 값을 파라미터(인수)라고 함.
*/

function myFunction(a) {
  const result = a + 2;
  return result;
}

function calcSum(a, b, c) {
  const result = a + b + c;
  return result;
}

console.log(calcSum(1, 3, 4));

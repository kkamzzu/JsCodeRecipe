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

// 함수에서 반환되는 결과를 '반환값' 또는 '결과 반환값' 이라고 하며, return으로 처리함.
function myFunction() {
  console.log("안녕");
  return 100;
}

// 반환값이 없는 경우는 반환값 자체를 생랼가능
function myFun(a) {
  const result = a + 2;
  return result;
}

// return 구문으로 함수가 종료되기 때문에 ruturn의 아랫부분은 코드를 입력해도 실행되지 않음.
function myFunction() {
  return 100;

  // 실행되지 않음
  console.log("안녕하세욥");
}

/*
- 하나의 함수 내에서 ruturn 구문은 몇 번이라도 사용이 가능하므로 다음과 같이 조건에 따라 반환값을 다르게 처리하는 기능을 구현할 수 있음. 

// 예문은 a가 100이상이면 return a 가 실행되고 return b 는 실행되지 않음.
// 하지만 a가 100 미만이라면  return b만 실행됨.
*/

function myFunction(a, b) {
  //  a가 100 이상이라면 a를 반환
  if (a >= 100) {
    return a;
  }
  // a가 100미만이라면 b를 반환
  return b;
}

// 정의한 함수를 실행하기 위해서는 함수명 뒤에 ()를 붙인다. 파라미터가 있다면 ()안에 적는다.

// 함수의 정의
function clacFunction(price, tax) {
  const result = price + price + tax;
  return result;
}

// 함수를 실행하고 없으면 ()안에는 아무것도 입력하지 않는다.
const myResult = clacFunction(100, 0.1);
console.log(myResult);

// 전달할 파라미터가 없으면 ()안에는 아무것도 입력하지 않는다.
function myFunction(a) {
  console.log("hihi");
}
myFunction(); //결과 : hihi

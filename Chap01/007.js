/* _____________ 상수 선언하기 const _____________ */

/*
  ***** 적용 시 *****
  - 데이터 값에 이름을 지정하여 사용하고 싶을 때
  - 데이터 값을 반복 사용하고 싶을 때
  - 데이터 값의 수정이 불가능한 상수를 사용하고 싶을 때

  ***** Syntax *****
  const 상수명 = 데이터값
  상수에 데이터 값 대입(값의 변경 불가)

  자바스크립트에서는 'const'가 상수를 의미한다.
  상수 myName에 문자열을 대입 하는 예제를 보면 된다
*/

// 상수 myName에 '사자' 대입
const myName = '사자';

// 임의 값의 대입이 가능하여 문자열과 함수의 대입도 가능
const myString = '사자'; // 문자열 대입
const myFunction = () => console.log('함수 확인'); // 함수 대입

// 상수는 변수와 다르게 값의 변경이 불가능
const myMac = '2021 Pro';
myMac = '2022 Pro'; // Error

// 데이터 타입이 같다면 상수도 변수처럼 계산과 결합이 가능

// 숫자형 데이터 상수 간의 덧셈
const number1 = 10;
const number2 = 20;
const sum = number1 + number2;
console.log(sum); // => 30

// 문자열 상수의 결합
const familyName = 'barnes';
const firstName = 'bucky';
const fullName = firstName + familyName;
console.log(fullName); // => 'bucky barnes'

// * 상수는 초기화 생략이 불가능하다
const value;

// 한꺼번에 상수 선언하기
const a = 1, b = 2;
console.log(a + b); // => 3

// 상수로 선언된 배열과 객체 내부의 값은 변경 가능
const myArray = ['펭귄', '고래', '참치'];
myArray[0] = '새우';

const myObject = { id: 20, name: '펭귄' };
myObject.name = '오리';
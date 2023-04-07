/* _____________ 변수 선언하기 let _____________ */

/*
  ***** 적용 시 *****
  - 데이터 값에 이름을 지정하여 사용하고 싶을 때
  - 데이터 값을 반복 사용하고 싶을 때
  - 값 변경이 가능한 변수를 사용하고 싶을 때

  ***** Syntax *****
  let 변수명 = 데이터값 
  구문으로 변수에 값을 대입한다(반복 대입 가능)

  자바스크립트는 숫자나 문자열 등 다양한 데이터를 사용한다.
  이 데이터에 이름을 지정해서 쉽고 반복적으로 사용할 수 있도록 하는 것이
  변수와 상수다. 
  변수와 상수에 값을 넣는 것을
  '값을 대입한다' 또는 '값을 할당한다' 라고 표현하며
  'const'는 상수, 'let'은 변수를 의미한다
*/

// myName에 문자열을 대입
let myName = "kkamzzu";
console.log(myName); // => kkamzzu

// 임의 값의 대입, 문자열, 날짜,함수의 대입도 가능하다
let myString = "kkamzzu"; // 문자열 대입
let currentDate = new Date(); // 현재 날짜를 대임
let myFunction = () => console.log("함수 확인"); // 함수를 대입

// 'let'으로 선언한 변수는 값 변경이 가능하다.
myName = "깜쯔";

/*
  값이 대입 된 변수는 값과 같은 역할을 하기 때문에 다음과 같은 특징을 가진다

  - 숫자 타입 변수 간에는 덧셈과 뺄셈 계산이 가능하다
  - 문자열 타입 변수 간에는 결합이 가능하다
  - 한 변수는 다른 변수에 대입이 가능하다
*/

// 숫자형 변수의 덧셈
let number1 = 10;
let number2 = 20;
let sum = number1 + number2;
console.log(sum); // => 30

// 문자열 변수의 결합
let firstName = "Yujin ";
let familyName = "An";
let fullName = firstName + familyName;
console.log(fullName); // => Yujin An
// 변수를 다른 변수에 대입
let value1 = 100;
let value2 = value1;
console.log(value2); // => 100;

// 변수 초기화 생략하기
// 생략시 값으로 undefined가 주어진다
let value;
console.log(value); // => undefined

// 한꺼번에 변수 선언하기
// ,로 구분하면 let 하나에 여러개의 변수를 선언할 수 있다
let a = 1,
  b = 2,
  c;
console.log(a + b); // => 3
console.log(c); // => undefined

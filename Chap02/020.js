/* _____________ 진위 여부 판별하기 _____________ */

/*
  ***** 적용 *****
  - 브라우저 버전에 따라 알림창을 띄우고 싶을 때
  - 입력 항목에 따라 확인 버튼을 무효화 하고 싶을 때

  A 조건의 경우 A작업, B조건의 경우 B 작업 등 조건에 따라 처리를 구분하는 것은 프로그램의 필수 요소.
  자바스크립트의 데이터 타입 중 하나의 Boolean은 참과 거짓의 진위 여부를 판별을 위한 데이터 타입임.
 */

const a = 10;
const b = 20;

console.log(a < b); // true
console.log(a > b); // false

// 주로 if문과 함께 조건에 따라 작업 처리를 구분할 때 사용.

// ios 여부 확인
const isIos = navigator.userAgent.includes("iphone");

if (isIos) {
  // ios용 처리 작업
}

/*
  0 이외의 숫자 타입, ''(작은따옴표) 이외의 문자열 타입, 배열 타입, 객체 타입 등 
  if의 조건식에 들어가는 데이터는 차믕로 간주됨.
  */

//  '안녕하세요. 제이펍' 알림창 표시
const userName = "제이펍";
if (userName) {
  alert(`안녕하세요. ${userName}`);
}

// address가 ''이므로 알림창을 표시하지 않음
const address = "";
if (address) {
  alert(`당신은 ${address}에 살고 계시네요`);
}

// 전릿값에 '!'를 붙이면 반대의 값을 가짐 (논리 부정 연산자)

const flg = "JavaScript".includes("a");
console.log(!flg); // result: false

// 다른 타입의 값을 붙이면 값이 참 혹은 거짓으로 변환됨
console.log(!"제이펍"); //result: false
console.log(!24); //result: false
console.log(![1, 2, 3]); //result: false

// '!'를 두 번 사용하면 데이터의 타입이 Boolean으로 변환됨.
console.log(!!"제이펍"); //result: true
console.log(!!24); //result: true
console.log(!![1, 2, 3]); //result: true

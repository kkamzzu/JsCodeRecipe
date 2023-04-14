/* _____________ 함수의 파라미터 초깃값 설정하기 _____________ */

/*
  ***** 적용 시 *****
  - 함수 파라미터의 초깃값을 설정하고 싶을 때
  - 함수 파라미터를 생략 가능하도록 설정하고 싶을 때

  ***** Syntax *****
  구문 : 의미
  function 함수명(파라미터1, 파라미터2 = 초깃값2, 파라미터3 = 초깃값3){ ... }
  함수에 값 전달
  (파라미터1, 파라미터2 = 초깃값2, 파라미터3 = 초깃값3) => { ... } 
  함수에 값 전달

  함수의 파라미터에 '파라미터 = 값'을 사용해 파라미터의 초깃값을 설정할 수 있음.
  초깃값이 설정된 파라미터는 값을 전달받지 않으면 초깃값을 사용하는데
  이를 '디폴트 파라미터' 라고 함.
*/

/**
 * 세금이 포함된 가격을 반환하는 함수
 * @param price 가격
 * @param tax 세율
 * **/

// tax의 초깃값 0.08 설정
function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

// tax의 인수를 생략하면 초깃값 0.08이 사용됨
const result1 = calcFunction(100);
console.log(result1); // => 108

// tax의 절달 값을 지정하면 해당 값이 사용됨
const result2 = calcFunction(100, 0.1);
console.log(result2); // => 110

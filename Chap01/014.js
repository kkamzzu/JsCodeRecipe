/* _____________ 다수의 파라미터를 가지는 함수 정의하기 _____________ */

/*
  ***** 적용 *****
- 임의의 파라미터를 가지는 함수를 정의하고 싶을 때

  ***** Syntax *****
    구문 : 의미
    function 함수명(...파라미터) {} : 파라미터의 개수가 미정인 함수를 정의
    (...파라미터) => {} : 파라미터의 개수가 미정인 함수를 정의
    파라미터[인덱스] : 인덱스를 지정해서 파라미터를 사용
  
    - 정해지지 않은 파라미터의 개수를 가지는 함수는  '...'을 이용하여 '...파라미터'와 같은 방식으로 정의함.
    - 입력받은 파라미터는 인덱스를 이용하여 파라미터[0], 파라미터[1]의 방식으로 사용.

    => 이와 같은 정의 방식을 '나머지 파라미터(rest parameter)'라고 함.

 */

/**
 * 파라미터의 합계를 반환하는 함수
 * @param price
 * @returns {number}
 */

function calcSum(...prices) {
  let result = 0;
  for (const value of prices) {
    result += value;
  }
  return result;
}

const result1 = calcSum(10, 20);
console.log(result1); // result: 30

const result2 = calcSum(5, 10, 15);
console.log(result2); // result: 30

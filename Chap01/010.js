/* _____________ 복합형 대입 연산자 사용하기 _____________ */

/*
***** 적용 *****
- 계산식을 간략히 나타내고 싶을 때

# Syntax
- x = y -> x = y
- x += y -> x = x + y
- x -= y -> x = x - y
- x *= y -> x = x * y
- x **= y -> x = x ** yu 76v56
- x /= y -> x = x / y
- x %= y -> x = x % y

대입할 때 사용하는 기호인 '='는 대입 연산자라고 함.
복합형 대입 연산자는 사칙연산 기호와 '='를 조합하고 축약한 형태로 사용함.
*/

let a = 10;
let b = 20;
a += b; // a = a + b
console.log(a); // 결과: 30

let c = "자바";
let d = "스크립트";
c += d; // c = c + d
console.log(c); // 결과: 자바스크립트

let e = 5;
let f = 2;
e *= f; // e = e * f
console.log(e); // 결과: 10

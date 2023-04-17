/* _____________ 조건문 사용하기 (switch)_____________ */

/*
  ***** 적용 *****
 - 조건을 만족하는 다수의 데이터를 처리하고 싶을 때

  ***** Syntax *****
    구문 - 의미
    switch(식) - 식에 따라 처리를 분리
    case 값:처리내용 - 해당 조건 만족 시 처리
    default:처리내용 - 만족하는 조건이 하나도 없는 경우의 처리

    - switch문은 조건을 만족하는 데이터를 처리하는 작업을 실시함.
 */

const myFruit = "apple";

switch (myFruit) {
  case "apple":
    alert("This is apple");
    break;
  case "grape":
    alert("This is grape");
    break;
  default:
    alert("anthiing else?");
    break;
}
/*
- switch문의()안 값의 case의 값이 일치하는 경우에만 해당 case의 처리가 됨.
- case의 값 뒤에는 '콜론(:)'을 붙임.
- break는 처리를 종료하는 명령문으로, 생략하면 switch문이 끝나지 않고 다음 case문의 조건 일치 여부를 계속해서 확인함.
*/

const myFr = "apple";

switch (myFr) {
  case "apple":
    alert("this is apple");
  case "grape":
    alert("this is grape");
  default:
    alert("anything else?");
}

// 이 특성을 활용하면 여러 case의 처리결과를 한곳에서 실행 가능 하다는 이점이 있음.

const myFruits = "apple";

switch (myFruits) {
  case "apple":
  case "grape":
    alert("apple or grape");
    break;
  default:
    alert("anything else?");
}
/*
- case에서 beark혹은 default애서 break까지의 단위를 하나의 구로 표현하며,
- 이를 case구, default구라고 한다. 
- break문을 의도치않게 생략하여 처리 중복으로 인한 에러가 발생하지 않도록 주의.
- defult는 어느 case도 실행되지 않았을 때 실행되는 영역으로 생략이 가능함.
*/

const myBag = "phone";

switch (myBag) {
  case "phone":
  case "water":
    alert("phone or water");
    break;
  // default는 생략
}

/**
 * switch는 === 비교를 한다.
 * - switch 식은 값과 타입의 비교가 모두 이루어진다(===비교).
 */

// 문자 타입의 '100'
const myValue = "100";

switch (myValue) {
  case 100:
    //숫자 타입일 경우 실행
    console.log("숫자 타입의 100입니다");
    break;
  default:
    console.log("숫자 타입의 100이 아닙니다.");
    break;
}

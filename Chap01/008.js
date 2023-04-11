/* _____________ 주석 추가하기 _____________ */

/*
***** 적용 *****
- 프로그램 작동에 영향이 없는 메모를 코드 내부에 남기고 싶을 때
- 코드 일부분을 무효화 하고 싶을 때

***** 적용 *****
// => 기호 이후 내용을 주석처리 (한줄)
/* 내용/ => 기호 안의 내용 부분을 주석 처리 (여러 줄 가능)

*/

const value = 100; // 가격
const tax = 1.1; // 세금 10%

// 세금이 포함된 가격을 계산
const price = value * tax;

const result = 100 + 200 /* + 300 */ + 400;
console.log(result); // 700

/* 여러 줄의 입력이 가능한 주석
줄바꿈도 유효함! */

/*
 * 이와 같은 스타일도
 * 사용가능 합니다.
 */
// ? 매번 Number(size) 연산을 해주는것과 변수에 할당하는 것 중 어떤게 더 작은 비용인지 확인
// Todo : 에러 처리 수정
// ? 이렇게 까지 함수를 분리해야 하는가 ?
// -> 근데 문제에 함수는 10줄까지 작성하라는 조건이 있어서 할수밖에 없었다

function checkIsNaN(size) {
  if (Number.isNaN(size)) {
    throw new Error('숫자 아님');
  }
}

function checkIsInteger(size) {
  if (!Number.isInteger(size)) {
    throw new Error('정수 아님');
  }
}

function checkIsInRange(size) {
  if (size < 3 || size > 20) {
    throw new Error('범위 이상');
  }
}

function validateSize(size) {
  checkIsNaN(size);
  const sizeNumber = Number(size);
  checkIsInteger(sizeNumber);
  checkIsInRange(sizeNumber);
}

export default validateSize;

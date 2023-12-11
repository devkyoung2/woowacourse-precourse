// Todo 하드코딩 상수화

// ? 이런경우 대소문자 구분 해주는지 확인
const retry = ['R', 'Q'];

function validateRetry(seletedRetry) {
  if (!retry.includes(seletedRetry)) {
    throw new Error('이상한 값 선택');
  }
}

export default validateRetry;

// Todo 하드코딩 상수화

// ? 이런경우 대소문자 구분 해주는지 확인
const moving = ['U', 'D'];

function validateMoving(seletedMoving) {
  if (!moving.includes(seletedMoving)) {
    throw new Error('이상한 값 선택');
  }
}

export default validateMoving;

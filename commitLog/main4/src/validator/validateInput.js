function validateInput(input) {
  const removeSpace = input.replace(' ', '');

  if (!input.length) {
    throw new Error('에러 : 입력값 없음');
  }
  if (removeSpace.length !== input.length) {
    throw new Error('에러 : 입력에 공백 포함');
  }
}

export default validateInput;

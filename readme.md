## 📂 우테코 프리코스 폴더
우테코 프리코스를 진행하면서 작성했던 미션 저장소를 한 곳에 모아놓은 레포지토리입니다.

<br/>

## ⚒️ 각 미션별 리드미
- [숫자야구](https://github.com/devkyoung2/woowacourse-precourse/tree/main/javascript-baseball-6-practice/docs)
- [레이싱 카](https://github.com/devkyoung2/woowacourse-precourse/tree/main/javascript-racingcar-6/docs)
- [로또](https://github.com/devkyoung2/woowacourse-precourse/tree/main/javascript-lotto-6/docs)
- [크리스마스 프로모션](https://github.com/devkyoung2/woowacourse-precourse/tree/main/javascript-christmas-6/docs)

<br/>

## 🚀 프리코스를 진행하면서 성장한 점
### 1. 자바스크립트 기본 역량 강화
프리코스를 진행하면서 알게된 점 중 하나는 나의 자바스크립트 역량이 부족하다는 것이었다.
파이썬으로 코딩 테스트 준비를 하면서 파이썬의 다양한 메서드나 문법에 익숙해져 있었는데 똑같은 로직을 자바스크립트로 구현할 때 버벅이고 있던 것이었다. 
프리코스를 진행하는 틈틈히 자바스크립트의 기초를 학습했고, 프리코스 이후로는 자바스크립트를 이용해 코딩테스트 연습을 진행하면서 기본 역량을 키워나갔다. 
지금은 파이썬보다 자바스크립트가 더 편하다.

### 2. 테스트 주도 개발의 중요성
공통 피드백 내용 중 테스트 주도 개발의 중요성에 관한 내용이 있었다.
이전까지 테스트 코드를 작성해본 경험이 없었는데 프리코스를 진행하면서 테스트의 대한 개념 학습을 시작했다. 
Jest의 공식문서를 읽어보며 매쳐 사용법, 비동기 코드를 테스트 하는법, 목 함수를 사용하여 테스트 하는법 등을 학습했고, 어떤 단위로 테스트를 돌려야 좋을지 내가 실수로 작성하지 못한 예외처리가 있는지에 대해 고민했다.
실제로 테스트 코드를 작성하며 최종 우승자 출력 함수에서 우승자 이름이 아닌 우승자의 인덱스 번호를 출력하는 오류를 발견했을 때 성장하고 있음을 느꼈다.

[로또 미션에서 작성한 테스트 코드](https://github.com/devkyoung2/woowacourse-precourse/tree/main/javascript-lotto-6/__tests__/test)


### 3. 객체지향과 MVC 패턴
리액트는 기본적으로 함수형 컴포넌트 작성을 선호하기에 나는 자바스크립트의 class를 사용해본적이 거의 없었다. 실제로 [1주차 미션](https://github.com/devkyoung2/woowacourse-precourse/blob/main/javascript-baseball-6/src/App.js)은 함수형으로 작성해서 제출 했었다.
하지만 우테코 공통 피드백이나 다른사람의 회고록을 보면 다들 MVC 패턴의 객체 지향에 대해 공부하고 이를 적용해서 코드를 작성하고 있었다.
그래서 MVC 패턴으로 작성된 다양한 사람들의 코드를 찾아보고, 유명하다는 [객체지향의 사실과 오해](https://www.google.com/search?q=%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%98+%EC%82%AC%EC%8B%A4%EA%B3%BC+%EC%98%A4%ED%95%B4&tbm=isch&ved=2ahUKEwjSrPiQ49yEAxVAxDQHHWlcDDsQ2-cCegQIABAA&oq=%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%98+%EC%82%AC%EC%8B%A4%EA%B3%BC+%EC%98%A4%ED%95%B4&gs_lp=EgNpbWciIOqwneyytOyngO2WpeydmCDsgqzsi6Tqs7wg7Jik7ZW0MgUQABiABDIHEAAYgAQYGDIHEAAYgAQYGDIHEAAYgAQYGDIHEAAYgAQYGDIHEAAYgAQYGDIHEAAYgAQYGDIHEAAYgAQYGDIHEAAYgAQYGEifI1D-AViyIXAEeACQAQCYAa8BoAGAB6oBAzAuN7gBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEEAAYHogGAQ&sclient=img&ei=OOHmZdKwNcCI0-kP6bix2AM&bih=695&biw=1536) 책도 읽었다. MVC 패턴 뿐만아니라 다양한 디자인패턴, 이런 패턴이 나오게 된 이유 등을 공부하며 객체지향과 MVC 패턴에 대해 학습했다.
그 결과, 미숙하지만 [4주차 미션](https://github.com/devkyoung2/woowacourse-precourse/blob/main/javascript-christmas-6/src/App.js)은 MVC 패턴을 갖춘 class 형 코드로 작성할 수 있었다.
사실 프론트를 지망하는 입장에서 class를 사용해 객체지향식으로 코드를 짜는 것과 함수형으로 프로그래밍을 하는 것 중에 하나를 고르자면 아직까지도 나는 함수형을 선택할 것 같다.
하지만 이전과는 달리 class형 컴포넌트와 MVC 패턴을 알고 적용할 수 있게 되었다.  


### 4. 린트/프리티어의 중요성
린트와 프리티어의 중요성은 이전에도 알고 있었지만 vs코드의 확장 프로그램에서 제공되는 기본값으로만 사용했었다. 우테코의 프리코스는 함수의 들여쓰기나, 함수의 줄수를 제한하는 등의 프로그래밍 요구사항이 있었다. 그래서 나는 에어비엔비 레포지토리를 참고하며 어떤 규칙들이 있는지, 우테코의 요구사항에 적용할 수 있는지 확인해 보았고, eslintrc.json 파일을 직접 작성해보며 린터와 프리티어에 대한 이해도를 높일 수 있었다. 


### 5. 코드리뷰
프리코스를 진행하면서 말로만 들어보았던 코드리뷰에 직접 참여할 수 있는 기회가 생겼다.
다른사람들의 코드를 보면서 어떤 관점으로 코드를 짰는지 의견을 주고받는 것은 쉽지 않았고, 
나 또한 다른사람에게 보여지는, 리뷰어 입장에서 한 눈에 알아보기 좋은 코드를 짜는 것이 어려웠다.
그래도 여러 관점에서 피드백을 받으며 내 코드를 다시 볼 수 있었고, 내가 고민했던 부분(어떤 부분에서 검증 해야되는지, 변수명은 어떤 것이 적합할지 등)들에 대해 다른 리뷰어와 고민하면서 같이 성장할 수 있었다는 점이 좋았다.

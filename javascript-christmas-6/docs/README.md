## 구혈할 기능 목록

**[ App.run 실행 ]**

- **`UserModel`**, **`MenuModel`**, **`inputView`**, **`outputView`** 생성

**[ 사용자에게 입력 ]**

- **사용자에게 식당 예상 방문 날짜 입력**
  - **`inputView`** 에서는 숫자인지 타입 비교만
- **사용자에게 주문 메뉴 입력 받기**
  - **`inputView`** 에서는 문자열인지 타입 비교만
- 입력받은 값을 사용해 주문, 이벤트 객체 생성

  - **`user.setOrder`** 사용해 유저 모델 내부에서 주문 객체 생성

    - 생성자 내부에서 validation 진행 잘못된 입력이면 재입력
      - 최대 메뉴를 초과하지 않아야함
      - 음료만 주문하지 않아야함
    - 유효성 체크 이후 User로부터 입력받은 메뉴로 init (애피타이저, 메인, 디저트, 음료)
    - 메뉴로 총 주문 금액 계산후 만원 넘는지 확인

  - **`user.setEvent`** 사용해 유저 모델 내부에서 이벤트 객체 생성
    - 생성자 내부에서 validation 진행 잘못된 입력(입력받은 값이 !1일에서 31일 사이)이면 재입력
    - 유효성 체크 이후 #date를 User로부터 입력받은 날짜로 초기화
    - 이벤트 적용 여부 : 만약 order 금액이 만원을 넘지 않을 경우 모두 DEFAULT값 으로 설정

**[ 사용자에게 출력 ]**

- **`주문 메뉴 안내`** : Menu ⇒ Order
- **`할인 전 총 주문 금액 안내`** : Menu ⇒ Order
- **`증정 메뉴 안내`** : Menu ⇒ Order ⇒ Event
- **`혜택 내역 안내`** : Event ⇒ Order
- **`총 혜택 금액 안내`** : Event ⇒ Order
- **`할인 후 예상 결제 금액 안내`** : User
- **`12월 이벤트 배지 안내`** : User
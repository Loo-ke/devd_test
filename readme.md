# debounce 함수 테스트 케이스

## 케이스 1

- 설명 : 클릭 이벤트가 연속으로 발생하는 경우를 테스트합니다.
- 실행 방법 : 클릭 버튼을 빠르게 여러 번 클릭합니다.
- 결과 : 클릭 시 즉시 clickCount가 올라가고, 마지막 클릭 이벤트의 wait 시간이 흐른 뒤 debounce 카운트가 올라갑니다.

## 케이스 2

- 설명 : 클릭 버튼을 누른 직후 다른 이벤트 실행하는 경우를 테스트합니다.
- 실행 방법 : 클릭 버튼 누른 직후 wait 시간이 흐르기 전에 immediate 버튼을 클릭합니다.
- 결과 : 클릭 버튼을 눌렀을때의 함수는 취소하고 즉시 디바운스가 실행되고 debounce 카운트가 올라갑니다.

## 케이스 3

- 설명 : 클릭 이벤트 직후 취소 이벤트를 테스트합니다.
- 실행 방법 : 클릭 이벤트 직후 취소 버튼을 클릭합니다.
- 결과 : debounce 카운트가 올라가지 않고 함수는 취소가 됩니다.
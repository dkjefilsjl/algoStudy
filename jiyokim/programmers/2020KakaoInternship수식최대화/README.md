https://yoon-dumbo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%98%EC%8B%9D-%EC%B5%9C%EB%8C%80%ED%99%94-javascript

위의 해답을 참고했습니다... 헤헷
자바스크립트 문법이 익숙치 않네요 ^0^ ~익숙해도 못풀었을것 같지만...~

## 정규표현식
: 특정 문자 패턴을 찾기 위함

1. 예를 들어 전화 번호
```
const phone = /\d{3}-\d{4}-\d{4}/;
```
2. 영어 대소문자 전부
```
const eng = /[a-zA-Z]/g ;
```
이런 식 ~~ /패턴/플래그 이렇게 ~

이런 게 있는 줄 첨 알았네용. 너무 많으니 자주 쓰는 것만 외워둬야 겠어여

## splice
: 배열의 삭제, 추가, 대체가 가능 ~
```
arr = [0, 1, 2];
arr.splice(startIdx, deleteItem, nsertItems);

arr.splice(1, 2); //idx 1부터 2개 삭제
// [0]

arr.splic(0, 1, 4, 5, 6) //idx 0부터 한 개 삭제 후 4, 5, 6 추가
// [4, 5, 6]

//splice의 반환값으로는 삭제된 요소들의 배열이 나옵니다 !
```

## slice

slice는 splice와 달리 원본 배열을 유지합니다.

```
let arr = [1,2,3,4,5];

arr.slice(); // [1,2,3,4,5]
arr.slice(1, 3); // [2, 3]
arr.slice(3); // [4, 5]
```
비교적 간단한 slice ~!

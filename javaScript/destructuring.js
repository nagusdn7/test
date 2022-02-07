// 배열의 비구조화 할당

// const arr = [1,2]
// const [a,b] = arr;
// console.log(a)
// console.log(b)

const arr= [1];
const [a=10, b=20] = arr; //기본값 정의
console.log({a, b}); // 해당 속성값이 undefined이면 정의된 기본값 할당
// 그렇지 않다면 원래의 속성값 할당
// 배열에는 순서 정보가 중요!
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log({a, b}) // 제 3의 변수 필요없이 간단히 표현하여 교환가능!

// ------------------------------------------------------------

// 객체의 비구조화 할당
const obj = { age: 21, name: 'hyunwoo'};
const { age, name} = obj;
console.log({age, name})

//객체비구조화에는 순서 정보가 중요하지 않다.

//기본값 할당(undefined에만 기본값 할당 null 할당x)


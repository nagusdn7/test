//객체 생성

// const obj = {
//     age : 21,
//     name: 'mike',
// };
// const obj2 = new Object({
//     age: 21,
//     name: 'mike',
// });
// console.log(Object.keys(obj)); // 입력된 객체의 모든 키를 배열로 반환
// console.log(Object.values(obj)); // 입력된 객체의 모든 값을 배열로 반환
// console.log(Object.entries(obj)); // key와 value를 튜플 형태로 반환

// for(const [key, value] of Object.entries(obj)) {
//     console.log(key, value)
// } 

// ------------------------------------------------------------

// 객체의 추가, 수정, 삭제

// const obj = {
//     age: 21,
//     name: 'mike',
// };
// obj.city = 'seoul';
// obj.age = 30;
// console.log(obj);

// delete obj.city;
// console.log(obj);

// delete obj['name'];
// console.log(obj);

// ------------------------------------------------------------

// const arr = [1,2,3];  // 배열 생성1
// const arr2 = new Array(1,2,3); //배열 생성2
// // console.log(typeof arr === 'object');
// // console.log(Object.values(arr));

// // 자주사용하는 arr메서드
// console.log(arr.map(item => item +1)); // 기존의 배열을 건드리지 않고 값을 변경해 새로운 배열 생성
// console.log(arr.filter(item => item >=2)); // 오른쪽에 있는 조건을 만족한 item만 새로운 배열 생성
// console.log(arr.reduce((acc, item) => acc + item, 0)); // 모든 아이템에 대해 오른쪽에있는 식을 수행해서 최종적으로 하나의 값 반호나

// ------------------------------------------------------------

// const arr=[1,2,3];

// // arr.forEach(item => console.log(item));
// // for (const item of arr){
// //     console.log(item);
// // }

// console.log(arr.some(item => item ===2));
// console.log(arr.every(item => item ===2));
// console.log(arr.includes(2));
// console.log(arr.find(item => item % 2 ===1)); // 오른쪽 조건을 만족하는 첫번쨰
// console.log(arr.findIndex(item => item % 2 ===1)); // find와 비슷하지만 인덱스 반환

// ------------------------------------------------------------

const arr = [1,2,3]

// arr.push(4); //push : 추가 pop 반환
// console.log(arr.pop());
// console.log(arr);

arr.splice(1,1); //삭제 추가 동시에 첫번째 매개변수 : 인덱스 두번쨰 : 삭제할  개수
console.log(arr); // 숫자 2삭제 출력
arr.splice(1,0,10,20,30) // 세번쨰 매개변수 이후로는 추가할 아이템 나열
console.log(arr)
arr.splice(1,3,40,50);
console.log(arr);

arr.sort(); // 정렬 아무것도 입력x => 오름차순
console.log(arr);
arr.sort((a,b) => (a % 10) - (b % 10));
console.log(arr)


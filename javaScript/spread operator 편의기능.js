// const name = 'hyunwoo'
// const obj = {
//     age: 29,
//     name,
//     getName(){
//         return this.name;
//     },
// };
//shorthand property names
// ------------------------------------------------------------

// function makePerson1(age, name){
//     return { age: age , name : name};
// }

// // 단축속성명 사용
// function makePerson2(age, name){
//     return { age, name}
// }

// const name = 'hyunwoo';
// const age = 29;
// // console.log("name=", name, "age=", age);
// console.log({age, name})
// ------------------------------------------------------------

//spread operator(전개 연산자)  - 어떤 객체의 속성의 변화를 줘도 원래 객체에 영향을 주지 않는다.
// Math.max(1, 3, 7, 9);
// const numbers = [1,3,7,9];
// Math.max(...numbers);

// ------------------------------------------------------------

const obj1 = { age: 21, name: 'mike'};
const obj2 = { hobby: 'soccer'};
const obj3 = { ...obj1, ...obj2};
console.log(obj3);

// 객체 리터럴에서 중복된 속성명을 사용했을때 최종 결과는 마지막 속성명의 값이 된다.
// 뒤에 있는 값 사용 

const obj1 = { x :1, x:2, y:'a'};
const obj2 = { ...obj1, y: 'b'};
console.log({obj1, obj2}) // 



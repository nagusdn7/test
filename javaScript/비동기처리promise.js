// function requestData(callback) {
//     setTimeout(() => {
//         callback({ name : 'abc', age: 23});
//     }, 1000);
// }

// function onSuccess(data){
//     console.log(data);
// }

// console.log('call requestData');
// requestData(onSuccess);

// // --------------------------------------------------------------
// function requestData1(callback) {
//     callback(data);
// }

// function requestData2(callback) {
//     callback(data);
// }

// function onSuccess(callback) {
//     callback(data);
//     requestData2(onSuccess2);
// }

// function requestData1(data) {
//     console.log(data)
// }
// requestData1(onSuccess);


//--------------------------------------------------------------
//promise 비동기 상태를 값으로 다룬다. 비동기 프로그래밍을 할때 동기프로그래밍 방식으로 코드를 작성
// requestData1()
//     .then(data => {
//         console.log(data);
//         return requestData2();
//     })
//     .then(data => {
//         console.log(data)
//     })

    
//--------------------------------------------------------------

// //promise 객체 생성
// const p1 = new Promise((resolve, reject) => {}); //처음에 pending //resolve -> fulfilled
// const p2 = Promise.reject('error message');
// const p3 = Promise.resolve(param);

// 대기 중(pending) // 비동기 처리가 처리되지 않았을떄
// 성공(fulfilled)
// 실패(rejected)

//settled 

//--------------------------------------------------------------

// 1. Producer
// const promise = new Promise((resolve, reject) => {
//     //doing some heavy work (network, read files)
//     console.log('doing something');
//     setTimeout(() => {
//     //    resolve("나현우");
//         reject(new Error('no network'))
//     }, 2000);
// });

// //2. Consumers : then, catch, finally를 통해 값을 받아올 수 있다.
// // then : 프로미스가 정상적으로 잘 수행이 되어서 마지막으로 resolve라는 콜백함수를 통해서  
// promise.then((value) =>{
//     console.log(value);
// })
// .catch(error=>{
//     console.log(error);
// })
// //성공 실패 상관없이 어떤 기능을 마지막으로 수행하고 싶을때
// .finally(()=> {
//     console.log('finally');

// });

//Promise Chaining - result가 .then 핸들러의 체인(사슬)을 통해 전달된다는 점에서 착안한 아이디어입니다.
// 프라미스 체이닝이 가능한 이유는 promise.then을 호출하면 프라미스가 반환되기 때문입니다. 반환된 프라미스엔 당연히 .then을 호출할 수 있습니다.
// const fetchNumber = new Promise((resolve, reject)=>{
//     setTimeout(() => resolve(1), 1000)
// });

// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num-1), 1000);
//     });
// })
// .then(num => console.log(num));

// 4. 오류를 잘 처리 하자
const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(()=> resolve( '🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) =>{
        setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(`${egg} => 🍳`), 1000);
    });

getHen() 
.then(getEgg)
.catch(error => {
    return '🥖';
})
.then(cook)
.then(console.log)
.catch(console.log)


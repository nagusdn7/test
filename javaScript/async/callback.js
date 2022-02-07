// 1. callback function using function expression
// 콜백 : 정답과 정답이 맞을때 호출하게 될 함수와 틀릴 때 호출하는 함수를 전달해서 상황에 맞게끔 호출
// 두가지의 callback 파라미터가 전달되어서 정답이 love you 인 경우에만 printyes라는 callback 함수 호출
// 정답이 no면 printNO호출
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}
//익명 함수(anonymous function)
const printYes = function() {
    console.log('yes!');
}

// named function

const printNo = function print(){
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

//------------------------------------------------------------

// arrow function 
// always anonymous

const simplePrint = function(){
    console.log('complexPrint!'); 
};


const simplePrint = () => console.log('simplePrint!');


const add = (a,b) => a+b;

const add = function (a, b) {
    return a+b;
};




// Javascript is synchronous,(동기적인 언어이다.)
// 호이스팅이 된 이후부터 코드가 작성된 순서에 맞춰서 동기적으로 실행된다!
// hoisting : var, function declaration  함수 선언들이 자동적으로 젤 위로 올라가는 것!


//동기와 비동기!


// console.log('1') 
// setTimeout(() => console.log('2'), 1000); 
// console.log('3') 

// function printImmediately(print){ 
//     print();
// }
// printImmediately(( )=> console.log('hello')) 

// function printWithDelay(print, timeout){
//     setTimeout(print, timeout);
// }

// printWithDelay(()=> console.log('async callback'), 2000) 

//------------------------------------------------------------

//callback hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === '나현우' && password ==='123') ||
                (id === '이동현' && password ==='456')
                
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user ==='나현우'){
                onSuccess({ name : '나현우', role: '관리자' });
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    user=> {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`반갑습니다 ${userWithRole.name}님, 당신은 ${userWithRole.role} 입니다.`);

            },
            error => {
                alert(`너 누구야 우리회원아니지!`);
            }
        );
},
error=> {
    console.log(error);
}
);
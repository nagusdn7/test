// async와await는 프로미스를 조금 더 간결하고 간편하고 조금더 동기적으로
//실행되는 것 처럼 보이게 만들어주는 아이 조금더 간편한 API
// 이 둘을 사용하면 동기식으로 우리가 코드를 작성하는것처럼 간편하게 작성하게끔 도와준다.
// 기존에 존재하는 promise위에 간편한 api를 제공 => syntactic sugar

//async & await
// clear style of using promise :)
//상황에 맞게끔 promise를 쓸지 async를 쓸지 생각해야한다.
// 1. async ( 프로미스를 조금 더 간편하게 쓸 수 있는 syntatic sugar)

async function fetchUser() {
  //do network request in 10 secs... 가정 네트워크 통신을 해서 백앤드에서 데이터를 받아오는데 10초정도 걸린다고 가정!
  return "나현우";
}

const user = fetchUser();
user.then(console.log);

// 자바스크립트 엔진은 동기식으로 수행하기 때문에 fetch가 선언이 되었네 함수가 선언된 곳으로 가서 코드 블럭을 실행 10초가 걸리니깐 10초동안 기달려야지 하고 10초가 지난후에
// 성공적으로 네트워크 데이터를 받아오게 되면 그제서야 다음줄로 넘어가면서 나현우 리턴된다. 그리고 리턴된 코드가 유저에 할당이 되고 그다음으로 넘어가서 나현우가 출력되는거다!
// 우리가 비동기적인 처리를 전혀 하지 않으면 사용자가 데이터를 받아오는데 10초가 걸리기 때문에 뒤에서 웹페이지의 ui를 표시하는 그런 기능을 수행하는 코드들이 있다면 이것이 끝나는동안
// 데이터가 웹페이지에 표시되지 않기 때문에 사용자는 10초정도 비어있는 웹페이지를 보게될거다!
//이렇게 오래걸리는 일이 있을 때 비동기적인 처리를 해줘야한다.

//그래서 지난시간 프로미스를 이용했다.
// 야 내가 언제 유저의 데이터를 받아올주 모르겠지만 약속할께 이 프로미스라는 오브젝트를 가지고 있으면 then이라는 콜백함수를 등록만하면 유저의 데이터가 준비되는대로
// 니가 등록한 콜백함수를 내가 불러줄께!

// 2. await ( await는 async가붙은 함수 안에서만 쓸수 있다.)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//delay라는 함수는 프로미스를 리턴하는데 정해진 ms가 지나면 resolve를 호출
//3초 전달

async function getPizza() {
  await delay(3000);
  return "🍕";
}

async function getHamba() {
  await delay(3000);
  return "🍔";
}

//()then 지옥도 발생할수 있다.
// function pickFood() {
//   return getPizza().then((pizza) => {
//     return getHamba().then((hamba) => `${pizza} + ${hamba} =  FastFood`);
//   });
// }

async function pickFood() {
  const pizza = await getPizza();
  const hamba = await getHamba();
  return `${pizza} + ${hamba} = FastFood`;
}

pickFood().then(console.log);

//chaining
// function getHamba() {
//   return delay(3000);
//   getHamba.then(() => "🍔");
// }

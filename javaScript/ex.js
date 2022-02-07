var a = true;
var b = false;
var c = 10 > 5;
var d = Boolean(null);

document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>");
document.write(d, "<br>");

//  자료형을 알고 싶을 때 typeof
var num = 10;
var str = "자바스크립트";

document.write(typeof num, "<br>");
document.write(typeof str, "<br>");

// 문자형데이터 + 문자형데이터 = 문자형데이터
console.log("do it" + "javascript" );
// 문자형데이터 + 숫자형데이터 = 하나의 문자형 데이터

// 증감연산자
// 데이터를 1씩 증가시키는 증가 연산자 / 반대로 1씩 감소시키는 감소연산자

// A == B -> A와 B는 같다. == 자료형은 비교하지 않는다. ex) "10" == 10 True
// A === B -> A와 Bs는 같다. === 자료형까지 비교 ex) "10" === 10 False

var a = 10;
var b = 20;
var c = 10;
var d = "20";
var result;

result = a > b; 
document.write(result, "<br>");
result = a < b; 
document.write(result, "<br>");
result = a <= b; 
document.write(result, "<br>");
result = a >= b; 
document.write(result, "<br>");
result = a != b; 
document.write(result, "<br>");
result = b === d; 
document.write(result, "<br>");

// 삼항 조건 연산자 - 조건식(true or false의 결과값을 반환)의 결과에 따라 실행 결과가 달라지는 연산자

var a = 10;
var b = 3;

var result = a > b? "javascript": "hello";
document.write(result);
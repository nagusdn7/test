//��ü ����

// const obj = {
//     age : 21,
//     name: 'mike',
// };
// const obj2 = new Object({
//     age: 21,
//     name: 'mike',
// });
// console.log(Object.keys(obj)); // �Էµ� ��ü�� ��� Ű�� �迭�� ��ȯ
// console.log(Object.values(obj)); // �Էµ� ��ü�� ��� ���� �迭�� ��ȯ
// console.log(Object.entries(obj)); // key�� value�� Ʃ�� ���·� ��ȯ

// for(const [key, value] of Object.entries(obj)) {
//     console.log(key, value)
// } 

// ------------------------------------------------------------

// ��ü�� �߰�, ����, ����

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

// const arr = [1,2,3];  // �迭 ����1
// const arr2 = new Array(1,2,3); //�迭 ����2
// // console.log(typeof arr === 'object');
// // console.log(Object.values(arr));

// // ���ֻ���ϴ� arr�޼���
// console.log(arr.map(item => item +1)); // ������ �迭�� �ǵ帮�� �ʰ� ���� ������ ���ο� �迭 ����
// console.log(arr.filter(item => item >=2)); // �����ʿ� �ִ� ������ ������ item�� ���ο� �迭 ����
// console.log(arr.reduce((acc, item) => acc + item, 0)); // ��� �����ۿ� ���� �����ʿ��ִ� ���� �����ؼ� ���������� �ϳ��� �� ��ȣ��

// ------------------------------------------------------------

// const arr=[1,2,3];

// // arr.forEach(item => console.log(item));
// // for (const item of arr){
// //     console.log(item);
// // }

// console.log(arr.some(item => item ===2));
// console.log(arr.every(item => item ===2));
// console.log(arr.includes(2));
// console.log(arr.find(item => item % 2 ===1)); // ������ ������ �����ϴ� ù����
// console.log(arr.findIndex(item => item % 2 ===1)); // find�� ��������� �ε��� ��ȯ

// ------------------------------------------------------------

const arr = [1,2,3]

// arr.push(4); //push : �߰� pop ��ȯ
// console.log(arr.pop());
// console.log(arr);

arr.splice(1,1); //���� �߰� ���ÿ� ù��° �Ű����� : �ε��� �ι��� : ������  ����
console.log(arr); // ���� 2���� ���
arr.splice(1,0,10,20,30) // ������ �Ű����� ���ķδ� �߰��� ������ ����
console.log(arr)
arr.splice(1,3,40,50);
console.log(arr);

arr.sort(); // ���� �ƹ��͵� �Է�x => ��������
console.log(arr);
arr.sort((a,b) => (a % 10) - (b % 10));
console.log(arr)


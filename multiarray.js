//multi dimesional array:
let marray=[[1,2,3],[4,5,6],[9,10]];
console.log(marray);
let studentdata=[['saish',25],['tejas',9]];
console.log(studentdata);
let student1=['satish',24];
let student2=['tejas',9];
let student=[student1,student2];
console.log(student);

//acess element:
console.log(student[0]);
console.log(student[1]);
console.log(student[0][0]);
console.log(student[1][1]);

//push & unshift():
student.push(['sam']);
console.log(student);
student.unshift(['vilas',34]);
console.log(student);

//add or change element:
student[0][0]='shinde';
console.log(student);
student[3][1]=45;
console.log(student);

//pop&shift:
student.pop();
console.log(student);
student.shift();
console.log(student);

//add element at specified index:
student.splice(1,0,['ram,34']);
console.log(student);
student[1][0]='sham,35';
console.log(student);
student.splice(2,1);
console.log(student);

//iteration:
let studentData=[['sat',23],['ram',34]];
studentData.forEach((student)=>{
    student.forEach((Data)=>{
        console.log(Data);
    });
});
//for of loop:
for(let i of studentData){
for(let j of i){
console.log(j);
}}

//for loop:
for(let i=0;i<studentData.length;i++){
    for(let j=0;j<studentData[i].length;j++){
        console.log(studentData[i][j]);
    }}

    //reduce():
    let h=[1,2,3,4];
    let result=h.reduce(multi);
    function multi(h){
        return h*2;
    }
    console.log(result);

    const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);
console.log(arrayOfNumbers);
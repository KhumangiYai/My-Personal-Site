// var a=20;
// var b=10;

// var c=a+b;
// // document.write(a);
// console.log(c)
var intro = "Hello World";
console.log(intro.length);
console.log(intro.toUpperCase());
console.log(intro.replace('Hello World', 'Welcome'));
console.log('\n');

// function sum(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// // sum(1,4);
// // c = sum(10,20);
// console.log(c);
// console.log(sum(10,20));

var par = document.getElementById('OFL');
// console.log(p.innerHTML);
// par.innerHTML = "Boombayah &nbsp";
// p.style = 'color: white';
// par.innerHTML = "AAAA";

var btn = document.getElementById('btn');

var count = 0;

function pressed() {
    // console.log('Button is click');
    count++;
    par.innerHTML = count;
}

btn.addEventListener('click', pressed);

class blackPink{
    constructor(fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    getFullName() {
        console.log(this.fName + ' ' + this.lName);
    }
    changeLastname(newLName){
        this.lName = newLName;
    } 
}

var member1 = new blackPink('Kim','Jisoo',27);
var member2 = new blackPink('Jennie','Kim',26);
var member3 = new blackPink('Roseanne','Park',25);
var member4 = new blackPink('Lalisa','Manoban',25);

member4.getFullName();
member4.changeLastname('Manobal');
member4.getFullName();
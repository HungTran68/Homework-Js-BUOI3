// console.log('hihi');
// Bai 1
function findNumber (number) {
    if( number % 3 == 0 && number % 5 == 0){
        console.log('FizzBuzz');
    }
    else if (number % 3 == 0){
        console.log('Fizz');
    }
    else if(number % 5 == 0){
        console.log('Buzz');
    }
}
console.log('bai 1');
findNumber(33);

// Bai 2: gai phuong trinh bac nhat ax + b = 0;

function secondTask (a,x,b){
    if (a == 0){
        console.log('phuong trinh nay vo nghiem'  );
    }
    else{
        console.log('phuong trinh co nghiem x = ' +(-b/a));
    }
} 
console.log('bai 2');
secondTask(0,3,5);

// /Bai 3 giai phuong trinh bac 2 ax^2 +bx +c = 0
function thirdTask (a,x,b,c) {
    if (a == 0){
        if(b == 0) {
			if(c == 0) {
				console.log('Phuong trinh vo so nghiem!');
			} else {
				console.log('Phuong teinh tren khong co nghiem!');
			}
		} else {
			console.log('Nghiem phuong trinh x = ' +(-c/b))
		}
    }
    if (a != 0){
        dt = b*b - 4*a*c;
		if(dt < 0) {
			console.log('Phuong trinh nay vo nghiem !');
		} else if(dt == 0) {
			console.log('Nghiem phuong trinh x1 = x2 = ' +(-b/(2*a)));
		} else {
			x1 = (-b + Math.sqrt(dt))/(2*a)
			x2 = (-b - Math.sqrt(dt))/(2*a)
			console.log(`Nghiem x1 = ${x1}, x2 = ${x2}`)
		}
    }
}

console.log('bai3');
thirdTask(2,2,2,3);
// let BMI;
let BMI = function caculateBmi (w,h) {
    return (w/(h*h));  
}

console.log('BMI',BMI);
function checkBMI(bmi) {
   console.log(BMI);
    if( bmi >= 25 && bmi <= 29,9 ){
        console.log('Ban dang bi thua can !');
    }
    else if ( bmi >= 18.5 && bmi <= 24.9){
        console.log('Ban dang o muc can nang ly tuong !');
    }
    else if (bmi > 30 ) {
        console.log('Ban dang bi beo phi');
    }
    else{
         console.log('Ban dang bi suy dinh duong');
    }
}
console.log('bai 4');

checkBMI(BMI(65,1.63));

function exchangeFahrenheit(c) {
    return c * 9/5 + 32;
}
console.log('Bai 5');
console.log('do F la', exchangeFahrenheit(30));
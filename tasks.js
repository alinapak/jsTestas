//1.
// function biggerOrSmaller (a,b) {
//    if (a>b) {
//       console.log(a);
//    }
//    else if (b>a) {
//       console.log(b);
//    }
//    else
//    console.log(b +""+"="+""+ a);
// }
// biggerOrSmaller (4,4);

// 2.
// for (let i=1; i<=10;i++) {
// console.log(i);}

// 3.
// for (let i=0;i<=10;i+=2) {
//    console.log(i);
// }

// 4.
// for (let i=0;i<5;i++) {
//       console.log(Math.floor(Math.random(i)*11));
//    }

// 5.
// do {
//    i = (Math.floor(Math.random() * 11));
//    console.log(i);
// }
// while (i !== 5);

//6.
// let arr = []
// do {
// x = (Math.floor(Math.random() * 21) + 10);  // susikuria array kurio reiksmes nuo 10 iki 30 imtinai
// arr.push(x);
// }
// while (arr.length<=20 || arr.length >=30);
// console.log(arr);
// let max = arr[0];
// for (let i=0; i<arr.length; i++) {
//    if (arr[i] > max) 
//    {max=arr[i]}
// }
// console.log(max);


7.
let arr =  [];
for (let i=0; i<100; i++) {
   let ch = Math.floor(Math.random() * 4) + 1;
if (ch===1) {
   arr.push("A");
}
else if (ch===2) {
   arr.push("B");
}
else if (ch===3) {
   arr.push("C");
}
else if(ch===4) {
   arr.push("D");
}
}
console.log(arr);
const count = {};
for (const element of arr) {
   if (count[element]) {
     count[element] += 1;
   } else {
     count[element] = 1;
   }
 }
console.log(count);

//8. 
// function lygineSuma(a, b) {
//    if (typeof a === 'number' && typeof b === 'number' && (a + b) % 2 === 0) {
//       console.log(a + b);
//    }
//    else if (typeof a === 'object' && typeof b === 'object' && (a.length + b.length) % 2 === 0) {
//       console.log(a.length + b.length);
//    }
//    else if ((typeof a === 'number' && typeof b === 'number' && (a + b) % 2 === 1) || (typeof a === 'object' && typeof b === 'object' && (a.length + b.length) % 2 === 1)) {
//       console.log("Suma nelygine");
//    }
//    else {
//       console.log("Nevienodi kintamieji");
//    }
// }
// lygineSuma([10, 20, "as", 40], [10, 20, 30, 40]);
// lygineSuma(10, 5);
// lygineSuma(10, ["aa"]);


//9. 
// function pirminisSkaicius(x) {
//   if (typeof x !== 'number') {
//     console.log('Pateiktas kintamasis nėra skaičius');
// }
// else if (x!== Number.isInteger(x)) {
//   console.log("pateiktas kintamasis nėra sveikasis skaičius")
// }
//    if (x!==NaN && x===1 || (x!==2 && x%2===0) || (x!==3 &&x%3===0) ||(x%5===0&&x!==5) ||(x%7===0&&x!==7))
//       {
//          console.log("Skaicius nera pirminis");
//    }
//    else 
//    console.log("Radom pirmini skaiciu");
// }
// pirminisSkaicius(1.5);

// 9 teisingas:
// function pirminisSkaicius(a) {
//   if (typeof a !== 'number') {
//       return 'Pateiktas kintamasis nėra skaičius';
//   }
//   let count = 0;
//   for (let i = 1; i <= a; i++){
//       if (a % i === 0) {
//           count++;
//       }
//   }
//   if (count < 2) {
//       return 'Įvestas blogas skaičius';
//   }
//   if (count === 2) {
//       return 'Įvestas skaičius yra pirminis';
//   }
//   if (count > 2) {
//       return 'Įvestas skaičius yra sudėtinis';
//   }
// }

//10. 
// let arr = [];
// let i;
// do {
//    i=Math.floor(Math.random() * 10);
// arr.push(i);
// }
// while (arr.length<10)
// console.log(arr);

// //regex format phone number
// let formatPhoneNumber = (arr) => {
//    var cleaned = ('' + arr).replace(/\D/g, '')
//   var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
//   if (match) {
//     return '(' + match[1] + ') ' + match[2] + '-' + match[3]
//   }
//   return null
// }
// console.log(formatPhoneNumber(arr));


//10 labiau suprantamas :
 
function telefonoNumeris(a){
  if (!Array.isArray(a)) {
      return 'Kintamasis nėra masyvas';
  }
  if (a.length !== 10) {
      return 'Masyvas yra netinkamo ilgio';
  }
  for (let i = 0; i < 10; i++) {
      if ( typeof a[i] !== 'number') {
          return 'Masyvo reikšmės turi būti skaičiai';
      }
  }
  return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;  //Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".
}




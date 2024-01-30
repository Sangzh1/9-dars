1-masal

// let num =[3,6,8,4,2,-1,0,5,-11,-14,-45];
 function num$(arr) {
     let javobi = arr.sort(function(a,b) {
         return a-b
    })
     javobi= num[0]
     return javobi
 }
 console.log(num$(num));

// 2-masala


 let array = [2, 4, 6, 8, 5, 7, 3, 9] ;
 function number$(array) {
    let sum_1 = 0;
   for (let i = 0; i < array.length; i++) {
     if (i % 2 == 1) {
         sum_1 += i;
      }
         }
     return sum_1;
 }
 
  console.log(number$(arr))

// 2-masala


let arr = [2, 4, 6, 8, 5, 7, 3, 9];
 function number_(array) {
    let sum = 0;
 for (let i = 0; i < array.length; i++) {
  if (arr[i] % 2 == 1) {
     sum += i;
   }
 }
return sum
 }
 console.log(number_(arr));

// 3-masala

let fals=[2,3,5,7,9,1,23,45,37];
let tru;
for (let i= false[0]; i<false.length; i++){
    for (let j = 2; j < i; j++) {

        if (i % j == 0) {
          true = false;
          break;
        }
      }

      if (true == true){
        console.log(false[j])
      }
      
}
//  console.log(true);

// 4-masal
 let sum_2 = [3, 6, 4, 8, 10, 14, 12];
 function arr(array) {
    let c = 0;
    for (let i = 0; i < array.length; i++) {
      if (sum_2[i] % 3 == 0) {
       c++;
      }
    } 
    return c
}

 console.log(arr(sum_2));


let arr1 = ['admin', 'agent']
let arr2 = [11, 22, 33, 'agent']


for (let i = 0; i < arr1.length; i++) {
   for (let o = 0; o < arr2.length; o++) {
      if (arr1[i].includes(arr2[o])) {
         return true
      } else {
         return false
      }
   }
}
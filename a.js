var str = "asdjkhasdkjhasdhttp://abc.com[745,266]a123asdkjhasdhttp://abc.com[74,26]asd123dhttp://abc.com[45,23]asdjkhasdasdjhasdhttp://abc.com[12,946]"



let value = 'http'
let indexes = []
let index = str.indexOf(value)

while (index !== -1) {
   indexes.push(index);
   index = str.indexOf(value, index + 1);
}

console.log(indexes);

let crr = []

let vrr = indexes.map((v, i) => {
   crr.push(str.slice(v, indexes[i + 1]))
})
console.log(crr);


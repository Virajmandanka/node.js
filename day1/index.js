
// const {sum}=require("./export")

const {sum,sub,mul,divi}=require("./export")
console.log(process.argv)
const a =Number( process.argv[2])
const b =Number( process.argv[3])
 

console.log(sum(a,b))
console.log(sub(a,b))

console.log(mul(a,b))
console.log(divi(a,b))

// console.log(process.argv)
// console.log(sum)
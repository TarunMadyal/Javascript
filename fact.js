
let a=6
function factorial(n){
    let arr = Array.from(Array(n+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b)=>{
        return a*b
    })
    console.log(c)
}
factorial(a)

let b=6
function fact(n){
    e=1
    for (let i=1;i<=n;i++){
       e=e*i 
      
    }
    return e
}
console.log(fact(b))

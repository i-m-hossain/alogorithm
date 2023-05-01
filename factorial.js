//! problem statement: Give an integer 'n', find the factorial of that integer

//? 5! = 5*4*3*2*1

function factorial(n){
    let factorial = 1
    for(let i=n; i>0;i--){
        factorial *=  i
    }
    return factorial;
}
console.log(factorial(0));


//? complexity O(n)
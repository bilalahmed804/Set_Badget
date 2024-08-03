let input = document.getElementById("input")
// console.log(input);


let product = document.getElementById("product")

// console.log(product);

let cost = document.getElementById("cost");
// console.log(cost);

let budget = document.getElementById("set-budget");
// console.log(budget);

let addExpensive = document.getElementById("expensive");
// console.log(addExpensive);

let chackNumber = /[0-9]/g

budget.addEventListener("click",function(){
    if(chackNumber.test(input.value)){

        
    }else{
        alert("Enter your Number")
    }
})
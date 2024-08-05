let input = document.getElementById("input")
<<<<<<< HEAD
let product = document.getElementById("product")

let cost = document.getElementById("cost");

let budget = document.getElementById("set-budget");
let addExpensive = document.getElementById("expensive");

let budgetShow = document.getElementById("input-budget")

let checkVal;


budget.addEventListener("click",function (){

    if(input.value == ""){
        Swal.fire({
            title: "Before input field!",
            icon: "warning",
          })
    }else{

        if(input.value.length < 7 ){
            budgetShow.innerHTML =  `<ul id="budget2">
            
            <li>${input.value}</li>
            <li>0</li>
            <li style="margin-left: 180px;">0</li>
            </ul>`
            
            checkVal = true
            userBudget = input.value
        }else{
            alert("Less than six number")
        }
    }
    
    })
let budgetShow02 = document.getElementById("input-budget02")  

let expSum = 0
addExpensive.addEventListener("click",function(){
    if(cost.value == ""){
        Swal.fire({
            title: "Before input field!",
            icon: "warning",
        })
    }else{
        let expNum = Number(cost.value)
        
        let costArray = []
        if(checkVal === true){
            costArray.push(expNum)
            for (let i = 0; i < costArray.length; i++) {
                expSum += costArray[i]
                
            };
            
            let remain = input.value - expSum ;
            
            budgetShow.innerHTML =  `<ul id="budget2">
            <li>${input.value}</li>
            <li>${expSum}</li>
            <li style="margin-left: 180px;">${remain}</li>
            </ul>`
            
            budgetShow02.innerHTML +=  `<ul id="budget2">
            <li>${product.value.toUpperCase()}</li>
            <li>${cost.value}</li>
            <li style="margin-left: 180px; color: #2a9cfa;"><i onclick="dlt(this)" class="fa-solid fa-trash-can"></i></li>
            </ul>`
            
                }else{
                    Swal.fire({
                        title: "Add budget first",
                        icon: "question"
                      });
                    
                }
            }  
            cost.value = "" ;
            product.value = "" ;   
            })

function dlt(element){
    let listItem = element.parentNode.parentNode;
    listItem.remove()
}
=======
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
>>>>>>> e12aab1cccd1c5f5b7410eca95708c6b285aa6a6

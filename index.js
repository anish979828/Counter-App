let h1 = document.querySelector("h1")
h1.innerText = "✅Counter App"

let Counter = document.createElement("h2")
Counter.innerText = 0
let body = document.body
let div = document.createElement("div")
let inc = document.createElement("button")
inc.innerText = "increment"
let dec = document.createElement("button")
dec.innerText = "decrement"
let reset = document.createElement("button")
reset.innerText = "reset"
div.append(Counter,inc,dec,reset)
document.body.append(div);
document.querySelector("div").style.textAlign = "center"
document.querySelectorAll("button").forEach(ele => ele.style.color = "red")


inc.addEventListener("click" , function(){
     Counter.innerText = (+Counter.innerText + 1);
})
dec.addEventListener("click" , function(){
    if(Counter.innerText <= 0){
        return;
    }else{
        Counter.innerText = Counter.innerText - 1
    }
;
})
reset.addEventListener("click" , function(){
    Counter.innerText = 0;
})

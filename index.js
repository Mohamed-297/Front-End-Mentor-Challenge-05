let subBut=document.querySelector(".subscribe label button")
let email=document.querySelector(".subscribe label input")
let emailReg=/\w+@\w+.(com||net||org)/ig;
let label = document.querySelector(".subscribe label")
let face=document.querySelector(".fa-brands.fa-facebook-f")
let inst=document.querySelector(".fa-brands.fa-instagram")
let twit=document.querySelector(".fa-brands.fa-twitter")
subBut.addEventListener("click",()=>{
    subBut.style.cssText="background-color:hsl(321, 100%, 78%);"
    if(email.value.match(emailReg)){
        email.style.cssText="border:1px solid hsl(0, 100%, 63%)"
        let div=document.createElement("div")
        let divText=document.createTextNode("check your email please")
        label.style.cssText="display: grid;grid-template-columns: 1fr 1fr;grid-row-gap: 12px; "
        div.style.cssText="color:hsl(0, 100%, 63%);font-size:12px"
        div.appendChild(divText)
        label.appendChild(div);
        
    }
    
})
function color(el){

    el.addEventListener("click",()=>{
        el.style.cssText="background-color:cyan;"
    })
}
function colorEl(el){

    el.addEventListener("click",()=>{
        el.style.cssText="color:cyan;"
    })
}
color(face)
color(twit)
colorEl(inst)

const error=document.querySelector(".error")
const form=document.querySelector(".main")
const password=document.querySelector(".password")
const cancel=document.querySelector(".cancel")
const confirmPassword=document.querySelector(".cofpassword")
form.addEventListener("submit",(e)=>{
   e.preventDefault()
   const newerror=[]
   error.innerText = "";
if(password.value!=confirmPassword.value){
    newerror.push("Passwords should match")
    }
    
if(password.value.length<8){
    newerror.push("passwords should be atleast 8 characters")
    
}
if(newerror.length>0){
    error.innerText = newerror.join("\n");
}else{
    form.submit()
}


})
cancel.addEventListener("submit",()=>{
    form.reset()
})

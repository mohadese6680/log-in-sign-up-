const signupbtn=document.getElementById('signup');
const loginbtn=document.getElementById('login');
const container=document.getElementById('container');

signupbtn.addEventListener("click",()=> {
    container.classList.add("right-panel-active");
});
loginbtn.addEventListener("click",()=> {
    container.classList.remove("right-panel-active");
});

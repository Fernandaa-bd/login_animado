let btnTheme = document.getElementById('btn-theme');
let login = document.getElementById('login');
let body = document.getElementById('body');

btnTheme.addEventListener("click", ()=>{
    btnTheme.classList.toggle('dark');
    login.classList.toggle('dark');
    body.classList.toggle('dark');
})
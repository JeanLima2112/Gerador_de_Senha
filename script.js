let button = document.querySelector('#button');
let slider =document.querySelector('#slider');

let password = document.querySelector('#password');
let size = document.querySelector('#valor');

let container = document.querySelector('#container-password');
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*()"_-+=:;,.^~}{';
let Novasenha = "";

size.innerHTML = slider.value;

slider.oninput = function(){
    size.innerHTML = this.value;
}

function generatepassword(){
    let pass = "";
    for(let i=0, n= charset.length; i<slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n));
    }
    container.classList.remove('hide');
    password.innerHTML = pass
    Novasenha =pass;

}
 function copypassword(){
    alert('Senha copiada!')
    navigator.clipboard.writeText(Novasenha)
 }
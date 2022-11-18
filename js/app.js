const btns = document.getElementsByClassName('item-box');
const letters = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialChars = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '{', '|', '}', '~'];
let typePass;
let lenPass;
let passForm;
let isUpper;
let temp = '';

//apply the function to the buttons and set the type of password to be generated
for(var i = 0; i< btns.length; i++){
    btns[i].addEventListener('click', function(){
        for(var i = 0; i < btns.length; i++){
            btns[i].className = 'item-box';
        }
            this.classList.toggle('active');
            let title = document.getElementsByClassName('choice')[0];
            let secureTitle = document.getElementsByClassName('pass-len')[1];
            
            if(this.id == '1'){
                title.textContent = "NÚMEROS";
                secureTitle.textContent = "Segurança: Fraca";
                typePass = 1;
                document.getElementById('result').value = '';
            } else if(this.id == '2'){
                title.textContent = "LETRAS";
                secureTitle.textContent = "Segurança: Fraca";
                typePass = 2;
                document.getElementById('result').value = '';
            } else if(this.id == '3'){
                title.textContent = "LETRAS E NÚMEROS";
                secureTitle.textContent = "Segurança: Média";
                typePass = 3;
                document.getElementById('result').value = '';
            } else{
                title.textContent = "LETRAS, NÚMEROS E ESPECIAIS";
                secureTitle.textContent = "Segurança: Forte";
                typePass = 4;
                document.getElementById('result').value = '';
            }
    });
}

//Initialize the password generator
const button = document.getElementById('generate');
button.addEventListener('click', typeChooser);

function typeChooser(){
    switch(typePass){
        case 1:
            iniType1();
            break;
        case 2:
            iniType2();
            break;
        case 3:
            iniType3();
            break;
        case 4:
            iniType4();
            break;
    }
}

//type 1
function iniType1(){
    fieldLoader(); 
    temp = '';

    for(let i = 0; i < lenPass; i++){
        generateNumber();
    }
    passForm.value = temp;
}

//type 2
function iniType2(){
    fieldLoader();
    temp = '';

    for(let i = 0; i < lenPass; i++){ 
        generateLetter();
    }
    passForm.value = temp;
}

//type 3
function iniType3(){
    fieldLoader();
    temp = '';

    for(let i = 0; i < lenPass; i++){
        opt = Math.ceil(Math.random() * 2);
        if(opt == 1){
            generateLetter();
        } else{
            generateNumber();
        }
    }
    passForm.value = temp;
}

//type 4
function iniType4(){
    fieldLoader();
    temp = '';

    for(let i = 0; i < lenPass; i++){
        opt = Math.ceil(Math.random() * 5);

        if(opt >= 1 && opt <= 3){
            generateLetter();

        } else if(opt == 4){
            generateNumber();

        } else{
            generateSpecialChar()
        }
    }
    passForm.value = temp;
}

//load the password length and the field to be filled
function fieldLoader(){
    lenPass = document.getElementById('pass').value;
    passForm = document.getElementById('result');
}

//generate a random number
function generateNumber(){
    temp += Math.floor(Math.random() * 10);
}

//generate a random letter
function generateLetter(){
    isUpper = Math.ceil(Math.random() * 2);
            if(isUpper == 1){
                let t = Math.floor(Math.random() * 27);
                temp += letters[t].toUpperCase();
    
            } else{
                let t = Math.floor(Math.random() * 27);
                temp += letters[t];
            }
}

//generate a random special character
function generateSpecialChar(){
    let t = Math.floor(Math.random() * 27);
    temp += specialChars[t];
}

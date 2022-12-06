const passwordBox = document.querySelector('.password-box');
const Btn = document.querySelector('button');
const passwords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '$'];


Btn.addEventListener('click', (e)=> {
    e.preventDefault()
    
    let num = '';
    for(let i = 0; i < 15; i++){
        num += passwords[getRandomPassword()]
        passwordBox.innerText= num;
    }
});

function getRandomPassword(){
    return Math.floor(Math.random() * passwords.length)
};
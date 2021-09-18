const commentArea = document.getElementById('comment'),
    phoneArea = document.getElementById('phonenumber'),
    btn = document.querySelector('.btn');
    
let regexp = /^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
let div = document.createElement('div');

function checkComment() {
    while (commentArea.value === '') {
        commentArea.value = 'apankov4696@gmail.com';
    }
}

function validate() {
    if (!regexp.test(phoneArea.value)) {
        div.className = "invalid";
        div.innerText = "Invalid number!";
        td.append(div);
    } else {
        div.className = "valid";
        div.innerText = "Valid number!";
        td.append(div);
    };
}

btn.addEventListener('click', checkComment);
btn.addEventListener('click', validate);
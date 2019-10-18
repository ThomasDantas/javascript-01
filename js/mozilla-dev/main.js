// var myHeading = document.querySelector('h1');
// myHeading.textContent = "hello world";

// document.querySelector('h1').textContent = 'WHOA'

// document.querySelector('html').onclick = function () {
//     alert('ouch');
// }

var image = document.querySelector('img');

image.onclick = function () {
    var srcImg = image.getAttribute('src');
    if (srcImg === 'images/firefox-icon.png') {
        image.setAttribute('src', 'images/brasao.png')
    } else {
        image.setAttribute('src', 'images/firefox-icon.png')
    }
}

var btn = document.querySelector('button');
var heading = document.querySelector('h1');

function setuser() {
    var name = prompt('Por favor digite seu nome: ')
    localStorage.setItem('name', name);
    heading.textContent = 'massa ' + name;
}

if (!localStorage.getItem('name')) {
    setuser();
} else {
    var storedName = localStorage.getItem('name');
    heading.textContent = 'massa ' + name;
}

btn.onclick = function () {
    setuser();
}
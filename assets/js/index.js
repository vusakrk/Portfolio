let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let sec = document.querySelector('.sec');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    sec.classList.toggle('active');
}
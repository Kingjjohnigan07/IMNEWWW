let left = document.querySelector('.left')
let right = document.querySelector('.right')
let leftRight = document.querySelector('.leftRight')
let text = document.querySelector('p')
let cabin = document.querySelector('.cabin');
let skull = document.querySelector('.skull');
cabin.style.display ="none";
skull.style.display ="none";


left.addEventListener('click',function(){

leftRight.style.display ="none";
left.style.display ="none";
right.style.display ="none";
cabin.style.display ="block";
skull.style.display ="none";
text.innerHTML=" You've entered a abandoned Cabin in the Woods";

});

cabin.addEventListener('dblclick',function(){

    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    cabin.style.display ="none";
    skull.style.display ="block";
    text.innerHTML=""
});

// cabin.addEventListener('dblclick',function(){



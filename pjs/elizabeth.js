document.oncontextmenu = function(){return false;}
document.onselectstart = function(){return false;}
document.onmousedown = function(){return false;}
let body =  document.getElementById('body');
let eli1 = document.getElementById('eli1');
let eli2 = document.getElementById('eli2');
let eli3 = document.getElementById('eli3');
let eli4 = document.getElementById('eli4');
let eli5 = document.getElementById('eli5');
let eli6 = document.getElementById('eli6');
let elikoe = document.getElementById('elivoice');
let dondon = document.getElementById('konkonse');
let konkon = document.getElementById('konkon');
let door = document.getElementById('door');

door.addEventListener('mouseover',function(){door.style.cursor = 'pointer';});
door.addEventListener('click',function(){
    elikoe.load();
    elikoe.play();
    door.style.display = 'none';
    eli1.style.display = 'block';
    eli2.style.display = 'block';
    eli3.style.display = 'block';
    eli4.style.display = 'block';
    eli5.style.display = 'block';
    eli6.style.display = 'block';
});

function elizabethHide(){
    eli1.style.display = 'none';
    eli2.style.display = 'none';
    eli3.style.display = 'none';
    eli4.style.display = 'none';
    eli5.style.display = 'none';
    eli6.style.display = 'none';
}

eli1.addEventListener('mouseover',function(){eli1.style.cursor = 'pointer';});
eli1.addEventListener('click',function(){location.href = 'akeru.html';});

eli2.addEventListener('mouseover',function(){eli2.style.cursor = 'pointer';});
eli2.addEventListener('click',function(){
    elikoe.pause();
    elizabethHide();
    body.style.backgroundColor = '#a40000';
    dondon.load();
    dondon.play();
    konkon.style.display = 'inline';
});

eli3.addEventListener('mouseover',function(){eli3.style.cursor = 'pointer';});
eli3.addEventListener('click',function(){location.href = 'utsuru.html';});

eli4.addEventListener('mouseover',function(){eli4.style.cursor = 'pointer';});
eli4.addEventListener('click',function(){location.href = 'ydad.html';});

eli5.addEventListener('mouseover',function(){eli5.style.cursor = 'pointer';});
eli5.addEventListener('click',function(){location.href = 'oiaaeptoiympe.html';});

eli6.addEventListener('mouseover',function(){eli6.style.cursor = 'pointer';});
eli6.addEventListener('click',function(){location.href = 'curse.html';});
//館入口のアイテム
let mainent1 = document.getElementById('mainent1');
let mainent2 = document.getElementById('mainent2');
let entdoor1 = document.getElementById('entdoor1');
let entdoor2 = document.getElementById('entdoor2');
//メイン1のアイテム
let mainpic1 = document.getElementById('mainpic1');
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let yukie = document.getElementById('yukie');
//メイン2のアイテム
let mainpic2 = document.getElementById('mainpic2');
let hantei = document.getElementById('hantei');
let mirror1 = document.getElementById('mirror1');
let mirror2 = document.getElementById('mirror2');
let mirror3 = document.getElementById('mirror3');
let mirror4 = document.getElementById('mirror4');
//SE・BGM
let doorse = document.getElementById('doorse');
let bgm = document.getElementById('bgm');
let yukiekoe = document.getElementById('yukiekoe');
let dollkoe = document.getElementById('dollkoe');


//館入口
entdoor1.addEventListener('click',function(){
    doorse.load();
    doorse.play();
    mainent1.style.display = 'none';
    entdoor1.style.display = 'none';
    mainent2.style.display = 'inline';
    entdoor2.style.display = 'inline';
});

entdoor2.addEventListener('click',function(){
    bgm.load();
    bgm.play();
    mainent2.style.display = 'none';
    entdoor2.style.display = 'none';
    let changePoint = Math.floor(Math.random()*2)+1;
    if(changePoint === 1){
        mainpic1.style.display = 'inline';
        dice1.style.display = 'inline';
        dice2.style.display = 'inline';
        dice3.style.display = 'inline';
        dice4.style.display = 'inline';
    }
    if(changePoint === 2){
        mainpic2.style.display = 'inline';
        hantei.style.display = 'inline';
        mirror1.style.display = 'inline';
        mirror2.style.display = 'inline';
        mirror3.style.display = 'inline';
        mirror4.style.display = 'inline';
}
});

//4つめのボタンを押した時
dice4.addEventListener('click',function(){
    bgm.pause();
    yukiekoe.load();
    yukiekoe.play();
    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    mainpic1.style.display = 'none';
    yukie.style.display = 'inline';
});

mirror4.addEventListener('click',function(){
    bgm.pause();
    yukiekoe.load();
    yukiekoe.play();
    mirror1.style.display = 'none';
    mirror2.style.display = 'none';
    mirror3.style.display = 'none';
    mirror4.style.display = 'none';
    mainpic2.style.display = 'none';
    hantei.style.display = 'none';
    yukie.style.display = 'inline';
});

//人形の顔をクリックした時
hantei.addEventListener('click',function(){
    dollkoe.load();
    dollkoe.play();
});

dice1.addEventListener('click',function(){location.href = 'smpelibon.html';});
dice2.addEventListener('click',function(){location.href = 'smpkagamin.html';});
dice3.addEventListener('click',function(){location.href = 'smpdoor.html';});

mirror1.addEventListener('click',function(){location.href = 'smpelibon.html';});
mirror2.addEventListener('click',function(){location.href = 'smpkagamin.html';});
mirror3.addEventListener('click',function(){location.href = 'smpdoor.html';});
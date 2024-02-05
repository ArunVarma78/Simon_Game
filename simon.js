let userSeq = [];
let comSeq = [];
let level = 0;
let started = false;

let h3 = document.querySelector('h3');
let btns = ['red','orange','green','blue'];

document.addEventListener('mousedown',function (){
    if(started==false){
        levelUp();
        started=true;
    }
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    },250);
}
function backFlash(back){
    back.classList.add('backcolor');
    setTimeout(function (){
        back.classList.remove('backcolor');
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerHTML=`Level ${level}`;

    let randNum= Math.floor(Math.random()*3);
    let randColor = btns[randNum];
    let btn = document.querySelector(`.${randColor}`);
    comSeq.push(randColor);
    btnFlash(btn);
}

function checkAns(idx){

    if(userSeq[idx]===comSeq[idx]){
        if(userSeq.length == comSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML= `Game Over!<br> Your score was <b>${level}</b><br> Press any key to start.`;
        back = document.querySelector('body');
        backFlash(back);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll('.btn');
for(btn of allBtn){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    comSeq = [];
    userSeq = [];
    level = 0;
}
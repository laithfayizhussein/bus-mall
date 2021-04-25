'use strict';

let left = document.getElementById('firstImg');
let middle = document.getElementById('secondImg');
let right = document.getElementById('thirdImg');
let container=document.getElementById('container');
let count = 0;
let maxCount = 25;
let leftImg ;
let middleImg ;
let rightImg ;
let allImg=[];



function Products (proName , photoPath){
  this.name = proName;
  this.path = photoPath;
  this.itemShowNum=0;
  this.vote=0;
  allImg.push(this);
}


function objects() {
  new Products ('bag','..//img/bag.jpg');
  new Products ('banana','..//img/banana.jpg');
  new Products ('bathroom','..//img/bathroom.jpg');
  new Products ('boots','..//img/boots.jpg');
  new Products ('breakfast','..//img/breakfast.jpg');
  new Products ('bubblegum','..//img/bubblegum.jpg');
  new Products ('chair','..//img/chair.jpg');
  new Products ('cthulhu','..//img/cthulhu.jpg');
  new Products ('dog-duck','..//img/dog-duck.jpg');
  new Products ('dragon','..//img/dragon.jpg');
  new Products ('pen','..//img/pen.jpg');
  new Products ('pet-sweep','..//img/pet-sweep.jpg');
  new Products ('scissors','..//img/scissors.jpg');
  new Products ('shark','..//img/shark.jpg');
  new Products ('sweep','..//img/sweep.png');
  new Products ('unicorn','..//img/unicorn.jpg');
  new Products ('usb','..//img/usb.gif');
  new Products ('water-can','..//img/water-can.jpg');
  new Products ('tauntaun','..//img/tauntaun.jpg');
  new Products ('wine-glass','..//img/wine-glass.jpg');
}


objects();

function gIndix() {
  return Math.floor(Math.random()*allImg.length);

}

function renderImg() {
  leftImg=gIndix ();
  middleImg=gIndix();
  rightImg=gIndix();



  while (leftImg === rightImg || leftImg === middleImg || rightImg === middleImg ) {
    leftImg=gIndix();
    rightImg= gIndix();
    middleImg= gIndix();
  }

  allImg[leftImg].itemShowNum+=1;
  allImg[middleImg].itemShowNum+=1;
  allImg[rightImg].itemShowNum+=1;

  left.setAttribute('src',allImg[leftImg].path);
  middle.setAttribute('src',allImg[middleImg].path);
  right.setAttribute('src',allImg[rightImg].path);

}
renderImg();



let arrayNames=[];
let arrayVotes=[];
let arrayShown=[];


container.addEventListener('click',clickHandle);


function clickHandle(event) {
  count++;
  if (maxCount> count) {
    if(event.target.id === 'firstImg'){
      allImg[leftImg].vote++;
    }else if(event.target.id === 'secondImg'){
      allImg[middleImg].vote++;
    }else{
      allImg[rightImg].vote++;
    }
    renderImg(); }
  else{

    container.removeEventListener('click',clickHandle);
    let ul=document.getElementById('list');
    for (let i = 0; i < allImg.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${allImg[i].name} has been shown ${allImg[i].itemShowNum} , and it has ${allImg[i].vote} votes`;
      arrayNames.push(allImg[i].name);
      arrayVotes.push(allImg[i].vote);
      arrayShown.push(allImg[i].itemShowNum);
    }
  }
}






let info_sl = [
    {
    name: 'Rostov-on-Don, Admiral',
    url: 'slide1',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
},
{
    name: 'Sochi Thieves',
    url: 'slide2',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
},
{
    name: 'Rostov-on-Don Patriotic',
    url: 'slide3',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
}
];

let sliderArrow = document.querySelector('.arrow')
let sliderArrowRevers = document.querySelector('.arrow_revers')
let dotContainer = document.querySelector('.navigation-slider_2_dotCont')
let dot = dotContainer.querySelectorAll('.dot')
let city = document.querySelector('#city')
let area = document.querySelector('#area')
let time = document.querySelector('#time')
let sliderImg = document.querySelector('.slider')
let listObj = document.querySelector('.ul-slider')

function slider (indexActive) {
    city.innerText = info_sl[indexActive].city;
    area.innerText = info_sl[indexActive].area;
    time.innerText = info_sl[indexActive].time;

    sliderImg.querySelector('.activ').classList.remove("activ"); 
    sliderImg.querySelector(".n" + indexActive).classList.add("activ");

    
    dotContainer.querySelector(".activ").classList.remove("activ");
    console.log(dotContainer)
    dotContainer.querySelector(".n" + indexActive).classList.add("activ");


    listObj.querySelector(".activ").classList.remove("activ");
    listObj.querySelector(".n" + indexActive).classList.add("activ");
}

let actualIndex = 0;

sliderArrowRevers.addEventListener ('click', () => {
    actualIndex +=1;
    slider(actualIndex = (actualIndex > info_sl.length - 1) ? 0 : actualIndex);
})

sliderArrow.addEventListener ('click', () => {
    actualIndex -=1;
    slider(actualIndex = (actualIndex < 0) ? info_sl.length-1 : actualIndex)
})

function initDots() {
    info_sl.forEach((elem, index) => {
      let dots = `<div class="dot n${index} ${index === 0? "activ" : ""}" data-index="${index}"></div>`;
      dotContainer.innerHTML += dots;
    });
    dotContainer.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener("click", function() {
        slider(this.dataset.index);
      })
    })
}

function listObject(){
    listObj.querySelectorAll('.slider-button').forEach(obj => {
        obj.addEventListener("click", function() {
          slider(this.dataset.index);
        })
    })
}


document.addEventListener("DOMContentLoaded", function() {
    initDots();
    listObject();
  });
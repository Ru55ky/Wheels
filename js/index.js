let btn = document.querySelector('.btn');
btn.addEventListener("click", function(event){
    event.preventDefault();
    btn.classList.toggle('btn_active');
})

let imgText = document.querySelector('.text-none');
let imgBike1 = document.querySelector('.gallery-bike1');
imgBike1.addEventListener("mouseover", function(evt){
    evt.preventDefault();
    imgText.classList.remove('text-none');
    imgText.classList.add('gallery-bike1-text');
})
imgBike1.addEventListener("mouseout", function (evt) { 
    evt.preventDefault();
    imgText.classList.remove('gallery-bike1-text')
    imgText.classList.add('text-none')
 })
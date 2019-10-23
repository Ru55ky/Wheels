let btn = document.querySelector('.btn');
btn.addEventListener("click", function(event){
    event.preventDefault();
    btn.classList.toggle('btn_active');
})

/*настройка hover эффектов в галерее "Social"*/ 
/*первое фото*/ 
let imgText = document.querySelector('.text-none');
let imgBike1 = document.querySelector('.gallery-bike1');
imgBike1.addEventListener("mouseover", function(evt){
    evt.preventDefault();
    imgText.classList.remove('text-none');
    imgText.classList.add('gallery-bike1-text');
})
imgBike1.addEventListener("mouseout", function (evt) { 
    evt.preventDefault();
    imgText.classList.remove('gallery-bike1-text');
    imgText.classList.add('text-none');
 })
 /*второе фото*/
 let imgBike2 = document.querySelector('.gallery-bike2');
 let imgText2 = document.querySelector('.text-none2');

 imgBike2.addEventListener('mouseover', function(){
    imgText2.classList.remove('text-none2');
    imgText2.classList.add('gallery-bike2-text');
 })
 imgBike2.addEventListener("mouseout", function(evt){
     evt.preventDefault();
     imgText2.classList.remove('gallery-bike2-text');
     imgText2.classList.add('text-none2');
 })
 /*третье фото*/
 let imgBike3 = document.querySelector('.gallery-bike3');
 let imgText3 = document.querySelector('.text-none3');

 imgBike3.addEventListener('mouseover', function(){
    imgText3.classList.remove('text-none3');
    imgText3.classList.add('gallery-bike3-text');
 })
 imgBike3.addEventListener("mouseout", function(evt){
     evt.preventDefault();
     imgText3.classList.remove('gallery-bike3-text');
     imgText3.classList.add('text-none3');
 })
 /*четвертое фото*/
 let imgBike4 = document.querySelector('.gallery-bike4');
 let imgText4 = document.querySelector('.text-none4');

 imgBike4.addEventListener('mouseover', function(){
    imgText4.classList.remove('text-none4');
    imgText4.classList.add('gallery-bike4-text');
 })
 imgBike4.addEventListener("mouseout", function(evt){
     evt.preventDefault();
     imgText4.classList.remove('gallery-bike4-text');
     imgText4.classList.add('text-none4');
 })
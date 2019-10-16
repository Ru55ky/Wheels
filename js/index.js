let btn = document.querySelector('.btn');
btn.addEventListener("click", function(event){
    event.preventDefault();
    btn.classList.toggle('btn_active');
})
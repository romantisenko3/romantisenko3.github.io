const slider = tns({
    container: '.reviews__carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false
});

document.querySelector('.prev').addEventListener('click', function (){
    slider.goTo('prev');
}); 

document.querySelector('.next').addEventListener('click', function (){
    slider.goTo('prev');
}); 
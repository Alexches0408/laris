// if (document.documentElement.clientWidth >= 768) {
//   $('.multi-carousel .carousel-item').each(function() {
//     var next = $(this).next();
//     if (!next.length) next = $(this).siblings(':first');
//     next.children(':first-child').clone().appendTo($(this));
//   });
//   $('.multi-carousel .carousel-item').each(function() {
//     var prev = $(this).prev();
//     if (!prev.length) prev = $(this).siblings(':last');
//     prev.children(':nth-last-child(2)').clone().prependTo($(this));
//   });
// }
const dropZone = document.querySelector("#select_form")
const input = document.querySelector("#select_file")
let file
let offset = -75; //Смещение от левого края
const sliderLine = document.querySelector(".slider-line");




document.querySelector('.slider-next').addEventListener('click', function(){
	offset -= 50;
    sliderLine.style.left = offset + 'vw';
    
    // lenght = document.getElementsByClassName('slider-line')[0].getElementsByTagName('img').length
    // if (lenght){
	//     offset += 480;
	//     if (offset>480*(lenght-1)){
	// 	    offset=0;
	//     }
	//     sliderLine.style.right = offset + 'px';
    // }
    // else {
    //     alert("Выберите изображения")
    // }
});


document.querySelector('.slider-next').addEventListener('keydown', function(event){
    if (event.code == 'Enter'){
        lenght = document.getElementsByClassName('slider-line')[0].getElementsByTagName('img').length
        if (lenght){
            offset += 480;
            if (offset>480*(lenght-1)){
                offset=0;
            }
            sliderLine.style.right = offset + 'px';
        }
        else {
            alert("Выберите изображения")
        }
    }
});

document.querySelector('.slider-prev').addEventListener('click', toLeft)

function toLeft(){
    var prevMove = new Promise((resolve, reject)=> {
        offset +=50;
        sliderLine.style.left = offset + 'vw';
        resolve()
    });

    prevMove.then(finish)
};

function finish() {setTimeout(adding, 1000)}


function adding(){
    if (offset >= -25) {
        $('.slider-line').css({'transition-property': 'none'});
        $('.image_in:last').prependTo($('.slider-line'));
        offset = -75;
        sliderLine.style.left = offset + 'vw';
        setTimeout(() => $('.slider-line').css({'transition-property':"all"}), 10);
}};

// function(){
//     offset += 50;
//     sliderLine.style.left = offset + 'vw';
//     if (offset >= -25) {
//         // $('.slider-line').css({'transition': 'none'});
//         $('.image_in:last').prependTo($('.slider-line'));
//         offset = -75;
//         sliderLine.style.left = offset + 'vw';
//         // $('.slider-line').css({'transition':"all ease 1s"});
// }});





document.querySelector('.slider-prev').addEventListener('keydown', function(event){
    if (event.code == 'Enter'){
        lenght = document.getElementsByClassName('slider-line')[0].getElementsByTagName('img').length
        if (lenght){
            offset -= 480;
            if (offset<0){
                offset=480*(lenght-1);
            }
            sliderLine.style.right = offset + 'px';
        }
        else {
            alert("Выберите изображения")
        }
    }
});
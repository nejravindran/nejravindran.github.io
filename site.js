var mobilemenubutton = document.querySelector(".mobilemenubutton");
var mobilemenu = document.querySelector(".mobilemenu");
var deskemenuitems = document.querySelectorAll(".normalmenuwrapper nav ul li");
var mobilemenubutton = document.querySelector(".mobilemenubutton");


mobilemenubutton.addEventListener("click", function(){
    mobilemenu.classList.toggle("showmobilemenu");
})


const deskMenuObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('menuanimation');
            //animation: rotate_menu 0.5s ease-in-out 1;
        }else{
            entry.target.classList.remove('menuanimation');
        }
    });
}, {threshold: 0.5});

deskemenuitems.forEach(item => deskMenuObserver.observe(item));


const mobileMenuObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('burgermenu_animation');
        }else{
            entry.target.classList.remove('burgermenu_animation');
        }
    });
}, {threshold: 0.5});


mobileMenuObserver.observe(mobilemenubutton);
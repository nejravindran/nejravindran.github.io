var mobilemenubutton = document.querySelector(".mobilemenubutton");
var mobilemenu = document.querySelector(".mobilemenu");
var deskemenuitems = document.querySelectorAll(".normalmenuwrapper nav ul li");

mobilemenubutton.addEventListener("click", function(){
    mobilemenu.classList.toggle("showmobilemenu");
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('menuanimation');
            //animation: rotate_menu 0.5s ease-in-out 1;
        }else{
            entry.target.classList.remove('menuanimation');
        }
    });
}, {threshold: 0.5});

deskemenuitems.forEach(item => observer.observe(item));
//observer.observe(deskemenuitem);
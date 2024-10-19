let picsDb = [
    {fileName: 'kid.jpg', description: "Lone Kid (Watercolor)", medium: 'Watercolor', size: '16 x 12 in', price: '', availability: 'Sold', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in' },
    {fileName: 'ritu.jpg', description: "Breeze (Digital)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'abstractgirl.jpg', description: "Abstract Girl (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'angling.jpg', description: "Angling (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'applepicker.jpg', description: "Apple Picking (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'appleseller.jpg', description: "Apple Season (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'autumn.jpg', description: "Autumn (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'ayisha.jpg', description: "Colorful Dance (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'bbeauty.jpg', description: "Black Innocence (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'beforerain.jpg', description: "Get Home Before Rain (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'blue-landscape.jpg', description: "Night Landscape (Acrylic)", medium: 'Acrylic', size: '12 x 10 in', price: '', availability: 'Sold', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'boygirlnight.jpg', description: "Beneath the Moon (Digital Acrylic)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'boyinrain.jpg', description: "Monsoon (Digital)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'dandelion.jpg', description: "Dandelions (Watercolor)", medium: 'Watercolor', size: '10 x 8 in', price: '', availability: 'Sold', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'evening.jpg', description: "By Sea (Digital Acrylic)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'girlinrain.jpg', description: "Girl in Rain (Watercolor)", medium: 'Watercolor', size: '16 x 12 in', price: '', availability: 'Sold', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'farmer.jpg', description: "Marks of Toil (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'ladyinmoon.jpg', description: "Lady in Moon (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'radhakrishna.jpg', description: "Radha Krishna (Watercolorl)", medium: 'Watercolor', size: '12 x 10 in', price: '', availability: 'Sold', printSizes: '12x8, 20x12, 20x30 in'  },
    {fileName: 'radhamadhavam.jpg', description: "Radha Madhavam (Digital Oil)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '12x8, 20x12, 20x30 in'  },
    {fileName: 'saxgirl.jpg', description: "Sax Girl (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'squirrels.jpg', description: "Squirrel Lovers (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'winter.jpg', description: "Winter (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },
    {fileName: 'toronto.jpg', description: "Toronto Steetcar - winter (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },                
    {fileName: 'toronto_night.jpg', description: "Toronto Night (Watercolor)", medium: 'Watercolor', size: '16 x 12 in', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'nilgiri_tahr.jpg', description: "Nilgiri Tahr (Watercolor)", medium: 'Watercolor', size: '16 x 12 in', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'monsoon_ride.jpg', description: "Monsoon Ride (Watercolor)", medium: 'Watercolor', size: '10 x 8 in', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'autumn_moments.jpg', description: "Autumn Moment (Watercolor)", medium: 'Watercolor', size: '10 x 8 in', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'toronto_streetcar_watercolor.jpg', description: "Toronto Streetcar - Spring (Watercolor)", medium: 'Watercolor', size: '10 x 8 in', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'snake_boat_race.jpg', description: "Snake Boat Race (Watercolor)", medium: 'Watercolor', size: '10 x 8 in', price: '', availability: 'Sold', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'after_snow_day.jpg', description: "After Snow Day (Watercolor)", medium: 'Watercolor', size: '10 x 8 in', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
    {fileName: 'sauga-evening.jpg', description: "Sauga Evening (Digital Watercolor)", medium: 'Digital', size: 'Multiple sizes', price: '', availability: 'Available', printSizes: '10x8, 12x10, 16x12, 20x16, 30x24 in'  },               
     
]; 


var mobilemenubutton = document.querySelector(".mobilemenubutton");
var mobilemenu = document.querySelector(".mobilemenu");
var deskemenuitems = document.querySelectorAll(".normalmenuwrapper nav ul li");
var mobilemenubutton = document.querySelector(".mobilemenubutton");
var mobilemenuclosebutton = document.querySelector(".closemenu");
var loader = document.querySelector("#loader");


window.onload = () => {
    loader.classList.remove("loading");
    loader.classList.add("loaded");
};


mobilemenuclosebutton.addEventListener("click", function(){
    mobilemenu.classList.toggle("showmobilemenu");
})

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
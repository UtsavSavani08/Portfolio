// Add event listeners to all navigation links
document.querySelectorAll('header div nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target section by the href attribute of the clicked link
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



let first=document.getElementById("first");
let last=document.getElementById("last");
let text= document.getElementById("text");
let photo =document.getElementById("photo");
let info= document.getElementById("infor");
let heading= document.getElementById("heading");
let nav= document.getElementsByTagName("nav");



window.addEventListener('scroll' ,function(){
    var value = window.scrollY;
    let offset = window.scroll;

    first.style.top = value*0.7 +'px';
    last.style.bottom = value*0.5 +'px';
    text.style.top = value*1 +'px';
    photo.style.left = value*0.11 + 'px';
    heading.style.left= offset*0.1 + 'px';
    info.style.left= offset*0.1 + 'px';
    const navLinks = document.querySelectorAll('nav a');
    const color = document.documentElement.scrollTop > 0 ? 'white' : 'black';
    
    navLinks.forEach(link => link.style.color = color);
    navLinks[0].style.color = "white";

})

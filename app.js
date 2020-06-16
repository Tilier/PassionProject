window.addEventListener('scroll', scroll);
var an = document.getElementById('tri');
var nav = document.getElementById('nav');
var header = document.getElementById('nav');
an.style.transform = 'translate(-50%,-50%) rotate(' + String(10 * (634 - window.pageYOffset) / 634) + 'deg)';
var circles = document.querySelectorAll('.animcircle');
var parimg = document.querySelector('.parallaximgo');

function scroll() {
    //an.style.opacity = (((((window.pageYOffset - an.offsetTop) * -1) + 200) * 0.75) / 617);
    an.style.transform = 'translate(-50%,-50%) rotate(' + String(10 * (634 - window.pageYOffset) / 634) + 'deg)';

    if (window.pageYOffset > 200) {
        nav.style.padding = "20px 0";
    } else {
        nav.style.padding = "40px 0";
    }

    //parimg.style.transform = 'translateX(-50%) translateY(' + (((((window.pageYOffset - parimg.offsetTop) * -1) + parimg.offsetHeight) * (window.innerHeight / (parimg.offsetTop + parimg.offsetHeight)))) / window.innerHeight + 'px)';
    //parimg.style.transform = 'translateX(-50%) translateY(5px)';
    //console.log((((((window.pageYOffset - parimg.offsetTop) * -1) + parimg.offsetHeight) * (window.innerHeight / (parimg.offsetTop + parimg.offsetHeight)))) / window.innerHeight);
    //parimg.style.backgroundPosition = 'center ' + String(window.pageYOffset * -0.075) + 'px'
}

circles.forEach(c => {
    window.addEventListener('scroll', () => {
        c.style.transform = 'translateY(' + String(window.pageYOffset * c.getAttribute('data-speed') - 30) + 'px)';
        c.style.WebkitTransform = 'translateY(' + String(window.pageYOffset * c.getAttribute('data-speed') - 30) + 'px)';
    });
});
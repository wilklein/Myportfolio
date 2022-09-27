// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixenav = header.offsetTop;
    console.log(fixenav);
    if (window.pageYOffset > fixenav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};
//untuk bagian humbermenu
//ketika humber diklik
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});




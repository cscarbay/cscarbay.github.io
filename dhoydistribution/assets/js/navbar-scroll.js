var navbar_primary = document.querySelector('.navbar-primary');

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 120){
        navbar_primary.classList.add('navbar-primary-scrollchange');
    }else{
        navbar_primary.classList.remove('navbar-primary-scrollchange');
    }
});
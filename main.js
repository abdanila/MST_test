const headerEl = document.querySelector('.header');
document.addEventListener('scroll', function(e) {
const scrollTop = document.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 200){
        headerEl.style.backgroundColor = 'rgba(0,0,0, 0.6)';
    }
    else{
        headerEl.style.backgroundColor = 'transparent';

    }
  })
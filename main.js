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

  const bmBtn = document.querySelector('.header__content__bm__btn');
  const headerContent = document.querySelector('.header__content');
  const headerContentBm = document.querySelector('.header__content__bm');
  const bmBtnClose = document.querySelectorAll('.bm__line');


  bmBtn.addEventListener("click", function(){
    headerContent.style.position = "absolute";
    headerContent.style.paddingRight = "0px";
    headerContentBm.classList.toggle("none");
    bmBtnClose.forEach(el=>{el.classList.toggle("close");})
  })
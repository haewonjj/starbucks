// console.log("test");

window.onload = function(){
    if(window.scrollY >500){
    //상단버튼 보이기
    gsap.to("#to-top",0.6,{
     x:0
    });
}else{
     //상단버튼 숨기기
     gsap.to("#to-top",0.6,{
      x:100
    });
    }
  }


// 헤더대신 #top_layout이라 써도 됨
const badgeE1 = document.querySelector('header .badges');
//console.log(badgeE1);

window.addEventListener('scroll', _.throttle(function(){
    // if(window .scrollY){
    if(window.scrollY >500){
    //배지 숨기기
    //badgeE1.style.display = 'none';
    //gsap.to(요소,지속시간,옵션);
    gsap.to(badgeE1,0.6,{
        opacity:0,
        display:'none'
    });
    //상단버튼 보이기
    gsap.to("#to-top",0.6,{
        x:0
    });

    }else{
    //badgeE1.style.display = 'block';
    // console.log('scroll!!!!');
    gsap.to(badgeE1,0.6,{
        opacity:1,
        display:'block',
     });
     //상단버튼 숨기기
     gsap.to("#to-top",0.6,{
        x:100
    });

    }
},300));
// _.throttle 함수 시간

const fadeE1s = document.querySelectorAll('#body_layout .fade-in');
//console.log(fadeE1s);

fadeE1s.forEach(function(fadeE1,index){
    // console.log(fadeE1s);
    // console.log(fadeE1);
    // console.log(index);
    gsap.to(fadeE1,1,{
        opacity:1,
        delay:(index+1) * 0.6
    });
});

//스와이퍼
new Swiper('.notice-line .swiper-container',{
    direction : 'vertical',
    autoplay:true,
    loop:true
   });

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3, //한번에 보여줄 슬라이스 개수
    spaceBetween : 10, //슬라이드 사이 여백 
    centeredSlides :true,//첫번째 슬라이드가 가운데에 있게하기
    loop:true,
    autoplay:{
        delay: 3000
    },
    pagination:{
        el:'.swiper-pagination', //페이지 번호 요소 선택지
        clickable:true,//사용자의 페이지 번호 요소 제어여부
    },
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    }
});
new Swiper('#awards .swiper-container' ,{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl :'#awards .swiper-prev',
        nextEl :'#awards .swiper-next',
    }
});


const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// console.log(promotionToggleBtn);
let isHidePromotion =false;
//true면 숨기기 , false 보이기

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        //보임
        promotionEl.classList.remove('hide');
    }
});
//범위 랜덤 함수(소수점 2자리)
function random(min, max){
    //toFixed()를 통해 반환된 문자 데이터를
    //parseFloat()를 통해 소숫점을 가지는 숫자데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector,delay, size){
    //gsap 요소
    gsap.to(selector,random(1,5,2,5),{
      y:size,
      repeat:-1,
      yoyo:true,
      ease:Power1.easeInOut,
      delay:random(0,delay)
    });
}
    floatingObject('.floating1',1,15);
    floatingObject('.floating2',.5,15);
    floatingObject('.floating3',1.5,20);

    

    const spyEls = document.querySelectorAll('section.scroll-spy');
    //console.log(spyE1);
    spyEls.forEach(function(spyEl){
        new ScrollMagic
        .Scene({
            triggerElement:spyEl, //보여짐 여부를 감시할 요소
            triggerHook: .8
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
    });

    const toTopE1 = document.querySelector('#to-top');

    toTopE1.addEventListener('click',function(){
      gsap.to(window,0.7,{
        scrollTo:0
        });
    });






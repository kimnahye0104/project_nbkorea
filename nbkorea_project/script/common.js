/* 뉴발란스 코리아 header > .sub_all(&m_sub) 자바스크립트 */
// 1. header : 메뉴에 mouseover/out시 sub메뉴 나오는 이벤트 (모바일 header sub 포함)
// 2. a tag : 속성 없애기
const sub_all =  document.querySelectorAll('.sub_all')
const m_sub = document.querySelectorAll('.m_sub')
console.log(sub_all, m_sub)

sub_all[0].style.display = 'none';
sub_all[1].style.display = 'none';
sub_all[2].style.display = 'none';
m_sub[0].style.display = 'none';
m_sub[1].style.display = 'none';
m_sub[2].style.display = 'none';
/* men ================================================= */
console.log('서브메뉴 =========================================')
const menu = document.querySelectorAll('.nav_g >.gnb > li')
console.log(menu)
const m_menu = document.querySelectorAll('.m_nav_g >.gnb > li')
console.log(m_menu)
menu[0].addEventListener('mouseover', function(){
    sub_all[0].style.display = 'flex';
})
menu[0].addEventListener('mouseout', function(){
    sub_all[0].style.display = 'none';
})

m_menu[0].addEventListener('mouseover', function(){
    m_sub[0].style.display = 'flex';
})
m_menu[0].addEventListener('mouseout', function(){
    m_sub[0].style.display = 'none';
})


/* women ================================================= */
menu[1].addEventListener('mouseover', function(){
    sub_all[1].style.display = 'flex';
})
menu[1].addEventListener('mouseout', function(){
    sub_all[1].style.display = 'none';
})
m_menu[1].addEventListener('mouseover', function(){
    m_sub[1].style.display = 'flex';
})
m_menu[1].addEventListener('mouseout', function(){
    m_sub[1].style.display = 'none';
})

/* kids ================================================= */
menu[2].addEventListener('mouseover', function(){
    sub_all[2].style.display = 'flex';
})
menu[2].addEventListener('mouseout', function(){
    sub_all[2].style.display = 'none';
})
m_menu[2].addEventListener('mouseover', function(){
    m_sub[2].style.display = 'flex';
})
m_menu[2].addEventListener('mouseout', function(){
    m_sub[2].style.display = 'none';
})

// 2. a tag : 속성 없애기
console.log('a 태그 속성 없애기')
/* 뉴발란스 코리아 메인 페이지 java script */
const bg5_btn = document.querySelector('#next_btn')
const btn = document.querySelectorAll('.btn')
const product = document.querySelectorAll('.product')
console.log(btn) /* 2(1) ~ 4(3)번 product > arrow*/
console.log(btn[1])
console.log(product) /* 2,3,4 arrow 있는 .product */
btn[1].addEventListener('click',function(){
    product[2].scrollBy(422, 0)
})
btn[2].addEventListener('click',function(){
    product[3].scrollBy(320, 0)
})
btn[3].addEventListener('click',function(){
    product[4].scrollBy(320, 0)
})
const sub_all =  document.querySelectorAll('.sub_all')
console.log(sub_all)
const m_sub = document.querySelectorAll('.m_sub')
console.log(m_sub)

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
/* 뉴발란스 코리아 java script */
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

/* a  href="#" 상단 이동 속성 빼기 */
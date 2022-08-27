// const handleDropdownMouseEnter =(selected)=>{
//     selected.querySelector('span img').src='./assets/images/svg/goldArrow.svg' 
//     selected.querySelector('span img').style.transform ='rotate(180deg)'
//     selected.querySelector('span img').style.top ='-2px'
    
// }
// const handleDropdownMouseLeave =(selected)=>{
//     selected.querySelector('span img').src='./assets/images/svg/arrow.svg' 
//     selected.querySelector('span img').style.transform ='rotate(0deg)'
//     selected.querySelector('span img').style.top ='0'
// }

let nav = document.querySelector('.mobile-navv')
let menu = document.getElementById('menu_options')
window.addEventListener('scroll',()=>{
    console.log(nav)
    // if(win)
    if(window.pageYOffset > 100 ){
        menu_options.classList.contains('show-menu') ||   nav.classList.add('bg-black')
        nav.classList.add('fixed')
        nav.classList.remove('absolute')

    }else{
        nav.classList.remove('bg-black')
        nav.classList.remove('fixed')
        
        nav.classList.add('absolute')
    
    }
})
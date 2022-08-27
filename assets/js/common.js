const toggle = document.getElementById("toggle");
isMenuHide = true; 
function toggleFunction () {
    // console.log("calledd")
    toggle.classList.toggle("active");
    if (isMenuHide == true) {
        document.getElementById("menu_options").classList.add("show-menu");
        document.querySelector('.mobile-nav').classList.add('fixed')
        document.querySelector('.mobile-nav').classList.remove('absolute')
        document.querySelector('.mobile-nav').classList.contains('bg-black') &&  document.querySelector('.mobile-nav').classList.remove('bg-black')

        isMenuHide = false;
    } else if (isMenuHide == false) {
        document.getElementById("menu_options").classList.remove("show-menu");
        document.querySelector('.mobile-nav').classList.add('absolute')
        document.querySelector('.mobile-nav').classList.remove('fixed')
        
        isMenuHide = true;
    }
}
openDropdownMenu = () => {
    document.getElementById("divisionDropDown").classList.toggle("show-dropdown")
}
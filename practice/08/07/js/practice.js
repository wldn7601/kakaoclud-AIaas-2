document.addEventListener("DOMContentLoaded", function(){
    const buttonNavIcon = document.querySelector("#btn-nav");
    const containerNav = document.querySelector(".container-nav");
    

    


    function navBtnClickHandler(){
        containerNav.classList.toggle("inactive");
    }

    // 버튼 클릭시 네비바 사라지거나 나타남
    buttonNavIcon.addEventListener("click", navBtnClickHandler)
})

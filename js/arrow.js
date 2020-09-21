(function showArrow() {
    setTimeout(() => {
        if (!document.querySelector('.presentation-container')) {
            document.querySelector('.footer').classList.add('arrow');
            document.querySelector("#inner-wrapper").classList.remove('hide');
        }
    }, 4000);
})();

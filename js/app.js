const ratingNums = document.querySelectorAll('.main .rating-rank div');
const submitBtn = document.querySelector('button');
const span = document.querySelector('span');

ratingNums.forEach((ratingNum) => {
    ratingNum.addEventListener('click', () => {
        span.textContent = ratingNum.textContent;
    });
    const mainPage = document.querySelector('.main');
    const thankYouPage = document.querySelector('.thank-you');
    submitBtn.addEventListener('click', () => {
        mainPage.classList.add('hide');
        thankYouPage.classList.remove('hide');
    })
});






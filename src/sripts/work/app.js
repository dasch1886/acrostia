const portfolio = document.querySelector('.work__portfolio');

portfolio.addEventListener('mouseover', (e) => {
    e.target.classList.forEach(el => {
        if (el === 'container__pic') {
            e.target.parentNode.classList.add('container--active');
        }

    });
})

portfolio.addEventListener('mouseout', (e) => {
    e.target.classList.forEach(el => {
        if (el === 'container__pic') {
            e.target.parentNode.classList.remove('container--active');
        }
    })
})
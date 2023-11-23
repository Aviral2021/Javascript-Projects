const accordions = document.querySelectorAll('.accordion');


accordions.forEach(accordion => {

    const bx = accordion.querySelector('.bx');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () =>{
        bx.classList.toggle('active');
        answer.classList.toggle('active');

    })

});
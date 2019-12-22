const modalOvarlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
        card.addEventListener("click", function() {
        const cardImg = card.querySelector('img').src
        const cardContent = card.querySelector('.card__content p').textContent
        console.log(cardContent)
        const cardinfo = card.querySelector('.card__info p').textContent
        
        modalOvarlay.classList.add('active')
        modalOvarlay.querySelector('img').src = `${cardImg}`
        modalOvarlay.querySelector('.modal-card__content p').innerHTML = `${cardContent}`
        modalOvarlay.querySelector('.modal-card__info p').innerHTML = `${cardinfo}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOvarlay.classList.remove("active")
})
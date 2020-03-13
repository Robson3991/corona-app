export function openText() {

    let countries = document.querySelectorAll('.country');
    [...countries].forEach(country => {
        country.addEventListener('click', () => {
            country.classList.toggle('active');
        })
    })
}
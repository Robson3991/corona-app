export function filter(){

    let search = document.querySelector('.js-search');
    let countries = document.querySelectorAll('.country');

    search.addEventListener('input', function(e){
        [...countries].forEach(element => {
            let country = element.dataset.country.toLowerCase();

            if(country.includes(e.target.value.toLowerCase())) {
                element.classList.remove('hidden');
            }
            else {
                element.classList.add('hidden')
            }
        })
    })

}
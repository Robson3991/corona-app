export function includeValues(confirmed, deaths, recovered) {

    let confirmedSpan = document.querySelector('.js-confirmed');
    let deathsSpan = document.querySelector('.js-deaths');
    let recoveredSpan = document.querySelector('.js-recovered');

    confirmedSpan.innerText = confirmed;
    deathsSpan.innerText = deaths;
    recoveredSpan.innerText = recovered;

}
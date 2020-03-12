import { makeCountries } from './makeCountries';

export function init() {

    let countries = [];

    let confirmedApi = fetch("https://coronavirus-tracker-api.herokuapp.com/confirmed");
    let deathsApi = fetch("https://coronavirus-tracker-api.herokuapp.com/deaths");
    let recoveredApi = fetch("https://coronavirus-tracker-api.herokuapp.com/recovered");
    let confirmed;
    let deaths;
    let recovered;
    
    Promise.all([confirmedApi, deathsApi, recoveredApi])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
            confirmed = finalVals[0].locations;
            deaths = finalVals[1].locations;
            recovered = finalVals[2].locations;

            confirmed.forEach(el => {
                countries.push({
                    country: el.country,
                    province: el.province,
                    confirmed: el.latest
                })
            });

            deaths.forEach((el, index) => {
                countries[index].deaths = el.latest
            });
            
            recovered.forEach((el, index) => {
                countries[index].recovered = el.latest
            });

            makeCountries(countries);

        })

}
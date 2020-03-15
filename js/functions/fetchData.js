import { includeValues } from './includeValues';
import { makeCountries } from './makeCountries';

export function init() {

    let countries = [];

    let confirmedApi = fetch("https://coronavirus-tracker-api.herokuapp.com/confirmed");
    let deathsApi = fetch("https://coronavirus-tracker-api.herokuapp.com/deaths");
    let recoveredApi = fetch("https://coronavirus-tracker-api.herokuapp.com/recovered");

    function compare(a, b) {
        const countryA = a.country.toUpperCase();
        const countryB = b.country.toUpperCase();
      
        let comparison = 0;
        if (countryA > countryB) {
          comparison = 1;
        } else if (countryA < countryB) {
          comparison = -1;
        }
        return comparison;
    }
    
    Promise.all([confirmedApi, deathsApi, recoveredApi])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
            console.log(finalVals);

            let confirmedWorld = finalVals[0].latest;
            let deathsWorld = finalVals[1].latest;
            let recoveredWorld = finalVals[2].latest;

            includeValues(confirmedWorld, deathsWorld, recoveredWorld);

            let confirmed = finalVals[0].locations;
            let deaths = finalVals[1].locations;
            let recovered = finalVals[2].locations;

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

            makeCountries(countries.sort(compare));

        })

}
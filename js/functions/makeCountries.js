import { openText} from './openText';
import { filter } from './filter'; 

export function makeCountries(countries) {

    countries.forEach(el => {

        const div = document.createElement('div');
        div.classList.add('country');
        div.dataset.country = el.country;

        const header = document.createElement('header');
        header.classList.add('country__header');
        header.innerText = el.country;

        if(el.province.length > 0) {
            // header.innerText = el.country + ' - ' + el.province;
            const province = document.createElement('span');
            province.classList.add('province');
            province.innerText = '(' + el.province + ')';
            header.appendChild(province);
        }

        const ul = document.createElement('ul');
        ul.classList.add('country__text')

        function makeLi(element) {
            const li = document.createElement('li');

            const key = document.createElement('span');
            key.classList.add('key');
            key.innerText = element + ': ';
            li.appendChild(key);

            const value = document.createElement('span');
            value.classList.add('value');
            value.innerText = el[element];
            li.appendChild(value);

            ul.appendChild(li);

        }

        makeLi('confirmed');
        makeLi('deaths');
        makeLi('recovered');

        div.appendChild(header);
        div.appendChild(ul);

        document.querySelector('.countries').appendChild(div);

    });

    openText();
    filter();

}
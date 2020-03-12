export function makeCountries(countries) {

    countries.forEach(el => {

        const div = document.createElement('div');
        div.classList.add('country');

        const header = document.createElement('header');
        header.classList.add('country__header');
        header.innerText = el.country;

        const ul = document.createElement('ul');

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
        
        if(el.province.length > 0) {
            makeLi('province');
        }

        makeLi('confirmed');
        makeLi('deaths');
        makeLi('recovered');

        div.appendChild(header);
        div.appendChild(ul);

        document.querySelector('.countries').appendChild(div);

    })

}
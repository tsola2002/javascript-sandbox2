const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
*/
const getCountryData = function (country) { 
    // create a XMLHttpRequest object
    const request = new XMLHttpRequest();
    //open a request object
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

    // trigger a request by sending the request object
    request.send();


    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log("JSON DATA",data);

        const html = `
        <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        //countriesContainer.innerHTML(html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('portugal');
//getCountryData('usa');
//getCountryData('germany');
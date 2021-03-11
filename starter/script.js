'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };
///////////////////////////////////////
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
  };
  
  const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  
      return response.json();
    });
  };

  const getPosition = function(){
      return new Promise(function(resolve,reject){
          navigator.geolocation.getCurrentPosition(resolve,reject);
      });
  }
  const whereAmI = async function(country){
     const{} = await getPosition(); // destructuring the position

     const {latitude: lat, longitude: lng } = pos.coords;
     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo)


   const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    // it will not block the call stack execution
    console.log(data);
    const data = await res.json();
    renderCountry(data[0])
  }

  whereAmI('portugal')
  console.log('first')
  
  
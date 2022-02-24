const loadCountries = countries => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayName(data))
}
loadCountries();

const displayName = countriesName =>{
    const countriesDiv = document.getElementById("countries");
    countriesName.forEach(countryName =>{
        // console.log(countryName.name.common)
        // console.log(countryName.name)
        const div = document.createElement("div");
        div.classList.add("county-style")
        div.innerHTML = `
        <h3>Name of The Country : ${countryName.name.common}</h3>
        <p>Official Name : ${countryName.name.official}</p>
        <button onclick="loadCountryByName('${countryName.name.common}')" class="btn" >Details</button>
        `
        countriesDiv.appendChild(div);

    })
}
const loadCountryByName = details =>{
    // console.log(details)
    const url = `https://restcountries.com/v3.1/name/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = data =>{
    document.getElementById("country-details").style.display = "block";
    const countryDetails = document.getElementById("country-details");
    data.forEach( country => {
        // console.log(country.flags.png)
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>Country Name :${country.name.common}</h2>
        <h3>Capital : ${country.capital}</h3>
        <h3>Area : ${country.area} km</h3>
        <div class="img">
        <img src = "${country.flags.png}"/>
        </div>
        `
        countryDetails.appendChild(div);

    })
}
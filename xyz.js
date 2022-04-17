var text = '';
function findCountry() {
    text = document.getElementById('country-search').value;
    connectCountry (text)
}

function connectCountry (text) {
    fetch(`https://api.covid19api.com/dayone/country/${text}`)
    .then(res=> res.json() )
    .then(data=> loadCountry(data) );
}

connectCountry();

function loadCountry(data){
    console.table(data[0]);
    var container = document.getElementById("main-container");

    container.innerHTML = `<p><b>Country name: ${data[0].Country} </b></p> 
                           <p>Total Confirmed: ${data[0].Confirmed}</p>
                           <p>Active Cases: ${data[0].Active}</p>
                           <p>Deaths: ${data[0].Deaths}</p>
                           <button class="btn btn-outline-dark" onclick="moreDetails()">More Information</button>`;
                          
}

function moreDetails() {
    fetch(`https://restcountries.com/v3.1/name/${text}`)
    .then(res=>res.json() )
    .then(data=>loadDetails(data) );
}

function loadDetails(data){
    var newContainer = document.getElementById("main_container1");
    console.table(data[0]);
    newContainer.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${data[0].flags.png} class="card-img-top" alt="...">
    <div class="card-body">
    <p>Population:<b>${data[0].population}</b></p>
                                <p>Capital: <b>${data[0].capital[0]}</b></p>
                                <p>Region:<b>${data[0].region}</b></p>;
                  
    </div>
  </div>`
                
}

                         
                    

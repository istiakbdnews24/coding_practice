

document.getElementById("buton").addEventListener("click", getdata)


function getdata () {



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37f116cb2bmsh09c1b745b9f46ecp1e451bjsnc29242804c5c',
            'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com'
        }
    };

    fetch("https://mashvisor-api.p.rapidapi.com/rental-rates?state=CA&source=airbnb&city=Los%20Angeles&zip_code=90291")
    .then(function(response){
       return (response.text());
    })
    .then(function(data){
        
        console.log(data);
    })
}








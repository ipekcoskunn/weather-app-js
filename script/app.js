const form = document.querySelector('form');
const detail = document.querySelector('.detail');
const card = document.querySelector('.card');
const icon = document.querySelector('.icon img');

//user interface
const updateUI = (data) => {
    // const cityDetail = data.cityDetail;
    // const weather = data.weather;
    //destruction yapalım sonuc asagıda:
    const {cityDetail,weather} = data;

    detail.innerHTML = `
    <div class="detail text-muted text-uppercase text-center">
        <h5 class="my-3">${cityDetail.LocalizedName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    </div>
    
    `;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }


}

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const city = form.city.value.trim(); //trim: sag ve sol boşlukları kaldırıyor
    //console.log(city);

    updateCity(city)
        .then(data => {
            updateUI(data);
            console.log(data);
        });

    form.reset();
});

const updateCity = async (city) => {

    const cityDetail = await bringCity(city);
    const weather = await bringWeather(cityDetail.Key);

    return {
        cityDetail,
        weather
    }

}
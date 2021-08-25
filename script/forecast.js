const key = 'uoAwpgjJbROGvOclHVnW4MzSwLbZ2kue';

const bringWeather = async (id) => {

    const basicUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${key}`;      

    const res = await fetch(basicUrl + query);

    const data = await res.json();

    return data[0];

}

const bringCity = async (konum) => {

    const basicUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${konum}`;      

    const res = await fetch(basicUrl + query);

    const data = await res.json();

    return data[0];

}



// bringCity('newyork')
//     .then(data => {
//         return bringWeather(data.Key);
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

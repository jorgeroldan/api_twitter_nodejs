// aca se pueden definir scripos  npn rum <nombre del script>
// convenciones 
// Te abstrae del nombre del archivo 
// Correr la aplicacción --> "start": archivo de 
// Corre los test --> "test": 
// Corre un servidor desde node --> "server": 

const Twit = require('twit'); 
const config = require('./config')
const T = new Twit(config); 

const params = {
    q: 'acamica',
    count: 100
}

T.get('search/tweets', params, (err, data, response) => {
    // console.log(data.statuses)

    // let favorites = [];

    // const tweets = data.statuses;
    // console.log(tweets)

    // tweets.forEach(tweet => {
    //     console.log(tweet.favorite_count)
    //     favorites.push(tweet.favorite_count)
    // });

}); 

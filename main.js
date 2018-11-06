
//No te olvides de gestionar primero tus credenciales desde la API de Twitter

// consumer_key
// consumer_secret
// access_token
// access_token_secret

const Twit = require('twit'); 
const config = require('./config')
const T = new Twit(config); 

const params = {
    q: 'acamica',
    count: 100
}

T.get('search/tweets', params, (err, data, response) => {
    // console.log(data.statuses)

    let favorites = [];

    const tweets = data.statuses;
    // console.log(tweets)

    tweets.forEach(tweet => {
        console.log(tweet.favorite_count)
        favorites.push(tweet.favorite_count)
    });

}); 

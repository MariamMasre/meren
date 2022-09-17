const axios = require('axios');


async function movieHandler(req,res) {
    const cityName = req.query.cityName;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${cityName}`;
    
    axios
    .get(URL)
    .then( movieR => {
        let sendData = movieR.data.results.map( item => {
            return new movieData(item);
        })
        
        return res.status(200).send(sendData);
    }).catch(error => {
        return res.status(404).send(error)
    })
}


class movieData {
    constructor(item){
        this.title = item.title;
        this.overview = item.overview;
        this.vote_average = item.vote_average;
        this.vote_count = item.vote_count;
        this.poster_path = item.poster_path;
        this.release_date = item.release_date;
    }
}




module.exports = movieHandler;
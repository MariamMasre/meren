const axios = require('axios');

//----- FUNCTIONS -----//

// Get Nearby Data Function
async function getNearbyDataFunction(req,res) {
    const lon = req.query.lon;
    const lat = req.query.lat;
    //https://us1.locationiq.com/v1/nearby?key=pk.87fc63a6655f6e244607f17c7ee42a77&lat=-37.870983&lon=144.980714&tag=restaurant
    const URL = `https://us1.locationiq.com/v1/nearby?key=pk.87fc63a6655f6e244607f17c7ee42a77&lat=${lat}&lon=${lon}&tag=all`;
   
    axios.get(URL).then( result => {
        let sendData = result.data.map( item => {
            return new NearbyData(item);
           
        })
        console.log(sendData);
        return res.status(200).send(sendData);
    }).catch(error => {
        
        return res.status(404).send(error)
    })
}

//----- CLASSES -----//

// Weather Class

class NearbyData {
    constructor(item){

        this.type = item.type;
        this.name = item.name;
        this.display_name = item.display_name;
        
      
    }
}

module.exports = getNearbyDataFunction;
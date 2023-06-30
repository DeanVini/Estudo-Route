import axios from "axios";

async function getFromBD(){
    const response = await axios.get("http://localhost:3000/destinations");

    return response.data;
}

export default getFromBD;


function getIndexByKey(countryObject, pageName){
    let key = 0;

    for(country in countryObject){
        if(country.name != pageName){
            key ++;
        }
    }

    return key;
}
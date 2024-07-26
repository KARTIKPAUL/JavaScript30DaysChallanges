const axios = require('axios');

async function user(){
    try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(responce);
    } catch (error) {
        console.log(`Error Happen when request network ! ${error.message}`);
    }
    
}
user();




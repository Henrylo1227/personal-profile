const mongoose = require("mongoose");
require('dotenv').config();

const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'personal-profile-db'


async function main() {
    
    // connect
    await mongoose.connect(url, {
        serverSelectionTimeoutMS: 5000
    });
    console.log('Connected correctly to db server');

    // operations
    await new Promise(resolve => setTimeout(resolve, 5000));


    // disconnect
    await mongoose.disconnect();
    console.log('Disconnected to db server');
};


main();
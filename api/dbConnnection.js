const mongoose = require("mongoose");
require('dotenv').config();

const url = 'mongodb+srv://personal-profile-project:rbwfXpIMo3g472Xo@cluster0.zfysenu.mongodb.net/test';

async function main() {
    await mongoose.connect(url, {
        serverSelectionTimeoutMS: 5000
    });

    await new Promise(resolve => setTimeout(resolve, 5000));

    await mongoose.disconnect();
}

main();


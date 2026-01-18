const mongoose = require('mongoose');

async function connect() {
    try {
        // family: 4 is great for resolving localhost issues
        await mongoose.connect(process.env.MONGO_URL, { family: 4 });
        console.log('✅ Connected to MongoDB successfully');
    }
    catch (err) {
        console.log('❌ MongoDB connection error:', err.message);
        process.exit(1); // Optional: stops the app if DB fails
    }
}

// Export the function so server.js can use it
module.exports = connect;
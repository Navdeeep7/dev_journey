import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://navis12ns:82UIWvjG4egWGYeP@cluster0.u5l2cmk.mongodb.net/dev_journeyDB';

// Function to connect to MongoDB
async function connectToDb(){ 
  try {
     mongoose.connect(MONGO_URI,{});
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}


// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Leetcode_username: String,
  Codechef_username: String,
  Codeforces_username: String,
  Gfg_username:String
});
connectToDb();
let User:any;
try {
  User = mongoose.model('User');
} catch (error) {
  User = mongoose.model('User', userSchema);
}

export { User ,connectToDb};

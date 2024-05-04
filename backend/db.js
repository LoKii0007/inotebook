const mongoose = require('mongoose')

// const mongoURI='mongodb://127.0.0.1:27017/inotebook'
const mongoURI='mongodb+srv://lokeshyadav1098:ytyS3En2kPSCich1@cluster0.z6dp4wl.mongodb.net/imagnify?retryWrites=true&w=majority'

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    }
    catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

module.exports=connectToMongo
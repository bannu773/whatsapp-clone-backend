import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://user:user@ac-bd5gj2v-shard-00-00.1xpkgwt.mongodb.net:27017,ac-bd5gj2v-shard-00-01.1xpkgwt.mongodb.net:27017,ac-bd5gj2v-shard-00-02.1xpkgwt.mongodb.net:27017/?ssl=true&replicaSet=atlas-11bx5t-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
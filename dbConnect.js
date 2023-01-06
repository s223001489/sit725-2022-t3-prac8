require('dotenv').config()


//mongoDb connection...
const MongoClient = require('mongodb').MongoClient; 
const uri = 'mongodb+srv://varshini:violet@cluster0.j83o4os.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
    projectCollection = client.db().collection(collectionName);
    if(!err){
        console.log('MongoDb Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.MongoClient = client;

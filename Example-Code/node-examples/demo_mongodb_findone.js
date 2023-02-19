//demo_mongodb_findone
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection("customers").findOne({ name: 'Amy' }, function (err, result) {
        if (err) throw err;
        console.log(result.name + ": " + result.address);
        db.close();
    });
});
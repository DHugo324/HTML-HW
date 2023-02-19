//demo_mongodb_sort
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    const mysort = { name: 1 };
    dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
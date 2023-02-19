//demo_mongo_update_one.js
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myquery = { address: "Valley 345" };
    const newvalues = { $set: { name: "Ohtani", address: "LAA" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});
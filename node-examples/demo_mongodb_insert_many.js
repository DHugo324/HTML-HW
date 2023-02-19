//demo_mongodb_insert_many.js
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
//const url = "mongodb+srv://admin:admin6631@cluster0.gt34a.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myobjs = [{ name: 'Amy', address: 'Apple st 652' },
    { name: 'Ben', address: 'Park Lane 38' },
    { name: 'Peter', address: 'Lowstreet 4' },
    { name: 'Viola', address: 'Sideway 1633' },
    { name: 'William', address: 'Central st 954' },
    { name: 'Richard', address: 'Sky st 331' },
    { name: 'Sandy', address: 'Ocean blvd 2' },
    { name: 'Betty', address: 'Green Grass 1' },
    { name: 'Chuck', address: 'Main Road 989' },
    { name: 'Hannah', address: 'Mountain 21' },
    { name: 'John', address: 'Highway 71' },
    { name: 'Michael', address: 'Valley 345' },
    { name: 'Susan', address: 'One way 98' },
    { name: 'Vicky', address: 'Yellow Garden 2' }
    ];

    const options = { ordered: true };
    dbo.collection("customers").insertMany(myobjs, options, function (err, res) {
        if (err) throw err;
        console.log(`multiple documents were inserted`);
        db.close();
    });
});
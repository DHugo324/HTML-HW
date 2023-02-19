//demo_mongodb_find_customer_atlas.js
const MongoClient = require('mongodb').MongoClient;
//const url = "mongodb+srv://admin:<password>@cluster0.gt34a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const url = "mongodb+srv://admin:admin6631@cluster0.gt34a.mongodb.net/mydb?retryWrites=true&w=majority";

function queryCustomer(customerName) {
    let customer = {};
    customer["name"] = customerName;

    const resultPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("mydb");

            dbo.collection("customers").findOne(customer, function (err, result) {
                if (err) {
                    reject(err);
                } else if (!result) {
                    reject("not found!");
                    db.close();
                } else {
                    resolve(result);
                    db.close();
                }
            });
        });
    });

    return resultPromise;
}

module.exports.queryCustomer = queryCustomer;
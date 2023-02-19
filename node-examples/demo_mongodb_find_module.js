//demo_mongodb_find_module
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

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
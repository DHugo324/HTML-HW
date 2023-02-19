//demo_query_customer_api_atlas.js
const http = require('http');
const url = require('url');

const db = require("./demo_mongodb_find_module_atlas.js");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let q = url.parse(req.url, true).query;
    let name = q.name;
    let recordsPromise = db.queryCustomer(name);

    recordsPromise
        .then(function (value) {
            res.end(JSON.stringify(value));
        })
        .catch(function (value) {
            let msg = {};
            msg["msg"] = value;
            res.end(JSON.stringify(msg));
        });
}).listen(8080);


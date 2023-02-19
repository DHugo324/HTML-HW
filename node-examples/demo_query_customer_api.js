//demo_query_customer_api.js
const http = require('http');
const url = require('url');

const dbQuery = require("./demo_mongodb_find_module.js");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let q = url.parse(req.url, true).query;
    let name = q.name;
    let record = dbQuery.queryCustomer(name);
    record
        .then(function (value) {
            res.end(JSON.stringify(value));
        })
        .catch(function (value) {
            let msg = {};
            msg["msg"] = value;
            res.end(JSON.stringify(msg));
        });
}).listen(8080);
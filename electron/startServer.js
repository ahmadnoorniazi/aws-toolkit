const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = ' 127.0.0.1:27017';
 
// Database Name
const dbName = 'officeDB';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  insertDocuments(db, function() {
    client.close();
  });
});
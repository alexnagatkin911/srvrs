var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://kevin1:kevin1@ds143573.mlab.com:43573/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
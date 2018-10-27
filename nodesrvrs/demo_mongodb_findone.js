var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://kevin1:kevin1@ds143573.mlab.com:43573/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
var MongoClient = require('mongodb').MongoClient;
var baseUrl = "mongodb://localhost:27017/"; 

var createDatabase = dbName => {
    // url => mongodb://localhost:27017/--dbName--
    MongoClient.connect(baseUrl+dbName, function(err, db) {
        if (err) throw err;
        console.log(`Database ${dbName} created!`);
    });
}

var createCollection = (dbName, collName) => {
    var status ;
    MongoClient.connect(baseUrl, (err, database) => {
        if (err) throw err;
        var dbController = database.db(dbName);
        dbController.createCollection(collName, (err, res) => {
          if (err) throw err;
          database.close();
          console.log(`Collection ${collName} created!`);
        });
    });
    return status;
}

var insertData = (dbName, collName, data) => {
    MongoClient.connect(baseUrl, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collName).insert(data, function(err, res) {
          if (err) throw err;
          console.log('res', res)
          console.log("document inserted ");
        });
      });
}


var getData = (dbName, collName, data) => {
    MongoClient.connect(baseUrl, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collName).find({},function(err, res) {
          if (err) throw err;
          console.log('res')
        });
      });
}

var closeDbConnection = () => {
    MongoClient.connect(url, function(err, db) {
        db.close();
    });
}
    
module.exports = {
    createDatabase,
    createCollection,
    insertData,
    closeDbConnection,
    getData
}
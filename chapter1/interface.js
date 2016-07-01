/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  var collection = db.collection('movies');
  collection.insert(doc, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Inserted Successfully');
    }
  });
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  var collection = db.collection('movies');
  collection.find({ 'director': director }).sort({'title':1}).toArray(function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log("Found Results");
      results.forEach(function(doc) {
        console.log(JSON.stringify(doc))
      })
    }
    callback(null, results);
  });
};
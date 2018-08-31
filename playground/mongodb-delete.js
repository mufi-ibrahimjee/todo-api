// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'do something'}).then((result) =>
  // {
  //   console.log(result);
  // },(err) =>
  // {
  //   if(err)
  //   {
  //     console.log(err);
  //   }
  // });
  //findOneAndDelete

  

  //deleteone
  // db.collection('Todos').deleteOne({text:'eat breakfast'}).then((result)=>
  // {
  //   console.log(result);
  // }).catch((err) =>
  // {
  //   console.log(err)
  // });

  db.collection('Todos').findOneAndDelete({_id: new ObjectID('5b88dc3521fff3a7abf6161f')}).then((results)=>
  {
    console.log(results);
  }).catch((err) =>
  {
    console.log(err);
  })


});
// db.close();

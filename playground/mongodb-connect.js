//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');  //deconstructing i.e taking out properties of mongo db
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>
{
	if(err)
	{
		return console.log('cannot connect to database');
	}
	console.log('database connected')

	// db.collection('Todos').insertOne({
	// 	text:'do something',
	// 	completed: false
	// }, (err, results) =>
	// {
	// 	if(err)
	// 	{
	// 		return console.log('no values have been inserted in the database', err);
	// 	}
	// 	console.log(JSON.stringify(results.ops, undefined ,2));
	// })

		db.collection('Users').insertOne({
			name: 'mufi',
			age: '20',
			location: 'vellore'
		},(err, results) =>
		{
			if(err)
			{
				return('values cannot be inserted', err);
			}
			console.log('values inserted successfully', JSON.stringify(results.ops ,undefined ,2));
			console.log(results.ops[0]._id.getTimestamp());
		});
 db.close();
});
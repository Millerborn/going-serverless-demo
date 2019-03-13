// Node.js 8.10 runtime

const AWS = require('aws-sdk'),
uuid = require('uuid'),
documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	
	let params = {
		Item : {
			"id" : uuid.v1(),
			"record" : event.record,
			"album" : event.album,
			"artist" : event.artist,
			"date" : event.date,
			"imageUrl" : event.imageUrl
		},
		TableName : process.env.TABLE_NAME
	};
	documentClient.put(params, function(err, data){
		callback(err, data);
	});
}
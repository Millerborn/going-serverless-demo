// In Node.js 6.10 runtime

console.log('Loading function');
let doc = require('dynamodb-doc');
let db = new doc.DynamoDB();

exports.handler = (event, context, callback) => {

    function formatResponse(data, code) {
      return { 
        statusCode: code,
        headers: {
          'Access-Control-Allow-Origin': '*' // Or use wildard * for testing
        },
        body: JSON.stringify(data)
      }
    }

    let item = {
      "id" : event.records,
      "record" : event.record,
      "album" :  event.album,
      "artist" : event.artist,
      "date" : event.date,
      "imageUrl" : event.imageUrl
    };

    let params = {
      TableName: process.env.TABLE_NAME, 
      Item: item
    };
    
    db.putItem(params, function(err, data) {
      if (err) callback(null, formatResponse(err, 400));
      else callback(null, formatResponse(params, 200));
    });
};
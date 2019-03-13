// Node.js 8.10 runtime

let doc = require('dynamodb-doc');
let db = new doc.DynamoDB();

exports.handler = (event, context, callback) => {

    function formatResponse(data, code) {
      return { 
        statusCode: code,
        headers: {
          'Access-Control-Allow-Origin': '*' // Or use wildard * for testing
        },
        id: JSON.stringify(data)
      }
    }

    let params = {
        "TableName": process.env.TABLE_NAME, 
        "Key" : {
            "id" : event.id
        }
    };

    console.log('params', event);

    db.deleteItem(params, function(err, data) {
      if (err) callback(null, formatResponse(err, 400));
      else callback(null, formatResponse(params, 200));
    });
};

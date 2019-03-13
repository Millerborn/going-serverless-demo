// GET: Add to App.js in getRecord function
fetch("your api gateway url after deploy")
    .then(res => res.json())
    .then(json => {      
    const records = json.map(record => record);      
    this.setState({
        records: records
    });
}); 

// POST: Add to App.js in onSubmit function
fetch("your api gateway url after deploy", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },      
    body: JSON.stringify({records: record, album, artist, date, imageUrl})
});

// PUT: Copy code to editRecord.js in onSubmit function
fetch("your api gateway url after deploy", {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },   
    body: JSON.stringify({records: id, record, album, artist, date, imageUrl})
});

// DELETE: Copy code to deleteRecord.js in deleteRecord function
fetch("your api gateway url after deploy", {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id})
});
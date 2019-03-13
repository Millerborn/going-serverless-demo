// GET
fetch("https://vv2qx5zqb7.execute-api.us-east-1.amazonaws.com/Dev")
    .then(res => res.json())
    .then(json => {      
    const records = json.map(record => record);      
    this.setState({
        records: records
    });
}); 

// POST
fetch("https://vv2qx5zqb7.execute-api.us-east-1.amazonaws.com/Dev", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },      
    body: JSON.stringify({records: record, album, artist, date, imageUrl})
});

// PUT
fetch("https://vv2qx5zqb7.execute-api.us-east-1.amazonaws.com/Dev", {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },   
    body: JSON.stringify({records: id, record, album, artist, date, imageUrl})
});

// DELETE
fetch("https://vv2qx5zqb7.execute-api.us-east-1.amazonaws.com/Dev", {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id})
});
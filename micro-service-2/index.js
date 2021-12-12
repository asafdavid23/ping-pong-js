const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3002
const request = require('request');


app.get('/service-2/pong', (req, res) => {
    request('http://localhost:3000/service-1/ping', function(error, response, body) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    })
    res.send('ping request was sent to service-1');
})

app.listen(port, () => {
    console.log(`service-2 is listening at http://localhost:${port}`)
})

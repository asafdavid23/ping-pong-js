const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000
const request = require('request');


app.get('/service-1/ping', (req, res) => {
    request('http://localhost:3002/service-2/pong', function(error, response, body) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    })
    res.send('ping request was sent to service-2');
})

app.listen(port, () => {
    console.log(`service-1 is listening at http://localhost:${port}`)
})

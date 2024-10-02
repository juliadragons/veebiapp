const express = require('express')

const app = express()

function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
            <body>
                <h1>Tere, ${req.query.nimi} </h1>
            </body>
        </html>
        `)
}

app.get('/tervitus', tervita)
app.listen(3000)

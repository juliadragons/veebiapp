const express = require('express')

const app = express()

function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    h1 {
                        color:red;
                    }
                </style>
            </head>
            <body>
                <h1>Tere, ${req.query.nimi} </h1>
            </body>
        </html>
        `)
}

function parim(req, res) {
    res.end(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    span {
                        color:violet;
                        font-size: 30ox;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <span>${req.query.nimi} on parim koduloom maailmas!</span>
            </body>
        </html>
        `)
}



app.get('/tervitus', tervita)
app.get('/parim', parim)
app.listen(3000)

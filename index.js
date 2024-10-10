const express = require('express')
const ejs = require('ejs')
const path = require("path")

const app = express()

const matk1 = {
    nimetus: "Sügismatk kõrvemaal",
    pildiUrl: "/static/asset/cat.jpg",
    kirjeldus: "Lähme ja oleme kolm päeva looduses",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee"]
}
const matk2 = {
    nimetus: "Süstamatk Hiiumaal",
    pildiUrl: "/static/asset/cat.jpg",
    kirjeldus: "Lähme ja oleme kolm päeva vee peal",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee", "uudo@ryhkija.ee"]
}
const matkad = [
    matk1,
    matk2,
    {
        nimetus: "Mägimatk Otepääl",
        pildiUrl: "/static/asset/cat.jpg",
        kirjeldus: "Lähme ja oleme kolm päeva mägedes",
        osalejad: ["uudo@ryhkija.ee"]        
    }
]

const uudised = [
    {
        pealkiri: "Kassid valisid oma kuninga",
        kokkuvõte: "Ühes väikeses külas korraldati kummaline valimiste üritus, kus kassid said valida oma kuninga. Häälte lugemisel selgus, et populaarseim kandidaat oli 7-aastane must kass nimega Musta Muri. Külarahvas tähistas tema võitu, pakkudes kassidele maitsvat toitu ja palju mänguasju.",
        pildiUrl: "/static/asset/cat.jpg",
    },
    {
        pealkiri: "Koer õppis rääkima!",
        kokkuvõte: "Üks rõõmsameelne koer nimega Roki on saanud kuulsaks, kuna ta oskab öelda sõnu nagu 'tere', 'maiustused' ja 'jalutuskäik'. Roki peremees jagas videoid sotsiaalmeedias, kus koer rääkis oma lemmiktoidust. Inimesed armastavad Roki ja tema videod on saanud tuhanded vaatamised!",
        pildiUrl: "/static/asset/dog.jpg",
    },
    {
        pealkiri: "Hakkasime müüma kõrvitsajooki",
        kokkuvõte: "Ühes kohalikus kohvikus hakati müüma uut jooki – kõrvitsajooki. See jook on valmistatud värskest kõrvitsast ja maitsestatud kaneeli ja vanilliga. Klientide seas on see saanud nii populaarseks, et kohvik pidi tellima lisakoguseid. Inimesed ütlevad, et see jook teeb neid rõõmsaks ja soojaks!",
        pildiUrl: "/static/asset/drink.jpg",
    }        
]


function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/static/style.css">
            </head>
            <body>
                <h1>Hi, ${req.query.nimi} </h1>
                <img src="/static/asset/cat.jpg" style="cat">
            </body>
        </html>
        `)
}

function palavTervitus(req, res) {
    const parameetrid = {isik: req.query.nimi}
    res.render("palavtervitus", parameetrid)
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

function naitaMatkad(req, res) {
    res.render("matkad", {matkad: matkad})
}

function naitaUudised(req, res) {
    res.render("uudised", {uudised: uudised})
}

app.use('/static', express.static("public"))
app.use(express.json())
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")

app.get('/tervitus', tervita)
app.get('/palavtervitus', palavTervitus)
app.get('/parim', parim)
app.get('/matkad', naitaMatkad)
app.get('/uudised', naitaUudised)

app.listen(3000)

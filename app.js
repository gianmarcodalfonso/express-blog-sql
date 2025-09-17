//Importo Express
const express = require(`express`);

// Definisco app
const app = express();

// Definiamo la porta d'ascolto del server
const port = 3000;

//custom middleware per endpoint inesistente
const notFound = require("./middlewares/notFound.js")

//custom middleware per errore server
const errorsHandler = require("./middlewares/errorsHandler.js")

// Middleware per i file statici
app.use(express.static(`public`));

// Middleware body parser
app.use(express.json())

// importo il file router per i post
const postsRouter = require(`./routers/postsRouter.js`)

// Rotta base della nostra applicazione
app.get(`/`, (req, res) => {
  res.send(`Server del mio blog!`)
})

app.use(`/posts`,postsRouter);

//utilizzo middleware custom globalmente
app.use(notFound);

app.use(errorsHandler);

// Porta d'ascolto del server
app.listen(port, () => {
  console.log(`Server del mio blog in ascolto alla porta ${port}!`)
})
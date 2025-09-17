const notFound = (req, res, next) => {
  res.status(404).json({
    error: "404 Not found",
    message: "L'indirizzo cercato non è stato trovato"
  })
}

module.exports = notFound
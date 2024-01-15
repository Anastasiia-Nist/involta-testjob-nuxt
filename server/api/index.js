const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
  res.send('Test successful')
})
const newsRoutes = require("./routes/news");
app.use("/news", newsRoutes);

app.listen(3088,() => {
  console.log(`API server listening on port ${3088}`)
})

export default {
  path: '/api',
  handler: app
}

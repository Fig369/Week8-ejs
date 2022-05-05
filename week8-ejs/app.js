//Imports//

const express = require('express')
const expressLayouts = require(`express-ejs-layouts`)
const app = express();
const port = 5000;

//Static Files//

/* app.use(express.static('public'))
app.use('/css'express.static(_dirname + 'public/css'))
app.use('/js'express.static(_dirname + 'public/js'))
app.use('/img'express.static(_dirname + 'public/img'))
 */

// Set Tamplating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')


//Navigation
app.get('/', (req, res) => {
    res.render('index')
  });


//Listen on Port 50000
  app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});

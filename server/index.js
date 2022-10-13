const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
poop
const PORT = 5000


app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))

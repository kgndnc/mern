const express = require('express')

const app = express()

const cors = require('cors')

require('dotenv').config({ path: './config.env' })

const port = process.env.PORT || 5000

app.use(cors({ origin: '*' }))

app.use(express.json())

app.get('/', (req, res) => {
	res.status = 200
	res.json({ message: 'this message is from express' })
})

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})


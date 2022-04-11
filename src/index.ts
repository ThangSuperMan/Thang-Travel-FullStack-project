import * as router from './routers/index'
import express from 'express'
import path from 'path'
import config from '../config/index'

const app = express()

// Setting up
app.set('views', path.join(__dirname, '../views/'))
app.set('view engine', 'pug')

// Middleware
app.use(express.static(path.join(__dirname, '/../public')))

app.use(router.default);

app.listen(config.port, () => {
	console.log(`Listenning on the port: ${config.port}`)
}
)

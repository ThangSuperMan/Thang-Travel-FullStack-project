import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
	res.status(200)
	res.render('index')
})

router.get('/about', (req: Request, res: Response) => {
	res.status(200)
	res.render('about')
})

router.get('/admin', (req: Request, res: Response) => {
	res.status(200)
	res.render('admin')
})

export default router;

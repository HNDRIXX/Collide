require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Product = require('../models/Product') 
import { Request, Response } from 'express'

const app = express()

app.use(cors())
app.use(express.json())

const uri = 'mongodb+srv://hndrx:09082612Patrick@hndrx.prchrrq.mongodb.net/Base?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((err: any) => {
    console.error('Failed to connect to MongoDB', err)
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the back-end!')
})

app.post('/addProduct', async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const product = new Product({ name })

        await product.save()

        res.status(201).json({ message: 'Product created successfully', product: product })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Failed to create product' })
    }
})

app.get('/getProduct', async (req: Request, res: Response) => {
    try {
        const data = await Product.find({})
        res.json(data)
    } catch (error: any) {
        console.error(error)
        res.status(500).send(error.toString())
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

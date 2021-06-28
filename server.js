const express = require('express')
const app = express()
const PORT = 1031
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db, 
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'WholeFoods'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
   .then(client => {
       console.log(`You are connected to ${dbName} database`)
       db = client.db(dbName)
   })
   .catch(err => {
       console.log(err)
   })


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', async (req, res) =>{
    const groceryItems = await db.collection('WholeFoods').find().toArray()
    const itemsRemaining = await db.collection('WholeFoods').countDocuments(
        {completed: false}
    )
    res.render('index.ejs',{groceryItem: groceryItems, remaining: itemsRemaining})
})

app.post('/createList', (req, res) => {
    console.log(req.body.groceryList)
    db.collection('WholeFoods').insertOne({list: req.body.groceryList, quantity: req.body.quantity, completed:false})
        .then(result => {
            console.log('Your list item has been added')
            res.redirect('/')
        })
})


app.put('/markComplete',(req, res) => {
    db.collection('WholeFoods').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoComplete', (req, res) => {
    db.collection('WholeFoods').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log('Undo Completed')
        res.json('Undo Complete')
    })
})

app.delete('/deleteItem', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('WholeFoods').deleteOne({list: req.body.basketItem})
        .then(result => {
            console.log('Deleted list item')
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})

app.listen(process.env.PORT || PORT, () => {
    console.log('I am hungry and need food!  Go buy some')
})



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


// get all 
app.get('/', async (req, res) =>{
    const groceryVeggieItems = await db.collection('veggies').find().toArray()
    const veggiesRemaining = await db.collection('veggies').countDocuments(
        {completed: false})

    const groceryMeatItems = await db.collection('meats').find().toArray()
    const meatsRemaining = await db.collection('meats').countDocuments(
        {completed: false})
    
    res.render('index.ejs',{groceryVeggieItem: groceryVeggieItems, veggiesRemain: veggiesRemaining, groceryMeatItem: groceryMeatItems, meatsRemain: meatsRemaining})
})



//post veggies 
app.post('/createVeggies', (req, res) => {
    console.log(req.body.groceryVeggieList)
    db.collection('veggies').insertOne({list: req.body.groceryVeggieList, quantity: req.body.quantity, completed:false})
        .then(result => {
            console.log('Your list item has been added')
            res.redirect('/')
        })
})


//post meat 
app.post('/createMeat', (req, res) => {
    console.log(req.body.groceryMeatList)
    db.collection('meats').insertOne({list: req.body.groceryMeatList, quantity: req.body.quantity, completed:false})
        .then(result => {
            console.log('Your list item has been added')
            res.redirect('/')
        })
})


//put veggies 
app.put('/markCompleteVeggies',(req, res) => {
    db.collection('veggies').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoCompleteVeggies', (req, res) => {
    db.collection('veggies').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log('Undo Completed')
        res.json('Undo Complete')
    })
})


//put meats
app.put('/markCompleteMeats',(req, res) => {
    db.collection('meats').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoCompleteMeats', (req, res) => {
    db.collection('meats').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log('Undo Completed')
        res.json('Undo Complete')
    })
})


//delete veggies 
app.delete('/deleteVeggies', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('veggies').deleteOne({list: req.body.basketItem})
        .then(result => {
            console.log('Deleted list item')
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})


//delete meats 
app.delete('/deleteMeats', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('meats').deleteOne({list: req.body.basketItem})
        .then(result => {
            console.log('Deleted list item')
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})


//listen to me
app.listen(process.env.PORT || PORT, () => {
    console.log('I am hungry and need food!  Go buy some')
})



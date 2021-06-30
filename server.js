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
        console.log(groceryVeggieItems)

    const groceryMeatItems = await db.collection('meats').find().toArray()
    const meatsRemaining = await db.collection('meats').countDocuments(
        {completed: false})

    const groceryGrainItems = await db.collection('grains').find().toArray()
    const grainsRemaining = await db.collection('grains').countDocuments(
        {completed: false})

    const groceryFrozenItems = await db.collection('frozen').find().toArray()
    const frozenRemaining = await db.collection('frozen').countDocuments(
        {completed: false})

    const grocerySnackItems = await db.collection('snacks').find().toArray()
    const snacksRemaining = await db.collection('snacks').countDocuments(
        {completed: false})

    const groceryPersonalItems = await db.collection('personal').find().toArray()
    const personalRemaining = await db.collection('personal').countDocuments(
        {completed: false})
    
    res.render('index.ejs',{groceryVeggieItem: groceryVeggieItems, veggiesRemain: veggiesRemaining, groceryMeatItem: groceryMeatItems, meatsRemain: meatsRemaining, groceryGrainItem: groceryGrainItems, grainsRemain: grainsRemaining, groceryFrozenItem: groceryFrozenItems, frozenRemain: frozenRemaining, grocerySnackItem: grocerySnackItems, snacksRemain: snacksRemaining, groceryPersonalItem: groceryPersonalItems, personalRemain: personalRemaining})
})



//post veggies 
app.post('/createVeggies', (req, res) => {
    console.log(req.body.groceryVeggieList)
    db.collection('veggies').insertOne({list: req.body.groceryVeggieList, quantity: req.body.quantity, size: req.body.size, completed:false})
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

//post grains
app.post('/createGrains', (req, res) => {
    console.log(req.body.groceryGrainList)
    db.collection('grains').insertOne({list: req.body.groceryGrainList, quantity: req.body.quantity, completed:false})
        .then(result => {
            console.log('Your list item has been added')
            res.redirect('/')
        })
})


//post frozen
app.post('/createFrozen', (req, res) => {
    console.log(req.body.groceryFrozenList)
    db.collection('frozen').insertOne({list: req.body.groceryFrozenList, quantity: req.body.quantity, completed:false})
        .then(result => {
            console.log('Your list item has been added')
            res.redirect('/')
        })
})

// post snacks 
app.post('/createSnacks', (req, res) => {
    console.log(req.body.grocerySnackList)
    db.collection('snacks').insertOne({list: req.body.grocerySnackList, quantity: req.body.quantity, completed:false})
        .then(result => {
            console.log('Your list item has been added')
            res.redirect('/')
        })
})


//post personal 
app.post('/createPersonal', (req, res) => {
    console.log(req.body.groceryPersonalList)
    db.collection('personal').insertOne({list: req.body.groceryPersonalList, quantity: req.body.quantity, completed:false})
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
app.put('/markCompleteMeat',(req, res) => {
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

app.put('/undoCompleteMeat', (req, res) => {
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



//put grains
app.put('/markCompleteGrain',(req, res) => {
    db.collection('grains').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoCompleteGrain', (req, res) => {
    db.collection('grains').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log('Undo Completed')
        res.json('Undo Complete')
    })
})


//put frozen
app.put('/markCompletefrozen',(req, res) => {
    db.collection('frozen').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoCompletefrozen', (req, res) => {
    db.collection('frozen').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log('Undo Completed')
        res.json('Undo Complete')
    })
})


//put snacks
app.put('/markCompleteSnack',(req, res) => {
    db.collection('snacks').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoCompleteSnack', (req, res) => {
    db.collection('snacks').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log('Undo Completed')
        res.json('Undo Complete')
    })
})


//put personal
app.put('/markCompletePersonal',(req, res) => {
    db.collection('personal').updateOne({list: req.body.basketItem}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log('Marked Complete')
        res.json('Mark Complete')
    })
})

app.put('/undoCompletePersonal', (req, res) => {
    db.collection('personal').updateOne({list: req.body.basketItem}, {
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


//delete grains
app.delete('/deleteGrains', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('grains').deleteOne({list: req.body.basketItem})
        .then(result => {
            console.log('Deleted list item')
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})


//delete frozen
app.delete('/deleteFrozen', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('frozen').deleteOne({list: req.body.basketItem})
        .then(result => {
            console.log('Deleted list item')
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})


//delete snacks
app.delete('/deleteSnacks', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('snacks').deleteOne({list: req.body.basketItem})
        .then(result => {
            console.log('Deleted list item')
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})


//delete personal
app.delete('/deletePersonal', (req, res) => {
    console.log(req.body.basketItem)
    db.collection('personal').deleteOne({list: req.body.basketItem})
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



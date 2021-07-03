const express = require('express')
const app = express()
const PORT = 1031
const MongoClient = require('mongodb').MongoClient
const { ObjectId } = require('mongodb')
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
    db.collection('veggies').insertOne({list: req.body.groceryVeggieList, quantity: req.body.quantity, size: req.body.size, completed:false})
        .then(result => {
            res.redirect('/')
        })
})


//post meat 
app.post('/createMeat', (req, res) => {
    db.collection('meats').insertOne({list: req.body.groceryMeatList, quantity: req.body.quantity, size: req.body.size, completed:false})
        .then(result => {
            res.redirect('/')
        })
})

//post grains
app.post('/createGrains', (req, res) => {
    db.collection('grains').insertOne({list: req.body.groceryGrainList, quantity: req.body.quantity, size: req.body.size, completed:false})
        .then(result => {
            res.redirect('/')
        })
})


//post frozen
app.post('/createFrozen', (req, res) => {
    db.collection('frozen').insertOne({list: req.body.groceryFrozenList, quantity: req.body.quantity, size: req.body.size, completed:false})
        .then(result => {
            res.redirect('/')
        })
})

// post snacks 
app.post('/createSnacks', (req, res) => {
    db.collection('snacks').insertOne({list: req.body.grocerySnackList, quantity: req.body.quantity, size: req.body.size, completed:false})
        .then(result => {
            res.redirect('/')
        })
})


//post personal 
app.post('/createPersonal', (req, res) => {
    db.collection('personal').insertOne({list: req.body.groceryPersonalList, quantity: req.body.quantity, size: req.body.size, completed:false})
        .then(result => {
            res.redirect('/')
        })
})







app.put('/markCompleteItem',(req, res) => {
    db.collection(req.body.subFolder).update({_id: ObjectId(req.body.basketItem)}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        res.json('Mark Complete')
    })
})

app.put('/undoCompleteItem', (req, res) => {
    db.collection(req.body.subFolder).update({_id: ObjectId(req.body.basketItem)}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        res.json('Undo Complete')
    })
})


// //put veggies 
// app.put('/markCompleteVeggies',(req, res) => {
//     db.collection('veggies').update({_id: ObjectId(req.body.basketItem)}, {
//         $set: {
//             completed: true
//         }
//     })
//     .then(result => {
//         console.log('Marked Complete')
//         res.json('Mark Complete')
       
//     })
// })

// app.put('/undoCompleteVeggies', (req, res) => {
//     db.collection('veggies').update({_id: ObjectId(req.body.basketItem)}, {
//         $set: {
//             completed: false
//         }
//     })
//     .then(result => {
//         console.log('Undo Completed')
//         res.json('Undo Complete')
//     })
// })


// //put meats
// app.put('/markCompleteMeat',(req, res) => {
//     db.collection('meats').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: true
//         }
//     })
//     .then(result => {
//         console.log('Marked Complete')
//         res.json('Mark Complete')
//     })
// })

// app.put('/undoCompleteMeat', (req, res) => {
//     db.collection('meats').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: false
//         }
//     })
//     .then(result => {
//         console.log('Undo Completed')
//         res.json('Undo Complete')
//     })
// })



// //put grains
// app.put('/markCompleteGrain',(req, res) => {
//     db.collection('grains').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: true
//         }
//     })
//     .then(result => {
//         console.log('Marked Complete')
//         res.json('Mark Complete')
//     })
// })

// app.put('/undoCompleteGrain', (req, res) => {
//     db.collection('grains').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: false
//         }
//     })
//     .then(result => {
//         console.log('Undo Completed')
//         res.json('Undo Complete')
//     })
// })


// //put frozen
// app.put('/markCompletefrozen',(req, res) => {
//     db.collection('frozen').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: true
//         }
//     })
//     .then(result => {
//         console.log('Marked Complete')
//         res.json('Mark Complete')
//     })
// })

// app.put('/undoCompletefrozen', (req, res) => {
//     db.collection('frozen').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: false
//         }
//     })
//     .then(result => {
//         console.log('Undo Completed')
//         res.json('Undo Complete')
//     })
// })


// //put snacks
// app.put('/markCompleteSnack',(req, res) => {
//     db.collection('snacks').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: true
//         }
//     })
//     .then(result => {
//         console.log('Marked Complete')
//         res.json('Mark Complete')
//     })
// })

// app.put('/undoCompleteSnack', (req, res) => {
//     db.collection('snacks').updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: false
//         }
//     })
//     .then(result => {
//         console.log('Undo Completed')
//         res.json('Undo Complete')
//     })
// })


//put personal
// app.put('/markCompleteItem',(req, res) => {
//     db.collection(req.body.subFolder).updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: true
//         }
//     })
//     .then(result => {
//         res.json('Mark Complete')
//     })
// })

// app.put('/undoCompleteItem', (req, res) => {
//     db.collection(req.body.subFolder).updateOne({list: req.body.basketItem}, {
//         $set: {
//             completed: false
//         }
//     })
//     .then(result => {
//         res.json('Undo Complete')
//     })
// })




//delete veggies 
app.delete('/deleteItem', (req, res) => {
    db.collection(req.body.subFolder).findOneAndDelete({_id: ObjectId(req.body.basketItem)})
        .then(result => {
            res.json('Deleted it')
        })
        .catch(err => console.log(err))
})



//listen to me
app.listen(process.env.PORT || PORT, () => {
    console.log('I am hungry and need food!  Go buy some')
})



const deleteVeggiesItem = document.querySelectorAll('.deleteVeggies')
const deleteMeatsItem = document.querySelectorAll('.deleteMeats')
const deleteGrainsItem = document.querySelectorAll('.deleteGrains')
const deleteFrozenItem = document.querySelectorAll('.deleteFrozen')
const deleteSnacksItem = document.querySelectorAll('.deleteSnacks')
const deletePersonalItem = document.querySelectorAll('.deletePersonal')


const veggieComplete = document.querySelectorAll('.groceryVeggieList span .input-incompleted')
const meatComplete = document.querySelectorAll('.groceryMeatList span')
const grainComplete = document.querySelectorAll('.groceryGrainList span')
const frozenComplete = document.querySelectorAll('.groceryFrozenList span')
const snackComplete = document.querySelectorAll('.grocerySnackList span')
const personalComplete = document.querySelectorAll('.groceryPersonalList span')


const undoVeggieComplete = document.querySelectorAll('.groceryVeggieList span.completed .input-completed')
const undoMeatComplete = document.querySelectorAll('.groceryMeatList span.completed')
const undoGrainComplete = document.querySelectorAll('.groceryGrainList span.completed')
const undoFrozenComplete = document.querySelectorAll('.groceryFrozenList span.completed')
const undoSnackComplete = document.querySelectorAll('.grocerySnackList span.completed')
const undoPersonalComplete = document.querySelectorAll('.groceryPersonalList span.completed')




Array.from(deleteVeggiesItem).forEach((element) => {
    element.addEventListener('click',deleteVeggies)
})

Array.from(deleteMeatsItem).forEach((element) => {
    element.addEventListener('click',deleteMeats)
})

Array.from(deleteGrainsItem).forEach((element) => {
    element.addEventListener('click',deleteGrains)
})

Array.from(deleteFrozenItem).forEach((element) => {
    element.addEventListener('click',deleteFrozen)
})

Array.from(deleteSnacksItem).forEach((element) => {
    element.addEventListener('click',deleteSnacks)
})

Array.from(deletePersonalItem).forEach((element) => {
    element.addEventListener('click',deletePersonal)
})







Array.from(veggieComplete).forEach((element) =>{
    element.addEventListener('click', markVeggiesComplete)
})

Array.from(meatComplete).forEach((element) =>{
    element.addEventListener('click', markMeatComplete)
})

Array.from(grainComplete).forEach((element) =>{
    element.addEventListener('click', markGrainComplete)
})

Array.from(frozenComplete).forEach((element) =>{
    element.addEventListener('click', markFrozenComplete)
})

Array.from(snackComplete).forEach((element) =>{
    element.addEventListener('click', markSnackComplete)
})

Array.from(personalComplete).forEach((element) =>{
    element.addEventListener('click', markPersonalComplete)
})






Array.from(undoVeggieComplete).forEach((element) => {
    element.addEventListener('click', markUndoVeggiesComplete)
})

Array.from(undoMeatComplete).forEach((element) => {
    element.addEventListener('click', markUndoMeatComplete)
})

Array.from(undoGrainComplete).forEach((element) => {
    element.addEventListener('click', markUndoGrainComplete)
})

Array.from(undoFrozenComplete).forEach((element) => {
    element.addEventListener('click', markUndoFrozenComplete)
})

Array.from(undoSnackComplete).forEach((element) => {
    element.addEventListener('click', markUndoSnackComplete)
})

Array.from(undoPersonalComplete).forEach((element) => {
    element.addEventListener('click', markUndoPersonalComplete)
})





// Functions for all the deletes 
async function deleteVeggies(){
    const listText = this.parentNode.querySelector('.secondDiv').innerText
    console.log(listText)
    try{
        const response = await fetch('deleteVeggies', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()   
    }catch(err){
        console.log(err)

    }
  
}

async function deleteMeats(){
    const listText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteMeats', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()   
    }catch(err){
        console.log(err)

    }

}

async function deleteGrains(){
    const listText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteGrains', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()   
    }catch(err){
        console.log(err)

    }
  
}

async function deleteFrozen(){
    const listText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteFrozen', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()   
    }catch(err){
        console.log(err)

    }

}

async function deleteSnacks(){
    const listText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteSnacks', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()   
    }catch(err){
        console.log(err)

    }
  
}

async function deletePersonal(){
    const listText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deletePersonal', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()   
    }catch(err){
        console.log(err)

    }

}







//functions for all the mark completes 
async function markVeggiesComplete(){
const listText = this.parentNode.childNodes[3].innerText
console.log(this.parentNode.childNodes)
    try{
    const response = await fetch('markCompleteVeggies', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)

    }
}


async function markMeatComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('markCompleteMeat', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    
    }
}
    


async function markGrainComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('markCompleteGrain', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)

    }
}
    
    
async function markFrozenComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('markCompleteFrozen', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    
    }
}


async function markSnackComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('markCompleteSnack', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)

    }
}
        
        
async function markPersonalComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('markCompletePersonal', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    
    }
}


    
//functins for all the mark incompelete 
async function markUndoVeggiesComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('undoCompleteVeggies', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUndoMeatComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('undoCompleteMeat', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUndoGrainComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('undoCompleteGrain', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    }
}
    
async function markUndoFrozenComplete(){
const listText = this.parentNode.childNodes[3].innerText
try{
const response = await fetch('undoCompleteFrozen', {
    method: 'put',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        'basketItem': listText
    })
})
const data = await response.json()
console.log(data)
location.reload()

}catch(err){
    console.log(err)
}
}

async function markUndoSnackComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('undoCompleteSnack', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUndoPersonalComplete(){
const listText = this.parentNode.childNodes[3].innerText
    try{
    const response = await fetch('undoCompletePersonal', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    }catch(err){
        console.log(err)
    }
}
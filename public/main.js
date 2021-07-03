const deleteVeggiesItem = document.querySelectorAll('.deleteVeggies')
const deleteMeatsItem = document.querySelectorAll('.deleteMeats')
const deleteGrainsItem = document.querySelectorAll('.deleteGrains')
const deleteFrozenItem = document.querySelectorAll('.deleteFrozen')
const deleteSnacksItem = document.querySelectorAll('.deleteSnacks')
const deletePersonalItem = document.querySelectorAll('.deletePersonal')


const veggieComplete = document.querySelectorAll('.groceryVeggieList .input-incompleted')
const meatComplete = document.querySelectorAll('.groceryMeatList .input-incompleted')
const grainComplete = document.querySelectorAll('.groceryGrainList .input-incompleted')
const frozenComplete = document.querySelectorAll('.groceryFrozenList .input-incompleted')
const snackComplete = document.querySelectorAll('.grocerySnackList .input-incompleted')
const personalComplete = document.querySelectorAll('.groceryPersonalList .input-incompleted')


const undoVeggieComplete = document.querySelectorAll('.groceryVeggieList .input-completed')
const undoMeatComplete = document.querySelectorAll('.groceryMeatList .input-completed')
const undoGrainComplete = document.querySelectorAll('.groceryGrainList .input-completed')
const undoFrozenComplete = document.querySelectorAll('.groceryFrozenList .input-completed')
const undoSnackComplete = document.querySelectorAll('.grocerySnackList .input-completed')
const undoPersonalComplete = document.querySelectorAll('.groceryPersonalList .input-completed')




Array.from(deleteVeggiesItem).forEach((element) => {
    element.addEventListener('click', () => {
        deleteItem(element.dataset.id, 'veggies')
    })
})

Array.from(deleteMeatsItem).forEach((element) => {
    element.addEventListener('click', () => {
        deleteItem(element.dataset.id, 'meats')
    })
})

Array.from(deleteGrainsItem).forEach((element) => {
    element.addEventListener('click', () =>{
        deleteItem(element.dataset.id, 'grains')
    })
})

Array.from(deleteFrozenItem).forEach((element) => {
    element.addEventListener('click', () => {
        deleteItem(element.dataset.id, 'frozen')
    })
})

Array.from(deleteSnacksItem).forEach((element) => {
    element.addEventListener('click', () => {
        deleteItem(element.dataset.id, 'snacks')
    })
})

Array.from(deletePersonalItem).forEach((element) => {
    element.addEventListener('click', () => {
        deleteItem(element.dataset.id, 'personal')
    })
})







Array.from(veggieComplete).forEach((element) =>{
    element.addEventListener('click', () => {
        markItemComplete(element.dataset.id, 'veggies')
    })
})

Array.from(meatComplete).forEach((element) =>{
    element.addEventListener('click', () => {
        markItemComplete(element.dataset.id, 'meats')
    })
})

Array.from(grainComplete).forEach((element) =>{
    element.addEventListener('click', () => {
        markItemComplete(element.dataset.id, 'grains')
    })
})

Array.from(frozenComplete).forEach((element) =>{
    element.addEventListener('click', () => {
        markItemComplete(element.dataset.id, 'frozen')
    })
})

Array.from(snackComplete).forEach((element) =>{
    element.addEventListener('click', () => {
        markItemComplete(element.dataset.id, 'snacks')
    })
})

Array.from(personalComplete).forEach((element) =>{
    element.addEventListener('click', () => {
        markItemComplete(element.dataset.id, 'personal')
    })
})






Array.from(undoVeggieComplete).forEach((element) => {
    element.addEventListener('click', () => {
        undoItemComplete(element.dataset.id, 'veggies')
    })
})

Array.from(undoMeatComplete).forEach((element) => {
    element.addEventListener('click', () => {
        undoItemComplete(element.dataset.id, 'meats')
    })
})

Array.from(undoGrainComplete).forEach((element) => {
    element.addEventListener('click', () => {
        undoItemComplete(element.dataset.id, 'grains')
    })
})

Array.from(undoFrozenComplete).forEach((element) => {
    element.addEventListener('click', () => {
        undoItemComplete(element.dataset.id, 'frozen')
    })
})

Array.from(undoSnackComplete).forEach((element) => {
    element.addEventListener('click', () => {
        undoItemComplete(element.dataset.id, 'snacks')
    })
})

Array.from(undoPersonalComplete).forEach((element) => {
    element.addEventListener('click', () => {
        undoItemComplete(element.dataset.id, 'personal')
    })
})





async function deleteItem(listText, subFolder){
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'basketItem':listText,
                'subFolder':subFolder
            })
        })
        const data = await response.json()
        location.reload()   
    }catch(err){
        console.log(err)

    }
}



async function markItemComplete(listText, subFolder){
    try{
    const response = await fetch('markCompleteItem', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText,
            'subFolder': subFolder
        })
    })
    const data = await response.json()
    location.reload()

    }catch(err){
        console.log(err)

    }
}


async function undoItemComplete(listText, subFolder){
    try{
    const response = await fetch('undoCompleteItem', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'basketItem': listText,
            'subFolder': subFolder
        })
    })
    const data = await response.json()
    location.reload()

    }catch(err){
        console.log(err)
    }
}
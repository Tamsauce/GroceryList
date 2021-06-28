const deleteVeggiesItem = document.querySelectorAll('.deleteVeggies')
const deleteMeatsItem = document.querySelectorAll('.deleteMeats')
const groceryList = document.querySelectorAll('.groceryList span')
const listComplete = document.querySelectorAll('.groceryList span.completed')


Array.from(deleteVeggiesItem).forEach((element) => {
    element.addEventListener('click',deleteVeggies)
})

Array.from(deleteMeatsItem).forEach((element) => {
    element.addEventListener('click',deleteMeats)
})

Array.from(groceryList).forEach((element) =>{
    element.addEventListener('click', markComplete)
})

Array.from(listComplete).forEach((element) => {
    element.addEventListener('click', undoComplete)
})

async function deleteVeggies(){
    const listText = this.parentNode.childNodes[3].innerText
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

async function markComplete(){
const listText = this.parentNode.childNodes[3].innerText
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


async function undoComplete(){
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
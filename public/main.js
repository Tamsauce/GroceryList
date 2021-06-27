const deleteBtn = document.querySelectorAll('.delete')
const groceryList = document.querySelectorAll('.groceryList span')
const listComplete = document.querySelectorAll('.groceryList span.completed')


Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click',deleteItem)
})

Array.from(groceryList).forEach((element) =>{
    element.addEventListener('click', markComplete)
})

Array.from(listComplete).forEach((element) => {
    element.addEventListener('click', undoComplete)
})

async function deleteItem(){
    const listText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteItem', {
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
    const response = await fetch('markComplete', {
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
    const response = await fetch('undoComplete', {
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
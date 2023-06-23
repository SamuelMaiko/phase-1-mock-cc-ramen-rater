// write your code here
fetch('http://localhost:3000/ramens')
.then(response=> response.json())
.then(data=>{
data.forEach(objectol=>{
 const imageScreen=document.getElementById('ramen-menu')
const img=document.createElement('img')
imageScreen.appendChild(img)
img.setAttribute('src',`${objectol.image}`)

img.addEventListener("click",function(e){
    const imgDisplay=document.querySelector('.detail-image')
    imgDisplay.setAttribute("src",`${e.target.src}`)

    const name=document.querySelector('.name')
    const restaurant=document.querySelector('.restaurant')
    name.innerHTML=`${objectol.name}` 
    restaurant.innerHTML=`${objectol.restaurant}`

    const rating=document.querySelector('#rating-display')
    const comment=document.querySelector('#comment-display')
    rating.innerHTML=`${objectol.rating}`
    comment.innerHTML=`${objectol.comment}`
    })
})

}
)


const form=document.querySelector('form')
form.addEventListener("submit",function(e){
e.preventDefault()
const imageScreen2=document.getElementById('ramen-menu')
const img2=document.createElement('img')
imageScreen2.appendChild(img2)
const newImage=document.querySelector('#new-image')
img2.setAttribute('src',`${newImage.value}`)


// img2.addEventListener("click",function(){
//     const imgDisplay2=document.querySelector('.detail-image')
//     // const name2=document.querySelector('#new-na').value
//     const imageInput=document.querySelector('#new-image')
//     imgDisplay2.setAttribute("src",`${imageInput.value}`)

//     const name2=document.querySelector('.name')//DOM
//     const restaurant2=document.querySelector('.restaurant')//DOM
//     const nameInput=document.querySelector('#new-name')
//     const restaurantInput=document.querySelector('#new-restaurant')

//     name2.innerHTML=`${nameInput.value}` 
//     restaurant2.innerHTML=`${restaurantInput.value}`

//     const rating2=document.querySelector('#rating-display')//DOM
//     const comment2=document.querySelector('#comment-display')//DOM
//     const ratingInput=document.querySelector('#new-rating')
//     const commentInput=document.querySelector('#new-comment')

//     rating2.innerHTML=`${ratingInput.value}`
//     comment2.innerHTML=`${commentInput.value}`
//     })
form.reset()
})
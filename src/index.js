
document.addEventListener("DOMContentLoaded", run)

function run(){

    //getting dog data
fetch ("http://localhost:3000/pups")
    .then((resp)=> resp.json())
    .then((pups) => {
        pups.forEach(addPup)
    })

    //add pup function, pup is the object
    function addPup(dog){
    //adding a span with the text name and appending it to dog bar
        const dogBar  = document.getElementById("dog-bar")
        const dogName = document.createElement("span")
        dogName.innerText = dog.name
        dogBar.append(dogName)

        //add dog info, need click event on dogName
    dogName.addEventListener("click", ()=>{
        const dogInfo = document.getElementById("dog-info")
        dogInfo.innerHTML = ''

        const dogImage = document.createElement("img")
        dogImage.src = dog.image

        const dogInfoName = document.createElement("h2")
        dogInfoName.innerText = dog.name

        const dogButton = document.createElement("button")
        dogButton.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

      //toggle dog button
      dogButton.addEventListener("click", ()=>{
        if (dogButton.innerText === "Good Dog!"){
            dogButton.innerText = "Bad Dog!"
        } else {
            dogButton.innerText = "Good Dog!"
        }
      })

        dogInfo.append(dogImage, dogInfoName, dogButton)
    })
    }


}









// function run(){
//     fetch("http://localhost:3000/pups")
//         .then((resp)=> resp.json())
//         .then((pupsData)=> main(pupsData))
// function main(data){
//  //add span to div bar
//   const dogBar = document.getElementById("dog-bar")

//   data.forEach((dog)=>{
//     const dogSpan = document.createElement("span")
//     dogSpan.innerText = dog.name

//     dogSpan.addEventListener("click", ()=>{
//         const dogInfo = document.getElementById("dog-info")
//         dogInfo.innerHTML = ""

//         const dogImage = document.createElement("img")
//         dogImage.src = dog.image
        
//         const dogName = document.createElement("h2")
//         dogName.innerText = dog.name

//         const button = document.createElement("button")
//         button.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

//         dogInfo.append(dogImage, dogName, button)

//         button.addEventListener("click", ()=>{
//             if(button.innerText === "Good Dog!"){
//                 button.innerText = "Bad Dog!"
//             } else { button.innerText = "Good Dog!"}
//         })
//     })
//   dogBar.append(dogSpan)
//   })
// }  
// }
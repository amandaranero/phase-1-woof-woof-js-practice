
document.addEventListener("DOMContentLoaded", run())

function run(){
    fetch("http://localhost:3000/pups")
        .then((resp)=> resp.json())
        .then((pupsData)=> main(pupsData))
function main(data){
 //add span to div bar
  const dogBar = document.getElementById("dog-bar")

  data.forEach((dog)=>{
    const dogSpan = document.createElement("span")
    dogSpan.innerText = dog.name

    dogSpan.addEventListener("click", ()=>{
        const dogInfo = document.getElementById("dog-info")
        dogInfo.innerHTML = ""

        const dogImage = document.createElement("img")
        dogImage.src = dog.image
        
        const dogName = document.createElement("h2")
        dogName.innerText = dog.name

        const button = document.createElement("button")
        button.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

        dogInfo.append(dogImage, dogName, button)

        button.addEventListener("click", ()=>{
            if(button.innerText === "Good Dog!"){
                button.innerText = "Bad Dog!"
            } else { button.innerText = "Good Dog!"}
        })
    })
  dogBar.append(dogSpan)
  })
}  
}
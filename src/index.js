document.addEventListener("DOMContentLoaded", fetchPups)
    

function fetchPups(){
    fetch("http://localhost:3000/pups")
        .then(resp => resp.json())
        .then(pups => addAllPups(pups))
}

function addAllPups(pups){
    const dogBar = document.getElementById("dog-bar")
    pups.forEach((pup)=>{
       const newDogSpan = document.createElement("span")
       newDogSpan.innerText = pup.name
       newDogSpan.dataset.id = pup.id
       dogBar.append(newDogSpan)
       

       newDogSpan.addEventListener("click", handlePupClick)
       
    })
}

function handlePupClick(e){
    fetch(`http://localhost:3000/pups/${e.target.dataset.id}`)
        .then(resp=> resp.json())
        .then(pupData => addOnePup(pupData))
}
function addOnePup(pup){
    const dogInfo = document.getElementById("dog-info")
    dogInfo.innerHTML = ""

    const pupImage = document.createElement("img")
    pupImage.src = pup.image
    

    const pupName = document.createElement("h2")
    pupName.innerText = pup.name

    const pupButton = document.createElement("button")
    pupButton.innerText = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"
    pupButton.addEventListener("click", handlePupButton)

    dogInfo.append(pupImage,pupName, pupButton)
}

function handlePupButton(e){
    if (e.target.innerText === "Good Dog!"){
        e.target.innerText = "Bad Dog!"
    }
    else {
        e.target.innerText = "Good Dog!"
    }
}

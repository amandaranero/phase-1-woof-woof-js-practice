
document.addEventListener("DOMContentLoaded", fetchPups)
    

function fetchPups(){
    fetch("http://localhost:3000/pups")
        .then(response => response.json())
        .then(pups => addAllPups(pups))
}

function addAllPups(pups){
   const dogBar = document.getElementById("dog-bar")
   pups.forEach((pup)=>{
    const newDogSpan = document.createElement("span")
    newDogSpan.innerText = pup.name
    newDogSpan.dataset.id = pup.id
    dogBar.append(newDogSpan)

    newDogSpan.addEventListener("click", pupClick)
   })
}

function pupClick(e){
    fetch(`http://localhost:3000/pups/${e.target.dataset.id}`)
        .then((resp)=> resp.json())
        .then((pupData)=> addOnePup(pupData))
};

function addOnePup(pup){
    const dogInfo = document.getElementById("dog-info")
    dogInfo.innerHTML = ""
    
    const pupImage = document.createElement("img")
    pupImage.src = pup.image

    const pupName = document.createElement("h2")
    pupName.innerText = pup.name

    const goodOrBadButton = document.createElement("button")
    goodOrBadButton.innerText = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"
    goodOrBadButton.addEventListener("click", goodOrBadButtonClick)

    dogInfo.append(pupImage, pupName, goodOrBadButton)

    }

    function goodOrBadButtonClick(e){
        if (e.target.innerText === "Good Dog!"){
            e.target.innerText = "Bad Dog!"
        }
        else {
            e.target.innerText = "Good Dog!"
        }
    }

const run= () => {
    fetch("http://localhost:3000/pups")
        .then((resp)=> resp.json())
        .then((dogData) => {
            const goodDogFilter = document.getElementById("good-dog-filter")
            const dogBar = document.getElementById("dog-bar")

            goodDogFilter.addEventListener("click", ()=>{
             if (goodDogFilter.innerText === "Filter good dogs: OFF"){
                goodDogFilter.innerText = "Filter good dogs: ON"
                dogBar.innerText = ""
                const filterPups = dogData.filter((pup)=>{
                    if(pup.isGoodDog){
                        return pup;
                    }
                })
            filterPups.forEach((pup)=>{
                addDogToNavBar(pup)
            })

             } else {
                goodDogFilter.innerText = "Filter good dogs: OFF"
                dogBar.innerText = ""
                dogData.forEach((pup)=>{
                    addDogToNavBar(pup)
                })
                
             }
            })
            dogData.forEach((pup)=>{
            addDogToNavBar(pup)
      
        })
})
}


function addDogToNavBar(pupObj){
    const dogBar = document.getElementById("dog-bar")
    const dogInfo = document.getElementById("dog-info")
 

    const dogSpan = document.createElement("span")
    dogSpan.innerText = pupObj.name
    dogBar.append(dogSpan)

    dogSpan.addEventListener("click", ()=>{
        dogInfo.innerHTML = ""
        const dogImg = document.createElement("img")
        dogImg.src = pupObj.image

        const dogName = document.createElement("h2")
        dogName.innerText = pupObj.name

        const dogButton = document.createElement("button")
        dogButton.innerText = pupObj.isGoodDog ? "Good Dog!" : "Bad Dog!"

        dogInfo.append(dogImg , dogName, dogButton)

        dogButton.addEventListener("click", ()=>{
            if (dogButton.innerText === "Good Dog!"){
                (dogButton.innerText = "Bad Dog!")
            }
            else {dogButton.innerText = "Good Dog!"}
        })
    })
      
    
}




document.addEventListener('DOMContentLoaded', run)
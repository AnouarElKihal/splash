// UNSPLASH API ==> https://unsplash.com/developers
// UNSPLASH API DOCUMENTATION FOR JS ==> https://github.com/unsplash/unsplash-js
// URL EXAMPLE ==> https://api.unsplash.com/search/photos?query=canada

const userInput = document.getElementById("userInput")
const searchBtn = document.getElementById("searchBtn")
const contentSection = document.querySelector(".contentSection")

let url = ""
const apiKey = "eki7Msky_YPYO5D2P59owYF3A-ZyceTyFj0GJ6qX0FY" // Replace with 'YOUR_UNSPLASH_API_KEY'

const fetchImage = () => {
    fetch(url, {
        headers: {
            "Authorization": `Client-ID ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let results = json.results
        console.log(results)
        for (let i = 0; i < 9; i++) {
            const imageElement = document.createElement("img")
            imageElement.src = results[i].urls.full
            imageElement.addEventListener("click", () => {
                window.open(results[i].links.download, "_blank")
            })
            contentSection.appendChild(imageElement)
        }
    })
    .catch(error => {
        alert("something went wrong")
        console.log(error)
    })
}

const action = () => {
    contentSection.innerHTML = ""
    url = `https://api.unsplash.com/search/photos?query=${userInput.value}`
    fetchImage()
    userInput.value = ""
}

searchBtn.onclick = () => {
    action()
}

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        action()
    }
})


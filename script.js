let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((value) => {
    return value.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for(item in contests){
        console.log(contests[item])
        ihtml += `<div class="card mx-2 my-2" style="width: 22rem;">
                <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=900&t=st=1679325879~exp=1679326479~hmac=f47d78a4ad126c3caa8da0d265dec140debb29cb5db6210f79a3e3a2f04c1aef" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text"> Status is ${contests[item].status}</p>
                    <p class="card-text"> In 24 hour? ${contests[item].in_24_hours}</p>
                    <p>Site: ${contests[item].site}</p>
                    <p>Starts at: ${contests[item].start_time}</p>
                    <p>Starts at: ${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="btn btn-primary my-2">Visit Contest</a>
                </div>
            </div>`
    }
    cardContainer.innerHTML = ihtml
})

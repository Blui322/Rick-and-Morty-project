const apiRick= async(page) => {
    let URL ="https://rickandmortyapi.com/api/episode?page="+page;
    const api = await fetch(URL);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#results")
    divRes.innerHTML=""
    data.results.forEach(item => {
        divItem = document.createElement("div")
        divItem.innerHTML=`
        <div class="card">
  <img src="${item.url}"  alt="displaying-episodes">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h5 class="card-title">${item.episode}</h5>
    </div>
</div>
        `
        divRes.appendChild(divItem);
        
    });
   
}


apiRick(1)
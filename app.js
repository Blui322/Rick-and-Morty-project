const apiRick= async(page) => {
    let URL ="https://rickandmortyapi.com/api/character/?page="+page;
    const api = await fetch(URL);
    const data = await api.json();
    //console.log(data);
    divRes = document.querySelector("#one-results")
    divRes.innerHTML=""
    data.results.forEach(item => {
        divItem = document.createElement("div")
        divItem.innerHTML=`
        <div class="card">
  <img  src="${item.image}"  alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"><b>Status:</b>${item.status}</p>
    <p class="card-text"><b>Species:</b>${item.species}</p>
    <p class="card-text"><b>Gender:</b>${item.gender}</p>
 </div>
</div>
        `
        divRes.appendChild(divItem);
        
    });
   
}
const formRick = document.querySelector(".form");
formRick.addEventListener("submit", (event) => {
    event.preventDefault();
const inputMorty = document.querySelector("#search");
const newMor = inputMorty.value;
getCharater(newMor);
});

function getCharater(newMor){
    fetch(`https://rickandmortyapi.com/api/character/?name=${newMor}&status=alive`)
    .then((response) => response.json())
    .then((json) => {
  console.log(json);
json.results.forEach(item => {
    divItem = document.createElement("div")
    divItem.innerHTML=`
    <div class="card">
<img  src="${item.image}"  alt="...">
<div class="card-body">
<h5 class="card-title">${item.name}</h5>
<p class="card-text"><b>Status:</b>${item.status}</p>
<p class="card-text"><b>Species:</b>${item.species}</p>
<p class="card-text"><b>Gender:</b>${item.gender}</p>
</div>
</div>
    `
    divRes.prepend(divItem);
    
  });

 })

}



apiRick(1)
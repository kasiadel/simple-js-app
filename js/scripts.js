var pokemonRepository =(function(){
  var repository= [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function addListItem(repository){
  var button = document.createElement("button");
  var li = document.createElement("li");
  button.innerText = repository.name;
  button.classList.add("my-button");
  li.appendChild(button);
  ul.appendChild(li);
  button.addEventListener("click",function(event){
  showDetails(repository.name);
    });
  }

  function showDetails(repository){
  console.log(repository);
    }
  function add(pokemon) {
  repository.push(pokemon);
    }
  function getAll() {
  return repository;
    }


  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
        name: item.name,
        detailsUrl: item.url
    };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  });
}

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }



    return {
    add: add,
    getAll: getAll,
    search:search,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList(pokemon).then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
   addListItem(pokemon);
     });
    });

function showDetails(item) {
pokemonRepository.loadDetails(item).then(function() {
console.log(item);
 });
}



var ul = document.querySelector(".pokemon-list");

pokemonRepository.getAll().forEach(function(repository){
pokemonRepository.addListItem(repository);
 });

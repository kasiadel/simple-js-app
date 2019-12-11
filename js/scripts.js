var pokemonRepository = function(){

  var repository= [
    {
      name:"Ivysaur",
      weight:13,
      height:1,
      type:["grass","poison"]
    },
    {
      name:"Charmander",
      weight:8.5,
      height:0.6,
      type:["fire"]
    },
    {
      name:"Squirtle",
      weight:9,
      height:0.5,
      type:["water"]
    },
    {
      name:"Caterpie",
      weight:2.9,
      height:0.3,
      type:["bug"]
    },
    {
      name:"Raticate",
      weight:18.5,
      height:0.7,
      type:["normal"]
    }
  ];





    function addListItem(pokemon){
      var button = document.createElement("button");
      var li = document.createElement("li");
      button.innerText = repository.name;
      button.classList.add("my-button");
      li.appendChild(button);
      ul.appendChild(li);
      };

      function add(pokemon) {
         repository.push(pokemon);
      }
       function getAll() {
         return repository;
       }

    return {
        add: add,
        getAll: getAll,
       addListItem: addListItem

};
();
//console.log(pokemonRepository.getAll());
//pokemonRepository.add({ name: "Pidgeot" });
var ul = document.querySelector(".pokemon-list");


pokemonRepository.getAll().forEach(function(repository){
  addListItem
});
}

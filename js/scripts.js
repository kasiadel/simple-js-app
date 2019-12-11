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



   function add(pokemon) {
      repository.push(pokemon);
  }
    function getAll() {
      return repository;
    }
    return {
        add: add,
        getAll: getAll,
      //  addListItem: addListItem
  };
  //function addListItem(pokemon){




}();
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pidgeot" });
var ul = document.querySelector(".pokemonList");
var button = document.createElement("button");
var li = document.createElement("li");
button.innerText = "Ivysaur";
li.appendChild(button);
ul.appendChild(li);
button.classList.add("myButton");



//pokemonRepository.addListItem(pokemon).forEach(function(repository){
//return(repository.name);
//});

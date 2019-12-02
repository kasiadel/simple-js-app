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
        getAll: getAll
  };
}();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pidgeot" });



pokemonRepository.getAll().forEach(function(repository){
document.write((repository.name) + "</br>");
});

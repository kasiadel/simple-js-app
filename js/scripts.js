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

    function addListItem(repository){
      var button = document.createElement("button");
      var li = document.createElement("li");
      button.innerText = repository.name;
      button.classList.add("my-button");
      li.appendChild(button);
      ul.appendChild(li);
      button.addEventListener("click",showDetails(repository.name));
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

    return {
        add: add,
        getAll: getAll,
       addListItem: addListItem

};
}();
//console.log(pokemonRepository.getAll());
//pokemonRepository.add({ name: "Pidgeot" });
var ul = document.querySelector(".pokemon-list");

pokemonRepository.getAll().forEach(function(repository){
  pokemonRepository.addListItem(repository);
});

//var button = document.querySelectorAll("button");
//for(var i=0; i< button.length; i++){
//button[i].addEventListener("click",
//function(repository){
//console.log(repository.name);
//});


//==== CHANGE  OF POKEMON  NAME COLOR ONCE CLICKED===

/*var button = document.querySelectorAll("button");
for(var i=0; i< button.length; i++){
button[i].addEventListener("click",
function(){
this.style.color = "green";
});
}*/

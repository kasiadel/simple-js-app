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




 /*for(i=0; i< repository.length;
     i++)
  {
  if (repository[i].height < 0.8)
    {
      document.write("<p>" + repository[i].name + "  " + "(" + "Height" + ":" + repository[i].height +")" + "</p>");
  }
  else
  {
    document.write("<p>"+ repository[i].name + "  " +  "(" + "Height" + ":"  + repository[i].height +")" + " " + "-" + "Wow, that's big!"+"</p>")
  }
}*/

repository.forEach(function(pokemon){
document.write(pokemon.name +"</br>");
});

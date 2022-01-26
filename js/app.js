var gandalfAudio = document.getElementById("gandalf");
var vitasAudio = document.getElementById("vitas");

$(document).ready(function(){
  var etapa = 0;
  $("#counter").html("Carregando contador...");
  update();
  var easter_egg = new Konami(function() {   
    $("body").attr("id","vitas");
    gandalfAudio.pause();
    vitasAudio.play();
  });
});

function update(){
  $("#counter").html(countdown( new Date(2022, 2, 15, 12, 00, 0) ).toString());
  setTimeout(function(){ update(); }, 1000);
}

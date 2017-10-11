$(document).ready(function(){
  $("#counter").html("Carregando contador...");
  update();
});

function update(){
  $("#counter").html(countdown( new Date(2017, 9, 13, 23, 0, 0) ).toString());
  setTimeout(function(){ update(); }, 1000);
}

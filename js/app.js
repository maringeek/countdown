$(document).ready(function(){
  $("#counter").html("Carregando contador...");
  update();
});

function update(){
  $("#counter").html(countdown( new Date(2018, 0, 30, 12, 00, 0) ).toString());
  setTimeout(function(){ update(); }, 1000);
}

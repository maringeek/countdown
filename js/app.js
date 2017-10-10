$(document).ready(function(){
  $("#counter").html("Carregando contador...");
  $("#counter").html(countdown( new Date(2017, 10, 14) ).toString());
});

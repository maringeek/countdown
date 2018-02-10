var gandalfAudio = document.getElementById("gandalf");
var vitasAudio = document.getElementById("vitas");

$(document).ready(function(){
  var etapa = 0;
  $("#counter").html("Carregando contador...");
  update();
  $(document).keypress(function(k){
    switch(etapa){
      case 0:
      case 1:
        if(k.witch == 38){
          console.log("Etapa: "+etapa++);
        }
        break;
      case 2:
      case 3:
        if(k.witch == 40){
          console.log("Etapa: "+etapa++);
        }else{
          etapa = 0;
        }
        break;
      case 4:
      case 6:
        if(k.witch == 37){
          console.log("Etapa: "+etapa++);
        }else{
          etapa = 0;
        }
        break;
      case 5:
      case 7:
        if(k.witch == 39){
          console.log("Etapa: "+etapa++);
        }else{
          etapa = 0;
        }
        break;
      case 8:
        if(k.witch == 66){
          console.log("Etapa: "+etapa++);
        }else{
          etapa = 0;
        }
        break;
      case 9:
        if(k.witch == 65){
          console.log("Etapa: "+etapa++);
          deuOCodigo();
        }else{
          etapa = 0;
        }
        break;
    }
  });
});

function deuOCodigo(){
  alert(k.witch);
  if(k.witch == 18){
    $("body").attr("id","vitas");
    gandalfAudio.stop();
    vitasAudio.play();
  }
}

function update(){
  $("#counter").html(countdown( new Date(2018, 4, 30, 12, 00, 0) ).toString());
  setTimeout(function(){ update(); }, 1000);
}

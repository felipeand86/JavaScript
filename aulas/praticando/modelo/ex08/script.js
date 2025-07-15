function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();

  var hora = 15;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora => 0 && hora < 12) {
    //Bom dia
    img.src = "manhae2.jpg";
    document.body.style.background = "#c7b898ff";
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = "fototarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    //Boa noite
    img.src = "fotonoite.jpg";
  }
}

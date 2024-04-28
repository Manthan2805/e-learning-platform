function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;


    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        "<body> <div class='img''>Hey! You're doing good!</div>" +
        html.value +
        "</body>" +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }

  compile();



$('#labelSettings').on('click', function() {
  $('#levelsWrapper').hide();
  $('#settings .tooltip').toggle();
  $('#instructions .tooltip').remove();
})

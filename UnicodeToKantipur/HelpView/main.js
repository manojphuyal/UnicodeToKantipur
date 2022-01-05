
function inputFieldFunction(){
  var valTxt = $('#inputBox').val();
  var a = valTxt.trim();
  debugger;
if(valTxt.endsWith(" ")){

  $.ajax({
      type: 'POST',
      url: 'https://localhost:44300/api/UnicodeToKantipur/ConvertEnglishToUnicode?text='+valTxt,
      dataType: "json",
      crossDomain: true,
      success: function (msg) {
        console.log(msg.unicodeOptionFirst);
          $('#inputBox').val(msg.unicodeOptionFirst);

      },
      error: function (request, status, error) {

          alert(error);
      }
  });
}
}
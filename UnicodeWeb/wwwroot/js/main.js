
function inputFieldFunction() {
    var valTxt = $('#inputBox').val();
    var timer = null;
    clearTimeout(timer);
    timer = setTimeout(doStuff(valTxt), 30)

}


function doStuff(data) {
    var sliceData = data.trim().split(" ").pop();
    if (data.endsWith(" ")) {
        $.ajax({
            type: 'POST',
            url: 'https://unicodeapi2.kanchibazaar.com/GetUnicode?text=' + sliceData,
            dataType: "json",
            crossDomain: true,
            success: function (msg) {
                //debugger;
                var a =  msg.unicodeOptionFirst
                var d = data.replace(sliceData, msg.unicodeOptionFirst);

                if (a=d) {
                    $('#inputBox').val(a);
                } else {
                    $('#inputBox').val(d );
                }

            },
            error: function (request, status, error) {

                //console.log(request);
                //console.log(status);
                //console.log(error);
            }
        });
    }
}
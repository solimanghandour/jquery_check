
//this is js//

// function check(){

//     if(document.getElementById("Password1").value==document.getElementById("Password2").value){
//         document.getElementById("error").style.display=none
//     }
// }

$('#Password2').keyup(function check(){

    if($('#Password1').val()==$('#Password2').val()){
        $('#error').hide()
    }
})
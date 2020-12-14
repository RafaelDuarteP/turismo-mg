$(document).ready(function(){
    $('#btn_email').on('click', function(event){
        // event.stopImmediatePropagation();
        event.preventDefault();
        sendEmail();
    });
    
    function sendEmail(){
        body = $('#form').serialize();
        $.ajax({
            url: "/",
            type: 'POST',
            data: body
          }).fail(function(error) {
            window.alert("Algo deu errado, favor conferir se todos os campos foram preenchidos corretamente.");
          }).then( function (success){
            window.alert(success)
            location.reload()
          });
    }
})

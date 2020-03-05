$(document).ready(function() {
    $('#invia').click(function(){
        var messaggioInput = $('#insert-message').val();
        $('#insert-message').val('');
        var messaggio = $('.template .message-sent-1').clone();
        messaggio.children('.text-message').text(messaggioInput);
        messaggio.children('.timetable').text('16:40');

        //Inseriamo nell'html il messaggio
        $('.messages-sent').append(messaggio);




    });




});

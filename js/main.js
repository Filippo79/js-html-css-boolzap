$(document).ready(function() {
        $('.icons-text-right i').click(function(){
            var messaggioInput = $('.insert-message').val();
            if (messaggioInput.trim().length > 0) {
            $('.insert-message').val('');
            var messaggio = $('.template .message-sent-1').clone();
            messaggio.children('.text-message').text(messaggioInput);
            messaggio.children('.timetable').text('16:40');
            $('.messages-sent').append(messaggio);


            setTimeout(function() {
                var creaMessaggio = $('.template .message-received-1').clone();
                creaMessaggio.children('.text-message').text('ok');
                creaMessaggio.children('.timetable').text('16:40');
                $('.messages-received').append(creaMessaggio);

            }, 1000);

            }
        });




        function scroll() {
          var pixelScroll = $('.message-sent-1').height();
          $('.message-sent-1').scrollTop(pixelScroll);
     }





    });

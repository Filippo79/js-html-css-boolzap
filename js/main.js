$(document).ready(function() {
        $('.icons-text-right i').click(function(){
            var messaggioInput = $('.insert-message').val();
            if (messaggioInput.trim().length > 0) {
                $('.insert-message').val('');
                var messaggio = $('.template .message-sent-1').clone();
                messaggio.children('.text-message').text(messaggioInput);
                messaggio.children('.timetable').text('16:40');
                $('.message').append(messaggio);


                setTimeout(function() {
                    var creaMessaggio = $('.template .message-received-1').clone();
                    creaMessaggio.children('.text-message').text('ok');
                    creaMessaggio.children('.timetable').text('16:40');
                    $('.message').append(creaMessaggio);

                }, 1000);
            }
        });
        $('.search-contact').keyup(function(event){
            var ricercaContatto = $(this).val().toLowerCase();
            //console.log(ricercaContatto);
            $('.name h4').each(function() {
                var contatto = $(this).find('.name h4').text().toLowerCase();
                if(contatto.includes(ricercaContatto)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

        });





        function scroll() {
          var messagesScroll = $('.message').height();
          $('.message').scrollTop(messagesScroll);
     }





    });

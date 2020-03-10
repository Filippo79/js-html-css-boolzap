$(document).ready(function() {
    $('.icons-text-right').focus(function(){
        $('.icons-text-right i').toggleClass('fas fa-microphone fas fa-paper-plane');
    }).blur(function(){
    });
        $('.icons-text-right i').click(function(){
            var messaggioInput = $('.insert-message').val();
            if (messaggioInput.trim().length > 0) {
                $('.insert-message').val('');
                var messaggio = $('.template .message-sent-1').clone();
                messaggio.children('.text-message').text(messaggioInput);
                messaggio.children('.timetable').text('16:40');
                $('.message.active').append(messaggio);


                setTimeout(function() {
                    var creaMessaggio = $('.template .message-received-1').clone();
                    creaMessaggio.children('.text-message').text('ok');
                    creaMessaggio.children('.timetable').text('16:40');
                    $('.message.active').append(creaMessaggio);

                }, 1000);
            }
        });
        $('.search-contact').keyup(function(event){
            var ricercaContatto = $(this).val().toLowerCase();
            //console.log(ricercaContatto);
            $('.single-contact').each(function() {
                var contatto = $(this).find('.name h4').text().toLowerCase();
                if(contatto.includes(ricercaContatto)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

        });
        //Secondo metodo ricerca in contatti
        /*$('.search-contact').keyup(function(event){
            var ricercaContatto = $(this).val().toLowerCase();
            //console.log(ricercaContatto);
            $('.name h4').each(function() {
                 if($(this).text().toLowerCase().includes(ricercaContatto)){
                     $(this).parentsUntil('.contacts').show();
                }else {
                     $(this).parentsUntil('.contacts').hide();
                }
            });
        });*/

        $('.single-contact').click(function(){
            var nome = $(this).text();
            //console.log(nome);
            var contatto =$(this).data('numContact');
            //console.log(contatto);
                $('.message').each(function(){
                    if(contatto == $(this).data('numChat')){

                        $('.message').hide().toggleClass('active');
                        $(this).show();

                    }
                });
        })









        function scroll() {
          var messagesScroll = $('.message').height();
          $('.message').scrollTop(messagesScroll);
     }





    });

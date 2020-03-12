$(document).ready(function() {
    $('.icons-text-right').focus(function(){
        $('.icons-text-right i').toggleClass('fas fa-microphone fas fa-paper-plane');
    }).blur(function(){
    });

    $('.icons-text-right i').click(inviaMessaggio);
    $('.search-contact').keyup(ricercaContatto);

    $('.single-contact').click(function(){
        var nome = $(this).text();
        //console.log(nome);
        var contatto =$(this).data('numContact');
        //console.log(contatto);
        $('.message').each(function(){
            if(contatto == $(this).data('numChat')){
                $('.message').hide();
                $(this).show().toggleClass('active');
            }
        });
    })
});

//Funzione che permette di scrollare automaticamente la chat
function scroll() {
    var messagesScroll = $('.message').height();
    $('.message').scrollTop(messagesScroll);
}

//Evento che crea il messaggio che si è scritto
function inviaMessaggio(){
    var messaggioInput = $('.insert-message').val();
    if (messaggioInput.trim().length > 0) {
        $('.insert-message').val('');
        /*var messaggio = $('.template .message-sent-1').clone();
        messaggio.children('.text-message').text(messaggioInput);
        messaggio.children('.timetable').text('16:40');
        $('.message.active').append(messaggio);*/
        //-----------------------Handlebars------------------------------
        var source = $('#message-template-sent').html();// clono il template messaggio
        var template = Handlebars.compile(source); // do in pasto ad Handlebars il template clonato
        var datiMessaggio = {
            testoMessaggio: messaggioInput,
            orario: '13:00'
        };

        var templateMessaggio = template(datiMessaggio);
        $('.message.active').append(templateMessaggio);

//-----------------------Fine Handlebars--------------------------------------
        setTimeout(function() {
            var creaMessaggio = $('.entry-template .message-received-1').clone();
            creaMessaggio.children('.text-message').text('ok');
            creaMessaggio.children('.timetable').text('16:40');
            $('.message.active').append(creaMessaggio);

        }, 1000);
    }
}

function ricercaContatto(event){
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

}

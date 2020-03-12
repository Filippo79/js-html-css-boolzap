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
        var datiMessaggio = {                    // Assemblo in un oggetto il contenuto del messaggio
            testoMessaggio: messaggioInput,      // richiamo la funzione 'inviaMessaggio'
            orario: '13:00'                       //scrivo l'orario da visualizzarenel messaggio
        };

        var templateMessaggio = template(datiMessaggio);// Popolo il template di handlebars con il contenuto del messaggio
        $('.message.active').append(templateMessaggio);// faccio l'append del template così popolato

        var source = $('#message-template-received').html();// clono il template messaggio
        var template = Handlebars.compile(source);// do in pasto ad Handlebars il template clonato
        var datiMessaggio = {                      // Assemblo in un oggetto il contenuto del messaggio
            testoMessaggio: 'ok ben fatto',        // scrivo il testo da visualizzarenel messaggio
            orario: '13:35'                        //scrivo l'orario da visualizzarenel messaggio
        };
        var templateMessaggio = template(datiMessaggio);// Popolo il template di handlebars con il contenuto del messaggio
        $('.message.active').append(templateMessaggio);// faccio l'append del template così popolato


//-----------------Non ci sono riuscito a far partire il messaggio dopo 1 secondo.
//-----------------------Fine Handlebars--------------------------------------
        /*setTimeout(function() {
            var creaMessaggio = $('.entry-template .message-received-1').clone();
            creaMessaggio.children('.text-message').text('ok');
            creaMessaggio.children('.timetable').text('16:40');
            $('.message.active').append(creaMessaggio);

        }, 1000);*/
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

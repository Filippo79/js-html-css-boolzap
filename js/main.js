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
        //-------------------Senza Handlebars-----------------------------
        /*var messaggio = $('.template .message-sent-1').clone();
        messaggio.children('.text-message').text(messaggioInput);
        messaggio.children('.timetable').text('16:40');
        $('.message.active').append(messaggio);*/
        //------------------Con Handlebars------------------------------
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

        /*setTimeout(function() {
            var creaMessaggio = $('.entry-template .message-received-1').clone();
            creaMessaggio.children('.text-message').text('ok');
            creaMessaggio.children('.timetable').text('16:40');
            $('.message.active').append(creaMessaggio);

        }, 1000);*/
    }
}
//Funzione ricerca Contatto
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
//------------------Con Handlebars------------------------------
var source = $('#single-contact-template').html();// clono il template contatto
var template = Handlebars.compile(source);// do in pasto ad Handlebars il template clonato
var datiContatto = [

        {
            immagine: 'laura-vomitina.png',
            numero: '0',
            nome: 'Laura',
            testoMessaggio: 'ciao',
            orario: '18:50'
        },

        {
            immagine: 'claudio-bianco.png',
            numero:'1',
            nome: 'Claudio',
            testoMessaggio: 'Ma dove seiiiiii?',
            orario: '18:50'
        },


        {
            immagine: 'gigione.png',
            numero: '2',
            nome: 'Gigione',
            testoMessaggio: 'Mi chiamano Gigi la trottola',
            orario: '18:50'
        },

        {
            immagine: 'giorgio-spriau.png',
            numero: '3',
            nome: 'Giorgio',
            testoMessaggio: 'Mi hai spaventato',
            orario: '18:50'
        },

        {
            immagine: 'polifemo.png',
            numero: '4',
            nome: 'Polifemo',
            testoMessaggio: 'Mi accompagni al P.soccorso?',
            orario: '18:50'
        },

        {
            immagine: 'mirko-cespuglio.png',
            numero: '5',
            nome: 'Mirko',
            testoMessaggio: 'Ciaooooooooo',
            orario: '18:50'
        },

        {
            immagine: 'sandro.png',
            numero: '6',
            nome: 'Don.Sandro',
            testoMessaggio: 'Quando torni in chiesa?',
            orario: '17:50'
        }

];
for (var i = 0; i < datiContatto.length; i++) {
    var templateContatto = template(datiContatto[i]);
    //console.log(datiContatto[2]);
    $('.contacts').append(templateContatto);
}

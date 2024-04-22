$(document).ready(function(){

    $('#botao-iniciar').click(function(){
        $('.container-animacao').slideDown(2000);
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        const nomenovatarefa = $('#tarefa').val();

        const novatarefa = $('<li></li>');
        novatarefa.append('<input type="checkbox"> ');
        novatarefa.append(nomenovatarefa);

        $('ul').append(novatarefa);

        $('#tarefa').val('');
    });

    $('#botao-cancelar').click(function(){

        if(confirm("Tem certeza que quer excluir as tarefas concluídas?")){
            $('input[type="checkbox"]:checked').each(function(){
                $(this).closest('li').remove();
            });
        }
    });

    $('ul').on('click', 'li', function(ev){
        var checkboxclique = $(this).find('input[type="checkbox"]');

        if(ev.target === checkboxclique[0]){
            return;
        }

        checkboxclique.prop('checked', !checkboxclique.prop('checked'))
        $(this).closest('li').toggleClass('tarefaconcluida');
    });

    $('ul').on('change', 'input[type="checkbox"]', function(){
        $(this).closest('li').toggleClass('tarefaconcluida');
    });

});

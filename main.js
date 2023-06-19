$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $("#formTarefa").submit(function(e) {
        e.preventDefault();

        var tarefa = $("#tarefaInput").val();

        var listItem = $("<li>").text(tarefa);
        $("#listaTarefas").append(listItem);
        $("#tarefaInput").val("");
        
    });

    $("#listaTarefas").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
})
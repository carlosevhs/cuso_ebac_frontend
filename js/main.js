$(document).ready(function(){
    $('#inputtelefone').mask('(00) 00000-0000',{
        placeholder: '(DDD) 00000-0000'
    });
    $('#inputcpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });
    $('#inputcep').mask('00.000-000',{
        placeholder: '00.000-000'
    });

    $('form').validate({
        rules: {
            inputnome: {
                required: true
            },
            inputemail: {
                required: true
            },
            inputtelefone: {
                required: true
            },
            inputcpf: {
                required: true
            },
            inputendereco: {
                required: true
            },
            cep: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            inputnome: 'Informe seu nome.',
            inputemail: 'Informe um e-mail válido',
            inputtelefone: 'Informe seu telefone',
            inputcpf: 'Informe seu CPF',
            inputendereco: 'Informe seu endereço',
            cep: 'Informe seu CEP',
            mensagem: 'Por favor, fale mais sobre você para aumentar suas chances de ser contratado'
        },
        submitHandler: function(form){
            alert('Dados enviados com sucesso!')
            $('form')[0].reset();
        }
    })
})
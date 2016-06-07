$(function(){
    $('form[name=login]').submit(function(){
        var email = $('input[name=email]').val();
        var senha = $('input[name=senha]').val();
        
        if(email == 'teste@teste.com' && senha == '123'){
            $('.page').addClass('hidden');
            $('.overview').removeClass('hidden');
        }else{
            myApp.alert('Email ou Senha incorretos','Informação');
        }
        
        return false;    
    });
    
    $('#logout').on('click', function(){
        $('.page').addClass('hidden');
        $('.login-out').removeClass('hidden');
        myApp.closePanel();
    });
});
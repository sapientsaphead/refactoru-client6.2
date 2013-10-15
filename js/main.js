$(document).ready(function() {
    
	//EVENT HANDLERS

    $('.display-profile').on('click', 'p', function(){
    	$(this).addClass("hide");

        $(this).closest('.dataEl').find('.inline-editor').removeClass("hide");
    	
    });

    $('.display-profile').on('click', '.save', function(){
        $(this).closest('.dataEl').find('.inline-editor').addClass("hide");
        var newinput = $(this).closest('.dataEl').find('input').val();
        $(this).closest('.dataEl').find('p').replaceWith(newinput);
    });


   	

}); //end of document ready function
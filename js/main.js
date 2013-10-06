$(document).ready(function() {


	//HTML RENDERING
    var insertProfile = function(){
    	Boolean(myName) === false ? "" : $('.display-profile').append('<div class="braindead"><p class="pname">'+ myName + '</p></div><div class="braindead"><p class="pbio">' 
    		+ myBio + '</p></div><div class="braindead"><p class="pfavebooks">' + myFaveBooks + '</p></div><div class="braindead"><p class="pfavejslibs">' + myFaveJSLibs + '</p></div>');
   	}

	//EVENT HANDLERS


    $('.add-profile').on('click', function() {
    	$('.profile-form').toggle(function (){
    		$('.profile-form').addClass("active");
    		$('.profile-form').removeClass("active");
    	}); 
    });

    var myName;
    var myBio;
    var myFaveBooks;
    var myFaveJSLibs;

    $('.profile-page').on('click', '.submit', function(){

    	myName = $('#name').val();
    	myBio = $('#bio').val();
    	myFaveBooks = $('#fave-books').val();
    	myFaveJSLibs = $('#fave-jslibs').val();

    	$('.profile-form').toggle(function (){
    		$('.profile-form').removeClass("active");
    	}); 
    	
    	insertProfile();
    });

    $('.profile-page').on('click', '.braindead', function(){
    	$('p',this).addClass("offthepage");
    	$('.profile-page').on('click', 'p', function(){
	    	$('<div class="inline-editor"><input type="text" class="form-control"><button type"button" class="save btn btn-block btn-primary">✓</button></div>').appendTo($(this, '.braindead'));
	    });
    });
   	

}); //end of document ready function